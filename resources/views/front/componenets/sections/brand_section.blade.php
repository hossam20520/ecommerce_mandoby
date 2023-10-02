<section class="category-section-2">
    <div class="container-fluid-lg">
        <div class="title">
            <h2></h2>
        </div>
        <div class="row">
            <div class="col-12">
                <div class="category-slider arrow-slider">
                


                    @foreach ($brands as $item)

                    <div>
                        <div class="shop-category-box border-0 wow fadeIn" data-wow-delay="0.05s">
                            <a href="/shop?brand={{ $item['id'] }}" class="circle-2">
                                <img style=" border-radius: 100%; " src="{{ $item['image'] }}" class="img-fluid blur-up lazyload"
                                    alt="">
                            </a>
                            <div class="category-name">
                                <h6>{{ $item['name'] }}</h6>
                            </div>
                        </div>
                    </div>

                    @endforeach
              

                    
 
                </div>
            </div>
        </div>
    </div>
</section>