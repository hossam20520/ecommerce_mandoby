<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class Mandobs extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        // Schema::create('mandobs', function (Blueprint $table) {
    
        //     $table->engine = 'InnoDB';
		// 	$table->integer('id', true);
       
        //     // $table->enum('type', ['percentage', 'fixed']);
        //     // $table->decimal('value', 10, 2);
        //     // $table->dateTime('expiry_date')->nullable();
        //     // Add other fields as needed for your promo logic
        //     $table->integer('usage_limit')->nullable()->default(1);
        //     $table->integer('usage_count')->nullable()->default(0);


        //     $table->decimal('min_cart_value', 10, 2)->nullable();
         
        //     $table->timestamps();
        //     $table->softDeletes(); // If you want soft deletion
        // }); 
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
