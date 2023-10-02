 
new Vue({
    el: '#app',
 
    data: {
        dir:"ltr",
        local: "en",
        categories: [],
        products: [],
        productImage: "",
        categoryImage: "",
        vendor_user: "",
        baseUrl: "",
        qty: 1,
        currentPage: 1,
        totalPages: 1,
        pageSize: 12,
        category_id:0,
        items: [], 
        userImage:"",
        user:"",
        shop:"",
        vendor:false,
        vendor_id:"",
        productsVendor:[],
        firstname:"",
        lastname:"",
        email:"",
        phone:"",
   
    },
    mounted() {
        this.FetchProfile();
    },
    methods: {
 
        logout(){
            localStorage.clear();
            window.location = "/"


        },
  

        FetchProfile(){
            const data = localStorage.getItem('token');
            axios.get('/api/v1/device/profile'  , {
                    headers: {
                        'Authorization': 'Bearer  ' + data
                    }
                }).then(
                    response => {
                    // console.log(response.data.users.firstname);

                    this.firstname = response.data.users.firstname;
                    this.lastname = response.data.users.lastname;
                    this.email = response.data.users.email;
                    this.phone = response.data.users.phone;
                        
                    })
                .catch(error => {
       

                    console.error(error);
                });




        },

      EditProfile(){
            const data = localStorage.getItem('token');
            axios.put('/api/v1/device/profile/edit' , {
                "firstname":this.firstname,
                "lastname":this.lastname,
                "email":this.email,
                "phone":this.phone,
                "code":"20"
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
                                title: 'تم تحديث الملف الشخصي',
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


        
  
    }
});