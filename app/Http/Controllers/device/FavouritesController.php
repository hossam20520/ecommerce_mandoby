<?php

namespace App\Http\Controllers\device;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use App\Models\User;
use Illuminate\Support\Facades\Auth;
use App\utils\helpers;

use App\Models\Favourit;
use App\Models\Product;
use App\utils\ApiResponse;

class FavouritesController extends Controller
{






    public function AddFavourites( Request $request  )
    {
        // Get the authenticated user
        $user = Auth::user();

        // Check if the user is authenticated
        if ($user) {
            // Find the product
            $product = Product::find($request->id );

            // Check if the product exists
            if ($product) {
                // Check if the product is not already favorited by the user
                if (!$user->favourits()->where('deleted_at' , '=' , null)->where('product_id',$request->id)->exists()) {
                    // Add the product to the user's favourites
                    $favourite = new Favourit();
                    $favourite->user_id = $user->id;
                    $favourite->product_id = $request->id;
                    $favourite->save();


                   return ApiResponse::SuccessResponseStatus(  "Added"  ,'Success', 'Success');
                    // return response()->json(['message' => 'Product added to favourites']);
                }
                   return ApiResponse::SuccessResponseStatus(  "Added"  ,'Success', 'Success');
                // return response()->json(['message' => 'Product already in favourites']);
            }

            // return response()->json(['message' => 'Product not found'], 404);
            return ApiResponse::SuccessResponseStatus( "not_found"  ,'Product Not Found', 'Success');
        }

        return response()->json(['message' => 'User not authenticated'], 401);
    }





    public function GetFavourites(Request $request)
    {
       
        $helpers = new helpers();
        $auth_user = Auth::user();
        $user = User::find($auth_user->id); // Replace $userId with the specific user's ID

        if ($user) {
            // Retrieve favourited products for this user
            $favouritedProducts = $user
                ->favourits()
                ->whereNull('deleted_at')
                ->with('product')
                ->get();
                
            // Access the products
            $data = array();
            foreach ($favouritedProducts as $favourit) {
                $product = $favourit->product;
                // Do something with $product
                $data[] =  app('App\Http\Controllers\device\ProductsController')->ProductDetail($product['id']);
            }
            

            return response()->json(['wishlist' => $data   ], 200);
          
        }
    }



    public function RemoveProduct(Request $request){

         $user = Auth::user();
         $product_id = $request->id;
        $removed = Favourit::removeFromFavorites( $user->id, $product_id);

        if ($removed) {
          return ApiResponse::SuccessResponseStatus(  "Removed"  ,'Success', 'Success');
        } else {
            return ApiResponse::SuccessResponseStatus(  "Removed"  ,'Success', 'Success');
        }



    }
}
