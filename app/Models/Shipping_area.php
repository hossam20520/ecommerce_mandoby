<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class Shipping_area extends Model
{
    protected $table = 'shipping_areas';
    protected $dates = ['deleted_at'];

    protected $fillable = [
        'cost' , 'tax' , 'area_id'
    ];

    protected $casts = [
 
    ];

    public function areas()
    {

        // return $this->hasMany(Area::class , 'id');
        return $this->belongsTo(Area::class , 'area_id');
        // return $this->hasMany('App\Models\Area' ,'area_id' );
        
    }

}

