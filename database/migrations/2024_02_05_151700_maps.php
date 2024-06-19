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
 
            $table->text('Point_X_Geo')->nullable();
            $table->text('Point_Y_Geo')->nullable();
            $table->text('Gov_Name')->nullable();
            $table->text('Section')->nullable();
            $table->text('Shiakha_Name')->nullable();
            $table->text('Zone_Name')->nullable();
            $table->text('Area_Type')->nullable();
            $table->text('Outlet_Name')->nullable();
            $table->text('Outlet_Type')->nullable();
            $table->text('Resturant_Classification')->nullable();
            $table->text('Bld')->nullable();
            $table->text('Street')->nullable();
            $table->text('Mobile')->nullable();
            $table->text('Contact')->nullable();

            $table->text('google_map')->nullable()->default("no");
            $table->text('assigned')->nullable()->default("no");

            $table->text('assigned_s')->nullable()->default("no");

            
        
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
