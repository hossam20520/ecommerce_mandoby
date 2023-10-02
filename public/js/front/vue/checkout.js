 

new Vue({
    el: '#app',
  
    data: {
        local: "ar",
        cart: [],
        address:"",
        phone:"",
        city:"",
        country:"Egypt",
        productImage: "",
        categoryImage: "",
        baseUrl: "",
        type:"Thwani",
        email:"",
        qty: 1,
    },
    mounted() {

   
        this.GetMyCart();
     
    },
    methods: {
   choosePayment(){
    
    const cash = document.getElementById('f-option5').value

    const option = document.getElementById('f-option6').value
    

      if(this.type == "Cash"){
        this.OrderConfirm();
      }
    
      if(this.type == "Thwani"){
        this.ThawaniPayment();
      }
 
   },
    
 
        // 

        ThawaniPayment() {

            const token = localStorage.getItem('token');
            axios.post('/api/v1/device/order/thawani', {
                    "address": this.address,
                    "phone": this.phone,
                    "country": this.country,
                    "city": this.city,
                    "email": this.email,
                } , {
                    headers: {
                        'Authorization': 'Bearer  ' + token
                    }
                }).then(
                    response => {
                        // localStorage.getItem('isLogged', true);

                        // console.log(response.data.url)
                         window.location = response.data.url;
                    
                        // localStorage.setItem('token', response.data.data.token);
    
                       
                            // Swal.fire({
                            //     position: 'top-end',
                            //     icon: 'success',
                            //     title: 'Your Order Success',
                            //     showConfirmButton: false,
                            //     timer: 1500
                            // })
                        
                            // setTimeout(() => {
                            //     // Your script logic here
                            //     window.location = "/"
                            //   }, 3000); 
                
                    })
                .catch(error => {
                    // Swal.fire({

                    //     icon: 'error',
                    //     title: 'Something Is Wrong',
                    //     showConfirmButton: false,
                    //     timer: 1500
                    // })

                    console.error(error);
                });


        },


        OrderConfirm() {

            const token = localStorage.getItem('token');
            console.log(token)
            axios.post('/api/device/order/confirm', {
                    "address": this.address,
                    "phone": this.phone,
                    "country": this.country,
                    "city": this.city,
                } , {
                    headers: {
                        'Authorization': 'Bearer  ' + token
                    }
                }).then(
                    response => {
                        // localStorage.getItem('isLogged', true);

                    
                        // localStorage.setItem('token', response.data.data.token);
    
                       
                            Swal.fire({
                                position: 'top-end',
                                icon: 'success',
                                title: 'Your Order Success',
                                showConfirmButton: false,
                                timer: 1500
                            })
                        
                            setTimeout(() => {
                                // Your script logic here
                                window.location = "/"
                              }, 3000); 
                
                    })
                .catch(error => {
                    Swal.fire({

                        icon: 'error',
                        title: 'Something Is Wrong',
                        showConfirmButton: false,
                        timer: 1500
                    })

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
    }
});


