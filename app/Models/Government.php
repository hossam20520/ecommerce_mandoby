<?php
namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class Government extends Model
{
    protected $table = 'governments';
    protected $dates = ['deleted_at'];

    protected $fillable = [
        'ar_name', 'en_name', 'code'
    ];

    protected $casts = [
 
    ];





}

