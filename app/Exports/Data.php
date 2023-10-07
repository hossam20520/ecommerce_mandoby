<?php

namespace App\Exports;

use Maatwebsite\Excel\Concerns\FromCollection;
use App\Models\Product;
use App\Models\product_warehouse;
use Maatwebsite\Excel\Concerns\FromArray;
use Maatwebsite\Excel\Concerns\ShouldAutoSize;
use Maatwebsite\Excel\Concerns\WithEvents;
use Maatwebsite\Excel\Concerns\WithHeadings;
use Maatwebsite\Excel\Events\AfterSheet;
use App\utils\helpers;


class Data implements FromArray, WithHeadings, ShouldAutoSize, WithEvents
{
 
    /**
     * @return \Illuminate\Support\Collection
     */
    function array(): array
    {

   


        if ($products->isNotEmpty()) {

            foreach ($products as $product) {
  
                $item['code'] = $product->code;
                $item['unit'] = $product['unit']->ShortName;
                $item['cost'] = $product->cost;
                $item['price'] = $product->price;

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
                $cellRange = 'A1:H1'; // All headers
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
            'Code',
            'Name',
            'Category',
            'Brand',
            'Quantity',
            'Unit',
            'Cost',
            'Price',
        ];
    }
}


 
