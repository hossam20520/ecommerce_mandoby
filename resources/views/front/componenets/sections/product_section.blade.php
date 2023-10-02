<section class="product-section">
    <div class="container-fluid-lg">
        <div class="title">
            <h2> {{ $itemSec['title'] }}</h2>
        </div>
        <div class="row">
            <div class="col-12">
                <div class="slider-7_1 arrow-slider img-slider">
  
                    @foreach ($itemSec['products'] as $item)
                    @include('front.componenets.cards.product_home_card')   
                 @endforeach

                </div>
            </div>
        </div>
    </div>
</section>