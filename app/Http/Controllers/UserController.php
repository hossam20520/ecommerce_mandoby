<?php

namespace App\Http\Controllers;
use Carbon\Carbon;
use App\Exports\UsersExport;
use App\Models\Role;
use App\Models\Setting;
use App\Models\User;
use App\Models\role_user;
use App\Models\Area;
use App\Models\Task;

use App\Models\product_warehouse;
use App\utils\helpers;
use Illuminate\Support\Facades\Validator;
use Illuminate\Validation\Rule;
use File;
use DB;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Hash;
use Illuminate\Validation\ValidationException;
use Intervention\Image\ImageManagerStatic as Image;
use Maatwebsite\Excel\Facades\Excel;

class UserController extends BaseController
{

    //------------- GET ALL USERS---------\\
    // sales_rep
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

        $users = User::where(function ($query) use ($ShowRecord) {
            if (!$ShowRecord) {
                return $query->where('id', '=', Auth::user()->id);
            }
        })->whereNotIn('role_id', [2, 3]);

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
    


    public function getMandobRep(request $request)
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

        $users = User::whereIn('role_id' ,  [3])->where('deleted_at' , '=' , null)->where(function ($query) use ($ShowRecord) {
            if (!$ShowRecord) {
                return $query->where('id', '=', Auth::user()->id);
            }
        });

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


    


    public function GetAchivments(request $request)
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

        $users = User::whereIn('role_id' ,  [ 4 ])->where('deleted_at' , '=' , null)->where(function ($query) use ($ShowRecord) {
            if (!$ShowRecord) {
                return $query->where('id', '=', Auth::user()->id);
            }
        });

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

  
           $data = array();
        foreach ($users as   $sales) {

                       
            $item['done_num']   = Task::where('deleted_at' , '=' , null)->where('user_id' , $sales->id)->where('status' , 'done')->count();
            $item['pending_num']   = Task::where('deleted_at' , '=' , null)->where('user_id' , $sales->id)->where('status' , 'pending')->count();
            $item['all']   = Task::where('deleted_at' , '=' , null)->where('user_id' , $sales->id)->count();
           
      
      
            $item['id'] = $sales->id;
            $item['firstname'] = $sales->firstname;
            $item['lastname'] = $sales->lastname;
            $item['email'] = $sales->email;
            $item['phone'] = $sales->phone;
            $data[] = $item;
           
        }


        return response()->json([
            'users' =>   $data ,
            'roles' => $roles,
            'totalRows' => $totalRows,
        ]);
    }


    public function getSalesRep(request $request)
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

        $users = User::whereIn('role_id' ,  [4 ])->where('deleted_at' , '=' , null)->where(function ($query) use ($ShowRecord) {
            if (!$ShowRecord) {
                return $query->where('id', '=', Auth::user()->id);
            }
        });

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

        return response()->json([
            'success' => true,
            'user' => $user,
            'notifs' => $products_alerts,
            'permissions' => $permissions,
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


    public function storeRep(Request $request)
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

            $User = new User;
            $User->firstname = $request['firstname'];
            $User->lastname  = $request['lastname'];
            $User->username  = $request['username'];
            $User->email     = $request['email'];
            $User->phone     = $request['phone'];

            $User->area_name     =  "";
            $User->location_lat     =  "";
            $User->address     = "";
            $User->location_long     =  "";

 
            $User->password  = Hash::make($request['password']);
            $User->avatar    = $filename;
            $User->role_id   =  $request['role_id'];
            $User->save();

            $role_user = new role_user;
            $role_user->user_id = $User->id;
            $role_user->role_id = $request['role_id'];
            $role_user->save();
    
        }, 10);

        return response()->json(['success' => true]);
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

            $User = new User;
            $User->firstname = $request['firstname'];
            $User->lastname  = $request['lastname'];
            $User->username  = $request['username'];
            $User->email     = $request['email'];
            $User->phone     = $request['phone'];

            $User->area_name     = $request['area_name'];
            $User->location_lat     = $request['location_lat'];
            $User->address     = $request['address'];
            $User->location_long     = $request['location_long'];

 
            $User->password  = Hash::make($request['password']);
            $User->avatar    = $filename;
            $User->role_id   = $request['role'];
            $User->save();

            $role_user = new role_user;
            $role_user->user_id = $User->id;
            $role_user->role_id = $request['role'];
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

                'area_name' => $request['area_name'],
                'location_lat' => $request['location_lat'],
                'address' => $request['address'],
                'location_long' => $request['location_long'],
            ]);

            role_user::where('user_id' , $id)->update([
                'user_id' => $id,
                'role_id' => $request['role'],
            ]);

        }, 10);
        
        return response()->json(['success' => true]);

    }






    public function updateRep(Request $request, $id)
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
 
            User::whereId($id)->update([
                'firstname' => $request['firstname'],
                'lastname' => $request['lastname'],
                'username' => $request['username'],
                'email' => $request['email'],
                'phone' => $request['phone'],
                'password' => $pass,
                'avatar' => $filename,
                'statut' => $request['statut'],
                'role_id' => $request['role_id'],
                'area_name' =>  "",
                'location_lat' => "",
                'address' => "",
                'location_long' => "",
            ]);

            role_user::where('user_id' , $id)->update([
                'user_id' => $id,
                'role_id' =>  $request['role_id'],
            ]);

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
            'area_name' => $request['area_name'],
            'location_lat' => $request['location_lat'],
            'address' => $request['address'],
            'location_long' => $request['location_long'],

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



    public function delete_by_selection(Request $request)
    {
        $this->authorizeForUser($request->user('api'), 'update', User::class);

        $selectedIds = $request->selectedIds;

        foreach ($selectedIds as $Client_id) {
            User::whereId($Client_id)->update([
                'deleted_at' => Carbon::now(),
            ]);
        }
        return response()->json(['success' => true]);
    }


    public function delete_mandob(Request $request, $id)
    {
         

        \DB::transaction(function () use ($id) {

            User::whereId($id)->update([
                'deleted_at' => Carbon::now(),
                'email'=> Carbon::now(),
                'phone'=> Carbon::now(),
                'username'=> Carbon::now()
            ]);



        }, 10);

        return response()->json(['success' => true]);
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


    public function destroy(Request $request, $id)
    {
         

        \DB::transaction(function () use ($id) {

            User::whereId($id)->update([
                'deleted_at' => Carbon::now(),
                'email'=> Carbon::now(),
                'phone'=> Carbon::now(),
                'username'=> Carbon::now()
            ]);



        }, 10);

        return response()->json(['success' => true]);
    }
 

    public function GetRole($role){
        if($role == "customer"){
            return 2;
        }else if($role == "driver"){
            return 3;
        }else if($role == "sales"){
            return 4;
        }else {
            return 2;
        }

    }

    public function getArea_id($id){
      $area =   Area::where('deleted_at' , '=' , null)->where('code' , $id)->first();
      if($area){
        return $area->id;
      }else{
        return 0;
      }

    }
        // import Products
        public function import_users(Request $request)
        {

            // $this->authorizeForUser($request->user('api'), 'create', User::class);
            try {
                \DB::transaction(function () use ($request) {
                    $file_upload = $request->file('usersfile');
                    $ext = pathinfo($file_upload->getClientOriginalName(), PATHINFO_EXTENSION);
                    if ($ext != 'csv') {
                        return response()->json([
                            'msg' => 'must be in csv format',
                            'status' => false,
                        ]);
                    } else {
                        $data = array();
                        $rowcount = 0;
                        if (($handle = fopen($file_upload, "r")) !== false) {
    
                            $max_line_length = defined('MAX_LINE_LENGTH') ? MAX_LINE_LENGTH : 10000;
                            $header = fgetcsv($handle, $max_line_length);
                            $header_colcount = count($header);
                            while (($row = fgetcsv($handle, $max_line_length)) !== false) {
                                $row_colcount = count($row);
                                if ($row_colcount == $header_colcount) {
                                    $entry = array_combine($header, $row);
                                    $data[] = $entry;
                                } else {
                                    return null;
                                }
                                $rowcount++;
                            }
                            fclose($handle);
                        } else {
                            return null;
                        }
                        // $this->authorizeForUser($request->user('api'), 'create', User::class);
                    
                        //-- Create New Product
                        foreach ($data as $key => $value) {
                            
                            
                              $user = User::where('email' ,$value['email'] )->orWhere('phone' , $value['phone'])->first();
                            if($user){

                                return response()->json([
                                    'status' => false,
                                    'msg' => 'error',
                                    'errors' => "Error",
                                ]);
                            }
 
                            $emaiil = $value['phone']."@horecasmart.com";

                             $user = User::where('email' , $emaiil )->first();

                            if($user){
                                 continue;

                              }else{

                            
                                $User = new User();
                                $User->firstname = $value['firstname'];
                                $User->lastname  = $value['lastname'];
                                $User->username  = $value['phone'];
                                $User->email         = $emaiil;
                                $User->phone         = "0".$value['phone'];
                                $User->code          =  $value['code'];
                                $User->area_name     = $value['area_name'];
                                $User->area_id       =    $this->getArea_id($value['area_code']);
                                $User->location_lat     = $value['location_lat'];
                                $User->address     =   $value['address'];
                                $User->location_long     =  $value['location_long'];
                                $User->password  = Hash::make("Accc122$$$33###4hjjd@123");
                                $User->avatar    = "no_avatar.png";
                                $User->role_id   =  $this->GetRole($value['role']);
                                $User->save();
                    
                                $role_user = new role_user;
                                $role_user->user_id = $User->id;
                                $role_user->role_id = $this->GetRole($value['role']);
                                $role_user->save();
                            }
                        
                        }
                       
                    }
                }, 10);
                return response()->json([
                    'status' => true,
                ], 200);
    
            } catch (ValidationException $e) {
                return response()->json([
                    'status' => false,
                    'msg' => 'error',
                    'errors' => $e->errors(),
                ]);
            }
    
        }


}
