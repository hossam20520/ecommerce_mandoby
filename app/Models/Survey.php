<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Survey extends Model
{
    protected $table = 'surveys'; // Specify the table name

    protected $fillable = [
        'name',
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
        // Add more fields here...
    ];
}
