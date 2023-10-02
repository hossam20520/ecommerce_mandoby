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
        'firstname', 'lastname', 'username', 'email', 'password', 'phone', 'statut', 'avatar', 'role_id',
    ];

    /**
     * The attributes that should be hidden for arrays.
     *
     * @var array
     */
    protected $hidden = [
        'password', 'remember_token' , 'created_at' , 'updated_at' , 'deleted_at'  ,
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

    protected $appends = ['Avater'];
    public function oauthAccessToken()
    {
        return $this->hasMany('\App\Models\OauthAccessToken');
    }


    public function role()
    {
        return $this->belongsTo(Role::class);
    }

    public function getAvaterAttribute()
    {
        // Access the role_name through the relationship
        $avatar =  '/public/images/avatar/'.$this->avatar;

        // Modify the role_name as needed
        // For example, you can convert it to uppercase
        return $avatar;
    }

    public function roles()
    {
        return $this->belongsToMany(Role::class);
    }

    public function assignRole(Role $role)
    {
        return $this->roles()->save($role);
    }

    public function hasRole($role)
    {
        if (is_string($role)) {
            return $this->roles->contains('name', $role);
        }
        return !!$role->intersect($this->roles)->count();
    }


    public function shop()
    {
    
        // return $this->belongsTo(Shop::class  ,'merchant_id'  );

        return $this->hasOne(Shop::class , 'merchant_id'  );
    }

 

}
