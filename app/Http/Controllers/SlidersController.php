<?php
namespace App\Http\Controllers;

use App\Models\Slider;
use App\utils\helpers;
use Carbon\Carbon;
use DB;
use Illuminate\Http\Request;
use Intervention\Image\ImageManagerStatic as Image;

class SlidersController extends Controller
{

    //------------ GET ALL Sliders -----------\

    public function index(Request $request)
    {
        // $this->authorizeForUser($request->user('api'), 'view', Slider::class);
        // How many items do you want to display.
        $perPage = $request->limit;
        $pageStart = \Request::get('page', 1);
        // Start displaying items from this number;
        $offSet = ($pageStart * $perPage) - $perPage;
        $order = $request->SortField;
        $dir = $request->SortType;
        $helpers = new helpers();

        $sliders = Slider::where('deleted_at', '=', null)->where(function ($query) use ($request) {
                return $query->when($request->filled('search'), function ($query) use ($request) {
                    return $query->where('device', 'LIKE', "%{$request->search}%")
                        ->orWhere('device', 'LIKE', "%{$request->search}%");
                });
            });
        $totalRows = $sliders->count();
        $sliders = $sliders->offset($offSet)
            ->limit($perPage)
            ->orderBy($order, $dir)
            ->get();

        return response()->json([
            'sliders' => $sliders,
            'totalRows' => $totalRows,
        ]);

    }

    //---------------- STORE NEW Slider -------------\

    public function store(Request $request)
    {
        // $this->authorizeForUser($request->user('api'), 'create', Slider::class);

        // request()->validate([
        //     'ar_name' => 'required',
        // ]);
      
        \DB::transaction(function () use ($request) {

            if ($request->hasFile('image')) {

                $image = $request->file('image');
                $filename = rand(11111111, 99999999) . $image->getClientOriginalName();

                // $image_resize = Image::make($image->getRealPath());
                $image->move(public_path('/images/category/'), $filename);
                // $image_resize->resize(200, 200);
                // $image_resize->save(public_path('/images/sliders/' . $filename));

            } else {
                $filename = 'no-image.png';
            }

            $Slider = new Slider;
            $device = $request->device;
            $Slider->device = $device;
            $Slider->image = $filename;
            $Slider->save();

        }, 10);

        return response()->json(['success' => true]);

    }

     //------------ function show -----------\

     public function show($id){
        //
    
    }

     //---------------- UPDATE Slider -------------\

     public function update(Request $request, $id)
     {
 
        //  $this->authorizeForUser($request->user('api'), 'update', Slider::class);
 
        //  request()->validate([
        //      'ar_name' => 'required',
        //  ]);
         \DB::transaction(function () use ($request, $id) {
             $Slider = Slider::findOrFail($id);
             $currentImage = $Slider->image;
           
 
             // dd($request->image);
             if ($currentImage && $request->image != $currentImage) {
                 $image = $request->file('image');
                 $path = public_path() . '/images/sliders';
                 $filename = rand(11111111, 99999999) . $image->getClientOriginalName();
 
                //  $image_resize = Image::make($image->getRealPath());
                //  $image_resize->resize(200, 200);
                //  $image_resize->save(public_path('/images/sliders/' . $filename));
                $image->move(public_path('/images/sliders/'), $filename);
 
                 $SliderImage = $path . '/' . $currentImage;
                 if (file_exists($SliderImage)) {
                     if ($currentImage != 'no-image.png') {
                         @unlink($SliderImage);
                     }
                 }
             } else if (!$currentImage && $request->image !='null'){
                 $image = $request->file('image');
                 $path = public_path() . '/images/sliders';
                 $filename = rand(11111111, 99999999) . $image->getClientOriginalName();
                 $image->move(public_path('/images/sliders/'), $filename);
                //  $image_resize = Image::make($image->getRealPath());
                //  $image_resize->resize(200, 200);
                //  $image_resize->save(public_path('/images/sliders/' . $filename));
             }
 
             else {
                 $filename = $currentImage?$currentImage:'no-image.png';
             }
             $device = $request->device;
             Slider::whereId($id)->update([
                 'device'=>$device,
                 'image' => $filename,
             ]);
 
         }, 10);
 
         return response()->json(['success' => true]);
     }

    //------------ Delete Slider -----------\

    public function destroy(Request $request, $id)
    {
        // $this->authorizeForUser($request->user('api'), 'delete', Slider::class);

        Slider::whereId($id)->update([
            'deleted_at' => Carbon::now(),
        ]);
        return response()->json(['success' => true]);
    }

    //-------------- Delete by selection  ---------------\

    public function delete_by_selection(Request $request)
    {

        // $this->authorizeForUser($request->user('api'), 'delete', Slider::class);

        $selectedIds = $request->selectedIds;
        foreach ($selectedIds as $slider_id) {
            Slider::whereId($slider_id)->update([
                'deleted_at' => Carbon::now(),
            ]);
        }
        return response()->json(['success' => true]);

    }

}

