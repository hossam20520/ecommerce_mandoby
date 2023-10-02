<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Address extends Model
{
    use HasFactory;

    protected $fillable = [
        'address', 'phone', 'country', 'city',
        'user_id', 'selected_as_default' 
    ];

 
}
