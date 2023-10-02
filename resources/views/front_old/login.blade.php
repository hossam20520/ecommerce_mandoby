@extends('front.base.loginBase')



@section('content')
 
<div id="app">

<section class="banner-area organic-breadcrumb">
    <div class="container">
        <div class="breadcrumb-banner d-flex flex-wrap align-items-center justify-content-end">
            <div class="col-first">
                <h1>Login/Register</h1>
                <nav class="d-flex align-items-center">
                    <a href="index.html">Home<span class="lnr lnr-arrow-right"></span></a>
                    <a href="category.html">Login/Register</a>
                </nav>
            </div>
        </div>
    </div>
</section>
<!-- End Banner Area -->

<!--================Login Box Area =================-->
<section class="login_box_area section_gap">
    <div class="container">
        <div class="row">
            <div class="col-lg-6">
                <div class="login_box_img">
                    <img class="img-fluid" src="{{ asset('images/img/login.jpg')}}" alt="">
                    <div class="hover">
                       
                        <a class="primary-btn" href="/auth/register">Create an Account</a>
                    </div>
                </div>
            </div>
            <div class="col-lg-6">
                <div class="login_form_inner">
                    <h3>Log in to enter</h3>
                    <form class="row login_form"      id="contactForm" novalidate="novalidate">
                        <div class="col-md-12 form-group">
                            <input type="text" class="form-control" v-model="phone"  id="name" name="name" placeholder="Phone" onfocus="this.placeholder = ''" onblur="this.placeholder = 'Phone'">
                        </div>
                        <div class="col-md-12 form-group">
                            <input type="text" class="form-control" v-model="password" id="name" name="name" placeholder="Password" onfocus="this.placeholder = ''" onblur="this.placeholder = 'Password'">
                        </div>
                        <div class="col-md-12 form-group">
                            {{-- <div class="creat_account">
                                <input type="checkbox" id="f-option2" name="selector">
                                <label for="f-option2">Keep me logged in</label>
                            </div> --}}
                        </div>
                        <div class="col-md-12 form-group">
                            <button type="button" value="submit" v-on:click="login" class="primary-btn">Log In</button>
                            {{-- <a href="#">Forgot Password?</a> --}}
                        </div>
                    </form>
                </div>
            </div>
        </div>
    </div>
</section>
</div>
@endsection

@push('scripts')
 
<script src="{{ asset('js/front/vue/login.js') }}"></script>

@endpush

