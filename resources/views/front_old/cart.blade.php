@extends('front.base.layout')

@section('content')

<div id="app">
    <!-- End Header Area -->

    <!-- Start Banner Area -->
    <section class="banner-area organic-breadcrumb">
        <div class="container">
            <div class="breadcrumb-banner d-flex flex-wrap align-items-center justify-content-end">
                <div class="col-first">
                    <h1>@{{ $t('cart') }}</h1>
                    <nav class="d-flex align-items-center">
                        <a href="index.html">@{{ $t('home') }}<span class="lnr lnr-arrow-right"></span></a>
                        <a href="category.html">@{{ $t('cart') }}</a>
                    </nav>
                </div>
            </div>
        </div>
    </section>
    <!-- End Banner Area -->

    <!--================Cart Area =================-->
    <section class="cart_area">
        <div class="container">
            <div class="cart_inner">
                <div class="table-responsive">
                    <table class="table">
                        <thead>
                            <tr>
                                <th scope="col">@{{ $t('Product') }}</th>
                                <th scope="col">@{{ $t('Price') }}</th>
                                <th scope="col">@{{ $t('Quantity') }}</th>
                                <th scope="col">@{{ $t('Total') }}</th>
                            </tr>
                        </thead>
                        <tbody>




                            <tr v-for="item in cart.cart_items">
                                <td>
                                    <div class="media">
                                        <div class="d-flex">
                                            <img :src=" productImage + item.product.image.split(',')[0]" alt="">
                                        </div>
                                        <div class="media-body">
                                            <p> @{{ item.product.name }}</p>
                                        </div>
                                    </div>
                                </td>
                                <td>
                                    <h5> @{{ item.product.shop.symbol }} @{{ item.product.price }}</h5>
                                </td>
                                <td>
                                    <div class="product_count">
                                        <input type="text" name="qty" disabled id="sst" maxlength="12"
                                            :value="item.qty" title="Quantity:" class="input-text qty">


                                    </div>
                                </td>
                                <td>
                                    <h5> @{{ item.subtotal }}</h5>
                                </td>
                            </tr>



                            <tr>
                                <td>

                                </td>
                                <td>

                                </td>
                                <td>


                                    <h5>@{{ $t('Subtotal') }}</h5>


                                </td>
                                <td>
                                    <h5> @{{ cart.total }}</h5>
                                </td>
                            </tr>

                            <tr class="out_button_area">
                                <td>

                                </td>
                                <td>

                                </td>
                                <td>

                                </td>
                                <td>
                                    <div class="checkout_btn_inner d-flex align-items-center">
                                        <a class="gray_btn" href="/shop"> @{{ $t('ContinueShopping') }}</a>
                                        <a class="primary-btn" href="/checkout"> @{{ $t('Proceed') }}    </a>
                                    </div>
                                </td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    </section>
</div>
  @endsection

  @push('scripts')
<script src="{{ asset('js/front/vue/cart.js') }}"></script>
@endpush
