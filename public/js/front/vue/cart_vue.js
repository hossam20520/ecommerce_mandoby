


new Vue({
    el: '#app',
  
    data: {
        message:"ddddd",
        local: "en",
        cart: [],
        productImage: "",
        categoryImage: "",
        baseUrl: "",
        qty: 1,
        
    },
    mounted() {

        // this.local = this.$i18n.locale;
        // var baseUrl = window.location.protocol + '//' + window.location.host + '/';
        // this.categoryImage = baseUrl + "images/category/";
        // this.productImage = baseUrl + "images/products/";
        // this.baseUrl = baseUrl;
        // this.setLanguage();
        // this.GetMyCart();
     
    },
    methods: {
        deleteCartt(product_id){
            // {{url}}/api/v1/device/favourit/12


            const data = localStorage.getItem('token');

            axios.post('/api/v1/device/cart/delete' , {
                "product_id": product_id,
             
            }, {
                    headers: {
                        'Authorization': 'Bearer  ' + data
                    }
                }).then(
                    response => {
                 
                        if ( response.status == 200  ) {
                            Swal.fire({

                                position: 'top-end',
                                icon: 'success',
                                title: 'تم ازالة المنتج  من السلة',
                                showConfirmButton: false,
                                timer: 1500
                            })
                        }
                    })
                .catch(error => {
        if(response.data.status == "401"  ){
            Swal.fire({

                position: 'top-end',
                icon: 'success',
                title: '',
                showConfirmButton: false,
                timer: 1500
            })
        }else{
            Swal.fire({

                icon: 'error',
                title: 'Login First',
                showConfirmButton: false,
                timer: 1500
            })
        }
                  

                    console.error(error);
                });




        },


        deleteWishlist(id){
            // {{url}}/api/v1/device/favourit/12


            const data = localStorage.getItem('token');

            axios.delete('/api/v1/device/favourit/'+id , {
                    headers: {
                        'Authorization': 'Bearer  ' + data
                    }
                }).then(
                    response => {
                 
                        if ( response.status == 200  ) {
                            Swal.fire({

                                position: 'top-end',
                                icon: 'success',
                                title: 'تم ازالة المنتج  من المفضلة',
                                showConfirmButton: false,
                                timer: 1500
                            })
                        }
                    })
                .catch(error => {
        if(response.data.status == "401"  ){
            Swal.fire({

                position: 'top-end',
                icon: 'success',
                title: '',
                showConfirmButton: false,
                timer: 1500
            })
        }else{
            Swal.fire({

                icon: 'error',
                title: 'Login First',
                showConfirmButton: false,
                timer: 1500
            })
        }
                  

                    console.error(error);
                });




        },


        increase(){
            this.qty = this.qty +1;
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
                 
                        if ( response.status == 200  ) {
                            Swal.fire({

                                position: 'top-end',
                                icon: 'success',
                                title: 'تم اضافة المنتج للمفضلة',
                                showConfirmButton: false,
                                timer: 1500
                            })
                        }
                    })
                .catch(error => {
        if(response.data.status == "401"  ){
            Swal.fire({

                position: 'top-end',
                icon: 'success',
                title: 'المنتج موجود بالفعل',
                showConfirmButton: false,
                timer: 1500
            })
        }else{
            Swal.fire({

                icon: 'error',
                title: 'Login First',
                showConfirmButton: false,
                timer: 1500
            })
        }
                  

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
                        if (response.status == 200 ) {
                            Swal.fire({

                                position: 'top-end',
                                icon: 'success',
                                title: 'تم اضافة المنتج للسلة',
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
 
        // GetMyCart() {
 
        //     const data = localStorage.getItem('token');
        
        //     axios.get('/api/device/mycart/' ,  {
        //             headers: {
        //                 'Authorization': 'Bearer  ' + data
        //             }
        //         }).then(
        //             response => {
        
        //               this.cart = response.data.cart;
        
        //                 console.log(response.data)
        //             })
        //         .catch(error => {
        //             console.error(error);
        //         });
        // },
    }
});