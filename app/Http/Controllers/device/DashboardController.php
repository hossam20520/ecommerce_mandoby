<?php

namespace App\Http\Controllers\device;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use App\Models\Category;
use App\Models\Product;
use App\Models\product_warehouse;
use App\Models\Warehouse;
use App\Models\Unit;
use App\Models\role_user;
use App\Models\User;
use App\Models\Setting;
use Illuminate\Support\Facades\Hash;

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
        }else if($request->type == "unites"){
            $this->UpdateUnite($data);
        }else if($request->type == "customers"){
            $this->UpdateCustomer($data);
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

    public function getUniteID($id){
            $cat = Unit::where('deleted_at' , '=' , null)->where('external_id' ,$id )->first();
            if($cat){
                return $cat->id;
            }else{
                return 1;
            }
            
        
                   }

           
                   


                   public function UpdateCustomer($customers){

                    foreach ($customers as $customer) {
            
                       $user_o = User::where('deleted_at' , '=' , null)->where('phone' ,$customer['phone'] )->first();
                      
                       $emaiil = $customer['phone']."@horecasmart.com";
                       if(!$user_o){
                        // $user_n  = new User;
                        $User = new User();
                        $User->firstname = ($customer['ar_name'] !== null) ? $customer['ar_name'] :  $customer['name']; 
                        $User->lastname  =($customer['en_name'] !== null) ? $customer['en_name'] :  $customer['name']; 
                        $User->username  = $customer['phone'];
                        $User->email         = $emaiil;
                        $User->phone         = "0".$customer['phone'];
                        $User->code          =  $customer['id'];
                        $User->area_name     =  "";
                        $User->area_id       =    1;
                        $User->location_lat  =    $customer['partner_latitude'];
                        $User->address       =    isset($customer['street']) ? $customer['street'] : "Street";   
                        $User->location_long  =   $customer['partner_longitude'];
                        $User->password  = Hash::make("Accc122$$$33###4hjjd@123");
                        $User->avatar    = "no_avatar.png";
                        $User->role_id   =   "2";
                        $User->from_odoo = "yes";
                        $User->save();
            
                        $role_user = new role_user;
                        $role_user->user_id = $User->id;
                        $role_user->role_id =  2;
                        $role_user->save();
                       }else{
                        $user_o->update([
                            // Update the fields as needed
                            'firstname' => ($customer['ar_name'] !== null) ? $customer['ar_name'] :  $customer['name'],
                            'lastname' =>  ($customer['en_name'] !== null) ? $customer['en_name'] :  $customer['name'] ,
                            'email' =>  $emaiil,
                          
                            'phone' => "0".$customer['phone'],
                            'location_lat' => $customer['partner_latitude'],
                            'location_long' => $customer['partner_longitude'],
                            'address' => isset($customer['street']) ? $customer['street'] : "Empty",
                            // Add more fields as needed
                        ]);
             
 
                       }
            
            
                        }
            
            
            
                       }



     public function UpdateUnite($unites){

        foreach ($unites as $unite) {

           $unite_o = Unit::where('deleted_at' , '=' , null)->where('external_id' ,$unite['id'] )->first();
           if(!$unite_o){
            $unite_n  = new Unit;
            $unite_n->name = $unite['name'];
            $unite_n->ShortName = $unite['name'];
            $unite_n->external_id = $unite['id'];
            $unite_n->save();
           }else{
            $unite_n = Unit::where('deleted_at' , '=' , null)->where('external_id', $unite['id'])
            ->first();

            $unite_n->name = $unite['name'];
            $unite_n->ShortName = $unite['name'];
            $unite_n->external_id = $unite['id'];
            $unite_n->save();
           }


            }



           }




           public function UpdateQuantity($product_id){
           

            $settings = Setting::where('deleted_at', '=', null)->first();
            
            $product_warehouse = product_warehouse::where('deleted_at', '=', null)
            ->where('warehouse_id', $settings->warehouse_id)
            ->where('product_id', $product_id)
            ->first();



            if ($product_warehouse) {
                $product_warehouse->qte += 500;
                $product_warehouse->save();
            } else {
                 $wa = new product_warehouse;
                 $wa->warehouse_id = $settings->warehouse_id;
                 $wa->product_id = $product_id;
                 $wa->qte  = 500;
                 $wa->save();
            }

      
           }



    public function UpdateProduct($products){



         
        foreach ($products as $product) {
            $product_o = Product::where('deleted_at' , '=' , null)->where('code' ,$product['code'] )->first();

            if(!$product_o){

                $Product = new Product;

                //-- Field Required
                $Product->name = $product['name'];
                $Product->ar_name = $product['name'];
                $Product->code = $product['code'];
                $Product->Type_barcode =  "CODE128";
                $Product->price = $product['price'];
                $Product->external_id = $product['id'];
                $Product->category_id =  $this->getCategoryID($product['categ_id']);
                $Product->brand_id =  1;
                $Product->TaxNet = 0;
                $Product->tax_method =  "1";
                $Product->note = "" ;
                $Product->cost =  0;
                $Product->unit_id = $this->getUniteID($product['unite_id']);     //unite_id
                $Product->unit_sale_id = $this->getUniteID($product['unite_id']);  
                $Product->unit_purchase_id = $this->getUniteID($product['unite_id']);  
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


                $this->UpdateQuantity($Product->id);

                
            } else{

 
                $Product = Product::where('code', $product['code'])
                    ->where('deleted_at', '=', null)
                    ->first();

                //-- Update Product
 
                // Store Variants Product
                $Product->name = $product['name'];
                $Product->ar_name = $product['name'];
                $Product->code = $product['code'];
                $Product->Type_barcode =  "CODE128";
                $Product->price = $product['price'];
                $Product->external_id = $product['id'];
                $Product->category_id =  $this->getCategoryID($product['categ_id']);
                $Product->brand_id =  1;
                $Product->TaxNet = 0;
                $Product->tax_method =  "1";
                $Product->note = "" ;
                $Product->cost =  0;
                $Product->unit_id = $this->getUniteID($product['unite_id']);     //unite_id
                $Product->unit_sale_id = $this->getUniteID($product['unite_id']);  
                $Product->unit_purchase_id = $this->getUniteID($product['unite_id']);  
                $Product->stock_alert = 5;
                $Product->is_variant = 0;
                $Product->mini_qty = 1;
                $Product->max_qty = 100;
 
                $Product->status =  "NORMAL_PRODUCT";
                $Product->discount =  "0";
 
                $Product->save();
                $this->UpdateQuantity($Product->id);

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
