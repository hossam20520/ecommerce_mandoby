<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Cart extends Model
{
    protected $table = 'carts';

 
    protected $dates = ['deleted_at'];

    protected $fillable = [
        'user_id', 'order_id', 'total' , 'promo_code'  ,
    ];
    public function CartItems()
    {
        return $this->hasMany('App\Models\Cartitem');
    }
    
    public function user()
    {
        return $this->belongsTo(User::class , 'user_id');
    }

    public function addProductToCart($product_id, $qty, $price , $discount)
    {
        // Check if the product already exists in the cart
        $existingCartItem = $this->cartItems()->where('product_id', $product_id)->first();

        if ($existingCartItem) {
            // If the product exists, update the quantity and subtotal
            $existingCartItem->qty += $qty;
            $existingCartItem->discount = $discount;
            $existingCartItem->subtotal = $existingCartItem->qty * $price;
            $existingCartItem->save();
        } else {
            // If the product doesn't exist, create a new cart item
            $newCartItem = new CartItem([
                'product_id' => $product_id,
                'qty' => $qty,
                'price' => $price,
                // 'subtotal' => $qty * $price,
                'subtotal' => ($qty * $price) - $discount,
                'discount' => $discount,
            ]);
            $this->cartItems()->save($newCartItem);
        }

        // Recalculate and update the total of the cart
        $this->calculateTotal();
        $this->save();
    }

    private function calculateTotal()
    {
        $this->total = $this->cartItems()->sum('subtotal');
        $totalDiscount = $this->getTotalDiscount();

        // // Subtract total discounts from subtotal
        // $this->total = $subtotal - $totalDiscount;
    
        // // Apply additional discount if a promo code is used
        // if (!empty($this->promo_code)) {
        //     // Apply promo code discount logic here
        //     // For example: $this->total -= $promoCodeDiscountAmount;
        // }

    }


  public function ProductIsInCart($product_id){
    $cartItem = $this->cartItems()->where('product_id', $product_id)->first();

    if($cartItem ){
        return true;
    }else{
        return false;
    }
  }

    public function increaseProductQuantity($product_id, $qty = 1)
{



    $cartItem = $this->cartItems()->where('product_id', $product_id)->first();

    if ($cartItem) {
        $cartItem->qty += $qty;
        $cartItem->subtotal = ($cartItem->qty * $cartItem->price) - $cartItem->discount;
        $cartItem->save();
        $this->calculateTotal();
        $this->save();
    }
}

public function decreaseProductQuantity($product_id, $qty = 1)
{
    $cartItem = $this->cartItems()->where('product_id', $product_id)->first();

    if ($cartItem) {
        if ($cartItem->qty > $qty) {
            $cartItem->qty -= $qty;
            $cartItem->subtotal = ($cartItem->qty * $cartItem->price) - $cartItem->discount;
            $cartItem->save();
            $this->calculateTotal();
            $this->save();
        } else {
            $this->removeProductFromCart($product_id);
        }
    }
}

public function removeProductFromCart($product_id)
{
    $cartItem = $this->cartItems()->where('product_id', $product_id)->first();

    if ($cartItem) {
        $cartItem->delete();
        $this->calculateTotal();
        $this->save();
    }

    
}


public function getCartWithItems()
{
    return $this->with('cartItems.product')->find($this->id);
}



public function getTotalDiscount()
{
    $totalDiscount = 0;

    foreach ($this->cartItems as $cartItem) {
        $totalDiscount += $cartItem->discount;
    }

    return $totalDiscount;
}

 
 
public function applyPromoCode($promoCode)
{
    // Check if the promo code exists and is valid
    // $promo = Promo::where('code', $promoCode)->where('expiry_date', '>=', now())->first();

    $cartTotal = $this->total;
    $promo = Promo::where('code', $promoCode)
    ->where('expiry_date', '>=', now())
    ->where(function ($query) {
        $query->whereNull('usage_limit')
            ->orWhereColumn('usage_limit', '>', 'usage_count');
    })
    ->first();


    if ($promo) {
        // Check if the promo has a minimum cart value requirement
        if ($promo->min_cart_value !== null && $cartTotal < $promo->min_cart_value) {
            return false; // Cart total is less than the required minimum cart value for the promo
        }

    }



    if ($promo) {
        // Apply discount based on promo type (percentage or fixed amount)
        if ($promo->type === 'percentage') {
            $this->total -= ($this->total * ($promo->value / 100));
        } elseif ($promo->type === 'fixed') {
            $this->total -= $promo->value;
        }

        $this->promo_code = $promoCode;
        $promo->incrementUsageCount();
        $this->save();
        return true; // Successful application
    }
    return false; // Invalid or expired promo code
}

}
 

 