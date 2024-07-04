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
use Illuminate\Support\Facades\Auth;
class surveyController extends Controller
{

    

 
 
 
    public function getDropDown(Request $request){



        $mapsva  =  Map::whereNull('deleted_at')->whereNotNull('Section')->pluck('Section')->unique()->values()->toArray();
         
        $Shiakha_Name  =  Map::whereNull('deleted_at')->whereNotNull('Shiakha_Name')->pluck('Shiakha_Name')->unique()->values()->toArray();
                   
        $Zone_Name  =  Map::whereNull('deleted_at')->whereNotNull('Zone_Name')->pluck('Zone_Name')->unique()->values()->toArray();
        $outlitType  =  Map::whereNull('deleted_at')->whereNotNull('Outlet_Type')->pluck('Outlet_Type')->unique()->values()->toArray();
         
        return response()->json(['section' => $mapsva , 'Shiakha_Name'=>$Shiakha_Name  , 'Outlet_Type'=> $outlitType   ]);
    }
 
 
 



    public function Addclient(Request $request){
  

        \DB::transaction(function () use ($request) {
         $surveyData = $request->input('payload');
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


    public function getInfoDataClient(Request $request , $task_id ){
        $client = Survey::with('task.Shop')->where('task_id' , $task_id)->first();
        
        return response()->json(['client' => $client ]);

    }

    public function updateSUrvey(Request $request, $task_id , $location_lat , $location_lng ){
      
        $user =   Auth::user();
        
        Survey::where('task_id' , $task_id)->update([
            'location_lat'=> $location_lat,
            'location_lng'=> $location_lng
        ]);


        $task =  Task::where('id' , $task_id)->first();

         if($task){
            Map::where('id' , $task->location_id )->update([
                'user_id'=> $user->id,
                
                'assigned' => 'yes'
            ]);
         }

       

        Task::whereId($task_id)->update([
             'status' => "done",
             'current_lat' => $location_lat,
             'current_lng' => $location_lng 
        ]);


        return response()->json(['success' => true]);
    
    
    }


    


     public function surveyData(Request $request){

 
        \DB::transaction(function () use ($request) {

      
            $surveyData = $request->input('payload');


            $Survey = new Survey;

            $Survey->bussiness_name = $surveyData['bussiness_name'] ?? null;


            $Survey->name = $surveyData['name'] ?? null;
            $Survey->nameselectaStatus = $surveyData['nameselectaStatus'] ?? null;;
            $Survey->city = $surveyData['city'] ?? null;;
            $Survey->area = $surveyData['area'] ?? null;;
            // Continue assigning values for the other fields...
        
            // $Survey->DIDMeatResponsiblePerson = $surveyData['DIDMeatResponsiblePerson'] ?? null;;
            $Survey->NameResponsible = $surveyData['NameResponsible'] ?? null;;
            $Survey->Phone = $surveyData['Phone'] ?? null;
            $Survey->activityType = $surveyData['activityType'] ?? null;
            $Survey->address_Detail = $surveyData['address_Detail'] ?? null;
            $Survey->delevery_detail = $surveyData['delevery_detail'] ?? null;
            // $Survey->reasonVisit =  $surveyData['reason_call'] ?? null;
            // $Survey->usingApplication = $surveyData['usingApplication'] ?? null;
            // $Survey->milkused = $surveyData['milkused'] ?? null;
            // $Survey->kreemUsed = $surveyData['kreemUsed'] ?? null;
            // $Survey->spices = $surveyData['spices'] ?? null;
            // $Survey->cheeseUsed = $surveyData['cheeseUsed'] ?? null;
            // $Survey->SelectedBatter = $surveyData['SelectedBatter'] ?? null;
            // $Survey->oilUsed = $surveyData['oilUsed'] ?? null;
            // $Survey->teaused = $surveyData['teaused'] ?? null;0
            // $Survey->seeeds = $surveyData['seeeds'] ?? null;
            // $Survey->sauce = $surveyData['sauce'] ?? null;
            // $Survey->sauceCompany = $surveyData['sauceCompany'] ?? null;
            // $Survey->watergasused = $surveyData['watergasused'] ?? null;
            // $Survey->pastaUsed = $surveyData['pastaUsed'] ?? null;
            // $Survey->bonUsed = $surveyData['bonUsed'] ?? null;
            // $Survey->branchNumber = $surveyData['branchNumber'] ?? null;
            $Survey->summryVisit = $surveyData['summryVisit'] ?? null;
            // $Survey->productUsesClient = $surveyData['productUsesClient'] ?? null;
            // $Survey->activity = $surveyData['activity'] ?? null;
            $Survey->task_id = $request['task_id'] ?? null;
 
            $Survey->save();






 

        }, 10);

        return response()->json(['success' => true]);
     }
}
