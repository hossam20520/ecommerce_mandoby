(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["profit_and_loss"],{

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/src/views/app/pages/reports/profit_and_loss.vue?vue&type=script&lang=js&":
/*!****************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/src/views/app/pages/reports/profit_and_loss.vue?vue&type=script&lang=js& ***!
  \****************************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var nprogress__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! nprogress */ "./node_modules/nprogress/nprogress.js");
/* harmony import */ var nprogress__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(nprogress__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var vuex__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! vuex */ "./node_modules/vuex/dist/vuex.esm.js");
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


/* harmony default export */ __webpack_exports__["default"] = ({
  metaInfo: {
    title: "Profit & Loss"
  },
  data: function data() {
    return {
      isLoading: true,
      infos: [],
      today: new Date().toJSON().slice(0, 10)
    };
  },
  computed: _objectSpread({}, Object(vuex__WEBPACK_IMPORTED_MODULE_1__["mapGetters"])(["currentUser"])),
  methods: {
    //------------------------------Formetted Numbers -------------------------\\
    formatNumber: function formatNumber(number, dec) {
      var value = (typeof number === "string" ? number : number.toString()).split(".");
      if (dec <= 0) return value[0];
      var formated = value[1] || "";
      if (formated.length > dec) return "".concat(value[0], ".").concat(formated.substr(0, dec));

      while (formated.length < dec) {
        formated += "0";
      }

      return "".concat(value[0], ".").concat(formated);
    },
    //----------------------------- Submit Date Picker -------------------\\
    Submit: function Submit(values) {
      var self = this;
      self.ProfitAndLoss(values);
    },
    //----------------------------- Profit And Loss-------------------\\
    ProfitAndLoss: function ProfitAndLoss(values) {
      var _this = this;

      // Start the progress bar.
      nprogress__WEBPACK_IMPORTED_MODULE_0___default.a.start();
      nprogress__WEBPACK_IMPORTED_MODULE_0___default.a.set(0.1);
      axios.get("report/ProfitAndLoss?to=" + values.to.substring(0, 10) + "&from=" + values.from.substring(0, 10)).then(function (response) {
        _this.infos = response.data.data; // Complete the animation of theprogress bar.

        nprogress__WEBPACK_IMPORTED_MODULE_0___default.a.done();
      })["catch"](function (response) {
        // Complete the animation of theprogress bar.
        nprogress__WEBPACK_IMPORTED_MODULE_0___default.a.done();
      });
    },
    getData: function getData() {
      var _this2 = this;

      // Start the progress bar.
      nprogress__WEBPACK_IMPORTED_MODULE_0___default.a.start();
      nprogress__WEBPACK_IMPORTED_MODULE_0___default.a.set(0.1);
      axios.get("report/ProfitAndLoss?to=" + this.today + "&from=" + this.today).then(function (response) {
        _this2.infos = response.data.data; // Complete the animation of theprogress bar.

        nprogress__WEBPACK_IMPORTED_MODULE_0___default.a.done();
        _this2.isLoading = false;
      })["catch"](function (response) {
        // Complete the animation of theprogress bar.
        nprogress__WEBPACK_IMPORTED_MODULE_0___default.a.done();
        setTimeout(function () {
          _this2.isLoading = false;
        }, 500);
      });
    }
  },
  //end Methods
  //-----------------------------Autoload function-------------------\\
  created: function created() {
    this.getData();
  }
});

/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/src/views/app/pages/reports/profit_and_loss.vue?vue&type=template&id=b6b30cee&":
/*!********************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/src/views/app/pages/reports/profit_and_loss.vue?vue&type=template&id=b6b30cee& ***!
  \********************************************************************************************************************************************************************************************************************************/
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
        attrs: { page: _vm.$t("ProfitandLoss"), folder: _vm.$t("Reports") },
      }),
      _vm._v(" "),
      _vm.isLoading
        ? _c("div", {
            staticClass: "loading_page spinner spinner-primary mr-3",
          })
        : _vm._e(),
      _vm._v(" "),
      !_vm.isLoading
        ? _c("b-row", [
            _c(
              "div",
              { staticClass: "table-responsive" },
              [
                _c(
                  "b-col",
                  { attrs: { md: "12" } },
                  [
                    _c("date-range-picker", {
                      attrs: {
                        from: _vm.$route.query.from,
                        to: _vm.$route.query.to,
                        panel: _vm.$route.query.panel,
                      },
                      on: { update: _vm.Submit },
                    }),
                  ],
                  1
                ),
                _vm._v(" "),
                _c(
                  "b-col",
                  { staticClass: "mt-4", attrs: { md: "12" } },
                  [
                    _c(
                      "b-row",
                      [
                        _c("b-col", { attrs: { md: "4", sm: "12" } }, [
                          _c(
                            "div",
                            { staticClass: "card card-icon text-center mb-30" },
                            [
                              _c("div", { staticClass: "card-body" }, [
                                _c("i", { staticClass: "i-Data-Upload" }),
                                _vm._v(" "),
                                _c(
                                  "p",
                                  { staticClass: "text-muted mt-2 mb-2" },
                                  [
                                    _c("span", { staticClass: "bold" }, [
                                      _vm._v(
                                        _vm._s(
                                          _vm.infos.sales.nmbr
                                            ? _vm.infos.sales.nmbr
                                            : 0
                                        )
                                      ),
                                    ]),
                                    _vm._v(
                                      "\n                  " +
                                        _vm._s(_vm.$t("Sales")) +
                                        "\n                "
                                    ),
                                  ]
                                ),
                                _vm._v(" "),
                                _c(
                                  "p",
                                  {
                                    staticClass:
                                      "text-primary text-24 line-height-1 m-0",
                                  },
                                  [
                                    _vm._v(
                                      _vm._s(_vm.currentUser.currency) +
                                        " " +
                                        _vm._s(
                                          _vm.formatNumber(
                                            _vm.infos.sales.sum
                                              ? _vm.infos.sales.sum
                                              : 0,
                                            2
                                          )
                                        )
                                    ),
                                  ]
                                ),
                              ]),
                            ]
                          ),
                        ]),
                        _vm._v(" "),
                        _c("b-col", { attrs: { md: "4", sm: "12" } }, [
                          _c(
                            "div",
                            { staticClass: "card card-icon text-center mb-30" },
                            [
                              _c("div", { staticClass: "card-body" }, [
                                _c("i", { staticClass: "i-Data-Upload" }),
                                _vm._v(" "),
                                _c(
                                  "p",
                                  { staticClass: "text-muted mt-2 mb-2" },
                                  [
                                    _c("span", { staticClass: "bold" }, [
                                      _vm._v(
                                        _vm._s(
                                          _vm.infos.purchases.nmbr
                                            ? _vm.infos.purchases.nmbr
                                            : 0
                                        )
                                      ),
                                    ]),
                                    _vm._v(
                                      "\n                  " +
                                        _vm._s(_vm.$t("Purchases")) +
                                        "\n                "
                                    ),
                                  ]
                                ),
                                _vm._v(" "),
                                _c(
                                  "p",
                                  {
                                    staticClass:
                                      "text-primary text-24 line-height-1 m-0",
                                  },
                                  [
                                    _vm._v(
                                      _vm._s(_vm.currentUser.currency) +
                                        " " +
                                        _vm._s(
                                          _vm.formatNumber(
                                            _vm.infos.purchases.sum
                                              ? _vm.infos.purchases.sum
                                              : 0,
                                            2
                                          )
                                        )
                                    ),
                                  ]
                                ),
                              ]),
                            ]
                          ),
                        ]),
                        _vm._v(" "),
                        _c("b-col", { attrs: { md: "4", sm: "12" } }, [
                          _c(
                            "div",
                            { staticClass: "card card-icon text-center mb-30" },
                            [
                              _c("div", { staticClass: "card-body" }, [
                                _c("i", { staticClass: "i-Data-Upload" }),
                                _vm._v(" "),
                                _c(
                                  "p",
                                  { staticClass: "text-muted mt-2 mb-2" },
                                  [
                                    _c("span", { staticClass: "bold" }, [
                                      _vm._v(
                                        _vm._s(
                                          _vm.infos.returns_sales.nmbr
                                            ? _vm.infos.returns_sales.nmbr
                                            : 0
                                        )
                                      ),
                                    ]),
                                    _vm._v(
                                      "\n                  " +
                                        _vm._s(_vm.$t("SalesReturn")) +
                                        "\n                "
                                    ),
                                  ]
                                ),
                                _vm._v(" "),
                                _c(
                                  "p",
                                  {
                                    staticClass:
                                      "text-primary text-24 line-height-1 m-0",
                                  },
                                  [
                                    _vm._v(
                                      _vm._s(_vm.currentUser.currency) +
                                        " " +
                                        _vm._s(
                                          _vm.formatNumber(
                                            _vm.infos.returns_sales.sum
                                              ? _vm.infos.returns_sales.sum
                                              : 0,
                                            2
                                          )
                                        )
                                    ),
                                  ]
                                ),
                              ]),
                            ]
                          ),
                        ]),
                        _vm._v(" "),
                        _c("b-col", { attrs: { md: "4", sm: "12" } }, [
                          _c(
                            "div",
                            { staticClass: "card card-icon text-center mb-30" },
                            [
                              _c("div", { staticClass: "card-body" }, [
                                _c("i", { staticClass: "i-Data-Upload" }),
                                _vm._v(" "),
                                _c(
                                  "p",
                                  { staticClass: "text-muted mt-2 mb-2" },
                                  [
                                    _c("span", { staticClass: "bold" }, [
                                      _vm._v(
                                        _vm._s(
                                          _vm.infos.returns_purchases.nmbr
                                            ? _vm.infos.returns_purchases.nmbr
                                            : 0
                                        )
                                      ),
                                    ]),
                                    _vm._v(
                                      "\n                  " +
                                        _vm._s(_vm.$t("PurchasesReturn")) +
                                        "\n                "
                                    ),
                                  ]
                                ),
                                _vm._v(" "),
                                _c(
                                  "p",
                                  {
                                    staticClass:
                                      "text-primary text-24 line-height-1 m-0",
                                  },
                                  [
                                    _vm._v(
                                      _vm._s(_vm.currentUser.currency) +
                                        " " +
                                        _vm._s(
                                          _vm.formatNumber(
                                            _vm.infos.returns_purchases.sum
                                              ? _vm.infos.returns_purchases.sum
                                              : 0,
                                            2
                                          )
                                        )
                                    ),
                                  ]
                                ),
                              ]),
                            ]
                          ),
                        ]),
                        _vm._v(" "),
                        _c("b-col", { attrs: { md: "4", sm: "12" } }, [
                          _c(
                            "div",
                            { staticClass: "card card-icon text-center mb-30" },
                            [
                              _c("div", { staticClass: "card-body" }, [
                                _c("i", { staticClass: "i-Data-Upload" }),
                                _vm._v(" "),
                                _c(
                                  "p",
                                  { staticClass: "text-muted mt-2 mb-2" },
                                  [
                                    _c("span", { staticClass: "bold" }, [
                                      _vm._v(_vm._s(_vm.$t("Expenses"))),
                                    ]),
                                  ]
                                ),
                                _vm._v(" "),
                                _c(
                                  "p",
                                  {
                                    staticClass:
                                      "text-primary text-24 line-height-1 m-0",
                                  },
                                  [
                                    _vm._v(
                                      _vm._s(_vm.currentUser.currency) +
                                        " " +
                                        _vm._s(
                                          _vm.formatNumber(
                                            _vm.infos.expenses.sum
                                              ? _vm.infos.expenses.sum
                                              : 0,
                                            2
                                          )
                                        )
                                    ),
                                  ]
                                ),
                              ]),
                            ]
                          ),
                        ]),
                        _vm._v(" "),
                        _c("b-col", { attrs: { md: "4", sm: "12" } }, [
                          _c(
                            "div",
                            { staticClass: "card card-icon text-center mb-30" },
                            [
                              _c("div", { staticClass: "card-body" }, [
                                _c("i", { staticClass: "i-Data-Upload" }),
                                _vm._v(" "),
                                _c(
                                  "p",
                                  { staticClass: "text-muted mt-2 mb-2" },
                                  [_vm._v(_vm._s(_vm.$t("Profit")))]
                                ),
                                _vm._v(" "),
                                _c(
                                  "p",
                                  {
                                    staticClass:
                                      "text-primary text-24 line-height-1 m-0",
                                  },
                                  [
                                    _vm._v(
                                      _vm._s(_vm.currentUser.currency) +
                                        " " +
                                        _vm._s(
                                          _vm.formatNumber(
                                            _vm.infos.profit
                                              ? _vm.infos.profit
                                              : 0,
                                            2
                                          )
                                        )
                                    ),
                                  ]
                                ),
                              ]),
                            ]
                          ),
                        ]),
                        _vm._v(" "),
                        _c("b-col", { attrs: { md: "4", sm: "12" } }, [
                          _c(
                            "div",
                            { staticClass: "card card-icon text-center mb-30" },
                            [
                              _c("div", { staticClass: "card-body" }, [
                                _c("i", { staticClass: "i-Data-Upload" }),
                                _vm._v(" "),
                                _c(
                                  "p",
                                  { staticClass: "text-muted mt-2 mb-2" },
                                  [_vm._v(_vm._s(_vm.$t("PaiementsReceived")))]
                                ),
                                _vm._v(" "),
                                _c(
                                  "p",
                                  {
                                    staticClass:
                                      "text-primary text-24 line-height-1 m-0",
                                  },
                                  [
                                    _vm._v(
                                      _vm._s(_vm.currentUser.currency) +
                                        " " +
                                        _vm._s(
                                          _vm.formatNumber(
                                            _vm.infos.payment_received
                                              ? _vm.infos.payment_received
                                              : 0,
                                            2
                                          )
                                        )
                                    ),
                                  ]
                                ),
                              ]),
                              _vm._v(" "),
                              _c("div", { staticClass: "card-footer" }, [
                                _c("p", [
                                  _vm._v(
                                    "\n                  (\n                  "
                                  ),
                                  _c("span", { staticClass: "bold" }, [
                                    _vm._v(
                                      _vm._s(_vm.currentUser.currency) +
                                        " " +
                                        _vm._s(
                                          _vm.formatNumber(
                                            _vm.infos.paiement_sales.sum
                                              ? _vm.infos.paiement_sales.sum
                                              : 0,
                                            2
                                          )
                                        )
                                    ),
                                  ]),
                                  _vm._v(
                                    "\n                  " +
                                      _vm._s(_vm.$t("PaymentsSales")) +
                                      "\n                  +\n                  "
                                  ),
                                  _c("span", { staticClass: "bold" }, [
                                    _vm._v(
                                      _vm._s(_vm.currentUser.currency) +
                                        " " +
                                        _vm._s(
                                          _vm.formatNumber(
                                            _vm.infos.PaymentPurchaseReturns.sum
                                              ? _vm.infos.PaymentPurchaseReturns
                                                  .sum
                                              : 0,
                                            2
                                          )
                                        )
                                    ),
                                  ]),
                                  _vm._v(
                                    "\n                  " +
                                      _vm._s(_vm.$t("PurchasesReturn")) +
                                      ")\n                "
                                  ),
                                ]),
                              ]),
                            ]
                          ),
                        ]),
                        _vm._v(" "),
                        _c("b-col", { attrs: { md: "4", sm: "12" } }, [
                          _c(
                            "div",
                            { staticClass: "card card-icon text-center mb-30" },
                            [
                              _c("div", { staticClass: "card-body" }, [
                                _c("i", { staticClass: "i-Data-Upload" }),
                                _vm._v(" "),
                                _c(
                                  "p",
                                  { staticClass: "text-muted mt-2 mb-2" },
                                  [_vm._v(_vm._s(_vm.$t("PaiementsSent")))]
                                ),
                                _vm._v(" "),
                                _c(
                                  "p",
                                  {
                                    staticClass:
                                      "text-primary text-24 line-height-1 m-0",
                                  },
                                  [
                                    _vm._v(
                                      _vm._s(_vm.currentUser.currency) +
                                        " " +
                                        _vm._s(
                                          _vm.formatNumber(
                                            _vm.infos.payment_sent
                                              ? _vm.infos.payment_sent
                                              : 0,
                                            2
                                          )
                                        )
                                    ),
                                  ]
                                ),
                              ]),
                              _vm._v(" "),
                              _c("div", { staticClass: "card-footer" }, [
                                _c("p", [
                                  _vm._v(
                                    "\n                  (\n                  "
                                  ),
                                  _c("span", { staticClass: "bold" }, [
                                    _vm._v(
                                      _vm._s(_vm.currentUser.currency) +
                                        " " +
                                        _vm._s(
                                          _vm.formatNumber(
                                            _vm.infos.paiement_purchases.sum
                                              ? _vm.infos.paiement_purchases.sum
                                              : 0,
                                            2
                                          )
                                        )
                                    ),
                                  ]),
                                  _vm._v(
                                    "\n                  " +
                                      _vm._s(_vm.$t("PaymentsPurchases")) +
                                      "\n                  +\n                  "
                                  ),
                                  _c("span", { staticClass: "bold" }, [
                                    _vm._v(
                                      _vm._s(_vm.currentUser.currency) +
                                        " " +
                                        _vm._s(
                                          _vm.formatNumber(
                                            _vm.infos.PaymentSaleReturns.sum
                                              ? _vm.infos.PaymentSaleReturns.sum
                                              : 0,
                                            2
                                          )
                                        )
                                    ),
                                  ]),
                                  _vm._v(
                                    "\n                  " +
                                      _vm._s(_vm.$t("SalesReturn")) +
                                      ")\n                  +\n                  "
                                  ),
                                  _c("span", { staticClass: "bold" }, [
                                    _vm._v(
                                      _vm._s(_vm.currentUser.currency) +
                                        " " +
                                        _vm._s(
                                          _vm.formatNumber(
                                            _vm.infos.expenses.sum
                                              ? _vm.infos.expenses.sum
                                              : 0,
                                            2
                                          )
                                        )
                                    ),
                                  ]),
                                  _vm._v(
                                    "\n                  " +
                                      _vm._s(_vm.$t("Expenses")) +
                                      ")\n                "
                                  ),
                                ]),
                              ]),
                            ]
                          ),
                        ]),
                        _vm._v(" "),
                        _c("b-col", { attrs: { md: "4", sm: "12" } }, [
                          _c(
                            "div",
                            { staticClass: "card card-icon text-center mb-30" },
                            [
                              _c("div", { staticClass: "card-body" }, [
                                _c("i", { staticClass: "i-Data-Upload" }),
                                _vm._v(" "),
                                _c(
                                  "p",
                                  { staticClass: "text-muted mt-2 mb-2" },
                                  [_vm._v(_vm._s(_vm.$t("PaiementsNet")))]
                                ),
                                _vm._v(" "),
                                _c(
                                  "p",
                                  {
                                    staticClass:
                                      "text-primary text-24 line-height-1 m-0",
                                  },
                                  [
                                    _vm._v(
                                      _vm._s(_vm.currentUser.currency) +
                                        " " +
                                        _vm._s(
                                          _vm.formatNumber(
                                            _vm.infos.paiement_net
                                              ? _vm.infos.paiement_net
                                              : 0,
                                            2
                                          )
                                        )
                                    ),
                                  ]
                                ),
                              ]),
                              _vm._v(" "),
                              _c("div", { staticClass: "card-footer" }, [
                                _c("p", [
                                  _vm._v(
                                    "\n                  (\n                  "
                                  ),
                                  _c("span", { staticClass: "bold" }, [
                                    _vm._v(
                                      _vm._s(_vm.currentUser.currency) +
                                        " " +
                                        _vm._s(
                                          _vm.formatNumber(
                                            _vm.infos.payment_received
                                              ? _vm.infos.payment_received
                                              : 0,
                                            2
                                          )
                                        )
                                    ),
                                  ]),
                                  _vm._v(
                                    "\n                  " +
                                      _vm._s(_vm.$t("Recieved")) +
                                      "\n                  -\n                  "
                                  ),
                                  _c("span", { staticClass: "bold" }, [
                                    _vm._v(
                                      _vm._s(_vm.currentUser.currency) +
                                        " " +
                                        _vm._s(
                                          _vm.formatNumber(
                                            _vm.infos.payment_sent
                                              ? _vm.infos.payment_sent
                                              : 0,
                                            2
                                          )
                                        )
                                    ),
                                  ]),
                                  _vm._v(
                                    "\n                  " +
                                      _vm._s(_vm.$t("Sent")) +
                                      ")\n                "
                                  ),
                                ]),
                              ]),
                            ]
                          ),
                        ]),
                      ],
                      1
                    ),
                  ],
                  1
                ),
              ],
              1
            ),
          ])
        : _vm._e(),
    ],
    1
  )
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./resources/src/views/app/pages/reports/profit_and_loss.vue":
/*!*******************************************************************!*\
  !*** ./resources/src/views/app/pages/reports/profit_and_loss.vue ***!
  \*******************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _profit_and_loss_vue_vue_type_template_id_b6b30cee___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./profit_and_loss.vue?vue&type=template&id=b6b30cee& */ "./resources/src/views/app/pages/reports/profit_and_loss.vue?vue&type=template&id=b6b30cee&");
/* harmony import */ var _profit_and_loss_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./profit_and_loss.vue?vue&type=script&lang=js& */ "./resources/src/views/app/pages/reports/profit_and_loss.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _profit_and_loss_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _profit_and_loss_vue_vue_type_template_id_b6b30cee___WEBPACK_IMPORTED_MODULE_0__["render"],
  _profit_and_loss_vue_vue_type_template_id_b6b30cee___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/src/views/app/pages/reports/profit_and_loss.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/src/views/app/pages/reports/profit_and_loss.vue?vue&type=script&lang=js&":
/*!********************************************************************************************!*\
  !*** ./resources/src/views/app/pages/reports/profit_and_loss.vue?vue&type=script&lang=js& ***!
  \********************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_profit_and_loss_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../node_modules/babel-loader/lib??ref--4-0!../../../../../../node_modules/vue-loader/lib??vue-loader-options!./profit_and_loss.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/src/views/app/pages/reports/profit_and_loss.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_profit_and_loss_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/src/views/app/pages/reports/profit_and_loss.vue?vue&type=template&id=b6b30cee&":
/*!**************************************************************************************************!*\
  !*** ./resources/src/views/app/pages/reports/profit_and_loss.vue?vue&type=template&id=b6b30cee& ***!
  \**************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_profit_and_loss_vue_vue_type_template_id_b6b30cee___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../../node_modules/vue-loader/lib??vue-loader-options!./profit_and_loss.vue?vue&type=template&id=b6b30cee& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/src/views/app/pages/reports/profit_and_loss.vue?vue&type=template&id=b6b30cee&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_profit_and_loss_vue_vue_type_template_id_b6b30cee___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_profit_and_loss_vue_vue_type_template_id_b6b30cee___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ })

}]);