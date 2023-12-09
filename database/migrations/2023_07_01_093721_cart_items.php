<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CartItems extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {

 
      
        Schema::create('cartitems', function (Blueprint $table) {
            $table->engine = 'InnoDB';
			$table->integer('id', true);
            $table->integer('product_id')->nullable()->index('product_id');
            $table->integer('cart_id')->nullable()->index('cart_id');
            $table->float('qty', 10, 0)->nullable()->default(1);
            $table->float('discount', 10, 0)->nullable()->default(0);
            $table->float('price', 10, 0)->nullable()->default(0);
            $table->float('subtotal', 10, 0)->nullable()->default(0);
			$table->timestamps(6);
			$table->softDeletes();
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        //
    }
}
