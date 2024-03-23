<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class Tasks extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('tasks', function (Blueprint $table) {
            $table->engine = 'InnoDB';
			$table->integer('id', true);
            $table->integer('user_id')->nullable()->index('user_id');
            $table->text('location_id')->nullable();
            $table->text('from')->nullable();
            $table->text('to')->nullable();
            $table->string('status', 100);
 
            $table->text('current_lat')->nullable();
            $table->text('current_lng')->nullable();
         
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
