<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Fcm extends Model
{
    protected $table = 'fcms';
    protected $dates = ['deleted_at'];
    protected $fillable = [
        'user_id', 'fcms', 
    ];
}
