<tr class="product-box-contain">
    <td class="product-detail">
        <div class="product border-0">
            <a href="{{ route('product', ['id' => $item['product']['id']   ]) }}" class="product-image">
                <img src="{{  $item['product']['photo'] }}"
                    class="img-fluid blur-up lazyload" alt="">
            </a>
            <div class="product-detail">
                <ul>
                    <li class="name">
                        <a href="{{ route('product', ['id' => $item['product']['id']   ]) }}">{{  $item['product']['ar_name'] }}</a>
                    </li>

                    <li class="text-content"><span class="text-title">{{ trans('lang.SoldBy') }}:</span> {{  $item['product']['shop']['ar_name'] }}</li>

                    <li class="text-content"><span
                            class="text-title">{{ trans('lang.Quantity') }}</span> - {{  $item['qty']  }}</li>

                    <li>
                        <h5 class="text-content d-inline-block"> {{ trans('lang.Price') }} :</h5>
                        <span>  {{  $item['product']['price']  }}</span>
                        <span class="text-content">$45.68</span>
                    </li>

                    {{-- <li>
                        <h5 class="saving theme-color">Saving : $20.68</h5>
                    </li> --}}

                    <li class="quantity-price-box">
                        <div class="cart_qty">
                            <div class="input-group">
                                <button type="button" class="btn qty-left-minus"
                                    data-type="minus" data-field="">
                                    <i class="fa fa-minus ms-0"
                                        aria-hidden="true"></i>
                                </button>
                                <input class="form-control input-number qty-input"
                                    type="text" name="quantity" value="0">
                                <button type="button" class="btn qty-right-plus"
                                    data-type="plus" data-field="">
                                    <i class="fa fa-plus ms-0"
                                        aria-hidden="true"></i>
                                </button>
                            </div>
                        </div>
                    </li>

                    <li>
                        <h5>Total: $35.10</h5>
                    </li>
                </ul>
            </div>
        </div>
    </td>

    <td class="price">
        <h4 class="table-title text-content">{{ trans('lang.Price') }}</h4>
        <h5>  {{  $item['price']  }} </h5>
        {{-- <h6 class="theme-color">You Save : $20.68</h6> --}}
    </td>

    <td class="quantity">
        <h4 class="table-title text-content">{{ trans('lang.Qty') }}</h4>
        <div class="quantity-price">
            <div class="cart_qty">
                <div class="input-group">
                    <button type="button" class="btn qty-left-minus"
                        data-type="minus" data-field="">
                        <i class="fa fa-minus ms-0" aria-hidden="true"></i>
                    </button>
                    <input class="form-control input-number qty-input" type="text"
                        name="quantity" value="0">
                    <button type="button" class="btn qty-right-plus"
                        data-type="plus" data-field="">
                        <i class="fa fa-plus ms-0" aria-hidden="true"></i>
                    </button>
                </div>
            </div>
        </div>
    </td>

    <td class="subtotal">
        <h4 class="table-title text-content">{{ trans('lang.Total') }}</h4>
        <h5> {{  $item['subtotal']  }} </h5>
    </td>

    <td class="save-remove">
        <h4 class="table-title text-content">{{ trans('lang.Action') }}</h4>
        {{-- <a class="save notifi-wishlist" href="javascript:void(0)">Save for later</a> --}}
        <a class="remove close_button" v-on:click="deleteCartt({{  $item['product']['id']  }})"    href="javascript:void(0)">{{ trans('lang.Remove') }}</a>
    </td>
</tr>