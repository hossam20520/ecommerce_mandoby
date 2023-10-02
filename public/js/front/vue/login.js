 


new Vue({
    el: '#app',
 
 
    data: {
        phone: "",
        email: "",
        password: "",
        message: 'Hello, Vue.js 2!',
        inputText: '',
        baseImageUrl: "",
        local: "en",

    },
    mounted() {

 

    },
    methods: {

        loginbyEmail(){

 
            axios.post('/login', {
                "email": this.email,
                "password": this.password
            }).then(
                response => {
                      this.login(this.email , this.password);
                        // Swal.fire({
                        //     position: 'top-end',
                        //     icon: 'success',
                        //     title: 'Success Login',
                        //     showConfirmButton: false,
                        //     timer: 1500
                        // })
                    
                        // setTimeout(() => {
                        //     // Your script logic here
                        //     window.location = "/"
                        //   }, 3000); 
            
                })
            .catch(error => {
                Swal.fire({

                    icon: 'error',
                    title: 'Password Is Wrong',
                    showConfirmButton: false,
                    timer: 1500
                })

                console.error(error);
            });


        },





        login(email , password) { 
            axios.post('/api/device/auth/login/web', {
                    "email": email,
                    "password": password
                }).then(
                    response => {
                        localStorage.setItem('isLogged', true);
                        localStorage.setItem('token', response.data.data.token);
                        localStorage.setItem('user_id', response.data.data.user.id);
                        localStorage.setItem('image', response.data.data.user.avatar);
                        const fistname = response.data.data.user.firstname;
                        const lastname = response.data.data.user.lastname;
                        const name = fistname + " " +lastname;
                        localStorage.setItem('name', name);
                        localStorage.setItem('role', response.data.data.role);
                       
                            Swal.fire({
                                position: 'top-end',
                                icon: 'success',
                                title: 'Success Login',
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
                        title: 'Password Is Wrong',
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


    }
});
 