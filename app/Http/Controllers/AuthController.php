<?php
namespace App\Http\Controllers;

use App\Http\Controllers\BaseController;
use App\Models\User;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Hash;
use App\Models\role_user;
use App\Models\Role;
use Illuminate\Support\Facades\Validator;
use Illuminate\Http\JsonResponse;
use Illuminate\Validation\ValidationException;

class AuthController extends BaseController
{


    public function createAccount(Request $request){
     



        try {
            $validatedData = $request->validate([
                'email' => 'required|unique:users',
            ], [
                'email.unique' => 'This Email is already taken.',
            ]);
            
            // Process the validated data
        
            
        } catch (ValidationException $e) {
            return new JsonResponse(['error' => $e->errors()], 422);
        }

 
        \DB::transaction(function () use ($request) {
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
            $User = new User;
            $User->firstname = $request['firstname'];
            $User->lastname  = $request['lastname'];
            $User->username  = $request['username'];
            $User->email     = $request['email'];
            $User->phone     = $request['phone'];
            $User->password  = Hash::make($request['password']);
            $User->avatar    = $filename;
            $User->role_id   = $roleID;
            $User->save();

            $role_user = new role_user;
            $role_user->user_id = $User->id;
            $role_user->role_id =  $roleID;
            $role_user->save();
        
        }, 10);

  

        return response()->json(['status' => true , 'message'=>"success" , 'data'=> []  ]);

    }

    //--------------- Function Login ----------------\\

    public function getAccessToken(Request $request)
    {
        $request->validate([
            'email' => 'required',
            'password' => 'required',
        ]);

        $credentials = request(['email', 'password']);

        if (Auth::attempt($credentials)) {
            $userStatus = Auth::User()->statut;
            if ($userStatus === 0) {
                return response()->json([
                    'message' => 'This user not active',
                    'status' => 'NotActive',
                ]);
            }

        } else {
            return response()->json([
                'message' => 'Incorrect Login',
                'status' => false,
            ]);
        }

        $user = auth()->user();
        $tokenResult = $user->createToken('Access Token');
        $token = $tokenResult->token;
        $this->setCookie('Stocky_token', $tokenResult->accessToken);

        return response()->json([
            'Stocky_token' => $tokenResult->accessToken, 'username' => Auth::User()->username
            , 'avatar' => Auth::User()->avatar, 'status' => true,
        ]);
    }

    //--------------- Function Logout ----------------\\

    public function logout()
    {
        if (Auth::check()) {
            $user = Auth::user()->token();
            $user->revoke();
            $this->destroyCookie('Stocky_token');
            return response()->json('success');
        }

    }

}
