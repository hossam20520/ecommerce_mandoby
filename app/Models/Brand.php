<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class Brand extends Model
{
    protected $dates = ['deleted_at'];

    protected $fillable = [
        'name', 'description', 'image',
    ];


    // public function getCustomImageAttribute()
    // {
    //     // Modify 'image' value or return it as is for the custom field
    //     return   env('URL', 'http://192.168.1.5:8000') ."/images/sliders/".  $this->attributes['image']; // You can modify this if needed
    // }


}
