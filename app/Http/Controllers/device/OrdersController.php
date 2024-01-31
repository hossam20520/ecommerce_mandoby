<?php

namespace App\Http\Controllers\device;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use App\Models\User;
use App\Models\Cart;
use App\Models\Client;
use App\Models\Sale;
use App\utils\helpers;

use Illuminate\Support\Facades\Auth;

class OrdersController extends Controller
{

    public function getorder(Request $request , $id){

        $user = Auth::user();
        $data = app('App\Http\Controllers\device\CartController')->CartByOrderId($user->id ,$id );  
        $sale =  Sale::where('id' , $id)->first();
        
      return response()->json([
        'order' =>    $sale ,
        'cart' => $data
    
    ]);
         
    }
     
  public function GetOrders(Request $request){

    $status = $request->status;
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
    $helpers = new helpers();



      $user = Auth::user();
      // $client = Client::where('user_id' ,  $user->id)->first();
      $sale = Sale::where('deleted_at' , '=' , null)->where('client_id' , $user->id);  //->where('statut' , $status )



      $Filtred = $helpers->filter($sale, $columns, $param, $request);


      $totalRows = $Filtred->count();
      $orders = $Filtred->offset($offSet)
          ->limit($perPage)
          ->orderBy($order, $dir)
          ->get();


      return response()->json([
       'orders' =>    $orders
   ]);

   
  }

}
