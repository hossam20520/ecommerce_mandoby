<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Google\Client;
use Google\Service\Sheets;
use Google\Service\Sheets\ValueRange;
 
class GoogleSheetController extends Controller
{
 
    public $client , $service, $document, $range;


   public function __construct(){


    $this->client = $this->getClient();
    $this->service = new Sheets($this->client);
    $this->document = "1f5HFWIQwdfRxD0XYEzYKOSuO_uJD6vPaT_YO6Ar4YbY";
    $this->range = 'A:Z';
   }


    public function getClient(  ){
       
        $client = new Client();
        $client->setApplicationName('google sheet');
        $client->setRedirectUri('http://localhost:8000/googlesheet');
        $client->setScopes(Sheets::SPREADSHEETS);
        $client->setAuthConfig('survey.json');
        $client->setAccessType('offline');

      return $client;


      
    }


    public function readSheet(Request $request){
        $doc = $this->service->spreadsheets_values->get($this->document , $this->range);
   

        return response()->json([
            'status'=> $doc ,
        
            
        ] , 200); 

        // return $doc;
   
    }
}
