<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class Survey extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {


        Schema::create('surveys', function(Blueprint $table)
		{
			$table->engine = 'InnoDB';
			$table->integer('id', true);
            $table->string('name')->nullable();
            $table->string('image')->nullable();
            $table->string('location_lat')->nullable();
            $table->string('location_lng')->nullable();
            $table->string('bussiness_name')->nullable();
            
            
            $table->string('nameselectaStatus')->nullable();
            $table->string('city')->nullable();
            $table->string('area')->nullable();
            $table->string('DIDMeatResponsiblePerson')->nullable();
            $table->string('NameResponsible')->nullable();
            $table->string('Phone')->nullable();
            $table->string('activityType')->nullable();
            $table->string('address_Detail')->nullable();
            $table->string('delevery_detail')->nullable();
            $table->string('reasonVisit')->nullable();
            $table->string('usingApplication')->nullable();
            $table->string('milkused')->nullable();
            $table->string('kreemUsed')->nullable();
            $table->string('spices')->nullable();
            $table->string('cheeseUsed')->nullable();
            $table->string('SelectedBatter')->nullable();
            $table->string('oilUsed')->nullable();
            $table->string('teaused')->nullable();
            $table->string('seeeds')->nullable();
            $table->string('sauce')->nullable();
            $table->string('sauceCompany')->nullable();
            $table->string('watergasused')->nullable();
            $table->string('pastaUsed')->nullable();
            $table->string('bonUsed')->nullable();
            $table->string('branchNumber')->nullable();
            $table->string('summryVisit')->nullable();
            $table->string('productUsesClient')->nullable();
            $table->string('activity')->nullable();
            $table->string('task_id')->nullable();
            
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
