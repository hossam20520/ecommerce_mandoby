// const i18nc = new VueI18n({
//   locale: "en", // Set the default locale
//   messages: {
//     en: {
//         Home: "Home",
//       Items: "Items",
//     },
//     ar: {
//         Home: "الرئيسية",
//       Items: "Items",
//     },
//   },
// });

new Vue({
  el: "#navvue",
//   i18nc,
  data: {
    dir:"rtl",
    mmm:"ddd",
    local: "en",
    baseUrl: "",
    qty: 1,
    isLogged:false,
  },
  mounted() {
    const local = localStorage.getItem("local");
    const isLogged = localStorage.getItem("isLogged");
    this.isLogged = isLogged;

    // console.log(local)
 
    if (local !== null) {
       
        if(local == "en"){
            this.local = "en";
            this.dir = "ltr";
        }else{
            this.local = "ar";
            this.dir = "rtl";
        }
    } else {
        this.local = local;
        this.local = "en";
        this.dir = "ltr";

  
   
    }

    // this.local = this.$i18n.locale;
    var baseUrl = window.location.protocol + "//" + window.location.host + "/";
 
    this.baseUrl = baseUrl;
  },
  methods: {
    setArabic(){
         localStorage.setItem("local" , 'ar');
         this.local = 'ar';
         this.dir = "rtl";
         window.location.reload();
        
    },
    setEnglish(){
        localStorage.setItem("local" , 'en');
        this.local = 'en';
        this.dir = "ltr";
        window.location.reload();
    }


  },
});
Vue.use(VueI18n);