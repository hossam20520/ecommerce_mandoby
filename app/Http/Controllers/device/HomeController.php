<?php

namespace App\Http\Controllers\device;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use App\Models\Slider;
use App\Models\Category;
use App\Http\Controllers\device\ProductsController;

class HomeController extends Controller
{
     
      public $productController;


    public function __construct(){
       $this->productController = new ProductsController();
    }
      
    public function HomePage(Request $request){

          
       
        $slider = Slider::where('deleted_at', '=', null)->where('device' ,'mobile' )->get(['image']);
        $data = array();
        foreach ( $slider  as $slide) {
            $item['image'] =  "/images/sliders/".$slide->image;
            $data[] = $item;
        }


        $category = Category::where('deleted_at', '=', null)->get();
        $dataCategory = array();
        foreach ( $category  as $categoryOne) {
            $item['id'] =  $categoryOne->id;
            $item['ar_name'] =  $categoryOne->ar_name;
            $item['name'] =   $categoryOne->name;
            $item['image'] =  "/images/category/".$categoryOne->image;
            $dataCategory[] = $item;
        }

        
      
       $products =  $this->productController->GetProducts(10);
        return response()->json([
         
                'slider'=> $data ,
                'category'=> $dataCategory ,
                'products'=> $products 
 
        ]);



    }



}
