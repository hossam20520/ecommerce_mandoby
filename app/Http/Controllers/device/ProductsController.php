<?php

namespace App\Http\Controllers\device;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use App\Models\product_warehouse;
use Illuminate\Pagination\Paginator;
use App\Models\Unit;
use App\Models\Warehouse;
use App\utils\helpers;
use Carbon\Carbon;
use App\Exports\ProductsExport;
use App\Models\Brand;
use App\Models\Category;
use App\Models\Product;
use App\Models\Setting;

class ProductsController extends Controller
{
    
    public function Products(request $request)
    {



        $perPage = $request->limit;
        $pageStart = \Request::get('page', 1);
        // Start displaying items from this number;
        $offSet = ($pageStart * $perPage) - $perPage;
        $order = $request->SortField;
        $dir = $request->SortType;
     
        // Filter fields With Params to retrieve
        $columns = array(0 => 'name', 1 => 'category_id', 2 => 'brand_id', 3 => 'code');
        $param = array(0 => 'like', 1 => '=', 2 => '=', 3 => 'like');
        $data = array();
    
        $settings = Setting::where('deleted_at', '=', null)->first();
        $helpers = new helpers();

        

        $data = [];
        $product_warehouse_data = product_warehouse::with('warehouse', 'product', 'productVariant')
            ->where('warehouse_id', $settings->warehouse_id)
            ->where('deleted_at', '=', null)
            ->where(function ($query) use ($request) {
                // if ($request->stock == '1') {
                    return $query->where('qte', '>', 0);
                // }
            });

            $Filtred = $helpers->filter($product_warehouse_data, $columns, $param, $request)
            ->where(function ($query) use ($request) {
                return $query->when($request->filled('search'), function ($query) use ($request) {
                    return $query->whereHas('product', function ($q) use ($request) {
                        $q->where('name', 'LIKE', "%{$request->search}%")
                        ->orWhere('ar_name', 'LIKE', "%{$request->search}%")
                            ->orWhere('code', 'LIKE', "%{$request->search}%")
                            ->orWhereHas('category', function ($q) use ($request) {
                                $q->where('name', 'LIKE', "%{$request->search}%");
                            })
                            ->orWhereHas('brand', function ($q) use ($request) {
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


      
        foreach ($products as $product_warehouse) {

       

      $item = $helpers->singleProduct($product_warehouse);

   

            $data[] = $item;
        }


        return response()->json([
            'products'=> $data, 
           
        ]);
        // return response()->json($data);
    }





    public function GetProducts($limit ){

 
        $settings = Setting::where('deleted_at', '=', null)->first();
        $helpers = new helpers();
        $data = [];
        $product_warehouse_data = product_warehouse::with('warehouse', 'product', 'productVariant')
            ->where('warehouse_id', $settings->warehouse_id)
            ->where('deleted_at', '=', null)
            ->where( 'qte', '>', 0 )->take($limit)->get();
 
        foreach ($product_warehouse_data as $product_warehouse) {
 
              $item = $helpers->singleProduct($product_warehouse);
 
            $data[] = $item;
        }



        return $data ;

    }





    public function GetProductsByCategory(request $request)
    {



        $perPage = $request->limit;
        $pageStart = \Request::get('page', 1);
        // Start displaying items from this number;
        $offSet = ($pageStart * $perPage) - $perPage;
        $order = $request->SortField;
        $dir = $request->SortType;
     
        // Filter fields With Params to retrieve
        $columns = array(0 => 'name', 1 => 'category_id', 2 => 'brand_id', 3 => 'code');
        $param = array(0 => 'like', 1 => '=', 2 => '=', 3 => 'like');
        $data = array();
    
        $settings = Setting::where('deleted_at', '=', null)->first();
        $helpers = new helpers();

        $categoryId = $request->category_id;

        $data = [];
        $product_warehouse_data = product_warehouse::with('warehouse', 'product', 'productVariant')
        ->where('warehouse_id', $settings->warehouse_id)
        ->where('deleted_at', '=', null)
        ->where('qte', '>', 0) // Filter for quantity > 0
        ->whereHas('product', function ($query) use ($categoryId) {
            $query->whereHas('category', function ($q) use ($categoryId) {
                $q->where('id', $categoryId);
            });
        });
    
    $totalRows = $product_warehouse_data->count();
    
    $products = $product_warehouse_data
        ->offset($offSet)
        ->limit($perPage)
        ->orderBy($order, $dir)
        ->get();


      
        foreach ($products as $product_warehouse) {
 
         $item = $helpers->singleProduct($product_warehouse);
 
            $data[] = $item;
        }

        $category = Category::find($categoryId);
        // $brand = Brand::find($categoryId);

        return response()->json([
            'products'=> $data, 
            'category'=>  $category ,
            'total'=>  $totalRows
            // 'brand'=>  $brand,

        ]);
    }

    public function GetProductsByBrand(request $request)
    {



        $perPage = $request->limit;
        $pageStart = \Request::get('page', 1);
        // Start displaying items from this number;
        $offSet = ($pageStart * $perPage) - $perPage;
        $order = $request->SortField;
        $dir = $request->SortType;
     
        // Filter fields With Params to retrieve
        $columns = array(0 => 'name', 1 => 'category_id', 2 => 'brand_id', 3 => 'code');
        $param = array(0 => 'like', 1 => '=', 2 => '=', 3 => 'like');
        $data = array();
    
        $settings = Setting::where('deleted_at', '=', null)->first();
        $helpers = new helpers();

        $brandId = $request->brand_id;

        $data = [];
        $product_warehouse_data = product_warehouse::with('warehouse', 'product', 'productVariant')
        ->where('warehouse_id', $settings->warehouse_id)
        ->where('deleted_at', '=', null)
        ->where('qte', '>', 0) // Filter for quantity > 0
        ->whereHas('product', function ($query) use ($brandId) {
            $query->whereHas('brand', function ($q) use ($brandId) {
                $q->where('id', $brandId);
            });
        });
    
    $totalRows = $product_warehouse_data->count();
    
    $products = $product_warehouse_data
        ->offset($offSet)
        ->limit($perPage)
        ->orderBy($order, $dir)
        ->get();


      
        foreach ($products as $product_warehouse) {
 
         $item = $helpers->singleProduct($product_warehouse);
 
            $data[] = $item;
        }

        $brand = Brand::find($brandId);

        $dataBrand = array();
        $item['id'] =  $brand->id;
        $item['ar_name'] =  $brand->name;
        $item['en_name'] =   $brand->description;
        $item['image'] =  "/images/brands/".$brand->image;
        $dataBrand[] = $item;


        // $brand = Brand::find($categoryId);

        return response()->json([
            'products'=> $data, 
            'brand'=>  $dataBrand[0] ,
            // 'brand'=>  $brand,

        ]);
    }

    
    public function ProductDetail($id)
    {

     $settings = Setting::where('deleted_at', '=', null)->first();
     $helpers = new helpers();

    $productId = $id;  

    $product = product_warehouse::with('warehouse', 'product', 'productVariant')
    ->where('warehouse_id', $settings->warehouse_id)
    ->where('deleted_at', '=', null)
    ->where('product_id', $productId) // Filter by the specific product ID
    ->first(); 
     return $helpers->singleProduct($product);
 
    }




    public function OneProduct(Request $request , $id)
    {

     $settings = Setting::where('deleted_at', '=', null)->first();
     $helpers = new helpers();

    $productId = $id;  

    $product = product_warehouse::with('warehouse', 'product', 'productVariant')
    ->where('warehouse_id', $settings->warehouse_id)
    ->where('deleted_at', '=', null)
    ->where('qte', '>', 0) // Filter for quantity > 0
    ->where('product_id', $productId) // Filter by the specific product ID
    ->first(); 
    $item = $helpers->singleProduct($product);
        return response()->json( $item );
    }



    public function GetAllProducts(Request $request){

        
        // OFFERS_PRODUCT
        $type = $request->type;
        $perPage = $request->limit;
        $pageStart = \Request::get('page', 1);
        // Start displaying items from this number;
        $offSet = ($pageStart * $perPage) - $perPage;
        $order = $request->SortField;
        $dir = $request->SortType;
     
        // Filter fields With Params to retrieve
        $columns = array(0 => 'name', 1 => 'category_id', 2 => 'brand_id', 3 => 'code');
        $param = array(0 => 'like', 1 => '=', 2 => '=', 3 => 'like');
        $data = array();
    
        $settings = Setting::where('deleted_at', '=', null)->first();
        $helpers = new helpers();

        $categoryId = $request->category_id;

        $data = [];
        $product_warehouse_data = product_warehouse::with('warehouse', 'product', 'productVariant')
        ->where('warehouse_id', $settings->warehouse_id)
        ->where('deleted_at', '=', null)
        ->where('qte', '>', 0) // Filter for quantity > 0
        ->whereHas('product', function ($query) use ($type ) {
              $query->where('status', $type);
        });
    
    $totalRows = $product_warehouse_data->count();
    
    $products = $product_warehouse_data
        ->offset($offSet)
        ->whereHas('product', function ($query) use ($request ) {
            $query->whereBetween('price', [
                $request->start ?? 0,
                $request->end ?? 1000000000
            ]);
      })->limit($perPage)
        ->orderBy($order, $dir)
        ->get();

    //     ->whereHas('product', function ($query) use ($request ) {
    //         $query->orwhere('brand_id',null);
    //    }) 

        // ->whereBetween('price', [
        //     $request->start ?? 0,
        //     $request->end ?? 10000000
        // ])
      
        foreach ($products as $product_warehouse) {
 
         $item = $helpers->singleProduct($product_warehouse);
 
            $data[] = $item;
        }

 

        return response()->json([
            'products'=> $data,
            'total' => $totalRows
          
        ]);


    }



    public function search(Request $request){

    }




    public function ProducctInStock($product_id)
    {
        $settings = Setting::where('deleted_at', '=', null)->first();
        $helpers = new helpers();

        // return $product_id;
     

            $product_warehouse_data = product_warehouse::with('warehouse', 'product', 'productVariant')
            ->where('warehouse_id', $settings->warehouse_id)
            ->where('deleted_at', '=', null)
            ->where('product_id',  $product_id)
            // ->whereHas('product', function ($query) use ($product_id) {
            //     $query->where('id', $product_id);
            // })
            ->where('qte', '>', 0)
            ->first();
            if($product_warehouse_data){
                return true;
            }else{
                return false;
            }

        // $item = $helpers->singleProduct($product_warehouse_data);

        // return $item;
    }

}
