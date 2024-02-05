<?php
namespace App\Http\Controllers;

use App\Models\Fcm;
use App\utils\helpers;
use Carbon\Carbon;
use DB;
use Illuminate\Http\Request;
use Intervention\Image\ImageManagerStatic as Image;
use Illuminate\Support\Facades\Http;

class NotificationsController extends Controller
{

    //------------ GET ALL Notifications -----------\

    public function index(Request $request)
    {
      
        // How many items do you want to display.
        $perPage = $request->limit;
        $pageStart = \Request::get('page', 1);
        // Start displaying items from this number;
        $offSet = ($pageStart * $perPage) - $perPage;
        $order = $request->SortField;
        $dir = $request->SortType;
        $helpers = new helpers();

        $notifications = Fcm::with('user')->where('deleted_at', '=', null)->where(function ($query) use ($request) {
                return $query->when($request->filled('search'), function ($query) use ($request) {
                    return $query->whereHas('user', function ($q) use ($request) {
                        $q->where('firstname', 'LIKE', "%{$request->search}%")
                        ->orWhere('lastname', 'LIKE', "%{$request->search}%")
                        ->orWhere('phone', 'LIKE', "%{$request->search}%")->orWhere('email', 'LIKE', "%{$request->search}%");
                    });
          
                });
            });


        $totalRows = $notifications->count();
        $notifications = $notifications->offset($offSet)
            ->limit($perPage)
            ->orderBy($order, $dir)
            ->get();
             $data = array();
            foreach ($notifications as $da  ) {
                $item['id']  = $da->id;
                $item['firstname']  = $da->user->firstname;
                $item['lastname']  = $da->user->lastname;
                $item['email']  = $da->user->email;
                $item['phone']  = $da->user->phone;
                $item['device_token']  = $da->device_token;
                $data[] = $item;
            }

        return response()->json([
            'notifications' => $data,
            'totalRows' => $totalRows,
        ]);

    }

    //---------------- STORE NEW Notification -------------\

    public function store(Request $request)
    {
     
        $firebaseToken = Fcm::whereNotNull('device_token')->pluck('device_token')->all();
            
        $SERVER_API_KEY = env('FCM_SERVER_KEY', 'AAAAjE4uqNk:APA91bGBl7CN2AnB3_SzsyQBSTnZzu5C35pwlJ_WSkePXTZVJcpYVB89qmI0vTqyG388krsWNYGK56g-I9WwSKhVcejju2yoJI4eRCTtaCGn4HauRiTsbEpJLXfLR4jKizOnT5pnIuxl') ;
    
        $data = [
            "registration_ids" => $firebaseToken,
            "notification" => [
                "title" => $request->title,
                "body" => $request->body,  
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

     //------------ function show -----------\

     public function show($id){
        //
    
    }

     //---------------- UPDATE Notification -------------\

     public function update(Request $request, $id)
     {
        
 
        $firebaseToken = Fcm::whereNotNull('device_token')->where('id' , $id)->pluck('device_token')->all();
            
        $SERVER_API_KEY = env('FCM_SERVER_KEY', 'AAAAjE4uqNk:APA91bGBl7CN2AnB3_SzsyQBSTnZzu5C35pwlJ_WSkePXTZVJcpYVB89qmI0vTqyG388krsWNYGK56g-I9WwSKhVcejju2yoJI4eRCTtaCGn4HauRiTsbEpJLXfLR4jKizOnT5pnIuxl') ;
    
        $data = [
            "registration_ids" => $firebaseToken,
            "notification" => [
                "title" => $request->title,
                "body" => $request->body,  
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


     public function sendNotification($id , $title , $body )
     {
        
 
        // $firebaseToken = Fcm::whereNotNull('device_token')->where('id' , $user)->pluck('device_token')->all();
           
        
        $firebaseToken = Fcm::whereNotNull('device_token')->where('user_id' ,  $id)->first();
            if(!$firebaseToken){
               return false;
            }
        
        $SERVER_API_KEY = env('FCM_SERVER_KEY', 'AAAAjE4uqNk:APA91bGBl7CN2AnB3_SzsyQBSTnZzu5C35pwlJ_WSkePXTZVJcpYVB89qmI0vTqyG388krsWNYGK56g-I9WwSKhVcejju2yoJI4eRCTtaCGn4HauRiTsbEpJLXfLR4jKizOnT5pnIuxl') ;
    
        $data = [
            "registration_ids" => $firebaseToken->device_token,
            "notification" => [
                "title" => $title,
                "body" =>  $body ,  
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



    //------------ Delete Notification -----------\

    public function destroy(Request $request, $id)
    {


        Fcm::whereId($id)->update([
            'deleted_at' => Carbon::now(),
        ]);
        return response()->json(['success' => true]);
    }

    //-------------- Delete by selection  ---------------\

    public function delete_by_selection(Request $request)
    {

     

        $selectedIds = $request->selectedIds;
        foreach ($selectedIds as $notification_id) {
            Fcm::whereId($notification_id)->update([
                'deleted_at' => Carbon::now(),
            ]);
        }
        return response()->json(['success' => true]);

    }

}

