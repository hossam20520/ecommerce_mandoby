import "vue-select/dist/vue-select.css";
// import Autocomplete from '@trevoreyre/autocomplete-vue';
import "@trevoreyre/autocomplete-vue/dist/style.css";

import Vue from "vue";

import {
    extend,
    localize,
    ValidationObserver,
    ValidationProvider,
} from "vee-validate";
import * as rules from "vee-validate/dist/rules";
import VueCookies from "vue-cookies";
import vSelect from "vue-select";
// import VueGoogleMaps from "gmap-vue";
import * as VueGoogleMaps from "vue2-google-maps";

import App from "./App.vue";
import Auth from "./auth/index.js";
import Breadcumb from "./components/breadcumb";
import { i18n } from "./plugins/i18n";
import StockyKit from "./plugins/stocky.kit";
import router from "./router";
import store from "./store";

window.auth = new Auth();

localize({
  en: {
    messages: {
      required: 'This field is required',
      required_if: 'This field is required',
      regex: 'This field must be a valid',
      mimes: `This field must have a valid file type.`,
      size: (_, { size }) => `This field size must be less than ${size}.`,
      min: 'This field must have no less than {length} characters',
      max: (_, { length }) => `This field must have no more than ${length} characters`
    }
  },
});
// Install VeeValidate rules and localization
Object.keys(rules).forEach(rule => {
  extend(rule, rules[rule]);
});

// Register it globally
Vue.component("ValidationObserver", ValidationObserver);
Vue.component('ValidationProvider', ValidationProvider);

Vue.use(StockyKit);

Vue.use(VueCookies);

var VueCookie = require('vue-cookie');
Vue.use(VueCookie);

window.axios = require('axios');
window.axios.defaults.baseURL = '/api/';

window.axios.defaults.withCredentials = true;
window.axios.defaults.headers.common['X-Requested-With'] = 'XMLHttpRequest';

axios.interceptors.response.use((response) => {

  return response;
}, (error) => {
  if (error.response && error.response.data) {
    if (error.response.status === 401) {
      window.location.href='/login';
    }

    if (error.response.status === 404) {
      router.push({ name: 'NotFound' });
    }
    if (error.response.status === 403) {
      router.push({ name: 'not_authorize' });
    }

    return Promise.reject(error.response.data);
  }
  return Promise.reject(error.message);
});

Vue.component('v-select', vSelect)
Vue.use(VueGoogleMaps, {
  load: {
    key: "AIzaSyDH03s8Su2fbRDr3M03PWY7-TTtGB6xCpc",
    libraries: 'places',
  },
  
  installComponents: true,
});
// Vue.use(Autocomplete);

window.Fire = new Vue();

Vue.component("breadcumb", Breadcumb);

Vue.config.productionTip = true;
Vue.config.silent = true;
Vue.config.devtools = false;



new Vue({
  store,
  router,
  VueCookie,
  i18n,
  render: h => h(App),
}).$mount("#app");
