@extends('front.layout')
@section('content')

<section class="section-b-space shop-section">
    <div class="container-fluid-lg">
        <div class="row">
            <div class="col-xxl-3 col-lg-4">
                <div class="left-box wow fadeInUp">
                    <div class="shop-left-sidebar">
                        <div class="back-button">
                            <h3><i class="fa-solid fa-arrow-left"></i> Back</h3>
                        </div>

                        <div class="vendor-detail-box">
                            <div class="vendor-name vendor-bottom">
                                <div class="vendor-logo">
                                    <img src="{{ $shop['image'] }}" alt="">
                                    <div>
                                        <h3> {{ $shop['name'] }}</h3>
                                  
                                    </div>
                                </div>
                         
                            </div>

                     

                            <div class="vendor-share">
                                <h5>Follow Us :</h5>
                                <ul>
                                    <li>
                                        <a href="javascript:void(0)">
                                            <i class="fa-brands fa-facebook-f"></i>
                                        </a>
                                    </li>
                                    <li>
                                        <a href="javascript:void(0)">
                                            <i class="fa-brands fa-google-plus-g"></i>
                                        </a>
                                    </li>
                                    <li>
                                        <a href="javascript:void(0)">
                                            <i class="fa-brands fa-twitter"></i>
                                        </a>
                                    </li>
                                    <li>
                                        <a href="javascript:void(0)">
                                            <i class="fa-brands fa-instagram"></i>
                                        </a>
                                    </li>
                                </ul>
                            </div>
                        </div>

                
                    </div>
                </div>
            </div>

            <div class="col-xxl-9 col-lg-8">
                <div class="right-box">
                    <div class="show-button">
                        <div class="filter-button-group mt-0">
                            <div class="filter-button d-inline-block d-lg-none">
                                <a><i class="fa-solid fa-filter"></i> Filter Menu</a>
                            </div>
                        </div>

                   
                    </div>

                    <div
                        class="row g-sm-4 g-3 row-cols-xxl-4 row-cols-xl-3 row-cols-lg-2 row-cols-md-3 row-cols-2 product-list-section">
                      
                        @foreach ($vendor as $item)
                        {{-- @include('front.componenets.cards.product_home_card')    --}}
   
                        @include('front.componenets.cards.product_searchCard')
                        @endforeach
                  
                    </div>

                    {{-- <nav class="custome-pagination">
                        <ul class="pagination justify-content-center">
                            <li class="page-item disabled">
                                <a class="page-link" href="javascript:void(0)" tabindex="-1" aria-disabled="true">
                                    <i class="fa-solid fa-angles-left"></i>
                                </a>
                            </li>
                            <li class="page-item active">
                                <a class="page-link" href="javascript:void(0)">1</a>
                            </li>
                            <li class="page-item" aria-current="page">
                                <a class="page-link" href="javascript:void(0)">2</a>
                            </li>
                            <li class="page-item">
                                <a class="page-link" href="javascript:void(0)">3</a>
                            </li>
                            <li class="page-item">
                                <a class="page-link" href="javascript:void(0)">
                                    <i class="fa-solid fa-angles-right"></i>
                                </a>
                            </li>
                        </ul>
                    </nav> --}}
                </div>
            </div>
        </div>
    </div>
</section>

@endsection


@push('scripts')
 
{{-- <script src="{{ asset('js/front/vue/login.js') }}"></script> --}}
<script src="{{ asset('js/front/vue/cart_vue.js') }}"></script>
@endpush