(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["warehouse_report"],{

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/src/views/app/pages/reports/warehouse_report.vue?vue&type=script&lang=js&":
/*!*****************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/src/views/app/pages/reports/warehouse_report.vue?vue&type=script&lang=js& ***!
  \*****************************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var vuex__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vuex */ "./node_modules/vuex/dist/vuex.esm.js");
/* harmony import */ var vue_echarts_components_ECharts_vue__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! vue-echarts/components/ECharts.vue */ "./node_modules/vue-echarts/components/ECharts.vue");
/* harmony import */ var echarts_lib_chart_pie__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! echarts/lib/chart/pie */ "./node_modules/echarts/lib/chart/pie.js");
/* harmony import */ var echarts_lib_chart_pie__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(echarts_lib_chart_pie__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var echarts_lib_chart_bar__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! echarts/lib/chart/bar */ "./node_modules/echarts/lib/chart/bar.js");
/* harmony import */ var echarts_lib_chart_bar__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(echarts_lib_chart_bar__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var echarts_lib_chart_line__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! echarts/lib/chart/line */ "./node_modules/echarts/lib/chart/line.js");
/* harmony import */ var echarts_lib_chart_line__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(echarts_lib_chart_line__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var echarts_lib_component_tooltip__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! echarts/lib/component/tooltip */ "./node_modules/echarts/lib/component/tooltip.js");
/* harmony import */ var echarts_lib_component_tooltip__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(echarts_lib_component_tooltip__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var echarts_lib_component_legend__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! echarts/lib/component/legend */ "./node_modules/echarts/lib/component/legend.js");
/* harmony import */ var echarts_lib_component_legend__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(echarts_lib_component_legend__WEBPACK_IMPORTED_MODULE_6__);
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

 // import ECharts modules manually to reduce bundle size






/* harmony default export */ __webpack_exports__["default"] = ({
  components: {
    "v-chart": vue_echarts_components_ECharts_vue__WEBPACK_IMPORTED_MODULE_1__["default"]
  },
  metaInfo: {
    // if no subcomponents specify a metaInfo.title, this title will be used
    title: "Warehouse Report"
  },
  data: function data() {
    return {
      Stock_Count: {},
      Stock_value: {},
      totalRows_quotations: "",
      totalRows_sales: "",
      totalRows_Return_sale: "",
      totalRows_Return_purchase: "",
      totalRows_Expense: "",
      limit_quotations: "10",
      limit_returns_Sale: "10",
      limit_returns_Purchase: "10",
      limit_sales: "10",
      limit_expenses: "10",
      search_quotation: "",
      search_sale: "",
      search_expense: "",
      search_return_Sale: "",
      search_return_Purchase: "",
      sales_page: 1,
      quotations_page: 1,
      Return_sale_page: 1,
      Return_purchase_page: 1,
      Expense_page: 1,
      isLoading: true,
      Filter_warehouse: "",
      sales: [],
      quotations: [],
      warehouses: [],
      expenses: [],
      returns_sale: [],
      returns_purchase: [],
      total: {
        sales: "",
        purchases: "",
        ReturnPurchase: "",
        ReturnSale: ""
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
        label: this.$t("Customer"),
        field: "client_name",
        tdClass: "text-left",
        thClass: "text-left"
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
        label: this.$t("Customer"),
        field: "client_name",
        tdClass: "text-left",
        thClass: "text-left"
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
    columns_returns_sale: function columns_returns_sale() {
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
    columns_returns_purchase: function columns_returns_purchase() {
      return [{
        label: this.$t("Reference"),
        field: "Ref",
        tdClass: "text-left",
        thClass: "text-left",
        sortable: false
      }, {
        label: this.$t("Supplier"),
        field: "provider_name",
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
    columns_Expense: function columns_Expense() {
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
        label: this.$t("Details"),
        field: "details",
        tdClass: "text-left",
        thClass: "text-left",
        sortable: false
      }, {
        label: this.$t("Amount"),
        field: "amount",
        type: "decimal",
        tdClass: "text-left",
        thClass: "text-left",
        sortable: false
      }, {
        label: this.$t("Categorie"),
        field: "category_name",
        tdClass: "text-left",
        thClass: "text-left",
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
    //---------------------- Event Select Warehouse ------------------------------\\
    Selected_Warehouse: function Selected_Warehouse(value) {
      if (value === null) {
        this.Filter_warehouse = "";
      }

      this.Get_Reports();
      this.Get_Sales(1);
      this.Get_Quotations(1);
      this.Get_Returns_Sale(1);
      this.Get_Returns_Purchase(1);
      this.Get_Expenses(1);
    },
    //------------------------------ Show Reports -------------------------\\
    Get_Reports: function Get_Reports() {
      var _this = this;

      axios.get("report/Warehouse_Report?warehouse_id=" + this.Filter_warehouse).then(function (response) {
        _this.total = response.data.data;
        _this.warehouses = response.data.warehouses;
      })["catch"](function (response) {});
    },
    //--------------------------- Sales Event Page Change  -------------\\
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
    onSearch_Sales: function onSearch_Sales(value) {
      this.search_sale = value.searchTerm;
      this.Get_Sales(1);
    },
    //--------------------------- Get sales By warehouse -------------\\
    Get_Sales: function Get_Sales(page) {
      var _this2 = this;

      axios.get("report/Sales_Warehouse?page=" + page + "&limit=" + this.limit_sales + "&warehouse_id=" + this.Filter_warehouse + "&search=" + this.search_sale).then(function (response) {
        _this2.sales = response.data.sales;
        _this2.totalRows_sales = response.data.totalRows;
        setTimeout(function () {
          _this2.isLoading = false;
        }, 500);
      })["catch"](function (response) {
        setTimeout(function () {
          _this2.isLoading = false;
        }, 500);
      });
    },
    //--------------------------- Event Page Change -------------\\
    PageChangeQuotation: function PageChangeQuotation(_ref3) {
      var currentPage = _ref3.currentPage;

      if (this.quotations_page !== currentPage) {
        this.Get_Quotations(currentPage);
      }
    },
    //--------------------------- Limit Page Quotations -------------\\
    onPerPageChangeQuotation: function onPerPageChangeQuotation(_ref4) {
      var currentPerPage = _ref4.currentPerPage;

      if (this.limit_quotations !== currentPerPage) {
        this.limit_quotations = currentPerPage;
        this.Get_Quotations(1);
      }
    },
    onSearch_Quotations: function onSearch_Quotations(value) {
      this.search_quotation = value.searchTerm;
      this.Get_Quotations(1);
    },
    //--------------------------- Get Quotations By Warehouse -------------\\
    Get_Quotations: function Get_Quotations(page) {
      var _this3 = this;

      axios.get("report/Quotations_Warehouse?page=" + page + "&limit=" + this.limit_quotations + "&warehouse_id=" + this.Filter_warehouse + "&search=" + this.search_quotation).then(function (response) {
        _this3.quotations = response.data.quotations;
        _this3.totalRows_quotations = response.data.totalRows;
      })["catch"](function (response) {});
    },
    //--------------------------- Event Page Change -------------\\
    PageChangeReturn_Customer: function PageChangeReturn_Customer(_ref5) {
      var currentPage = _ref5.currentPage;

      if (this.Return_sale_page !== currentPage) {
        this.Get_Returns_Sale(currentPage);
      }
    },
    //--------------------------- Limit Page Returns Sale -------------\\
    onPerPageChangeReturn_Sale: function onPerPageChangeReturn_Sale(_ref6) {
      var currentPerPage = _ref6.currentPerPage;

      if (this.limit_returns_Sale !== currentPerPage) {
        this.limit_returns_Sale = currentPerPage;
        this.Get_Returns_Sale(1);
      }
    },
    onSearch_Return_Sale: function onSearch_Return_Sale(value) {
      this.search_return_Sale = value.searchTerm;
      this.Get_Returns_Sale(1);
    },
    //--------------------------- Get Returns Sale By warehouse -------------\\
    Get_Returns_Sale: function Get_Returns_Sale(page) {
      var _this4 = this;

      axios.get("report/Returns_Sale_Warehouse?page=" + page + "&limit=" + this.limit_returns_Sale + "&warehouse_id=" + this.Filter_warehouse + "&search=" + this.search_return_Sale).then(function (response) {
        _this4.returns_sale = response.data.returns_sale;
        _this4.totalRows_Return_sale = response.data.totalRows;
      })["catch"](function (response) {});
    },
    //--------------------------- Event Page Change -------------\\
    PageChangeReturn_Purchase: function PageChangeReturn_Purchase(_ref7) {
      var currentPage = _ref7.currentPage;

      if (this.Return_purchase_page !== currentPage) {
        this.Get_Returns_Purchase(currentPage);
      }
    },
    //--------------------------- Limit Page Returns Purchase -------------\\
    onPerPageChangeReturn_Purchase: function onPerPageChangeReturn_Purchase(_ref8) {
      var currentPerPage = _ref8.currentPerPage;

      if (this.limit_returns_Purchase !== currentPerPage) {
        this.limit_returns_Purchase = currentPerPage;
        this.Get_Returns_Purchase(1);
      }
    },
    onSearch_Return_Purchase: function onSearch_Return_Purchase(value) {
      this.search_return_Purchase = value.searchTerm;
      this.Get_Returns_Purchase(1);
    },
    //--------------------------- Get Returns Purchase By warehouse -------------\\
    Get_Returns_Purchase: function Get_Returns_Purchase(page) {
      var _this5 = this;

      axios.get("report/Returns_Purchase_Warehouse?page=" + page + "&limit=" + this.limit_returns_Purchase + "&warehouse_id=" + this.Filter_warehouse + "&search=" + this.search_return_Purchase).then(function (response) {
        _this5.returns_purchase = response.data.returns_purchase;
        _this5.totalRows_Return_purchase = response.data.totalRows;
      })["catch"](function (response) {});
    },
    //--------------------------- Expense Event Page Change -------------\\
    PageChange_Expense: function PageChange_Expense(_ref9) {
      var currentPage = _ref9.currentPage;

      if (this.Expense_page !== currentPage) {
        this.Get_Expenses(currentPage);
      }
    },
    //--------------------------- Limit Page Expense -------------\\
    onPerPageChange_Expense: function onPerPageChange_Expense(_ref10) {
      var currentPerPage = _ref10.currentPerPage;

      if (this.limit_expenses !== currentPerPage) {
        this.limit_expenses = currentPerPage;
        this.Get_Expenses(1);
      }
    },
    onSearch_Expense: function onSearch_Expense(value) {
      this.search_expense = value.searchTerm;
      this.Get_Expenses(1);
    },
    //--------------------------- Get Expenses By warehouse -------------\\
    Get_Expenses: function Get_Expenses(page) {
      var _this6 = this;

      axios.get("report/Expenses_Warehouse?page=" + page + "&limit=" + this.limit_expenses + "&warehouse_id=" + this.Filter_warehouse + "&search=" + this.search_expense).then(function (response) {
        _this6.expenses = response.data.expenses;
        _this6.totalRows_Expense = response.data.totalRows;
      })["catch"](function (response) {});
    },
    //---------------------------------- Report Warhouse Count Stock
    report_with_echart: function report_with_echart() {
      var _this7 = this;

      axios.get("report/Warhouse_Count_Stock").then(function (response) {
        var responseData = response.data;
        var dark_heading = "#c2c6dc";
        _this7.Stock_Count = {
          color: ["#6D28D9", "#A78BFA", "#7C3AED", "#F2BE22", "#C4B5FD"],
          tooltip: {
            show: true,
            backgroundColor: "rgba(0, 0, 0, .8)",
            formatter: function formatter(params) {
              return "(".concat(params.value, " Items)<br />\n                        (").concat(params.data.value1, " Quantity)");
            }
          },
          legend: {
            orient: "vertical",
            left: "left",
            data: responseData.warehouses
          },
          series: [{
            name: "Warehouse Stock",
            type: "pie",
            radius: "50%",
            center: "50%",
            data: responseData.stock_count,
            itemStyle: {
              emphasis: {
                shadowBlur: 10,
                shadowOffsetX: 0,
                shadowColor: "rgba(0, 0, 0, 0.5)"
              }
            }
          }]
        };
        _this7.Stock_value = {
          color: ["#6D28D9", "#A78BFA", "#7C3AED", "#F2BE22", "#C4B5FD"],
          tooltip: {
            show: true,
            backgroundColor: "rgba(0, 0, 0, .8)",
            formatter: function formatter(params) {
              return "(Stock Value by Price : ".concat(params.value, ")<br />\n                        (Stock Value by Cost : ").concat(params.data.value1, ")"); // <br />(Profit Estimate : ${params.data.value2})`;
            }
          },
          legend: {
            orient: "vertical",
            left: "left",
            data: responseData.warehouses
          },
          series: [{
            name: "Warehouse Stock",
            type: "pie",
            radius: "50%",
            center: "50%",
            data: responseData.stock_value,
            itemStyle: {
              emphasis: {
                shadowBlur: 10,
                shadowOffsetX: 0,
                shadowColor: "rgba(0, 0, 0, 0.5)"
              }
            }
          }]
        };
      })["catch"](function (response) {});
    }
  },
  //end Methods
  //----------------------------- Created function------------------- \\
  created: function created() {
    this.report_with_echart();
    this.Get_Reports();
    this.Get_Sales(1);
    this.Get_Quotations(1);
    this.Get_Returns_Sale(1);
    this.Get_Returns_Purchase(1);
    this.Get_Expenses(1);
  }
});

/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/src/views/app/pages/reports/warehouse_report.vue?vue&type=template&id=bc323746&":
/*!*********************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/src/views/app/pages/reports/warehouse_report.vue?vue&type=template&id=bc323746& ***!
  \*********************************************************************************************************************************************************************************************************************************/
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
        attrs: { page: _vm.$t("Warehouse_report"), folder: _vm.$t("Reports") },
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
            { staticClass: "justify-content-center mb-5" },
            [
              _c(
                "b-col",
                { attrs: { lg: "3", md: "6", sm: "12" } },
                [
                  _c(
                    "b-form-group",
                    { attrs: { label: _vm.$t("warehouse") } },
                    [
                      _c("v-select", {
                        attrs: {
                          reduce: function (label) {
                            return label.value
                          },
                          placeholder: _vm.$t("All_Warehouses"),
                          options: _vm.warehouses.map(function (warehouses) {
                            return {
                              label: warehouses.name,
                              value: warehouses.id,
                            }
                          }),
                        },
                        on: { input: _vm.Selected_Warehouse },
                        model: {
                          value: _vm.Filter_warehouse,
                          callback: function ($$v) {
                            _vm.Filter_warehouse = $$v
                          },
                          expression: "Filter_warehouse",
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
          )
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
                          [_vm._v(_vm._s(_vm.total.sales))]
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
                      _c("i", { staticClass: "i-Checkout-Basket" }),
                      _vm._v(" "),
                      _c("div", { staticClass: "content" }, [
                        _c("p", { staticClass: "text-muted mt-2 mb-0" }, [
                          _vm._v(_vm._s(_vm.$t("Purchases"))),
                        ]),
                        _vm._v(" "),
                        _c(
                          "p",
                          {
                            staticClass:
                              "text-primary text-24 line-height-1 mb-2",
                          },
                          [_vm._v(_vm._s(_vm.total.purchases))]
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
                      _c("i", { staticClass: "i-Turn-Left" }),
                      _vm._v(" "),
                      _c("div", { staticClass: "content" }, [
                        _c("p", { staticClass: "text-muted mt-2 mb-0" }, [
                          _vm._v(_vm._s(_vm.$t("PurchasesReturn"))),
                        ]),
                        _vm._v(" "),
                        _c(
                          "p",
                          {
                            staticClass:
                              "text-primary text-24 line-height-1 mb-2",
                          },
                          [_vm._v(_vm._s(_vm.total.ReturnPurchase))]
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
                      _c("i", { staticClass: "i-Turn-Right" }),
                      _vm._v(" "),
                      _c("div", { staticClass: "content" }, [
                        _c("p", { staticClass: "text-muted mt-2 mb-0" }, [
                          _vm._v(_vm._s(_vm.$t("SalesReturn"))),
                        ]),
                        _vm._v(" "),
                        _c(
                          "p",
                          {
                            staticClass:
                              "text-primary text-24 line-height-1 mb-2",
                          },
                          [_vm._v(_vm._s(_vm.total.ReturnSale))]
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
                      attrs: {
                        "no-body": "",
                        "header-bg-variant": "transparent ",
                      },
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
                                  styleClass: "order-table vgt-table mt-2",
                                },
                                on: {
                                  "on-page-change": _vm.PageChangeQuotation,
                                  "on-per-page-change":
                                    _vm.onPerPageChangeQuotation,
                                  "on-search": _vm.onSearch_Quotations,
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
                                  styleClass: "order-table vgt-table mt-2",
                                },
                                on: {
                                  "on-page-change": _vm.PageChangeSales,
                                  "on-per-page-change":
                                    _vm.onPerPageChangeSales,
                                  "on-search": _vm.onSearch_Sales,
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
                            { attrs: { title: _vm.$t("SalesReturn") } },
                            [
                              _c("vue-good-table", {
                                attrs: {
                                  mode: "remote",
                                  columns: _vm.columns_returns_sale,
                                  totalRows: _vm.totalRows_Return_sale,
                                  rows: _vm.returns_sale,
                                  "pagination-options": {
                                    enabled: true,
                                    mode: "records",
                                    nextLabel: "next",
                                    prevLabel: "prev",
                                  },
                                  "search-options": {
                                    placeholder: _vm.$t("Search_this_table"),
                                    enabled: true,
                                  },
                                  styleClass: "order-table vgt-table mt-2",
                                },
                                on: {
                                  "on-page-change":
                                    _vm.PageChangeReturn_Customer,
                                  "on-per-page-change":
                                    _vm.onPerPageChangeReturn_Sale,
                                  "on-search": _vm.onSearch_Return_Sale,
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
                            { attrs: { title: _vm.$t("PurchasesReturn") } },
                            [
                              _c("vue-good-table", {
                                attrs: {
                                  mode: "remote",
                                  columns: _vm.columns_returns_purchase,
                                  totalRows: _vm.totalRows_Return_purchase,
                                  rows: _vm.returns_purchase,
                                  "pagination-options": {
                                    enabled: true,
                                    mode: "records",
                                    nextLabel: "next",
                                    prevLabel: "prev",
                                  },
                                  "search-options": {
                                    placeholder: _vm.$t("Search_this_table"),
                                    enabled: true,
                                  },
                                  styleClass: "order-table vgt-table mt-2",
                                },
                                on: {
                                  "on-page-change":
                                    _vm.PageChangeReturn_Purchase,
                                  "on-per-page-change":
                                    _vm.onPerPageChangeReturn_Purchase,
                                  "on-search": _vm.onSearch_Return_Purchase,
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
                                  2902550969
                                ),
                              }),
                            ],
                            1
                          ),
                          _vm._v(" "),
                          _c(
                            "b-tab",
                            { attrs: { title: _vm.$t("Expenses") } },
                            [
                              _c("vue-good-table", {
                                attrs: {
                                  mode: "remote",
                                  columns: _vm.columns_Expense,
                                  totalRows: _vm.totalRows_Expense,
                                  rows: _vm.expenses,
                                  "pagination-options": {
                                    enabled: true,
                                    mode: "records",
                                    nextLabel: "next",
                                    prevLabel: "prev",
                                  },
                                  "search-options": {
                                    placeholder: _vm.$t("Search_this_table"),
                                    enabled: true,
                                  },
                                  styleClass: "order-table vgt-table mt-2",
                                },
                                on: {
                                  "on-page-change": _vm.PageChange_Expense,
                                  "on-per-page-change":
                                    _vm.onPerPageChange_Expense,
                                  "on-search": _vm.onSearch_Expense,
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
      _vm._v(" "),
      !_vm.isLoading
        ? _c(
            "b-row",
            { staticClass: "mt-3" },
            [
              _c(
                "b-col",
                { attrs: { lg: "6", md: "12", sm: "12" } },
                [
                  _c("b-card", { staticClass: "mb-30" }, [
                    _c("h4", { staticClass: "card-title m-0" }, [
                      _vm._v(_vm._s(_vm.$t("Total_Items_Quantity"))),
                    ]),
                    _vm._v(" "),
                    _c(
                      "div",
                      { staticClass: "chart-wrapper mt-3" },
                      [
                        _c("v-chart", {
                          attrs: { options: _vm.Stock_Count, autoresize: true },
                        }),
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
                { attrs: { col: "", lg: "6", md: "12", sm: "12" } },
                [
                  _c("b-card", { staticClass: "mb-30" }, [
                    _c("h4", { staticClass: "card-title m-0" }, [
                      _vm._v(_vm._s(_vm.$t("Value_by_Cost_and_Price"))),
                    ]),
                    _vm._v(" "),
                    _c(
                      "div",
                      { staticClass: "chart-wrapper mt-3" },
                      [
                        _c("v-chart", {
                          attrs: { options: _vm.Stock_value, autoresize: true },
                        }),
                      ],
                      1
                    ),
                  ]),
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

/***/ "./resources/src/views/app/pages/reports/warehouse_report.vue":
/*!********************************************************************!*\
  !*** ./resources/src/views/app/pages/reports/warehouse_report.vue ***!
  \********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _warehouse_report_vue_vue_type_template_id_bc323746___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./warehouse_report.vue?vue&type=template&id=bc323746& */ "./resources/src/views/app/pages/reports/warehouse_report.vue?vue&type=template&id=bc323746&");
/* harmony import */ var _warehouse_report_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./warehouse_report.vue?vue&type=script&lang=js& */ "./resources/src/views/app/pages/reports/warehouse_report.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _warehouse_report_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _warehouse_report_vue_vue_type_template_id_bc323746___WEBPACK_IMPORTED_MODULE_0__["render"],
  _warehouse_report_vue_vue_type_template_id_bc323746___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/src/views/app/pages/reports/warehouse_report.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/src/views/app/pages/reports/warehouse_report.vue?vue&type=script&lang=js&":
/*!*********************************************************************************************!*\
  !*** ./resources/src/views/app/pages/reports/warehouse_report.vue?vue&type=script&lang=js& ***!
  \*********************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_warehouse_report_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../node_modules/babel-loader/lib??ref--4-0!../../../../../../node_modules/vue-loader/lib??vue-loader-options!./warehouse_report.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/src/views/app/pages/reports/warehouse_report.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_warehouse_report_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/src/views/app/pages/reports/warehouse_report.vue?vue&type=template&id=bc323746&":
/*!***************************************************************************************************!*\
  !*** ./resources/src/views/app/pages/reports/warehouse_report.vue?vue&type=template&id=bc323746& ***!
  \***************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_warehouse_report_vue_vue_type_template_id_bc323746___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../../node_modules/vue-loader/lib??vue-loader-options!./warehouse_report.vue?vue&type=template&id=bc323746& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/src/views/app/pages/reports/warehouse_report.vue?vue&type=template&id=bc323746&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_warehouse_report_vue_vue_type_template_id_bc323746___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_warehouse_report_vue_vue_type_template_id_bc323746___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ })

}]);