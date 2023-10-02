@extends('front.base.layout')

@section('content')

<div id="app">
 
 
 
    <!-- Start Banner Area -->
    <section class="banner-area organic-breadcrumb">
        <div class="container">
            <div class="breadcrumb-banner d-flex flex-wrap align-items-center justify-content-end">
                <div class="col-first">
                    <h1 v-if="!vendor">@{{ $t('Profile') }}</h1>
                    <h1 v-if="vendor">@{{ $t('vendorProfile') }}</h1>
                    <nav class="d-flex align-items-center">
                        <a href="/">@{{ $t('Home') }}<span class="lnr lnr-arrow-right"></span></a>
                        <a href="/profile" v-if="!vendor">@{{ $t('Profile') }}</a>
                        <a href="/profile" v-if="vendor">@{{ $t('vendorProfile') }}</a>
                    </nav>
                </div>
            </div>
        </div>
    </section>
    <!-- End Banner Area -->

    <!--================Blog Area =================-->
    <section class="blog_area single-post-area section_gap">
        <div class="container">
            <div class="row" :dir="dir">
                <div class="col-lg-8">

                    <section class="lattest-product-area pb-40 category-list">
                        <div class="row">

                            <aside  class="single_sidebar_widget popular_post_widget">
                                <h3 v-if="!vendor" class="widget_title">@{{ $t('Wishlist') }}</h3>
                                <h3 v-if="vendor" class="widget_title">@{{ $t('Productss') }}</h3>
                            </aside>

                         
                        </div>
                        <div class="row">
                            

                    <div style="width: 100%" v-if="!vendor">   

 
                            <div  v-if="products.length  ==  0" class="col-lg-12 col-md-12" >
                                  <div class="text-center" > <!-- Add a class to center align the content -->
                                       <img width="200" src="https://cdn-icons-png.flaticon.com/512/4379/4379561.png" alt="Image" class="img-fluid"> <!-- Replace "image.jpg" with the path to your image -->
                                  </div>
                            </div>
                      
                        </div>



         



                            
              
                               <div  v-if="!vendor"  v-for="item in products" class="col-lg-4 col-md-6">
                              <div class="single-product">
                            <img class="img-fluid"  style="cursor: pointer;"  :src="productImage + item.product.image.split(',')[0]" alt="">
                            <div class="product-details">
                                <h6> @{{ item.product.name }}</h6>
                                <div class="price">
                                    <h6  v-if="local ==  'en' ">  @{{ item.product.shop.symbol }} @{{ item.product.price }} </h6>
                                    <h6  v-else>  @{{ item.product.name }} @{{ item.product.price }} </h6>
    
                                     
                                    <h6 v-if="item.dicount > 0"  class="l-through"> @{{ item.product.price }}   @{{ item.symbol }}</h6>
                                    <span v-else>   </span>
         
                                </div>
                                <div class="prd-bottom">
    
                                    <a  class="social-info"  v-on:click="addToCart(item.product.id , 1)" >
                                        <span class="ti-bag"></span>
                                        <p class="hover-text" >@{{ $t('cart') }}</p>
                                    </a>
                      
                           
                                    <a :href="baseUrl + 'product/'+ item.product.id  " class="social-info">
                                        <span class="lnr lnr-move"></span>
                                        <p class="hover-text">@{{ $t('viewMore') }}</p>
                                    </a>


                                    <a     v-on:click="deleteFav(item.product.id )"  class="social-info">
                                        <span style="background-color: red" class="lnr lnr-trash" style="color: white"></span>
                                        <p class="hover-text">@{{ $t('Remove') }}</p>
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>

                         











              
                    <div v-if="vendor"  v-for="item in productsVendor"  class="col-lg-4 col-md-6">
                        <div class="single-product">
                            <img class="img-fluid"  v-on:click="goToproduct(item.id)"   style="cursor: pointer;" :src="productImage + item.image.split(',')[0]" alt="">
                            <div class="product-details">
                                <h6> @{{ item.name }}</h6>
                                <div class="price">
                                    <h6  v-if="local ==  'en' ">@{{ item.price }} </h6>
                                    <h6  v-else>  @{{ item.name }} @{{ item.price }} </h6>
    
                                     
                                    <h6 v-if="item.dicount > 0"  class="l-through"> @{{ item.price }}   @{{ item.symbol }}</h6>
                                    <span v-else>   </span>
         
                                </div>
                                <div class="prd-bottom">
    
                                    <a  class="social-info"  v-on:click="addToCart(item.product.id , 1)" >
                                        <span class="ti-bag"></span>
                                        <p class="hover-text" >@{{ $t('cart') }}</p>
                                    </a>
                      
                           
                                    <a :href="baseUrl + 'product/'+ item.id  " class="social-info">
                                        <span class="lnr lnr-move"></span>
                                        <p class="hover-text">@{{ $t('viewMore') }}</p>
                                    </a>

                                    <a  v-on:click="AddToWishlist(item.id)" class="social-info">
                                        <span class="lnr lnr-heart"></span>
                                        <p   class="hover-text">@{{ $t('Wishlistaa') }}</p>
                                    </a>


                               
                                </div>
                            </div>
                        </div>
                    </div>


          

                        </div>
                    </section>
               
                </div>




                <div class="col-lg-4">
                    <div class="blog_right_sidebar">
                        <aside class="single_sidebar_widget search_widget">
                            <div class="input-group">
                               
                                <span class="input-group-btn">
                                    <button class="btn btn-default" type="button"><i class="lnr lnr-magnifier"></i></button>
                                </span>
                            </div><!-- /input-group -->
                            <div class="br"></div>
                        </aside>
                        <aside class="single_sidebar_widget author_widget">


                            <img width="100px" class="author_img rounded-circle" v-if="vendor" :src="userImage+vendor_user.avatar" alt="">


                            <img width="100px" class="author_img rounded-circle"   v-if="!vendor" :src="userImage+user.avatar" alt="">
                         


                            <h4>@{{ user.firstname  }}  @{{ user.lastname }}</h4>
                            <p v-if="vendor" >@{{ $t('vendor') }}</p>
                            <p v-if="!vendor" >@{{ $t('Customer') }}</p>
                            <div class="social_icon"  style="cursor: pointer;">
                                <a :href="'/chat?user_id='+user.id" v-if="vendor"><i class="fa fa-chats"></i></a>
                                <a :href="'/chat?user_id='+user.id" v-if="vendor"><h3 class="widget_title">@{{ $t('Chat') }}</h3></a>
                            </div>
                        
                            <div class="br"></div>
                        </aside>
           
                  
                        <aside class="single_sidebar_widget post_category_widget">
                            <h4 class="widget_title" v-if="!vendor">@{{ $t('info') }}</h4>
                            <h4 class="widget_title" v-if="vendor">@{{ $t('vendorinfo') }}</h4>
                            <ul class="list cat-list">
                                <li>
                                    <a href="#" class="d-flex justify-content-between">
                                        <p>@{{ $t('firstname') }}</p>
                                        <p>@{{ user.firstname }}</p>
                                    </a>
                                </li>
                                <li>
                                    <a href="#" class="d-flex justify-content-between">
                                        <p>@{{ $t('lastname') }}</p>
                                        <p>@{{ user.lastname }}</p>
                                    </a>
                                </li>
                                <li>
                                    <a href="#" class="d-flex justify-content-between">
                                        <p>@{{ $t('Email') }}</p>
                                        <p>@{{ user.email }}</p>
                                    </a>
                                </li>
                                <li>
                                    <a href="#" class="d-flex justify-content-between">
                                        <p>@{{ $t('phone') }}</p>
                                        <p>@{{ user.phone }}</p>
                                    </a>
                                </li>
                              
                                <li  v-if="!vendor">
                                    <a class="d-flex justify-content-between">
                                        <p>Password</p>
                                        <p>*******</p>
                                    </a>
                                </li>



                                <li  v-if="!vendor">
                                    <a  v-on:click="logout" class="d-flex justify-content-between" style="
                                    font-size: 22px;
                                    color: red;
                                "><p>Logout</p></a>
                                </li>
                                
                            </ul>
                            <div class="br"></div>
                        </aside>
                  
                     
                    </div>
                </div>
            </div>
        </div>
    </section>
    <!--================Blog Area =================-->


</div>








 
  @endsection

@push('scripts')
 
  <script src="{{ asset('js/front/vue/profile.js') }}"></script>
 
@endpush


 

