<?php
namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class Map extends Model
{
    protected $table = 'maps';
    protected $dates = ['deleted_at'];

    protected $fillable = [
        'Outlet_Name', 'Point_X_Geo' ,
         'Point_Y_Geo',  'Gov_Name' ,
         'Section', 'Shiakha_Name' ,
          'Zone_Name' , 'Area_Type' ,
           'Outlet_Type' , 'Street' ,
            'Mobile' , 'Contact' , 'user_id'
    ];
 
    protected $casts = [
 
    ];



}

