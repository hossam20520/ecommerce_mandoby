(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["index_transfer"],{

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/src/views/app/pages/transfers/index_transfer.vue?vue&type=script&lang=js&":
/*!*****************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/src/views/app/pages/transfers/index_transfer.vue?vue&type=script&lang=js& ***!
  \*****************************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var vuex__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vuex */ "./node_modules/vuex/dist/vuex.esm.js");
/* harmony import */ var nprogress__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! nprogress */ "./node_modules/nprogress/nprogress.js");
/* harmony import */ var nprogress__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(nprogress__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var jspdf__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! jspdf */ "./node_modules/jspdf/dist/jspdf.es.min.js");
/* harmony import */ var jspdf_autotable__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! jspdf-autotable */ "./node_modules/jspdf-autotable/dist/jspdf.plugin.autotable.js");
/* harmony import */ var jspdf_autotable__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(jspdf_autotable__WEBPACK_IMPORTED_MODULE_3__);
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




/* harmony default export */ __webpack_exports__["default"] = ({
  metaInfo: {
    title: "Transfer"
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
      selectedIds: [],
      search: "",
      totalRows: "",
      loading: true,
      spinner: false,
      limit: "10",
      Filter_date: "",
      Filter_status: "",
      Filter_Ref: "",
      Filter_From: "",
      Filter_To: "",
      details: [],
      warehouses: [],
      transfers: [],
      transfer: {
        GrandTotal: ""
      }
    };
  },
  computed: _objectSpread(_objectSpread({}, Object(vuex__WEBPACK_IMPORTED_MODULE_0__["mapGetters"])(["currentUserPermissions", "currentUser"])), {}, {
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
        label: this.$t("FromWarehouse"),
        field: "from_warehouse",
        tdClass: "text-left",
        thClass: "text-left"
      }, {
        label: this.$t("ToWarehouse"),
        field: "to_warehouse",
        tdClass: "text-left",
        thClass: "text-left"
      }, {
        label: this.$t("Items"),
        field: "items",
        type: "decimal",
        tdClass: "text-left",
        thClass: "text-left"
      }, {
        label: this.$t("Total"),
        field: "GrandTotal",
        type: "decimal",
        tdClass: "text-left",
        thClass: "text-left"
      }, {
        label: this.$t("Status"),
        field: "statut",
        html: true,
        tdClass: "text-left",
        thClass: "text-left"
      }, {
        label: this.$t("Action"),
        field: "actions",
        html: true,
        tdClass: "text-right",
        thClass: "text-right",
        sortable: false
      }];
    }
  }),
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
        this.Get_Transfers(currentPage);
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
        this.Get_Transfers(1);
      }
    },
    //---- Event Select Rows
    selectionChanged: function selectionChanged(_ref3) {
      var _this = this;

      var selectedRows = _ref3.selectedRows;
      this.selectedIds = [];
      selectedRows.forEach(function (row, index) {
        _this.selectedIds.push(row.id);
      });
    },
    //---- Event sort change
    onSortChange: function onSortChange(params) {
      var field = "";

      if (params[0].field == "from_warehouse") {
        field = "from_warehouse_id";
      } else if (params[0].field == "to_warehouse") {
        field = "to_warehouse_id";
      } else {
        field = params[0].field;
      }

      this.updateParams({
        sort: {
          type: params[0].type,
          field: field
        }
      });
      this.Get_Transfers(this.serverParams.page);
    },
    //---- Event on Search
    onSearch: function onSearch(value) {
      this.search = value.searchTerm;
      this.Get_Transfers(this.serverParams.page);
    },
    setToStrings: function setToStrings() {
      // Simply replaces null values with strings=''
      if (this.Filter_From === null) {
        this.Filter_From = "";
      } else if (this.Filter_To === null) {
        this.Filter_To = "";
      } else if (this.Filter_status === null) {
        this.Filter_status = "";
      }
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
    },
    //------ Reset Filter
    Reset_Filter: function Reset_Filter() {
      this.search = "";
      this.Filter_date = "";
      this.Filter_status = "";
      this.Filter_Ref = "";
      this.Filter_From = "";
      this.Filter_To = "";
      this.Get_Transfers(this.serverParams.page);
    },
    //--------------------------------Get All Transfers ----------------------\\
    Get_Transfers: function Get_Transfers(page) {
      var _this2 = this;

      // Start the progress bar.
      nprogress__WEBPACK_IMPORTED_MODULE_1___default.a.start();
      nprogress__WEBPACK_IMPORTED_MODULE_1___default.a.set(0.1);
      this.setToStrings();
      axios.get("transfers?page=" + page + "&Ref=" + this.Filter_Ref + "&statut=" + this.Filter_status + "&from_warehouse_id=" + this.Filter_From + "&to_warehouse_id=" + this.Filter_To + "&SortField=" + this.serverParams.sort.field + "&SortType=" + this.serverParams.sort.type + "&search=" + this.search + "&limit=" + this.limit).then(function (response) {
        _this2.transfers = response.data.transfers;
        _this2.warehouses = response.data.warehouses;
        _this2.totalRows = response.data.totalRows; // Complete the animation of theprogress bar.

        nprogress__WEBPACK_IMPORTED_MODULE_1___default.a.done();
        _this2.isLoading = false;
      })["catch"](function (response) {
        // Complete the animation of theprogress bar.
        nprogress__WEBPACK_IMPORTED_MODULE_1___default.a.done();
        setTimeout(function () {
          _this2.isLoading = false;
        }, 500);
      });
    },
    //----------------------------------- Get Details Transfer ------------------------------\\
    showDetails: function showDetails(id) {
      var _this3 = this;

      // Start the progress bar.
      nprogress__WEBPACK_IMPORTED_MODULE_1___default.a.start();
      nprogress__WEBPACK_IMPORTED_MODULE_1___default.a.set(0.1);
      axios.get("transfers/" + id).then(function (response) {
        _this3.transfer = response.data.transfer;
        _this3.details = response.data.details;
        Fire.$emit("Get_Details_Transfer");
      })["catch"](function (response) {
        Fire.$emit("Get_Details_Transfer");
      });
    },
    //-------------------------------------- Transfer PDF ------------------------------\\
    Transfer_PDF: function Transfer_PDF() {
      var self = this;
      var pdf = new jspdf__WEBPACK_IMPORTED_MODULE_2__["default"]("p", "pt");
      var columns = [{
        title: "Ref",
        dataKey: "Ref"
      }, {
        title: "From warehouse",
        dataKey: "from_warehouse"
      }, {
        title: "To warehouse",
        dataKey: "to_warehouse"
      }, {
        title: "Total Products",
        dataKey: "items"
      }, {
        title: "Status",
        dataKey: "statut"
      }];
      pdf.autoTable(columns, self.transfers);
      pdf.text("Transfer List", 40, 25);
      pdf.save("Transfer_List.pdf");
    },
    //------------------------------------ Transfer Excel ------------------------------\\
    Transfer_Excel: function Transfer_Excel() {
      // Start the progress bar.
      nprogress__WEBPACK_IMPORTED_MODULE_1___default.a.start();
      nprogress__WEBPACK_IMPORTED_MODULE_1___default.a.set(0.1);
      axios.get("transfers/export/Excel", {
        responseType: "blob",
        // important
        headers: {
          "Content-Type": "application/json"
        }
      }).then(function (response) {
        var url = window.URL.createObjectURL(new Blob([response.data]));
        var link = document.createElement("a");
        link.href = url;
        link.setAttribute("download", "List_Transfers.xlsx");
        document.body.appendChild(link);
        link.click(); // Complete the animation of theprogress bar.

        setTimeout(function () {
          return nprogress__WEBPACK_IMPORTED_MODULE_1___default.a.done();
        }, 500);
      })["catch"](function () {
        // Complete the animation of theprogress bar.
        setTimeout(function () {
          return nprogress__WEBPACK_IMPORTED_MODULE_1___default.a.done();
        }, 500);
      });
    },
    //---------------------------------- Delete Transfer ----------------------\\
    Remove_Transfer: function Remove_Transfer(id) {
      var _this4 = this;

      this.$swal({
        title: this.$t("Delete.Title"),
        text: this.$t("Delete.Text"),
        type: "warning",
        showCancelButton: true,
        confirmButtonColor: "#3085d6",
        cancelButtonColor: "#d33",
        cancelButtonText: this.$t("Delete.cancelButtonText"),
        confirmButtonText: this.$t("Delete.confirmButtonText")
      }).then(function (result) {
        if (result.value) {
          // Start the progress bar.
          nprogress__WEBPACK_IMPORTED_MODULE_1___default.a.start();
          nprogress__WEBPACK_IMPORTED_MODULE_1___default.a.set(0.1);
          axios["delete"]("transfers/" + id).then(function () {
            _this4.$swal(_this4.$t("Delete.Deleted"), _this4.$t("Delete.TitleTransfer"), "success");

            Fire.$emit("Delete_Transfer");
          })["catch"](function () {
            // Complete the animation of theprogress bar.
            setTimeout(function () {
              return nprogress__WEBPACK_IMPORTED_MODULE_1___default.a.done();
            }, 500);

            _this4.$swal(_this4.$t("Delete.Failed"), _this4.$t("Delete.Therewassomethingwronge"), "warning");
          });
        }
      });
    },
    //---- Delete transfers by selection
    delete_by_selected: function delete_by_selected() {
      var _this5 = this;

      this.$swal({
        title: this.$t("Delete.Title"),
        text: this.$t("Delete.Text"),
        type: "warning",
        showCancelButton: true,
        confirmButtonColor: "#3085d6",
        cancelButtonColor: "#d33",
        cancelButtonText: this.$t("Delete.cancelButtonText"),
        confirmButtonText: this.$t("Delete.confirmButtonText")
      }).then(function (result) {
        if (result.value) {
          // Start the progress bar.
          nprogress__WEBPACK_IMPORTED_MODULE_1___default.a.start();
          nprogress__WEBPACK_IMPORTED_MODULE_1___default.a.set(0.1);
          axios.post("transfers/delete/by_selection", {
            selectedIds: _this5.selectedIds
          }).then(function () {
            _this5.$swal(_this5.$t("Delete.Deleted"), _this5.$t("Delete.TitleTransfer"), "success");

            Fire.$emit("Delete_Transfer");
          })["catch"](function () {
            // Complete the animation of theprogress bar.
            setTimeout(function () {
              return nprogress__WEBPACK_IMPORTED_MODULE_1___default.a.done();
            }, 500);

            _this5.$swal(_this5.$t("Delete.Failed"), _this5.$t("Delete.Therewassomethingwronge"), "warning");
          });
        }
      });
    }
  },
  //-----------------------------Autoload function-------------------
  created: function created() {
    var _this6 = this;

    this.Get_Transfers(1);
    Fire.$on("Get_Details_Transfer", function () {
      _this6.$bvModal.show("showDetails"); // Complete the animation of theprogress bar.


      setTimeout(function () {
        return nprogress__WEBPACK_IMPORTED_MODULE_1___default.a.done();
      }, 500);
    });
    Fire.$on("Delete_Transfer", function () {
      setTimeout(function () {
        _this6.Get_Transfers(_this6.serverParams.page); // Complete the animation of theprogress bar.


        setTimeout(function () {
          return nprogress__WEBPACK_IMPORTED_MODULE_1___default.a.done();
        }, 500);
      }, 500);
    });
  }
});

/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/src/views/app/pages/transfers/index_transfer.vue?vue&type=template&id=e917c7c8&":
/*!*********************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/src/views/app/pages/transfers/index_transfer.vue?vue&type=template&id=e917c7c8& ***!
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
        attrs: {
          page: _vm.$t("ListTransfers"),
          folder: _vm.$t("StockTransfers"),
        },
      }),
      _vm._v(" "),
      _vm.isLoading
        ? _c("div", {
            staticClass: "loading_page spinner spinner-primary mr-3",
          })
        : _c(
            "div",
            [
              _c(
                "vue-good-table",
                {
                  attrs: {
                    mode: "remote",
                    columns: _vm.columns,
                    totalRows: _vm.totalRows,
                    rows: _vm.transfers,
                    "search-options": {
                      enabled: true,
                      placeholder: _vm.$t("Search_this_table"),
                    },
                    "select-options": {
                      enabled: true,
                      clearSelectionText: "",
                    },
                    "pagination-options": {
                      enabled: true,
                      mode: "records",
                      nextLabel: "next",
                      prevLabel: "prev",
                    },
                    styleClass: "tableOne table-hover vgt-table",
                  },
                  on: {
                    "on-page-change": _vm.onPageChange,
                    "on-per-page-change": _vm.onPerPageChange,
                    "on-sort-change": _vm.onSortChange,
                    "on-search": _vm.onSearch,
                    "on-selected-rows-change": _vm.selectionChanged,
                  },
                  scopedSlots: _vm._u([
                    {
                      key: "table-row",
                      fn: function (props) {
                        return [
                          props.column.field == "actions"
                            ? _c(
                                "span",
                                [
                                  _c(
                                    "a",
                                    {
                                      directives: [
                                        {
                                          name: "b-tooltip",
                                          rawName: "v-b-tooltip.hover",
                                          modifiers: { hover: true },
                                        },
                                      ],
                                      attrs: { title: "View" },
                                      on: {
                                        click: function ($event) {
                                          return _vm.showDetails(props.row.id)
                                        },
                                      },
                                    },
                                    [
                                      _c("i", {
                                        staticClass: "i-Eye text-25 text-info",
                                      }),
                                    ]
                                  ),
                                  _vm._v(" "),
                                  _vm.currentUserPermissions &&
                                  _vm.currentUserPermissions.includes(
                                    "transfer_edit"
                                  )
                                    ? _c(
                                        "router-link",
                                        {
                                          directives: [
                                            {
                                              name: "b-tooltip",
                                              rawName: "v-b-tooltip.hover",
                                              modifiers: { hover: true },
                                            },
                                          ],
                                          attrs: {
                                            title: "Edit",
                                            to: {
                                              name: "edit_transfer",
                                              params: { id: props.row.id },
                                            },
                                          },
                                        },
                                        [
                                          _c("i", {
                                            staticClass:
                                              "i-Edit text-25 text-success",
                                          }),
                                        ]
                                      )
                                    : _vm._e(),
                                  _vm._v(" "),
                                  _vm.currentUserPermissions &&
                                  _vm.currentUserPermissions.includes(
                                    "transfer_delete"
                                  )
                                    ? _c(
                                        "a",
                                        {
                                          directives: [
                                            {
                                              name: "b-tooltip",
                                              rawName: "v-b-tooltip.hover",
                                              modifiers: { hover: true },
                                            },
                                          ],
                                          attrs: { title: "Delete" },
                                          on: {
                                            click: function ($event) {
                                              return _vm.Remove_Transfer(
                                                props.row.id
                                              )
                                            },
                                          },
                                        },
                                        [
                                          _c("i", {
                                            staticClass:
                                              "i-Close-Window text-25 text-danger",
                                          }),
                                        ]
                                      )
                                    : _vm._e(),
                                ],
                                1
                              )
                            : props.column.field == "statut"
                            ? _c("div", [
                                props.row.statut == "completed"
                                  ? _c(
                                      "span",
                                      {
                                        staticClass:
                                          "badge badge-outline-success",
                                      },
                                      [_vm._v(_vm._s(_vm.$t("complete")))]
                                    )
                                  : props.row.statut == "sent"
                                  ? _c(
                                      "span",
                                      {
                                        staticClass:
                                          "badge badge-outline-warning",
                                      },
                                      [_vm._v(_vm._s(_vm.$t("Sent")))]
                                    )
                                  : _c(
                                      "span",
                                      {
                                        staticClass:
                                          "badge badge-outline-danger",
                                      },
                                      [_vm._v(_vm._s(_vm.$t("Pending")))]
                                    ),
                              ])
                            : _vm._e(),
                        ]
                      },
                    },
                  ]),
                },
                [
                  _c(
                    "div",
                    {
                      attrs: { slot: "selected-row-actions" },
                      slot: "selected-row-actions",
                    },
                    [
                      _c(
                        "button",
                        {
                          staticClass: "btn btn-danger btn-sm",
                          on: {
                            click: function ($event) {
                              return _vm.delete_by_selected()
                            },
                          },
                        },
                        [_vm._v(_vm._s(_vm.$t("Del")))]
                      ),
                    ]
                  ),
                  _vm._v(" "),
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
                              return _vm.Transfer_PDF()
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
                              return _vm.Transfer_Excel()
                            },
                          },
                        },
                        [
                          _c("i", { staticClass: "i-File-Excel" }),
                          _vm._v(" EXCEL\n        "),
                        ]
                      ),
                      _vm._v(" "),
                      _vm.currentUserPermissions &&
                      _vm.currentUserPermissions.includes("transfer_add")
                        ? _c(
                            "router-link",
                            {
                              staticClass:
                                "btn-sm btn btn-primary ripple btn-icon m-1",
                              attrs: { to: "/app/transfers/store" },
                            },
                            [
                              _c("span", { staticClass: "ul-btn__icon" }, [
                                _c("i", { staticClass: "i-Add" }),
                              ]),
                              _vm._v(" "),
                              _c("span", { staticClass: "ul-btn__text ml-1" }, [
                                _vm._v(_vm._s(_vm.$t("Add"))),
                              ]),
                            ]
                          )
                        : _vm._e(),
                    ],
                    1
                  ),
                ]
              ),
            ],
            1
          ),
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
                        { attrs: { label: _vm.$t("FromWarehouse") } },
                        [
                          _c("v-select", {
                            attrs: {
                              reduce: function (label) {
                                return label.value
                              },
                              placeholder: _vm.$t("Choose_Warehouse"),
                              options: _vm.warehouses.map(function (
                                warehouses
                              ) {
                                return {
                                  label: warehouses.name,
                                  value: warehouses.id,
                                }
                              }),
                            },
                            model: {
                              value: _vm.Filter_From,
                              callback: function ($$v) {
                                _vm.Filter_From = $$v
                              },
                              expression: "Filter_From",
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
                        { attrs: { label: _vm.$t("ToWarehouse") } },
                        [
                          _c("v-select", {
                            attrs: {
                              reduce: function (label) {
                                return label.value
                              },
                              placeholder: _vm.$t("Choose_Warehouse"),
                              options: _vm.warehouses.map(function (
                                warehouses
                              ) {
                                return {
                                  label: warehouses.name,
                                  value: warehouses.id,
                                }
                              }),
                            },
                            model: {
                              value: _vm.Filter_To,
                              callback: function ($$v) {
                                _vm.Filter_To = $$v
                              },
                              expression: "Filter_To",
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
                          _c("v-select", {
                            attrs: {
                              reduce: function (label) {
                                return label.value
                              },
                              placeholder: _vm.$t("Choose_Status"),
                              options: [
                                { label: "Completed", value: "completed" },
                                { label: "Sent", value: "sent" },
                                { label: "Pending", value: "pending" },
                              ],
                            },
                            model: {
                              value: _vm.Filter_status,
                              callback: function ($$v) {
                                _vm.Filter_status = $$v
                              },
                              expression: "Filter_status",
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
                              return _vm.Get_Transfers(_vm.serverParams.page)
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
      _vm._v(" "),
      _c(
        "b-modal",
        {
          attrs: {
            "ok-only": "",
            size: "lg",
            id: "showDetails",
            title: _vm.$t("TransferDetail"),
          },
        },
        [
          _c(
            "b-row",
            [
              _c(
                "b-col",
                { staticClass: "mt-3", attrs: { lg: "5", md: "12", sm: "12" } },
                [
                  _c(
                    "table",
                    {
                      staticClass: "table table-hover table-bordered table-sm",
                    },
                    [
                      _c("tbody", [
                        _c("tr", [
                          _c("td", [_vm._v(_vm._s(_vm.$t("date")))]),
                          _vm._v(" "),
                          _c("th", [_vm._v(_vm._s(_vm.transfer.date))]),
                        ]),
                        _vm._v(" "),
                        _c("tr", [
                          _c("td", [_vm._v(_vm._s(_vm.$t("Reference")))]),
                          _vm._v(" "),
                          _c("th", [_vm._v(_vm._s(_vm.transfer.Ref))]),
                        ]),
                        _vm._v(" "),
                        _c("tr", [
                          _c("td", [_vm._v(_vm._s(_vm.$t("FromWarehouse")))]),
                          _vm._v(" "),
                          _c("th", [
                            _vm._v(_vm._s(_vm.transfer.from_warehouse)),
                          ]),
                        ]),
                        _vm._v(" "),
                        _c("tr", [
                          _c("td", [_vm._v(_vm._s(_vm.$t("ToWarehouse")))]),
                          _vm._v(" "),
                          _c("th", [_vm._v(_vm._s(_vm.transfer.to_warehouse))]),
                        ]),
                        _vm._v(" "),
                        _c("tr", [
                          _c("td", [_vm._v(_vm._s(_vm.$t("Total")))]),
                          _vm._v(" "),
                          _c("th", [
                            _vm._v(
                              _vm._s(_vm.currentUser.currency) +
                                _vm._s(
                                  _vm.formatNumber(_vm.transfer.GrandTotal, 2)
                                )
                            ),
                          ]),
                        ]),
                        _vm._v(" "),
                        _c("tr", [
                          _c("td", [_vm._v(_vm._s(_vm.$t("Status")))]),
                          _vm._v(" "),
                          _c("th", [
                            _vm.transfer.statut == "completed"
                              ? _c(
                                  "span",
                                  {
                                    staticClass: "badge badge-outline-success",
                                  },
                                  [_vm._v(_vm._s(_vm.$t("complete")))]
                                )
                              : _vm.transfer.statut == "sent"
                              ? _c(
                                  "span",
                                  {
                                    staticClass: "badge badge-outline-warning",
                                  },
                                  [_vm._v(_vm._s(_vm.$t("Sent")))]
                                )
                              : _c(
                                  "span",
                                  { staticClass: "badge badge-outline-danger" },
                                  [_vm._v(_vm._s(_vm.$t("Pending")))]
                                ),
                          ]),
                        ]),
                      ]),
                    ]
                  ),
                ]
              ),
              _vm._v(" "),
              _c(
                "b-col",
                { staticClass: "mt-3", attrs: { lg: "7", md: "12", sm: "12" } },
                [
                  _c("div", { staticClass: "table-responsive" }, [
                    _c(
                      "table",
                      {
                        staticClass:
                          "table table-hover table-bordered table-sm",
                      },
                      [
                        _c("thead", [
                          _c("tr", [
                            _c("th", { attrs: { scope: "col" } }, [
                              _vm._v(_vm._s(_vm.$t("ProductName"))),
                            ]),
                            _vm._v(" "),
                            _c("th", { attrs: { scope: "col" } }, [
                              _vm._v(_vm._s(_vm.$t("CodeProduct"))),
                            ]),
                            _vm._v(" "),
                            _c("th", { attrs: { scope: "col" } }, [
                              _vm._v(_vm._s(_vm.$t("Quantity"))),
                            ]),
                            _vm._v(" "),
                            _c("th", { attrs: { scope: "col" } }, [
                              _vm._v(_vm._s(_vm.$t("SubTotal"))),
                            ]),
                          ]),
                        ]),
                        _vm._v(" "),
                        _c(
                          "tbody",
                          _vm._l(_vm.details, function (detail) {
                            return _c("tr", [
                              _c("td", [_vm._v(_vm._s(detail.name))]),
                              _vm._v(" "),
                              _c("td", [_vm._v(_vm._s(detail.code))]),
                              _vm._v(" "),
                              _c("td", [
                                _vm._v(
                                  _vm._s(_vm.formatNumber(detail.quantity, 2)) +
                                    " " +
                                    _vm._s(detail.unit)
                                ),
                              ]),
                              _vm._v(" "),
                              _c("td", [
                                _vm._v(
                                  _vm._s(_vm.currentUser.currency) +
                                    " " +
                                    _vm._s(detail.total.toFixed(2))
                                ),
                              ]),
                            ])
                          }),
                          0
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
      ),
    ],
    1
  )
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./resources/src/views/app/pages/transfers/index_transfer.vue":
/*!********************************************************************!*\
  !*** ./resources/src/views/app/pages/transfers/index_transfer.vue ***!
  \********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _index_transfer_vue_vue_type_template_id_e917c7c8___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./index_transfer.vue?vue&type=template&id=e917c7c8& */ "./resources/src/views/app/pages/transfers/index_transfer.vue?vue&type=template&id=e917c7c8&");
/* harmony import */ var _index_transfer_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./index_transfer.vue?vue&type=script&lang=js& */ "./resources/src/views/app/pages/transfers/index_transfer.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _index_transfer_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _index_transfer_vue_vue_type_template_id_e917c7c8___WEBPACK_IMPORTED_MODULE_0__["render"],
  _index_transfer_vue_vue_type_template_id_e917c7c8___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/src/views/app/pages/transfers/index_transfer.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/src/views/app/pages/transfers/index_transfer.vue?vue&type=script&lang=js&":
/*!*********************************************************************************************!*\
  !*** ./resources/src/views/app/pages/transfers/index_transfer.vue?vue&type=script&lang=js& ***!
  \*********************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_index_transfer_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../node_modules/babel-loader/lib??ref--4-0!../../../../../../node_modules/vue-loader/lib??vue-loader-options!./index_transfer.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/src/views/app/pages/transfers/index_transfer.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_index_transfer_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/src/views/app/pages/transfers/index_transfer.vue?vue&type=template&id=e917c7c8&":
/*!***************************************************************************************************!*\
  !*** ./resources/src/views/app/pages/transfers/index_transfer.vue?vue&type=template&id=e917c7c8& ***!
  \***************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_index_transfer_vue_vue_type_template_id_e917c7c8___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../../node_modules/vue-loader/lib??vue-loader-options!./index_transfer.vue?vue&type=template&id=e917c7c8& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/src/views/app/pages/transfers/index_transfer.vue?vue&type=template&id=e917c7c8&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_index_transfer_vue_vue_type_template_id_e917c7c8___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_index_transfer_vue_vue_type_template_id_e917c7c8___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ })

}]);