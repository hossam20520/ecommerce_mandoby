<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>Document</title>


    <link rel="stylesheet" href="{{ asset('css/front/linearicons.css') }}">
    <link rel="stylesheet" href="{{ asset('css/front/font-awesome.min.css') }}">
    <link rel="stylesheet" href="{{ asset('css/front/themify-icons.css') }}">
    <link rel="stylesheet" href="{{ asset('css/front/bootstrap.css') }}">
    <!-- <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/bootstrap-v4-rtl/4.6.2-1/css/bootstrap-rtl.min.css"> -->

    <link rel="stylesheet" href="{{ asset('css/front/owl.carousel.css') }} ">
    <link rel="stylesheet" href="{{ asset('css/front/nice-select.css') }} ">
    <link rel="stylesheet" href="{{ asset('css/front/nouislider.min.css') }} ">
    <link rel="stylesheet" href="{{ asset('css/front/ion.rangeSlider.css') }} " />
    <link rel="stylesheet" href="{{ asset('css/front/ion.rangeSlider.skinFlat.css') }} " />
    <link rel="stylesheet" href="{{ asset('css/front/magnific-popup.css') }} ">
    <link rel="stylesheet" href="{{ asset('css/front/main.css') }}">
    <script src="{{ asset('js/front/vue/vue.js') }}"></script>
    <script src="https://cdnjs.cloudflare.com/ajax/libs/vuetify/2.0.2/vuetify.min.js"></script>
    <script src="https://cdnjs.cloudflare.com/ajax/libs/axios/1.4.0/axios.min.js"></script>

    <script src="https://cdnjs.cloudflare.com/ajax/libs/vue-i18n/8.26.0/vue-i18n.min.js"></script>



    <script src="https://cdnjs.cloudflare.com/ajax/libs/vue-toasted/1.1.28/vue-toasted.min.js"></script>
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/vue-toasted/1.1.28/vue-toasted.min.css">

    <script src="https://cdnjs.cloudflare.com/ajax/libs/limonte-sweetalert2/11.7.12/sweetalert2.min.js"></script>
    <link rel="stylesheet"
        href="https://cdnjs.cloudflare.com/ajax/libs/limonte-sweetalert2/11.7.12/sweetalert2.min.css">
</head>

<body>



    









        @yield('content')

 



     @stack('scripts')
    <script src="{{ asset('js/front/js/vendor/jquery-2.2.4.min.js') }}"></script>
    {{-- <script src="https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.11.0/umd/popper.min.js" integrity="sha384-b/U6ypiBEHpOf/4+1nzFpr53nxSS+GLCkfwBdFNTxtclqqenISfwAzpKaMNFNmj4"
	 crossorigin="anonymous"></script> --}}
    <script src="{{ asset('js/front/js/vendor/bootstrap.min.js') }}"></script>
    <script src="{{ asset('js/front/js/jquery.ajaxchimp.min.js') }}"></script>
    <script src="{{ asset('js/front/js/jquery.nice-select.min.js') }}"></script>
    <script src="{{ asset('js/front/js/jquery.sticky.js') }}"></script>
    <script src="{{ asset('js/front/js/nouislider.min.js') }}"></script>
    <script src="{{ asset('js/front/js/countdown.js') }}"></script>
    <script src="{{ asset('js/front/js/jquery.magnific-popup.min.js') }}"></script>
    <script src="{{ asset('js/front/js/owl.carousel.min.js') }}"></script>
    <!--gmaps Js-->
    {{-- <script src="https://maps.googleapis.com/maps/api/js?key=AIzaSyCjCGmQ0Uq4exrzdcL6rvxywDDOvfAu6eE"></script> --}}
    <script src="{{ asset('js/front/js/gmaps.min.js') }}"></script>
    <script src="{{ asset('js/front/js/main.js') }}"></script>
</body>

</html>
