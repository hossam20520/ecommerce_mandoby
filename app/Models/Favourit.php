<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Carbon\Carbon;
class Favourit extends Model
{ 

    protected $table = 'favourits';
    protected $dates = ['deleted_at'];

    protected $fillable = [
          'user_id',  
         'product_id'   
    ];


    public function user()
    {
        return $this->belongsTo(User::class, 'user_id', 'id');
    }

   
    public function product()
    {
        return $this->belongsTo(Product::class, 'product_id', 'id');
    }




    public static function removeFromFavorites($userId, $productId)
    {
        // Find the favorited product by user_id and product_id
        $favorite = self::where('user_id', $userId)
                        ->where('product_id', $productId)->update([
                            'deleted_at' => Carbon::now(),
                        ]);

        // if ($favorite) {
        //     // Remove the found favorite
        //     $favorite->delete();
        //     return true; // Indicate successful removal
        // }

        return true; // Indicate that the product was not found in favorites
    }
    

  
}
