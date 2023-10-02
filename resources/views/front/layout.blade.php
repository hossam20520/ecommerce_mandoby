<!DOCTYPE html>
 
 
<html lang="en" dir="{{ app()->getLocale() == 'ar' ? 'rtl' : 'ltr' }}">
 



<head>
    <meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta name="description" content="dhofar">
    <meta name="keywords" content="dhofar">
    <meta name="author" content="dhofar">
    {{-- <link rel="icon" href="{{ asset('css/assets/images/favicon/5.png') }}" type="image/x-icon"> --}}
    <title>Dhofar </title>

    <!-- Google font -->
    <link rel="preconnect" href="https://fonts.gstatic.com">
    <link
        href="https://fonts.googleapis.com/css2?family=Public+Sans:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap"
        rel="stylesheet">
    <link href="https://fonts.googleapis.com/css2?family=Great+Vibes&display=swap" rel="stylesheet">

    <!-- bootstrap css -->

    

    @if (app()->getLocale() === 'en')
    <link id="rtl-link" rel="stylesheet" type="text/css" href="{{ asset('css/assets/css/vendors/bootstrap.css') }}">
    @elseif (app()->getLocale() === 'ar')
      <link id="rtl-link" rel="stylesheet" type="text/css" href="{{ asset('css/assets/css/vendors/bootstrap.rtl.css') }}">
      @else 
      <link id="rtl-link" rel="stylesheet" type="text/css" href="{{ asset('css/assets/css/vendors/bootstrap.rtl.css') }}">

     @endif

    {{-- <link id="rtl-link" rel="stylesheet" type="text/css" href="{{ asset('css/assets/css/vendors/bootstrap.rtl.css') }}"> --}}
    <!-- wow css -->
    <link rel="stylesheet" href="{{ asset('css/assets/css/animate.min.css') }}" />

    <!-- font-awesome css -->
    <link rel="stylesheet" type="text/css" href="{{ asset('css/assets/css/vendors/font-awesome.css') }}">

    <!-- feather icon css -->
    <link rel="stylesheet" type="text/css" href="{{ asset('css/assets/css/vendors/feather-icon.css') }}">

    <!-- Plugin CSS file with desired skin css -->
    <link rel="stylesheet" href="{{ asset('css/assets/css/vendors/ion.rangeSlider.min.css') }}">

    <!-- slick css -->
    <link rel="stylesheet" type="text/css" href="{{ asset('css/assets/css/vendors/slick/slick.css') }}">
    <link rel="stylesheet" type="text/css" href="{{ asset('css/assets/css/vendors/slick/slick-theme.css') }}">

    <!-- animation css -->
    <link rel="stylesheet" type="text/css" href="{{ asset('css/assets/css/font-style.css') }}">

    <!-- Template css -->
    <link id="color-link" rel="stylesheet" type="text/css" href="{{ asset('css/assets/css/style.css') }}">

    <script src="{{ asset('js/front/vue/vue.js') }}"></script>
 
    <script src="https://cdnjs.cloudflare.com/ajax/libs/axios/1.4.0/axios.min.js"></script>
    <script src="https://cdnjs.cloudflare.com/ajax/libs/limonte-sweetalert2/11.7.12/sweetalert2.min.js"></script>
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/limonte-sweetalert2/11.7.12/sweetalert2.min.css"> 
    
    
</head>

<body class="theme-color-3 dark">

    <style>

.float{
	position:fixed;
	width:60px;
	height:60px;
	bottom:40px;
	right:40px;
	background-color:white;
	color:#FFF;
	border-radius:50px;
	text-align:center;
	box-shadow: 1px 1px 2px #999;
}

.my-float{
	margin-top:22px;
}
</style>
<div id="app">

 

    <!-- Loader Start -->
    <div class="fullpage-loader">
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
    </div>
    <!-- Loader End -->
  
    <!-- Header Start -->
    @include('front.componenets.header')
    <!-- Header End -->
 

    <!-- mobile fix menu start -->
    <div class="mobile-menu d-md-none d-block mobile-cart">
        <ul>
            <li class="active">
                <a href="index.html">
                    <i class="iconly-Home icli"></i>
                    <span>Home</span>
                </a>
            </li>

            <li class="mobile-category">
                <a href="javascript:void(0)">
                    <i class="iconly-Category icli js-link"></i>
                    <span>Category</span>
                </a>
            </li>

            <li>
                <a href="search.html" class="search-box">
                    <i class="iconly-Search icli"></i>
                    <span>Search</span>
                </a>
            </li>

            <li>
                <a href="wishlist.html" class="notifi-wishlist">
                    <i class="iconly-Heart icli"></i>
                    <span>My Wish</span>
                </a>
            </li>

            <li>
                <a href="cart.html">
                    <i class="iconly-Bag-2 icli fly-cate"></i>
                    <span>Cart</span>
                </a>
            </li>
        </ul>
    </div>

   

    <!-- mobile fix menu end -->

    <!-- Home Section Start -->

    <!-- Home Section End -->

    <!-- Banner Section Start -->
    
     @yield('content')
    <!-- Banner Section End -->

    <!-- Category Section Start -->
 
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
    {{-- <section class="service-section section-b-space">
        <div class="container-fluid-lg">
            <div class="row g-3 row-cols-xxl-5 row-cols-lg-3 row-cols-md-2">
                <div>
                    <div class="service-contain-2">
                        <svg class="icon-width">
                            <use xlink:href="{{ asset('css/assets/svg/svg/service-icon-4.svg#shipping') }}"></use>
                        </svg>
                        <div class="service-detail">
                            <h3>Free Shipping</h3>
                            <h6 class="text-content">Free Shipping world wide</h6>
                        </div>
                    </div>
                </div>
                <div>
                    <div class="service-contain-2">
                        <svg class="icon-width">
                            <use xlink:href="{{ asset('css/assets/svg/svg/service-icon-4.svg#service') }}"></use>
                        </svg>
                        <div class="service-detail">
                            <h3>24 x 7 Service</h3>
                            <h6 class="text-content">Online Service For 24 x 7</h6>
                        </div>
                    </div>
                </div>
                <div>
                    <div class="service-contain-2">
                        <svg class="icon-width">
                            <use xlink:href="{{ asset('css/assets/svg/svg/service-icon-4.svg#pay') }}"></use>
                        </svg>
                        <div class="service-detail">
                            <h3>Online Pay</h3>
                            <h6 class="text-content">Online Payment Avaible</h6>
                        </div>
                    </div>
                </div>
                <div>
                    <div class="service-contain-2">
                        <svg class="icon-width">
                            <use xlink:href="{{ asset('css/assets/svg/svg/service-icon-4.svg#offer') }}"></use>
                        </svg>
                        <div class="service-detail">
                            <h3>{{ trans('lang.FestivalOffer') }}</h3>
                            <h6 class="text-content">Super Sale Upto 50% off</h6>
                        </div>
                    </div>
                </div>
                <div>
                    <div class="service-contain-2">
                        <svg class="icon-width">
                            <use xlink:href="{{ asset('css/assets/svg/svg/service-icon-4.svg#return') }}"></use>
                        </svg>
                        <div class="service-detail">
                            <h3> {{ trans('lang.original') }}</h3>
                            <h6 class="text-content">{{ trans('lang.originall') }}</h6>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section> --}}
    <!-- Service Section End -->

    <!-- Footer Start -->
    <a href="/chat" class="float">
        <img width="50px" src="https://cdn-icons-png.flaticon.com/512/1041/1041916.png">
         </a>


    @include('front.componenets.footer') 
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
                                <img src="{{ asset('css/assets/images/product/category/1.jpg') }}" class="img-fluid blur-up lazyload"
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
    {{-- <div class="cookie-bar-box">
        <div class="cookie-box">
            <div class="cookie-image">
                <img src="{{ asset('css/assets/images/cookie-bar.png') }}" class="blur-up lazyload" alt="">
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
    </div> --}}
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
</div>
     @stack('scripts')



 


    <!-- latest jquery-->
    <script src="{{ asset('css/assets/js/jquery-3.6.0.min.js') }}"></script>

    <!-- jquery ui-->
    <script src="{{ asset('css/assets/js/jquery-ui.min.js') }}"></script>

    <!-- Bootstrap js-->
    <script src="{{ asset('css/assets/js/bootstrap/bootstrap.bundle.min.js') }}"></script>
    <script src="{{ asset('css/assets/js/bootstrap/bootstrap-notify.min.js') }}"></script>
    <script src="{{ asset('css/assets/js/bootstrap/popper.min.js') }}"></script>

    <!-- feather icon js-->
    <script src="{{ asset('css/assets/js/feather/feather.min.js') }}"></script>
    <script src="{{ asset('css/assets/js/feather/feather-icon.js') }}"></script>

    <!-- Lazyload Js -->
    <script src="{{ asset('css/assets/js/lazysizes.min.js') }}"></script>

    <!-- Slick js-->
    <script src="{{ asset('css/assets/js/slick/slick.js') }}"></script>
    <script src="{{ asset('css/assets/js/slick/slick-animation.min.js') }}"></script>
    <script src="{{ asset('css/assets/js/custom-slick-animated.js') }}"></script>
    <script src="{{ asset('css/assets/js/slick/custom_slick.js') }}"></script>

    <!-- Range slider js -->
    <script src="{{ asset('css/assets/js/ion.rangeSlider.min.js') }}"></script>

    <!-- Auto Height Js -->
    <script src="{{ asset('css/assets/js/auto-height.js') }}"></script>

    <!-- Lazyload Js -->
    <script src="{{ asset('css/assets/js/lazysizes.min.js') }}"></script>

    <!-- Quantity js -->
    <script src="{{ asset('css/assets/js/quantity-2.js') }}"></script>

    <!-- Fly Cart Js -->
    <script src="{{ asset('css/assets/js/fly-cart.js') }}"></script>

    <!-- Timer Js -->
    <script src="{{ asset('css/assets/js/timer1.js') }}"></script>
    <script src="{{ asset('css/assets/js/timer2.js') }}"></script>

    <!-- Copy clipboard Js -->
    <script src="{{ asset('css/assets/js/clipboard.min.js') }}"></script>
    <script src="{{ asset('css/assets/js/copy-clipboard.js') }}"></script>

    <!-- WOW js -->
    <script src="{{ asset('css/assets/js/wow.min.js') }}"></script>
    <script src="{{ asset('css/assets/js/custom-wow.js') }}"></script>

    <!-- script js -->
    <script src="{{ asset('css/assets/js/script.js') }}"></script>
</body>

</html>