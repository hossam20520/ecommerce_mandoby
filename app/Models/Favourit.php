<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Favourit extends Model
{ 

    protected $table = 'favourits';
    protected $dates = ['deleted_at'];

    protected $fillable = [
          'user_id',  
         'product_id'   
    ];


  
    

   
    public function product()
    {
        return $this->belongsTo('App\Models\Product' , 'product_id');
    }

    

  
}
