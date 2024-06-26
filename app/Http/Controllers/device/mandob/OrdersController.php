<?php

namespace App\Http\Controllers\device\mandob;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use App\Models\Order;
use App\Models\Sale;
use App\Models\Nclient;
use App\Models\Map;
use App\Models\Task;
use App\Models\User;
use App\utils\helpers;
use Carbon\Carbon;
use App\Models\PaymentSale;
use DB;
use Illuminate\Support\Facades\Storage;
// use Intervention\Image\ImageManagerStatic as Image;


use Illuminate\Support\Facades\Auth;
class OrdersController extends Controller
{


  public function addOneClient(Request $request){
    $user =   Auth::user();
    
    if (empty($request['lat']) && $request['lat'] !== null) {
        return response()->json(['message' => 'لا توجد احداثيات'], 200);

    }


  


    if (empty($request['Section']) && $request['Section'] !== null) {
        return response()->json(['message' => 'القسم لايمكن ان يكون فارغ'], 200);

    }


    $mda =  Map::where('Point_X_Geo' , $request['lng'])->where('Point_Y_Geo' , $request['lat'])->where('google_map' , 'yes')->first();
   


    if(!$mda){

        $mda = Map::create([
            'Outlet_Name' =>$request['name'],
            'Point_X_Geo' => $request['lng'],
            'Point_Y_Geo' => $request['lat'],
            'Gov_Name' =>    $request['Gov_Name'],
            'Section' =>     $request['Section'],
            'Shiakha_Name' => $request['Shiakha_Name'],
            'Zone_Name' =>    $request['Zone_Name'],
            'Outlet_Type' =>  $request['Outlet_Type'],
            'Mobile' =>       $request['Mobile'],
            'google_map' =>    "yes",
            'assigned' =>    "no",
            'user_id' => $user->id,
            ]);
    }
   


        $tas = Task::where('deleted_at' , '=' , null)->where('user_id' ,$user->id)->where('location_id' , $mda->id)->first();

        if(!$tas){
            $tasks = new Task;
            $tasks->location_id =  $mda->id;
            $tasks->user_id = $user->id;
            $tasks->from = "0";
            $tasks->to = "0";
            $tasks->status = "pending";
            $tasks->save();
        }


        return response()->json(['message' => 'Data saved successfully'], 200);


  }


    
    public function addClients(Request $request ){
        $user =   Auth::user();
        try {
            // Retrieve the JSON data from the request
            $data = json_decode($request->getContent(), true);

            // Assuming you have a model named Msearch
            foreach ($data as $item) {
               $nclient =  Nclient::where('name' ,$item['name'] )->first();
                if(!$nclient){
                    Nclient::create([
                        'name' => $item['name'],
                        'lat' => $item['lat'],
                        'lng' => $item['lng'],
                        'user_id' => $user->id,
                        'status' =>  "pending",
                        // Add more fields as needed
                    ]);

                    $mda =  Map::where('Outlet_Name' , $item['name'])->first();
                    if(!$mda){
                        $mda = Map::create([
                            'Outlet_Name' => $item['name'],
                            'Point_X_Geo' => $item['lng'],
                            'Point_Y_Geo' => $item['lat'],
                            ]);


                    }

                    $tas = Task::where('deleted_at' , '=' , null)->where('user_id' ,$user->id)->where('location_id' , $mda->id)->first();

                    if(!$tas){
                        $tasks = new Task;
                        $tasks->location_id =  $mda->id;
                        $tasks->user_id = $user->id;
                        $tasks->from = "0";
                        $tasks->to = "0";
                        $tasks->status = "pending";
                        $tasks->save();
                    }
              



                } 

            
              
           

           
            }

            return response()->json(['message' => 'Data saved successfully'], 200);
        } catch (\Exception $e) {
            return response()->json(['error' => 'Failed to save data'], 500);
        }
  
        
    }






  public function addImage(Request $request ){
    $helpers = new helpers();
    $user =   Auth::user();
    $currentAvatar = $user->avatar;
    $oreder_ref = $request['oreder_ref'];

     $image = $request->file('bill');


     $directory = 'images/orders';

   $filename = rand(11111111, 99999999) . "_" . $oreder_ref . "_" . $image->getClientOriginalName();

// Save the original image to the 'public' storage disk
    Storage::disk('public')->put("$directory/$filename", file_get_contents($image->getRealPath()));

// Optionally, you can get the URL of the stored image
      $imageUrl = Storage::disk('public')->url("$directory/$filename");
    //   $imageUrl =  url(Storage::disk('public')->url("images/orders/{$filename}"));
    //  $path = public_path() . '/images/orders';
    //  $filename = rand(11111111, 99999999) ."_".$oreder_ref."_". $image->getClientOriginalName();


    //  Storage::disk('public')->put("$path/$filename", file_get_contents($image->getRealPath()));

     // Optionally, you can get the URL of the stored image
    //  $imageUrl = Storage::disk('public')->url("$path/$filename");


     //  $image_resize = Image::make($image->getRealPath());
  
    //  $image_resize->save(public_path('/images/orders/' . $filename));

    //  $userPhoto = $path . '/' . $currentAvatar;
    //  if (file_exists($userPhoto)) {
    //      if ($user->avatar != 'no_avatar.png') {
    //          @unlink($userPhoto);
    //      }
    //  }

     // $filename = $currentAvatar;


    // return $filename;


Order::where( 'order_id' ,$oreder_ref)->update([

 'image' =>  $filename,

]);




return response()->json(['url' =>  "/storage/images/orders/".  $filename   ], 200);



  }


    public function OrderDetail(Request $request, $id)
    {
        $sale = Sale::with('user', 'details.product')
            ->where('id', $id)
            ->first();
          
       $data = array();
        foreach ($sale->details as $da) {
            $itemm['product'] = app('App\Http\Controllers\device\ProductsController')->ProductDetail($da->product->id);
            $itemm['detail'] = $da;
            $item['notes'] =  $sale->notes;
            $data[] = $itemm;
         
        }


        // $order = Order::where('order_id' , $sale->id)->first();
        $item['id'] = $sale->id;
        $item['lat_location'] = $sale->client == null ? "0.00"  :  ($sale->client->location_lat == null ? "0.00" : $sale->client->location_lat);
        $item['long_location'] = $sale->client == null ? "0.00"  :  ($sale->client->location_long == null ? "0.00" : $sale->client->location_long);
        $item['GrandTotal'] = $sale->GrandTotal;
        $item['discount'] = $sale->discount;
        $item['statut'] = $sale->statut;
        $item['paid_cash'] = $sale->paid_amount;
        $item['Ref'] = $sale->Ref;
        $item['client'] = $sale->client;
        $item['products'] = $data;
        
        return response()->json([
            'order' => $item
        ]);
    }


    public function acceptOrder(Request $request){
        $order_id = $request->id;
        $code  = $request->code;


        $user = Auth::user();
        $order =  Order::where('order_id' ,  $order_id )->where('user_id' ,  $user->id)->first();
        if( !$order ){
            return response()->json([
                'success' => false,
                'id' => 0
            ]);
        }


        $time = Carbon::now();

        // Format the time
        $formattedTime = $time->format('g:i A');

        Order::where('order_id' ,  $order_id )->where('user_id' ,  $user->id)->update([
            'status'=> "accepted",
            'received_time_warehouse' =>  Carbon::now(),
            'RWT' =>  $formattedTime,
            
            'odoo_ref' => $code,
          
        ]);

        Sale::where('id' , $order_id)->update(  [ 'statut'=> 'shipping'  , 'odoo_refrence' => $code, ] );

        return response()->json([
            'success' => true,
            'id' => 0 
        ]);
    }



    public function updateArriveTime(Request $request , $id){  

        // $order =  Order::where('order_id' ,  $id )->where('user_id' , Auth::user()->id)->first();

        $current_time = Carbon::now()->format('h:i A');

        
        
        $current_date = Carbon::now()->format('d-m-Y');
        Order::where('order_id' ,  $id )->where('user_id' , Auth::user()->id)->update([
            'start_time'=>  $current_time,
            'CN_date'  => $current_date 
        ]);

        return response()->json([
            'success' => true,
            'id' => 0 
        ]);
    }


    

    public function getNumberOrder()
    {
        $last = DB::table('payment_sales')->latest('id')->first();

        if ($last) {
            $item = $last->Ref;
            $nwMsg = explode("_", $item);
            $inMsg = $nwMsg[1] + 1;
            $code = $nwMsg[0] . '_' . $inMsg;

        } else {
            $code = 'INV/SL_1111';
        }

        return $code;
    }
    public function pay(Request $request){

        // sale_id // amount  // 
        $sale = Sale::find($request['sale_id']);
        $Reglement =  $request['Reglement'];
        $amount =  $request['amount'];
        $notes = $request['notes'];
        $reason = $request['reason'];

        

         $pyamentType = "Cash";  
        if($Reglement == "Partial"){
           $Reglement = "partial";
           $pyamentType = "Partial";  
        }else if($Reglement == "Cash"){
            $pyamentType = "Cash";  
            $Reglement = "paid";
        }else{
           $pyamentType = "Bill";  
           $Reglement = "others";
        }


            
        // User::where('id' , Auth::user()->id)->update([
        //     'location_lat'=>  $request['lat'] ,
        //     'location_long'=>  $request['lng'] ,
        //     'updated_location' =>  1,
        // ]);
        
        // Cash
       $order =  Order::where('order_id' ,  $request['sale_id'] )->where('user_id' , Auth::user()->id)->first();
  

       if(!$order){

        return response()->json([
            'status' => false,
            'message_ar' =>  "" ,
            'message_en' => ""
        ]);


       }

      
     


        if($sale){


            $PaymentSale =  PaymentSale::where('user_id' , Auth::user()->id )->where('sale_id' ,$request['sale_id'])->first();

            if($PaymentSale){
                return response()->json([
                    'status' => false,
                    'message_ar' =>  "" ,
                    'message_en' => "Paid"
                ]);  
            }


            $total_paid = $request['amount'];
            $due = $sale->GrandTotal - $total_paid;

            if ($due === 0.0 || $due < 0.0) {
                $payment_statut = 'paid';
            } else if ($due !== $sale->GrandTotal) {
                $payment_statut = 'partial';
            } else if ($due === $sale->GrandTotal) {
                $payment_statut = 'unpaid';
            }


            $current_time = Carbon::now()->format('h:i A');


            $time1Carbon = Carbon::createFromFormat('h:i A', $order->start_time);
            $time2Carbon = Carbon::createFromFormat('h:i A',  $current_time);

 
             $diffInMinutes = $time1Carbon->diffInMinutes($time2Carbon);


            $order->update([
               'paid_cash'=> $total_paid,
               "payment_type" => $pyamentType,
               'status' => "completed",
               'reason' => $reason,
               'location_lat'=>  $request['lat']  ,
               'location_long'=>  $request['lng'] ,
               'end_time'=> $current_time,
               'delivery_time' => $diffInMinutes
                
            ]);




            
            $sale->update([
                'statut' => "completed",
                'paid_amount' => $total_paid,
                'payment_statut' => $payment_statut,
                'reason' => $reason,
            ]);


            $PaymentSale = new PaymentSale();
            $PaymentSale->sale_id = $request['sale_id'];
            $PaymentSale->Ref = $this->getNumberOrder();
            $PaymentSale->date =  Carbon::now();
            $PaymentSale->Reglement = $Reglement;
            $PaymentSale->montant = $amount;
            $PaymentSale->change = $due - $amount;
            $PaymentSale->notes =  $notes;
            $PaymentSale->user_id = Auth::user()->id;
            $PaymentSale->save();

            return response()->json([
            'success' => true,
            'id' => 0 
             ]);
        }


 


    }

    public function GetOrders(Request $request)
    {



        $perPage = $request->limit;
        $pageStart = \Request::get('page', 1);
        // Start displaying items from this number;
        $offSet = $pageStart * $perPage - $perPage;
        $order = $request->SortField;
        $dir = $request->SortType;
        $status = $request->status;
        $day = $request->day;


        
        $helpers = new helpers();
        $user = Auth::user();
        $orders = Order::with('order.user')->where('status' , $status);
        if($day == "today"){
            $currentDate = Carbon::now(); // Get current date and time
            $startOfDay = $currentDate->startOfDay(); // Start of the current day
            $endOfDay = $currentDate->endOfDay(); 
        //  return $endOfDay;
             $currentDate = Carbon::now()->format('Y-m-d');


            //  return  $currentDate;
             $orders = Order::with('order.user')->whereDate('received_time_warehouse', $currentDate);
        }else{

             $orders = Order::with('order.user')->where('status' , $status);
        }
      
        $orders->where('deleted_at', '=', null)
            ->where('user_id', $user->id)
            ->where(function ($query) use ($request) {
                return $query->when($request->filled('search'), function ($query) use ($request) {
                    return $query->where('ar_name', 'LIKE', "%{$request->search}%")->orWhere('en_name', 'LIKE', "%{$request->search}%");
                });
            });
        $totalRows = $orders->count();
        $orders = $orders
            ->offset($offSet)
            ->limit($perPage)
            ->orderBy($order, $dir)
            ->get();

          $data = [];
          $locations = [];
        foreach ($orders as $da) {
            $item['id'] = $da->id;
            $item['order_id'] = $da->order->id;
            $item['order_id'] = $da->order->id;
            $item['client_name'] = $da->order->client->firstname  ." ". $da->order->client->lastname;
            $item['phone'] = $da->order->client->phone;
            $item['GrandTotal'] = $da->order->GrandTotal;
            $item['Ref'] = $da->order->Ref;
            $item['status'] = $da->status;  //accepted /delivered /  
            // 'location_lat' ,  'location_long'
            
            $item['location_lat'] =  $da->order->client == null ? "0.00"  :  ($da->order->client->location_lat == null ? "0.00" :$da->order->client->location_lat);
            $item['location_long'] = $da->order->client == null ? "0.00"  :  ($da->order->client->location_long == null ? "0.00" :$da->order->client->location_long);


           array_push($locations , "1222" );
            $data[] = $item;
        }

        return response()->json([
            'orders' => $data 
       
        ]);
   
    }
}
