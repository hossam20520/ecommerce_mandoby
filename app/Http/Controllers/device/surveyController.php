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
            $Survey->save();


        }, 10);

        return response()->json(['success' => true]);
     }
}
