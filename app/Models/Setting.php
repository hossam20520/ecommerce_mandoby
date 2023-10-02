<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class Setting extends Model
{

    protected $fillable = [
        'currency_id', 'email', 'CompanyName', 'CompanyPhone', 'CompanyAdress',
         'logo','footer','developed_by','client_id','warehouse_id','default_language','percentage','value'
    ];

    protected $casts = [
        'currency_id' => 'integer',
        'client_id' => 'integer',
        'warehouse_id' => 'integer',
    ];

    public function Currency()
    {
        return $this->belongsTo('App\Models\Currency');
    }


    public function shopcurrency()
    {
        return $this->belongsTo(Currency::class, 'currency_id');
    }



    
}
