@extends('front.base.loginBase')



@section('content')
 
<div id="app">

<section class="banner-area organic-breadcrumb">
    <div class="container">
        <div class="breadcrumb-banner d-flex flex-wrap align-items-center justify-content-end">
            <div class="col-first">
                <h1>Register</h1>
                <nav class="d-flex align-items-center">
                    <a href="/">Home<span class="lnr lnr-arrow-right"></span></a>
                    <a href="/auth/register">Register</a>
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
                    <img class="img-fluid" src="{{ asset('images/loginImage.png')}}" alt="">
                    <div class="hover">
                        <h4>New to our website?</h4>
                        <p>There are advances being made in science and technology everyday, and a good example of this is the</p>
                        <a class="primary-btn" href="/auth/login">Login In</a>
                    </div>
                </div>
            </div>
            <div class="col-lg-6">
                <div class="login_form_inner">
                    <h3>Register</h3>
                    <form class="row login_form"      id="contactForm" novalidate="novalidate">
                        <div class="col-md-12 form-group">
                            <input type="text" class="form-control" v-model="firstname"  id="name" name="name" placeholder="Firstname" onfocus="this.placeholder = ''" onblur="this.placeholder = 'firstname'">
                        </div>
                      
                        <div class="col-md-12 form-group">
                            <input type="text" class="form-control" v-model="lastname"  id="name" name="name" placeholder="Lastname" onfocus="this.placeholder = ''" onblur="this.placeholder = 'lastname'">
                        </div>


                        <div class="col-md-12 form-group">
                            <input type="email" class="form-control" v-model="email"  id="name" name="name" placeholder="Email" onfocus="this.placeholder = ''" onblur="this.placeholder = 'email'">
                        </div>


                        <div class="col-md-12 form-group">
                            <input type="text" class="form-control" v-model="phone"  id="name" name="name" placeholder="Phone" onfocus="this.placeholder = ''" onblur="this.placeholder = 'phone'">
                        </div>

 
                      
                        <div class="col-md-12 form-group">
                            <input type="text" class="form-control" v-model="password" id="name" name="name" placeholder="Password" onfocus="this.placeholder = ''" onblur="this.placeholder = 'Password'">
                        </div>







                        <div class="col-md-12 form-group">
                   
                        </div>
                        <div class="col-md-12 form-group">
                            <button type="button" value="submit" v-on:click="register" class="primary-btn">Register</button>
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
 
<script src="{{ asset('js/front/vue/register.js') }}"></script>

@endpush
