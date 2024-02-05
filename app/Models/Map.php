<?php
namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class Map extends Model
{
    protected $table = 'maps';
    protected $dates = ['deleted_at'];

    protected $fillable = [
        'ar_name', 'en_name',  
    ];

    protected $casts = [
 
    ];



}

