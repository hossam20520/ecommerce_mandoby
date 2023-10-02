<section class="category-section-3">
    <div class="container-fluid-lg">
        <div class="title">
            <h2>{{ trans('lang.ShopByCategories') }}</h2>
        </div>
        <div class="row">
            <div class="col-12">
                <div class="category-slider-1 arrow-slider wow fadeInUp">
                @foreach ($category as $item)
                @include('front.componenets.category_card')  
                @endforeach
              
          
                </div>
            </div>
        </div>
    </div>
</section>