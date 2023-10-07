<?php

use Illuminate\Support\Facades\Route;
use Illuminate\Support\Facades\Storage;
use App\Models\Slider;
/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| contains the "web" middleware group. Now create something great!
|
 */

//------------------------------------------------------------------\\

Route::post('/login', [
    'uses' => 'Auth\LoginController@login',
    'middleware' => 'Is_Active',
]);

Route::get('password/find/{token}', 'PasswordResetController@find');

//------------------------------------------------------------------\\

$installed = Storage::disk('public')->exists('installed');

if ($installed === false) {
    Route::get('/setup', [
        'uses' => 'SetupController@viewCheck',
    ])->name('setup');

    Route::get('/setup/step-1', [
        'uses' => 'SetupController@viewStep1',
    ]);

    Route::post('/setup/step-2', [
        'as' => 'setupStep1', 'uses' => 'SetupController@setupStep1',
    ]);

    Route::post('/setup/testDB', [
        'as' => 'testDB', 'uses' => 'TestDbController@testDB',
    ]);

    Route::get('/setup/step-2', [
        'uses' => 'SetupController@viewStep2',
    ]);

    Route::get('/setup/step-3', [
        'uses' => 'SetupController@viewStep3',
    ]);

    Route::get('/setup/finish', function () {

        return view('setup.finishedSetup');
    });

    Route::get('/setup/getNewAppKey', [
        'as' => 'getNewAppKey', 'uses' => 'SetupController@getNewAppKey',
    ]);

    Route::get('/setup/getPassport', [
        'as' => 'getPassport', 'uses' => 'SetupController@getPassport',
    ]);

    Route::get('/setup/getMegrate', [
        'as' => 'getMegrate', 'uses' => 'SetupController@getMegrate',
    ]);

    Route::post('/setup/step-3', [
        'as' => 'setupStep2', 'uses' => 'SetupController@setupStep2',
    ]);

    Route::post('/setup/step-4', [
        'as' => 'setupStep3', 'uses' => 'SetupController@setupStep3',
    ]);

    Route::post('/setup/step-5', [
        'as' => 'setupStep4', 'uses' => 'SetupController@setupStep4',
    ]);

    Route::post('/setup/lastStep', [
        'as' => 'lastStep', 'uses' => 'SetupController@lastStep',
    ]);

    Route::get('setup/lastStep', function () {
        return redirect('/setup', 301);
    });

} else {


    
    // Route::get('/language/{lang}', function (Request $request , $lang) {

    //     if( $lang){
            
    //         if( $lang == "ar" ||  $lang == "en" ){
    //         App::setLocale( $lang);
    //         session()->put('locale',  $lang); 

    //         }
    //     }
    //     return redirect()->route('home'); 
    //     // return  redirect()->back(); 
    //     // return back();   
    // })->name('change_lang');;


    

    Route::get('/exportcsv' ,     'HomeControllerFront@exportcsv')->name('exportcsv');

    
    Route::get('/export' ,     'HomeControllerFront@export')->name('exportview');

    // Route::get('/profile' ,     'HomeControllerFront@profile')->name('profile');

    // Route::get('/vendor/{id}' ,     'HomeControllerFront@vendor')->name('vendor');

    
    // Route::get('/' ,     'HomeControllerFront@home')->name('home');

    // Route::get('/cart' ,     'HomeControllerFront@cart')->name('cart');
        

    // Route::get('/shop' ,     'HomeControllerFront@shop')->name('shop');


    // Route::get('/product/{id}' ,     'HomeControllerFront@product')->name('product');
     
    // Route::get('/search' ,     'HomeControllerFront@search')->name('search');
                                               
    // Route::get('/wishlist' ,     'HomeControllerFront@wishlist')->name('wishlist');


    // Route::get('/checkout' ,     'HomeControllerFront@checkout')->name('checkout');

    // Route::get('/contact' ,     'HomeControllerFront@contact')->name('contact');


    // Route::get('/auth/login' ,     'HomeControllerFront@login')->name('login');


    //    Route::get('/auth/register' ,     'HomeControllerFront@register')->name('register');


    // Route::get('/cart', function () {
    //     return view("front.cart");
    // })->name('cart');


    // Route::get('/checkout', function () {
    //     return view("front.checkout");
    // })->name('checkout');


    // Route::get('/shop', function () {
    //     return view("front.shop");
    // })->name('shop');
    // Route::get('/contact', function () {
    //     return view("front.contact");
    // })->name('contact');


    // Route::get('/profile', function () {
    //     return view("front.profile");
    // })->name('profile');



    // Route::get('/store', function () {
    //     return view("front.vendor");
    // })->name('store');



    // Route::get('/product/{id}', function () {
    //     return view("front.product");
    // })->name('product');


    // Route::get('/auth/login', function () {
    //     return view("front.login");
    // })->name('login');

    // Route::get('/chat', function () {
    //     return view("front_old.chat");
    // })->name('chat');


    // Route::get('/messages', function () {
    //     return view("front.messages");
    // })->name('messages');

    // Route::get('/auth/register', function () {
    //     return view("front.register");
    // })->name('register');

    Route::any('/setup/{vue}', function () {
        abort(403);
    });
}

//------------------------------------------------------------------\\
// Route::group(['middleware' => ['auth' ] ], function () {




// });

Route::group(['middleware' => ['auth', 'Is_Active']], function () {

    Route::get('/login', function () {
        $installed = Storage::disk('public')->exists('installed');
        if ($installed === false) {
            return redirect('/setup');
        } else {
            return redirect('/login');
        }

        
    });


    Route::get('/{vue?}',
        function () {
            $installed = Storage::disk('public')->exists('installed');
            if ($installed === false) {
                return redirect('/setup');
            } else {
                return view('layouts.master');
            }
        })->where('vue', '^(?!setup|update|password).*$');


    });
    
    Auth::routes([
        'register' => false,
    ]);


//------------------------------------------------------------------\\

Route::get('/update', 'UpdateController@viewStep1');

Route::get('/update/finish', function () {

    return view('update.finishedUpdate');
});

Route::post('/update/lastStep', [
    'as' => 'update_lastStep', 'uses' => 'UpdateController@lastStep',
]);


