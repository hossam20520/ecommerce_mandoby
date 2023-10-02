<?php
namespace App\utils;

use App\Models\Currency;
use App\Models\Role;
use App\Models\Warehouse;
use App\Models\Shop;
use App\Models\Setting;
use App\Models\Product;
use App\Models\Favourit;
use App\Models\Cart;
use App\Models\Cartitem;
use App\Models\Review;
use App\Models\SaleDetail;
use App\Models\User;
use Illuminate\Support\Facades\Auth;

class helpers
{



    public function Products($products){
        $data = array();
        foreach ($products as $product) {
            $item =  $this->singleProduct($product);

            $data[] = $item;
        }

        return $data; 

    }









    public function GetItemProduct($itemCart){
  
          $item =  [
            "cart_item_id"=> $itemCart->id,
            "cart_id"=> $itemCart->cart_id,
            "qty"=> $itemCart->qty,
            "price"=> $itemCart->price,
            "subtotal"=> $itemCart->subtotal,
            "product"=>  $this->singleProduct($itemCart->product) ,
          ];

          return $item;
 

         }






    public function Product($product){
      
            $item =  $this->singleProduct($product);

         
    

        return $item; 

    }


    public function UserInfo(){

    }



    public function UserInfoData(){
        $user = Auth::user();

        if(!$user){
            return view("front.pages.login"  );
        }else{
            $usere = User::where('id' , $user->id)->first();
        $array = [
            'id' =>   $usere->id,
            'firstname' => $usere->firstname,
            'lastname' => $usere->lastname,
            'email' => $usere->email,
            'phone' => $usere->phone,

            
            'avatar' =>    env('url', 'http://localhost:8000') ."/images/avatar/".$usere->avatar
        ];

       

        return $array;

        }



    }



    public function getNumberCart(){
        $helpers = new helpers();
        $user = Auth::user();
        if(!$user){
           return 0;
        }
        $cart = Cart::with('CartItems.product.shop.currency')->where('deleted_at', '=', null)->where('order_id' , '=', null)->where('user_id', $user->id)->first();

       if(!$cart){
            return 0;
       }else{

       
        // $count = count($cart->cart_items);
        // return $count ;
       return 0;
       }
   
       
    }


    public function singleProduct($product){
        $is_widh =  false;

        $isCart =   false;
        if (!Auth::check()) {
            // No user is authenticated
            // You can perform actions or display messages here
            $is_widh =  false;

            $isCart =   false;
        }else{
             $user =  Auth::user();
             $is_widh =  $this->IsInWhishlist($product->id , $user->id);
             $isCart =   $this->IsInCart($product->id , $user->id);
        }
       
            
        // $user_id = $user->id;
      
        $review = Review::with('user')->where('deleted_at', '=', null)->where('product_id' ,$product->id )->orderBy('id', 'desc')->get();
 
        $totalReviews = $review->count();
        $totalRating = $review->sum('count');
        
        if ($totalReviews > 0) {
            $overallReview = $totalRating / $totalReviews;
        } else {
            $overallReview = 0;
        }

        if($product->shop){
            $vendor =  $product->shop->vendor->role;
            $product->shop->vendor->role;
            // $shop =  $product->shop;
            $shop =  $product->shop;
            $product->shop->vendor->role;
            $currencyName = $product->shop->currency->name;
            $symbol =  "ORM";
            $en_currencyName =  "ORM"; 
     
                $symbol = $product->shop->currency->symbol;
                $en_currencyName = $product->shop->currency->symbol;
   
          
        }else{
            $vendor =  null;
            $shop =  null;
            $currencyName = "ORM";
            $en_currencyName =  "ORM";
            $symbol =  "ORM";
        }



        
        $item['id'] = $product->id;
        $item['en_name'] = $product->code;
        $item['ar_name'] = $product->name;
        $item['ar_category'] = $product['category']->name;
        $item['en_category'] = $product['category']->en_name;
        // $item['brand'] = $product['brand'] ? $product['brand']->name : 'N/D';
        $item['ar_unit'] = $product['unit']->name;
        $item['en_unit'] = $product['unit']->ShortName;
        $item['price'] = $product->price;
        $item['ar_currency'] = $currencyName;
        $item['en_currency'] = $en_currencyName;
        $item['ar_description'] =$product->ar_description;
        $item['en_description'] =$product->en_description;
        $item['discount'] = $product->discount;
        $item['rate'] =  $overallReview;
        $item['photo']= $product->photo;

       

        // $item['comments'] =  $review;
        $item['symbol'] = $symbol;
        $item['isInWishlist'] =    $is_widh;
        $item['isInCart'] =  $isCart;
        $item['shop'] =  $shop;
        // $item['vendor'] =  $vendor;

        // $item['images'] = $product->image;
        if ($product->image != '') {
            // $isFirstImage = true; 
            foreach (explode(',', $product->image) as $img) {

                // if ($isFirstImage) {
                //     $isFirstImage = false;  // Set the flag to false after skipping the first image
                //     continue;  // Skip the first image
                // }

                $item['images'][] = "/public/images/products/".$img;

                $item['gallery'][]=  env('url', 'http://localhost:8000')."/images/products/". $img;
            }
        }



        $firstimage = explode(',', $product->image);
        $item['image'] = "/public/images/products/".$firstimage[0];


         return $item;

    }



    public function IsInWhishlist($product_id , $user_id){

        $products = Favourit::where('deleted_at', '=', null)->where('product_id' , $product_id )->where('user_id' , $user_id )->first();

        if($products){

            return true;

        }else{

            return false;
        }
  

    }



    public function productSchem(){
        
    }



 



    public function Pagentation(){
        
        // How many items do you want to display.
        $perPage =  $request->limit !== null ? $request->limit : 5;
        $pageStart = \Request::get('page', 1);
      
        $offSet = ($pageStart * $perPage) - $perPage;
        // $order = $request->SortField;
        $dir = $request->SortType;
       
        $order =  $request->SortField !== null ? $request->SortField  : "id";
        $dir =  $request->SortType !== null ? $request->SortType  : "desc";

 
             $helpers = new helpers();
             $productID = $request->id;
       
                 $brands = Review::with('user.role:id,name')->where('deleted_at', '=', null)->where('product_id' ,  $productID  )->where(function ($query) use ($request) {
                     return $query->when($request->filled('search'), function ($query) use ($request) {
                         return $query->where('review', 'LIKE', "%{$request->search}%")
                             ->orWhere('review', 'LIKE', "%{$request->search}%");
                     });
                 });
     
     
         
     
     
     
     
             $totalRows = $brands->count();
             $brands = $brands->offset($offSet)
                 ->limit($perPage)
                 ->orderBy($order, $dir)
                 ->get();

                 
    }

    public function singleOrder($salee){


        $saleDetail = SaleDetail::where('sale_id', $salee->id)
        ->count();
       $item['id'] = $salee->id;
       $item['ref'] = $salee->Ref;
       $item['quantity'] =  $saleDetail;
       $item['total'] = $salee->GrandTotal;
       $item['status'] = $salee->statut;
       $item['date'] = $salee->date;
       return  $item;
    }


    public function IsInCart($product_id , $user_id){
        $cart = Cart::where('deleted_at', '=', null)->where('user_id' ,  $user_id)->where('order_id' ,  '='  , null )->first();

        if(!$cart){
            return false;
        }
 

        $cartItem =  Cartitem::where('deleted_at', '=', null)->where('product_id' , $product_id )->where('cart_id' ,  $cart->id )->first();


  


        if( $cartItem){

            return true;

        }else{
            return false;
        }
      
 


    }



    public function GetDiscount($product_id){

        $products = Product::where('deleted_at', '=', null)->where('id' , $product_id )->first();
      
        if(!$products){
            return response()->json(['status' => "fail" ,  'message'=> 'product not found'   ], 404);
        }
        if($products->discount == 0 ){
         return $products->price;
        }else{
         return floatval(  $products->price) -  floatval(  $products->discount ); 
        }


    }

   public function IsMerchant(){
    $role =$this->GetUserInfo()['role'];
       if( $role == 2){
      return true;
       }else{
        return false;
       }
   }


   public function getInfo(){
    return  $this->GetUserInfo()['user'];
 }
 
   public function ShopID(){
    return $this->GetUserInfo()['shop']->id;
      }

   public function WarehouseID(){
     return $this->GetUserInfo()['Warehouse']->id;
       }

    public function GetUserInfo(){
        $user =  Auth::User();
        $Shop =  Shop::where('deleted_at', '=', null)->where('merchant_id' , $user->id)->first();
        $role = Auth::user()->roles()->first();
        if( $Shop){
            $warehouse = Warehouse::where('deleted_at', '=', null)->where('shop_id' ,  $Shop->id )->first();
           

            return [
                "role"=> $role->pivot->role_id,
                "user"=> $user,
                "shop"=> $Shop,
                "Warehouse"=> $warehouse,
            ];

        }else{
            return [
                "role"=> $role->pivot->role_id,
                "user"=> $user,
                "shop"=> 0,
                "Warehouse"=> 0,
            ];
        }
      
      
     

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
