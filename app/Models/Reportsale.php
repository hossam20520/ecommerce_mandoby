<?php
namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class Reportsale extends Model
{
    protected $table = 'Reportsales';
    protected $dates = ['deleted_at'];

    protected $fillable = [
        'ar_name', 'en_name', 
    ];

    protected $casts = [
 
    ];



}

