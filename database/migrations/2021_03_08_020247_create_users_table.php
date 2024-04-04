<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateUsersTable extends Migration {

	/**
	 * Run the migrations.
	 *
	 * @return void
	 */
	public function up()
	{
		Schema::create('users', function(Blueprint $table)
		{
			$table->engine = 'InnoDB';
			$table->integer('id', true);
			$table->string('area_name');
			$table->string('bussiness_type');
			$table->string('location_lat');
			$table->string('location_long');
			$table->string('address');
			$table->string('bussiness_name');

			$table->string('firstname');
			$table->string('lastname');
			$table->string('username', 192);
			$table->string('email', 192);
			$table->string('password');
			$table->string('avatar')->nullable();
			$table->string('phone', 192);
			$table->integer('role_id');
			$table->string('code')->nullable();
			$table->boolean('statut')->default(1);
			
			$table->string('area_id')->nullable();
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
		Schema::drop('users');
	}

}
