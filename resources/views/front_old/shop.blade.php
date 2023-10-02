@extends('front.base.layout')

@section('content')

<div id="app">
 
<section class="banner-area organic-breadcrumb">
    <div class="container">
        <div class="breadcrumb-banner d-flex flex-wrap align-items-center justify-content-end">
            <div class="col-first">
                <h1>@{{ $t('shop') }}</h1>
                <nav class="d-flex align-items-center">
                    <a href="/">@{{ $t('Home') }}<span class="lnr lnr-arrow-right"></span></a>
                    <a href="#">@{{ $t('shop') }} </a>
                   
                </nav>
            </div>
        </div>
    </div>
</section>



<!-- End Banner Area -->
<div class="container">
    <div class="row">
        <div class="col-xl-3 col-lg-4 col-md-5">
            <div class="sidebar-categories">
                <div class="head">@{{ $t('brows') }}</div>
                <ul class="main-categories">
                 
                    <li   v-on:click="FetchProductByCatId(0)"  class="main-nav-list"><a > @{{ $t('All') }}<span class="number"> </span></a></li>
              
                   <li  v-for="item in categories"  v-on:click="FetchProductByCatId(item.id )" v-if="local ==  'en' "  class="main-nav-list"><a > @{{ item.en_name }}<span class="number">@{{ item.products_count  }}</span></a></li>
                  
                   <li  v-for="item in categories"  v-on:click="FetchProductByCatId(item.id )" v-if="local ==  'ar' "  class="main-nav-list"><a > @{{ item.name }}<span class="number" style="padding-right: 10px">@{{ item.products_count  }}</span></a></li>
                  
             
               
                </ul>
            </div>


            <div class="sidebar-filter mt-50">
                <div class="top-filter-head">@{{ $t('filter') }}</div>

                <div class="common-filter">
                    <div class="head">@{{ $t('Price') }}</div>
                    <div class="price-range-area">
                        <div id="price-range"></div>

                        <input type="hidden" id="from">
                        <input type="hidden" id="to">
                        <div class="value-wrapper d-flex">
                            <div class="price">Price:</div>
                            {{-- <span>$</span> --}}
                            <div id="lower-value"  ></div>
                            <div class="to">to</div>
                            {{-- <span>$</span> --}}
                            <div id="upper-value"></div>
                        </div>
                    </div>
                 
                </div>
                <a class="primary-btn" v-on:click="filter" style="height: 30px;width: 117px;color: rgb(242, 190, 34);padding-bottom: 48px;/* padding-top: 10px; */">@{{ $t('Filterd') }}</a>


				<div class="common-filter">
                    <div class="head">@{{ $t('Brands') }}</div>
                    <form action="#">
                        <ul  v-for="item in brands">
                            <li class="filter-list" v-on:clieck="getBrand(item.id)"><input class="pixel-radio" type="radio" id="apple" name="brand"><label for="apple">@{{ item.name }} </label></li>

                        </ul>
                    </form>
                </div>
        
                
            </div>
        
        </div>
        <div class="col-xl-9 col-lg-8 col-md-7">
            <!-- Start Filter Bar -->
            <div class="filter-bar d-flex flex-wrap align-items-center">
           
   
                <div class="pagination">
       
                </div>
            </div>
            <!-- End Filter Bar -->
            <!-- Start Best Seller -->
            <section class="lattest-product-area pb-40 category-list">
                <div class="row">
     
                    <div  v-if="products.length  ==  0" class="col-lg-12 col-md-12" >

                        <div style="height: 100px"> </div>
                        <div class="text-center" > <!-- Add a class to center align the content -->
                             <img width="200" src="https://cdn-icons-png.flaticon.com/512/6598/6598519.png" alt="Image" class="img-fluid"> <!-- Replace "image.jpg" with the path to your image -->
                        </div>
                 
                 <div style="height: 100px"> </div>
                    </div>
            

                     
                    <!-- single product -->
                    <div v-for="item in products" class="col-lg-4 col-md-6">
                        <div class="single-product" style="cursor: pointer;">
                            <img class="img-fluid"  v-on:click="goToproduct(item.id)"  :src="productImage + item.image" alt="">
                            <div class="product-details">
                                <h6 v-if="local ==  'ar' "> @{{ item.ar_name }}</h6>
                                <h6 v-if="local ==  'en' "> @{{ item.name }}</h6>



                                <div class="price">
                                    <h6  v-if="local ==  'en' ">  @{{ item.symbol }} @{{ item.price }} </h6>
                                    <h6   v-if="local ==  'ar' ">  @{{ item.currency }} @{{ item.price }} </h6>
    
                                     
                                    <h6 v-if="item.dicount > 0"  class="l-through"> @{{ item.price }}   @{{ item.symbol }}</h6>
                                   
         
                                </div>
                                <div class="prd-bottom">
    
                                    <a  class="social-info"  v-on:click="addToCart(item.id , 1)" >
                                        <span class="ti-bag"></span>
                                        <p class="hover-text" >@{{ $t('cart') }}</p>
                                    </a>
                                    <a  v-on:click="AddToWishlist(item.id)" class="social-info">
                                        <span class="lnr lnr-heart"></span>
                                        <p   class="hover-text">@{{ $t('Wishlist') }}</p>
                                    </a>
                           
                                    <a :href="baseUrl + 'product/'+ item.id  " class="social-info">
                                        <span class="lnr lnr-move"></span>
                                        <p class="hover-text">@{{ $t('viewMore') }}</p>
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                    <!-- single product -->
           
                    <!-- single product -->
             
                    <!-- single product -->
             
                    <!-- single product -->
             
                </div>
            </section>
            <!-- End Best Seller -->
            <!-- Start Filter Bar -->
            <div class="filter-bar d-flex flex-wrap align-items-center">
                <div class="sorting mr-auto">
                    <select>
                        <option value="1">Show 12</option>
                        <option value="1">Show 12</option>
                        <option value="1">Show 12</option>
                    </select>
                </div>
                <div class="pagination">
                    <a href="#" class="prev-arrow" v-on:click="prevPage">
                        <i class="fa fa-long-arrow-left" aria-hidden="true"></i>
                    </a>
                    {{-- :class="  active: currentPage === pageNumber " --}}
                    <a href="#" v-for="pageNumber in totalPages" :key="pageNumber"  v-on:click="goToPage(pageNumber)">
                        @{{ pageNumber }}
                    </a>
                    <a href="#" class="next-arrow" v-on:click="nextPage">
                        <i class="fa fa-long-arrow-right" aria-hidden="true"></i>
                    </a>
                </div>
            </div>
            <!-- End Filter Bar -->
        </div>
    </div>
</div>

<!-- Start related-product Area -->
<section class="related-product-area section_gap">
    <div class="container">
        <div class="row justify-content-center">
            <div class="col-lg-6 text-center">
                <div class="section-title">
                    <h1>@{{ $t('latest') }}</h1>
                  
                </div>
            </div>
        </div>
        <div class="row">
            <div class="col-lg-9">
                <div class="row">



                    <div v-for="item in latestProducts"   class="col-lg-4 col-md-4 col-sm-6 mb-20">
                        <div class="single-related-product d-flex">
                            <a :href="'/product/'+item.id"><img  :src="productImage + item.image" alt=""></a>
                            <div class="desc">
                                <a href="#" class="title">@{{ item.name }}</a>
                                <div class="price">
                                    {{-- <h6>@{{ item.price }}</h6> --}}

                                    <h6   v-if="local ==  'en' ">  @{{ item.symbol }} @{{ item.price }} </h6>
                                    <h6     v-if="local ==  'ar' ">  @{{ item.currency }} @{{ item.price }} </h6>
    

                                    {{-- <h6 class="l-through">$210.00</h6> --}}
                                </div>
                            </div>
                        </div>
                    </div>
 
                  
                </div>
            </div>
            <div class="col-lg-3">
                <div class="ctg-right">
                    <a href="#" target="_blank">
                        <img class="img-fluid d-block mx-auto" src="{{ asset('images/img/category/c5.jpg') }}" alt="">
                    </a>
                </div>
            </div>
        </div>
    </div>
</section>
<!-- End related-product Area -->



</div>








 
  @endsection


  @push('scripts')
 
  <script src="{{ asset('js/front/vue/shop.js') }}"></script>
 
@endpush


 

