<?php
namespace App\utils;

use App\Models\Currency;
use App\Models\Role;
use App\Models\Setting;
use App\Models\Cart;
use App\Models\Favourit;

use Illuminate\Support\Facades\Auth;

class helpers
{


    public function IsInWhishlist($product_id , $user_id){

       $products = Favourit::where('deleted_at', '=', null)->where('product_id' , $product_id )->where('user_id' , $user_id )->first();

        if($products){

            return true;

        }else{

            return false;
        }
  

    }



    public function IsInCart($product_id , $user_id){


        $cart = Cart::where('user_id', $user_id)->whereNull('order_id')->first();

         if($cart){
            return   $cart->ProductIsInCart($product_id);
         }else{
           false;
         }
        
         

         

        // $cart = Cart::where('deleted_at', '=', null)->where('user_id' ,  $user_id)->where('order_id' ,  '='  , null )->first();

        // if(!$cart){
        //     return false;
        // }
 

        // $cartItem =  Cartitem::where('deleted_at', '=', null)->where('product_id' , $product_id )->where('cart_id' ,  $cart->id )->first();


  


        if( false){

            return true;

        }else{
            return false;
        }
      
 


    }


    public function singleProduct($product){
        $is_widh =  false;
        $isCart =   false;
        if (!Auth::check()) {
            $is_widh =  false;
            $isCart =   false;
        }else{
             $user =  Auth::user();
             $is_widh =  $this->IsInWhishlist($product['product']->id , $user->id);
             $isCart =   $this->IsInCart($product['product']->id , $user->id);
        }
 
        $item['id'] = $product['product']->id;
        $item['code'] = $product['product']->code;
        $item['en_name'] = $product['product']->name;
        $item['ar_name'] = $product['product']->ar_name;
        $item['ar_category'] = $product['product']['category']->name;
        $item['en_category'] = $product['product']['category']->en_name;
        $item['ar_unit'] = $product['product']['unit']->name;
        $item['en_unit'] = $product['product']['unit']->ShortName;
        $item['price'] = $product['product']->price;
        $item['ar_description'] =$product['product']->ar_description;
        $item['en_description'] = $product['product']->en_description;
        $item['discount'] = $product['product']->discount;
        $item['photo']= $product['product']->photo;
        $item['isInWishlist'] =    $is_widh;
        $item['category_id'] =    $product['product']->category_id;
        
        $item['status'] = $product['product']->status;
 
      

        $item['isInCart'] =  $isCart;

        if ($product['product']->image != '') {
            // $isFirstImage = true; 
            foreach (explode(',', $product['product']->image) as $img) {
                // $item['images'][] = "/public/images/products/".$img;
                $item['gallery'][] =  "/images/products/". $img;
            }
        }
        $firstimage = explode(',', $product['product']->image);
        $item['image'] = "/images/products/".$firstimage[0];


        if ($product['product']->image != '') {
            // $isFirstImage = true; 
            foreach (explode(',', $product['product']->image) as $img) {
                // $item['images'][] = "/public/images/products/".$img;
                $item['gallery_full'][] =  env('URL', 'http://192.168.1.5:8000')."/images/products/". $img;
            }
        }


        $item['full_image_url'] = env('URL', 'http://192.168.1.5:8000')."/images/products/".$firstimage[0];

        if ($product['product']['unitSale']->operator == '/') {
            $item['qte_sale'] = $product['product']->qte * $product['product']['unitSale']->operator_value;
            $price = $product['product']->price / $product['product']['unitSale']->operator_value;
        } else {
            $item['qte_sale'] = $product['product']->qte / $product['product']['unitSale']->operator_value;
            $price = $product['product']->price * $product['product']['unitSale']->operator_value;
        }

        if ($product['product']['unitPurchase']->operator == '/') {
            $item['qte_purchase'] = round($product['product']->qte * $product['product']['unitPurchase']->operator_value, 5);
        } else {
            $item['qte_purchase'] = round($product['product']->qte / $product['product']['unitPurchase']->operator_value, 5);
        }

         $item['qte'] = $product->qte;
        //  $item['unitSale'] = $product_warehouse['product']['unitSale']->ShortName;
        // $item['unitPurchase'] = $product_warehouse['product']['unitPurchase']->ShortName;

        if ($product['product']->TaxNet !== 0.0) {
            //Exclusive
            if ($product['product']->tax_method == '1') {
                $tax_price = $price * $product['product']->TaxNet / 100;
                $item['Net_price'] = $price + $tax_price;
                // Inxclusive
            } else {
                $item['Net_price'] = $price;
            }

        } else {
            $item['Net_price'] = $price;
        }
        
         return $item;

    }




    //  Helper Multiple Filter
    public function filter($model, $columns, $param, $request)
    {
        // Loop through the fields checking if they've been input, if they have add
        //  them to the query.
        $fields = [];
        for ($key = 0; $key < count($columns); $key++) {
            $fields[$key]['param'] = $param[$key];
            $fields[$key]['value'] = $columns[$key];
        }

        foreach ($fields as $field) {
            $model->where(function ($query) use ($request, $field, $model) {
                return $model->when($request->filled($field['value']),
                    function ($query) use ($request, $model, $field) {
                        $field['param'] = 'like' ?
                        $model->where($field['value'], 'like', "{$request[$field['value']]}")
                        : $model->where($field['value'], $request[$field['value']]);
                    });
            });
        }

        // Finally return the model
        return $model;
    }

    //  Check If Hass Permission Show All records
    public function Show_Records($model)
    {
        $Role = Auth::user()->roles()->first();
        $ShowRecord = Role::findOrFail($Role->id)->inRole('record_view');

        if (!$ShowRecord) {
            return $model->where('user_id', '=', Auth::user()->id);
        }
        return $model;
    }

    // Get Currency
    public function Get_Currency()
    {
        $settings = Setting::with('Currency')->where('deleted_at', '=', null)->first();

        if ($settings && $settings->currency_id) {
            if (Currency::where('id', $settings->currency_id)
                ->where('deleted_at', '=', null)
                ->first()) {
                $symbol = $settings['Currency']->symbol;
            } else {
                $symbol = '';
            }
        } else {
            $symbol = '';
        }
        return $symbol;
    }

    // Get Currency COde
    public function Get_Currency_Code()
    {
        $settings = Setting::with('Currency')->where('deleted_at', '=', null)->first();

        if ($settings && $settings->currency_id) {
            if (Currency::where('id', $settings->currency_id)
                ->where('deleted_at', '=', null)
                ->first()) {
                $code = $settings['Currency']->code;
            } else {
                $code = 'usd';
            }
        } else {
            $code = 'usd';
        }
        return $code;
    }

}
