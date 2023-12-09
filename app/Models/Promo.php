<?php
namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class Promo extends Model
{
    protected $table = 'promos';
    protected $dates = ['deleted_at'];

    protected $fillable = [
        'code', 'type', 'value', 'expiry_date', 'usage_limit', 'usage_count', 'min_cart_value'
    ];

    protected $casts = [
 
    ];

    public function incrementUsageCount()
    {
        if ($this->usage_limit !== null && $this->usage_count < $this->usage_limit) {
            $this->usage_count++;
            $this->save();
            return true;
        }
        return false; // Usage limit reached or not set
    }



    public function calculateFinalValue($cartTotal)
    {
        if ($this->type === 'percentage') {
            // Calculate discount amount based on percentage
            $discount = ($this->value / 100) * $cartTotal;
        } elseif ($this->type === 'fixed') {
            // Fixed discount
            $discount = $this->value;
        } else {
            // Unsupported promo type
            return false;
        }

        // Calculate final total after discount
        $finalTotal = $cartTotal - $discount;

        return $finalTotal;
    }

}

