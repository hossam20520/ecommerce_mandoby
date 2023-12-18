<?php

namespace App\Http\Controllers;

use App\Exports\MandobsExport;
use App\Models\Mandob;
use App\utils\helpers;
use Carbon\Carbon;
use Illuminate\Support\Facades\Validator;
use Illuminate\Validation\Rule;
use DB;
use Illuminate\Http\Request;
use Maatwebsite\Excel\Facades\Excel;

class MandobController extends BaseController
{

    //------------- Get ALL Customers -------------\\

    public function index(request $request)
    {
        
        // How many items do you want to display.
        $perPage = $request->limit;
        $pageStart = \Request::get('page', 1);
        // Start displaying items from this number;
        $offSet = ($pageStart * $perPage) - $perPage;
        $order = $request->SortField;
        $dir = $request->SortType;
        $helpers = new helpers();
        // Filter fields With Params to retrieve
        $columns = array(0 => 'name', 1 => 'code', 2 => 'phone', 3 => 'email');
        $param = array(0 => 'like', 1 => 'like', 2 => 'like', 3 => 'like');
        $data = array();

        $mandobs = Mandob::where('deleted_at', '=', null);

        //Multiple Filter
        $Filtred = $helpers->filter($mandobs, $columns, $param, $request)
        // Search With Multiple Param
            ->where(function ($query) use ($request) {
                return $query->when($request->filled('search'), function ($query) use ($request) {
                    return $query->where('name', 'LIKE', "%{$request->search}%")
                        ->orWhere('code', 'LIKE', "%{$request->search}%")
                        ->orWhere('phone', 'LIKE', "%{$request->search}%")
                        ->orWhere('email', 'LIKE', "%{$request->search}%");
                });
            });
        $totalRows = $Filtred->count();
        $mandobs = $Filtred->offset($offSet)
            ->limit($perPage)
            ->orderBy($order, $dir)
            ->get();

        return response()->json([
            'mandobs' => $mandobs,
            'totalRows' => $totalRows,
        ]);
    }

    //------------- Store new Customer -------------\\

    public function store(Request $request)
    {
     
        $this->validate($request, [
            'name' => 'required',
            'adresse' => 'required',
            'phone' => 'required',
            'email' => 'required|unique:mandobs',
            'email' => Rule::unique('mandobs')->where(function ($query) {
                return $query->where('deleted_at', '=', null);
            }),
            'country' => 'required',
            'city' => 'required',
        ]

        , [
            'email.unique' => 'This Email already taken.',
        ]
    );

        Mandob::create([
            'name' => $request['name'],
            'code' => $this->getNumberOrder(),
            'adresse' => $request['adresse'],
            'phone' => $request['phone'],
            'email' => $request['email'],
            'country' => $request['country'],
            'city' => $request['city'],
        ]);
        return response()->json(['success' => true]);
    }

    //------------ function show -----------\\

    public function show($id){
        //
        
    }

    //------------- Update Customer -------------\\

    public function update(Request $request, $id)
    {
        $this->authorizeForUser($request->user('api'), 'update', Mandob::class);
        $this->validate($request, [
            
            'email' => 'required|unique:mandobs',
            'email' => Rule::unique('mandobs')->ignore($id)->where(function ($query) {
                return $query->where('deleted_at', '=', null);
            }),

            'name' => 'required',
            'adresse' => 'required',
            'phone' => 'required',
            'country' => 'required',
            'city' => 'required',
        ]

        , [
            'email.unique' => 'This Email already taken.',
        ]
    );

        Mandob::whereId($id)->update([
            'name' => $request['name'],
            'adresse' => $request['adresse'],
            'phone' => $request['phone'],
            'email' => $request['email'],
            'country' => $request['country'],
            'city' => $request['city'],
        ]);
        return response()->json(['success' => true]);

    }

    //------------- delete mandob -------------\\

    public function destroy(Request $request, $id)
    {
        $this->authorizeForUser($request->user('api'), 'delete', Mandob::class);

        Mandob::whereId($id)->update([
            'deleted_at' => Carbon::now(),
        ]);
        return response()->json(['success' => true]);
    }

    //-------------- Delete by selection  ---------------\\

    public function delete_by_selection(Request $request)
    {
        $this->authorizeForUser($request->user('api'), 'delete', Mandob::class);
        $selectedIds = $request->selectedIds;

        foreach ($selectedIds as $Mandob_id) {
            Mandob::whereId($Mandob_id)->update([
                'deleted_at' => Carbon::now(),
            ]);
        }
        return response()->json(['success' => true]);
    }

    //------------- Export  ALL Customers in EXCEL -------------\\

    public function exportExcel(Request $request)
    {
        $this->authorizeForUser($request->user('api'), 'view', Mandob::class);

        return Excel::download(new MandobsExport, 'Mandobs.xlsx');
    }

    //------------- get Number Order Customer -------------\\

    public function getNumberOrder()
    {
        $last = DB::table('mandobs')->latest('id')->first();

        if ($last) {
            $code = $last->code + 1;
        } else {
            $code = 1;
        }
        return $code;
    }

    //------------- Get Mandobs Without Paginate -------------\\

    public function Get_Mandobs_Without_Paginate()
    {
        $mandobs = Mandob::where('deleted_at', '=', null)->get(['id', 'name']);
        return response()->json($mandobs);
    }

    // import mandobs
    public function import_mandobs(Request $request)
    {
        $file_upload = $request->file('mandobs');
        $ext = pathinfo($file_upload->getMandobOriginalName(), PATHINFO_EXTENSION);
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
           
            $rules = array('email' => 'required|email|unique:mandobs');
            //-- Create New Mandob
            foreach ($data as $key => $value) {
                $input['email'] = $value['email'];

                $validator = Validator::make($input, $rules);
                if (!$validator->fails()) {
                    
                    Mandob::create([
                        'name' => $value['name'] == '' ? null : $value['name'],
                        'code' => $this->getNumberOrder(),
                        'adresse' => $value['adresse'] == '' ? null : $value['adresse'],
                        'phone' => $value['phone'] == '' ? null : $value['phone'],
                        'email' => $value['email'] == '' ? null : $value['email'],
                        'country' => $value['country'] == '' ? null : $value['country'],
                        'city' => $value['city'] == '' ? null : $value['city'],
                    ]);
                }

            }

            return response()->json([
                'status' => true,
            ], 200);
        }

    }

}
