<?php
namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class Ai extends Model
{
    protected $table = 'ais';
    protected $dates = ['deleted_at'];

    protected $fillable = [
        'role',  'image'  , 'ar_name' , 'en_name'
    ];

    protected $casts = [
 
    ];



}

