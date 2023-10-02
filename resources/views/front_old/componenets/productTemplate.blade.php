<div    v-for="item in products"   class="col-lg-3 col-md-6">
    <div class="single-product">
        <img class="img-fluid" :src="productImage + item.image" alt="">
        <div class="product-details">
            <h6> @{{ item.name }}</h6>
            <div class="price">
                <h6  v-if="local ==  'en' ">  @{{ item.symbol }} @{{ item.price }} </h6>
                <h6  v-else>  @{{ item.name }} @{{ item.price }} </h6>

                 
                <h6 v-if="item.dicount > 0"  class="l-through"> @{{ item.price }}   @{{ item.symbol }}</h6>
                <span v-else>   </span>
             
 
            </div>
            <div class="prd-bottom">

                <a  class="social-info"  v-on:click="addToCart(item.id , 1)" >
                    <span class="ti-bag"></span>
                    <p class="hover-text" >add to bag</p>
                </a>
                <a href="" class="social-info">
                    <span class="lnr lnr-heart"></span>
                    <p class="hover-text">Wishlist</p>
                </a>
       
                <a :href="baseUrl + 'product/'+ item.id  " class="social-info">
                    <span class="lnr lnr-move"></span>
                    <p class="hover-text">view more</p>
                </a>
            </div>
        </div>
    </div>
</div>