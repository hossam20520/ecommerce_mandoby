<?php
namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class Shop extends Model
{
    protected $table = 'shops';
    protected $dates = ['deleted_at'];

    protected $fillable = [
        'ar_name', 'en_name','shop_id' , 'due', 'currency_id' , 'phone' , 'address'
    ];

    protected $casts = [
 
    ];

    public function products()
    {
        return $this->hasMany(Product::class , 'shop_id');
    }



    public function vendor()
    {
        return $this->belongsTo(User::class , 'merchant_id');
        // return $this->hasOne(User::class , 'id');
    }

    public function setting()
    {
        return $this->hasOne(Setting::class);
    }



    public function currency()
    {
        return $this->belongsTo(Currency::class , 'currency_id');
    }



}

