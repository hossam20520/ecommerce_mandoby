<section class="home-section-2 home-section-bg pt-0 overflow-hidden">
    <div class="container-fluid p-0">
        <div class="row">
            <div class="col-12">
                <div class="slider-animate">

                   @foreach ($slider as $item)


                   <div>
                    <div class="home-contain rounded-0 p-0">
                        <img src="{{ $item->custom_image }}"
                            class="img-fluid bg-img blur-up lazyload" alt="">
                        <div class="home-detail home-big-space p-center-left home-overlay position-relative">
                            <div class="container-fluid-lg">
                                <div  style="height: 250px">
                   
                              
                                </div>
                            </div>
                        </div>
                    </div>
                   </div>


                    @endforeach




              



                </div>
            </div>
        </div>
    </div>
</section>