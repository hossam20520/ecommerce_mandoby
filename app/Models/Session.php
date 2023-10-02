<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Session extends Model
{


    protected $table = 'sessions';
    protected $dates = ['deleted_at'];

    protected $fillable = [
        'user_id', 'session_id'  , 'status' , 'order_id', 'email'
    ];
}
