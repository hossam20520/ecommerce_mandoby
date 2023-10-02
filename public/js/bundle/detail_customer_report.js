(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["detail_customer_report"],{

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/src/views/app/pages/reports/detail_Customer_Report.vue?vue&type=script&lang=js&":
/*!***********************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/src/views/app/pages/reports/detail_Customer_Report.vue?vue&type=script&lang=js& ***!
  \***********************************************************************************************************************************************************************************************/
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
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
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
    return {
      totalRows_quotations: "",
      totalRows_sales: "",
      totalRows_returns: "",
      totalRows_payments: "",
      limit_quotations: "10",
      limit_returns: "10",
      limit_sales: "10",
      limit_payments: "10",
      sales_page: 1,
      quotations_page: 1,
      Return_sale_page: 1,
      Payment_sale_page: 1,
      isLoading: true,
      payments: [],
      sales: [],
      quotations: [],
      returns_customer: [],
      client: {
        id: "",
        name: "",
        total_sales: 0,
        total_amount: 0,
        total_paid: 0,
        due: 0
      }
    };
  },
  computed: _objectSpread(_objectSpread({}, Object(vuex__WEBPACK_IMPORTED_MODULE_0__["mapGetters"])(["currentUser"])), {}, {
    columns_quotations: function columns_quotations() {
      return [{
        label: this.$t("date"),
        field: "date",
        tdClass: "text-left",
        thClass: "text-left",
        sortable: false
      }, {
        label: this.$t("Reference"),
        field: "Ref",
        tdClass: "text-left",
        thClass: "text-left",
        sortable: false
      }, {
        label: this.$t("Total"),
        field: "GrandTotal",
        tdClass: "text-left",
        thClass: "text-left",
        sortable: false
      }, {
        label: this.$t("Status"),
        field: "statut",
        tdClass: "text-left",
        thClass: "text-left",
        html: true,
        sortable: false
      }];
    },
    columns_sales: function columns_sales() {
      return [{
        label: this.$t("Reference"),
        field: "Ref",
        tdClass: "text-left",
        thClass: "text-left",
        sortable: false
      }, {
        label: this.$t("Status"),
        field: "statut",
        html: true,
        tdClass: "text-left",
        thClass: "text-left",
        sortable: false
      }, {
        label: this.$t("Total"),
        field: "GrandTotal",
        type: "decimal",
        tdClass: "text-left",
        thClass: "text-left",
        sortable: false
      }, {
        label: this.$t("Paid"),
        field: "paid_amount",
        type: "decimal",
        tdClass: "text-left",
        thClass: "text-left",
        sortable: false
      }, {
        label: this.$t("Due"),
        field: "due",
        type: "decimal",
        tdClass: "text-left",
        thClass: "text-left",
        sortable: false
      }, {
        label: this.$t("PaymentStatus"),
        field: "payment_status",
        html: true,
        tdClass: "text-left",
        thClass: "text-left",
        sortable: false
      }];
    },
    columns_returns: function columns_returns() {
      return [{
        label: this.$t("Reference"),
        field: "Ref",
        tdClass: "text-left",
        thClass: "text-left",
        sortable: false
      }, {
        label: this.$t("Customer"),
        field: "client_name",
        tdClass: "text-left",
        thClass: "text-left",
        sortable: false
      }, {
        label: this.$t("Status"),
        field: "statut",
        html: true,
        tdClass: "text-left",
        thClass: "text-left",
        sortable: false
      }, {
        label: this.$t("Total"),
        field: "GrandTotal",
        type: "decimal",
        tdClass: "text-left",
        thClass: "text-left",
        sortable: false
      }, {
        label: this.$t("Paid"),
        field: "paid_amount",
        type: "decimal",
        tdClass: "text-left",
        thClass: "text-left",
        sortable: false
      }, {
        label: this.$t("Due"),
        field: "due",
        type: "decimal",
        tdClass: "text-left",
        thClass: "text-left",
        sortable: false
      }, {
        label: this.$t("PaymentStatus"),
        field: "payment_status",
        html: true,
        tdClass: "text-left",
        thClass: "text-left",
        sortable: false
      }];
    },
    columns_payments: function columns_payments() {
      return [{
        label: this.$t("date"),
        field: "date",
        tdClass: "text-left",
        thClass: "text-left",
        sortable: false
      }, {
        label: this.$t("Reference"),
        field: "Ref",
        tdClass: "text-left",
        thClass: "text-left",
        sortable: false
      }, {
        label: this.$t("Sale"),
        field: "Sale_Ref",
        tdClass: "text-left",
        thClass: "text-left",
        sortable: false
      }, {
        label: this.$t("ModePaiement"),
        field: "Reglement",
        tdClass: "text-left",
        thClass: "text-left",
        sortable: false
      }, {
        label: this.$t("Amount"),
        field: "montant",
        tdClass: "text-left",
        thClass: "text-left",
        type: "decimal",
        sortable: false
      }];
    }
  }),
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
    //------------------------------ Show Reports -------------------------\\
    Get_Reports: function Get_Reports() {
      var _this = this;

      var id = this.$route.params.id;
      axios.get("report/client/".concat(id)).then(function (response) {
        _this.client = response.data.report;
      })["catch"](function (response) {});
    },
    //--------------------------- Event Page Change -------------\\
    PageChangeSales: function PageChangeSales(_ref) {
      var currentPage = _ref.currentPage;

      if (this.sales_page !== currentPage) {
        this.Get_Sales(currentPage);
      }
    },
    //--------------------------- Limit Page Sales -------------\\
    onPerPageChangeSales: function onPerPageChangeSales(_ref2) {
      var currentPerPage = _ref2.currentPerPage;

      if (this.limit_sales !== currentPerPage) {
        this.limit_sales = currentPerPage;
        this.Get_Sales(1);
      }
    },
    //--------------------------- Get sales By Customer -------------\\
    Get_Sales: function Get_Sales(page) {
      var _this2 = this;

      axios.get("/report/client_Sales?page=" + page + "&limit=" + this.limit_sales + "&id=" + this.$route.params.id).then(function (response) {
        _this2.sales = response.data.sales;
        _this2.totalRows = response.data.totalRows;
      })["catch"](function (response) {});
    },
    //--------------------------- Event Page Change -------------\\
    PageChangePayments: function PageChangePayments(_ref3) {
      var currentPage = _ref3.currentPage;

      if (this.Payment_sale_page !== currentPage) {
        this.Get_Payments(currentPage);
      }
    },
    //--------------------------- Limit Page Payments -------------\\
    onPerPageChangePayments: function onPerPageChangePayments(_ref4) {
      var currentPerPage = _ref4.currentPerPage;

      if (this.limit_payments !== currentPerPage) {
        this.limit_payments = currentPerPage;
        this.Get_Payments(1);
      }
    },
    //--------------------------- Get Payments By Customer -------------\\
    Get_Payments: function Get_Payments(page) {
      var _this3 = this;

      axios.get("report/client_payments?page=" + page + "&limit=" + this.limit_payments + "&id=" + this.$route.params.id).then(function (response) {
        _this3.payments = response.data.payments;
        _this3.totalRows = response.data.totalRows;
      })["catch"](function (response) {});
    },
    //--------------------------- Event Page Change -------------\\
    PageChangeQuotation: function PageChangeQuotation(_ref5) {
      var currentPage = _ref5.currentPage;

      if (this.quotations_page !== currentPage) {
        this.Get_Quotations(currentPage);
      }
    },
    //--------------------------- Limit Page Quotations -------------\\
    onPerPageChangeQuotation: function onPerPageChangeQuotation(_ref6) {
      var currentPerPage = _ref6.currentPerPage;

      if (this.limit_quotations !== currentPerPage) {
        this.limit_quotations = currentPerPage;
        this.Get_Quotations(1);
      }
    },
    //--------------------------- Get Quotations By Customer -------------\\
    Get_Quotations: function Get_Quotations(page) {
      var _this4 = this;

      axios.get("report/client_quotations?page=" + page + "&limit=" + this.limit_quotations + "&id=" + this.$route.params.id).then(function (response) {
        _this4.quotations = response.data.quotations;
        _this4.totalRows = response.data.totalRows;
        _this4.isLoading = false;
      })["catch"](function (response) {
        setTimeout(function () {
          _this4.isLoading = false;
        }, 500);
      });
    },
    //--------------------------- Event Page Change -------------\\
    PageChangeReturn: function PageChangeReturn(_ref7) {
      var currentPage = _ref7.currentPage;

      if (this.Return_sale_page !== currentPage) {
        this.Get_Returns(currentPage);
      }
    },
    //--------------------------- Limit Page Returns -------------\\
    onPerPageChangeReturn: function onPerPageChangeReturn(_ref8) {
      var currentPerPage = _ref8.currentPerPage;

      if (this.limit_returns !== currentPerPage) {
        this.limit_returns = currentPerPage;
        this.Get_Returns(1);
      }
    },
    //--------------------------- Get Returns By Customer -------------\\
    Get_Returns: function Get_Returns(page) {
      var _this5 = this;

      axios.get("/report/client_returns?page=" + page + "&limit=" + this.limit_returns + "&id=" + this.$route.params.id).then(function (response) {
        _this5.returns_customer = response.data.returns_customer;
        _this5.totalRows = response.data.totalRows;
      })["catch"](function (response) {});
    }
  },
  //end Methods
  //----------------------------- Created function------------------- \\
  created: function created() {
    this.Get_Reports();
    this.Get_Sales(1);
    this.Get_Payments(1);
    this.Get_Quotations(1);
    this.Get_Returns(1);
  }
});

/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/src/views/app/pages/reports/detail_Customer_Report.vue?vue&type=template&id=0a8e23b4&":
/*!***************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/src/views/app/pages/reports/detail_Customer_Report.vue?vue&type=template&id=0a8e23b4& ***!
  \***************************************************************************************************************************************************************************************************************************************/
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
        attrs: { page: _vm.$t("CustomersReport"), folder: _vm.$t("Reports") },
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
            "b-row",
            [
              _c(
                "b-col",
                { attrs: { lg: "3", md: "6", sm: "12" } },
                [
                  _c(
                    "b-card",
                    {
                      staticClass:
                        "card-icon-bg card-icon-bg-primary o-hidden mb-30 text-center",
                    },
                    [
                      _c("i", { staticClass: "i-Full-Cart" }),
                      _vm._v(" "),
                      _c("div", { staticClass: "content" }, [
                        _c("p", { staticClass: "text-muted mt-2 mb-0" }, [
                          _vm._v(_vm._s(_vm.$t("Sales"))),
                        ]),
                        _vm._v(" "),
                        _c(
                          "p",
                          {
                            staticClass:
                              "text-primary text-24 line-height-1 mb-2",
                          },
                          [
                            _vm._v(
                              _vm._s(
                                _vm.formatNumber(_vm.client.total_sales, 2)
                              )
                            ),
                          ]
                        ),
                      ]),
                    ]
                  ),
                ],
                1
              ),
              _vm._v(" "),
              _c(
                "b-col",
                { attrs: { lg: "3", md: "6", sm: "12" } },
                [
                  _c(
                    "b-card",
                    {
                      staticClass:
                        "card-icon-bg card-icon-bg-primary o-hidden mb-30 text-center",
                    },
                    [
                      _c("i", { staticClass: "i-Financial" }),
                      _vm._v(" "),
                      _c("div", { staticClass: "content" }, [
                        _c("p", { staticClass: "text-muted mt-2 mb-0" }, [
                          _vm._v(_vm._s(_vm.$t("TotalAmount"))),
                        ]),
                        _vm._v(" "),
                        _c(
                          "p",
                          {
                            staticClass:
                              "text-primary text-24 line-height-1 mb-2",
                          },
                          [
                            _vm._v(
                              _vm._s(_vm.currentUser.currency) +
                                " " +
                                _vm._s(
                                  _vm.formatNumber(_vm.client.total_amount, 2)
                                )
                            ),
                          ]
                        ),
                      ]),
                    ]
                  ),
                ],
                1
              ),
              _vm._v(" "),
              _c(
                "b-col",
                { attrs: { lg: "3", md: "6", sm: "12" } },
                [
                  _c(
                    "b-card",
                    {
                      staticClass:
                        "card-icon-bg card-icon-bg-primary o-hidden mb-30 text-center",
                    },
                    [
                      _c("i", { staticClass: "i-Money-2" }),
                      _vm._v(" "),
                      _c("div", { staticClass: "content" }, [
                        _c("p", { staticClass: "text-muted mt-2 mb-0" }, [
                          _vm._v(_vm._s(_vm.$t("TotalPaid"))),
                        ]),
                        _vm._v(" "),
                        _c(
                          "p",
                          {
                            staticClass:
                              "text-primary text-24 line-height-1 mb-2",
                          },
                          [
                            _vm._v(
                              _vm._s(_vm.currentUser.currency) +
                                " " +
                                _vm._s(
                                  _vm.formatNumber(_vm.client.total_paid, 2)
                                )
                            ),
                          ]
                        ),
                      ]),
                    ]
                  ),
                ],
                1
              ),
              _vm._v(" "),
              _c(
                "b-col",
                { attrs: { lg: "3", md: "6", sm: "12" } },
                [
                  _c(
                    "b-card",
                    {
                      staticClass:
                        "card-icon-bg card-icon-bg-primary o-hidden mb-30 text-center",
                    },
                    [
                      _c("i", { staticClass: "i-Money-Bag" }),
                      _vm._v(" "),
                      _c("div", { staticClass: "content" }, [
                        _c("p", { staticClass: "text-muted mt-2 mb-0" }, [
                          _vm._v(_vm._s(_vm.$t("Due"))),
                        ]),
                        _vm._v(" "),
                        _c(
                          "p",
                          {
                            staticClass:
                              "text-primary text-24 line-height-1 mb-2",
                          },
                          [
                            _vm._v(
                              _vm._s(_vm.currentUser.currency) +
                                " " +
                                _vm._s(_vm.formatNumber(_vm.client.due, 2))
                            ),
                          ]
                        ),
                      ]),
                    ]
                  ),
                ],
                1
              ),
            ],
            1
          )
        : _vm._e(),
      _vm._v(" "),
      !_vm.isLoading
        ? _c(
            "b-row",
            [
              _c(
                "b-col",
                { attrs: { md: "12" } },
                [
                  _c(
                    "b-card",
                    {
                      staticClass: "card mb-30",
                      attrs: { "header-bg-variant": "transparent " },
                    },
                    [
                      _c(
                        "b-tabs",
                        {
                          attrs: {
                            "active-nav-item-class": "nav nav-tabs",
                            "content-class": "mt-3",
                          },
                        },
                        [
                          _c(
                            "b-tab",
                            { attrs: { title: _vm.$t("Quotations") } },
                            [
                              _c("vue-good-table", {
                                attrs: {
                                  mode: "remote",
                                  columns: _vm.columns_quotations,
                                  totalRows: _vm.totalRows_quotations,
                                  rows: _vm.quotations,
                                  "pagination-options": {
                                    enabled: true,
                                    mode: "records",
                                    nextLabel: "next",
                                    prevLabel: "prev",
                                  },
                                  styleClass: "tableOne table-hover vgt-table",
                                },
                                on: {
                                  "on-page-change": _vm.PageChangeQuotation,
                                  "on-per-page-change":
                                    _vm.onPerPageChangeQuotation,
                                },
                                scopedSlots: _vm._u(
                                  [
                                    {
                                      key: "table-row",
                                      fn: function (props) {
                                        return [
                                          props.column.field == "statut"
                                            ? _c("div", [
                                                props.row.statut == "sent"
                                                  ? _c(
                                                      "span",
                                                      {
                                                        staticClass:
                                                          "badge badge-outline-success",
                                                      },
                                                      [
                                                        _vm._v(
                                                          _vm._s(_vm.$t("Sent"))
                                                        ),
                                                      ]
                                                    )
                                                  : _c(
                                                      "span",
                                                      {
                                                        staticClass:
                                                          "badge badge-outline-info",
                                                      },
                                                      [
                                                        _vm._v(
                                                          _vm._s(
                                                            _vm.$t("Pending")
                                                          )
                                                        ),
                                                      ]
                                                    ),
                                              ])
                                            : _vm._e(),
                                        ]
                                      },
                                    },
                                  ],
                                  null,
                                  false,
                                  55538325
                                ),
                              }),
                            ],
                            1
                          ),
                          _vm._v(" "),
                          _c(
                            "b-tab",
                            { attrs: { title: _vm.$t("Sales") } },
                            [
                              _c("vue-good-table", {
                                attrs: {
                                  mode: "remote",
                                  columns: _vm.columns_sales,
                                  totalRows: _vm.totalRows_sales,
                                  rows: _vm.sales,
                                  "pagination-options": {
                                    enabled: true,
                                    mode: "records",
                                    nextLabel: "next",
                                    prevLabel: "prev",
                                  },
                                  styleClass: "tableOne table-hover vgt-table",
                                },
                                on: {
                                  "on-page-change": _vm.PageChangeSales,
                                  "on-per-page-change":
                                    _vm.onPerPageChangeSales,
                                },
                                scopedSlots: _vm._u(
                                  [
                                    {
                                      key: "table-row",
                                      fn: function (props) {
                                        return [
                                          props.column.field == "statut"
                                            ? _c("div", [
                                                props.row.statut == "completed"
                                                  ? _c(
                                                      "span",
                                                      {
                                                        staticClass:
                                                          "badge badge-outline-success",
                                                      },
                                                      [
                                                        _vm._v(
                                                          _vm._s(
                                                            _vm.$t("complete")
                                                          )
                                                        ),
                                                      ]
                                                    )
                                                  : props.row.statut ==
                                                    "pending"
                                                  ? _c(
                                                      "span",
                                                      {
                                                        staticClass:
                                                          "badge badge-outline-info",
                                                      },
                                                      [
                                                        _vm._v(
                                                          _vm._s(
                                                            _vm.$t("Pending")
                                                          )
                                                        ),
                                                      ]
                                                    )
                                                  : _c(
                                                      "span",
                                                      {
                                                        staticClass:
                                                          "badge badge-outline-warning",
                                                      },
                                                      [
                                                        _vm._v(
                                                          _vm._s(
                                                            _vm.$t("Ordered")
                                                          )
                                                        ),
                                                      ]
                                                    ),
                                              ])
                                            : props.column.field ==
                                              "payment_status"
                                            ? _c("div", [
                                                props.row.payment_status ==
                                                "paid"
                                                  ? _c(
                                                      "span",
                                                      {
                                                        staticClass:
                                                          "badge badge-outline-success",
                                                      },
                                                      [
                                                        _vm._v(
                                                          _vm._s(_vm.$t("Paid"))
                                                        ),
                                                      ]
                                                    )
                                                  : props.row.payment_status ==
                                                    "partial"
                                                  ? _c(
                                                      "span",
                                                      {
                                                        staticClass:
                                                          "badge badge-outline-primary",
                                                      },
                                                      [
                                                        _vm._v(
                                                          _vm._s(
                                                            _vm.$t("partial")
                                                          )
                                                        ),
                                                      ]
                                                    )
                                                  : _c(
                                                      "span",
                                                      {
                                                        staticClass:
                                                          "badge badge-outline-warning",
                                                      },
                                                      [
                                                        _vm._v(
                                                          _vm._s(
                                                            _vm.$t("Unpaid")
                                                          )
                                                        ),
                                                      ]
                                                    ),
                                              ])
                                            : _vm._e(),
                                        ]
                                      },
                                    },
                                  ],
                                  null,
                                  false,
                                  2617766521
                                ),
                              }),
                            ],
                            1
                          ),
                          _vm._v(" "),
                          _c(
                            "b-tab",
                            { attrs: { title: _vm.$t("Returns") } },
                            [
                              _c("vue-good-table", {
                                attrs: {
                                  mode: "remote",
                                  columns: _vm.columns_returns,
                                  totalRows: _vm.totalRows_returns,
                                  rows: _vm.returns_customer,
                                  "pagination-options": {
                                    enabled: true,
                                    mode: "records",
                                    nextLabel: "next",
                                    prevLabel: "prev",
                                  },
                                  styleClass: "tableOne table-hover vgt-table",
                                },
                                on: {
                                  "on-page-change": _vm.PageChangeReturn,
                                  "on-per-page-change":
                                    _vm.onPerPageChangeReturn,
                                },
                                scopedSlots: _vm._u(
                                  [
                                    {
                                      key: "table-row",
                                      fn: function (props) {
                                        return [
                                          props.column.field == "statut"
                                            ? _c("div", [
                                                props.row.statut == "received"
                                                  ? _c(
                                                      "span",
                                                      {
                                                        staticClass:
                                                          "badge badge-outline-success",
                                                      },
                                                      [
                                                        _vm._v(
                                                          _vm._s(
                                                            _vm.$t("Received")
                                                          )
                                                        ),
                                                      ]
                                                    )
                                                  : _c(
                                                      "span",
                                                      {
                                                        staticClass:
                                                          "badge badge-outline-info",
                                                      },
                                                      [
                                                        _vm._v(
                                                          _vm._s(
                                                            _vm.$t("Pending")
                                                          )
                                                        ),
                                                      ]
                                                    ),
                                              ])
                                            : props.column.field ==
                                              "payment_status"
                                            ? _c("div", [
                                                props.row.payment_status ==
                                                "paid"
                                                  ? _c(
                                                      "span",
                                                      {
                                                        staticClass:
                                                          "badge badge-outline-success",
                                                      },
                                                      [
                                                        _vm._v(
                                                          _vm._s(_vm.$t("Paid"))
                                                        ),
                                                      ]
                                                    )
                                                  : props.row.payment_status ==
                                                    "partial"
                                                  ? _c(
                                                      "span",
                                                      {
                                                        staticClass:
                                                          "badge badge-outline-primary",
                                                      },
                                                      [
                                                        _vm._v(
                                                          _vm._s(
                                                            _vm.$t("partial")
                                                          )
                                                        ),
                                                      ]
                                                    )
                                                  : _c(
                                                      "span",
                                                      {
                                                        staticClass:
                                                          "badge badge-outline-warning",
                                                      },
                                                      [
                                                        _vm._v(
                                                          _vm._s(
                                                            _vm.$t("Unpaid")
                                                          )
                                                        ),
                                                      ]
                                                    ),
                                              ])
                                            : _vm._e(),
                                        ]
                                      },
                                    },
                                  ],
                                  null,
                                  false,
                                  4274434333
                                ),
                              }),
                            ],
                            1
                          ),
                          _vm._v(" "),
                          _c(
                            "b-tab",
                            { attrs: { title: _vm.$t("SalesInvoice") } },
                            [
                              _c("vue-good-table", {
                                attrs: {
                                  mode: "remote",
                                  columns: _vm.columns_payments,
                                  totalRows: _vm.totalRows_payments,
                                  rows: _vm.payments,
                                  "pagination-options": {
                                    enabled: true,
                                    mode: "records",
                                    nextLabel: "next",
                                    prevLabel: "prev",
                                  },
                                  styleClass: "tableOne table-hover vgt-table",
                                },
                                on: {
                                  "on-page-change": _vm.PageChangePayments,
                                  "on-per-page-change":
                                    _vm.onPerPageChangePayments,
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
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./resources/src/views/app/pages/reports/detail_Customer_Report.vue":
/*!**************************************************************************!*\
  !*** ./resources/src/views/app/pages/reports/detail_Customer_Report.vue ***!
  \**************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _detail_Customer_Report_vue_vue_type_template_id_0a8e23b4___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./detail_Customer_Report.vue?vue&type=template&id=0a8e23b4& */ "./resources/src/views/app/pages/reports/detail_Customer_Report.vue?vue&type=template&id=0a8e23b4&");
/* harmony import */ var _detail_Customer_Report_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./detail_Customer_Report.vue?vue&type=script&lang=js& */ "./resources/src/views/app/pages/reports/detail_Customer_Report.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _detail_Customer_Report_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _detail_Customer_Report_vue_vue_type_template_id_0a8e23b4___WEBPACK_IMPORTED_MODULE_0__["render"],
  _detail_Customer_Report_vue_vue_type_template_id_0a8e23b4___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/src/views/app/pages/reports/detail_Customer_Report.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/src/views/app/pages/reports/detail_Customer_Report.vue?vue&type=script&lang=js&":
/*!***************************************************************************************************!*\
  !*** ./resources/src/views/app/pages/reports/detail_Customer_Report.vue?vue&type=script&lang=js& ***!
  \***************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_detail_Customer_Report_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../node_modules/babel-loader/lib??ref--4-0!../../../../../../node_modules/vue-loader/lib??vue-loader-options!./detail_Customer_Report.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/src/views/app/pages/reports/detail_Customer_Report.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_detail_Customer_Report_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/src/views/app/pages/reports/detail_Customer_Report.vue?vue&type=template&id=0a8e23b4&":
/*!*********************************************************************************************************!*\
  !*** ./resources/src/views/app/pages/reports/detail_Customer_Report.vue?vue&type=template&id=0a8e23b4& ***!
  \*********************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_detail_Customer_Report_vue_vue_type_template_id_0a8e23b4___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../../node_modules/vue-loader/lib??vue-loader-options!./detail_Customer_Report.vue?vue&type=template&id=0a8e23b4& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/src/views/app/pages/reports/detail_Customer_Report.vue?vue&type=template&id=0a8e23b4&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_detail_Customer_Report_vue_vue_type_template_id_0a8e23b4___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_detail_Customer_Report_vue_vue_type_template_id_0a8e23b4___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ })

}]);