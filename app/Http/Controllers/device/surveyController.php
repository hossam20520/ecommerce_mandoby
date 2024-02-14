<?php

namespace App\Http\Controllers\device;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use App\Models\Survey;
use App\utils\helpers;
use Carbon\Carbon;
use DB;

class surveyController extends Controller
{



     public function surveyData(Request $request){



        \DB::transaction(function () use ($request) {

      
            $surveyData = $request->input('payload');


            $Survey = new Survey;
            $survey->name = $surveyData['name'] ?? null;
            $survey->nameselectaStatus = $surveyData['nameselectaStatus'] ?? null;;
            $survey->city = $surveyData['city'] ?? null;;
            $survey->area = $surveyData['area'] ?? null;;
            // Continue assigning values for the other fields...
        
            $survey->DIDMeatResponsiblePerson = $surveyData['DIDMeatResponsiblePerson'] ?? null;;
            $survey->NameResponsible = $surveyData['NameResponsible'] ?? null;;
            $survey->Phone = $surveyData['Phone'] ?? null;
            $survey->activityType = $surveyData['activityType'] ?? null;
            $survey->address_Detail = $surveyData['address_Detail'] ?? null;
            $survey->delevery_detail = $surveyData['delevery_detail'] ?? null;
            $survey->reasonVisit =  $surveyData['reason_call'] ?? null;
            $survey->usingApplication = $surveyData['usingApplication'] ?? null;
            $survey->milkused = $surveyData['milkused'] ?? null;
            $survey->kreemUsed = $surveyData['kreemUsed'] ?? null;
            $survey->spices = $surveyData['spices'] ?? null;
            $survey->cheeseUsed = $surveyData['cheeseUsed'] ?? null;
            $survey->SelectedBatter = $surveyData['SelectedBatter'] ?? null;
            $survey->oilUsed = $surveyData['oilUsed'] ?? null;
            $survey->teaused = $surveyData['teaused'] ?? null;
            $survey->seeeds = $surveyData['seeeds'] ?? null;
            $survey->sauce = $surveyData['sauce'] ?? null;
            $survey->sauceCompany = $surveyData['sauceCompany'] ?? null;
            $survey->watergasused = $surveyData['watergasused'] ?? null;
            $survey->pastaUsed = $surveyData['pastaUsed'] ?? null;
            $survey->bonUsed = $surveyData['bonUsed'] ?? null;
            $survey->branchNumber = $surveyData['branchNumber'] ?? null;
            $survey->summryVisit = $surveyData['summryVisit'] ?? null;
            $survey->productUsesClient = $surveyData['productUsesClient'] ?? null;
            $survey->activity = $surveyData['activity'] ?? null;
            $survey->save();


        }, 10);

        return response()->json(['success' => true]);
     }
}
