<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class Governments extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
   
        Schema::create('governments', function (Blueprint $table) {
            $table->engine = 'InnoDB';
			$table->integer('id', true);
 
            $table->text('ar_name')->nullable();
            $table->text('en_name')->nullable();
            $table->text('code')->nullable();

        
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
