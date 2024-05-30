<?php
namespace App\Http\Controllers;

use App\Models\Reportsale;
use App\Models\User;
use App\utils\helpers;
use Carbon\Carbon;
use DB;
use Illuminate\Http\Request;
use Intervention\Image\ImageManagerStatic as Image;

class ReportsalesController extends Controller
{

    //------------ GET ALL Reportsales -----------\

    public function index(Request $request)
    {
        // $this->authorizeForUser($request->user('api'), 'view', Reportsale::class);
        // How many items do you want to display.
        $perPage = $request->limit;
        $pageStart = \Request::get('page', 1);
        // Start displaying items from this number;
        $offSet = ($pageStart * $perPage) - $perPage;
        $order = $request->SortField;
        $dir = $request->SortType;
        $helpers = new helpers();

        $Reportsales = User::withCount('sales')->where('deleted_at', '=', null)->where(function ($query) use ($request) {
                return $query->when($request->filled('search'), function ($query) use ($request) {
                    return $query->where('ar_name', 'LIKE', "%{$request->search}%")
                        ->orWhere('en_name', 'LIKE', "%{$request->search}%");
                });
            });



        $totalRows = $Reportsales->count();
        $Reportsales = $Reportsales->offset($offSet)
            ->limit($perPage)
            ->orderBy($order, $dir)
            ->get();

        return response()->json([
            'Reportsales' => $Reportsales,
            'totalRows' => $totalRows,
        ]);

    }

    //---------------- STORE NEW Reportsale -------------\

    public function store(Request $request)
    {
        // $this->authorizeForUser($request->user('api'), 'create', Reportsale::class);

        request()->validate([
            'ar_name' => 'required',
        ]);

        \DB::transaction(function () use ($request) {

            if ($request->hasFile('image')) {

                $image = $request->file('image');
                $filename = rand(11111111, 99999999) . $image->getClientOriginalName();

                $image_resize = Image::make($image->getRealPath());
                $image_resize->resize(200, 200);
                $image_resize->save(public_path('/images/Reportsales/' . $filename));

            } else {
                $filename = 'no-image.png';
            }

            $Reportsale = new Reportsale;

            $Reportsale->en_name = $request['en_name'];
            $Reportsale->ar_name = $request['ar_name'];
            $Reportsale->image = $filename;
            $Reportsale->save();

        }, 10);

        return response()->json(['success' => true]);

    }

     //------------ function show -----------\

     public function show($id){
        //
    
    }

     //---------------- UPDATE Reportsale -------------\

     public function update(Request $request, $id)
     {
 
        //  $this->authorizeForUser($request->user('api'), 'update', Reportsale::class);
 
         request()->validate([
             'ar_name' => 'required',
         ]);
         \DB::transaction(function () use ($request, $id) {
             $Reportsale = Reportsale::findOrFail($id);
             $currentImage = $Reportsale->image;
 
             // dd($request->image);
             if ($currentImage && $request->image != $currentImage) {
                 $image = $request->file('image');
                 $path = public_path() . '/images/Reportsales';
                 $filename = rand(11111111, 99999999) . $image->getClientOriginalName();
 
                 $image_resize = Image::make($image->getRealPath());
                 $image_resize->resize(200, 200);
                 $image_resize->save(public_path('/images/Reportsales/' . $filename));
 
                 $ReportsaleImage = $path . '/' . $currentImage;
                 if (file_exists($ReportsaleImage)) {
                     if ($currentImage != 'no-image.png') {
                         @unlink($ReportsaleImage);
                     }
                 }
             } else if (!$currentImage && $request->image !='null'){
                 $image = $request->file('image');
                 $path = public_path() . '/images/Reportsales';
                 $filename = rand(11111111, 99999999) . $image->getClientOriginalName();
 
                 $image_resize = Image::make($image->getRealPath());
                 $image_resize->resize(200, 200);
                 $image_resize->save(public_path('/images/Reportsales/' . $filename));
             }
 
             else {
                 $filename = $currentImage?$currentImage:'no-image.png';
             }
 
             Reportsale::whereId($id)->update([
                 'ar_name' => $request['ar_name'],
                 'description' => $request['en_name'],
                 'image' => $filename,
             ]);
 
         }, 10);
 
         return response()->json(['success' => true]);
     }

    //------------ Delete Reportsale -----------\

    public function destroy(Request $request, $id)
    {
        // $this->authorizeForUser($request->user('api'), 'delete', Reportsale::class);

        Reportsale::whereId($id)->update([
            'deleted_at' => Carbon::now(),
        ]);
        return response()->json(['success' => true]);
    }

    //-------------- Delete by selection  ---------------\

    public function delete_by_selection(Request $request)
    {

        // $this->authorizeForUser($request->user('api'), 'delete', Reportsale::class);

        $selectedIds = $request->selectedIds;
        foreach ($selectedIds as $reportsale_id) {
            Reportsale::whereId($reportsale_id)->update([
                'deleted_at' => Carbon::now(),
            ]);
        }
        return response()->json(['success' => true]);

    }

}

