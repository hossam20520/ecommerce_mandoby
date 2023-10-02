<section class="owl-carousel active-product-area section_gap">
    <!-- single product slide -->
    <div class="single-product-slider">
        <div class="container">
            <div class="row justify-content-center">
                <div class="col-lg-6 text-center">


                    <div class="section-title">
                        <h1>@{{ $t('latest') }}</h1>
              
                    </div>



                </div>
            </div>
            <div class="row">
                <!-- single product -->
                <div    v-for="item in products"    class="col-lg-3 col-md-6">
                    <div class="single-product"  style="cursor: pointer;">
                        <img class="img-fluid" v-on:click="goToproduct(item.id)"  :src="productImage + item.image" alt="">
                        <div class="product-details">
                            <h6> @{{ item.name }}</h6>
                            <div class="price">
                                <h6  v-if="local ==  'en' ">  @{{ item.symbol }} @{{ item.price }} </h6>
                                <h6   v-if="local ==  'ar' ">  @{{ item.currency }} @{{ item.price }} </h6>

                                 
                                <h6 v-if="item.dicount > 0"  class="l-through"> @{{ item.price }}   @{{ item.symbol }}</h6>
                               
     
                            </div>
                            <div class="prd-bottom">

                                <a  class="social-info"  v-on:click="addToCart(item.id , 1)" >
                                    <span class="ti-bag"></span>
                                    <p class="hover-text" >@{{ $t('cart') }}</p>
                                </a>
                                <a v-on:click="AddToWishlist(item.id)" class="social-info">
                                    <span class="lnr lnr-heart"></span>
                                    <p class="hover-text">@{{ $t('Wishlist') }}</p>
                                </a>
                       
                                <a :href="baseUrl + 'product/'+ item.id  " class="social-info">
                                    <span class="lnr lnr-move"></span>
                                    <p class="hover-text">@{{ $t('viewMore') }}</p>
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
                <!-- single product -->
            
 
          
            </div>
        </div>
    </div>
    <!-- single product slide -->
    <div class="single-product-slider">
        <div class="container">
            <div class="row justify-content-center">
                <div class="col-lg-6 text-center">
                    <div class="section-title">
                        <h1>@{{ $t('bestsellers') }}</h1>
               
                    </div>
                </div>
            </div>
            <div class="row">
                <!-- single product -->
        
                <!-- single product -->
        
                <!-- single product -->
          
           
                <!-- single product -->
                <div    v-for="item in products"    class="col-lg-3 col-md-6">
                    <div class="single-product" style="cursor: pointer;">
                        <img class="img-fluid" :src="productImage + item.image" alt="">
                        <div class="product-details">
                            <h6> @{{ item.name }}</h6>
                            <div class="price">
                                <h6  v-if="local ==  'en' ">  @{{ item.symbol }} @{{ item.price }} </h6>
                                <h6   v-if="local ==  'ar' ">  @{{ item.currency }} @{{ item.price }} </h6>

                                 
                                <h6 v-if="item.dicount > 0"  class="l-through"> @{{ item.price }}   @{{ item.symbol }}</h6>
                               
     
                            </div>
                            <div class="prd-bottom">

                                <a  class="social-info"  v-on:click="addToCart(item.id , 1)" >
                                    <span class="ti-bag"></span>
                                    <p class="hover-text" >@{{ $t('cart') }}</p>
                                </a>
                                <a v-on:click="AddToWishlist(item.id)" class="social-info">
                                    <span class="lnr lnr-heart"></span>
                                    <p class="hover-text">@{{ $t('Wishlist') }}</p>
                                </a>
                       
                                <a :href="baseUrl + 'product/'+ item.id  " class="social-info">
                                    <span class="lnr lnr-move"></span>
                                    <p class="hover-text">@{{ $t('viewMore') }}</p>
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
                <!-- single product -->
          
                <!-- single product -->
       
        
            </div>
        </div>
    </div>
</section>