<?php
namespace App\Http\Controllers;

use App\Models\Map;
use App\utils\helpers;
use Carbon\Carbon;
use DB;
use Illuminate\Http\Request;
use App\Models\User;
use Intervention\Image\ImageManagerStatic as Image;
use Illuminate\Support\Facades\Http;


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
        $mandobs = User::where('deleted_at', '=', null)->where('role_id' , 3)->get(['id', 'email']);
        // restaurant
        // cafe
        // food
        // bar
        // diner
        // pub

        $apiKey = 'AIzaSyDH03s8Su2fbRDr3M03PWY7-TTtGB6xCpc';
       // Replace with the desired location (latitude,longitude)
        $lat = $request->lat;
        $lng = $request->lng;
        $location = $lat.','.$lng; 
        $radius = $request->radius;
        $keyword = $request->keyword;
    
         
        $restaurants = $this->getRestaurants($apiKey, $location , $radius , $keyword);
    

        $locat = array();
        $itemMap = array();
        foreach ($restaurants as $i => $restaurant) {
            $name = $restaurant['name'];
            $lat = $restaurant['geometry']['location']['lat'];
            $lng = $restaurant['geometry']['location']['lng'];
            $vicinity = $restaurant['vicinity'] ?? 'Address not available';
            // echo "{$i}. {$name}, {$vicinity}\n";

            // restaurant['geometry']['location']['lat']
            $item = [
               "name" =>  $name,
               "lat" =>  $lat,
               "lng" => $lng
            ];


            $item_map = [
                "position" =>  [
                    "lat"=>  $lat,
                    "lng"=> $lng
                ],
                "showIcon"=>true,
                "draggable"=> false,
                "clickable"=> false,

                 
             ];

             
             array_push(  $itemMap , $item_map );
            array_push(  $locat , $item );
        }
        

  
        
     
        return response()->json([
            'maps' => $locat,
            'map_items' => $itemMap,
            'mandobs' => $mandobs  ,
            'totalRows' => sizeof($locat),
        ]);


      }


    function getRestaurants($apiKey, $location, $radius = 1000, $keyword = 'restaurant') {
        $baseURL = "https://maps.googleapis.com/maps/api/place/nearbysearch/json";
        
        $params = [
            'key' => $apiKey,
            'location' => $location,
            'radius' => $radius,
            'keyword' => $keyword,
        ];
    



        while (true) {
            $response = Http::get($baseURL, $params);
    
            if ($response->status() !== 200) {
                // Handle error or break if the API does not return a 200 response
                echo "Error fetching data from Google Places API\n";
                break;
            }
    
            $json_response = $response->json();
            $all_results = array_merge($all_results, $json_response['results']);
    
            // Check if there's a next page token; if so, prepare for the next request
            $next_page_token = $json_response['next_page_token'];
            if (!$next_page_token) {
                break; // Exit the loop if there's no next page token
            }
    
            $params['pagetoken'] = $next_page_token;
    
            // Google requires a short delay before making a request for the next page
            sleep(2);
        }
    
        return $all_results;



        // $client = new \GuzzleHttp\Client();
        // $response = $client->get($baseURL, ['query' => $params]);
        // $results = json_decode($response->getBody(), true)['results'] ?? [];
    
        // return $results;
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

