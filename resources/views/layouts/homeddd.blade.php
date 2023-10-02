<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <meta http-equiv="X-UA-Compatible" content="ie=edge">
  <title>Document</title>

  <link rel="stylesheet" href="{{ asset('css/front/linearicons.css')}}">
	<link rel="stylesheet" href="{{ asset('css/front/font-awesome.min.css')}}">
	<link rel="stylesheet" href="{{ asset('css/front/themify-icons.css')}}">
	<link rel="stylesheet" href="{{ asset('css/front/bootstrap.css')}}">
	<!-- <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/bootstrap-v4-rtl/4.6.2-1/css/bootstrap-rtl.min.css"> -->

	<link rel="stylesheet" href="{{ asset('css/front/owl.carousel.css') }} ">
	<link rel="stylesheet" href="{{ asset('css/front/nice-select.css')}} ">
	<link rel="stylesheet" href="{{ asset('css/front/nouislider.min.css')}} ">
	<link rel="stylesheet" href="{{ asset('css/front/ion.rangeSlider.css') }} " />
	<link rel="stylesheet" href="{{ asset('css/front/ion.rangeSlider.skinFlat.css')}} " />
	<link rel="stylesheet" href="{{ asset('css/front/magnific-popup.css')}} ">
	<link rel="stylesheet" href="{{ asset('css/front/main.css') }}">
  <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/vuetify/2.0.2/vuetify.css">


  <link href="https://cdnjs.cloudflare.com/ajax/libs/MaterialDesign-Webfont/7.2.96/css/materialdesignicons.min.css" rel="stylesheet">

  


	<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/vuetify/3.3.7/vuetify.min.css">


  <script src="{{ asset('js/front/vue/vue.js')}}"></script>
  {{-- <script src="https://unpkg.com/vue@3/dist/vue.global.js"></script> --}}
  

  <script src="https://unpkg.com/vue-router@3.6.5/dist/vue-router.js"  ></script>
 
</head>
<body>
  <script src="https://cdnjs.cloudflare.com/ajax/libs/vuetify/2.0.2/vuetify.min.js"  ></script>
   <div id="app">






 






    <router-view></router-view>

    <router-link to="/home">Go to Home</router-link>
    <router-link to="/about">Go to About</router-link>
  </div>

  <script src="{{ asset('js/front/vue/app.js')}}"></script>
  <script>
 
//  Vue.use(Vuetify);

    const AboutComponent = {
      template: '<div><h2>About Component</h2><p>This is the About page.</p></div>'
    };

    // Create a new Vue Router instance
    const router = new VueRouter({
      routes: [
        { path: '/home', component: HomeComponent },
        { path: '/about', component: AboutComponent }
      ]
    });

    const vuetify = new Vuetify();


    new Vue({
      el: '#app',
      router,
      vuetify,
      data: {
        message: 'Hello, Vue.js 2!',
        inputText: '',
        items: [
          {
            src: 'https://cdn.vuetifyjs.com/images/carousel/squirrel.jpg',
          },
          {
            src: 'https://cdn.vuetifyjs.com/images/carousel/sky.jpg',
          },
          {
            src: 'https://cdn.vuetifyjs.com/images/carousel/bird.jpg',
          },
          {
            src: 'https://cdn.vuetifyjs.com/images/carousel/planet.jpg',
          },
        ],
      },
      methods: {
        changeMessage() {
          this.message = this.inputText;
          this.inputText = '';
        }
      }
    });


//     Vue.use(vuetify, {
//   theme: {
//     primary: '#C0D8D8',
//     secondary: '#D8F0F0',
//     accent: '#303030',
//     error: '#F72A38',
//     warning: '#F5E582',
//     info: '#F0F0F0',
//     success: '#789078'
//   }
// })


  </script>
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