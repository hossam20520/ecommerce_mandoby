<?php

namespace App\Http\Controllers\device;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use App\Models\Slider;
use App\Models\Category;
use App\Models\Brand;
use App\Models\Ai;

use App\Http\Controllers\device\ProductsController;

class HomeController extends Controller
{
     
      public $productController;


    public function __construct(){
       $this->productController = new ProductsController();
    }
      

    public function GetCategoryAi(Request $request){

          
       
     $ai = Ai::where('deleted_at', '=', null)->get();


       return response()->json([
         
                'ai'=>  $ai ,
        
 
           ]);

    }

    public function HomePage(Request $request){

          
       
          $slider = Slider::where('deleted_at', '=', null)->where('device' , 'mobile')->get(['image']);



        $slider_desk = Slider::where('deleted_at', '=', null)->where('device' , 'desktop')->get(['image']);

        $desktopSlider = array();
        foreach ( $slider_desk  as $slide) {
        
            $item['image_desktop'] =  env('URL', 'http://localhost:8000')."/images/sliders/".$slide->image;
            $desktopSlider[] = $item;
        }


        $data = array();
        foreach ( $slider  as $slide) {
            $item['image'] =  "/images/sliders/".$slide->image;
            // $item['image_desktop'] =  env('URL', 'http://localhost:8000')."/images/sliders/".$slide->image;
            $data[] = $item;
        }


        $category = Category::where('deleted_at', '=', null)->get();
        $dataCategory = array();
        foreach ( $category  as $categoryOne) {
            $item['id'] =  $categoryOne->id;
            $item['ar_name'] =  $categoryOne->ar_name;
            $item['name'] =   $categoryOne->name;
            $item['image'] =  "/images/category/".$categoryOne->image;
            $item['image_category_desk'] =  env('URL', 'http://localhost:8000')."/images/category/".$categoryOne->image;
            $dataCategory[] = $item;
        }

        


        $brand = Brand::where('deleted_at', '=', null)->get();
        $dataBrand = array();
        foreach ( $brand  as $oneBrand) {
            $item['id'] =  $oneBrand->id;
            $item['ar_name'] =  $oneBrand->name;
            $item['en_name'] =   $oneBrand->description;
            $item['image'] =  "/images/brands/".$oneBrand->image;
            $dataBrand[] = $item;
        }


      
       $products =  $this->productController->GetProducts(10);
        return response()->json([
         
                'slider'=> $data ,
                'category'=> $dataCategory ,
                'brands'=> $dataBrand ,
                'products'=> $products,
                'desktop_slider' => $desktopSlider
 
        ]);



    }



}
