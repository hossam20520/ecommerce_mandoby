@extends('front.base.layout')




@section('content')
 
    <div id="app">

   
        @include('front.componenets.slider')







        <div class="owl-carousel">
            <div class="item" v-for="image in images" :key="image.id">
              <img :src="image.url" alt="Slider Image" />
            </div>
          </div>
        
<section class="category-area">
    <div class="container">
      <div class="row justify-content-center">
        <div class="col-lg-12 col-md-12">
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
  
  
  
            
            <div  v-for="item in categories"  class="col-lg-3 col-md-3" >
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
  
  
 
  
  
        
      </div>
    </div>
  </section>


        @include('front.componenets.shops')


        @include('front.componenets.products')
    </div>
@endsection



@push('scripts')
<script src="{{ asset('js/front/vue/home.js') }}"></script>
@endpush
