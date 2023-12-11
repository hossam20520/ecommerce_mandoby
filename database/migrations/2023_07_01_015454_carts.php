<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class Carts extends Migration
{
    
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('carts', function (Blueprint $table) {
            $table->engine = 'InnoDB';
			$table->integer('id', true);
            // $table->integer('product_id')->nullable()->index('product_id');
            $table->integer('user_id')->nullable()->index('user_id');
            $table->integer('order_id')->nullable()->index('order_id');
            // $table->float('qty', 10, 0)->nullable()->default(1);
            // $table->float('discount', 10, 0)->nullable()->default(0);
            $table->float('total', 10, 0)->nullable()->default(0);
            $table->float('discounted_value', 10, 0)->nullable()->default(0);
            
            $table->text('promo_code')->nullable();
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
