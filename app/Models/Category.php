<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class Category extends Model
{
    protected $dates = ['deleted_at'];

    protected $fillable = [
        'code', 'name','image', 'shop_id', 'main_section'
    ];

    protected $casts = [
        'products_count' => 'integer',
        'shop_id' => 'integer',
 
    ];


    public function products()
    {
        return $this->hasMany(Product::class);
    }

}
