<?php

namespace App\Http\Controllers\device;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use App\Models\User;
use App\Models\Fcm;
use Illuminate\Support\Facades\Auth;
class NotificationsController extends Controller
{
    

    public function AddFcm($user , $fcm ,$type){

 
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
