<?php
namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class Sreport extends Model
{
    protected $table = 'sreports';
    protected $dates = ['deleted_at'];

    protected $fillable = [
        'user_id', 'survey_id',   'status',  
    ];

    protected $casts = [
 
    ];
 
}

