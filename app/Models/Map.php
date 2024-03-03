<?php
namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class Map extends Model
{
    protected $table = 'maps';
    protected $dates = ['deleted_at'];

    protected $fillable = [
        'Outlet_Name', 'Point_X_Geo' , 'Point_Y_Geo',  
    ];
 
    protected $casts = [
 
    ];



}

