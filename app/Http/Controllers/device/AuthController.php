<?php

namespace App\Http\Controllers\device;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use App\Models\User;
use Illuminate\Support\Facades\Http;
use App\Models\Attendance;
use App\Models\role_user;

use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Hash;
use App\utils\helpers;
use Intervention\Image\ImageManagerStatic as Image;
use File;
use Carbon\Carbon;
use Illuminate\Support\Facades\Validator;
use GuzzleHttp\Client;
use App\Models\Setting;
use App\Models\Survey;
use Illuminate\Support\Facades\Log;
use App\Models\CarModel;
use App\Models\Statelamp;
use GuzzleHttp\Exception\RequestException;


class AuthController extends Controller
{






function sendSms($apiUrl, $apiKey, $senderId, $recipient, $message)
{
    $client = new Client();

    $payload = [
        'recipient' => $recipient,
        'api_token' => $apiKey,
        'sender_id' => $senderId,
        'message' => $message,
        'type' => 'plain',
    ];

    try {
        $response = $client->post($apiUrl, [
            'headers' => [
                'Authorization' => 'Bearer ' . $apiKey,
                'Content-Type' => 'application/x-www-form-urlencoded',
            ],
            'form_params' => $payload,
        ]);

        $body = $response->getBody()->getContents();
        $contentType = $response->getHeaderLine('Content-Type');

        if (strpos($contentType, 'application/json') !== false) {
            return json_decode($body, true);
        } else {
            echo "Unexpected response content: " . $body;
            return null;
        }
    } catch (RequestException $e) {
        if ($e->hasResponse()) {
            echo "Request failed: " . $e->getResponse()->getBody()->getContents();
        } else {
            echo "Request failed: " . $e->getMessage();
        }
        return null;
    }
}




    public function ResetPhone(Request $request , $phone){
     
        $confirmationCode = rand(10000, 99999);
        $this->sendSms( env('SMS_URL', 'Laravel'), env('SMS_KEY', 'Laravel') ,  env('SMS_SENDERID', 'HorecaSmart')  , "2".$phone,  "CODE: ".$confirmationCode);
        User::where('phone' , $phone)->update(
            [
                'confirmation_code'=> $confirmationCode
            ]
            );

            return response()->json(  ['status'=>   'success'   ]  , 200);
 
    }



    public function confirmCode(Request $request)
    {
        $validator = Validator::make($request->all(), [
            'phone' => 'required',
            'confirmation_code' => 'required'
        ]);

        if ($validator->fails()) {
            return response()->json([
                'status' => 422,
                'message' => $validator->errors(),
            ], 422);
        }

        $user = User::where('phone', $request->phone)
                    ->where('confirmation_code', $request->confirmation_code)
                    ->first();

        if (!$user) {
            return response()->json([
                'status' => 400,
                'message' => 'Invalid confirmation code or email.',
            ], 400);
        }

        // Update user's status or any other field indicating confirmation
        $user->confirmation_code = null; // Clear the confirmation code
       // $user->is_confirmed = true; // Assuming you have this field in your users table
        $user->save();

  

        $accessToken = $user->createToken('AuthToken')->accessToken;


 


        return response()->json([
           
            'user'=>   $user,
      
            'token'=> $accessToken
            
        ] , 200); 


   
    }

    
    public function getCarModels()
    {
        $client = new Client();

        // Make the GET request
        $response = $client->request('GET', 'https://parseapi.back4app.com/classes/Carmodels_Car_Model_List', [
            'query' => [
                'limit' => 11000,
            ],
            'headers' => [
                'X-Parse-Application-Id' => 'VvJxzMb9qmUSb8LpJYBvQZJIudoHbLXbl0UAqoTf',
                'X-Parse-REST-API-Key' => '3QJDZJOkzm2mu0BBPyJncrgUg1zJekNoRAPsGpgT',
            ],
        ]);

        // Decode the JSON response
        $data = json_decode($response->getBody(), true);

        // Loop through the results and save each car model to the database
        foreach ($data['results'] as $car) {
            CarModel::updateOrCreate(
                ['objectId' => $car['objectId']],
                [
                    'Year' => $car['Year'],
                    'Make' => $car['Make'],
                    'Model' => $car['Model'],
                    'Category' => $car['Category'],
                    'createdAt' => $car['createdAt'],
                    'updatedAt' => $car['updatedAt']
                ]
            );
        }

        // Return the saved data as a JSON response
        return response()->json(CarModel::all(), 200, [], JSON_PRETTY_PRINT);
    }



    public function sendCommand(Request $request)
    {
        $command = $request->input('command');

        // Assuming your ESP8266 IP address and port
        $espAddress = '192.168.1.100'; // Replace with your ESP8266 IP
        $espPort = 80; // Replace with your ESP8266 port

        try {
            $response = Http::post("http://{$espAddress}:{$espPort}/control-pins", [
                'command' => $command
            ]);

            return response()->json($response->json());
        } catch (\Exception $e) {
            return response()->json(['error' => 'Failed to send command to ESP8266'], 500);
        }
    }


    public function reseveState(Request $request){

        // Log the incoming request
        // Log::info('Received lamp state update request: ' . $request->getContent());

        // Process the lamp state (assuming 'lamp' key exists in JSON payload)
        // $payload = json_decode($request->getContent(), true);
        // // $lampState = $payload['lamp'] ?? false;
        // $lampState = $payload['lamp'];
        // Perform actions based on $lampState (e.g., update database, trigger events)

        $payload = $request->lamp;
        // // Log the action performed
        // $message = $lampState ? 'Lamp turned on' : 'Lamp turned off';
        // Log::info($message);
        // $st = new  Statelamp;

        // $st->status = $payload;
        // $st->save();
        // // Return response
        // $response = ['message' => 'Lamp state updated successfully'];
        // Log::info('Response sent: ' . json_encode($response));
        return response()->json(['error' => 'Failed to send command to ESP8266'], 200);
        
    }
    
    public function testiot(Request $request){

         

        
        $pins = [
            "IO0_PIN" => true,
            "IO2_PIN" => false,
            "TX_PIN" => false, //low eneg
            "RX_PIN" => false,
            
      
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


    



    public function surveyImage(Request $request){
 
      
         $user =   Auth::user();
         $image = $request->file('placeImage');
         $path = public_path() . '/images/surveyimages';
         $filename = rand(11111111, 99999999) . $image->getClientOriginalName();

        //  $image_resize = Image::make($image->getRealPath());
      
        //  $image_resize->save(public_path('/images/surveyimages/' . $filename));
  
      

// Save the uploaded image directly
               $image->move($path, $filename);



          $id = $request->id;

          

           Survey::where( 'task_id' ,$id)->update([
 
                'image' => $filename,

                ]);

         return response()->json(['url' =>  "/images/surveyimages/".  $filename   ], 200);


        //  $filename

        //  $userPhoto = $path . '/' . $currentAvatar;
        //  if (file_exists($userPhoto)) {
        //      if ($user->avatar != 'no_avatar.png') {
        //          @unlink($userPhoto);
        //      }
        //  }

        //  $filename = $filename;
   

        // return $filename;


//  User::whereId($user->id)->update([

//      'avatar' => $filename,
   
//  ]);
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



    public function SaveCustomerToOdoo($phone , $firstname , $lastname , $address , $lat , $lng  , $id  )
    {

        $setting = Setting::where('deleted_at' , '=' , null)->first();
        $client = new Client();
        $url = $setting->odoo_url.'/api/partner';
        
        $params = [
            'query' => [
                'phone' => $phone ,
                'first_name' => $firstname,
                'last_name' => $lastname ,
                'business_name' => $firstname.' '.$lastname ,
                'areas_id' => '',
                'address' => $address ,
                'email' => $phone.'@horeca.com',
                'partner_longitude' =>$lat,
                'partner_latitude' => $lng
            ],
            'headers' => [
                'db' => $setting->db_name ,
                'Content-Type' => 'application/json',
                'access_token' => $setting->token_api,
                // 'Cookie' => 'session_id=1e66bbeb32454abe43d30e9e2f4dd8aa202b920a',
            ],
        ];

        try {
            $response = $client->request('POST', $url, $params);
            $body = $response->getBody();
            $content = json_decode($body->getContents(), true);

            if (isset($content['count']) && $content['count'] > 0 && isset($content['data'][0])) {
                $odoo_id = $content['data'][0]['id'];
                $ref = $content['data'][0]['ref'];



               

              User::where('id', $id)->update([
                "code" => $odoo_id ,
              ]);


                return response()->json([
                    'success' => true,
                    'id' => $id,
                    'ref' => $ref,
                    'message' => $content['data'][0]['message']
                ]);
               
              
            } else {
                return response()->json([
                    'success' => false,
                    'message' => 'No data found'
                ], 404);
            }
        } catch (\Exception $e) {
            return response()->json([
                'success' => false,
                'message' => $e->getMessage()
            ], 500);
        }
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

         $email =  $request['email'];

        if(   $request['email'] == "Empty"){
            $emaill =  $request['phone'].'@horeca.com';
         }else{
            $emaill = $request['email'];
         }


    //    return $this->SaveCustomerToOdoo($request['phone']  ,$request['firstname'] , $request['lastname'] , $request['address'] , $request['location_lat'] , $request['location_long']  ,55  );

     
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
        $User->role_id    =  2;
        $User->save();
        
    
        $accessToken = $User->createToken('AuthToken')->accessToken;
        $role_user = new role_user;
        $role_user->user_id = $User->id;
        $role_user->role_id =  2;
        $role_user->save();

        app('App\Http\Controllers\device\NotificationsController')->AddFcm($User ,  $request['fcm'] , "TOKEN"  );
        

        $this->SaveCustomerToOdoo($request['phone']  ,$request['firstname'] , $request['lastname'] , $request['address'] , $request['location_lat'] , $request['location_long']  , $User->id  );

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

    
    public function versionHoreca(Request $request , $version){
           
        $versaionfromDB = env('VERSION_HORECA', '3.0' ) ;
        $urlDB = env('URL_UPDATE_HORECA', 'https://drive.google.com/drive/folders/14T4eziS4gRr2f-I0X9rHimT9unZffFFt?usp=sharing')  ;
        if($versaionfromDB == $version){
            return response()->json(['version' => $version ,  'needupdate'=> false , 'message'=> "hello" , 'url' => 'url' ], 200);
        }else{
            return response()->json(['version' => $versaionfromDB ,  'needupdate'=> true , 'message'=> "hello" , 'url' =>  $urlDB  ], 200);
        }
     
       
    }


    public function versionSurvey(Request $request , $version){
           
        $versaionfromDB = '4';
        $urlDB = 'https://drive.google.com/drive/folders/11vnuWO49K5B7WsbpGFrqdRXW9u4VcH9a?usp=sharing';
        if($versaionfromDB == $version){
            return response()->json(['version' => $version ,  'needupdate'=> false , 'message'=> "hello" , 'url' => 'url' ], 200);
        }else{
            return response()->json(['version' => $versaionfromDB ,  'needupdate'=> true , 'message'=> "hello" , 'url' =>  $urlDB  ], 200);
        }
     
       
    }



    public function version(Request $request , $version){
 
    
        $versaionfromDB = '14.0';
        $urlDB = 'https://drive.google.com/drive/folders/1okrvPkNZnHyWM_r9u7FLg3LfFifkmUp5?usp=drive_link';
        if($versaionfromDB == $version){
            return response()->json(['version' => $version ,  'needupdate'=> false , 'message'=> "hello" , 'url' => 'url' ], 200);
        }else{
            return response()->json(['version' => $versaionfromDB ,  'needupdate'=> true , 'message'=> "hello" , 'url' =>  $urlDB  ], 200);
        }
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
