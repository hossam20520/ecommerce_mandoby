<?php

namespace App\Models;

use Illuminate\Foundation\Auth\User as Authenticatable;
use Illuminate\Notifications\Notifiable;
use Laravel\Passport\HasApiTokens;

class User extends Authenticatable
{
    use HasApiTokens, Notifiable;
    protected $dates = ['deleted_at'];

    /**
     * The attributes that are mass assignable.
     *
     * @var array
     */
    protected $fillable = [
        'firstname', 'area_name' ,'bussiness_type' ,  'location_lat' ,  'location_long' , 'address' , 'bussiness_name',
         'lastname', 'username', 'email', 'password', 'phone', 'statut', 'avatar', 'role_id',
         
    ];

 


    /**
     * The attributes that should be hidden for arrays.
     *
     * @var array
     */
    protected $hidden = [
        'password', 'remember_token',
    ];

    /**
     * The attributes that should be cast to native types.
     *
     * @var array
     */
    protected $casts = [
        'email_verified_at' => 'datetime',
        'role_id' => 'integer',
        'statut' => 'integer',
    ];


    public function getAvatarAttribute($value)
    {
        // Manipulate the retrieved value before returning it
        return    '/images/avatar/'.$value;
    }

    public function oauthAccessToken()
    {
        return $this->hasMany('\App\Models\OauthAccessToken');
    }

    public function roles()
    {
        return $this->belongsToMany(Role::class);
    }

    public function role()
    {
        return $this->belongsTo(Role::class);
    }
    public function assignRole(Role $role)
    {
        return $this->roles()->save($role);
    }


    public function cart()
    {
        return $this->hasOne(Cart::class);
    }

    public function favourits()
    {
        return $this->hasMany(Favourit::class, 'user_id', 'id');
    }

    public function client()
    {
        return $this->belongsTo('App\Models\User' , 'user_id');
    }


    public function hasRole($role)
    {
        if (is_string($role)) {
            return $this->roles->contains('name', $role);
        }
        return !!$role->intersect($this->roles)->count();
    }


    public function orders()
    {
        return $this->hasMany('App\Models\Order');
    }

}
