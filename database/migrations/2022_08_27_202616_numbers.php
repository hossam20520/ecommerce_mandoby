<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class Numbers extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('numbers', function(Blueprint $table)
		{
			$table->engine = 'InnoDB';
			$table->integer('id', true);
			$table->string('serial', 192);
			$table->string('number', 192);
			$table->boolean('is_active')->nullable()->default(1);
            $table->boolean('is_Citizian')->nullable()->default(0);
            $table->string('year', 100);
            $table->string('month', 100);
            $table->date('date')->nullable();
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
        Schema::drop('numbers');
    }
}
