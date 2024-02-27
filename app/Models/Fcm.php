<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Fcm extends Model
{
  
    
    protected $table = 'fcms';
    protected $dates = ['deleted_at'];

    protected $fillable = [
          'user_id',  
         'device_token' ,
         'type' 
    ];


    public function user()
    {
        return $this->belongsTo('App\Models\User' , 'user_id');
    }
}
