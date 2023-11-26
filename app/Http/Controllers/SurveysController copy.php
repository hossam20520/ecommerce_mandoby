<?php
namespace App\Http\Controllers;
use App\Exports\SurveysExport;
use App\Models\Survey;
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


class SurveysController extends BaseController
{
    public function index(request $request)
    {
        $this->authorizeForUser($request->user('api'), 'view', Survey::class);
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

        $surveys = Survey::where('deleted_at', '=', null);

        //Multiple Filter
        $Filtred = $helpers->filter($surveys, $columns, $param, $request)
        // Search With Multiple Param
            ->where(function ($query) use ($request) {
                return $query->when($request->filled('search'), function ($query) use ($request) {
                    return $query->where('surveys.ar_name', 'LIKE', "%{$request->search}%")
                        ->orWhere('surveys.en_name', 'LIKE', "%{$request->search}%");
                        
                   
                });
            });
        $totalRows = $Filtred->count();
        $surveys = $Filtred->offset($offSet)
            ->limit($perPage)
            ->orderBy($order, $dir)
            ->get();

        foreach ($surveys as $survey) {
            $item['id'] = $survey->id;
            $item['ar_name'] = $survey->ar_name;
            $item['en_name'] = $survey->en_name;
            $firstimage = explode(',', $survey->image);
            $item['image'] = $firstimage[0];
            $data[] = $item;
        }

 

        return response()->json([
 
            'surveys' => $data,
            'totalRows' => $totalRows,
        ]);
    }

    //-------------- Store new  Survey  ---------------\

    public function store(Request $request)
    {
        $this->authorizeForUser($request->user('api'), 'create', Survey::class);

        try {
            $this->validate($request, [
                'ar_name' => 'required',
                'en_name' => 'required',
       
            ]);

            \DB::transaction(function () use ($request) {

                //-- Create New Survey
                $Survey = new Survey;

                //-- Field Required
                $Survey->ar_name = $request['ar_name'];
                $Survey->en_name = $request['en_name'];

 

                if ($request['images']) {
                    $files = $request['images'];
                    foreach ($files as $file) {
                        $fileData = ImageResize::createFromString(base64_decode(preg_replace('#^data:image/\w+;base64,#i', '', $file['path'])));
                        $fileData->resize(200, 200);
                        $name = rand(11111111, 99999999) . $file['name'];
                        $path = public_path() . '/images/surveys/';
                        $success = file_put_contents($path . $name, $fileData);
                        $images[] = $name;
                    }
                    $filename = implode(",", $images);
                } else {
                    $filename = 'no-image.png';
                }

                $Survey->image = $filename;
                $Survey->save();

  

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

    //-------------- Update Survey  ---------------\
    //-----------------------------------------------\

    public function update(Request $request, $id)
    {
        $this->authorizeForUser($request->user('api'), 'update', Survey::class);
        try {
      

            \DB::transaction(function () use ($request, $id) {

                $Survey = Survey::where('id', $id)
                    ->where('deleted_at', '=', null)
                    ->first();

                //-- Update Survey
                $Survey->ar_name = $request['ar_name'];
                $Survey->en_name = $request['en_name'];
                 

         
    


 

                if ($request['images'] === null) {

                    if ($Survey->image !== null) {
                        foreach (explode(',', $Survey->image) as $img) {
                            $pathIMG = public_path() . '/images/surveys/' . $img;
                            if (file_exists($pathIMG)) {
                                if ($img != 'no-image.png') {
                                    @unlink($pathIMG);
                                }
                            }
                        }
                    }
                    $filename = 'no-image.png';
                } else {
                    if ($Survey->image !== null) {
                        foreach (explode(',', $Survey->image) as $img) {
                            $pathIMG = public_path() . '/images/surveys/' . $img;
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
                        $path = public_path() . '/images/surveys/';
                        $success = file_put_contents($path . $name, $fileData);
                        $images[] = $name;
                    }
                    $filename = implode(",", $images);
                }

                $Survey->image = $filename;
                $Survey->save();

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

    //-------------- Remove Survey  ---------------\
    //-----------------------------------------------\

    public function destroy(Request $request, $id)
    {
        $this->authorizeForUser($request->user('api'), 'delete', Survey::class);

        \DB::transaction(function () use ($id) {

            $Survey = Survey::findOrFail($id);
            $Survey->deleted_at = Carbon::now();
            $Survey->save();

            foreach (explode(',', $Survey->image) as $img) {
                $pathIMG = public_path() . '/images/surveys/' . $img;
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
        $this->authorizeForUser($request->user('api'), 'delete', Survey::class);

        \DB::transaction(function () use ($request) {
            $selectedIds = $request->selectedIds;
            foreach ($selectedIds as $survey_id) {

                $Survey = Survey::findOrFail($survey_id);
                $Survey->deleted_at = Carbon::now();
                $Survey->save();

                foreach (explode(',', $Survey->image) as $img) {
                    $pathIMG = public_path() . '/images/surveys/' . $img;
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

    //-------------- Export All Survey to EXCEL  ---------------\

    public function export_Excel(Request $request)
    {
        $this->authorizeForUser($request->user('api'), 'view', Survey::class);

        return Excel::download(new SurveysExport, 'List_Surveys.xlsx');
    }




    //--------------  Show Survey Details ---------------\
    public function Get_Surveys_Details(Request $request, $id)
    {

        $this->authorizeForUser($request->user('api'), 'view', Survey::class);

        $Survey = Survey::where('deleted_at', '=', null)->findOrFail($id);
 

        $item['id'] = $Survey->id;
        $item['ar_name'] = $Survey->ar_name;
        $item['en_name'] = $Survey->en_name;
 

   
        if ($Survey->image != '') {
            foreach (explode(',', $Survey->image) as $img) {
                $item['images'][] = $img;
            }
        }

        $data[] = $item;

        return response()->json($data[0]);

    }

    //------------ Get Surveys By Warehouse -----------------\

    public function Surveys_by_Warehouse(request $request, $id)
    {
        $data = [];
        $survey_warehouse_data = survey_warehouse::with('warehouse', 'Survey', 'surveyVariant')
            ->where('warehouse_id', $id)
            ->where('deleted_at', '=', null)
            ->where(function ($query) use ($request) {
                if ($request->stock == '1') {
                    return $query->where('qte', '>', 0);
                }
            })->get();

        foreach ($survey_warehouse_data as $survey_warehouse) {

            if ($survey_warehouse->survey_variant_id) {
                $item['survey_variant_id'] = $survey_warehouse->survey_variant_id;
                $item['code'] = $survey_warehouse['surveyVariant']->name . '-' . $survey_warehouse['survey']->code;
                $item['Variant'] = $survey_warehouse['surveyVariant']->name;
            } else {
                $item['survey_variant_id'] = null;
                $item['Variant'] = null;
                $item['code'] = $survey_warehouse['survey']->code;
            }

            $item['id'] = $survey_warehouse->survey_id;
            $item['name'] = $survey_warehouse['survey']->name;
            $item['barcode'] = $survey_warehouse['survey']->code;
            $item['Type_barcode'] = $survey_warehouse['survey']->Type_barcode;
            $firstimage = explode(',', $survey_warehouse['survey']->image);
            $item['image'] = $firstimage[0];

            if ($survey_warehouse['survey']['unitSale']->operator == '/') {
                $item['qte_sale'] = $survey_warehouse->qte * $survey_warehouse['survey']['unitSale']->operator_value;
                $price = $survey_warehouse['survey']->price / $survey_warehouse['survey']['unitSale']->operator_value;
            } else {
                $item['qte_sale'] = $survey_warehouse->qte / $survey_warehouse['survey']['unitSale']->operator_value;
                $price = $survey_warehouse['survey']->price * $survey_warehouse['survey']['unitSale']->operator_value;
            }

            if ($survey_warehouse['survey']['unitPurchase']->operator == '/') {
                $item['qte_purchase'] = round($survey_warehouse->qte * $survey_warehouse['survey']['unitPurchase']->operator_value, 5);
            } else {
                $item['qte_purchase'] = round($survey_warehouse->qte / $survey_warehouse['survey']['unitPurchase']->operator_value, 5);
            }

            $item['qte'] = $survey_warehouse->qte;
            $item['unitSale'] = $survey_warehouse['survey']['unitSale']->ShortName;
            $item['unitPurchase'] = $survey_warehouse['survey']['unitPurchase']->ShortName;

            if ($survey_warehouse['survey']->TaxNet !== 0.0) {
                //Exclusive
                if ($survey_warehouse['survey']->tax_method == '1') {
                    $tax_price = $price * $survey_warehouse['survey']->TaxNet / 100;
                    $item['Net_price'] = $price + $tax_price;
                    // Inxclusive
                } else {
                    $item['Net_price'] = $price;
                }
            } else {
                $item['Net_price'] = $price;
            }

            $data[] = $item;
        }

        return response()->json($data);
    }

    //------------ Get survey By ID -----------------\

    public function show($id)
    {

        $Survey_data = Survey::with('unit')
            ->where('id', $id)
            ->where('deleted_at', '=', null)
            ->first();

        $data = [];
        $item['id'] = $Survey_data['id'];
        $item['ar_name'] = $Survey_data['ar_name'];
        $item['en_name'] = $Survey_data['en_name'];
 
 
        $data[] = $item;

        return response()->json($data[0]);
    }



 

    //---------------- Show Form Create Survey ---------------\

    public function create(Request $request)
    {

        $this->authorizeForUser($request->user('api'), 'create', Survey::class);

 
        return response()->json([
     
      
            'data' => 5,
        ]);

    }

 

    //---------------- Show Form Edit Survey ---------------\

    public function edit(Request $request, $id)
    {
    
        $this->authorizeForUser($request->user('api'), 'update', Survey::class);
        $Survey = Survey::where('deleted_at', '=', null)->findOrFail($id);
        $item['id'] = $Survey->id;
        $item['ar_name'] = $Survey->ar_name;
        $item['en_name'] = $Survey->en_name;
 
 
        $item['images'] = [];
        if ($Survey->image != '' && $Survey->image != 'no-image.png') {
            foreach (explode(',', $Survey->image) as $img) {
                $path = public_path() . '/images/surveys/' . $img;
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

        return response()->json([
            'survey' => $data,
        ]);

    }

   
    // import Surveys
    public function import_surveys(Request $request)
    {
        try {
            \DB::transaction(function () use ($request) {
                $file_upload = $request->file('surveys');
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


                 

                    //-- Create New Survey
                    foreach ($data as $key => $value) {
    
 
                        $Survey = new Survey;
                        $Survey->ar_name = $value['ar_name'] ;
                        $Survey->en_name = $value['en_name'] ;
 
                        $Survey->image = 'no-image.png';
                        $Survey->save();

                
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