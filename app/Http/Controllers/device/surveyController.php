<?php

namespace App\Http\Controllers\device;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use App\Models\Survey;
use App\Models\Task;
use App\Models\Area;
use App\Models\Map;
use App\Models\Government;

use App\utils\helpers;
use Carbon\Carbon;
use DB;

class surveyController extends Controller
{

    

 
 
 
 
 
 
 



    public function Addclient(Request $request){
        $surveyData = $request->input('payload');

        \DB::transaction(function () use ($request) {

         $map = new Map;
         $map->Outlet_Name = $surveyData['Outlet_Name'] ?? null;
         $map->Point_Y_Geo = $request['lat'] ?? null;
         $map->Point_X_Geo = $request['lng'] ?? null;
         $map->Gov_Name = $surveyData['Gov_Name'] ?? null;
         $map->Section = $surveyData['Section'] ?? null;
         $map->Shiakha_Name = $surveyData['Shiakha_Name'] ?? null;
         $map->Zone_Name = $surveyData['Zone_Name'] ?? null;
         $map->Area_Type = $surveyData['Area_Type'] ?? null;
         $map->Outlet_Type = $surveyData['Outlet_Type'] ?? null;
         $map->Street = $surveyData['Street'] ?? null;
         $map->Mobile = $surveyData['Mobile'] ?? null;
         $map->Contact = $surveyData['Contact'] ?? null;
         $map->user_id =  $request['user_id'] ?? null;
         $map->save();



         $task = Task::where('deleted_at' , '=' , null)->where('user_id' ,$request['user_id'])->where('location_id' , $map->id)->first();

         if(!$task){
             $tasks = new Task;
             $tasks->location_id =  $map->id;
             $tasks->user_id = $request['user_id'];
             $tasks->from = "0";
             $tasks->to = "0";
             $tasks->status = "pending";
             $tasks->save();
         }

       
               }, 10);

               return response()->json(['success' => true]);

    }


    public function getarea(Request $request){
 
        $govs = Government::where('deleted_at' ,'=' , null)->where('ar_name' , $request->area )->first();
        if( $govs ){

            $area = Area::where('deleted_at' ,'=' , null)->where('gov_id' , $govs->id )->get();
            return response()->json(['area' => $area ]);
        }else{
            return response()->json(['area' => [] ]);
        }
       
    }


    public function getGoves(Request $request){
 
        $govs = Government::where('deleted_at' ,'=' , null)->get();
        
        return response()->json(['goves' => $govs]);
    }

     public function surveyData(Request $request){



        \DB::transaction(function () use ($request) {

      
            $surveyData = $request->input('payload');


            $Survey = new Survey;
            $Survey->name = $surveyData['name'] ?? null;
            $Survey->nameselectaStatus = $surveyData['nameselectaStatus'] ?? null;;
            $Survey->city = $surveyData['city'] ?? null;;
            $Survey->area = $surveyData['area'] ?? null;;
            // Continue assigning values for the other fields...
        
            $Survey->DIDMeatResponsiblePerson = $surveyData['DIDMeatResponsiblePerson'] ?? null;;
            $Survey->NameResponsible = $surveyData['NameResponsible'] ?? null;;
            $Survey->Phone = $surveyData['Phone'] ?? null;
            $Survey->activityType = $surveyData['activityType'] ?? null;
            $Survey->address_Detail = $surveyData['address_Detail'] ?? null;
            $Survey->delevery_detail = $surveyData['delevery_detail'] ?? null;
            $Survey->reasonVisit =  $surveyData['reason_call'] ?? null;
            $Survey->usingApplication = $surveyData['usingApplication'] ?? null;
            $Survey->milkused = $surveyData['milkused'] ?? null;
            $Survey->kreemUsed = $surveyData['kreemUsed'] ?? null;
            $Survey->spices = $surveyData['spices'] ?? null;
            $Survey->cheeseUsed = $surveyData['cheeseUsed'] ?? null;
            $Survey->SelectedBatter = $surveyData['SelectedBatter'] ?? null;
            $Survey->oilUsed = $surveyData['oilUsed'] ?? null;
            $Survey->teaused = $surveyData['teaused'] ?? null;
            $Survey->seeeds = $surveyData['seeeds'] ?? null;
            $Survey->sauce = $surveyData['sauce'] ?? null;
            $Survey->sauceCompany = $surveyData['sauceCompany'] ?? null;
            $Survey->watergasused = $surveyData['watergasused'] ?? null;
            $Survey->pastaUsed = $surveyData['pastaUsed'] ?? null;
            $Survey->bonUsed = $surveyData['bonUsed'] ?? null;
            $Survey->branchNumber = $surveyData['branchNumber'] ?? null;
            $Survey->summryVisit = $surveyData['summryVisit'] ?? null;
            $Survey->productUsesClient = $surveyData['productUsesClient'] ?? null;
            $Survey->activity = $surveyData['activity'] ?? null;
            $Survey->task_id = $request['task_id'] ?? null;
 
            $Survey->save();



     Task::whereId($request['task_id'])->update([
            'status' => "done",
        ]);



        }, 10);

        return response()->json(['success' => true]);
     }
}
