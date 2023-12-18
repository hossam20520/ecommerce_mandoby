<?php

namespace App\Services\Product;

class Product
{
    
    private $name;
    private $price;

    public function __construct() {
     
    }


    public function setName($name) {
        return $this->name = $name;
    }

    public function getName() {
        return $this->name;
    }


    public function setPrice($price) {
        return $this->price = $price;
    }

    public function getPrice() {
        return $this->price;
    }


    public function getDiscount() {
        return $this->price;
    }

}



?>