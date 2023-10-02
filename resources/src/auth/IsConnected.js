import Vue from "vue";
import VueCookies from "vue-cookies";
Vue.use(VueCookies);

export default (to, from, next) => {
  let accessToken = VueCookies.isKey("Stocky_token");
  console.log(accessToken)
  if (accessToken) {
    
     next("/app/dashboard");

  } else {
    return next();
  }
};
