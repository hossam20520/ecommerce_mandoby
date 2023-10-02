<?php

namespace App\Http\Controllers\device;
use App\Models\User;
use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Hash;
use App\utils\helpers;
use Intervention\Image\ImageManagerStatic as Image;
use File;
use App\Models\role_user;
use App\Models\Shop;
use App\Models\Calander;
use App\Models\Favourit;
use Illuminate\Validation\ValidationException;
use App\Models\Product;
use Illuminate\Http\JsonResponse;
use App\Models\Review;
use App\Models\About;
use App\Models\Role;
use App\Models\Version;
use App\Models\Address;
use Carbon\Carbon;
use App\Models\Fcm;

use App\Models\Notification;


use Illuminate\Support\Facades\Validator;
 

class AuthController extends Controller
{
    //


    public function logout(Request $request){
        $user = Auth::user()->token();
        $user->revoke();
        return response()->json(['status' => "success" ,  'message'=> 'success logged Out'   ], 200);
    }

    public function changeImage(Request $request){
 
        $helpers = new helpers();
        $user =  $helpers->getInfo();

  
         $currentAvatar = $user->avatar;


         $image = $request->file('avatar');

         if($image == null){
            return response()->json(['status' => "fail" ,  'message'=> "please Upload Image"  ], 422); 
         }
         $path = public_path() . '/images/avatar';
         $filename = rand(11111111, 99999999) . $image->getClientOriginalName();

         $image_resize = Image::make($image->getRealPath());
         // $image_resize->resize(128, 128);
         $image_resize->save(public_path('/images/avatar/' . $filename));

         $userPhoto = $path . '/' . $currentAvatar;
         if (file_exists($userPhoto)) {
             if ($user->avatar != 'no_avatar.png') {
                 @unlink($userPhoto);
             }
         }

         // $filename = $currentAvatar;
   

        // return $filename;


 User::whereId($user->id)->update([

     'avatar' => $filename,
   
 ]);




 return response()->json(['status' => "success" ,  'message'=>  "/public/images/avatar/".$filename   ], 200);



 }


    public function EditProfile(Request $request){
        $helpers = new helpers();
        $user =  $helpers->getInfo();
        $email =  $request['email']  == null ? $user->email : $request['email'];
        $phone =  $request['phone']  == null ? $user->phone : $request['phone'];


 
        if($phone  ==  $user->phone ){

             

        }else{


            $userd  = User::where('deleted_at', '=', null )->where('phone' , $phone )->first();
            if( $userd ){
                return response()->json(['status' => "fail" ,  'message'=> 'Phone Already Exist'   ], 401);
            }   



        }

  
        if($email  ==  $user->email ){

  
            
        }else{
            $user  = User::where('deleted_at', '=', null )->where('email' ,  $email  )->first();
            if( $user ){
                return response()->json(['status' => "fail" ,  'message'=> 'Email Already Exist'   ], 401);
            } 
     
        }


        User::whereId($user->id)->update([
            'firstname' => $request['firstname'],
            'lastname' =>  $request['lastname'],
            'email' =>   $email,
            'phone' => $phone,
            'code' => $request['code'],
        ]); 


        return response()->json(['status' => "success" ,  'message'=> 'success'   ], 200);
    }

    public function GetProfile(){
        // $helpers = new helpers();
         $user   = Auth::user();
         $userr =  User::where('id' , $user->id)->first();
         $userr->role;
        // $role =  Role::where('id' , $user->role_id )->first();
        return response()->json(['users' => $userr    ], 200);
    }

    public function GetUsers(Request $request){

        $array = $request->input('arrayData');
  
      
        $data = User::whereIn('id',  $array)->get();
        $data_array = array();
        foreach ( $data as   $daa) {
            $daa->role;
            $data_array[]  = $daa;
        }
       
        // $userr =  User::where('id' , $user->id)->first();
        // $userr->role;



        return response()->json(['users' =>  $data_array   ], 200);

    }


    public function deleteFav(Request $request , $id  )
       {
        $helpers = new helpers();
        $user =   Auth::user();


        $fav = Favourit::where('user_id', $user->id  )->where('product_id', $id  )->first();

        if( $fav ){

            $fav->delete();
        }else{
            return response()->json(['status' => "not Found" ,  'message'=> 'product Not Found'   ], 404);
        }
     
        return response()->json(['status' => "success" ,  'message'=> 'success'   ], 200);

      }




      
    public function deleteFavD(Request $request , $id  )
    {
     $helpers = new helpers();
     $user =   Auth::user();


     $fav = Favourit::where('user_id', $user->id  )->where('product_id', $id  )->first();

     if( $fav ){

         $fav->delete();
     }else{
         return response()->json(['status' => "not Found" ,  'message'=> 'product Not Found'   ], 404);
     }
  
     return response()->json(['status' => "success" ,  'message'=> 'success'   ], 200);

   }



      
    public function AddToFavourit(Request $request){
 
        $helpers = new helpers();
        $user =  Auth::user();
  
        $fav = Favourit::where('user_id', $user->id  )->where('product_id',$request['product_id'] )->first();
        if( $fav){
            return response()->json(['status' => "401" ,  'message'=> 'found Product'   ], 401);
        }else{


          
           $product =  Product::where('id' ,$request['product_id'] )->first();

           if( !$product  ){
            return response()->json(['status' => "404" ,  'message'=> 'Product Not Found'   ], 404);
           }

            Favourit::create([
 
                'user_id' =>  $user->id,
                'product_id' => $request['product_id'],

                
          
       
            ]);
        }
 

        return response()->json(['status' => "success" ,  'message'=> 'success'   ], 200);
    }



    public function GetFavourit(Request $request){
 
        $helpers = new helpers();
        $user =  $helpers->getInfo();
 
      $products = Favourit::with('product.shop.currency')->where('deleted_at', '=', null )->where('user_id', $user->id )->get();  
      return response()->json([  'products'=> $products    ], 200);
      

   
     
    }





    public function deleteProfile(){
        // $helpers = new helpers();
        $user =  Auth::user();
     
        User::whereId($user->id)->update([
 

            'statut' =>  '0',
            'deleted_at' => Carbon::now(),
     
        ]); 


        return response()->json(['status' => "success" ,  'message'=> 'success'   ], 200);
    }


    public function deleteAddress(Request $request , $id){
        Address::whereId($id)->update([
            'deleted_at' => Carbon::now(),
        ]);

        return response()->json(['success' => true]);
        // $cartItem = Address::where('cart_id' ,  $ia->id )->where('product_id' , $product_id)->delete();
    }

    public function updateAddress(Request $request , $id){

         $user = Auth::user();

         $address =  Address::where('deleted_at', '=', null )->where('id' , $id)->where('user_id' , $user->id)->first();

         if(!$address){
            return response()->json(['status' => "fail" ,  'message'=> 'Not Found Address'   ], 404);
         }

        $address =  $request['address']  == null ?  $address->address : $request['address'];
        $phone =  $request['phone']  == null ? $address->phone : $request['phone'];
        $country =  $request['country']  == null ? $address->country : $request['country'];
        $city =  $request['city']  == null ? $address->city : $request['city'];

        
         Address::whereId($id)->update([
            'address' => $address,
            'phone' =>   $phone,
            'country' =>   $country,
            'city' => $city,  ]); 


            return response()->json(['status' => "success" ,  'message'=> 'success Updated'   ], 200);
 
    }



    public function createAddress(Request $request  ){

        $user = Auth::user();
 
       $address =  $request['address'];
       $phone =  $request['phone'];
       $country =  $request['country'];
       $city =  $request['city'];

       
        $addresssv =  Address::create([
           'address' => $address,
           'phone' =>   $phone,
           'user_id' =>  $user->id,
           'country' =>   $country,
           'city' => $city, 
     
        ]); 
 
           return response()->json(['status' => "success" ,  'message'=> 'success Created'   ], 200);

   }


    public function getAddress(Request $request){
       $user =  Auth::user();
       $address =  Address::where('deleted_at', '=', null )->where('user_id' , $user->id)->get();
       

       if( !$address ){
        return response()->json([  'status'=> false , "message"=> "No addresses"  ], 404);
       }
       return response()->json(['addressed'=>  $address] , 200);
    }


    public function check(Request $request){

        $type = $request->type;
        // $email = $request->email;
        $check = $request->cred;
        if($type == "email"){
            $user  = User::where('deleted_at', '=', null )->where('email' ,   $check )->first();
            if(!$user){
                return response()->json([  'status'=> false , "message"=> "not Found email"  ], 404);
            }
            return response()->json([  'Found'=> $user  ], 200);
        }else{
            $user  = User::where('deleted_at', '=', null )->where('phone' ,   $check )->first();
            if(!$user){
                return response()->json([  'status'=> false , "message"=> "not Found phone"  ], 404);
            }
            return response()->json([  'Found'=> $user  ], 200);
        }

    }

    public function GetFavouritD(Request $request){
 
     $helpers = new helpers();
      $user =  $helpers->getInfo();
 
      $Favourits = Favourit::with('product.shop.currency' , 'product.unit', 'product.category', 'product.brand' , )->where('deleted_at', '=', null )->where('user_id', $user->id )->get();  
      $data = array();
      foreach ($Favourits as  $fav) {

        // $item['wishlist_id'] = $fav->id;
        // $item  = $helpers->Product($fav->product);
        $data[] = $helpers->Product($fav->product);
      }
    //   $data = $helpers->Products($products->product);
      
    $da = array(
        "wishlist"=> $data
    );


      return response()->json(   $da    , 200);
      

   
     
    }


    public function GetProfileData(Request $request , $id){
         

        //  $helpers = new helpers();
        //  $user =  $helpers->getInfo();
        // productus
        //  product.shop.setting.shopcurrency
         $products = User::with('shop.products' ,'shop.currency'  )->where('deleted_at', '=', null )->where('id',$id )->first();  
         return response()->json([ 'products'=> $products    ], 200);
 
     
    }

 

 

    
    public function User(Request $request){
        $helpers = new helpers();
        $user =  $helpers->getInfo();

        $userr = User::where('id' , $user->id)->first();
        $shop =  Shop::where('merchant_id' , $user->id )->first();
         if($shop){
            return response()->json(['user' => $userr ,  'shop'=>  $shop  ], 200);
         }

        return response()->json(['user' => $userr ,  'shop'=> ""   ], 200);
      
    }

    public function updateProfile(Request $request){
 
        $helpers = new helpers();
        $user =  $helpers->getInfo();
        User::whereId($user->id)->update([
            'firstname' => $request['firstname'],
            'lastname' =>  $request['lastname'],
            'email' =>  $request['email'],
            'phone' => $request['phone'],
        ]);


        return response()->json(['status' => "success" ,  'message'=> 'success'   ], 200);
    }


    public function updateFCM(Request $request){
        $helpers = new helpers();
        // $user =  $helpers->getInfo();
        $user = Auth::user();
        $fcm =  $request->FCM;
        $userdat = User::where('deleted_at', '=', null )->where('id' ,  $user->id)->first();
        $userdat->role;
        $matchThese = ['user_id'=> $user->id ];
        Fcm::updateOrCreate($matchThese,['fcms'=> $fcm, 'user_id'=> $user->id  ]);


        return response()->json(['status' => "success" ,  'message'=> 'fcm Updated'  , 'user'=> $userdat  ], 200);

    }


    public function deleteWishlist(Request $request){
        $orders =  Whish::where('deleted_at', '=', null)->get();
    }



    public function version(Request $request){
         $version = Version::where('id' , 1)->first();
        return response()->json([  'app'=>   $version    ], 200);
    }


    public function updateVersion(Request $request){
         $version =  $request->version;

        $versi =  Version::whereId(1)->update([
            'version' => $version ,
     
        ]);
        $versionddd = Version::where('id' , 1)->first();
        return response()->json([  'app'=>    $versionddd   ], 200);
        // Version::where('id' , $version)->update(
    }
    public function GetFcm(Request $request){
        $helpers = new helpers();
        $user =  $helpers->getInfo();
        
        
        $fcm =   Fcm::where('deleted_at', '=', null)->first();


        return response()->json([  'fcm'=>  $fcm    ], 200);

    }



    public function sendNotification(Request $request  ){
        $user = Auth::user();
        $id = $request->notification_id;
        $notification = Notification::where('deleted_at', '=', null)->where('id' , $id )->where('user_id' , $user->id)->first();
        
          

        if(!$notification){
            return response()->json(['status' => "fail" ,  'message'=> 'notification not found'   ], 404);
        }
        // $noti = new Notification();
        Notification::whereId( $id )->update([
            'read' =>  "read" ,
     
        ]);
        
      

        return response()->json(['status' => "success" ,  'message'=> 'notification'   ], 404);
    }

    public function getnotification(Request $request){
      $user = Auth::user();

     $notification = Notification::where('deleted_at', '=', null)->where('user_id' ,$user->id )->get();

     if(!$notification){
        return response()->json(['status' => "fail" ,  'message'=> 'no notification'   ], 404);
     }
     return response()->json([  'notifications'=> $notification    ],  200);


    }




    public function getInfoAbout(){

        $about = About::where('deleted_at', '=', null)->first();
       return response()->json( [
           'ar_about'=> $about->ar_about,
           'en_about'=>  $about->en_about,
           'en_term'=>   $about->en_terms,
           'ar_term'=> $about->ar_terms,
           'phone'=> "01111115456",
           'email' => "admin@example.com",
           'ar_privicy' => "Lorem Ipsum is simply dummy text of the printing and
            typesetting industry. Lorem Ipsum has been the industry's standard dummy
             text ever since the 1500s, when an unknown printer took a galley of type 
             and scrambled it to make a type",
             'en_privicy' => "Lorem Ipsum is simply dummy text of the printing and
             typesetting industry. Lorem Ipsum has been the industry's standard dummy
              text ever since the 1500s, when an unknown printer took a galley of type 
              and scrambled it to make a type",
           
       ] , 200); 

   }


 

   public function resetPassowrd(Request $request){

   
     $email = $request->email;
     $phone = $request->phone;
     
     $user = User::where('phone' ,  $phone)->first(); 
     if($request->type == "email"){
        $user = User::where('email' ,  $email)->first();
     }else{
        $user = User::where('phone' ,  $phone)->first(); 
     }
   


       if(!$user){
        return response()->json(['status' => "fail" ,  'message'=> 'user not found'   ], 200);
       }



    User::whereId($user->id)->update([
        'password' => Hash::make($request->password) ,
 
    ]);

    return response()->json(['status' => "success" ,  'message'=> 'success'   ], 200);

   }

    public function register(Request $request){

 
        $validator = Validator::make($request->all(), [
            'email' => 'required|unique:users',
            'phone' => 'required|unique:users',
        ], [
            'email.unique' => 'This Email is already taken.',
            'phone.unique' => 'This Phone is already taken.',
        ]);

        if ($validator->fails()) {
           

            return response()->json([
                'status'=> 200,
                'message'=>  $validator->errors(),
                
            ] , 422); 
    
        }



         $username = explode("@" , $request['email']);
         if($request['type'] == "customer"){
        $role = 3;
    
         }else{

            $role = 2;
         }
         
        $filename = 'no_avatar.png';
        $User = new User;
        $User->firstname = $request['firstname'];
        $User->lastname  = $request['lastname'];
        $User->username  = $username[0];
        $User->email     = $request['email'];
        $User->phone     = $request['phone'];
        $User->password  = Hash::make($request['password']);
        $User->avatar    = $filename;
        $User->role_id   = $role;
        $User->save();

        $role_user = new role_user;
        $role_user->user_id = $User->id;
        $role_user->role_id = $role;
        $role_user->save();
 
    
        $accessToken = $User->createToken('AuthToken')->accessToken;
     
        return response()->json([
            'status'=> 200,
            'message'=> 'success',
            'token'=> $accessToken,
            'user'=> $User
            
        ] , 200); 


    }

    public function test(){
        return response()->json([
  
            'd' => 66,
        ]);
    }

    // public function changeImage(Request $request){
 
    //     $helpers = new helpers();
    //     $user =  $helpers->getInfo();
     
    //      $currentAvatar = $user->avatar;
    //     if ($request->avatar != $currentAvatar) {

    //         $image = $request->file('avatar');
    //         $path = public_path() . '/images/avatar';
    //         $filename = rand(11111111, 99999999) . $image->getClientOriginalName();

    //         $image_resize = Image::make($image->getRealPath());
    //         $image_resize->resize(128, 128);
    //         $image_resize->save(public_path('/images/avatar/' . $filename));

    //         $userPhoto = $path . '/' . $currentAvatar;
    //         if (file_exists($userPhoto)) {
    //             if ($user->avatar != 'no_avatar.png') {
    //                 @unlink($userPhoto);
    //             }
    //         }
    //     } else {
    //         $filename = $currentAvatar;
    //     }

    // return $filename;

    // }





    public function loginAuthD(Request $request)
    {

   

   

          $credentials = $request->only('phone', 'password');
        //   $user = User::where('phone', $request->phone)->first();

        //   return $user;
          if (Auth::attempt($credentials)) {



            $user = Auth::user();
            // $helpers = new helpers();
            $id = $user->id;
            $accessToken = $user->createToken('AuthToken')->accessToken;
            $user->role;
            // $role = role_user::where('user_id', $id)->first();
            // $rolec = Role::where('id', $role->role_id)->first();
            // $rolename = "customer";
            // if(!$role){
            //     $role = Role::where('id',  4)->first();
            //     $rolename = $rolec->name;
            // }else{
            //     $rolename = $rolec->name;
            // }
            // // if($role->role_id ==  1 ){
            // //     $rolename = "admin";
            // // }else if($role->role_id ==  2){
            // //     $rolename = "vendor";
            // // }else{
            // //     $rolename = "customer"; 
            // // }
            // // $rolename = 'vendor';
            $user = array( 'user'=>   $user   ,   'token' => $accessToken    );
 
            return response()->json(['status' =>  200 ,  'message'=> 'success'  , 'data'=>   $user   ], 200);




        } else {

            return response()->json(['status' =>  401 ,  'error'=> 'Invalid credentials'      ], 401);
            // return response()->json(['error' => 'Invalid credentials'], 401);
        }


    }


    public function loginweb(Request $request)
    {
 
          $credentials = $request->only('email', 'password');
        if (Auth::attempt($credentials)) {



            $user = Auth::user();
            $helpers = new helpers();
            $id = $user->id;
            $accessToken = $user->createToken('AuthToken')->accessToken;
            $role = role_user::where('user_id', $id)->first();
 
            if($role->role_id ==  1 ){
                $rolename = "admin";
            }else if($role->role_id ==  2){
                $rolename = "vendor";
            }else{
                $rolename = "customer"; 
            }
            $rolename = 'vendor';
            $user = array( 'user'=>   $user   ,   'token' => $accessToken  , 'role'=>  $rolename  );
 
            return response()->json(['status' => "success" ,  'message'=> 'success' 
              , 'data'=> $user 
             
            
            ], 200);




        } else {
            return response()->json(['error' => 'Invalid credentials'], 401);
        }


    }


    

    public function login(Request $request)
    {
 
          $credentials = $request->only('phone', 'password');
        if (Auth::attempt($credentials)) {



            $user = Auth::user();
            $helpers = new helpers();
            $id = $user->id;
            $accessToken = $user->createToken('AuthToken')->accessToken;
            $role = role_user::where('user_id', $id)->first();
 
            if($role->role_id ==  1 ){
                $rolename = "admin";
            }else if($role->role_id ==  2){
                $rolename = "vendor";
            }else{
                $rolename = "customer"; 
            }
            $rolename = 'vendor';
            $user = array( 'user'=>   $user   ,   'token' => $accessToken  , 'role'=>  $rolename  );
 
            return response()->json(['status' => "success" ,  'message'=> 'success' 
              , 'data'=> $user 
             
            
            ], 200);




        } else {
            return response()->json(['error' => 'Invalid credentials'], 401);
        }


    }



 


    



    public function createAccountD(Request $request){
     



        try {
            $validatedData = $request->validate([
                'email' => 'required|unique:users',
                'phone' => 'required|unique:users',
              
          
            ], [
                'email.unique' => 'This Email is already taken.',
                'phone.unique' => 'This Phone is already taken.',
     
              
      
            ]);
            
            // Process the validated data
         
            
            
        } catch (ValidationException $e) {
            return new JsonResponse( ['status' =>  422 ,  'error'=> $e->errors()   ]  , 422);
        }

 
       
            if ($request->hasFile('avatar')) {

                $image = $request->file('avatar');
                $filename = rand(11111111, 99999999) . $image->getClientOriginalName();

                $image_resize = Image::make($image->getRealPath());
                $image_resize->resize(128, 128);
                $image_resize->save(public_path('/images/avatar/' . $filename));

            } else {
                $filename = 'no_avatar.png';
            }

            $roleID = 2;

            if($request['type'] == "Merchant"){
                $roleID = 2;
            }else if($request['type'] == "driver"){
                  $roleID = 3;
            }else if($request['type'] == "customer"){
                $roleID = 4;
            }else{
                return response()->json(['status' =>  404 ,  'message'=> 'role not found'        ], 404);
            }
          


            $User = new User;
            $User->firstname = $request['firstname'];
            $User->lastname  = $request['lastname'];
            $User->username  = explode('@', $request['email'])[0];
            $User->email     = $request['email'];
            $User->phone     = $request['phone'];
            $User->code      = $request['code'];
            $User->password  =  Hash::make($request->password);
            $User->avatar    = $filename;
            $User->role_id   = $roleID;
            $User->save();

            $role_user = new role_user;
            $role_user->user_id = $User->id;
            $role_user->role_id =  $roleID;
            $role_user->save();
        


  
        $accessToken = $User->createToken('AuthToken')->accessToken;

        $User->role;
        $userv = array( 'user'=>  $User  ,   'token' => $accessToken );
 
        return response()->json(['status' =>  200 ,  'message'=> 'success'  , 'data'=>   $userv       ], 200);
  
 

    }

    



    public function changePassword(Request $request)
    {

        $user = Auth::user();

       
        User::whereId($user->id)->update([
            'password' => Hash::make($request->password) ,
     
        ]);

        return response()->json(['status' => "success" ,  'message'=> 'success'   ], 200);
 


    }

 


    public function loginBySocail(Request $request)
    {

        $credentials = $request->only('phone', 'password');
        if(Auth::attempt($credentials)) {
            $user = Auth::user();
            $accessToken = $user->createToken('AuthToken')->accessToken;
            return response()->json(['access_token' => $accessToken , 'data'=>$user], 200);

        } else {

            return response()->json(['error' => 'Invalid credentials'], 401);
        }
    }





}
