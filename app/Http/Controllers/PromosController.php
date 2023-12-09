<?php
namespace App\Http\Controllers;

use App\Models\Promo;
use App\Models\Setting;
use App\utils\helpers;
use Carbon\Carbon;
use DB;
use Illuminate\Http\Request;
use Intervention\Image\ImageManagerStatic as Image;

class PromosController extends Controller
{

    //------------ GET ALL Promos -----------\

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

        $promos = Promo::where('deleted_at', '=', null)->where(function ($query) use ($request) {
                return $query->when($request->filled('search'), function ($query) use ($request) {
                    return $query->where('ar_name', 'LIKE', "%{$request->search}%")
                        ->orWhere('en_name', 'LIKE', "%{$request->search}%");
                });
            });
        $totalRows = $promos->count();
        $promos = $promos->offset($offSet)
            ->limit($perPage)
            ->orderBy($order, $dir)
            ->get();

        return response()->json([
            'promos' => $promos,
            'totalRows' => $totalRows,
        ]);

    }

    //---------------- STORE NEW Promo -------------\

    public function store(Request $request)
    {

        $this->authorizeForUser($request->user('api'), 'update', Setting::class);
      // $this->authorizeForUser($request->user('api'), 'create', Promo::class);

        request()->validate([
            'code' => 'required',
        ]);

        \DB::transaction(function () use ($request) {

   
            $Promo = new Promo;

            $Promo->code = $request['code'];
            $Promo->type = $request['type'];
            $Promo->value = $request['value'];
            $Promo->usage_limit = $request['usage_limit'];
            $Promo->expiry_date = $request['expiry_date'];
            $Promo->min_cart_value = $request['min_cart_value'];
            
            $Promo->save();

        }, 10);

        return response()->json(['success' => true]);

    }

     //------------ function show -----------\

     public function show($id){
        //
    
    }

     //---------------- UPDATE Promo -------------\

     public function update(Request $request, $id)
     {
        $this->authorizeForUser($request->user('api'), 'update', Setting::class);
        //  $this->authorizeForUser($request->user('api'), 'update', Promo::class);
 
         request()->validate([
             'code' => 'required',
         ]);
         \DB::transaction(function () use ($request, $id) {
 
       
             Promo::whereId($id)->update([
                 'code' => $request['code'],
                 'type' => $request['type'],
                 'value' => $request['value'],
                 'usage_limit' => $request['usage_limit'],
                 'min_cart_value' => $request['min_cart_value'],
                 'expiry_date' => $request['expiry_date'],
             ]);
 
         }, 10);
 
         return response()->json(['success' => true]);
     }

    //------------ Delete Promo -----------\

    public function destroy(Request $request, $id)
    {
        $this->authorizeForUser($request->user('api'), 'update', Setting::class);

        Promo::whereId($id)->update([
            'deleted_at' => Carbon::now(),
        ]);
        return response()->json(['success' => true]);
    }

    //-------------- Delete by selection  ---------------\

    public function delete_by_selection(Request $request)
    {

        $this->authorizeForUser($request->user('api'), 'update', Setting::class);

        $selectedIds = $request->selectedIds;
        foreach ($selectedIds as $promo_id) {
            Promo::whereId($promo_id)->update([
                'deleted_at' => Carbon::now(),
            ]);
        }
        return response()->json(['success' => true]);

    }

}

