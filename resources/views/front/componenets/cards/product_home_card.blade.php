<div>
    <div class="product-box-4 wow fadeInUp">
        <div class="product-image product-image-2">
            <a href="{{ route('product', ['id' => $item['id']   ]) }}">
                <img src="{{ $item['photo'] }}"
                    class="img-fluid blur-up lazyload" alt="">
            </a>

            <ul class="option">
                <li   title="Quick View">
                    <a href="{{ route('product', ['id' => $item['id']   ]) }}" >
                        <i class="iconly-Show icli"></i>
                    </a>
                </li>

                <li v-on:click="AddToWishlist({{ $item['id'] }}  )"  title="Wishlist">
                    <a    >
                        <i class="iconly-Heart icli"></i>
                    </a>
                </li>

                {{-- <li data-bs-toggle="tooltip" data-bs-placement="top" title="Compare">
                    <a href="compare.html">
                        <i class="iconly-Swap icli"></i>
                    </a>
                </li> --}}
            </ul>
        </div>

        <div class="product-detail">
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

            
            <a href="{{ route('product', ['id' => $item['id']   ]) }}">
                <h5 class="name text-title">{{  $item['ar_name'] }}</h5>
            </a>
            <h5 class="price theme-color">{{  $item['symbol']  }} {{  $item['price'] }}  
                 @if($item['discount'] == "0")
           
                 @else
                 <del>  {{ $item['price'] - $item['discount']  }}</del>   
                 @endif
             
            
                 
                
            </h5>

            <div class="addtocart_btn">
                <button class="add-button   btn buy-button text-light"  v-on:click="addToCart({{ $item['id'] }} , 1)">
                    <i class="fa-solid fa-plus"></i>
                </button>
                <div class="qty-box cart_qty">
                    <div class="input-group">
                        <button type="button" class="btn qty-left-minus" data-type="minus"
                            data-field="">
                            <i class="fa fa-minus" aria-hidden="true"></i>
                        </button>
                        <input class="form-control input-number qty-input" type="text"
                            name="quantity" value="1">
                        <button type="button" class="btn qty-right-plus" data-type="plus"
                            data-field="">
                            <i class="fa fa-plus" aria-hidden="true"></i>
                        </button>
                    </div>
                </div>
            </div>
        </div>
    </div>
</div>