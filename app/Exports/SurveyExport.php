<?php

namespace App\Exports;

use App\Models\Client;
use App\Models\Survey;
use Maatwebsite\Excel\Concerns\FromArray;
use Maatwebsite\Excel\Concerns\ShouldAutoSize;
use Maatwebsite\Excel\Concerns\WithEvents;
use Maatwebsite\Excel\Concerns\WithHeadings;
use Maatwebsite\Excel\Events\AfterSheet;

class SurveyExport implements FromArray, WithHeadings, ShouldAutoSize, WithEvents
{
    /**
     * @return \Illuminate\Support\Collection
     */
    function array(): array
    {
         $clients = Survey::with('task.user')->where('deleted_at', '=', null)->orderBy('id', 'DESC')->get();
        if ($clients->isNotEmpty()) {

            foreach ($clients as $client) {
              
                $item['image'] =  env('APP_URL', 'http://104.248.31.157:8082') . "/images/surveyimages/" . $client->image;
                $item['bussiness_name'] = $client->bussiness_name;
                $item['created_at'] = $client->created_at;
                // $item['sales'] = $client->task->user->email;
                $item['name'] = $client->name;
                $item['city'] = $client->city;
                $item['area'] = $client->area;

                $item['NameResponsible'] = $client->NameResponsible;

                $item['Phone'] = $client->Phone;
                $item['activityType'] = $client->activityType;
                $item['address_Detail'] = $client->address_Detail;


                $item['delevery_detail'] = $client->delevery_detail;
                $item['summryVisit'] = $client->summryVisitb;


                $item['location_lat'] = $client->location_lat;
                $item['location_lng'] = $client->location_lng;
                // $item['name'] = $client->name;
                // $item['email'] = $client->email;
                // $item['phone'] = $client->phone;
                // $item['adresse'] = substr($client->adresse, 0, 20);

                $data[] = $item;
            }
        } else {
            $data = [];
        }

        return $data;
    }

    public function registerEvents(): array
    {
        return [
            AfterSheet::class => function (AfterSheet $event) {
                $cellRange = 'A1:E1'; // All headers
                $event->sheet->getDelegate()->getStyle($cellRange)->getFont()->setSize(14);

                $styleArray = [
                    'borders' => [
                        'outline' => [
                            'borderStyle' => \PhpOffice\PhpSpreadsheet\Style\Border::BORDER_THICK,
                            'color' => ['argb' => 'FFFF0000'],
                        ],
                    ],

                    'alignment' => [
                        'horizontal' => \PhpOffice\PhpSpreadsheet\Style\Alignment::HORIZONTAL_RIGHT,
                    ],
                ];

            },
        ];

    }

    public function headings(): array
    {
        return [
            'صورة المكان',
            'اسم المكان',
            'تاريخ الزيارة',
            'اسم العميل',
            'المدينة',
            'المنطقة',
            'اسم المسؤل',
            'رقم التليفون',
            'نوع النشاط',
            'عنوان الادارة',
            'عنوان التوصيل',
            'ملخص الزيارة',
            'خط العرض',
            'خط الطول',
        ];
    }
}
