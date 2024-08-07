(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["detail_sale"],{

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/src/views/app/pages/sales/detail_sale.vue?vue&type=script&lang=js&":
/*!**********************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/src/views/app/pages/sales/detail_sale.vue?vue&type=script&lang=js& ***!
  \**********************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var vuex__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vuex */ "./node_modules/vuex/dist/vuex.esm.js");
/* harmony import */ var nprogress__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! nprogress */ "./node_modules/nprogress/nprogress.js");
/* harmony import */ var nprogress__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(nprogress__WEBPACK_IMPORTED_MODULE_1__);
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
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
  computed: Object(vuex__WEBPACK_IMPORTED_MODULE_0__["mapGetters"])(["currentUserPermissions", "currentUser"]),
  metaInfo: {
    title: "Detail Sale"
  },
  data: function data() {
    return {
      isLoading: true,
      sale: {},
      details: [],
      variants: [],
      company: {},
      email: {
        to: "",
        subject: "",
        message: "",
        client_name: "",
        Sale_Ref: ""
      }
    };
  },
  methods: {
    //------------------------------ Print -------------------------\\
    print: function print() {
      var divContents = document.getElementById("print_Invoice").innerHTML;
      var a = window.open("", "", "height=500, width=500");
      a.document.write('<link rel="stylesheet" href="/assets_setup/css/bootstrap.css"><html>');
      a.document.write("<body >");
      a.document.write(divContents);
      a.document.write("</body></html>");
      a.document.close();
      a.print();
    },
    //----------------------------------- Invoice Sale PDF  -------------------------\\
    Sale_PDF: function Sale_PDF() {
      var _this = this;

      // Start the progress bar.
      nprogress__WEBPACK_IMPORTED_MODULE_1___default.a.start();
      nprogress__WEBPACK_IMPORTED_MODULE_1___default.a.set(0.1);
      var id = this.$route.params.id;
      axios.get("Sale_PDF/".concat(id), {
        responseType: "blob",
        // important
        headers: {
          "Content-Type": "application/json"
        }
      }).then(function (response) {
        var url = window.URL.createObjectURL(new Blob([response.data]));
        var link = document.createElement("a");
        link.href = url;
        link.setAttribute("download", "Sale_" + _this.sale.Ref + ".pdf");
        document.body.appendChild(link);
        link.click(); // Complete the animation of the  progress bar.

        setTimeout(function () {
          return nprogress__WEBPACK_IMPORTED_MODULE_1___default.a.done();
        }, 500);
      })["catch"](function () {
        // Complete the animation of the  progress bar.
        setTimeout(function () {
          return nprogress__WEBPACK_IMPORTED_MODULE_1___default.a.done();
        }, 500);
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
    //--------------------------------- Send Sale in Email ------------------------------\\
    Sale_Email: function Sale_Email() {
      this.email.to = this.sale.client_email;
      this.email.Sale_Ref = this.sale.Ref;
      this.email.client_name = this.sale.client_name;
      this.Send_Email();
    },
    Send_Email: function Send_Email() {
      var _this2 = this;

      // Start the progress bar.
      nprogress__WEBPACK_IMPORTED_MODULE_1___default.a.start();
      nprogress__WEBPACK_IMPORTED_MODULE_1___default.a.set(0.1);
      var id = this.$route.params.id;
      axios.post("sales/send/email", {
        id: id,
        to: this.email.to,
        client_name: this.email.client_name,
        Ref: this.email.Sale_Ref
      }).then(function (response) {
        // Complete the animation of the  progress bar.
        setTimeout(function () {
          return nprogress__WEBPACK_IMPORTED_MODULE_1___default.a.done();
        }, 500);

        _this2.makeToast("success", _this2.$t("Send.TitleEmail"), _this2.$t("Success"));
      })["catch"](function (error) {
        // Complete the animation of the  progress bar.
        setTimeout(function () {
          return nprogress__WEBPACK_IMPORTED_MODULE_1___default.a.done();
        }, 500);

        _this2.makeToast("danger", _this2.$t("SMTPIncorrect"), _this2.$t("Failed"));
      });
    },
    //---------SMS notification
    Sale_SMS: function Sale_SMS() {
      var _this3 = this;

      // Start the progress bar.
      nprogress__WEBPACK_IMPORTED_MODULE_1___default.a.start();
      nprogress__WEBPACK_IMPORTED_MODULE_1___default.a.set(0.1);
      var id = this.$route.params.id;
      axios.post("sales/send/sms", {
        id: id
      }).then(function (response) {
        // Complete the animation of the  progress bar.
        setTimeout(function () {
          return nprogress__WEBPACK_IMPORTED_MODULE_1___default.a.done();
        }, 500);

        _this3.makeToast("success", _this3.$t("Send_SMS"), _this3.$t("Success"));
      })["catch"](function (error) {
        // Complete the animation of the  progress bar.
        setTimeout(function () {
          return nprogress__WEBPACK_IMPORTED_MODULE_1___default.a.done();
        }, 500);

        _this3.makeToast("danger", _this3.$t("sms_config_invalid"), _this3.$t("Failed"));
      });
    },
    //----------------------------------- Get Details Sale ------------------------------\\
    Get_Details: function Get_Details() {
      var _this4 = this;

      var id = this.$route.params.id;
      axios.get("sales/".concat(id)).then(function (response) {
        _this4.sale = response.data.sale;
        _this4.details = response.data.details;
        _this4.company = response.data.company;
        _this4.isLoading = false;
      })["catch"](function (response) {
        setTimeout(function () {
          _this4.isLoading = false;
        }, 500);
      });
    },
    //------------------------------------------ DELETE Sale ------------------------------\\
    Delete_Sale: function Delete_Sale() {
      var _this5 = this;

      var id = this.$route.params.id;
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
          axios["delete"]("sales/" + id).then(function () {
            _this5.$swal(_this5.$t("Delete.Deleted"), _this5.$t("Delete.SaleDeleted"), "success");

            _this5.$router.push({
              name: "index_sales"
            });
          })["catch"](function () {
            _this5.$swal(_this5.$t("Delete.Failed"), _this5.$t("Delete.Therewassomethingwronge"), "warning");
          });
        }
      });
    }
  },
  //end Methods
  //----------------------------- Created function-------------------
  created: function created() {
    this.Get_Details();
  }
});

/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/src/views/app/pages/sales/detail_sale.vue?vue&type=template&id=9b055236&":
/*!**************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/src/views/app/pages/sales/detail_sale.vue?vue&type=template&id=9b055236& ***!
  \**************************************************************************************************************************************************************************************************************************/
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
        attrs: { page: _vm.$t("SaleDetail"), folder: _vm.$t("Sales") },
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
            [
              _c(
                "b-row",
                [
                  _c(
                    "b-col",
                    { staticClass: "mb-5", attrs: { md: "12" } },
                    [
                      _vm.currentUserPermissions &&
                      _vm.currentUserPermissions.includes("Sales_edit")
                        ? _c(
                            "router-link",
                            {
                              staticClass:
                                "btn btn-success btn-icon ripple btn-sm",
                              attrs: {
                                title: "Edit",
                                to: {
                                  name: "edit_sale",
                                  params: { id: _vm.$route.params.id },
                                },
                              },
                            },
                            [
                              _c("i", { staticClass: "i-Edit" }),
                              _vm._v(" "),
                              _c("span", [_vm._v(_vm._s(_vm.$t("EditSale")))]),
                            ]
                          )
                        : _vm._e(),
                      _vm._v(" "),
                      _c(
                        "button",
                        {
                          staticClass: "btn btn-info btn-icon ripple btn-sm",
                          on: {
                            click: function ($event) {
                              return _vm.Sale_Email()
                            },
                          },
                        },
                        [
                          _c("i", { staticClass: "i-Envelope-2" }),
                          _vm._v(
                            "\n          " +
                              _vm._s(_vm.$t("Email")) +
                              "\n        "
                          ),
                        ]
                      ),
                      _vm._v(" "),
                      _c(
                        "button",
                        {
                          staticClass:
                            "btn btn-secondary btn-icon ripple btn-sm",
                          on: {
                            click: function ($event) {
                              return _vm.Sale_SMS()
                            },
                          },
                        },
                        [
                          _c("i", { staticClass: "i-Speach-Bubble" }),
                          _vm._v("\n          SMS\n        "),
                        ]
                      ),
                      _vm._v(" "),
                      _c(
                        "button",
                        {
                          staticClass: "btn btn-primary btn-icon ripple btn-sm",
                          on: {
                            click: function ($event) {
                              return _vm.Sale_PDF()
                            },
                          },
                        },
                        [
                          _c("i", { staticClass: "i-File-TXT" }),
                          _vm._v("\n          PDF\n        "),
                        ]
                      ),
                      _vm._v(" "),
                      _c(
                        "button",
                        {
                          staticClass: "btn btn-warning btn-icon ripple btn-sm",
                          on: {
                            click: function ($event) {
                              return _vm.print()
                            },
                          },
                        },
                        [
                          _c("i", { staticClass: "i-Billing" }),
                          _vm._v(
                            "\n          " +
                              _vm._s(_vm.$t("print")) +
                              "\n        "
                          ),
                        ]
                      ),
                      _vm._v(" "),
                      _vm.currentUserPermissions &&
                      _vm.currentUserPermissions.includes("Sales_delete")
                        ? _c(
                            "button",
                            {
                              staticClass:
                                "btn btn-danger btn-icon ripple btn-sm",
                              on: {
                                click: function ($event) {
                                  return _vm.Delete_Sale()
                                },
                              },
                            },
                            [
                              _c("i", { staticClass: "i-Close-Window" }),
                              _vm._v(
                                "\n          " +
                                  _vm._s(_vm.$t("Del")) +
                                  "\n        "
                              ),
                            ]
                          )
                        : _vm._e(),
                    ],
                    1
                  ),
                ],
                1
              ),
              _vm._v(" "),
              _c(
                "div",
                { staticClass: "invoice", attrs: { id: "print_Invoice" } },
                [
                  _c(
                    "div",
                    { staticClass: "invoice-print" },
                    [
                      _c(
                        "b-row",
                        { staticClass: "justify-content-md-center" },
                        [
                          _c("h4", { staticClass: "font-weight-bold" }, [
                            _vm._v(
                              _vm._s(_vm.$t("SaleDetail")) +
                                " : " +
                                _vm._s(_vm.sale.Ref)
                            ),
                          ]),
                        ]
                      ),
                      _vm._v(" "),
                      _c("hr"),
                      _vm._v(" "),
                      _c(
                        "b-row",
                        { staticClass: "mt-5" },
                        [
                          _c(
                            "b-col",
                            {
                              staticClass: "mb-4",
                              attrs: { lg: "4", md: "4", sm: "12" },
                            },
                            [
                              _c("h5", { staticClass: "font-weight-bold" }, [
                                _vm._v(_vm._s(_vm.$t("Customer_Info"))),
                              ]),
                              _vm._v(" "),
                              _c("div", [_vm._v(_vm._s(_vm.sale.client_name))]),
                              _vm._v(" "),
                              _c("div", [
                                _vm._v(_vm._s(_vm.sale.client_email)),
                              ]),
                              _vm._v(" "),
                              _c("div", [
                                _vm._v(_vm._s(_vm.sale.client_phone)),
                              ]),
                              _vm._v(" "),
                              _c("div", [_vm._v(_vm._s(_vm.sale.client_adr))]),
                            ]
                          ),
                          _vm._v(" "),
                          _c(
                            "b-col",
                            {
                              staticClass: "mb-4",
                              attrs: { lg: "4", md: "4", sm: "12" },
                            },
                            [
                              _c("h5", { staticClass: "font-weight-bold" }, [
                                _vm._v(_vm._s(_vm.$t("OrderInfo"))),
                              ]),
                              _vm._v(" "),
                              _c("div", [
                                _vm._v(
                                  _vm._s(_vm.$t("Note")) +
                                    " : " +
                                    _vm._s(_vm.sale.notes)
                                ),
                              ]),
                              _vm._v(" "),
                              _c("div", [
                                _vm._v(
                                  _vm._s(_vm.$t("client_note")) +
                                    " : " +
                                    _vm._s(_vm.sale.client_note)
                                ),
                              ]),
                              _vm._v(" "),
                              _c("div", [
                                _vm._v(" " + _vm._s(_vm.$t("Image")) + " :  "),
                                _c(
                                  "a",
                                  { attrs: { href: _vm.sale.image } },
                                  [
                                    _c("b-img", {
                                      attrs: {
                                        thumbnail: "",
                                        height: "50",
                                        width: "50",
                                        fluid: "",
                                        src: _vm.sale.image,
                                        alt: "image",
                                      },
                                    }),
                                  ],
                                  1
                                ),
                              ]),
                            ]
                          ),
                          _vm._v(" "),
                          _c(
                            "b-col",
                            {
                              staticClass: "mb-4",
                              attrs: { lg: "4", md: "4", sm: "12" },
                            },
                            [
                              _c("h5", { staticClass: "font-weight-bold" }, [
                                _vm._v(_vm._s(_vm.$t("Invoice_Info"))),
                              ]),
                              _vm._v(" "),
                              _c("div", [
                                _vm._v(
                                  _vm._s(_vm.$t("Reference")) +
                                    " : " +
                                    _vm._s(_vm.sale.Ref)
                                ),
                              ]),
                              _vm._v(" "),
                              _c("div", [
                                _vm._v(
                                  _vm._s(_vm.$t("mandob_ref")) +
                                    " : " +
                                    _vm._s(_vm.sale.mandob_ref)
                                ),
                              ]),
                              _vm._v(" "),
                              _c("div", [
                                _vm._v(
                                  _vm._s(_vm.$t("odoo_ref")) +
                                    " : " +
                                    _vm._s(_vm.sale.odoo_ref)
                                ),
                              ]),
                              _vm._v(" "),
                              _c("div", [
                                _vm._v(
                                  "\n              " +
                                    _vm._s(_vm.$t("PaymentStatus")) +
                                    " :\n              "
                                ),
                                _vm.sale.payment_status == "paid"
                                  ? _c(
                                      "span",
                                      {
                                        staticClass:
                                          "badge badge-outline-success",
                                      },
                                      [_vm._v(_vm._s(_vm.$t("Paid")))]
                                    )
                                  : _vm.sale.payment_status == "partial"
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
                              ]),
                              _vm._v(" "),
                              _c("div", [
                                _vm._v(
                                  _vm._s(_vm.$t("warehouse")) +
                                    " : " +
                                    _vm._s(_vm.sale.warehouse)
                                ),
                              ]),
                              _vm._v(" "),
                              _c("div", [
                                _vm._v(
                                  "\n              " +
                                    _vm._s(_vm.$t("Status")) +
                                    " :\n              "
                                ),
                                _vm.sale.statut == "completed"
                                  ? _c(
                                      "span",
                                      {
                                        staticClass:
                                          "badge badge-outline-success",
                                      },
                                      [_vm._v(_vm._s(_vm.$t("complete")))]
                                    )
                                  : _vm.sale.statut == "pending"
                                  ? _c(
                                      "span",
                                      {
                                        staticClass: "badge badge-outline-info",
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
                              ]),
                            ]
                          ),
                        ],
                        1
                      ),
                      _vm._v(" "),
                      _c(
                        "b-row",
                        { staticClass: "mt-3" },
                        [
                          _c("b-col", { attrs: { md: "12" } }, [
                            _c("h5", { staticClass: "font-weight-bold" }, [
                              _vm._v(_vm._s(_vm.$t("Order_Summary"))),
                            ]),
                            _vm._v(" "),
                            _c("div", { staticClass: "table-responsive" }, [
                              _c(
                                "table",
                                { staticClass: "table table-hover table-md" },
                                [
                                  _c("thead", { staticClass: "bg-gray-300" }, [
                                    _c("tr", [
                                      _c("th", { attrs: { scope: "col" } }, [
                                        _vm._v(_vm._s(_vm.$t("ProductName"))),
                                      ]),
                                      _vm._v(" "),
                                      _c("th", { attrs: { scope: "col" } }, [
                                        _vm._v(
                                          _vm._s(_vm.$t("Net_Unit_Price"))
                                        ),
                                      ]),
                                      _vm._v(" "),
                                      _c("th", { attrs: { scope: "col" } }, [
                                        _vm._v(_vm._s(_vm.$t("Quantity"))),
                                      ]),
                                      _vm._v(" "),
                                      _c("th", { attrs: { scope: "col" } }, [
                                        _vm._v(_vm._s(_vm.$t("UnitPrice"))),
                                      ]),
                                      _vm._v(" "),
                                      _c("th", { attrs: { scope: "col" } }, [
                                        _vm._v(_vm._s(_vm.$t("Discount"))),
                                      ]),
                                      _vm._v(" "),
                                      _c("th", { attrs: { scope: "col" } }, [
                                        _vm._v(_vm._s(_vm.$t("Tax"))),
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
                                        _c("td", [
                                          _vm._v(
                                            _vm._s(detail.code) +
                                              " (" +
                                              _vm._s(detail.name) +
                                              ")"
                                          ),
                                        ]),
                                        _vm._v(" "),
                                        _c("td", [
                                          _vm._v(
                                            _vm._s(_vm.currentUser.currency) +
                                              " " +
                                              _vm._s(
                                                _vm.formatNumber(
                                                  detail.Net_price,
                                                  3
                                                )
                                              )
                                          ),
                                        ]),
                                        _vm._v(" "),
                                        _c("td", [
                                          _vm._v(
                                            _vm._s(
                                              _vm.formatNumber(
                                                detail.quantity,
                                                2
                                              )
                                            ) +
                                              " " +
                                              _vm._s(detail.unit_sale)
                                          ),
                                        ]),
                                        _vm._v(" "),
                                        _c("td", [
                                          _vm._v(
                                            _vm._s(_vm.currentUser.currency) +
                                              " " +
                                              _vm._s(
                                                _vm.formatNumber(
                                                  detail.price,
                                                  2
                                                )
                                              )
                                          ),
                                        ]),
                                        _vm._v(" "),
                                        _c("td", [
                                          _vm._v(
                                            _vm._s(_vm.currentUser.currency) +
                                              " " +
                                              _vm._s(
                                                _vm.formatNumber(
                                                  detail.DiscountNet,
                                                  2
                                                )
                                              )
                                          ),
                                        ]),
                                        _vm._v(" "),
                                        _c("td", [
                                          _vm._v(
                                            _vm._s(_vm.currentUser.currency) +
                                              " " +
                                              _vm._s(
                                                _vm.formatNumber(detail.taxe, 2)
                                              )
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
                          ]),
                          _vm._v(" "),
                          _c(
                            "div",
                            { staticClass: "offset-md-9 col-md-3 mt-4" },
                            [
                              _c(
                                "table",
                                { staticClass: "table table-striped table-sm" },
                                [
                                  _c("tbody", [
                                    _c("tr", [
                                      _c("td", [
                                        _vm._v(_vm._s(_vm.$t("OrderTax"))),
                                      ]),
                                      _vm._v(" "),
                                      _c("td", [
                                        _c("span", [
                                          _vm._v(
                                            _vm._s(_vm.currentUser.currency) +
                                              " " +
                                              _vm._s(
                                                _vm.sale.TaxNet.toFixed(2)
                                              ) +
                                              " (" +
                                              _vm._s(
                                                _vm.formatNumber(
                                                  _vm.sale.tax_rate,
                                                  2
                                                )
                                              ) +
                                              " %)"
                                          ),
                                        ]),
                                      ]),
                                    ]),
                                    _vm._v(" "),
                                    _c("tr", [
                                      _c("td", [
                                        _vm._v(_vm._s(_vm.$t("Discount"))),
                                      ]),
                                      _vm._v(" "),
                                      _c("td", [
                                        _vm._v(
                                          _vm._s(_vm.currentUser.currency) +
                                            " " +
                                            _vm._s(_vm.sale.discount.toFixed(2))
                                        ),
                                      ]),
                                    ]),
                                    _vm._v(" "),
                                    _c("tr", [
                                      _c("td", [
                                        _vm._v(_vm._s(_vm.$t("Shipping"))),
                                      ]),
                                      _vm._v(" "),
                                      _c("td", [
                                        _vm._v(
                                          _vm._s(_vm.currentUser.currency) +
                                            " " +
                                            _vm._s(_vm.sale.shipping.toFixed(2))
                                        ),
                                      ]),
                                    ]),
                                    _vm._v(" "),
                                    _c("tr", [
                                      _c("td", [
                                        _c(
                                          "span",
                                          { staticClass: "font-weight-bold" },
                                          [_vm._v(_vm._s(_vm.$t("Total")))]
                                        ),
                                      ]),
                                      _vm._v(" "),
                                      _c("td", [
                                        _c(
                                          "span",
                                          { staticClass: "font-weight-bold" },
                                          [
                                            _vm._v(
                                              _vm._s(_vm.currentUser.currency) +
                                                " " +
                                                _vm._s(_vm.sale.GrandTotal)
                                            ),
                                          ]
                                        ),
                                      ]),
                                    ]),
                                    _vm._v(" "),
                                    _c("tr", [
                                      _c("td", [
                                        _c(
                                          "span",
                                          { staticClass: "font-weight-bold" },
                                          [_vm._v(_vm._s(_vm.$t("Paid")))]
                                        ),
                                      ]),
                                      _vm._v(" "),
                                      _c("td", [
                                        _c(
                                          "span",
                                          { staticClass: "font-weight-bold" },
                                          [
                                            _vm._v(
                                              _vm._s(_vm.currentUser.currency) +
                                                " " +
                                                _vm._s(_vm.sale.paid_amount)
                                            ),
                                          ]
                                        ),
                                      ]),
                                    ]),
                                    _vm._v(" "),
                                    _c("tr", [
                                      _c("td", [
                                        _c(
                                          "span",
                                          { staticClass: "font-weight-bold" },
                                          [_vm._v(_vm._s(_vm.$t("Due")))]
                                        ),
                                      ]),
                                      _vm._v(" "),
                                      _c("td", [
                                        _c(
                                          "span",
                                          { staticClass: "font-weight-bold" },
                                          [
                                            _vm._v(
                                              _vm._s(_vm.currentUser.currency) +
                                                " " +
                                                _vm._s(_vm.sale.due)
                                            ),
                                          ]
                                        ),
                                      ]),
                                    ]),
                                  ]),
                                ]
                              ),
                            ]
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
        : _vm._e(),
    ],
    1
  )
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./resources/src/views/app/pages/sales/detail_sale.vue":
/*!*************************************************************!*\
  !*** ./resources/src/views/app/pages/sales/detail_sale.vue ***!
  \*************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _detail_sale_vue_vue_type_template_id_9b055236___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./detail_sale.vue?vue&type=template&id=9b055236& */ "./resources/src/views/app/pages/sales/detail_sale.vue?vue&type=template&id=9b055236&");
/* harmony import */ var _detail_sale_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./detail_sale.vue?vue&type=script&lang=js& */ "./resources/src/views/app/pages/sales/detail_sale.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _detail_sale_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _detail_sale_vue_vue_type_template_id_9b055236___WEBPACK_IMPORTED_MODULE_0__["render"],
  _detail_sale_vue_vue_type_template_id_9b055236___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/src/views/app/pages/sales/detail_sale.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/src/views/app/pages/sales/detail_sale.vue?vue&type=script&lang=js&":
/*!**************************************************************************************!*\
  !*** ./resources/src/views/app/pages/sales/detail_sale.vue?vue&type=script&lang=js& ***!
  \**************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_detail_sale_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../node_modules/babel-loader/lib??ref--4-0!../../../../../../node_modules/vue-loader/lib??vue-loader-options!./detail_sale.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/src/views/app/pages/sales/detail_sale.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_detail_sale_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/src/views/app/pages/sales/detail_sale.vue?vue&type=template&id=9b055236&":
/*!********************************************************************************************!*\
  !*** ./resources/src/views/app/pages/sales/detail_sale.vue?vue&type=template&id=9b055236& ***!
  \********************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_detail_sale_vue_vue_type_template_id_9b055236___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../../node_modules/vue-loader/lib??vue-loader-options!./detail_sale.vue?vue&type=template&id=9b055236& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/src/views/app/pages/sales/detail_sale.vue?vue&type=template&id=9b055236&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_detail_sale_vue_vue_type_template_id_9b055236___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_detail_sale_vue_vue_type_template_id_9b055236___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ })

}]);