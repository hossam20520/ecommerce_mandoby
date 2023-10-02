 

new Vue({
    el: '#app',
  
    data: {
        local: "en",
        categories: [],
        products: [],
        latestProducts: [],
        productImage: "",
        categoryImage: "",
        baseUrl: "",
        qty: 1,
        currentPage: 1,
        totalPages: 1,
        to:"",
        pageSize: 12,
        category_id:0,
        items: [], 
        from:0,
        brand_id:0,
        brands:[],
        to:1000000,
    },
    mounted() {
 
 
        
  
        this.fetchCategories();
        this.FetchProductsLatest();
        this.FetchBrands();
    },
    methods: {
        getBrand(id){
         this.brand_id = brand_id;

         this.FetchProducts("0")


        },
        filter(){
         const to = document.getElementById('to').value
         const from = document.getElementById('from').value
         this.from = from;
         this.to = to;
         this.FetchProducts("0")
         
        
      },
        FetchProductsLatest() {
           
            axios.get('/api/device/products?SortField=id&SortType=desc&search=&limit=9&page=1').then(
                    response => {

                        this.latestProducts = response.data.products;
                       
                    })
                .catch(error => {
                    console.error(error);
                });
        },


        FetchBrands() {
            axios.get('/api/device/brands?SortField=id&SortType=desc&search=&limit=9&page=1').then(
                    response => {

                        this.brands = response.data.brands;
                    })
                .catch(error => {
                    console.error(error);
                });
        },

 

        goToPage(pageNumber) {
            // Update the current page number
            this.currentPage = pageNumber;
            // Make an API request to fetch data for the selected page
            // Replace <API_URL> with the actual URL of your API
            axios.get('/api/device/category/products?category='+this.category_id+'&SortField=id&SortType=desc&search=&limit=8&page=' + pageNumber)
              .then(response => {
                this.products = response.data.products;
                this.totalPages = response.data.totalRows;
              })
              .catch(error => {
                console.error(error);
              });
          },
          nextPage() {
            if (this.currentPage < this.totalPages) {
              this.goToPage(this.currentPage + 1);
            }
          },
          prevPage() {
            if (this.currentPage > 1) {
              this.goToPage(this.currentPage - 1);
            }
          },

        FetchProductByCatId(category_id){
      
             this.category_id = category_id;
            this.FetchProducts(category_id);
         
        },
           goToproduct(id){
            window.location = "/product/"+id
            },


            
            
        FetchProducts(category_id) {

            axios.get('/api/device/products?category='+category_id+'&SortField=id&start='+this.from+'&end='+this.to+'&SortType=desc&search=&limit=8&page=1').then(
                    response => {

                        this.products = response.data.products;
                        // this.totalPages = response.data.totalRows;
                      
                        this.totalPages = Math.ceil(response.data.products.length / this.pageSize);
                    })
                .catch(error => {
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