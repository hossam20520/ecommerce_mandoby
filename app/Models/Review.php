<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Review extends Model
{

    

    protected $fillable = [
        'user_id', 'product_id',
    ];
    protected $table = 'reviews';
    protected $dates = ['deleted_at'];


    public function user()
    {
        return $this->belongsTo('App\Models\User' , 'user_id');
    }
 
}
