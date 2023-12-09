<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class Addresses extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('addresses', function (Blueprint $table) {
            $table->engine = 'InnoDB';
            $table->integer('id', true);
            $table->text('address')->nullable();
            $table->text('phone')->nullable();
            $table->text('city')->nullable();
            $table->integer('user_id')->nullable()->index('user_id');
            $table->integer('selected_as_default')->nullable();
            $table->text('note')->nullable();
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
 
    }
}
