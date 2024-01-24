<?php
namespace App\Http\Controllers;

use App\Models\Dummy;
use App\utils\helpers;
use Carbon\Carbon;
use DB;
use Illuminate\Http\Request;
use Intervention\Image\ImageManagerStatic as Image;

class DummysController extends Controller
{

    //------------ GET ALL Dummys -----------\

    public function index(Request $request)
    {
        $this->authorizeForUser($request->user('api'), 'view', Dummy::class);
        // How many items do you want to display.
        $perPage = $request->limit;
        $pageStart = \Request::get('page', 1);
        // Start displaying items from this number;
        $offSet = ($pageStart * $perPage) - $perPage;
        $order = $request->SortField;
        $dir = $request->SortType;
        $helpers = new helpers();

        $dummys = Dummy::where('deleted_at', '=', null)->where(function ($query) use ($request) {
                return $query->when($request->filled('search'), function ($query) use ($request) {
                    return $query->where('ar_name', 'LIKE', "%{$request->search}%")
                        ->orWhere('en_name', 'LIKE', "%{$request->search}%");
                });
            });
        $totalRows = $dummys->count();
        $dummys = $dummys->offset($offSet)
            ->limit($perPage)
            ->orderBy($order, $dir)
            ->get();

        return response()->json([
            'dummys' => $dummys,
            'totalRows' => $totalRows,
        ]);

    }

    //---------------- STORE NEW Dummy -------------\

    public function store(Request $request)
    {
        $this->authorizeForUser($request->user('api'), 'create', Dummy::class);

        request()->validate([
            'ar_name' => 'required',
        ]);

        \DB::transaction(function () use ($request) {

            if ($request->hasFile('image')) {

                $image = $request->file('image');
                $filename = rand(11111111, 99999999) . $image->getClientOriginalName();

                $image_resize = Image::make($image->getRealPath());
                $image_resize->resize(200, 200);
                $image_resize->save(public_path('/images/dummys/' . $filename));

            } else {
                $filename = 'no-image.png';
            }

            $Dummy = new Dummy;

            $Dummy->en_name = $request['en_name'];
            $Dummy->ar_name = $request['ar_name'];
            $Dummy->image = $filename;
            $Dummy->save();

        }, 10);

        return response()->json(['success' => true]);

    }

     //------------ function show -----------\

     public function show($id){
        //
    
    }

     //---------------- UPDATE Dummy -------------\

     public function update(Request $request, $id)
     {
 
         $this->authorizeForUser($request->user('api'), 'update', Dummy::class);
 
         request()->validate([
             'ar_name' => 'required',
         ]);
         \DB::transaction(function () use ($request, $id) {
             $Dummy = Dummy::findOrFail($id);
             $currentImage = $Dummy->image;
 
             // dd($request->image);
             if ($currentImage && $request->image != $currentImage) {
                 $image = $request->file('image');
                 $path = public_path() . '/images/dummys';
                 $filename = rand(11111111, 99999999) . $image->getClientOriginalName();
 
                 $image_resize = Image::make($image->getRealPath());
                 $image_resize->resize(200, 200);
                 $image_resize->save(public_path('/images/dummys/' . $filename));
 
                 $DummyImage = $path . '/' . $currentImage;
                 if (file_exists($DummyImage)) {
                     if ($currentImage != 'no-image.png') {
                         @unlink($DummyImage);
                     }
                 }
             } else if (!$currentImage && $request->image !='null'){
                 $image = $request->file('image');
                 $path = public_path() . '/images/dummys';
                 $filename = rand(11111111, 99999999) . $image->getClientOriginalName();
 
                 $image_resize = Image::make($image->getRealPath());
                 $image_resize->resize(200, 200);
                 $image_resize->save(public_path('/images/dummys/' . $filename));
             }
 
             else {
                 $filename = $currentImage?$currentImage:'no-image.png';
             }
 
             Dummy::whereId($id)->update([
                 'ar_name' => $request['ar_name'],
                 'description' => $request['en_name'],
                 'image' => $filename,
             ]);
 
         }, 10);
 
         return response()->json(['success' => true]);
     }

    //------------ Delete Dummy -----------\

    public function destroy(Request $request, $id)
    {
        $this->authorizeForUser($request->user('api'), 'delete', Dummy::class);

        Dummy::whereId($id)->update([
            'deleted_at' => Carbon::now(),
        ]);
        return response()->json(['success' => true]);
    }

    //-------------- Delete by selection  ---------------\

    public function delete_by_selection(Request $request)
    {

        $this->authorizeForUser($request->user('api'), 'delete', Dummy::class);

        $selectedIds = $request->selectedIds;
        foreach ($selectedIds as $dummy_id) {
            Dummy::whereId($dummy_id)->update([
                'deleted_at' => Carbon::now(),
            ]);
        }
        return response()->json(['success' => true]);

    }

}

