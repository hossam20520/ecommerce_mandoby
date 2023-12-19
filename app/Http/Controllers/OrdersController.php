<?php
namespace App\Http\Controllers;

use App\Models\Order;
use App\Models\Sale;

use App\utils\helpers;
use Carbon\Carbon;
use DB;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Intervention\Image\ImageManagerStatic as Image;

class OrdersController extends Controller
{

    //------------ GET ALL Orders -----------\

    public function index(Request $request)
    {
        // $this->authorizeForUser($request->user('api'), 'view', Order::class);
        // How many items do you want to display.
        $perPage = $request->limit;
        $pageStart = \Request::get('page', 1);
        // Start displaying items from this number;
        $offSet = ($pageStart * $perPage) - $perPage;
        $order = $request->SortField;
        $dir = $request->SortType;
        $helpers = new helpers();

        $orders = Order::with('order')->where('deleted_at', '=', null)->where(function ($query) use ($request) {
                return $query->when($request->filled('search'), function ($query) use ($request) {
                    return $query->where('ar_name', 'LIKE', "%{$request->search}%")
                        ->orWhere('en_name', 'LIKE', "%{$request->search}%");
                });
            });
        $totalRows = $orders->count();
        $orders = $orders->offset($offSet)
            ->limit($perPage)
            ->orderBy($order, $dir)
            ->get();

      $data = array();
       foreach ($orders as $da) {
         $item['id'] = $da->id;
          $item['Ref'] = $da->order->Ref;
          $item['GrandTotal'] = $da->order->GrandTotal;
          $item['Ref'] = $da->order->Ref;
          $item['status'] = $da->status;
          $data[] = $item;
       }


         $sales = Sale::where('deleted_at', '=', null)->get();
        return response()->json([
            'orders' =>  $data ,
            'sales'=>  $sales ,
            'totalRows' => $totalRows,
        ]);

    }

    //---------------- STORE NEW Order -------------\

    public function store(Request $request)
    {
        // $this->authorizeForUser($request->user('api'), 'create', Order::class);

    

        \DB::transaction(function () use ($request) {

        
           

            $Order = new Order;

            $Order->user_id_action = Auth::user()->id;
            $Order->user_id = $request['user_id'];
            $Order->order_id = $request['order_id'];
            $Order->status = "pending";
 
            // $Order->image = $filename;
            $Order->save();

        }, 10);

        return response()->json(['success' => true]);

    }

     //------------ function show -----------\

     public function show($id){
        //
    
    }

     //---------------- UPDATE Order -------------\

     public function update(Request $request, $id)
     {
 
        //  $this->authorizeForUser($request->user('api'), 'update', Order::class);
 
         request()->validate([
             'ar_name' => 'required',
         ]);
         \DB::transaction(function () use ($request, $id) {
             $Order = Order::findOrFail($id);
             $currentImage = $Order->image;
 
             // dd($request->image);
             if ($currentImage && $request->image != $currentImage) {
                 $image = $request->file('image');
                 $path = public_path() . '/images/orders';
                 $filename = rand(11111111, 99999999) . $image->getClientOriginalName();
 
                 $image_resize = Image::make($image->getRealPath());
                 $image_resize->resize(200, 200);
                 $image_resize->save(public_path('/images/orders/' . $filename));
 
                 $OrderImage = $path . '/' . $currentImage;
                 if (file_exists($OrderImage)) {
                     if ($currentImage != 'no-image.png') {
                         @unlink($OrderImage);
                     }
                 }
             } else if (!$currentImage && $request->image !='null'){
                 $image = $request->file('image');
                 $path = public_path() . '/images/orders';
                 $filename = rand(11111111, 99999999) . $image->getClientOriginalName();
 
                 $image_resize = Image::make($image->getRealPath());
                 $image_resize->resize(200, 200);
                 $image_resize->save(public_path('/images/orders/' . $filename));
             }
 
             else {
                 $filename = $currentImage?$currentImage:'no-image.png';
             }
 
             Order::whereId($id)->update([
                 'ar_name' => $request['ar_name'],
                 'description' => $request['en_name'],
                 'image' => $filename,
             ]);
 
         }, 10);
 
         return response()->json(['success' => true]);
     }

    //------------ Delete Order -----------\

    public function destroy(Request $request, $id)
    {
        // $this->authorizeForUser($request->user('api'), 'delete', Order::class);

        Order::whereId($id)->update([
            'deleted_at' => Carbon::now(),
        ]);
        return response()->json(['success' => true]);
    }

    //-------------- Delete by selection  ---------------\

    public function delete_by_selection(Request $request)
    {

        // $this->authorizeForUser($request->user('api'), 'delete', Order::class);

        $selectedIds = $request->selectedIds;
        foreach ($selectedIds as $order_id) {
            Order::whereId($order_id)->update([
                'deleted_at' => Carbon::now(),
            ]);
        }
        return response()->json(['success' => true]);

    }

}

