<?php
namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class Shop extends Model
{
    protected $table = 'shops';
    protected $dates = ['deleted_at'];

    protected $fillable = [
        'ar_name', 'en_name', 'bussiness_type', 'phone', 'email', 'address', 'code', 'lat', 'lng',  'area_id',  'user_id', 
    ];


 

    protected $casts = [
 
    ];



}

