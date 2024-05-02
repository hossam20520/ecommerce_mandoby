<?php
namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class Attendance extends Model
{
    protected $table = 'attendances';
    protected $dates = ['deleted_at'];

    protected $fillable = [
        'user_id', 'location_lat'  , 'location_lng' , 'time' , 'date',  'type' ,  'status'  ,  
    ];

    protected $casts = [
 
    ];

    public function user()
    {
        return $this->belongsTo('App\Models\User' , 'user_id');
    }

}

