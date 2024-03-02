(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["edit_product"],{

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/src/views/app/pages/products/Edit_product.vue?vue&type=script&lang=js&":
/*!**************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/src/views/app/pages/products/Edit_product.vue?vue&type=script&lang=js& ***!
  \**************************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var nprogress__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! nprogress */ "./node_modules/nprogress/nprogress.js");
/* harmony import */ var nprogress__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(nprogress__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var vue_upload_multiple_image__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! vue-upload-multiple-image */ "./node_modules/vue-upload-multiple-image/src/main.js");
/* harmony import */ var _johmun_vue_tags_input__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @johmun/vue-tags-input */ "./node_modules/@johmun/vue-tags-input/dist/vue-tags-input.js");
/* harmony import */ var _johmun_vue_tags_input__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_johmun_vue_tags_input__WEBPACK_IMPORTED_MODULE_2__);
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
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
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
    title: "Edit Product"
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
      Subcategories: [],
      units: [],
      units_sub: [],
      brands: [],
      roles: {},
      variants: [],
      product: {
        ar_name: "",
        mini: 1,
        max: 3,
        status: "",
        discount: "",
        name: "",
        code: "",
        Type_barcode: "",
        cost: "",
        price: "",
        brand_id: "",
        category_id: "",
        TaxNet: "",
        tax_method: "1",
        unit_id: "",
        unit_sale_id: "",
        unit_purchase_id: "",
        stock_alert: "",
        image: "",
        note: "",
        is_variant: false
      },
      code_exist: ""
    };
  },
  components: {
    VueUploadMultipleImage: vue_upload_multiple_image__WEBPACK_IMPORTED_MODULE_1__["default"],
    VueTagsInput: _johmun_vue_tags_input__WEBPACK_IMPORTED_MODULE_2___default.a
  },
  methods: {
    //------------- Submit Validation Update Product
    Submit_Product: function Submit_Product() {
      var _this = this;

      this.$refs.Edit_Product.validate().then(function (success) {
        if (!success) {
          _this.makeToast("danger", _this.$t("Please_fill_the_form_correctly"), _this.$t("Failed"));
        } else {
          _this.Update_Product();
        }
      });
    },
    //------ Validation state fields
    getValidationState: function getValidationState(_ref) {
      var dirty = _ref.dirty,
          validated = _ref.validated,
          _ref$valid = _ref.valid,
          valid = _ref$valid === void 0 ? null : _ref$valid;
      return dirty || validated ? valid : null;
    },
    //------ Toast
    makeToast: function makeToast(variant, msg, title) {
      this.$root.$bvToast.toast(msg, {
        title: title,
        variant: variant,
        solid: true
      });
    },
    //------Show Notification If Variant is Duplicate
    showNotifDuplicate: function showNotifDuplicate() {
      this.makeToast("warning", this.$t("VariantDuplicate"), this.$t("Warning"));
    },
    //------ event upload Image Success
    uploadImageSuccess: function uploadImageSuccess(formData, index, fileList, imageArray) {
      this.images = fileList;
    },
    //------ event before Remove image
    beforeRemove: function beforeRemove(index, done, fileList) {
      var remove = confirm("remove image");

      if (remove == true) {
        this.images.splice(index, 1);
        done();
      } else {}
    },
    //---------------------------------------Get Product Elements ------------------------------\\
    GetElements: function GetElements() {
      var _this2 = this;

      var id = this.$route.params.id;
      axios.get("Products/".concat(id, "/edit")).then(function (response) {
        _this2.product = response.data.product;
        _this2.variants = response.data.product.ProductVariant;
        _this2.images = response.data.product.images;
        _this2.categories = response.data.categories;
        _this2.brands = response.data.brands;
        _this2.units = response.data.units;
        _this2.units_sub = response.data.units_sub;
        _this2.Subcategories = response.data.Subcategories;
        _this2.isLoading = false;
      })["catch"](function (response) {
        setTimeout(function () {
          _this2.isLoading = false;
        }, 500);
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
    //------------------------------ Update Product ------------------------------\\
    Update_Product: function Update_Product() {
      var _this4 = this;

      nprogress__WEBPACK_IMPORTED_MODULE_0___default.a.start();
      nprogress__WEBPACK_IMPORTED_MODULE_0___default.a.set(0.1);
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
      }); //append array variants

      if (self.variants.length) {
        for (var i = 0; i < self.variants.length; i++) {
          Object.entries(self.variants[i]).forEach(function (_ref5) {
            var _ref6 = _slicedToArray(_ref5, 2),
                key = _ref6[0],
                value = _ref6[1];

            self.data.append("variants[" + i + "][" + key + "]", value);
          });
        }
      } //append array images


      if (self.images.length > 0) {
        for (var k = 0; k < self.images.length; k++) {
          Object.entries(self.images[k]).forEach(function (_ref7) {
            var _ref8 = _slicedToArray(_ref7, 2),
                key = _ref8[0],
                value = _ref8[1];

            self.data.append("images[" + k + "][" + key + "]", value);
          });
        }
      }

      self.data.append("_method", "put"); //send Data with axios

      axios.post("Products/" + this.product.id, self.data).then(function (response) {
        nprogress__WEBPACK_IMPORTED_MODULE_0___default.a.done();
        self.SubmitProcessing = false;

        _this4.$router.push({
          name: "index_products"
        });

        _this4.makeToast("success", _this4.$t("Successfully_Updated"), _this4.$t("Success"));
      })["catch"](function (error) {
        if (error.errors.code.length > 0) {
          self.code_exist = error.errors.code[0];
        }

        nprogress__WEBPACK_IMPORTED_MODULE_0___default.a.done();

        _this4.makeToast("danger", _this4.$t("InvalidData"), _this4.$t("Failed"));

        self.SubmitProcessing = false;
      });
    }
  },
  //end Methods
  //-----------------------------Created function-------------------
  created: function created() {
    this.GetElements();
    this.imageArray = [];
    this.images = [];
  }
});

/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/src/views/app/pages/products/Edit_product.vue?vue&type=template&id=379e8f98&":
/*!******************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/src/views/app/pages/products/Edit_product.vue?vue&type=template&id=379e8f98& ***!
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
    { staticClass: "main-content" },
    [
      _c("breadcumb", {
        attrs: { page: "Update Product", folder: _vm.$t("Products") },
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
            { ref: "Edit_Product" },
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
                                "b-card-body",
                                [
                                  _c(
                                    "b-row",
                                    [
                                      _c(
                                        "b-col",
                                        {
                                          staticClass: "mb-2",
                                          attrs: { md: "6" },
                                        },
                                        [
                                          _c("validation-provider", {
                                            attrs: {
                                              name: "name",
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
                                                  fn: function (
                                                    validationContext
                                                  ) {
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
                                                                "name-feedback",
                                                              label: "name",
                                                              placeholder:
                                                                _vm.$t(
                                                                  "Enter_Name_Product"
                                                                ),
                                                            },
                                                            model: {
                                                              value:
                                                                _vm.product
                                                                  .name,
                                                              callback:
                                                                function ($$v) {
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
                                              2669341686
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
                                          attrs: { md: "6" },
                                        },
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
                                                  fn: function (
                                                    validationContext
                                                  ) {
                                                    return [
                                                      _c(
                                                        "b-form-group",
                                                        {
                                                          attrs: {
                                                            label:
                                                              _vm.$t(
                                                                "ar_Name_product"
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
                                                                  "Enter_ar_Name_Product"
                                                                ),
                                                            },
                                                            model: {
                                                              value:
                                                                _vm.product
                                                                  .ar_name,
                                                              callback:
                                                                function ($$v) {
                                                                  _vm.$set(
                                                                    _vm.product,
                                                                    "ar_name",
                                                                    $$v
                                                                  )
                                                                },
                                                              expression:
                                                                "product.ar_name",
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
                                              1076510938
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
                                          attrs: { md: "6" },
                                        },
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
                                                  fn: function (
                                                    validationContext
                                                  ) {
                                                    return [
                                                      _c(
                                                        "b-form-group",
                                                        {
                                                          attrs: {
                                                            label:
                                                              _vm.$t(
                                                                "CodeProduct"
                                                              ),
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
                                                              _c("input", {
                                                                directives: [
                                                                  {
                                                                    name: "model",
                                                                    rawName:
                                                                      "v-model",
                                                                    value:
                                                                      _vm
                                                                        .product
                                                                        .code,
                                                                    expression:
                                                                      "product.code",
                                                                  },
                                                                ],
                                                                staticClass:
                                                                  "form-control",
                                                                attrs: {
                                                                  state:
                                                                    _vm.getValidationState(
                                                                      validationContext
                                                                    ),
                                                                  "aria-describedby":
                                                                    "CodeProduct-feedback",
                                                                  type: "text",
                                                                },
                                                                domProps: {
                                                                  value:
                                                                    _vm.product
                                                                      .code,
                                                                },
                                                                on: {
                                                                  input:
                                                                    function (
                                                                      $event
                                                                    ) {
                                                                      if (
                                                                        $event
                                                                          .target
                                                                          .composing
                                                                      ) {
                                                                        return
                                                                      }
                                                                      _vm.$set(
                                                                        _vm.product,
                                                                        "code",
                                                                        $event
                                                                          .target
                                                                          .value
                                                                      )
                                                                    },
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
                                                                    variant:
                                                                      "danger",
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
                                                      ),
                                                    ]
                                                  },
                                                },
                                              ],
                                              null,
                                              false,
                                              1408029394
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
                                          attrs: { md: "6" },
                                        },
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
                                        {
                                          staticClass: "mb-2",
                                          attrs: { md: "6" },
                                        },
                                        [
                                          _c(
                                            "b-form-group",
                                            {
                                              attrs: { label: _vm.$t("Brand") },
                                            },
                                            [
                                              _c("v-select", {
                                                attrs: {
                                                  placeholder:
                                                    _vm.$t("Choose_Brand"),
                                                  reduce: function (label) {
                                                    return label.value
                                                  },
                                                  options: _vm.brands.map(
                                                    function (brands) {
                                                      return {
                                                        label: brands.name,
                                                        value: brands.id,
                                                      }
                                                    }
                                                  ),
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
                                                  expression:
                                                    "product.brand_id",
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
                                        {
                                          staticClass: "mb-2",
                                          attrs: { md: "6" },
                                        },
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
                                                                label:
                                                                  "Code 128",
                                                                value:
                                                                  "CODE128",
                                                              },
                                                              {
                                                                label:
                                                                  "Code 39",
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
                                              4092838316
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
                                          attrs: { md: "6" },
                                        },
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
                                                  fn: function (
                                                    validationContext
                                                  ) {
                                                    return [
                                                      _c(
                                                        "b-form-group",
                                                        {
                                                          attrs: {
                                                            label:
                                                              _vm.$t(
                                                                "ProductCost"
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
                                                                "ProductCost-feedback",
                                                              label: "Cost",
                                                              placeholder:
                                                                _vm.$t(
                                                                  "Enter_Product_Cost"
                                                                ),
                                                            },
                                                            model: {
                                                              value:
                                                                _vm.product
                                                                  .cost,
                                                              callback:
                                                                function ($$v) {
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
                                        {
                                          staticClass: "mb-2",
                                          attrs: { md: "6" },
                                        },
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
                                                  fn: function (
                                                    validationContext
                                                  ) {
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
                                                              placeholder:
                                                                _vm.$t(
                                                                  "Enter_Product_Price"
                                                                ),
                                                            },
                                                            model: {
                                                              value:
                                                                _vm.product
                                                                  .price,
                                                              callback:
                                                                function ($$v) {
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
                                        {
                                          staticClass: "mb-2",
                                          attrs: { md: "6" },
                                        },
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
                                                            _vm.$t(
                                                              "UnitProduct"
                                                            ),
                                                        },
                                                      },
                                                      [
                                                        _c("v-select", {
                                                          staticClass:
                                                            "required",
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
                                                            options:
                                                              _vm.units.map(
                                                                function (
                                                                  units
                                                                ) {
                                                                  return {
                                                                    label:
                                                                      units.name,
                                                                    value:
                                                                      units.id,
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
                                                              _vm.product
                                                                .unit_id,
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
                                        {
                                          staticClass: "mb-2",
                                          attrs: { md: "6" },
                                        },
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
                                                          label:
                                                            _vm.$t("UnitSale"),
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
                                                            _vm.$t(
                                                              "UnitPurchase"
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
                                          attrs: { md: "6" },
                                        },
                                        [
                                          _c("validation-provider", {
                                            attrs: {
                                              name: "Stock Alert",
                                              rules: { regex: /^\d*\.?\d*$/ },
                                            },
                                            scopedSlots: _vm._u(
                                              [
                                                {
                                                  key: "default",
                                                  fn: function (
                                                    validationContext
                                                  ) {
                                                    return [
                                                      _c(
                                                        "b-form-group",
                                                        {
                                                          attrs: {
                                                            label:
                                                              _vm.$t(
                                                                "StockAlert"
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
                                                                "StockAlert-feedback",
                                                              label:
                                                                "Stock alert",
                                                              placeholder:
                                                                _vm.$t(
                                                                  "Enter_Stock_alert"
                                                                ),
                                                            },
                                                            model: {
                                                              value:
                                                                _vm.product
                                                                  .stock_alert,
                                                              callback:
                                                                function ($$v) {
                                                                  _vm.$set(
                                                                    _vm.product,
                                                                    "stock_alert",
                                                                    $$v
                                                                  )
                                                                },
                                                              expression:
                                                                "product.stock_alert",
                                                            },
                                                          }),
                                                          _vm._v(" "),
                                                          _c(
                                                            "b-form-invalid-feedback",
                                                            {
                                                              attrs: {
                                                                id: "StockAlert-feedback",
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
                                              1999382198
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
                                          attrs: { md: "6" },
                                        },
                                        [
                                          _c("validation-provider", {
                                            attrs: {
                                              name: "Order Tax",
                                              rules: { regex: /^\d*\.?\d*$/ },
                                            },
                                            scopedSlots: _vm._u(
                                              [
                                                {
                                                  key: "default",
                                                  fn: function (
                                                    validationContext
                                                  ) {
                                                    return [
                                                      _c(
                                                        "b-form-group",
                                                        {
                                                          attrs: {
                                                            label:
                                                              _vm.$t(
                                                                "OrderTax"
                                                              ),
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
                                                              _c("input", {
                                                                directives: [
                                                                  {
                                                                    name: "model",
                                                                    rawName:
                                                                      "v-model",
                                                                    value:
                                                                      _vm
                                                                        .product
                                                                        .TaxNet,
                                                                    expression:
                                                                      "product.TaxNet",
                                                                  },
                                                                ],
                                                                staticClass:
                                                                  "form-control",
                                                                attrs: {
                                                                  state:
                                                                    _vm.getValidationState(
                                                                      validationContext
                                                                    ),
                                                                  "aria-describedby":
                                                                    "OrderTax-feedback",
                                                                  type: "number",
                                                                },
                                                                domProps: {
                                                                  value:
                                                                    _vm.product
                                                                      .TaxNet,
                                                                },
                                                                on: {
                                                                  input:
                                                                    function (
                                                                      $event
                                                                    ) {
                                                                      if (
                                                                        $event
                                                                          .target
                                                                          .composing
                                                                      ) {
                                                                        return
                                                                      }
                                                                      _vm.$set(
                                                                        _vm.product,
                                                                        "TaxNet",
                                                                        $event
                                                                          .target
                                                                          .value
                                                                      )
                                                                    },
                                                                },
                                                              }),
                                                              _vm._v(" "),
                                                              _c(
                                                                "div",
                                                                {
                                                                  staticClass:
                                                                    "input-group-append",
                                                                },
                                                                [
                                                                  _c(
                                                                    "span",
                                                                    {
                                                                      staticClass:
                                                                        "input-group-text",
                                                                    },
                                                                    [
                                                                      _vm._v(
                                                                        "%"
                                                                      ),
                                                                    ]
                                                                  ),
                                                                ]
                                                              ),
                                                            ]
                                                          ),
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
                                              2796358256
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
                                                            _vm.$t("TaxMethod"),
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
                                                                "Choose_Method"
                                                              ),
                                                            options: [
                                                              {
                                                                label:
                                                                  "Exclusive",
                                                                value: "1",
                                                              },
                                                              {
                                                                label:
                                                                  "Inclusive",
                                                                value: "2",
                                                              },
                                                            ],
                                                          },
                                                          model: {
                                                            value:
                                                              _vm.product
                                                                .tax_method,
                                                            callback: function (
                                                              $$v
                                                            ) {
                                                              _vm.$set(
                                                                _vm.product,
                                                                "tax_method",
                                                                $$v
                                                              )
                                                            },
                                                            expression:
                                                              "product.tax_method",
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
                                              2612488639
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
                                          attrs: { md: "6" },
                                        },
                                        [
                                          _c("validation-provider", {
                                            attrs: {
                                              name: "Product Discount",
                                              rules: {
                                                required: true,
                                                regex: /^\d*\.?\d*$/,
                                              },
                                            },
                                            scopedSlots: _vm._u(
                                              [
                                                {
                                                  key: "default",
                                                  fn: function (
                                                    validationContext
                                                  ) {
                                                    return [
                                                      _c(
                                                        "b-form-group",
                                                        {
                                                          attrs: {
                                                            label:
                                                              _vm.$t(
                                                                "ProductDiscount"
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
                                                              label: "discount",
                                                              placeholder:
                                                                _vm.$t(
                                                                  "Enter_Product_discount"
                                                                ),
                                                            },
                                                            model: {
                                                              value:
                                                                _vm.product
                                                                  .discount,
                                                              callback:
                                                                function ($$v) {
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
                                              279820969
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
                                          attrs: { md: "6" },
                                        },
                                        [
                                          _c("validation-provider", {
                                            attrs: {
                                              name: "Mini",
                                              rules: { regex: /^\d*\.?\d*$/ },
                                            },
                                            scopedSlots: _vm._u(
                                              [
                                                {
                                                  key: "default",
                                                  fn: function (
                                                    validationContext
                                                  ) {
                                                    return [
                                                      _c(
                                                        "b-form-group",
                                                        {
                                                          attrs: {
                                                            label:
                                                              _vm.$t("Mini"),
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
                                                              _c("input", {
                                                                directives: [
                                                                  {
                                                                    name: "model",
                                                                    rawName:
                                                                      "v-model",
                                                                    value:
                                                                      _vm
                                                                        .product
                                                                        .mini,
                                                                    expression:
                                                                      "product.mini",
                                                                  },
                                                                ],
                                                                staticClass:
                                                                  "form-control",
                                                                attrs: {
                                                                  state:
                                                                    _vm.getValidationState(
                                                                      validationContext
                                                                    ),
                                                                  "aria-describedby":
                                                                    "OrderTax-feedback",
                                                                  type: "number",
                                                                },
                                                                domProps: {
                                                                  value:
                                                                    _vm.product
                                                                      .mini,
                                                                },
                                                                on: {
                                                                  input:
                                                                    function (
                                                                      $event
                                                                    ) {
                                                                      if (
                                                                        $event
                                                                          .target
                                                                          .composing
                                                                      ) {
                                                                        return
                                                                      }
                                                                      _vm.$set(
                                                                        _vm.product,
                                                                        "mini",
                                                                        $event
                                                                          .target
                                                                          .value
                                                                      )
                                                                    },
                                                                },
                                                              }),
                                                              _vm._v(" "),
                                                              _c(
                                                                "div",
                                                                {
                                                                  staticClass:
                                                                    "input-group-append",
                                                                },
                                                                [
                                                                  _c(
                                                                    "span",
                                                                    {
                                                                      staticClass:
                                                                        "input-group-text",
                                                                    },
                                                                    [
                                                                      _vm._v(
                                                                        "%"
                                                                      ),
                                                                    ]
                                                                  ),
                                                                ]
                                                              ),
                                                            ]
                                                          ),
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
                                              37470352
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
                                          attrs: { md: "6" },
                                        },
                                        [
                                          _c("validation-provider", {
                                            attrs: {
                                              name: "Max",
                                              rules: { regex: /^\d*\.?\d*$/ },
                                            },
                                            scopedSlots: _vm._u(
                                              [
                                                {
                                                  key: "default",
                                                  fn: function (
                                                    validationContext
                                                  ) {
                                                    return [
                                                      _c(
                                                        "b-form-group",
                                                        {
                                                          attrs: {
                                                            label:
                                                              _vm.$t("Max"),
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
                                                              _c("input", {
                                                                directives: [
                                                                  {
                                                                    name: "model",
                                                                    rawName:
                                                                      "v-model",
                                                                    value:
                                                                      _vm
                                                                        .product
                                                                        .max,
                                                                    expression:
                                                                      "product.max",
                                                                  },
                                                                ],
                                                                staticClass:
                                                                  "form-control",
                                                                attrs: {
                                                                  state:
                                                                    _vm.getValidationState(
                                                                      validationContext
                                                                    ),
                                                                  "aria-describedby":
                                                                    "OrderTax-feedback",
                                                                  type: "number",
                                                                },
                                                                domProps: {
                                                                  value:
                                                                    _vm.product
                                                                      .max,
                                                                },
                                                                on: {
                                                                  input:
                                                                    function (
                                                                      $event
                                                                    ) {
                                                                      if (
                                                                        $event
                                                                          .target
                                                                          .composing
                                                                      ) {
                                                                        return
                                                                      }
                                                                      _vm.$set(
                                                                        _vm.product,
                                                                        "max",
                                                                        $event
                                                                          .target
                                                                          .value
                                                                      )
                                                                    },
                                                                },
                                                              }),
                                                              _vm._v(" "),
                                                              _c(
                                                                "div",
                                                                {
                                                                  staticClass:
                                                                    "input-group-append",
                                                                },
                                                                [
                                                                  _c(
                                                                    "span",
                                                                    {
                                                                      staticClass:
                                                                        "input-group-text",
                                                                    },
                                                                    [
                                                                      _vm._v(
                                                                        "%"
                                                                      ),
                                                                    ]
                                                                  ),
                                                                ]
                                                              ),
                                                            ]
                                                          ),
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
                                              3701257159
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
                                              name: "Status",
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
                                                            _vm.$t("Status"),
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
                                                                "Choose_Status"
                                                              ),
                                                            options: [
                                                              {
                                                                label: "normal",
                                                                value:
                                                                  "NORMAL_PRODUCT",
                                                              },
                                                              {
                                                                label: "top",
                                                                value:
                                                                  "TOP_PRODUCT",
                                                              },
                                                              {
                                                                label: "new",
                                                                value:
                                                                  "NEW_PRODUCT",
                                                              },
                                                              {
                                                                label: "offers",
                                                                value:
                                                                  "OFFERS_PRODUCT",
                                                              },
                                                            ],
                                                          },
                                                          model: {
                                                            value:
                                                              _vm.product
                                                                .status,
                                                            callback: function (
                                                              $$v
                                                            ) {
                                                              _vm.$set(
                                                                _vm.product,
                                                                "status",
                                                                $$v
                                                              )
                                                            },
                                                            expression:
                                                              "product.status",
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
                                              4194062898
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
                                          attrs: { md: "12" },
                                        },
                                        [
                                          _c(
                                            "b-form-group",
                                            {
                                              attrs: { label: _vm.$t("Note") },
                                            },
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
                                                  placeholder:
                                                    _vm.$t("Afewwords"),
                                                },
                                                domProps: {
                                                  value: _vm.product.note,
                                                },
                                                on: {
                                                  input: function ($event) {
                                                    if (
                                                      $event.target.composing
                                                    ) {
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
                                    _c("b-col", { attrs: { md: "12 mb-2" } }, [
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
                                                  value: _vm.product.is_variant,
                                                  expression:
                                                    "product.is_variant",
                                                },
                                              ],
                                              attrs: { type: "checkbox" },
                                              domProps: {
                                                checked: Array.isArray(
                                                  _vm.product.is_variant
                                                )
                                                  ? _vm._i(
                                                      _vm.product.is_variant,
                                                      null
                                                    ) > -1
                                                  : _vm.product.is_variant,
                                              },
                                              on: {
                                                change: function ($event) {
                                                  var $$a =
                                                      _vm.product.is_variant,
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
                                                          _vm.product,
                                                          "is_variant",
                                                          $$a.concat([$$v])
                                                        )
                                                    } else {
                                                      $$i > -1 &&
                                                        _vm.$set(
                                                          _vm.product,
                                                          "is_variant",
                                                          $$a
                                                            .slice(0, $$i)
                                                            .concat(
                                                              $$a.slice($$i + 1)
                                                            )
                                                        )
                                                    }
                                                  } else {
                                                    _vm.$set(
                                                      _vm.product,
                                                      "is_variant",
                                                      $$c
                                                    )
                                                  }
                                                },
                                              },
                                            }),
                                            _vm._v(" "),
                                            _c("span", [
                                              _vm._v(
                                                _vm._s(
                                                  _vm.$t(
                                                    "ProductHasMultiVariants"
                                                  )
                                                )
                                              ),
                                            ]),
                                            _vm._v(" "),
                                            _c("span", {
                                              staticClass: "checkmark",
                                            }),
                                          ]
                                        ),
                                      ]),
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

/***/ "./resources/src/views/app/pages/products/Edit_product.vue":
/*!*****************************************************************!*\
  !*** ./resources/src/views/app/pages/products/Edit_product.vue ***!
  \*****************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Edit_product_vue_vue_type_template_id_379e8f98___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Edit_product.vue?vue&type=template&id=379e8f98& */ "./resources/src/views/app/pages/products/Edit_product.vue?vue&type=template&id=379e8f98&");
/* harmony import */ var _Edit_product_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Edit_product.vue?vue&type=script&lang=js& */ "./resources/src/views/app/pages/products/Edit_product.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _Edit_product_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _Edit_product_vue_vue_type_template_id_379e8f98___WEBPACK_IMPORTED_MODULE_0__["render"],
  _Edit_product_vue_vue_type_template_id_379e8f98___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/src/views/app/pages/products/Edit_product.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/src/views/app/pages/products/Edit_product.vue?vue&type=script&lang=js&":
/*!******************************************************************************************!*\
  !*** ./resources/src/views/app/pages/products/Edit_product.vue?vue&type=script&lang=js& ***!
  \******************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Edit_product_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../node_modules/babel-loader/lib??ref--4-0!../../../../../../node_modules/vue-loader/lib??vue-loader-options!./Edit_product.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/src/views/app/pages/products/Edit_product.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Edit_product_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/src/views/app/pages/products/Edit_product.vue?vue&type=template&id=379e8f98&":
/*!************************************************************************************************!*\
  !*** ./resources/src/views/app/pages/products/Edit_product.vue?vue&type=template&id=379e8f98& ***!
  \************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Edit_product_vue_vue_type_template_id_379e8f98___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../../node_modules/vue-loader/lib??vue-loader-options!./Edit_product.vue?vue&type=template&id=379e8f98& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/src/views/app/pages/products/Edit_product.vue?vue&type=template&id=379e8f98&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Edit_product_vue_vue_type_template_id_379e8f98___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Edit_product_vue_vue_type_template_id_379e8f98___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ })

}]);