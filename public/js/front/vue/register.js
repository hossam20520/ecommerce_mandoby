 

new Vue({
    el: '#app',
 
    data: {
        local: "en",
        cart: [],
        productImage: "",
        categoryImage: "",
        baseUrl: "",

        firstname:"",
        lastname:"",
        email:"",
        phone:"",
        password:"",

       
    },
    mounted() {

    
     
    },
    methods: {
 
 

        
        register(){
        const data = localStorage.getItem('token');

        axios.post('/api/device/auth/register', {
                "firstname": this.firstname,
                "lastname": this.lastname,
                "email": this.email,
                "phone": this.phone,
                "password": this.password,
                "type":"customer"

             
            }, {
                headers: {
                    'Authorization': 'Bearer  ' + data
                }
            }).then(
                response => {
                    console.log(response.data.token);
                    localStorage.setItem('isLogged', true);
                    localStorage.setItem('token', response.data.token);
                    
  
                    
                        localStorage.setItem('user_id', response.data.user.id);
                        localStorage.setItem('image', response.data.user.avatar);
                        const fistname = response.data.user.firstname;
                        const lastname = response.data.user.lastname;
                        const name = fistname + " " +lastname;
                        localStorage.setItem('name', name);
                        localStorage.setItem('role', response.data.role);
                        
                        
          
                
                    Swal.fire({
                        position: 'top-end',
                        icon: 'success',
                        title: 'Success Register',
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
                    title: 'Phone Or Email Used Before',
                    showConfirmButton: false,
                    timer: 1500
                })

                console.error(error);
            });


      } 




    }
});


