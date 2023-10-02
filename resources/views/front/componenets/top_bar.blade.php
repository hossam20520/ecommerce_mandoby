<div class="header-top">
    <div class="container-fluid-lg">
        <div class="row">
            <div class="col-xxl-3 d-xxl-block d-none">
                <div class="top-left-header">
                    {{-- <i class="iconly-Location icli text-white"></i> --}}
                    {{-- <span class="text-white">1418 Riverwood Drive, CA 96052, US</span> --}}
                </div>
            </div>

            <div class="col-xxl-6 col-lg-9 d-lg-block d-none">
             
            </div>

            <div class="col-lg-3">
                <ul class="about-list right-nav-about">
                    <li class="right-nav-list">
                        <div class="dropdown theme-form-select">
                            <button class="btn dropdown-toggle" type="button" id="select-language"
                                data-bs-toggle="dropdown" aria-expanded="false">
                                <img src="/"
                                    class="img-fluid blur-up lazyload" alt="">
                                <span>English</span>
                            </button>
                            <ul class="dropdown-menu dropdown-menu-end" aria-labelledby="select-language">
                                <li>
                                    <a class="dropdown-item" href="/language/en" id="english">
                                        <img src="{{ asset('css/assets/images/country/united-kingdom.png') }}"
                                            class="img-fluid blur-up lazyload" alt="">
                                        <span>English</span>
                                    </a>
                                </li>
                                <li>
                                    <a class="dropdown-item" href="/language/ar" id="france">
                                        <img src="{{ asset('css/assets/images/country/arabic.png') }}"
                                            class="img-fluid blur-up lazyload" alt="">
                                        <span>{{ trans('lang.arabic') }}</span>
                                    </a>
                                </li>
                            
                            </ul>
                        </div>
                    </li>
                    <li class="right-nav-list">
                        {{-- <div class="dropdown theme-form-select">
                            <button class="btn dropdown-toggle" type="button" id="select-dollar"
                                data-bs-toggle="dropdown" aria-expanded="false">
                                <span>USD</span>
                            </button>
                            <ul class="dropdown-menu dropdown-menu-end sm-dropdown-menu"
                                aria-labelledby="select-dollar">
                                <li>
                                    <a class="dropdown-item" id="aud" href="javascript:void(0)">AUD</a>
                                </li>
                                <li>
                                    <a class="dropdown-item" id="eur" href="javascript:void(0)">EUR</a>
                                </li>
                                <li>
                                    <a class="dropdown-item" id="cny" href="javascript:void(0)">CNY</a>
                                </li>
                            </ul>
                        </div> --}}
                    </li>
                </ul>
            </div>
        </div>
    </div>
</div>