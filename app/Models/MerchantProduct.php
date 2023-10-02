<?php
namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class MerchantProduct extends Model
{
    protected $table = 'merchantProducts';
    protected $dates = ['deleted_at'];

    protected $fillable = [
        'shop_id', 'product_id','warehouse_id',
    ];

    protected $casts = [
 
    ];



}

