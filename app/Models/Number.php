<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Number extends Model
{
    protected $dates = ['deleted_at'];
    protected $fillable = [
      'number' , 'serial','year' , 'month'
    ];
}
