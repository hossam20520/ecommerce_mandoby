<?php
namespace App\Http\Controllers;

use App\Models\Achivment;
use App\utils\helpers;
use Carbon\Carbon;
use DB;
use Illuminate\Http\Request;
use Intervention\Image\ImageManagerStatic as Image;

class AchivmentsController extends Controller
{

    //------------ GET ALL Achivments -----------\

    public function index(Request $request)
    {
        // $this->authorizeForUser($request->user('api'), 'view', Achivment::class);
        // How many items do you want to display.
        $perPage = $request->limit;
        $pageStart = \Request::get('page', 1);
        // Start displaying items from this number;
        $offSet = ($pageStart * $perPage) - $perPage;
        $order = $request->SortField;
        $dir = $request->SortType;
        $helpers = new helpers();

        $achivments = Achivment::where('deleted_at', '=', null)->where(function ($query) use ($request) {
                return $query->when($request->filled('search'), function ($query) use ($request) {
                    return $query->where('ar_name', 'LIKE', "%{$request->search}%")
                        ->orWhere('en_name', 'LIKE', "%{$request->search}%");
                });
            });
        $totalRows = $achivments->count();
        $achivments = $achivments->offset($offSet)
            ->limit($perPage)
            ->orderBy($order, $dir)
            ->get();

        return response()->json([
            'achivments' => $achivments,
            'totalRows' => $totalRows,
        ]);

    }

    //---------------- STORE NEW Achivment -------------\

    public function store(Request $request)
    {
        // $this->authorizeForUser($request->user('api'), 'create', Achivment::class);

        request()->validate([
            'ar_name' => 'required',
        ]);

        \DB::transaction(function () use ($request) {

            if ($request->hasFile('image')) {

                $image = $request->file('image');
                $filename = rand(11111111, 99999999) . $image->getClientOriginalName();

                $image_resize = Image::make($image->getRealPath());
                $image_resize->resize(200, 200);
                $image_resize->save(public_path('/images/achivments/' . $filename));

            } else {
                $filename = 'no-image.png';
            }

            $Achivment = new Achivment;

            $Achivment->en_name = $request['en_name'];
            $Achivment->ar_name = $request['ar_name'];
            $Achivment->image = $filename;
            $Achivment->save();

        }, 10);

        return response()->json(['success' => true]);

    }

     //------------ function show -----------\

     public function show($id){
        //
    
    }

     //---------------- UPDATE Achivment -------------\

     public function update(Request $request, $id)
     {
 
         $this->authorizeForUser($request->user('api'), 'update', Achivment::class);
 
         request()->validate([
             'ar_name' => 'required',
         ]);
         \DB::transaction(function () use ($request, $id) {
             $Achivment = Achivment::findOrFail($id);
             $currentImage = $Achivment->image;
 
             // dd($request->image);
             if ($currentImage && $request->image != $currentImage) {
                 $image = $request->file('image');
                 $path = public_path() . '/images/achivments';
                 $filename = rand(11111111, 99999999) . $image->getClientOriginalName();
 
                 $image_resize = Image::make($image->getRealPath());
                 $image_resize->resize(200, 200);
                 $image_resize->save(public_path('/images/achivments/' . $filename));
 
                 $AchivmentImage = $path . '/' . $currentImage;
                 if (file_exists($AchivmentImage)) {
                     if ($currentImage != 'no-image.png') {
                         @unlink($AchivmentImage);
                     }
                 }
             } else if (!$currentImage && $request->image !='null'){
                 $image = $request->file('image');
                 $path = public_path() . '/images/achivments';
                 $filename = rand(11111111, 99999999) . $image->getClientOriginalName();
 
                 $image_resize = Image::make($image->getRealPath());
                 $image_resize->resize(200, 200);
                 $image_resize->save(public_path('/images/achivments/' . $filename));
             }
 
             else {
                 $filename = $currentImage?$currentImage:'no-image.png';
             }
 
             Achivment::whereId($id)->update([
                 'ar_name' => $request['ar_name'],
                 'description' => $request['en_name'],
                 'image' => $filename,
             ]);
 
         }, 10);
 
         return response()->json(['success' => true]);
     }

    //------------ Delete Achivment -----------\

    public function destroy(Request $request, $id)
    {
        $this->authorizeForUser($request->user('api'), 'delete', Achivment::class);

        Achivment::whereId($id)->update([
            'deleted_at' => Carbon::now(),
        ]);
        return response()->json(['success' => true]);
    }

    //-------------- Delete by selection  ---------------\

    public function delete_by_selection(Request $request)
    {

        $this->authorizeForUser($request->user('api'), 'delete', Achivment::class);

        $selectedIds = $request->selectedIds;
        foreach ($selectedIds as $achivment_id) {
            Achivment::whereId($achivment_id)->update([
                'deleted_at' => Carbon::now(),
            ]);
        }
        return response()->json(['success' => true]);

    }

}

