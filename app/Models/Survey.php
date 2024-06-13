<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Survey extends Model
{
    protected $table = 'surveys'; // Specify the table name

    protected $fillable = [
        'bussiness_name',
        'name',
        'image',
        'location_lat',
        'location_lng',
        'nameselectaStatus',
        'city',
        'area',
        'DIDMeatResponsiblePerson',
        'NameResponsible',
        'Phone',
        'activityType',
        'address_Detail',
        'delevery_detail',
        'reasonVisit',
        'usingApplication',
        'milkused',
        'kreemUsed',
        'spices',
        'cheeseUsed',
        'SelectedBatter',
        'oilUsed',
        'teaused',
        'seeeds',
        'sauce',
        'sauceCompany',
        'watergasused',
        'pastaUsed',
        'bonUsed',
        'branchNumber',
        'summryVisit',
        'productUsesClient',
        'activity',
        'task_id',
        // Add more fields here...
    ];

 

    public function task()
    {
        return $this->belongsTo('App\Models\Task' , 'task_id');
    }


}
