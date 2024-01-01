<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class ChangeForeignKeySalesTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::table('sales', function (Blueprint $table) {
            $table->dropForeign('sale_client_id'); // Drop the existing foreign key constraint
            $table->foreign('client_id', 'sale_client_id')->references('id')->on('users')->onUpdate('RESTRICT')->onDelete('RESTRICT');
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::table('sales', function (Blueprint $table) {
            $table->dropForeign('sale_client_id'); // Drop the modified foreign key constraint
            $table->foreign('client_id', 'sale_client_id')->references('id')->on('clients')->onUpdate('RESTRICT')->onDelete('RESTRICT');
        });
    }
}
