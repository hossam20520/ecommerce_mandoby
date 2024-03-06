<?php
namespace App\Http\Controllers;

use App\Models\Order;
use App\Models\Sale;
use App\Models\User;
use App\utils\helpers;
use Carbon\Carbon;
use DB;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Intervention\Image\ImageManagerStatic as Image;

class OrdersController extends Controller
{

    //------------ GET ALL Orders -----------\

    public function index(Request $request)
    {
        // $this->authorizeForUser($request->user('api'), 'view', Order::class);
        // How many items do you want to display.
        $perPage = $request->limit;
        $pageStart = \Request::get('page', 1);
        // Start displaying items from this number;
        $offSet = ($pageStart * $perPage) - $perPage;
        $order = $request->SortField;
        $dir = $request->SortType;
        $helpers = new helpers();

        $orders = Order::with('order')->where('deleted_at', '=', null)->where('user_id' , $request->id)->where(function ($query) use ($request) {
                return $query->when($request->filled('search'), function ($query) use ($request) {
                    return $query->where('ar_name', 'LIKE', "%{$request->search}%")
                        ->orWhere('en_name', 'LIKE', "%{$request->search}%");
                });
            });
        $totalRows = $orders->count();
        $orders = $orders->offset($offSet)
            ->limit($perPage)
            ->orderBy($order, $dir)
            ->get();

       $data = array();
       $orders_ids = array();
       foreach ($orders as $da) {
          $item['id'] = $da->id;
          $item['order_id'] = $da->order->id;
          array_push($orders_ids , $da->order->id);
          $item['Ref'] = $da->order->Ref;
          $item['GrandTotal'] = $da->order->GrandTotal;
          $item['Ref'] = $da->order->Ref;
          $item['status'] = $da->status;
          $item['paid_cash'] = $da->paid_cash;
          $item['received_time_warehouse'] = strval($da->received_time_warehouse) ;
          $item['start_time'] = $da->start_time;
          $item['end_time'] = $da->end_time;
          $item['image'] = $da->image;
          $item['payment_type'] = $da->payment_type;
          
          $data[] = $item;
       }
 
       $sales = Sale::where('deleted_at', '=', null)->where('statut' ,  'pending' )->whereNotIn('id', $orders_ids)->whereDoesntHave('orders')->get();
       $user = User::where('id' ,$request->id  )->first();
       
       
       return response()->json([
            'orders' =>  $data ,
            'sales'=>  $sales ,
            'user'=>  $user,
            'totalRows' => $totalRows,
        ]);

    }

    //---------------- STORE NEW Order -------------\

    public function store(Request $request)
    {
        // $this->authorizeForUser($request->user('api'), 'create', Order::class);

    

        \DB::transaction(function () use ($request) {

            $order_id =  $request['order_id'];

            $order =  Order::where('deleted_at' , '=' , null)->where('order_id' , $order_id )->first();

            if($order ){
                return response()->json(['fail' => false]);
            }

            $title = "اوردر جديد";
            $body = "لديك اوردر جديد اضغط للاستلام";
            // app('App\Http\Controllers\NotificationsController')->sendNotification($request['user_id'] ,  $title , $body );  
            
            $Order = new Order;
            $Order->user_id_action = Auth::user()->id;
            $Order->user_id = $request['user_id'];
            $Order->order_id =  $order_id;
            $Order->status = "pending";
 
            // $Order->image = $filename;
            $Order->save();

        }, 10);

        return response()->json(['success' => true]);

    }

     //------------ function show -----------\

     public function show($id){
        //
    
    }

     //---------------- UPDATE Order -------------\

     public function update(Request $request, $id)
     {
 
        //  $this->authorizeForUser($request->user('api'), 'update', Order::class);
 
        Order::whereId($id)->update([
            'user_id_action' => Auth::user()->id,
            'user_id' => $request['user_id'],
            'order_id' => $request['order_id'],
            'status' =>  "pending",
        ]);

        //   sendNotification()
        //   app('App\Http\Controllers\NotificationsController')->sendNotification();
        //    $firebaseToken = Fcm::whereNotNull('device_token')->where('id' , $id)->pluck('device_token')->all();
               
        //    $SERVER_API_KEY = env('FCM_SERVER_KEY', 'AAAAjE4uqNk:APA91bGBl7CN2AnB3_SzsyQBSTnZzu5C35pwlJ_WSkePXTZVJcpYVB89qmI0vTqyG388krsWNYGK56g-I9WwSKhVcejju2yoJI4eRCTtaCGn4HauRiTsbEpJLXfLR4jKizOnT5pnIuxl') ;
       
        //    $data = [
        //        "registration_ids" => $firebaseToken,
        //        "notification" => [
        //            "title" => $request->title,
        //            "body" => $request->body,  
        //        ]
        //    ];
        //    $dataString = json_encode($data);
         
        //    $headers = [
        //        'Authorization: key=' . $SERVER_API_KEY,
        //        'Content-Type: application/json',
        //    ];
         
        //    $ch = curl_init();
           
        //    curl_setopt($ch, CURLOPT_URL, 'https://fcm.googleapis.com/fcm/send');
        //    curl_setopt($ch, CURLOPT_POST, true);
        //    curl_setopt($ch, CURLOPT_HTTPHEADER, $headers);
        //    curl_setopt($ch, CURLOPT_SSL_VERIFYPEER, false);
        //    curl_setopt($ch, CURLOPT_RETURNTRANSFER, true);
        //    curl_setopt($ch, CURLOPT_POSTFIELDS, $dataString);
                    
        //    $response = curl_exec($ch);
    
    
        //     return response()->json(['success' =>  $response]);
       




         return response()->json(['success' => true]);
     }

    //------------ Delete Order -----------\

    public function destroy(Request $request, $id)
    {
        // $this->authorizeForUser($request->user('api'), 'delete', Order::class);

        Order::whereId($id)->update([
            'deleted_at' => Carbon::now(),
        ]);
        return response()->json(['success' => true]);
    }

    //-------------- Delete by selection  ---------------\

    public function delete_by_selection(Request $request)
    {

        // $this->authorizeForUser($request->user('api'), 'delete', Order::class);

        $selectedIds = $request->selectedIds;
        foreach ($selectedIds as $order_id) {
            Order::whereId($order_id)->update([
                'deleted_at' => Carbon::now(),
            ]);
        }
        return response()->json(['success' => true]);

    }

}

