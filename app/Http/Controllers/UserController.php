<?php

namespace App\Http\Controllers;

use App\Exports\UsersExport;
use App\Models\Role;
use App\Models\Setting;
use App\Models\User;
use App\Models\role_user;
use App\Models\product_warehouse;
use App\utils\helpers;
use App\Models\Client;
use Illuminate\Support\Facades\Validator;
use Illuminate\Validation\Rule;
use File;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Hash;
use Intervention\Image\ImageManagerStatic as Image;
use Maatwebsite\Excel\Facades\Excel;

class UserController extends BaseController
{



    

    //------------- GET ALL USERS---------\\

    public function index(request $request)
    {

        $this->authorizeForUser($request->user('api'), 'view', User::class);
        // How many items do you want to display.
        $perPage = $request->limit;
        $pageStart = \Request::get('page', 1);
        // Start displaying items from this number;
        $offSet = ($pageStart * $perPage) - $perPage;
        $order = $request->SortField;
        $dir = $request->SortType;
        $helpers = new helpers();
        // Filter fields With Params to retrieve
        $columns = array(0 => 'username', 1 => 'statut', 2 => 'phone', 3 => 'email');
        $param = array(0 => 'like', 1 => '=', 2 => 'like', 3 => 'like');
        $data = array();

        $Role = Auth::user()->roles()->first();
        $ShowRecord = Role::findOrFail($Role->id)->inRole('record_view');


        
  

        if( $helpers->IsMerchant()){
        //    $WarehouseID = $helpers->WarehouseID();

           $shop_id = $helpers->ShopID();

           $users = User::where(function ($query) use ($ShowRecord) {
            if (!$ShowRecord) {
                return $query->where('id', '=', Auth::user()->id);
            }
        })->where('shop_id' , $shop_id );    

        }else{

            $users = User::where(function ($query) use ($ShowRecord) {
                if (!$ShowRecord) {
                    return $query->where('id', '=', Auth::user()->id);
                }
            });


    
        }





        //Multiple Filter
        $Filtred = $helpers->filter($users, $columns, $param, $request)
        // Search With Multiple Param
            ->where(function ($query) use ($request) {
                return $query->when($request->filled('search'), function ($query) use ($request) {
                    return $query->where('username', 'LIKE', "%{$request->search}%")
                        ->orWhere('firstname', 'LIKE', "%{$request->search}%")
                        ->orWhere('lastname', 'LIKE', "%{$request->search}%")
                        ->orWhere('email', 'LIKE', "%{$request->search}%")
                        ->orWhere('phone', 'LIKE', "%{$request->search}%");
                });
            });
        $totalRows = $Filtred->count();
        $users = $Filtred->offset($offSet)
            ->limit($perPage)
            ->orderBy($order, $dir)
            ->get();

        $roles = Role::where('deleted_at', null)->get(['id', 'name']);

        return response()->json([
            'users' => $users,
            'roles' => $roles,
            'totalRows' => $totalRows,
        ]);
    }

    //------------- GET USER Auth ---------\\

    public function GetUserAuth(Request $request)
    {
        $helpers = new helpers();
        $user['avatar'] = Auth::user()->avatar;
        $user['username'] = Auth::user()->username;
        $user['currency'] = $helpers->Get_Currency();
        $user['logo'] = Setting::first()->logo;
        $user['default_language'] = Setting::first()->default_language;
        $user['footer'] = Setting::first()->footer;
        $user['developed_by'] = Setting::first()->developed_by;
        $permissions = Auth::user()->roles()->first()->permissions->pluck('name');
        $products_alerts = product_warehouse::join('products', 'product_warehouse.product_id', '=', 'products.id')
            ->whereRaw('qte <= stock_alert')
            ->where('product_warehouse.deleted_at', null)
            ->count();
        $role = Auth::user()->roles()->first();
        if($role->pivot->role_id == 2 ){
          $type = ["merchant"];
        }else{
            $type = ["owner"];
        }
        return response()->json([
            'success' => true,
            'user' => $user,
            'notifs' => $products_alerts,
            'permissions' => $permissions,
            'type'=>  $type
        ]);
    }

    //------------- GET USER ROLES ---------\\

    public function GetUserRole(Request $request)
    {

        $roles = Auth::user()->roles()->with('permissions')->first();

        $data = [];
        if ($roles) {
            foreach ($roles->permissions as $permission) {
                $data[] = $permission->name;

            }
            return response()->json(['success' => true, 'data' => $data]);
        }

    }

    //------------- STORE NEW USER ---------\\

    public function store(Request $request)
    {
        $this->authorizeForUser($request->user('api'), 'create', User::class);
        $this->validate($request, [
            'email' => 'required|unique:users',
        ], [
            'email.unique' => 'This Email already taken.',
        ]);
        \DB::transaction(function () use ($request) {
            if ($request->hasFile('avatar')) {

                $image = $request->file('avatar');
                $filename = rand(11111111, 99999999) . $image->getClientOriginalName();

                $image_resize = Image::make($image->getRealPath());
                $image_resize->resize(128, 128);
                $image_resize->save(public_path('/images/avatar/' . $filename));

            } else {
                $filename = 'no_avatar.png';
            }



            
            $helpers = new helpers();
            if( $helpers->IsMerchant()){   
               $shop_id =   $helpers->ShopID();
               $role = 3;
            }else{
               $shop_id = 0;
               $role = $request['role'];
            }

            $User = new User;
            $User->firstname = $request['firstname'];
            $User->lastname  = $request['lastname'];
            $User->username  = $request['username'];
            $User->email     = $request['email'];
            $User->phone     = $request['phone'];
            $User->password  = Hash::make($request['password']);
            $User->avatar    = $filename;
            $User->role_id   = $request['role'];
            $User->shop_id   =  $shop_id;
            $User->save();

         
           $Client = new Client;
           $Client->name = $User->firstname.' '.$User->lastname;
           $Client->code = $User->id;
           $Client->adresse = "";
           $Client->email =  $User->email;
           $Client->phone =   $User->phone;
           $Client->country =   "";
           $Client->city =   "";
           $Client->shop_id =   $shop_id;
           $Client->save();



            $role_user = new role_user;
            $role_user->user_id = $User->id;
            $role_user->role_id = $role;
            $role_user->save();
    
        }, 10);

        return response()->json(['success' => true]);
    }

    //------------ function show -----------\\

    public function show($id){
        //
        
        }

    //------------- UPDATE  USER ---------\\

    public function update(Request $request, $id)
    {
        $this->authorizeForUser($request->user('api'), 'update', User::class);
        
        $this->validate($request, [
            'email' => 'required|email|unique:users',
            'email' => Rule::unique('users')->ignore($id),
        ], [
            'email.unique' => 'This Email already taken.',
        ]);

        \DB::transaction(function () use ($id ,$request) {
            $user = User::findOrFail($id);
            $current = $user->password;

            if ($request->NewPassword != 'null') {
                if ($request->NewPassword != $current) {
                    $pass = Hash::make($request->NewPassword);
                } else {
                    $pass = $user->password;
                }

            } else {
                $pass = $user->password;
            }

            $currentAvatar = $user->avatar;
            if ($request->avatar != $currentAvatar) {

                $image = $request->file('avatar');
                $path = public_path() . '/images/avatar';
                $filename = rand(11111111, 99999999) . $image->getClientOriginalName();

                $image_resize = Image::make($image->getRealPath());
                $image_resize->resize(128, 128);
                $image_resize->save(public_path('/images/avatar/' . $filename));

                $userPhoto = $path . '/' . $currentAvatar;
                if (file_exists($userPhoto)) {
                    if ($user->avatar != 'no_avatar.png') {
                        @unlink($userPhoto);
                    }
                }
            } else {
                $filename = $currentAvatar;
            }

            $helpers = new helpers();
            if( $helpers->IsMerchant()){   
               $shop_id =   $helpers->ShopID();
          
            }else{
               $shop_id = 0;
          
            }


   

            User::whereId($id)->update([
                'firstname' => $request['firstname'],
                'lastname' => $request['lastname'],
                'username' => $request['username'],
                'email' => $request['email'],
                'phone' => $request['phone'],
                'password' => $pass,
                'avatar' => $filename,
                'statut' => $request['statut'],
                'role_id' => $request['role'],
            ]);

 
            
            Client::where('shop_id' , $shop_id )->where('code' ,$id )->update([
                'name' => $request['firstname'].' '.$request['lastname'],
                'code' => $id,
                'adresse' => "",
                'email' => $request['email'],
                'phone' => $request['phone'],
                'country' =>  "",
                'city' =>  "",
                'shop_id' =>  $shop_id,
            ]);

            
            if($helpers->IsMerchant()){   

                // $shop_id =   $helpers->ShopID();

                // role_user::where('user_id' , $id)->update([
                //     'user_id' => $id,
                //     'role_id' => $request['role'],
                // ]);
           
             }else{

                role_user::where('user_id' , $id)->update([
                    'user_id' => $id,
                    'role_id' => $request['role'],
                ]);
           
             }





        }, 10);
        
        return response()->json(['success' => true]);

    }

    //------------- Export USERS to EXCEL ---------\\

    public function exportExcel(Request $request)
    {
        $this->authorizeForUser($request->user('api'), 'view', User::class);

        return Excel::download(new UsersExport, 'Users.xlsx');
    }

    //------------- UPDATE PROFILE ---------\\

    public function updateProfile(Request $request)
    {
        $id = Auth::user()->id;
        $user = User::findOrFail($id);
        $current = $user->password;

        if ($request->NewPassword != 'undefined') {
            if ($request->NewPassword != $current) {
                $pass = Hash::make($request->NewPassword);
            } else {
                $pass = $user->password;
            }

        } else {
            $pass = $user->password;
        }

        $currentAvatar = $user->avatar;
        if ($request->avatar != $currentAvatar) {

            $image = $request->file('avatar');
            $path = public_path() . '/images/avatar';
            $filename = rand(11111111, 99999999) . $image->getClientOriginalName();

            $image_resize = Image::make($image->getRealPath());
            $image_resize->resize(128, 128);
            $image_resize->save(public_path('/images/avatar/' . $filename));

            $userPhoto = $path . '/' . $currentAvatar;

            if (file_exists($userPhoto)) {
                if ($user->avatar != 'no_avatar.png') {
                    @unlink($userPhoto);
                }
            }
        } else {
            $filename = $currentAvatar;
        }

        User::whereId($id)->update([
            'firstname' => $request['firstname'],
            'lastname' => $request['lastname'],
            'username' => $request['username'],
            'email' => $request['email'],
            'phone' => $request['phone'],
            'password' => $pass,
            'avatar' => $filename,

        ]);

        return response()->json(['avatar' => $filename, 'user' => $request['username']]);

    }

    //----------- IsActivated (Update Statut User) -------\\

    public function IsActivated(request $request, $id)
    {

        $this->authorizeForUser($request->user('api'), 'update', User::class);

        $user = Auth::user();
        if ($request['id'] !== $user->id) {
            User::whereId($id)->update([
                'statut' => $request['statut'],
            ]);
            return response()->json([
                'success' => true,
            ]);
        } else {
            return response()->json([
                'success' => false,
            ]);
        }
    }

    public function GetPermissions()
    {
        $roles = Auth::user()->roles()->with('permissions')->first();
        $data = [];
        if ($roles) {
            foreach ($roles->permissions as $permission) {
                $item[$permission->name]['slug'] = $permission->name;
                $item[$permission->name]['id'] = $permission->id;

            }
            $data[] = $item;
        }
        return $data[0];

    }

    //------------- GET USER Auth ---------\\

    public function GetInfoProfile(Request $request)
    {
        $data = Auth::user();
        return response()->json(['success' => true, 'user' => $data]);
    }

}
