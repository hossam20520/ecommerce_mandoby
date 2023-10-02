<?php

namespace App\Http\Controllers\device;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use App\Models\Brand;
use App\Models\Category;
use App\Models\Product;
use App\utils\helpers;
use Carbon\Carbon;
use DB;
use App\Models\Shop;
use App\Models\ProductVariant;
use App\Models\product_warehouse;
use App\Models\Unit;
use App\Models\Warehouse;
use App\Models\MerchantProduct;
use App\Models\Cart;
use App\Models\Cartitem;
use App\Models\Review;
use App\Models\Sale;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Mail;
use GuzzleHttp\Client as httpClent;
use App\Models\Client;
use App\Models\Discount;
use App\Models\Setting;
use App\Models\Slider;
use App\Models\SaleDetail;
use App\Models\Dorders;
use App\Models\Session;

class ProductsController extends Controller
{
   

public function successPayment(Request $request){

 $type = $request->payment;

 if($type == "cash"){
  
 }else{

 }


}




    public function increase(Request $request){

        $user = Auth::user();
        $product = $request->product_id;
        $cart_id = $request->cart_id;


        $helpers = new helpers();
        $price = $helpers->GetDiscount($request->product_id);

        // $price
        //  $price = $request->product_id;
        
         
        $procutItem = Cartitem::where('deleted_at', '=', null)->where('cart_id' ,   $cart_id  )->where('product_id' , $product)->first();
       
        if(!$procutItem ){
            return response()->json(['status' => "fail" ,  'message'=> 'product not added to cart yet '   ], 404);
        }
        $TotcalMoney =  floatval(  $procutItem->subtotal)  + floatval( $price );    
        
        Cartitem::whereId( $procutItem->id )->update([
            'subtotal' =>   $TotcalMoney,
            'qty' =>    floatval(  $procutItem->qty)   +   1
    
        ]);
           


        // $product = $request->product_id;
        $cart = Cart::where('user_id' ,  $user->id)->where('order_id', '=' , null)->first();
        if(!$cart){
            return response()->json(['status' => "fail" ,  'message'=> 'cart already ordered'   ], 404);
        }

           // update cart total
        $TotcalMoneys =  floatval(   $cart->total )  + floatval( $price);    
        Cart::whereId($cart->id)->update([
            'total' =>    $TotcalMoneys
    
        ]);
                   
        return response()->json(['status' => "success" ,  'message'=> 'product increased'   ], 200);
    }







    public function decrease(Request $request){

        $user = Auth::user();
        $product = $request->product_id;
        $cart_id = $request->cart_id;


        $helpers = new helpers();
        $price = $helpers->GetDiscount($request->product_id);

        // $price
        //  $price = $request->product_id;
        
         
        $procutItem = Cartitem::where('deleted_at', '=', null)->where('cart_id' ,   $cart_id  )->where('product_id' , $product)->first();
       
        if(!$procutItem ){
            return response()->json(['status' => "fail" ,  'message'=> 'product not added to cart yet '   ], 404);
        }
        $TotcalMoney =  floatval(  $procutItem->subtotal) - floatval( $price );    
        

        if( ($procutItem->qty - 1) == 0 ){
            return response()->json(['status' => "fail" ,  'message'=> 'product cant be less than one'   ], 200);
        }
        Cartitem::whereId( $procutItem->id )->update([
            'subtotal' =>   $TotcalMoney,
            'qty' =>    floatval(  $procutItem->qty)  -   1
    
        ]);
           


        // $product = $request->product_id;
        $cart = Cart::where('user_id' ,  $user->id)->where('order_id', '=' , null)->first();
        if(!$cart){
            return response()->json(['status' => "fail" ,  'message'=> 'cart already ordered'   ], 404);
        }

           // update cart total
        $TotcalMoneys =  floatval(   $cart->total )  - floatval( $price);    
        Cart::whereId($cart->id)->update([
            'total' =>    $TotcalMoneys
    
        ]);
                   
        return response()->json(['status' => "success" ,  'message'=> 'product decreased'   ], 200);
    }


    public function cartCheck(Request $request){


        
        $helpers = new helpers();
      
        $user = Auth::user();
        $product_id = $request->product_id;
        // $id =  $request->cart_id;
        // $item = $request->cart_item_id;

        $ia = Cart::where('user_id', $user->id )->where('order_id', '=', null)->first();
        if(!$ia){
            return response()->json(['status' => "fail" ,  'message'=> 'cart  not found'   ], 404);
        }
  

        $cartItemc = Cartitem::with('product')->where('cart_id' ,  $ia->id )->where('product_id' , $product_id )->first();
        if(! $cartItemc){
           
            return response()->json(['status' => "fail" ,  'message'=> 'Product Not Found'   ], 404);
        }else{


            $prod = $helpers->Product($cartItemc->product);
      
           $prodc =   [
               'id'=> $cartItemc->id,
                'product'=>  $prod,
                'cart_id'=> $cartItemc->cart_id,
                'qty'=> $cartItemc->qty,
                'price'=>  $cartItemc->price,
                'subtotal'=> $cartItemc->subtotal,
           ];
             
            return response()->json( $prodc , 200);
        }
    }

    public function deleteCart(Request $request){



        $user = Auth::user();
        $product_id = $request->product_id;
        $cart = Cart::where('user_id', $user->id )->where('order_id' , '=' , null)->first();

        if(!$cart){
            return response()->json(['status' => "fail" ,  'message'=> 'Product  not found'   ], 404);
        }
        $cart_id = $cart->id;


        $cartItemc = Cartitem::where('cart_id' ,   $cart_id)->where('product_id' ,   $product_id )->first();
      
        if(!$cartItemc){
            return response()->json(['status' => "fail" ,  'message'=> 'Product not found'   ], 404);
        }else{
             Cartitem::where('cart_id' ,   $cart_id)->where('product_id' ,   $product_id )->delete();


             Cart::whereId( $cart->id )->update([
                'total' => floatval( $cart->total ) -  floatval(  $cartItemc->subtotal )  ,
            ]);
             return response()->json(['status' => "success" ,  'message'=> 'success Deleted'   ], 200);
        }
 
    }

public function getOrders(Request $request){

   $orders =  Sale::where('deleted_at', '=', null)->get();

   return response()->json([
    'orders' =>   $orders,

]);
}




    public function getSlider(Request $request){
        $type = $request->type;
        $slider = Slider::where('deleted_at', '=', null)->where('device' ,$type )->get(['image']);

        

        $data = array();
        foreach ( $slider  as $slide) {


            // $item['id'] = $slide->id;
            $item['image'] =  "/public/images/sliders/".$slide->image;
     
            $data[] = $item;

        }


        return response()->json([
            'slider' =>  $data ,

        ]);



    }

    public function getReviews(Request $request){

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
     
             return response()->json([
                 'reviews' => $brands,
                
                 'totalRows' => $totalRows,
             ]);


             

    }


    public function brands(Request $request)
    {
      
        // How many items do you want to display.
        $perPage = $request->limit;
        $pageStart = \Request::get('page', 1);
        // Start displaying items from this number;
        $offSet = ($pageStart * $perPage) - $perPage;
        $order = $request->SortField;
        $dir = $request->SortType;
        $helpers = new helpers();


     

  

    

            $brands = Brand::where('deleted_at', '=', null)->where(function ($query) use ($request) {
                return $query->when($request->filled('search'), function ($query) use ($request) {
                    return $query->where('name', 'LIKE', "%{$request->search}%")
                        ->orWhere('description', 'LIKE', "%{$request->search}%");
                });
            });


    




        $totalRows = $brands->count();
        $brands = $brands->offset($offSet)
            ->limit($perPage)
            ->orderBy($order, $dir)
            ->get();

        return response()->json([
            'brands' => $brands,
           
            'totalRows' => $totalRows,
        ]);

    }


    
    public function indexD(Request $request)
    {
       
        // How many items do you want to display.
        $perPage =  $request->limit !== null ? $request->limit : 5;
        $pageStart = \Request::get('page', 1);
        // Start displaying items from this number;
        $offSet = ($pageStart * $perPage) - $perPage;
        // $order = $request->SortField;
        $dir = $request->SortType;
       
        $order =  $request->SortField !== null ? $request->SortField  : "id";
        $dir =  $request->SortType !== null ? $request->SortType  : "desc";
        $helpers = new helpers();
        
 

   

            $categories = Category::where('deleted_at', '=', null)->withCount('products')->where(function ($query) use ($request) {
                return $query->when($request->filled('search'), function ($query) use ($request) {
                    return $query->where('name', 'LIKE', "%{$request->search}%")
                        ->orWhere('code', 'LIKE', "%{$request->search}%");
                });
            });
      


        $totalRows = $categories->count();
        $categories = $categories->offset($offSet)
            ->limit($perPage)
            ->orderBy($order, $dir)
            ->get();


            $data = array();
            foreach ( $categories  as $cat) {

 
                $item['id'] = $cat->id;
                $item['en_name'] = $cat->code;
                $item['ar_name'] = $cat->name;
                $item['image'] = '/public/images/category/'. $cat->image;
                $item['shop_id'] = $cat->shop_id;
                $item['products_count'] = $cat->products_count;
                $data[] = $item;
 
            }


        return response()->json([
            'categories' => $data,
         
            'totalRows' => $totalRows,
        ]);
    }



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
        
 

   

            $categories = Category::where('deleted_at', '=', null)->withCount('products')->where(function ($query) use ($request) {
                return $query->when($request->filled('search'), function ($query) use ($request) {
                    return $query->where('name', 'LIKE', "%{$request->search}%")
                        ->orWhere('code', 'LIKE', "%{$request->search}%");
                });
            });
      


        $totalRows = $categories->count();
        $categories = $categories->offset($offSet)
            ->limit($perPage)
            ->orderBy($order, $dir)
            ->get();
            

        return response()->json([
            'categories' => $categories,
         
            'totalRows' => $totalRows,
        ]);
    }

public function productByCategory(request $request){
      // How many items do you want to display.
      $perPage = $request->limit;
      $pageStart = \Request::get('page', 1);
      // Start displaying items from this number;
      $offSet = ($pageStart * $perPage) - $perPage;
      $order = $request->SortField;
      $dir = $request->SortType;
      $helpers = new helpers();
      // Filter fields With Params to retrieve
      $columns = array(0 => 'name', 1 => 'category_id', 2 => 'brand_id', 3 => 'code');
      $param = array(0 => 'like', 1 => '=', 2 => '=', 3 => 'like');
      $data = array();
      
      $category = $request->category;


      if($category  == 0){
          $products = Product::with('unit', 'category', 'brand' , 'shop.currency') 
          ->where('deleted_at', '=', null);
      }else{
          $products = Product::with('unit', 'category', 'brand' , 'shop.currency') 
          ->where('deleted_at', '=', null)->where('category_id' , $category );
      }

      if($request->user_id){
          $shop = Shop::where('merchant_id' ,$request->user_id )->first();
          $products = Product::with('unit', 'category', 'brand' , 'shop.currency') 
          ->where('deleted_at', '=', null)->where('shop_id' ,$shop->id );
      }else{
          $products = Product::with('unit', 'category', 'brand' , 'shop.currency') 
          ->where('deleted_at', '=', null);
      }
     
 

      //Multiple Filter
      $Filtred = $helpers->filter($products, $columns, $param, $request)
      // Search With Multiple Param
          ->where(function ($query) use ($request) {
              return $query->when($request->filled('search'), function ($query) use ($request) {
                  return $query->where('products.name', 'LIKE', "%{$request->search}%")
                      ->orWhere('products.code', 'LIKE', "%{$request->search}%")
                      ->orWhere(function ($query) use ($request) {
                          return $query->whereHas('category', function ($q) use ($request) {
                              $q->where('name', 'LIKE', "%{$request->search}%");
                          });
                      })
                      ->orWhere(function ($query) use ($request) {
                          return $query->whereHas('brand', function ($q) use ($request) {
                              $q->where('name', 'LIKE', "%{$request->search}%");
                          });
                      });
              });
          });
      $totalRows = $Filtred->count();
      $products = $Filtred->offset($offSet)
          ->limit($perPage)
          ->orderBy($order, $dir)
          ->get();

      foreach ($products as $product) {


          if($product->shop){
              $currencyName = $product->shop->currency->name;
              $symbol = $product->shop->currency->symbol;
          }else{
              $currencyName = "USA";
              $symbol = $product->shop->currency->symbol;
          }
          $item['id'] = $product->id;
          $item['code'] = $product->code;
          $item['name'] = $product->name;
          $item['category'] = $product['category']->name;
          $item['brand'] = $product['brand'] ? $product['brand']->name : 'N/D';
          $item['unit'] = $product['unit']->ShortName;
          $item['price'] = $product->price;
          $item['currency'] = $currencyName;
          $item['symbol'] = $symbol;

          $product_warehouse_data = product_warehouse::where('product_id', $product->id)
              ->where('deleted_at', '=', null)
              ->get();
          $total_qty = 0;
          foreach ($product_warehouse_data as $product_warehouse) {
              $total_qty += $product_warehouse->qte;
              $item['quantity'] = $total_qty;
          }

          $firstimage = explode(',', $product->image);
          $item['image'] = $firstimage[0];

          $data[] = $item;
      }

      // MerchantProduct
      // 'shop_id', 'product_id','warehouse_id',
       

      $warehouses = Warehouse::where('deleted_at', null)->get(['id', 'name']);
      $categories = Category::where('deleted_at', null)->get(['id', 'name']);
      $brands = Brand::where('deleted_at', null)->get(['id', 'name']);

      return response()->json([

          'products' => $data,
          'totalRows' => $totalRows,
      ]);
}

    public function Products(request $request)
    {
    
        // How many items do you want to display.
        $perPage = $request->limit;
        $pageStart = \Request::get('page', 1);
        // Start displaying items from this number;
        $offSet = ($pageStart * $perPage) - $perPage;
        $order = $request->SortField;
        $dir = $request->SortType;
        $helpers = new helpers();
        // Filter fields With Params to retrieve
        $columns = array(0 => 'name', 1 => 'category_id', 2 => 'brand_id', 3 => 'code');
        $param = array(0 => 'like', 1 => '=', 2 => '=', 3 => 'like');
        $data = array();
        
        $category = $request->category;
 
        
        if($category  == 0){
            

              
            $products = Product::with('unit', 'category', 'brand' , 'shop.currency') 
            ->where('deleted_at', '=', null);




        }else{
            $products = Product::with('unit', 'category', 'brand' , 'shop.currency') 
            ->where('deleted_at', '=', null)->where('category_id' , $category );
        }

     // The overall review number you want to search for

     
       
   

        //Multiple Filter
        $Filtred = $helpers->filter($products, $columns, $param, $request)
        // Search With Multiple Param
            ->where(function ($query) use ($request) {
                return $query->when($request->filled('search'), function ($query) use ($request) {
                    return $query->where('products.name', 'LIKE', "%{$request->search}%")
                        ->orWhere('products.code', 'LIKE', "%{$request->search}%")
                     
                        ->orWhere(function ($query) use ($request) {
                            return $query->whereHas('category', function ($q) use ($request) {
                                $q->where('name', 'LIKE', "%{$request->search}%");
                            });
                        })
                        ->orWhere(function ($query) use ($request) {
                            return $query->whereHas('brand', function ($q) use ($request) {
                                $q->where('name', 'LIKE', "%{$request->search}%");
                            });
                        });
                });
            });
        $totalRows = $Filtred->count();
        $products = $Filtred->offset($offSet)
        ->whereBetween('price', [
            $request->start ?? 0,
            $request->end ?? 10000000
        ])
            ->limit($perPage)
            ->orderBy($order, $dir)
            ->get();

        foreach ($products as $product) {


            if($product->shop){
                $currencyName = $product->shop->currency->name;
                $symbol = $product->shop->currency->symbol;
            }else{
                $currencyName = "USA";
                $symbol = $product->shop->currency->symbol;
            }
            $item['id'] = $product->id;
            $item['code'] = $product->code;
            $item['name'] = $product->name;
            $item['category'] = $product['category']->name;
            $item['brand'] = $product['brand'] ? $product['brand']->name : 'N/D';
            $item['unit'] = $product['unit']->ShortName;
            $item['price'] = $product->price;
            $item['currency'] = $currencyName;
            $item['ar_description'] =$product->ar_description;
            $item['en_description'] =$product->en_description;


            $item['symbol'] = $symbol;

            $product_warehouse_data = product_warehouse::where('product_id', $product->id)
                ->where('deleted_at', '=', null)
                ->get();
            $total_qty = 0;
            foreach ($product_warehouse_data as $product_warehouse) {
                $total_qty += $product_warehouse->qte;
                $item['quantity'] = $total_qty;
            }

            $firstimage = explode(',', $product->image);
            $item['image'] = $firstimage[0];

            $data[] = $item;
        }

        // MerchantProduct
        // 'shop_id', 'product_id','warehouse_id',
         

        $warehouses = Warehouse::where('deleted_at', null)->get(['id', 'name']);
        $categories = Category::where('deleted_at', null)->get(['id', 'name']);
        $brands = Brand::where('deleted_at', null)->get(['id', 'name']);

        return response()->json([
 
            'products' => $data,
            'totalRows' => $totalRows,
        ]);
    }





   public function GetProductsBYCategory(request $request){

        // How many items do you want to display.
        $perPage =  $request->limit !== null ? $request->limit : 1000;
        $pageStart = \Request::get('page', 1);
        // Start displaying items from this number;
        $offSet = ($pageStart * $perPage) - $perPage;
        // $order = $request->SortField;
        // $dir = $request->SortType;
       
        $order =  $request->SortField !== null ? $request->SortField  : "id";
        $dir =  $request->SortType !== null ? $request->SortType  : "desc";
       
         
        $helpers = new helpers();
        // Filter fields With Params to retrieve
        $columns = array(0 => 'name', 1 => 'category_id', 2 => 'brand_id', 3 => 'code');
        $param = array(0 => 'like', 1 => '=', 2 => '=', 3 => 'like');
       
        
        
        $category = $request->category_id;
        
        $products = Product::with('unit', 'category', 'brand' , 'shop.currency') 
        ->where('deleted_at', '=', null)->where('category_id' , $category );

 
   

        //Multiple Filter
        $Filtred = $helpers->filter($products, $columns, $param, $request)
        // Search With Multiple Param
            ->where(function ($query) use ($request) {
                return $query->when($request->filled('search'), function ($query) use ($request) {
                    return $query->where('products.name', 'LIKE', "%{$request->search}%")
                        ->orWhere('products.code', 'LIKE', "%{$request->search}%")
                     
                        ->orWhere(function ($query) use ($request) {
                            return $query->whereHas('category', function ($q) use ($request) {
                                $q->where('name', 'LIKE', "%{$request->search}%");
                            });
                        })
                        ->orWhere(function ($query) use ($request) {
                            return $query->whereHas('brand', function ($q) use ($request) {
                                $q->where('name', 'LIKE', "%{$request->search}%");
                            });
                        });
                });
            });
        $totalRows = $Filtred->count();
        $products = $Filtred->offset($offSet)
        ->whereBetween('price', [
            $request->start ?? 0,
            $request->end ?? 10000000
        ])
            ->limit($perPage)
            ->orderBy($order, $dir)
            ->get();

        $data = $helpers->Products($products);

  
        return response()->json([
 
            'products' =>  $data,
            'totalRows' => $totalRows,
        ]);


   }


   
   public function ProductsDF(request $request)
   {
   
       // How many items do you want to display.
       $perPage =  $request->limit !== null ? $request->limit : 5;
       $pageStart = \Request::get('page', 1);
       // Start displaying items from this number;
       $offSet = ($pageStart * $perPage) - $perPage;
       // $order = $request->SortField;
       $dir = $request->SortType;
      
       $order =  $request->SortField !== null ? $request->SortField  : "id";
       $dir =  $request->SortType !== null ? $request->SortType  : "desc";
      
        
       $helpers = new helpers();
       // Filter fields With Params to retrieve
       $columns = array(0 => 'name', 1 => 'category_id', 2 => 'brand_id', 3 => 'code');
       $param = array(0 => 'like', 1 => '=', 2 => '=', 3 => 'like');
      
       
       
       $category = $request->category;
       
       if($category  == 0){
    
           $products = Product::with('unit', 'category', 'brand' , 'shop.currency') 
           ->where('deleted_at', '=', null);

       }else{

           $products = Product::with('unit', 'category', 'brand' , 'shop.currency') 
           ->where('deleted_at', '=', null)->where('category_id' , $category );
       }

    // The overall review number you want to search for

    
      
  

       //Multiple Filter
       $Filtred = $helpers->filter($products, $columns, $param, $request)
       // Search With Multiple Param
           ->where(function ($query) use ($request) {
               return $query->when($request->filled('search'), function ($query) use ($request) {
                   return $query->where('products.name', 'LIKE', "%{$request->search}%")
                       ->orWhere('products.code', 'LIKE', "%{$request->search}%")
                    
                       ->orWhere(function ($query) use ($request) {
                           return $query->whereHas('category', function ($q) use ($request) {
                               $q->where('name', 'LIKE', "%{$request->search}%");
                           });
                       })
                       ->orWhere(function ($query) use ($request) {
                           return $query->whereHas('brand', function ($q) use ($request) {
                               $q->where('name', 'LIKE', "%{$request->search}%");
                           });
                       });
               });
           });
       $totalRows = $Filtred->count();
       $products = $Filtred->offset($offSet)
       ->whereBetween('price', [
           $request->start ?? 0,
           $request->end ?? 10000000
       ])
           ->limit($perPage)
           ->orderBy($order, $dir)
           ->get();

          $data = $helpers->Products($products);

 
       return response()->json([

           'products' =>  $data,
           'totalRows' => $totalRows,
       ]);
   }


    public function ProductsD(request $request)
    {
    
        // How many items do you want to display.
        $perPage =  $request->limit !== null ? $request->limit : 5;
        $pageStart = \Request::get('page', 1);
        // Start displaying items from this number;
        $offSet = ($pageStart * $perPage) - $perPage;
        // $order = $request->SortField;
        $dir = $request->SortType;
       
        $order =  $request->SortField !== null ? $request->SortField  : "id";
        $dir =  $request->SortType !== null ? $request->SortType  : "desc";
       
         
        $helpers = new helpers();
        // Filter fields With Params to retrieve
        $columns = array(0 => 'name', 1 => 'category_id', 2 => 'brand_id', 3 => 'code');
        $param = array(0 => 'like', 1 => '=', 2 => '=', 3 => 'like');
       
        
        
        $category = $request->category;
        
        if($category  == 0){
      
            $products = Product::with('unit', 'category', 'brand' , 'shop.currency') 
            ->where('deleted_at', '=', null);
 
        }else{
            $products = Product::with('unit', 'category', 'brand' , 'shop.currency') 
            ->where('deleted_at', '=', null)->where('category_id' , $category );
        }

     // The overall review number you want to search for

     
       
   

        //Multiple Filter
        $Filtred = $helpers->filter($products, $columns, $param, $request)
        // Search With Multiple Param
            ->where(function ($query) use ($request) {
                return $query->when($request->filled('search'), function ($query) use ($request) {
                    return $query->where('products.name', 'LIKE', "%{$request->search}%")
                        ->orWhere('products.code', 'LIKE', "%{$request->search}%")
                     
                        ->orWhere(function ($query) use ($request) {
                            return $query->whereHas('category', function ($q) use ($request) {
                                $q->where('name', 'LIKE', "%{$request->search}%");
                            });
                        })
                        ->orWhere(function ($query) use ($request) {
                            return $query->whereHas('brand', function ($q) use ($request) {
                                $q->where('name', 'LIKE', "%{$request->search}%");
                            });
                        });
                });
            });
        $totalRows = $Filtred->count();
        $products = $Filtred->offset($offSet)
        ->whereBetween('price', [
            $request->start ?? 0,
            $request->end ?? 10000000
        ])
            ->limit($perPage)
            ->orderBy($order, $dir)
            ->get();

           $data = $helpers->Products($products);

  
        return response()->json([
 
            'products' =>  $data,
            'totalRows' => $totalRows,
        ]);
    }

  
 
  



public function addpromo( Request $request  ){

    $user = Auth::user();

    $cart = Cart::where('user_id' ,  $user->id)->first();
    $code = $request->code;
    $discount =  Discount::where("code" , $code)->first();
    if($discount){
        $val = "";
        $totalCost =  $cart->total;
        if ($discount->type == "percentage"){
            $converted = $cart->total / 100;
            $val = $discount->value * $converted;


            // $val = floatval($totalCost)   -  floatval($duee);
          }else {

            $val = floatval($totalCost)   -  floatval( $discount->value);
 
          }
    
     
        
          Cart::whereId($cart->id)->update([
            'discount_promo' =>   $val  
            ]);

        Discount::whereId($discount->id)->update([
            'used' =>   "yes"  
        ]);

        return response()->json([ 'value'=> $discount->value ,  'type'=> $discount->type   ], 200);

    }else{

        return response()->json(['status' => "fail" ,  'message'=> 'code have no discount'   ], 404);
    }


}




public function updateStatusOrder(Request $request){
     $user = Auth::user();
     $helpers = new helpers();
     $status = $request->status;
     $orderid = $request->order_id;

     $Dorders = Dorders::where('deleted_at', '=', null)->where('driver_id' ,  $user->id  )->where('order_id' ,  $orderid  )->first();
 
     if(!$Dorders){
        return response()->json(['status' => "fail" ,  'message'=> 'You didnt accept this order'   ], 404); 
     }

    if( $status  ==  "completed"   ||  $status  ==  "cancelled" ){
        Sale::whereId($orderid)->update([
            'statut' => $status,
            ]);


            Dorders::whereId( $Dorders->id)->update([
                'status' => $status,
                ]);

            
                return response()->json(['status' => "success" ,  'message'=> $status   ], 200); 

    }else{
        return response()->json(['status' => "fail" ,  'message'=> 'Not Found Status'   ], 404); 

    }



   





}


public function confirmation(Request $request){
    $user = Auth::user();
    $session = Session::where('deleted_at', '=', null)->where('user_id' , $user->id )->where('session_id' ,$request->session_id )->first();
    if( !$session){
        return response()->json(['status' => "fail" ,  'message'=> 'session not found'   ], 404); 
    }
    $this->storeSaleThawani($request);

    return response()->json(['status' => "success" ,  'paid'=> 'paid'   ], 200); 

}



public function myordersClient(Request $request){
    $user = Auth::user();
    $helpers = new helpers();
    $status = $request->status == null  ?  'accepted'  :  $request->status;
    $sale = Sale::with('user' , 'shop')->where('deleted_at', '=', null)->where('user_id' , $user->id)->where('statut' ,  $status )->get();
   
 
      $order_detail = array();

      foreach ($sale as  $order) {
       
        // $sale = Sale::where('deleted_at', '=', null)->where('id' ,   $order->order_id )->first();
          $order_detail[] =  $helpers->singleOrder(  $order);
        
         }

         return response()->json( ['orders'=>$order_detail ], 200);
    



}


public function myordersDriver(Request $request){
    $user = Auth::user();
    $helpers = new helpers();
    $status = $request->status == null  ?  'accepted'  :  $request->status;
    $Dorders = Dorders::with('order')->where('deleted_at', '=', null)->where('driver_id' ,  $user->id  )->where('status' ,   $status   )->get();
  


      $order_detail = array();

      foreach ($Dorders as  $order) {
  
        $sale = Sale::where('deleted_at', '=', null)->where('id' ,   $order->order_id )->first();
        $order_detail[] =  $helpers->singleOrder( $sale);

         }

    return response()->json( ['orders'=>$order_detail ], 200);
     
      

}

public function acceptOrder(Request $request){
      

      $user = Auth::user();
      $orderid =  $request->order_id;

      $sale = Sale::with('user' , 'shop')->where('deleted_at', '=', null)->where('id' ,  $orderid  )->where('statut' ,  "pending"  )->first();
   

    if(!$sale){
        return response()->json(['status' => "fail" ,  'message'=> 'The Product is not approved yet or has been taken by another driver'   ], 404); 


       }
       $Dorders = Dorders::where('deleted_at', '=', null)->where('driver_id' ,  $user->id  )->where('order_id' ,  $orderid  )->first();
   
       if(!$Dorders){
        $item =  new Dorders;
        $item->driver_id =  $user->id;
        $item->order_id = $orderid;
        $item->status = "accepted";
        $item->save();

        Sale::whereId($orderid)->update([
            'statut' => "delivering",
            ]);

            return response()->json(['status' => "success" ,  'message'=> 'Order Accepted'   ], 200); 
       }else{
        return response()->json(['status' => "fail" ,  'message'=> 'The Order is Exist already'   ], 403); 
       }




  



  }

    public function addReview(Request $request){

        $helpers = new helpers();
    
        $user = Auth::user();

        

        $item =  new Review;
        $item->product_id = $request->product_id;
        $item->user_id =  $user->id;
        $item->count = $request->count;
        $item->review = $request->review;
        $item->save();

        return response()->json(['status' => "success" ,  'message'=> 'review added'   ], 200);
    }


  public function trackorder(Request $request , $id){
    $helpers = new helpers();
   $sale =  Sale::where('deleted_at', '=', null)->where('id' ,  $id )->first();
   if(!$sale){
 
    return response()->json(['status' => "fail" ,  'message'=> 'order not found'   ], 404);
   }
 
   $saleDetail = SaleDetail::with('product')->where('sale_id', $sale->id)->get();
    

  


   $products = array();
   foreach ($saleDetail as  $itemd ) {
    $product = $helpers->singleProduct($itemd->product);
    $products[] = $product;
   }
 
   return response()->json( ['id'=>  $sale->id   ,  'status'=> $sale->statut   , 'products'=> $products  ], 200);
 
  }

    public function order_detail(Request $request , $id){
        

        $sale = Sale::with('user' , 'shop')->where('deleted_at', '=', null)->where('id' ,   $id )->first();

        if(! $sale ){
            return response()->json(['status' => "fail" ,  'message'=> 'order not found'   ], 404);
        }
        $saleDetail = SaleDetail::where('sale_id', $sale->id)->count();
          

        $ar = [
            'id'=> $sale->id,
            'ref'=> $sale->Ref,
            'status'=> $sale->statut,
            'order_detail'=> [
                'date'=>  $sale->date ,
                'quantity'=>  $saleDetail ,
                'total'=>  $sale->GrandTotal,
                 ],

            'shop'=> [
                'ar_name'=>  $sale->shop->ar_name,
                'en_name'=>  $sale->shop->en_name,
                'phone'=>  $sale->shop->phone,
                'address'=>  $sale->shop->address,
            ],
            'client'=> [
                'name'=>  $sale->client->name,
                'phone'=> $sale->client->phone,
                'city'=> $sale->client->city,
                'adresse'=> $sale->client->adresse,
            ],

        ];
            //  $saleDetail = SaleDetail::where('deleted_at', '=', null)->where('sale_id' ,  $salee->id )->first();
            //  $saleDetail = SaleDetail::where('sale_id', $salee->id)
            //  ->count();

            //  $item['id'] = $salee->id;
            // $item['ref'] = $salee->Ref;
            // $item['quantity'] =  $saleDetail;
            // $item['total'] = $salee->GrandTotal;
            // $item['date'] = $salee->date;
            // $order_data[] =  $item;
          

        return response()->json(['detail' => $ar    ], 200);
    }




    public function driverorders(Request $request){
     


                  $helpers = new helpers();
                // How many items do you want to display.
                $perPage =  $request->limit !== null ? $request->limit : 5;
                $pageStart = \Request::get('page', 1);
              
                $offSet = ($pageStart * $perPage) - $perPage;
                // $order = $request->SortField;
                $dir = $request->SortType;
                $order =  $request->SortField !== null ? $request->SortField  : "id";
                $dir =  $request->SortType !== null ? $request->SortType  : "desc";
        
                         $orders = Sale::where('deleted_at', '=', null)->where('statut' ,  "Pending" )->where(function ($query) use ($request) {
                             return $query->when($request->filled('search'), function ($query) use ($request) {
                                 return $query->where('id', 'LIKE', "%{$request->search}%")
                                     ->orWhere('id', 'LIKE', "%{$request->search}%");
                             });
                         });
             
             
                 
             
             
             
             
                     $totalRows = $orders->count();
                     $orders =$orders->offset($offSet)
                         ->limit($perPage)
                         ->orderBy($order, $dir)
                         ->get();
             
           
 
        $sale = $orders;
        $order_data = array();
        foreach ( $sale  as   $salee ) {
     
            $order_data[] =  $helpers->singleOrder($salee );
            }

        return response()->json(['orders' => $order_data     ], 200);
    }

    public function  AddToCart(Request $request){
        

         $user =  Auth::user();

    
        $product_id = $request['product_id']; 
        $qty = $request['qty']; 
        $Product = Product::where('deleted_at', '=', null)->findOrFail($product_id);
          
        $cart = Cart::where('deleted_at', '=', null)->where('user_id' , $user->id )->where('order_id' , '=', null)->first();
        $productPrice = $Product->price;
        $subtotal = floatval(  $productPrice )   *   floatval($qty);
        if($cart){
     
       // check if product in cartitem first 
    
        $procutItem = Cartitem::where('deleted_at', '=', null)->where('cart_id' ,  $cart->id )->where('product_id' ,  $Product->id )->first();
       if( $procutItem ){
     
        $newPriceItem =  floatval(  $procutItem->subtotal  ) +  floatval(  $subtotal  );
        Cartitem::whereId($procutItem->id)->update([
            'qty' =>    floatval( $procutItem->qty ) +  $qty  ,  
            'subtotal' =>   $newPriceItem
    
        ]);
    
    
            // update cart total
            $newPrice =    floatval(  $subtotal  );
            $TotcalMoney =  floatval(  $cart->total)  + floatval( $newPrice );    
            Cart::whereId($cart->id)->update([
                'total' =>   $TotcalMoney   
     
            ]);
    

            $helpers = new helpers();
            $itemd = $helpers->GetItemProduct(  $procutItem );


    
        // return response()->json( $item , 200);
    
            return response()->json(  $itemd , 200);

            // return response()->json(['status' => "success" ,  'message'=> 'increased product qty'   ], 200);
    
       }else{
    
    
        $item =  new Cartitem;
        $item->product_id = $Product->id;
        $item->cart_id = $cart->id;
        $item->qty =  $qty;
        $item->price =$Product->price;
        $item->subtotal =  $subtotal;
        $item->save();
    
       }
    
    
    
    
            
            // update cart total
           $TotcalMoney =  floatval(  $cart->total)  + floatval(  $subtotal );    
            Cart::whereId($cart->id)->update([
                'total' =>   $TotcalMoney   
     
            ]);
            $helpers = new helpers();
            $itemd = $helpers->GetItemProduct( $item );


    
        // return response()->json( $item , 200);
    
            return response()->json(  $itemd , 200);
    
        }else{
    
    
    
    
        $productPrice = $Product->price;
        $total = floatval(  $productPrice )   *   floatval($qty);
        $cart = new Cart;
        $cart->user_id = $user->id;
        $cart->total  =   $total;
        $cart->save(); 
    
        
    
        
        $item =  new Cartitem;
        $item->product_id = $Product->id;
        $item->cart_id = $cart->id;
        $item->qty =  $qty;
        $item->price =$Product->price;
        $item->subtotal =  $subtotal ;
        $item->save();

        $helpers = new helpers();
    
        $item = $helpers->GetItemProduct( $item );


    
        return response()->json( $item , 200);
        }
     
       
        // $cart = new Cart;
        // $cart->product_id = $product_id;
        // $cart->qty  = $qty;
        // $cart->total  =  $total;
        // $cart->user_id  = $user->id;
        // $cart->save();
    
    
     
    
        }
    
    
    
        public function CreateSession( $products){

            $productss = [];
            foreach ($products  as   $item) {
                $newItem = array(
                    "name" => $item->product->name,
                    "quantity" =>$item->qty,
                    "unit_amount" => $item->price
                ); 

                array_push($productss,   $newItem );
            }
            // return $productss;


        
            $obj = [
             "client_reference_id" =>1,
             "mode" =>  "payment",
             "products" => $productss,
             "success_url"=> "https://dhofar.online/",
             "cancel_url"=> "https://dhofar.online/checkout",
             "metadata"=> [
                "customer_name"=>"",
                "order_id" =>  0,
                "email" => ""
             ]
              
              ];
         
         
         
        
        // https://uatcheckout.thawani.om/api/v1/checkout/session
        
            $client = new httpClent();
            $res = $client->post(env('PAYMENT_API_URL')."/api/v1/checkout/session", [
                                    'http_errors' => false,
                                    'verify' => false,
                                    'headers' => ['Content-Type' => 'application/json', 'Accept' => 'application/json' , 'Accept-Encoding'=> 'gzip, deflate, br'  , 
                                     'thawani-api-key'=> env('SECRET_KEY')],
                                      'body'    => json_encode( $obj)
                                    ]);
        
        
                                    
                                    $res->getHeader('content-type');
                                    $response = json_decode($res->getBody(), true);
                                    // if (array_key_exists("Message", $response))
                                    // {
                                    //     return redirect('/login_v1');
                                    // }
                                    // return $response['data'];
                                    // return $response;
                                    return $response['data']['session_id'];
          
        
        }
    

        public function  cartNum(Request $request){
    
            $helpers = new helpers();
            $user = Auth::user();
            $cart = Cart::with('CartItems.product.shop.currency')->where('deleted_at', '=', null)->where('order_id' , '=', null)->where('user_id', $user->id)->first();
    
           if(!$cart){
            return response()->json(['count' => 0 ], 200);
           }else{
            $count = count($cart->cart_items);
            return response()->json(['count' => $count  ], 200);

           }
       
           
       
           }


    
        public function  GetMyCart(Request $request){
    
             $helpers = new helpers();
             $user = $helpers->getInfo();
             $cart = Cart::with('CartItems.product.shop.currency')->where('deleted_at', '=', null)->where('order_id' , '=', null)->where('user_id', $user->id)->first();
     
     
        
             return response()->json(['cart' => $cart  ], 200);
        
            }


  public function GetProductsFromRe($product){
    $data = array();
 

                
      $review = Review::with('user')->where('deleted_at', '=', null)->where('product_id' ,$product->id )->orderBy('id', 'desc')->get();
   
      $totalReviews = $review->count();
      $totalRating = $review->sum('count');
      
      if ($totalReviews > 0) {
          $overallReview = $totalRating / $totalReviews;
      } else {
          $overallReview = 0;
      }

      



      if($product->shop){
          $vendor =  $product->shop->vendor;
          $shop =  $product->shop;
          $currencyName = $product->shop->currency->name;
          $symbol = $product->shop->currency->symbol;
      }else{
          $vendor =  null;
          $shop =  null;
          $currencyName = "USA";
          $symbol = $product->shop->currency->symbol;
      }



    //   $item['wishlist_id'] = $product->id;
      $item['product_id'] = $product->id;
      $item['en_name'] = $product->code;
      $item['ar_name'] = $product->name;


      $item['ar_category'] = $product['category']->name;
      $item['en_category'] = $product['category']->en_name;
      $item['brand'] = $product['brand'] ? $product['brand']->name : 'N/D';
      $item['ar_unit'] = $product['unit']->name;
      $item['en_unit'] = $product['unit']->ShortName;
 
      $item['price'] = $product->price;
      $item['currency'] = $currencyName;
      $item['ar_description'] = $product->ar_description;
      $item['en_description'] =$product->en_description;
      $item['images'] = $product->image;
      $item['discount'] = $product->discount;
       $item['rate'] =  $overallReview;
      $item['comments'] =  $review;
      $item['symbol'] = $symbol;

      $item['shop'] =  $shop;
      $item['vendor'] =  $vendor;
      


      // $product_warehouse_data = product_warehouse::where('product_id', $product->id)
      //     ->where('deleted_at', '=', null)
      //     ->get();
      // $total_qty = 0;
      // foreach ($product_warehouse_data as $product_warehouse) {
      //     $total_qty += $product_warehouse->qte;
      //     $item['quantity'] = $total_qty;
      // }

      $firstimage = explode(',', $product->image);
      $item['image'] = $firstimage[0];

      $data[] = $item;

      return $data[0];
  }




 
                
        public function  GetMyCartD(Request $request){
    
            $helpers = new helpers();
            $user = $helpers->getInfo();
            $carts = Cart::with('CartItems.product.shop.currency')->where('deleted_at', '=', null)->where('order_id' , '=', null)->where('user_id', $user->id)->first();
 
            if(!$carts ){

                return response()->json(['status' => "fail" ,  'message'=>   "cart is empty"  ], 404);
                
            }
            $dataa = array();
            $itemm['cart_id'] =   $carts->id;
            $itemm['user_id'] =   $carts->user_id;
            $itemm['discount_promo	'] =  $carts->discount_promo;
            $itemm['total'] =   $carts->total;
            $dataa[] = $itemm;


            $data = array();
            foreach ($carts->CartItems as $carta) {
                $item['cart_item_id'] =   $carta->id;
                $item['cart_id'] =   $carta->cart_id;
                $item['qty'] =   $carta->qty;
                $item['price'] =   $carta->price;
                $item['subtotal'] =   $carta->subtotal;
                $item['product'] = $helpers->Product($carta->product);
                $data[] = $item;
            }
            // $helpers->Products($carta->product);
    
       
            return response()->json(['cart' => array(  'cart'=>$dataa[0]    , 'cart_items'=> $data )  ], 200);
       
           }
    
    
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




        public function Electronic(Request $request){
            $helpers = new helpers();
            $user = Auth::user();

            // $products = ["aaa", "ddfd" , "adfads"];

            $cart = Cart::with('CartItems.product.shop')->where('deleted_at', '=', null)->where('user_id', $user->id)->where('order_id' , '=', null)->first();
            // return response()->json(['status' => "success" ,  'url'=>   $cart->cart_items  ], 200);
   
            if(!$cart){
   
                return response()->json(['status' => "fail" ,  'message'=>   "cart is empty"  ], 404);
            }
             $sessions_id = $this->CreateSession($cart->CartItems);

             $check = env('PAYMENT_API_URL')."/pay/".$sessions_id."?key=".env('PUBLISHKEY');  
              
             Session::where('user_id' , $user->id)->update([
                'deleted_at' => Carbon::now(),
              ]);

                   $session = new Session();
                   $session->user_id = $user->id;
                   $session->order_id = "";
                   $session->session_id = $sessions_id ;
                   $session->address = $request->address ;
                   $session->phone = $request->phone;
                   $session->email = $request->email;
                   $session->country = $request->country;
                   $session->city = $request->city;
                   $session->save();


            //  Session::where('deleted_at', '=', null)->get();     
             
             return response()->json(['status' => "success" ,   "session_id" => $sessions_id ,  'url'=>   $check  ], 200);


           
 
        }





    
            public function storeSaleThawani(Request $request){


               $session =  Session::where('deleted_at', '=', null)->where(  'session_id' ,   $request->session_id)->first();

               if(!$session){
                return response()->json(['status' => "fail" ,  'message'=>   "session not found"  ], 404);
               }
     
    
           
                $helpers = new helpers();
                $user = $helpers->getInfo();
                $cart = Cart::with('CartItems.product.shop')->where('deleted_at', '=', null)->where('user_id', $user->id)->where('order_id' , '=', null)->first();
                
                // if( $cart-> )
                
                // return $cart;
               
       
           
              
            
    
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



                $cartItems = $cart->CartItems;
                $groupedItems = $cartItems->groupBy(function ($item) {
                    return $item->product->shop_id;
                });

         
                
                foreach ($groupedItems as $shopId => $items) {
                    // Create an order for each shop
                    $shopOrder = clone $order;
                    $shopOrder->shop_id = $shopId;
                    $shopOrder->GrandTotal = $items->sum('subtotal');
               
                    // Save the order
                    $shopOrder->save();


                    Client::create([
                        'name' => $user->firstname ." ". $user->lastname,
                        'code' =>   $shopOrder->id,
                        'shop_id' =>   $shopId,
                        'adresse' => $session->address  ,   //$request['address'],
                        'phone' =>    $session->phone   , // $request['phone'],
                        'email' =>   $session->email  , //$user->email,
                        'country' =>  $session->country  ,  //$request['country'],
                        'city' =>  $session->city , // $request['city'] ,
                         ]);
                
                    // foreach ($items as $item) {
                    //     // Associate the cart item with the order
                    //     // $item->order_id = $shopOrder->id;
                    //     $item->save();
                    // }


                    // foreach ( $cart->CartItems  as   $value) {
                        $subtotalPrice = $items->sum('subtotal');
                        // $unit = Unit::where('id', 1)
                        //     ->first();
                        // $orderDetails[] = [
                        //     'date' =>  "2023-06-21",
                        //     'shop_id'=> $shopId,
                        //     'sale_id' => $shopOrder->id,
                        //     'sale_unit_id' => 1,
                        //     'quantity' => $value->qty,
                        //     'price' =>  $value->price,
                        //     'TaxNet' =>0,
                        //     'tax_method' =>  "Exclusive",
                        //     'discount' => 0,
                        //     'discount_method' => 'Fixed',
                        //     'product_id' => $value->product_id,
                           
                        //     'total' => $subtotalPrice,
                        // ];


                  foreach ($items as $item) {
                        // Associate the cart item with the order
                        // $item->order_id = $shopOrder->id;
                        // $item->save();


                        SaleDetail::create([
                            'date' =>  "2023-06-21",
                            'shop_id'=> $shopId,
                            'sale_id' => $shopOrder->id,
                            'sale_unit_id' => 1,
                            'quantity' => $item->qty,
                            'price' =>  $item->price,
                            'TaxNet' =>0,
                            'tax_method' =>  "Exclusive",
                            'discount' => 0,
                            'discount_method' => 'Fixed',
                            'product_id' => $item->product_id,
                           
                            'total' => $subtotalPrice,
                        ]);




                        Cart::whereId($cart->id)->update([
                            'order_id' =>   $shopOrder->id  
                 
                            ]);
                    }

          
        
         
       
                   


                }
 
 





           
    
           
                return response()->json(['status' => "success" ,  'message'=> 'Order Placed'   ], 200);




            }









public function shopsD(Request $request){
   


    $perPage =  $request->limit !== null ? $request->limit : 5;
    $pageStart = \Request::get('page', 1);
    // Start displaying items from this number;
    $offSet = ($pageStart * $perPage) - $perPage;
    // $order = $request->SortField;
    $dir = $request->SortType;
   
    $order =  $request->SortField !== null ? $request->SortField  : "id";
    $dir =  $request->SortType !== null ? $request->SortType  : "desc";


    $helpers = new helpers();
    // Filter fields With Params to retrieve
    $columns = array(0 => 'name', 1 => 'category_id', 2 => 'brand_id', 3 => 'code');
    $param = array(0 => 'like', 1 => '=', 2 => '=', 3 => 'like');
    $data = array();
    
    $category = $request->category;

    


    
     $products = Shop::with('vendor',)->where('deleted_at', '=', null);
  

 // The overall review number you want to search for
 
    //Multiple Filter
    $Filtred = $helpers->filter($products, $columns, $param, $request)
    // Search With Multiple Param
        ->where(function ($query) use ($request) {
            return $query->when($request->filled('search'), function ($query) use ($request) {
                return $query->where('shops.en_name', 'LIKE', "%{$request->search}%");
                    // ->orWhere('products.code', 'LIKE', "%{$request->search}%")
                 
                    // ->orWhere(function ($query) use ($request) {
                    //     return $query->whereHas('category', function ($q) use ($request) {
                    //         $q->where('name', 'LIKE', "%{$request->search}%");
                    //     });
                    // })
                    // ->orWhere(function ($query) use ($request) {
                    //     return $query->whereHas('brand', function ($q) use ($request) {
                    //         $q->where('name', 'LIKE', "%{$request->search}%");
                    //     });
                    // });
            });
        });
    $totalRows = $Filtred->count();
    $products = $Filtred->offset($offSet)
    ->limit($perPage)
        ->orderBy($order, $dir)
        ->get();

    foreach ($products as $product) {
        
        $product->vendor->role;
        $item['id'] = $product->id;
        $item['en_name'] = $product->en_name;
        $item['ar_name'] = $product->ar_name;
        $item['vendor'] = $product->vendor;
        $firstimage = explode(',', $product->image);
        $item['image'] =  '/public/images/shops/'.$firstimage[0];
        $data[] = $item;
    }



    return response()->json([

        'shops' => $data,
        'totalRows' => $totalRows,
    ]);



}









 public function shops(Request $request){



        $perPage =  $request->limit !== null ? $request->limit : 5;
        $pageStart = \Request::get('page', 1);
        // Start displaying items from this number;
        $offSet = ($pageStart * $perPage) - $perPage;
        // $order = $request->SortField;
        $dir = $request->SortType;
       
        $order =  $request->SortField !== null ? $request->SortField  : "id";
        $dir =  $request->SortType !== null ? $request->SortType  : "desc";


        $helpers = new helpers();
        // Filter fields With Params to retrieve
        $columns = array(0 => 'name', 1 => 'category_id', 2 => 'brand_id', 3 => 'code');
        $param = array(0 => 'like', 1 => '=', 2 => '=', 3 => 'like');
        $data = array();
        
        $category = $request->category;
 
        
 

        
            $products = Shop::with('vendor',)->where('deleted_at', '=', null);
      

     // The overall review number you want to search for

     
       
   

        //Multiple Filter
        $Filtred = $helpers->filter($products, $columns, $param, $request)
        // Search With Multiple Param
            ->where(function ($query) use ($request) {
                return $query->when($request->filled('search'), function ($query) use ($request) {
                    return $query->where('shops.en_name', 'LIKE', "%{$request->search}%");
                        // ->orWhere('products.code', 'LIKE', "%{$request->search}%")
                     
                        // ->orWhere(function ($query) use ($request) {
                        //     return $query->whereHas('category', function ($q) use ($request) {
                        //         $q->where('name', 'LIKE', "%{$request->search}%");
                        //     });
                        // })
                        // ->orWhere(function ($query) use ($request) {
                        //     return $query->whereHas('brand', function ($q) use ($request) {
                        //         $q->where('name', 'LIKE', "%{$request->search}%");
                        //     });
                        // });
                });
            });
        $totalRows = $Filtred->count();
        $products = $Filtred->offset($offSet)
        ->limit($perPage)
            ->orderBy($order, $dir)
            ->get();

        foreach ($products as $product) {
            $item['id'] = $product->id;
            $item['en_name'] = $product->en_name;
            $item['ar_name'] = $product->ar_name;
            $item['vendor'] = $product->vendor;
            $firstimage = explode(',', $product->image);
            $item['image'] =   $firstimage[0];
            $data[] = $item;
        }

   
 
        return response()->json([
 
            'shops' => $data,
            'totalRows' => $totalRows,
        ]);



         }
 



       public function storeSale(Request $request){
    
     
    
           
                 $helpers = new helpers();
                 $user =  Auth::User();
                 $cart = Cart::with('CartItems.product.shop')->where('deleted_at', '=', null)->where('user_id', $user->id)->where('order_id' , '=', null)->first();
                
     
                if(!$cart){
                    return response()->json(['status' => "fail" ,  'message'=> 'Your cart is empty'   ], 404);
                }


                $clienta = Client::create([
                    'name' => $user->firstname ." ". $user->lastname,
                    'code' =>    0,
                    'shop_id' =>  0,
                    'adresse' => $request['address'],
                    'phone' => $request['phone'],
                    'email' =>  $user->email,
                    'country' => $request['country'],
                    'city' =>  $request['city'] ,
                     ]);
           
              
            
    
                $order = new Sale;
                $order->is_pos = 0;
                $order->date =  "2023-06-21";
                $order->Ref = $this->getNumberOrder();
                $order->client_id = $clienta->id;
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



                $cartItems = $cart->CartItems;
                $groupedItems = $cartItems->groupBy(function ($item) {
                    return $item->product->shop_id;
                });

         
                
                foreach ($groupedItems as $shopId => $items) {
                    // Create an order for each shop
                    $shopOrder = clone $order;
                    $shopOrder->shop_id = $shopId;
                    $shopOrder->GrandTotal = $items->sum('subtotal');
               
                    // Save the order
                    $shopOrder->save();



                   $this->GetPercentage($shopId , $items->sum('subtotal') );




                    // Client::create([
                    //     'name' => $user->firstname ." ". $user->lastname,
                    //     'code' =>   $shopOrder->id,
                    //     'shop_id' =>   $shopId,
                    //     'adresse' => $request['address'],
                    //     'phone' => $request['phone'],
                    //     'email' =>  $user->email,
                    //     'country' => $request['country'],
                    //     'city' =>  $request['city'] ,
                    //      ]);
                
                    // foreach ($items as $item) {
                    //     // Associate the cart item with the order
                    //     // $item->order_id = $shopOrder->id;
                    //     $item->save();
                    // }


                    // foreach ( $cart->CartItems  as   $value) {
                        $subtotalPrice = $items->sum('subtotal');
                        // $unit = Unit::where('id', 1)
                        //     ->first();
                        // $orderDetails[] = [
                        //     'date' =>  "2023-06-21",
                        //     'shop_id'=> $shopId,
                        //     'sale_id' => $shopOrder->id,
                        //     'sale_unit_id' => 1,
                        //     'quantity' => $value->qty,
                        //     'price' =>  $value->price,
                        //     'TaxNet' =>0,
                        //     'tax_method' =>  "Exclusive",
                        //     'discount' => 0,
                        //     'discount_method' => 'Fixed',
                        //     'product_id' => $value->product_id,
                           
                        //     'total' => $subtotalPrice,
                        // ];


                  foreach ($items as $item) {
                        // Associate the cart item with the order
                        // $item->order_id = $shopOrder->id;
                        // $item->save();


                        SaleDetail::create([
                            'date' =>  "2023-06-21",
                            'shop_id'=> $shopId,
                            'sale_id' => $shopOrder->id,
                            'sale_unit_id' => 1,
                            'quantity' => $item->qty,
                            'price' =>  $item->price,
                            'TaxNet' =>0,
                            'tax_method' =>  "Exclusive",
                            'discount' => 0,
                            'discount_method' => 'Fixed',
                            'product_id' => $item->product_id,
                           
                            'total' => $subtotalPrice,
                        ]);




                        Cart::whereId($cart->id)->update([
                            'order_id' =>   $shopOrder->id  
                 
                            ]);
                    }

          
        
         
       
                   


                }
 
 





           
    
           
                return response()->json(['status' => "success" ,  'message'=> 'Order Placed'   ], 200);
           
        }



        public function GetPercentage($shopId , $total){


           $shop =  Shop::where('id' , $shopId)->first();
           $settings = Setting::where('deleted_at', '=', null)->first();


           if ($settings->percentage == "0"){
            $val = floatval($total)   -  floatval($settings->value);



            }else {
              $converted = $settings->percentage / 100;
              $duee = $total * $converted;
              $val = floatval($total)   -  floatval($duee);
            }

            $due = floatval($shop->due)  +   $val;
            Shop::whereId($shopId)->update([
                'due' =>     $due 
                ]);



        }





public function Get_Products_DetailsNotauth(Request $request, $id)
{


   $Product = Product::with('shop.currency' , 'shop.vendor')->where('deleted_at', '=', null)->findOrFail($id);
   $warehouses = Warehouse::where('deleted_at', '=', null)->where('shop_id' ,$Product->shop_id )->first();
   $review = Review::with('user')->where('deleted_at', '=', null)->where('product_id' ,$Product->id )->orderBy('id', 'desc')->get();



   

   $totalReviews = $review->count();
   $totalRating = $review->sum('count');
   
   if ($totalReviews > 0) {
       $overallReview = $totalRating / $totalReviews;
   } else {
       $overallReview = 0;
   }




   if($Product->shop){
    $currencyName = $Product->shop->currency->name;
    $symbol = $Product->shop->currency->symbol;
}else{
    $currencyName = "USA";
    $symbol = $Product->shop->currency->symbol;
}

    $item['id'] = $Product->id;
    $item['code'] = $Product->code;
    $item['Type_barcode'] = $Product->Type_barcode;
    $item['name'] = $Product->name;
    $item['category'] = $Product['category']->name;
    $item['brand'] = $Product['brand'] ? $Product['brand']->name : 'N/D';
    $item['unit'] = $Product['unit']->ShortName;
    $item['price'] = $Product->price;
    $item['cost'] = $Product->cost;
    $item['stock_alert'] = $Product->stock_alert;
    $item['symbol'] = $symbol;
    $item['currencyName'] = $currencyName;
    $item['user_id'] =  $Product->shop->merchant_id;
    $item['taxe'] = $Product->TaxNet;
    $item['tax_method'] = $Product->tax_method == '1' ? 'Exclusive' : 'Inclusive';
    $item['ar_description'] =$Product->ar_description;
    $item['en_description'] =$Product->en_description;

                $product_warehouse = DB::table('product_warehouse')
                    ->where('product_id', $id)
                    ->where('deleted_at', '=', null)
                    ->where('warehouse_id', $warehouses->id)
                    ->select(DB::raw('SUM(product_warehouse.qte) AS sum'))
                    ->first();

      $item['qty'] = $product_warehouse->sum;

    if ($Product->image != '') {
        $isFirstImage = true; 
        foreach (explode(',', $Product->image) as $img) {

            if ($isFirstImage) {
                $isFirstImage = false;  // Set the flag to false after skipping the first image
                continue;  // Skip the first image
            }

            $item['images'][] = $img;
        }
    }

    $data[] = $item;

    return response()->json([

        'product' => $data[0],
        'reviews' =>  $review,
        'total_review'=>  round($overallReview, 1)   
    ]);

    return response()->json($data[0]);

}



        public function Get_Products_Details(Request $request, $id)
        {
 

           $Product = Product::with('shop.currency' , 'shop.vendor')->where('deleted_at', '=', null)->findOrFail($id);
           $warehouses = Warehouse::where('deleted_at', '=', null)->where('shop_id' ,$Product->shop_id )->first();
           $review = Review::with('user')->where('deleted_at', '=', null)->where('product_id' ,$Product->id )->orderBy('id', 'desc')->get();
    


           

           $totalReviews = $review->count();
           $totalRating = $review->sum('count');
           
           if ($totalReviews > 0) {
               $overallReview = $totalRating / $totalReviews;
           } else {
               $overallReview = 0;
           }
       
     


           if($Product->shop){
            $currencyName = $Product->shop->currency->name;
            $symbol = $Product->shop->currency->symbol;
        }else{
            $currencyName = "USA";
            $symbol = $Product->shop->currency->symbol;
        }
    
            $item['id'] = $Product->id;
            $item['code'] = $Product->code;
            $item['Type_barcode'] = $Product->Type_barcode;
            $item['name'] = $Product->name;
            $item['category'] = $Product['category']->name;
            $item['brand'] = $Product['brand'] ? $Product['brand']->name : 'N/D';
            $item['unit'] = $Product['unit']->ShortName;
            $item['price'] = $Product->price;
            $item['cost'] = $Product->cost;
            $item['stock_alert'] = $Product->stock_alert;
            $item['symbol'] = $symbol;
            $item['currencyName'] = $currencyName;
            $item['user_id'] =  $Product->shop->merchant_id;
            $item['taxe'] = $Product->TaxNet;
            $item['tax_method'] = $Product->tax_method == '1' ? 'Exclusive' : 'Inclusive';
            $item['ar_description'] =$Product->ar_description;
            $item['en_description'] =$Product->en_description;

                        $product_warehouse = DB::table('product_warehouse')
                            ->where('product_id', $id)
                            ->where('deleted_at', '=', null)
                            ->where('warehouse_id', $warehouses->id)
                            ->select(DB::raw('SUM(product_warehouse.qte) AS sum'))
                            ->first();

              $item['qty'] = $product_warehouse->sum;
 
            if ($Product->image != '') {
                $isFirstImage = true; 
                foreach (explode(',', $Product->image) as $img) {

                    if ($isFirstImage) {
                        $isFirstImage = false;  // Set the flag to false after skipping the first image
                        continue;  // Skip the first image
                    }

                    $item['images'][] = $img;
                }
            }
    
            $data[] = $item;

            return response()->json([
 
                'product' => $data[0],
                'reviews' =>  $review,
                'total_review'=>  round($overallReview, 1)   
            ]);
    
            return response()->json($data[0]);
    
        }






   public function GetShopOne(Request $request, $id){




    $perPage =  $request->limit !== null ? $request->limit : 1000;
    $pageStart = \Request::get('page', 1);
    // Start displaying items from this number;
    $offSet = ($pageStart * $perPage) - $perPage;
    // $order = $request->SortField;
    // $dir = $request->SortType;
   
    $order =  $request->SortField !== null ? $request->SortField  : "id";
    $dir =  $request->SortType !== null ? $request->SortType  : "desc";
     $helpers = new helpers();
     // Filter fields With Params to retrieve
     $columns = array(0 => 'name', 1 => 'category_id', 2 => 'brand_id', 3 => 'code');
     $param = array(0 => 'like', 1 => '=', 2 => '=', 3 => 'like');
    //  $data = array();
     
 
         $products = Product::with('unit', 'category', 'brand' , 'shop.currency') 
         ->where('deleted_at', '=', null)->where('shop_id' , $id );

    

  // The overall review number you want to search for

  
    


     //Multiple Filter
     $Filtred = $helpers->filter($products, $columns, $param, $request)
     // Search With Multiple Param
         ->where(function ($query) use ($request) {
             return $query->when($request->filled('search'), function ($query) use ($request) {
                 return $query->where('products.name', 'LIKE', "%{$request->search}%")
                     ->orWhere('products.code', 'LIKE', "%{$request->search}%")
                  
                     ->orWhere(function ($query) use ($request) {
                         return $query->whereHas('category', function ($q) use ($request) {
                             $q->where('name', 'LIKE', "%{$request->search}%");
                         });
                     })
                     ->orWhere(function ($query) use ($request) {
                         return $query->whereHas('brand', function ($q) use ($request) {
                             $q->where('name', 'LIKE', "%{$request->search}%");
                         });
                     });
             });
         });
     $totalRows = $Filtred->count();
     $products = $Filtred->offset($offSet)
     ->whereBetween('price', [
         $request->start ?? 0,
         $request->end ?? 10000000
     ])
         ->limit($perPage)
         ->orderBy($order, $dir)
         ->get();


         $data = $helpers->Products($products);
 

     // MerchantProduct
     // 'shop_id', 'product_id','warehouse_id',
      

  
     return response()->json([

         'products' =>  $data ,
         'totalRows' => $totalRows,
     ]);





   }









        public function Get_Products_DetailsD(Request $request, $id)
        {
            $Product = Product::with('shop.currency' , 'shop.vendor')->where('deleted_at', '=', null)->findOrFail($id);
            $helpers = new helpers();
            $item = $helpers->Product($Product);
            $data[] = $item;

            return response()->json([
 
                'product' => $data[0],
          
            ]);
    
            return response()->json($data[0]);
    
        }


    
       }
    
    


 