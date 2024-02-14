<?php
namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class Map extends Model
{
    protected $table = 'maps';
    protected $dates = ['deleted_at'];

    protected $fillable = [
        'name', 'lat' , 'lng',  
    ];

    protected $casts = [
 
    ];



}

