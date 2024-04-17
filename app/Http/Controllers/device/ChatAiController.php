<?php

namespace App\Http\Controllers\device;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;

class ChatAiController extends Controller
{
    

    public function sendChat(Request $request){


        
        return response()->json([
         
            'message'=>  $request->message  ,
    
            'replay'=>  "custom text"  ,
       ]);


    }
}
