<div id="navvue"> 
 
<header class="header_area sticky-header" :dir="dir">
    <div class="main_menu">
      <nav class="navbar navbar-expand-lg navbar-light main_box">
        <div class="container">
          <!-- Brand and toggle get grouped for better mobile display -->
          <a class="navbar-brand logo_h" href="index.html"><img src="{{ asset('images/LOGOpNG.png') }}" alt=""></a>
          <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent"
           aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span class="icon-bar"></span>
            <span class="icon-bar"></span>
            <span class="icon-bar"></span>
          </button>
          <!-- Collect the nav links, forms, and other content for toggling -->
          <div class="collapse navbar-collapse offset" id="navbarSupportedContent">
            <ul class="nav navbar-nav menu_nav ml-auto">
              <li class="nav-item active"><a class="nav-link"   href="/" v-if="local == 'en'"> Home</a></li>
              <li class="nav-item  "><a class="nav-link"   href="/"  v-if="local == 'ar'"> الرئيسية</a></li>

              <li class="nav-item "><a class="nav-link" href="/shop" v-if="local == 'en'">Shop</a></li>
              <li class="nav-item "><a class="nav-link" href="/shop" v-if="local == 'ar'">المتجر</a></li>

              <li class="nav-item "><a class="nav-link" href="/profile" v-if="local == 'en'">Profile</a></li>
              <li class="nav-item "><a class="nav-link" href="/profile" v-if="local == 'ar'">الملف الشخصي</a></li>

              
              <li class="nav-item"><a class="nav-link" href="/contact" v-if="local == 'en'">Contact</a></li>
              <li class="nav-item"><a class="nav-link" href="/contact" v-if="local == 'ar'">اتصل بنا</a></li>
             
              <li v-if="!isLogged" class="nav-item"><a class="nav-link" href="/auth/login" v-if="local == 'en'  ">Login</a></li>
              <li v-if="!isLogged"  class="nav-item"><a class="nav-link" href="/auth/login" v-if="local == 'ar'    "> تسجيل الدخول</a></li>

              {{-- <li class="nav-item"><a class="nav-link" href="/contact"> Language </a></li> --}}

              <li class="nav-item submenu dropdown">
								<a href="#" v-if="local == 'en'" class="nav-link dropdown-toggle" data-toggle="dropdown" role="button" aria-haspopup="true"
								 aria-expanded="false">Language</a>

                 <a href="#" v-if="local == 'ar'" class="nav-link dropdown-toggle" data-toggle="dropdown" role="button" aria-haspopup="true"
								 aria-expanded="false">اللغة</a>
								<ul class="dropdown-menu">
									<li class="nav-item"><a class="nav-link"  v-on:click="setArabic">Arabic</a></li>
									<li class="nav-item"><a class="nav-link"  v-on:click="setEnglish">English</a></li>
							 
								</ul>
							</li>

           
              <li class="nav-item"><a class="nav-link" href="/contact">   </a></li>
            </ul>
            <ul class="nav navbar-nav navbar-right">
              <li class="nav-item"><a href="/cart" class="cart"><span class="ti-bag"></span></a></li>
              

              <li class="nav-item">
                <a href="/messages" class="cart">
                  <span>
                    <i style="font-size: 20px;" class="fas fa-comments"></i>
                  </span>
                  {{-- <span class="notification-badge"> </span> --}}
                </a>
              </li>
              <li class="nav-item">
                <button class="search"><span class="lnr lnr-magnifier" id="search"></span></button>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </div>
    <div class="search_input" id="search_input_box">
      <div class="container">
        <form class="d-flex justify-content-between">
          <input type="text" class="form-control" id="search_input" placeholder="Search Here">
          <button type="submit" class="btn"></button>
          <span class="lnr lnr-cross" id="close_search" title="Close Search"></span>
        </form>
      </div>
    </div>
  </header>

</div>







