(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["Orders"],{

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/src/views/app/pages/settings/orders.vue?vue&type=script&lang=js&":
/*!********************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/src/views/app/pages/settings/orders.vue?vue&type=script&lang=js& ***!
  \********************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var nprogress__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! nprogress */ "./node_modules/nprogress/nprogress.js");
/* harmony import */ var nprogress__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(nprogress__WEBPACK_IMPORTED_MODULE_0__);
function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }

function _regeneratorRuntime() { "use strict"; /*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/facebook/regenerator/blob/main/LICENSE */ _regeneratorRuntime = function _regeneratorRuntime() { return exports; }; var exports = {}, Op = Object.prototype, hasOwn = Op.hasOwnProperty, $Symbol = "function" == typeof Symbol ? Symbol : {}, iteratorSymbol = $Symbol.iterator || "@@iterator", asyncIteratorSymbol = $Symbol.asyncIterator || "@@asyncIterator", toStringTagSymbol = $Symbol.toStringTag || "@@toStringTag"; function define(obj, key, value) { return Object.defineProperty(obj, key, { value: value, enumerable: !0, configurable: !0, writable: !0 }), obj[key]; } try { define({}, ""); } catch (err) { define = function define(obj, key, value) { return obj[key] = value; }; } function wrap(innerFn, outerFn, self, tryLocsList) { var protoGenerator = outerFn && outerFn.prototype instanceof Generator ? outerFn : Generator, generator = Object.create(protoGenerator.prototype), context = new Context(tryLocsList || []); return generator._invoke = function (innerFn, self, context) { var state = "suspendedStart"; return function (method, arg) { if ("executing" === state) throw new Error("Generator is already running"); if ("completed" === state) { if ("throw" === method) throw arg; return doneResult(); } for (context.method = method, context.arg = arg;;) { var delegate = context.delegate; if (delegate) { var delegateResult = maybeInvokeDelegate(delegate, context); if (delegateResult) { if (delegateResult === ContinueSentinel) continue; return delegateResult; } } if ("next" === context.method) context.sent = context._sent = context.arg;else if ("throw" === context.method) { if ("suspendedStart" === state) throw state = "completed", context.arg; context.dispatchException(context.arg); } else "return" === context.method && context.abrupt("return", context.arg); state = "executing"; var record = tryCatch(innerFn, self, context); if ("normal" === record.type) { if (state = context.done ? "completed" : "suspendedYield", record.arg === ContinueSentinel) continue; return { value: record.arg, done: context.done }; } "throw" === record.type && (state = "completed", context.method = "throw", context.arg = record.arg); } }; }(innerFn, self, context), generator; } function tryCatch(fn, obj, arg) { try { return { type: "normal", arg: fn.call(obj, arg) }; } catch (err) { return { type: "throw", arg: err }; } } exports.wrap = wrap; var ContinueSentinel = {}; function Generator() {} function GeneratorFunction() {} function GeneratorFunctionPrototype() {} var IteratorPrototype = {}; define(IteratorPrototype, iteratorSymbol, function () { return this; }); var getProto = Object.getPrototypeOf, NativeIteratorPrototype = getProto && getProto(getProto(values([]))); NativeIteratorPrototype && NativeIteratorPrototype !== Op && hasOwn.call(NativeIteratorPrototype, iteratorSymbol) && (IteratorPrototype = NativeIteratorPrototype); var Gp = GeneratorFunctionPrototype.prototype = Generator.prototype = Object.create(IteratorPrototype); function defineIteratorMethods(prototype) { ["next", "throw", "return"].forEach(function (method) { define(prototype, method, function (arg) { return this._invoke(method, arg); }); }); } function AsyncIterator(generator, PromiseImpl) { function invoke(method, arg, resolve, reject) { var record = tryCatch(generator[method], generator, arg); if ("throw" !== record.type) { var result = record.arg, value = result.value; return value && "object" == _typeof(value) && hasOwn.call(value, "__await") ? PromiseImpl.resolve(value.__await).then(function (value) { invoke("next", value, resolve, reject); }, function (err) { invoke("throw", err, resolve, reject); }) : PromiseImpl.resolve(value).then(function (unwrapped) { result.value = unwrapped, resolve(result); }, function (error) { return invoke("throw", error, resolve, reject); }); } reject(record.arg); } var previousPromise; this._invoke = function (method, arg) { function callInvokeWithMethodAndArg() { return new PromiseImpl(function (resolve, reject) { invoke(method, arg, resolve, reject); }); } return previousPromise = previousPromise ? previousPromise.then(callInvokeWithMethodAndArg, callInvokeWithMethodAndArg) : callInvokeWithMethodAndArg(); }; } function maybeInvokeDelegate(delegate, context) { var method = delegate.iterator[context.method]; if (undefined === method) { if (context.delegate = null, "throw" === context.method) { if (delegate.iterator["return"] && (context.method = "return", context.arg = undefined, maybeInvokeDelegate(delegate, context), "throw" === context.method)) return ContinueSentinel; context.method = "throw", context.arg = new TypeError("The iterator does not provide a 'throw' method"); } return ContinueSentinel; } var record = tryCatch(method, delegate.iterator, context.arg); if ("throw" === record.type) return context.method = "throw", context.arg = record.arg, context.delegate = null, ContinueSentinel; var info = record.arg; return info ? info.done ? (context[delegate.resultName] = info.value, context.next = delegate.nextLoc, "return" !== context.method && (context.method = "next", context.arg = undefined), context.delegate = null, ContinueSentinel) : info : (context.method = "throw", context.arg = new TypeError("iterator result is not an object"), context.delegate = null, ContinueSentinel); } function pushTryEntry(locs) { var entry = { tryLoc: locs[0] }; 1 in locs && (entry.catchLoc = locs[1]), 2 in locs && (entry.finallyLoc = locs[2], entry.afterLoc = locs[3]), this.tryEntries.push(entry); } function resetTryEntry(entry) { var record = entry.completion || {}; record.type = "normal", delete record.arg, entry.completion = record; } function Context(tryLocsList) { this.tryEntries = [{ tryLoc: "root" }], tryLocsList.forEach(pushTryEntry, this), this.reset(!0); } function values(iterable) { if (iterable) { var iteratorMethod = iterable[iteratorSymbol]; if (iteratorMethod) return iteratorMethod.call(iterable); if ("function" == typeof iterable.next) return iterable; if (!isNaN(iterable.length)) { var i = -1, next = function next() { for (; ++i < iterable.length;) { if (hasOwn.call(iterable, i)) return next.value = iterable[i], next.done = !1, next; } return next.value = undefined, next.done = !0, next; }; return next.next = next; } } return { next: doneResult }; } function doneResult() { return { value: undefined, done: !0 }; } return GeneratorFunction.prototype = GeneratorFunctionPrototype, define(Gp, "constructor", GeneratorFunctionPrototype), define(GeneratorFunctionPrototype, "constructor", GeneratorFunction), GeneratorFunction.displayName = define(GeneratorFunctionPrototype, toStringTagSymbol, "GeneratorFunction"), exports.isGeneratorFunction = function (genFun) { var ctor = "function" == typeof genFun && genFun.constructor; return !!ctor && (ctor === GeneratorFunction || "GeneratorFunction" === (ctor.displayName || ctor.name)); }, exports.mark = function (genFun) { return Object.setPrototypeOf ? Object.setPrototypeOf(genFun, GeneratorFunctionPrototype) : (genFun.__proto__ = GeneratorFunctionPrototype, define(genFun, toStringTagSymbol, "GeneratorFunction")), genFun.prototype = Object.create(Gp), genFun; }, exports.awrap = function (arg) { return { __await: arg }; }, defineIteratorMethods(AsyncIterator.prototype), define(AsyncIterator.prototype, asyncIteratorSymbol, function () { return this; }), exports.AsyncIterator = AsyncIterator, exports.async = function (innerFn, outerFn, self, tryLocsList, PromiseImpl) { void 0 === PromiseImpl && (PromiseImpl = Promise); var iter = new AsyncIterator(wrap(innerFn, outerFn, self, tryLocsList), PromiseImpl); return exports.isGeneratorFunction(outerFn) ? iter : iter.next().then(function (result) { return result.done ? result.value : iter.next(); }); }, defineIteratorMethods(Gp), define(Gp, toStringTagSymbol, "Generator"), define(Gp, iteratorSymbol, function () { return this; }), define(Gp, "toString", function () { return "[object Generator]"; }), exports.keys = function (object) { var keys = []; for (var key in object) { keys.push(key); } return keys.reverse(), function next() { for (; keys.length;) { var key = keys.pop(); if (key in object) return next.value = key, next.done = !1, next; } return next.done = !0, next; }; }, exports.values = values, Context.prototype = { constructor: Context, reset: function reset(skipTempReset) { if (this.prev = 0, this.next = 0, this.sent = this._sent = undefined, this.done = !1, this.delegate = null, this.method = "next", this.arg = undefined, this.tryEntries.forEach(resetTryEntry), !skipTempReset) for (var name in this) { "t" === name.charAt(0) && hasOwn.call(this, name) && !isNaN(+name.slice(1)) && (this[name] = undefined); } }, stop: function stop() { this.done = !0; var rootRecord = this.tryEntries[0].completion; if ("throw" === rootRecord.type) throw rootRecord.arg; return this.rval; }, dispatchException: function dispatchException(exception) { if (this.done) throw exception; var context = this; function handle(loc, caught) { return record.type = "throw", record.arg = exception, context.next = loc, caught && (context.method = "next", context.arg = undefined), !!caught; } for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i], record = entry.completion; if ("root" === entry.tryLoc) return handle("end"); if (entry.tryLoc <= this.prev) { var hasCatch = hasOwn.call(entry, "catchLoc"), hasFinally = hasOwn.call(entry, "finallyLoc"); if (hasCatch && hasFinally) { if (this.prev < entry.catchLoc) return handle(entry.catchLoc, !0); if (this.prev < entry.finallyLoc) return handle(entry.finallyLoc); } else if (hasCatch) { if (this.prev < entry.catchLoc) return handle(entry.catchLoc, !0); } else { if (!hasFinally) throw new Error("try statement without catch or finally"); if (this.prev < entry.finallyLoc) return handle(entry.finallyLoc); } } } }, abrupt: function abrupt(type, arg) { for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i]; if (entry.tryLoc <= this.prev && hasOwn.call(entry, "finallyLoc") && this.prev < entry.finallyLoc) { var finallyEntry = entry; break; } } finallyEntry && ("break" === type || "continue" === type) && finallyEntry.tryLoc <= arg && arg <= finallyEntry.finallyLoc && (finallyEntry = null); var record = finallyEntry ? finallyEntry.completion : {}; return record.type = type, record.arg = arg, finallyEntry ? (this.method = "next", this.next = finallyEntry.finallyLoc, ContinueSentinel) : this.complete(record); }, complete: function complete(record, afterLoc) { if ("throw" === record.type) throw record.arg; return "break" === record.type || "continue" === record.type ? this.next = record.arg : "return" === record.type ? (this.rval = this.arg = record.arg, this.method = "return", this.next = "end") : "normal" === record.type && afterLoc && (this.next = afterLoc), ContinueSentinel; }, finish: function finish(finallyLoc) { for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i]; if (entry.finallyLoc === finallyLoc) return this.complete(entry.completion, entry.afterLoc), resetTryEntry(entry), ContinueSentinel; } }, "catch": function _catch(tryLoc) { for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i]; if (entry.tryLoc === tryLoc) { var record = entry.completion; if ("throw" === record.type) { var thrown = record.arg; resetTryEntry(entry); } return thrown; } } throw new Error("illegal catch attempt"); }, delegateYield: function delegateYield(iterable, resultName, nextLoc) { return this.delegate = { iterator: values(iterable), resultName: resultName, nextLoc: nextLoc }, "next" === this.method && (this.arg = undefined), ContinueSentinel; } }, exports; }

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
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
    title: "Order"
  },
  data: function data() {
    return {
      isLoading: true,
      SubmitProcessing: false,
      serverParams: {
        columnFilters: {},
        sort: {
          field: "id",
          type: "desc"
        },
        page: 1,
        perPage: 10
      },
      selectedIds: [],
      totalRows: "",
      search: "",
      sales: [],
      user: {},
      data: new FormData(),
      editmode: false,
      orders: [],
      limit: "10",
      order: {
        id: "",
        order_id: "",
        user_id: ""
      }
    };
  },
  computed: {
    columns: function columns() {
      return [{
        label: this.$t("Ref"),
        field: "Ref",
        tdClass: "text-left",
        thClass: "text-left"
      }, {
        label: this.$t("odoo_ref"),
        field: "odoo_ref",
        tdClass: "text-left",
        thClass: "text-left"
      }, {
        label: this.$t("mandob_ref"),
        field: "mandob_ref",
        tdClass: "text-left",
        thClass: "text-left"
      }, {
        label: this.$t("Grand_total"),
        field: "GrandTotal",
        tdClass: "text-left",
        thClass: "text-left"
      }, {
        label: this.$t("paid_cash"),
        field: "paid_cash",
        tdClass: "text-left",
        thClass: "text-left"
      }, {
        label: this.$t("RWT"),
        field: "RWT",
        tdClass: "text-left",
        thClass: "text-left"
      }, {
        label: this.$t("received_time_warehouse"),
        field: "received_time_warehouse",
        tdClass: "text-left",
        thClass: "text-left"
      }, {
        label: this.$t("start_time"),
        field: "start_time",
        tdClass: "text-left",
        thClass: "text-left"
      }, {
        label: this.$t("end_time"),
        field: "end_time",
        tdClass: "text-left",
        thClass: "text-left"
      }, {
        label: this.$t("bill_image"),
        field: "image",
        tdClass: "text-left",
        thClass: "text-left"
      }, {
        label: this.$t("status"),
        field: "status",
        tdClass: "text-left",
        thClass: "text-left"
      }, {
        label: this.$t("payment_type"),
        field: "payment_type",
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
  },
  methods: {
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
        this.Get_Orders(currentPage);
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
        this.Get_Orders(1);
      }
    },
    //---- Event on Sort Change
    onSortChange: function onSortChange(params) {
      this.updateParams({
        sort: {
          type: params[0].type,
          field: params[0].field
        }
      });
      this.Get_Orders(this.serverParams.page);
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
    //---- Event on Search
    onSearch: function onSearch(value) {
      this.search = value.searchTerm;
      this.Get_Orders(this.serverParams.page);
    },
    //---- Validation State Form
    getValidationState: function getValidationState(_ref4) {
      var dirty = _ref4.dirty,
          validated = _ref4.validated,
          _ref4$valid = _ref4.valid,
          valid = _ref4$valid === void 0 ? null : _ref4$valid;
      return dirty || validated ? valid : null;
    },
    //------------- Submit Validation Create & Edit Order
    Submit_Order: function Submit_Order() {
      var _this2 = this;

      this.$refs.Create_order.validate().then(function (success) {
        if (!success) {
          _this2.makeToast("danger", _this2.$t("Please_fill_the_form_correctly"), _this2.$t("Failed"));
        } else {
          if (!_this2.editmode) {
            _this2.Create_Order();
          } else {
            _this2.Update_Order();
          }
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
    //------------------------------ Event Upload Image -------------------------------\
    onFileSelected: function onFileSelected(e) {
      var _this3 = this;

      return _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee() {
        var _yield$_this3$$refs$I, valid;

        return _regeneratorRuntime().wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                _context.next = 2;
                return _this3.$refs.Image.validate(e);

              case 2:
                _yield$_this3$$refs$I = _context.sent;
                valid = _yield$_this3$$refs$I.valid;

                if (valid) {
                  _this3.order.image = e.target.files[0];
                } else {
                  _this3.order.image = "";
                }

              case 5:
              case "end":
                return _context.stop();
            }
          }
        }, _callee);
      }))();
    },
    //------------------------------ Modal (create Order) -------------------------------\
    New_Order: function New_Order() {
      this.reset_Form();
      this.editmode = false;
      this.$bvModal.show("New_order");
    },
    //------------------------------ Modal (Update Order) -------------------------------\
    Edit_Order: function Edit_Order(order) {
      this.Get_Orders(this.serverParams.page);
      this.reset_Form();
      this.order = order;
      this.editmode = true;
      this.$bvModal.show("New_order");
    },
    handleChange: function handleChange(e) {// this.Get_Orders(this.serverParams.page);
    },
    //---------------------------------------- Get All orders-----------------\
    Get_Orders: function Get_Orders(page) {
      var _this4 = this;

      var id = this.$route.params.id; // Start the progress bar.

      nprogress__WEBPACK_IMPORTED_MODULE_0___default.a.start();
      nprogress__WEBPACK_IMPORTED_MODULE_0___default.a.set(0.1);
      axios.get("orders?page=" + page + "&SortField=" + this.serverParams.sort.field + "&SortType=" + this.serverParams.sort.type + "&search=" + this.search + "&limit=" + this.limit + "&id=" + id).then(function (response) {
        _this4.orders = response.data.orders;
        _this4.sales = response.data.sales;
        _this4.totalRows = response.data.totalRows;
        _this4.user = response.data.user; // Complete the animation of theprogress bar.

        nprogress__WEBPACK_IMPORTED_MODULE_0___default.a.done();
        _this4.isLoading = false;
      })["catch"](function (response) {
        // Complete the animation of theprogress bar.
        nprogress__WEBPACK_IMPORTED_MODULE_0___default.a.done();
        setTimeout(function () {
          _this4.isLoading = false;
        }, 500);
      });
    },
    //---------------------------------------- Create new order-----------------\
    Create_Order: function Create_Order() {
      var _this5 = this;

      var self = this;
      self.SubmitProcessing = true;
      var id = this.$route.params.id;
      self.data.append("order_id", self.order.order_id);
      self.data.append("user_id", id);
      axios.post("orders", self.data).then(function (response) {
        self.SubmitProcessing = false;
        Fire.$emit("Event_Order");

        _this5.makeToast("success", _this5.$t("Create.TitleOrder"), _this5.$t("Success"));
      })["catch"](function (error) {
        self.SubmitProcessing = false;

        _this5.makeToast("danger", _this5.$t("InvalidData"), _this5.$t("Failed"));
      });
    },
    //---------------------------------------- Update Order-----------------\
    Update_Order: function Update_Order() {
      var _this6 = this;

      var self = this;
      var id = this.$route.params.id;
      self.SubmitProcessing = true;
      self.data.append("order_id", self.order.order_id);
      self.data.append("user_id", id);
      self.data.append("_method", "put");
      axios.post("orders/" + self.order.id, self.data).then(function (response) {
        self.SubmitProcessing = false;
        Fire.$emit("Event_Order");

        _this6.makeToast("success", _this6.$t("Update.TitleOrder"), _this6.$t("Success"));
      })["catch"](function (error) {
        self.SubmitProcessing = false;

        _this6.makeToast("danger", _this6.$t("InvalidData"), _this6.$t("Failed"));
      });
    },
    //---------------------------------------- Reset Form -----------------\
    reset_Form: function reset_Form() {
      this.order = {
        id: "",
        order_id: "",
        user_id: ""
      };
      this.data = new FormData();
    },
    //---------------------------------------- Delete Order -----------------\
    Delete_Order: function Delete_Order(id) {
      var _this7 = this;

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
          axios["delete"]("orders/" + id).then(function () {
            _this7.$swal(_this7.$t("Delete.Deleted"), _this7.$t("Delete.TitleOrder"), "success");

            Fire.$emit("Delete_Order");
          })["catch"](function () {
            _this7.$swal(_this7.$t("Delete.Failed"), _this7.$t("Delete.Therewassomethingwronge"), "warning");
          });
        }
      });
    },
    //---- Delete orders by selection
    delete_by_selected: function delete_by_selected() {
      var _this8 = this;

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
          nprogress__WEBPACK_IMPORTED_MODULE_0___default.a.start();
          nprogress__WEBPACK_IMPORTED_MODULE_0___default.a.set(0.1);
          axios.post("orders/delete/by_selection", {
            selectedIds: _this8.selectedIds
          }).then(function () {
            _this8.$swal(_this8.$t("Delete.Deleted"), _this8.$t("Delete.TitleOrder"), "success");

            Fire.$emit("Delete_Order");
          })["catch"](function () {
            // Complete the animation of theprogress bar.
            setTimeout(function () {
              return nprogress__WEBPACK_IMPORTED_MODULE_0___default.a.done();
            }, 500);

            _this8.$swal(_this8.$t("Delete.Failed"), _this8.$t("Delete.Therewassomethingwronge"), "warning");
          });
        }
      });
    }
  },
  //end Methods
  created: function created() {
    var _this9 = this;

    this.Get_Orders(1);
    Fire.$on("Event_Order", function () {
      setTimeout(function () {
        _this9.Get_Orders(_this9.serverParams.page);

        _this9.$bvModal.hide("New_order");
      }, 500);
    });
    Fire.$on("Delete_Order", function () {
      setTimeout(function () {
        _this9.Get_Orders(_this9.serverParams.page);
      }, 500);
    });
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/src/views/app/pages/settings/tasks.vue?vue&type=script&lang=js&":
/*!*******************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/src/views/app/pages/settings/tasks.vue?vue&type=script&lang=js& ***!
  \*******************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var nprogress__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! nprogress */ "./node_modules/nprogress/nprogress.js");
/* harmony import */ var nprogress__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(nprogress__WEBPACK_IMPORTED_MODULE_0__);
function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }

function _regeneratorRuntime() { "use strict"; /*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/facebook/regenerator/blob/main/LICENSE */ _regeneratorRuntime = function _regeneratorRuntime() { return exports; }; var exports = {}, Op = Object.prototype, hasOwn = Op.hasOwnProperty, $Symbol = "function" == typeof Symbol ? Symbol : {}, iteratorSymbol = $Symbol.iterator || "@@iterator", asyncIteratorSymbol = $Symbol.asyncIterator || "@@asyncIterator", toStringTagSymbol = $Symbol.toStringTag || "@@toStringTag"; function define(obj, key, value) { return Object.defineProperty(obj, key, { value: value, enumerable: !0, configurable: !0, writable: !0 }), obj[key]; } try { define({}, ""); } catch (err) { define = function define(obj, key, value) { return obj[key] = value; }; } function wrap(innerFn, outerFn, self, tryLocsList) { var protoGenerator = outerFn && outerFn.prototype instanceof Generator ? outerFn : Generator, generator = Object.create(protoGenerator.prototype), context = new Context(tryLocsList || []); return generator._invoke = function (innerFn, self, context) { var state = "suspendedStart"; return function (method, arg) { if ("executing" === state) throw new Error("Generator is already running"); if ("completed" === state) { if ("throw" === method) throw arg; return doneResult(); } for (context.method = method, context.arg = arg;;) { var delegate = context.delegate; if (delegate) { var delegateResult = maybeInvokeDelegate(delegate, context); if (delegateResult) { if (delegateResult === ContinueSentinel) continue; return delegateResult; } } if ("next" === context.method) context.sent = context._sent = context.arg;else if ("throw" === context.method) { if ("suspendedStart" === state) throw state = "completed", context.arg; context.dispatchException(context.arg); } else "return" === context.method && context.abrupt("return", context.arg); state = "executing"; var record = tryCatch(innerFn, self, context); if ("normal" === record.type) { if (state = context.done ? "completed" : "suspendedYield", record.arg === ContinueSentinel) continue; return { value: record.arg, done: context.done }; } "throw" === record.type && (state = "completed", context.method = "throw", context.arg = record.arg); } }; }(innerFn, self, context), generator; } function tryCatch(fn, obj, arg) { try { return { type: "normal", arg: fn.call(obj, arg) }; } catch (err) { return { type: "throw", arg: err }; } } exports.wrap = wrap; var ContinueSentinel = {}; function Generator() {} function GeneratorFunction() {} function GeneratorFunctionPrototype() {} var IteratorPrototype = {}; define(IteratorPrototype, iteratorSymbol, function () { return this; }); var getProto = Object.getPrototypeOf, NativeIteratorPrototype = getProto && getProto(getProto(values([]))); NativeIteratorPrototype && NativeIteratorPrototype !== Op && hasOwn.call(NativeIteratorPrototype, iteratorSymbol) && (IteratorPrototype = NativeIteratorPrototype); var Gp = GeneratorFunctionPrototype.prototype = Generator.prototype = Object.create(IteratorPrototype); function defineIteratorMethods(prototype) { ["next", "throw", "return"].forEach(function (method) { define(prototype, method, function (arg) { return this._invoke(method, arg); }); }); } function AsyncIterator(generator, PromiseImpl) { function invoke(method, arg, resolve, reject) { var record = tryCatch(generator[method], generator, arg); if ("throw" !== record.type) { var result = record.arg, value = result.value; return value && "object" == _typeof(value) && hasOwn.call(value, "__await") ? PromiseImpl.resolve(value.__await).then(function (value) { invoke("next", value, resolve, reject); }, function (err) { invoke("throw", err, resolve, reject); }) : PromiseImpl.resolve(value).then(function (unwrapped) { result.value = unwrapped, resolve(result); }, function (error) { return invoke("throw", error, resolve, reject); }); } reject(record.arg); } var previousPromise; this._invoke = function (method, arg) { function callInvokeWithMethodAndArg() { return new PromiseImpl(function (resolve, reject) { invoke(method, arg, resolve, reject); }); } return previousPromise = previousPromise ? previousPromise.then(callInvokeWithMethodAndArg, callInvokeWithMethodAndArg) : callInvokeWithMethodAndArg(); }; } function maybeInvokeDelegate(delegate, context) { var method = delegate.iterator[context.method]; if (undefined === method) { if (context.delegate = null, "throw" === context.method) { if (delegate.iterator["return"] && (context.method = "return", context.arg = undefined, maybeInvokeDelegate(delegate, context), "throw" === context.method)) return ContinueSentinel; context.method = "throw", context.arg = new TypeError("The iterator does not provide a 'throw' method"); } return ContinueSentinel; } var record = tryCatch(method, delegate.iterator, context.arg); if ("throw" === record.type) return context.method = "throw", context.arg = record.arg, context.delegate = null, ContinueSentinel; var info = record.arg; return info ? info.done ? (context[delegate.resultName] = info.value, context.next = delegate.nextLoc, "return" !== context.method && (context.method = "next", context.arg = undefined), context.delegate = null, ContinueSentinel) : info : (context.method = "throw", context.arg = new TypeError("iterator result is not an object"), context.delegate = null, ContinueSentinel); } function pushTryEntry(locs) { var entry = { tryLoc: locs[0] }; 1 in locs && (entry.catchLoc = locs[1]), 2 in locs && (entry.finallyLoc = locs[2], entry.afterLoc = locs[3]), this.tryEntries.push(entry); } function resetTryEntry(entry) { var record = entry.completion || {}; record.type = "normal", delete record.arg, entry.completion = record; } function Context(tryLocsList) { this.tryEntries = [{ tryLoc: "root" }], tryLocsList.forEach(pushTryEntry, this), this.reset(!0); } function values(iterable) { if (iterable) { var iteratorMethod = iterable[iteratorSymbol]; if (iteratorMethod) return iteratorMethod.call(iterable); if ("function" == typeof iterable.next) return iterable; if (!isNaN(iterable.length)) { var i = -1, next = function next() { for (; ++i < iterable.length;) { if (hasOwn.call(iterable, i)) return next.value = iterable[i], next.done = !1, next; } return next.value = undefined, next.done = !0, next; }; return next.next = next; } } return { next: doneResult }; } function doneResult() { return { value: undefined, done: !0 }; } return GeneratorFunction.prototype = GeneratorFunctionPrototype, define(Gp, "constructor", GeneratorFunctionPrototype), define(GeneratorFunctionPrototype, "constructor", GeneratorFunction), GeneratorFunction.displayName = define(GeneratorFunctionPrototype, toStringTagSymbol, "GeneratorFunction"), exports.isGeneratorFunction = function (genFun) { var ctor = "function" == typeof genFun && genFun.constructor; return !!ctor && (ctor === GeneratorFunction || "GeneratorFunction" === (ctor.displayName || ctor.name)); }, exports.mark = function (genFun) { return Object.setPrototypeOf ? Object.setPrototypeOf(genFun, GeneratorFunctionPrototype) : (genFun.__proto__ = GeneratorFunctionPrototype, define(genFun, toStringTagSymbol, "GeneratorFunction")), genFun.prototype = Object.create(Gp), genFun; }, exports.awrap = function (arg) { return { __await: arg }; }, defineIteratorMethods(AsyncIterator.prototype), define(AsyncIterator.prototype, asyncIteratorSymbol, function () { return this; }), exports.AsyncIterator = AsyncIterator, exports.async = function (innerFn, outerFn, self, tryLocsList, PromiseImpl) { void 0 === PromiseImpl && (PromiseImpl = Promise); var iter = new AsyncIterator(wrap(innerFn, outerFn, self, tryLocsList), PromiseImpl); return exports.isGeneratorFunction(outerFn) ? iter : iter.next().then(function (result) { return result.done ? result.value : iter.next(); }); }, defineIteratorMethods(Gp), define(Gp, toStringTagSymbol, "Generator"), define(Gp, iteratorSymbol, function () { return this; }), define(Gp, "toString", function () { return "[object Generator]"; }), exports.keys = function (object) { var keys = []; for (var key in object) { keys.push(key); } return keys.reverse(), function next() { for (; keys.length;) { var key = keys.pop(); if (key in object) return next.value = key, next.done = !1, next; } return next.done = !0, next; }; }, exports.values = values, Context.prototype = { constructor: Context, reset: function reset(skipTempReset) { if (this.prev = 0, this.next = 0, this.sent = this._sent = undefined, this.done = !1, this.delegate = null, this.method = "next", this.arg = undefined, this.tryEntries.forEach(resetTryEntry), !skipTempReset) for (var name in this) { "t" === name.charAt(0) && hasOwn.call(this, name) && !isNaN(+name.slice(1)) && (this[name] = undefined); } }, stop: function stop() { this.done = !0; var rootRecord = this.tryEntries[0].completion; if ("throw" === rootRecord.type) throw rootRecord.arg; return this.rval; }, dispatchException: function dispatchException(exception) { if (this.done) throw exception; var context = this; function handle(loc, caught) { return record.type = "throw", record.arg = exception, context.next = loc, caught && (context.method = "next", context.arg = undefined), !!caught; } for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i], record = entry.completion; if ("root" === entry.tryLoc) return handle("end"); if (entry.tryLoc <= this.prev) { var hasCatch = hasOwn.call(entry, "catchLoc"), hasFinally = hasOwn.call(entry, "finallyLoc"); if (hasCatch && hasFinally) { if (this.prev < entry.catchLoc) return handle(entry.catchLoc, !0); if (this.prev < entry.finallyLoc) return handle(entry.finallyLoc); } else if (hasCatch) { if (this.prev < entry.catchLoc) return handle(entry.catchLoc, !0); } else { if (!hasFinally) throw new Error("try statement without catch or finally"); if (this.prev < entry.finallyLoc) return handle(entry.finallyLoc); } } } }, abrupt: function abrupt(type, arg) { for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i]; if (entry.tryLoc <= this.prev && hasOwn.call(entry, "finallyLoc") && this.prev < entry.finallyLoc) { var finallyEntry = entry; break; } } finallyEntry && ("break" === type || "continue" === type) && finallyEntry.tryLoc <= arg && arg <= finallyEntry.finallyLoc && (finallyEntry = null); var record = finallyEntry ? finallyEntry.completion : {}; return record.type = type, record.arg = arg, finallyEntry ? (this.method = "next", this.next = finallyEntry.finallyLoc, ContinueSentinel) : this.complete(record); }, complete: function complete(record, afterLoc) { if ("throw" === record.type) throw record.arg; return "break" === record.type || "continue" === record.type ? this.next = record.arg : "return" === record.type ? (this.rval = this.arg = record.arg, this.method = "return", this.next = "end") : "normal" === record.type && afterLoc && (this.next = afterLoc), ContinueSentinel; }, finish: function finish(finallyLoc) { for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i]; if (entry.finallyLoc === finallyLoc) return this.complete(entry.completion, entry.afterLoc), resetTryEntry(entry), ContinueSentinel; } }, "catch": function _catch(tryLoc) { for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i]; if (entry.tryLoc === tryLoc) { var record = entry.completion; if ("throw" === record.type) { var thrown = record.arg; resetTryEntry(entry); } return thrown; } } throw new Error("illegal catch attempt"); }, delegateYield: function delegateYield(iterable, resultName, nextLoc) { return this.delegate = { iterator: values(iterable), resultName: resultName, nextLoc: nextLoc }, "next" === this.method && (this.arg = undefined), ContinueSentinel; } }, exports; }

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
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
    title: "Task"
  },
  data: function data() {
    return {
      isLoading: true,
      SubmitProcessing: false,
      serverParams: {
        columnFilters: {},
        sort: {
          field: "id",
          type: "desc"
        },
        page: 1,
        perPage: 10
      },
      selectedIds: [],
      totalRows: "",
      search: "",
      data: new FormData(),
      editmode: false,
      tasks: [],
      limit: "10",
      task: {
        id: "",
        ar_name: "",
        en_name: "",
        image: ""
      }
    };
  },
  computed: {
    columns: function columns() {
      return [{
        label: this.$t("Outlet_Name"),
        field: "shop.Outlet_Name",
        tdClass: "text-left",
        thClass: "text-left"
      }, {
        label: this.$t("Outlet_Type"),
        field: "shop.Outlet_Type",
        tdClass: "text-left",
        thClass: "text-left"
      }, {
        label: this.$t("Section"),
        field: "shop.Section",
        tdClass: "text-left",
        thClass: "text-left"
      }, {
        label: this.$t("Shiakha_Name"),
        field: "shop.Shiakha_Name",
        tdClass: "text-left",
        thClass: "text-left"
      }, {
        label: this.$t("location"),
        field: "shop.Shiakha_Name",
        tdClass: "text-left",
        thClass: "text-left"
      }, {
        label: this.$t("status_achiv"),
        field: "status",
        tdClass: "text-left",
        thClass: "text-left"
      }, {
        label: this.$t("from"),
        field: "from",
        tdClass: "text-left",
        thClass: "text-left"
      }, {
        label: this.$t("to"),
        field: "to",
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
        this.Get_Tasks(currentPage);
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
        this.Get_Tasks(1);
      }
    },
    //---- Event on Sort Change
    onSortChange: function onSortChange(params) {
      this.updateParams({
        sort: {
          type: params[0].type,
          field: params[0].field
        }
      });
      this.Get_Tasks(this.serverParams.page);
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
    //---- Event on Search
    onSearch: function onSearch(value) {
      this.search = value.searchTerm;
      this.Get_Tasks(this.serverParams.page);
    },
    //---- Validation State Form
    getValidationState: function getValidationState(_ref4) {
      var dirty = _ref4.dirty,
          validated = _ref4.validated,
          _ref4$valid = _ref4.valid,
          valid = _ref4$valid === void 0 ? null : _ref4$valid;
      return dirty || validated ? valid : null;
    },
    //------------- Submit Validation Create & Edit Task
    Submit_Task: function Submit_Task() {
      var _this2 = this;

      this.$refs.Create_task.validate().then(function (success) {
        if (!success) {
          _this2.makeToast("danger", _this2.$t("Please_fill_the_form_correctly"), _this2.$t("Failed"));
        } else {
          if (!_this2.editmode) {
            _this2.Create_Task();
          } else {
            _this2.Update_Task();
          }
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
    //------------------------------ Event Upload Image -------------------------------\
    onFileSelected: function onFileSelected(e) {
      var _this3 = this;

      return _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee() {
        var _yield$_this3$$refs$I, valid;

        return _regeneratorRuntime().wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                _context.next = 2;
                return _this3.$refs.Image.validate(e);

              case 2:
                _yield$_this3$$refs$I = _context.sent;
                valid = _yield$_this3$$refs$I.valid;

                if (valid) {
                  _this3.task.image = e.target.files[0];
                } else {
                  _this3.task.image = "";
                }

              case 5:
              case "end":
                return _context.stop();
            }
          }
        }, _callee);
      }))();
    },
    //------------------------------ Modal (create Task) -------------------------------\
    New_Task: function New_Task() {
      this.reset_Form();
      this.editmode = false;
      this.$bvModal.show("New_task");
    },
    //------------------------------ Modal (Update Task) -------------------------------\
    Edit_Task: function Edit_Task(task) {
      this.Get_Tasks(this.serverParams.page);
      this.reset_Form();
      this.task = task;
      this.editmode = true;
      this.$bvModal.show("New_task");
    },
    //---------------------------------------- Get All tasks-----------------\
    Get_Tasks: function Get_Tasks(page) {
      var _this4 = this;

      // Start the progress bar.
      var id = this.$route.params.id;
      nprogress__WEBPACK_IMPORTED_MODULE_0___default.a.start();
      nprogress__WEBPACK_IMPORTED_MODULE_0___default.a.set(0.1);
      axios.get("tasks?page=" + page + "&SortField=" + this.serverParams.sort.field + "&SortType=" + this.serverParams.sort.type + "&search=" + this.search + "&id=" + id + "&limit=" + this.limit).then(function (response) {
        _this4.tasks = response.data.tasks;
        _this4.totalRows = response.data.totalRows; //  console.log(response.data.tasks)
        // Complete the animation of theprogress bar.

        nprogress__WEBPACK_IMPORTED_MODULE_0___default.a.done();
        _this4.isLoading = false;
      })["catch"](function (response) {
        // Complete the animation of theprogress bar.
        nprogress__WEBPACK_IMPORTED_MODULE_0___default.a.done();
        setTimeout(function () {
          _this4.isLoading = false;
        }, 500);
      });
    },
    //---------------------------------------- Create new task-----------------\
    Create_Task: function Create_Task() {
      var _this5 = this;

      var self = this;
      self.SubmitProcessing = true;
      self.data.append("ar_name", self.task.ar_name);
      self.data.append("en_name", self.task.en_name);
      self.data.append("image", self.task.image);
      axios.post("tasks", self.data).then(function (response) {
        self.SubmitProcessing = false;
        Fire.$emit("Event_Task");

        _this5.makeToast("success", _this5.$t("Create.TitleTask"), _this5.$t("Success"));
      })["catch"](function (error) {
        self.SubmitProcessing = false;

        _this5.makeToast("danger", _this5.$t("InvalidData"), _this5.$t("Failed"));
      });
    },
    //---------------------------------------- Update Task-----------------\
    Update_Task: function Update_Task() {
      var _this6 = this;

      var self = this;
      self.SubmitProcessing = true;
      self.data.append("en_name", self.task.en_name);
      self.data.append("ar_name", self.task.ar_name);
      self.data.append("image", self.task.image);
      self.data.append("_method", "put");
      axios.post("tasks/" + self.task.id, self.data).then(function (response) {
        self.SubmitProcessing = false;
        Fire.$emit("Event_Task");

        _this6.makeToast("success", _this6.$t("Update.TitleTask"), _this6.$t("Success"));
      })["catch"](function (error) {
        self.SubmitProcessing = false;

        _this6.makeToast("danger", _this6.$t("InvalidData"), _this6.$t("Failed"));
      });
    },
    //---------------------------------------- Reset Form -----------------\
    reset_Form: function reset_Form() {
      this.task = {
        id: "",
        ar_name: "",
        en_name: "",
        image: ""
      };
      this.data = new FormData();
    },
    //---------------------------------------- Delete Task -----------------\
    Delete_Task: function Delete_Task(id) {
      var _this7 = this;

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
          axios["delete"]("tasks/" + id).then(function () {
            _this7.$swal(_this7.$t("Delete.Deleted"), _this7.$t("Delete.TitleTask"), "success");

            Fire.$emit("Delete_Task");
          })["catch"](function () {
            _this7.$swal(_this7.$t("Delete.Failed"), _this7.$t("Delete.Therewassomethingwronge"), "warning");
          });
        }
      });
    },
    //---- Delete tasks by selection
    delete_by_selected: function delete_by_selected() {
      var _this8 = this;

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
          nprogress__WEBPACK_IMPORTED_MODULE_0___default.a.start();
          nprogress__WEBPACK_IMPORTED_MODULE_0___default.a.set(0.1);
          axios.post("tasks/delete/by_selection", {
            selectedIds: _this8.selectedIds
          }).then(function () {
            _this8.$swal(_this8.$t("Delete.Deleted"), _this8.$t("Delete.TitleTask"), "success");

            Fire.$emit("Delete_Task");
          })["catch"](function () {
            // Complete the animation of theprogress bar.
            setTimeout(function () {
              return nprogress__WEBPACK_IMPORTED_MODULE_0___default.a.done();
            }, 500);

            _this8.$swal(_this8.$t("Delete.Failed"), _this8.$t("Delete.Therewassomethingwronge"), "warning");
          });
        }
      });
    }
  },
  //end Methods
  created: function created() {
    var _this9 = this;

    this.Get_Tasks(1);
    Fire.$on("Event_Task", function () {
      setTimeout(function () {
        _this9.Get_Tasks(_this9.serverParams.page);

        _this9.$bvModal.hide("New_task");
      }, 500);
    });
    Fire.$on("Delete_Task", function () {
      setTimeout(function () {
        _this9.Get_Tasks(_this9.serverParams.page);
      }, 500);
    });
  }
});

/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/src/views/app/pages/settings/orders.vue?vue&type=template&id=bfb994f8&":
/*!************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/src/views/app/pages/settings/orders.vue?vue&type=template&id=bfb994f8& ***!
  \************************************************************************************************************************************************************************************************************************/
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
        attrs: { page: _vm.$t("Order"), folder: _vm.$t("Settings") },
      }),
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
          _vm._v("\n          " + _vm._s(_vm.$t("print")) + "\n        "),
        ]
      ),
      _vm._v(" "),
      _c("h3", [
        _vm._v(_vm._s(_vm.user.firstname) + "  " + _vm._s(_vm.user.lastname)),
      ]),
      _vm._v(" "),
      _c("h3", [_vm._v("Email: " + _vm._s(_vm.user.email))]),
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
            { staticClass: "wrapper", attrs: { id: "print_Invoice" } },
            [
              _c(
                "vue-good-table",
                {
                  attrs: {
                    mode: "remote",
                    columns: _vm.columns,
                    totalRows: _vm.totalRows,
                    rows: _vm.orders,
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
                    styleClass: "table-hover tableOne vgt-table",
                  },
                  on: {
                    "on-page-change": _vm.onPageChange,
                    "on-per-page-change": _vm.onPerPageChange,
                    "on-sort-change": _vm.onSortChange,
                    "on-search": _vm.onSearch,
                    "on-selected-rows-change": _vm.selectionChanged,
                  },
                  scopedSlots: _vm._u(
                    [
                      {
                        key: "table-row",
                        fn: function (props) {
                          return [
                            props.column.field == "actions"
                              ? _c(
                                  "span",
                                  [
                                    props.row.status == "pending"
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
                                            attrs: { title: "Edit" },
                                            on: {
                                              click: function ($event) {
                                                return _vm.Edit_Order(props.row)
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
                                    props.row.status == "pending"
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
                                                return _vm.Delete_Order(
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
                                    _vm._v(" "),
                                    _c(
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
                                          title: "View",
                                          to:
                                            "/app/sales/detail/" +
                                            props.row.order_id,
                                        },
                                      },
                                      [
                                        _c("i", {
                                          staticClass:
                                            "i-Eye text-25 text-info",
                                        }),
                                      ]
                                    ),
                                  ],
                                  1
                                )
                              : props.column.field == "image"
                              ? _c("span", [
                                  _c(
                                    "a",
                                    {
                                      attrs: {
                                        href:
                                          "/storage/images/orders/" +
                                          props.row.image,
                                      },
                                    },
                                    [
                                      _c("b-img", {
                                        attrs: {
                                          thumbnail: "",
                                          height: "50",
                                          width: "50",
                                          fluid: "",
                                          src:
                                            "/storage/images/orders/" +
                                            props.row.image,
                                          alt: "image",
                                        },
                                      }),
                                    ],
                                    1
                                  ),
                                ])
                              : _vm._e(),
                          ]
                        },
                      },
                    ],
                    null,
                    false,
                    1194464187
                  ),
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
                        [_vm._v(" " + _vm._s(_vm.$t("Del")))]
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
                      _vm.currentUserPermissions.includes("Sales_add")
                        ? _c(
                            "b-button",
                            {
                              staticClass: "btn-rounded",
                              attrs: {
                                variant: "btn btn-primary btn-icon m-1",
                              },
                              on: {
                                click: function ($event) {
                                  return _vm.New_Order()
                                },
                              },
                            },
                            [
                              _c("i", { staticClass: "i-Add" }),
                              _vm._v(
                                "\n           " +
                                  _vm._s(_vm.$t("Add")) +
                                  "\n        "
                              ),
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
          )
        : _vm._e(),
      _vm._v(" "),
      _c(
        "validation-observer",
        { ref: "Create_order" },
        [
          _c(
            "b-modal",
            {
              attrs: {
                "hide-footer": "",
                size: "md",
                id: "New_order",
                title: _vm.editmode ? _vm.$t("Edit") : _vm.$t("Add"),
              },
            },
            [
              _c(
                "b-form",
                {
                  attrs: { enctype: "multipart/form-data" },
                  on: {
                    submit: function ($event) {
                      $event.preventDefault()
                      return _vm.Submit_Order($event)
                    },
                  },
                },
                [
                  _c(
                    "b-row",
                    [
                      _c(
                        "b-col",
                        { staticClass: "mb-2", attrs: { md: "12" } },
                        [
                          _c("validation-provider", {
                            attrs: { name: "order", rules: { required: true } },
                            scopedSlots: _vm._u([
                              {
                                key: "default",
                                fn: function (ref) {
                                  var valid = ref.valid
                                  var errors = ref.errors
                                  return _c(
                                    "b-form-group",
                                    { attrs: { label: _vm.$t("Orders") } },
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
                                          placeholder: _vm.$t("choose_order"),
                                          options: _vm.sales.map(function (
                                            sales
                                          ) {
                                            return {
                                              label:
                                                sales.Ref +
                                                " : Odoo_ref: " +
                                                sales.odoo_ref +
                                                " ( " +
                                                sales.GrandTotal +
                                                " ) EGP",
                                              value: sales.id,
                                            }
                                          }),
                                        },
                                        on: { input: _vm.handleChange },
                                        model: {
                                          value: _vm.order.order_id,
                                          callback: function ($$v) {
                                            _vm.$set(_vm.order, "order_id", $$v)
                                          },
                                          expression: "order.order_id",
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
                            [_vm._v(" " + _vm._s(_vm.$t("submit")))]
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

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/src/views/app/pages/settings/tasks.vue?vue&type=template&id=072eafbf&":
/*!***********************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/src/views/app/pages/settings/tasks.vue?vue&type=template&id=072eafbf& ***!
  \***********************************************************************************************************************************************************************************************************************/
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
        attrs: { page: _vm.$t("Task"), folder: _vm.$t("Settings") },
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
                    rows: _vm.tasks,
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
                    styleClass: "table-hover tableOne vgt-table",
                  },
                  on: {
                    "on-page-change": _vm.onPageChange,
                    "on-per-page-change": _vm.onPerPageChange,
                    "on-sort-change": _vm.onSortChange,
                    "on-search": _vm.onSearch,
                    "on-selected-rows-change": _vm.selectionChanged,
                  },
                  scopedSlots: _vm._u(
                    [
                      {
                        key: "table-row",
                        fn: function (props) {
                          return [
                            props.column.field == "actions"
                              ? _c(
                                  "span",
                                  [
                                    props.row.status != "pending"
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
                                              title: "View",
                                              to: {
                                                name: "detail_task",
                                                params: { id: props.row.id },
                                              },
                                            },
                                          },
                                          [
                                            _c("i", {
                                              staticClass:
                                                "i-Eye text-25 text-info",
                                            }),
                                          ]
                                        )
                                      : _vm._e(),
                                    _vm._v(" "),
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
                                        attrs: { title: "Delete" },
                                        on: {
                                          click: function ($event) {
                                            return _vm.Delete_Task(props.row.id)
                                          },
                                        },
                                      },
                                      [
                                        _c("i", {
                                          staticClass:
                                            "i-Close-Window text-25 text-danger",
                                        }),
                                      ]
                                    ),
                                  ],
                                  1
                                )
                              : props.column.field == "image"
                              ? _c(
                                  "span",
                                  [
                                    _c("b-img", {
                                      attrs: {
                                        thumbnail: "",
                                        height: "50",
                                        width: "50",
                                        fluid: "",
                                        src: "/images/tasks/" + props.row.image,
                                        alt: "image",
                                      },
                                    }),
                                  ],
                                  1
                                )
                              : _vm._e(),
                          ]
                        },
                      },
                    ],
                    null,
                    false,
                    3956279176
                  ),
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
                        [_vm._v(" " + _vm._s(_vm.$t("Del")))]
                      ),
                    ]
                  ),
                  _vm._v(" "),
                  _c("div", {
                    staticClass: "mt-2 mb-3",
                    attrs: { slot: "table-actions" },
                    slot: "table-actions",
                  }),
                ]
              ),
            ],
            1
          )
        : _vm._e(),
      _vm._v(" "),
      _c(
        "validation-observer",
        { ref: "Create_task" },
        [
          _c(
            "b-modal",
            {
              attrs: {
                "hide-footer": "",
                size: "md",
                id: "New_task",
                title: _vm.editmode ? _vm.$t("Edit") : _vm.$t("Add"),
              },
            },
            [
              _c(
                "b-form",
                {
                  attrs: { enctype: "multipart/form-data" },
                  on: {
                    submit: function ($event) {
                      $event.preventDefault()
                      return _vm.Submit_Task($event)
                    },
                  },
                },
                [
                  _c(
                    "b-row",
                    [
                      _c(
                        "b-col",
                        { attrs: { md: "12" } },
                        [
                          _c("validation-provider", {
                            attrs: {
                              name: "ar_Name",
                              rules: { required: true, min: 3, max: 55 },
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
                                          label: _vm.$t("Name_ar_name"),
                                        },
                                      },
                                      [
                                        _c("b-form-input", {
                                          attrs: {
                                            state:
                                              _vm.getValidationState(
                                                validationContext
                                              ),
                                            "aria-describedby": "Name-feedback",
                                            label: "ar_name",
                                            placeholder:
                                              _vm.$t("Enter_Name_ar_name"),
                                          },
                                          model: {
                                            value: _vm.task.ar_name,
                                            callback: function ($$v) {
                                              _vm.$set(_vm.task, "ar_name", $$v)
                                            },
                                            expression: "task.ar_name",
                                          },
                                        }),
                                        _vm._v(" "),
                                        _c(
                                          "b-form-invalid-feedback",
                                          { attrs: { id: "Name-feedback" } },
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
                        { attrs: { md: "12" } },
                        [
                          _c("validation-provider", {
                            attrs: {
                              name: "en_Name",
                              rules: { required: true, min: 3, max: 55 },
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
                                          label: _vm.$t("Name_en_name"),
                                        },
                                      },
                                      [
                                        _c("b-form-input", {
                                          attrs: {
                                            state:
                                              _vm.getValidationState(
                                                validationContext
                                              ),
                                            "aria-describedby": "Name-feedback",
                                            label: "en_name",
                                            placeholder:
                                              _vm.$t("Enter_Name_en_name"),
                                          },
                                          model: {
                                            value: _vm.task.en_name,
                                            callback: function ($$v) {
                                              _vm.$set(_vm.task, "en_name", $$v)
                                            },
                                            expression: "task.en_name",
                                          },
                                        }),
                                        _vm._v(" "),
                                        _c(
                                          "b-form-invalid-feedback",
                                          { attrs: { id: "Name-feedback" } },
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
                        { attrs: { md: "12" } },
                        [
                          _c("validation-provider", {
                            ref: "Image",
                            attrs: {
                              name: "Image",
                              rules: "mimes:image/*|size:200",
                            },
                            scopedSlots: _vm._u([
                              {
                                key: "default",
                                fn: function (ref) {
                                  var validate = ref.validate
                                  var valid = ref.valid
                                  var errors = ref.errors
                                  return _c(
                                    "b-form-group",
                                    { attrs: { label: _vm.$t("TaskImage") } },
                                    [
                                      _c("input", {
                                        class: {
                                          "is-invalid": !!errors.length,
                                        },
                                        attrs: {
                                          state: errors[0]
                                            ? false
                                            : valid
                                            ? true
                                            : null,
                                          label: "Choose Image",
                                          type: "file",
                                        },
                                        on: { change: _vm.onFileSelected },
                                      }),
                                      _vm._v(" "),
                                      _c(
                                        "b-form-invalid-feedback",
                                        { attrs: { id: "Image-feedback" } },
                                        [_vm._v(_vm._s(errors[0]))]
                                      ),
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
                            [_vm._v(" " + _vm._s(_vm.$t("submit")))]
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

/***/ "./resources/src/views/app/pages/settings/orders.vue":
/*!***********************************************************!*\
  !*** ./resources/src/views/app/pages/settings/orders.vue ***!
  \***********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _orders_vue_vue_type_template_id_bfb994f8___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./orders.vue?vue&type=template&id=bfb994f8& */ "./resources/src/views/app/pages/settings/orders.vue?vue&type=template&id=bfb994f8&");
/* harmony import */ var _orders_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./orders.vue?vue&type=script&lang=js& */ "./resources/src/views/app/pages/settings/orders.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _orders_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _orders_vue_vue_type_template_id_bfb994f8___WEBPACK_IMPORTED_MODULE_0__["render"],
  _orders_vue_vue_type_template_id_bfb994f8___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/src/views/app/pages/settings/orders.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/src/views/app/pages/settings/orders.vue?vue&type=script&lang=js&":
/*!************************************************************************************!*\
  !*** ./resources/src/views/app/pages/settings/orders.vue?vue&type=script&lang=js& ***!
  \************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_orders_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../node_modules/babel-loader/lib??ref--4-0!../../../../../../node_modules/vue-loader/lib??vue-loader-options!./orders.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/src/views/app/pages/settings/orders.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_orders_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/src/views/app/pages/settings/orders.vue?vue&type=template&id=bfb994f8&":
/*!******************************************************************************************!*\
  !*** ./resources/src/views/app/pages/settings/orders.vue?vue&type=template&id=bfb994f8& ***!
  \******************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_orders_vue_vue_type_template_id_bfb994f8___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../../node_modules/vue-loader/lib??vue-loader-options!./orders.vue?vue&type=template&id=bfb994f8& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/src/views/app/pages/settings/orders.vue?vue&type=template&id=bfb994f8&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_orders_vue_vue_type_template_id_bfb994f8___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_orders_vue_vue_type_template_id_bfb994f8___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./resources/src/views/app/pages/settings/tasks.vue":
/*!**********************************************************!*\
  !*** ./resources/src/views/app/pages/settings/tasks.vue ***!
  \**********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _tasks_vue_vue_type_template_id_072eafbf___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./tasks.vue?vue&type=template&id=072eafbf& */ "./resources/src/views/app/pages/settings/tasks.vue?vue&type=template&id=072eafbf&");
/* harmony import */ var _tasks_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./tasks.vue?vue&type=script&lang=js& */ "./resources/src/views/app/pages/settings/tasks.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _tasks_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _tasks_vue_vue_type_template_id_072eafbf___WEBPACK_IMPORTED_MODULE_0__["render"],
  _tasks_vue_vue_type_template_id_072eafbf___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/src/views/app/pages/settings/tasks.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/src/views/app/pages/settings/tasks.vue?vue&type=script&lang=js&":
/*!***********************************************************************************!*\
  !*** ./resources/src/views/app/pages/settings/tasks.vue?vue&type=script&lang=js& ***!
  \***********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_tasks_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../node_modules/babel-loader/lib??ref--4-0!../../../../../../node_modules/vue-loader/lib??vue-loader-options!./tasks.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/src/views/app/pages/settings/tasks.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_tasks_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/src/views/app/pages/settings/tasks.vue?vue&type=template&id=072eafbf&":
/*!*****************************************************************************************!*\
  !*** ./resources/src/views/app/pages/settings/tasks.vue?vue&type=template&id=072eafbf& ***!
  \*****************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_tasks_vue_vue_type_template_id_072eafbf___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../../node_modules/vue-loader/lib??vue-loader-options!./tasks.vue?vue&type=template&id=072eafbf& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/src/views/app/pages/settings/tasks.vue?vue&type=template&id=072eafbf&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_tasks_vue_vue_type_template_id_072eafbf___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_tasks_vue_vue_type_template_id_072eafbf___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ })

}]);