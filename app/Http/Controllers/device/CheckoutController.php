<?php

namespace App\Http\Controllers\device;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;

use App\Models\Brand;
use App\Models\Category;
use App\Models\Client;
use App\Models\PaymentSale;
use App\Models\Product;
use App\Models\Setting;
use App\Models\PosSetting;
use App\Models\ProductVariant;
use App\Models\product_warehouse;
use App\Models\PaymentWithCreditCard;
use App\Models\Role;
use App\Models\Sale;
use App\Models\Unit;
use App\Models\Cart;
use App\Models\User;
use App\Models\SaleDetail;
use App\Models\Warehouse;
use App\utils\helpers;
use Carbon\Carbon;
use DB;
use App\utils\ApiResponse;
use Illuminate\Support\Facades\Auth;
use Stripe;

class CheckoutController extends Controller
{


  public function applyPromoCode(Request $request){

    $user = Auth::user();
    $promoCode = $request->code;
    $cart = $user->cart()->where('order_id', '=', null)->first();
if ($cart) {
 
    $isApplied = $user->cart()->where('promo_code' ,  '=' , null)->where('order_id', '=', null)->first();

  if( $isApplied ){

   
    $applied = $cart->applyPromoCode($promoCode);
    if (!$applied) {
        // Handle invalid or expired promo code
        return ApiResponse::OrderResponseStatus('INVALID_PROMO', 'Invalid or expired promo code.');
    }
}else{
    return ApiResponse::OrderResponseStatus('USED', 'Invalid or expired promo code.');  
}

} else {
    // Handle empty cart
    // $cart = $user->cart()->where('promo_code' ,  '=' , null)->first();

  

    
    return ApiResponse::OrderResponseStatus('EMPTY_CART', 'There are no items in the cart.');
}



return ApiResponse::OrderResponseStatus('APPLIED', 'Applied promo.');


 


  }



    public function CheckOut(Request $request)
    {

 
      
  
            $helpers = new helpers();
            $user = Auth::user();

            $caart = $user->cart()->where('order_id' , '=' , null)->first();
            if(!$caart){
                return ApiResponse::OrderResponseStatus('EMPTY'   );
             }
           

            $data = app('App\Http\Controllers\device\CartController')->getCartData($user->id);
            
        
            foreach ($data['cartItems'] as $key => $value) {
                $productexist =  app('App\Http\Controllers\device\ProductsController')->ProducctInStock($value['product']->id);
                  
              
                if(!$productexist){
                    //   return $value;   
                   
                    //   return ApiResponse::errorNotFound('Not enught stock', 'المنتج غير موجود');
                      return ApiResponse::OrderResponseStatus('NOTFOUND'   );
                      break;
  
                  }
                 
  
              }

           
       
            // $client = Client::where('deleted_at', '=', null)->where('user_id' , $user->id)->first();
            $settings = Setting::where('deleted_at', '=', null)->first();

             $cartUser = Cart::where('user_id' , $user->id )->where('order_id' , '=' , null)->first();
             if(!$cartUser){
                return ApiResponse::OrderResponseStatus('EMPTY'   );
                // return ApiResponse::errorNotFound('There is no products in Cart', 'لا توجد منتجات في السلة');
             }

            //  $toalDiscount = $cartUser->getTotalDiscount();
            $toalDiscount = $cartUser->discounted_value;
            

            // if(!$client){
            //      $client = new Client;
            //      $client->name =  $user->firstname." ".$user->lastname;
            //      $client->code  = 0;
            //     //  $client->addresse  =  $user->address;
            //      $client->email  =  $user->email;
            //      $client->phone  =  $user->phone;
            //      $client->country  =   "";
            //      $client->city  =   "city";
            //      $client->user_id  =    $user->id;
            //      $client->save();

            // }

          

            $order = new Sale();
            $order->is_pos = 1;
            $order->date = Carbon::now();
            $order->Ref = app('App\Http\Controllers\SalesController')->getNumberOrder();
            $order->client_id = Auth::user()->id;
            $order->warehouse_id =  $settings->warehouse_id;
            $order->tax_rate = 0;
            $order->TaxNet = 0;
            $order->discount =  floatval($toalDiscount);
            $order->shipping = 0;
            $order->GrandTotal =  floatval($data->total);
            $order->statut = 'ordered';
            $order->user_id = Auth::user()->id;
            $order->save();

           

            // return $value['product']->unit_sale_id;
           
          
            // $cartItem->in_stock = $this->ProducctInStock($cartItem->product->id);
     
           $customer = User::where('id' ,  Auth::user()->id )->first();

            $order_line = array(); 
            foreach ($data['cartItems'] as $key => $value) {
                $unit = Unit::where('id', $value['product']->unit_sale_id)->first();
                
                $orderDetails[] = [
                    'date' => Carbon::now(),
                    'sale_id' => $order->id,
                    'sale_unit_id' => $value['product']->unit_sale_id,
                    'quantity' => $value->qty,
                    'product_id' =>  $value['product']->id,
                    'product_variant_id' => null,
                    'total' => $value->subtotal - $value->discount,
                    'price' => $value['product']->price,
                    'TaxNet' => $value['product']->TaxNet,
                    'tax_method' => 1,
                    'discount' => $value->discount,
                    'discount_method' => 2,
                   ];
 
                    $product_warehouse = product_warehouse::where('warehouse_id', $order->warehouse_id)
                        ->where('product_id', $value['product']->id)
                        ->first();
                    if ($unit && $product_warehouse) {
                        if ($unit->operator == '/') {
                            $product_warehouse->qte -= $value->qty / $unit->operator_value;
                        } else {
                            $product_warehouse->qte -= $value->qty * $unit->operator_value;
                        }
                        $product_warehouse->save();
                    }

 
                    $product_item =  [
                        'product_id' =>   (int)$value['product']->external_id,
                        'qty' => $value->qty,
                        'application_price' => $value['product']->price
                       ];

                    array_push( $order_line, $product_item);
                    
            }

            SaleDetail::insert($orderDetails);
            $sale = Sale::findOrFail($order->id);
    
      


            // return  $order_line ;
            // $ordlineaa = [
              
            //     [
            //         "product_id" =>  1175,
            //         "qty"  =>  1, 
            //         "application_price" =>  661
            //     ]
    
             
            //     ];
 
            app('App\Http\Controllers\device\IntegrationController')->SendProductsLines($order_line , $customer->code , $sale->Ref );
            
            //  app('App\Http\Controllers\device\IntegrationController')->SendProductsLines($ordlineaa , $customer->code , $sale->Ref );


            Cart::where('order_id' , '=' , null)->where('user_id' , $user->id)->update([
                'order_id' => $order->id
            ]);



            
           
          
          
            return  ApiResponse::SuccessResponseStatus('PAID'  , "ff"  , "rrrr");
            // return $order->id;

 

     
    }
}
