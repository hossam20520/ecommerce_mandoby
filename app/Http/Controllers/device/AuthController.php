<?php

namespace App\Http\Controllers\device;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use App\Models\User;

use App\Models\Attendance;

use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Hash;
use App\utils\helpers;
use Intervention\Image\ImageManagerStatic as Image;
use File;
use Carbon\Carbon;
use Illuminate\Support\Facades\Validator;
 

class AuthController extends Controller
{
    

    
    public function testiot(Request $request){

         

        
        $pins = [
            "pin_zero" => false,
            "pin_one" => false,
            "pint_tow" => true,
            "pin_three" => true,
        ];


           
          
        return response()->json(['status' => "success" ,  'pins'=> $pins    ], 200);
    }



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
       
 
        return response()->json(['user' =>  $user  , "url"=> env('URL', 'http://192.168.1.5:8000')   ], 200);

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
        $User->role_id    =  3;
        $User->save();
        
    
        $accessToken = $User->createToken('AuthToken')->accessToken;

      app('App\Http\Controllers\device\NotificationsController')->AddFcm($User ,  $request['fcm']);
        
        return response()->json([
           
            'user'=>  $User,
            'token'=> $accessToken
            
        ] , 200); 
     
 


    }


    public function checkin(Request $request  ){
        $user = Auth::user(); 
        $type = $request->type;
        $status = $request->status;

        $location_lat = $request->lat;
        $location_lng = $request->lng;
        // loggedout , pending  , loggedin
        $currentDate = Carbon::now()->format('d-n-Y');

        $attendance =  Attendance::where('deleted_at' , '=' , null)
       ->where('user_id' ,   $user->id )
       ->where('type' , $type  )
       ->where('date' , $currentDate)
       ->where('status' , $status)
       ->first();

       if($attendance){


        return response()->json([
           
            'status'=>  $status ,
 
        ] , 200); 

 

       }else{

        $currentDateTimee = Carbon::now();
        $formattedTime = $currentDateTimee->format('h:i A');
        $currentDate = Carbon::now()->format('d-n-Y');



        $att = new Attendance;
        $att->user_id = $user->id;
        $att->type = $type;
        $att->location_lat  = $location_lat;
        $att->location_lng  =  $location_lng;
        $att->time  =  $formattedTime;
        $att->date  =  $currentDate;
        $att->status  =  $status ;
        $att->save();

       }
          
 
 
        return response()->json([
           
            'status'=>   $status,
 
        ] , 200); 

 

    }




    public function check_status(Request $request ){
       
        $user = Auth::user(); 
        $type = $request->type;
        $status = $request->status;

 
        // loggedout , pending  , loggedin
        $currentDate = Carbon::now()->format('d-n-Y');

       $attendance =  Attendance::where('deleted_at' , '=' , null)
       ->where('user_id' ,   $user->id )
       ->where('type' , $type  )
       ->where('date' , $currentDate)
       ->where('status' , "LOGEDIN")
       ->first();


       if($attendance ){
        $attendance_loggedout =  Attendance::where('deleted_at' , '=' , null)
        ->where('user_id' ,   $user->id )
        ->where('type' , $type  )
        ->where('date' , $currentDate)
        ->where('status' , "LOGEDOUT")
        ->first();

        if($attendance_loggedout){
           return response()->json([
           
                    'status'=>    "LOGEDOUT" ,
         
                ] , 200); 
        }else{
            return response()->json([
           
                'status'=>    "LOGEDIN" ,
     
            ] , 200); 
        }


       }else{
        return response()->json([
           
            'status'=>    "LOGEDOUT" ,
 
        ] , 200); 
       }




        // delvery
        
        // if($attendance){
             
        //     $attendance_2 =  Attendance::where('deleted_at' , '=' , null)
        //     ->where('user_id' ,   $user->id )
        //     ->where('type' , $type  )
        //     ->where('date' , $currentDate)
        //     ->where('status' , "LOGEDOUT")
        //     ->first();

            // if($attendance_2){

            //     return response()->json([
           
            //         'status'=>   $attendance->status ,
         
            //     ] , 200); 

            // }else{
            //     return response()->json([
           
            //         'status'=>    "LOGEDIN" ,
         
            //     ] , 200);  
            // }
            //   ->where('status' , "LOGEDOUT")
   




        // }else{

        //     return response()->json([
           
        //         'status'=>    "LOGEDOUT" ,
     
        //     ] , 200); 
        // }


        // $attendance =  Attendance::where('deleted_at' , '=' , null)->get();





    //    $attendance =  Attendance::where('deleted_at' , '=' , null)->get();



    }

    
 
    public function versionSurvey(Request $request , $version){
           
        $versaionfromDB = '3.0';
        $urlDB = 'https://drive.google.com/drive/folders/1gQfPP0542aXIWCjy7X83ciqryRPmyi97?usp=sharing';
        if($versaionfromDB == $version){
            return response()->json(['version' => $version ,  'needupdate'=> false , 'message'=> "hello" , 'url' => 'url' ], 200);
        }else{
            return response()->json(['version' => $versaionfromDB ,  'needupdate'=> true , 'message'=> "hello" , 'url' =>  $urlDB  ], 200);
        }
     
       
    }



    public function version(Request $request , $version){
 
    
        return response()->json(['version' => '1.2' ,  'needupdate'=> false , 'message'=> "hello" , 'url' => 'url' ], 200);
    }


    public function login(Request $request)
    {

 
       $credentials = $request->only('phone', 'password');
        if (Auth::attempt($credentials)) {
            $user = Auth::user();
        
            $accessToken = $user->createToken('AuthToken')->accessToken;

            app('App\Http\Controllers\device\NotificationsController')->AddFcm($user ,  $request['fcm'] , $request['type'] );

            $user = array( 'user'=>   $user   ,   'token' => $accessToken   );
            return response()->json(['status' => "success" ,  'message'=> 'success' 
              , 'data'=> $user 
            ], 200);

        } else {
            return response()->json(['error' => 'Invalid credentials'], 401);
        }


    }



}
