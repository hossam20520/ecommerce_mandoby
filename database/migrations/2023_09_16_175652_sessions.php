<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class Sessions extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('sessions', function (Blueprint $table) {
            $table->engine = 'InnoDB';
            $table->integer('id', true);
            $table->integer('user_id')->nullable()->index('user_id');
            $table->text('session_id')->nullable();
            $table->text('order_id')->nullable();
            $table->text('status')->nullable();
            $table->text('address')->nullable();
            $table->text('phone')->nullable();
            $table->text('country')->nullable();
            $table->text('city')->nullable();
            $table->text('email')->nullable();
            
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
