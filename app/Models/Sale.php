<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class Sale extends Model
{
    protected $dates = ['deleted_at'];

    protected $fillable = [
        'date', 'Ref',  'reason',   'is_pos', 'client_id', 'GrandTotal', 'qte_retturn', 'TaxNet', 'tax_rate', 'notes',
        'total_retturn', 'warehouse_id', 'user_id', 'statut', 'discount', 'shipping',
        'paid_amount', 'payment_statut', 'created_at', 'updated_at', 'deleted_at', 'odoo_refrence', 'odoo_ref',
        'client_note' , 'driver_id'
    ];

    protected $casts = [
        'is_pos' => 'integer',
        'GrandTotal' => 'double',
        'qte_retturn' => 'double',
        'total_retturn' => 'double',
        'user_id' => 'integer',
        'client_id' => 'integer',
        'warehouse_id' => 'integer',
        'discount' => 'double',
        'shipping' => 'double',
        'TaxNet' => 'double',
        'tax_rate' => 'double',
        'paid_amount' => 'double',
    ];

    public function user()
    {
        return $this->belongsTo('App\Models\User');
    }

    public function driver()
    {
        return $this->belongsTo('App\Models\User' , 'driver_id');
    }

    

    public function details()
    {
        return $this->hasMany('App\Models\SaleDetail');
    }

    public function client()
    {
        return $this->belongsTo('App\Models\User');
    }

    public function facture()
    {
        return $this->hasMany('App\Models\PaymentSale');
    }

    public function warehouse()
    {
        return $this->belongsTo('App\Models\Warehouse');
    }


    public function orders()
    {
        return $this->hasMany(Order::class, 'order_id');
    }

}
