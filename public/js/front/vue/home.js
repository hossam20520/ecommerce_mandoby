const i18n = new VueI18n({
    locale: 'en', // Set the default locale
    messages: {
        en: {
            shops:'Shops',
            FreeDelivery:'Free Delivery',
            Return:'Return Policy',
            freeship:'Free Shipping on all order',
            suport:'24/7 Support',
            payment:'Secure Payment',
            freePa:'Free Shipping on all order',


            bestsellers:'Best Sellers',
            latest:'Latest Products',
            Home:'Home',
            hello: 'Hello',
            Items: 'Items',
            shop:'Shop page',
            Home:'Home',
          
            cart:'add to bag',
            Wishlist:'Wishlist',
            viewMore:'View More',
        },
        ar: {
            shops:'متاجر',
            latest:'المضافة حديثا',
            FreeDelivery:'توصيل مجاني',
            Return:'سياسة العائدات',
 
            suport:'24/7 دعم',
 
            freePa:'شحن مجاني لجميع الطلبات',

            payment:'دفع امن',
            bestsellers:'الاكثر مبيعا',
            latest:'المضافة حديثا',
            Home:'الرئيسية',
            hello: 'Bonjour',
            Items: 'Items',
            shop:'المتجر',
            Home:'الرئيسية',
     
            cart:'اضافة للسلة',
            Wishlist:'المفضلة',
            viewMore:'تفاصيل',
        },
    },
});

new Vue({
    el: '#app',
    i18n,
    data: {
        local: "ar",
        categories: [],
        products: [],
        productImage: "",
        shopImage:"",
        categoryImage: "",
        shops:[],
        baseUrl: "",
        qty: 1,
    },
    mounted() {
        
        var baseUrl = window.location.protocol + '//' + window.location.host + '/';
        this.categoryImage = baseUrl + "images/category/";
        this.productImage = baseUrl + "images/products/";
        this.shopImage = baseUrl + "images/shops/";
        this.baseUrl = baseUrl;

       this.setLanguage();
        this.FetchProducts();
        this.fetchCategories();
        this.FetchShops();
    },
    methods: {


        initCarousel() {
            const owl = $('.owl-carousel');
            owl.owlCarousel({
              loop: true,
              margin: 10,
              nav: true,
              responsive: {
                0: {
                  items: 1,
                },
                600: {
                  items: 3,
                },
                1000: {
                  items: 5,
                },
              },
            });
          },
        
        beforeDestroy() {
          const owl = $('.owl-carousel');
          owl.trigger('destroy.owl.carousel');
          owl.removeClass('owl-carousel owl-loaded');
        },

        goToproduct(id){
        window.location = "/product/"+id
        },

        FetchShops() {
            axios.get('/api/device/shops?SortField=id&SortType=desc&search=&limit=8&page=1').then(
                    response => {

                        this.shops = response.data.shops;
                    })
                .catch(error => {
                    console.error(error);
                });
        },
goToshop(id){
    
    // store
    window.location = "/store?vendor="+id
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


        increase() {
            this.qty = this.qty + 1;

        },

        decrese() {
            if (this.qty > 1) {
                this.qty = this.qty - 1;
            }


        },


        getcartNum(){
            const data = localStorage.getItem('token');

            axios.post('/api/device/num' , {
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
                                title: 'Product Added',
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

        AddToWishlist(product_id ) {
            const data = localStorage.getItem('token');

            axios.post('/api/device/favourit', {
                    "product_id": product_id,
                 
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
                                title: 'Product Added',
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


        setLanguage(){
            const local = localStorage.getItem("local");
            // console.log(local)
         
            if (local !== null) {
               
                if(local == "en"){
                    this.local = "en";
                    this.dir = "ltr";
                    this.$i18n.locale = "en"
                }else{
                    this.local = "ar";
                    this.dir = "rtl";
                    this.$i18n.locale = "ar"
                }
            } else {
                this.$i18n.locale = "en"
                this.local = local;
                this.local = "en";
                this.dir = "ltr";
        
          
           
            }
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