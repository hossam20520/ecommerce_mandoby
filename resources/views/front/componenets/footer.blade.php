<footer class="section-t-space footer-section-2 footer-color-2">
    <div class="container-fluid-lg">
        <div class="main-footer">
            <div class="row g-md-4 gy-sm-5">
                <div class="col-xxl-3 col-xl-4 col-sm-6">
                    <a href="index.html" class="foot-logo theme-logo">
                        <img src="{{ asset('images/LOGOpNGw.png') }}" class="img-fluid blur-up lazyload" alt="">
                    </a>
                    {{-- <p class="information-text information-text-2">it is a long established fact that a reader will
                        be distracted by the readable content.</p> --}}
                    <ul class="social-icon">
                        <li class="light-bg">
                            <a href="https://www.facebook.com/" class="footer-link-color">
                                <i class="fab fa-facebook-f"></i>
                            </a>
                        </li>
                        <li class="light-bg">
                            <a href="https://accounts.google.com/signin/v2/identifier?flowName=GlifWebSignIn&flowEntry=ServiceLogin"
                                class="footer-link-color">
                                <i class="fab fa-google"></i>
                            </a>
                        </li>
                        <li class="light-bg">
                            <a href="https://twitter.com/i/flow/login" class="footer-link-color">
                                <i class="fab fa-twitter"></i>
                            </a>
                        </li>
                        <li class="light-bg">
                            <a href="https://www.instagram.com/" class="footer-link-color">
                                <i class="fab fa-instagram"></i>
                            </a>
                        </li>
                        <li class="light-bg">
                            <a href="https://in.pinterest.com/" class="footer-link-color">
                                <i class="fab fa-pinterest-p"></i>
                            </a>
                        </li>
                    </ul>
                </div>

                <div class="col-xxl-2 col-xl-4 col-sm-6">
                    <div class="footer-title">
                        <h4 class="text-white">{{ trans('lang.AboutDhafar') }} </h4>
                    </div>
                    <ul class="footer-list footer-contact footer-list-light">
                        <li>
                            <a href="about-us.html" class="light-text">{{ trans('aboutus') }}</a>
                        </li>
                        <li>
                            <a href="contact-us.html" class="light-text">{{ trans('ContactUs') }} </a>
                        </li>
                        {{-- <li>
                            <a href="term_condition.html" class="light-text">{{ route('ContactUs') }}Terms & Coditions</a>
                        </li> --}}
                     
                    
                    </ul>
                </div>

                <div class="col-xxl-2 col-xl-4 col-sm-6">
                    <div class="footer-title">
                        <h4 class="text-white"> {{ trans('lang.UsefulLink') }} </h4>
                    </div>
                    <ul class="footer-list footer-list-light footer-contact">
                        <li>
                            <a href="{{ route('profile') }}" class="light-text">Your Order</a>
                        </li>
                        <li>
                            <a href="{{ route('profile') }}" class="light-text">Your Account</a>
                        </li>
                        <li>
                            <a href="{{ route('profile') }}" class="light-text">Track Orders</a>
                        </li>
                        <li>
                            <a href="{{ route('wishlist') }}" class="light-text">Your Wishlist</a>
                        </li>
                        {{-- <li>
                            <a href="faq.html" class="light-text">FAQs</a>
                        </li> --}}
                    </ul>
                </div>

                <div class="col-xxl-2 col-xl-4 col-sm-6">
                    <div class="footer-title">
                        <h4 class="text-white">{{ trans('lang.Categories') }}</h4>
                    </div>
                    <ul class="footer-list footer-list-light footer-contact">
                        <li>
                            <a href="vegetables-demo.html" class="light-text">Fresh Vegetables</a>
                        </li>
                        <li>
                            <a href="spice-demo.html" class="light-text">Hot Spice</a>
                        </li>
                        <li>
                            <a href="bags-demo.html" class="light-text">Brand New Bags</a>
                        </li>
                        <li>
                            <a href="bakery-demo.html" class="light-text">New Bakery</a>
                        </li>
                        <li>
                            <a href="grocery-demo.html" class="light-text">New Grocery</a>
                        </li>
                    </ul>
                </div>

                <div class="col-xxl-3 col-xl-4 col-sm-6">
                    <div class="footer-title">
                        <h4 class="text-white">{{ trans('lang.Storeinfomation') }}</h4>
                    </div>
                    <ul class="footer-address footer-contact">
                        {{-- <li>
                            <a href="javascript:void(0)" class="light-text">
                                <div class="inform-box flex-start-box">
                                    <i data-feather="map-pin"></i>
                                    <p>Fastkart Demo Store, Demo store india 345 - 659</p>
                                </div>
                            </a>
                        </li> --}}

                        <li>
                            <a href="javascript:void(0)" class="light-text">
                                <div class="inform-box">
                                    <i data-feather="phone"></i>
                                    <p>Call us: 0101222</p>
                                </div>
                            </a>
                        </li>

                        <li>
                            <a href="javascript:void(0)" class="light-text">
                                <div class="inform-box">
                                    <i data-feather="mail"></i>
                                    <p>Email Us: support@dhofar.online</p>
                                </div>
                            </a>
                        </li>

                        {{-- <li>
                            <a href="javascript:void(0)" class="light-text">
                                <div class="inform-box">
                                    <i data-feather="printer"></i>
                                    <p>Fax: 123456</p>
                                </div>
                            </a>
                        </li> --}}
                    </ul>
                </div>
            </div>
        </div>

        <div class="sub-footer sub-footer-lite section-b-space section-t-space">
            <div class="left-footer">
                {{-- <p class="light-text">2022 Copyright By Themeforest Powered By Pixelstrap</p> --}}
            </div>

            <ul class="payment-box">
                <li>
                    <img src="{{ asset('css/assets/images/icon/paymant/visa.png') }}" class="blur-up lazyload" alt="">
                </li>
                <li>
                    <img src="{{ asset('css/assets/images/icon/paymant/discover.png') }}" alt="" class="blur-up lazyload">
                </li>
                <li>
                    <img src="{{ asset('css/assets/images/icon/paymant/american.png') }}" alt="" class="blur-up lazyload">
                </li>
                <li>
                    <img src="{{ asset('css/assets/images/icon/paymant/master-card.png') }}" alt="" class="blur-up lazyload">
                </li>
                <li>
                    <img src="{{ asset('css/assets/images/icon/paymant/giro-pay.png') }}" alt="" class="blur-up lazyload">
                </li>
            </ul>
        </div>
    </div>
</footer>