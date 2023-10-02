<div class="col-xxl-2 col-lg-3 col-md-4 col-6 product-box-contain">
    <div class="product-box-3 h-100">
        <div class="product-header">
            <div class="product-image">
                <a href="product-left-thumbnail.html">
                    <img src="{{ $item['photo'] }}" class="img-fluid blur-up lazyload"
                        alt="">
                </a>

                <div class="product-header-top">
                    <button  v-on:click="deleteWishlist({{ $item['id'] }})" class="btn wishlist-button close_button">
                        <i data-feather="x"></i>
                    </button>
                </div>


                
            </div>
        </div>
        <div class="product-footer">
            <div class="product-detail">
            
                <a href="product-left-thumbnail.html">
                    <h5 class="name">{{ $item['ar_name'] }}</h5>
                </a>
                {{-- <h6 class="unit mt-1">250 ml</h6> --}}
                <h5 class="price">
                    
                    <span class="theme-color">{{  $item['symbol']  }} {{  $item['price'] }}</span>
                    {{-- <del>$15.15</del> --}}
                    @if($item['discount'] == "0")
           
                    @else
                    <del>  {{ $item['price'] - $item['discount']  }}</del>   
                    @endif
                </h5>

                <div class="add-to-cart-box bg-white mt-2">
                    <button   v-on:click="addToCart({{ $item['id'] }} , 1)" class="btn btn-add-cart addcart-button">{{ trans('lang.Add') }}
                        <span class="add-icon bg-light-gray">
                            <i class="fa-solid fa-plus"></i>
                        </span>
                    </button>
                    {{-- <div class="cart_qty qty-box">
                        <div class="input-group bg-white">
                            <button type="button" class="qty-left-minus bg-gray" data-type="minus"
                                data-field="">
                                <i class="fa fa-minus" aria-hidden="true"></i>
                            </button>
                            <input class="form-control input-number qty-input" type="text"
                                name="quantity" value="0">
                            <button type="button" class="qty-right-plus bg-gray" data-type="plus"
                                data-field="">
                                <i class="fa fa-plus" aria-hidden="true"></i>
                            </button>
                        </div>
                    </div> --}}
                </div>
            </div>
        </div>
    </div>
</div>