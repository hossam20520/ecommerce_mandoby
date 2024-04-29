<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class Attendance extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {

   
        Schema::create('attendances', function (Blueprint $table) {
            $table->engine = 'InnoDB';
			$table->integer('id', true);
			$table->string('user_id', 192)->nullable();
            $table->string('location_lat', 192)->nullable();
            $table->string('location_lng', 192)->nullable();
            $table->string('time', 192)->nullable();
            $table->string('date', 192)->nullable();
            $table->string('type', 192)->nullable();
            $table->string('status', 192)->nullable();
            
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
