<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Nclient extends Model
{
    protected $table = 'nclients';
    protected $dates = ['deleted_at'];

    protected $fillable = [
        'name', 'lat'  , 'lng' , 'status' , 'user_id'
    ];
}
