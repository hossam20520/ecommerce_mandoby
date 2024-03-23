<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Task extends Model
{
    protected $dates = ['deleted_at'];
    protected $table = 'tasks';

    protected $fillable = [
        'user_id', 'location_id', 'from', 'to', 'status',  'current_lat' , 'current_lng'
    ];

    public function Shop()
    {
        return $this->belongsTo('App\Models\Map'  , 'location_id');
    }
}
