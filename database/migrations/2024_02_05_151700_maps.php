<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class Maps extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {


        Schema::create('maps', function (Blueprint $table) {
            $table->engine = 'InnoDB';
			$table->integer('id', true);
 
            $table->text('name')->nullable();
            $table->text('lat')->nullable();
            $table->text('lng')->nullable();

        
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
