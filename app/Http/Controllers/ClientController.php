<?php

namespace App\Http\Controllers;
use Carbon\Carbon;
use App\Models\Role;
use App\Exports\ClientsExport;
use App\Models\Client;
use App\Models\User;
use App\utils\helpers;
 
use App\Models\Setting;
use Illuminate\Support\Facades\Validator;
use Illuminate\Validation\Rule;
use App\Models\role_user;
use File;
 
 
use DB;
use Illuminate\Http\Request;
use Maatwebsite\Excel\Facades\Excel;
use Illuminate\Support\Facades\Hash;
use Intervention\Image\ImageManagerStatic as Image;

class ClientController extends BaseController
{

    //------------- Get ALL Customers -------------\\

    public function index(request $request)
    {
        $this->authorizeForUser($request->user('api'), 'view', Client::class);
        // How many items do you want to display.
        $perPage = $request->limit;
        $pageStart = \Request::get('page', 1);
        // Start displaying items from this number;
        $offSet = ($pageStart * $perPage) - $perPage;
        $order = $request->SortField;
        $dir = $request->SortType;
        $helpers = new helpers();
        // Filter fields With Params to retrieve
        $columns = array(0 => 'name', 1 => 'code', 2 => 'phone', 3 => 'email');
        $param = array(0 => 'like', 1 => 'like', 2 => 'like', 3 => 'like');
        $data = array();

        $clients = User::withCount('sales')->where('deleted_at', '=', null)->where('role_id' , 2);

        //Multiple Filter
        $Filtred = $helpers->filter($clients, $columns, $param, $request)
        // Search With Multiple Param
            ->where(function ($query) use ($request) {
                return $query->when($request->filled('search'), function ($query) use ($request) {
                    return $query->where('firstname', 'LIKE', "%{$request->search}%")
                       ->orWhere('lastname', 'LIKE', "%{$request->search}%")
                        ->orWhere('phone', 'LIKE', "%{$request->search}%")
                        ->orWhere('email', 'LIKE', "%{$request->search}%");
                });
            });


        $totalRows = $Filtred->count();
        $clients = $Filtred->offset($offSet)
            ->limit($perPage)
            ->orderBy($order, $dir)
            ->get();

        return response()->json([
            'clients' => $clients,
            'totalRows' => $totalRows,
        ]);
    }

    //------------- Store new Customer -------------\\

    public function store(Request $request)
    {
        $this->authorizeForUser($request->user('api'), 'create', Client::class);
 
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
            $User->code     = $request['code'];
            $User->area_name     = $request['area_name'];
            $User->location_lat     = $request['location_lat'];
            $User->address     = $request['address'];
            $User->location_long     = $request['location_long'];

 
            $User->password  = Hash::make($request['password']);
            $User->avatar    = $filename;
            $User->role_id   = 2;
            $User->save();

            $role_user = new role_user;
            $role_user->user_id = $User->id;
            $role_user->role_id = 2;
            $role_user->save();
    
        }, 10);

        return response()->json(['success' => true]);
    }

    //------------ function show -----------\\

    public function show($id){
        //
        
    }

    //------------- Update Customer -------------\\

    public function update(Request $request, $id)
    {
        $this->authorizeForUser($request->user('api'), 'update', Client::class);
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
                'role_id' => 2,
                'code' => $request['code'],
                'area_name' => $request['area_name'],
                'location_lat' => $request['location_lat'],
                'address' => $request['address'],
                'location_long' => $request['location_long'],
            ]);

            role_user::where('user_id' , $id)->update([
                'user_id' => $id,
                'role_id' => 2,
            ]);

        }, 10);
        
        return response()->json(['success' => true]);

    }

    //------------- delete client -------------\\

    public function destroy(Request $request, $id)
    {
        $this->authorizeForUser($request->user('api'), 'delete', Client::class);

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

    //-------------- Delete by selection  ---------------\\

    public function delete_by_selection(Request $request)
    {
        $this->authorizeForUser($request->user('api'), 'delete', Client::class);

        $selectedIds = $request->selectedIds;

        foreach ($selectedIds as $Client_id) {
            User::whereId($Client_id)->update([
                'deleted_at' => Carbon::now(),
            ]);
        }
        return response()->json(['success' => true]);
    }

    //------------- Export  ALL Customers in EXCEL -------------\\

    public function exportExcel(Request $request)
    {
        $this->authorizeForUser($request->user('api'), 'view', Client::class);

        return Excel::download(new ClientsExport, 'Clients.xlsx');
    }

    //------------- get Number Order Customer -------------\\

    public function getNumberOrder()
    {
        $last = DB::table('clients')->latest('id')->first();

        if ($last) {
            $code = $last->code + 1;
        } else {
            $code = 1;
        }
        return $code;
    }

    //------------- Get Clients Without Paginate -------------\\

    public function Get_Clients_Without_Paginate()
    {
        $clients = Client::where('deleted_at', '=', null)->get(['id', 'name']);
        return response()->json($clients);
    }

    // import clients
    public function import_clients(Request $request)
    {
        $file_upload = $request->file('clients');
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
           
            $rules = array('email' => 'required|email|unique:clients');
            //-- Create New Client
            foreach ($data as $key => $value) {
                $input['email'] = $value['email'];

                $validator = Validator::make($input, $rules);
                if (!$validator->fails()) {
                    
                    Client::create([
                        'name' => $value['name'] == '' ? null : $value['name'],
                        'code' => $this->getNumberOrder(),
                        'adresse' => $value['adresse'] == '' ? null : $value['adresse'],
                        'phone' => $value['phone'] == '' ? null : $value['phone'],
                        'email' => $value['email'] == '' ? null : $value['email'],
                        'country' => $value['country'] == '' ? null : $value['country'],
                        'city' => $value['city'] == '' ? null : $value['city'],
                    ]);
                }

            }

            return response()->json([
                'status' => true,
            ], 200);
        }

    }

}
