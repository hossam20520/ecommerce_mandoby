<?php

use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;

class UserSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
       // Insert some stuff
        DB::table('users')->insert(
            array(
                'id' => 1,
                'firstname' => 'hossam',
                'lastname' => 'hassan',
                'username' => 'hossam20520',
                'email' => 'admin@example.com',
                'password' => '$2y$10$IFj6SwqC0Sxrsiv4YkCt.OJv1UV4mZrWuyLoRG7qt47mseP9mJ58u',
                'avatar' => '7148849783217331_2542389902715483_4340507955225952256_o (1).jpg',
                'phone' => '0123456789',
                'role_id' => 1,
                'statut' => 1,
            )
        );
    }
}
