<section class="home-section-2 home-section-bg pt-0 overflow-hidden">
    <div class="container-fluid p-0">
        <div class="row">
            <div class="col-12">
                <div class="slider-animate">
         


                 @foreach ($slider as $item)
       

                 @include('front.componenets.cards.itemSlider')  
                 @endforeach


          


                </div>



                
            </div>
        </div>
    </div>
</section>