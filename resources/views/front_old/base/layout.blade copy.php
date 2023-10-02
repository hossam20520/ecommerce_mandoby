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

    {{-- <link rel="stylesheet" href="https://unpkg.com/vue2-toast/dist/style.css">

    <script src="https://unpkg.com/vue2-toast@2.1.0/lib/index.js"></script> --}}
    {{-- 
    <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/vue-toast-notification/dist/theme-default.css"  >
    <script src="https://cdnjs.cloudflare.com/ajax/libs/vue-toasted/1.1.28/vue-toasted.min.js"></script> --}}

    <script src="https://cdnjs.cloudflare.com/ajax/libs/limonte-sweetalert2/11.7.12/sweetalert2.min.js"></script>
    <link rel="stylesheet"
        href="https://cdnjs.cloudflare.com/ajax/libs/limonte-sweetalert2/11.7.12/sweetalert2.min.css">


    <style>
        .swal2-toast {
            width: 100;
            font-size: 12px;
            /* Adjust the font size */
            padding: 8px 12px;
            /* Adjust the padding */
        }
    </style>
</head>

<body>

    {{-- <div id="app"> --}}


        @include('front.nav.nav')

        @yield('content')

       

    {{-- </div> --}}

    
    <script>
        Vue.use(VueI18n);
        //  Vue.use(Vuetify);




        const vuetify = new Vuetify();


        const i18n = new VueI18n({
            locale: 'en', // Set the default locale
            messages: {
                en: {
                    hello: 'Hello',
                    Items: 'Items',
                },
                fr: {
                    hello: 'Bonjour',
                    Items: 'Items',
                },
            },
        });


        new Vue({
            el: '#app',
            i18n,
            vuetify,
            data: {
                // message: 'Hello, Vue.js 2!',
                inputText: '',
                categories: [],
                products: [],
                product: "",
                overallreview: "",
                categoryImage: "",
                reviews: "",
                productImage: "",
                product_id: 0,
                cart: [],
                review: "",
                Category: "images/category/",
                PathProdcuctImage: "images/products/",
                baseImageUrl: "",
                baseUrl: "",
                qty: 1,
                rate: "0",
                local: "en",
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
            mounted() {


                this.local = this.$i18n.locale;
                var baseUrl = window.location.protocol + '//' + window.location.host + '/';
                this.baseImageUrl = baseUrl;
                this.baseUrl = baseUrl;
                this.categoryImage = this.baseImageUrl + this.Category;

                this.productImage = this.baseImageUrl + this.PathProdcuctImage;


                this.FetchProducts();
                this.fetchCategories();
                this.FetchProduct(1);
                this.GetMyCart();

            },
            methods: {

                SubmitReview() {
                    this.addReview(this.review, this.rate, this.product_id);
   

                },

                addReview(review, count, product_id) {
                    const data = localStorage.getItem('token');
                    axios.post('/api/device/review', {
                            "product_id": product_id,
                            "review": review,
                            "count": count
                        }, {
                            headers: {
                                'Authorization': 'Bearer  ' + data
                            }
                        }).then(
                            response => {

                                console.log(response.data);
                                if (response.data.status == "success") {
                                    this.FetchProduct(1)
                                    Swal.fire({

                                        position: 'top-end',
                                        icon: 'success',
                                        title: 'Review Added',
                                        showConfirmButton: false,
                                        timer: 1500
                                    })


                                    location.reload();
                                }
                            })
                        .catch(error => {

                            Swal.fire({

                                icon: 'error',
                                title: 'Login First',
                                showConfirmButton: false,
                                timer: 1500
                            })

                            console.error(error);
                        });


                },



                addToCart(product_id, qty) {
                    const data = localStorage.getItem('token');

                    axios.post('/api/device/mycart', {
                            "product_id": product_id,
                            "qty": qty
                        }, {
                            headers: {
                                'Authorization': 'Bearer  ' + data
                            }
                        }).then(
                            response => {

                                console.log(response.data);
                                if (response.data.status == "success") {
                                    Swal.fire({

                                        position: 'top-end',
                                        icon: 'success',
                                        title: 'Product Addes',
                                        showConfirmButton: false,
                                        timer: 1500
                                    })
                                }
                            })
                        .catch(error => {

                            Swal.fire({

                                icon: 'error',
                                title: 'Login First',
                                showConfirmButton: false,
                                timer: 1500
                            })

                            console.error(error);
                        });


                },





                changeMessage() {
                    this.message = this.inputText;
                    this.inputText = '';
                },

                increase() {
                    this.qty = this.qty + 1;

                },

                decrese() {
                    if (this.qty > 1) {
                        this.qty = this.qty - 1;
                    }


                },




                FetchProduct(product_id) {
                    var url = window.location.href;
                    var productId = url.split("/").pop();



                    axios.get('/api/device/product/' + productId).then(
                            response => {

                                this.product = response.data.product;
                                this.product_id = response.data.product.id;
                                this.reviews = response.data.reviews;
                                this.overallreview = response.data.total_review;
                                console.log(response.data)
                            })
                        .catch(error => {
                            console.error(error);
                        });
                },


                GetMyCart() {
 

                    const data = localStorage.getItem('token');

                    axios.get('/api/device/mycart/' ,  {
                            headers: {
                                'Authorization': 'Bearer  ' + data
                            }
                        }).then(
                            response => {

                              this.cart = response.data.cart;
       
                                console.log(response.data)
                            })
                        .catch(error => {
                            console.error(error);
                        });
                },



                FetchProducts() {

                    axios.get('/api/device/products?SortField=id&SortType=desc&search=&limit=8&page=1').then(
                            response => {

                                this.products = response.data.products;
                            })
                        .catch(error => {
                            console.error(error);
                        });
                },


                fetchCategories() {



                    axios.get('/api/device/category?SortField=id&SortType=desc&search=&limit=1000&page=1').then(
                            response => {

                                this.categories = response.data.categories;
                            })
                        .catch(error => {
                            console.error(error);
                        });
                },
            }
        });
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
