<section class="product-section-3">
    <div class="container-fluid-lg">
        <div class="title">
            <h2>Fruits & Vegetables</h2>
        </div>
        <div class="row">
            <div class="col-12">
                <div class="slider-7_1 arrow-slider img-slider">
              
                    @foreach ($section_one as $item)
                       @include('front.componenets.cards.product_home_card')   
                    @endforeach
                    
  
                </div>
            </div>
        </div>
    </div>
</section>