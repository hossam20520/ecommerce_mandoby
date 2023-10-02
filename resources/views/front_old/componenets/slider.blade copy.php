<section class="banner-area" >
    <div class="container">
      <div class="row fullscreen align-items-center justify-content-start">
        <div class="col-lg-12" >
   

            <div class="active-banner-slider owl-carousel" >
                <!-- single-slide -->
                <div class="row single-slide align-items-center d-flex">
                    <div class="col-lg-5 col-md-6">
                        <div class="banner-content">
                            <h2>Summer Discounts<br> Up To 30% Off!</h2>
                            <p>Get a discount for every order! Only valid for today!</p>
                    
                        </div>
                    </div>

                    
                    <div class="col-lg-7">
                        <div class="banner-img">
                            <img class="img-fluid" src="{{ asset('images/img/Frame-removebg-preview.png') }}" alt="">
                        </div>
                    </div>
                </div>
                <!-- single-slide -->
                <div class="row single-slide">
                    <div class="col-lg-5 col-md-6">
                        <div class="banner-content">
                            <h2>Summer Discounts<br> Up To 30% Off!</h2>
                            <p>Get a discount for every order! Only valid for today!</p>
                    
                        </div>
                    </div>

                    
                    <div class="col-lg-7">
                        <div class="banner-img">
                            <img class="img-fluid" src="{{ asset('images/img/Frame-removebg-preview.png') }}" alt="">
                        </div>
                    </div>
                </div>
            </div>





        </div>
      </div>
    </div>
  </section>
  <section class="features-area section_gap">
    <div class="container">
      <div class="row features-inner">
        <!-- single features -->
        <div class="col-lg-3 col-md-6 col-sm-6">
          <div class="single-features">
            <div class="f-icon">
              <img src="{{ asset('images/img/features/f-icon1.png')}}" alt="">
            </div>
            <h6>@{{ $t('FreeDelivery') }}</h6>
            <p>@{{ $t('freePa') }}</p>
          </div>
        </div>
        <!-- single features -->
        <div class="col-lg-3 col-md-6 col-sm-6">
          <div class="single-features">
            <div class="f-icon">
              <img src="{{ asset('images/img/features/f-icon2.png')}}" alt="">
            </div>
            <h6>@{{ $t('Return') }} </h6>
            <p>@{{ $t('freePa') }}</p>
          </div>
        </div>
        <!-- single features -->
        <div class="col-lg-3 col-md-6 col-sm-6">
          <div class="single-features">
            <div class="f-icon">
              <img src="{{ asset('images/img/features/f-icon3.png')}}" alt="">
            </div>
            <h6>@{{ $t('suport') }}</h6>
            <p>@{{ $t('freePa') }}</p>
          </div>
        </div>
        <!-- single features -->
        <div class="col-lg-3 col-md-6 col-sm-6">
          <div class="single-features">
            <div class="f-icon">
              <img src="{{ asset('images/img/features/f-icon4.png')}}" alt="">
            </div>
            <h6>@{{ $t('payment') }}</h6>
            <p>@{{ $t('freePa') }}</p>
          </div>
        </div>
      </div>
    </div>
  </section>



  <section class="category-area">
    <div class="container">
      <div class="row justify-content-center">
        <div class="col-lg-8 col-md-12">
          <div class="row">




{{--    
            <div class="col-lg-4 col-md-4">
              <div class="single-deal">
                <div class="overlay"></div>
                <img class="img-fluid w-100" src="{{ asset('images/img/clothes.png')}}" alt="">
                <a href="img/category/c2.jpg" class="img-pop-up" target="_blank">
                  <div class="deal-details">
                    <h6 class="deal-title">Clothes</h6>
                  </div>
                </a>
              </div>
            </div> --}}



            
            <div  v-for="item in categories"  class="col-lg-4 col-md-4" >
                <div class="single-deal">
                  <div class="overlay"></div>
                  <img class="img-fluid w-100" :src=" categoryImage + item.image  " alt="">
                  <a  :href="'shop?category='+item.id"  class=" "  >
                    <div class="deal-details">
                      <h6 class="deal-title" v-if="local ==  'en'" >   @{{ item.en_name }}    </h6>
                      <h6 class="deal-title" v-else >   @{{ item.name }}    </h6>
                      <h6 class="deal-title"> @{{ item.products_count  }} @{{  $t('Items')  }} </h6>
                    </div>
                  </a>
                </div>
              </div>


 

   
          </div>
        </div>


        <div class="col-lg-4 col-md-6">
          <div class="single-deal">
            <div class="overlay"></div>
            <img class="img-fluid w-100" src="{{ asset('images/img/category/c5.jpg')}}" alt="">
            <a href="img/category/c5.jpg" class="img-pop-up" target="_blank">
              <div class="deal-details">
                <h6 class="deal-title">Sneaker for Sports</h6>
              </div>
            </a>
          </div>
        </div>


        
      </div>
    </div>
  </section>