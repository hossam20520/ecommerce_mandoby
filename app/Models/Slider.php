<?php
namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class Slider extends Model
{
    protected $table = 'sliders';
    protected $dates = ['deleted_at'];

    protected $fillable = [
        'image' , 'device'
    ];

    protected $casts = [
 
    ];



}

