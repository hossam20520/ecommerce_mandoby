<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Validation\Rule;
use App\Models\Number;
use Carbon\Carbon;
use App\utils\helpers;
use DB;

class NumbersController extends BaseController
{




    public function index(request $request){

        $perPage = $request->limit;
        $pageStart = \Request::get('page', 1);
        // Start displaying items from this number;
        $offSet = ($pageStart * $perPage) - $perPage;
        $order = $request->SortField;
        $dir = $request->SortType;

        $helpers = new helpers();

        $columns = array(0 => 'name', 1 => 'category_id', 2 => 'brand_id', 3 => 'code');
        $param = array(0 => 'like', 1 => '=', 2 => '=', 3 => 'like');
        $data = array();

        $Number = Product::with('unit', 'category', 'brand')
        ->where('deleted_at', '=', null);


        $Filtred = $helpers->filter($Number, $columns, $param, $request)
        // Search With Multiple Param
            ->where(function ($query) use ($request) {
                return $query->when($request->filled('search'), function ($query) use ($request) {
                    return $query->where('products.name', 'LIKE', "%{$request->search}%")
                        ->orWhere('products.code', 'LIKE', "%{$request->search}%")
                        ->orWhere(function ($query) use ($request) {
                            return $query->whereHas('category', function ($q) use ($request) {
                                $q->where('name', 'LIKE', "%{$request->search}%");
                            });
                        })
                        ->orWhere(function ($query) use ($request) {
                            return $query->whereHas('brand', function ($q) use ($request) {
                                $q->where('name', 'LIKE', "%{$request->search}%");
                            });
                        });
                });
            });




    }





    public function store(Request $request)
    {

        //return response()->json(['success' => true]);
        //return response()->json(['success' => true]);
       // $this->authorizeForUser($request->user('api'), 'create', Product::class);
   
        try {

            $this->validate($request, [
                'serial' => 'required|unique:numbers',
                'serial' => Rule::unique('numbers')->where(function ($query) {
                    return $query->where('deleted_at', '=', null);
                }),
                'month' => 'required', 
                'year' => 'required'
              
            ], [
                'serial.unique' => 'رقم السيريال موجود بالفعل من فضلك ادخل سريال جديد',
                'serial.required' => 'This field is required',
            ]);
          
            DB::transaction(function () use ($request) {

                 $number = new Number;
                 $number->serial = $request['serial'];
                 $number->number = $request['number'];
                 $number->year   = $request['year'];
                 $number->month  = $request['month'];
                 $number->save();
              }, 10);

               
            return response()->json(['success' => true]);

        }catch(ValidationException $e){


            return response()->json([
                'status' => 422,
                'msg' => 'error',
                'errors' => $e->errors(),
            ], 422);

        }




    }





}
