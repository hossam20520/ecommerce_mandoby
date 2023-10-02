<section class="owl-carousel active-product-area section_gap">
    <!-- single product slide -->
    <div class="single-product-slider">
        <div class="container">
            <div class="row justify-content-center">
                <div class="col-lg-6 text-center">


                    <div class="section-title">
                        <h1>@{{ $t('shops') }}</h1>
              
                    </div>



                </div>
            </div>
            <div class="row">
                <!-- single product -->
                <div    v-for="item in shops"    class="col-lg-3 col-md-6">
                    <div class="single-product "   style="cursor: pointer;">
                        <img class="img-fluid" v-on:click="goToshop(item.vendor.id)"  :src="shopImage + item.image" alt="">
                        <div class="product-details">
                            <h6 v-if="local == 'en' "> @{{ item.en_name }}</h6>
         
                            <h6 v-if="local == 'ar' "> @{{ item.ar_name }}</h6>
                        </div>
                    </div>
                </div>
                <!-- single product -->
            
 
          
            </div>
        </div>
    </div>
    <!-- single product slide -->
 
</section>