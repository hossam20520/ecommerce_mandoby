<div class="active-banner-slider owl-carousel" style="margin-top:120px" >
  <!-- single-slide -->


  @foreach ($slider as $index => $item )
  
   @if($index  == 0)

   <div class="row single-slide align-items-center d-flex">
 

      
    <div class="col-lg-12">
        <div class="banner-img">
            <img class="img-fluid" src="{{  url('/images/sliders/'.$item->image)   }}" alt="">
        </div
        
        
        >
    </div>
</div>

    @else 

    <div class="col-lg-12">
      <div class="banner-img">
        <img class="img-fluid" src="{{  url('/images/sliders/'.$item->image)   }}" alt="">
      </div>
  </div>

   @endif
   



   
  @endforeach



  <!-- single-slide -->
  {{-- <div class="row single-slide">
     

      
      <div class="col-lg-12">
          <div class="banner-img">
            <img class="img-fluid" src="https://www.w3schools.com/howto/img_mountains_wide.jpg" alt="">
          </div>
      </div>
 
  </div> --}}


  {{-- <div class="row single-slide">
     

      
    <div class="col-lg-12">
        <div class="banner-img">
          <img class="img-fluid" src="https://www.w3schools.com/howto/img_mountains_wide.jpg" alt="">
        </div>
    </div>

</div> --}}


</div>
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