<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Cartitem extends Model
{
    protected $table = 'cartitems';

    protected $dates = ['deleted_at'];

    protected $fillable = [
        'product_id', 'cart_id', 'qty' ,  'price' ,  'subtotal' ,
    ];

 
    public function product()
    {
        return $this->belongsTo('App\Models\Product' , 'product_id');
    }



}
