<?php
namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class Notification extends Model
{
    protected $table = 'notifications';
    protected $dates = ['deleted_at'];

    protected $fillable = [
        'ar_name', 'en_name' 
    ];

    protected $casts = [
 
    ];



}

