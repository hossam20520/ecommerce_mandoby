<div>
    <div class="product-box-3 h-100">
        <div class="product-header">
            <div class="product-image">
                <a href="{{ route('product', ['id' => $item['id']   ]) }}">
                    <img src="{{ $item['photo'] }}"
                        class="img-fluid blur-up lazyload" alt="">
                </a>




                {{-- 
                    
                <div class="product-header-top">
                    <button class="btn wishlist-button close_button">
                        <i data-feather="x"></i>
                    </button>
                </div> 
                
                --}}

                <ul class="product-option">
                    <li  title="View">
                        <a href="{{ route('product', ['id' => $item['id']   ]) }}"  >
                            <i data-feather="eye"></i>
                        </a>
                    </li>
 
                    <li   v-on:click="AddToWishlist({{ $item['id'] }}  )"  title="Wishlist">
                        <a   >
                            <i data-feather="heart"></i>
                        </a>
                    </li>
                </ul>

                
            </div>
        </div>

        <div class="product-footer">
            <div class="product-detail">
                {{-- <span class="span-name">Cake</span> --}}
                <a href="{{ route('product', ['id' => $item['id']   ]) }}">
                    <h5 class="name">{{  $item['ar_name'] }}</h5>
                </a>
                <div class="product-rating mt-2">
                    <ul class="rating">
                  

                        @for ($i = 0; $i < $item['rate']; $i++)
                        <li>
                            <i data-feather="star" class="fill"></i>
                        </li>
                        @endfor
                      
                        @for ($i = 0; $i < 5 - $item['rate']; $i++)
                        <li>
                            <i data-feather="star"></i>
                        </li>
                        @endfor
                    </ul>
                    {{-- <span>(5.0)</span> --}}
                </div>
                {{-- <h6 class="unit">500 G</h6> --}}
                <h5 class="price"><span class="theme-color">{{  $item['symbol']  }} {{  $item['price'] }}  </span>
                    @if($item['discount'] == "0")
                 
            
                     
                    @else
                    <del>  {{ $item['price'] - $item['discount']  }}</del>   
                    @endif


                   
                </h5>
                <div class="add-to-cart-box bg-white">
                    <button class="btn btn-add-cart addcart-button"   v-on:click="addToCart({{ $item['id'] }} , 1)">{{ trans('lang.Add') }}
                        <span class="add-icon bg-light-gray">
                            <i class="fa-solid fa-plus"></i>
                        </span>
                    </button>
                    {{-- <div class="cart_qty qty-box">
                        <div class="input-group bg-white">
                            <button type="button" class="qty-left-minus bg-gray"
                                data-type="minus" data-field="">
                                <i class="fa fa-minus" aria-hidden="true"></i>
                            </button>
                            <input class="form-control input-number qty-input" type="text"
                                name="quantity" value="0">
                            <button type="button" class="qty-right-plus bg-gray"
                                data-type="plus" data-field="">
                                <i class="fa fa-plus" aria-hidden="true"></i>
                            </button>
                        </div>
                    </div> --}}
                </div>
            </div>
        </div>
    </div>
</div>