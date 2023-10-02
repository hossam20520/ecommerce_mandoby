
 
@extends('front.layout')

@section('content')



<section class="cart-section section-b-space">
    <div class="container-fluid-lg">
        <div class="row g-sm-5 g-3">
            <div class="col-xxl-9">
                <div class="cart-table">
                    <div class="table-responsive-xl">
                        <table class="table">
                            <tbody>
                        
                         @foreach ($cart_items as $item)
                         @include('front.componenets.cards.cart_item')   
                         @endforeach
                               

                             
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>

            <div class="col-xxl-3">
                <div class="summery-box p-sticky">
                    <div class="summery-header">
                        <h3>{{ trans('lang.CartTotal') }} </h3>
                    </div>

                    <div class="summery-contain">
                        <div class="coupon-cart">
                            {{-- <h6 class="text-content mb-2">Coupon Apply</h6>
                            <div class="mb-3 coupon-box input-group">
                                <input type="email" class="form-control" id="exampleFormControlInput1"
                                    placeholder="Enter Coupon Code Here...">
                                <button class="btn-apply">Apply</button>
                            </div> --}}
                        </div>
                        <ul>
                            <li>
                                <h4>{{ trans('lang.Subtotal') }}</h4>
                                <h4 class="price">  {{ $cart['total'] }}</h4>
                            </li>

                            {{-- <li>
                                <h4>Coupon Discount</h4>
                                <h4 class="price">(-) 0.00</h4>
                            </li> --}}

                            {{-- <li class="align-items-start">
                                <h4>Shipping</h4>
                                <h4 class="price text-end">$6.90</h4>
                            </li> --}}
                        </ul>
                    </div>

                    <ul class="summery-total">
                        <li class="list-total border-top-0">
                            <h4> {{ trans('lang.Total') }}    (ORM)</h4>
                            <h4 class="price theme-color">{{ $cart['total'] }}</h4>
                        </li>
                    </ul>

                    <div class="button-group cart-button">
                        <ul>
                            <li>
                                <button onclick="location.href = '/checkout';"
                                    class="btn btn-animation proceed-btn fw-bold">{{ trans('lang.ProcessToCheckout') }}</button>
                            </li>

                            <li>
                                <button onclick="location.href = '/';"
                                    class="btn btn-light shopping-button text-dark">
                                    <i class="fa-solid fa-arrow-left-long"></i>{{ trans('lang.ReturnToShopping') }} </button>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    </div>
</section>


@endsection

@push('scripts')
 
<script src="{{ asset('js/front/vue/cart_vue.js') }}"></script>

@endpush