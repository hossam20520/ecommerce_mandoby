<?php
namespace App\Http\Controllers;

use App\Models\Discount;
use App\Models\Shop;
use App\utils\helpers;
use Carbon\Carbon;
use DB;
 
use Illuminate\Http\Request;
use Intervention\Image\ImageManagerStatic as Image;

class DiscountsController extends Controller
{

    //------------ GET ALL Discounts -----------\

    public function index(Request $request)
    {
        // $this->authorizeForUser($request->user('api'), 'view', Discount::class);
        // How many items do you want to display.
        $perPage = $request->limit;
        $pageStart = \Request::get('page', 1);
        // Start displaying items from this number;
        $offSet = ($pageStart * $perPage) - $perPage;
        $order = $request->SortField;
        $dir = $request->SortType;
        $helpers = new helpers();


        $shops = Shop::where('deleted_at', '=', null)->get(['id', 'ar_name' , 'en_name']);

        if( $helpers->IsMerchant()){

            $shop_id = $helpers->ShopID();


            $discounts = Discount::where('deleted_at', '=', null)->where('shop_id' , $shop_id  )->where(function ($query) use ($request) {
                return $query->when($request->filled('search'), function ($query) use ($request) {
                    return $query->where('code', 'LIKE', "%{$request->search}%");
                });
            });

        }else{
            $discounts = Discount::where('deleted_at', '=', null)->where(function ($query) use ($request) {
                return $query->when($request->filled('search'), function ($query) use ($request) {
                    return $query->where('code', 'LIKE', "%{$request->search}%");
                });
            });
        }




        $totalRows = $discounts->count();
        $discounts = $discounts->offset($offSet)
            ->limit($perPage)
            ->orderBy($order, $dir)
            ->get();

        return response()->json([
            'discounts' => $discounts,
            'shops' => $shops,
            'totalRows' => $totalRows,
        ]);

    }

    //---------------- STORE NEW Discount -------------\

    public function store(Request $request)
    {
        // $this->authorizeForUser($request->user('api'), 'create', Discount::class);

        request()->validate([
            'code' => 'required',
        ]);

        \DB::transaction(function () use ($request) {

            $helpers = new helpers();
            if( $helpers->IsMerchant()){

                $shop_id = $helpers->ShopID();

            }else{
                $shop_id = $request['shop_id'];
            }

            $Discount = new Discount;
            $Discount->code = $request['code'];
            $Discount->value = $request['value'];
            $Discount->type = $request['type'];
            $Discount->used = $request['used'];
            $Discount->shop_id =  $shop_id;
            $Discount->save();

        }, 10);

        return response()->json(['success' => true]);

    }

     //------------ function show -----------\

     public function show($id){
        //
    
    }

     //---------------- UPDATE Discount -------------\

     public function update(Request $request, $id)
     {
 
        //  $this->authorizeForUser($request->user('api'), 'update', Discount::class);
 
         request()->validate([
             'code' => 'required',
         ]);
         \DB::transaction(function () use ($request, $id) {
             $Discount = Discount::findOrFail($id);
             $Discount = new Discount;
             $Discount->code = $request['code'];
             $Discount->value = $request['value'];
             $Discount->type = $request['type'];
             $Discount->used = $request['used'];
             $Discount->save();



             $helpers = new helpers();
             if( $helpers->IsMerchant()){
 
                 $shop_id = $helpers->ShopID();
 
             }else{
                 $shop_id = $request['shop_id'];
             }

             

             Discount::whereId($id)->update([
                 'code' => $request['code'],
                 'value' => $request['value'],
                 'type' => $request['type'],
                 'used' => $request['used'],
                 'shop_id' =>  $shop_id
             ]);
 
         }, 10);
 
         return response()->json(['success' => true]);
     }

    //------------ Delete Discount -----------\

    public function destroy(Request $request, $id)
    {
        // $this->authorizeForUser($request->user('api'), 'delete', Discount::class);

        Discount::whereId($id)->update([
            'deleted_at' => Carbon::now(),
        ]);
        return response()->json(['success' => true]);
    }

    //-------------- Delete by selection  ---------------\

    public function delete_by_selection(Request $request)
    {

        $this->authorizeForUser($request->user('api'), 'delete', Discount::class);

        $selectedIds = $request->selectedIds;
        foreach ($selectedIds as $discount_id) {
            Discount::whereId($discount_id)->update([
                'deleted_at' => Carbon::now(),
            ]);
        }
        return response()->json(['success' => true]);

    }

}

