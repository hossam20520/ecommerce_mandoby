<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Deferred;
use App\Models\Client;
use Illuminate\Validation\ValidationException;
use DB;
class DefferedController extends BaseController
{





      /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        //
    }

    /**
     * Show the form for creating a new resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function create(Request $request)
    {
        $this->authorizeForUser($request->user('api'), 'create', Deferred::class);

        $customers = Client::where('deleted_at', null)->get(['id', 'name']);
        
        return response()->json([
            'customers' => $customers,
        ]);

    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(Request $request)
    {
        $this->authorizeForUser($request->user('api'), 'create', Deferred::class);
        // $sellerid = $request->user()->id;
        try {
            $this->validate($request, [
                'date' => 'required',
                'customer_id' => 'required',
                'amount' => 'required',
                'phone' => 'required',

            ]);
    
            \DB::transaction(function () use ($request) {
                
                //-- Create New Product
                $Deferred = new Deferred;
                //-- Field Required
                $Deferred->date = $request['date'];
                $Deferred->customer_id = $request['customer_id'];
                $Deferred->seller_id = $request->user('api')->id;
                $Deferred->amount = $request['amount'];
                $Deferred->paypackdate = $request['paypackdate'];
                $Deferred->payed = $request['is_paied'];
                $Deferred->verified = $request['is_verified'];
                $Deferred->products = $request['products'];
                $Deferred->note = $request['note'];
                $Deferred->phone = $request['phone'];
                $Deferred->save();

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

    /**
     * Display the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function show($id)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function edit($id)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, $id)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function destroy($id)
    {
        //
    }


}
