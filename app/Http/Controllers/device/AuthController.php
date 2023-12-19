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
    
    public function resetPassword(Request $request){

        $phone = $request->phone;
        $passowrd = $request->passowrd;
        $user = User::where('phone',  $phone )->first();
        $pass = Hash::make($request->new_password);
        User::whereId($user->id)->update([
            'password' => $pass,
        ]);


 
        return response()->json(['status' => "success" ,  'message'=> 'success'   ], 200);


        // $User->password  = Hash::make($request['password']);

    }


    public function getCountries(Request $request){

         $countries = Cce::with('currency')->where('deleted_at', '=', null)->get();
         return response()->json(['countries' =>  $countries     ], 200);

    }

    
    public function changeImage(Request $request){
 
        $helpers = new helpers();
        $user =   Auth::user();
         $currentAvatar = $user->avatar;


         $image = $request->file('avatar');
         $path = public_path() . '/images/avatar';
         $filename = rand(11111111, 99999999) . $image->getClientOriginalName();

         $image_resize = Image::make($image->getRealPath());
      
         $image_resize->save(public_path('/images/avatar/' . $filename));

         $userPhoto = $path . '/' . $currentAvatar;
         if (file_exists($userPhoto)) {
             if ($user->avatar != 'no_avatar.png') {
                 @unlink($userPhoto);
             }
         }

         // $filename = $currentAvatar;
   

        // return $filename;


 User::whereId($user->id)->update([

     'avatar' => $filename,
   
 ]);




 return response()->json(['url' =>  "/images/avatar/".  $filename   ], 200);



 }



 public function EditProfile(Request $request){
    $helpers = new helpers();
    $user =   Auth::user();
    $email =  $request['email']  == null ? $user->email : $request['email'];
    $phone =  $request['phone']  == null ? $user->phone : $request['phone'];



    if($phone  ==  $user->phone ){

         

    }else{


        $userd  = User::where('deleted_at', '=', null )->where('phone' , $phone )->first();
        if( $userd ){
            return response()->json(['status' => "fail" ,  'message'=> 'Phone Already Exist'   ], 401);
        }   



    }


    if($email  ==  $user->email ){


        
    }else{
        $user  = User::where('deleted_at', '=', null )->where('email' ,  $email  )->first();
        if( $user ){
            return response()->json(['status' => "fail" ,  'message'=> 'Email Already Exist'   ], 401);
        } 
 
    }
    $userrr =   User::where('email' , $email )->first();
      
    User::whereId($user->id)->update([
        'firstname' => $request['firstname'] == "" ? $userrr->firstname :  $request['firstname'] ,
        'lastname' =>  $request['lastname'] == "" ? $userrr->lastname :  $request['lastname'] ,
        'email' =>    $email == "" ? $user->email :  $email ,
        'phone' =>   $phone == "" ? $user->phone :  $phone  ,
        'address' => $request['address']
      
    ]); 
    

    return response()->json(  $user, 200);
}


 public function profile(Request $request){
        $user = Auth::user(); 
       
 
        return response()->json(['user' =>  $user     ], 200);

    }

    public function updateProfile(Request $request){
 
        $helpers = new helpers();
        $user =  $helpers->getInfo();
        User::whereId($user->id)->update([
            'firstname' => $request['firstname'],
            'lastname' =>  $request['lastname'],
            'email' =>  $request['email'],
            'phone' => $request['phone'],
        ]);


        return response()->json(['status' => "success" ,  'message'=> 'success'   ], 200);
    }


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

        $User->area_name    = $request['area_name'];
        $User->bussiness_type    = $request['bussiness_type'];
        $User->location_lat    = $request['location_lat'];
        $User->location_long    = $request['location_long'];
        $User->address    = $request['address'];
 
        $User->save();
 
    
        $accessToken = $User->createToken('AuthToken')->accessToken;

      app('App\Http\Controllers\device\NotificationsController')->AddFcm($User ,  $request['fcm']);
        
        return response()->json([
           
            'user'=>  $User,
            'token'=> $accessToken
            
        ] , 200); 
     
 


    }





    public function login(Request $request)
    {

 
       $credentials = $request->only('phone', 'password');
        if (Auth::attempt($credentials)) {
            $user = Auth::user();
        
            $accessToken = $user->createToken('AuthToken')->accessToken;

            app('App\Http\Controllers\device\NotificationsController')->AddFcm($user ,  $request['fcm']);

            $user = array( 'user'=>   $user   ,   'token' => $accessToken   );
            return response()->json(['status' => "success" ,  'message'=> 'success' 
              , 'data'=> $user 
            ], 200);

        } else {
            return response()->json(['error' => 'Invalid credentials'], 401);
        }


    }



}
