<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Order extends Model
{
    protected $table = 'orders';
    protected $fillable = [
        'order_id' ,'odoo_ref', 'reason', 'paid_cash'  , 'total' , 'payment_type'  , 'image' , 'returned_items'    , 'start_time'  ,  'end_time'  , 'received_time_warehouse','delivery_time' , 'status' , 'user_id','user_id_action'
      ];
     
      public function order()
      {
          return $this->belongsTo('App\Models\Sale'  , 'order_id');
      }

    public function user()
    {
        return $this->belongsTo('App\Models\User');
    }
}
