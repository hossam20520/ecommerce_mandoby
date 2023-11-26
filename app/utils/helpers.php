<?php
namespace App\utils;

use App\Models\Currency;
use App\Models\Role;
use App\Models\Setting;
use Illuminate\Support\Facades\Auth;

class helpers
{


    public function IsInWhishlist($product_id , $user_id){

        // $products = Favourit::where('deleted_at', '=', null)->where('product_id' , $product_id )->where('user_id' , $user_id )->first();

        if(false){

            return true;

        }else{

            return false;
        }
  

    }



    public function IsInCart($product_id , $user_id){
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
             $is_widh =  $this->IsInWhishlist($product->id , $user->id);
             $isCart =   $this->IsInCart($product->id , $user->id);
        }
 
        $item['id'] = $product->id;
        $item['en_name'] = $product->name;
        $item['ar_name'] = $product->ar_name;
        $item['ar_category'] = $product['category']->name;
        $item['en_category'] = $product['category']->en_name;
        $item['ar_unit'] = $product['unit']->name;
        $item['en_unit'] = $product['unit']->ShortName;
        $item['price'] = $product->price;
        $item['ar_description'] =$product->ar_description;
        $item['en_description'] =$product->en_description;
        $item['discount'] = $product->discount;
     
        $item['photo']= $product->photo;
        $item['isInWishlist'] =    $is_widh;
        $item['isInCart'] =  $isCart;
        if ($product->image != '') {
            // $isFirstImage = true; 
            foreach (explode(',', $product->image) as $img) {
                // $item['images'][] = "/public/images/products/".$img;
                $item['gallery'][]=  env('url', 'http://localhost:8000')."/images/products/". $img;
            }
        }
        $firstimage = explode(',', $product->image);
        $item['image'] = "/public/images/products/".$firstimage[0];
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
