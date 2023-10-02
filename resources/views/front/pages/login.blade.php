 
@extends('front.layout')

@section('content')

 
<section class="log-in-section background-image-2 section-b-space">
    <div class="container-fluid-lg w-100">
        <div class="row">
            <div class="col-xxl-6 col-xl-5 col-lg-6 d-lg-block d-none ms-auto">
                <div class="image-contain">
                    <img src="{{ asset('css/assets/images/inner-page/log-in.png') }}" class="img-fluid" alt="">
                </div>
            </div>

            <div class="col-xxl-4 col-xl-5 col-lg-6 col-sm-8 mx-auto">
                <div class="log-in-box">
                    <div class="log-in-title">
                        <h3>{{ trans('lang.Welcome_To_dhafar') }}</h3>
                        <h4>{{ trans('lang.LogInYourAccount') }}</h4>
                    </div>

                    <div class="input-box">
                        <form class="row g-4">
                            <div class="col-12">
                                <div class="form-floating theme-form-floating log-in-form">
                                    <input type="text" class="form-control" v-model="email" id="email" placeholder="email">
                                    <label for="email">{{ trans('lang.EmailAddress') }}</label>
                                </div>
                            </div>

                            <div class="col-12">
                                <div class="form-floating theme-form-floating log-in-form">
                                    <input type="password" v-model="password"  class="form-control" id="password"
                                        placeholder="Password">
                                    <label for="password">{{ trans('lang.Password') }}</label>
                                </div>
                            </div>

                            {{-- <div class="col-12">
                                <div class="forgot-box">
                                    <div class="form-check ps-0 m-0 remember-box">
                                        <input class="checkbox_animated check-box" type="checkbox"
                                            id="flexCheckDefault">
                                        <label class="form-check-label" for="flexCheckDefault">Remember me</label>
                                    </div>
                                    <a href="forgot.html" class="forgot-password">Forgot Password?</a>
                                </div>
                            </div> --}}

                            <div class="col-12">
                                <button class="btn btn-animation w-100 justify-content-center"  v-on:click="loginbyEmail" type="button">Log
                                    In</button>
                            </div>
                        </form>
                    </div>

                    <div class="other-log-in">
                        <h6>or</h6>
                    </div>

                    <div class="log-in-button">
                        <ul>
                            {{-- <li>
                                <a href="https://www.google.com/" class="btn google-button w-100">
                                    <img src="{{ asset('css/assets/images/inner-page/google.png') }}" class="blur-up lazyload"
                                        alt=""> Log In with Google
                                </a>
                            </li> --}}
                            {{-- <li>
                                <a href="https://www.facebook.com/" class="btn google-button w-100">
                                    <img src="{{ asset('css/assets/images/inner-page/facebook.png') }}" class="blur-up lazyload"
                                        alt=""> Log In with Facebook
                                </a>
                            </li> --}}
                        </ul>
                    </div>

                    <div class="other-log-in">
                        <h6></h6>
                    </div>

                    <div class="sign-up-box">
                        <h4>{{ trans('lang.donthave') }}</h4>
                        <a href="{{ route('register') }}">Sign Up</a>
                    </div>
                </div>
            </div>
        </div>
    </div>
</section>


@endsection

@push('scripts')
 
<script src="{{ asset('js/front/vue/login.js') }}"></script>

@endpush