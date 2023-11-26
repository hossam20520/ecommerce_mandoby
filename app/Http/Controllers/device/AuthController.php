<?php

namespace App\Http\Controllers\device;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use App\Models\User;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Hash;
use App\utils\helpers;
use Intervention\Image\ImageManagerStatic as Image;
use File;
use Carbon\Carbon;
use Illuminate\Support\Facades\Validator;


class AuthController extends Controller
{
    
  


    public function register(Request $request){

 
        $validator = Validator::make($request->all(), [
            'email' => 'required|unique:users',
            'phone' => 'required|unique:users',
        ], [
            'email.unique' => 'This Email is already taken.',
            'phone.unique' => 'This Phone is already taken.',
        ]);

        if ($validator->fails()) {
           

            return response()->json([
                'status'=> 200,
                'message'=>  $validator->errors(),
                
            ] , 422); 
    
        }



         $username = explode("@" , $request['email']);
    
         
        $filename = 'no_avatar.png';
        $User = new User;

        $User->area_name = $request['area_name'];
        $User->bussiness_type = $request['bussiness_type'];
        $User->location_lat = $request['location_lat'];
        $User->location_long = $request['location_long'];
        $User->address = $request['address'];
 
        
        $User->firstname = $request['firstname'];
        $User->lastname  = $request['lastname'];
        $User->username  = $username[0];
        $User->email     = $request['email'];
        $User->phone     = $request['phone'];
        $User->password  = Hash::make($request['password']);
        $User->avatar    = $filename;
        // $User->role_id   = $role;
        $User->save();

        // $role_user = new role_user;
        // $role_user->user_id = $User->id;
        // $role_user->role_id = $role;
        // $role_user->save();
 
    
        $accessToken = $User->createToken('AuthToken')->accessToken;
     
        return response()->json([
            'status'=> 200,
            'message'=> 'success',
            'token'=> $accessToken,
            'user'=> $User
            
        ] , 200); 


    }





    public function login(Request $request)
    {

 
       $credentials = $request->only('phone', 'password');
        if (Auth::attempt($credentials)) {
            $user = Auth::user();
        
            $accessToken = $user->createToken('AuthToken')->accessToken;
            $user = array( 'user'=>   $user   ,   'token' => $accessToken   );
            return response()->json(['status' => "success" ,  'message'=> 'success' 
              , 'data'=> $user 
            ], 200);

        } else {
            return response()->json(['error' => 'Invalid credentials'], 401);
        }


    }



}
