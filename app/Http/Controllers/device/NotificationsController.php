<?php

namespace App\Http\Controllers\device;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use App\Models\User;
use App\Models\Fcm;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Http;
class NotificationsController extends Controller
{
    

    public function AddFcm($user , $fcm , $type){

 
        $device_token  = $fcm;

        $fcm = Fcm::where('user_id' , $user->id)->first();
        if(!$fcm){
            $fc = new Fcm;
            $fc->device_token = $device_token;
            $fc->user_id = $user->id;
            $fc->type = $type;
            $fc->save();
    
        }else{


            $up = Fcm::where('user_id' , $user->id)->update([
                'device_token'=>  $device_token,
                
            ]);
            
        }
    
        
        }




        public function sendNotification($email , $title , $body )
        {
         
            // $firebaseToken = Fcm::whereNotNull('device_token')->pluck('device_token')->all();



                
            $SERVER_API_KEY = env('FCM_SERVER_KEY', 'AAAAjE4uqNk:APA91bGBl7CN2AnB3_SzsyQBSTnZzu5C35pwlJ_WSkePXTZVJcpYVB89qmI0vTqyG388krsWNYGK56g-I9WwSKhVcejju2yoJI4eRCTtaCGn4HauRiTsbEpJLXfLR4jKizOnT5pnIuxl') ;
            
            $usser = User::where('email' , $email )->first();

             if(!$usser){
                  return false;
             }
            $fcm  = Fcm::where('user_id' , $usser->id  )->first();

            $data = [
                "registration_ids" => $fcm->device_token,
                "notification" => [
                    "title" => $title ,
                    "body" => $body ,  
                ]
            ];
            $dataString = json_encode($data);
          
            $headers = [
                'Authorization: key=' . $SERVER_API_KEY,
                'Content-Type: application/json',
            ];
          
            $ch = curl_init();


            curl_setopt($ch, CURLOPT_URL, 'https://fcm.googleapis.com/fcm/send');
            curl_setopt($ch, CURLOPT_POST, true);
            curl_setopt($ch, CURLOPT_HTTPHEADER, $headers);
            curl_setopt($ch, CURLOPT_SSL_VERIFYPEER, false);
            curl_setopt($ch, CURLOPT_RETURNTRANSFER, true);
            curl_setopt($ch, CURLOPT_POSTFIELDS, $dataString);
                     
             $response = curl_exec($ch);
     
     
             return response()->json(['success' =>  $response]);
    
        }



    public function updateFcm(Request $request){

    $user = Auth::user();

    $device_token  = $request->fcm;

    $fcm = Fcm::where('user_id' , $user->id)->first();
    if(!$fcm){
        $fc = new Fcm;
        $fc->device_token = $device_token;
        $fc->user_id = $user->id;
        $fc->save();

    }else{
        $up = Fcm::where('user_id' , $user->id)->update([
            'device_token'=>  $device_token, 
        ]);
    }

        return response()->json([
            'fcm'=> $fcm, 
          
         

        ]);
    }
}
