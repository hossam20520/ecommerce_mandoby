<?php
namespace App\Http\Controllers;

use App\Models\Survey;
use App\utils\helpers;
use Carbon\Carbon;
use DB;
use Illuminate\Http\Request;
use Intervention\Image\ImageManagerStatic as Image;

class SurveysController extends Controller
{

    //------------ GET ALL Surveys -----------\

    public function index(Request $request)
    {
        // $this->authorizeForUser($request->user('api'), 'view', Survey::class);
        // How many items do you want to display.
        $perPage = $request->limit;
        $pageStart = \Request::get('page', 1);
        // Start displaying items from this number;
        $offSet = ($pageStart * $perPage) - $perPage;
        $order = $request->SortField;
        $dir = $request->SortType;
        $helpers = new helpers();

        $surveys = Survey::with('task.user')->where('deleted_at', '=', null)->where(function ($query) use ($request) {
                return $query->when($request->filled('search'), function ($query) use ($request) {
                    return $query->where('ar_name', 'LIKE', "%{$request->search}%")
                        ->orWhere('en_name', 'LIKE', "%{$request->search}%");
                });
            });
        $totalRows = $surveys->count();
        $surveys = $surveys->offset($offSet)
            ->limit($perPage)
            ->orderBy($order, $dir)
            ->get();

        return response()->json([
            'surveys' => $surveys,
            'totalRows' => $totalRows,
        ]);

    }

    //---------------- STORE NEW Survey -------------\

    public function store(Request $request)
    {
        // $this->authorizeForUser($request->user('api'), 'create', Survey::class);

   
        \DB::transaction(function () use ($request) {

      

            $Survey = new Survey;
            $survey->name = $request['name'];
            $survey->nameselectaStatus = $request['nameselectaStatus'];
            $survey->city = $request['city'];
            $survey->area = $request['area'];
            // Continue assigning values for the other fields...
        
            $survey->DIDMeatResponsiblePerson = $request['DIDMeatResponsiblePerson'];
            $survey->NameResponsible = $request['NameResponsible'];
            $survey->Phone = $request['Phone'];
            $survey->activityType = $request['activityType'];
            $survey->address_Detail = $request['address_Detail'];
            $survey->delevery_detail = $request['delevery_detail'];
            $survey->reasonVisit = $request['reasonVisit'];
            $survey->usingApplication = $request['usingApplication'];
            $survey->milkused = $request['milkused'];
            $survey->kreemUsed = $request['kreemUsed'];
            $survey->spices = $request['spices'];
            $survey->cheeseUsed = $request['cheeseUsed'];
            $survey->SelectedBatter = $request['SelectedBatter'];
            $survey->oilUsed = $request['oilUsed'];
            $survey->teaused = $request['teaused'];
            $survey->seeeds = $request['seeeds'];
            $survey->sauce = $request['sauce'];
            $survey->sauceCompany = $request['sauceCompany'];
            $survey->watergasused = $request['watergasused'];
            $survey->pastaUsed = $request['pastaUsed'];
            $survey->bonUsed = $request['bonUsed'];
            $survey->branchNumber = $request['branchNumber'];
            $survey->summryVisit = $request['summryVisit'];
            $survey->productUsesClient = $request['productUsesClient'];
            $survey->activity = $request['activity'];
        
            $survey->save();
  
       

        }, 10);

        return response()->json(['success' => true]);

    }

     //------------ function show -----------\

     public function show($id){
        //
    
    }

     //---------------- UPDATE Survey -------------\

     public function update(Request $request, $id)
     {
 
        //  $this->authorizeForUser($request->user('api'), 'update', Survey::class);
 
        //  request()->validate([
        //      'ar_name' => 'required',
        //  ]);
         \DB::transaction(function () use ($request, $id) {
            //  $Survey = Survey::findOrFail($id);
      
 
      
             Survey::whereId($id)->update([
                'ar_name' => $request['ar_name'],
                'description' => $request['en_name'],
                'image' => $filename,
                // Add the remaining fields to update here
                'nameselectaStatus' => $request['nameselectaStatus'],
                'city' => $request['city'],
                'area' => $request['area'],
                'DIDMeatResponsiblePerson' => $request['DIDMeatResponsiblePerson'],
                'NameResponsible' => $request['NameResponsible'],
                'Phone' => $request['Phone'],
                'activityType' => $request['activityType'],
                'address_Detail' => $request['address_Detail'],
                'delevery_detail' => $request['delevery_detail'],
                'reasonVisit' => $request['reasonVisit'],
                'usingApplication' => $request['usingApplication'],
                'milkused' => $request['milkused'],
                'kreemUsed' => $request['kreemUsed'],
                'spices' => $request['spices'],
                'cheeseUsed' => $request['cheeseUsed'],
                'SelectedBatter' => $request['SelectedBatter'],
                'oilUsed' => $request['oilUsed'],
                'teaused' => $request['teaused'],
                'seeeds' => $request['seeeds'],
                'sauce' => $request['sauce'],
                'sauceCompany' => $request['sauceCompany'],
                'watergasused' => $request['watergasused'],
                'pastaUsed' => $request['pastaUsed'],
                'bonUsed' => $request['bonUsed'],
                'branchNumber' => $request['branchNumber'],
                'summryVisit' => $request['summryVisit'],
                'productUsesClient' => $request['productUsesClient'],
                'activity' => $request['activity'],
                // Add any remaining fields here
            ]);
 
         }, 10);
 
         return response()->json(['success' => true]);
     }

    //------------ Delete Survey -----------\

    public function destroy(Request $request, $id)
    {
        $this->authorizeForUser($request->user('api'), 'delete', Survey::class);

        Survey::whereId($id)->update([
            'deleted_at' => Carbon::now(),
        ]);
        return response()->json(['success' => true]);
    }

    //-------------- Delete by selection  ---------------\

    public function delete_by_selection(Request $request)
    {

        $this->authorizeForUser($request->user('api'), 'delete', Survey::class);

        $selectedIds = $request->selectedIds;
        foreach ($selectedIds as $survey_id) {
            Survey::whereId($survey_id)->update([
                'deleted_at' => Carbon::now(),
            ]);
        }
        return response()->json(['success' => true]);

    }

}

