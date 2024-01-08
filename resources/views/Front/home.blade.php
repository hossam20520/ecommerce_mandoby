<!-- resources/views/example.blade.php -->
    @extends('Front.layout') <!-- Extend the main layout -->

    @section('content') <!-- Define the content section -->
 

        <!-- mobile fix menu start -->
      
        <!-- mobile fix menu end -->
    
        <!-- Home Section Start -->
        @include('Front.partials.slider_secion')
        <!-- Home Section End -->
    
        <!-- Banner Section Start -->
  
        <!-- Banner Section End -->
        @include('Front.partials.banner_section')
        <!-- Category Section Start -->
        @include('Front.partials.category_section')
        <!-- Category Section End -->
    
        <!-- Product Fruit & Vegetables Section Start -->
        <section class="product-section-3">
            <div class="container-fluid-lg">
                <div class="title">
                    <h2>Fruits & Vegetables</h2>
                </div>
                <div class="row">
                    <div class="col-12">
                        <div class="slider-7_1 arrow-slider img-slider">
                            <div>
                                <div class="product-box-4 wow fadeInUp">
                                    <div class="product-image product-image-2">
                                        <a href="product-left-thumbnail.html">
                                            <img src="../assets/images/grocery/product/fruits-vegetables/1.png"
                                                class="img-fluid blur-up lazyload" alt="">
                                        </a>
    
                                        <ul class="option">
                                            <li data-bs-toggle="tooltip" data-bs-placement="top" title="Quick View">
                                                <a href="javascript:void(0)" data-bs-toggle="modal" data-bs-target="#view">
                                                    <i class="iconly-Show icli"></i>
                                                </a>
                                            </li>
                                            <li data-bs-toggle="tooltip" data-bs-placement="top" title="Wishlist">
                                                <a href="javascript:void(0)" class="notifi-wishlist">
                                                    <i class="iconly-Heart icli"></i>
                                                </a>
                                            </li>
                                            <li data-bs-toggle="tooltip" data-bs-placement="top" title="Compare">
                                                <a href="compare.html">
                                                    <i class="iconly-Swap icli"></i>
                                                </a>
                                            </li>
                                        </ul>
                                    </div>
    
                                    <div class="product-detail">
                                        <ul class="rating">
                                            <li>
                                                <i data-feather="star" class="fill"></i>
                                            </li>
                                            <li>
                                                <i data-feather="star" class="fill"></i>
                                            </li>
                                            <li>
                                                <i data-feather="star" class="fill"></i>
                                            </li>
                                            <li>
                                                <i data-feather="star" class="fill"></i>
                                            </li>
                                            <li>
                                                <i data-feather="star"></i>
                                            </li>
                                        </ul>
                                        <a href="product-left-thumbnail.html">
                                            <h5 class="name text-title">Bell pepper</h5>
                                        </a>
                                        <h5 class="price theme-color">$65.21<del>$71.25</del></h5>
    
                                        <div class="addtocart_btn">
                                            <button class="add-button addcart-button btn buy-button text-light">
                                                <i class="fa-solid fa-plus"></i>
                                            </button>
                                            <div class="qty-box cart_qty">
                                                <div class="input-group">
                                                    <button type="button" class="btn qty-left-minus" data-type="minus"
                                                        data-field="">
                                                        <i class="fa fa-minus" aria-hidden="true"></i>
                                                    </button>
                                                    <input class="form-control input-number qty-input" type="text"
                                                        name="quantity" value="1">
                                                    <button type="button" class="btn qty-right-plus" data-type="plus"
                                                        data-field="">
                                                        <i class="fa fa-plus" aria-hidden="true"></i>
                                                    </button>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
    
                            <div>
                                <div class="product-box-4 wow fadeInUp" data-wow-delay="0.05s">
                                    <div class="product-image product-image-2">
                                        <a href="product-left-thumbnail.html">
                                            <img src="../assets/images/grocery/product/fruits-vegetables/2.png"
                                                class="img-fluid blur-up lazyload" alt="">
                                        </a>
    
                                        <ul class="option">
                                            <li data-bs-toggle="tooltip" data-bs-placement="top" title="Quick View">
                                                <a href="javascript:void(0)" data-bs-toggle="modal" data-bs-target="#view">
                                                    <i class="iconly-Show icli"></i>
                                                </a>
                                            </li>
                                            <li data-bs-toggle="tooltip" data-bs-placement="top" title="Wishlist">
                                                <a href="javascript:void(0)" class="notifi-wishlist">
                                                    <i class="iconly-Heart icli"></i>
                                                </a>
                                            </li>
                                            <li data-bs-toggle="tooltip" data-bs-placement="top" title="Compare">
                                                <a href="compare.html">
                                                    <i class="iconly-Swap icli"></i>
                                                </a>
                                            </li>
                                        </ul>
                                    </div>
    
                                    <div class="product-detail">
                                        <ul class="rating">
                                            <li>
                                                <i data-feather="star" class="fill"></i>
                                            </li>
                                            <li>
                                                <i data-feather="star" class="fill"></i>
                                            </li>
                                            <li>
                                                <i data-feather="star" class="fill"></i>
                                            </li>
                                            <li>
                                                <i data-feather="star" class="fill"></i>
                                            </li>
                                            <li>
                                                <i data-feather="star"></i>
                                            </li>
                                        </ul>
                                        <a href="product-left-thumbnail.html">
                                            <h5 class="name text-title">Eggplant</h5>
                                        </a>
                                        <h5 class="price theme-color">$65.21<del>$71.25</del></h5>
                                        <div class="addtocart_btn">
                                            <button class="add-button addcart-button btn buy-button text-light">
                                                <i class="fa-solid fa-plus"></i>
                                            </button>
                                            <div class="qty-box cart_qty">
                                                <div class="input-group">
                                                    <button type="button" class="btn qty-left-minus" data-type="minus"
                                                        data-field="">
                                                        <i class="fa fa-minus" aria-hidden="true"></i>
                                                    </button>
                                                    <input class="form-control input-number qty-input" type="text"
                                                        name="quantity" value="1">
                                                    <button type="button" class="btn qty-right-plus" data-type="plus"
                                                        data-field="">
                                                        <i class="fa fa-plus" aria-hidden="true"></i>
                                                    </button>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
    
                            <div>
                                <div class="product-box-4 wow fadeInUp" data-wow-delay="0.1s">
                                    <div class="product-image product-image-2">
                                        <a href="product-left-thumbnail.html">
                                            <img src="../assets/images/grocery/product/fruits-vegetables/3.png"
                                                class="img-fluid blur-up lazyload" alt="">
                                        </a>
    
                                        <ul class="option">
                                            <li data-bs-toggle="tooltip" data-bs-placement="top" title="Quick View">
                                                <a href="javascript:void(0)" data-bs-toggle="modal" data-bs-target="#view">
                                                    <i class="iconly-Show icli"></i>
                                                </a>
                                            </li>
                                            <li data-bs-toggle="tooltip" data-bs-placement="top" title="Wishlist">
                                                <a href="javascript:void(0)" class="notifi-wishlist">
                                                    <i class="iconly-Heart icli"></i>
                                                </a>
                                            </li>
                                            <li data-bs-toggle="tooltip" data-bs-placement="top" title="Compare">
                                                <a href="compare.html">
                                                    <i class="iconly-Swap icli"></i>
                                                </a>
                                            </li>
                                        </ul>
                                    </div>
    
                                    <div class="product-detail">
                                        <ul class="rating">
                                            <li>
                                                <i data-feather="star" class="fill"></i>
                                            </li>
                                            <li>
                                                <i data-feather="star" class="fill"></i>
                                            </li>
                                            <li>
                                                <i data-feather="star" class="fill"></i>
                                            </li>
                                            <li>
                                                <i data-feather="star" class="fill"></i>
                                            </li>
                                            <li>
                                                <i data-feather="star"></i>
                                            </li>
                                        </ul>
                                        <a href="product-left-thumbnail.html">
                                            <h5 class="name text-title">Potato</h5>
                                        </a>
                                        <h5 class="price theme-color">$65.21<del>$71.25</del></h5>
                                        <div class="addtocart_btn">
                                            <button class="add-button addcart-button btn buy-button text-light">
                                                <i class="fa-solid fa-plus"></i>
                                            </button>
                                            <div class="qty-box cart_qty">
                                                <div class="input-group">
                                                    <button type="button" class="btn qty-left-minus" data-type="minus"
                                                        data-field="">
                                                        <i class="fa fa-minus" aria-hidden="true"></i>
                                                    </button>
                                                    <input class="form-control input-number qty-input" type="text"
                                                        name="quantity" value="1">
                                                    <button type="button" class="btn qty-right-plus" data-type="plus"
                                                        data-field="">
                                                        <i class="fa fa-plus" aria-hidden="true"></i>
                                                    </button>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
    
                            <div>
                                <div class="product-box-4 wow fadeInUp" data-wow-delay="0.15s">
                                    <div class="product-image product-image-2">
                                        <a href="product-left-thumbnail.html">
                                            <img src="../assets/images/grocery/product/fruits-vegetables/4.png"
                                                class="img-fluid blur-up lazyload" alt="">
                                        </a>
    
                                        <ul class="option">
                                            <li data-bs-toggle="tooltip" data-bs-placement="top" title="Quick View">
                                                <a href="javascript:void(0)" data-bs-toggle="modal" data-bs-target="#view">
                                                    <i class="iconly-Show icli"></i>
                                                </a>
                                            </li>
                                            <li data-bs-toggle="tooltip" data-bs-placement="top" title="Wishlist">
                                                <a href="javascript:void(0)" class="notifi-wishlist">
                                                    <i class="iconly-Heart icli"></i>
                                                </a>
                                            </li>
                                            <li data-bs-toggle="tooltip" data-bs-placement="top" title="Compare">
                                                <a href="compare.html">
                                                    <i class="iconly-Swap icli"></i>
                                                </a>
                                            </li>
                                        </ul>
                                    </div>
    
                                    <div class="product-detail">
                                        <ul class="rating">
                                            <li>
                                                <i data-feather="star" class="fill"></i>
                                            </li>
                                            <li>
                                                <i data-feather="star" class="fill"></i>
                                            </li>
                                            <li>
                                                <i data-feather="star" class="fill"></i>
                                            </li>
                                            <li>
                                                <i data-feather="star" class="fill"></i>
                                            </li>
                                            <li>
                                                <i data-feather="star"></i>
                                            </li>
                                        </ul>
                                        <a href="product-left-thumbnail.html">
                                            <h5 class="name text-title">Onion</h5>
                                        </a>
                                        <h5 class="price theme-color">$65.21<del>$71.25</del></h5>
                                        <div class="addtocart_btn">
                                            <button class="add-button addcart-button btn buy-button text-light">
                                                <i class="fa-solid fa-plus"></i>
                                            </button>
                                            <div class="qty-box cart_qty">
                                                <div class="input-group">
                                                    <button type="button" class="btn qty-left-minus" data-type="minus"
                                                        data-field="">
                                                        <i class="fa fa-minus" aria-hidden="true"></i>
                                                    </button>
                                                    <input class="form-control input-number qty-input" type="text"
                                                        name="quantity" value="1">
                                                    <button type="button" class="btn qty-right-plus" data-type="plus"
                                                        data-field="">
                                                        <i class="fa fa-plus" aria-hidden="true"></i>
                                                    </button>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
    
                            <div>
                                <div class="product-box-4 wow fadeInUp" data-wow-delay="0.2s">
                                    <div class="product-image product-image-2">
                                        <a href="product-left-thumbnail.html">
                                            <img src="../assets/images/grocery/product/fruits-vegetables/5.png"
                                                class="img-fluid blur-up lazyload" alt="">
                                        </a>
    
                                        <ul class="option">
                                            <li data-bs-toggle="tooltip" data-bs-placement="top" title="Quick View">
                                                <a href="javascript:void(0)" data-bs-toggle="modal" data-bs-target="#view">
                                                    <i class="iconly-Show icli"></i>
                                                </a>
                                            </li>
                                            <li data-bs-toggle="tooltip" data-bs-placement="top" title="Wishlist">
                                                <a href="javascript:void(0)" class="notifi-wishlist">
                                                    <i class="iconly-Heart icli"></i>
                                                </a>
                                            </li>
                                            <li data-bs-toggle="tooltip" data-bs-placement="top" title="Compare">
                                                <a href="compare.html">
                                                    <i class="iconly-Swap icli"></i>
                                                </a>
                                            </li>
                                        </ul>
                                    </div>
    
                                    <div class="product-detail">
                                        <ul class="rating">
                                            <li>
                                                <i data-feather="star" class="fill"></i>
                                            </li>
                                            <li>
                                                <i data-feather="star" class="fill"></i>
                                            </li>
                                            <li>
                                                <i data-feather="star" class="fill"></i>
                                            </li>
                                            <li>
                                                <i data-feather="star" class="fill"></i>
                                            </li>
                                            <li>
                                                <i data-feather="star"></i>
                                            </li>
                                        </ul>
                                        <a href="product-left-thumbnail.html">
                                            <h5 class="name text-title">Baby Chili</h5>
                                        </a>
                                        <h5 class="price theme-color">$65.21<del>$71.25</del></h5>
                                        <div class="addtocart_btn">
                                            <button class="add-button addcart-button btn buy-button text-light">
                                                <i class="fa-solid fa-plus"></i>
                                            </button>
                                            <div class="qty-box cart_qty">
                                                <div class="input-group">
                                                    <button type="button" class="btn qty-left-minus" data-type="minus"
                                                        data-field="">
                                                        <i class="fa fa-minus" aria-hidden="true"></i>
                                                    </button>
                                                    <input class="form-control input-number qty-input" type="text"
                                                        name="quantity" value="1">
                                                    <button type="button" class="btn qty-right-plus" data-type="plus"
                                                        data-field="">
                                                        <i class="fa fa-plus" aria-hidden="true"></i>
                                                    </button>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
    
                            <div>
                                <div class="product-box-4 wow fadeInUp" data-wow-delay="0.25s">
                                    <div class="product-image product-image-2">
                                        <a href="product-left-thumbnail.html">
                                            <img src="../assets/images/grocery/product/fruits-vegetables/6.png"
                                                class="img-fluid blur-up lazyload" alt="">
                                        </a>
    
                                        <ul class="option">
                                            <li data-bs-toggle="tooltip" data-bs-placement="top" title="Quick View">
                                                <a href="javascript:void(0)" data-bs-toggle="modal" data-bs-target="#view">
                                                    <i class="iconly-Show icli"></i>
                                                </a>
                                            </li>
                                            <li data-bs-toggle="tooltip" data-bs-placement="top" title="Wishlist">
                                                <a href="javascript:void(0)" class="notifi-wishlist">
                                                    <i class="iconly-Heart icli"></i>
                                                </a>
                                            </li>
                                            <li data-bs-toggle="tooltip" data-bs-placement="top" title="Compare">
                                                <a href="compare.html">
                                                    <i class="iconly-Swap icli"></i>
                                                </a>
                                            </li>
                                        </ul>
                                    </div>
    
                                    <div class="product-detail">
                                        <ul class="rating">
                                            <li>
                                                <i data-feather="star" class="fill"></i>
                                            </li>
                                            <li>
                                                <i data-feather="star" class="fill"></i>
                                            </li>
                                            <li>
                                                <i data-feather="star" class="fill"></i>
                                            </li>
                                            <li>
                                                <i data-feather="star" class="fill"></i>
                                            </li>
                                            <li>
                                                <i data-feather="star"></i>
                                            </li>
                                        </ul>
                                        <a href="product-left-thumbnail.html">
                                            <h5 class="name text-title">Broccoli</h5>
                                        </a>
                                        <h5 class="price theme-color">$65.21<del>$71.25</del></h5>
                                        <div class="addtocart_btn">
                                            <button class="add-button addcart-button btn buy-button text-light">
                                                <i class="fa-solid fa-plus"></i>
                                            </button>
                                            <div class="qty-box cart_qty">
                                                <div class="input-group">
                                                    <button type="button" class="btn qty-left-minus" data-type="minus"
                                                        data-field="">
                                                        <i class="fa fa-minus" aria-hidden="true"></i>
                                                    </button>
                                                    <input class="form-control input-number qty-input" type="text"
                                                        name="quantity" value="1">
                                                    <button type="button" class="btn qty-right-plus" data-type="plus"
                                                        data-field="">
                                                        <i class="fa fa-plus" aria-hidden="true"></i>
                                                    </button>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
    
                            <div>
                                <div class="product-box-4 wow fadeInUp" data-wow-delay="0.3s">
                                    <div class="product-image product-image-2">
                                        <a href="product-left-thumbnail.html">
                                            <img src="../assets/images/grocery/product/fruits-vegetables/7.png"
                                                class="img-fluid blur-up lazyload" alt="">
                                        </a>
    
                                        <ul class="option">
                                            <li data-bs-toggle="tooltip" data-bs-placement="top" title="Quick View">
                                                <a href="javascript:void(0)" data-bs-toggle="modal" data-bs-target="#view">
                                                    <i class="iconly-Show icli"></i>
                                                </a>
                                            </li>
                                            <li data-bs-toggle="tooltip" data-bs-placement="top" title="Wishlist">
                                                <a href="javascript:void(0)" class="notifi-wishlist">
                                                    <i class="iconly-Heart icli"></i>
                                                </a>
                                            </li>
                                            <li data-bs-toggle="tooltip" data-bs-placement="top" title="Compare">
                                                <a href="compare.html">
                                                    <i class="iconly-Swap icli"></i>
                                                </a>
                                            </li>
                                        </ul>
                                    </div>
    
                                    <div class="product-detail">
                                        <ul class="rating">
                                            <li>
                                                <i data-feather="star" class="fill"></i>
                                            </li>
                                            <li>
                                                <i data-feather="star" class="fill"></i>
                                            </li>
                                            <li>
                                                <i data-feather="star" class="fill"></i>
                                            </li>
                                            <li>
                                                <i data-feather="star" class="fill"></i>
                                            </li>
                                            <li>
                                                <i data-feather="star"></i>
                                            </li>
                                        </ul>
                                        <a href="product-left-thumbnail.html">
                                            <h5 class="name text-title">Apple</h5>
                                        </a>
                                        <h5 class="price theme-color">$65.21<del>$71.25</del></h5>
                                        <div class="addtocart_btn">
                                            <button class="add-button addcart-button btn buy-button text-light">
                                                <i class="fa-solid fa-plus"></i>
                                            </button>
                                            <div class="qty-box cart_qty">
                                                <div class="input-group">
                                                    <button type="button" class="btn qty-left-minus" data-type="minus"
                                                        data-field="">
                                                        <i class="fa fa-minus" aria-hidden="true"></i>
                                                    </button>
                                                    <input class="form-control input-number qty-input" type="text"
                                                        name="quantity" value="1">
                                                    <button type="button" class="btn qty-right-plus" data-type="plus"
                                                        data-field="">
                                                        <i class="fa fa-plus" aria-hidden="true"></i>
                                                    </button>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
    
                            <div>
                                <div class="product-box-4 wow fadeInUp" data-wow-delay="0.35s">
                                    <div class="product-image product-image-2">
                                        <a href="product-left-thumbnail.html">
                                            <img src="../assets/images/grocery/product/fruits-vegetables/8.png"
                                                class="img-fluid blur-up lazyload" alt="">
                                        </a>
    
                                        <ul class="option">
                                            <li data-bs-toggle="tooltip" data-bs-placement="top" title="Quick View">
                                                <a href="javascript:void(0)" data-bs-toggle="modal" data-bs-target="#view">
                                                    <i class="iconly-Show icli"></i>
                                                </a>
                                            </li>
                                            <li data-bs-toggle="tooltip" data-bs-placement="top" title="Wishlist">
                                                <a href="javascript:void(0)" class="notifi-wishlist">
                                                    <i class="iconly-Heart icli"></i>
                                                </a>
                                            </li>
                                            <li data-bs-toggle="tooltip" data-bs-placement="top" title="Compare">
                                                <a href="compare.html">
                                                    <i class="iconly-Swap icli"></i>
                                                </a>
                                            </li>
                                        </ul>
                                    </div>
    
                                    <div class="product-detail">
                                        <ul class="rating">
                                            <li>
                                                <i data-feather="star" class="fill"></i>
                                            </li>
                                            <li>
                                                <i data-feather="star" class="fill"></i>
                                            </li>
                                            <li>
                                                <i data-feather="star" class="fill"></i>
                                            </li>
                                            <li>
                                                <i data-feather="star" class="fill"></i>
                                            </li>
                                            <li>
                                                <i data-feather="star"></i>
                                            </li>
                                        </ul>
                                        <a href="product-left-thumbnail.html">
                                            <h5 class="name text-title">Strawberry</h5>
                                        </a>
                                        <h5 class="price theme-color">$65.21<del>$71.25</del></h5>
                                        <div class="addtocart_btn">
                                            <button class="add-button addcart-button btn buy-button text-light">
                                                <i class="fa-solid fa-plus"></i>
                                            </button>
                                            <div class="qty-box cart_qty">
                                                <div class="input-group">
                                                    <button type="button" class="btn qty-left-minus" data-type="minus"
                                                        data-field="">
                                                        <i class="fa fa-minus" aria-hidden="true"></i>
                                                    </button>
                                                    <input class="form-control input-number qty-input" type="text"
                                                        name="quantity" value="1">
                                                    <button type="button" class="btn qty-right-plus" data-type="plus"
                                                        data-field="">
                                                        <i class="fa fa-plus" aria-hidden="true"></i>
                                                    </button>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
        <!-- Product Fruit & Vegetables Section End -->
    
        <!-- Banner Section Start -->
        <section class="bank-section overflow-hidden">
            <div class="container-fluid-lg">
                <div class="title">
                    <h2>Bank & Wallet Offers</h2>
                </div>
                <div class="slider-bank-3 arrow-slider slick-height">
                    <div>
                        <div class="bank-offer">
                            <div class="bank-header">
                                <div class="bank-left w-100">
                                    <div class="bank-image">
                                        <img src="../assets/images/grocery/bank/name/1.png" class="img-fluid" alt="">
                                    </div>
                                    <div class="bank-name">
                                        <h2>GET 10% OFF</h2>
                                        <h5 class="discount text-content">When you spend $20</h5>
                                        <h5 class="valid text-content">Valid for 30 days</h5>
                                    </div>
                                </div>
    
                                <div class="bank-right w-100">
                                    <img src="../assets/images/grocery/bank/price/1.svg" class="img-fluid" alt="">
                                </div>
                            </div>
    
                            <div class="bank-footer bank-footer-1">
                                <h4>Code :
                                    <input id="clipboardexample" value="MULTICART" />
                                </h4>
                                <button type="button" class="bank-coupon btn" id="copyText" data-clipboard-action="copy"
                                    data-clipboard-target="#clipboardexample">Copy Code</button>
                            </div>
                        </div>
                    </div>
    
                    <div>
                        <div class="bank-offer">
                            <div class="bank-header">
                                <div class="bank-left w-100">
                                    <div class="bank-image">
                                        <img src="../assets/images/grocery/bank/name/2.png" class="img-fluid" alt="">
                                    </div>
                                    <div class="bank-name">
                                        <h2 class="bank-offer-2">GET 10% OFF</h2>
                                        <h5 class="discount text-content">When you spend $20</h5>
                                        <h5 class="valid text-content">Valid for 30 days</h5>
                                    </div>
                                </div>
    
                                <div class="bank-right w-100">
                                    <img src="../assets/images/grocery/bank/price/2.svg" class="img-fluid" alt="">
                                </div>
                            </div>
    
                            <div class="bank-footer bank-footer-2">
                                <h4>Code :
                                    <input id="clipboardexample1" value="MULTICART" />
                                </h4>
                                <button class="bank-coupon btn" id="copyText1">Copy Code</button>
                            </div>
                        </div>
                    </div>
    
                    <div>
                        <div class="bank-offer">
                            <div class="bank-header">
                                <div class="bank-left w-100">
                                    <div class="bank-image">
                                        <img src="../assets/images/grocery/bank/name/3.png" class="img-fluid" alt="">
                                    </div>
                                    <div class="bank-name">
                                        <h2 class="bank-offer-3">GET 10% OFF</h2>
                                        <h5 class="discount text-content">When you spend $20</h5>
                                        <h5 class="valid text-content">Valid for 30 days</h5>
                                    </div>
                                </div>
    
                                <div class="bank-right w-100">
                                    <img src="../assets/images/grocery/bank/price/3.svg" class="img-fluid" alt="">
                                </div>
                            </div>
    
                            <div class="bank-footer bank-footer-3">
                                <h4>Code :
                                    <input id="clipboardexample2" value="MULTICART" />
                                </h4>
                                <button class="bank-coupon btn" id="copyText2">Copy Code</button>
                            </div>
                        </div>
                    </div>
    
                    <div>
                        <div class="bank-offer">
                            <div class="bank-header">
                                <div class="bank-left w-100">
                                    <div class="bank-image">
                                        <img src="../assets/images/grocery/bank/name/1.png" class="img-fluid" alt="">
                                    </div>
                                    <div class="bank-name">
                                        <h2>GET 10% OFF</h2>
                                        <h5 class="discount text-content">When you spend $20</h5>
                                        <h5 class="valid text-content">Valid for 30 days</h5>
                                    </div>
                                </div>
    
                                <div class="bank-right w-100">
                                    <img src="../assets/images/grocery/bank/price/1.svg" class="img-fluid" alt="">
                                </div>
                            </div>
    
                            <div class="bank-footer bank-footer-1">
                                <h4>Code :
                                    <input id="clipboardexample3" value="MULTICART" />
                                </h4>
                                <button class="bank-coupon btn" id="copyText3">Copy Code</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
        <!-- Banner Section End -->
    
        <!-- Deal Section Start -->
        <section class="product-section product-section-3">
            <div class="container-fluid-lg">
                <div class="title">
                    <h2>Top Selling Items</h2>
                </div>
                <div class="row g-sm-4 g-3">
                    <div class="col-xxl-4 col-lg-5 order-lg-2">
                        <div class="product-bg-image wow fadeInUp">
                            <div class="product-title product-warning">
                                <h2>Special Offer</h2>
                            </div>
    
                            <div class="product-box-4 product-box-3 rounded-0">
                                <div class="deal-box">
                                    <div class="circle-box">
                                        <div class="shape-circle">
                                            <img src="../assets/images/grocery/circle.svg" class="blur-up lazyload" alt="">
                                            <div class="shape-text">
                                                <h6>Hot <br> Deal</h6>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div class="top-selling-slider product-arrow">
                                    <div>
                                        <div class="product-image">
                                            <a href="product-left-thumbnail.html">
                                                <img src="../assets/images/grocery/deal/big.png"
                                                    class="img-fluid product-image blur-up lazyload" alt="">
                                            </a>
    
                                            <ul class="option">
                                                <li data-bs-toggle="tooltip" data-bs-placement="top" title="Quick View">
                                                    <a href="javascript:void(0)" data-bs-toggle="modal"
                                                        data-bs-target="#view">
                                                        <i class="iconly-Show icli"></i>
                                                    </a>
                                                </li>
                                                <li data-bs-toggle="tooltip" data-bs-placement="top" title="Wishlist">
                                                    <a href="javascript:void(0)" class="notifi-wishlist">
                                                        <i class="iconly-Heart icli"></i>
                                                    </a>
                                                </li>
                                                <li data-bs-toggle="tooltip" data-bs-placement="top" title="Compare">
                                                    <a href="compare.html">
                                                        <i class="iconly-Swap icli"></i>
                                                    </a>
                                                </li>
                                            </ul>
                                        </div>
    
                                        <div class="product-detail text-center">
                                            <ul class="rating justify-content-center">
                                                <li>
                                                    <i data-feather="star" class="fill"></i>
                                                </li>
                                                <li>
                                                    <i data-feather="star" class="fill"></i>
                                                </li>
                                                <li>
                                                    <i data-feather="star" class="fill"></i>
                                                </li>
                                                <li>
                                                    <i data-feather="star" class="fill"></i>
                                                </li>
                                                <li>
                                                    <i data-feather="star"></i>
                                                </li>
                                            </ul>
                                            <a href="product-left-thumbnail.html">
                                                <h3 class="name w-100 mx-auto text-center">Unisex Small Trolley
                                                    Suitcase</h3>
                                            </a>
                                            <h3 class="price theme-color d-flex justify-content-center">
                                                $65.21<del class="delete-price">$71.25</del>
                                            </h3>
                                            <div class="progress custom-progressbar">
                                                <div class="progress-bar" style="width: 79%" role="progressbar"
                                                    aria-valuenow="0" aria-valuemin="0" aria-valuemax="100"></div>
                                            </div>
                                            <h5 class="text-content">Solid : <span class="text-dark">30 items</span>
                                                <span class="ms-auto text-content">Hurry up offer end in</span></h5>
    
                                            <div class="timer timer-2 ms-0 my-4" id="clockdiv-1" data-hours="1"
                                                data-minutes="2" data-seconds="3">
                                                <ul class="d-flex justify-content-center">
                                                    <li>
                                                        <div class="counter">
                                                            <div class="days">
                                                                <h6></h6>
                                                            </div>
                                                        </div>
                                                    </li>
                                                    <li>
                                                        <div class="counter">
                                                            <div class="hours">
                                                                <h6></h6>
                                                            </div>
                                                        </div>
                                                    </li>
                                                    <li>
                                                        <div class="counter">
                                                            <div class="minutes">
                                                                <h6></h6>
                                                            </div>
                                                        </div>
                                                    </li>
                                                    <li>
                                                        <div class="counter">
                                                            <div class="seconds">
                                                                <h6></h6>
                                                            </div>
                                                        </div>
                                                    </li>
                                                </ul>
                                            </div>
                                        </div>
                                    </div>
    
                                    <div>
                                        <div class="product-image">
                                            <a href="product-left-thumbnail.html">
                                                <img src="../assets/images/grocery/deal/big.png"
                                                    class="img-fluid product-image blur-up lazyload" alt="">
                                            </a>
    
                                            <ul class="option">
                                                <li data-bs-toggle="tooltip" data-bs-placement="top" title="Quick View">
                                                    <a href="javascript:void(0)" data-bs-toggle="modal"
                                                        data-bs-target="#view">
                                                        <i class="iconly-Show icli"></i>
                                                    </a>
                                                </li>
                                                <li data-bs-toggle="tooltip" data-bs-placement="top" title="Wishlist">
                                                    <a href="javascript:void(0)" class="notifi-wishlist">
                                                        <i class="iconly-Heart icli"></i>
                                                    </a>
                                                </li>
                                                <li data-bs-toggle="tooltip" data-bs-placement="top" title="Compare">
                                                    <a href="compare.html">
                                                        <i class="iconly-Swap icli"></i>
                                                    </a>
                                                </li>
                                            </ul>
                                        </div>
    
                                        <div class="product-detail text-center">
                                            <ul class="rating justify-content-center">
                                                <li>
                                                    <i data-feather="star" class="fill"></i>
                                                </li>
                                                <li>
                                                    <i data-feather="star" class="fill"></i>
                                                </li>
                                                <li>
                                                    <i data-feather="star" class="fill"></i>
                                                </li>
                                                <li>
                                                    <i data-feather="star" class="fill"></i>
                                                </li>
                                                <li>
                                                    <i data-feather="star"></i>
                                                </li>
                                            </ul>
                                            <a href="product-left-thumbnail.html">
                                                <h3 class="name w-100 mx-auto text-center text-title">Unisex Small Trolley
                                                    Suitcase</h3>
                                            </a>
                                            <h3 class="price theme-color d-flex justify-content-center">
                                                $65.21<del class="delete-price">$71.25</del>
                                            </h3>
                                            <div class="progress custom-progressbar">
                                                <div class="progress-bar" style="width: 41%" role="progressbar"
                                                    aria-valuenow="0" aria-valuemin="0" aria-valuemax="100"></div>
                                            </div>
                                            <h5 class="text-content">Solid : <span class="text-dark">30 items</span>
                                                <span class="ms-auto text-content">Hurry up offer end in</span></h5>
    
                                            <div class="timer timer-2 ms-0 my-4" id="clockdiv-2" data-hours="1"
                                                data-minutes="2" data-seconds="3">
                                                <ul class="d-flex justify-content-center">
                                                    <li>
                                                        <div class="counter">
                                                            <div class="days">
                                                                <h6></h6>
                                                            </div>
                                                        </div>
                                                    </li>
                                                    <li>
                                                        <div class="counter">
                                                            <div class="hours">
                                                                <h6></h6>
                                                            </div>
                                                        </div>
                                                    </li>
                                                    <li>
                                                        <div class="counter">
                                                            <div class="minutes">
                                                                <h6></h6>
                                                            </div>
                                                        </div>
                                                    </li>
                                                    <li>
                                                        <div class="counter">
                                                            <div class="seconds">
                                                                <h6></h6>
                                                            </div>
                                                        </div>
                                                    </li>
                                                </ul>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
    
                    <div class="col-xxl-8 col-lg-7 order-lg-1">
                        <div class="slider-5_2 img-slider">
                            <div>
                                <div class="product-box-4 wow fadeInUp">
                                    <div class="product-image product-image-2">
                                        <a href="product-left-thumbnail.html">
                                            <img src="../assets/images/grocery/deal/1.png"
                                                class="img-fluid blur-up lazyload" alt="">
                                        </a>
    
                                        <ul class="option">
                                            <li data-bs-toggle="tooltip" data-bs-placement="top" title="Quick View">
                                                <a href="javascript:void(0)" data-bs-toggle="modal" data-bs-target="#view">
                                                    <i class="iconly-Show icli"></i>
                                                </a>
                                            </li>
                                            <li data-bs-toggle="tooltip" data-bs-placement="top" title="Wishlist">
                                                <a href="javascript:void(0)" class="notifi-wishlist">
                                                    <i class="iconly-Heart icli"></i>
                                                </a>
                                            </li>
                                            <li data-bs-toggle="tooltip" data-bs-placement="top" title="Compare">
                                                <a href="compare.html">
                                                    <i class="iconly-Swap icli"></i>
                                                </a>
                                            </li>
                                        </ul>
                                    </div>
    
                                    <div class="product-detail">
                                        <ul class="rating">
                                            <li>
                                                <i data-feather="star" class="fill"></i>
                                            </li>
                                            <li>
                                                <i data-feather="star" class="fill"></i>
                                            </li>
                                            <li>
                                                <i data-feather="star" class="fill"></i>
                                            </li>
                                            <li>
                                                <i data-feather="star" class="fill"></i>
                                            </li>
                                            <li>
                                                <i data-feather="star"></i>
                                            </li>
                                        </ul>
                                        <a href="product-left-thumbnail.html">
                                            <h5 class="name text-title">Potato Chips</h5>
                                        </a>
                                        <h5 class="price theme-color">$65.21<del>$71.25</del></h5>
                                        <div class="addtocart_btn">
                                            <button class="add-button addcart-button btn buy-button text-light">
                                                <i class="fa-solid fa-plus"></i>
                                            </button>
                                            <div class="qty-box cart_qty">
                                                <div class="input-group">
                                                    <button type="button" class="btn qty-left-minus" data-type="minus"
                                                        data-field="">
                                                        <i class="fa fa-minus" aria-hidden="true"></i>
                                                    </button>
                                                    <input class="form-control input-number qty-input" type="text"
                                                        name="quantity" value="1">
                                                    <button type="button" class="btn qty-right-plus" data-type="plus"
                                                        data-field="">
                                                        <i class="fa fa-plus" aria-hidden="true"></i>
                                                    </button>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
    
                                <div class="product-box-4 wow fadeInUp" data-wow-delay="0.05s">
                                    <div class="product-image product-image-2">
                                        <a href="product-left-thumbnail.html">
                                            <img src="../assets/images/grocery/deal/2.png"
                                                class="img-fluid blur-up lazyload" alt="">
                                        </a>
    
                                        <ul class="option">
                                            <li data-bs-toggle="tooltip" data-bs-placement="top" title="Quick View">
                                                <a href="javascript:void(0)" data-bs-toggle="modal" data-bs-target="#view">
                                                    <i class="iconly-Show icli"></i>
                                                </a>
                                            </li>
                                            <li data-bs-toggle="tooltip" data-bs-placement="top" title="Wishlist">
                                                <a href="javascript:void(0)" class="notifi-wishlist">
                                                    <i class="iconly-Heart icli"></i>
                                                </a>
                                            </li>
                                            <li data-bs-toggle="tooltip" data-bs-placement="top" title="Compare">
                                                <a href="compare.html">
                                                    <i class="iconly-Swap icli"></i>
                                                </a>
                                            </li>
                                        </ul>
                                    </div>
    
                                    <div class="product-detail">
                                        <ul class="rating">
                                            <li>
                                                <i data-feather="star" class="fill"></i>
                                            </li>
                                            <li>
                                                <i data-feather="star" class="fill"></i>
                                            </li>
                                            <li>
                                                <i data-feather="star" class="fill"></i>
                                            </li>
                                            <li>
                                                <i data-feather="star" class="fill"></i>
                                            </li>
                                            <li>
                                                <i data-feather="star"></i>
                                            </li>
                                        </ul>
                                        <a href="product-left-thumbnail.html">
                                            <h5 class="name text-title">Body Lotion</h5>
                                        </a>
                                        <h5 class="price theme-color">$65.21<del>$71.25</del></h5>
                                        <div class="addtocart_btn">
                                            <button class="add-button addcart-button btn buy-button text-light">
                                                <i class="fa-solid fa-plus"></i>
                                            </button>
                                            <div class="qty-box cart_qty">
                                                <div class="input-group">
                                                    <button type="button" class="btn qty-left-minus" data-type="minus"
                                                        data-field="">
                                                        <i class="fa fa-minus" aria-hidden="true"></i>
                                                    </button>
                                                    <input class="form-control input-number qty-input" type="text"
                                                        name="quantity" value="1">
                                                    <button type="button" class="btn qty-right-plus" data-type="plus"
                                                        data-field="">
                                                        <i class="fa fa-plus" aria-hidden="true"></i>
                                                    </button>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
    
                            <div>
                                <div class="product-box-4 wow fadeInUp">
                                    <div class="product-image product-image-2">
                                        <a href="product-left-thumbnail.html">
                                            <img src="../assets/images/grocery/deal/3.png"
                                                class="img-fluid blur-up lazyload" alt="">
                                        </a>
    
                                        <ul class="option">
                                            <li data-bs-toggle="tooltip" data-bs-placement="top" title="Quick View">
                                                <a href="javascript:void(0)" data-bs-toggle="modal" data-bs-target="#view">
                                                    <i class="iconly-Show icli"></i>
                                                </a>
                                            </li>
                                            <li data-bs-toggle="tooltip" data-bs-placement="top" title="Wishlist">
                                                <a href="javascript:void(0)" class="notifi-wishlist">
                                                    <i class="iconly-Heart icli"></i>
                                                </a>
                                            </li>
                                            <li data-bs-toggle="tooltip" data-bs-placement="top" title="Compare">
                                                <a href="compare.html">
                                                    <i class="iconly-Swap icli"></i>
                                                </a>
                                            </li>
                                        </ul>
                                    </div>
    
                                    <div class="product-detail">
                                        <ul class="rating">
                                            <li>
                                                <i data-feather="star" class="fill"></i>
                                            </li>
                                            <li>
                                                <i data-feather="star" class="fill"></i>
                                            </li>
                                            <li>
                                                <i data-feather="star" class="fill"></i>
                                            </li>
                                            <li>
                                                <i data-feather="star" class="fill"></i>
                                            </li>
                                            <li>
                                                <i data-feather="star"></i>
                                            </li>
                                        </ul>
                                        <a href="product-left-thumbnail.html">
                                            <h5 class="name text-title">Nithara Coffee</h5>
                                        </a>
                                        <h5 class="price theme-color">$65.21<del>$71.25</del></h5>
                                        <div class="addtocart_btn">
                                            <button class="add-button addcart-button btn buy-button text-light">
                                                <i class="fa-solid fa-plus"></i>
                                            </button>
                                            <div class="qty-box cart_qty">
                                                <div class="input-group">
                                                    <button type="button" class="btn qty-left-minus" data-type="minus"
                                                        data-field="">
                                                        <i class="fa fa-minus" aria-hidden="true"></i>
                                                    </button>
                                                    <input class="form-control input-number qty-input" type="text"
                                                        name="quantity" value="1">
                                                    <button type="button" class="btn qty-right-plus" data-type="plus"
                                                        data-field="">
                                                        <i class="fa fa-plus" aria-hidden="true"></i>
                                                    </button>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
    
                                <div class="product-box-4 wow fadeInUp" data-wow-delay="0.05s">
                                    <div class="product-image product-image-2">
                                        <a href="product-left-thumbnail.html">
                                            <img src="../assets/images/grocery/deal/4.png"
                                                class="img-fluid blur-up lazyload" alt="">
                                        </a>
    
                                        <ul class="option">
                                            <li data-bs-toggle="tooltip" data-bs-placement="top" title="Quick View">
                                                <a href="javascript:void(0)" data-bs-toggle="modal" data-bs-target="#view">
                                                    <i class="iconly-Show icli"></i>
                                                </a>
                                            </li>
                                            <li data-bs-toggle="tooltip" data-bs-placement="top" title="Wishlist">
                                                <a href="javascript:void(0)" class="notifi-wishlist">
                                                    <i class="iconly-Heart icli"></i>
                                                </a>
                                            </li>
                                            <li data-bs-toggle="tooltip" data-bs-placement="top" title="Compare">
                                                <a href="compare.html">
                                                    <i class="iconly-Swap icli"></i>
                                                </a>
                                            </li>
                                        </ul>
                                    </div>
    
                                    <div class="product-detail">
                                        <ul class="rating">
                                            <li>
                                                <i data-feather="star" class="fill"></i>
                                            </li>
                                            <li>
                                                <i data-feather="star" class="fill"></i>
                                            </li>
                                            <li>
                                                <i data-feather="star" class="fill"></i>
                                            </li>
                                            <li>
                                                <i data-feather="star" class="fill"></i>
                                            </li>
                                            <li>
                                                <i data-feather="star"></i>
                                            </li>
                                        </ul>
                                        <a href="product-left-thumbnail.html">
                                            <h5 class="name text-title">Cow Ghee</h5>
                                        </a>
                                        <h5 class="price theme-color">$65.21<del>$71.25</del></h5>
                                        <div class="addtocart_btn">
                                            <button class="add-button addcart-button btn buy-button text-light">
                                                <i class="fa-solid fa-plus"></i>
                                            </button>
                                            <div class="qty-box cart_qty">
                                                <div class="input-group">
                                                    <button type="button" class="btn qty-left-minus" data-type="minus"
                                                        data-field="">
                                                        <i class="fa fa-minus" aria-hidden="true"></i>
                                                    </button>
                                                    <input class="form-control input-number qty-input" type="text"
                                                        name="quantity" value="1">
                                                    <button type="button" class="btn qty-right-plus" data-type="plus"
                                                        data-field="">
                                                        <i class="fa fa-plus" aria-hidden="true"></i>
                                                    </button>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
    
                            <div>
                                <div class="product-box-4 wow fadeInUp">
                                    <div class="product-image product-image-2">
                                        <a href="product-left-thumbnail.html">
                                            <img src="../assets/images/grocery/deal/5.png"
                                                class="img-fluid blur-up lazyload" alt="">
                                        </a>
    
                                        <ul class="option">
                                            <li data-bs-toggle="tooltip" data-bs-placement="top" title="Quick View">
                                                <a href="javascript:void(0)" data-bs-toggle="modal" data-bs-target="#view">
                                                    <i class="iconly-Show icli"></i>
                                                </a>
                                            </li>
                                            <li data-bs-toggle="tooltip" data-bs-placement="top" title="Wishlist">
                                                <a href="javascript:void(0)" class="notifi-wishlist">
                                                    <i class="iconly-Heart icli"></i>
                                                </a>
                                            </li>
                                            <li data-bs-toggle="tooltip" data-bs-placement="top" title="Compare">
                                                <a href="compare.html">
                                                    <i class="iconly-Swap icli"></i>
                                                </a>
                                            </li>
                                        </ul>
                                    </div>
    
                                    <div class="product-detail">
                                        <ul class="rating">
                                            <li>
                                                <i data-feather="star" class="fill"></i>
                                            </li>
                                            <li>
                                                <i data-feather="star" class="fill"></i>
                                            </li>
                                            <li>
                                                <i data-feather="star" class="fill"></i>
                                            </li>
                                            <li>
                                                <i data-feather="star" class="fill"></i>
                                            </li>
                                            <li>
                                                <i data-feather="star"></i>
                                            </li>
                                        </ul>
                                        <a href="product-left-thumbnail.html">
                                            <h5 class="name text-title">Fresh Cilantro</h5>
                                        </a>
                                        <h5 class="price theme-color">$65.21<del>$71.25</del></h5>
                                        <div class="addtocart_btn">
                                            <button class="add-button addcart-button btn buy-button text-light">
                                                <i class="fa-solid fa-plus"></i>
                                            </button>
                                            <div class="qty-box cart_qty">
                                                <div class="input-group">
                                                    <button type="button" class="btn qty-left-minus" data-type="minus"
                                                        data-field="">
                                                        <i class="fa fa-minus" aria-hidden="true"></i>
                                                    </button>
                                                    <input class="form-control input-number qty-input" type="text"
                                                        name="quantity" value="1">
                                                    <button type="button" class="btn qty-right-plus" data-type="plus"
                                                        data-field="">
                                                        <i class="fa fa-plus" aria-hidden="true"></i>
                                                    </button>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
    
                                <div class="product-box-4 wow fadeInUp" data-wow-delay="0.05s">
                                    <div class="product-image product-image-2">
                                        <a href="product-left-thumbnail.html">
                                            <img src="../assets/images/grocery/deal/6.png"
                                                class="img-fluid blur-up lazyload" alt="">
                                        </a>
    
                                        <ul class="option">
                                            <li data-bs-toggle="tooltip" data-bs-placement="top" title="Quick View">
                                                <a href="javascript:void(0)" data-bs-toggle="modal" data-bs-target="#view">
                                                    <i class="iconly-Show icli"></i>
                                                </a>
                                            </li>
                                            <li data-bs-toggle="tooltip" data-bs-placement="top" title="Wishlist">
                                                <a href="javascript:void(0)" class="notifi-wishlist">
                                                    <i class="iconly-Heart icli"></i>
                                                </a>
                                            </li>
                                            <li data-bs-toggle="tooltip" data-bs-placement="top" title="Compare">
                                                <a href="compare.html">
                                                    <i class="iconly-Swap icli"></i>
                                                </a>
                                            </li>
                                        </ul>
                                    </div>
    
                                    <div class="product-detail">
                                        <ul class="rating">
                                            <li>
                                                <i data-feather="star" class="fill"></i>
                                            </li>
                                            <li>
                                                <i data-feather="star" class="fill"></i>
                                            </li>
                                            <li>
                                                <i data-feather="star" class="fill"></i>
                                            </li>
                                            <li>
                                                <i data-feather="star" class="fill"></i>
                                            </li>
                                            <li>
                                                <i data-feather="star"></i>
                                            </li>
                                        </ul>
                                        <a href="product-left-thumbnail.html">
                                            <h5 class="name text-title">Sandwich Bread</h5>
                                        </a>
                                        <h5 class="price theme-color">$65.21<del>$71.25</del></h5>
                                        <div class="addtocart_btn">
                                            <button class="add-button addcart-button btn buy-button text-light">
                                                <i class="fa-solid fa-plus"></i>
                                            </button>
                                            <div class="qty-box cart_qty">
                                                <div class="input-group">
                                                    <button type="button" class="btn qty-left-minus" data-type="minus"
                                                        data-field="">
                                                        <i class="fa fa-minus" aria-hidden="true"></i>
                                                    </button>
                                                    <input class="form-control input-number qty-input" type="text"
                                                        name="quantity" value="1">
                                                    <button type="button" class="btn qty-right-plus" data-type="plus"
                                                        data-field="">
                                                        <i class="fa fa-plus" aria-hidden="true"></i>
                                                    </button>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
    
                            <div>
                                <div class="product-box-4 wow fadeInUp">
                                    <div class="product-image product-image-2">
                                        <a href="product-left-thumbnail.html">
                                            <img src="../assets/images/grocery/deal/7.png"
                                                class="img-fluid blur-up lazyload" alt="">
                                        </a>
    
                                        <ul class="option">
                                            <li data-bs-toggle="tooltip" data-bs-placement="top" title="Quick View">
                                                <a href="javascript:void(0)" data-bs-toggle="modal" data-bs-target="#view">
                                                    <i class="iconly-Show icli"></i>
                                                </a>
                                            </li>
                                            <li data-bs-toggle="tooltip" data-bs-placement="top" title="Wishlist">
                                                <a href="javascript:void(0)" class="notifi-wishlist">
                                                    <i class="iconly-Heart icli"></i>
                                                </a>
                                            </li>
                                            <li data-bs-toggle="tooltip" data-bs-placement="top" title="Compare">
                                                <a href="compare.html">
                                                    <i class="iconly-Swap icli"></i>
                                                </a>
                                            </li>
                                        </ul>
                                    </div>
    
                                    <div class="product-detail">
                                        <ul class="rating">
                                            <li>
                                                <i data-feather="star" class="fill"></i>
                                            </li>
                                            <li>
                                                <i data-feather="star" class="fill"></i>
                                            </li>
                                            <li>
                                                <i data-feather="star" class="fill"></i>
                                            </li>
                                            <li>
                                                <i data-feather="star" class="fill"></i>
                                            </li>
                                            <li>
                                                <i data-feather="star"></i>
                                            </li>
                                        </ul>
                                        <a href="product-left-thumbnail.html">
                                            <h5 class="name text-title">Popcorn</h5>
                                        </a>
                                        <h5 class="price theme-color">$65.21<del>$71.25</del></h5>
                                        <div class="addtocart_btn">
                                            <button class="add-button addcart-button btn buy-button text-light">
                                                <i class="fa-solid fa-plus"></i>
                                            </button>
                                            <div class="qty-box cart_qty">
                                                <div class="input-group">
                                                    <button type="button" class="btn qty-left-minus" data-type="minus"
                                                        data-field="">
                                                        <i class="fa fa-minus" aria-hidden="true"></i>
                                                    </button>
                                                    <input class="form-control input-number qty-input" type="text"
                                                        name="quantity" value="1">
                                                    <button type="button" class="btn qty-right-plus" data-type="plus"
                                                        data-field="">
                                                        <i class="fa fa-plus" aria-hidden="true"></i>
                                                    </button>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
    
                                <div class="product-box-4 wow fadeInUp" data-wow-delay="0.05s">
                                    <div class="product-image product-image-2">
                                        <a href="product-left-thumbnail.html">
                                            <img src="../assets/images/grocery/deal/5.png"
                                                class="img-fluid blur-up lazyload" alt="">
                                        </a>
    
                                        <ul class="option">
                                            <li data-bs-toggle="tooltip" data-bs-placement="top" title="Quick View">
                                                <a href="javascript:void(0)" data-bs-toggle="modal" data-bs-target="#view">
                                                    <i class="iconly-Show icli"></i>
                                                </a>
                                            </li>
                                            <li data-bs-toggle="tooltip" data-bs-placement="top" title="Wishlist">
                                                <a href="javascript:void(0)" class="notifi-wishlist">
                                                    <i class="iconly-Heart icli"></i>
                                                </a>
                                            </li>
                                            <li data-bs-toggle="tooltip" data-bs-placement="top" title="Compare">
                                                <a href="compare.html">
                                                    <i class="iconly-Swap icli"></i>
                                                </a>
                                            </li>
                                        </ul>
                                    </div>
    
                                    <div class="product-detail">
                                        <ul class="rating">
                                            <li>
                                                <i data-feather="star" class="fill"></i>
                                            </li>
                                            <li>
                                                <i data-feather="star" class="fill"></i>
                                            </li>
                                            <li>
                                                <i data-feather="star" class="fill"></i>
                                            </li>
                                            <li>
                                                <i data-feather="star" class="fill"></i>
                                            </li>
                                            <li>
                                                <i data-feather="star"></i>
                                            </li>
                                        </ul>
                                        <a href="product-left-thumbnail.html">
                                            <h5 class="name text-title">Fresh Cilantro</h5>
                                        </a>
                                        <h5 class="price theme-color">$65.21<del>$71.25</del></h5>
                                        <div class="addtocart_btn">
                                            <button class="add-button addcart-button btn buy-button text-light">
                                                <i class="fa-solid fa-plus"></i>
                                            </button>
                                            <div class="qty-box cart_qty">
                                                <div class="input-group">
                                                    <button type="button" class="btn qty-left-minus" data-type="minus"
                                                        data-field="">
                                                        <i class="fa fa-minus" aria-hidden="true"></i>
                                                    </button>
                                                    <input class="form-control input-number qty-input" type="text"
                                                        name="quantity" value="1">
                                                    <button type="button" class="btn qty-right-plus" data-type="plus"
                                                        data-field="">
                                                        <i class="fa fa-plus" aria-hidden="true"></i>
                                                    </button>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
    
                            <div>
                                <div class="product-box-4 wow fadeInUp">
                                    <div class="product-image product-image-2">
                                        <a href="product-left-thumbnail.html">
                                            <img src="../assets/images/grocery/deal/8.png"
                                                class="img-fluid blur-up lazyload" alt="">
                                        </a>
    
                                        <ul class="option">
                                            <li data-bs-toggle="tooltip" data-bs-placement="top" title="Quick View">
                                                <a href="javascript:void(0)" data-bs-toggle="modal" data-bs-target="#view">
                                                    <i class="iconly-Show icli"></i>
                                                </a>
                                            </li>
                                            <li data-bs-toggle="tooltip" data-bs-placement="top" title="Wishlist">
                                                <a href="javascript:void(0)" class="notifi-wishlist">
                                                    <i class="iconly-Heart icli"></i>
                                                </a>
                                            </li>
                                            <li data-bs-toggle="tooltip" data-bs-placement="top" title="Compare">
                                                <a href="compare.html">
                                                    <i class="iconly-Swap icli"></i>
                                                </a>
                                            </li>
                                        </ul>
                                    </div>
    
                                    <div class="product-detail">
                                        <ul class="rating">
                                            <li>
                                                <i data-feather="star" class="fill"></i>
                                            </li>
                                            <li>
                                                <i data-feather="star" class="fill"></i>
                                            </li>
                                            <li>
                                                <i data-feather="star" class="fill"></i>
                                            </li>
                                            <li>
                                                <i data-feather="star" class="fill"></i>
                                            </li>
                                            <li>
                                                <i data-feather="star"></i>
                                            </li>
                                        </ul>
                                        <a href="product-left-thumbnail.html">
                                            <h5 class="name text-title">Fresh Eggs</h5>
                                        </a>
                                        <h5 class="price theme-color">$65.21<del>$71.25</del></h5>
                                        <div class="addtocart_btn">
                                            <button class="add-button addcart-button btn buy-button text-light">
                                                <i class="fa-solid fa-plus"></i>
                                            </button>
                                            <div class="qty-box cart_qty">
                                                <div class="input-group">
                                                    <button type="button" class="btn qty-left-minus" data-type="minus"
                                                        data-field="">
                                                        <i class="fa fa-minus" aria-hidden="true"></i>
                                                    </button>
                                                    <input class="form-control input-number qty-input" type="text"
                                                        name="quantity" value="1">
                                                    <button type="button" class="btn qty-right-plus" data-type="plus"
                                                        data-field="">
                                                        <i class="fa fa-plus" aria-hidden="true"></i>
                                                    </button>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
    
                                <div class="product-box-4 wow fadeInUp" data-wow-delay="0.05s">
                                    <div class="product-image product-image-2">
                                        <a href="product-left-thumbnail.html">
                                            <img src="../assets/images/grocery/deal/9.png"
                                                class="img-fluid blur-up lazyload" alt="">
                                        </a>
    
                                        <ul class="option">
                                            <li data-bs-toggle="tooltip" data-bs-placement="top" title="Quick View">
                                                <a href="javascript:void(0)" data-bs-toggle="modal" data-bs-target="#view">
                                                    <i class="iconly-Show icli"></i>
                                                </a>
                                            </li>
                                            <li data-bs-toggle="tooltip" data-bs-placement="top" title="Wishlist">
                                                <a href="javascript:void(0)" class="notifi-wishlist">
                                                    <i class="iconly-Heart icli"></i>
                                                </a>
                                            </li>
                                            <li data-bs-toggle="tooltip" data-bs-placement="top" title="Compare">
                                                <a href="compare.html">
                                                    <i class="iconly-Swap icli"></i>
                                                </a>
                                            </li>
                                        </ul>
                                    </div>
    
                                    <div class="product-detail">
                                        <ul class="rating">
                                            <li>
                                                <i data-feather="star" class="fill"></i>
                                            </li>
                                            <li>
                                                <i data-feather="star" class="fill"></i>
                                            </li>
                                            <li>
                                                <i data-feather="star" class="fill"></i>
                                            </li>
                                            <li>
                                                <i data-feather="star" class="fill"></i>
                                            </li>
                                            <li>
                                                <i data-feather="star"></i>
                                            </li>
                                        </ul>
                                        <a href="product-left-thumbnail.html">
                                            <h5 class="name text-title">Tomato Ketchup</h5>
                                        </a>
                                        <h5 class="price theme-color">$65.21<del>$71.25</del></h5>
                                        <div class="addtocart_btn">
                                            <button class="add-button addcart-button btn buy-button text-light">
                                                <i class="fa-solid fa-plus"></i>
                                            </button>
                                            <div class="qty-box cart_qty">
                                                <div class="input-group">
                                                    <button type="button" class="btn qty-left-minus" data-type="minus"
                                                        data-field="">
                                                        <i class="fa fa-minus" aria-hidden="true"></i>
                                                    </button>
                                                    <input class="form-control input-number qty-input" type="text"
                                                        name="quantity" value="1">
                                                    <button type="button" class="btn qty-right-plus" data-type="plus"
                                                        data-field="">
                                                        <i class="fa fa-plus" aria-hidden="true"></i>
                                                    </button>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
        <!-- Deal Section End -->
    
        <!-- Offer Section Start -->
        <section class="offer-section">
            <div class="container-fluid-lg">
                <div class="row">
                    <div class="col-12">
                        <div class="offer-box hover-effect">
                            <h2><span>FREE GIFT ANY ORDER</span> 70% oFF</h2>
                        </div>
                    </div>
                </div>
            </div>
        </section>
        <!-- Offer Section End -->
    
        <!-- Product Breakfast & Dairy Section Start -->
        <section class="product-section-4">
            <div class="container-fluid-lg">
                <div class="title">
                    <h2>Breakfast & Dairy</h2>
                </div>
                <div class="row">
                    <div class="col-12">
                        <div class="slider-7_1 arrow-slider img-slider">
                            <div>
                                <div class="product-box-4 wow fadeInUp">
                                    <div class="product-image product-image-2">
                                        <a href="product-left-thumbnail.html">
                                            <img src="../assets/images/grocery/product/breakfast/1.png"
                                                class="img-fluid blur-up lazyload" alt="">
                                        </a>
    
                                        <ul class="option">
                                            <li data-bs-toggle="tooltip" data-bs-placement="top" title="Quick View">
                                                <a href="javascript:void(0)" data-bs-toggle="modal" data-bs-target="#view">
                                                    <i class="iconly-Show icli"></i>
                                                </a>
                                            </li>
                                            <li data-bs-toggle="tooltip" data-bs-placement="top" title="Wishlist">
                                                <a href="javascript:void(0)" class="notifi-wishlist">
                                                    <i class="iconly-Heart icli"></i>
                                                </a>
                                            </li>
                                            <li data-bs-toggle="tooltip" data-bs-placement="top" title="Compare">
                                                <a href="compare.html">
                                                    <i class="iconly-Swap icli"></i>
                                                </a>
                                            </li>
                                        </ul>
                                    </div>
    
                                    <div class="product-detail">
                                        <ul class="rating">
                                            <li>
                                                <i data-feather="star" class="fill"></i>
                                            </li>
                                            <li>
                                                <i data-feather="star" class="fill"></i>
                                            </li>
                                            <li>
                                                <i data-feather="star" class="fill"></i>
                                            </li>
                                            <li>
                                                <i data-feather="star" class="fill"></i>
                                            </li>
                                            <li>
                                                <i data-feather="star"></i>
                                            </li>
                                        </ul>
                                        <a href="product-left-thumbnail.html">
                                            <h5 class="name text-title">Bell pepper</h5>
                                        </a>
                                        <h5 class="price theme-color">$65.21<del>$71.25</del></h5>
                                        <div class="addtocart_btn">
                                            <button class="add-button addcart-button btn buy-button text-light">
                                                <i class="fa-solid fa-plus"></i>
                                            </button>
                                            <div class="qty-box cart_qty">
                                                <div class="input-group">
                                                    <button type="button" class="btn qty-left-minus" data-type="minus"
                                                        data-field="">
                                                        <i class="fa fa-minus" aria-hidden="true"></i>
                                                    </button>
                                                    <input class="form-control input-number qty-input" type="text"
                                                        name="quantity" value="1">
                                                    <button type="button" class="btn qty-right-plus" data-type="plus"
                                                        data-field="">
                                                        <i class="fa fa-plus" aria-hidden="true"></i>
                                                    </button>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
    
                            <div>
                                <div class="product-box-4 wow fadeInUp" data-wow-delay="0.05s">
                                    <div class="product-image product-image-2">
                                        <a href="product-left-thumbnail.html">
                                            <img src="../assets/images/grocery/product/breakfast/2.png"
                                                class="img-fluid blur-up lazyload" alt="">
                                        </a>
    
                                        <ul class="option">
                                            <li data-bs-toggle="tooltip" data-bs-placement="top" title="Quick View">
                                                <a href="javascript:void(0)" data-bs-toggle="modal" data-bs-target="#view">
                                                    <i class="iconly-Show icli"></i>
                                                </a>
                                            </li>
                                            <li data-bs-toggle="tooltip" data-bs-placement="top" title="Wishlist">
                                                <a href="javascript:void(0)" class="notifi-wishlist">
                                                    <i class="iconly-Heart icli"></i>
                                                </a>
                                            </li>
                                            <li data-bs-toggle="tooltip" data-bs-placement="top" title="Compare">
                                                <a href="compare.html">
                                                    <i class="iconly-Swap icli"></i>
                                                </a>
                                            </li>
                                        </ul>
                                    </div>
    
                                    <div class="product-detail">
                                        <ul class="rating">
                                            <li>
                                                <i data-feather="star" class="fill"></i>
                                            </li>
                                            <li>
                                                <i data-feather="star" class="fill"></i>
                                            </li>
                                            <li>
                                                <i data-feather="star" class="fill"></i>
                                            </li>
                                            <li>
                                                <i data-feather="star" class="fill"></i>
                                            </li>
                                            <li>
                                                <i data-feather="star"></i>
                                            </li>
                                        </ul>
                                        <a href="product-left-thumbnail.html">
                                            <h5 class="name text-title">Grassmilk</h5>
                                        </a>
                                        <h5 class="price theme-color">$65.21<del>$71.25</del></h5>
                                        <div class="addtocart_btn">
                                            <button class="add-button addcart-button btn buy-button text-light">
                                                <i class="fa-solid fa-plus"></i>
                                            </button>
                                            <div class="qty-box cart_qty">
                                                <div class="input-group">
                                                    <button type="button" class="btn qty-left-minus" data-type="minus"
                                                        data-field="">
                                                        <i class="fa fa-minus" aria-hidden="true"></i>
                                                    </button>
                                                    <input class="form-control input-number qty-input" type="text"
                                                        name="quantity" value="1">
                                                    <button type="button" class="btn qty-right-plus" data-type="plus"
                                                        data-field="">
                                                        <i class="fa fa-plus" aria-hidden="true"></i>
                                                    </button>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
    
                            <div>
                                <div class="product-box-4 wow fadeInUp" data-wow-delay="0.1s">
                                    <div class="product-image product-image-2">
                                        <a href="product-left-thumbnail.html">
                                            <img src="../assets/images/grocery/product/breakfast/3.png"
                                                class="img-fluid blur-up lazyload" alt="">
                                        </a>
    
                                        <ul class="option">
                                            <li data-bs-toggle="tooltip" data-bs-placement="top" title="Quick View">
                                                <a href="javascript:void(0)" data-bs-toggle="modal" data-bs-target="#view">
                                                    <i class="iconly-Show icli"></i>
                                                </a>
                                            </li>
                                            <li data-bs-toggle="tooltip" data-bs-placement="top" title="Wishlist">
                                                <a href="javascript:void(0)" class="notifi-wishlist">
                                                    <i class="iconly-Heart icli"></i>
                                                </a>
                                            </li>
                                            <li data-bs-toggle="tooltip" data-bs-placement="top" title="Compare">
                                                <a href="compare.html">
                                                    <i class="iconly-Swap icli"></i>
                                                </a>
                                            </li>
                                        </ul>
                                    </div>
    
                                    <div class="product-detail">
                                        <ul class="rating">
                                            <li>
                                                <i data-feather="star" class="fill"></i>
                                            </li>
                                            <li>
                                                <i data-feather="star" class="fill"></i>
                                            </li>
                                            <li>
                                                <i data-feather="star" class="fill"></i>
                                            </li>
                                            <li>
                                                <i data-feather="star" class="fill"></i>
                                            </li>
                                            <li>
                                                <i data-feather="star"></i>
                                            </li>
                                        </ul>
                                        <a href="product-left-thumbnail.html">
                                            <h5 class="name text-title">Kellogg's choco </h5>
                                        </a>
                                        <h5 class="price theme-color">$65.21<del>$71.25</del></h5>
                                        <div class="addtocart_btn">
                                            <button class="add-button addcart-button btn buy-button text-light">
                                                <i class="fa-solid fa-plus"></i>
                                            </button>
                                            <div class="qty-box cart_qty">
                                                <div class="input-group">
                                                    <button type="button" class="btn qty-left-minus" data-type="minus"
                                                        data-field="">
                                                        <i class="fa fa-minus" aria-hidden="true"></i>
                                                    </button>
                                                    <input class="form-control input-number qty-input" type="text"
                                                        name="quantity" value="1">
                                                    <button type="button" class="btn qty-right-plus" data-type="plus"
                                                        data-field="">
                                                        <i class="fa fa-plus" aria-hidden="true"></i>
                                                    </button>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
    
                            <div>
                                <div class="product-box-4 wow fadeInUp" data-wow-delay="0.15s">
                                    <div class="product-image product-image-2">
                                        <a href="product-left-thumbnail.html">
                                            <img src="../assets/images/grocery/product/breakfast/4.png"
                                                class="img-fluid blur-up lazyload" alt="">
                                        </a>
    
                                        <ul class="option">
                                            <li data-bs-toggle="tooltip" data-bs-placement="top" title="Quick View">
                                                <a href="javascript:void(0)" data-bs-toggle="modal" data-bs-target="#view">
                                                    <i class="iconly-Show icli"></i>
                                                </a>
                                            </li>
                                            <li data-bs-toggle="tooltip" data-bs-placement="top" title="Wishlist">
                                                <a href="javascript:void(0)" class="notifi-wishlist">
                                                    <i class="iconly-Heart icli"></i>
                                                </a>
                                            </li>
                                            <li data-bs-toggle="tooltip" data-bs-placement="top" title="Compare">
                                                <a href="compare.html">
                                                    <i class="iconly-Swap icli"></i>
                                                </a>
                                            </li>
                                        </ul>
                                    </div>
    
                                    <div class="product-detail">
                                        <ul class="rating">
                                            <li>
                                                <i data-feather="star" class="fill"></i>
                                            </li>
                                            <li>
                                                <i data-feather="star" class="fill"></i>
                                            </li>
                                            <li>
                                                <i data-feather="star" class="fill"></i>
                                            </li>
                                            <li>
                                                <i data-feather="star" class="fill"></i>
                                            </li>
                                            <li>
                                                <i data-feather="star"></i>
                                            </li>
                                        </ul>
                                        <a href="product-left-thumbnail.html">
                                            <h5 class="name text-title">Paneer</h5>
                                        </a>
                                        <h5 class="price theme-color">$65.21<del>$71.25</del></h5>
                                        <div class="addtocart_btn">
                                            <button class="add-button addcart-button btn buy-button text-light">
                                                <i class="fa-solid fa-plus"></i>
                                            </button>
                                            <div class="qty-box cart_qty">
                                                <div class="input-group">
                                                    <button type="button" class="btn qty-left-minus" data-type="minus"
                                                        data-field="">
                                                        <i class="fa fa-minus" aria-hidden="true"></i>
                                                    </button>
                                                    <input class="form-control input-number qty-input" type="text"
                                                        name="quantity" value="1">
                                                    <button type="button" class="btn qty-right-plus" data-type="plus"
                                                        data-field="">
                                                        <i class="fa fa-plus" aria-hidden="true"></i>
                                                    </button>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
    
                            <div>
                                <div class="product-box-4 wow fadeInUp" data-wow-delay="0.2s">
                                    <div class="product-image product-image-2">
                                        <a href="product-left-thumbnail.html">
                                            <img src="../assets/images/grocery/product/breakfast/5.png"
                                                class="img-fluid blur-up lazyload" alt="">
                                        </a>
    
                                        <ul class="option">
                                            <li data-bs-toggle="tooltip" data-bs-placement="top" title="Quick View">
                                                <a href="javascript:void(0)" data-bs-toggle="modal" data-bs-target="#view">
                                                    <i class="iconly-Show icli"></i>
                                                </a>
                                            </li>
                                            <li data-bs-toggle="tooltip" data-bs-placement="top" title="Wishlist">
                                                <a href="javascript:void(0)" class="notifi-wishlist">
                                                    <i class="iconly-Heart icli"></i>
                                                </a>
                                            </li>
                                            <li data-bs-toggle="tooltip" data-bs-placement="top" title="Compare">
                                                <a href="compare.html">
                                                    <i class="iconly-Swap icli"></i>
                                                </a>
                                            </li>
                                        </ul>
                                    </div>
    
                                    <div class="product-detail">
                                        <ul class="rating">
                                            <li>
                                                <i data-feather="star" class="fill"></i>
                                            </li>
                                            <li>
                                                <i data-feather="star" class="fill"></i>
                                            </li>
                                            <li>
                                                <i data-feather="star" class="fill"></i>
                                            </li>
                                            <li>
                                                <i data-feather="star" class="fill"></i>
                                            </li>
                                            <li>
                                                <i data-feather="star"></i>
                                            </li>
                                        </ul>
                                        <a href="product-left-thumbnail.html">
                                            <h5 class="name text-title">Bournvita</h5>
                                        </a>
                                        <h5 class="price theme-color">$65.21<del>$71.25</del></h5>
                                        <div class="addtocart_btn">
                                            <button class="add-button addcart-button btn buy-button text-light">
                                                <i class="fa-solid fa-plus"></i>
                                            </button>
                                            <div class="qty-box cart_qty">
                                                <div class="input-group">
                                                    <button type="button" class="btn qty-left-minus" data-type="minus"
                                                        data-field="">
                                                        <i class="fa fa-minus" aria-hidden="true"></i>
                                                    </button>
                                                    <input class="form-control input-number qty-input" type="text"
                                                        name="quantity" value="1">
                                                    <button type="button" class="btn qty-right-plus" data-type="plus"
                                                        data-field="">
                                                        <i class="fa fa-plus" aria-hidden="true"></i>
                                                    </button>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
    
                            <div>
                                <div class="product-box-4 wow fadeInUp" data-wow-delay="0.25s">
                                    <div class="product-image product-image-2">
                                        <a href="product-left-thumbnail.html">
                                            <img src="../assets/images/grocery/product/breakfast/6.png"
                                                class="img-fluid blur-up lazyload" alt="">
                                        </a>
    
                                        <ul class="option">
                                            <li data-bs-toggle="tooltip" data-bs-placement="top" title="Quick View">
                                                <a href="javascript:void(0)" data-bs-toggle="modal" data-bs-target="#view">
                                                    <i class="iconly-Show icli"></i>
                                                </a>
                                            </li>
                                            <li data-bs-toggle="tooltip" data-bs-placement="top" title="Wishlist">
                                                <a href="javascript:void(0)" class="notifi-wishlist">
                                                    <i class="iconly-Heart icli"></i>
                                                </a>
                                            </li>
                                            <li data-bs-toggle="tooltip" data-bs-placement="top" title="Compare">
                                                <a href="compare.html">
                                                    <i class="iconly-Swap icli"></i>
                                                </a>
                                            </li>
                                        </ul>
                                    </div>
    
                                    <div class="product-detail">
                                        <ul class="rating">
                                            <li>
                                                <i data-feather="star" class="fill"></i>
                                            </li>
                                            <li>
                                                <i data-feather="star" class="fill"></i>
                                            </li>
                                            <li>
                                                <i data-feather="star" class="fill"></i>
                                            </li>
                                            <li>
                                                <i data-feather="star" class="fill"></i>
                                            </li>
                                            <li>
                                                <i data-feather="star"></i>
                                            </li>
                                        </ul>
                                        <a href="product-left-thumbnail.html">
                                            <h5 class="name text-title">Tulsi</h5>
                                        </a>
                                        <h5 class="price theme-color">$65.21<del>$71.25</del></h5>
                                        <div class="addtocart_btn">
                                            <button class="add-button addcart-button btn buy-button text-light">
                                                <i class="fa-solid fa-plus"></i>
                                            </button>
                                            <div class="qty-box cart_qty">
                                                <div class="input-group">
                                                    <button type="button" class="btn qty-left-minus" data-type="minus"
                                                        data-field="">
                                                        <i class="fa fa-minus" aria-hidden="true"></i>
                                                    </button>
                                                    <input class="form-control input-number qty-input" type="text"
                                                        name="quantity" value="1">
                                                    <button type="button" class="btn qty-right-plus" data-type="plus"
                                                        data-field="">
                                                        <i class="fa fa-plus" aria-hidden="true"></i>
                                                    </button>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
    
                            <div>
                                <div class="product-box-4 wow fadeInUp" data-wow-delay="0.3s">
                                    <div class="product-image product-image-2">
                                        <a href="product-left-thumbnail.html">
                                            <img src="../assets/images/grocery/product/breakfast/7.png"
                                                class="img-fluid blur-up lazyload" alt="">
                                        </a>
    
                                        <ul class="option">
                                            <li data-bs-toggle="tooltip" data-bs-placement="top" title="Quick View">
                                                <a href="javascript:void(0)" data-bs-toggle="modal" data-bs-target="#view">
                                                    <i class="iconly-Show icli"></i>
                                                </a>
                                            </li>
                                            <li data-bs-toggle="tooltip" data-bs-placement="top" title="Wishlist">
                                                <a href="javascript:void(0)" class="notifi-wishlist">
                                                    <i class="iconly-Heart icli"></i>
                                                </a>
                                            </li>
                                            <li data-bs-toggle="tooltip" data-bs-placement="top" title="Compare">
                                                <a href="compare.html">
                                                    <i class="iconly-Swap icli"></i>
                                                </a>
                                            </li>
                                        </ul>
                                    </div>
    
                                    <div class="product-detail">
                                        <ul class="rating">
                                            <li>
                                                <i data-feather="star" class="fill"></i>
                                            </li>
                                            <li>
                                                <i data-feather="star" class="fill"></i>
                                            </li>
                                            <li>
                                                <i data-feather="star" class="fill"></i>
                                            </li>
                                            <li>
                                                <i data-feather="star" class="fill"></i>
                                            </li>
                                            <li>
                                                <i data-feather="star"></i>
                                            </li>
                                        </ul>
                                        <a href="product-left-thumbnail.html">
                                            <h5 class="name text-title">Kellogg's Muesli</h5>
                                        </a>
                                        <h5 class="price theme-color">$65.21<del>$71.25</del></h5>
                                        <div class="addtocart_btn">
                                            <button class="add-button addcart-button btn buy-button text-light">
                                                <i class="fa-solid fa-plus"></i>
                                            </button>
                                            <div class="qty-box cart_qty">
                                                <div class="input-group">
                                                    <button type="button" class="btn qty-left-minus" data-type="minus"
                                                        data-field="">
                                                        <i class="fa fa-minus" aria-hidden="true"></i>
                                                    </button>
                                                    <input class="form-control input-number qty-input" type="text"
                                                        name="quantity" value="1">
                                                    <button type="button" class="btn qty-right-plus" data-type="plus"
                                                        data-field="">
                                                        <i class="fa fa-plus" aria-hidden="true"></i>
                                                    </button>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
    
                            <div>
                                <div class="product-box-4 wow fadeInUp" data-wow-delay="0.35s">
                                    <div class="product-image product-image-2">
                                        <a href="product-left-thumbnail.html">
                                            <img src="../assets/images/grocery/product/breakfast/8.png"
                                                class="img-fluid blur-up lazyload" alt="">
                                        </a>
    
                                        <ul class="option">
                                            <li data-bs-toggle="tooltip" data-bs-placement="top" title="Quick View">
                                                <a href="javascript:void(0)" data-bs-toggle="modal" data-bs-target="#view">
                                                    <i class="iconly-Show icli"></i>
                                                </a>
                                            </li>
                                            <li data-bs-toggle="tooltip" data-bs-placement="top" title="Wishlist">
                                                <a href="javascript:void(0)" class="notifi-wishlist">
                                                    <i class="iconly-Heart icli"></i>
                                                </a>
                                            </li>
                                            <li data-bs-toggle="tooltip" data-bs-placement="top" title="Compare">
                                                <a href="compare.html">
                                                    <i class="iconly-Swap icli"></i>
                                                </a>
                                            </li>
                                        </ul>
                                    </div>
    
                                    <div class="product-detail">
                                        <ul class="rating">
                                            <li>
                                                <i data-feather="star" class="fill"></i>
                                            </li>
                                            <li>
                                                <i data-feather="star" class="fill"></i>
                                            </li>
                                            <li>
                                                <i data-feather="star" class="fill"></i>
                                            </li>
                                            <li>
                                                <i data-feather="star" class="fill"></i>
                                            </li>
                                            <li>
                                                <i data-feather="star"></i>
                                            </li>
                                        </ul>
                                        <a href="product-left-thumbnail.html">
                                            <h5 class="name text-title">Low Fat Milk</h5>
                                        </a>
                                        <h5 class="price theme-color">$65.21<del>$71.25</del></h5>
                                        <div class="addtocart_btn">
                                            <button class="add-button addcart-button btn buy-button text-light">
                                                <i class="fa-solid fa-plus"></i>
                                            </button>
                                            <div class="qty-box cart_qty">
                                                <div class="input-group">
                                                    <button type="button" class="btn qty-left-minus" data-type="minus"
                                                        data-field="">
                                                        <i class="fa fa-minus" aria-hidden="true"></i>
                                                    </button>
                                                    <input class="form-control input-number qty-input" type="text"
                                                        name="quantity" value="1">
                                                    <button type="button" class="btn qty-right-plus" data-type="plus"
                                                        data-field="">
                                                        <i class="fa fa-plus" aria-hidden="true"></i>
                                                    </button>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
        <!-- Product Breakfast & Dairy Section End -->
    
        <!-- Product Chemist Store Section Start -->
        <section class="product-section">
            <div class="container-fluid-lg">
                <div class="title">
                    <h2>Chemist Store</h2>
                </div>
                <div class="row">
                    <div class="col-12">
                        <div class="slider-7_1 arrow-slider img-slider">
                            <div>
                                <div class="product-box-4 wow fadeInUp">
                                    <div class="product-image product-image-2">
                                        <a href="product-left-thumbnail.html">
                                            <img src="../assets/images/grocery/product/chemist/1.png"
                                                class="img-fluid blur-up lazyload" alt="">
                                        </a>
    
                                        <ul class="option">
                                            <li data-bs-toggle="tooltip" data-bs-placement="top" title="Quick View">
                                                <a href="javascript:void(0)" data-bs-toggle="modal" data-bs-target="#view">
                                                    <i class="iconly-Show icli"></i>
                                                </a>
                                            </li>
                                            <li data-bs-toggle="tooltip" data-bs-placement="top" title="Wishlist">
                                                <a href="javascript:void(0)" class="notifi-wishlist">
                                                    <i class="iconly-Heart icli"></i>
                                                </a>
                                            </li>
                                            <li data-bs-toggle="tooltip" data-bs-placement="top" title="Compare">
                                                <a href="compare.html">
                                                    <i class="iconly-Swap icli"></i>
                                                </a>
                                            </li>
                                        </ul>
                                    </div>
    
                                    <div class="product-detail">
                                        <ul class="rating">
                                            <li>
                                                <i data-feather="star" class="fill"></i>
                                            </li>
                                            <li>
                                                <i data-feather="star" class="fill"></i>
                                            </li>
                                            <li>
                                                <i data-feather="star" class="fill"></i>
                                            </li>
                                            <li>
                                                <i data-feather="star" class="fill"></i>
                                            </li>
                                            <li>
                                                <i data-feather="star"></i>
                                            </li>
                                        </ul>
                                        <a href="product-left-thumbnail.html">
                                            <h5 class="name text-title">Hand Sanitizer</h5>
                                        </a>
                                        <h5 class="price theme-color">$65.21<del>$71.25</del></h5>
                                        <div class="addtocart_btn">
                                            <button class="add-button addcart-button btn buy-button text-light">
                                                <i class="fa-solid fa-plus"></i>
                                            </button>
                                            <div class="qty-box cart_qty">
                                                <div class="input-group">
                                                    <button type="button" class="btn qty-left-minus" data-type="minus"
                                                        data-field="">
                                                        <i class="fa fa-minus" aria-hidden="true"></i>
                                                    </button>
                                                    <input class="form-control input-number qty-input" type="text"
                                                        name="quantity" value="1">
                                                    <button type="button" class="btn qty-right-plus" data-type="plus"
                                                        data-field="">
                                                        <i class="fa fa-plus" aria-hidden="true"></i>
                                                    </button>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
    
                            <div>
                                <div class="product-box-4 wow fadeInUp" data-wow-delay="0.05s">
                                    <div class="product-image product-image-2">
                                        <a href="product-left-thumbnail.html">
                                            <img src="../assets/images/grocery/product/chemist/2.png"
                                                class="img-fluid blur-up lazyload" alt="">
                                        </a>
    
                                        <ul class="option">
                                            <li data-bs-toggle="tooltip" data-bs-placement="top" title="Quick View">
                                                <a href="javascript:void(0)" data-bs-toggle="modal" data-bs-target="#view">
                                                    <i class="iconly-Show icli"></i>
                                                </a>
                                            </li>
                                            <li data-bs-toggle="tooltip" data-bs-placement="top" title="Wishlist">
                                                <a href="javascript:void(0)" class="notifi-wishlist">
                                                    <i class="iconly-Heart icli"></i>
                                                </a>
                                            </li>
                                            <li data-bs-toggle="tooltip" data-bs-placement="top" title="Compare">
                                                <a href="compare.html">
                                                    <i class="iconly-Swap icli"></i>
                                                </a>
                                            </li>
                                        </ul>
                                    </div>
    
                                    <div class="product-detail">
                                        <ul class="rating">
                                            <li>
                                                <i data-feather="star" class="fill"></i>
                                            </li>
                                            <li>
                                                <i data-feather="star" class="fill"></i>
                                            </li>
                                            <li>
                                                <i data-feather="star" class="fill"></i>
                                            </li>
                                            <li>
                                                <i data-feather="star" class="fill"></i>
                                            </li>
                                            <li>
                                                <i data-feather="star"></i>
                                            </li>
                                        </ul>
                                        <a href="product-left-thumbnail.html">
                                            <h5 class="name text-title">Cotton Balls</h5>
                                        </a>
                                        <h5 class="price theme-color">$65.21<del>$71.25</del></h5>
                                        <div class="addtocart_btn">
                                            <button class="add-button addcart-button btn buy-button text-light">
                                                <i class="fa-solid fa-plus"></i>
                                            </button>
                                            <div class="qty-box cart_qty">
                                                <div class="input-group">
                                                    <button type="button" class="btn qty-left-minus" data-type="minus"
                                                        data-field="">
                                                        <i class="fa fa-minus" aria-hidden="true"></i>
                                                    </button>
                                                    <input class="form-control input-number qty-input" type="text"
                                                        name="quantity" value="1">
                                                    <button type="button" class="btn qty-right-plus" data-type="plus"
                                                        data-field="">
                                                        <i class="fa fa-plus" aria-hidden="true"></i>
                                                    </button>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
    
                            <div>
                                <div class="product-box-4 wow fadeInUp" data-wow-delay="0.1s">
                                    <div class="product-image product-image-2">
                                        <a href="product-left-thumbnail.html">
                                            <img src="../assets/images/grocery/product/chemist/3.png"
                                                class="img-fluid blur-up lazyload" alt="">
                                        </a>
    
                                        <ul class="option">
                                            <li data-bs-toggle="tooltip" data-bs-placement="top" title="Quick View">
                                                <a href="javascript:void(0)" data-bs-toggle="modal" data-bs-target="#view">
                                                    <i class="iconly-Show icli"></i>
                                                </a>
                                            </li>
                                            <li data-bs-toggle="tooltip" data-bs-placement="top" title="Wishlist">
                                                <a href="javascript:void(0)" class="notifi-wishlist">
                                                    <i class="iconly-Heart icli"></i>
                                                </a>
                                            </li>
                                            <li data-bs-toggle="tooltip" data-bs-placement="top" title="Compare">
                                                <a href="compare.html">
                                                    <i class="iconly-Swap icli"></i>
                                                </a>
                                            </li>
                                        </ul>
                                    </div>
    
                                    <div class="product-detail">
                                        <ul class="rating">
                                            <li>
                                                <i data-feather="star" class="fill"></i>
                                            </li>
                                            <li>
                                                <i data-feather="star" class="fill"></i>
                                            </li>
                                            <li>
                                                <i data-feather="star" class="fill"></i>
                                            </li>
                                            <li>
                                                <i data-feather="star" class="fill"></i>
                                            </li>
                                            <li>
                                                <i data-feather="star"></i>
                                            </li>
                                        </ul>
                                        <a href="product-left-thumbnail.html">
                                            <h5 class="name text-title">Vicks VapoRub</h5>
                                        </a>
                                        <h5 class="price theme-color">$65.21<del>$71.25</del></h5>
                                        <div class="addtocart_btn">
                                            <button class="add-button addcart-button btn buy-button text-light">
                                                <i class="fa-solid fa-plus"></i>
                                            </button>
                                            <div class="qty-box cart_qty">
                                                <div class="input-group">
                                                    <button type="button" class="btn qty-left-minus" data-type="minus"
                                                        data-field="">
                                                        <i class="fa fa-minus" aria-hidden="true"></i>
                                                    </button>
                                                    <input class="form-control input-number qty-input" type="text"
                                                        name="quantity" value="1">
                                                    <button type="button" class="btn qty-right-plus" data-type="plus"
                                                        data-field="">
                                                        <i class="fa fa-plus" aria-hidden="true"></i>
                                                    </button>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
    
                            <div>
                                <div class="product-box-4 wow fadeInUp" data-wow-delay="0.15s">
                                    <div class="product-image product-image-2">
                                        <a href="product-left-thumbnail.html">
                                            <img src="../assets/images/grocery/product/chemist/4.png"
                                                class="img-fluid blur-up lazyload" alt="">
                                        </a>
    
                                        <ul class="option">
                                            <li data-bs-toggle="tooltip" data-bs-placement="top" title="Quick View">
                                                <a href="javascript:void(0)" data-bs-toggle="modal" data-bs-target="#view">
                                                    <i class="iconly-Show icli"></i>
                                                </a>
                                            </li>
                                            <li data-bs-toggle="tooltip" data-bs-placement="top" title="Wishlist">
                                                <a href="javascript:void(0)" class="notifi-wishlist">
                                                    <i class="iconly-Heart icli"></i>
                                                </a>
                                            </li>
                                            <li data-bs-toggle="tooltip" data-bs-placement="top" title="Compare">
                                                <a href="compare.html">
                                                    <i class="iconly-Swap icli"></i>
                                                </a>
                                            </li>
                                        </ul>
                                    </div>
    
                                    <div class="product-detail">
                                        <ul class="rating">
                                            <li>
                                                <i data-feather="star" class="fill"></i>
                                            </li>
                                            <li>
                                                <i data-feather="star" class="fill"></i>
                                            </li>
                                            <li>
                                                <i data-feather="star" class="fill"></i>
                                            </li>
                                            <li>
                                                <i data-feather="star" class="fill"></i>
                                            </li>
                                            <li>
                                                <i data-feather="star"></i>
                                            </li>
                                        </ul>
                                        <a href="product-left-thumbnail.html">
                                            <h5 class="name text-title">Dettol Antiseptic</h5>
                                        </a>
                                        <h5 class="price theme-color">$65.21<del>$71.25</del></h5>
                                        <div class="addtocart_btn">
                                            <button class="add-button addcart-button btn buy-button text-light">
                                                <i class="fa-solid fa-plus"></i>
                                            </button>
                                            <div class="qty-box cart_qty">
                                                <div class="input-group">
                                                    <button type="button" class="btn qty-left-minus" data-type="minus"
                                                        data-field="">
                                                        <i class="fa fa-minus" aria-hidden="true"></i>
                                                    </button>
                                                    <input class="form-control input-number qty-input" type="text"
                                                        name="quantity" value="1">
                                                    <button type="button" class="btn qty-right-plus" data-type="plus"
                                                        data-field="">
                                                        <i class="fa fa-plus" aria-hidden="true"></i>
                                                    </button>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
    
                            <div>
                                <div class="product-box-4 wow fadeInUp" data-wow-delay="0.2s">
                                    <div class="product-image product-image-2">
                                        <a href="product-left-thumbnail.html">
                                            <img src="../assets/images/grocery/product/chemist/5.png"
                                                class="img-fluid blur-up lazyload" alt="">
                                        </a>
    
                                        <ul class="option">
                                            <li data-bs-toggle="tooltip" data-bs-placement="top" title="Quick View">
                                                <a href="javascript:void(0)" data-bs-toggle="modal" data-bs-target="#view">
                                                    <i class="iconly-Show icli"></i>
                                                </a>
                                            </li>
                                            <li data-bs-toggle="tooltip" data-bs-placement="top" title="Wishlist">
                                                <a href="javascript:void(0)" class="notifi-wishlist">
                                                    <i class="iconly-Heart icli"></i>
                                                </a>
                                            </li>
                                            <li data-bs-toggle="tooltip" data-bs-placement="top" title="Compare">
                                                <a href="compare.html">
                                                    <i class="iconly-Swap icli"></i>
                                                </a>
                                            </li>
                                        </ul>
                                    </div>
    
                                    <div class="product-detail">
                                        <ul class="rating">
                                            <li>
                                                <i data-feather="star" class="fill"></i>
                                            </li>
                                            <li>
                                                <i data-feather="star" class="fill"></i>
                                            </li>
                                            <li>
                                                <i data-feather="star" class="fill"></i>
                                            </li>
                                            <li>
                                                <i data-feather="star" class="fill"></i>
                                            </li>
                                            <li>
                                                <i data-feather="star"></i>
                                            </li>
                                        </ul>
                                        <a href="product-left-thumbnail.html">
                                            <h5 class="name text-title">Ear Buds</h5>
                                        </a>
                                        <h5 class="price theme-color">$65.21<del>$71.25</del></h5>
                                        <div class="addtocart_btn">
                                            <button class="add-button addcart-button btn buy-button text-light">
                                                <i class="fa-solid fa-plus"></i>
                                            </button>
                                            <div class="qty-box cart_qty">
                                                <div class="input-group">
                                                    <button type="button" class="btn qty-left-minus" data-type="minus"
                                                        data-field="">
                                                        <i class="fa fa-minus" aria-hidden="true"></i>
                                                    </button>
                                                    <input class="form-control input-number qty-input" type="text"
                                                        name="quantity" value="1">
                                                    <button type="button" class="btn qty-right-plus" data-type="plus"
                                                        data-field="">
                                                        <i class="fa fa-plus" aria-hidden="true"></i>
                                                    </button>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
    
                            <div>
                                <div class="product-box-4 wow fadeInUp" data-wow-delay="0.25s">
                                    <div class="product-image product-image-2">
                                        <a href="product-left-thumbnail.html">
                                            <img src="../assets/images/grocery/product/chemist/6.png"
                                                class="img-fluid blur-up lazyload" alt="">
                                        </a>
    
                                        <ul class="option">
                                            <li data-bs-toggle="tooltip" data-bs-placement="top" title="Quick View">
                                                <a href="javascript:void(0)" data-bs-toggle="modal" data-bs-target="#view">
                                                    <i class="iconly-Show icli"></i>
                                                </a>
                                            </li>
                                            <li data-bs-toggle="tooltip" data-bs-placement="top" title="Wishlist">
                                                <a href="javascript:void(0)" class="notifi-wishlist">
                                                    <i class="iconly-Heart icli"></i>
                                                </a>
                                            </li>
                                            <li data-bs-toggle="tooltip" data-bs-placement="top" title="Compare">
                                                <a href="compare.html">
                                                    <i class="iconly-Swap icli"></i>
                                                </a>
                                            </li>
                                        </ul>
                                    </div>
    
                                    <div class="product-detail">
                                        <ul class="rating">
                                            <li>
                                                <i data-feather="star" class="fill"></i>
                                            </li>
                                            <li>
                                                <i data-feather="star" class="fill"></i>
                                            </li>
                                            <li>
                                                <i data-feather="star" class="fill"></i>
                                            </li>
                                            <li>
                                                <i data-feather="star" class="fill"></i>
                                            </li>
                                            <li>
                                                <i data-feather="star"></i>
                                            </li>
                                        </ul>
                                        <a href="product-left-thumbnail.html">
                                            <h5 class="name text-title">Eno Lemon</h5>
                                        </a>
                                        <h5 class="price theme-color">$65.21<del>$71.25</del></h5>
                                        <div class="addtocart_btn">
                                            <button class="add-button addcart-button btn buy-button text-light">
                                                <i class="fa-solid fa-plus"></i>
                                            </button>
                                            <div class="qty-box cart_qty">
                                                <div class="input-group">
                                                    <button type="button" class="btn qty-left-minus" data-type="minus"
                                                        data-field="">
                                                        <i class="fa fa-minus" aria-hidden="true"></i>
                                                    </button>
                                                    <input class="form-control input-number qty-input" type="text"
                                                        name="quantity" value="1">
                                                    <button type="button" class="btn qty-right-plus" data-type="plus"
                                                        data-field="">
                                                        <i class="fa fa-plus" aria-hidden="true"></i>
                                                    </button>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
    
                            <div>
                                <div class="product-box-4 wow fadeInUp" data-wow-delay="0.3s">
                                    <div class="product-image product-image-2">
                                        <a href="product-left-thumbnail.html">
                                            <img src="../assets/images/grocery/product/chemist/7.png"
                                                class="img-fluid blur-up lazyload" alt="">
                                        </a>
    
                                        <ul class="option">
                                            <li data-bs-toggle="tooltip" data-bs-placement="top" title="Quick View">
                                                <a href="javascript:void(0)" data-bs-toggle="modal" data-bs-target="#view">
                                                    <i class="iconly-Show icli"></i>
                                                </a>
                                            </li>
                                            <li data-bs-toggle="tooltip" data-bs-placement="top" title="Wishlist">
                                                <a href="javascript:void(0)" class="notifi-wishlist">
                                                    <i class="iconly-Heart icli"></i>
                                                </a>
                                            </li>
                                            <li data-bs-toggle="tooltip" data-bs-placement="top" title="Compare">
                                                <a href="compare.html">
                                                    <i class="iconly-Swap icli"></i>
                                                </a>
                                            </li>
                                        </ul>
                                    </div>
    
                                    <div class="product-detail">
                                        <ul class="rating">
                                            <li>
                                                <i data-feather="star" class="fill"></i>
                                            </li>
                                            <li>
                                                <i data-feather="star" class="fill"></i>
                                            </li>
                                            <li>
                                                <i data-feather="star" class="fill"></i>
                                            </li>
                                            <li>
                                                <i data-feather="star" class="fill"></i>
                                            </li>
                                            <li>
                                                <i data-feather="star"></i>
                                            </li>
                                        </ul>
                                        <a href="product-left-thumbnail.html">
                                            <h5 class="name text-title">Savlon Antiseptic</h5>
                                        </a>
                                        <h5 class="price theme-color">$65.21<del>$71.25</del></h5>
                                        <div class="addtocart_btn">
                                            <button class="add-button addcart-button btn buy-button text-light">
                                                <i class="fa-solid fa-plus"></i>
                                            </button>
                                            <div class="qty-box cart_qty">
                                                <div class="input-group">
                                                    <button type="button" class="btn qty-left-minus" data-type="minus"
                                                        data-field="">
                                                        <i class="fa fa-minus" aria-hidden="true"></i>
                                                    </button>
                                                    <input class="form-control input-number qty-input" type="text"
                                                        name="quantity" value="1">
                                                    <button type="button" class="btn qty-right-plus" data-type="plus"
                                                        data-field="">
                                                        <i class="fa fa-plus" aria-hidden="true"></i>
                                                    </button>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
    
                            <div>
                                <div class="product-box-4 wow fadeInUp" data-wow-delay="0.35s">
                                    <div class="product-image product-image-2">
                                        <a href="product-left-thumbnail.html">
                                            <img src="../assets/images/grocery/product/chemist/8.png"
                                                class="img-fluid blur-up lazyload" alt="">
                                        </a>
    
                                        <ul class="option">
                                            <li data-bs-toggle="tooltip" data-bs-placement="top" title="Quick View">
                                                <a href="javascript:void(0)" data-bs-toggle="modal" data-bs-target="#view">
                                                    <i class="iconly-Show icli"></i>
                                                </a>
                                            </li>
                                            <li data-bs-toggle="tooltip" data-bs-placement="top" title="Wishlist">
                                                <a href="javascript:void(0)" class="notifi-wishlist">
                                                    <i class="iconly-Heart icli"></i>
                                                </a>
                                            </li>
                                            <li data-bs-toggle="tooltip" data-bs-placement="top" title="Compare">
                                                <a href="compare.html">
                                                    <i class="iconly-Swap icli"></i>
                                                </a>
                                            </li>
                                        </ul>
                                    </div>
    
                                    <div class="product-detail">
                                        <ul class="rating">
                                            <li>
                                                <i data-feather="star" class="fill"></i>
                                            </li>
                                            <li>
                                                <i data-feather="star" class="fill"></i>
                                            </li>
                                            <li>
                                                <i data-feather="star" class="fill"></i>
                                            </li>
                                            <li>
                                                <i data-feather="star" class="fill"></i>
                                            </li>
                                            <li>
                                                <i data-feather="star"></i>
                                            </li>
                                        </ul>
                                        <a href="product-left-thumbnail.html">
                                            <h5 class="name text-title">Strawberry</h5>
                                        </a>
                                        <h5 class="price theme-color">$65.21<del>$71.25</del></h5>
                                        <div class="addtocart_btn">
                                            <button class="add-button addcart-button btn buy-button text-light">
                                                <i class="fa-solid fa-plus"></i>
                                            </button>
                                            <div class="qty-box cart_qty">
                                                <div class="input-group">
                                                    <button type="button" class="btn qty-left-minus" data-type="minus"
                                                        data-field="">
                                                        <i class="fa fa-minus" aria-hidden="true"></i>
                                                    </button>
                                                    <input class="form-control input-number qty-input" type="text"
                                                        name="quantity" value="1">
                                                    <button type="button" class="btn qty-right-plus" data-type="plus"
                                                        data-field="">
                                                        <i class="fa fa-plus" aria-hidden="true"></i>
                                                    </button>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
        <!-- Product Chemist Store Section End -->
    
        <!-- Banner Section Start -->
        <section class="banner-section">
            <div class="container-fluid-lg">
                <div class="row gy-lg-0 gy-3">
                    <div class="col-lg-6">
                        <div class="banner-contain-3 hover-effect">
                            <div>
                                <img src="../assets/images/grocery/banner/6.jpg" class="bg-img blur-up lazyload" alt="">
                                <div
                                    class="banner-detail banner-detail-2 text-dark p-center-left w-75 banner-p-sm position-relative mend-auto">
                                    <div>
                                        <h2 class="text-great fw-normal text-danger">50% special offer</h2>
                                        <h3 class="mb-1 fw-bold">Chocolate Shake Back in <br class="d-sm-block d-none">
                                            Stock</h3>
                                        <h4 class="text-content">Offer Of the Week!</h4>
                                        <button class="btn btn-md theme-bg-color text-white mt-sm-3 mt-1 fw-bold mend-auto"
                                            onclick="location.href = 'shop-left-sidebar.html';">Shop Now</button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
    
                    <div class="col-lg-6">
                        <div class="banner-contain-3 hover-effect">
                            <img src="../assets/images/grocery/banner/7.jpg" class="bg-img blur-up lazyload" alt="">
                            <div
                                class="banner-detail banner-detail-2 text-dark p-center-left w-75 banner-p-sm position-relative mend-auto">
                                <div>
                                    <h2 class="text-great fw-normal text-danger">Special hot sale</h2>
                                    <h3 class="mb-1 fw-bold">Healthy & Fresh Cool <br> Breakfast</h3>
                                    <h4 class="text-content">Choose a Nutritious & Healthy Breakfast.</h4>
                                    <button class="btn btn-md theme-bg-color text-white mt-sm-3 mt-1 fw-bold mend-auto"
                                        onclick="location.href = 'shop-left-sidebar.html';">Shop Now</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
        <!-- Banner Section End -->
    
        <!-- Product Drinks Section Start -->
        <section class="product-section">
            <div class="container-fluid-lg">
                <div class="title">
                    <h2>Drinks</h2>
                </div>
    
                <div class="row">
                    <div class="col-12">
                        <div class="slider-7_1 arrow-slider img-slider">
                            <div>
                                <div class="product-box-4 wow fadeInUp">
                                    <div class="product-image product-image-2">
                                        <a href="product-left-thumbnail.html">
                                            <img src="../assets/images/grocery/product/drink/1.png"
                                                class="img-fluid blur-up lazyload" alt="">
                                        </a>
    
                                        <ul class="option">
                                            <li data-bs-toggle="tooltip" data-bs-placement="top" title="Quick View">
                                                <a href="javascript:void(0)" data-bs-toggle="modal" data-bs-target="#view">
                                                    <i class="iconly-Show icli"></i>
                                                </a>
                                            </li>
                                            <li data-bs-toggle="tooltip" data-bs-placement="top" title="Wishlist">
                                                <a href="javascript:void(0)" class="notifi-wishlist">
                                                    <i class="iconly-Heart icli"></i>
                                                </a>
                                            </li>
                                            <li data-bs-toggle="tooltip" data-bs-placement="top" title="Compare">
                                                <a href="compare.html">
                                                    <i class="iconly-Swap icli"></i>
                                                </a>
                                            </li>
                                        </ul>
                                    </div>
    
                                    <div class="product-detail">
                                        <ul class="rating">
                                            <li>
                                                <i data-feather="star" class="fill"></i>
                                            </li>
                                            <li>
                                                <i data-feather="star" class="fill"></i>
                                            </li>
                                            <li>
                                                <i data-feather="star" class="fill"></i>
                                            </li>
                                            <li>
                                                <i data-feather="star" class="fill"></i>
                                            </li>
                                            <li>
                                                <i data-feather="star"></i>
                                            </li>
                                        </ul>
                                        <a href="product-left-thumbnail.html">
                                            <h5 class="name text-title">Monster</h5>
                                        </a>
                                        <h5 class="price theme-color">$65.21<del>$71.25</del></h5>
                                        <div class="addtocart_btn">
                                            <button class="add-button addcart-button btn buy-button text-light">
                                                <i class="fa-solid fa-plus"></i>
                                            </button>
                                            <div class="qty-box cart_qty">
                                                <div class="input-group">
                                                    <button type="button" class="btn qty-left-minus" data-type="minus"
                                                        data-field="">
                                                        <i class="fa fa-minus" aria-hidden="true"></i>
                                                    </button>
                                                    <input class="form-control input-number qty-input" type="text"
                                                        name="quantity" value="1">
                                                    <button type="button" class="btn qty-right-plus" data-type="plus"
                                                        data-field="">
                                                        <i class="fa fa-plus" aria-hidden="true"></i>
                                                    </button>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
    
                            <div>
                                <div class="product-box-4 wow fadeInUp" data-wow-delay="0.05s">
                                    <div class="product-image product-image-2">
                                        <a href="product-left-thumbnail.html">
                                            <img src="../assets/images/grocery/product/drink/2.png"
                                                class="img-fluid blur-up lazyload" alt="">
                                        </a>
    
                                        <ul class="option">
                                            <li data-bs-toggle="tooltip" data-bs-placement="top" title="Quick View">
                                                <a href="javascript:void(0)" data-bs-toggle="modal" data-bs-target="#view">
                                                    <i class="iconly-Show icli"></i>
                                                </a>
                                            </li>
                                            <li data-bs-toggle="tooltip" data-bs-placement="top" title="Wishlist">
                                                <a href="javascript:void(0)" class="notifi-wishlist">
                                                    <i class="iconly-Heart icli"></i>
                                                </a>
                                            </li>
                                            <li data-bs-toggle="tooltip" data-bs-placement="top" title="Compare">
                                                <a href="compare.html">
                                                    <i class="iconly-Swap icli"></i>
                                                </a>
                                            </li>
                                        </ul>
                                    </div>
    
                                    <div class="product-detail">
                                        <ul class="rating">
                                            <li>
                                                <i data-feather="star" class="fill"></i>
                                            </li>
                                            <li>
                                                <i data-feather="star" class="fill"></i>
                                            </li>
                                            <li>
                                                <i data-feather="star" class="fill"></i>
                                            </li>
                                            <li>
                                                <i data-feather="star" class="fill"></i>
                                            </li>
                                            <li>
                                                <i data-feather="star"></i>
                                            </li>
                                        </ul>
                                        <a href="product-left-thumbnail.html">
                                            <h5 class="name text-title">Red Bull</h5>
                                        </a>
                                        <h5 class="price theme-color">$65.21<del>$71.25</del></h5>
                                        <div class="addtocart_btn">
                                            <button class="add-button addcart-button btn buy-button text-light">
                                                <i class="fa-solid fa-plus"></i>
                                            </button>
                                            <div class="qty-box cart_qty">
                                                <div class="input-group">
                                                    <button type="button" class="btn qty-left-minus" data-type="minus"
                                                        data-field="">
                                                        <i class="fa fa-minus" aria-hidden="true"></i>
                                                    </button>
                                                    <input class="form-control input-number qty-input" type="text"
                                                        name="quantity" value="1">
                                                    <button type="button" class="btn qty-right-plus" data-type="plus"
                                                        data-field="">
                                                        <i class="fa fa-plus" aria-hidden="true"></i>
                                                    </button>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
    
                            <div>
                                <div class="product-box-4 wow fadeInUp" data-wow-delay="0.1s">
                                    <div class="product-image product-image-2">
                                        <a href="product-left-thumbnail.html">
                                            <img src="../assets/images/grocery/product/drink/3.png"
                                                class="img-fluid blur-up lazyload" alt="">
                                        </a>
    
                                        <ul class="option">
                                            <li data-bs-toggle="tooltip" data-bs-placement="top" title="Quick View">
                                                <a href="javascript:void(0)" data-bs-toggle="modal" data-bs-target="#view">
                                                    <i class="iconly-Show icli"></i>
                                                </a>
                                            </li>
                                            <li data-bs-toggle="tooltip" data-bs-placement="top" title="Wishlist">
                                                <a href="javascript:void(0)" class="notifi-wishlist">
                                                    <i class="iconly-Heart icli"></i>
                                                </a>
                                            </li>
                                            <li data-bs-toggle="tooltip" data-bs-placement="top" title="Compare">
                                                <a href="compare.html">
                                                    <i class="iconly-Swap icli"></i>
                                                </a>
                                            </li>
                                        </ul>
                                    </div>
    
                                    <div class="product-detail">
                                        <ul class="rating">
                                            <li>
                                                <i data-feather="star" class="fill"></i>
                                            </li>
                                            <li>
                                                <i data-feather="star" class="fill"></i>
                                            </li>
                                            <li>
                                                <i data-feather="star" class="fill"></i>
                                            </li>
                                            <li>
                                                <i data-feather="star" class="fill"></i>
                                            </li>
                                            <li>
                                                <i data-feather="star"></i>
                                            </li>
                                        </ul>
                                        <a href="product-left-thumbnail.html">
                                            <h5 class="name text-title">Ginger ale</h5>
                                        </a>
                                        <h5 class="price theme-color">$65.21<del>$71.25</del></h5>
                                        <div class="addtocart_btn">
                                            <button class="add-button addcart-button btn buy-button text-light">
                                                <i class="fa-solid fa-plus"></i>
                                            </button>
                                            <div class="qty-box cart_qty">
                                                <div class="input-group">
                                                    <button type="button" class="btn qty-left-minus" data-type="minus"
                                                        data-field="">
                                                        <i class="fa fa-minus" aria-hidden="true"></i>
                                                    </button>
                                                    <input class="form-control input-number qty-input" type="text"
                                                        name="quantity" value="1">
                                                    <button type="button" class="btn qty-right-plus" data-type="plus"
                                                        data-field="">
                                                        <i class="fa fa-plus" aria-hidden="true"></i>
                                                    </button>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
    
                            <div>
                                <div class="product-box-4 wow fadeInUp" data-wow-delay="0.15s">
                                    <div class="product-image product-image-2">
                                        <a href="product-left-thumbnail.html">
                                            <img src="../assets/images/grocery/product/drink/4.png"
                                                class="img-fluid blur-up lazyload" alt="">
                                        </a>
    
                                        <ul class="option">
                                            <li data-bs-toggle="tooltip" data-bs-placement="top" title="Quick View">
                                                <a href="javascript:void(0)" data-bs-toggle="modal" data-bs-target="#view">
                                                    <i class="iconly-Show icli"></i>
                                                </a>
                                            </li>
                                            <li data-bs-toggle="tooltip" data-bs-placement="top" title="Wishlist">
                                                <a href="javascript:void(0)" class="notifi-wishlist">
                                                    <i class="iconly-Heart icli"></i>
                                                </a>
                                            </li>
                                            <li data-bs-toggle="tooltip" data-bs-placement="top" title="Compare">
                                                <a href="compare.html">
                                                    <i class="iconly-Swap icli"></i>
                                                </a>
                                            </li>
                                        </ul>
                                    </div>
    
                                    <div class="product-detail">
                                        <ul class="rating">
                                            <li>
                                                <i data-feather="star" class="fill"></i>
                                            </li>
                                            <li>
                                                <i data-feather="star" class="fill"></i>
                                            </li>
                                            <li>
                                                <i data-feather="star" class="fill"></i>
                                            </li>
                                            <li>
                                                <i data-feather="star" class="fill"></i>
                                            </li>
                                            <li>
                                                <i data-feather="star"></i>
                                            </li>
                                        </ul>
                                        <a href="product-left-thumbnail.html">
                                            <h5 class="name text-title">Spike</h5>
                                        </a>
                                        <h5 class="price theme-color">$65.21<del>$71.25</del></h5>
                                        <div class="addtocart_btn">
                                            <button class="add-button addcart-button btn buy-button text-light">
                                                <i class="fa-solid fa-plus"></i>
                                            </button>
                                            <div class="qty-box cart_qty">
                                                <div class="input-group">
                                                    <button type="button" class="btn qty-left-minus" data-type="minus"
                                                        data-field="">
                                                        <i class="fa fa-minus" aria-hidden="true"></i>
                                                    </button>
                                                    <input class="form-control input-number qty-input" type="text"
                                                        name="quantity" value="1">
                                                    <button type="button" class="btn qty-right-plus" data-type="plus"
                                                        data-field="">
                                                        <i class="fa fa-plus" aria-hidden="true"></i>
                                                    </button>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
    
                            <div>
                                <div class="product-box-4 wow fadeInUp" data-wow-delay="0.2s">
                                    <div class="product-image product-image-2">
                                        <a href="product-left-thumbnail.html">
                                            <img src="../assets/images/grocery/product/drink/5.png"
                                                class="img-fluid blur-up lazyload" alt="">
                                        </a>
    
                                        <ul class="option">
                                            <li data-bs-toggle="tooltip" data-bs-placement="top" title="Quick View">
                                                <a href="javascript:void(0)" data-bs-toggle="modal" data-bs-target="#view">
                                                    <i class="iconly-Show icli"></i>
                                                </a>
                                            </li>
                                            <li data-bs-toggle="tooltip" data-bs-placement="top" title="Wishlist">
                                                <a href="javascript:void(0)" class="notifi-wishlist">
                                                    <i class="iconly-Heart icli"></i>
                                                </a>
                                            </li>
                                            <li data-bs-toggle="tooltip" data-bs-placement="top" title="Compare">
                                                <a href="compare.html">
                                                    <i class="iconly-Swap icli"></i>
                                                </a>
                                            </li>
                                        </ul>
                                    </div>
    
                                    <div class="product-detail">
                                        <ul class="rating">
                                            <li>
                                                <i data-feather="star" class="fill"></i>
                                            </li>
                                            <li>
                                                <i data-feather="star" class="fill"></i>
                                            </li>
                                            <li>
                                                <i data-feather="star" class="fill"></i>
                                            </li>
                                            <li>
                                                <i data-feather="star" class="fill"></i>
                                            </li>
                                            <li>
                                                <i data-feather="star"></i>
                                            </li>
                                        </ul>
                                        <a href="product-left-thumbnail.html">
                                            <h5 class="name text-title">Mati Sparklng</h5>
                                        </a>
                                        <h5 class="price theme-color">$65.21<del>$71.25</del></h5>
                                        <div class="addtocart_btn">
                                            <button class="add-button addcart-button btn buy-button text-light">
                                                <i class="fa-solid fa-plus"></i>
                                            </button>
                                            <div class="qty-box cart_qty">
                                                <div class="input-group">
                                                    <button type="button" class="btn qty-left-minus" data-type="minus"
                                                        data-field="">
                                                        <i class="fa fa-minus" aria-hidden="true"></i>
                                                    </button>
                                                    <input class="form-control input-number qty-input" type="text"
                                                        name="quantity" value="1">
                                                    <button type="button" class="btn qty-right-plus" data-type="plus"
                                                        data-field="">
                                                        <i class="fa fa-plus" aria-hidden="true"></i>
                                                    </button>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
    
                            <div>
                                <div class="product-box-4 wow fadeInUp" data-wow-delay="0.25s">
                                    <div class="product-image product-image-2">
                                        <a href="product-left-thumbnail.html">
                                            <img src="../assets/images/grocery/product/drink/6.png"
                                                class="img-fluid blur-up lazyload" alt="">
                                        </a>
    
                                        <ul class="option">
                                            <li data-bs-toggle="tooltip" data-bs-placement="top" title="Quick View">
                                                <a href="javascript:void(0)" data-bs-toggle="modal" data-bs-target="#view">
                                                    <i class="iconly-Show icli"></i>
                                                </a>
                                            </li>
                                            <li data-bs-toggle="tooltip" data-bs-placement="top" title="Wishlist">
                                                <a href="javascript:void(0)" class="notifi-wishlist">
                                                    <i class="iconly-Heart icli"></i>
                                                </a>
                                            </li>
                                            <li data-bs-toggle="tooltip" data-bs-placement="top" title="Compare">
                                                <a href="compare.html">
                                                    <i class="iconly-Swap icli"></i>
                                                </a>
                                            </li>
                                        </ul>
                                    </div>
    
                                    <div class="product-detail">
                                        <ul class="rating">
                                            <li>
                                                <i data-feather="star" class="fill"></i>
                                            </li>
                                            <li>
                                                <i data-feather="star" class="fill"></i>
                                            </li>
                                            <li>
                                                <i data-feather="star" class="fill"></i>
                                            </li>
                                            <li>
                                                <i data-feather="star" class="fill"></i>
                                            </li>
                                            <li>
                                                <i data-feather="star"></i>
                                            </li>
                                        </ul>
                                        <a href="product-left-thumbnail.html">
                                            <h5 class="name text-title">Fanta</h5>
                                        </a>
                                        <h5 class="price theme-color">$65.21<del>$71.25</del></h5>
                                        <div class="addtocart_btn">
                                            <button class="add-button addcart-button btn buy-button text-light">
                                                <i class="fa-solid fa-plus"></i>
                                            </button>
                                            <div class="qty-box cart_qty">
                                                <div class="input-group">
                                                    <button type="button" class="btn qty-left-minus" data-type="minus"
                                                        data-field="">
                                                        <i class="fa fa-minus" aria-hidden="true"></i>
                                                    </button>
                                                    <input class="form-control input-number qty-input" type="text"
                                                        name="quantity" value="1">
                                                    <button type="button" class="btn qty-right-plus" data-type="plus"
                                                        data-field="">
                                                        <i class="fa fa-plus" aria-hidden="true"></i>
                                                    </button>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
    
                            <div>
                                <div class="product-box-4 wow fadeInUp" data-wow-delay="0.3s">
                                    <div class="product-image product-image-2">
                                        <a href="product-left-thumbnail.html">
                                            <img src="../assets/images/grocery/product/drink/7.png"
                                                class="img-fluid blur-up lazyload" alt="">
                                        </a>
    
                                        <ul class="option">
                                            <li data-bs-toggle="tooltip" data-bs-placement="top" title="Quick View">
                                                <a href="javascript:void(0)" data-bs-toggle="modal" data-bs-target="#view">
                                                    <i class="iconly-Show icli"></i>
                                                </a>
                                            </li>
                                            <li data-bs-toggle="tooltip" data-bs-placement="top" title="Wishlist">
                                                <a href="javascript:void(0)" class="notifi-wishlist">
                                                    <i class="iconly-Heart icli"></i>
                                                </a>
                                            </li>
                                            <li data-bs-toggle="tooltip" data-bs-placement="top" title="Compare">
                                                <a href="compare.html">
                                                    <i class="iconly-Swap icli"></i>
                                                </a>
                                            </li>
                                        </ul>
                                    </div>
    
                                    <div class="product-detail">
                                        <ul class="rating">
                                            <li>
                                                <i data-feather="star" class="fill"></i>
                                            </li>
                                            <li>
                                                <i data-feather="star" class="fill"></i>
                                            </li>
                                            <li>
                                                <i data-feather="star" class="fill"></i>
                                            </li>
                                            <li>
                                                <i data-feather="star" class="fill"></i>
                                            </li>
                                            <li>
                                                <i data-feather="star"></i>
                                            </li>
                                        </ul>
                                        <a href="product-left-thumbnail.html">
                                            <h5 class="name text-title">Coca Cola</h5>
                                        </a>
                                        <h5 class="price theme-color">$65.21<del>$71.25</del></h5>
                                        <div class="addtocart_btn">
                                            <button class="add-button addcart-button btn buy-button text-light">
                                                <i class="fa-solid fa-plus"></i>
                                            </button>
                                            <div class="qty-box cart_qty">
                                                <div class="input-group">
                                                    <button type="button" class="btn qty-left-minus" data-type="minus"
                                                        data-field="">
                                                        <i class="fa fa-minus" aria-hidden="true"></i>
                                                    </button>
                                                    <input class="form-control input-number qty-input" type="text"
                                                        name="quantity" value="1">
                                                    <button type="button" class="btn qty-right-plus" data-type="plus"
                                                        data-field="">
                                                        <i class="fa fa-plus" aria-hidden="true"></i>
                                                    </button>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
    
                            <div>
                                <div class="product-box-4 wow fadeInUp" data-wow-delay="0.35s">
                                    <div class="product-image product-image-2">
                                        <a href="product-left-thumbnail.html">
                                            <img src="../assets/images/grocery/product/drink/8.png"
                                                class="img-fluid blur-up lazyload" alt="">
                                        </a>
    
                                        <ul class="option">
                                            <li data-bs-toggle="tooltip" data-bs-placement="top" title="Quick View">
                                                <a href="javascript:void(0)" data-bs-toggle="modal" data-bs-target="#view">
                                                    <i class="iconly-Show icli"></i>
                                                </a>
                                            </li>
                                            <li data-bs-toggle="tooltip" data-bs-placement="top" title="Wishlist">
                                                <a href="javascript:void(0)" class="notifi-wishlist">
                                                    <i class="iconly-Heart icli"></i>
                                                </a>
                                            </li>
                                            <li data-bs-toggle="tooltip" data-bs-placement="top" title="Compare">
                                                <a href="compare.html">
                                                    <i class="iconly-Swap icli"></i>
                                                </a>
                                            </li>
                                        </ul>
                                    </div>
    
                                    <div class="product-detail">
                                        <ul class="rating">
                                            <li>
                                                <i data-feather="star" class="fill"></i>
                                            </li>
                                            <li>
                                                <i data-feather="star" class="fill"></i>
                                            </li>
                                            <li>
                                                <i data-feather="star" class="fill"></i>
                                            </li>
                                            <li>
                                                <i data-feather="star" class="fill"></i>
                                            </li>
                                            <li>
                                                <i data-feather="star"></i>
                                            </li>
                                        </ul>
                                        <a href="product-left-thumbnail.html">
                                            <h5 class="name text-title">Sprite</h5>
                                        </a>
                                        <h5 class="price theme-color">$65.21<del>$71.25</del></h5>
                                        <div class="addtocart_btn">
                                            <button class="add-button addcart-button btn buy-button text-light">
                                                <i class="fa-solid fa-plus"></i>
                                            </button>
                                            <div class="qty-box cart_qty">
                                                <div class="input-group">
                                                    <button type="button" class="btn qty-left-minus" data-type="minus"
                                                        data-field="">
                                                        <i class="fa fa-minus" aria-hidden="true"></i>
                                                    </button>
                                                    <input class="form-control input-number qty-input" type="text"
                                                        name="quantity" value="1">
                                                    <button type="button" class="btn qty-right-plus" data-type="plus"
                                                        data-field="">
                                                        <i class="fa fa-plus" aria-hidden="true"></i>
                                                    </button>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
        <!-- Product Drinks Section End -->
    
        <!-- Product Grocery & Staples Section Start -->
 
        <!-- Product Grocery & Staples Section End -->
    
        <!-- Banner Section Start -->
 
        <!-- Banner Section End -->
    
        <!-- Product Personal Care Section Start -->
 
        <!-- Product Personal Care Section End -->
    
        <!-- Product Kitchen & Dining Needs Section Start -->
 
        <!-- Product Kitchen & Dining Needs Section End -->
    
        <!-- Blog Section Start -->
 
        <!-- Blog Section End -->
    
        <!-- Service Section Start -->
 
        <!-- Service Section End -->
    
        <!-- Footer Start -->
        @include('Front.partials.footer')
        <!-- Footer End -->
    
        <!-- Quick View Modal Box Start -->
        <div class="modal fade theme-modal view-modal" id="view" tabindex="-1" aria-labelledby="exampleModalLabel"
            aria-hidden="true">
            <div class="modal-dialog modal-dialog-centered modal-xl modal-fullscreen-sm-down">
                <div class="modal-content">
                    <div class="modal-header p-0">
                        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close">
                            <i class="fa-solid fa-xmark"></i>
                        </button>
                    </div>
                    <div class="modal-body">
                        <div class="row g-sm-4 g-2">
                            <div class="col-lg-6">
                                <div class="slider-image">
                                    <img src="../assets/images/product/category/1.jpg" class="img-fluid blur-up lazyload"
                                        alt="">
                                </div>
                            </div>
    
                            <div class="col-lg-6">
                                <div class="right-sidebar-modal">
                                    <h4 class="title-name">Peanut Butter Bite Premium Butter Cookies 600 g</h4>
                                    <h4 class="price">$36.99</h4>
                                    <div class="product-rating">
                                        <ul class="rating">
                                            <li>
                                                <i data-feather="star" class="fill"></i>
                                            </li>
                                            <li>
                                                <i data-feather="star" class="fill"></i>
                                            </li>
                                            <li>
                                                <i data-feather="star" class="fill"></i>
                                            </li>
                                            <li>
                                                <i data-feather="star" class="fill"></i>
                                            </li>
                                            <li>
                                                <i data-feather="star"></i>
                                            </li>
                                        </ul>
                                        <span class="ms-2">8 Reviews</span>
                                        <span class="ms-2 text-danger">6 sold in last 16 hours</span>
                                    </div>
    
                                    <div class="product-detail">
                                        <h4>Product Details :</h4>
                                        <p>Candy canes sugar plum tart cotton candy chupa chups sugar plum chocolate I love.
                                            Caramels marshmallow icing dessert candy canes I love soufflé I love toffee.
                                            Marshmallow pie sweet sweet roll sesame snaps tiramisu jelly bear claw. Bonbon
                                            muffin I love carrot cake sugar plum dessert bonbon.</p>
                                    </div>
    
                                    <ul class="brand-list">
                                        <li>
                                            <div class="brand-box">
                                                <h5>Brand Name:</h5>
                                                <h6>Black Forest</h6>
                                            </div>
                                        </li>
    
                                        <li>
                                            <div class="brand-box">
                                                <h5>Product Code:</h5>
                                                <h6>W0690034</h6>
                                            </div>
                                        </li>
    
                                        <li>
                                            <div class="brand-box">
                                                <h5>Product Type:</h5>
                                                <h6>White Cream Cake</h6>
                                            </div>
                                        </li>
                                    </ul>
    
                                    <div class="select-size">
                                        <h4>Cake Size :</h4>
                                        <select class="form-select select-form-size">
                                            <option selected>Select Size</option>
                                            <option value="1.2">1/2 KG</option>
                                            <option value="0">1 KG</option>
                                            <option value="1.5">1/5 KG</option>
                                            <option value="red">Red Roses</option>
                                            <option value="pink">With Pink Roses</option>
                                        </select>
                                    </div>
    
                                    <div class="modal-button">
                                        <button onclick="location.href = 'cart.html';"
                                            class="btn btn-md add-cart-button icon">Add
                                            To Cart</button>
                                        <button onclick="location.href = 'product-left.html';"
                                            class="btn theme-bg-color view-button icon text-white fw-bold btn-md">
                                            View More Details</button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <!-- Quick View Modal Box End -->
    
        <!-- Cookie Bar Box Start -->
        <div class="cookie-bar-box">
            <div class="cookie-box">
                <div class="cookie-image">
                    <img src="../assets/images/cookie-bar.png" class="blur-up lazyload" alt="">
                    <h2>Cookies!</h2>
                </div>
    
                <div class="cookie-contain">
                    <h5 class="text-content">We use cookies to make your experience better</h5>
                </div>
            </div>
    
            <div class="button-group">
                <button class="btn privacy-button">Privacy Policy</button>
                <button class="btn ok-button">OK</button>
            </div>
        </div>
        <!-- Cookie Bar Box End -->
    
        <!-- Location Modal Start -->
        <div class="modal location-modal fade theme-modal" id="locationModal" tabindex="-1"
            aria-labelledby="exampleModalLabel" aria-hidden="true">
            <div class="modal-dialog modal-dialog-centered modal-fullscreen-sm-down">
                <div class="modal-content">
                    <div class="modal-header">
                        <h5 class="modal-title" id="exampleModalLabel">Choose your Delivery Location</h5>
                        <p class="mt-1 text-content">Enter your address and we will specify the offer for your area.</p>
                        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close">
                            <i class="fa-solid fa-xmark"></i>
                        </button>
                    </div>
                    <div class="modal-body">
                        <div class="location-list">
                            <div class="search-input">
                                <input type="search" class="form-control" placeholder="Search Your Area">
                                <i class="fa-solid fa-magnifying-glass"></i>
                            </div>
    
                            <div class="disabled-box">
                                <h6>Select a Location</h6>
                            </div>
    
                            <ul class="location-select custom-height">
                                <li>
                                    <a href="javascript:void(0)">
                                        <h6>Alabama</h6>
                                        <span>Min: $130</span>
                                    </a>
                                </li>
    
                                <li>
                                    <a href="javascript:void(0)">
                                        <h6>Arizona</h6>
                                        <span>Min: $150</span>
                                    </a>
                                </li>
    
                                <li>
                                    <a href="javascript:void(0)">
                                        <h6>California</h6>
                                        <span>Min: $110</span>
                                    </a>
                                </li>
    
                                <li>
                                    <a href="javascript:void(0)">
                                        <h6>Colorado</h6>
                                        <span>Min: $140</span>
                                    </a>
                                </li>
    
                                <li>
                                    <a href="javascript:void(0)">
                                        <h6>Florida</h6>
                                        <span>Min: $160</span>
                                    </a>
                                </li>
    
                                <li>
                                    <a href="javascript:void(0)">
                                        <h6>Georgia</h6>
                                        <span>Min: $120</span>
                                    </a>
                                </li>
    
                                <li>
                                    <a href="javascript:void(0)">
                                        <h6>Kansas</h6>
                                        <span>Min: $170</span>
                                    </a>
                                </li>
    
                                <li>
                                    <a href="javascript:void(0)">
                                        <h6>Minnesota</h6>
                                        <span>Min: $120</span>
                                    </a>
                                </li>
    
                                <li>
                                    <a href="javascript:void(0)">
                                        <h6>New York</h6>
                                        <span>Min: $110</span>
                                    </a>
                                </li>
    
                                <li>
                                    <a href="javascript:void(0)">
                                        <h6>Washington</h6>
                                        <span>Min: $130</span>
                                    </a>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <!-- Location Modal End -->
    
        <!-- Tap to top start -->
        <div class="theme-option">
            <div class="back-to-top">
                <a id="back-to-top" href="#">
                    <i class="fas fa-chevron-up"></i>
                </a>
            </div>
        </div>
        <!-- Tap to top end -->
    
        <!-- Bg overlay Start -->
        <div class="bg-overlay"></div>
        <!-- Bg overlay End -->
    
@endsection