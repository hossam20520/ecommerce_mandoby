<div>
    <div class="product-box-3 h-100 wow fadeInUp" >
        <div class="product-header">
            <div class="product-image">
                <a href="product-left-thumbnail.html">
                    <img src="{{ $item['photo'] }}"
                        class="img-fluid blur-up lazyload" alt="">
                </a>

                <ul class="product-option">
                    <li    title="View">
                        <a href="{{ route('product', ['id' => $item['id']   ]) }}" >
                            <i data-feather="eye"></i>
                        </a>
                    </li>

              

                    <li    v-on:click="AddToWishlist({{ $item['id'] }}  )"  title="Wishlist">
                        <a href="#"  >
                            <i data-feather="heart"></i>
                        </a>
                    </li>

                <li    v-on:click="addToCart({{ $item['id'] }} , 1)" title="add to cart">
                    <a href="#">
                        <i class="iconly-Bag-2 icli"></i>
                    </a>
                </li>  


                </ul>
            </div>
        </div>
        <div class="product-footer">
            <div class="product-detail">
                {{-- <span class="span-name">Vegetable</span> --}}
                <a href="product-left-thumbnail.html">
                    <h5 class="name text-title">{{  $item['ar_name'] }}</h5>
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
                  
                </div>
               
                <h5 class="price theme-color">{{  $item['symbol']  }} {{  $item['price'] }}  
                    @if($item['discount'] == "0")
                    
               
                        
                    @else
                    <del>  {{ $item['price'] - $item['discount']  }}</del>   
                    @endif
                
               
               
               
               </h5>
                <div class="add-to-cart-box bg-white">
                    {{-- <button class="btn btn-add-cart addcart-button">Add
                        <span class="add-icon bg-light-gray">
                            <i class="fa-solid fa-plus"></i>
                        </span>
                    </button> --}}
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