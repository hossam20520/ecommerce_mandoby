<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Dorders extends Model
{
  
    protected $table = 'dorders';
    protected $dates = ['deleted_at'];

    protected $fillable = [
        'driver_id', 'order_id', 'status',
    ];

    public function order()
    {
        return $this->belongsTo(Sale::class , 'order_id');
    }


  

}
