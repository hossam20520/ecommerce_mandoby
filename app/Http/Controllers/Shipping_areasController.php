<?php
namespace App\Http\Controllers;

use App\Models\Shipping_area;
use App\utils\helpers;
use Carbon\Carbon;
use DB;
use Illuminate\Http\Request;
use Intervention\Image\ImageManagerStatic as Image;
use App\Models\Setting;
use App\Models\Area;
use App\Models\Government;
class Shipping_areasController extends Controller
{

    //------------ GET ALL Shipping_areas -----------\

    public function index(Request $request)
    {
        $this->authorizeForUser($request->user('api'), 'update', Setting::class);
        // How many items do you want to display.
        $perPage = $request->limit;
        $pageStart = \Request::get('page', 1);
        // Start displaying items from this number;
        $offSet = ($pageStart * $perPage) - $perPage;
        $order = $request->SortField;
        $dir = $request->SortType;
        $helpers = new helpers();

        $Shipping_areas = Shipping_area::with('areas.govs')->where('deleted_at', '=', null)->where(function ($query) use ($request) {
                return $query->when($request->filled('search'), function ($query) use ($request) {
                    return $query->where('ar_name', 'LIKE', "%{$request->search}%")
                        ->orWhere('en_name', 'LIKE', "%{$request->search}%");
                });
            });
        $totalRows = $Shipping_areas->count();
        $Shipping_areas = $Shipping_areas->offset($offSet)
            ->limit($perPage)
            ->orderBy($order, $dir)
            ->get();

        $goves = Government::where('deleted_at' , '='  , null)->get();


        return response()->json([
            'Shipping_areas' => $Shipping_areas,
            'govs' => $goves,
            'totalRows' => $totalRows,
        ]);

    }

    //---------------- STORE NEW Shipping_area -------------\



    public function getAreas(Request $request){
         $gov_id = $request->gov_id;
        
         $areass = Area::where('deleted_at' , '=' , null)->where('gov_id' , $gov_id)->get();
         return response()->json([
            'areas' =>  $areass ,
           
        ]);

    }




    public function store(Request $request)
    {
        $this->authorizeForUser($request->user('api'), 'update', Setting::class);

 

        \DB::transaction(function () use ($request) {

           $area = Shipping_area::where('deleted_at' ,  '=' , null)->where('area_id' , $request['area_id'])->first();

           if($area){


           }else{
            $Shipping_area = new Shipping_area;
            $Shipping_area->area_id = $request['area_id'];
            $Shipping_area->cost = $request['cost'];
            $Shipping_area->save();
           }

         

        }, 10);

        return response()->json(['success' => true]);

    }

     //------------ function show -----------\

     public function show($id){
        //
    
    }

     //---------------- UPDATE Shipping_area -------------\

     public function update(Request $request, $id)
     {
 
        $this->authorizeForUser($request->user('api'), 'update', Setting::class);
 
       
         \DB::transaction(function () use ($request, $id) {
             $Shipping_area = Shipping_area::findOrFail($id);
             $currentImage = $Shipping_area->image;
 
         
 
             Shipping_area::whereId($id)->update([
             
                 'cost' => $request['cost'],
                 'area_id' => $request['area_id'],
             ]);
 
         }, 10);
 
         return response()->json(['success' => true]);
     }

    //------------ Delete Shipping_area -----------\

    public function destroy(Request $request, $id)
    {
        $this->authorizeForUser($request->user('api'), 'update', Setting::class);

        Shipping_area::whereId($id)->update([
            'deleted_at' => Carbon::now(),
        ]);
        return response()->json(['success' => true]);
    }

    //-------------- Delete by selection  ---------------\

    public function delete_by_selection(Request $request)
    {

        $this->authorizeForUser($request->user('api'), 'update', Setting::class);

        $selectedIds = $request->selectedIds;
        foreach ($selectedIds as $shipping_area_id) {
            Shipping_area::whereId($shipping_area_id)->update([
                'deleted_at' => Carbon::now(),
            ]);
        }
        return response()->json(['success' => true]);

    }

}

