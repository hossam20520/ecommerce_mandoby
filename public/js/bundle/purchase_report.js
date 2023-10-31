(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["purchase_report"],{

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/src/views/app/pages/reports/purchase_report.vue?vue&type=script&lang=js&":
/*!****************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/src/views/app/pages/reports/purchase_report.vue?vue&type=script&lang=js& ***!
  \****************************************************************************************************************************************************************************************/
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
//
//
//
//
//
//
//
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
    title: "Report Purchases"
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
      Filter_Supplier: "",
      Filter_status: "",
      Filter_Payment: "",
      Filter_Ref: "",
      Filter_date: "",
      suppliers: [],
      purchases: []
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
        label: this.$t("Supplier"),
        field: "provider_name",
        tdClass: "text-left",
        thClass: "text-left"
      }, {
        label: this.$t("Status"),
        field: "statut",
        html: true,
        tdClass: "text-left",
        thClass: "text-left"
      }, {
        label: this.$t("Total"),
        field: "GrandTotal",
        type: "decimal",
        tdClass: "text-left",
        thClass: "text-left"
      }, {
        label: this.$t("Paid"),
        field: "paid_amount",
        type: "decimal",
        tdClass: "text-left",
        thClass: "text-left"
      }, {
        label: this.$t("Due"),
        field: "due",
        type: "decimal",
        tdClass: "text-left",
        thClass: "text-left"
      }, {
        label: this.$t("PaymentStatus"),
        field: "payment_status",
        html: true,
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
        this.Get_Purchases(currentPage);
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
        this.Get_Purchases(1);
      }
    },
    //---- Event on Sort Change
    onSortChange: function onSortChange(params) {
      var field = "";

      if (params[0].field == "provider_name") {
        field = "provider_id";
      } else {
        field = params[0].field;
      }

      this.updateParams({
        sort: {
          type: params[0].type,
          field: field
        }
      });
      this.Get_Purchases(this.serverParams.page);
    },
    //---- Event on Search
    onSearch: function onSearch(value) {
      this.search = value.searchTerm;
      this.Get_Purchases(this.serverParams.page);
    },
    //------ Reset Filter
    Reset_Filter: function Reset_Filter() {
      this.search = "";
      this.Filter_Supplier = "";
      this.Filter_status = "";
      this.Filter_Payment = "";
      this.Filter_Ref = "";
      this.Filter_date = "";
      this.Get_Purchases(this.serverParams.page);
    },
    //---------------------- Purchases PDF -------------------------------\\
    Purchase_PDF: function Purchase_PDF() {
      var self = this;
      var pdf = new jspdf__WEBPACK_IMPORTED_MODULE_1__["default"]("p", "pt");
      var columns = [{
        title: "Ref",
        dataKey: "Ref"
      }, {
        title: "Provider",
        dataKey: "provider_name"
      }, {
        title: "Status",
        dataKey: "statut"
      }, {
        title: "Total",
        dataKey: "GrandTotal"
      }, {
        title: "Paid",
        dataKey: "paid_amount"
      }, {
        title: "Due",
        dataKey: "due"
      }, {
        title: "Status Payment",
        dataKey: "payment_status"
      }];
      pdf.autoTable(columns, self.purchases);
      pdf.text("Purchase report", 40, 25);
      pdf.save("Purchase_report.pdf");
    },
    //----------------------- Purchases Excel -------------------------------\\
    Purchase_Excel: function Purchase_Excel() {
      // Start the progress bar.
      nprogress__WEBPACK_IMPORTED_MODULE_0___default.a.start();
      nprogress__WEBPACK_IMPORTED_MODULE_0___default.a.set(0.1);
      axios.get("purchases/export/Excel", {
        responseType: "blob",
        // important
        headers: {
          "Content-Type": "application/json"
        }
      }).then(function (response) {
        var url = window.URL.createObjectURL(new Blob([response.data]));
        var link = document.createElement("a");
        link.href = url;
        link.setAttribute("download", "List_Purchases.xlsx");
        document.body.appendChild(link);
        link.click(); // Complete the animation of the  progress bar.

        nprogress__WEBPACK_IMPORTED_MODULE_0___default.a.done();
      })["catch"](function () {
        // Complete the animation of the  progress bar.
        nprogress__WEBPACK_IMPORTED_MODULE_0___default.a.done();
      });
    },
    //---------------------------------------- Set To Strings-------------------------\\
    setToStrings: function setToStrings() {
      // Simply replaces null values with strings=''
      if (this.Filter_Supplier === null) {
        this.Filter_Supplier = "";
      }
    },
    //------------------------------------------------ Get Report Purchases -------------------------------\\
    Get_Purchases: function Get_Purchases(page) {
      var _this = this;

      // Start the progress bar.
      nprogress__WEBPACK_IMPORTED_MODULE_0___default.a.start();
      nprogress__WEBPACK_IMPORTED_MODULE_0___default.a.set(0.1);
      this.setToStrings();
      axios.get("/report/Purchases?page=" + page + "&Ref=" + this.Filter_Ref + "&date=" + this.Filter_date + "&provider_id=" + this.Filter_Supplier + "&statut=" + this.Filter_status + "&payment_statut=" + this.Filter_Payment + "&SortField=" + this.serverParams.sort.field + "&SortType=" + this.serverParams.sort.type + "&search=" + this.search + "&limit=" + this.limit).then(function (response) {
        _this.purchases = response.data.purchases;
        _this.suppliers = response.data.suppliers;
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
    },
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
    }
  },
  //-----------------------------Created function-------------------
  created: function created() {
    this.Get_Purchases(1);
  }
});

/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/src/views/app/pages/reports/purchase_report.vue?vue&type=template&id=c527ccd6&":
/*!********************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/src/views/app/pages/reports/purchase_report.vue?vue&type=template&id=c527ccd6& ***!
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
        attrs: { page: _vm.$t("PurchasesReport"), folder: _vm.$t("Reports") },
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
                    rows: _vm.purchases,
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
                    styleClass: "order-table vgt-table",
                  },
                  on: {
                    "on-page-change": _vm.onPageChange,
                    "on-per-page-change": _vm.onPerPageChange,
                    "on-sort-change": _vm.onSortChange,
                    "on-search": _vm.onSearch,
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
                                        [_vm._v(_vm._s(_vm.$t("Received")))]
                                      )
                                    : props.row.statut == "pending"
                                    ? _c(
                                        "span",
                                        {
                                          staticClass:
                                            "badge badge-outline-info",
                                        },
                                        [_vm._v(_vm._s(_vm.$t("Pending")))]
                                      )
                                    : _c(
                                        "span",
                                        {
                                          staticClass:
                                            "badge badge-outline-warning",
                                        },
                                        [_vm._v(_vm._s(_vm.$t("Ordered")))]
                                      ),
                                ])
                              : props.column.field == "payment_status"
                              ? _c("div", [
                                  props.row.payment_status == "paid"
                                    ? _c(
                                        "span",
                                        {
                                          staticClass:
                                            "badge badge-outline-success",
                                        },
                                        [_vm._v(_vm._s(_vm.$t("Paid")))]
                                      )
                                    : props.row.payment_status == "partial"
                                    ? _c(
                                        "span",
                                        {
                                          staticClass:
                                            "badge badge-outline-primary",
                                        },
                                        [_vm._v(_vm._s(_vm.$t("partial")))]
                                      )
                                    : _c(
                                        "span",
                                        {
                                          staticClass:
                                            "badge badge-outline-warning",
                                        },
                                        [_vm._v(_vm._s(_vm.$t("Unpaid")))]
                                      ),
                                ])
                              : _vm._e(),
                          ]
                        },
                      },
                    ],
                    null,
                    false,
                    3596438109
                  ),
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
                          directives: [
                            {
                              name: "b-toggle",
                              rawName: "v-b-toggle.sidebar-right",
                              modifiers: { "sidebar-right": true },
                            },
                          ],
                          attrs: {
                            variant: "outline-info ripple m-1",
                            size: "sm",
                          },
                        },
                        [
                          _c("i", { staticClass: "i-Filter-2" }),
                          _vm._v(
                            "\n          " +
                              _vm._s(_vm.$t("Filter")) +
                              "\n        "
                          ),
                        ]
                      ),
                      _vm._v(" "),
                      _c(
                        "b-button",
                        {
                          attrs: {
                            size: "sm",
                            variant: "outline-success ripple m-1",
                          },
                          on: {
                            click: function ($event) {
                              return _vm.Purchase_PDF()
                            },
                          },
                        },
                        [
                          _c("i", { staticClass: "i-File-Copy" }),
                          _vm._v(" PDF\n        "),
                        ]
                      ),
                      _vm._v(" "),
                      _c(
                        "b-button",
                        {
                          attrs: {
                            size: "sm",
                            variant: "outline-danger ripple m-1",
                          },
                          on: {
                            click: function ($event) {
                              return _vm.Purchase_Excel()
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
                        { attrs: { label: _vm.$t("Supplier") } },
                        [
                          _c("v-select", {
                            attrs: {
                              reduce: function (label) {
                                return label.value
                              },
                              placeholder: _vm.$t("Choose_Supplier"),
                              options: _vm.suppliers.map(function (suppliers) {
                                return {
                                  label: suppliers.name,
                                  value: suppliers.id,
                                }
                              }),
                            },
                            model: {
                              value: _vm.Filter_Supplier,
                              callback: function ($$v) {
                                _vm.Filter_Supplier = $$v
                              },
                              expression: "Filter_Supplier",
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
                        { attrs: { label: _vm.$t("Status") } },
                        [
                          _c(
                            "select",
                            {
                              directives: [
                                {
                                  name: "model",
                                  rawName: "v-model",
                                  value: _vm.Filter_status,
                                  expression: "Filter_status",
                                },
                              ],
                              staticClass: "form-control",
                              attrs: { type: "text" },
                              on: {
                                change: function ($event) {
                                  var $$selectedVal = Array.prototype.filter
                                    .call($event.target.options, function (o) {
                                      return o.selected
                                    })
                                    .map(function (o) {
                                      var val =
                                        "_value" in o ? o._value : o.value
                                      return val
                                    })
                                  _vm.Filter_status = $event.target.multiple
                                    ? $$selectedVal
                                    : $$selectedVal[0]
                                },
                              },
                            },
                            [
                              _c(
                                "option",
                                { attrs: { value: "", selected: "" } },
                                [_vm._v("All")]
                              ),
                              _vm._v(" "),
                              _c("option", { attrs: { value: "received" } }, [
                                _vm._v("Received"),
                              ]),
                              _vm._v(" "),
                              _c("option", { attrs: { value: "pending" } }, [
                                _vm._v("Pending"),
                              ]),
                              _vm._v(" "),
                              _c("option", { attrs: { value: "ordered" } }, [
                                _vm._v("Ordered"),
                              ]),
                            ]
                          ),
                        ]
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
                        { attrs: { label: _vm.$t("PaymentStatus") } },
                        [
                          _c(
                            "select",
                            {
                              directives: [
                                {
                                  name: "model",
                                  rawName: "v-model",
                                  value: _vm.Filter_Payment,
                                  expression: "Filter_Payment",
                                },
                              ],
                              staticClass: "form-control",
                              attrs: { type: "text" },
                              on: {
                                change: function ($event) {
                                  var $$selectedVal = Array.prototype.filter
                                    .call($event.target.options, function (o) {
                                      return o.selected
                                    })
                                    .map(function (o) {
                                      var val =
                                        "_value" in o ? o._value : o.value
                                      return val
                                    })
                                  _vm.Filter_Payment = $event.target.multiple
                                    ? $$selectedVal
                                    : $$selectedVal[0]
                                },
                              },
                            },
                            [
                              _c(
                                "option",
                                { attrs: { value: "", selected: "" } },
                                [_vm._v("All")]
                              ),
                              _vm._v(" "),
                              _c("option", { attrs: { value: "paid" } }, [
                                _vm._v("Paid"),
                              ]),
                              _vm._v(" "),
                              _c("option", { attrs: { value: "partial" } }, [
                                _vm._v("partial"),
                              ]),
                              _vm._v(" "),
                              _c("option", { attrs: { value: "unpaid" } }, [
                                _vm._v("UnPaid"),
                              ]),
                            ]
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
                            variant: "primary ripple m-1",
                            size: "sm",
                            block: "",
                          },
                          on: {
                            click: function ($event) {
                              return _vm.Get_Purchases(_vm.serverParams.page)
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

/***/ "./resources/src/views/app/pages/reports/purchase_report.vue":
/*!*******************************************************************!*\
  !*** ./resources/src/views/app/pages/reports/purchase_report.vue ***!
  \*******************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _purchase_report_vue_vue_type_template_id_c527ccd6___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./purchase_report.vue?vue&type=template&id=c527ccd6& */ "./resources/src/views/app/pages/reports/purchase_report.vue?vue&type=template&id=c527ccd6&");
/* harmony import */ var _purchase_report_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./purchase_report.vue?vue&type=script&lang=js& */ "./resources/src/views/app/pages/reports/purchase_report.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _purchase_report_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _purchase_report_vue_vue_type_template_id_c527ccd6___WEBPACK_IMPORTED_MODULE_0__["render"],
  _purchase_report_vue_vue_type_template_id_c527ccd6___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/src/views/app/pages/reports/purchase_report.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/src/views/app/pages/reports/purchase_report.vue?vue&type=script&lang=js&":
/*!********************************************************************************************!*\
  !*** ./resources/src/views/app/pages/reports/purchase_report.vue?vue&type=script&lang=js& ***!
  \********************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_purchase_report_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../node_modules/babel-loader/lib??ref--4-0!../../../../../../node_modules/vue-loader/lib??vue-loader-options!./purchase_report.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/src/views/app/pages/reports/purchase_report.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_purchase_report_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/src/views/app/pages/reports/purchase_report.vue?vue&type=template&id=c527ccd6&":
/*!**************************************************************************************************!*\
  !*** ./resources/src/views/app/pages/reports/purchase_report.vue?vue&type=template&id=c527ccd6& ***!
  \**************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_purchase_report_vue_vue_type_template_id_c527ccd6___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../../node_modules/vue-loader/lib??vue-loader-options!./purchase_report.vue?vue&type=template&id=c527ccd6& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/src/views/app/pages/reports/purchase_report.vue?vue&type=template&id=c527ccd6&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_purchase_report_vue_vue_type_template_id_c527ccd6___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_purchase_report_vue_vue_type_template_id_c527ccd6___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ })

}]);