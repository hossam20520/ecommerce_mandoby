<?php
namespace App\Http\Controllers;
use App\Exports\ShopsExport;
use App\Models\Shop;
use App\Models\Warehouse;
use App\Models\User;
use App\Models\Setting;
use App\Models\Currency;

use App\Models\Provider;
use App\utils\helpers;
use Carbon\Carbon;
use DB;
use Illuminate\Http\Request;
use Illuminate\Pagination\LengthAwarePaginator;
use Illuminate\Pagination\Paginator;
use Illuminate\Validation\Rule;
use Illuminate\Validation\ValidationException;
use Maatwebsite\Excel\Facades\Excel;
use \Gumlet\ImageResize;
use Illuminate\Support\Facades\Auth;

class ShopsController extends BaseController
{
    public function index(Request $request)
    {
        // $this->authorizeForUser($request->user('api'), 'view', Shop::class);
        // How many items do you want to display.
        $perPage = $request->limit;
        $pageStart = \Request::get('page', 1);
        // Start displaying items from this number;
        $offSet = ($pageStart * $perPage) - $perPage;
        $order = $request->SortField;
        $dir = $request->SortType;
        $helpers = new helpers();
        // Filter fields With Params to retrieve
        $columns = array(0 => 'ar_name', 1 => 'en_name' );
        $param = array(0 => 'like', 1 => '='   );
        $data = array();

        $shops = Shop::where('deleted_at', '=', null);

        //Multiple Filter
        $Filtred = $helpers->filter($shops, $columns, $param, $request)
        // Search With Multiple Param
            ->where(function ($query) use ($request) {
                return $query->when($request->filled('search'), function ($query) use ($request) {
                    return $query->where('shops.ar_name', 'LIKE', "%{$request->search}%")
                        ->orWhere('shops.en_name', 'LIKE', "%{$request->search}%");
                        
                   
                });
            });
        $totalRows = $Filtred->count();
        $shops = $Filtred->offset($offSet)
            ->limit($perPage)
            ->orderBy($order, $dir)
            ->get();

        foreach ($shops as $shop) {
            $item['id'] = $shop->id;
            $item['ar_name'] = $shop->ar_name;
            $item['en_name'] = $shop->en_name;
              
            $firstimage = explode(',', $shop->image);
            $item['image'] = $firstimage[0];
            $data[] = $item;
        }

 

        return response()->json([
 
            'shops' => $data,
            'totalRows' => $totalRows,
        ]);
    }




    //-------------- Store new  Shop  ---------------\

    public function store(Request $request)
    {
        // $this->authorizeForUser($request->user('api'), 'create', Shop::class);

        try {
            $this->validate($request, [
                'ar_name' => 'required',
                'en_name' => 'required',
       
            ]);

            \DB::transaction(function () use ($request) {

                //-- Create New Shop
                $Shop = new Shop;
                //-- Field Required
                $Shop->ar_name = $request['ar_name'];
                $Shop->en_name = $request['en_name'];
                $Shop->merchant_id = $request['merchant_id']; 

                $Shop->currency_id = $request['currency_id']; 
 

                if ($request['images']) {
                    $files = $request['images'];
                    foreach ($files as $file) {
                        $fileData = ImageResize::createFromString(base64_decode(preg_replace('#^data:image/\w+;base64,#i', '', $file['path'])));
                        $fileData->resize(200, 200);
                        $name = rand(11111111, 99999999) . $file['name'];
                        $path = public_path() . '/images/shops/';
                        $success = file_put_contents($path . $name, $fileData);
                        $images[] = $name;
                    }
                    $filename = implode(",", $images);
                } else {
                    $filename = 'no-image.png';
                }

                $Shop->image = $filename;
                $Shop->save();

                $Warehouse = new Warehouse;
                $Warehouse->name = $request['en_name'];
                $Warehouse->mobile = "010";
                $Warehouse->country = "egypt";
                $Warehouse->city = "city";
                $Warehouse->zip =  $Shop->id;
                $Warehouse->email = $Shop->id;
                $Warehouse->shop_id = $Shop->id;
                $Warehouse->save();


                $Provider = new Provider;
                $Provider->name = "ProviderShop";
                $Provider->code = "010";
                $Provider->adresse = ".....";
                $Provider->phone = "000";
                $Provider->country = ".....";
                $Provider->email = "Email";
                $Provider->shop_id = $Shop->id;
                $Provider->city = "......";
                $Provider->save();



                // $Setting = new Setting;
                // $Setting->email = "......";
                // $Setting->currency_id = 1;
                // $Setting->client_id = 1;
                // $Setting->shop_id = $Shop->id;
                // $Setting->warehouse_id = $Warehouse->id;
                // $Setting->CompanyName =  "CompanyName";
                // $Setting->CompanyPhone =  "01111788511";
                // $Setting->CompanyAdress =  "CompanyAdress";
                // $Setting->footer =  "footer@gmail.com";
                // $Setting->developed_by =  "developer";
                // $Setting->logo =  "logo-default.png";
                // $Setting->save();


            }, 10);

            return response()->json(['success' => true]);

        } catch (ValidationException $e) {
            return response()->json([
                'status' => 422,
                'msg' => 'error',
                'errors' => $e->errors(),
            ], 422);
        }

    }

    //-------------- Update Shop  ---------------\
    //-----------------------------------------------\

    public function update(Request $request, $id)
    {
        // $this->authorizeForUser($request->user('api'), 'update', Shop::class);
        try {
            $this->validate($request, [
  
                'ar_name' => 'required',
                'en_name' => 'required',
        
            ] );

            \DB::transaction(function () use ($request, $id) {

                $Shop = Shop::where('id', $id)
                    ->where('deleted_at', '=', null)
                    ->first();

                //-- Update Shop
                $Shop->ar_name = $request['ar_name'];
                $Shop->en_name = $request['en_name'];
                $Shop->merchant_id = $request['merchant_id'];   
                $Shop->currency_id = $request['currency_id']; 
         
    
                

 

                if ($request['images'] === null) {

                    if ($Shop->image !== null) {
                        foreach (explode(',', $Shop->image) as $img) {
                            $pathIMG = public_path() . '/images/shops/' . $img;
                            if (file_exists($pathIMG)) {
                                if ($img != 'no-image.png') {
                                    @unlink($pathIMG);
                                }
                            }
                        }
                    }
                    $filename = 'no-image.png';
                } else {
                    if ($Shop->image !== null) {
                        foreach (explode(',', $Shop->image) as $img) {
                            $pathIMG = public_path() . '/images/shops/' . $img;
                            if (file_exists($pathIMG)) {
                                if ($img != 'no-image.png') {
                                    @unlink($pathIMG);
                                }
                            }
                        }
                    }
                    $files = $request['images'];
                    foreach ($files as $file) {
                        $fileData = ImageResize::createFromString(base64_decode(preg_replace('#^data:image/\w+;base64,#i', '', $file['path'])));
                        $fileData->resize(200, 200);
                        $name = rand(11111111, 99999999) . $file['name'];
                        $path = public_path() . '/images/shops/';
                        $success = file_put_contents($path . $name, $fileData);
                        $images[] = $name;
                    }
                    $filename = implode(",", $images);
                }

                $Shop->image = $filename;
                $Shop->save();

            }, 10);

            return response()->json(['success' => true]);

        } catch (ValidationException $e) {
            return response()->json([
                'status' => 422,
                'msg' => 'error',
                'errors' => $e->errors(),
            ], 422);
        }

    }

    //-------------- Remove Shop  ---------------\
    //-----------------------------------------------\

    public function destroy(Request $request, $id)
    {
        // $this->authorizeForUser($request->user('api'), 'delete', Shop::class);

        \DB::transaction(function () use ($id) {

            $Shop = Shop::findOrFail($id);
            $Shop->deleted_at = Carbon::now();
            $Shop->save();

            foreach (explode(',', $Shop->image) as $img) {
                $pathIMG = public_path() . '/images/shops/' . $img;
                if (file_exists($pathIMG)) {
                    if ($img != 'no-image.png') {
                        @unlink($pathIMG);
                    }
                }
            }

   

        }, 10);

        return response()->json(['success' => true]);

    }


      //-------------- Delete by selection  ---------------\

    public function delete_by_selection(Request $request)
    {
        // $this->authorizeForUser($request->user('api'), 'delete', Shop::class);

        \DB::transaction(function () use ($request) {
            $selectedIds = $request->selectedIds;
            foreach ($selectedIds as $shop_id) {

                $Shop = Shop::findOrFail($shop_id);
                $Shop->deleted_at = Carbon::now();
                $Shop->save();

                foreach (explode(',', $Shop->image) as $img) {
                    $pathIMG = public_path() . '/images/shops/' . $img;
                    if (file_exists($pathIMG)) {
                        if ($img != 'no-image.png') {
                            @unlink($pathIMG);
                        }
                    }
                }

            
            }

        }, 10);

        return response()->json(['success' => true]);

    }

    //-------------- Export All Shop to EXCEL  ---------------\

    public function export_Excel(Request $request)
    {
        // $this->authorizeForUser($request->user('api'), 'view', Shop::class);

        return Excel::download(new ShopsExport, 'List_Shops.xlsx');
    }



    public function GetMyShop(Request $request)
    {
        $helpers = new helpers();
        $data = $helpers->GetUserInfo();
        
         



        // $Shop = Shop::where('deleted_at', '=', null)->findOrFail($id);
        $item['id'] =  $data['shop']->id;
        $item['ar_name'] =  $data['shop']->ar_name;
        $item['en_name'] = $data['shop']->en_name;

        if ($data['shop']->image != '') {
            foreach (explode(',', $data['shop']->image) as $img) {
                $item['images'][] = $img;
            }
        }

        $data[] = $item;

        return response()->json($data[0]);
    }    


    //--------------  Show Shop Details ---------------\
    public function Get_Shops_Details(Request $request, $id)
    {

        // $this->authorizeForUser($request->user('api'), 'view', Shop::class);

        $Shop = Shop::where('deleted_at', '=', null)->findOrFail($id);
 

        $item['id'] = $Shop->id;
        $item['ar_name'] = $Shop->ar_name;
        $item['en_name'] = $Shop->en_name;
 

   
        if ($Shop->image != '') {
            foreach (explode(',', $Shop->image) as $img) {
                $item['images'][] = $img;
            }
        }

        $data[] = $item;

        return response()->json($data[0]);

    }

 

    //------------ Get shop By ID -----------------\

    public function show($id)
    {

        $Shop_data = Shop::with('unit')
            ->where('id', $id)
            ->where('deleted_at', '=', null)
            ->first();

        $data = [];
        $item['id'] = $Shop_data['id'];
        $item['ar_name'] = $Shop_data['ar_name'];
        $item['en_name'] = $Shop_data['en_name'];
 
 
        $data[] = $item;

        return response()->json($data[0]);
    }



 

    //---------------- Show Form Create Shop ---------------\

    public function create(Request $request)
    {

        // $this->authorizeForUser($request->user('api'), 'create', Shop::class);
      
        // $Merchants = User::where('deleted_at', null)->get(['id', 'name']);

        $Merchants = User::where('deleted_at', '=', null)->where('role_id', '=', "2")->get(['id', 'email']);

        $currenies = Currency::where('deleted_at', '=', null)->get(['id', 'name']);



        

        return response()->json([
            'merchants' =>  $Merchants ,
            'currenies'=> $currenies,
        ]);

    }

 

    //---------------- Show Form Edit Shop ---------------\

    public function edit(Request $request, $id)
    {
    
        // $this->authorizeForUser($request->user('api'), 'update', Shop::class);
        $Shop = Shop::where('deleted_at', '=', null)->findOrFail($id);
        $item['id'] = $Shop->id;
        $item['ar_name'] = $Shop->ar_name;
        $item['en_name'] = $Shop->en_name;
 
        $item['merchant_id'] = $Shop->merchant_id;
        $item['currency_id'] = $Shop->currency_id;


        
        $item['images'] = [];
        if ($Shop->image != '' && $Shop->image != 'no-image.png') {
            foreach (explode(',', $Shop->image) as $img) {
                $path = public_path() . '/images/shops/' . $img;
                if (file_exists($path)) {
                    $itemImg['name'] = $img;
                    $type = pathinfo($path, PATHINFO_EXTENSION);
                    $data = file_get_contents($path);
                    $itemImg['path'] = 'data:image/' . $type . ';base64,' . base64_encode($data);

                    $item['images'][] = $itemImg;
                }
            }
        } else {
            $item['images'] = [];
        }
 
        $data = $item;
        $Merchants = User::where('deleted_at', '=', null)->where('role_id', '=', "2")->get(['id', 'email']);



        $currenies = Currency::where('deleted_at', '=', null)->get(['id', 'name']);
        return response()->json([
            'shop' => $data,
            'currenies' =>  $currenies ,
            'merchants' => $Merchants
        ]);

    }

   
    // import Shops
    public function import_shops(Request $request)
    {
        try {
            \DB::transaction(function () use ($request) {
                $file_upload = $request->file('shops');
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


                 

                    //-- Create New Shop
                    foreach ($data as $key => $value) {
    
 
                        $Shop = new Shop;
                        $Shop->ar_name = $value['ar_name'] ;
                        $Shop->en_name = $value['en_name'] ;
 
                        $Shop->image = 'no-image.png';
                        $Shop->save();

                
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


    // Generate_random_code
    public function generate_random_code($value_code)
    {
        if($value_code == ''){
            $gen_code = substr(number_format(time() * mt_rand(), 0, '', ''), 0, 8);
            $this->check_code_exist($gen_code);
        }else{
            $this->check_code_exist($value_code);
        }
    }

   }