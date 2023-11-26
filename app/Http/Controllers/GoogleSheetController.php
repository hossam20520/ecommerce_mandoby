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
    $this->range = 'A:AC';
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



    public function writeSheet($values){
         $body = new ValueRange([
            'values'=> $values
         ]);

         $params = [
            'valueInputOption'=> 'RAW'
         ];
         $result = $this->service->spreadsheets_values->update($this->document , $this->range , $body , $params );
    
    
        }


  public function write(Request $request){
    //    $this->writeSheet([
    //     [
    //         'ahmed',
    //         'row ww'
    //     ]
    //    ]);


    // return $request->milkused;

    
    $this->writeSheett([
        // ['First Name', 'Last Name', 'Age'], // This could be used as headers or skipped



        [$request->name, 
            $request->nameselectaStatus  ,
             $request->city , 

               $request->area,
               $request->DIDMeatResponsiblePerson,
               $request->NameResponsible,
               $request->Phone,


               $request->activityType,
                 'عنوان الادارة',
                'عنوان التوصيل',
               $request->reasonVisit,




               $request->usingApplication,
               $request->milkused ,
            //    $request->kreemUsed,
            //    $request->spices,
            //    $request->cheeseUsed,
            //    $request->oilUsed,
            //     'الشاي المستخدم',
            //      'ارز وبقوليات',
            //    $request->sauce,
            //    $request->sauceCompany,
            //    $request->watergasused,
            //    $request->pastaUsed,
            //    $request->bonUsed,
            //    $request->branchNumber,
            //    $request->summryVisit,
            //    $request->productUsesClient,
            //    $request->activity,
               

               ],
      
       
    ]);


  }


  public function writeSheett($values){
    // Get the existing headers from the spreadsheet
    $response = $this->service->spreadsheets_values->get($this->document, 'A1:1');
    $existingHeaders = $response->getValues()[0] ?? [];

    // Combine existing headers with the provided values
    $rows = [];
    foreach ($values as $rowValues) {
        $combinedRow = [];
        foreach ($existingHeaders as $index => $header) {
            // Use the existing headers to map values
            $combinedRow[$header] = $rowValues[$index] ?? '';
        }
        $rows[] = array_values($combinedRow);
    }

    $body = new ValueRange([
        'values'=> $rows
    ]);

    $params = [
        'valueInputOption'=> 'RAW',
        'insertDataOption' => 'INSERT_ROWS'
    ];

    // $result = $this->service->spreadsheets_values->update($this->document , $this->range , $body , $params );
    // $result = $this->service->spreadsheets_values->update($this->document , $this->range , $body , $params);


    $result = $this->service->spreadsheets_values->append($this->document, $this->range, $body, $params);

// Handle the result
if ($result->getUpdates()->getUpdatedRows() > 0) {
    echo "Data inserted successfully.";
} else {
    echo "Failed to insert data.";
}


}

  

}
