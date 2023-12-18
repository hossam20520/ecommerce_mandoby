<?php

namespace App\Http\Controllers\device;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use  App\Services\Product\Product;



class PlayController extends Controller
{
     
    public function play(Request $request){
          $product = new Product("hossam" , 20);

         return  $product->getName();
    }
}
