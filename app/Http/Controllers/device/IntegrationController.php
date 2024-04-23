<?php

namespace App\Http\Controllers\device;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use GuzzleHttp\Client;
use App\Models\Setting;

class IntegrationController extends Controller
{
   

  
  public function SendProductsLines($products , $customer_id , $sale_ref){

    $client = new Client();

    $setting = Setting::where('deleted_at' , '=' , null)->first();

    $responseData = $client->post($setting->odoo_url.'/api/sales?order_reference='.$sale_ref.'&customer_id='.$customer_id, [
        'headers' => [
            'db' => $setting->db_name ,
            'Content-Type' => 'application/json',
            'access_token' => $setting->token_api,
            // 'Cookie' => 'session_id=1e66bbeb32454abe43d30e9e2f4dd8aa202b920a',
        ],
        'json' => [
     
            'order_lines' => $products
            
            
            // [
            //     [
            //         'product_id' => 15,
            //         'qty' => 5,
            //         'application_price' => 11
            //     ],
            //     [
            //         'product_id' => 10000000,
            //         'qty' => 5,
            //         'application_price' => 11
            //     ]
            // ]



        ]
    ]);


    // if ($responseData && isset($responseData['count']) && $responseData['count'] > 0) {
            
    //     return "Success";


    // } else {
    //         if ($responseData && isset($responseData['type'])) {
    //         // Type is found
    //         // $type = $responseData['type'];
    //         // $message = $responseData['message'];
    //         // echo "Type: $type, Message: $message";


    //          } else {
    //         // Type not found
    //             // echo "Type not found";
    //     }



    // }





  }


}
