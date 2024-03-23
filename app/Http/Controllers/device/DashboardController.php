<?php

namespace App\Http\Controllers\device;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use App\Models\Category;
use App\Models\Product;
use App\Models\product_warehouse;
use App\Models\Warehouse;


class DashboardController extends Controller
{
   


    public function updateMasterData(Request $request){
    
        //   $data = $request->input('data');

        // Now you can process the categories as needed
        $data =  $request->input('data') ;
        if($request->type == "category"){
            $this->UpdateCategory($data);
        }else if($request->type == "products"){
            $this->UpdateProduct($data);
        }
  

        return response()->json(['message' => 'success'], 200);

    }

public function getCategoryID($id){
    $cat = Category::where('deleted_at' , '=' , null)->where('code' ,$id )->first();
    if($cat){
        return $cat->id;
    }else{
        return 1;
    }
    

           }


    public function UpdateProduct($products){



         
        foreach ($products as $product) {
            $product_o = Product::where('deleted_at' , '=' , null)->where('external_id' ,$product['id'] )->first();

            if(!$product_o){

                $Product = new Product;

                //-- Field Required
                $Product->name = $product['name'];
                $Product->ar_name = $product['name'];
                $Product->code = $product['id'];
                $Product->Type_barcode =  "CODE128";
                $Product->price = $product['price'];
                $Product->external_id = $product['id'];
                $Product->category_id =  $this->getCategoryID($product['categ_id']);
                $Product->brand_id =  1;
                $Product->TaxNet = 0;
                $Product->tax_method =  "1";
                $Product->note = "" ;
                $Product->cost =  0;
                $Product->unit_id = 1;
                $Product->unit_sale_id = 1;
                $Product->unit_purchase_id = 1;
                $Product->stock_alert = 5;
                $Product->is_variant = 0;
                $Product->mini_qty = 1;
                $Product->max_qty = 100;
    



                $Product->status =  "NORMAL_PRODUCT";
                $Product->discount =  "0";
      
            

                $Product->image =  'no-image.png';
                $Product->save();

              
                $warehouses = Warehouse::where('deleted_at', null)->pluck('id')->toArray();
                if ($warehouses) {
     
                    foreach ($warehouses as $warehouse) {
                      
                            $product_warehouse[] = [
                                'product_id' => $Product->id,
                                'warehouse_id' => $warehouse,
                            ];
                        
                    }

                    product_warehouse::insert($product_warehouse);
                }

                
            } 
    
  
              }




    }



    public function UpdateCategory($categories){


        foreach ($categories as $category) {
            $cat = Category::where('deleted_at' , '=' , null)->where('code' ,$category['id'] )->first();
            if(!$cat){

                $category_ob = new Category;
                $category_ob->name =  $category['name'];
                $category_ob->code =  $category['id'];
                // $category_ob->image =  $category;
                $category_ob->save();
            } 
    
  
              }

    }

}
