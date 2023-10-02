 
const i18n = new VueI18n({
    locale: 'ar', // Set the default locale
    messages: {
        en: {
            AddaReview:'AddaReview',
            Reviews:'Reviews',
            productDetail:'Product Details',
            hello: 'Hello',
            Items: 'Items',
            Overall:'Overall',
            Description:'Description',
            AddtoCart:'Add to Cart',
            Quantity:'Quantity',
        },
        ar: {
            AddaReview:'اضافة تقييم',
            Quantity:'الكمية',
            AddtoCart:'اضافة للسلة',
            Description:'الشرح',
            Overall:'اجمالي التقييم',
            Reviews:'التقييم',
            productDetail:'تفاصيل المنتج',
            hello: 'Bonjour',
            Items: 'Items',
        },
    },
});

new Vue({
    el: '#app',
    i18n,
    data: {
        local: "en",
        categories: [],
        products: [],
        productImage: "",
        categoryImage: "",
        overallreview: "",
        baseUrl: "",
        product: "",
        rate: "0",
        qty: 1,
        review: "",
        reviews: "",
    },
    mounted() {

     
        var baseUrl = window.location.protocol + '//' + window.location.host + '/';
        this.categoryImage = baseUrl + "images/category/";
        this.productImage = baseUrl + "images/products/";
        this.baseUrl = baseUrl;

        this.setLanguage();
    
        this.FetchProduct(1);
    },
    methods: {
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


        FetchProduct(product_id) {
            var url = window.location.href;
            var productId = url.split("/").pop();



            axios.get('/api/device/product/' + productId).then(
                    response => {
                         console.log( response.data.product);
                        this.product = response.data.product;
                        this.product_id = response.data.product.id;
                        this.reviews = response.data.reviews;
                        this.overallreview = response.data.total_review;
                        console.log( "ddddddddddddddddddddddddddddddddd")
                        console.log(response.data.product)
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

        increase() {
            this.qty = this.qty + 1;

        },

        decrese() {
            if (this.qty > 1) {
                this.qty = this.qty - 1;
            }


        },

        

     
    }
});
 