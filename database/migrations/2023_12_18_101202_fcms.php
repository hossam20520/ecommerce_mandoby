<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class Fcms extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('fcms', function (Blueprint $table) {
            $table->engine = 'InnoDB';
			$table->integer('id', true);
            $table->integer('user_id')->nullable()->index('user_id');
            $table->text('device_token')->nullable();
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
