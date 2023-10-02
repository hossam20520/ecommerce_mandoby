(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["payments_sales_returns"],{

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/src/views/app/pages/reports/payments/payments_sales_returns.vue?vue&type=script&lang=js&":
/*!********************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/src/views/app/pages/reports/payments/payments_sales_returns.vue?vue&type=script&lang=js& ***!
  \********************************************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var nprogress__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! nprogress */ "./node_modules/nprogress/nprogress.js");
/* harmony import */ var nprogress__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(nprogress__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var jspdf__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! jspdf */ "./node_modules/jspdf/dist/jspdf.es.min.js");
/* harmony import */ var jspdf_autotable__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! jspdf-autotable */ "./node_modules/jspdf-autotable/dist/jspdf.plugin.autotable.js");
/* harmony import */ var jspdf_autotable__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(jspdf_autotable__WEBPACK_IMPORTED_MODULE_2__);
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
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
    title: "Payment Sale Returns"
  },
  data: function data() {
    return {
      isLoading: true,
      serverParams: {
        sort: {
          field: "id",
          type: "desc"
        },
        page: 1,
        perPage: 10
      },
      limit: "10",
      search: "",
      totalRows: "",
      Filter_client: "",
      Filter_Ref: "",
      Filter_date: "",
      Filter_return: "",
      Filter_Reg: "",
      payments: [],
      clients: [],
      sale_returns: []
    };
  },
  computed: {
    columns: function columns() {
      return [{
        label: this.$t("date"),
        field: "date",
        tdClass: "text-left",
        thClass: "text-left"
      }, {
        label: this.$t("Reference"),
        field: "Ref",
        tdClass: "text-left",
        thClass: "text-left"
      }, {
        label: this.$t("Return"),
        field: "Ref_return",
        tdClass: "text-left",
        thClass: "text-left"
      }, {
        label: this.$t("Customer"),
        field: "client_name",
        tdClass: "text-left",
        thClass: "text-left"
      }, {
        label: this.$t("ModePaiement"),
        field: "Reglement",
        tdClass: "text-left",
        thClass: "text-left"
      }, {
        label: this.$t("Amount"),
        field: "montant",
        tdClass: "text-left",
        thClass: "text-left"
      }];
    }
  },
  methods: {
    //---- update Params Table
    updateParams: function updateParams(newProps) {
      this.serverParams = Object.assign({}, this.serverParams, newProps);
    },
    //---- Event Page Change
    onPageChange: function onPageChange(_ref) {
      var currentPage = _ref.currentPage;

      if (this.serverParams.page !== currentPage) {
        this.updateParams({
          page: currentPage
        });
        this.Payments_sale_returns(currentPage);
      }
    },
    //---- Event Per Page Change
    onPerPageChange: function onPerPageChange(_ref2) {
      var currentPerPage = _ref2.currentPerPage;

      if (this.limit !== currentPerPage) {
        this.limit = currentPerPage;
        this.updateParams({
          page: 1,
          perPage: currentPerPage
        });
        this.Payments_sale_returns(1);
      }
    },
    //---- Event on Sort Change
    onSortChange: function onSortChange(params) {
      var field = "";

      if (params[0].field == "Ref_return") {
        field = "sale_return_id";
      } else {
        field = params[0].field;
      }

      this.updateParams({
        sort: {
          type: params[0].type,
          field: field
        }
      });
      this.Payments_sale_returns(this.serverParams.page);
    },
    //---- Event on Search
    onSearch: function onSearch(value) {
      this.search = value.searchTerm;
      this.Payments_sale_returns(this.serverParams.page);
    },
    //------ Reset Filter
    Reset_Filter: function Reset_Filter() {
      this.search = "";
      this.Filter_client = "";
      this.Filter_Ref = "";
      this.Filter_date = "";
      this.Filter_return = "";
      this.Filter_Reg = "";
      this.Payments_sale_returns(this.serverParams.page);
    },
    //---------------------------------------- Set To Strings-------------------------\\
    setToStrings: function setToStrings() {
      // Simply replaces null values with strings=''
      if (this.Filter_client === null) {
        this.Filter_client = "";
      } else if (this.Filter_return === null) {
        this.Filter_return = "";
      }
    },
    //------------------------ Payments Sale Returns PDF -----------------------\\
    Payment_PDF: function Payment_PDF() {
      var self = this;
      var pdf = new jspdf__WEBPACK_IMPORTED_MODULE_1__["default"]("p", "pt");
      var columns = [{
        title: "Date",
        dataKey: "date"
      }, {
        title: "Ref",
        dataKey: "Ref"
      }, {
        title: "Return",
        dataKey: "Ref_return"
      }, {
        title: "Client",
        dataKey: "client_name"
      }, {
        title: "Paid by",
        dataKey: "Reglement"
      }, {
        title: "Amount",
        dataKey: "montant"
      }];
      pdf.autoTable(columns, self.payments);
      pdf.text("Payments Sale Returns", 40, 25);
      pdf.save("Payments_Sale_Returns.pdf");
    },
    //----------------------- Payment Sale Returns Excel -----------------------\\
    Payment_Excel: function Payment_Excel() {
      // Start the progress bar.
      nprogress__WEBPACK_IMPORTED_MODULE_0___default.a.start();
      nprogress__WEBPACK_IMPORTED_MODULE_0___default.a.set(0.1);
      axios.get("payment/returns_sale/export/Excel", {
        responseType: "blob",
        // important
        headers: {
          "Content-Type": "application/json"
        }
      }).then(function (response) {
        var url = window.URL.createObjectURL(new Blob([response.data]));
        var link = document.createElement("a");
        link.href = url;
        link.setAttribute("download", "Payment_Sale_Returns.xlsx");
        document.body.appendChild(link);
        link.click(); // Complete the animation of the  progress bar.

        nprogress__WEBPACK_IMPORTED_MODULE_0___default.a.done();
      })["catch"](function () {
        // Complete the animation of the  progress bar.
        nprogress__WEBPACK_IMPORTED_MODULE_0___default.a.done();
      });
    },
    //-------------------------------- Get All Payments Sale returns ---------------------\\
    Payments_sale_returns: function Payments_sale_returns(page) {
      var _this = this;

      this.setToStrings(); // Start the progress bar.

      nprogress__WEBPACK_IMPORTED_MODULE_0___default.a.start();
      nprogress__WEBPACK_IMPORTED_MODULE_0___default.a.set(0.1);
      this.setToStrings();
      axios.get("payment/returns_sale?page=" + page + "&Ref=" + this.Filter_Ref + "&date=" + this.Filter_date + "&client_id=" + this.Filter_client + "&sale_return_id=" + this.Filter_return + "&Reglement=" + this.Filter_Reg + "&SortField=" + this.serverParams.sort.field + "&SortType=" + this.serverParams.sort.type + "&search=" + this.search + "&limit=" + this.limit).then(function (response) {
        _this.payments = response.data.payments;
        _this.clients = response.data.clients;
        _this.sale_returns = response.data.sale_returns;
        _this.totalRows = response.data.totalRows; // Complete the animation of theprogress bar.

        nprogress__WEBPACK_IMPORTED_MODULE_0___default.a.done();
        _this.isLoading = false;
      })["catch"](function (response) {
        // Complete the animation of theprogress bar.
        nprogress__WEBPACK_IMPORTED_MODULE_0___default.a.done();
        setTimeout(function () {
          _this.isLoading = false;
        }, 500);
      });
    }
  },
  //----------------------------- Created function-------------------\\
  created: function created() {
    this.Payments_sale_returns(1);
  }
});

/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/src/views/app/pages/reports/payments/payments_sales_returns.vue?vue&type=template&id=5592e1fa&":
/*!************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/src/views/app/pages/reports/payments/payments_sales_returns.vue?vue&type=template&id=5592e1fa& ***!
  \************************************************************************************************************************************************************************************************************************************************/
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
        attrs: {
          page: _vm.$t("payments_Sales_Return"),
          folder: _vm.$t("Reports"),
        },
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
            "b-card",
            { staticClass: "wrapper" },
            [
              _c(
                "vue-good-table",
                {
                  attrs: {
                    mode: "remote",
                    columns: _vm.columns,
                    totalRows: _vm.totalRows,
                    rows: _vm.payments,
                    "search-options": {
                      placeholder: _vm.$t("Search_this_table"),
                      enabled: true,
                    },
                    "pagination-options": {
                      enabled: true,
                      mode: "records",
                      nextLabel: "next",
                      prevLabel: "prev",
                    },
                    styleClass: "table-hover tableOne vgt-table",
                  },
                  on: {
                    "on-page-change": _vm.onPageChange,
                    "on-per-page-change": _vm.onPerPageChange,
                    "on-sort-change": _vm.onSortChange,
                    "on-search": _vm.onSearch,
                  },
                },
                [
                  _c(
                    "div",
                    {
                      staticClass: "mt-2 mb-3",
                      attrs: { slot: "table-actions" },
                      slot: "table-actions",
                    },
                    [
                      _c(
                        "b-button",
                        {
                          attrs: {
                            size: "sm",
                            variant: "outline-danger ripple m-1",
                          },
                          on: {
                            click: function ($event) {
                              return _vm.Payment_Excel()
                            },
                          },
                        },
                        [
                          _c("i", { staticClass: "i-File-Excel" }),
                          _vm._v(" EXCEL\n        "),
                        ]
                      ),
                    ],
                    1
                  ),
                ]
              ),
            ],
            1
          )
        : _vm._e(),
      _vm._v(" "),
      _c(
        "b-sidebar",
        {
          attrs: {
            id: "sidebar-right",
            title: _vm.$t("Filter"),
            "bg-variant": "white",
            right: "",
            shadow: "",
          },
        },
        [
          _c(
            "div",
            { staticClass: "px-3 py-2" },
            [
              _c(
                "b-row",
                [
                  _c(
                    "b-col",
                    { attrs: { md: "12" } },
                    [
                      _c(
                        "b-form-group",
                        { attrs: { label: _vm.$t("date") } },
                        [
                          _c("b-form-input", {
                            attrs: { type: "date" },
                            model: {
                              value: _vm.Filter_date,
                              callback: function ($$v) {
                                _vm.Filter_date = $$v
                              },
                              expression: "Filter_date",
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
                    { attrs: { md: "12" } },
                    [
                      _c(
                        "b-form-group",
                        { attrs: { label: _vm.$t("Reference") } },
                        [
                          _c("b-form-input", {
                            attrs: {
                              label: "Reference",
                              placeholder: _vm.$t("Reference"),
                            },
                            model: {
                              value: _vm.Filter_Ref,
                              callback: function ($$v) {
                                _vm.Filter_Ref = $$v
                              },
                              expression: "Filter_Ref",
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
                    { attrs: { md: "12" } },
                    [
                      _c(
                        "b-form-group",
                        { attrs: { label: _vm.$t("Customer") } },
                        [
                          _c("v-select", {
                            attrs: {
                              reduce: function (label) {
                                return label.value
                              },
                              placeholder: _vm.$t("Choose_Customer"),
                              options: _vm.clients.map(function (clients) {
                                return {
                                  label: clients.name,
                                  value: clients.id,
                                }
                              }),
                            },
                            model: {
                              value: _vm.Filter_client,
                              callback: function ($$v) {
                                _vm.Filter_client = $$v
                              },
                              expression: "Filter_client",
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
                    { attrs: { md: "12" } },
                    [
                      _c(
                        "b-form-group",
                        { attrs: { label: _vm.$t("Return") } },
                        [
                          _c("v-select", {
                            attrs: {
                              reduce: function (label) {
                                return label.value
                              },
                              placeholder: _vm.$t("PleaseSelect"),
                              options: _vm.sale_returns.map(function (
                                sale_returns
                              ) {
                                return {
                                  label: sale_returns.Ref,
                                  value: sale_returns.id,
                                }
                              }),
                            },
                            model: {
                              value: _vm.Filter_return,
                              callback: function ($$v) {
                                _vm.Filter_return = $$v
                              },
                              expression: "Filter_return",
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
                    { attrs: { md: "12" } },
                    [
                      _c(
                        "b-form-group",
                        { attrs: { label: _vm.$t("Paymentchoice") } },
                        [
                          _c("v-select", {
                            attrs: {
                              reduce: function (label) {
                                return label.value
                              },
                              placeholder: _vm.$t("PleaseSelect"),
                              options: [
                                { label: "Cash", value: "Cash" },
                                { label: "cheque", value: "cheque" },
                                {
                                  label: "Western Union",
                                  value: "Western Union",
                                },
                                {
                                  label: "bank transfer",
                                  value: "bank transfer",
                                },
                                { label: "credit card", value: "credit card" },
                                { label: "other", value: "other" },
                              ],
                            },
                            model: {
                              value: _vm.Filter_Reg,
                              callback: function ($$v) {
                                _vm.Filter_Reg = $$v
                              },
                              expression: "Filter_Reg",
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
                    { attrs: { md: "6", sm: "12" } },
                    [
                      _c(
                        "b-button",
                        {
                          attrs: {
                            variant: "primary ripple m-1",
                            size: "sm",
                            block: "",
                          },
                          on: {
                            click: function ($event) {
                              return _vm.Payments_sale_returns(
                                _vm.serverParams.page
                              )
                            },
                          },
                        },
                        [
                          _c("i", { staticClass: "i-Filter-2" }),
                          _vm._v(
                            "\n            " +
                              _vm._s(_vm.$t("Filter")) +
                              "\n          "
                          ),
                        ]
                      ),
                    ],
                    1
                  ),
                  _vm._v(" "),
                  _c(
                    "b-col",
                    { attrs: { md: "6", sm: "12" } },
                    [
                      _c(
                        "b-button",
                        {
                          attrs: {
                            variant: "danger ripple m-1",
                            size: "sm",
                            block: "",
                          },
                          on: {
                            click: function ($event) {
                              return _vm.Reset_Filter()
                            },
                          },
                        },
                        [
                          _c("i", { staticClass: "i-Power-2" }),
                          _vm._v(
                            "\n            " +
                              _vm._s(_vm.$t("Reset")) +
                              "\n          "
                          ),
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
        ]
      ),
    ],
    1
  )
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./resources/src/views/app/pages/reports/payments/payments_sales_returns.vue":
/*!***********************************************************************************!*\
  !*** ./resources/src/views/app/pages/reports/payments/payments_sales_returns.vue ***!
  \***********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _payments_sales_returns_vue_vue_type_template_id_5592e1fa___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./payments_sales_returns.vue?vue&type=template&id=5592e1fa& */ "./resources/src/views/app/pages/reports/payments/payments_sales_returns.vue?vue&type=template&id=5592e1fa&");
/* harmony import */ var _payments_sales_returns_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./payments_sales_returns.vue?vue&type=script&lang=js& */ "./resources/src/views/app/pages/reports/payments/payments_sales_returns.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _payments_sales_returns_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _payments_sales_returns_vue_vue_type_template_id_5592e1fa___WEBPACK_IMPORTED_MODULE_0__["render"],
  _payments_sales_returns_vue_vue_type_template_id_5592e1fa___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/src/views/app/pages/reports/payments/payments_sales_returns.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/src/views/app/pages/reports/payments/payments_sales_returns.vue?vue&type=script&lang=js&":
/*!************************************************************************************************************!*\
  !*** ./resources/src/views/app/pages/reports/payments/payments_sales_returns.vue?vue&type=script&lang=js& ***!
  \************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_payments_sales_returns_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../../node_modules/babel-loader/lib??ref--4-0!../../../../../../../node_modules/vue-loader/lib??vue-loader-options!./payments_sales_returns.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/src/views/app/pages/reports/payments/payments_sales_returns.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_payments_sales_returns_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/src/views/app/pages/reports/payments/payments_sales_returns.vue?vue&type=template&id=5592e1fa&":
/*!******************************************************************************************************************!*\
  !*** ./resources/src/views/app/pages/reports/payments/payments_sales_returns.vue?vue&type=template&id=5592e1fa& ***!
  \******************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_payments_sales_returns_vue_vue_type_template_id_5592e1fa___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../../../node_modules/vue-loader/lib??vue-loader-options!./payments_sales_returns.vue?vue&type=template&id=5592e1fa& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/src/views/app/pages/reports/payments/payments_sales_returns.vue?vue&type=template&id=5592e1fa&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_payments_sales_returns_vue_vue_type_template_id_5592e1fa___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_payments_sales_returns_vue_vue_type_template_id_5592e1fa___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ })

}]);