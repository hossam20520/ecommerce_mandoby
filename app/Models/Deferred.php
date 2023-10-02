<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Deferred extends Model
{
    protected $dates = ['deleted_at'];

    protected $fillable = [
        'date', 'seller_id', 'amount', 'customer_id', 'paypackdate', 'payed', 'verified', 'products',
        'note', 'phone',
    ];


    protected $casts = [
        'seller_id' => 'integer',
        'amount' => 'double',
        'customer_id' => 'integer',
        'payed' => 'integer',
        'verified' => 'integer',
    ];

    public function customer()
    {
        return $this->belongsTo('App\Models\Client' , 'customer_id');
    }

}
