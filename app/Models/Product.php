<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class Product extends Model
{

    protected $dates = ['deleted_at'];
    protected $appends = ['Photo'];
    protected $fillable = [
        'code', 'shop_id' , 'Type_barcode', 'name', 'cost', 'price', 'unit_id', 'unit_sale_id', 'unit_purchase_id',
        'stock_alert', 'category_id', 'sub_category_id', 'is_variant',
        'tax_method', 'image', 'brand_id', 'is_active', 'note','ar_description','en_description', 'product_status',
        'discount', 'en_name'
    ];



    



    protected $casts = [
        'category_id' => 'integer',
        'sub_category_id' => 'integer',
        'unit_id' => 'integer',
        'unit_sale_id' => 'integer',
        'unit_purchase_id' => 'integer',
        'is_variant' => 'integer',
        'brand_id' => 'integer',
        'is_active' => 'integer',
        'cost' => 'double',
        'price' => 'double',
        'stock_alert' => 'double',
        'TaxNet' => 'double',
    ];



 
    
    public function reviews()
    {
        return $this->hasMany(Review::class);
    }

    public function shop()
    {
        return $this->belongsTo(Shop::class);
    }

    public function ProductVariant()
    {
        return $this->belongsTo('App\Models\ProductVariant');
    }

    public function PurchaseDetail()
    {
        return $this->belongsTo('App\Models\PurchaseDetail');
    }

    public function SaleDetail()
    {
        return $this->belongsTo('App\Models\SaleDetail');
    }

    public function QuotationDetail()
    {
        return $this->belongsTo('App\Models\QuotationDetail');
    }

    public function category()
    {
        return $this->belongsTo('App\Models\Category');
    }

    public function unit()
    {
        return $this->belongsTo('App\Models\Unit', 'unit_id');
    }

    public function unitPurchase()
    {
        return $this->belongsTo('App\Models\Unit', 'unit_purchase_id');
    }

    public function unitSale()
    {
        return $this->belongsTo('App\Models\Unit', 'unit_sale_id');
    }

    public function brand()
    {
        return $this->belongsTo('App\Models\Brand');
    }



    public function getPhotoAttribute()
    {

        
                $firstimage = explode(',', $this->image);
          
          

        // Access the role_name through the relationship
        $photo =  env('url', 'http://localhost:8000').'/images/products/'.$firstimage[0];
 
        return $photo;
    }


    public function Product(){
        // env('url', 'http://localhost:8000')
    }

}
