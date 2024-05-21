<?php
namespace App\Http\Controllers;

use App\Models\Sreport;
use App\utils\helpers;
use Carbon\Carbon;
use DB;
use Illuminate\Http\Request;
use Intervention\Image\ImageManagerStatic as Image;

class SreportsController extends Controller
{

    //------------ GET ALL Sreports -----------\

    public function index(Request $request)
    {
        // $this->authorizeForUser($request->user('api'), 'view', Sreport::class);
        // How many items do you want to display.
        $perPage = $request->limit;
        $pageStart = \Request::get('page', 1);
        // Start displaying items from this number;
        $offSet = ($pageStart * $perPage) - $perPage;
        $order = $request->SortField;
        $dir = $request->SortType;
        $helpers = new helpers();

        $sreports = Sreport::where('deleted_at', '=', null)->where(function ($query) use ($request) {
                return $query->when($request->filled('search'), function ($query) use ($request) {
                    return $query->where('ar_name', 'LIKE', "%{$request->search}%")
                        ->orWhere('en_name', 'LIKE', "%{$request->search}%");
                });
            });
        $totalRows = $sreports->count();
        $sreports = $sreports->offset($offSet)
            ->limit($perPage)
            ->orderBy($order, $dir)
            ->get();

        return response()->json([
            'sreports' => $sreports,
            'totalRows' => $totalRows,
        ]);

    }

    //---------------- STORE NEW Sreport -------------\

    public function store(Request $request)
    {
        // $this->authorizeForUser($request->user('api'), 'create', Sreport::class);

        request()->validate([
            'ar_name' => 'required',
        ]);

        \DB::transaction(function () use ($request) {

            if ($request->hasFile('image')) {

                $image = $request->file('image');
                $filename = rand(11111111, 99999999) . $image->getClientOriginalName();

                $image_resize = Image::make($image->getRealPath());
                $image_resize->resize(200, 200);
                $image_resize->save(public_path('/images/sreports/' . $filename));

            } else {
                $filename = 'no-image.png';
            }

            $Sreport = new Sreport;

            $Sreport->en_name = $request['en_name'];
            $Sreport->ar_name = $request['ar_name'];
            $Sreport->image = $filename;
            $Sreport->save();

        }, 10);

        return response()->json(['success' => true]);

    }

     //------------ function show -----------\

     public function show($id){
        //
    
    }

     //---------------- UPDATE Sreport -------------\

     public function update(Request $request, $id)
     {
 
        //  $this->authorizeForUser($request->user('api'), 'update', Sreport::class);
 
         request()->validate([
             'ar_name' => 'required',
         ]);
         \DB::transaction(function () use ($request, $id) {
             $Sreport = Sreport::findOrFail($id);
             $currentImage = $Sreport->image;
 
             // dd($request->image);
             if ($currentImage && $request->image != $currentImage) {
                 $image = $request->file('image');
                 $path = public_path() . '/images/sreports';
                 $filename = rand(11111111, 99999999) . $image->getClientOriginalName();
 
                 $image_resize = Image::make($image->getRealPath());
                 $image_resize->resize(200, 200);
                 $image_resize->save(public_path('/images/sreports/' . $filename));
 
                 $SreportImage = $path . '/' . $currentImage;
                 if (file_exists($SreportImage)) {
                     if ($currentImage != 'no-image.png') {
                         @unlink($SreportImage);
                     }
                 }
             } else if (!$currentImage && $request->image !='null'){
                 $image = $request->file('image');
                 $path = public_path() . '/images/sreports';
                 $filename = rand(11111111, 99999999) . $image->getClientOriginalName();
 
                 $image_resize = Image::make($image->getRealPath());
                 $image_resize->resize(200, 200);
                 $image_resize->save(public_path('/images/sreports/' . $filename));
             }
 
             else {
                 $filename = $currentImage?$currentImage:'no-image.png';
             }
 
             Sreport::whereId($id)->update([
                 'ar_name' => $request['ar_name'],
                 'description' => $request['en_name'],
                 'image' => $filename,
             ]);
 
         }, 10);
 
         return response()->json(['success' => true]);
     }

    //------------ Delete Sreport -----------\

    public function destroy(Request $request, $id)
    {
        // $this->authorizeForUser($request->user('api'), 'delete', Sreport::class);

        Sreport::whereId($id)->update([
            'deleted_at' => Carbon::now(),
        ]);
        return response()->json(['success' => true]);
    }

    //-------------- Delete by selection  ---------------\

    public function delete_by_selection(Request $request)
    {

        // $this->authorizeForUser($request->user('api'), 'delete', Sreport::class);

        $selectedIds = $request->selectedIds;
        foreach ($selectedIds as $sreport_id) {
            Sreport::whereId($sreport_id)->update([
                'deleted_at' => Carbon::now(),
            ]);
        }
        return response()->json(['success' => true]);

    }

}

