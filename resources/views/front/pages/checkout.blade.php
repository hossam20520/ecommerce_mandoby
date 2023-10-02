 
@extends('front.layout')

@section('content')



<section class="checkout-section-2 section-b-space">
    <div class="container-fluid-lg">
        <div class="row g-sm-4 g-3">
            <div class="col-lg-8">
                <div class="left-sidebar-checkout">
                    <div class="checkout-detail-box">
                        <ul>
                            <li>
                                <div class="checkout-icon">
                                    <lord-icon target=".nav-item" src="https://cdn.lordicon.com/ggihhudh.json"
                                        trigger="loop-on-hover"
                                        colors="primary:#121331,secondary:#646e78,tertiary:#0baf9a"
                                        class="lord-icon">
                                    </lord-icon>
                                </div>
                                <div class="checkout-box">
                                    <div class="checkout-title">
                                        <h4>{{ trans('lang.DeliveryAddress') }}</h4>
                                    </div>

                             
                                </div>
                            </li>

                            <li>
                                <div class="checkout-icon">
                                    <lord-icon target=".nav-item" src="https://cdn.lordicon.com/oaflahpk.json"
                                        trigger="loop-on-hover" colors="primary:#0baf9a" class="lord-icon">
                                    </lord-icon>
                                </div>
                                <div class="checkout-box">
                                    <div class="checkout-title">
                                        <h4>{{ trans('lang.DeliveryOption') }}</h4>
                                    </div>

                                    <div class="checkout-detail">
                                        <div class="row g-4">
                                            <div class="col-xxl-6">
                                                <div class="delivery-option">
                                                    <div class="delivery-category">
                                                        <div class="shipment-detail">
                                                            <div
                                                                class="form-check custom-form-check hide-check-box">
                                                                <input class="form-check-input" v-model="type" value="Thwani" id="f-option6"  type="radio"
                                                                    name="standard" id="standard" checked>
                                                                <label class="form-check-label"
                                                                    for="standard">{{ trans('lang.thwani') }}</label>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>

                                            <div class="col-xxl-6">
                                                <div class="delivery-option">
                                                    <div class="delivery-category">
                                                        <div class="shipment-detail">
                                                            <div
                                                                class="form-check mb-0 custom-form-check show-box-checked">
                                                                <input class="form-check-input" type="radio"  v-model="type" value="Cash"  id="f-option5"
                                                                    name="standard" id="future">
                                                                <label class="form-check-label" for="future">{{ trans('lang.cash') }}</label>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>

                                          
                                        </div>
                                    </div>
                                </div>
                            </li>

                            <li>
                                <div class="checkout-icon">
                                    <lord-icon target=".nav-item" src="https://cdn.lordicon.com/qmcsqnle.json"
                                        trigger="loop-on-hover" colors="primary:#0baf9a,secondary:#0baf9a"
                                        class="lord-icon">
                                    </lord-icon>
                                </div>
                                <div class="checkout-box">
                                    <div class="checkout-title">
                                        <h4>{{ trans('lang.DeliveryAddress') }}</h4>
                                    </div>

                                    <div class="checkout-detail">
                                        <div class="accordion accordion-flush custom-accordion"
                                            id="accordionFlushExample">
                                      

                                            <div class="accordion-item">
                                                <div class="accordion-header" id="flush-headingOne">
                                                    <div class="accordion-button collapsed"
                                                        data-bs-toggle="collapse"
                                                        data-bs-target="#flush-collapseOne">
                                                        <div class="custom-form-check form-check mb-0">
                                                            <label class="form-check-label" for="credit"><input
                                                                    class="form-check-input mt-0" type="radio"
                                                                    name="flexRadioDefault" id="credit">{{ trans('lang.DeliveryAddress') }}</label>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div id="flush-collapseOne" class="accordion-collapse collapse"
                                                    data-bs-parent="#accordionFlushExample">
                                                    <div class="accordion-body">
                                                        <div class="row g-2">


                                                            
                                                            <div class="col-12">
                                                                <div class="payment-method">
                                                                    <div
                                                                        class="form-floating mb-lg-3 mb-2 theme-form-floating">
                                                                        <input type="text" v-model="email" class="form-control"
                                                                            id="credit2"
                                                                            placeholder="{{ trans('lang.email') }}">
                                                                        <label for="credit2">{{ trans('lang.email') }}</label>
                                                                    </div>
                                                                </div>
                                                            </div>


                                                            <div class="col-12">
                                                                <div class="payment-method">
                                                                    <div
                                                                        class="form-floating mb-lg-3 mb-2 theme-form-floating">
                                                                        <input type="text" v-model="address" class="form-control"
                                                                            id="credit2"
                                                                            placeholder="{{ trans('lang.adress') }}">
                                                                        <label for="credit2">{{ trans('lang.adress') }}</label>
                                                                    </div>
                                                                </div>
                                                            </div>


                                                            <div class="col-xxl-4">
                                                                <div
                                                                    class="form-floating mb-lg-3 mb-2 theme-form-floating">
                                                                    <input type="text"  v-model="Country" class="form-control"
                                                                        id="expiry" placeholder="{{ trans('lang.Country') }}">
                                                                    <label for="expiry">{{ trans('lang.Country') }}</label>
                                                                </div>
                                                            </div>

                                                            <div class="col-xxl-4">
                                                                <div
                                                                    class="form-floating mb-lg-3 mb-2 theme-form-floating">
                                                                    <input type="text"  v-model="city"  class="form-control" id="cvv"
                                                                        placeholder="{{ trans('lang.City') }}">
                                                                    <label for="cvv">{{ trans('lang.City') }}</label>
                                                                </div>
                                                            </div>

                                                        
                                                            <div class="col-xxl-4">
                                                                <div
                                                                    class="form-floating mb-lg-3 mb-2 theme-form-floating">
                                                                    <input type="text"  v-model="phone" class="form-control" id="cvv"
                                                                        placeholder="{{ trans('lang.phone') }}">
                                                                    <label for="cvv">{{ trans('lang.phone') }}</label>
                                                                </div>
                                                            </div>

                                                           
                                                          



                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
 
 
                                        </div>
                                    </div>
                                </div>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>

            <div class="col-lg-4">
                <div class="right-side-summery-box">
                    <div class="summery-box-2">
                        <div class="summery-header">
                            <h3>{{ trans('lang.OrderSummery') }}</h3>
                        </div>

                        <ul class="summery-contain">
                     
                            @foreach ($cart_items as $item)
                            <li>
                                <img src="{{  $item['product']['photo'] }}"
                                    class="img-fluid blur-up lazyloaded checkout-image" alt="">
                                <h4>{{  $item['product']['shop']['ar_name'] }} <span>X  {{  $item['qty']  }}</span></h4>
                                <h4 class="price">{{  $item['product']['symbol']  }} {{  $item['product']['price']  }}</h4>
                            </li>
                            @endforeach

                   

                     

                          
                        
 
                        </ul>

                        <ul class="summery-total">
                            <li>
                                <h4>{{ trans('lang.Subtotal') }}</h4>
                                <h4 class="price">{{ $cart['total'] }}</h4>
                            </li>

                            {{-- <li>
                                <h4>Shipping</h4>
                                <h4 class="price">$8.90</h4>
                            </li> --}}

                            {{-- <li>
                                <h4>Tax</h4>
                                <h4 class="price">$29.498</h4>
                            </li> --}}

                            {{-- <li>
                                <h4>Coupon/Code</h4>
                                <h4 class="price">$-23.10</h4>
                            </li> --}}

                            <li class="list-total">
                                <h4>Total (ORM)</h4>
                                <h4 class="price">{{ $cart['total'] }}</h4>
                            </li>
                        </ul>
                    </div>

             

                    <button  v-on:click="choosePayment" class="btn theme-bg-color text-white btn-md w-100 mt-4 fw-bold">{{ trans('lang.PlaceOrder') }}</button>
                </div>
            </div>
        </div>
    </div>
</section>


@endsection

@push('scripts')
 
<script src="{{ asset('js/front/vue/checkout.js') }}"></script>

@endpush