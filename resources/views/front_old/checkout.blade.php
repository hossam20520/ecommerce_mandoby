@extends('front.base.layout')

@section('content')

<div id="app">

    <!-- Start Banner Area -->
    <section class="banner-area organic-breadcrumb">
        <div class="container">
            <div class="breadcrumb-banner d-flex flex-wrap align-items-center justify-content-end">
                <div class="col-first">
                    <h1>@{{ $t('Checkout') }}</h1>
                    <nav class="d-flex align-items-center">
                        <a href="/">@{{ $t('home') }}<span class="lnr lnr-arrow-right"></span></a>
                        <a href="/checout">@{{ $t('Checkout') }}</a>
                    </nav>
                </div>
            </div>
        </div>
    </section>
    <!-- End Banner Area -->

    <!--================Checkout Area =================-->
    <section class="checkout_area section_gap">
        <div class="container">
 
    
            <div class="billing_details">
                <div class="row">
                    <div class="col-lg-8">
                        <h3>@{{ $t('BillingDetails') }}</h3>
                        <form class="row contact_form" action="#" method="post" novalidate="novalidate">
                            <div class="col-md-6 form-group p_star">
                                <input type="text" class="form-control" v-model="fname" placeholder="First name" id="first" name="name">
                                {{-- <span class="placeholder" data-placeholder="First name"></span> --}}
                            </div>
                            <div class="col-md-6 form-group p_star">
                                <input type="text" class="form-control" v-model="lname" placeholder="Last name" id="last" name="name">
                                {{-- <span class="placeholder" data-placeholder="Last name"></span> --}}
                            </div>
                   
                            <div class="col-md-6 form-group p_star">
                                <input type="text" class="form-control" placeholder="Phone number" v-model="phone" id="number" name="number">
                                {{-- <span class="placeholder" data-placeholder="Phone number"></span> --}}
                            </div>
                            <div class="col-md-6 form-group p_star">
                                <input type="text" class="form-control" v-model="email" placeholder="Email Address" id="email" name="compemailany">
                                {{-- <span class="placeholder" data-placeholder="Email Address"></span> --}}
                            </div>
                            {{-- <div class="col-md-12 form-group p_star">
                                <select class="country_select">
                                    <option value="1">Country</option>
                                    <option value="2">Country</option>
                                    <option value="4">Country</option>
                                </select>
                            </div> --}}
                            <div class="col-md-12 form-group p_star">
                                <input type="text" v-model="address" placeholder="Address line 01"  class="form-control" id="add1" name="add1">
                                {{-- <span class="placeholder" data-placeholder="Address line 01"></span> --}}
                            </div>
                            {{-- <div class="col-md-12 form-group p_star">
                                <input type="text" class="form-control" id="add2" name="add2">
                                <span class="placeholder" data-placeholder="Address line 02"></span>
                            </div> --}}
                            <div class="col-md-12 form-group p_star">
                                <input type="text" class="form-control" v-model="city" placeholder="Town/City" id="city" name="city">
                                {{-- <span class="placeholder" data-placeholder="Town/City"></span> --}}
                            </div>
                           <div class="col-md-12 form-group p_star">
                                <select  v-model="country" class="country_select">
                                    <option value="1">Egypt</option>
                                    <option value="2">Oman</option>
                                 
                                </select>
                            </div>  
                            {{-- <div class="col-md-12 form-group">
                                <input type="text" class="form-control" id="zip" name="zip" placeholder="Postcode/ZIP">
                            </div> --}}
                            {{-- <div class="col-md-12 form-group">
                                <div class="creat_account">
                                    <input type="checkbox" id="f-option2" name="selector">
                                    <label for="f-option2">Create an account?</label>
                                </div>
                            </div> --}}
                            {{-- <div class="col-md-12 form-group">
                                <div class="creat_account">
                                    <h3>Shipping Details</h3>
                                    <input type="checkbox" id="f-option3" name="selector">
                                    <label for="f-option3">Ship to a different address?</label>
                                </div>
                                <textarea class="form-control" name="message" id="message" rows="1" placeholder="Order Notes"></textarea>
                            </div> --}}
                        </form>
                    </div>
                    <div class="col-lg-4">
                        <div class="order_box">
                            <h2>@{{ $t('YourOrder') }}</h2>


                            <ul class="list">
                                <li><a href="#">@{{ $t('Product') }}  <span>@{{ $t('Total') }}</span></a></li>
                              
                                <li v-for="item in cart.cart_items"><a href="#"> @{{ item.product.name }} <span class="middle">x @{{ item.qty }}</span> <span class="last"> @{{ item.product.price }}</span></a></li>
 
                          
                          
                            </ul>


                            <ul class="list list_2">
                                <li><a href="#">@{{ $t('Subtotal') }} <span>@{{ cart.total}} </span></a></li>
                                <li><a href="#">@{{ $t('Shipping') }} <span> free</span></a></li>
                                <li><a href="#">@{{ $t('Total') }} <span>@{{ cart.total}}</span></a></li>
                            </ul>
                            <div class="payment_item">
                                <div class="radion_btn">
                                    <input type="radio" v-model="type" value="Cash"  id="f-option5" name="selector">
                                    <label for="f-option5">Cash</label>
                                    <div class="check"></div>
                                </div>
                                <p>@{{ $t('pay') }}</p>
                            </div>
                            <div class="payment_item active">
                                <div class="radion_btn">
                                    <input type="radio" v-model="type" value="Thwani" id="f-option6" name="selector">
                                    <label for="f-option6">Thwani </label>
                                    <img src="img/product/card.jpg" alt="">
                                    <div class="check"></div>
                                </div>
                                <p>@{{ $t('Payvia') }}</p>
                            </div>
                            {{-- <div class="creat_account">
                                <input type="checkbox" id="f-option4" name="selector">
                                <label for="f-option4">I’ve read and accept the </label>
                                <a href="#">terms & conditions*</a>
                            </div> --}}
                            <a class="primary-btn" v-on:click="choosePayment">@{{ $t('ProceedtoPay') }} </a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
    <!--================End Checkout Area =================-->
</div>

 @endsection


 @push('scripts')
 <script src="{{ asset('js/front/vue/checkout.js') }}"></script>
 @endpush