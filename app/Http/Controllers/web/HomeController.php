<?php

namespace App\Http\Controllers\web;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use App\Models\Slider;

class HomeController extends Controller
{
 

    public function Home(){
 
        // dd($homeObject);/`
        return view('vue.index'  );
    }
}
