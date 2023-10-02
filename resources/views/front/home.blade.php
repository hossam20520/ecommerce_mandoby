@extends('front.layout')

@section('content')

@include('front.componenets.slider')  

@include('front.componenets.sections.brand_section')  


{{-- <swiper-container style="margin-top:10px" class="mySwiper"  space-between="10"
slides-per-view="9">
@foreach ($brands as $item)
<swiper-slide> 
    
  
   
    <div style=" justify-content: center; display: flex; ">
        <div   style="width: 150px; height:150px; border-radius:100%; background-image:url(http://localhost:8000/images/products/14143273ccdddd.png);background-size: contain;
        background-repeat: no-repeat; " class="service-contain-2">
       
        
        </div>
    </div>     
   
 
</swiper-slide>
@endforeach

 
</swiper-container>

<script src="https://cdn.jsdelivr.net/npm/swiper@10/swiper-element-bundle.min.js"></script>
 --}}



@include('front.componenets.shops_section_home')
@include('front.componenets.category_section')  
{{-- @include('front.componenets.sections.products_home_section')  --}}

@include('front.componenets.sections.product_top_secetion') 


@foreach ($sections as $itemSec)
@include('front.componenets.sections.product_section') 
@endforeach


<style>

    


  
  

  
  </style>





{{--  
<swiper-container class="mySwiper" pagination="true" effect="coverflow" grab-cursor="true" centered-slides="true"
slides-per-view="auto" coverflow-effect-rotate="50" coverflow-effect-stretch="1" coverflow-effect-depth="100"
coverflow-effect-modifier="1" coverflow-effect-slide-shadows="true">
<swiper-slide>
  <img src=" https://swiperjs.com/demos/images/nature-1.jpg" />
</swiper-slide>
<swiper-slide>
  <img src="https://swiperjs.com/demos/images/nature-2.jpg" />
</swiper-slide>
<swiper-slide>
  <img src="https://swiperjs.com/demos/images/nature-3.jpg" />
</swiper-slide>
<swiper-slide>
  <img src="https://swiperjs.com/demos/images/nature-4.jpg" />
</swiper-slide>
<swiper-slide>
  <img src="https://swiperjs.com/demos/images/nature-5.jpg" />
</swiper-slide>
<swiper-slide>
  <img src="https://swiperjs.com/demos/images/nature-6.jpg" />
</swiper-slide>
<swiper-slide>
  <img src="https://swiperjs.com/demos/images/nature-7.jpg" />
</swiper-slide>
<swiper-slide>
  <img src="https://swiperjs.com/demos/images/nature-8.jpg" />
</swiper-slide>
<swiper-slide>
  <img src="https://swiperjs.com/demos/images/nature-9.jpg" />
</swiper-slide>
</swiper-container>
 
<script src="https://cdn.jsdelivr.net/npm/swiper@10/swiper-element-bundle.min.js"></script>
 --}}

 
@endsection

@push('scripts')
 
{{-- <script src="{{ asset('js/front/vue/login.js') }}"></script> --}}
<script src="{{ asset('js/front/vue/cart_vue.js') }}"></script>
@endpush






