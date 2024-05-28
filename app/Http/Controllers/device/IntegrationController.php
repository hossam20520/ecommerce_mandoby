<?php

namespace App\Http\Controllers\device;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use GuzzleHttp\Client;
use App\Models\Setting;
use App\Models\Order;
use App\Models\Sale;
use App\Models\User;
use App\Models\Product;
use App\Models\SaleDetail;

use DB;
use App\utils\helpers;
use Carbon\Carbon;
use Illuminate\Support\Facades\Auth;

class IntegrationController extends Controller
{
   



  public function getNumberOrder()
  {

      $last = DB::table('sales')->latest('id')->first();

      if ($last) {
          $item = $last->Ref;
          $nwMsg = explode("_", $item);
          $inMsg = $nwMsg[1] + 1;
          $code = $nwMsg[0] . '_' . $inMsg;
      } else {
          $code = 'SL_1111';
      }
      return $code;
  }

  public function CreateSale(Request $request){


   

      $currentDate = Carbon::now()->format('Y-m-d');
      $user_id = $request->user_id;
      $GrandTotal = $request->total;
      $odoo_refrence = $request->odoo_reference;
      $discount = $request->discount;
      $notes =  $request->notes;
      $date = $currentDate;
     
    
      $product_id = $request->product_refrence;

      $application_order_reference = $request->application_order_reference;

      $odoo_ref = Sale::where('Ref' , $application_order_reference )->where('deleted_at' , '=' , null)->first();
   

      if($odoo_ref){

        Sale::where('Ref' ,  $application_order_reference)->update([
          'statut'=> 'pending'
        ]);
        return true;
      }
      
      $userC =  User::where('code' , $user_id)->first();
      if(!$userC){
        return response()->json([
          'message_ar' =>  "العميل غير موجود من فضلك قم بالمزامنة",
          'message_en' =>  "Customer not Found, please do Sync",
          'status' => false
       
            ] , 404);
      }



      $data = $request['details'];
      foreach ($data as $key => $value) {

        $product  = Product::where('code' , $value['product_refrence'])->first();

           
        if(!$product){
          return response()->json([
            'message_ar' =>  "المنتج غير موجود من فضلك قم بالمزامنة",
            'message_en' =>  "Product not Found, please do Sync",
            'status' => false
         
              ] , 404);
        }

      }


      $settings = Setting::where('deleted_at', '=', null)->first();
      $helpers = new helpers();
      $order = new Sale;

      $order->is_pos = 0;
      $order->date = $date;
      $order->Ref = $this->getNumberOrder();
      $order->client_id =  $userC->id;
 
      $order->GrandTotal = $GrandTotal ;
      $order->warehouse_id = $settings->warehouse_id;
      // $order->odoo_refrence = $request->odoo_refrence;
      $order->odoo_ref  = $odoo_refrence;
      $order->tax_rate = 0;
      $order->TaxNet = 0;
      $order->discount = $discount;
      $order->shipping = 0;
      $order->statut =  "pending";
      $order->payment_statut = 'unpaid';
      $order->notes =  $notes;
      $order->user_id = Auth::user()->id;

      $order->save();

 

       
      foreach ($data as $key => $value) {

        $product  = Product::where('code' , $value['product_refrence'])->first();

           
        if(!$product){
          return response()->json([
            'message_ar' =>  "المنتج غير موجود من فضلك قم بالمزامنة",
            'message_en' =>  "Product not Found, please do Sync",
            'status' => false
         
              ] , 404);
        }

         
          $orderDetails[] = [
              'date' => $date,
              'sale_id' => $order->id,
              'sale_unit_id' =>  $product->sale_unit_id ,
              'quantity' => $value['quantity']   ,
              'price' => $product->price ,
              'TaxNet' => 0,
              'tax_method' => 0,
              'discount' => $product->discount,
              'discount_method' =>  "2",
              'product_id' => $product->id,
              'product_variant_id' => null,
              'total' =>  $value['total'],
          ];


   
      }
      SaleDetail::insert($orderDetails);

    

 

  
  return response()->json([
    'message_ar' =>  "تم انشاء الاوردر",
    'message_en' =>  "Order has been created",
    'order_refrence' => $order->Ref, 
    'status' => true
      ] , 200);



  }
  
  public function SendProductsLines($products , $customer_id , $sale_ref , $dicount ){

    $client = new Client();

    $setting = Setting::where('deleted_at' , '=' , null)->first();

    $responseData = $client->post($setting->odoo_url.'/api/sales?discount='.$dicount.'&order_reference='.$sale_ref.'&customer_id='.$customer_id, [
        'headers' => [
            'db' => $setting->db_name ,
            'Content-Type' => 'application/json',
            'access_token' => $setting->token_api,
            // 'Cookie' => 'session_id=1e66bbeb32454abe43d30e9e2f4dd8aa202b920a',
        ],
        'json' => [
     
            'order_lines' => $products
            
            
            // [
            //     [
            //         'product_id' => 15,
            //         'qty' => 5,
            //         'application_price' => 11
            //     ],
            //     [
            //         'product_id' => 10000000,
            //         'qty' => 5,
            //         'application_price' => 11
            //     ]
            // ]



        ]
    ]);


    // if ($responseData && isset($responseData['count']) && $responseData['count'] > 0) {
            
    //     return "Success";


    // } else {
    //         if ($responseData && isset($responseData['type'])) {
    //         // Type is found
    //         // $type = $responseData['type'];
    //         // $message = $responseData['message'];
    //         // echo "Type: $type, Message: $message";


    //          } else {
    //         // Type not found
    //             // echo "Type not found";
    //     }



    // }





  }


}
