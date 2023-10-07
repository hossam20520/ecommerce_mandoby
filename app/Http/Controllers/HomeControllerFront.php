<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Shop;
use App\utils\helpers;
use App\Models\Category;
use App\Models\Product;
use App\Models\Discount;
use App\Models\Review;
use App\Models\Slider;
use App\Models\User;
use App\Models\Cart;
use App\Models\Sale;
use App\Models\SaleDetail;
use App\Models\Favourit;
use App\Models\Brand;
use App\Exports\Data;
use Maatwebsite\Excel\Facades\Excel;




 
 
use Illuminate\Support\Facades\Validator;
 
use Carbon\Carbon;
use Kreait\Laravel\Firebase\Facades\Firebase;
use Kreait\Firebase\Factory;
use Kreait\Firebase\ServiceAccount;
use Kreait\Firebase\Database;
 



// slider
use App;
use Illuminate\Support\Facades\Auth;
class HomeControllerFront extends Controller
{
    //
 

    
    public function exportcsv(){


        $factory = (new Factory)->withServiceAccount(config('services.firebase.credentials.file'));
        $firestore = $factory->createFirestore();
        $databases = $firestore->database();
        // $testRe = $databases->collection('users')->newDocument();

        $usersCollection = $firestore->database()->collection('form');
        return  $usersCollection;
        // form
        // $testRe->set([
        //    "id"=> $User->id,
        //    "name"=> $request['firstname']. " ".$request['lastname'] ,
        //    "email"=>  $request['email'],
        //    "phone"=> $request['phone'],
        //    "avatar"=> "/images/avatar/".$filename,
        //    "status"=> "online",
        //    "time"=> Carbon::now(),
        // ]);
        
        

        // return Excel::download(new Data, 'list_data.xlsx');
    }




    public function export(){

        return view('front.pages.export');
    }

    public function profile(Request $request){
        $local = session()->get('locale');
        App::setLocale($local);
        $user = Auth::user();
    if( !$user){
        return view("front.pages.login"  );
    }else{
        
         $usera =  User::where('id' , $user->id)->first();
         $helpers = new helpers();
         $status = $request->status == null  ?  'ordered'  :  $request->status;
         $sale = Sale::with('user' , 'shop')->where('deleted_at', '=', null)->where('user_id' , $user->id)->where('statut' ,  $status )->get();
       
        
        //  SaleDetail::with('product')->where('sale_id', $sale->id)->get();
          $order_detail = array();
    
          foreach ($sale as  $order) {
            $saleDetail = SaleDetail::with('products' )->where('sale_id' , $order->id)->first();
            // $sale = Sale::where('deleted_at', '=', null)->where('id' ,   $order->order_id )->first();
            
            $item['product'] =  $saleDetail;
            $item['order'] =  $helpers->singleOrder(  $order);
            // $saleDetail
            $order_detail[] =   $item;
    
             }

         
    
            //  return response()->json( ['orders'=>$order_detail ], 404);
        
    

        //    dd($order_detail);


        return view("front.pages.profile"  , ['user' => $usera , 'orders'=> $order_detail ]    );
    }
       
      
    }




    public function vendor(Request $request , $id){

        $local = session()->get('locale');
        App::setLocale($local);

        $shop = Shop::where('id' , $id )->first();


        if(!$shop ){
            return view("front.pages.404"    );
        }
        
        // $shop = Shop::where('deleted_at', '=', null)->where('id' , $id)->first();
        $products =  Product::with('shop')->where('deleted_at', '=', null)->where('shop_id', $id )->get();
 
         $helpers = new helpers();
         $productta = $helpers->Products($products);
         $data_product = array();
         foreach ($productta as  $sh ) {
          $item['id'] =    $sh['id'];
         $item['ar_name']    =       $sh['ar_name'];
         $item['price']      =       $sh['price'];
         $item['rate']       =       $sh['rate'];
         $item['photo']      =       $sh['photo'];
         $item['symbol']     =       $sh['symbol'];
         $item['discount']   =       $sh['discount'];
     
         
         $data_product[] = $item;
         }
        $ashop = [
            "name" =>   $local == "ar" ?  $shop->ar_name   :  $shop->en_name,
            "image"=>      env('url', 'http://localhost:8000') ."/images/shops/".$shop->image 
        ];
     
        return view("front.pages.vendor"  , ['vendor' => $data_product , 'shop'=> $ashop    ]    );

    }

    public function shop(Request $request){
        $local = session()->get('locale');
        App::setLocale($local);
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
        $brand = $request->brand ?? 0;
        if($category  == 0){
      
            $products = Product::with('unit', 'category', 'brand' , 'shop.currency') 
            ->where('deleted_at', '=', null)->where('brand_id' ,$brand  );

            if( $brand == 0){
                $products = Product::with('unit', 'category', 'brand' , 'shop.currency') 
                ->where('deleted_at', '=', null);
            }else{
                $products = Product::with('unit', 'category', 'brand' , 'shop.currency') 
                ->where('deleted_at', '=', null)->where('brand_id' ,$brand  );
            }
 
        }else{
            $products = Product::with('unit', 'category', 'brand' , 'shop.currency') 
            ->where('deleted_at', '=', null)->where('category_id' , $category );
        }

     // The overall review number you want to search for

     
     $fromParam = $request->query('from');
     $start = null;
     $end = null;
          
     if($fromParam){
         $values = explode(';', $fromParam);

          
         $start = $values[0];  
         $end = $values[1];  
          
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
        ->whereBetween('price', [
            $start ?? 0,
            $end ?? 10000000
        ])
            ->limit($perPage)
            ->orderBy($order, $dir)
            ->get();

           $data = $helpers->Products($products);

           $pages = $totalRows /  $perPage;
 

 

                $category = Category::where('deleted_at', '=', null)->get();
                $data_products = array();
                foreach ($category as  $section ) {
                   $item['id']           =      $section->id;
                   $item['title']        =      $local == "ar" ?  $section->name  :  $section->en_name; 
                   $data_products[]      =      $item;
                }
        



                
          
        return view("front.pages.shop"  , ['shop'=> $data , 'pages' => $pages , 'categories'=> $data_products ]  );
    }



  public function register(){


    return view("front.pages.register" );
  }


  public function contact(){
 
    $local = session()->get('locale');
    App::setLocale($local);
    return view("front.pages.contact_us" );
  }

    public function cart(){
        $local = session()->get('locale');
        App::setLocale($local);
      
        $helpers = new helpers();
        // $helpers = new helpers();
        $user = Auth::user();
         
        if(!$user){
            return view("front.pages.404"   );
        }
      
        $carts = Cart::with('CartItems.product.shop.currency')->where('deleted_at', '=', null)->where('order_id' , '=', null)->where('user_id', $user->id)->first();
 
        if(!$carts ){
            return view("front.pages.404"   );
          
            
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

   
        // return response()->json(['cart' => array(  'cart'=>$dataa[0]    , 'cart_items'=> $data )  ], 200);
   
        // return response()->json(['cart' => $cart  ], 200);
          
  
        return view("front.pages.cart" , ['cart_items'=> $data , 'cart'=>$dataa[0]   ] );
        
        
    }

    public function login(){

        $local = session()->get('locale');
        App::setLocale($local);
        return view("front.pages.login" );
    
    }

    public function home(){
        $local = session()->get('locale');
       

        if($local  == "en"){
            App::setLocale('en');
        }else{
            App::setLocale('ar');
        }

       
       $shops =  Shop::where('deleted_at', '=', null)->get();
             $data = array();
             foreach ($shops as  $sh ) {
                $item['id'] =    $sh['id'];
             $item['name'] =  $local == "ar" ?  $sh->ar_name  :  $sh->en_name;  $sh->ar_name;
           
             $item['image'] =   env('url', 'http://localhost:8000') ."/images/shops/". $sh->image;
             $data[] = $item;
             }
    

             $Category =  Category::where('deleted_at', '=', null)->withCount('products')->get();
             $data_category = array();
             foreach ($Category as  $sh ) {
                $item['id'] =    $sh['id'];
             $item['name'] =    $local == "ar" ?  $sh->name  :  $sh->en_name;
             $item['products_count'] = $sh->products_count;
             $item['image'] =   env('url', 'http://localhost:8000') ."/images/category/". $sh->image;
             $data_category[] = $item;
             }

 
          
             $product =  Product::where('deleted_at', '=', null)->where('category_id' , 1)->get();
             $helpers = new helpers();
             $productt = $helpers->Products($product);
             $data_products = array();
             foreach ($productt as  $sh ) {
                $item['id'] =    $sh['id'];
             $item['ar_name'] =    $sh['ar_name'];
             $item['price'] =      $sh['price'];
             $item['rate'] =       $sh['rate'];
             $item['photo'] =      $sh['photo'];
             $item['symbol'] =     $sh['symbol'];
             $item['discount'] =     $sh['discount'];
             $data_products[] =    $item;
             }
          
      

           
            


             $producte =  Product::where('deleted_at', '=', null)->where('product_status' , 'top')->get();
             $helpersv = new helpers();
             $productta = $helpersv->Products($producte);
             $data_top = array();
             foreach ($productta as  $sh ) {
                $item['id'] =    $sh['id'];
             $item['ar_name'] =    $sh['ar_name'];
             $item['price'] =      $sh['price'];
             $item['rate'] =       $sh['rate'];
             $item['photo'] =      $sh['photo'];
             $item['symbol'] =     $sh['symbol'];
             $item['discount'] =     $sh['discount'];
             $data_top[] =    $item;
             }
          
             

            //  $discount =  Discount::where('deleted_at', '=', null)->where('products')->get();
            //  $data_discount = array();
            //  foreach ($discount as  $sh ) {
            // //  $item['name'] =    $local == "ar" ?  $sh->name  :  $sh->en_name;
            //  $item['discount'] = $sh->products_count;
            //  $item['image'] =   env('url', 'http://localhost:8000') ."/images/category/". $sh->image;
            //  $data_category[] = $item;
            //  }
            $dataa = $this->getDataSections();


             $slider = Slider::where('deleted_at', '=', null)->where('device' , 'desktop')->get();



             $data_slider = array();
             foreach ($slider as  $sh ) {
                $item['id'] =    $sh['id'];
                $item['image'] =     "/images/sliders/".$sh['image'];
                
       
             $data_slider[] =    $item;
             }



             $brands = Brand::where('deleted_at', '=', null)->get();

             $data_brands = array();
             foreach ($brands as  $sh ) {
                $item['id'] =    $sh['id'];
                $item['image'] =     env('url', 'http://localhost:8000') ."/images/brands/". $sh->image;
                $item['name'] =    $local == "ar" ?  $sh->description  :  $sh->name;
                
             $data_brands[] =    $item;
             }

             return view("front.home" , [    'brands'=>  $data_brands   ,'shops'=>  $data , 'category'=>$data_category , 'section_one' =>  $data_products , 'top'=> $data_top , 'sections'=>  $dataa , 'slider'=>   $data_slider ] );
    
    
            }





    public function getDataSections(){

        $local = session()->get('locale');
        App::setLocale($local);


   
        
        $category = Category::where('deleted_at', '=', null)->where('main_section' , 'yes')->get();


        


       

        // $helpers = new helpers();
        // $productt = $helpers->Products($product);
        $data_products = array();
        foreach ($category as  $section ) {
        $item['title']   =      $local == "ar" ?  $section->name  :  $section->en_name; 
        $item['products']     =     $this->getProductsForSection($section->id) ;
 
        $data_products[]   =      $item;
        }

            return $data_products;

    }


    public function getProductsForSection($id){
        $producte =  Product::where('deleted_at', '=', null)->where('category_id' , $id)->get();
        $helpersv = new helpers();
        $productta = $helpersv->Products($producte);
        $data_top = array();
 
        foreach ($productta as  $sh ) {
         $item['id'] =    $sh['id'];
        $item['ar_name'] =    $sh['ar_name'];
        $item['price'] =      $sh['price'];
        $item['rate'] =       $sh['rate'];
        $item['photo'] =      $sh['photo'];
        $item['symbol'] =     $sh['symbol'];
        $item['discount'] =     $sh['discount'];
        $data_top[] =    $item;
        }

        return  $data_top;
   
      }

    public function product(Request  $request , $id){
        $local = session()->get('locale');
        App::setLocale($local);

        $local = session()->get('locale');

   
     
        $product =    Product::find($id);

        if(!$product ){
            return view("front.pages.404"  );
        }
       

 
        $helpers = new helpers();
        $productt = $helpers->singleProduct($product);
   
        $reviewd = Review::with('user')->where('deleted_at', '=', null)->where('product_id' ,$id)->orderBy('id', 'desc')->get();
 

        //  dd($reviewd);
        $data_review = array();
        foreach ($reviewd as  $sh ) {
        $item['review'] =    $sh['review'];
        $item['rate'] =    $sh['count'];
        
        $item['firstname'] =    $sh->user->firstname;
        $item['Avatar'] =       env('url', 'http://localhost:8000')."/images/avatar/".$sh->user->avatar;
        $item['created_at'] =   $sh['created_at'];
        $data_review[] =    $item;
        }
       
          

 
        $images = explode(',', $productt['image']);
        
        $producta = [
            'vendor'=>    $local == "ar" ?   $productt['shop']['ar_name'] :    $productt['shop']['en_name'],
            'ar_name'=>  $productt['ar_name'],
            'price'=>  $productt['price'],
            'id'=>  $productt['id'],
            'rate'=>  $productt['rate'],
            'photo'=>  $productt['photo'],
            'symbol'=>  $productt['symbol'],
            'discount'=>  $productt['discount'],
            'gallery'=> $productt['gallery'],
            'images'=>   $images ,
            'description' =>   $local == "ar" ?  $productt['ar_description']  :   $productt['en_description'],
            'review' => $data_review
        ];
    
        return view("front.pages.product" , ['product'=>  $producta  ] );
    }



  public function search(Request $request ){
    $local = session()->get('locale');
    App::setLocale($local);
    
     $products = $this->GetProductsBySearch($request);

     $helpers = new helpers();
     $productta = $helpers->Products($products);
     $data_product = array();
     foreach ($productta as  $sh ) {
      $item['id'] =    $sh['id'];
     $item['ar_name'] =    $sh['ar_name'];
     $item['price'] =      $sh['price'];
     $item['rate'] =       $sh['rate'];
     $item['photo'] =      $sh['photo'];
     $item['symbol'] =     $sh['symbol'];
     $item['discount'] =     $sh['discount'];
     $data_product[] =    $item;
     }


    return view("front.pages.search" ,  ['products'=>  $data_product]);

  }





  public function GetProductsBySearch($request){
 


    // $perPage = $request->limit;
    // $pageStart = \Request::get('page', 1);
    // Start displaying items from this number;
    $offSet = 0;
    $order =  "name";
    $dir =  "desc";
    $helpers = new helpers();
    // Filter fields With Params to retrieve
    $columns = array(0 => 'name', 1 => 'category_id', 2 => 'brand_id', 3 => 'code');
    $param = array(0 => 'like', 1 => '=', 2 => '=', 3 => 'like');
    $data = array();
    

    // $obj = $helpers->GetUserInfo();
 
        $products = Product::with('unit', 'category', 'brand')
        ->where('deleted_at', '=', null);
 

  

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
        ->limit(100000000)
        ->orderBy($order, $dir)
        ->get();

      return $products;

  }




  public function wishlist(Request $request){
    $local = session()->get('locale');
    App::setLocale($local);
    $user = Auth::user();
    if(!$user ){
        return view("front.pages.login"    ); 
    } 
     $fav =    Favourit::with('product')->where('deleted_at', '=', null)->where('user_id' , $user->id)->get();
     $helpers = new helpers();
     $data_wishlist = [];
     foreach ( $fav  as  $item) {
  
        // $productt = $helpers->singleProduct( $fav->product);
        $data_wishlist[] = $helpers->singleProduct( $item->product);
     }

   
    return view("front.pages.wishlist" , ['fav'=>  $data_wishlist ]  );
  }


  public function checkout(Request $request){

    $local = session()->get('locale');
    App::setLocale($local);
  
    $helpers = new helpers();
    // $helpers = new helpers();
    $user = Auth::user();
     
    if(!$user){
        return view("front.pages.login"   );
    }
  
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


    // return response()->json(['cart' => array(  'cart'=>$dataa[0]    , 'cart_items'=> $data )  ], 200);

    // return response()->json(['cart' => $cart  ], 200);
      

    // return view("front.pages.cart" , ['cart_items'=> $data , 'cart'=>$dataa[0]   ] );


    return view("front.pages.checkout"   , ['cart_items'=> $data , 'cart'=>$dataa[0] ]  );
  }


}



