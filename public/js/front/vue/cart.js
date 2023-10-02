 
new Vue({
    el: '#app',
 
    data: {
      
        cart: [],
        productImage: "",
        categoryImage: "",
 
        qty: 1,
    },
    mounted() {

  
        // this.GetMyCart();
     
    },
    methods: {
 
   
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
    }
});


