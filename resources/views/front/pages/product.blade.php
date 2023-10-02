@extends('front.layout')

@section('content')

 

    <!-- Product Left Sidebar Start -->
    <section class="product-section">
        <div class="container-fluid-lg">
            <div class="row">
                <div class="col-xxl-9 col-xl-8 col-lg-7 wow fadeInUp">
                    <div class="row g-4">
                        <div class="col-xl-6 wow fadeInUp">
                            <div class="product-left-box">
                                <div class="row g-2">
                                    <div class="col-xxl-10 col-lg-12 col-md-10 order-xxl-2 order-lg-1 order-md-2">
                                        <div class="product-main-2 no-arrow">



                                            @foreach ($product['gallery'] as $item)
                                            <div>
                                                <div class="slider-image">
                                                    <img src="{{ $item }}" id="img-1"
                                                        data-zoom-image="{{ $item }}"
                                                        class="img-fluid image_zoom_cls-0 blur-up lazyload" alt="">
                                                </div>
                                            </div>
                                            @endforeach

                                  

                                     
                                      
                                            
                                        </div>
                                    </div>

                                    <div class="col-xxl-2 col-lg-12 col-md-2 order-xxl-1 order-lg-2 order-md-1">
                                        <div class="left-slider-image-2 left-slider no-arrow slick-top">
                                            
                                            
                                            
                                            @foreach ($product['gallery'] as $item)

                                            <div>
                                                <div class="sidebar-image">
                                                    <img src="{{ $item }}"
                                                        class="img-fluid blur-up lazyload" alt="">
                                                </div>
                                            </div>
 
                                            @endforeach


                                

                                        

                                      

                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div class="col-xl-6 wow fadeInUp" data-wow-delay="0.1s">
                            <div class="right-box-contain">
                                {{-- <h6 class="offer-top">30% Off</h6> --}}
                                <h2 class="name"> {{ $product['ar_name'] }}</h2>
                                <div class="price-rating">
                                    <h3 class="theme-color price">{{ $product['symbol'] }} {{ $product['price'] }}    
                                        @if ($product['discount'] != "0")
                                        <del class="text-content">  {{ $product['price'] }}  - {{ $product['discount'] }}  </del>  
                                       @endif  <span
                                            class="offer theme-color"> </span></h3>
                                    <div class="product-rating custom-rate">
                                        <ul class="rating">


                                            @for ($i = 0; $i < $product['rate']; $i++)
                                            <li>
                                                <i data-feather="star" class="fill"></i>
                                            </li>
                                            @endfor
                                          
                                            @for ($i = 0; $i < 5 - $product['rate']; $i++)
                                            <li>
                                                <i data-feather="star"></i>
                                            </li>
                                            @endfor


                                    



                                        </ul>
                                        {{-- <span class="review">23 Customer Review</span> --}}
                                    </div>
                                </div>

                                <div class="procuct-contain">
                                    <p>  {{  $product['description']  }} </p>
                                </div>

                           

                  



                                <div class="note-box product-packege">
                                    <div class="cart_qty qty-box product-qty">
                                        <div class="input-group">
                                            <button type="button"  v-on:click="increase()" class="qty-right-plus" data-type="plus" data-field="">
                                                <i class="fa fa-plus" aria-hidden="true"></i>
                                            </button>
                                            <input class="form-control input-number qty-input" type="text"
                                                name="quantity" v-model="qty"  >

                                              
                                            <button type="button" class="qty-left-minus" data-type="minus"
                                                data-field="">
                                                <i class="fa fa-minus" aria-hidden="true"></i>
                                            </button>
                                        </div>
                                    </div>
                                    <button  v-on:click="addToCart({{ $product['id'] }} , qty)" class="btn btn-md bg-dark cart-button text-white w-100">Add To Cart</button>
                                </div>

                                <div class="buy-box">
                                    <a  v-on:click="AddToWishlist({{ $product['id'] }}  )" >
                                        <i data-feather="heart"></i>
                                        <span>{{ trans('lang.addtowishlist') }}</span>
                                    </a>

                                    {{-- <a href="compare.html">
                                        <i data-feather="shuffle"></i>
                                        <span>Add To Compare</span>
                                    </a> --}}
                                </div>
 

                                <div class="paymnet-option">
                                    <div class="product-title">
                                        {{-- <h4>Guaranteed Safe Checkout</h4> --}}
                                    </div>
                                    <ul>
                                        <li>
                                            <a href="javascript:void(0)">
                                                <img src="../assets/images/product/payment/1.svg"
                                                    class="blur-up lazyload" alt="">
                                            </a>
                                        </li>
                                        <li>
                                            <a href="javascript:void(0)">
                                                <img src="../assets/images/product/payment/2.svg"
                                                    class="blur-up lazyload" alt="">
                                            </a>
                                        </li>
                                        <li>
                                            <a href="javascript:void(0)">
                                                <img src="../assets/images/product/payment/3.svg"
                                                    class="blur-up lazyload" alt="">
                                            </a>
                                        </li>
                                        <li>
                                            <a href="javascript:void(0)">
                                                <img src="../assets/images/product/payment/4.svg"
                                                    class="blur-up lazyload" alt="">
                                            </a>
                                        </li>
                                        <li>
                                            <a href="javascript:void(0)">
                                                <img src="../assets/images/product/payment/5.svg"
                                                    class="blur-up lazyload" alt="">
                                            </a>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>

                        <div class="col-12">
                            <div class="product-section-box">
                                <ul class="nav nav-tabs custom-nav" id="myTab" role="tablist">
                                    <li class="nav-item" role="presentation">
                                        <button class="nav-link active" id="description-tab" data-bs-toggle="tab"
                                            data-bs-target="#description" type="button" role="tab"
                                            aria-controls="description" aria-selected="true">Description</button>
                                    </li>

                          

                                  

                                    <li class="nav-item" role="presentation">
                                        <button class="nav-link" id="review-tab" data-bs-toggle="tab"
                                            data-bs-target="#review" type="button" role="tab" aria-controls="review"
                                            aria-selected="false">Review</button>
                                    </li>
                                </ul>

                                <div class="tab-content custom-tab" id="myTabContent">
                                    <div class="tab-pane fade show active" id="description" role="tabpanel"
                                        aria-labelledby="description-tab">
                                        <div class="product-description">
                                            <div class="nav-desh">
                                                <p> {{  $product['description']  }}</p>
                                            </div>

                            

                             

                          
                                        </div>
                                    </div>
 

                                 

                                    <div class="tab-pane fade" id="review" role="tabpanel" aria-labelledby="review-tab">
                                        <div class="review-box">
                                            <div class="row g-4">
                                                <div class="col-xl-6">
                                                    <div class="review-title">
                                                        <h4 class="fw-500">Customer reviews</h4>
                                                    </div>

                                        
                                                    <div class="review-people">
                                                        <ul class="review-list">


                                                     @foreach (  $product['review']   as $item)

                                                            @include('front.componenets.cards.user_review')  

                                                     @endforeach

                                                     

                                                 
 
                                                        </ul>
                                                    </div>
                                     
                                                </div>
                             
                                                <div class="col-xl-6">
                                                    <div class="review-title">
                                                        {{-- <h4 class="fw-500">Add a review</h4> --}}
                                                    </div>

                                                    <div class="row g-4">
                                                        {{-- @auth
                                                        <!-- Content to display when the user is authenticated -->
                                                     
                                                        <div class="col-12">
                                                            <div class="form-floating theme-form-floating">
                                                                <textarea class="form-control"
                                                                    placeholder="Leave a comment here"
                                                                    id="floatingTextarea2"
                                                                    style="height: 150px"></textarea>
                                                                <label for="floatingTextarea2">Write Your
                                                                    Comment</label>
                                                            </div>
                                                        </div>
                                                    @else
                                                        <!-- Content to display when the user is not authenticated -->
                                                        <p>You are not logged in.</p>
                                                    @endauth --}}

                                            
 
 



                                                      

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

                <div class="col-xxl-3 col-xl-4 col-lg-5 d-none d-lg-block wow fadeInUp">
                    <div class="right-sidebar-box">
                        <div class="vendor-box">
                            <div class="verndor-contain">
                                <div class="vendor-image">
                                    {{-- <img src="../assets/images/product/vendor.png" class="blur-up lazyload" alt=""> --}}
                                </div>

                                <div class="vendor-name">
                                    <h5 class="fw-500"> {{ $product['vendor'] }}</h5>
{{-- 
                                    <div class="product-rating mt-1">
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
                                        <span>(36 Reviews)</span>
                                    </div> --}}

                                </div>
                            </div>

                            <p class="vendor-detail"> </p>

                            <div class="vendor-list">
                                <ul>
                                    <li>
                                        <div class="address-contact">
                                            <i data-feather="map-pin"></i>
                                            <h5>Address: <span class="text-content">1288 Franklin Avenue</span></h5>
                                        </div>
                                    </li>

                                    <li>
                                        <div class="address-contact">
                                            <i data-feather="headphones"></i>
                                            <h5>Contact Seller: <span class="text-content">(+1)-123-456-789</span></h5>
                                        </div>
                                    </li>
                                </ul>
                            </div>
                        </div>

          
 
                    </div>
                </div>
            </div>
        </div>
    </section>
    <!-- Product Left Sidebar End -->

    <!-- Releted Product Section Start -->
 
    <!-- Releted Product Section End -->

 
@endsection


@push('scripts')
 
{{-- <script src="{{ asset('js/front/vue/login.js') }}"></script> --}}
<script src="{{ asset('js/front/vue/cart_vue.js') }}"></script>
@endpush