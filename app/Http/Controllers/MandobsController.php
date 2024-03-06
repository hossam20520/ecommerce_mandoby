<?php
namespace App\Http\Controllers;

use App\Models\Mandob;
use App\Models\Sale;
use App\Models\User;
use App\Models\Order;
use App\utils\helpers;
use Carbon\Carbon;
use DB;
use Illuminate\Http\Request;
use Intervention\Image\ImageManagerStatic as Image;

class MandobsController extends Controller
{

    //------------ GET ALL Mandobs -----------\

    public function index(Request $request)
    {
        // $this->authorizeForUser($request->user('api'), 'view', Mandob::class);
        // How many items do you want to display.
        $perPage = $request->limit;
        $pageStart = \Request::get('page', 1);
        // Start displaying items from this number;
        $offSet = ($pageStart * $perPage) - $perPage;
        $order = $request->SortField;
        $dir = $request->SortType;
        $helpers = new helpers();

        // $mandobs = User::with('roles')->where('deleted_at', '=', null)->where(function ($query) use ($request) {
        //         return $query->when($request->filled('search'), function ($query) use ($request) {
        //             return $query->where('email', 'LIKE', "%{$request->search}%")
        //                 ->orWhere('phone', 'LIKE', "%{$request->search}%");
        //         });
        //     });


        $mandobs = User::with('role')
        ->where('deleted_at', '=', null)
        ->whereHas('role', function ($query) {
            $query->where('name', 'Mandob');
        })->where(function ($query) use ($request) {
            return $query->when($request->filled('search'), function ($query) use ($request) {
                return $query->where('email', 'LIKE', "%{$request->search}%")
                    ->orWhere('phone', 'LIKE', "%{$request->search}%");
            });
        });
   
  
     

        $totalRows = $mandobs->count();
        $mandobs = $mandobs->offset($offSet)
            ->limit($perPage)
            ->orderBy($order, $dir)
            ->get();


            $dataa = array();
            foreach ($mandobs as   $da) {
                 $item['id'] = $da->id;
                 $item['firstname'] = $da->firstname;
                 $item['lastname'] = $da->lastname;
                 $item['email'] = $da->email;
                 $item['phone'] = $da->phone;
                 $item['total_orders'] = $this->TotalOrders($da->id);
                 $item['completed_orders'] =  $this->TotalCompletedOrders($da->id);
                 $dataa[] = $item;
            }
            // where('statut')
        //  $Sale = Sale::where('deleted_at', '=', null)->get();
        return response()->json([
            'mandobs' =>  $dataa,
            // 'orders'=> $Sale,
            'totalRows' => $totalRows,
        ]);

    }


    public function TotalOrders($user_id){
          

        $total_orders = Order::where('deleted_at' , '=' , null)->where('user_id' , $user_id)->count();
        return  $total_orders;

    }


    
    public function TotalCompletedOrders($user_id){
          

        $total_orders = Order::where('deleted_at' , '=' , null)->where('user_id' , $user_id)->where('status' , 'completed' )->count();
        return  $total_orders;

    }


    //---------------- STORE NEW Mandob -------------\

    public function store(Request $request)
    {
        // $this->authorizeForUser($request->user('api'), 'create', Mandob::class);

        request()->validate([
            'ar_name' => 'required',
        ]);

        \DB::transaction(function () use ($request) {

            if ($request->hasFile('image')) {

                $image = $request->file('image');
                $filename = rand(11111111, 99999999) . $image->getClientOriginalName();

                $image_resize = Image::make($image->getRealPath());
                $image_resize->resize(200, 200);
                $image_resize->save(public_path('/images/mandobs/' . $filename));

            } else {
                $filename = 'no-image.png';
            }

            $Mandob = new Mandob;

            $Mandob->en_name = $request['en_name'];
            $Mandob->ar_name = $request['ar_name'];
            $Mandob->image = $filename;
            $Mandob->save();

        }, 10);

        return response()->json(['success' => true]);

    }

     //------------ function show -----------\

     public function show($id){
        //
    
    }

     //---------------- UPDATE Mandob -------------\

     public function update(Request $request, $id)
     {
 
        //  $this->authorizeForUser($request->user('api'), 'update', Mandob::class);
 
         request()->validate([
             'ar_name' => 'required',
         ]);
         \DB::transaction(function () use ($request, $id) {
             $Mandob = Mandob::findOrFail($id);
             $currentImage = $Mandob->image;
 
             // dd($request->image);
             if ($currentImage && $request->image != $currentImage) {
                 $image = $request->file('image');
                 $path = public_path() . '/images/mandobs';
                 $filename = rand(11111111, 99999999) . $image->getClientOriginalName();
 
                 $image_resize = Image::make($image->getRealPath());
                 $image_resize->resize(200, 200);
                 $image_resize->save(public_path('/images/mandobs/' . $filename));
 
                 $MandobImage = $path . '/' . $currentImage;
                 if (file_exists($MandobImage)) {
                     if ($currentImage != 'no-image.png') {
                         @unlink($MandobImage);
                     }
                 }
             } else if (!$currentImage && $request->image !='null'){
                 $image = $request->file('image');
                 $path = public_path() . '/images/mandobs';
                 $filename = rand(11111111, 99999999) . $image->getClientOriginalName();
 
                 $image_resize = Image::make($image->getRealPath());
                 $image_resize->resize(200, 200);
                 $image_resize->save(public_path('/images/mandobs/' . $filename));
             }
 
             else {
                 $filename = $currentImage?$currentImage:'no-image.png';
             }
 
             Mandob::whereId($id)->update([
                 'ar_name' => $request['ar_name'],
                 'description' => $request['en_name'],
                 'image' => $filename,
             ]);
 
         }, 10);
 
         return response()->json(['success' => true]);
     }

    //------------ Delete Mandob -----------\

    public function destroy(Request $request, $id)
    {
        // $this->authorizeForUser($request->user('api'), 'delete', Mandob::class);

        Mandob::whereId($id)->update([
            'deleted_at' => Carbon::now(),
        ]);
        return response()->json(['success' => true]);
    }

    //-------------- Delete by selection  ---------------\

    public function delete_by_selection(Request $request)
    {

        // $this->authorizeForUser($request->user('api'), 'delete', Mandob::class);

        $selectedIds = $request->selectedIds;
        foreach ($selectedIds as $mandob_id) {
            Mandob::whereId($mandob_id)->update([
                'deleted_at' => Carbon::now(),
            ]);
        }
        return response()->json(['success' => true]);

    }

}

