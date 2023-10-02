<section class="banner-section banner-small ratio_65">
    <div class="container-fluid-lg">
        <div class="slider-4-banner no-arrow slick-height">


          @foreach ($shops as $item)
          @include('front.componenets.shop_card')  
          @endforeach
        
        </div>
    </div>
</section>