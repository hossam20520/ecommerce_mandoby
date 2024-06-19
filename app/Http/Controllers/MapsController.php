<?php
namespace App\Http\Controllers;

use App\Models\Map;
use App\utils\helpers;
use Carbon\Carbon;
use DB;
use Illuminate\Http\Request;
use App\Models\User;
use App\Models\Task;

use Intervention\Image\ImageManagerStatic as Image;
use Illuminate\Support\Facades\Http;


class MapsController extends Controller
{


    public function getData_section(Request $request){

 
        $section = $request->section_name;
        $Shiakha_Name  =  Map::whereNull('deleted_at')->where('Section' , $section)->whereNotNull('Shiakha_Name')->pluck('Shiakha_Name')->unique()->values()->toArray();
  
        return response()->json([
            'Shiakha_Name' => $Shiakha_Name,
         
        ]);
    }

    


    public function getData_section_type(Request $request){

 
        $section = $request->section; 
        $Shiakha_Name = $request->Filter_Shiakha_Name;
        $Outlet_Type  =  Map::whereNull('deleted_at')->where('Shiakha_Name' , $Shiakha_Name)->where('Section' ,   $section )->whereNotNull('Outlet_Type')->pluck('Outlet_Type')->unique()->values()->toArray();
  
        return response()->json([
            'Outlet_Type' => $Outlet_Type,
         
        ]);
    }


    
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



        // Filter_Shiakha_Name: "",
        // Filter_Zone_Name:"",
        // Filter_street:"",
        // Filter_Sections: "",
        $columns = array(0 => 'Shiakha_Name', 1 => 'Outlet_Type', 2 => 'Section' , 3 => 'assigned_s'   ,  4 => 'assigned' );
        $param = array(0 => '=', 1 => '=', 2 => '=' , 3 => '=' , 4 => '=' );
        $data = array();

        $daat = Map::where('deleted_at', '=', null);

        $maps = $helpers->filter($daat, $columns, $param, $request)->where('deleted_at', '=', null)->where(function ($query) use ($request) {
                return $query->when($request->filled('search'), function ($query) use ($request) {
                    return $query->where('Shiakha_Name', 'LIKE', "%{$request->search}%")
                        ->orWhere('Zone_Name', 'LIKE', "%{$request->search}%")
                        ->orWhere('Street', 'LIKE', "%{$request->search}%") 
                        ->orWhere('assigned_s', 'LIKE', "%{$request->search}%") 
                        ->orWhere('assigned', 'LIKE', "%{$request->search}%") 
                        ->orWhere('Section', 'LIKE', "%{$request->search}%");
                });
            });
        $totalRows = $maps->count();
        $maps = $maps->offset($offSet)
            ->limit($perPage)
            ->orderBy($order, $dir)
            ->get();

    //    $mapsv = Map::where('deleted_at', '=', null)->where('Sections', '!=', null)->unique('Sections')->pluck('Sections');
       
       $mapsva  =  Map::whereNull('deleted_at')->whereNotNull('Section')->pluck('Section')->unique()->values()->toArray();
         
       $Shiakha_Name  =  Map::whereNull('deleted_at')->whereNotNull('Shiakha_Name')->pluck('Shiakha_Name')->unique()->values()->toArray();
                  
       $Zone_Name  =  Map::whereNull('deleted_at')->whereNotNull('Zone_Name')->pluck('Zone_Name')->unique()->values()->toArray();
       $Street  =  Map::whereNull('deleted_at')->whereNotNull('Street')->pluck('Street')->unique()->values()->toArray();
         
       
       $mandobs = User::where('deleted_at', '=', null)->where('role_id' , 4)->get(['id', 'email']);

 
       $itemMap = array();
       foreach ($maps as $i => $da) {

           $lat = $da['Point_X_Geo'];
           $lng = $da['Point_Y_Geo'];
             
           $item_map = [
               "position" =>  [
                   "lat"=>  floatval($lng) ,
                   "lng"=>  floatval($lat)
               ],
               "showIcon"=>true,
               "draggable"=> false,
               "clickable"=> false, 
            ];
 
            array_push(  $itemMap , $item_map );
       
       }


       return response()->json([
            'maps' => $maps,
            'Sections' => $mapsva,
            'Shiakha_Name'=> $Shiakha_Name,
            'Zone_Name' => $Zone_Name,
            'itemMap' => $itemMap,
            'Street'=> $Street,
            'mandobs' => $mandobs  ,
            'totalRows' => $totalRows,
        ]);

    }

    // function getfilterData(Request $request){ 
    //       $data = $request->fill;


    // }


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
    
         
        $restaurants = $this->getRestaurantsTest($apiKey, $location ,  $radius , $keyword);
    

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
    

 

        $client = new \GuzzleHttp\Client();
        $response = $client->get($baseURL, ['query' => $params]);
        $results = json_decode($response->getBody(), true)['results'] ?? [];
    
        return $results;
    }

  function getRestaurantTestAPI(Request $request){

    $apiKey = 'AIzaSyDH03s8Su2fbRDr3M03PWY7-TTtGB6xCpc';
    // Replace with the desired location (latitude,longitude)
     $lat = $request->lat;
     $lng = $request->lng;
     $location = $lat.','.$lng; 
     $radius = $request->radius;
     $keyword = $request->keyword;
 
      
     $restaurants = $this->getRestaurantsTest($apiKey, $location , $radius , $keyword);

    
     return response()->json([
        'maps' => $restaurants,
 
    ]);
  



}

    function getRestaurantsTest($apiKey, $location, $radius  , $keyword = 'restaurant') {
        $baseURL = "https://maps.googleapis.com/maps/api/place/nearbysearch/json";
        
        $params = [
            'key' => $apiKey,
            'location' => $location,
            'radius' => $radius,
            'keyword' => $keyword,
        ];
    


        $all_results = [];
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
            // $next_page_token = $json_response['next_page_token'];
            // if (!$next_page_token) {
            //     break; // Exit the loop if there's no next page token
            // }

            if (isset($json_response['next_page_token'])) {
                $next_page_token = $json_response['next_page_token'];
                $params['pagetoken'] = $next_page_token;
    
                // Google requires a short delay before making a request for the next page
                sleep(2);
            } else {
                break; // Exit the loop if there's no next page token
            }

    
            // $params['pagetoken'] = $next_page_token;
    
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

    // save_by_selection








    public function save_by_selection(Request $request)
    {

   
        $user_id = $request->user_id;
        $from = $request->from;
        $to = $request->to;
        $selectedIds = $request->selectedIds;
        foreach ($selectedIds as $map_id) {
            Map::where('id', $map_id)->update([
                'assigned_s'=> 'yes'
            ]);

            $tas = Task::where('deleted_at' , '=' , null)->where('user_id' ,$user_id)->where('location_id' , $map_id)->first();
           if($tas){

           }else{
            $tasks = new Task;
            $tasks->location_id = $map_id;
            $tasks->user_id = $user_id;
            $tasks->from = $from;
            $tasks->to = $to;

            $tasks->status = "pending";
            $tasks->save();
           }
           

       

        }
        return response()->json(['success' => true]);

    }


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




    // import Products
    public function import_leads(Request $request)
    {
        try {
            \DB::transaction(function () use ($request) {
                $file_upload = $request->file('leads');
                $ext = pathinfo($file_upload->getClientOriginalName(), PATHINFO_EXTENSION);
                if ($ext != 'csv') {
                    return response()->json([
                        'msg' => 'must be in csv format',
                        'status' => false,
                    ]);
                } else {
                    $data = array();
                    $rowcount = 0;
                    if (($handle = fopen($file_upload, "r")) !== false) {

                        $max_line_length = defined('MAX_LINE_LENGTH') ? MAX_LINE_LENGTH : 10000;
                        $header = fgetcsv($handle, $max_line_length);
                        $header_colcount = count($header);
                        while (($row = fgetcsv($handle, $max_line_length)) !== false) {
                            $row_colcount = count($row);
                            if ($row_colcount == $header_colcount) {
                                $entry = array_combine($header, $row);
                                $data[] = $entry;
                            } else {
                                return null;
                            }
                            $rowcount++;
                        }
                        fclose($handle);
                    } else {
                        return null;
                    }


                   

                    //-- Create New Product
                    foreach ($data as $key => $value) {
               
 

                    
                     
                     
                      
                         
                   


                          $lead = new Map;
                          $lead->Outlet_Name =  $value['Outlet_Name'];
                          $lead->Point_X_Geo =  $value['lng'];
                          $lead->Point_Y_Geo =  $value['lat'];
                          $lead->Gov_Name =  $value['Gov_Name'];
                          $lead->Section =  $value['Section'];
                          $lead->Shiakha_Name =  $value['Shiakha_Name'];
                          $lead->Zone_Name =  $value['Zone_Name'];
                          $lead->Area_Type =  $value['Area_Type'];
                          $lead->Street =  $value['Street'];
                          $lead->Mobile =  $value['Mobile'];
                          $lead->Contact =  $value['Contact'];
                          $lead->google_map =  "no";
                         
                          $lead->save();

                        // Map::whereNull('deleted_at')->where('code' , $value['code']  )
                        // ->update(['name' =>  $value['en_name'] ]);
                       
 

                }



                }
            }, 10);
            return response()->json([
                'status' => true,
            ], 200);

        } catch (ValidationException $e) {
            return response()->json([
                'status' => false,
                'msg' => 'error',
                'errors' => $e->errors(),
            ]);
        }

    }










}

