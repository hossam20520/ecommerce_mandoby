<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class Warehouse extends Model
{
    protected $dates = ['deleted_at'];

    protected $fillable = [
        'name',   'shop_id', 'mobile', 'country', 'city', 'email', 'zip',
    ];

}
