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
            $table->date('start_time')->nullable();
            $table->date('end_time')->nullable();
            $table->date('received_time_warehouse')->nullable();
            $table->date('delivery_time')->nullable();
            $table->float('paid_cash', 10, 0);
            $table->float('total', 10, 0);
            $table->text('returned_items')->nullable();
            $table->string('payment_type', 100);
            $table->text('image');
            $table->string('status', 100);
            $table->string('odoo_ref', 192)->nullable();
            $table->text('reason')->nullable();
            
            $table->text('RWT')->nullable();

            $table->text('location_long')->nullable();
            $table->text('location_lat')->nullable();
            $table->text('CN_date')->nullable();
     
            
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
