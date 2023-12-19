<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class Orders extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
 
     Schema::create('orders', function (Blueprint $table) {
            $table->engine = 'InnoDB';
			$table->integer('id', true);
            $table->integer('user_id_action')->nullable()->index('user_id_action');
            $table->integer('user_id')->nullable()->index('user_id');
            $table->text('order_id')->nullable();
            $table->string('start_time', 100);
            $table->string('end_time', 100);
            $table->string('received_time_warehouse', 100);
            $table->string('delivery_time', 100);
            $table->float('paid_cash', 10, 0);
            $table->float('total', 10, 0);
            $table->text('returned_items')->nullable();
            $table->string('payment_type', 100);
            $table->text('image');
            $table->string('status', 100);
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
