<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class Reviews extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {

        Schema::create('reviews', function (Blueprint $table) {
            $table->engine = 'InnoDB';
            $table->integer('id', true);
            $table->integer('user_id')->nullable()->index('user_id');
            $table->string('product_id', 192)->nullable();
            $table->string('review', 500)->nullable();
            $table->string('count')->nullable()->default(0);
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
