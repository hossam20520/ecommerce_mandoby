<?php

namespace App\utils;
class ApiResponse
{
    public static function errorNotFound($enMessage = "Not Found", $arMessage = "غير متوفر")
    {
        return response()->json([
            "status" => true,
            "error" => true,
            "messages" => [
                "en_message" => $enMessage,
                "ar_message" => $arMessage,
            ]
        ], 404);
    }


    public static function successResponse($enMessage = "Success", $arMessage = "success")
    {
        return response()->json([
            "status" => true,
            "error" => false,
            "messages" => [
                "en_message" => $enMessage,
                "ar_message" => $arMessage,
            ]
        ], 200);
    }



    public static function SuccessResponseStatus( $status   ,  $enMessage = "Success", $arMessage = "success")
    {
        return response()->json([
            "status" => $status,
            "error" => false,
            "messages" => [
                "en_message" => $enMessage,
                "ar_message" => $arMessage,
            ]
        ], 200);
    }

    public static function OrderResponseStatus( $status   ,  $enMessage = "Success", $arMessage = "success")
    {
        return response()->json([
            "status" => $status,
            "error" => false,
            "messages" => [
                "en_message" => $enMessage,
                "ar_message" => $arMessage,
            ]
        ], 200);
    }


}

?>