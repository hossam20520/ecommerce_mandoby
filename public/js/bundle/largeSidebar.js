(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["largeSidebar"],{

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/src/containers/layouts/common/footer.vue?vue&type=script&lang=js&":
/*!*********************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/src/containers/layouts/common/footer.vue?vue&type=script&lang=js& ***!
  \*********************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var vuex__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vuex */ "./node_modules/vuex/dist/vuex.esm.js");
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { _defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//

/* harmony default export */ __webpack_exports__["default"] = ({
  data: function data() {
    return {};
  },
  computed: _objectSpread({}, Object(vuex__WEBPACK_IMPORTED_MODULE_0__["mapGetters"])(["currentUser"])),
  methods: {}
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/src/containers/layouts/largeSidebar/Sidebar.vue?vue&type=script&lang=js&":
/*!****************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/src/containers/layouts/largeSidebar/Sidebar.vue?vue&type=script&lang=js& ***!
  \****************************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _TopNav__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./TopNav */ "./resources/src/containers/layouts/largeSidebar/TopNav.vue");
/* harmony import */ var mobile_device_detect__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! mobile-device-detect */ "./node_modules/mobile-device-detect/dist/index.js");
/* harmony import */ var mobile_device_detect__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(mobile_device_detect__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var vuex__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! vuex */ "./node_modules/vuex/dist/vuex.esm.js");
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { _defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//



/* harmony default export */ __webpack_exports__["default"] = ({
  components: {
    Topnav: _TopNav__WEBPACK_IMPORTED_MODULE_0__["default"]
  },
  data: function data() {
    return {
      isDisplay: true,
      isMenuOver: false,
      isStyle: true,
      selectedParentMenu: "",
      isMobile: mobile_device_detect__WEBPACK_IMPORTED_MODULE_1__["isMobile"]
    };
  },
  mounted: function mounted() {
    this.toggleSelectedParentMenu();
    window.addEventListener("resize", this.handleWindowResize);
    document.addEventListener("click", this.returnSelectedParentMenu);
    this.handleWindowResize();
  },
  beforeDestroy: function beforeDestroy() {
    document.removeEventListener("click", this.returnSelectedParentMenu);
    window.removeEventListener("resize", this.handleWindowResize);
  },
  computed: _objectSpread({}, Object(vuex__WEBPACK_IMPORTED_MODULE_2__["mapGetters"])(["getSideBarToggleProperties", "currentUserPermissions", "CurrentType"])),
  methods: _objectSpread(_objectSpread({}, Object(vuex__WEBPACK_IMPORTED_MODULE_2__["mapActions"])(["changeSecondarySidebarProperties", "changeSecondarySidebarPropertiesViaMenuItem", "changeSecondarySidebarPropertiesViaOverlay", "changeSidebarProperties"])), {}, {
    handleWindowResize: function handleWindowResize() {
      if (window.innerWidth <= 1200) {
        if (this.getSideBarToggleProperties.isSideNavOpen) {
          this.changeSidebarProperties();
        }

        if (this.getSideBarToggleProperties.isSecondarySideNavOpen) {
          this.changeSecondarySidebarProperties();
        }
      } else {
        if (!this.getSideBarToggleProperties.isSideNavOpen) {
          this.changeSidebarProperties();
        }
      }
    },
    toggleSelectedParentMenu: function toggleSelectedParentMenu() {
      var currentParentUrl = this.$route.path.split("/").filter(function (x) {
        return x !== "";
      })[1];

      if (currentParentUrl !== undefined || currentParentUrl !== null) {
        this.selectedParentMenu = currentParentUrl.toLowerCase();
      } else {
        this.selectedParentMenu = "dashboard";
      }
    },
    toggleSubMenu: function toggleSubMenu(e) {
      var hasSubmenu = e.target.dataset.submenu;
      var parent = e.target.dataset.item;

      if (hasSubmenu) {
        this.selectedParentMenu = parent;
        this.changeSecondarySidebarPropertiesViaMenuItem(true);
      } else {
        this.selectedParentMenu = parent;
        this.changeSecondarySidebarPropertiesViaMenuItem(false);
      }
    },
    removeOverlay: function removeOverlay() {
      this.changeSecondarySidebarPropertiesViaOverlay();

      if (window.innerWidth <= 1200) {
        this.changeSidebarProperties();
      }

      this.toggleSelectedParentMenu();
    },
    returnSelectedParentMenu: function returnSelectedParentMenu() {
      if (!this.isMenuOver) {
        this.toggleSelectedParentMenu();
      }
    },
    toggleSidebarDropdwon: function toggleSidebarDropdwon(event) {
      var dropdownMenus = this.$el.querySelectorAll(".dropdown-sidemenu.open");
      event.currentTarget.classList.toggle("open");
      dropdownMenus.forEach(function (dropdown) {
        dropdown.classList.remove("open");
      });
    }
  })
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/src/containers/layouts/largeSidebar/TopNav.vue?vue&type=script&lang=js&":
/*!***************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/src/containers/layouts/largeSidebar/TopNav.vue?vue&type=script&lang=js& ***!
  \***************************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./../../../utils */ "./resources/src/utils/index.js");
/* harmony import */ var mobile_device_detect__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! mobile-device-detect */ "./node_modules/mobile-device-detect/dist/index.js");
/* harmony import */ var mobile_device_detect__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(mobile_device_detect__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var vuex__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! vuex */ "./node_modules/vuex/dist/vuex.esm.js");
/* harmony import */ var vue_clickaway__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! vue-clickaway */ "./node_modules/vue-clickaway/dist/vue-clickaway.common.js");
/* harmony import */ var vue_clickaway__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(vue_clickaway__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var vue_flag_icon__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! vue-flag-icon */ "./node_modules/vue-flag-icon/index.js");
var _objectSpread2;

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { _defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
 // import Sidebar from "./Sidebar";



 // import { setTimeout } from 'timers';


/* harmony default export */ __webpack_exports__["default"] = ({
  mixins: [vue_clickaway__WEBPACK_IMPORTED_MODULE_3__["mixin"]],
  components: {
    FlagIcon: vue_flag_icon__WEBPACK_IMPORTED_MODULE_4__["default"]
  },
  data: function data() {
    return {
      langs: ["en", "fr", "ar", "de", "es", "it", "Ind", "thai", "tr_ch", "sm_ch", "tur", "ru", "hn", "vn"],
      isDisplay: true,
      isStyle: true,
      isSearchOpen: false,
      isMouseOnMegaMenu: true,
      isMegaMenuOpen: false,
      is_Load: false // alerts:0,

    };
  },
  computed: _objectSpread({}, Object(vuex__WEBPACK_IMPORTED_MODULE_2__["mapGetters"])(["currentUser", "getSideBarToggleProperties", "currentUserPermissions", "notifs_alert"])),
  methods: _objectSpread(_objectSpread({}, Object(vuex__WEBPACK_IMPORTED_MODULE_2__["mapActions"])(["changeSecondarySidebarProperties", "changeSidebarProperties", "changeThemeMode", "logout"])), {}, (_objectSpread2 = {
    logoutUser: function logoutUser() {
      this.$store.dispatch("logout");
    },
    SetLocal: function SetLocal(locale) {
      this.$i18n.locale = locale;
      this.$store.dispatch("language/setLanguage", locale);
      Fire.$emit("ChangeLanguage");
    },
    handleFullScreen: function handleFullScreen() {
      _utils__WEBPACK_IMPORTED_MODULE_0__["default"].toggleFullScreen();
    }
  }, _defineProperty(_objectSpread2, "logoutUser", function logoutUser() {
    this.logout();
  }), _defineProperty(_objectSpread2, "closeMegaMenu", function closeMegaMenu() {
    this.isMegaMenuOpen = false;
  }), _defineProperty(_objectSpread2, "toggleMegaMenu", function toggleMegaMenu() {
    this.isMegaMenuOpen = !this.isMegaMenuOpen;
  }), _defineProperty(_objectSpread2, "toggleSearch", function toggleSearch() {
    this.isSearchOpen = !this.isSearchOpen;
  }), _defineProperty(_objectSpread2, "sideBarToggle", function sideBarToggle(el) {
    if (this.getSideBarToggleProperties.isSideNavOpen && this.getSideBarToggleProperties.isSecondarySideNavOpen && mobile_device_detect__WEBPACK_IMPORTED_MODULE_1__["isMobile"]) {
      this.changeSidebarProperties();
      this.changeSecondarySidebarProperties();
    } else if (this.getSideBarToggleProperties.isSideNavOpen && this.getSideBarToggleProperties.isSecondarySideNavOpen) {
      this.changeSecondarySidebarProperties();
    } else if (this.getSideBarToggleProperties.isSideNavOpen) {
      this.changeSidebarProperties();
    } else if (!this.getSideBarToggleProperties.isSideNavOpen && !this.getSideBarToggleProperties.isSecondarySideNavOpen && !this.getSideBarToggleProperties.isActiveSecondarySideNav) {
      this.changeSidebarProperties();
    } else if (!this.getSideBarToggleProperties.isSideNavOpen && !this.getSideBarToggleProperties.isSecondarySideNavOpen) {
      this.changeSidebarProperties();
      this.changeSecondarySidebarProperties();
    }
  }), _objectSpread2))
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/src/containers/layouts/largeSidebar/index.vue?vue&type=script&lang=js&":
/*!**************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/src/containers/layouts/largeSidebar/index.vue?vue&type=script&lang=js& ***!
  \**************************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Sidebar__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Sidebar */ "./resources/src/containers/layouts/largeSidebar/Sidebar.vue");
/* harmony import */ var _TopNav__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./TopNav */ "./resources/src/containers/layouts/largeSidebar/TopNav.vue");
/* harmony import */ var _common_footer__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../common/footer */ "./resources/src/containers/layouts/common/footer.vue");
/* harmony import */ var vuex__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! vuex */ "./node_modules/vuex/dist/vuex.esm.js");
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { _defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//




/* harmony default export */ __webpack_exports__["default"] = ({
  components: {
    Sidebar: _Sidebar__WEBPACK_IMPORTED_MODULE_0__["default"],
    TopNav: _TopNav__WEBPACK_IMPORTED_MODULE_1__["default"],
    appFooter: _common_footer__WEBPACK_IMPORTED_MODULE_2__["default"]
  },
  data: function data() {
    return {};
  },
  computed: _objectSpread({}, Object(vuex__WEBPACK_IMPORTED_MODULE_3__["mapGetters"])(["getSideBarToggleProperties"])),
  methods: {}
});

/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/src/containers/layouts/common/footer.vue?vue&type=template&id=1dfb17ff&scoped=true&":
/*!*************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/src/containers/layouts/common/footer.vue?vue&type=template&id=1dfb17ff&scoped=true& ***!
  \*************************************************************************************************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "render", function() { return render; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return staticRenderFns; });
var render = function () {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c("div", { staticClass: "footer_wrap" }, [
    _c("div", { staticClass: "flex-grow-1" }),
    _vm._v(" "),
    _c("div", { staticClass: "app-footer" }, [
      _c("div", { staticClass: "row" }, [
        _c("div", { staticClass: "col-md-9" }, [
          _c("p", [_c("strong", [_vm._v(_vm._s(_vm.currentUser.footer))])]),
        ]),
      ]),
      _vm._v(" "),
      _c(
        "div",
        {
          staticClass:
            "footer-bottom border-top pt-3 d-flex flex-column flex-sm-row align-items-center",
        },
        [
          _c("div", { staticClass: "d-flex align-items-center" }, [
            _c("img", {
              staticClass: "logo",
              attrs: {
                src: "/images/" + _vm.currentUser.logo,
                alt: "",
                width: "60",
                height: "60",
              },
            }),
            _vm._v(" "),
            _c("div", [
              _c("div", [
                _c("p", { staticClass: "m-0" }, [
                  _vm._v(
                    "© 2021 " +
                      _vm._s(_vm.$t("developed_by")) +
                      " " +
                      _vm._s(_vm.currentUser.developed_by)
                  ),
                ]),
                _vm._v(" "),
                _c("p", { staticClass: "m-0" }, [
                  _vm._v("All rights reserved - v3.7.0"),
                ]),
              ]),
            ]),
            _vm._v(" "),
            _c("span", { staticClass: "flex-grow-1" }),
          ]),
        ]
      ),
    ]),
  ])
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/src/containers/layouts/largeSidebar/Sidebar.vue?vue&type=template&id=696fbebe&scoped=true&":
/*!********************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/src/containers/layouts/largeSidebar/Sidebar.vue?vue&type=template&id=696fbebe&scoped=true& ***!
  \********************************************************************************************************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "render", function() { return render; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return staticRenderFns; });
var render = function () {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c(
    "div",
    {
      staticClass: "side-content-wrap",
      on: {
        mouseenter: function ($event) {
          _vm.isMenuOver = true
        },
        mouseleave: function ($event) {
          _vm.isMenuOver = false
        },
        touchstart: function ($event) {
          _vm.isMenuOver = true
        },
      },
    },
    [
      _c(
        "vue-perfect-scrollbar",
        {
          ref: "myData",
          staticClass: "sidebar-left rtl-ps-none ps scroll",
          class: { open: _vm.getSideBarToggleProperties.isSideNavOpen },
          attrs: {
            settings: { suppressScrollX: true, wheelPropagation: false },
          },
        },
        [
          _c("div", [
            _c("ul", { staticClass: "navigation-left" }, [
              _c(
                "li",
                {
                  staticClass: "nav-item",
                  class: { active: _vm.selectedParentMenu == "dashboard" },
                  attrs: { "data-item": "dashboard" },
                  on: { mouseenter: _vm.toggleSubMenu },
                },
                [
                  _c(
                    "router-link",
                    {
                      staticClass: "nav-item-hold",
                      attrs: { tag: "a", to: "/app/dashboard" },
                    },
                    [
                      _c("img", {
                        attrs: {
                          src: "https://cdn-icons-png.flaticon.com/512/10397/10397171.png",
                          width: "50%",
                        },
                      }),
                      _vm._v(" "),
                      _c("span", { staticClass: "nav-text" }, [
                        _vm._v(_vm._s(_vm.$t("dashboard"))),
                      ]),
                    ]
                  ),
                ],
                1
              ),
              _vm._v(" "),
              _vm.CurrentType && _vm.CurrentType.includes("merchant")
                ? _c(
                    "li",
                    {
                      staticClass: "nav-item",
                      class: { active: _vm.selectedParentMenu == "shops" },
                      attrs: { "data-item": "shops" },
                      on: { mouseenter: _vm.toggleSubMenu },
                    },
                    [
                      _c(
                        "router-link",
                        {
                          staticClass: "nav-item-hold",
                          attrs: { tag: "a", to: "/app/shops/myshop" },
                        },
                        [
                          _c("img", {
                            attrs: {
                              src: "https://cdn-icons-png.flaticon.com/512/273/273177.png",
                              width: "50%",
                            },
                          }),
                          _vm._v(" "),
                          _c("span", { staticClass: "nav-text" }, [
                            _vm._v(_vm._s(_vm.$t("mYSHOP"))),
                          ]),
                        ]
                      ),
                    ],
                    1
                  )
                : _vm._e(),
              _vm._v(" "),
              _vm.CurrentType && _vm.CurrentType.includes("owner")
                ? _c(
                    "li",
                    {
                      staticClass: "nav-item",
                      class: { active: _vm.selectedParentMenu == "shops" },
                      attrs: { "data-item": "shops", "data-submenu": true },
                      on: { mouseenter: _vm.toggleSubMenu },
                    },
                    [
                      _c(
                        "a",
                        { staticClass: "nav-item-hold", attrs: { href: "#" } },
                        [
                          _c("img", {
                            attrs: {
                              src: "https://cdn-icons-png.flaticon.com/512/273/273177.png",
                              width: "50%",
                            },
                          }),
                          _vm._v(" "),
                          _c("span", { staticClass: "nav-text" }, [
                            _vm._v(_vm._s(_vm.$t("Shops"))),
                          ]),
                        ]
                      ),
                      _vm._v(" "),
                      _c("div", { staticClass: "triangle" }),
                    ]
                  )
                : _vm._e(),
              _vm._v(" "),
              _c(
                "li",
                {
                  directives: [
                    {
                      name: "show",
                      rawName: "v-show",
                      value:
                        _vm.currentUserPermissions &&
                        (_vm.currentUserPermissions.includes("products_add") ||
                          _vm.currentUserPermissions.includes(
                            "products_view"
                          ) ||
                          _vm.currentUserPermissions.includes("barcode_view")),
                      expression:
                        "currentUserPermissions \n          && (currentUserPermissions.includes('products_add')\n          || currentUserPermissions.includes('products_view') \n          || currentUserPermissions.includes('barcode_view'))",
                    },
                  ],
                  staticClass: "nav-item",
                  class: { active: _vm.selectedParentMenu == "products" },
                  attrs: { "data-item": "products", "data-submenu": true },
                  on: { mouseenter: _vm.toggleSubMenu },
                },
                [
                  _c(
                    "a",
                    { staticClass: "nav-item-hold", attrs: { href: "#" } },
                    [
                      _c("img", {
                        attrs: {
                          src: "https://cdn-icons-png.flaticon.com/512/10439/10439818.png",
                          width: "50%",
                        },
                      }),
                      _vm._v(" "),
                      _c("span", { staticClass: "nav-text" }, [
                        _vm._v(_vm._s(_vm.$t("Products"))),
                      ]),
                    ]
                  ),
                  _vm._v(" "),
                  _c("div", { staticClass: "triangle" }),
                ]
              ),
              _vm._v(" "),
              _c(
                "li",
                {
                  directives: [
                    {
                      name: "show",
                      rawName: "v-show",
                      value:
                        _vm.currentUserPermissions &&
                        (_vm.currentUserPermissions.includes("Sales_view") ||
                          _vm.currentUserPermissions.includes("Sales_add")),
                      expression:
                        "currentUserPermissions && (currentUserPermissions.includes('Sales_view') \n                      || currentUserPermissions.includes('Sales_add'))",
                    },
                  ],
                  staticClass: "nav-item",
                  class: { active: _vm.selectedParentMenu == "sales" },
                  attrs: { "data-item": "sales", "data-submenu": true },
                  on: { mouseenter: _vm.toggleSubMenu },
                },
                [
                  _c(
                    "a",
                    { staticClass: "nav-item-hold", attrs: { href: "#" } },
                    [
                      _c("img", {
                        attrs: {
                          src: "https://cdn-icons-png.flaticon.com/512/3211/3211596.png",
                          width: "50%",
                        },
                      }),
                      _vm._v(" "),
                      _c("span", { staticClass: "nav-text" }, [
                        _vm._v(_vm._s(_vm.$t("Sales"))),
                      ]),
                    ]
                  ),
                  _vm._v(" "),
                  _c("div", { staticClass: "triangle" }),
                ]
              ),
              _vm._v(" "),
              _c(
                "li",
                {
                  directives: [
                    {
                      name: "show",
                      rawName: "v-show",
                      value:
                        _vm.currentUserPermissions &&
                        (_vm.currentUserPermissions.includes(
                          "Customers_view"
                        ) ||
                          _vm.currentUserPermissions.includes(
                            "Suppliers_view"
                          ) ||
                          _vm.currentUserPermissions.includes("users_view")),
                      expression:
                        "currentUserPermissions && (currentUserPermissions.includes('Customers_view') \n                      ||currentUserPermissions.includes('Suppliers_view')\n                      ||currentUserPermissions.includes('users_view'))",
                    },
                  ],
                  staticClass: "nav-item",
                  class: { active: _vm.selectedParentMenu == "People" },
                  attrs: { "data-item": "People", "data-submenu": true },
                  on: { mouseenter: _vm.toggleSubMenu },
                },
                [
                  _c(
                    "a",
                    { staticClass: "nav-item-hold", attrs: { href: "#" } },
                    [
                      _c("img", {
                        attrs: {
                          src: "https://cdn-icons-png.flaticon.com/512/476/476863.png",
                          width: "50%",
                        },
                      }),
                      _vm._v(" "),
                      _c("span", { staticClass: "nav-text" }, [
                        _vm._v(_vm._s(_vm.$t("People"))),
                      ]),
                    ]
                  ),
                  _vm._v(" "),
                  _c("div", { staticClass: "triangle" }),
                ]
              ),
              _vm._v(" "),
              _c(
                "li",
                {
                  directives: [
                    {
                      name: "show",
                      rawName: "v-show",
                      value:
                        _vm.currentUserPermissions &&
                        (_vm.currentUserPermissions.includes(
                          "setting_system"
                        ) ||
                          _vm.currentUserPermissions.includes("warehouse") ||
                          _vm.currentUserPermissions.includes("brand") ||
                          _vm.currentUserPermissions.includes("backup") ||
                          _vm.currentUserPermissions.includes("unit") ||
                          _vm.currentUserPermissions.includes("currency") ||
                          _vm.currentUserPermissions.includes("category") ||
                          _vm.currentUserPermissions.includes(
                            "permissions_view"
                          )),
                      expression:
                        "currentUserPermissions && (currentUserPermissions.includes('setting_system') \n                      || currentUserPermissions.includes('warehouse') || currentUserPermissions.includes('brand')\n                      || currentUserPermissions.includes('backup')    || currentUserPermissions.includes('unit')\n                      || currentUserPermissions.includes('currency')  || currentUserPermissions.includes('category')\n                      || currentUserPermissions.includes('permissions_view'))",
                    },
                  ],
                  staticClass: "nav-item",
                  class: { active: _vm.selectedParentMenu == "settings" },
                  attrs: { "data-item": "settings", "data-submenu": true },
                  on: { mouseenter: _vm.toggleSubMenu },
                },
                [
                  _c(
                    "a",
                    { staticClass: "nav-item-hold", attrs: { href: "#" } },
                    [
                      _c("img", {
                        attrs: {
                          src: "https://cdn-icons-png.flaticon.com/512/6584/6584875.png",
                          width: "50%",
                        },
                      }),
                      _vm._v(" "),
                      _c("span", { staticClass: "nav-text" }, [
                        _vm._v(_vm._s(_vm.$t("Settings"))),
                      ]),
                    ]
                  ),
                  _vm._v(" "),
                  _c("div", { staticClass: "triangle" }),
                ]
              ),
            ]),
          ]),
        ]
      ),
      _vm._v(" "),
      _c(
        "vue-perfect-scrollbar",
        {
          staticClass: "sidebar-left-secondary ps rtl-ps-none",
          class: {
            open: _vm.getSideBarToggleProperties.isSecondarySideNavOpen,
          },
          attrs: {
            settings: { suppressScrollX: true, wheelPropagation: false },
          },
        },
        [
          _c("div", { ref: "sidebarChild" }, [
            _vm.CurrentType && _vm.CurrentType.includes("owner")
              ? _c(
                  "ul",
                  {
                    staticClass: "childNav d-none",
                    class: { "d-block": _vm.selectedParentMenu == "shops" },
                    attrs: { "data-parent": "shops" },
                  },
                  [
                    _vm.CurrentType && _vm.CurrentType.includes("owner")
                      ? _c(
                          "li",
                          { staticClass: "nav-item" },
                          [
                            _c(
                              "router-link",
                              { attrs: { tag: "a", to: "/app/shops/store" } },
                              [
                                _c("i", { staticClass: "nav-icon i-Add-File" }),
                                _vm._v(" "),
                                _c("span", { staticClass: "item-name" }, [
                                  _vm._v(_vm._s(_vm.$t("AddShop"))),
                                ]),
                              ]
                            ),
                          ],
                          1
                        )
                      : _vm._e(),
                    _vm._v(" "),
                    _vm.CurrentType && _vm.CurrentType.includes("owner")
                      ? _c(
                          "li",
                          { staticClass: "nav-item" },
                          [
                            _c(
                              "router-link",
                              { attrs: { tag: "a", to: "/app/shops/list" } },
                              [
                                _c("i", { staticClass: "nav-icon i-Files" }),
                                _vm._v(" "),
                                _c("span", { staticClass: "item-name" }, [
                                  _vm._v(_vm._s(_vm.$t("shopsList"))),
                                ]),
                              ]
                            ),
                          ],
                          1
                        )
                      : _vm._e(),
                  ]
                )
              : _vm._e(),
            _vm._v(" "),
            _c(
              "ul",
              {
                staticClass: "childNav d-none",
                class: { "d-block": _vm.selectedParentMenu == "products" },
                attrs: { "data-parent": "products" },
              },
              [
                _vm.currentUserPermissions &&
                _vm.currentUserPermissions.includes("products_add")
                  ? _c(
                      "li",
                      { staticClass: "nav-item" },
                      [
                        _c(
                          "router-link",
                          { attrs: { tag: "a", to: "/app/products/store" } },
                          [
                            _c("i", { staticClass: "nav-icon i-Add-File" }),
                            _vm._v(" "),
                            _c("span", { staticClass: "item-name" }, [
                              _vm._v(_vm._s(_vm.$t("AddProduct"))),
                            ]),
                          ]
                        ),
                      ],
                      1
                    )
                  : _vm._e(),
                _vm._v(" "),
                _vm.currentUserPermissions &&
                _vm.currentUserPermissions.includes("products_view")
                  ? _c(
                      "li",
                      { staticClass: "nav-item" },
                      [
                        _c(
                          "router-link",
                          { attrs: { tag: "a", to: "/app/products/list" } },
                          [
                            _c("i", { staticClass: "nav-icon i-Files" }),
                            _vm._v(" "),
                            _c("span", { staticClass: "item-name" }, [
                              _vm._v(_vm._s(_vm.$t("productsList"))),
                            ]),
                          ]
                        ),
                      ],
                      1
                    )
                  : _vm._e(),
              ]
            ),
            _vm._v(" "),
            _c(
              "ul",
              {
                staticClass: "childNav d-none",
                class: { "d-block": _vm.selectedParentMenu == "deferreds" },
                attrs: { "data-parent": "deferreds" },
              },
              [
                _vm.currentUserPermissions &&
                _vm.currentUserPermissions.includes("deferreds_add")
                  ? _c(
                      "li",
                      { staticClass: "nav-item" },
                      [
                        _c(
                          "router-link",
                          { attrs: { tag: "a", to: "/app/deferreds/store" } },
                          [
                            _c("i", { staticClass: "nav-icon i-Add-File" }),
                            _vm._v(" "),
                            _c("span", { staticClass: "item-name" }, [
                              _vm._v(_vm._s(_vm.$t("AddDeferreds"))),
                            ]),
                          ]
                        ),
                      ],
                      1
                    )
                  : _vm._e(),
                _vm._v(" "),
                _vm.currentUserPermissions &&
                _vm.currentUserPermissions.includes("deferreds_view")
                  ? _c(
                      "li",
                      { staticClass: "nav-item" },
                      [
                        _c(
                          "router-link",
                          { attrs: { tag: "a", to: "/app/deferreds/list" } },
                          [
                            _c("i", { staticClass: "nav-icon i-Files" }),
                            _vm._v(" "),
                            _c("span", { staticClass: "item-name" }, [
                              _vm._v(_vm._s(_vm.$t("DeferredsList"))),
                            ]),
                          ]
                        ),
                      ],
                      1
                    )
                  : _vm._e(),
              ]
            ),
            _vm._v(" "),
            _c(
              "ul",
              {
                staticClass: "childNav d-none",
                class: { "d-block": _vm.selectedParentMenu == "adjustments" },
                attrs: { "data-parent": "adjustments" },
              },
              [
                _vm.currentUserPermissions &&
                _vm.currentUserPermissions.includes("adjustment_add")
                  ? _c(
                      "li",
                      { staticClass: "nav-item" },
                      [
                        _c(
                          "router-link",
                          { attrs: { tag: "a", to: "/app/adjustments/store" } },
                          [
                            _c("i", { staticClass: "nav-icon i-Add-File" }),
                            _vm._v(" "),
                            _c("span", { staticClass: "item-name" }, [
                              _vm._v(_vm._s(_vm.$t("CreateAdjustment"))),
                            ]),
                          ]
                        ),
                      ],
                      1
                    )
                  : _vm._e(),
                _vm._v(" "),
                _vm.currentUserPermissions &&
                _vm.currentUserPermissions.includes("adjustment_view")
                  ? _c(
                      "li",
                      { staticClass: "nav-item" },
                      [
                        _c(
                          "router-link",
                          { attrs: { tag: "a", to: "/app/adjustments/list" } },
                          [
                            _c("i", { staticClass: "nav-icon i-Files" }),
                            _vm._v(" "),
                            _c("span", { staticClass: "item-name" }, [
                              _vm._v(_vm._s(_vm.$t("ListAdjustments"))),
                            ]),
                          ]
                        ),
                      ],
                      1
                    )
                  : _vm._e(),
              ]
            ),
            _vm._v(" "),
            _c(
              "ul",
              {
                staticClass: "childNav d-none",
                class: { "d-block": _vm.selectedParentMenu == "transfers" },
                attrs: { "data-parent": "transfers" },
              },
              [
                _vm.currentUserPermissions &&
                _vm.currentUserPermissions.includes("transfer_add")
                  ? _c(
                      "li",
                      { staticClass: "nav-item" },
                      [
                        _c(
                          "router-link",
                          { attrs: { tag: "a", to: "/app/transfers/store" } },
                          [
                            _c("i", { staticClass: "nav-icon i-Add-File" }),
                            _vm._v(" "),
                            _c("span", { staticClass: "item-name" }, [
                              _vm._v(_vm._s(_vm.$t("CreateTransfer"))),
                            ]),
                          ]
                        ),
                      ],
                      1
                    )
                  : _vm._e(),
                _vm._v(" "),
                _vm.currentUserPermissions &&
                _vm.currentUserPermissions.includes("transfer_view")
                  ? _c(
                      "li",
                      { staticClass: "nav-item" },
                      [
                        _c(
                          "router-link",
                          { attrs: { tag: "a", to: "/app/transfers/list" } },
                          [
                            _c("i", { staticClass: "nav-icon i-Files" }),
                            _vm._v(" "),
                            _c("span", { staticClass: "item-name" }, [
                              _vm._v(_vm._s(_vm.$t("ListTransfers"))),
                            ]),
                          ]
                        ),
                      ],
                      1
                    )
                  : _vm._e(),
              ]
            ),
            _vm._v(" "),
            _c(
              "ul",
              {
                staticClass: "childNav d-none",
                class: { "d-block": _vm.selectedParentMenu == "quotations" },
                attrs: { "data-parent": "quotations" },
              },
              [
                _vm.currentUserPermissions &&
                _vm.currentUserPermissions.includes("Quotations_add")
                  ? _c(
                      "li",
                      { staticClass: "nav-item" },
                      [
                        _c(
                          "router-link",
                          { attrs: { tag: "a", to: "/app/quotations/store" } },
                          [
                            _c("i", { staticClass: "nav-icon i-Add-File" }),
                            _vm._v(" "),
                            _c("span", { staticClass: "item-name" }, [
                              _vm._v(_vm._s(_vm.$t("AddQuote"))),
                            ]),
                          ]
                        ),
                      ],
                      1
                    )
                  : _vm._e(),
                _vm._v(" "),
                _vm.currentUserPermissions &&
                _vm.currentUserPermissions.includes("Quotations_view")
                  ? _c(
                      "li",
                      { staticClass: "nav-item" },
                      [
                        _c(
                          "router-link",
                          { attrs: { tag: "a", to: "/app/quotations/list" } },
                          [
                            _c("i", { staticClass: "nav-icon i-Files" }),
                            _vm._v(" "),
                            _c("span", { staticClass: "item-name" }, [
                              _vm._v(_vm._s(_vm.$t("ListQuotations"))),
                            ]),
                          ]
                        ),
                      ],
                      1
                    )
                  : _vm._e(),
              ]
            ),
            _vm._v(" "),
            _c(
              "ul",
              {
                staticClass: "childNav d-none",
                class: { "d-block": _vm.selectedParentMenu == "purchases" },
                attrs: { "data-parent": "purchases" },
              },
              [
                _vm.currentUserPermissions &&
                _vm.currentUserPermissions.includes("Purchases_add")
                  ? _c(
                      "li",
                      { staticClass: "nav-item" },
                      [
                        _c(
                          "router-link",
                          { attrs: { tag: "a", to: "/app/purchases/store" } },
                          [
                            _c("i", { staticClass: "nav-icon i-Add-File" }),
                            _vm._v(" "),
                            _c("span", { staticClass: "item-name" }, [
                              _vm._v(_vm._s(_vm.$t("AddPurchase"))),
                            ]),
                          ]
                        ),
                      ],
                      1
                    )
                  : _vm._e(),
                _vm._v(" "),
                _vm.currentUserPermissions &&
                _vm.currentUserPermissions.includes("Purchases_view")
                  ? _c(
                      "li",
                      { staticClass: "nav-item" },
                      [
                        _c(
                          "router-link",
                          { attrs: { tag: "a", to: "/app/purchases/list" } },
                          [
                            _c("i", { staticClass: "nav-icon i-Files" }),
                            _vm._v(" "),
                            _c("span", { staticClass: "item-name" }, [
                              _vm._v(_vm._s(_vm.$t("ListPurchases"))),
                            ]),
                          ]
                        ),
                      ],
                      1
                    )
                  : _vm._e(),
              ]
            ),
            _vm._v(" "),
            _c(
              "ul",
              {
                staticClass: "childNav d-none",
                class: { "d-block": _vm.selectedParentMenu == "sales" },
                attrs: { "data-parent": "sales" },
              },
              [
                _vm.currentUserPermissions &&
                _vm.currentUserPermissions.includes("Sales_add")
                  ? _c(
                      "li",
                      { staticClass: "nav-item" },
                      [
                        _c(
                          "router-link",
                          { attrs: { tag: "a", to: "/app/sales/store" } },
                          [
                            _c("i", { staticClass: "nav-icon i-Add-File" }),
                            _vm._v(" "),
                            _c("span", { staticClass: "item-name" }, [
                              _vm._v(_vm._s(_vm.$t("AddSale"))),
                            ]),
                          ]
                        ),
                      ],
                      1
                    )
                  : _vm._e(),
                _vm._v(" "),
                _vm.currentUserPermissions &&
                _vm.currentUserPermissions.includes("Sales_view")
                  ? _c(
                      "li",
                      { staticClass: "nav-item" },
                      [
                        _c(
                          "router-link",
                          { attrs: { tag: "a", to: "/app/sales/list" } },
                          [
                            _c("i", { staticClass: "nav-icon i-Files" }),
                            _vm._v(" "),
                            _c("span", { staticClass: "item-name" }, [
                              _vm._v(_vm._s(_vm.$t("ListSales"))),
                            ]),
                          ]
                        ),
                      ],
                      1
                    )
                  : _vm._e(),
              ]
            ),
            _vm._v(" "),
            _c(
              "ul",
              {
                staticClass: "childNav d-none",
                class: { "d-block": _vm.selectedParentMenu == "sale_return" },
                attrs: { "data-parent": "sale_return" },
              },
              [
                _vm.currentUserPermissions &&
                _vm.currentUserPermissions.includes("Sale_Returns_add")
                  ? _c(
                      "li",
                      { staticClass: "nav-item" },
                      [
                        _c(
                          "router-link",
                          { attrs: { tag: "a", to: "/app/sale_return/store" } },
                          [
                            _c("i", { staticClass: "nav-icon i-Add-File" }),
                            _vm._v(" "),
                            _c("span", { staticClass: "item-name" }, [
                              _vm._v(_vm._s(_vm.$t("AddReturn"))),
                            ]),
                          ]
                        ),
                      ],
                      1
                    )
                  : _vm._e(),
                _vm._v(" "),
                _vm.currentUserPermissions &&
                _vm.currentUserPermissions.includes("Sale_Returns_view")
                  ? _c(
                      "li",
                      { staticClass: "nav-item" },
                      [
                        _c(
                          "router-link",
                          { attrs: { tag: "a", to: "/app/sale_return/list" } },
                          [
                            _c("i", { staticClass: "nav-icon i-Files" }),
                            _vm._v(" "),
                            _c("span", { staticClass: "item-name" }, [
                              _vm._v(_vm._s(_vm.$t("ListReturns"))),
                            ]),
                          ]
                        ),
                      ],
                      1
                    )
                  : _vm._e(),
              ]
            ),
            _vm._v(" "),
            _c(
              "ul",
              {
                staticClass: "childNav d-none",
                class: {
                  "d-block": _vm.selectedParentMenu == "purchase_return",
                },
                attrs: { "data-parent": "purchase_return" },
              },
              [
                _vm.currentUserPermissions &&
                _vm.currentUserPermissions.includes("Purchase_Returns_add")
                  ? _c(
                      "li",
                      { staticClass: "nav-item" },
                      [
                        _c(
                          "router-link",
                          {
                            attrs: {
                              tag: "a",
                              to: "/app/purchase_return/store",
                            },
                          },
                          [
                            _c("i", { staticClass: "nav-icon i-Add-File" }),
                            _vm._v(" "),
                            _c("span", { staticClass: "item-name" }, [
                              _vm._v(_vm._s(_vm.$t("AddReturn"))),
                            ]),
                          ]
                        ),
                      ],
                      1
                    )
                  : _vm._e(),
                _vm._v(" "),
                _vm.currentUserPermissions &&
                _vm.currentUserPermissions.includes("Purchase_Returns_view")
                  ? _c(
                      "li",
                      { staticClass: "nav-item" },
                      [
                        _c(
                          "router-link",
                          {
                            attrs: {
                              tag: "a",
                              to: "/app/purchase_return/list",
                            },
                          },
                          [
                            _c("i", { staticClass: "nav-icon i-Files" }),
                            _vm._v(" "),
                            _c("span", { staticClass: "item-name" }, [
                              _vm._v(_vm._s(_vm.$t("ListReturns"))),
                            ]),
                          ]
                        ),
                      ],
                      1
                    )
                  : _vm._e(),
              ]
            ),
            _vm._v(" "),
            _c(
              "ul",
              {
                staticClass: "childNav d-none",
                class: { "d-block": _vm.selectedParentMenu == "People" },
                attrs: { "data-parent": "People" },
              },
              [
                _vm.currentUserPermissions &&
                _vm.currentUserPermissions.includes("Customers_view")
                  ? _c(
                      "li",
                      { staticClass: "nav-item" },
                      [
                        _c(
                          "router-link",
                          { attrs: { tag: "a", to: "/app/People/Customers" } },
                          [
                            _c("i", {
                              staticClass: "nav-icon i-Administrator",
                            }),
                            _vm._v(" "),
                            _c("span", { staticClass: "item-name" }, [
                              _vm._v(_vm._s(_vm.$t("Customers"))),
                            ]),
                          ]
                        ),
                      ],
                      1
                    )
                  : _vm._e(),
                _vm._v(" "),
                _vm.currentUserPermissions &&
                _vm.currentUserPermissions.includes("Suppliers_view")
                  ? _c(
                      "li",
                      { staticClass: "nav-item" },
                      [
                        _c(
                          "router-link",
                          { attrs: { tag: "a", to: "/app/People/Suppliers" } },
                          [
                            _c("i", {
                              staticClass: "nav-icon i-Administrator",
                            }),
                            _vm._v(" "),
                            _c("span", { staticClass: "item-name" }, [
                              _vm._v(_vm._s(_vm.$t("Suppliers"))),
                            ]),
                          ]
                        ),
                      ],
                      1
                    )
                  : _vm._e(),
                _vm._v(" "),
                _vm.currentUserPermissions &&
                _vm.currentUserPermissions.includes("users_view")
                  ? _c(
                      "li",
                      { staticClass: "nav-item" },
                      [
                        _c(
                          "router-link",
                          { attrs: { tag: "a", to: "/app/People/Users" } },
                          [
                            _c("i", {
                              staticClass: "nav-icon i-Administrator",
                            }),
                            _vm._v(" "),
                            _c("span", { staticClass: "item-name" }, [
                              _vm._v(_vm._s(_vm.$t("Users"))),
                            ]),
                          ]
                        ),
                      ],
                      1
                    )
                  : _vm._e(),
              ]
            ),
            _vm._v(" "),
            _c(
              "ul",
              {
                staticClass: "childNav d-none",
                class: { "d-block": _vm.selectedParentMenu == "settings" },
                attrs: { "data-parent": "settings" },
              },
              [
                _vm.currentUserPermissions &&
                _vm.currentUserPermissions.includes("setting_system")
                  ? _c(
                      "li",
                      { staticClass: "nav-item" },
                      [
                        _c(
                          "router-link",
                          {
                            attrs: {
                              tag: "a",
                              to: "/app/settings/System_settings",
                            },
                          },
                          [
                            _c("i", {
                              staticClass: "nav-icon i-Data-Settings",
                            }),
                            _vm._v(" "),
                            _c("span", { staticClass: "item-name" }, [
                              _vm._v(_vm._s(_vm.$t("SystemSettings"))),
                            ]),
                          ]
                        ),
                      ],
                      1
                    )
                  : _vm._e(),
                _vm._v(" "),
                _vm.currentUserPermissions &&
                _vm.currentUserPermissions.includes("category")
                  ? _c(
                      "li",
                      { staticClass: "nav-item" },
                      [
                        _c(
                          "router-link",
                          {
                            attrs: { tag: "a", to: "/app/settings/Categories" },
                          },
                          [
                            _c("i", {
                              staticClass: "nav-icon i-Duplicate-Layer",
                            }),
                            _vm._v(" "),
                            _c("span", { staticClass: "item-name" }, [
                              _vm._v(_vm._s(_vm.$t("Categories"))),
                            ]),
                          ]
                        ),
                      ],
                      1
                    )
                  : _vm._e(),
                _vm._v(" "),
                _c(
                  "li",
                  { staticClass: "nav-item" },
                  [
                    _c(
                      "router-link",
                      { attrs: { tag: "a", to: "/app/settings/bill" } },
                      [
                        _c("i", { staticClass: "nav-icon i-Bookmark" }),
                        _vm._v(" "),
                        _c("span", { staticClass: "item-name" }, [
                          _vm._v(_vm._s(_vm.$t("Bill"))),
                        ]),
                      ]
                    ),
                  ],
                  1
                ),
                _vm._v(" "),
                _c(
                  "li",
                  { staticClass: "nav-item" },
                  [
                    _c(
                      "router-link",
                      { attrs: { tag: "a", to: "/app/settings/Abouts" } },
                      [
                        _c("i", { staticClass: "nav-icon i-Bookmark" }),
                        _vm._v(" "),
                        _c("span", { staticClass: "item-name" }, [
                          _vm._v(_vm._s(_vm.$t("About"))),
                        ]),
                      ]
                    ),
                  ],
                  1
                ),
                _vm._v(" "),
                _c(
                  "li",
                  { staticClass: "nav-item" },
                  [
                    _c(
                      "router-link",
                      { attrs: { tag: "a", to: "/app/settings/Sliders" } },
                      [
                        _c("i", { staticClass: "nav-icon i-Bookmark" }),
                        _vm._v(" "),
                        _c("span", { staticClass: "item-name" }, [
                          _vm._v(_vm._s(_vm.$t("Slider"))),
                        ]),
                      ]
                    ),
                  ],
                  1
                ),
                _vm._v(" "),
                _vm.currentUserPermissions &&
                _vm.currentUserPermissions.includes("brand")
                  ? _c(
                      "li",
                      { staticClass: "nav-item" },
                      [
                        _c(
                          "router-link",
                          { attrs: { tag: "a", to: "/app/settings/Brands" } },
                          [
                            _c("i", { staticClass: "nav-icon i-Bookmark" }),
                            _vm._v(" "),
                            _c("span", { staticClass: "item-name" }, [
                              _vm._v(_vm._s(_vm.$t("Brand"))),
                            ]),
                          ]
                        ),
                      ],
                      1
                    )
                  : _vm._e(),
                _vm._v(" "),
                _c(
                  "li",
                  { staticClass: "nav-item" },
                  [
                    _c(
                      "router-link",
                      { attrs: { tag: "a", to: "/app/settings/Discounts" } },
                      [
                        _c("i", { staticClass: "nav-icon i-Bookmark" }),
                        _vm._v(" "),
                        _c("span", { staticClass: "item-name" }, [
                          _vm._v(_vm._s(_vm.$t("Discount"))),
                        ]),
                      ]
                    ),
                  ],
                  1
                ),
                _vm._v(" "),
                _vm.currentUserPermissions &&
                _vm.currentUserPermissions.includes("currency")
                  ? _c(
                      "li",
                      { staticClass: "nav-item" },
                      [
                        _c(
                          "router-link",
                          {
                            attrs: { tag: "a", to: "/app/settings/Currencies" },
                          },
                          [
                            _c("i", { staticClass: "nav-icon i-Dollar-Sign" }),
                            _vm._v(" "),
                            _c("span", { staticClass: "item-name" }, [
                              _vm._v(_vm._s(_vm.$t("Currencies"))),
                            ]),
                          ]
                        ),
                      ],
                      1
                    )
                  : _vm._e(),
                _vm._v(" "),
                _vm.currentUserPermissions &&
                _vm.currentUserPermissions.includes("unit")
                  ? _c(
                      "li",
                      { staticClass: "nav-item" },
                      [
                        _c(
                          "router-link",
                          { attrs: { tag: "a", to: "/app/settings/Units" } },
                          [
                            _c("i", { staticClass: "nav-icon i-Quotes" }),
                            _vm._v(" "),
                            _c("span", { staticClass: "item-name" }, [
                              _vm._v(_vm._s(_vm.$t("Units"))),
                            ]),
                          ]
                        ),
                      ],
                      1
                    )
                  : _vm._e(),
                _vm._v(" "),
                _vm.currentUserPermissions &&
                _vm.currentUserPermissions.includes("backup")
                  ? _c(
                      "li",
                      { staticClass: "nav-item" },
                      [
                        _c(
                          "router-link",
                          { attrs: { tag: "a", to: "/app/settings/Backup" } },
                          [
                            _c("i", { staticClass: "nav-icon i-Data-Backup" }),
                            _vm._v(" "),
                            _c("span", { staticClass: "item-name" }, [
                              _vm._v(_vm._s(_vm.$t("Backup"))),
                            ]),
                          ]
                        ),
                      ],
                      1
                    )
                  : _vm._e(),
              ]
            ),
            _vm._v(" "),
            _c(
              "ul",
              {
                staticClass: "childNav d-none",
                class: { "d-block": _vm.selectedParentMenu == "reports" },
                attrs: { "data-parent": "reports" },
              },
              [
                _vm.currentUserPermissions &&
                (_vm.currentUserPermissions.includes(
                  "Reports_payments_Purchases"
                ) ||
                  _vm.currentUserPermissions.includes(
                    "Reports_payments_Sales"
                  ) ||
                  _vm.currentUserPermissions.includes(
                    "Reports_payments_Sale_Returns"
                  ) ||
                  _vm.currentUserPermissions.includes(
                    "Reports_payments_purchase_Return"
                  ))
                  ? _c(
                      "li",
                      {
                        staticClass: "nav-item dropdown-sidemenu",
                        on: {
                          click: function ($event) {
                            $event.preventDefault()
                            return _vm.toggleSidebarDropdwon($event)
                          },
                        },
                      },
                      [
                        _c("a", { attrs: { href: "#" } }, [
                          _c("i", { staticClass: "nav-icon i-Credit-Card" }),
                          _vm._v(" "),
                          _c("span", { staticClass: "item-name" }, [
                            _vm._v(_vm._s(_vm.$t("Payments"))),
                          ]),
                          _vm._v(" "),
                          _c("i", { staticClass: "dd-arrow i-Arrow-Down" }),
                        ]),
                        _vm._v(" "),
                        _c("ul", { staticClass: "submenu" }),
                      ]
                    )
                  : _vm._e(),
                _vm._v(" "),
                _vm.currentUserPermissions &&
                _vm.currentUserPermissions.includes("Reports_profit")
                  ? _c(
                      "li",
                      { staticClass: "nav-item" },
                      [
                        _c(
                          "router-link",
                          {
                            attrs: {
                              tag: "a",
                              to: "/app/reports/profit_and_loss",
                            },
                          },
                          [
                            _c("i", {
                              staticClass: "nav-icon i-Split-FourSquareWindow",
                            }),
                            _vm._v(" "),
                            _c("span", { staticClass: "item-name" }, [
                              _vm._v(_vm._s(_vm.$t("ProfitandLoss"))),
                            ]),
                          ]
                        ),
                      ],
                      1
                    )
                  : _vm._e(),
                _vm._v(" "),
                _vm.currentUserPermissions &&
                _vm.currentUserPermissions.includes("Reports_quantity_alerts")
                  ? _c(
                      "li",
                      { staticClass: "nav-item" },
                      [
                        _c(
                          "router-link",
                          {
                            attrs: {
                              tag: "a",
                              to: "/app/reports/quantity_alerts",
                            },
                          },
                          [
                            _c("i", { staticClass: "nav-icon i-Dollar" }),
                            _vm._v(" "),
                            _c("span", { staticClass: "item-name" }, [
                              _vm._v(_vm._s(_vm.$t("ProductQuantityAlerts"))),
                            ]),
                          ]
                        ),
                      ],
                      1
                    )
                  : _vm._e(),
                _vm._v(" "),
                _vm.currentUserPermissions &&
                _vm.currentUserPermissions.includes("Reports_sales")
                  ? _c(
                      "li",
                      { staticClass: "nav-item" },
                      [
                        _c(
                          "router-link",
                          {
                            attrs: {
                              tag: "a",
                              to: "/app/reports/sales_report",
                            },
                          },
                          [
                            _c("i", { staticClass: "nav-icon i-Line-Chart" }),
                            _vm._v(" "),
                            _c("span", { staticClass: "item-name" }, [
                              _vm._v(_vm._s(_vm.$t("SalesReport"))),
                            ]),
                          ]
                        ),
                      ],
                      1
                    )
                  : _vm._e(),
                _vm._v(" "),
                _vm.currentUserPermissions &&
                _vm.currentUserPermissions.includes("Reports_purchase")
                  ? _c(
                      "li",
                      { staticClass: "nav-item" },
                      [
                        _c(
                          "router-link",
                          {
                            attrs: {
                              tag: "a",
                              to: "/app/reports/purchase_report",
                            },
                          },
                          [
                            _c("i", { staticClass: "nav-icon i-Bar-Chart5" }),
                            _vm._v(" "),
                            _c("span", { staticClass: "item-name" }, [
                              _vm._v(_vm._s(_vm.$t("PurchasesReport"))),
                            ]),
                          ]
                        ),
                      ],
                      1
                    )
                  : _vm._e(),
              ]
            ),
          ]),
        ]
      ),
      _vm._v(" "),
      _c("div", {
        staticClass: "sidebar-overlay",
        class: { open: _vm.getSideBarToggleProperties.isSecondarySideNavOpen },
        on: {
          click: function ($event) {
            return _vm.removeOverlay()
          },
        },
      }),
    ],
    1
  )
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/src/containers/layouts/largeSidebar/TopNav.vue?vue&type=template&id=7dfa9f1c&":
/*!*******************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/src/containers/layouts/largeSidebar/TopNav.vue?vue&type=template&id=7dfa9f1c& ***!
  \*******************************************************************************************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "render", function() { return render; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return staticRenderFns; });
var render = function () {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c(
    "div",
    {
      staticClass: "main-header",
      staticStyle: { "background-color": "#F2BE22" },
    },
    [
      _c(
        "div",
        { staticClass: "logo" },
        [
          _c("router-link", { attrs: { to: "/app/dashboard" } }, [
            _c("img", {
              attrs: {
                src: "/images/" + _vm.currentUser.logo,
                alt: "",
                width: "250",
                height: "60",
              },
            }),
          ]),
        ],
        1
      ),
      _vm._v(" "),
      _c(
        "div",
        { staticClass: "menu-toggle", on: { click: _vm.sideBarToggle } },
        [_c("div"), _vm._v(" "), _c("div"), _vm._v(" "), _c("div")]
      ),
      _vm._v(" "),
      _c("div", { staticStyle: { margin: "auto" } }),
      _vm._v(" "),
      _c(
        "div",
        { staticClass: "header-part-right", staticStyle: { color: "#0B2B40" } },
        [
          _c("i", {
            staticClass: "i-Full-Screen header-icon d-none d-sm-inline-block",
            on: { click: _vm.handleFullScreen },
          }),
          _vm._v(" "),
          _c(
            "div",
            { staticClass: "dropdown" },
            [
              _c(
                "b-dropdown",
                {
                  staticClass: "m-md-2 d-none  d-md-block",
                  attrs: {
                    id: "dropdown",
                    text: "Dropdown Button",
                    "toggle-class": "text-decoration-none",
                    "no-caret": "",
                    variant: "link",
                  },
                },
                [
                  _c("template", { slot: "button-content" }, [
                    _c("i", {
                      staticClass: "i-Globe text-muted header-icon",
                      attrs: {
                        role: "button",
                        id: "dropdownMenuButton",
                        "data-toggle": "dropdown",
                        "aria-haspopup": "true",
                        "aria-expanded": "false",
                      },
                    }),
                  ]),
                  _vm._v(" "),
                  _c(
                    "vue-perfect-scrollbar",
                    {
                      ref: "myData",
                      staticClass:
                        "dropdown-menu-right rtl-ps-none notification-dropdown ps scroll",
                      attrs: {
                        settings: {
                          suppressScrollX: true,
                          wheelPropagation: false,
                        },
                      },
                    },
                    [
                      _c("div", { staticClass: "menu-icon-grid" }, [
                        _c(
                          "a",
                          {
                            on: {
                              click: function ($event) {
                                return _vm.SetLocal("en")
                              },
                            },
                          },
                          [
                            _c("i", {
                              staticClass:
                                "flag-icon flag-icon-squared flag-icon-gb",
                              attrs: { title: "en" },
                            }),
                            _vm._v(" English\n            "),
                          ]
                        ),
                        _vm._v(" "),
                        _c(
                          "a",
                          {
                            on: {
                              click: function ($event) {
                                return _vm.SetLocal("ar")
                              },
                            },
                          },
                          [
                            _c("i", {
                              staticClass:
                                "flag-icon flag-icon-squared flag-icon-sa",
                              attrs: { title: "sa" },
                            }),
                            _vm._v(" "),
                            _c("span", { staticClass: "title-lang" }, [
                              _vm._v("Arabic"),
                            ]),
                          ]
                        ),
                      ]),
                    ]
                  ),
                ],
                2
              ),
            ],
            1
          ),
          _vm._v(" "),
          _c(
            "div",
            { staticClass: "dropdown" },
            [
              _c(
                "b-dropdown",
                {
                  staticClass:
                    "m-md-2 badge-top-container d-none  d-sm-inline-block",
                  attrs: {
                    id: "dropdown-1",
                    text: "Dropdown Button",
                    "toggle-class": "text-decoration-none",
                    "no-caret": "",
                    variant: "link",
                  },
                },
                [
                  _c("template", { slot: "button-content" }, [
                    _vm.notifs_alert > 0
                      ? _c("span", { staticClass: "badge badge-primary" }, [
                          _vm._v("1"),
                        ])
                      : _vm._e(),
                    _vm._v(" "),
                    _c("i", { staticClass: "i-Bell text-muted header-icon" }),
                  ]),
                  _vm._v(" "),
                  _c(
                    "vue-perfect-scrollbar",
                    {
                      ref: "myData",
                      staticClass:
                        "dropdown-menu-right rtl-ps-none notification-dropdown ps scroll",
                      class: {
                        open: _vm.getSideBarToggleProperties.isSideNavOpen,
                      },
                      attrs: {
                        settings: {
                          suppressScrollX: true,
                          wheelPropagation: false,
                        },
                      },
                    },
                    [
                      _vm.notifs_alert > 0
                        ? _c("div", { staticClass: "dropdown-item d-flex" }, [
                            _c("div", { staticClass: "notification-icon" }, [
                              _c("i", {
                                staticClass: "i-Bell text-primary mr-1",
                              }),
                            ]),
                            _vm._v(" "),
                            _vm.currentUserPermissions &&
                            _vm.currentUserPermissions.includes(
                              "Reports_quantity_alerts"
                            )
                              ? _c(
                                  "div",
                                  {
                                    staticClass:
                                      "notification-details flex-grow-1",
                                  },
                                  [
                                    _c(
                                      "router-link",
                                      {
                                        attrs: {
                                          tag: "a",
                                          to: "/app/reports/quantity_alerts",
                                        },
                                      },
                                      [
                                        _c(
                                          "p",
                                          {
                                            staticClass:
                                              "text-small text-muted m-0",
                                          },
                                          [
                                            _vm._v(
                                              "\n                " +
                                                _vm._s(_vm.notifs_alert) +
                                                " " +
                                                _vm._s(
                                                  _vm.$t(
                                                    "ProductQuantityAlerts"
                                                  )
                                                ) +
                                                "\n                "
                                            ),
                                          ]
                                        ),
                                      ]
                                    ),
                                  ],
                                  1
                                )
                              : _vm._e(),
                          ])
                        : _vm._e(),
                    ]
                  ),
                ],
                2
              ),
            ],
            1
          ),
          _vm._v(" "),
          _c(
            "div",
            { staticClass: "dropdown" },
            [
              _c(
                "b-dropdown",
                {
                  staticClass: "m-md-2 user col align-self-end d-md-block",
                  attrs: {
                    id: "dropdown-1",
                    text: "Dropdown Button",
                    "toggle-class": "text-decoration-none",
                    "no-caret": "",
                    variant: "link",
                  },
                },
                [
                  _c("template", { slot: "button-content" }, [
                    _c("img", {
                      attrs: {
                        src: "/images/avatar/" + _vm.currentUser.avatar,
                        id: "userDropdown",
                        alt: "",
                        "data-toggle": "dropdown",
                        "aria-haspopup": "true",
                        "aria-expanded": "false",
                      },
                    }),
                  ]),
                  _vm._v(" "),
                  _c(
                    "div",
                    {
                      staticClass: "dropdown-menu-right",
                      attrs: { "aria-labelledby": "userDropdown" },
                    },
                    [
                      _c("div", { staticClass: "dropdown-header" }, [
                        _c("i", { staticClass: "i-Lock-User mr-1" }),
                        _vm._v(" "),
                        _c("span", [_vm._v(_vm._s(_vm.currentUser.username))]),
                      ]),
                      _vm._v(" "),
                      _c(
                        "router-link",
                        {
                          staticClass: "dropdown-item",
                          attrs: { to: "/app/profile" },
                        },
                        [_vm._v(_vm._s(_vm.$t("profil")))]
                      ),
                      _vm._v(" "),
                      _vm.currentUserPermissions &&
                      _vm.currentUserPermissions.includes("setting_system")
                        ? _c(
                            "router-link",
                            {
                              staticClass: "dropdown-item",
                              attrs: { to: "/app/settings/System_settings" },
                            },
                            [_vm._v(_vm._s(_vm.$t("Settings")))]
                          )
                        : _vm._e(),
                      _vm._v(" "),
                      _c(
                        "a",
                        {
                          staticClass: "dropdown-item",
                          attrs: { href: "#" },
                          on: {
                            click: function ($event) {
                              $event.preventDefault()
                              return _vm.logoutUser($event)
                            },
                          },
                        },
                        [_vm._v(_vm._s(_vm.$t("logout")))]
                      ),
                    ],
                    1
                  ),
                ],
                2
              ),
            ],
            1
          ),
        ]
      ),
    ]
  )
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/src/containers/layouts/largeSidebar/index.vue?vue&type=template&id=427f8858&":
/*!******************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/src/containers/layouts/largeSidebar/index.vue?vue&type=template&id=427f8858& ***!
  \******************************************************************************************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "render", function() { return render; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return staticRenderFns; });
var render = function () {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c(
    "div",
    { staticClass: "app-admin-wrap layout-sidebar-large clearfix" },
    [
      _c("top-nav"),
      _vm._v(" "),
      _c("sidebar"),
      _vm._v(" "),
      _c("main", [
        _c(
          "div",
          {
            staticClass: "main-content-wrap d-flex flex-column flex-grow-1",
            class: {
              "sidenav-open": _vm.getSideBarToggleProperties.isSideNavOpen,
            },
          },
          [
            _c(
              "transition",
              { attrs: { name: "page", mode: "out-in" } },
              [_c("router-view")],
              1
            ),
            _vm._v(" "),
            _c("div", { staticClass: "flex-grow-1" }),
            _vm._v(" "),
            _c("appFooter"),
          ],
          1
        ),
      ]),
    ],
    1
  )
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./resources/src/containers/layouts/common/footer.vue":
/*!************************************************************!*\
  !*** ./resources/src/containers/layouts/common/footer.vue ***!
  \************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _footer_vue_vue_type_template_id_1dfb17ff_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./footer.vue?vue&type=template&id=1dfb17ff&scoped=true& */ "./resources/src/containers/layouts/common/footer.vue?vue&type=template&id=1dfb17ff&scoped=true&");
/* harmony import */ var _footer_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./footer.vue?vue&type=script&lang=js& */ "./resources/src/containers/layouts/common/footer.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _footer_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _footer_vue_vue_type_template_id_1dfb17ff_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"],
  _footer_vue_vue_type_template_id_1dfb17ff_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  "1dfb17ff",
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/src/containers/layouts/common/footer.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/src/containers/layouts/common/footer.vue?vue&type=script&lang=js&":
/*!*************************************************************************************!*\
  !*** ./resources/src/containers/layouts/common/footer.vue?vue&type=script&lang=js& ***!
  \*************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_footer_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/babel-loader/lib??ref--4-0!../../../../../node_modules/vue-loader/lib??vue-loader-options!./footer.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/src/containers/layouts/common/footer.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_footer_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/src/containers/layouts/common/footer.vue?vue&type=template&id=1dfb17ff&scoped=true&":
/*!*******************************************************************************************************!*\
  !*** ./resources/src/containers/layouts/common/footer.vue?vue&type=template&id=1dfb17ff&scoped=true& ***!
  \*******************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_footer_vue_vue_type_template_id_1dfb17ff_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../node_modules/vue-loader/lib??vue-loader-options!./footer.vue?vue&type=template&id=1dfb17ff&scoped=true& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/src/containers/layouts/common/footer.vue?vue&type=template&id=1dfb17ff&scoped=true&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_footer_vue_vue_type_template_id_1dfb17ff_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_footer_vue_vue_type_template_id_1dfb17ff_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./resources/src/containers/layouts/largeSidebar/Sidebar.vue":
/*!*******************************************************************!*\
  !*** ./resources/src/containers/layouts/largeSidebar/Sidebar.vue ***!
  \*******************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Sidebar_vue_vue_type_template_id_696fbebe_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Sidebar.vue?vue&type=template&id=696fbebe&scoped=true& */ "./resources/src/containers/layouts/largeSidebar/Sidebar.vue?vue&type=template&id=696fbebe&scoped=true&");
/* harmony import */ var _Sidebar_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Sidebar.vue?vue&type=script&lang=js& */ "./resources/src/containers/layouts/largeSidebar/Sidebar.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _Sidebar_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _Sidebar_vue_vue_type_template_id_696fbebe_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"],
  _Sidebar_vue_vue_type_template_id_696fbebe_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  "696fbebe",
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/src/containers/layouts/largeSidebar/Sidebar.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/src/containers/layouts/largeSidebar/Sidebar.vue?vue&type=script&lang=js&":
/*!********************************************************************************************!*\
  !*** ./resources/src/containers/layouts/largeSidebar/Sidebar.vue?vue&type=script&lang=js& ***!
  \********************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Sidebar_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/babel-loader/lib??ref--4-0!../../../../../node_modules/vue-loader/lib??vue-loader-options!./Sidebar.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/src/containers/layouts/largeSidebar/Sidebar.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Sidebar_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/src/containers/layouts/largeSidebar/Sidebar.vue?vue&type=template&id=696fbebe&scoped=true&":
/*!**************************************************************************************************************!*\
  !*** ./resources/src/containers/layouts/largeSidebar/Sidebar.vue?vue&type=template&id=696fbebe&scoped=true& ***!
  \**************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Sidebar_vue_vue_type_template_id_696fbebe_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../node_modules/vue-loader/lib??vue-loader-options!./Sidebar.vue?vue&type=template&id=696fbebe&scoped=true& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/src/containers/layouts/largeSidebar/Sidebar.vue?vue&type=template&id=696fbebe&scoped=true&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Sidebar_vue_vue_type_template_id_696fbebe_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Sidebar_vue_vue_type_template_id_696fbebe_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./resources/src/containers/layouts/largeSidebar/TopNav.vue":
/*!******************************************************************!*\
  !*** ./resources/src/containers/layouts/largeSidebar/TopNav.vue ***!
  \******************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _TopNav_vue_vue_type_template_id_7dfa9f1c___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./TopNav.vue?vue&type=template&id=7dfa9f1c& */ "./resources/src/containers/layouts/largeSidebar/TopNav.vue?vue&type=template&id=7dfa9f1c&");
/* harmony import */ var _TopNav_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./TopNav.vue?vue&type=script&lang=js& */ "./resources/src/containers/layouts/largeSidebar/TopNav.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _TopNav_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _TopNav_vue_vue_type_template_id_7dfa9f1c___WEBPACK_IMPORTED_MODULE_0__["render"],
  _TopNav_vue_vue_type_template_id_7dfa9f1c___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/src/containers/layouts/largeSidebar/TopNav.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/src/containers/layouts/largeSidebar/TopNav.vue?vue&type=script&lang=js&":
/*!*******************************************************************************************!*\
  !*** ./resources/src/containers/layouts/largeSidebar/TopNav.vue?vue&type=script&lang=js& ***!
  \*******************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_TopNav_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/babel-loader/lib??ref--4-0!../../../../../node_modules/vue-loader/lib??vue-loader-options!./TopNav.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/src/containers/layouts/largeSidebar/TopNav.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_TopNav_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/src/containers/layouts/largeSidebar/TopNav.vue?vue&type=template&id=7dfa9f1c&":
/*!*************************************************************************************************!*\
  !*** ./resources/src/containers/layouts/largeSidebar/TopNav.vue?vue&type=template&id=7dfa9f1c& ***!
  \*************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_TopNav_vue_vue_type_template_id_7dfa9f1c___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../node_modules/vue-loader/lib??vue-loader-options!./TopNav.vue?vue&type=template&id=7dfa9f1c& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/src/containers/layouts/largeSidebar/TopNav.vue?vue&type=template&id=7dfa9f1c&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_TopNav_vue_vue_type_template_id_7dfa9f1c___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_TopNav_vue_vue_type_template_id_7dfa9f1c___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./resources/src/containers/layouts/largeSidebar/index.vue":
/*!*****************************************************************!*\
  !*** ./resources/src/containers/layouts/largeSidebar/index.vue ***!
  \*****************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _index_vue_vue_type_template_id_427f8858___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./index.vue?vue&type=template&id=427f8858& */ "./resources/src/containers/layouts/largeSidebar/index.vue?vue&type=template&id=427f8858&");
/* harmony import */ var _index_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./index.vue?vue&type=script&lang=js& */ "./resources/src/containers/layouts/largeSidebar/index.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _index_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _index_vue_vue_type_template_id_427f8858___WEBPACK_IMPORTED_MODULE_0__["render"],
  _index_vue_vue_type_template_id_427f8858___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/src/containers/layouts/largeSidebar/index.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/src/containers/layouts/largeSidebar/index.vue?vue&type=script&lang=js&":
/*!******************************************************************************************!*\
  !*** ./resources/src/containers/layouts/largeSidebar/index.vue?vue&type=script&lang=js& ***!
  \******************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/babel-loader/lib??ref--4-0!../../../../../node_modules/vue-loader/lib??vue-loader-options!./index.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/src/containers/layouts/largeSidebar/index.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/src/containers/layouts/largeSidebar/index.vue?vue&type=template&id=427f8858&":
/*!************************************************************************************************!*\
  !*** ./resources/src/containers/layouts/largeSidebar/index.vue?vue&type=template&id=427f8858& ***!
  \************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_template_id_427f8858___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../node_modules/vue-loader/lib??vue-loader-options!./index.vue?vue&type=template&id=427f8858& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/src/containers/layouts/largeSidebar/index.vue?vue&type=template&id=427f8858&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_template_id_427f8858___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_template_id_427f8858___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./resources/src/utils/index.js":
/*!**************************************!*\
  !*** ./resources/src/utils/index.js ***!
  \**************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
var toggleFullScreen = function toggleFullScreen() {
  var doc = window.document;
  var docEl = doc.documentElement;
  var requestFullScreen = docEl.requestFullscreen || docEl.mozRequestFullScreen || docEl.webkitRequestFullScreen || docEl.msRequestFullscreen;
  var cancelFullScreen = doc.exitFullscreen || doc.mozCancelFullScreen || doc.webkitExitFullscreen || doc.msExitFullscreen;

  if (!doc.fullscreenElement && !doc.mozFullScreenElement && !doc.webkitFullscreenElement && !doc.msFullscreenElement) {
    requestFullScreen.call(docEl);
  } else {
    cancelFullScreen.call(doc);
  }
};

/* harmony default export */ __webpack_exports__["default"] = ({
  toggleFullScreen: toggleFullScreen
});

/***/ })

}]);