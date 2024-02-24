<?php

namespace App\Http\Controllers\device;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use App\Models\Product;
use App\utils\helpers;
use App\Models\Setting;
use App\Models\User;
use App\Models\Cart;
use App\utils\ApiResponse;
use App\Models\product_warehouse;
use Illuminate\Support\Facades\Auth;
class CartController extends Controller
{
    public function addToCart(Request $request)
    {
        $user = Auth::user();

        $product_id = $request->id;
        // $product = Product::findOrFail($productId); // Fetch the product details

        $settings = Setting::where('deleted_at', '=', null)->first();
        $helpers = new helpers();

        $product_warehouse_data = product_warehouse::with('warehouse', 'product', 'productVariant')
            ->where('warehouse_id', $settings->warehouse_id)
            ->where('deleted_at', '=', null)
            ->whereHas('product', function ($query) use ($product_id) {
                $query->where('id', $product_id);
            })
            ->where('qte', '>', 0)
            ->first();

        if (!$product_warehouse_data) {
            return ApiResponse::errorNotFound('Product Not Found', 'المنتج غير متوفر');
        }

        $item = $helpers->singleProduct($product_warehouse_data);
        // $cart = Cart::firstOrCreate(['user_id' => $user->id]); // Assuming a user is authenticated

        $cart = Cart::where('user_id', $user->id)
            ->whereNull('order_id')
            ->first();

        if (!$cart) {
            $cart = Cart::create([
                'user_id' => $user->id,
                // Other cart attributes if required
            ]);
        }
        $qty = $request->input('qty', 1); // Assuming you get the quantity from the request
        $price = $item['Net_price']; // Assuming the product has a 'price' attribute

        $discount = $item['discount'];

        $cart->addProductToCart($product_id, $qty, $price, $discount);

        $product = $this->GetProductFromStock($product_id);
        return response()->json($product);
    }

    public function IncreaseProductQT(Request $request)
    {
        $product_id = $request->id;

        $productexist =   app('App\Http\Controllers\device\ProductsController')->ProducctInStock($product_id);
       

        $user = Auth::user();
        $cart = Cart::where('user_id', $user->id)->whereNull('order_id')->first();

        if($productexist){
            if($cart){
                $cart->increaseProductQuantity($product_id);
            }else{
                $this->addToCart($request);
            }
            
          } 
       

        // $product  = $this->GetProductFromStock($product_id);
        return response()->json([
            'cart' => $this->getCartData($user->id),
            // Include other data as needed
        ]);

        //   return response()->json($cartdata );
    }

    public function decreaseProductQT(Request $request)
    {
        $product_id = $request->id;
        $user = Auth::user();
        $cart = Cart::where('user_id', $user->id)->whereNull('order_id')->first();
        $cart->decreaseProductQuantity($product_id);

        return response()->json([
            'cart' => $this->getCartData($user->id),
            // Include other data as needed
        ]);
    }

    public function removeProductfromCart(Request $request)
    {
        $product_id = $request->id;
        $user = Auth::user();
        $cart = Cart::where('user_id', $user->id)->whereNull('order_id')->first();
        // $product  = $this->GetProductFromStock($product_id);
        $cart->removeProductFromCart($product_id);

        // return response()->json( $cart);

        return response()->json([
            'cart' => $this->getCartData($user->id),
            // Include other data as needed
        ]);
    }

    public function getCartData($user_id)
    {

    

       $user = User::findOrFail($user_id);

        // $cart = $user->cart;
        // $cart = $user->cart()->first();
        $cart = $user->cart()->where('order_id', null)->first();
        
       

        if ($cart) {
            // If the user has a cart, load its associated items and products
            $cartWithItems = $cart->load('cartItems.product');

            // Accessing cart details
            $cartId = $cartWithItems->id;
            $cartTotal = $cartWithItems->total;

            // Accessing cart items and their associated products
            $cartItems = $cartWithItems->cartItems;
            $data = [];
            foreach ($cartItems as $cartItem) {
                $cartItem->porduct_item = $this->GetProductFromStock($cartItem->product->id);
            
               }

            return $cartWithItems;
        } else {
            // Handle case where the user does not have a cart
            return ApiResponse::errorNotFound('User not Have a cart', 'المستخدم ليس لدية سلة');
        }
    }







    public function CartByOrderId($user_id , $order_id)
    {

    

        $user = User::findOrFail($user_id);

 
        $cart = $user->cart()->where('order_id',$order_id )->first();
       

        if ($cart) {
            // If the user has a cart, load its associated items and products
            $cartWithItems = $cart->load('cartItems.product');

            // Accessing cart details
            $cartId = $cartWithItems->id;
            $cartTotal = $cartWithItems->total;

            // Accessing cart items and their associated products
            $cartItems = $cartWithItems->cartItems;
            $data = [];
            foreach ($cartItems as $cartItem) {
                $cartItem->porduct_item = app('App\Http\Controllers\device\ProductsController')->ProductDetail( $cartItem->product->id)  ;
            
            }

            return $cartWithItems;

        } else {
            // Handle case where the user does not have a cart
            return ApiResponse::errorNotFound('User not Have a cart', 'المستخدم ليس لدية سلة');
        }
    }





    

    public function getCartByUserId(Request $request)
    {
        // $carttt =   Cart::with('user')->where('order_id' , '=' , null)->where('user_id' ,$user->id )->first();
      
        $userauth = Auth::user(); // Fetch the user by ID
        $user = User::findOrFail($userauth->id);
        // Retrieve the user's cart, if available
        $cart = $user->cart()->where('order_id', null)->first();
        
        // return getTotalItemsCart();
    
        if ($cart) {
            // If the user has a cart, load its associated items and products
            $cartWithItems = $cart->load('cartItems.product');

            // Accessing cart details
            $cartId = $cartWithItems->id;
            $cartTotal = $cartWithItems->total;
           
            // Accessing cart items and their associated products
            $cartItems = $cartWithItems->cartItems;
            $data = [];
           
            foreach ($cartItems as $cartItem) {
                // $product = $this->GetProductFromStock($cartItem->product->id);
                // $item['products'] = $this->GetProductFromStock($cartItem->product->id);
                // $item['cart_items'] = $cartWithItems;
                $cartItem->in_stock =  app('App\Http\Controllers\device\ProductsController')->ProducctInStock($cartItem->product->id);
                $cartItem->porduct_item = $this->GetProductFromStock($cartItem->product->id);
                
                

                // $productId = $cartItem->product->id;
                // $productName = $cartItem->product->name;
                // $quantity = $cartItem->qty;
                // $price = $cartItem->price;
                // $data[] = $item;
                // Access other properties as needed
            }
        
            // foreach ($cartItems as $cartItem) {

            // }

            //    $cartDetail = [
            //     "id"=> $cartWithItems->id,
            //     "order_id"=> $cartWithItems->order_id,
            //     "total"=> $cartWithItems->total,
            //       ];

            // Return or do something with the cart and its items
            return response()->json([
                'cart' => $cartWithItems,
                // Include other data as needed
            ]);
        } else {
            // Handle case where the user does not have a cart
            return ApiResponse::errorNotFound('User not Have a cart', 'المستخدم ليس لدية سلة');
        }
    }






    public function GetProductFromStock($product_id)
    {
        $settings = Setting::where('deleted_at', '=', null)->first();
        $helpers = new helpers();

        // return $product_id;
        $product_warehouse_data = product_warehouse::with('warehouse', 'product', 'productVariant')
            ->where('warehouse_id', $settings->warehouse_id)
            ->where('deleted_at', '=', null)
            ->whereHas('product', function ($query) use ($product_id) {
                $query->where('id', $product_id);
            })
            ->first();

            // $product_warehouse_data = product_warehouse::with('warehouse', 'product', 'productVariant')
            // ->where('warehouse_id', $settings->warehouse_id)
            // ->where('deleted_at', '=', null)
            // ->whereHas('product', function ($query) use ($product_id) {
            //     $query->where('id', $product_id);
            // })
            // ->where('qte', '>', 0)
            // ->first();

        $item = $helpers->singleProduct($product_warehouse_data);

        return $item;
    }
}
