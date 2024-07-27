<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;

/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| is assigned the "api" middleware group. Enjoy building your API!
|
 */

 Route::post("/v1/sheet/save/", "GoogleSheetController@write");


 
 Route::get("device/dropdown/govs", "device\AuthController@getGovs");
 Route::get("device/dropdown/areas_id/{id}", "device\AuthController@getAreaByID");
 


 
/*auth middleware api passport token*/
Route::middleware('auth:api')->get('/user', function (Request $request) {
    return $request->user();
});

Route::post("device/code/confirm", "device\AuthController@confirmCode");

Route::get("device/cars", "device\AuthController@getCarModels");
Route::get("device/auth/reset/code/{phone}", "device\AuthController@ResetPhone");
 

Route::get("device/getClientinfo/{task_id}", "device\surveyController@getInfoDataClient");

Route::get('iot/test_api', 'device\AuthController@testiot');
Route::post('iot/lamp_state', 'device\AuthController@reseveState');


// Route::get('maps/view/data', 'MapsController@GetData');

Route::get('maps/view/data', 'MapsController@index');

Route::get('maps/view/data/test', 'MapsController@getRestaurantTestAPI');
Route::get('maps/view/data/testa', 'MapsController@getRestaurants');


Route::post('/v1/device/survey', 'device\surveyController@surveyData');





// Route::post("device/auth/login/", "device\AuthController@login");

Route::post("/v1/device/auth/login/", "device\AuthController@login");

Route::post("/v1/device/auth/register/", "device\AuthController@register");

Route::get("/v1/device/version/{version}", "device\AuthController@version");


Route::get("/v1/device/version/survey/{version}", "device\AuthController@versionSurvey");
Route::get("/v1/device/version/horeca/{version}", "device\AuthController@versionHoreca");

// device/products/category?SortField=id&SortType=desc&search=&limit=6&page=1&category_id=1



Route::get("/v1/device/product/{id}", "device\ProductsController@OneProduct");

Route::get("/v1/device/products/category/noauth", "device\ProductsController@GetProductsByCategory");

Route::get("/v1/device/products/noauth", "device\ProductsController@Products");

Route::get('/v1/device/all/products/noauth', 'device\ProductsController@GetAllProducts');

//--------------------------- Reset Password  ---------------------------


Route::get('/v1/device/getgovs', 'device\surveyController@getGoves');

Route::get('/v1/device/get/area', 'device\surveyController@getarea');

Route::post('/v1/device/add/client', 'device\surveyController@Addclient');

Route::get("/maps/get_data_view/data", "MapsController@getData_section");
Route::get("/maps/get_data_view_type/data", "MapsController@getData_section_type");
Route::group([
    'prefix' => 'password',
], function () {
    Route::post('create', 'PasswordResetController@create');
    Route::post('reset', 'PasswordResetController@reset');
});


Route::get("/v1/device/play", "device\PlayController@play");

Route::get('/v1/device/home/noauth', 'device\HomeController@HomePage');


Route::get("/v1/device/info/master", "device\surveyController@getDropDown");

Route::get("/v1/device/brands", "device\ProductsController@getBrands");
Route::get("/v1/device/products/brands/noauth", "device\ProductsController@GetProductsByBrand");


Route::get("/v1/device/ai/category/noauth", "device\HomeController@GetCategoryAi");






Route::middleware(['auth:api', 'Is_Active'])->group(function () {

    
    Route::post("/v1/odoo/order/create", "device\IntegrationController@CreateSale");

    Route::get("device/update/reciving/{id}", "device\mandob\OrdersController@updateArriveTime");



      Route::get("device/{task_id}/{location_lat}/{location_lng}", 'device\surveyController@updateSUrvey');

    

    

    Route::get("/v1/device/attendance/checkin/{type}", "device\AuthController@check_status");

    Route::post('/v1/device/checkin', 'device\AuthController@checkin');
   


    Route::post("/v1/dashboard/sync", "device\DashboardController@updateMasterData");

    Route::post("/v1/device/chat/ai/message", "device\ChatAiController@sendChat");

    
    Route::get("/v1/device/products/category", "device\ProductsController@GetProductsByCategory");


  
   Route::post("/v1/device/map/client/add", "device\mandob\OrdersController@addOneClient");

    

    Route::post("/v1/device/mandob/clients/add", "device\mandob\OrdersController@addClients");
    
 
    Route::get("/v1/device/products/", "device\ProductsController@Products");

    //
    // Route::get("/v1/device/sales/", "device\sales\TasksController@getTasks");

    Route::get("/v1/device/tasks/", "device\sales\TasksController@getTasks");


    Route::get("/v1/device/products/brand", "device\ProductsController@GetProductsByBrand");

    Route::get('/v1/device/home', 'device\HomeController@HomePage');

    Route::get('/v1/device/wishlist', 'device\FavouritesController@GetFavourites');

    Route::post('/v1/device/wishlist', 'device\FavouritesController@AddFavourites');
    Route::post('/v1/device/wishlist/delete', 'device\FavouritesController@RemoveProduct');


    Route::get('/v1/device/all/products', 'device\ProductsController@GetAllProducts');


    Route::get("device/profile", "device\AuthController@profile");
    Route::post("device/profile/image", "device\AuthController@changeImage");



    Route::post("device/survey/image", "device\AuthController@surveyImage");

   
    Route::post("device/profile/edit", "device\AuthController@EditProfile");


    Route::post("device/password/edit", "device\AuthController@changePassword");


    Route::post("/v1/device/cart/add", "device\CartController@addToCart");
    Route::post("/v1/device/cart/increase", "device\CartController@IncreaseProductQT");
    Route::get("/v1/device/cart", "device\CartController@getCartByUserId");

    Route::post("/v1/device/cart/decrease", "device\CartController@decreaseProductQT");

    Route::post("/v1/device/cart/remove", "device\CartController@removeProductfromCart");


    Route::post("/v1/device/checkout", "device\CheckoutController@checkout");

    Route::get("/v1/device/orders", "device\OrdersController@GetOrders");
    Route::get("/v1/device/order/{id}", "device\OrdersController@getorder");
    Route::post("/v1/device/notification", "device\NotificationsController@updateFcm");

    Route::get("/v1/device/mandob/orders", "device\mandob\OrdersController@GetOrders");


  Route::get("/v1/device/mandob/order/{id}", "device\mandob\OrdersController@OrderDetail");

  Route::post("/v1/device/mandob/order/accept", "device\mandob\OrdersController@acceptOrder");


  Route::post("/v1/device/mandob/order/pay", "device\mandob\OrdersController@pay");


  Route::post("/v1/device/mandob/bill/image", "device\mandob\OrdersController@addImage");




      //------------------------------- Ais--------------------------\
    //------------------------------------------------------------------\
    Route::resource('ais', 'AisController');
    Route::post('ais/delete/by_selection', 'AisController@delete_by_selection');
    

      //------------------------------- Orders--------------------------\
    //------------------------------------------------------------------\
    Route::resource('orders', 'OrdersController');
    Route::post('orders/delete/by_selection', 'OrdersController@delete_by_selection');

//   OrdersController

//   Route::get("/v1/device/checkout", "device\ProductsController@search");

  Route::post("/v1/device/promo", "device\CheckoutController@applyPromoCode");

    //------------------------------- Promos--------------------------\
    //------------------------------------------------------------------\
    Route::resource('promos', 'PromosController');
    Route::post('promos/delete/by_selection', 'PromosController@delete_by_selection');

    //------------------------------- Mandobs--------------------------\
    //------------------------------------------------------------------\
    Route::resource('mandobs', 'MandobsController');
    Route::post('mandobs/delete/by_selection', 'MandobsController@delete_by_selection');



    //------------------------------- Tasks--------------------------\
    //------------------------------------------------------------------\
    Route::resource('tasks', 'TasksController');
    Route::post('tasks/delete/by_selection', 'TasksController@delete_by_selection');



        //------------------------------- Attendances--------------------------\
    //------------------------------------------------------------------\
    Route::resource('attendances', 'AttendancesController');
    Route::post('attendances/delete/by_selection', 'AttendancesController@delete_by_selection');
    

    //------------------------------- Notifications--------------------------\
    //------------------------------------------------------------------\
    Route::resource('notifications', 'NotificationsController');
    Route::post('notifications/delete/by_selection', 'NotificationsController@delete_by_selection');

    //-------------------------- Clear Cache ---------------------------

    Route::get("Clear_Cache", "SettingsController@Clear_Cache");


    Route::resource('Numbers', 'NumbersController');


    //-------------------------- Reports ---------------------------

    Route::get("[report/client]", "ReportController@Client_Report");
    Route::get("report/client/{id}", "ReportController@Client_Report_detail");
    Route::get("report/client_Sales", "ReportController@Sales_Client");
    Route::get("report/client_payments", "ReportController@Payments_Client");
    Route::get("report/client_quotations", "ReportController@Quotations_Client");
    Route::get("report/client_returns", "ReportController@Returns_Client");
    Route::get("report/client_Top_Clients", "ReportController@TopCustomers");
    Route::get("report/TopProducts_year", "ReportController@Top_Products_Year");
    Route::get("report/TopProducts_Month", "ReportController@TopProducts_Month");
    Route::get("report/provider", "ReportController@Providers_Report");
    Route::get("report/provider/{id}", "ReportController@Provider_Report_detail");
    Route::get("report/provider_purchases", "ReportController@Purchases_Provider");
    Route::get("report/provider_payments", "ReportController@Payments_Provider");
    Route::get("report/provider_returns", "ReportController@Returns_Provider");
    Route::get("report/ToProviders", "ReportController@ToProviders");
    Route::get("report/Sales", "ReportController@Report_Sales");
    Route::get("report/Purchases", "ReportController@Report_Purchases");
    Route::get("report/Get_last_Sales", "ReportController@Get_last_Sales");
    Route::get("report/stock_alert", "ReportController@Products_Alert");
    Route::get("report/Payment_chart", "ReportController@Payment_chart");
    Route::get("report/Warehouse_Report", "ReportController@Warehouse_Report");
    Route::get("report/Sales_Warehouse", "ReportController@Sales_Warehouse");
    Route::get("report/Quotations_Warehouse", "ReportController@Quotations_Warehouse");
    Route::get("report/Returns_Sale_Warehouse", "ReportController@Returns_Sale_Warehouse");
    Route::get("report/Returns_Purchase_Warehouse", "ReportController@Returns_Purchase_Warehouse");
    Route::get("report/Expenses_Warehouse", "ReportController@Expenses_Warehouse");
    Route::get("report/Warhouse_Count_Stock", "ReportController@Warhouse_Count_Stock");
    Route::get("report/Warhouse_Value_Stock", "ReportController@Warhouse_Value_Stock");
    Route::get("report/report_today", "ReportController@report_today");
    Route::get("report/count_quantity_alert", "ReportController@count_quantity_alert");
    Route::get("report/ProfitAndLoss", "ReportController@ProfitAndLoss");
    Route::get("chart/SalesPurchasesChart", "ReportController@SalesPurchasesChart");
    Route::get("chart/report_with_echart", "ReportController@report_with_echart");
    Route::get("report/report_dashboard", "ReportController@report_dashboard");


    //------------------------------- CLIENTS --------------------------\\
    //------------------------------------------------------------------\\

    Route::resource('clients', 'ClientController');
    Route::get('clients/export/Excel', 'ClientController@exportExcel');
 
   

    Route::get('Get_Clients_Without_Paginate', 'ClientController@Get_Clients_Without_Paginate');
    Route::post('clients/delete/by_selection', 'ClientController@delete_by_selection');



    
    //------------------------------- Reportsales--------------------------\
    //------------------------------------------------------------------\
    Route::resource('Reportsales', 'ReportsalesController');
    Route::post('Reportsales/delete/by_selection', 'ReportsalesController@delete_by_selection');
    

    //------------------------------- Providers --------------------------\\
    //--------------------------------------------------------------------\\

    Route::resource('providers', 'ProvidersController');
    Route::get('providers/export/Excel', 'ProvidersController@exportExcel');
    Route::post('providers/import/csv', 'ProvidersController@import_providers');
    Route::post('providers/delete/by_selection', 'ProvidersController@delete_by_selection');


    //---------------------- POS (point of sales) ----------------------\\
    //------------------------------------------------------------------\\

    Route::post('pos/CreatePOS', 'PosController@CreatePOS');
    Route::post('pos/calculTotal', 'PosController@CalculGrandTotal');
    Route::get('getArticlesByCategory/{id}', 'PosController@getArticlesByCategory');
    Route::get('GetProductsByParametre', 'PosController@GetProductsByParametre');
    Route::get('pos/GetELementPos', 'PosController@GetELementPos');

    //------------------------------- PRODUCTS --------------------------\\
    //------------------------------------------------------------------\\




    //------------------------------- Surveys--------------------------\
    //------------------------------------------------------------------\
    Route::resource('surveys', 'SurveysController');
    Route::post('surveys/delete/by_selection', 'SurveysController@delete_by_selection');
 
    Route::get('survey/export/Excel', 'SurveysController@exportExcel');

    Route::resource('Products', 'ProductsController');
    Route::get('Products/export/Excel', 'ProductsController@export_Excel');
    Route::post('Products/import/csv', 'ProductsController@import_products');
    Route::get('Products/Warehouse/{id}', 'ProductsController@Products_by_Warehouse');
    Route::get('Products/Detail/{id}', 'ProductsController@Get_Products_Details');
    Route::get('Products/Stock/Alerts', 'ProductsController@Products_Alert');
    Route::get('Products/Get_element/barcode', 'ProductsController@Get_element_barcode');
    Route::post('Products/delete/by_selection', 'ProductsController@delete_by_selection');

    // Route::get('Products/filter/{id}/{input}', 'ProductsController@Filter_Products');


    //------------------------------- Category --------------------------\\
    //------------------------------------------------------------------\\

    Route::resource('categories', 'CategorieController');
    Route::post('categories/delete/by_selection', 'CategorieController@delete_by_selection');

    //------------------------------- Units --------------------------\\
    //------------------------------------------------------------------\\

    Route::resource('units', 'UnitsController');
    Route::get('Get_Units_SubBase', 'UnitsController@Get_Units_SubBase');
    Route::get('Get_sales_units', 'UnitsController@Get_sales_units');

    //------------------------------- Brands--------------------------\\
    //------------------------------------------------------------------\\
    Route::resource('brands', 'BrandsController');
    Route::post('brands/delete/by_selection', 'BrandsController@delete_by_selection');

    //------------------------------- Currencies --------------------------\\
    //------------------------------------------------------------------\\

    Route::resource('currencies', 'CurrencyController');
    Route::get('Get_Currencies/All', 'CurrencyController@Get_Currencies');
    Route::post('currencies/delete/by_selection', 'CurrencyController@delete_by_selection');


    //------------------------------- WAREHOUSES --------------------------\\

    Route::resource('warehouses', 'WarehouseController');
    Route::get('Get_Warehouses/All', 'WarehouseController@Get_Warehouses');
    Route::post('warehouses/delete/by_selection', 'WarehouseController@delete_by_selection');


        //------------------------------- Sliders--------------------------\
    //------------------------------------------------------------------\
    Route::resource('sliders', 'SlidersController');
    Route::post('sliders/delete/by_selection', 'SlidersController@delete_by_selection');






    //------------------------------- Maps--------------------------\
    //------------------------------------------------------------------\
    Route::resource('maps', 'MapsController');
    Route::post('maps/delete/by_selection', 'MapsController@delete_by_selection');



    Route::post('leads/import/csv', 'MapsController@import_leads');
   
    Route::get('Tasks/Detail/{id}', 'TasksController@getDetail');
   
    

    Route::post('maps/save/by_selection', 'MapsController@save_by_selection');


    //------------------------------- PURCHASES --------------------------\\
    //------------------------------------------------------------------\\

    Route::resource('purchases', 'PurchasesController');
    Route::get('purchases/Payments/{id}', 'PurchasesController@Get_Payments');
    Route::post('purchases/send/email', 'PurchasesController@Send_Email');
    Route::post('purchases/send/sms', 'PurchasesController@Send_SMS');
    Route::get('purchases/export/Excel', 'PurchasesController@exportExcel');
    Route::post('purchases/delete/by_selection', 'PurchasesController@delete_by_selection');



    
     //------------------------------- Shops --------------------------\
    //------------------------------------------------------------------\
    Route::resource('Shops', 'ShopsController');
    Route::get('Shops/export/Excel', 'ShopsController@export_Excel');
    Route::post('Shops/import/csv', 'ShopsController@import_shops');
    Route::post('Shops/delete/by_selection', 'ShopsController@delete_by_selection');
    Route::get('Shops/Detail/{id}', 'ShopsController@Get_Shops_Details');



    //------------------------------- Sreports--------------------------\
    //------------------------------------------------------------------\
    Route::resource('sreports', 'SreportsController');
    Route::post('sreports/delete/by_selection', 'SreportsController@delete_by_selection');


    //------------------------------- Payments  Purchases --------------------------\\
    //------------------------------------------------------------------------------\\

    Route::resource('payment/purchase', 'PaymentPurchasesController');
    Route::get('payment/purchase/Number/Order', 'PaymentPurchasesController@getNumberOrder');
    Route::get('payment/purchase/export/Excel', 'PaymentPurchasesController@exportExcel');
    Route::post('payment/purchase/send/email', 'PaymentPurchasesController@SendEmail');
    Route::post('payment/purchase/send/sms', 'PaymentPurchasesController@Send_SMS');

    //-------------------------------  Sales --------------------------\\
    //------------------------------------------------------------------\\

    Route::resource('sales', 'SalesController');
    Route::get('sales/Change_to_Sale/{id}', 'SalesController@Elemens_Change_To_Sale');
    Route::get('sales/payments/{id}', 'SalesController@Payments_Sale');
    Route::post('sales/send/email', 'SalesController@Send_Email');
    Route::post('sales/send/sms', 'SalesController@Send_SMS');
    Route::get('sales/export/Excel', 'SalesController@exportExcel');
    Route::post('sales/delete/by_selection', 'SalesController@delete_by_selection');
    Route::post('sales/assign/by_selection', 'SalesController@assgin_by_selection');

    //------------------------------- Payments  Sales --------------------------\\
    //------------------------------------------------------------------\\

    Route::resource('payment/sale', 'PaymentSalesController');
    Route::get('payment/sale/Number/Order', 'PaymentSalesController@getNumberOrder');
    Route::get('payment/sale/export/Excel', 'PaymentSalesController@exportExcel');
    Route::post('payment/sale/send/email', 'PaymentSalesController@SendEmail');
    Route::post('payment/sale/send/sms', 'PaymentSalesController@Send_SMS');

    //------------------------------- Expenses --------------------------\\
    //------------------------------------------------------------------\\

    Route::resource('expenses', 'ExpensesController');
    Route::get('expenses/export/Excel', 'ExpensesController@exportExcel');
    Route::post('expenses/delete/by_selection', 'ExpensesController@delete_by_selection');


    //------------------------------- Expenses Category--------------------------\\
    //------------------------------------------------------------------\\

    Route::resource('expensescategory', 'CategoryExpenseController');
    Route::post('expensescategory/delete/by_selection', 'CategoryExpenseController@delete_by_selection');


    //------------------------------- Quotations --------------------------\\
    //------------------------------------------------------------------\\
    Route::resource('quotations', 'QuotationsController');
    Route::post('quotations/sendQuote/email', 'QuotationsController@SendEmail');
    Route::post('quotations/send/sms', 'QuotationsController@Send_SMS');
    Route::get('quotations/export/Excel', 'QuotationsController@exportExcel');
    Route::post('quotations/delete/by_selection', 'QuotationsController@delete_by_selection');

    //------------------------------- Sales Return --------------------------\\
    //------------------------------------------------------------------\\

    Route::resource('returns/sale', 'SalesReturnController');
    Route::post('returns/sale/send/email', 'SalesReturnController@Send_Email');
    Route::post('returns/sale/send/sms', 'SalesReturnController@Send_SMS');
    Route::get('returns/sale/export/Excel', 'SalesReturnController@exportExcel');
    Route::get('returns/sale/payment/{id}', 'SalesReturnController@Payment_Returns');
    Route::post('returns/sale/delete/by_selection', 'SalesReturnController@delete_by_selection');

    //------------------------------- Purchases Return --------------------------\\
    //------------------------------------------------------------------\\

    Route::resource('returns/purchase', 'PurchasesReturnController');
    Route::post('returns/purchase/send/email', 'PurchasesReturnController@Send_Email');
    Route::post('returns/purchase/send/sms', 'PurchasesReturnController@Send_SMS');
    Route::get('returns/purchase/export/Excel', 'PurchasesReturnController@exportExcel');
    Route::get('returns/purchase/payment/{id}', 'PurchasesReturnController@Payment_Returns');
    Route::post('returns/purchase/delete/by_selection', 'PurchasesReturnController@delete_by_selection');

    //------------------------------- Payment Sale Returns --------------------------\\
    //--------------------------------------------------------------------------------\\

    Route::resource('payment/returns_sale', 'PaymentSaleReturnsController');
    Route::get('payment/returns_sale/Number/order', 'PaymentSaleReturnsController@getNumberOrder');
    Route::get('payment/returns_sale/export/Excel', 'PaymentSaleReturnsController@exportExcel');
    Route::post('payment/returns_sale/send/email', 'PaymentSaleReturnsController@SendEmail');
    Route::post('payment/returns_sale/send/sms', 'PaymentSaleReturnsController@Send_SMS');

    //------------------------------- Payments Purchase Returns --------------------------\\
    //---------------------------------------------------------------------------------------\\

    Route::resource('payment/returns_purchase', 'PaymentPurchaseReturnsController');
    Route::get('payment/returns_purchase/Number/Order', 'PaymentPurchaseReturnsController@getNumberOrder');
    Route::get('payment/returns_purchase/export/Excel', 'PaymentPurchaseReturnsController@exportExcel');
    Route::post('payment/returns_purchase/send/email', 'PaymentPurchaseReturnsController@SendEmail');
    Route::post('payment/returns_purchase/send/sms', 'PaymentPurchaseReturnsController@Send_SMS');

    //------------------------------- Adjustments --------------------------\\
    //------------------------------------------------------------------\\

    Route::resource('adjustments', 'AdjustmentController');
    Route::get('adjustments/detail/{id}', 'AdjustmentController@Adjustment_detail');
    Route::get('adjustments/export/Excel', 'AdjustmentController@exportExcel');
    Route::post('adjustments/delete/by_selection', 'AdjustmentController@delete_by_selection');

    //------------------------------- Transfers --------------------------\\
    //--------------------------------------------------------------------\\
    Route::resource('transfers', 'TransferController');
    Route::get('transfers/export/Excel', 'TransferController@exportExcel');
    Route::post('transfers/delete/by_selection', 'TransferController@delete_by_selection');

    //------------------------------- Users --------------------------\\
    //------------------------------------------------------------------\\

    Route::get('GetUserAuth', 'UserController@GetUserAuth');
    Route::get("/GetPermissions", "UserController@GetPermissions");
    Route::resource('users', 'UserController');

    Route::get('sales_rep/user', 'UserController@getSalesRep');


    Route::get('sales_rep/achivements', 'UserController@GetAchivments');


    Route::post('storerep/user', 'UserController@storeRep');

    Route::get('mandob_user/user', 'UserController@getMandobRep');
 

    Route::post('rep/delete/by_selection', 'UserController@delete_by_selection');
    Route::delete('rep/delete/mandob/{id}', 'UserController@delete_mandob');


    Route::put('updaterep/user/{id}', 'UserController@updateRep');

    Route::put('users/Activated/{id}', 'UserController@IsActivated');
    Route::get('users/export/Excel', 'UserController@exportExcel');
    Route::get('users/Get_Info/Profile', 'UserController@GetInfoProfile');
    Route::put('updateProfile/{id}', 'UserController@updateProfile');

    Route::post('userss/import/csv', 'UserController@import_users');


    //------------------------------- Permission Groups user -----------\\
    //------------------------------------------------------------------\\

    Route::resource('roles', 'PermissionsController');
    Route::resource('roles/check/Create_page', 'PermissionsController@Check_Create_Page');
    Route::get('getRoleswithoutpaginate', 'PermissionsController@getRoleswithoutpaginate');
    Route::post('roles/delete/by_selection', 'PermissionsController@delete_by_selection');



     //------------------------------- Governments--------------------------\
    //------------------------------------------------------------------\
    Route::resource('governments', 'GovernmentsController');
    Route::post('governments/delete/by_selection', 'GovernmentsController@delete_by_selection');


        //------------------------------- Areas--------------------------\
    //------------------------------------------------------------------\
    Route::resource('areas', 'AreasController');
    Route::post('areas/delete/by_selection', 'AreasController@delete_by_selection');


        //------------------------------- Shipping_areas--------------------------\
    //------------------------------------------------------------------\
    Route::resource('Shipping_areas', 'Shipping_areasController');
    Route::post('Shipping_areas/delete/by_selection', 'Shipping_areasController@delete_by_selection');
    Route::get('dropdown/get', 'Shipping_areasController@getAreas');


    //------------------------------- Settings ------------------------\\
    //------------------------------------------------------------------\\
    Route::resource('settings', 'SettingsController');

    Route::put('pos_settings/{id}', 'SettingsController@update_pos_settings');
    Route::get('get_pos_Settings', 'SettingsController@get_pos_Settings');

    Route::put('SMTP/{id}', 'SettingsController@updateSMTP');
    Route::post('SMTP', 'SettingsController@CreateSMTP');
    Route::get('getSettings', 'SettingsController@getSettings');
    Route::get('getSMTP', 'SettingsController@getSMTP');
    Route::get('get_sms_config', 'SettingsController@get_sms_config');


    Route::post('payment_gateway', 'SettingsController@Update_payment_gateway');
    Route::post('sms_config', 'SettingsController@sms_config');
    Route::get('Get_payment_gateway', 'SettingsController@Get_payment_gateway');

    //------------------------------- Backup --------------------------\\
    //------------------------------------------------------------------\\

    Route::get("GetBackup", "ReportController@GetBackup");
    Route::get("GenerateBackup", "ReportController@GenerateBackup");
    Route::delete("DeleteBackup/{name}", "ReportController@DeleteBackup");

});

    //-------------------------------  Print & PDF ------------------------\\
    //------------------------------------------------------------------\\

    Route::get('Sale_PDF/{id}', 'SalesController@Sale_PDF');
    Route::get('Quote_PDF/{id}', 'QuotationsController@Quotation_pdf');
    Route::get('Purchase_PDF/{id}', 'PurchasesController@Purchase_pdf');
    Route::get('Return_sale_PDF/{id}', 'SalesReturnController@Return_pdf');
    Route::get('Return_Purchase_PDF/{id}', 'PurchasesReturnController@Return_pdf');
    Route::get('Payment_Purchase_PDF/{id}', 'PaymentPurchasesController@Payment_purchase_pdf');
    Route::get('payment_Return_sale_PDF/{id}', 'PaymentSaleReturnsController@payment_return');
    Route::get('payment_Return_Purchase_PDF/{id}', 'PaymentPurchaseReturnsController@payment_return');
    Route::get('payment_Sale_PDF/{id}', 'PaymentSalesController@payment_sale');
    Route::get('Sales/Print_Invoice/{id}', 'SalesController@Print_Invoice_POS');


    Route::get('Products/filter/{id}/{input}', 'ProductsController@Filter_Products');
