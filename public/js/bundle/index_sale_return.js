(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["index_sale_return"],{

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/src/views/app/pages/sale_return/index_sale_return.vue?vue&type=script&lang=js&":
/*!**********************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/src/views/app/pages/sale_return/index_sale_return.vue?vue&type=script&lang=js& ***!
  \**********************************************************************************************************************************************************************************************/
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
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
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
    title: "Sale Return"
  },
  data: function data() {
    return {
      paymentProcessing: false,
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
      submitStatus: null,
      showDropdown: false,
      EditPaiementMode: false,
      Filter_Client: "",
      Filter_status: "",
      Filter_Payment: "",
      Filter_Ref: "",
      Filter_date: "",
      Filter_warehouse: "",
      due: 0,
      return_sale_due: '',
      sales_return: [],
      sale_return: {},
      customers: [],
      warehouses: [],
      sale_return_id: "",
      factures: [],
      limit: "10",
      facture: {
        id: "",
        sale_return_id: "",
        date: "",
        Ref: "",
        montant: "",
        received_amount: "",
        Reglement: "",
        notes: ""
      },
      email: {
        to: "",
        subject: "",
        message: ""
      },
      emailPayment: {
        id: "",
        to: "",
        subject: "",
        message: "",
        client_name: "",
        Ref: ""
      }
    };
  },
  mounted: function mounted() {
    var _this = this;

    this.$root.$on("bv::dropdown::show", function (bvEvent) {
      _this.showDropdown = true;
    });
    this.$root.$on("bv::dropdown::hide", function (bvEvent) {
      _this.showDropdown = false;
    });
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
        label: this.$t("Customer"),
        field: "client_name",
        tdClass: "text-left",
        thClass: "text-left"
      }, {
        label: this.$t("warehouse"),
        field: "warehouse_name",
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
        tdClass: "text-left",
        thClass: "text-left"
      }, {
        label: this.$t("Paid"),
        field: "paid_amount",
        tdClass: "text-left",
        thClass: "text-left"
      }, {
        label: this.$t("Due"),
        field: "due",
        tdClass: "text-left",
        thClass: "text-left"
      }, {
        label: this.$t("PaymentStatus"),
        field: "payment_status",
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
        this.GET_Sales_Return(currentPage);
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
        this.GET_Sales_Return(1);
      }
    },
    //---- Event Select Rows
    selectionChanged: function selectionChanged(_ref3) {
      var _this2 = this;

      var selectedRows = _ref3.selectedRows;
      this.selectedIds = [];
      selectedRows.forEach(function (row, index) {
        _this2.selectedIds.push(row.id);
      });
    },
    //---- Event Sort change
    onSortChange: function onSortChange(params) {
      var field = "";

      if (params[0].field == "client_name") {
        field = "client_id";
      } else if (params[0].field == "warehouse_name") {
        field = "warehouse_id";
      } else {
        field = params[0].field;
      }

      this.updateParams({
        sort: {
          type: params[0].type,
          field: field
        }
      });
      this.GET_Sales_Return(this.serverParams.page);
    },
    //---- Event Search
    onSearch: function onSearch(value) {
      this.search = value.searchTerm;
      this.GET_Sales_Return(this.serverParams.page);
    },
    //------ Validate Form Submit_Payment
    Submit_Payment: function Submit_Payment() {
      var _this3 = this;

      this.$refs.Add_payment.validate().then(function (success) {
        if (!success) {
          return;
        } else if (_this3.facture.montant > _this3.facture.received_amount) {
          _this3.makeToast("warning", _this3.$t("Paying_amount_is_greater_than_Received_amount"), _this3.$t("Warning"));

          _this3.facture.received_amount = 0;
        } else if (_this3.facture.montant > _this3.due) {
          _this3.makeToast("warning", _this3.$t("Paying_amount_is_greater_than_Grand_Total"), _this3.$t("Warning"));

          _this3.facture.montant = 0;
        } else if (!_this3.EditPaiementMode) {
          _this3.Create_Payment();
        } else {
          _this3.Update_Payment();
        }
      });
    },
    //---------- keyup paid Amount
    Verified_paidAmount: function Verified_paidAmount() {
      if (isNaN(this.facture.montant)) {
        this.facture.montant = 0;
      } else if (this.facture.montant > this.facture.received_amount) {
        this.makeToast("warning", this.$t("Paying_amount_is_greater_than_Received_amount"), this.$t("Warning"));
        this.facture.montant = 0;
      } else if (this.facture.montant > this.due) {
        this.makeToast("warning", this.$t("Paying_amount_is_greater_than_Grand_Total"), this.$t("Warning"));
        this.facture.montant = 0;
      }
    },
    //---------- keyup Received Amount
    Verified_Received_Amount: function Verified_Received_Amount() {
      if (isNaN(this.facture.received_amount)) {
        this.facture.received_amount = 0;
      }
    },
    //---Validate State Fields
    getValidationState: function getValidationState(_ref4) {
      var dirty = _ref4.dirty,
          validated = _ref4.validated,
          _ref4$valid = _ref4.valid,
          valid = _ref4$valid === void 0 ? null : _ref4$valid;
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
    //------ Reset Filter
    Reset_Filter: function Reset_Filter() {
      this.search = "";
      this.Filter_Client = "";
      this.Filter_status = "";
      this.Filter_Payment = "";
      this.Filter_Ref = "";
      this.Filter_date = "";
      this.Filter_warehouse = "", this.GET_Sales_Return(this.serverParams.page);
    },
    //---------------------------------------- Set To Strings-------------------------\\
    setToStrings: function setToStrings() {
      // Simply replaces null values with strings=''s
      if (this.Filter_Client === null) {
        this.Filter_Client = "";
      } else if (this.Filter_warehouse === null) {
        this.Filter_warehouse = "";
      } else if (this.Filter_status === null) {
        this.Filter_status = "";
      } else if (this.Filter_Payment === null) {
        this.Filter_Payment = "";
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
    //----------------------------- Invoice Return PDF------------------------------\\
    Return_PDF: function Return_PDF(sale_return, id) {
      // Start the progress bar.
      nprogress__WEBPACK_IMPORTED_MODULE_1___default.a.start();
      nprogress__WEBPACK_IMPORTED_MODULE_1___default.a.set(0.1);
      axios.get("Return_sale_PDF/" + id, {
        responseType: "blob",
        // important
        headers: {
          "Content-Type": "application/json"
        }
      }).then(function (response) {
        var url = window.URL.createObjectURL(new Blob([response.data]));
        var link = document.createElement("a");
        link.href = url;
        link.setAttribute("download", "Return-Sale-" + sale_return.Ref + ".pdf");
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
    //------------------------ Payment Sale Return PDF ------------------------------\\
    Payment_Return_PDF: function Payment_Return_PDF(facture, id) {
      // Start the progress bar.
      nprogress__WEBPACK_IMPORTED_MODULE_1___default.a.start();
      nprogress__WEBPACK_IMPORTED_MODULE_1___default.a.set(0.1);
      axios.get("payment_Return_sale_PDF/" + id, {
        responseType: "blob",
        // important
        headers: {
          "Content-Type": "application/json"
        }
      }).then(function (response) {
        var url = window.URL.createObjectURL(new Blob([response.data]));
        var link = document.createElement("a");
        link.href = url;
        link.setAttribute("download", "Payment-" + facture.Ref + ".pdf");
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
    //----------------------------------------- Sales Return PDF -----------------------\\
    Sale_Return_PDF: function Sale_Return_PDF() {
      var self = this;
      var pdf = new jspdf__WEBPACK_IMPORTED_MODULE_2__["default"]("p", "pt");
      var columns = [{
        title: "Ref",
        dataKey: "Ref"
      }, {
        title: "Client",
        dataKey: "client_name"
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
      pdf.autoTable(columns, self.sales_return);
      pdf.text("Sales Return List", 40, 25);
      pdf.save("Sales Return.pdf");
    },
    //--------------------------------------Returns Excel -----------------------\\
    Sale_Return_Excel: function Sale_Return_Excel() {
      // Start the progress bar.
      nprogress__WEBPACK_IMPORTED_MODULE_1___default.a.start();
      nprogress__WEBPACK_IMPORTED_MODULE_1___default.a.set(0.1);
      axios.get("returns/sale/export/Excel", {
        responseType: "blob",
        // important
        headers: {
          "Content-Type": "application/json"
        }
      }).then(function (response) {
        var url = window.URL.createObjectURL(new Blob([response.data]));
        var link = document.createElement("a");
        link.href = url;
        link.setAttribute("download", "Sales_Return.xlsx");
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
    Number_Order_Payment: function Number_Order_Payment() {
      var _this4 = this;

      axios.get("payment/returns_sale/Number/order").then(function (_ref5) {
        var data = _ref5.data;
        return _this4.facture.Ref = data;
      });
    },
    //----------------------------------- Add Payment Sale Return ------------------------------\\
    New_Payment: function New_Payment(sale_return) {
      var _this5 = this;

      if (sale_return.payment_status == "paid") {
        this.$swal({
          icon: "error",
          title: "Oops...",
          text: this.$t("PaymentComplete")
        });
      } else {
        // Start the progress bar.
        nprogress__WEBPACK_IMPORTED_MODULE_1___default.a.start();
        nprogress__WEBPACK_IMPORTED_MODULE_1___default.a.set(0.1);
        this.reset_form_payment();
        this.EditPaiementMode = false;
        this.sale_return = sale_return;
        this.facture.date = new Date().toISOString().slice(0, 10);
        this.Number_Order_Payment();
        this.facture.montant = parseFloat(sale_return.due);
        this.facture.Reglement = 'Cash';
        this.facture.received_amount = parseFloat(sale_return.due);
        this.due = parseFloat(sale_return.due);
        setTimeout(function () {
          // Complete the animation of the  progress bar.
          nprogress__WEBPACK_IMPORTED_MODULE_1___default.a.done();

          _this5.$bvModal.show("Add_Payment");
        }, 500);
      }
    },
    //------------------------------------Edit Payment ------------------------------\\
    Edit_Payment: function Edit_Payment(facture) {
      var _this6 = this;

      // Start the progress bar.
      nprogress__WEBPACK_IMPORTED_MODULE_1___default.a.start();
      nprogress__WEBPACK_IMPORTED_MODULE_1___default.a.set(0.1);
      this.reset_form_payment();
      this.EditPaiementMode = true;
      this.facture.id = facture.id;
      this.facture.Ref = facture.Ref;
      this.facture.Reglement = facture.Reglement;
      this.facture.date = facture.date;
      this.facture.change = facture.change;
      this.facture.montant = parseFloat(facture.montant);
      this.facture.received_amount = parseFloat(facture.montant + facture.change);
      this.facture.notes = facture.notes;
      this.due = parseFloat(this.return_sale_due) + facture.montant;
      setTimeout(function () {
        // Complete the animation of the  progress bar.
        nprogress__WEBPACK_IMPORTED_MODULE_1___default.a.done();

        _this6.$bvModal.show("Add_Payment");
      }, 1000);
    },
    //------------------------------------ reset form payment  ------------------------------\\
    reset_form_payment: function reset_form_payment() {
      this.due = 0;
      this.facture = {
        id: "",
        sale_return_id: "",
        date: "",
        Ref: "",
        montant: "",
        received_amount: "",
        Reglement: "",
        notes: ""
      };
    },
    //-------------------------------Show All Payment with Sale Return ---------------------\\
    Show_Payments: function Show_Payments(id, sale_return) {
      // Start the progress bar.
      nprogress__WEBPACK_IMPORTED_MODULE_1___default.a.start();
      nprogress__WEBPACK_IMPORTED_MODULE_1___default.a.set(0.1);
      this.reset_form_payment();
      this.sale_return_id = id;
      this.sale_return = sale_return;
      this.Get_Payments(id);
    },
    //----------------------------------------- Get Payments -------------------------------\\
    Get_Payments: function Get_Payments(id) {
      var _this7 = this;

      axios.get("returns/sale/payment/" + id).then(function (response) {
        _this7.factures = response.data.payments;
        _this7.return_sale_due = response.data.due;
        setTimeout(function () {
          // Complete the animation of the  progress bar.
          nprogress__WEBPACK_IMPORTED_MODULE_1___default.a.done();

          _this7.$bvModal.show("Show_payment");
        }, 500);
      })["catch"](function () {
        // Complete the animation of the  progress bar.
        setTimeout(function () {
          return nprogress__WEBPACK_IMPORTED_MODULE_1___default.a.done();
        }, 500);
      });
    },
    //---------SMS notification
    Payment_SaleReturn_SMS: function Payment_SaleReturn_SMS(facture) {
      var _this8 = this;

      // Start the progress bar.
      nprogress__WEBPACK_IMPORTED_MODULE_1___default.a.start();
      nprogress__WEBPACK_IMPORTED_MODULE_1___default.a.set(0.1);
      axios.post("payment/returns_sale/send/sms", {
        id: facture.id
      }).then(function (response) {
        // Complete the animation of the  progress bar.
        setTimeout(function () {
          return nprogress__WEBPACK_IMPORTED_MODULE_1___default.a.done();
        }, 500);

        _this8.makeToast("success", _this8.$t("Send_SMS"), _this8.$t("Success"));
      })["catch"](function (error) {
        // Complete the animation of the  progress bar.
        setTimeout(function () {
          return nprogress__WEBPACK_IMPORTED_MODULE_1___default.a.done();
        }, 500);

        _this8.makeToast("danger", _this8.$t("sms_config_invalid"), _this8.$t("Failed"));
      });
    },
    //--------------------------------------------- Send Payment Sale Return to Email -------------------------------\\
    EmailPayment: function EmailPayment(facture, sale_return) {
      this.emailPayment.id = facture.id;
      this.emailPayment.to = sale_return.client_email;
      this.emailPayment.Ref = facture.Ref;
      this.emailPayment.client_name = sale_return.client_name;
      this.Send_Email_Payment();
    },
    Send_Email_Payment: function Send_Email_Payment() {
      var _this9 = this;

      // Start the progress bar.
      nprogress__WEBPACK_IMPORTED_MODULE_1___default.a.start();
      nprogress__WEBPACK_IMPORTED_MODULE_1___default.a.set(0.1);
      axios.post("payment/returns_sale/send/email", {
        id: this.emailPayment.id,
        to: this.emailPayment.to,
        client_name: this.emailPayment.client_name,
        Ref: this.emailPayment.Ref
      }).then(function (response) {
        // Complete the animation of the  progress bar.
        setTimeout(function () {
          return nprogress__WEBPACK_IMPORTED_MODULE_1___default.a.done();
        }, 500);

        _this9.makeToast("success", _this9.$t("Send.TitleEmail"), _this9.$t("Success"));
      })["catch"](function (error) {
        // Complete the animation of the  progress bar.
        setTimeout(function () {
          return nprogress__WEBPACK_IMPORTED_MODULE_1___default.a.done();
        }, 500);

        _this9.makeToast("danger", _this9.$t("SMTPIncorrect"), _this9.$t("Failed"));
      });
    },
    //--------------------- Send Return in Email ------------------------\\
    Sale_Return_Email: function Sale_Return_Email(sale_return) {
      this.email.to = sale_return.client_email;
      this.email.Return_Ref = sale_return.Ref;
      this.email.client_name = sale_return.client_name;
      this.Send_Email(sale_return.id);
    },
    Send_Email: function Send_Email(id) {
      var _this10 = this;

      // Start the progress bar.
      nprogress__WEBPACK_IMPORTED_MODULE_1___default.a.start();
      nprogress__WEBPACK_IMPORTED_MODULE_1___default.a.set(0.1);
      axios.post("returns/sale/send/email", {
        id: id,
        to: this.email.to,
        client_name: this.email.client_name,
        Ref: this.email.Return_Ref
      }).then(function (response) {
        // Complete the animation of the  progress bar.
        setTimeout(function () {
          return nprogress__WEBPACK_IMPORTED_MODULE_1___default.a.done();
        }, 500);

        _this10.makeToast("success", _this10.$t("Send.TitleEmail"), _this10.$t("Success"));
      })["catch"](function (error) {
        // Complete the animation of the  progress bar.
        setTimeout(function () {
          return nprogress__WEBPACK_IMPORTED_MODULE_1___default.a.done();
        }, 500);

        _this10.makeToast("danger", _this10.$t("SMTPIncorrect"), _this10.$t("Failed"));
      });
    },
    //--------------------- Get All Returns ------------------------\\
    GET_Sales_Return: function GET_Sales_Return(page) {
      var _this11 = this;

      // Start the progress bar.
      nprogress__WEBPACK_IMPORTED_MODULE_1___default.a.start();
      nprogress__WEBPACK_IMPORTED_MODULE_1___default.a.set(0.1);
      this.setToStrings();
      axios.get("returns/sale?page=" + page + "&Ref=" + this.Filter_Ref + "&date=" + this.Filter_date + "&client_id=" + this.Filter_Client + "&statut=" + this.Filter_status + "&warehouse_id=" + this.Filter_warehouse + "&payment_statut=" + this.Filter_Payment + "&SortField=" + this.serverParams.sort.field + "&SortType=" + this.serverParams.sort.type + "&search=" + this.search + "&limit=" + this.limit).then(function (response) {
        _this11.sales_return = response.data.sale_Return;
        _this11.customers = response.data.customers;
        _this11.warehouses = response.data.warehouses;
        _this11.totalRows = response.data.totalRows; // Complete the animation of theprogress bar.

        nprogress__WEBPACK_IMPORTED_MODULE_1___default.a.done();
        _this11.isLoading = false;
      })["catch"](function (response) {
        // Complete the animation of theprogress bar.
        nprogress__WEBPACK_IMPORTED_MODULE_1___default.a.done();
        setTimeout(function () {
          _this11.isLoading = false;
        }, 500);
      });
    },
    //---------------------  Remove Sale Return ------------------------\\
    Remove_Return: function Remove_Return(id) {
      var _this12 = this;

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
          axios["delete"]("returns/sale/" + id).then(function () {
            _this12.$swal(_this12.$t("Delete.Deleted"), _this12.$t("Delete.ReturnDeleted"), "success");

            Fire.$emit("Delete_Return_sale");
          })["catch"](function () {
            // Complete the animation of the  progress bar.
            setTimeout(function () {
              return nprogress__WEBPACK_IMPORTED_MODULE_1___default.a.done();
            }, 500);

            _this12.$swal(_this12.$t("Delete.Failed"), _this12.$t("Delete.Therewassomethingwronge"), "warning");
          });
        }
      });
    },
    //---- Delete Sale Return by selection
    delete_by_selected: function delete_by_selected() {
      var _this13 = this;

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
          axios.post("returns/sale/delete/by_selection", {
            selectedIds: _this13.selectedIds
          }).then(function () {
            _this13.$swal(_this13.$t("Delete.Deleted"), _this13.$t("Delete.ReturnDeleted"), "success");

            Fire.$emit("Delete_Return_sale");
          })["catch"](function () {
            // Complete the animation of theprogress bar.
            setTimeout(function () {
              return nprogress__WEBPACK_IMPORTED_MODULE_1___default.a.done();
            }, 500);

            _this13.$swal(_this13.$t("Delete.Failed"), _this13.$t("Delete.Therewassomethingwronge"), "warning");
          });
        }
      });
    },
    //----------------------------------Create Payment Sale Return ------------------------------\\
    Create_Payment: function Create_Payment() {
      var _this14 = this;

      this.paymentProcessing = true;
      nprogress__WEBPACK_IMPORTED_MODULE_1___default.a.start();
      nprogress__WEBPACK_IMPORTED_MODULE_1___default.a.set(0.1);
      axios.post("payment/returns_sale", {
        sale_return_id: this.sale_return.id,
        date: this.facture.date,
        montant: parseFloat(this.facture.montant).toFixed(2),
        received_amount: parseFloat(this.facture.received_amount).toFixed(2),
        change: parseFloat(this.facture.received_amount - this.facture.montant).toFixed(2),
        Reglement: this.facture.Reglement,
        notes: this.facture.notes
      }).then(function (response) {
        _this14.paymentProcessing = false;
        Fire.$emit("Create_payment_Return_sale");

        _this14.makeToast("success", _this14.$t("Create.TitlePayment"), _this14.$t("Success"));
      })["catch"](function (error) {
        _this14.paymentProcessing = false;
        nprogress__WEBPACK_IMPORTED_MODULE_1___default.a.done();
      });
    },
    //---------------------------------------- Update Payment Sale Return ------------------------------\\
    Update_Payment: function Update_Payment() {
      var _this15 = this;

      this.paymentProcessing = true;
      nprogress__WEBPACK_IMPORTED_MODULE_1___default.a.start();
      nprogress__WEBPACK_IMPORTED_MODULE_1___default.a.set(0.1);
      axios.put("payment/returns_sale/" + this.facture.id, {
        sale_return_id: this.sale_return.id,
        date: this.facture.date,
        montant: parseFloat(this.facture.montant).toFixed(2),
        received_amount: parseFloat(this.facture.received_amount).toFixed(2),
        change: parseFloat(this.facture.received_amount - this.facture.montant).toFixed(2),
        Reglement: this.facture.Reglement,
        notes: this.facture.notes
      }).then(function (response) {
        _this15.paymentProcessing = false;
        Fire.$emit("Update_payment_Return_sale");

        _this15.makeToast("success", _this15.$t("Update.TitlePayment"), _this15.$t("Success"));
      })["catch"](function (error) {
        _this15.paymentProcessing = false;
        nprogress__WEBPACK_IMPORTED_MODULE_1___default.a.done();
      });
    },
    //----------------------------------------- Remove Payment Return ------------------------------\\
    Remove_Payment: function Remove_Payment(id) {
      var _this16 = this;

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
          axios["delete"]("payment/returns_sale/" + id).then(function () {
            _this16.$swal(_this16.$t("Delete.Deleted"), _this16.$t("Delete.PaymentDeleted"));

            Fire.$emit("Delete_payment_Return_sale");
          })["catch"](function () {
            // Complete the animation of the  progress bar.
            setTimeout(function () {
              return nprogress__WEBPACK_IMPORTED_MODULE_1___default.a.done();
            }, 500);

            _this16.$swal(_this16.$t("Delete.Failed"), _this16.$t("Delete.Therewassomethingwronge"), "warning");
          });
        }
      });
    }
  },
  //End Methods
  //---------------------------------- Created Function -----------------------------\\
  created: function created() {
    var _this17 = this;

    this.GET_Sales_Return(1);
    Fire.$on("Create_payment_Return_sale", function () {
      setTimeout(function () {
        _this17.GET_Sales_Return(_this17.serverParams.page); // Complete the animation of the  progress bar.


        nprogress__WEBPACK_IMPORTED_MODULE_1___default.a.done();

        _this17.$bvModal.hide("Add_Payment");
      }, 500);
    });
    Fire.$on("Update_payment_Return_sale", function () {
      setTimeout(function () {
        _this17.Get_Payments(_this17.sale_return_id);

        _this17.GET_Sales_Return(_this17.serverParams.page); // Complete the animation of the  progress bar.


        nprogress__WEBPACK_IMPORTED_MODULE_1___default.a.done();

        _this17.$bvModal.hide("Add_Payment");
      }, 500);
    });
    Fire.$on("Delete_payment_Return_sale", function () {
      setTimeout(function () {
        _this17.Get_Payments(_this17.sale_return_id);

        _this17.GET_Sales_Return(_this17.serverParams.page); // Complete the animation of the  progress bar.


        nprogress__WEBPACK_IMPORTED_MODULE_1___default.a.done();
      }, 500);
    });
    Fire.$on("Delete_Return_sale", function () {
      setTimeout(function () {
        _this17.GET_Sales_Return(_this17.serverParams.page); // Complete the animation of the  progress bar.


        nprogress__WEBPACK_IMPORTED_MODULE_1___default.a.done();
      }, 500);
    });
  }
});

/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/src/views/app/pages/sale_return/index_sale_return.vue?vue&type=template&id=c82b36f2&":
/*!**************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/src/views/app/pages/sale_return/index_sale_return.vue?vue&type=template&id=c82b36f2& ***!
  \**************************************************************************************************************************************************************************************************************************************/
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
        attrs: { page: _vm.$t("ListReturns"), folder: _vm.$t("SalesReturn") },
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
                    rows: _vm.sales_return,
                    "search-options": {
                      placeholder: _vm.$t("Search_this_table"),
                      enabled: true,
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
                    styleClass: _vm.showDropdown
                      ? "tableOne table-hover vgt-table full-height"
                      : "tableOne table-hover vgt-table non-height",
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
                            ? _c("span", [
                                _c(
                                  "div",
                                  [
                                    _c(
                                      "b-dropdown",
                                      {
                                        attrs: {
                                          id: "dropdown-left",
                                          variant: "link",
                                          text: "Left align",
                                          "toggle-class":
                                            "text-decoration-none",
                                          size: "lg",
                                          "no-caret": "",
                                        },
                                        scopedSlots: _vm._u(
                                          [
                                            {
                                              key: "button-content",
                                              fn: function () {
                                                return [
                                                  _c("span", {
                                                    staticClass:
                                                      "_dot _r_block-dot bg-dark",
                                                  }),
                                                  _vm._v(" "),
                                                  _c("span", {
                                                    staticClass:
                                                      "_dot _r_block-dot bg-dark",
                                                  }),
                                                  _vm._v(" "),
                                                  _c("span", {
                                                    staticClass:
                                                      "_dot _r_block-dot bg-dark",
                                                  }),
                                                ]
                                              },
                                              proxy: true,
                                            },
                                          ],
                                          null,
                                          true
                                        ),
                                      },
                                      [
                                        _vm._v(" "),
                                        _c(
                                          "b-navbar-nav",
                                          [
                                            _c(
                                              "b-dropdown-item",
                                              {
                                                attrs: {
                                                  title: "Show",
                                                  to:
                                                    "/app/sale_return/detail/" +
                                                    props.row.id,
                                                },
                                              },
                                              [
                                                _c("i", {
                                                  staticClass:
                                                    "nav-icon i-Eye font-weight-bold mr-2",
                                                }),
                                                _vm._v(
                                                  "\n                  " +
                                                    _vm._s(
                                                      _vm.$t("ReturnDetail")
                                                    ) +
                                                    "\n                "
                                                ),
                                              ]
                                            ),
                                          ],
                                          1
                                        ),
                                        _vm._v(" "),
                                        _vm.currentUserPermissions.includes(
                                          "Sale_Returns_edit"
                                        )
                                          ? _c(
                                              "b-dropdown-item",
                                              {
                                                attrs: {
                                                  title: "Edit",
                                                  to:
                                                    "/app/sale_return/edit/" +
                                                    props.row.id,
                                                },
                                              },
                                              [
                                                _c("i", {
                                                  staticClass:
                                                    "nav-icon i-Pen-2 font-weight-bold mr-2",
                                                }),
                                                _vm._v(
                                                  "\n                " +
                                                    _vm._s(
                                                      _vm.$t("EditReturn")
                                                    ) +
                                                    "\n              "
                                                ),
                                              ]
                                            )
                                          : _vm._e(),
                                        _vm._v(" "),
                                        _vm.currentUserPermissions.includes(
                                          "payment_returns_view"
                                        )
                                          ? _c(
                                              "b-dropdown-item",
                                              {
                                                on: {
                                                  click: function ($event) {
                                                    return _vm.Show_Payments(
                                                      props.row.id,
                                                      props.row
                                                    )
                                                  },
                                                },
                                              },
                                              [
                                                _c("i", {
                                                  staticClass:
                                                    "nav-icon i-Money-Bag font-weight-bold mr-2",
                                                }),
                                                _vm._v(
                                                  "\n                " +
                                                    _vm._s(
                                                      _vm.$t("ShowPayment")
                                                    ) +
                                                    "\n              "
                                                ),
                                              ]
                                            )
                                          : _vm._e(),
                                        _vm._v(" "),
                                        _vm.currentUserPermissions.includes(
                                          "payment_returns_add"
                                        )
                                          ? _c(
                                              "b-dropdown-item",
                                              {
                                                on: {
                                                  click: function ($event) {
                                                    return _vm.New_Payment(
                                                      props.row
                                                    )
                                                  },
                                                },
                                              },
                                              [
                                                _c("i", {
                                                  staticClass:
                                                    "nav-icon i-Add font-weight-bold mr-2",
                                                }),
                                                _vm._v(
                                                  "\n                " +
                                                    _vm._s(
                                                      _vm.$t("AddPayment")
                                                    ) +
                                                    "\n              "
                                                ),
                                              ]
                                            )
                                          : _vm._e(),
                                        _vm._v(" "),
                                        _c(
                                          "b-dropdown-item",
                                          {
                                            attrs: { title: "PDF" },
                                            on: {
                                              click: function ($event) {
                                                return _vm.Return_PDF(
                                                  props.row,
                                                  props.row.id
                                                )
                                              },
                                            },
                                          },
                                          [
                                            _c("i", {
                                              staticClass:
                                                "nav-icon i-File-TXT font-weight-bold mr-2",
                                            }),
                                            _vm._v(
                                              "\n                " +
                                                _vm._s(_vm.$t("DownloadPdf")) +
                                                "\n              "
                                            ),
                                          ]
                                        ),
                                        _vm._v(" "),
                                        _c(
                                          "b-dropdown-item",
                                          {
                                            attrs: { title: "Email" },
                                            on: {
                                              click: function ($event) {
                                                return _vm.Sale_Return_Email(
                                                  props.row,
                                                  props.row.id
                                                )
                                              },
                                            },
                                          },
                                          [
                                            _c("i", {
                                              staticClass:
                                                "nav-icon i-Envelope-2 font-weight-bold mr-2",
                                            }),
                                            _vm._v(
                                              "\n                " +
                                                _vm._s(_vm.$t("EmailReturn")) +
                                                "\n              "
                                            ),
                                          ]
                                        ),
                                        _vm._v(" "),
                                        _vm.currentUserPermissions.includes(
                                          "Sale_Returns_delete"
                                        )
                                          ? _c(
                                              "b-dropdown-item",
                                              {
                                                attrs: { title: "Delete" },
                                                on: {
                                                  click: function ($event) {
                                                    return _vm.Remove_Return(
                                                      props.row.id
                                                    )
                                                  },
                                                },
                                              },
                                              [
                                                _c("i", {
                                                  staticClass:
                                                    "nav-icon i-Close-Window font-weight-bold mr-2",
                                                }),
                                                _vm._v(
                                                  "\n                " +
                                                    _vm._s(
                                                      _vm.$t("DeleteReturn")
                                                    ) +
                                                    "\n              "
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
                              ])
                            : props.column.field == "statut"
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
                                  : _c(
                                      "span",
                                      {
                                        staticClass: "badge badge-outline-info",
                                      },
                                      [_vm._v(_vm._s(_vm.$t("Pending")))]
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
                              return _vm.Sale_Return_PDF()
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
                              return _vm.Sale_Return_Excel()
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
                      _vm.currentUserPermissions.includes("Sale_Returns_add")
                        ? _c(
                            "router-link",
                            {
                              staticClass:
                                "btn-sm btn btn-primary ripple btn-icon m-1",
                              attrs: { to: "/app/sale_return/store" },
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
                              options: _vm.customers.map(function (customers) {
                                return {
                                  label: customers.name,
                                  value: customers.id,
                                }
                              }),
                            },
                            model: {
                              value: _vm.Filter_Client,
                              callback: function ($$v) {
                                _vm.Filter_Client = $$v
                              },
                              expression: "Filter_Client",
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
                        { attrs: { label: _vm.$t("warehouse") } },
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
                                { label: "completed", value: "completed" },
                                { label: "Pending", value: "pending" },
                                { label: "Ordered", value: "ordered" },
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
                    { attrs: { md: "12" } },
                    [
                      _c(
                        "b-form-group",
                        { attrs: { label: _vm.$t("PaymentStatus") } },
                        [
                          _c("v-select", {
                            attrs: {
                              reduce: function (label) {
                                return label.value
                              },
                              placeholder: _vm.$t("Choose_Status"),
                              options: [
                                { label: "Paid", value: "paid" },
                                { label: "partial", value: "partial" },
                                { label: "UnPaid", value: "unpaid" },
                              ],
                            },
                            model: {
                              value: _vm.Filter_Payment,
                              callback: function ($$v) {
                                _vm.Filter_Payment = $$v
                              },
                              expression: "Filter_Payment",
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
                          attrs: { variant: "primary ripple m-1", size: "sm" },
                          on: {
                            click: function ($event) {
                              return _vm.GET_Sales_Return(_vm.serverParams.page)
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
                          attrs: { variant: "danger ripple m-1", size: "sm" },
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
            "hide-footer": "",
            size: "lg",
            id: "Show_payment",
            title: _vm.$t("ShowPayment"),
          },
        },
        [
          _c(
            "b-row",
            [
              _c(
                "b-col",
                {
                  staticClass: "mt-3",
                  attrs: { lg: "12", md: "12", sm: "12" },
                },
                [
                  _c("div", { staticClass: "table-responsive" }, [
                    _c(
                      "table",
                      {
                        staticClass:
                          "table table-hover table-bordered table-md",
                      },
                      [
                        _c("thead", [
                          _c("tr", [
                            _c("th", { attrs: { scope: "col" } }, [
                              _vm._v(_vm._s(_vm.$t("date"))),
                            ]),
                            _vm._v(" "),
                            _c("th", { attrs: { scope: "col" } }, [
                              _vm._v(_vm._s(_vm.$t("Reference"))),
                            ]),
                            _vm._v(" "),
                            _c("th", { attrs: { scope: "col" } }, [
                              _vm._v(_vm._s(_vm.$t("Amount"))),
                            ]),
                            _vm._v(" "),
                            _c("th", { attrs: { scope: "col" } }, [
                              _vm._v(_vm._s(_vm.$t("PayeBy"))),
                            ]),
                            _vm._v(" "),
                            _c("th", { attrs: { scope: "col" } }, [
                              _vm._v(_vm._s(_vm.$t("Action"))),
                            ]),
                          ]),
                        ]),
                        _vm._v(" "),
                        _c(
                          "tbody",
                          [
                            _vm.factures.length <= 0
                              ? _c("tr", [
                                  _c("td", { attrs: { colspan: "5" } }, [
                                    _vm._v(_vm._s(_vm.$t("NodataAvailable"))),
                                  ]),
                                ])
                              : _vm._e(),
                            _vm._v(" "),
                            _vm._l(_vm.factures, function (facture) {
                              return _c("tr", [
                                _c("td", [_vm._v(_vm._s(facture.date))]),
                                _vm._v(" "),
                                _c("td", [_vm._v(_vm._s(facture.Ref))]),
                                _vm._v(" "),
                                _c("td", [
                                  _vm._v(
                                    _vm._s(_vm.currentUser.currency) +
                                      " " +
                                      _vm._s(
                                        _vm.formatNumber(facture.montant, 2)
                                      )
                                  ),
                                ]),
                                _vm._v(" "),
                                _c("td", [_vm._v(_vm._s(facture.Reglement))]),
                                _vm._v(" "),
                                _c("td", [
                                  _c(
                                    "div",
                                    {
                                      staticClass: "btn-group",
                                      attrs: {
                                        role: "group",
                                        "aria-label": "Basic example",
                                      },
                                    },
                                    [
                                      _c(
                                        "span",
                                        {
                                          staticClass:
                                            "btn btn-icon btn-info btn-sm",
                                          attrs: { title: "Print" },
                                          on: {
                                            click: function ($event) {
                                              return _vm.Payment_Return_PDF(
                                                facture,
                                                facture.id
                                              )
                                            },
                                          },
                                        },
                                        [_c("i", { staticClass: "i-Billing" })]
                                      ),
                                      _vm._v(" "),
                                      _vm.currentUserPermissions.includes(
                                        "payment_returns_edit"
                                      )
                                        ? _c(
                                            "span",
                                            {
                                              staticClass:
                                                "btn btn-icon btn-success btn-sm",
                                              attrs: { title: "Edit" },
                                              on: {
                                                click: function ($event) {
                                                  return _vm.Edit_Payment(
                                                    facture
                                                  )
                                                },
                                              },
                                            },
                                            [
                                              _c("i", {
                                                staticClass: "i-Pen-2",
                                              }),
                                            ]
                                          )
                                        : _vm._e(),
                                      _vm._v(" "),
                                      _c(
                                        "span",
                                        {
                                          staticClass:
                                            "btn btn-icon btn-primary btn-sm",
                                          attrs: { title: "Email" },
                                          on: {
                                            click: function ($event) {
                                              return _vm.EmailPayment(
                                                facture,
                                                _vm.sale_return
                                              )
                                            },
                                          },
                                        },
                                        [_c("i", { staticClass: "i-Envelope" })]
                                      ),
                                      _vm._v(" "),
                                      _c(
                                        "span",
                                        {
                                          staticClass:
                                            "btn btn-icon btn-secondary btn-sm",
                                          attrs: { title: "SMS" },
                                          on: {
                                            click: function ($event) {
                                              return _vm.Payment_SaleReturn_SMS(
                                                facture
                                              )
                                            },
                                          },
                                        },
                                        [
                                          _c("i", {
                                            staticClass: "i-Speach-Bubble",
                                          }),
                                        ]
                                      ),
                                      _vm._v(" "),
                                      _vm.currentUserPermissions.includes(
                                        "payment_returns_delete"
                                      )
                                        ? _c(
                                            "span",
                                            {
                                              staticClass:
                                                "btn btn-icon btn-danger btn-sm",
                                              attrs: { title: "Delete" },
                                              on: {
                                                click: function ($event) {
                                                  return _vm.Remove_Payment(
                                                    facture.id
                                                  )
                                                },
                                              },
                                            },
                                            [
                                              _c("i", {
                                                staticClass: "i-Close",
                                              }),
                                            ]
                                          )
                                        : _vm._e(),
                                    ]
                                  ),
                                ]),
                              ])
                            }),
                          ],
                          2
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
      _vm._v(" "),
      _c(
        "validation-observer",
        { ref: "Add_payment" },
        [
          _c(
            "b-modal",
            {
              attrs: {
                "hide-footer": "",
                size: "lg",
                id: "Add_Payment",
                title: _vm.EditPaiementMode
                  ? _vm.$t("EditPayment")
                  : _vm.$t("AddPayment"),
              },
            },
            [
              _c(
                "b-form",
                {
                  on: {
                    submit: function ($event) {
                      $event.preventDefault()
                      return _vm.Submit_Payment($event)
                    },
                  },
                },
                [
                  _c(
                    "b-row",
                    [
                      _c(
                        "b-col",
                        { attrs: { lg: "6", md: "12", sm: "12" } },
                        [
                          _c("validation-provider", {
                            attrs: { name: "date", rules: { required: true } },
                            scopedSlots: _vm._u([
                              {
                                key: "default",
                                fn: function (validationContext) {
                                  return [
                                    _c(
                                      "b-form-group",
                                      { attrs: { label: _vm.$t("date") } },
                                      [
                                        _c("b-form-input", {
                                          attrs: {
                                            label: "date",
                                            state:
                                              _vm.getValidationState(
                                                validationContext
                                              ),
                                            "aria-describedby": "date-feedback",
                                            type: "date",
                                          },
                                          model: {
                                            value: _vm.facture.date,
                                            callback: function ($$v) {
                                              _vm.$set(_vm.facture, "date", $$v)
                                            },
                                            expression: "facture.date",
                                          },
                                        }),
                                        _vm._v(" "),
                                        _c(
                                          "b-form-invalid-feedback",
                                          { attrs: { id: "date-feedback" } },
                                          [
                                            _vm._v(
                                              _vm._s(
                                                validationContext.errors[0]
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
                            ]),
                          }),
                        ],
                        1
                      ),
                      _vm._v(" "),
                      _c(
                        "b-col",
                        { attrs: { lg: "6", md: "12", sm: "12" } },
                        [
                          _c(
                            "b-form-group",
                            { attrs: { label: _vm.$t("Reference") } },
                            [
                              _c("b-form-input", {
                                attrs: {
                                  disabled: "disabled",
                                  label: "Reference",
                                  placeholder: _vm.$t("Reference"),
                                },
                                model: {
                                  value: _vm.facture.Ref,
                                  callback: function ($$v) {
                                    _vm.$set(_vm.facture, "Ref", $$v)
                                  },
                                  expression: "facture.Ref",
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
                        { attrs: { lg: "6", md: "12", sm: "12" } },
                        [
                          _c("validation-provider", {
                            attrs: {
                              name: "Received Amount",
                              rules: { required: true, regex: /^\d*\.?\d*$/ },
                            },
                            scopedSlots: _vm._u([
                              {
                                key: "default",
                                fn: function (validationContext) {
                                  return [
                                    _c(
                                      "b-form-group",
                                      {
                                        attrs: {
                                          label: _vm.$t("Received_Amount"),
                                        },
                                      },
                                      [
                                        _c("b-form-input", {
                                          attrs: {
                                            label: "Received_Amount",
                                            placeholder:
                                              _vm.$t("Received_Amount"),
                                            state:
                                              _vm.getValidationState(
                                                validationContext
                                              ),
                                            "aria-describedby":
                                              "Received_Amount-feedback",
                                          },
                                          on: {
                                            keyup: function ($event) {
                                              return _vm.Verified_Received_Amount(
                                                _vm.facture.received_amount
                                              )
                                            },
                                          },
                                          model: {
                                            value: _vm.facture.received_amount,
                                            callback: function ($$v) {
                                              _vm.$set(
                                                _vm.facture,
                                                "received_amount",
                                                _vm._n($$v)
                                              )
                                            },
                                            expression:
                                              "facture.received_amount",
                                          },
                                        }),
                                        _vm._v(" "),
                                        _c(
                                          "b-form-invalid-feedback",
                                          {
                                            attrs: {
                                              id: "Received_Amount-feedback",
                                            },
                                          },
                                          [
                                            _vm._v(
                                              _vm._s(
                                                validationContext.errors[0]
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
                            ]),
                          }),
                        ],
                        1
                      ),
                      _vm._v(" "),
                      _c(
                        "b-col",
                        { attrs: { lg: "6", md: "12", sm: "12" } },
                        [
                          _c("validation-provider", {
                            attrs: {
                              name: "Amount",
                              rules: { required: true, regex: /^\d*\.?\d*$/ },
                            },
                            scopedSlots: _vm._u([
                              {
                                key: "default",
                                fn: function (validationContext) {
                                  return [
                                    _c(
                                      "b-form-group",
                                      {
                                        attrs: {
                                          label: _vm.$t("Paying_Amount"),
                                        },
                                      },
                                      [
                                        _c("b-form-input", {
                                          attrs: {
                                            label: "Amount",
                                            placeholder:
                                              _vm.$t("Paying_Amount"),
                                            state:
                                              _vm.getValidationState(
                                                validationContext
                                              ),
                                            "aria-describedby":
                                              "Amount-feedback",
                                          },
                                          on: {
                                            keyup: function ($event) {
                                              return _vm.Verified_paidAmount(
                                                _vm.facture.montant
                                              )
                                            },
                                          },
                                          model: {
                                            value: _vm.facture.montant,
                                            callback: function ($$v) {
                                              _vm.$set(
                                                _vm.facture,
                                                "montant",
                                                _vm._n($$v)
                                              )
                                            },
                                            expression: "facture.montant",
                                          },
                                        }),
                                        _vm._v(" "),
                                        _c(
                                          "b-form-invalid-feedback",
                                          { attrs: { id: "Amount-feedback" } },
                                          [
                                            _vm._v(
                                              _vm._s(
                                                validationContext.errors[0]
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
                            ]),
                          }),
                        ],
                        1
                      ),
                      _vm._v(" "),
                      _c("b-col", { attrs: { lg: "6", md: "12", sm: "12" } }, [
                        _c("label", [_vm._v(_vm._s(_vm.$t("Change")) + " :")]),
                        _vm._v(" "),
                        _c("p", { staticClass: "change_amount" }, [
                          _vm._v(
                            _vm._s(
                              parseFloat(
                                _vm.facture.received_amount -
                                  _vm.facture.montant
                              ).toFixed(2)
                            )
                          ),
                        ]),
                      ]),
                      _vm._v(" "),
                      _c(
                        "b-col",
                        { attrs: { lg: "6", md: "12", sm: "12" } },
                        [
                          _c("validation-provider", {
                            attrs: {
                              name: "Payment choice",
                              rules: { required: true },
                            },
                            scopedSlots: _vm._u([
                              {
                                key: "default",
                                fn: function (ref) {
                                  var valid = ref.valid
                                  var errors = ref.errors
                                  return _c(
                                    "b-form-group",
                                    {
                                      attrs: { label: _vm.$t("Paymentchoice") },
                                    },
                                    [
                                      _c("v-select", {
                                        class: {
                                          "is-invalid": !!errors.length,
                                        },
                                        attrs: {
                                          state: errors[0]
                                            ? false
                                            : valid
                                            ? true
                                            : null,
                                          reduce: function (label) {
                                            return label.value
                                          },
                                          placeholder: _vm.$t("PleaseSelect"),
                                          options: [
                                            { label: "Cash", value: "Cash" },
                                            {
                                              label: "credit card",
                                              value: "credit card",
                                            },
                                            {
                                              label: "cheque",
                                              value: "cheque",
                                            },
                                            {
                                              label: "Western Union",
                                              value: "Western Union",
                                            },
                                            {
                                              label: "bank transfer",
                                              value: "bank transfer",
                                            },
                                            { label: "other", value: "other" },
                                          ],
                                        },
                                        on: {
                                          input: _vm.Selected_PaymentMethod,
                                        },
                                        model: {
                                          value: _vm.facture.Reglement,
                                          callback: function ($$v) {
                                            _vm.$set(
                                              _vm.facture,
                                              "Reglement",
                                              $$v
                                            )
                                          },
                                          expression: "facture.Reglement",
                                        },
                                      }),
                                      _vm._v(" "),
                                      _c("b-form-invalid-feedback", [
                                        _vm._v(_vm._s(errors[0])),
                                      ]),
                                    ],
                                    1
                                  )
                                },
                              },
                            ]),
                          }),
                        ],
                        1
                      ),
                      _vm._v(" "),
                      _c(
                        "b-col",
                        {
                          staticClass: "mt-3",
                          attrs: { lg: "12", md: "12", sm: "12" },
                        },
                        [
                          _c(
                            "b-form-group",
                            { attrs: { label: _vm.$t("Note") } },
                            [
                              _c("b-form-textarea", {
                                attrs: {
                                  id: "textarea",
                                  rows: "3",
                                  "max-rows": "6",
                                },
                                model: {
                                  value: _vm.facture.notes,
                                  callback: function ($$v) {
                                    _vm.$set(_vm.facture, "notes", $$v)
                                  },
                                  expression: "facture.notes",
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
                        { staticClass: "mt-3", attrs: { md: "12" } },
                        [
                          _c(
                            "b-button",
                            {
                              attrs: {
                                variant: "primary",
                                type: "submit",
                                disabled: _vm.paymentProcessing,
                              },
                            },
                            [_vm._v(_vm._s(_vm.$t("submit")))]
                          ),
                          _vm._v(" "),
                          _vm.paymentProcessing ? _vm._m(0) : _vm._e(),
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

/***/ "./resources/src/views/app/pages/sale_return/index_sale_return.vue":
/*!*************************************************************************!*\
  !*** ./resources/src/views/app/pages/sale_return/index_sale_return.vue ***!
  \*************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _index_sale_return_vue_vue_type_template_id_c82b36f2___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./index_sale_return.vue?vue&type=template&id=c82b36f2& */ "./resources/src/views/app/pages/sale_return/index_sale_return.vue?vue&type=template&id=c82b36f2&");
/* harmony import */ var _index_sale_return_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./index_sale_return.vue?vue&type=script&lang=js& */ "./resources/src/views/app/pages/sale_return/index_sale_return.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _index_sale_return_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _index_sale_return_vue_vue_type_template_id_c82b36f2___WEBPACK_IMPORTED_MODULE_0__["render"],
  _index_sale_return_vue_vue_type_template_id_c82b36f2___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/src/views/app/pages/sale_return/index_sale_return.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/src/views/app/pages/sale_return/index_sale_return.vue?vue&type=script&lang=js&":
/*!**************************************************************************************************!*\
  !*** ./resources/src/views/app/pages/sale_return/index_sale_return.vue?vue&type=script&lang=js& ***!
  \**************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_index_sale_return_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../node_modules/babel-loader/lib??ref--4-0!../../../../../../node_modules/vue-loader/lib??vue-loader-options!./index_sale_return.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/src/views/app/pages/sale_return/index_sale_return.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_index_sale_return_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/src/views/app/pages/sale_return/index_sale_return.vue?vue&type=template&id=c82b36f2&":
/*!********************************************************************************************************!*\
  !*** ./resources/src/views/app/pages/sale_return/index_sale_return.vue?vue&type=template&id=c82b36f2& ***!
  \********************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_index_sale_return_vue_vue_type_template_id_c82b36f2___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../../node_modules/vue-loader/lib??vue-loader-options!./index_sale_return.vue?vue&type=template&id=c82b36f2& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/src/views/app/pages/sale_return/index_sale_return.vue?vue&type=template&id=c82b36f2&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_index_sale_return_vue_vue_type_template_id_c82b36f2___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_index_sale_return_vue_vue_type_template_id_c82b36f2___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ })

}]);