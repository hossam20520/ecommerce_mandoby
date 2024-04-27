<?php

namespace App\Http\Controllers\device\sales;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use App\Models\Task;
use Illuminate\Support\Facades\Auth;

class TasksController extends Controller
{
    public function getTasks(Request $request){
        
         $user =   Auth::user();
         $tasks = Task::with('Shop')->where('deleted_at' , '=' , null)->where('user_id' ,  $user->id )->orderBy('id', 'desc')->get();


        $dataa = array();

         foreach ($tasks as   $itm) {
            $item['task_id']  = strval($itm->id);
            $item['location_id']  = $itm->Shop->id;
            $item['place_name']  = $itm->Shop->Outlet_Name;
            $item['lng']  = ($itm->Shop->Point_X_Geo === null) ? "0.000000" : $itm->Shop->Point_X_Geo;  
            $item['lat']  = ($itm->Shop->Point_Y_Geo === null) ? "0.000000" : $itm->Shop->Point_Y_Geo;  
            $item['status'] = $itm->status;
            $dataa[] = $item;
         }
         return response()->json([
            'tasks' =>  $dataa
        ]);
      
    }
}
