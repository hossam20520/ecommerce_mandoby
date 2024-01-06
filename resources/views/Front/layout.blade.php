<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <!-- Google font -->
    {{-- <link rel="preconnect" href="https://fonts.gstatic.com"> --}}
    <link href="https://fonts.googleapis.com/css2?family=Public+Sans:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap"
        rel="stylesheet">
    <link href="https://fonts.googleapis.com/css2?family=Great+Vibes&display=swap" rel="stylesheet">

    <link rel="stylesheet" href="{{ asset('css/assets/css/animate.min.css') }}" />
    <link id="rtl-link" rel="stylesheet" type="text/css" href="{{ asset('css/assets/css/vendors/bootstrap.css') }}">
    <!-- font-awesome css -->
    <link rel="stylesheet" type="text/css" href="{{ asset('css/assets/css/vendors/font-awesome.css') }}">

    <!-- feather icon css -->
    <link rel="stylesheet" type="text/css" href="{{ asset('css/assets/css/vendors/feather-icon.css') }}">

    <!-- Plugin CSS file with desired skin css -->
    <link rel="stylesheet" href="{{ asset('css/assets/css/vendors/ion.rangeSlider.min.css') }}">

    <!-- slick css -->
    <link rel="stylesheet" type="text/css" href="{{ asset('css/assets/css/vendors/slick/slick.css') }}">
    <link rel="stylesheet" type="text/css" href="{{ asset('css/assets/css/vendors/slick/slick-theme.css') }}">

    <!-- animation css -->
    <link rel="stylesheet" type="text/css" href="{{ asset('css/assets/css/font-style.css') }}">

    <!-- Template css -->
    <link id="color-link" rel="stylesheet" type="text/css" href="{{ asset('css/assets/css/style.css') }}">

    <title>Document</title>
</head>
<body>
    

    @include('Front.partials.header') <!-- Include the header partial -->
    
    <div class="content">
        @yield('content') <!-- This is where specific page content will go -->
    </div>
    
    @include('Front.partials.footer') <!-- Include the footer partial -->
    

    <!-- latest jquery-->
    <script src="{{ asset('css/assets/js/jquery-3.6.0.min.js') }}"></script>

    <!-- jquery ui-->
    <script src="{{ asset('css/assets/js/jquery-ui.min.js') }}"></script>

    <!-- Bootstrap js-->
    <script src="{{ asset('css/assets/js/bootstrap/bootstrap.bundle.min.js') }}"></script>
    <script src="{{ asset('css/assets/js/bootstrap/bootstrap-notify.min.js') }}"></script>
    <script src="{{ asset('css/assets/js/bootstrap/popper.min.js') }}"></script>

    <!-- feather icon js-->
    <script src="{{ asset('css/assets/js/feather/feather.min.js') }}"></script>
    <script src="{{ asset('css/assets/js/feather/feather-icon.js') }}"></script>

    <!-- Lazyload Js -->
    <script src="{{ asset('css/assets/js/lazysizes.min.js') }}"></script>

    <!-- Slick js-->
    <script src="{{ asset('css/assets/js/slick/slick.js') }}"></script>
    <script src="{{ asset('css/assets/js/slick/slick-animation.min.js') }}"></script>
    <script src="{{ asset('css/assets/js/custom-slick-animated.js') }}"></script>
    <script src="{{ asset('css/assets/js/slick/custom_slick.js') }}"></script>

    <!-- Range slider js -->
    <script src="{{ asset('css/assets/js/ion.rangeSlider.min.js') }}"></script>

    <!-- Auto Height Js -->
    <script src="{{ asset('css/assets/js/auto-height.js') }}"></script>

    <!-- Lazyload Js -->
    <script src="{{ asset('css/assets/js/lazysizes.min.js') }}"></script>

    <!-- Quantity js -->
    <script src="{{ asset('css/assets/js/quantity-2.js') }}"></script>

    <!-- Fly Cart Js -->
    <script src="{{ asset('css/assets/js/fly-cart.js') }}"></script>

    <!-- Timer Js -->
    <script src="{{ asset('css/assets/js/timer1.js') }}"></script>
    <script src="{{ asset('css/assets/js/timer2.js') }}"></script>

    <!-- Copy clipboard Js -->
    <script src="{{ asset('css/assets/js/clipboard.min.js') }}"></script>
    <script src="{{ asset('css/assets/js/copy-clipboard.js') }}"></script>

    <!-- WOW js -->
    <script src="{{ asset('css/assets/js/wow.min.js') }}"></script>
    <script src="{{ asset('css/assets/js/custom-wow.js') }}"></script>

    <!-- script js -->
    <script src="{{ asset('css/assets/js/script.js') }}"></script>
</body>
</html>