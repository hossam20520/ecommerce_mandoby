<?php
namespace App\Http\Controllers;

use App\Models\Map;
use App\utils\helpers;
use Carbon\Carbon;
use DB;
use Illuminate\Http\Request;
use Intervention\Image\ImageManagerStatic as Image;

class MapsController extends Controller
{

    //------------ GET ALL Maps -----------\

    public function index(Request $request)
    {
        // $this->authorizeForUser($request->user('api'), 'view', Map::class);
        // How many items do you want to display.
        $perPage = $request->limit;
        $pageStart = \Request::get('page', 1);
        // Start displaying items from this number;
        $offSet = ($pageStart * $perPage) - $perPage;
        $order = $request->SortField;
        $dir = $request->SortType;
        $helpers = new helpers();

        $maps = Map::where('deleted_at', '=', null)->where(function ($query) use ($request) {
                return $query->when($request->filled('search'), function ($query) use ($request) {
                    return $query->where('ar_name', 'LIKE', "%{$request->search}%")
                        ->orWhere('en_name', 'LIKE', "%{$request->search}%");
                });
            });
        $totalRows = $maps->count();
        $maps = $maps->offset($offSet)
            ->limit($perPage)
            ->orderBy($order, $dir)
            ->get();

        return response()->json([
            'maps' => $maps,
            'totalRows' => $totalRows,
        ]);

    }

    //---------------- STORE NEW Map -------------\

      function GetData(Request $request){
      


        $apiKey = 'AIzaSyDH03s8Su2fbRDr3M03PWY7-TTtGB6xCpc';
        $location = '37.7749,-122.4194'; // Replace with the desired location (latitude,longitude)
    
        $restaurants = getRestaurants($apiKey, $location);
    

        $locat = array();
        foreach ($restaurants as $i => $restaurant) {
            $name = $restaurant['name'];
            $vicinity = $restaurant['vicinity'] ?? 'Address not available';
            // echo "{$i}. {$name}, {$vicinity}\n";
            array_push(  $locat , $name);
        }
        return response()->json(['success' => $locat]);

      }


    function getRestaurants($apiKey, $location, $radius = 1000, $keyword = 'restaurant') {
        $baseURL = "https://maps.googleapis.com/maps/api/place/nearbysearch/json";
        
        $params = [
            'key' => $apiKey,
            'location' => $location,
            'radius' => $radius,
            'keyword' => $keyword,
        ];
    
        $client = new \GuzzleHttp\Client();
        $response = $client->get($baseURL, ['query' => $params]);
        $results = json_decode($response->getBody(), true)['results'] ?? [];
    
        return $results;
    }



    public function store(Request $request)
    {
        // $this->authorizeForUser($request->user('api'), 'create', Map::class);

        request()->validate([
            'ar_name' => 'required',
        ]);

        \DB::transaction(function () use ($request) {

            if ($request->hasFile('image')) {

                $image = $request->file('image');
                $filename = rand(11111111, 99999999) . $image->getClientOriginalName();

                $image_resize = Image::make($image->getRealPath());
                $image_resize->resize(200, 200);
                $image_resize->save(public_path('/images/maps/' . $filename));

            } else {
                $filename = 'no-image.png';
            }

            $Map = new Map;

            $Map->en_name = $request['en_name'];
            $Map->ar_name = $request['ar_name'];
            $Map->image = $filename;
            $Map->save();

        }, 10);

        return response()->json(['success' => true]);

    }

     //------------ function show -----------\

     public function show($id){
        //
    
    }

     //---------------- UPDATE Map -------------\

     public function update(Request $request, $id)
     {
 
        //  $this->authorizeForUser($request->user('api'), 'update', Map::class);
 
         request()->validate([
             'ar_name' => 'required',
         ]);
         \DB::transaction(function () use ($request, $id) {
             $Map = Map::findOrFail($id);
             $currentImage = $Map->image;
 
             // dd($request->image);
             if ($currentImage && $request->image != $currentImage) {
                 $image = $request->file('image');
                 $path = public_path() . '/images/maps';
                 $filename = rand(11111111, 99999999) . $image->getClientOriginalName();
 
                 $image_resize = Image::make($image->getRealPath());
                 $image_resize->resize(200, 200);
                 $image_resize->save(public_path('/images/maps/' . $filename));
 
                 $MapImage = $path . '/' . $currentImage;
                 if (file_exists($MapImage)) {
                     if ($currentImage != 'no-image.png') {
                         @unlink($MapImage);
                     }
                 }
             } else if (!$currentImage && $request->image !='null'){
                 $image = $request->file('image');
                 $path = public_path() . '/images/maps';
                 $filename = rand(11111111, 99999999) . $image->getClientOriginalName();
 
                 $image_resize = Image::make($image->getRealPath());
                 $image_resize->resize(200, 200);
                 $image_resize->save(public_path('/images/maps/' . $filename));
             }
 
             else {
                 $filename = $currentImage?$currentImage:'no-image.png';
             }
 
             Map::whereId($id)->update([
                 'ar_name' => $request['ar_name'],
                 'description' => $request['en_name'],
                 'image' => $filename,
             ]);
 
         }, 10);
 
         return response()->json(['success' => true]);
     }

    //------------ Delete Map -----------\

    public function destroy(Request $request, $id)
    {
        // $this->authorizeForUser($request->user('api'), 'delete', Map::class);

        Map::whereId($id)->update([
            'deleted_at' => Carbon::now(),
        ]);
        return response()->json(['success' => true]);
    }

    //-------------- Delete by selection  ---------------\

    public function delete_by_selection(Request $request)
    {

        $this->authorizeForUser($request->user('api'), 'delete', Map::class);

        $selectedIds = $request->selectedIds;
        foreach ($selectedIds as $map_id) {
            Map::whereId($map_id)->update([
                'deleted_at' => Carbon::now(),
            ]);
        }
        return response()->json(['success' => true]);

    }

}

