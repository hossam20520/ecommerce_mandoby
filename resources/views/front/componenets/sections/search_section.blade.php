<section class="section-b-space">
    <div class="container-fluid-lg">
        <div class="row">
            <div class="col-12">
                <div class="search-product product-wrapper">
                    
                     @foreach ($products as $item)
                     {{-- @include('front.componenets.cards.product_home_card')    --}}

                     @include('front.componenets.cards.product_searchCard')
                     @endforeach
                     
                  
 
 
 
                </div>
            </div>
        </div>
    </div>
</section>