<?php

namespace App\Http\Controllers\device;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use GuzzleHttp\Client;
use App\Models\Ai;

class ChatAiController extends Controller
{
    

    public function sendChat(Request $request){

   
         $ai =  Ai::where('deleted_at' , '=' , null)->where('id' ,  $request->id)->first();
 


        return response()->json([
         
            'message'=>  $request->message  ,
    
            'replay'=>  $this->sendDataToApi( $request->message , $ai->role )  ,
       ]);


    }



    public function sendDataToApi($role_one , $role_tow )
    {
        // JSON data to be sent
        $jsonData = [
            "model" => "gpt-3.5-turbo",
            "messages" => [
                [
                    "role" => "user",
                    "content" => $role_one
                ],
                [
                    "role" => "user",
                    "content" => $role_tow
                ]
            ],
            "temperature" => 1,
            "top_p" => 1,
            "n" => 1,
            "stream" => false,
            "max_tokens" => 250,
            "presence_penalty" => 0,
            "frequency_penalty" => 0
        ];

        // API URL to send the data to
        $apiUrl = 'https://api.openai.com/v1/chat/completions';

        // Bearer token
        $bearerToken =  env('OPEN_AI_TOKEN' , 'OPEN_AI_TOKEN');

        // Create a Guzzle client instance
        $client = new Client();

        try {
            // Send a POST request with JSON data and Bearer token to the API URL
            $response = $client->post($apiUrl, [
                'json' => $jsonData,
                'headers' => [
                    'Authorization' => 'Bearer ' . $bearerToken,
                    'Content-Type' => 'application/json',
                    'Accept' => 'application/json',
                ],
            ]);

            // Get the response body
            // $body = $response->getBody()->getContents();

            // Handle the response as needed

            $data = json_decode($response->getBody(), true);

            // Extract the content from the JSON response
            $content = $data['choices'][0]['message']['content'];

            // Return the content
            return $content;
            // return response()->json(['success' => true, 'content' => $content]);

            // return response()->json(['success' => true, 'response' => $body]);
        } catch (\Exception $e) {
            // Handle any exceptions
            return response()->json(['success' => false, 'message' => $e->getMessage()]);
        }
    }


}
