<?php
namespace App\Http\Controllers;

use App\Models\Government;
use App\utils\helpers;
use Carbon\Carbon;
use DB;
use Illuminate\Http\Request;
use Intervention\Image\ImageManagerStatic as Image;
use App\Models\Setting;
class GovernmentsController extends Controller
{

    //------------ GET ALL Governments -----------\

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

        $governments = Government::where('deleted_at', '=', null)->where(function ($query) use ($request) {
                return $query->when($request->filled('search'), function ($query) use ($request) {
                    return $query->where('ar_name', 'LIKE', "%{$request->search}%")
                        ->orWhere('en_name', 'LIKE', "%{$request->search}%");
                });
            });
        $totalRows = $governments->count();
        $governments = $governments->offset($offSet)
            ->limit($perPage)
            ->orderBy($order, $dir)
            ->get();

        return response()->json([
            'governments' => $governments,
            'totalRows' => $totalRows,
        ]);

    }

    //---------------- STORE NEW Government -------------\

    public function store(Request $request)
    {
        $this->authorizeForUser($request->user('api'), 'update', Setting::class);

        request()->validate([
            'ar_name' => 'required',
        ]);

        \DB::transaction(function () use ($request) {
 

            $Government = new Government;

            $Government->en_name = $request['en_name'];
            $Government->ar_name = $request['ar_name'];
            $Government->code = $request['code'];
            $Government->save();

        }, 10);

        return response()->json(['success' => true]);

    }

     //------------ function show -----------\

     public function show($id){
        //
    
    }

     //---------------- UPDATE Government -------------\

     public function update(Request $request, $id)
     {
 
        $this->authorizeForUser($request->user('api'), 'update', Setting::class);
 
         request()->validate([
             'ar_name' => 'required',
         ]);
         \DB::transaction(function () use ($request, $id) {
             $Government = Government::findOrFail($id);
             $currentImage = $Government->image;
 
 
 
             Government::whereId($id)->update([
                 'ar_name' => $request['ar_name'],
                 'en_name' => $request['en_name'],
                 'code' => $request['code'],
             ]);
 
         }, 10);
 
         return response()->json(['success' => true]);
     }

    //------------ Delete Government -----------\

    public function destroy(Request $request, $id)
    {
        $this->authorizeForUser($request->user('api'), 'update', Setting::class);

        Government::whereId($id)->update([
            'deleted_at' => Carbon::now(),
        ]);
        return response()->json(['success' => true]);
    }

    //-------------- Delete by selection  ---------------\

    public function delete_by_selection(Request $request)
    {

        $this->authorizeForUser($request->user('api'), 'delete', Government::class);

        $selectedIds = $request->selectedIds;
        foreach ($selectedIds as $government_id) {
            Government::whereId($government_id)->update([
                'deleted_at' => Carbon::now(),
            ]);
        }
        return response()->json(['success' => true]);

    }

}

