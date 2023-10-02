(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["store_product"],{

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/src/views/app/pages/deferreds/Add_deferred.vue?vue&type=script&lang=js&":
/*!***************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/src/views/app/pages/deferreds/Add_deferred.vue?vue&type=script&lang=js& ***!
  \***************************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var vue_upload_multiple_image__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vue-upload-multiple-image */ "./node_modules/vue-upload-multiple-image/src/main.js");
/* harmony import */ var _johmun_vue_tags_input__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @johmun/vue-tags-input */ "./node_modules/@johmun/vue-tags-input/dist/vue-tags-input.js");
/* harmony import */ var _johmun_vue_tags_input__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_johmun_vue_tags_input__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var nprogress__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! nprogress */ "./node_modules/nprogress/nprogress.js");
/* harmony import */ var nprogress__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(nprogress__WEBPACK_IMPORTED_MODULE_2__);
var _methods;

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArrayLimit(arr, i) { var _i = arr == null ? null : typeof Symbol !== "undefined" && arr[Symbol.iterator] || arr["@@iterator"]; if (_i == null) return; var _arr = []; var _n = true; var _d = false; var _s, _e; try { for (_i = _i.call(arr); !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
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
  metaInfo: {
    title: "Create Product"
  },
  data: function data() {
    return {
      len: 8,
      change: false,
      isLoading: true,
      SubmitProcessing: false,
      customers: [],
      data: new FormData(),
      deferred: {
        date: new Date().toISOString().slice(0, 10),
        customer_id: "",
        amount: 0,
        paypackdate: new Date().toISOString().slice(0, 10),
        is_paied: false,
        is_verified: false,
        products: "",
        note: "",
        phone: ""
      },
      code_exist: ""
    };
  },
  components: {
    VueUploadMultipleImage: vue_upload_multiple_image__WEBPACK_IMPORTED_MODULE_0__["default"],
    VueTagsInput: _johmun_vue_tags_input__WEBPACK_IMPORTED_MODULE_1___default.a
  },
  methods: (_methods = {
    //------------- Submit Validation Create Product
    Submit_Product: function Submit_Product() {
      var _this = this;

      this.$refs.Create_deferred.validate().then(function (success) {
        if (!success) {
          _this.makeToast("danger", _this.$t("Please_fill_the_form_correctly"), _this.$t("Failed"));
        } else {
          _this.Create_Deferred();
        }
      });
    },
    //------ Toast
    makeToast: function makeToast(variant, msg, title) {
      this.$root.$bvToast.toast(msg, {
        title: title,
        variant: variant,
        solid: true
      });
    },
    //------ Validation State
    getValidationState: function getValidationState(_ref) {
      var dirty = _ref.dirty,
          validated = _ref.validated,
          _ref$valid = _ref.valid,
          valid = _ref$valid === void 0 ? null : _ref$valid;
      return dirty || validated ? valid : null;
    },
    //------Show Notification If Variant is Duplicate
    showNotifDuplicate: function showNotifDuplicate() {
      this.makeToast("warning", this.$t("VariantDuplicate"), this.$t("Warning"));
    },
    //------ Event upload Image Success
    uploadImageSuccess: function uploadImageSuccess(formData, index, fileList, imageArray) {
      this.images = fileList;
    },
    //------ Event before Remove Image
    beforeRemove: function beforeRemove(index, done, fileList) {
      var remove = confirm("remove image");

      if (remove == true) {
        this.images = fileList;
        done();
      } else {}
    }
  }, _defineProperty(_methods, "getValidationState", function getValidationState(_ref2) {
    var dirty = _ref2.dirty,
        validated = _ref2.validated,
        _ref2$valid = _ref2.valid,
        valid = _ref2$valid === void 0 ? null : _ref2$valid;
    return dirty || validated ? valid : null;
  }), _defineProperty(_methods, "GetElements", function GetElements() {
    var _this2 = this;

    axios.get("Deffereds/create").then(function (response) {
      _this2.customers = response.data.customers;
      _this2.isLoading = false;
    })["catch"](function (response) {
      alet("hello");
      setTimeout(function () {
        _this2.isLoading = false;
      }, 500);

      _this2.makeToast("danger", _this2.$t("InvalidData"), _this2.$t("Failed"));
    });
  }), _defineProperty(_methods, "Get_Units_SubBase", function Get_Units_SubBase(value) {
    var _this3 = this;

    axios.get("Get_Units_SubBase?id=" + value).then(function (_ref3) {
      var data = _ref3.data;
      return _this3.units_sub = data;
    });
  }), _defineProperty(_methods, "Selected_Unit", function Selected_Unit(value) {
    this.units_sub = [];
    this.product.unit_sale_id = "";
    this.product.unit_purchase_id = "";
    this.Get_Units_SubBase(value);
  }), _defineProperty(_methods, "Create_Deferred", function Create_Deferred() {
    var _this4 = this;

    // alert(655)
    // Start the progress bar.
    nprogress__WEBPACK_IMPORTED_MODULE_2___default.a.start();
    nprogress__WEBPACK_IMPORTED_MODULE_2___default.a.set(0.1);
    var self = this;
    self.SubmitProcessing = true; // append objet deferred

    Object.entries(self.deferred).forEach(function (_ref4) {
      var _ref5 = _slicedToArray(_ref4, 2),
          key = _ref5[0],
          value = _ref5[1];

      self.data.append(key, value);
    });
    axios.post("Deffereds", self.data).then(function (response) {
      // console.log(response)
      // Complete the animation of theprogress bar.
      nprogress__WEBPACK_IMPORTED_MODULE_2___default.a.done();
      self.SubmitProcessing = false; // this.$router.push({ name: "index_products" });

      _this4.makeToast("success", _this4.$t("Successfully_Created"), _this4.$t("Success"));
    })["catch"](function (error) {
      console.log(error); // Complete the animation of theprogress bar.

      nprogress__WEBPACK_IMPORTED_MODULE_2___default.a.done();

      if (error.errors.code.length > 0) {
        self.code_exist = error.errors.code[0];
      }

      _this4.makeToast("danger", _this4.$t("InvalidData"), _this4.$t("Failed"));

      self.SubmitProcessing = false;
    });
  }), _methods),
  //end Methods
  //-----------------------------Created function-------------------
  created: function created() {
    this.GetElements();
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/src/views/app/pages/products/Add_product.vue?vue&type=script&lang=js&":
/*!*************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/src/views/app/pages/products/Add_product.vue?vue&type=script&lang=js& ***!
  \*************************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var vue_upload_multiple_image__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vue-upload-multiple-image */ "./node_modules/vue-upload-multiple-image/src/main.js");
/* harmony import */ var _johmun_vue_tags_input__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @johmun/vue-tags-input */ "./node_modules/@johmun/vue-tags-input/dist/vue-tags-input.js");
/* harmony import */ var _johmun_vue_tags_input__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_johmun_vue_tags_input__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var nprogress__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! nprogress */ "./node_modules/nprogress/nprogress.js");
/* harmony import */ var nprogress__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(nprogress__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var vuex__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! vuex */ "./node_modules/vuex/dist/vuex.esm.js");
function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArrayLimit(arr, i) { var _i = arr == null ? null : typeof Symbol !== "undefined" && arr[Symbol.iterator] || arr["@@iterator"]; if (_i == null) return; var _arr = []; var _n = true; var _d = false; var _s, _e; try { for (_i = _i.call(arr); !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

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




/* harmony default export */ __webpack_exports__["default"] = ({
  metaInfo: {
    title: "Create Product"
  },
  data: function data() {
    return {
      tag: "",
      len: 8,
      images: [],
      imageArray: [],
      change: false,
      isLoading: true,
      SubmitProcessing: false,
      data: new FormData(),
      categories: [],
      units: [],
      units_sub: [],
      brands: [],
      roles: {},
      shops: [],
      variants: [],
      product: {
        shop_id: "",
        product_status: "",
        name: "",
        code: "",
        Type_barcode: "",
        cost: "",
        price: "",
        brand_id: "",
        category_id: "",
        TaxNet: "0",
        tax_method: "1",
        unit_id: "",
        unit_sale_id: "",
        unit_purchase_id: "",
        stock_alert: "0",
        image: "",
        note: "",
        is_variant: false,
        en_description: "",
        ar_description: "",
        discount: "",
        en_name: ""
      },
      code_exist: ""
    };
  },
  components: {
    VueUploadMultipleImage: vue_upload_multiple_image__WEBPACK_IMPORTED_MODULE_0__["default"],
    VueTagsInput: _johmun_vue_tags_input__WEBPACK_IMPORTED_MODULE_1___default.a
  },
  computed: _objectSpread({}, Object(vuex__WEBPACK_IMPORTED_MODULE_3__["mapGetters"])(["currentUserPermissions", "CurrentType"])),
  methods: {
    //------------- Submit Validation Create Product
    Submit_Product: function Submit_Product() {
      var _this = this;

      this.$refs.Create_Product.validate().then(function (success) {
        if (!success) {
          _this.makeToast("danger", _this.$t("Please_fill_the_form_correctly"), _this.$t("Failed"));
        } else {
          _this.Create_Product();
        }
      });
    },
    //------ Toast
    makeToast: function makeToast(variant, msg, title) {
      this.$root.$bvToast.toast(msg, {
        title: title,
        variant: variant,
        solid: true
      });
    },
    //------ Validation State
    getValidationState: function getValidationState(_ref) {
      var dirty = _ref.dirty,
          validated = _ref.validated,
          _ref$valid = _ref.valid,
          valid = _ref$valid === void 0 ? null : _ref$valid;
      return dirty || validated ? valid : null;
    },
    //------Show Notification If Variant is Duplicate
    showNotifDuplicate: function showNotifDuplicate() {
      this.makeToast("warning", this.$t("VariantDuplicate"), this.$t("Warning"));
    },
    //------ Event upload Image Success
    uploadImageSuccess: function uploadImageSuccess(formData, index, fileList, imageArray) {
      this.images = fileList;
    },
    //------ Event before Remove Image
    beforeRemove: function beforeRemove(index, done, fileList) {
      var remove = confirm("remove image");

      if (remove == true) {
        this.images = fileList;
        done();
      } else {}
    },
    //-------------- Product Get Elements
    GetElements: function GetElements() {
      var _this2 = this;

      axios.get("Products/create").then(function (response) {
        _this2.categories = response.data.categories;
        _this2.brands = response.data.brands;
        _this2.units = response.data.units;
        _this2.shops = response.data.shops;
        _this2.isLoading = false;
      })["catch"](function (response) {
        setTimeout(function () {
          _this2.isLoading = false;
        }, 500);

        _this2.makeToast("danger", _this2.$t("InvalidData"), _this2.$t("Failed"));
      });
    },
    //---------------------- Get Sub Units with Unit id ------------------------------\\
    Get_Units_SubBase: function Get_Units_SubBase(value) {
      var _this3 = this;

      axios.get("Get_Units_SubBase?id=" + value).then(function (_ref2) {
        var data = _ref2.data;
        return _this3.units_sub = data;
      });
    },
    //---------------------- Event Select Unit Product ------------------------------\\
    Selected_Unit: function Selected_Unit(value) {
      this.units_sub = [];
      this.product.unit_sale_id = "";
      this.product.unit_purchase_id = "";
      this.Get_Units_SubBase(value);
    },
    //------------------------------ Create new Product ------------------------------\\
    Create_Product: function Create_Product() {
      var _this4 = this;

      // Start the progress bar.
      nprogress__WEBPACK_IMPORTED_MODULE_2___default.a.start();
      nprogress__WEBPACK_IMPORTED_MODULE_2___default.a.set(0.1);
      var self = this;
      self.SubmitProcessing = true;

      if (self.product.is_variant && self.variants.length <= 0) {
        self.product.is_variant = false;
      } // append objet product


      Object.entries(self.product).forEach(function (_ref3) {
        var _ref4 = _slicedToArray(_ref3, 2),
            key = _ref4[0],
            value = _ref4[1];

        self.data.append(key, value);
      }); // append array variants

      if (self.variants.length) {
        for (var i = 0; i < self.variants.length; i++) {
          self.data.append("variants[" + i + "]", self.variants[i].text);
        }
      } //append array images


      if (self.images.length > 0) {
        for (var k = 0; k < self.images.length; k++) {
          Object.entries(self.images[k]).forEach(function (_ref5) {
            var _ref6 = _slicedToArray(_ref5, 2),
                key = _ref6[0],
                value = _ref6[1];

            self.data.append("images[" + k + "][" + key + "]", value);
          });
        }
      } // Send Data with axios


      axios.post("Products", self.data).then(function (response) {
        // Complete the animation of theprogress bar.
        nprogress__WEBPACK_IMPORTED_MODULE_2___default.a.done();
        self.SubmitProcessing = false;

        _this4.$router.push({
          name: "index_products"
        });

        _this4.makeToast("success", _this4.$t("Successfully_Created"), _this4.$t("Success"));
      })["catch"](function (error) {
        // Complete the animation of theprogress bar.
        nprogress__WEBPACK_IMPORTED_MODULE_2___default.a.done();

        if (error.errors.code.length > 0) {
          self.code_exist = error.errors.code[0];
        }

        _this4.makeToast("danger", _this4.$t("InvalidData"), _this4.$t("Failed"));

        self.SubmitProcessing = false;
      });
    }
  },
  //end Methods
  //-----------------------------Created function-------------------
  created: function created() {
    this.GetElements();
  }
});

/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/src/views/app/pages/deferreds/Add_deferred.vue?vue&type=template&id=56892cb5&":
/*!*******************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/src/views/app/pages/deferreds/Add_deferred.vue?vue&type=template&id=56892cb5& ***!
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
    { staticClass: "main-content" },
    [
      _c("breadcumb", {
        attrs: { page: _vm.$t("AddProduct"), folder: _vm.$t("Products") },
      }),
      _vm._v(" "),
      _vm.isLoading
        ? _c("div", {
            staticClass: "loading_page spinner spinner-primary mr-3",
          })
        : _vm._e(),
      _vm._v(" "),
      !_vm.isLoading
        ? _c(
            "validation-observer",
            { ref: "Create_deferred" },
            [
              _c(
                "b-form",
                {
                  attrs: { enctype: "multipart/form-data" },
                  on: {
                    submit: function ($event) {
                      $event.preventDefault()
                      return _vm.Submit_Product($event)
                    },
                  },
                },
                [
                  _c(
                    "b-row",
                    [
                      _c(
                        "b-col",
                        { attrs: { md: "8" } },
                        [
                          _c(
                            "b-card",
                            [
                              _c(
                                "b-row",
                                [
                                  _c(
                                    "b-col",
                                    { staticClass: "mb-2", attrs: { md: "6" } },
                                    [
                                      _c("validation-provider", {
                                        attrs: {
                                          name: "date",
                                          rules: { required: true },
                                        },
                                        scopedSlots: _vm._u(
                                          [
                                            {
                                              key: "default",
                                              fn: function (validationContext) {
                                                return [
                                                  _c(
                                                    "b-form-group",
                                                    {
                                                      attrs: {
                                                        label: _vm.$t("date"),
                                                      },
                                                    },
                                                    [
                                                      _c("b-form-input", {
                                                        attrs: {
                                                          state:
                                                            _vm.getValidationState(
                                                              validationContext
                                                            ),
                                                          "aria-describedby":
                                                            "date-feedback",
                                                          type: "date",
                                                        },
                                                        model: {
                                                          value:
                                                            _vm.deferred.date,
                                                          callback: function (
                                                            $$v
                                                          ) {
                                                            _vm.$set(
                                                              _vm.deferred,
                                                              "date",
                                                              $$v
                                                            )
                                                          },
                                                          expression:
                                                            "deferred.date",
                                                        },
                                                      }),
                                                      _vm._v(" "),
                                                      _c(
                                                        "b-form-invalid-feedback",
                                                        {
                                                          attrs: {
                                                            id: "OrderTax-feedback",
                                                          },
                                                        },
                                                        [
                                                          _vm._v(
                                                            _vm._s(
                                                              validationContext
                                                                .errors[0]
                                                            )
                                                          ),
                                                        ]
                                                      ),
                                                    ],
                                                    1
                                                  ),
                                                ]
                                              },
                                            },
                                          ],
                                          null,
                                          false,
                                          4113339856
                                        ),
                                      }),
                                    ],
                                    1
                                  ),
                                  _vm._v(" "),
                                  _c(
                                    "b-col",
                                    { staticClass: "mb-2", attrs: { md: "6" } },
                                    [
                                      _c("validation-provider", {
                                        attrs: {
                                          name: "amount",
                                          rules: {
                                            required: true,
                                            regex: /^\d*\.?\d*$/,
                                          },
                                        },
                                        scopedSlots: _vm._u(
                                          [
                                            {
                                              key: "default",
                                              fn: function (validationContext) {
                                                return [
                                                  _c(
                                                    "b-form-group",
                                                    {
                                                      attrs: {
                                                        label: _vm.$t("amount"),
                                                      },
                                                    },
                                                    [
                                                      _c("b-form-input", {
                                                        attrs: {
                                                          state:
                                                            _vm.getValidationState(
                                                              validationContext
                                                            ),
                                                          "aria-describedby":
                                                            "def_amount-feedback",
                                                          label: "amount",
                                                          placeholder:
                                                            _vm.$t(
                                                              "Enter_def_amount"
                                                            ),
                                                        },
                                                        model: {
                                                          value:
                                                            _vm.deferred.amount,
                                                          callback: function (
                                                            $$v
                                                          ) {
                                                            _vm.$set(
                                                              _vm.deferred,
                                                              "amount",
                                                              $$v
                                                            )
                                                          },
                                                          expression:
                                                            "deferred.amount",
                                                        },
                                                      }),
                                                      _vm._v(" "),
                                                      _c(
                                                        "b-form-invalid-feedback",
                                                        {
                                                          attrs: {
                                                            id: "def_amount-feedback",
                                                          },
                                                        },
                                                        [
                                                          _vm._v(
                                                            _vm._s(
                                                              validationContext
                                                                .errors[0]
                                                            )
                                                          ),
                                                        ]
                                                      ),
                                                    ],
                                                    1
                                                  ),
                                                ]
                                              },
                                            },
                                          ],
                                          null,
                                          false,
                                          1864346662
                                        ),
                                      }),
                                    ],
                                    1
                                  ),
                                  _vm._v(" "),
                                  _c(
                                    "b-col",
                                    { staticClass: "mb-2", attrs: { md: "6" } },
                                    [
                                      _c("validation-provider", {
                                        attrs: {
                                          name: "customer",
                                          rules: { required: true },
                                        },
                                        scopedSlots: _vm._u(
                                          [
                                            {
                                              key: "default",
                                              fn: function (ref) {
                                                var valid = ref.valid
                                                var errors = ref.errors
                                                return _c(
                                                  "b-form-group",
                                                  {
                                                    attrs: {
                                                      label:
                                                        _vm.$t("customer_def"),
                                                    },
                                                  },
                                                  [
                                                    _c("v-select", {
                                                      class: {
                                                        "is-invalid":
                                                          !!errors.length,
                                                      },
                                                      attrs: {
                                                        state: errors[0]
                                                          ? false
                                                          : valid
                                                          ? true
                                                          : null,
                                                        reduce: function (
                                                          label
                                                        ) {
                                                          return label.value
                                                        },
                                                        placeholder:
                                                          _vm.$t(
                                                            "Choose_Customer"
                                                          ),
                                                        options:
                                                          _vm.customers.map(
                                                            function (
                                                              customers
                                                            ) {
                                                              return {
                                                                label:
                                                                  customers.name,
                                                                value:
                                                                  customers.id,
                                                              }
                                                            }
                                                          ),
                                                      },
                                                      model: {
                                                        value:
                                                          _vm.deferred
                                                            .customer_id,
                                                        callback: function (
                                                          $$v
                                                        ) {
                                                          _vm.$set(
                                                            _vm.deferred,
                                                            "customer_id",
                                                            $$v
                                                          )
                                                        },
                                                        expression:
                                                          "deferred.customer_id",
                                                      },
                                                    }),
                                                    _vm._v(" "),
                                                    _c(
                                                      "b-form-invalid-feedback",
                                                      [
                                                        _vm._v(
                                                          _vm._s(errors[0])
                                                        ),
                                                      ]
                                                    ),
                                                  ],
                                                  1
                                                )
                                              },
                                            },
                                          ],
                                          null,
                                          false,
                                          4082258652
                                        ),
                                      }),
                                    ],
                                    1
                                  ),
                                  _vm._v(" "),
                                  _c(
                                    "b-col",
                                    { staticClass: "mb-2", attrs: { md: "6" } },
                                    [
                                      _c("validation-provider", {
                                        attrs: {
                                          name: "date",
                                          rules: { required: true },
                                        },
                                        scopedSlots: _vm._u(
                                          [
                                            {
                                              key: "default",
                                              fn: function (validationContext) {
                                                return [
                                                  _c(
                                                    "b-form-group",
                                                    {
                                                      attrs: {
                                                        label:
                                                          _vm.$t("paypackdate"),
                                                      },
                                                    },
                                                    [
                                                      _c("b-form-input", {
                                                        attrs: {
                                                          state:
                                                            _vm.getValidationState(
                                                              validationContext
                                                            ),
                                                          "aria-describedby":
                                                            "date-feedback",
                                                          type: "date",
                                                        },
                                                        model: {
                                                          value:
                                                            _vm.deferred
                                                              .paypackdate,
                                                          callback: function (
                                                            $$v
                                                          ) {
                                                            _vm.$set(
                                                              _vm.deferred,
                                                              "paypackdate",
                                                              $$v
                                                            )
                                                          },
                                                          expression:
                                                            "deferred.paypackdate",
                                                        },
                                                      }),
                                                      _vm._v(" "),
                                                      _c(
                                                        "b-form-invalid-feedback",
                                                        {
                                                          attrs: {
                                                            id: "OrderTax-feedback",
                                                          },
                                                        },
                                                        [
                                                          _vm._v(
                                                            _vm._s(
                                                              validationContext
                                                                .errors[0]
                                                            )
                                                          ),
                                                        ]
                                                      ),
                                                    ],
                                                    1
                                                  ),
                                                ]
                                              },
                                            },
                                          ],
                                          null,
                                          false,
                                          927146832
                                        ),
                                      }),
                                    ],
                                    1
                                  ),
                                  _vm._v(" "),
                                  _c(
                                    "b-col",
                                    { staticClass: "mb-2", attrs: { md: "6" } },
                                    [
                                      _c("div", { staticClass: "form-check" }, [
                                        _c(
                                          "label",
                                          {
                                            staticClass:
                                              "checkbox checkbox-outline-primary",
                                          },
                                          [
                                            _c("input", {
                                              directives: [
                                                {
                                                  name: "model",
                                                  rawName: "v-model",
                                                  value: _vm.deferred.is_paied,
                                                  expression:
                                                    "deferred.is_paied",
                                                },
                                              ],
                                              attrs: { type: "checkbox" },
                                              domProps: {
                                                checked: Array.isArray(
                                                  _vm.deferred.is_paied
                                                )
                                                  ? _vm._i(
                                                      _vm.deferred.is_paied,
                                                      null
                                                    ) > -1
                                                  : _vm.deferred.is_paied,
                                              },
                                              on: {
                                                change: function ($event) {
                                                  var $$a =
                                                      _vm.deferred.is_paied,
                                                    $$el = $event.target,
                                                    $$c = $$el.checked
                                                      ? true
                                                      : false
                                                  if (Array.isArray($$a)) {
                                                    var $$v = null,
                                                      $$i = _vm._i($$a, $$v)
                                                    if ($$el.checked) {
                                                      $$i < 0 &&
                                                        _vm.$set(
                                                          _vm.deferred,
                                                          "is_paied",
                                                          $$a.concat([$$v])
                                                        )
                                                    } else {
                                                      $$i > -1 &&
                                                        _vm.$set(
                                                          _vm.deferred,
                                                          "is_paied",
                                                          $$a
                                                            .slice(0, $$i)
                                                            .concat(
                                                              $$a.slice($$i + 1)
                                                            )
                                                        )
                                                    }
                                                  } else {
                                                    _vm.$set(
                                                      _vm.deferred,
                                                      "is_paied",
                                                      $$c
                                                    )
                                                  }
                                                },
                                              },
                                            }),
                                            _vm._v(" "),
                                            _c("span", [
                                              _vm._v(_vm._s(_vm.$t("IsPaied"))),
                                            ]),
                                            _vm._v(" "),
                                            _c("span", {
                                              staticClass: "checkmark",
                                            }),
                                          ]
                                        ),
                                      ]),
                                    ]
                                  ),
                                  _vm._v(" "),
                                  _c(
                                    "b-col",
                                    { staticClass: "mb-2", attrs: { md: "6" } },
                                    [
                                      _c("div", { staticClass: "form-check" }, [
                                        _c(
                                          "label",
                                          {
                                            staticClass:
                                              "checkbox checkbox-outline-primary",
                                          },
                                          [
                                            _c("input", {
                                              directives: [
                                                {
                                                  name: "model",
                                                  rawName: "v-model",
                                                  value:
                                                    _vm.deferred.is_verified,
                                                  expression:
                                                    "deferred.is_verified",
                                                },
                                              ],
                                              attrs: { type: "checkbox" },
                                              domProps: {
                                                checked: Array.isArray(
                                                  _vm.deferred.is_verified
                                                )
                                                  ? _vm._i(
                                                      _vm.deferred.is_verified,
                                                      null
                                                    ) > -1
                                                  : _vm.deferred.is_verified,
                                              },
                                              on: {
                                                change: function ($event) {
                                                  var $$a =
                                                      _vm.deferred.is_verified,
                                                    $$el = $event.target,
                                                    $$c = $$el.checked
                                                      ? true
                                                      : false
                                                  if (Array.isArray($$a)) {
                                                    var $$v = null,
                                                      $$i = _vm._i($$a, $$v)
                                                    if ($$el.checked) {
                                                      $$i < 0 &&
                                                        _vm.$set(
                                                          _vm.deferred,
                                                          "is_verified",
                                                          $$a.concat([$$v])
                                                        )
                                                    } else {
                                                      $$i > -1 &&
                                                        _vm.$set(
                                                          _vm.deferred,
                                                          "is_verified",
                                                          $$a
                                                            .slice(0, $$i)
                                                            .concat(
                                                              $$a.slice($$i + 1)
                                                            )
                                                        )
                                                    }
                                                  } else {
                                                    _vm.$set(
                                                      _vm.deferred,
                                                      "is_verified",
                                                      $$c
                                                    )
                                                  }
                                                },
                                              },
                                            }),
                                            _vm._v(" "),
                                            _c("span", [
                                              _vm._v(
                                                _vm._s(_vm.$t("is_verified"))
                                              ),
                                            ]),
                                            _vm._v(" "),
                                            _c("span", {
                                              staticClass: "checkmark",
                                            }),
                                          ]
                                        ),
                                      ]),
                                    ]
                                  ),
                                  _vm._v(" "),
                                  _c(
                                    "b-col",
                                    { staticClass: "mb-2", attrs: { md: "6" } },
                                    [
                                      _c(
                                        "b-form-group",
                                        {
                                          attrs: { label: _vm.$t("Products") },
                                        },
                                        [
                                          _c("textarea", {
                                            directives: [
                                              {
                                                name: "model",
                                                rawName: "v-model",
                                                value: _vm.deferred.products,
                                                expression: "deferred.products",
                                              },
                                            ],
                                            staticClass: "form-control",
                                            attrs: {
                                              rows: "4",
                                              placeholder:
                                                _vm.$t("writeProducts"),
                                            },
                                            domProps: {
                                              value: _vm.deferred.products,
                                            },
                                            on: {
                                              input: function ($event) {
                                                if ($event.target.composing) {
                                                  return
                                                }
                                                _vm.$set(
                                                  _vm.deferred,
                                                  "products",
                                                  $event.target.value
                                                )
                                              },
                                            },
                                          }),
                                        ]
                                      ),
                                    ],
                                    1
                                  ),
                                  _vm._v(" "),
                                  _c(
                                    "b-col",
                                    { staticClass: "mb-2", attrs: { md: "6" } },
                                    [
                                      _c(
                                        "b-form-group",
                                        { attrs: { label: _vm.$t("Note") } },
                                        [
                                          _c("textarea", {
                                            directives: [
                                              {
                                                name: "model",
                                                rawName: "v-model",
                                                value: _vm.deferred.note,
                                                expression: "deferred.note",
                                              },
                                            ],
                                            staticClass: "form-control",
                                            attrs: {
                                              rows: "4",
                                              placeholder: _vm.$t("Afewwords"),
                                            },
                                            domProps: {
                                              value: _vm.deferred.note,
                                            },
                                            on: {
                                              input: function ($event) {
                                                if ($event.target.composing) {
                                                  return
                                                }
                                                _vm.$set(
                                                  _vm.deferred,
                                                  "note",
                                                  $event.target.value
                                                )
                                              },
                                            },
                                          }),
                                        ]
                                      ),
                                    ],
                                    1
                                  ),
                                  _vm._v(" "),
                                  _c(
                                    "b-col",
                                    { staticClass: "mb-2", attrs: { md: "6" } },
                                    [
                                      _c("validation-provider", {
                                        attrs: {
                                          name: "phone",
                                          rules: {
                                            required: true,
                                            min: 3,
                                            max: 55,
                                          },
                                        },
                                        scopedSlots: _vm._u(
                                          [
                                            {
                                              key: "default",
                                              fn: function (validationContext) {
                                                return [
                                                  _c(
                                                    "b-form-group",
                                                    {
                                                      attrs: {
                                                        label: _vm.$t("Phonee"),
                                                      },
                                                    },
                                                    [
                                                      _c("b-form-input", {
                                                        attrs: {
                                                          state:
                                                            _vm.getValidationState(
                                                              validationContext
                                                            ),
                                                          "aria-describedby":
                                                            "phone-feedback",
                                                          label: "phone",
                                                          placeholder:
                                                            _vm.$t(
                                                              "Enter_Phonee"
                                                            ),
                                                        },
                                                        model: {
                                                          value:
                                                            _vm.deferred.phone,
                                                          callback: function (
                                                            $$v
                                                          ) {
                                                            _vm.$set(
                                                              _vm.deferred,
                                                              "phone",
                                                              $$v
                                                            )
                                                          },
                                                          expression:
                                                            "deferred.phone",
                                                        },
                                                      }),
                                                      _vm._v(" "),
                                                      _c(
                                                        "b-form-invalid-feedback",
                                                        {
                                                          attrs: {
                                                            id: "phone-feedback",
                                                          },
                                                        },
                                                        [
                                                          _vm._v(
                                                            _vm._s(
                                                              validationContext
                                                                .errors[0]
                                                            )
                                                          ),
                                                        ]
                                                      ),
                                                    ],
                                                    1
                                                  ),
                                                ]
                                              },
                                            },
                                          ],
                                          null,
                                          false,
                                          2111875358
                                        ),
                                      }),
                                    ],
                                    1
                                  ),
                                ],
                                1
                              ),
                            ],
                            1
                          ),
                        ],
                        1
                      ),
                      _vm._v(" "),
                      _c(
                        "b-col",
                        { staticClass: "mt-3", attrs: { md: "12" } },
                        [
                          _c(
                            "b-button",
                            {
                              attrs: {
                                variant: "primary",
                                type: "submit",
                                disabled: _vm.SubmitProcessing,
                              },
                            },
                            [_vm._v(_vm._s(_vm.$t("submit")))]
                          ),
                          _vm._v(" "),
                          _vm.SubmitProcessing ? _vm._m(0) : _vm._e(),
                        ],
                        1
                      ),
                    ],
                    1
                  ),
                ],
                1
              ),
            ],
            1
          )
        : _vm._e(),
    ],
    1
  )
}
var staticRenderFns = [
  function () {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "typo__p" }, [
      _c("div", { staticClass: "spinner sm spinner-primary mt-3" }),
    ])
  },
]
render._withStripped = true



/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/src/views/app/pages/products/Add_product.vue?vue&type=template&id=45a5ea63&":
/*!*****************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/src/views/app/pages/products/Add_product.vue?vue&type=template&id=45a5ea63& ***!
  \*****************************************************************************************************************************************************************************************************************************/
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
    { staticClass: "main-content" },
    [
      _c("breadcumb", {
        attrs: { page: _vm.$t("AddProduct"), folder: _vm.$t("Products") },
      }),
      _vm._v(" "),
      _vm.isLoading
        ? _c("div", {
            staticClass: "loading_page spinner spinner-primary mr-3",
          })
        : _vm._e(),
      _vm._v(" "),
      !_vm.isLoading
        ? _c(
            "validation-observer",
            { ref: "Create_Product" },
            [
              _c(
                "b-form",
                {
                  attrs: { enctype: "multipart/form-data" },
                  on: {
                    submit: function ($event) {
                      $event.preventDefault()
                      return _vm.Submit_Product($event)
                    },
                  },
                },
                [
                  _c(
                    "b-row",
                    [
                      _c(
                        "b-col",
                        { attrs: { md: "8" } },
                        [
                          _c(
                            "b-card",
                            [
                              _c(
                                "b-row",
                                [
                                  _c(
                                    "b-col",
                                    { staticClass: "mb-2", attrs: { md: "6" } },
                                    [
                                      _c("validation-provider", {
                                        attrs: {
                                          name: "Name",
                                          rules: {
                                            required: true,
                                            min: 3,
                                            max: 55,
                                          },
                                        },
                                        scopedSlots: _vm._u(
                                          [
                                            {
                                              key: "default",
                                              fn: function (validationContext) {
                                                return [
                                                  _c(
                                                    "b-form-group",
                                                    {
                                                      attrs: {
                                                        label:
                                                          _vm.$t(
                                                            "Name_product"
                                                          ),
                                                      },
                                                    },
                                                    [
                                                      _c("b-form-input", {
                                                        attrs: {
                                                          state:
                                                            _vm.getValidationState(
                                                              validationContext
                                                            ),
                                                          "aria-describedby":
                                                            "Name-feedback",
                                                          label: "Name",
                                                          placeholder:
                                                            _vm.$t(
                                                              "Enter_Name_Product"
                                                            ),
                                                        },
                                                        model: {
                                                          value:
                                                            _vm.product.name,
                                                          callback: function (
                                                            $$v
                                                          ) {
                                                            _vm.$set(
                                                              _vm.product,
                                                              "name",
                                                              $$v
                                                            )
                                                          },
                                                          expression:
                                                            "product.name",
                                                        },
                                                      }),
                                                      _vm._v(" "),
                                                      _c(
                                                        "b-form-invalid-feedback",
                                                        {
                                                          attrs: {
                                                            id: "Name-feedback",
                                                          },
                                                        },
                                                        [
                                                          _vm._v(
                                                            _vm._s(
                                                              validationContext
                                                                .errors[0]
                                                            )
                                                          ),
                                                        ]
                                                      ),
                                                    ],
                                                    1
                                                  ),
                                                ]
                                              },
                                            },
                                          ],
                                          null,
                                          false,
                                          4163318998
                                        ),
                                      }),
                                    ],
                                    1
                                  ),
                                  _vm._v(" "),
                                  _c(
                                    "b-col",
                                    { staticClass: "mb-2", attrs: { md: "6" } },
                                    [
                                      _c("validation-provider", {
                                        attrs: {
                                          name: "en_name",
                                          rules: {
                                            required: true,
                                            min: 3,
                                            max: 55,
                                          },
                                        },
                                        scopedSlots: _vm._u(
                                          [
                                            {
                                              key: "default",
                                              fn: function (validationContext) {
                                                return [
                                                  _c(
                                                    "b-form-group",
                                                    {
                                                      attrs: {
                                                        label:
                                                          _vm.$t("en_name"),
                                                      },
                                                    },
                                                    [
                                                      _c("b-form-input", {
                                                        attrs: {
                                                          state:
                                                            _vm.getValidationState(
                                                              validationContext
                                                            ),
                                                          "aria-describedby":
                                                            "name-feedback",
                                                          label: "en_name",
                                                          placeholder:
                                                            _vm.$t("en_name"),
                                                        },
                                                        model: {
                                                          value:
                                                            _vm.product.en_name,
                                                          callback: function (
                                                            $$v
                                                          ) {
                                                            _vm.$set(
                                                              _vm.product,
                                                              "en_name",
                                                              $$v
                                                            )
                                                          },
                                                          expression:
                                                            "product.en_name",
                                                        },
                                                      }),
                                                      _vm._v(" "),
                                                      _c(
                                                        "b-form-invalid-feedback",
                                                        {
                                                          attrs: {
                                                            id: "name-feedback",
                                                          },
                                                        },
                                                        [
                                                          _vm._v(
                                                            _vm._s(
                                                              validationContext
                                                                .errors[0]
                                                            )
                                                          ),
                                                        ]
                                                      ),
                                                    ],
                                                    1
                                                  ),
                                                ]
                                              },
                                            },
                                          ],
                                          null,
                                          false,
                                          1824526433
                                        ),
                                      }),
                                    ],
                                    1
                                  ),
                                  _vm._v(" "),
                                  _c(
                                    "b-col",
                                    { staticClass: "mb-2", attrs: { md: "6" } },
                                    [
                                      _c("validation-provider", {
                                        attrs: {
                                          name: "Code Product",
                                          rules: { required: true },
                                        },
                                        scopedSlots: _vm._u(
                                          [
                                            {
                                              key: "default",
                                              fn: function (ref) {
                                                var valid = ref.valid
                                                var errors = ref.errors
                                                return _c(
                                                  "b-form-group",
                                                  {
                                                    attrs: {
                                                      label:
                                                        _vm.$t("CodeProduct"),
                                                    },
                                                  },
                                                  [
                                                    _c(
                                                      "div",
                                                      {
                                                        staticClass:
                                                          "input-group",
                                                      },
                                                      [
                                                        _c("b-form-input", {
                                                          class: {
                                                            "is-invalid":
                                                              !!errors.length,
                                                          },
                                                          attrs: {
                                                            state: errors[0]
                                                              ? false
                                                              : valid
                                                              ? true
                                                              : null,
                                                            "aria-describedby":
                                                              "CodeProduct-feedback",
                                                            type: "text",
                                                          },
                                                          model: {
                                                            value:
                                                              _vm.product.code,
                                                            callback: function (
                                                              $$v
                                                            ) {
                                                              _vm.$set(
                                                                _vm.product,
                                                                "code",
                                                                $$v
                                                              )
                                                            },
                                                            expression:
                                                              "product.code",
                                                          },
                                                        }),
                                                        _vm._v(" "),
                                                        _c(
                                                          "b-form-invalid-feedback",
                                                          {
                                                            attrs: {
                                                              id: "CodeProduct-feedback",
                                                            },
                                                          },
                                                          [
                                                            _vm._v(
                                                              _vm._s(errors[0])
                                                            ),
                                                          ]
                                                        ),
                                                      ],
                                                      1
                                                    ),
                                                    _vm._v(" "),
                                                    _c("span", [
                                                      _vm._v(
                                                        _vm._s(
                                                          _vm.$t(
                                                            "Scan_your_barcode_and_select_the_correct_symbology_below"
                                                          )
                                                        )
                                                      ),
                                                    ]),
                                                    _vm._v(" "),
                                                    _vm.code_exist != ""
                                                      ? _c(
                                                          "b-alert",
                                                          {
                                                            staticClass:
                                                              "error mt-1",
                                                            attrs: {
                                                              show: "",
                                                              variant: "danger",
                                                            },
                                                          },
                                                          [
                                                            _vm._v(
                                                              _vm._s(
                                                                _vm.code_exist
                                                              )
                                                            ),
                                                          ]
                                                        )
                                                      : _vm._e(),
                                                  ],
                                                  1
                                                )
                                              },
                                            },
                                          ],
                                          null,
                                          false,
                                          1597786490
                                        ),
                                      }),
                                    ],
                                    1
                                  ),
                                  _vm._v(" "),
                                  _c(
                                    "b-col",
                                    { staticClass: "mb-2", attrs: { md: "6" } },
                                    [
                                      _c("validation-provider", {
                                        attrs: {
                                          name: "category",
                                          rules: { required: true },
                                        },
                                        scopedSlots: _vm._u(
                                          [
                                            {
                                              key: "default",
                                              fn: function (ref) {
                                                var valid = ref.valid
                                                var errors = ref.errors
                                                return _c(
                                                  "b-form-group",
                                                  {
                                                    attrs: {
                                                      label:
                                                        _vm.$t("Categorie"),
                                                    },
                                                  },
                                                  [
                                                    _c("v-select", {
                                                      class: {
                                                        "is-invalid":
                                                          !!errors.length,
                                                      },
                                                      attrs: {
                                                        state: errors[0]
                                                          ? false
                                                          : valid
                                                          ? true
                                                          : null,
                                                        reduce: function (
                                                          label
                                                        ) {
                                                          return label.value
                                                        },
                                                        placeholder:
                                                          _vm.$t(
                                                            "Choose_Category"
                                                          ),
                                                        options:
                                                          _vm.categories.map(
                                                            function (
                                                              categories
                                                            ) {
                                                              return {
                                                                label:
                                                                  categories.name,
                                                                value:
                                                                  categories.id,
                                                              }
                                                            }
                                                          ),
                                                      },
                                                      model: {
                                                        value:
                                                          _vm.product
                                                            .category_id,
                                                        callback: function (
                                                          $$v
                                                        ) {
                                                          _vm.$set(
                                                            _vm.product,
                                                            "category_id",
                                                            $$v
                                                          )
                                                        },
                                                        expression:
                                                          "product.category_id",
                                                      },
                                                    }),
                                                    _vm._v(" "),
                                                    _c(
                                                      "b-form-invalid-feedback",
                                                      [
                                                        _vm._v(
                                                          _vm._s(errors[0])
                                                        ),
                                                      ]
                                                    ),
                                                  ],
                                                  1
                                                )
                                              },
                                            },
                                          ],
                                          null,
                                          false,
                                          442498797
                                        ),
                                      }),
                                    ],
                                    1
                                  ),
                                  _vm._v(" "),
                                  _c(
                                    "b-col",
                                    { staticClass: "mb-2", attrs: { md: "6" } },
                                    [
                                      _c(
                                        "b-form-group",
                                        { attrs: { label: _vm.$t("Brand") } },
                                        [
                                          _c("v-select", {
                                            attrs: {
                                              placeholder:
                                                _vm.$t("Choose_Brand"),
                                              reduce: function (label) {
                                                return label.value
                                              },
                                              options: _vm.brands.map(function (
                                                brands
                                              ) {
                                                return {
                                                  label: brands.name,
                                                  value: brands.id,
                                                }
                                              }),
                                            },
                                            model: {
                                              value: _vm.product.brand_id,
                                              callback: function ($$v) {
                                                _vm.$set(
                                                  _vm.product,
                                                  "brand_id",
                                                  $$v
                                                )
                                              },
                                              expression: "product.brand_id",
                                            },
                                          }),
                                        ],
                                        1
                                      ),
                                    ],
                                    1
                                  ),
                                  _vm._v(" "),
                                  _c(
                                    "b-col",
                                    { staticClass: "mb-2", attrs: { md: "6" } },
                                    [
                                      _c("validation-provider", {
                                        attrs: {
                                          name: "Barcode Symbology",
                                          rules: { required: true },
                                        },
                                        scopedSlots: _vm._u(
                                          [
                                            {
                                              key: "default",
                                              fn: function (ref) {
                                                var valid = ref.valid
                                                var errors = ref.errors
                                                return _c(
                                                  "b-form-group",
                                                  {
                                                    attrs: {
                                                      label:
                                                        _vm.$t(
                                                          "BarcodeSymbology"
                                                        ),
                                                    },
                                                  },
                                                  [
                                                    _c("v-select", {
                                                      class: {
                                                        "is-invalid":
                                                          !!errors.length,
                                                      },
                                                      attrs: {
                                                        state: errors[0]
                                                          ? false
                                                          : valid
                                                          ? true
                                                          : null,
                                                        reduce: function (
                                                          label
                                                        ) {
                                                          return label.value
                                                        },
                                                        placeholder:
                                                          _vm.$t(
                                                            "Choose_Symbology"
                                                          ),
                                                        options: [
                                                          {
                                                            label: "Code 128",
                                                            value: "CODE128",
                                                          },
                                                          {
                                                            label: "Code 39",
                                                            value: "CODE39",
                                                          },
                                                          {
                                                            label: "EAN8",
                                                            value: "EAN8",
                                                          },
                                                          {
                                                            label: "EAN13",
                                                            value: "EAN13",
                                                          },
                                                          {
                                                            label: "UPC",
                                                            value: "UPC",
                                                          },
                                                        ],
                                                      },
                                                      model: {
                                                        value:
                                                          _vm.product
                                                            .Type_barcode,
                                                        callback: function (
                                                          $$v
                                                        ) {
                                                          _vm.$set(
                                                            _vm.product,
                                                            "Type_barcode",
                                                            $$v
                                                          )
                                                        },
                                                        expression:
                                                          "product.Type_barcode",
                                                      },
                                                    }),
                                                    _vm._v(" "),
                                                    _c(
                                                      "b-form-invalid-feedback",
                                                      [
                                                        _vm._v(
                                                          _vm._s(errors[0])
                                                        ),
                                                      ]
                                                    ),
                                                  ],
                                                  1
                                                )
                                              },
                                            },
                                          ],
                                          null,
                                          false,
                                          2783076652
                                        ),
                                      }),
                                    ],
                                    1
                                  ),
                                  _vm._v(" "),
                                  _c(
                                    "b-col",
                                    { staticClass: "mb-2", attrs: { md: "6" } },
                                    [
                                      _c("validation-provider", {
                                        attrs: {
                                          name: "Product Cost",
                                          rules: {
                                            required: true,
                                            regex: /^\d*\.?\d*$/,
                                          },
                                        },
                                        scopedSlots: _vm._u(
                                          [
                                            {
                                              key: "default",
                                              fn: function (validationContext) {
                                                return [
                                                  _c(
                                                    "b-form-group",
                                                    {
                                                      attrs: {
                                                        label:
                                                          _vm.$t("ProductCost"),
                                                      },
                                                    },
                                                    [
                                                      _c("b-form-input", {
                                                        attrs: {
                                                          state:
                                                            _vm.getValidationState(
                                                              validationContext
                                                            ),
                                                          "aria-describedby":
                                                            "ProductCost-feedback",
                                                          label: "Cost",
                                                          placeholder:
                                                            _vm.$t(
                                                              "Enter_Product_Cost"
                                                            ),
                                                        },
                                                        model: {
                                                          value:
                                                            _vm.product.cost,
                                                          callback: function (
                                                            $$v
                                                          ) {
                                                            _vm.$set(
                                                              _vm.product,
                                                              "cost",
                                                              $$v
                                                            )
                                                          },
                                                          expression:
                                                            "product.cost",
                                                        },
                                                      }),
                                                      _vm._v(" "),
                                                      _c(
                                                        "b-form-invalid-feedback",
                                                        {
                                                          attrs: {
                                                            id: "ProductCost-feedback",
                                                          },
                                                        },
                                                        [
                                                          _vm._v(
                                                            _vm._s(
                                                              validationContext
                                                                .errors[0]
                                                            )
                                                          ),
                                                        ]
                                                      ),
                                                    ],
                                                    1
                                                  ),
                                                ]
                                              },
                                            },
                                          ],
                                          null,
                                          false,
                                          1613947113
                                        ),
                                      }),
                                    ],
                                    1
                                  ),
                                  _vm._v(" "),
                                  _c(
                                    "b-col",
                                    { staticClass: "mb-2", attrs: { md: "6" } },
                                    [
                                      _c("validation-provider", {
                                        attrs: {
                                          name: "discount  ",
                                          rules: {
                                            required: true,
                                            regex: /^\d*\.?\d*$/,
                                          },
                                        },
                                        scopedSlots: _vm._u(
                                          [
                                            {
                                              key: "default",
                                              fn: function (validationContext) {
                                                return [
                                                  _c(
                                                    "b-form-group",
                                                    {
                                                      attrs: {
                                                        label:
                                                          _vm.$t("discount"),
                                                      },
                                                    },
                                                    [
                                                      _c("b-form-input", {
                                                        attrs: {
                                                          state:
                                                            _vm.getValidationState(
                                                              validationContext
                                                            ),
                                                          "aria-describedby":
                                                            "discount-feedback",
                                                          label: "Cost",
                                                          placeholder:
                                                            _vm.$t("discount"),
                                                        },
                                                        model: {
                                                          value:
                                                            _vm.product
                                                              .discount,
                                                          callback: function (
                                                            $$v
                                                          ) {
                                                            _vm.$set(
                                                              _vm.product,
                                                              "discount",
                                                              $$v
                                                            )
                                                          },
                                                          expression:
                                                            "product.discount",
                                                        },
                                                      }),
                                                      _vm._v(" "),
                                                      _c(
                                                        "b-form-invalid-feedback",
                                                        {
                                                          attrs: {
                                                            id: "ProductCost-feedback",
                                                          },
                                                        },
                                                        [
                                                          _vm._v(
                                                            _vm._s(
                                                              validationContext
                                                                .errors[0]
                                                            )
                                                          ),
                                                        ]
                                                      ),
                                                    ],
                                                    1
                                                  ),
                                                ]
                                              },
                                            },
                                          ],
                                          null,
                                          false,
                                          628300778
                                        ),
                                      }),
                                    ],
                                    1
                                  ),
                                  _vm._v(" "),
                                  _c(
                                    "b-col",
                                    { staticClass: "mb-2", attrs: { md: "6" } },
                                    [
                                      _c("validation-provider", {
                                        attrs: {
                                          name: "Product Price",
                                          rules: {
                                            required: true,
                                            regex: /^\d*\.?\d*$/,
                                          },
                                        },
                                        scopedSlots: _vm._u(
                                          [
                                            {
                                              key: "default",
                                              fn: function (validationContext) {
                                                return [
                                                  _c(
                                                    "b-form-group",
                                                    {
                                                      attrs: {
                                                        label:
                                                          _vm.$t(
                                                            "ProductPrice"
                                                          ),
                                                      },
                                                    },
                                                    [
                                                      _c("b-form-input", {
                                                        attrs: {
                                                          state:
                                                            _vm.getValidationState(
                                                              validationContext
                                                            ),
                                                          "aria-describedby":
                                                            "ProductPrice-feedback",
                                                          label: "Price",
                                                          placeholder: _vm.$t(
                                                            "Enter_Product_Price"
                                                          ),
                                                        },
                                                        model: {
                                                          value:
                                                            _vm.product.price,
                                                          callback: function (
                                                            $$v
                                                          ) {
                                                            _vm.$set(
                                                              _vm.product,
                                                              "price",
                                                              $$v
                                                            )
                                                          },
                                                          expression:
                                                            "product.price",
                                                        },
                                                      }),
                                                      _vm._v(" "),
                                                      _c(
                                                        "b-form-invalid-feedback",
                                                        {
                                                          attrs: {
                                                            id: "ProductPrice-feedback",
                                                          },
                                                        },
                                                        [
                                                          _vm._v(
                                                            _vm._s(
                                                              validationContext
                                                                .errors[0]
                                                            )
                                                          ),
                                                        ]
                                                      ),
                                                    ],
                                                    1
                                                  ),
                                                ]
                                              },
                                            },
                                          ],
                                          null,
                                          false,
                                          3709170025
                                        ),
                                      }),
                                    ],
                                    1
                                  ),
                                  _vm._v(" "),
                                  _c(
                                    "b-col",
                                    { staticClass: "mb-2", attrs: { md: "6" } },
                                    [
                                      _c("validation-provider", {
                                        attrs: {
                                          name: "Unit Product",
                                          rules: { required: true },
                                        },
                                        scopedSlots: _vm._u(
                                          [
                                            {
                                              key: "default",
                                              fn: function (ref) {
                                                var valid = ref.valid
                                                var errors = ref.errors
                                                return _c(
                                                  "b-form-group",
                                                  {
                                                    attrs: {
                                                      label:
                                                        _vm.$t("UnitProduct"),
                                                    },
                                                  },
                                                  [
                                                    _c("v-select", {
                                                      staticClass: "required",
                                                      class: {
                                                        "is-invalid":
                                                          !!errors.length,
                                                      },
                                                      attrs: {
                                                        state: errors[0]
                                                          ? false
                                                          : valid
                                                          ? true
                                                          : null,
                                                        required: "",
                                                        placeholder: _vm.$t(
                                                          "Choose_Unit_Product"
                                                        ),
                                                        reduce: function (
                                                          label
                                                        ) {
                                                          return label.value
                                                        },
                                                        options: _vm.units.map(
                                                          function (units) {
                                                            return {
                                                              label: units.name,
                                                              value: units.id,
                                                            }
                                                          }
                                                        ),
                                                      },
                                                      on: {
                                                        input:
                                                          _vm.Selected_Unit,
                                                      },
                                                      model: {
                                                        value:
                                                          _vm.product.unit_id,
                                                        callback: function (
                                                          $$v
                                                        ) {
                                                          _vm.$set(
                                                            _vm.product,
                                                            "unit_id",
                                                            $$v
                                                          )
                                                        },
                                                        expression:
                                                          "product.unit_id",
                                                      },
                                                    }),
                                                    _vm._v(" "),
                                                    _c(
                                                      "b-form-invalid-feedback",
                                                      [
                                                        _vm._v(
                                                          _vm._s(errors[0])
                                                        ),
                                                      ]
                                                    ),
                                                  ],
                                                  1
                                                )
                                              },
                                            },
                                          ],
                                          null,
                                          false,
                                          748547594
                                        ),
                                      }),
                                    ],
                                    1
                                  ),
                                  _vm._v(" "),
                                  _c(
                                    "b-col",
                                    { staticClass: "mb-2", attrs: { md: "6" } },
                                    [
                                      _c("validation-provider", {
                                        attrs: {
                                          name: "Unit Sale",
                                          rules: { required: true },
                                        },
                                        scopedSlots: _vm._u(
                                          [
                                            {
                                              key: "default",
                                              fn: function (ref) {
                                                var valid = ref.valid
                                                var errors = ref.errors
                                                return _c(
                                                  "b-form-group",
                                                  {
                                                    attrs: {
                                                      label: _vm.$t("UnitSale"),
                                                    },
                                                  },
                                                  [
                                                    _c("v-select", {
                                                      class: {
                                                        "is-invalid":
                                                          !!errors.length,
                                                      },
                                                      attrs: {
                                                        state: errors[0]
                                                          ? false
                                                          : valid
                                                          ? true
                                                          : null,
                                                        placeholder:
                                                          _vm.$t(
                                                            "Choose_Unit_Sale"
                                                          ),
                                                        reduce: function (
                                                          label
                                                        ) {
                                                          return label.value
                                                        },
                                                        options:
                                                          _vm.units_sub.map(
                                                            function (
                                                              units_sub
                                                            ) {
                                                              return {
                                                                label:
                                                                  units_sub.name,
                                                                value:
                                                                  units_sub.id,
                                                              }
                                                            }
                                                          ),
                                                      },
                                                      model: {
                                                        value:
                                                          _vm.product
                                                            .unit_sale_id,
                                                        callback: function (
                                                          $$v
                                                        ) {
                                                          _vm.$set(
                                                            _vm.product,
                                                            "unit_sale_id",
                                                            $$v
                                                          )
                                                        },
                                                        expression:
                                                          "product.unit_sale_id",
                                                      },
                                                    }),
                                                    _vm._v(" "),
                                                    _c(
                                                      "b-form-invalid-feedback",
                                                      [
                                                        _vm._v(
                                                          _vm._s(errors[0])
                                                        ),
                                                      ]
                                                    ),
                                                  ],
                                                  1
                                                )
                                              },
                                            },
                                          ],
                                          null,
                                          false,
                                          616760917
                                        ),
                                      }),
                                    ],
                                    1
                                  ),
                                  _vm._v(" "),
                                  _c(
                                    "b-col",
                                    { staticClass: "mb-2", attrs: { md: "6" } },
                                    [
                                      _c("validation-provider", {
                                        attrs: {
                                          name: "Unit Purchase",
                                          rules: { required: true },
                                        },
                                        scopedSlots: _vm._u(
                                          [
                                            {
                                              key: "default",
                                              fn: function (ref) {
                                                var valid = ref.valid
                                                var errors = ref.errors
                                                return _c(
                                                  "b-form-group",
                                                  {
                                                    attrs: {
                                                      label:
                                                        _vm.$t("UnitPurchase"),
                                                    },
                                                  },
                                                  [
                                                    _c("v-select", {
                                                      class: {
                                                        "is-invalid":
                                                          !!errors.length,
                                                      },
                                                      attrs: {
                                                        state: errors[0]
                                                          ? false
                                                          : valid
                                                          ? true
                                                          : null,
                                                        placeholder: _vm.$t(
                                                          "Choose_Unit_Purchase"
                                                        ),
                                                        reduce: function (
                                                          label
                                                        ) {
                                                          return label.value
                                                        },
                                                        options:
                                                          _vm.units_sub.map(
                                                            function (
                                                              units_sub
                                                            ) {
                                                              return {
                                                                label:
                                                                  units_sub.name,
                                                                value:
                                                                  units_sub.id,
                                                              }
                                                            }
                                                          ),
                                                      },
                                                      model: {
                                                        value:
                                                          _vm.product
                                                            .unit_purchase_id,
                                                        callback: function (
                                                          $$v
                                                        ) {
                                                          _vm.$set(
                                                            _vm.product,
                                                            "unit_purchase_id",
                                                            $$v
                                                          )
                                                        },
                                                        expression:
                                                          "product.unit_purchase_id",
                                                      },
                                                    }),
                                                    _vm._v(" "),
                                                    _c(
                                                      "b-form-invalid-feedback",
                                                      [
                                                        _vm._v(
                                                          _vm._s(errors[0])
                                                        ),
                                                      ]
                                                    ),
                                                  ],
                                                  1
                                                )
                                              },
                                            },
                                          ],
                                          null,
                                          false,
                                          3136313157
                                        ),
                                      }),
                                    ],
                                    1
                                  ),
                                  _vm._v(" "),
                                  _c(
                                    "b-col",
                                    {
                                      staticClass: "mb-2",
                                      attrs: { lg: "6", md: "6", sm: "12" },
                                    },
                                    [
                                      _c("validation-provider", {
                                        attrs: {
                                          name: "Tax Method",
                                          rules: { required: true },
                                        },
                                        scopedSlots: _vm._u(
                                          [
                                            {
                                              key: "default",
                                              fn: function (ref) {
                                                var valid = ref.valid
                                                var errors = ref.errors
                                                return _c(
                                                  "b-form-group",
                                                  {
                                                    attrs: {
                                                      label:
                                                        _vm.$t(
                                                          "product_status"
                                                        ),
                                                    },
                                                  },
                                                  [
                                                    _c("v-select", {
                                                      class: {
                                                        "is-invalid":
                                                          !!errors.length,
                                                      },
                                                      attrs: {
                                                        state: errors[0]
                                                          ? false
                                                          : valid
                                                          ? true
                                                          : null,
                                                        reduce: function (
                                                          label
                                                        ) {
                                                          return label.value
                                                        },
                                                        placeholder:
                                                          _vm.$t(
                                                            "Choose_status"
                                                          ),
                                                        options: [
                                                          {
                                                            label: "normal",
                                                            value: "normal",
                                                          },
                                                          {
                                                            label: "new",
                                                            value: "new",
                                                          },
                                                          {
                                                            label: "top",
                                                            value: "top",
                                                          },
                                                        ],
                                                      },
                                                      model: {
                                                        value:
                                                          _vm.product
                                                            .product_status,
                                                        callback: function (
                                                          $$v
                                                        ) {
                                                          _vm.$set(
                                                            _vm.product,
                                                            "product_status",
                                                            $$v
                                                          )
                                                        },
                                                        expression:
                                                          "product.product_status",
                                                      },
                                                    }),
                                                    _vm._v(" "),
                                                    _c(
                                                      "b-form-invalid-feedback",
                                                      [
                                                        _vm._v(
                                                          _vm._s(errors[0])
                                                        ),
                                                      ]
                                                    ),
                                                  ],
                                                  1
                                                )
                                              },
                                            },
                                          ],
                                          null,
                                          false,
                                          1991848659
                                        ),
                                      }),
                                    ],
                                    1
                                  ),
                                  _vm._v(" "),
                                  _vm.CurrentType &&
                                  _vm.CurrentType.includes("owner")
                                    ? _c(
                                        "b-col",
                                        {
                                          staticClass: "mb-2",
                                          attrs: { md: "6" },
                                        },
                                        [
                                          _c("validation-provider", {
                                            attrs: {
                                              name: "Unit Purchase",
                                              rules: { required: true },
                                            },
                                            scopedSlots: _vm._u(
                                              [
                                                {
                                                  key: "default",
                                                  fn: function (ref) {
                                                    var valid = ref.valid
                                                    var errors = ref.errors
                                                    return _c(
                                                      "b-form-group",
                                                      {
                                                        attrs: {
                                                          label:
                                                            _vm.$t("Shops"),
                                                        },
                                                      },
                                                      [
                                                        _c("v-select", {
                                                          class: {
                                                            "is-invalid":
                                                              !!errors.length,
                                                          },
                                                          attrs: {
                                                            state: errors[0]
                                                              ? false
                                                              : valid
                                                              ? true
                                                              : null,
                                                            placeholder:
                                                              _vm.$t("Shops"),
                                                            reduce: function (
                                                              label
                                                            ) {
                                                              return label.value
                                                            },
                                                            options:
                                                              _vm.shops.map(
                                                                function (
                                                                  shops
                                                                ) {
                                                                  return {
                                                                    label:
                                                                      shops.ar_name,
                                                                    value:
                                                                      shops.id,
                                                                  }
                                                                }
                                                              ),
                                                          },
                                                          model: {
                                                            value:
                                                              _vm.product
                                                                .shop_id,
                                                            callback: function (
                                                              $$v
                                                            ) {
                                                              _vm.$set(
                                                                _vm.product,
                                                                "shop_id",
                                                                $$v
                                                              )
                                                            },
                                                            expression:
                                                              "product.shop_id",
                                                          },
                                                        }),
                                                        _vm._v(" "),
                                                        _c(
                                                          "b-form-invalid-feedback",
                                                          [
                                                            _vm._v(
                                                              _vm._s(errors[0])
                                                            ),
                                                          ]
                                                        ),
                                                      ],
                                                      1
                                                    )
                                                  },
                                                },
                                              ],
                                              null,
                                              false,
                                              1618291042
                                            ),
                                          }),
                                        ],
                                        1
                                      )
                                    : _vm._e(),
                                  _vm._v(" "),
                                  _c(
                                    "b-col",
                                    {
                                      staticClass: "mb-2",
                                      attrs: { md: "12" },
                                    },
                                    [
                                      _c(
                                        "b-form-group",
                                        {
                                          attrs: {
                                            label: _vm.$t("ar_description"),
                                          },
                                        },
                                        [
                                          _c("textarea", {
                                            directives: [
                                              {
                                                name: "model",
                                                rawName: "v-model",
                                                value:
                                                  _vm.product.ar_description,
                                                expression:
                                                  "product.ar_description",
                                              },
                                            ],
                                            staticClass: "form-control",
                                            attrs: {
                                              rows: "4",
                                              placeholder:
                                                _vm.$t("ar_description"),
                                            },
                                            domProps: {
                                              value: _vm.product.ar_description,
                                            },
                                            on: {
                                              input: function ($event) {
                                                if ($event.target.composing) {
                                                  return
                                                }
                                                _vm.$set(
                                                  _vm.product,
                                                  "ar_description",
                                                  $event.target.value
                                                )
                                              },
                                            },
                                          }),
                                        ]
                                      ),
                                    ],
                                    1
                                  ),
                                  _vm._v(" "),
                                  _c(
                                    "b-col",
                                    {
                                      staticClass: "mb-2",
                                      attrs: { md: "12" },
                                    },
                                    [
                                      _c(
                                        "b-form-group",
                                        {
                                          attrs: {
                                            label: _vm.$t("en_description"),
                                          },
                                        },
                                        [
                                          _c("textarea", {
                                            directives: [
                                              {
                                                name: "model",
                                                rawName: "v-model",
                                                value:
                                                  _vm.product.en_description,
                                                expression:
                                                  "product.en_description",
                                              },
                                            ],
                                            staticClass: "form-control",
                                            attrs: {
                                              rows: "4",
                                              placeholder:
                                                _vm.$t("en_description"),
                                            },
                                            domProps: {
                                              value: _vm.product.en_description,
                                            },
                                            on: {
                                              input: function ($event) {
                                                if ($event.target.composing) {
                                                  return
                                                }
                                                _vm.$set(
                                                  _vm.product,
                                                  "en_description",
                                                  $event.target.value
                                                )
                                              },
                                            },
                                          }),
                                        ]
                                      ),
                                    ],
                                    1
                                  ),
                                  _vm._v(" "),
                                  _c(
                                    "b-col",
                                    {
                                      staticClass: "mb-2",
                                      attrs: { md: "12" },
                                    },
                                    [
                                      _c(
                                        "b-form-group",
                                        { attrs: { label: _vm.$t("Note") } },
                                        [
                                          _c("textarea", {
                                            directives: [
                                              {
                                                name: "model",
                                                rawName: "v-model",
                                                value: _vm.product.note,
                                                expression: "product.note",
                                              },
                                            ],
                                            staticClass: "form-control",
                                            attrs: {
                                              rows: "4",
                                              placeholder: _vm.$t("Afewwords"),
                                            },
                                            domProps: {
                                              value: _vm.product.note,
                                            },
                                            on: {
                                              input: function ($event) {
                                                if ($event.target.composing) {
                                                  return
                                                }
                                                _vm.$set(
                                                  _vm.product,
                                                  "note",
                                                  $event.target.value
                                                )
                                              },
                                            },
                                          }),
                                        ]
                                      ),
                                    ],
                                    1
                                  ),
                                ],
                                1
                              ),
                            ],
                            1
                          ),
                        ],
                        1
                      ),
                      _vm._v(" "),
                      _c(
                        "b-col",
                        { attrs: { md: "4" } },
                        [
                          _c("b-card", [
                            _c("div", { staticClass: "card-header" }, [
                              _c("h5", [
                                _vm._v(_vm._s(_vm.$t("MultipleImage"))),
                              ]),
                            ]),
                            _vm._v(" "),
                            _c(
                              "div",
                              { staticClass: "card-body" },
                              [
                                _c(
                                  "b-row",
                                  { staticClass: "form-group" },
                                  [
                                    _c("b-col", { attrs: { md: "12 mb-5" } }, [
                                      _c(
                                        "div",
                                        {
                                          staticClass:
                                            "d-flex justify-content-center",
                                          attrs: {
                                            id: "my-strictly-unique-vue-upload-multiple-image",
                                          },
                                        },
                                        [
                                          _c("vue-upload-multiple-image", {
                                            attrs: {
                                              dragText:
                                                "Drag & Drop Multiple images For product",
                                              dropText: "Drag & Drop image",
                                              browseText: "(or) Select",
                                              accept:
                                                "image/gif,image/jpeg,image/png,image/bmp,image/jpg",
                                              primaryText: "success",
                                              markIsPrimaryText: "success",
                                              popupText:
                                                "have been successfully uploaded",
                                              "data-images": _vm.images,
                                              idUpload: "myIdUpload",
                                              showEdit: false,
                                            },
                                            on: {
                                              "upload-success":
                                                _vm.uploadImageSuccess,
                                              "before-remove": _vm.beforeRemove,
                                            },
                                          }),
                                        ],
                                        1
                                      ),
                                    ]),
                                    _vm._v(" "),
                                    _c(
                                      "b-col",
                                      {
                                        directives: [
                                          {
                                            name: "show",
                                            rawName: "v-show",
                                            value: _vm.product.is_variant,
                                            expression: "product.is_variant",
                                          },
                                        ],
                                        attrs: { md: "12 mb-5" },
                                      },
                                      [
                                        _c("vue-tags-input", {
                                          staticClass: "tag-custom text-15",
                                          attrs: {
                                            placeholder: "+ add",
                                            tags: _vm.variants,
                                          },
                                          on: {
                                            "adding-duplicate": function (
                                              $event
                                            ) {
                                              return _vm.showNotifDuplicate()
                                            },
                                            "tags-changed": function (newTags) {
                                              return (_vm.variants = newTags)
                                            },
                                          },
                                          model: {
                                            value: _vm.tag,
                                            callback: function ($$v) {
                                              _vm.tag = $$v
                                            },
                                            expression: "tag",
                                          },
                                        }),
                                      ],
                                      1
                                    ),
                                  ],
                                  1
                                ),
                              ],
                              1
                            ),
                          ]),
                        ],
                        1
                      ),
                      _vm._v(" "),
                      _c(
                        "b-col",
                        { staticClass: "mt-3", attrs: { md: "12" } },
                        [
                          _c(
                            "b-button",
                            {
                              attrs: {
                                variant: "primary",
                                type: "submit",
                                disabled: _vm.SubmitProcessing,
                              },
                            },
                            [_vm._v(_vm._s(_vm.$t("submit")))]
                          ),
                          _vm._v(" "),
                          _vm.SubmitProcessing ? _vm._m(0) : _vm._e(),
                        ],
                        1
                      ),
                    ],
                    1
                  ),
                ],
                1
              ),
            ],
            1
          )
        : _vm._e(),
    ],
    1
  )
}
var staticRenderFns = [
  function () {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "typo__p" }, [
      _c("div", { staticClass: "spinner sm spinner-primary mt-3" }),
    ])
  },
]
render._withStripped = true



/***/ }),

/***/ "./resources/src/views/app/pages/deferreds/Add_deferred.vue":
/*!******************************************************************!*\
  !*** ./resources/src/views/app/pages/deferreds/Add_deferred.vue ***!
  \******************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Add_deferred_vue_vue_type_template_id_56892cb5___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Add_deferred.vue?vue&type=template&id=56892cb5& */ "./resources/src/views/app/pages/deferreds/Add_deferred.vue?vue&type=template&id=56892cb5&");
/* harmony import */ var _Add_deferred_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Add_deferred.vue?vue&type=script&lang=js& */ "./resources/src/views/app/pages/deferreds/Add_deferred.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _Add_deferred_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _Add_deferred_vue_vue_type_template_id_56892cb5___WEBPACK_IMPORTED_MODULE_0__["render"],
  _Add_deferred_vue_vue_type_template_id_56892cb5___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/src/views/app/pages/deferreds/Add_deferred.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/src/views/app/pages/deferreds/Add_deferred.vue?vue&type=script&lang=js&":
/*!*******************************************************************************************!*\
  !*** ./resources/src/views/app/pages/deferreds/Add_deferred.vue?vue&type=script&lang=js& ***!
  \*******************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Add_deferred_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../node_modules/babel-loader/lib??ref--4-0!../../../../../../node_modules/vue-loader/lib??vue-loader-options!./Add_deferred.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/src/views/app/pages/deferreds/Add_deferred.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Add_deferred_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/src/views/app/pages/deferreds/Add_deferred.vue?vue&type=template&id=56892cb5&":
/*!*************************************************************************************************!*\
  !*** ./resources/src/views/app/pages/deferreds/Add_deferred.vue?vue&type=template&id=56892cb5& ***!
  \*************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Add_deferred_vue_vue_type_template_id_56892cb5___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../../node_modules/vue-loader/lib??vue-loader-options!./Add_deferred.vue?vue&type=template&id=56892cb5& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/src/views/app/pages/deferreds/Add_deferred.vue?vue&type=template&id=56892cb5&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Add_deferred_vue_vue_type_template_id_56892cb5___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Add_deferred_vue_vue_type_template_id_56892cb5___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./resources/src/views/app/pages/products/Add_product.vue":
/*!****************************************************************!*\
  !*** ./resources/src/views/app/pages/products/Add_product.vue ***!
  \****************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Add_product_vue_vue_type_template_id_45a5ea63___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Add_product.vue?vue&type=template&id=45a5ea63& */ "./resources/src/views/app/pages/products/Add_product.vue?vue&type=template&id=45a5ea63&");
/* harmony import */ var _Add_product_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Add_product.vue?vue&type=script&lang=js& */ "./resources/src/views/app/pages/products/Add_product.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _Add_product_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _Add_product_vue_vue_type_template_id_45a5ea63___WEBPACK_IMPORTED_MODULE_0__["render"],
  _Add_product_vue_vue_type_template_id_45a5ea63___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/src/views/app/pages/products/Add_product.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/src/views/app/pages/products/Add_product.vue?vue&type=script&lang=js&":
/*!*****************************************************************************************!*\
  !*** ./resources/src/views/app/pages/products/Add_product.vue?vue&type=script&lang=js& ***!
  \*****************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Add_product_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../node_modules/babel-loader/lib??ref--4-0!../../../../../../node_modules/vue-loader/lib??vue-loader-options!./Add_product.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/src/views/app/pages/products/Add_product.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Add_product_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/src/views/app/pages/products/Add_product.vue?vue&type=template&id=45a5ea63&":
/*!***********************************************************************************************!*\
  !*** ./resources/src/views/app/pages/products/Add_product.vue?vue&type=template&id=45a5ea63& ***!
  \***********************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Add_product_vue_vue_type_template_id_45a5ea63___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../../node_modules/vue-loader/lib??vue-loader-options!./Add_product.vue?vue&type=template&id=45a5ea63& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/src/views/app/pages/products/Add_product.vue?vue&type=template&id=45a5ea63&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Add_product_vue_vue_type_template_id_45a5ea63___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Add_product_vue_vue_type_template_id_45a5ea63___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ })

}]);