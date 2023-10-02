<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateDeferredsTable extends Migration {

	/**
	 * Run the migrations.
	 *
	 * @return void
	 */
	public function up()
	{
		Schema::create('deferreds', function(Blueprint $table)
		{
			$table->engine = 'InnoDB';
			$table->integer('id', true);
			$table->date('date');
			$table->integer('seller_id')->index('seller_id');
			$table->float('amount', 10, 0);
			$table->integer('customer_id')->index('customer_id');
			$table->date('paypackdate')->nullable();
			$table->boolean('payed')->default(0);
			$table->boolean('verified')->default(0);
			$table->text('products')->nullable();
			$table->text('note')->nullable();
			$table->string('phone', 192);
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
		Schema::drop('deferreds');
	}

}
