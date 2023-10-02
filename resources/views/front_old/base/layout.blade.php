<!DOCTYPE html>
<html lang="en"  >

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

    {{-- <link rel="stylesheet" href="https://unpkg.com/vue2-toast/dist/style.css">

    <script src="https://unpkg.com/vue2-toast@2.1.0/lib/index.js"></script> --}}
    {{-- 
    <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/vue-toast-notification/dist/theme-default.css"  >
    <script src="https://cdnjs.cloudflare.com/ajax/libs/vue-toasted/1.1.28/vue-toasted.min.js"></script> --}}

    <script src="https://cdnjs.cloudflare.com/ajax/libs/limonte-sweetalert2/11.7.12/sweetalert2.min.js"></script>
    <link rel="stylesheet"
        href="https://cdnjs.cloudflare.com/ajax/libs/limonte-sweetalert2/11.7.12/sweetalert2.min.css">


    <style>

.notification-badgee {
  background-color: red;
  color: white;
  padding: 10px;
  border-radius: 100%;
  font-size: 10px;
 
}

.notification-badge {
  background-color: red;
  color: white;
  padding: 2px 5px;
  border-radius: 50%;
  font-size: 10px;
  margin-left: -8px;
  margin-top: -8px;
}
*{padding:0;margin:0;}

 

.float{
	position:fixed;
	width:60px;
	height:60px;
	bottom:40px;
	right:40px;
	background-color:white;
	color:#FFF;
	border-radius:50px;
	text-align:center;
	box-shadow: 1px 1px 2px #999;
}

.my-float{
	margin-top:22px;
}

        .swal2-toast {
            width: 100;
            font-size: 12px;
            /* Adjust the font size */
            padding: 8px 12px;
            /* Adjust the padding */
        }

   
        #loading {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height:100%;
  background-color: white;
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 9999;
 
 
}

#loading.fade-in {
  display: flex;
  justify-content: center;
  align-items: center;
  opacity: 1;
}
#loading img {
  max-width: 100%;
  max-height: 100%;
}
 
    </style>
</head>

<body>
    <div id="loading">
        <img src="http://192.168.1.5:8000/images/81645555logo.png" alt="Loading" />
      </div>
    {{-- <div id="app"> --}}


        {{-- @include('front.nav.nav') --}}


        

        @yield('content')

        {{-- @include('front.componenets.footer')  --}}

    {{-- </div> --}}

    
 

    <a href="/chat" class="float">
       <img width="50px" src="https://cdn-icons-png.flaticon.com/512/1041/1041916.png">
        </a>
   
    @stack('scripts')
 
    <script src="{{ asset('js/front/vue/nav.js') }}"></script>
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

    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.3/css/all.min.css">
    {{-- <script type="module">
        // Import the functions you need from the SDKs you need
        import { initializeApp } from "https://www.gstatic.com/firebasejs/10.0.0/firebase-app.js";
        import { getAnalytics } from "https://www.gstatic.com/firebasejs/10.0.0/firebase-analytics.js";
        // TODO: Add SDKs for Firebase products that you want to use
        // https://firebase.google.com/docs/web/setup#available-libraries
      
        // Your web app's Firebase configuration
        // For Firebase JS SDK v7.20.0 and later, measurementId is optional
        const firebaseConfig = {
          apiKey: "AIzaSyD0rJynBc4UYEZ1KyPfJhl8iLoI5QztcC4",
          authDomain: "survey-258ac.firebaseapp.com",
          projectId: "survey-258ac",
          storageBucket: "survey-258ac.appspot.com",
          messagingSenderId: "771830807965",
          appId: "1:771830807965:web:f762c23b60a475606f0374",
          measurementId: "G-NQXFP3LHMP"
        };
      
        // Initialize Firebase
        const app = initializeApp(firebaseConfig);
        const analytics = getAnalytics(app);
      </script> --}}


      <script>
        // Get the loading element by ID
        var loadingElement = document.getElementById('loading');
        
        // Set the display property to 'none'
        // loadingElement.style.display = 'none';

        setTimeout(function() {
  loadingElement.style.display = 'none';
}, 1000);
        </script>

</body>

</html>
