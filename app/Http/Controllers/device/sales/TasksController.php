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
         $tasks = Task::where('deleted_at' , '=' , null)->where('user_id' ,  $user->id )->get();

         return response()->json([
            'tasks' => $tasks
        ]);
      
    }
}
