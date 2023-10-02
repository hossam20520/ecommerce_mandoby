@extends('front.base.layout')

@section('content')
<link href="https://coopxl.com/assets/img/faviconn.png" rel="icon">
<link href="https://coopxl.com/assets/img/apple-touch-icon.png" rel="apple-touch-icon">

<link rel="preconnect" href="https://fonts.googleapis.com">
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
<link href="https://fonts.googleapis.com/css2?family=Open+Sans:ital,wght@0,300;0,400;0,500;0,600;0,700;1,300;1,400;1,500;1,600;1,700&family=Poppins:ital,wght@0,300;0,400;0,500;0,600;0,700;1,300;1,400;1,500;1,600;1,700&family=Source+Sans+Pro:ital,wght@0,300;0,400;0,600;0,700;1,300;1,400;1,600;1,700&display=swap" rel="stylesheet">

<link href="https://coopxl.com/assets/vendor/bootstrap/css/bootstrap.min.css" rel="stylesheet">
<link href="https://coopxl.com/assets/vendor/bootstrap-icons/bootstrap-icons.css" rel="stylesheet">
<link href="https://coopxl.com/assets/vendor/aos/aos.css" rel="stylesheet">
<link href="https://coopxl.com/assets/vendor/glightbox/css/glightbox.min.css" rel="stylesheet">
<link href="https://coopxl.com/assets/vendor/swiper/swiper-bundle.min.css" rel="stylesheet">
<link href="https://coopxl.com/assets/css/variables.css" rel="stylesheet">







<link href="https://coopxl.com/assets/css/main.min.css" rel="stylesheet">

<script src="https://www.gstatic.com/firebasejs/8.7.0/firebase-app.js"></script>
<script src="https://www.gstatic.com/firebasejs/8.7.0/firebase-firestore.js"></script>
<section class="banner-area organic-breadcrumb">
  <div class="container">
 
  </div>
</section>


{{-- <script src="{{ asset('js/front/vue/vue.global.min.js') }}"></script> --}}
<div id="appp"> 

 
  <section  class=" "  v-show="showChat"  >
    <div class="container py-5">
        
      <div class="row d-flex justify-content-center">
        <div class="col-md-8">
  
          <div class="card">
            <div class="card-header d-flex justify-content-between align-items-center p-3"
              style="border-top: 4px solid blue;">
              <h5 class="mb-0">Messages</h5>
        
            </div>
            <div class="card-body scroll"  data-mdb-perfect-scrollbar="true" style="position: relative; height: 400px" ref="chatMessages" >

     


             <div v-for="item in users" :key="item.id">
             
              
              
       






               <div    >
              <div class="d-flex justify-content-between">
                
                {{-- <p class="small mb-1 text-muted">@{{ message.time }}</p> --}}
              </div>
             
              <div  class="d-flex flex-row justify-content-start">
                <img  v-on:click="openChat(item.id)"   :src="baseImageUser + item.avatar"
                  alt="avatar 1" style="width: 45px; height: 100%;">
                  {{-- <span style="
                  width: 10px;
                  background-color: red;
                  height: 10px;
                  border-radius: 50%;
              ">  </span> --}}
               

           
                       {{-- <p  class="small p-2 ms-3 mb-3 rounded-3" style="background-color: #f5f6f7;" v-if="load">
                        @{{ message.text }}
                       </p> --}}

                   <p class="small p-2 ms-3 mb-3 rounded-1" style="background-color: #f5f6f7;" > @{{ item.firstname }}   @{{ item.lastname }} </span>
                   </p>

                </div>
              </div>
               </div>

       
               
             </div>

  
            </div>
           
          </div>
  
        </div>
      </div>
  
    </div>
  </section>
</div>
 


 

  @endsection
  

  @push('scripts')
  {{-- <script src="{{ asset('js/front/vue/vue.global.min.js') }}"></script> --}}
<script src="{{ asset('js/front/vue/messages.js') }}"></script>
@endpush
