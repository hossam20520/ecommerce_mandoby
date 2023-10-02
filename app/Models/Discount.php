<?php
namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class Discount extends Model
{
    protected $table = 'discounts';
    protected $dates = ['deleted_at'];

    protected $fillable = [
        'ar_name', 'en_name', 
    ];

    protected $casts = [
 
    ];



}

