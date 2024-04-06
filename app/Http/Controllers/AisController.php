<?php
namespace App\Http\Controllers;

use App\Models\Ai;
use App\utils\helpers;
use Carbon\Carbon;
use DB;
use Illuminate\Http\Request;
use Intervention\Image\ImageManagerStatic as Image;

class AisController extends Controller
{

    //------------ GET ALL Ais -----------\

    public function index(Request $request)
    {
        // $this->authorizeForUser($request->user('api'), 'view', Ai::class);
        // How many items do you want to display.
        $perPage = $request->limit;
        $pageStart = \Request::get('page', 1);
        // Start displaying items from this number;
        $offSet = ($pageStart * $perPage) - $perPage;
        $order = $request->SortField;
        $dir = $request->SortType;
        $helpers = new helpers();

        $ais = Ai::where('deleted_at', '=', null)->where(function ($query) use ($request) {
                return $query->when($request->filled('search'), function ($query) use ($request) {
                    return $query->where('ar_name', 'LIKE', "%{$request->search}%")
                        ->orWhere('en_name', 'LIKE', "%{$request->search}%");
                });
            });
        $totalRows = $ais->count();
        $ais = $ais->offset($offSet)
            ->limit($perPage)
            ->orderBy($order, $dir)
            ->get();

        return response()->json([
            'ais' => $ais,
            'totalRows' => $totalRows,
        ]);

    }

    //---------------- STORE NEW Ai -------------\

    public function store(Request $request)
    {
        // $this->authorizeForUser($request->user('api'), 'create', Ai::class);

        request()->validate([
            'ar_name' => 'required',
        ]);

        \DB::transaction(function () use ($request) {

            if ($request->hasFile('image')) {

                $image = $request->file('image');
                $filename = rand(11111111, 99999999) . $image->getClientOriginalName();

                $image_resize = Image::make($image->getRealPath());
                // $image_resize->resize(200, 200);
                $image_resize->save(public_path('/images/ais/' . $filename));

            } else {
                $filename = 'no-image.png';
            }

            $Ai = new Ai;

            $Ai->en_name = $request['en_name'];
            $Ai->ar_name = $request['ar_name'];
            $Ai->role = $request['role'];
            $Ai->image = $filename;
            $Ai->save();

        }, 10);

        return response()->json(['success' => true]);

    }

     //------------ function show -----------\

     public function show($id){
        //
    
    }

     //---------------- UPDATE Ai -------------\

     public function update(Request $request, $id)
     {
 
        //  $this->authorizeForUser($request->user('api'), 'update', Ai::class);
 
         request()->validate([
             'ar_name' => 'required',
         ]);
         \DB::transaction(function () use ($request, $id) {
             $Ai = Ai::findOrFail($id);
             $currentImage = $Ai->image;
 
             // dd($request->image);
             if ($currentImage && $request->image != $currentImage) {
                 $image = $request->file('image');
                 $path = public_path() . '/images/ais';
                 $filename = rand(11111111, 99999999) . $image->getClientOriginalName();
 
                 $image_resize = Image::make($image->getRealPath());
                //  $image_resize->resize(200, 200);
                 $image_resize->save(public_path('/images/ais/' . $filename));
 
                 $AiImage = $path . '/' . $currentImage;
                 if (file_exists($AiImage)) {
                     if ($currentImage != 'no-image.png') {
                         @unlink($AiImage);
                     }
                 }
             } else if (!$currentImage && $request->image !='null'){
                 $image = $request->file('image');
                 $path = public_path() . '/images/ais';
                 $filename = rand(11111111, 99999999) . $image->getClientOriginalName();
 
                 $image_resize = Image::make($image->getRealPath());
                //  $image_resize->resize(200, 200);
                 $image_resize->save(public_path('/images/ais/' . $filename));
             }
 
             else {
                 $filename = $currentImage?$currentImage:'no-image.png';
             }
 
             Ai::whereId($id)->update([
                 'ar_name' => $request['ar_name'],
                 'en_name' => $request['en_name'],
                 'role' => $request['role'],
                 'image' => $filename,
             ]);
 
         }, 10);
 
         return response()->json(['success' => true]);
     }

    //------------ Delete Ai -----------\

    public function destroy(Request $request, $id)
    {
        // $this->authorizeForUser($request->user('api'), 'delete', Ai::class);

        Ai::whereId($id)->update([
            'deleted_at' => Carbon::now(),
        ]);
        return response()->json(['success' => true]);
    }

    //-------------- Delete by selection  ---------------\

    public function delete_by_selection(Request $request)
    {

        // $this->authorizeForUser($request->user('api'), 'delete', Ai::class);

        $selectedIds = $request->selectedIds;
        foreach ($selectedIds as $ai_id) {
            Ai::whereId($ai_id)->update([
                'deleted_at' => Carbon::now(),
            ]);
        }
        return response()->json(['success' => true]);

    }

}

