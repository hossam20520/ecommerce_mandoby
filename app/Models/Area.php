<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class Area extends Model
{
    protected $table = 'areas';
    protected $dates = ['deleted_at'];

    protected $fillable = [
        'ar_name', 'en_name', 'code' , 'gov_id' 
    ];

    protected $casts = [
 
    ];


    public function govs()
    {
          // return $this->hasMany(Area::class , 'id');
          return $this->belongsTo(Government::class , 'gov_id');
          // return $this->hasMany('App\Models\Area' ,'area_id' );
    }
  

}

