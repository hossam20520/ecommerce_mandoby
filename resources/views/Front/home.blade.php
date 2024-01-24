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
        {{-- @include('Front.partials.category_section') --}}
        <!-- Category Section End -->
    
        <!-- Product Fruit & Vegetables Section Start -->
 
        <!-- Product Fruit & Vegetables Section End -->
    
        <!-- Banner Section Start -->
    
        <!-- Banner Section End -->
    
        <!-- Deal Section Start -->
 
        <!-- Deal Section End -->
    
        <!-- Offer Section Start -->
 
        <!-- Offer Section End -->
    
        <!-- Product Breakfast & Dairy Section Start -->
 
        <!-- Product Breakfast & Dairy Section End -->
    
        <!-- Product Chemist Store Section Start -->
 
        <!-- Product Chemist Store Section End -->
    
        <!-- Banner Section Start -->
 
        <!-- Banner Section End -->
    
        <!-- Product Drinks Section Start -->
 
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