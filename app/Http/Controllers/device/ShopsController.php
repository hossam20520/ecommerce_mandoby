<?php

namespace App\Http\Controllers\device;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use App\Exports\ShopsExport;
use App\Models\Shop;
use App\Models\Warehouse;
use App\Models\User;
use App\Models\Discount;

use App\utils\helpers;
use Carbon\Carbon;
use DB;
use Illuminate\Support\Facades\Auth;
use Illuminate\Pagination\LengthAwarePaginator;
use Illuminate\Pagination\Paginator;
use Illuminate\Validation\Rule;
use Illuminate\Validation\ValidationException;
use Maatwebsite\Excel\Facades\Excel;
use \Gumlet\ImageResize;
use Illuminate\Support\Facades\Validator;
use Illuminate\Http\JsonResponse;
use GuzzleHttp\Client;

use App\Models\Brand;
use App\Models\Category;
use App\Models\Product;
use App\Models\ProductVariant;
use App\Models\product_warehouse;
use App\Models\Unit;

use App\Models\Cart;
use App\Models\Cartitem;
use Twilio\Rest\Client as Client_Twilio;
use App\Exports\SalesExport;
use App\Mail\SaleMail;
use App\Models\PaymentSale;
use App\Models\Quotation;
use App\Models\Role;
use App\Models\Sale;
use App\Models\SaleDetail;
use App\Models\Setting;
use App\Models\PosSetting; 
 use Illuminate\Support\Facades\Mail;
 use Stripe;
use App\Models\PaymentWithCreditCard;


class ShopsController extends Controller
{






    
    public function createShop(Request $request)
    {
        // $this->authorizeForUser($request->user('api'), 'create', Shop::class);

   
            
        try {
            $validatedData = $request->validate([
                'ar_name' => 'required',
                'en_name' => 'required',
            ], [
                'ar_name.required' => 'This ar_name is Required.',
                'en_name.required' => 'This en_name is Required.',
            ]);
            
            // Process the validated data
        
    

            \DB::transaction(function () use ($request) {

                //-- Create New Shop
                $Shop = new Shop;

                //-- Field Required
                $Shop->ar_name = $request['ar_name'];
                $Shop->en_name = $request['en_name'];
                $Shop->merchant_id = Auth::User()->id; 
 

                if ($request['images']) {
                    $files = $request['images'];
                    foreach ($files as $file) {
                        $fileData = ImageResize::createFromString(base64_decode(preg_replace('#^data:image/\w+;base64,#i', '', $file['path'])));
                        $fileData->resize(200, 200);
                        $name = rand(11111111, 99999999) . $file['name'];
                        $path = public_path() . '/images/shops/';
                        $success = file_put_contents($path . $name, $fileData);
                        $images[] = $name;
                    }
                    $filename = implode(",", $images);
                } else {
                    $filename = 'no-image.png';
                }

                $Shop->image = $filename;
                $Shop->save();

                $Warehouse = new Warehouse;
                $Warehouse->name = $request['en_name'];
                $Warehouse->mobile = "010";
                $Warehouse->country = "egypt";
                $Warehouse->city = "city";
                $Warehouse->zip =  $Shop->id;
                $Warehouse->email = $Shop->id;
                $Warehouse->shop_id = $Shop->id;
                $Warehouse->save();

            }, 10);

    
            return response()->json([
                'status' => 200,
                'message' => 'success',
                'data' => Auth::User(),
            ], 200);

        } catch (ValidationException $e) {
            return response()->json([
                'status' => 422,
                'message' => 'error',
                'errors' => $e->errors(),
            ], 422);
        }

    }







 public function CreateSession($name , $price){
        
        $obj = [
                
         "client_reference_id" =>1,
         "mode" =>  "payment",
         "products" => [ 
            
        array( "name" => $name, "quantity" => 1, "unit_amount" => 100 ) ,
     
          
         ] ,
         "success_url"=> "https://checkin.com/success",
         "cancel_url"=> "https://checkin.com/cancel",
         "metadata"=> [
            "customer_name"=>"",
            "order_id" =>  0,
            "email" => ""
         ]
          
          ];
  
    
        $client = new client();
        $res = $client->post(env('PAYMENT_API_URL')."/api/v1/checkout/session", [
                                'http_errors' => false,
                                'verify' => false,
                                'headers' => ['Content-Type' => 'application/json', 'Accept' => 'application/json' , 'Accept-Encoding'=> 'gzip, deflate, br'  , 
                                 'thawani-api-key'=> env('SECRET_KEY')],
                                  'body'    => json_encode( $obj)
                                ]);
    
    
                                
                                $res->getHeader('content-type');
                                $response = json_decode($res->getBody(), true);
               
                                return $response['data']['session_id'];
      
    
    }










    public function storeSale(Request $request){
 

       
        $helpers = new helpers();
        $user = $helpers->getInfo();
        $cart = Cart::with('CartItems.product')->where('deleted_at', '=', null)->where('user_id', $user->id)->where('order_id' , '=', null)->first();

 
        $order = new Sale;
        $order->is_pos = 0;
        $order->date =  "2023-06-21";
        $order->Ref = $this->getNumberOrder();
        $order->client_id = $user->id;
        $order->GrandTotal =  $cart->total;
        $order->warehouse_id = 1;
        $order->tax_rate = 0;
        $order->TaxNet = 0;
        $order->discount = 0;
        $order->shipping = 0;
        $order->statut =  "ordered";
        $order->payment_statut = 'unpaid';
        $order->notes =  "";
        $order->user_id = $user->id;

        $order->save();
       
        Client::create([
            'name' => $user->firstname ." ". $user->lastname,
            'code' =>   $order->id,
            'adresse' => $request['address'],
            'phone' => $request['phone'],
            'email' =>  $user->email,
            'country' => $request['country'],
            'city' =>  $request['country'] ,
             ]);
  
        // $data = $request['details'];
         $data =  $cart;

         Cart::whereId($cart->id)->update([
            'order_id' =>    $order->id  
 
            ]);


            // $carBook =  Fbook::where('id', $book_id)->first();
            // $dep = DepositSetting::where('deleted_at', '=', null)->first();
            // $totalCost =  $carBook->totalCost;
            // $val = "";
            // if ($dep->type == "val"){
            //   $val = floatval($totalCost)   -  floatval( $dep->car);
            //   }else {
            //     $converted = $dep->car / 100;
            //     $duee = $totalCost * $converted;
            //     $val = floatval($totalCost)   -  floatval($duee);
            //   }

        //    add here the 
       $setting =  Setting::where('deleted_at', '=', null)->first();
     
       if($setting->value == 0){

           $valu = floatval($order->GrandTotal )   -  floatval( $setting->value);

         }else{

             $converted =$order->GrandTotal / 100;
             $duee = $order->GrandTotal * $converted;
             $valu = floatval($order->GrandTotal)   -  floatval($duee);
         }


 
        Client::create([
            'name' => $user->firstname ." ". $user->lastname,
            'code' =>   $order->id,
            'adresse' => $request['address'],
            'phone' => $request['phone'],
            'email' =>  $user->email,
            'country' => $request['country'],
            'city' =>  $request['country'] ,
             ]);

        foreach ( $cart->CartItems  as   $value) {
            $subtotalPrice = floatval( $value->qty )   *   floatval( $value->price);
            $unit = Unit::where('id', 1)
                ->first();
            $orderDetails[] = [
                'date' =>  "2023-06-21",
                'sale_id' => $order->id,
                'sale_unit_id' => 1,
                'quantity' => $value->qty,
                'price' =>  $value->price,
                'TaxNet' =>0,
                'tax_method' =>  "Exclusive",
                'discount' => 0,
                'discount_method' => 'Fixed',
                'product_id' => $value->product_id,
                'total' => $subtotalPrice,
            ];

 
        }
        SaleDetail::insert($orderDetails);

        $role = Auth::user()->roles()->first();
        // $view_records = Role::findOrFail($role->id)->inRole('record_view');
        // $statusPament = $request->payment['status'];
        $statusPament = "pending";
 

   
        return response()->json(['status' => "success" ,  'message'=> 'Order Placed'   ], 200);
   
}

}
 
