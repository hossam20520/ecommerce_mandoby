(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["Customers"],{

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/src/views/app/pages/people/customers.vue?vue&type=script&lang=js&":
/*!*********************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/src/views/app/pages/people/customers.vue?vue&type=script&lang=js& ***!
  \*********************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var jspdf_autotable__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! jspdf-autotable */ "./node_modules/jspdf-autotable/dist/jspdf.plugin.autotable.js");
/* harmony import */ var jspdf_autotable__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(jspdf_autotable__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var jspdf__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! jspdf */ "./node_modules/jspdf/dist/jspdf.es.min.js");
/* harmony import */ var nprogress__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! nprogress */ "./node_modules/nprogress/nprogress.js");
/* harmony import */ var nprogress__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(nprogress__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var vuex__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! vuex */ "./node_modules/vuex/dist/vuex.esm.js");
function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }

function _regeneratorRuntime() { "use strict"; /*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/facebook/regenerator/blob/main/LICENSE */ _regeneratorRuntime = function _regeneratorRuntime() { return exports; }; var exports = {}, Op = Object.prototype, hasOwn = Op.hasOwnProperty, $Symbol = "function" == typeof Symbol ? Symbol : {}, iteratorSymbol = $Symbol.iterator || "@@iterator", asyncIteratorSymbol = $Symbol.asyncIterator || "@@asyncIterator", toStringTagSymbol = $Symbol.toStringTag || "@@toStringTag"; function define(obj, key, value) { return Object.defineProperty(obj, key, { value: value, enumerable: !0, configurable: !0, writable: !0 }), obj[key]; } try { define({}, ""); } catch (err) { define = function define(obj, key, value) { return obj[key] = value; }; } function wrap(innerFn, outerFn, self, tryLocsList) { var protoGenerator = outerFn && outerFn.prototype instanceof Generator ? outerFn : Generator, generator = Object.create(protoGenerator.prototype), context = new Context(tryLocsList || []); return generator._invoke = function (innerFn, self, context) { var state = "suspendedStart"; return function (method, arg) { if ("executing" === state) throw new Error("Generator is already running"); if ("completed" === state) { if ("throw" === method) throw arg; return doneResult(); } for (context.method = method, context.arg = arg;;) { var delegate = context.delegate; if (delegate) { var delegateResult = maybeInvokeDelegate(delegate, context); if (delegateResult) { if (delegateResult === ContinueSentinel) continue; return delegateResult; } } if ("next" === context.method) context.sent = context._sent = context.arg;else if ("throw" === context.method) { if ("suspendedStart" === state) throw state = "completed", context.arg; context.dispatchException(context.arg); } else "return" === context.method && context.abrupt("return", context.arg); state = "executing"; var record = tryCatch(innerFn, self, context); if ("normal" === record.type) { if (state = context.done ? "completed" : "suspendedYield", record.arg === ContinueSentinel) continue; return { value: record.arg, done: context.done }; } "throw" === record.type && (state = "completed", context.method = "throw", context.arg = record.arg); } }; }(innerFn, self, context), generator; } function tryCatch(fn, obj, arg) { try { return { type: "normal", arg: fn.call(obj, arg) }; } catch (err) { return { type: "throw", arg: err }; } } exports.wrap = wrap; var ContinueSentinel = {}; function Generator() {} function GeneratorFunction() {} function GeneratorFunctionPrototype() {} var IteratorPrototype = {}; define(IteratorPrototype, iteratorSymbol, function () { return this; }); var getProto = Object.getPrototypeOf, NativeIteratorPrototype = getProto && getProto(getProto(values([]))); NativeIteratorPrototype && NativeIteratorPrototype !== Op && hasOwn.call(NativeIteratorPrototype, iteratorSymbol) && (IteratorPrototype = NativeIteratorPrototype); var Gp = GeneratorFunctionPrototype.prototype = Generator.prototype = Object.create(IteratorPrototype); function defineIteratorMethods(prototype) { ["next", "throw", "return"].forEach(function (method) { define(prototype, method, function (arg) { return this._invoke(method, arg); }); }); } function AsyncIterator(generator, PromiseImpl) { function invoke(method, arg, resolve, reject) { var record = tryCatch(generator[method], generator, arg); if ("throw" !== record.type) { var result = record.arg, value = result.value; return value && "object" == _typeof(value) && hasOwn.call(value, "__await") ? PromiseImpl.resolve(value.__await).then(function (value) { invoke("next", value, resolve, reject); }, function (err) { invoke("throw", err, resolve, reject); }) : PromiseImpl.resolve(value).then(function (unwrapped) { result.value = unwrapped, resolve(result); }, function (error) { return invoke("throw", error, resolve, reject); }); } reject(record.arg); } var previousPromise; this._invoke = function (method, arg) { function callInvokeWithMethodAndArg() { return new PromiseImpl(function (resolve, reject) { invoke(method, arg, resolve, reject); }); } return previousPromise = previousPromise ? previousPromise.then(callInvokeWithMethodAndArg, callInvokeWithMethodAndArg) : callInvokeWithMethodAndArg(); }; } function maybeInvokeDelegate(delegate, context) { var method = delegate.iterator[context.method]; if (undefined === method) { if (context.delegate = null, "throw" === context.method) { if (delegate.iterator["return"] && (context.method = "return", context.arg = undefined, maybeInvokeDelegate(delegate, context), "throw" === context.method)) return ContinueSentinel; context.method = "throw", context.arg = new TypeError("The iterator does not provide a 'throw' method"); } return ContinueSentinel; } var record = tryCatch(method, delegate.iterator, context.arg); if ("throw" === record.type) return context.method = "throw", context.arg = record.arg, context.delegate = null, ContinueSentinel; var info = record.arg; return info ? info.done ? (context[delegate.resultName] = info.value, context.next = delegate.nextLoc, "return" !== context.method && (context.method = "next", context.arg = undefined), context.delegate = null, ContinueSentinel) : info : (context.method = "throw", context.arg = new TypeError("iterator result is not an object"), context.delegate = null, ContinueSentinel); } function pushTryEntry(locs) { var entry = { tryLoc: locs[0] }; 1 in locs && (entry.catchLoc = locs[1]), 2 in locs && (entry.finallyLoc = locs[2], entry.afterLoc = locs[3]), this.tryEntries.push(entry); } function resetTryEntry(entry) { var record = entry.completion || {}; record.type = "normal", delete record.arg, entry.completion = record; } function Context(tryLocsList) { this.tryEntries = [{ tryLoc: "root" }], tryLocsList.forEach(pushTryEntry, this), this.reset(!0); } function values(iterable) { if (iterable) { var iteratorMethod = iterable[iteratorSymbol]; if (iteratorMethod) return iteratorMethod.call(iterable); if ("function" == typeof iterable.next) return iterable; if (!isNaN(iterable.length)) { var i = -1, next = function next() { for (; ++i < iterable.length;) { if (hasOwn.call(iterable, i)) return next.value = iterable[i], next.done = !1, next; } return next.value = undefined, next.done = !0, next; }; return next.next = next; } } return { next: doneResult }; } function doneResult() { return { value: undefined, done: !0 }; } return GeneratorFunction.prototype = GeneratorFunctionPrototype, define(Gp, "constructor", GeneratorFunctionPrototype), define(GeneratorFunctionPrototype, "constructor", GeneratorFunction), GeneratorFunction.displayName = define(GeneratorFunctionPrototype, toStringTagSymbol, "GeneratorFunction"), exports.isGeneratorFunction = function (genFun) { var ctor = "function" == typeof genFun && genFun.constructor; return !!ctor && (ctor === GeneratorFunction || "GeneratorFunction" === (ctor.displayName || ctor.name)); }, exports.mark = function (genFun) { return Object.setPrototypeOf ? Object.setPrototypeOf(genFun, GeneratorFunctionPrototype) : (genFun.__proto__ = GeneratorFunctionPrototype, define(genFun, toStringTagSymbol, "GeneratorFunction")), genFun.prototype = Object.create(Gp), genFun; }, exports.awrap = function (arg) { return { __await: arg }; }, defineIteratorMethods(AsyncIterator.prototype), define(AsyncIterator.prototype, asyncIteratorSymbol, function () { return this; }), exports.AsyncIterator = AsyncIterator, exports.async = function (innerFn, outerFn, self, tryLocsList, PromiseImpl) { void 0 === PromiseImpl && (PromiseImpl = Promise); var iter = new AsyncIterator(wrap(innerFn, outerFn, self, tryLocsList), PromiseImpl); return exports.isGeneratorFunction(outerFn) ? iter : iter.next().then(function (result) { return result.done ? result.value : iter.next(); }); }, defineIteratorMethods(Gp), define(Gp, toStringTagSymbol, "Generator"), define(Gp, iteratorSymbol, function () { return this; }), define(Gp, "toString", function () { return "[object Generator]"; }), exports.keys = function (object) { var keys = []; for (var key in object) { keys.push(key); } return keys.reverse(), function next() { for (; keys.length;) { var key = keys.pop(); if (key in object) return next.value = key, next.done = !1, next; } return next.done = !0, next; }; }, exports.values = values, Context.prototype = { constructor: Context, reset: function reset(skipTempReset) { if (this.prev = 0, this.next = 0, this.sent = this._sent = undefined, this.done = !1, this.delegate = null, this.method = "next", this.arg = undefined, this.tryEntries.forEach(resetTryEntry), !skipTempReset) for (var name in this) { "t" === name.charAt(0) && hasOwn.call(this, name) && !isNaN(+name.slice(1)) && (this[name] = undefined); } }, stop: function stop() { this.done = !0; var rootRecord = this.tryEntries[0].completion; if ("throw" === rootRecord.type) throw rootRecord.arg; return this.rval; }, dispatchException: function dispatchException(exception) { if (this.done) throw exception; var context = this; function handle(loc, caught) { return record.type = "throw", record.arg = exception, context.next = loc, caught && (context.method = "next", context.arg = undefined), !!caught; } for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i], record = entry.completion; if ("root" === entry.tryLoc) return handle("end"); if (entry.tryLoc <= this.prev) { var hasCatch = hasOwn.call(entry, "catchLoc"), hasFinally = hasOwn.call(entry, "finallyLoc"); if (hasCatch && hasFinally) { if (this.prev < entry.catchLoc) return handle(entry.catchLoc, !0); if (this.prev < entry.finallyLoc) return handle(entry.finallyLoc); } else if (hasCatch) { if (this.prev < entry.catchLoc) return handle(entry.catchLoc, !0); } else { if (!hasFinally) throw new Error("try statement without catch or finally"); if (this.prev < entry.finallyLoc) return handle(entry.finallyLoc); } } } }, abrupt: function abrupt(type, arg) { for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i]; if (entry.tryLoc <= this.prev && hasOwn.call(entry, "finallyLoc") && this.prev < entry.finallyLoc) { var finallyEntry = entry; break; } } finallyEntry && ("break" === type || "continue" === type) && finallyEntry.tryLoc <= arg && arg <= finallyEntry.finallyLoc && (finallyEntry = null); var record = finallyEntry ? finallyEntry.completion : {}; return record.type = type, record.arg = arg, finallyEntry ? (this.method = "next", this.next = finallyEntry.finallyLoc, ContinueSentinel) : this.complete(record); }, complete: function complete(record, afterLoc) { if ("throw" === record.type) throw record.arg; return "break" === record.type || "continue" === record.type ? this.next = record.arg : "return" === record.type ? (this.rval = this.arg = record.arg, this.method = "return", this.next = "end") : "normal" === record.type && afterLoc && (this.next = afterLoc), ContinueSentinel; }, finish: function finish(finallyLoc) { for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i]; if (entry.finallyLoc === finallyLoc) return this.complete(entry.completion, entry.afterLoc), resetTryEntry(entry), ContinueSentinel; } }, "catch": function _catch(tryLoc) { for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i]; if (entry.tryLoc === tryLoc) { var record = entry.completion; if ("throw" === record.type) { var thrown = record.arg; resetTryEntry(entry); } return thrown; } } throw new Error("illegal catch attempt"); }, delegateYield: function delegateYield(iterable, resultName, nextLoc) { return this.delegate = { iterator: values(iterable), resultName: resultName, nextLoc: nextLoc }, "next" === this.method && (this.arg = undefined), ContinueSentinel; } }, exports; }

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

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




/* harmony default export */ __webpack_exports__["default"] = ({
  metaInfo: {
    title: "Users"
  },
  data: function data() {
    return {
      editmode: false,
      isLoading: true,
      SubmitProcessing: false,
      email_exist: "",
      serverParams: {
        columnFilters: {},
        sort: {
          field: "id",
          type: "desc"
        },
        page: 1,
        perPage: 10
      },
      totalRows: "",
      search: "",
      limit: "10",
      Filter_Name: "",
      Filter_Email: "",
      Filter_status: "",
      Filter_Phone: "",
      permissions: {},
      users: [],
      roles: [],
      data: new FormData(),
      user: {
        code: "",
        firstname: "",
        area_name: "",
        location_lat: "",
        address: "",
        location_long: "",
        lastname: "",
        username: "",
        password: "",
        NewPassword: null,
        email: "",
        phone: "",
        statut: "",
        role_id: "",
        avatar: ""
      }
    };
  },
  computed: _objectSpread(_objectSpread({}, Object(vuex__WEBPACK_IMPORTED_MODULE_3__["mapGetters"])(["currentUserPermissions"])), {}, {
    columns: function columns() {
      return [{
        label: this.$t("code"),
        field: "code",
        tdClass: "text-left",
        thClass: "text-left"
      }, {
        label: this.$t("Firstname"),
        field: "firstname",
        tdClass: "text-left",
        thClass: "text-left"
      }, {
        label: this.$t("lastname"),
        field: "lastname",
        tdClass: "text-left",
        thClass: "text-left"
      }, {
        label: this.$t("username"),
        field: "username",
        tdClass: "text-left",
        thClass: "text-left"
      }, {
        label: this.$t("sales_count"),
        field: "sales_count",
        tdClass: "text-left",
        thClass: "text-left"
      }, {
        label: this.$t("Email"),
        field: "email",
        tdClass: "text-left",
        thClass: "text-left"
      }, {
        label: this.$t("Phone"),
        field: "phone",
        tdClass: "text-left",
        thClass: "text-left"
      }, {
        label: this.$t("Status"),
        field: "statut",
        html: true,
        sortable: false,
        tdClass: "text-center",
        thClass: "text-center"
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
    //------------- Submit Validation Create & Edit User
    Submit_User: function Submit_User() {
      var _this = this;

      this.$refs.Create_User.validate().then(function (success) {
        if (!success) {
          _this.makeToast("danger", _this.$t("Please_fill_the_form_correctly"), _this.$t("Failed"));
        } else {
          if (!_this.editmode) {
            _this.Create_User();
          } else {
            _this.Update_User();
          }
        }
      });
    },
    //------ update Params Table
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
        this.Get_Users(currentPage);
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
        this.Get_Users(1);
      }
    },
    //------ Event Sort Change
    onSortChange: function onSortChange(params) {
      this.updateParams({
        sort: {
          type: params[0].type,
          field: params[0].field
        }
      });
      this.Get_Users(this.serverParams.page);
    },
    //------ Event Search
    onSearch: function onSearch(value) {
      this.search = value.searchTerm;
      this.Get_Users(this.serverParams.page);
    },
    //------ Event Validation State
    getValidationState: function getValidationState(_ref3) {
      var dirty = _ref3.dirty,
          validated = _ref3.validated,
          _ref3$valid = _ref3.valid,
          valid = _ref3$valid === void 0 ? null : _ref3$valid;
      return dirty || validated ? valid : null;
    },
    //------ Reset Filter
    Reset_Filter: function Reset_Filter() {
      this.search = "";
      this.Filter_Name = "";
      this.Filter_status = "";
      this.Filter_Phone = "";
      this.Filter_Email = "";
      this.Get_Users(this.serverParams.page);
    },
    //------ Toast
    makeToast: function makeToast(variant, msg, title) {
      this.$root.$bvToast.toast(msg, {
        title: title,
        variant: variant,
        solid: true
      });
    },
    //------ Checked Status User
    isChecked: function isChecked(user) {
      var _this2 = this;

      axios.put("users/Activated/" + user.id, {
        statut: user.statut,
        id: user.id
      }).then(function (response) {
        if (response.data.success) {
          if (user.statut) {
            user.statut = 1;

            _this2.makeToast("success", _this2.$t("ActivateUser"), _this2.$t("Success"));
          } else {
            user.statut = 0;

            _this2.makeToast("success", _this2.$t("DisActivateUser"), _this2.$t("Success"));
          }
        } else {
          user.statut = 1;

          _this2.makeToast("warning", _this2.$t("Delete.Therewassomethingwronge"), _this2.$t("Warning"));
        }
      })["catch"](function (error) {
        user.statut = 1;

        _this2.makeToast("warning", _this2.$t("Delete.Therewassomethingwronge"), _this2.$t("Warning"));
      });
    },
    //--------------------------- Users PDF ---------------------------\\
    Users_PDF: function Users_PDF() {
      var self = this;
      var pdf = new jspdf__WEBPACK_IMPORTED_MODULE_1__["default"]("p", "pt");
      var columns = [{
        title: "First Name",
        dataKey: "firstname"
      }, {
        title: "Last Name",
        dataKey: "lastname"
      }, {
        title: "Username",
        dataKey: "username"
      }, {
        title: "Email",
        dataKey: "email"
      }, {
        title: "Phone",
        dataKey: "phone"
      }];
      pdf.autoTable(columns, self.users);
      pdf.text("User List", 40, 25);
      pdf.save("User_List.pdf");
    },
    //------------------------ Users Excel ---------------------------\\
    Users_Excel: function Users_Excel() {
      // Start the progress bar.
      nprogress__WEBPACK_IMPORTED_MODULE_2___default.a.start();
      nprogress__WEBPACK_IMPORTED_MODULE_2___default.a.set(0.1);
      axios.get("users/export/Excel", {
        responseType: "blob",
        // important
        headers: {
          "Content-Type": "application/json"
        }
      }).then(function (response) {
        var url = window.URL.createObjectURL(new Blob([response.data]));
        var link = document.createElement("a");
        link.href = url;
        link.setAttribute("download", "List_Users.xlsx");
        document.body.appendChild(link);
        link.click(); // Complete the animation of theprogress bar.

        setTimeout(function () {
          return nprogress__WEBPACK_IMPORTED_MODULE_2___default.a.done();
        }, 500);
      })["catch"](function () {
        // Complete the animation of theprogress bar.
        setTimeout(function () {
          return nprogress__WEBPACK_IMPORTED_MODULE_2___default.a.done();
        }, 500);
      });
    },
    // Simply replaces null values with strings=''
    setToStrings: function setToStrings() {
      if (this.Filter_status === null) {
        this.Filter_status = "";
      }
    },
    //----------------------------------- Get All Users  ---------------------------\\
    Get_Users: function Get_Users(page) {
      var _this3 = this;

      // Start the progress bar.
      nprogress__WEBPACK_IMPORTED_MODULE_2___default.a.start();
      nprogress__WEBPACK_IMPORTED_MODULE_2___default.a.set(0.1);
      this.setToStrings();
      axios.get("clients?page=" + page + "&name=" + this.Filter_Name + "&statut=" + this.Filter_status + "&phone=" + this.Filter_Phone + "&email=" + this.Filter_Email + "&SortField=" + this.serverParams.sort.field + "&SortType=" + this.serverParams.sort.type + "&search=" + this.search + "&limit=" + this.limit).then(function (response) {
        _this3.users = response.data.clients; // this.roles = response.data.roles;

        _this3.totalRows = response.data.totalRows; // Complete the animation of theprogress bar.

        nprogress__WEBPACK_IMPORTED_MODULE_2___default.a.done();
        _this3.isLoading = false;
      })["catch"](function (response) {
        // Complete the animation of theprogress bar.
        nprogress__WEBPACK_IMPORTED_MODULE_2___default.a.done();
        setTimeout(function () {
          _this3.isLoading = false;
        }, 500);
      });
    },
    //------------------------------ Show Modal (Create User) -------------------------------\\
    New_User: function New_User() {
      this.reset_Form();
      this.editmode = false;
      this.$bvModal.show("New_User");
    },
    //------------------------------ Show Modal (Update User) -------------------------------\\
    Edit_User: function Edit_User(user) {
      this.Get_Users(this.serverParams.page);
      this.reset_Form();
      this.user = user;
      this.user.NewPassword = null;
      this.editmode = true;
      this.$bvModal.show("New_User");
    },
    //------------------------------ Event Upload Avatar -------------------------------\\
    onFileSelected: function onFileSelected(e) {
      var _this4 = this;

      return _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee() {
        var _yield$_this4$$refs$A, valid;

        return _regeneratorRuntime().wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                _context.next = 2;
                return _this4.$refs.Avatar.validate(e);

              case 2:
                _yield$_this4$$refs$A = _context.sent;
                valid = _yield$_this4$$refs$A.valid;

                if (valid) {
                  _this4.user.avatar = e.target.files[0];
                } else {
                  _this4.user.avatar = "";
                }

              case 5:
              case "end":
                return _context.stop();
            }
          }
        }, _callee);
      }))();
    },
    //------------------------ Create User ---------------------------\\
    Create_User: function Create_User() {
      var _this5 = this;

      var self = this;
      self.SubmitProcessing = true;
      self.data.append("firstname", self.user.firstname);
      self.data.append("lastname", self.user.lastname);
      self.data.append("username", self.user.username);
      self.data.append("email", self.user.email);
      self.data.append("password", self.user.password);
      self.data.append("phone", self.user.phone);
      self.data.append("role", self.user.role_id);
      self.data.append("area_name", self.user.area_name);
      self.data.append("location_lat", self.user.location_lat);
      self.data.append("address", self.user.address);
      self.data.append("location_long", self.user.location_long);
      self.data.append("code", self.user.code);
      self.data.append("avatar", self.user.avatar);
      axios.post("clients", self.data).then(function (response) {
        self.SubmitProcessing = false;
        Fire.$emit("Event_User");

        _this5.makeToast("success", _this5.$t("Create.TitleUser"), _this5.$t("Success"));
      })["catch"](function (error) {
        self.SubmitProcessing = false;

        if (error.errors.email.length > 0) {
          self.email_exist = error.errors.email[0];
        }

        _this5.makeToast("danger", _this5.$t("InvalidData"), _this5.$t("Failed"));
      });
    },
    //----------------------- Update User ---------------------------\\
    Update_User: function Update_User() {
      var _this6 = this;

      var self = this;
      self.SubmitProcessing = true;
      self.data.append("firstname", self.user.firstname);
      self.data.append("lastname", self.user.lastname);
      self.data.append("username", self.user.username);
      self.data.append("email", self.user.email);
      self.data.append("NewPassword", self.user.NewPassword);
      self.data.append("phone", self.user.phone);
      self.data.append("role", self.user.role_id);
      self.data.append("statut", self.user.statut);
      self.data.append("avatar", self.user.avatar);
      self.data.append("area_name", self.user.area_name);
      self.data.append("location_lat", self.user.location_lat);
      self.data.append("address", self.user.address);
      self.data.append("location_long", self.user.location_long);
      self.data.append("code", self.user.code);
      self.data.append("_method", "put");
      axios.post("clients/" + this.user.id, self.data).then(function (response) {
        _this6.makeToast("success", _this6.$t("Update.TitleUser"), _this6.$t("Success"));

        Fire.$emit("Event_User");
        self.SubmitProcessing = false;
      })["catch"](function (error) {
        if (error.errors.email.length > 0) {
          self.email_exist = error.errors.email[0];
        }

        _this6.makeToast("danger", _this6.$t("InvalidData"), _this6.$t("Failed"));

        self.SubmitProcessing = false;
      });
    },
    Remove_Provider: function Remove_Provider(id) {
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
          axios["delete"]("clients/" + id).then(function () {
            _this7.$swal(_this7.$t("Delete.Deleted"), _this7.$t("Delete.SupplierDeleted"), "success");

            Fire.$emit("Delete_Provider");
          })["catch"](function () {
            _this7.$swal(_this7.$t("Delete.Failed"), _this7.$t("Delete.ProviderError"), "warning");
          });
        }
      });
    },
    //----------------------------- Reset Form ---------------------------\\
    reset_Form: function reset_Form() {
      this.user = {
        id: "",
        area_name: "",
        location_lat: "",
        address: "",
        location_long: "",
        firstname: "",
        lastname: "",
        username: "",
        password: "",
        NewPassword: null,
        email: "",
        phone: "",
        statut: "",
        role_id: "",
        avatar: ""
      };
      this.email_exist = "";
    },
    //--------------------------------- Remove User ---------------------------\\
    Remove_User: function Remove_User(id) {
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
          axios["delete"]("clients/" + id).then(function () {
            _this8.$swal(_this8.$t("Delete.Deleted"), _this8.$t("Delete.UserDeleted"), "success");

            Fire.$emit("Delete_User");
          })["catch"](function () {
            _this8.$swal(_this8.$t("Delete.Failed"), "this User already linked with other operation", "warning");
          });
        }
      });
    }
  },
  // END METHODS
  //----------------------------- Created function-------------------
  created: function created() {
    var _this9 = this;

    this.Get_Users(1);
    Fire.$on("Event_User", function () {
      setTimeout(function () {
        _this9.Get_Users(_this9.serverParams.page);

        _this9.$bvModal.hide("New_User");
      }, 500);
    });
    Fire.$on("Delete_User", function () {
      setTimeout(function () {
        _this9.Get_Users(_this9.serverParams.page);
      }, 500);
    });
  }
});

/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/src/views/app/pages/people/customers.vue?vue&type=template&id=06204732&":
/*!*************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/src/views/app/pages/people/customers.vue?vue&type=template&id=06204732& ***!
  \*************************************************************************************************************************************************************************************************************************/
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
        attrs: { page: _vm.$t("CustomerManagement"), folder: _vm.$t("Users") },
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
                    id: "print_Invoice",
                    mode: "remote",
                    columns: _vm.columns,
                    totalRows: _vm.totalRows,
                    rows: _vm.users,
                    "search-options": {
                      enabled: true,
                      placeholder: _vm.$t("Search_this_table"),
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
                  scopedSlots: _vm._u([
                    {
                      key: "table-row",
                      fn: function (props) {
                        return [
                          props.column.field == "actions"
                            ? _c("span", [
                                _vm.currentUserPermissions &&
                                _vm.currentUserPermissions.includes(
                                  "users_edit"
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
                                        attrs: { title: "Edit" },
                                        on: {
                                          click: function ($event) {
                                            return _vm.Edit_User(props.row)
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
                                  "users_edit"
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
                                            return _vm.Remove_Provider(
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
                              ])
                            : props.column.field == "statut"
                            ? _c("div", [
                                _c(
                                  "label",
                                  { staticClass: "switch switch-primary mr-3" },
                                  [
                                    _c("input", {
                                      directives: [
                                        {
                                          name: "model",
                                          rawName: "v-model",
                                          value: props.row.statut,
                                          expression: "props.row.statut",
                                        },
                                      ],
                                      attrs: { type: "checkbox" },
                                      domProps: {
                                        checked: Array.isArray(props.row.statut)
                                          ? _vm._i(props.row.statut, null) > -1
                                          : props.row.statut,
                                      },
                                      on: {
                                        change: [
                                          function ($event) {
                                            var $$a = props.row.statut,
                                              $$el = $event.target,
                                              $$c = $$el.checked ? true : false
                                            if (Array.isArray($$a)) {
                                              var $$v = null,
                                                $$i = _vm._i($$a, $$v)
                                              if ($$el.checked) {
                                                $$i < 0 &&
                                                  _vm.$set(
                                                    props.row,
                                                    "statut",
                                                    $$a.concat([$$v])
                                                  )
                                              } else {
                                                $$i > -1 &&
                                                  _vm.$set(
                                                    props.row,
                                                    "statut",
                                                    $$a
                                                      .slice(0, $$i)
                                                      .concat(
                                                        $$a.slice($$i + 1)
                                                      )
                                                  )
                                              }
                                            } else {
                                              _vm.$set(props.row, "statut", $$c)
                                            }
                                          },
                                          function ($event) {
                                            return _vm.isChecked(props.row)
                                          },
                                        ],
                                      },
                                    }),
                                    _vm._v(" "),
                                    _c("span", { staticClass: "slider" }),
                                  ]
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
                          attrs: { variant: "outline-info m-1", size: "sm" },
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
                          attrs: { size: "sm", variant: "outline-success m-1" },
                          on: {
                            click: function ($event) {
                              return _vm.Users_PDF()
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
                          attrs: { size: "sm", variant: "outline-danger m-1" },
                          on: {
                            click: function ($event) {
                              return _vm.Users_Excel()
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
                      _vm.currentUserPermissions.includes("users_add")
                        ? _c(
                            "b-button",
                            {
                              attrs: {
                                size: "sm",
                                variant: "btn btn-primary btn-icon m-1",
                              },
                              on: {
                                click: function ($event) {
                                  return _vm.New_User()
                                },
                              },
                            },
                            [
                              _c("i", { staticClass: "i-Add" }),
                              _vm._v(
                                "\n          " +
                                  _vm._s(_vm.$t("Add")) +
                                  "\n        "
                              ),
                            ]
                          )
                        : _vm._e(),
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
                        { attrs: { label: _vm.$t("username") } },
                        [
                          _c("b-form-input", {
                            attrs: {
                              label: "Code",
                              placeholder: _vm.$t("username"),
                            },
                            model: {
                              value: _vm.Filter_Name,
                              callback: function ($$v) {
                                _vm.Filter_Name = $$v
                              },
                              expression: "Filter_Name",
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
                        { attrs: { label: _vm.$t("Phone") } },
                        [
                          _c("b-form-input", {
                            attrs: {
                              label: "Phone",
                              placeholder: _vm.$t("SearchByPhone"),
                            },
                            model: {
                              value: _vm.Filter_Phone,
                              callback: function ($$v) {
                                _vm.Filter_Phone = $$v
                              },
                              expression: "Filter_Phone",
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
                        { attrs: { label: _vm.$t("Email") } },
                        [
                          _c("b-form-input", {
                            attrs: {
                              label: "Email",
                              placeholder: _vm.$t("SearchByEmail"),
                            },
                            model: {
                              value: _vm.Filter_Email,
                              callback: function ($$v) {
                                _vm.Filter_Email = $$v
                              },
                              expression: "Filter_Email",
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
                                { label: "Actif", value: "1" },
                                { label: "Inactif", value: "0" },
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
                            variant: "primary m-1",
                            size: "sm",
                            block: "",
                          },
                          on: {
                            click: function ($event) {
                              return _vm.Get_Users(_vm.serverParams.page)
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
                            variant: "danger m-1",
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
        "validation-observer",
        { ref: "Create_User" },
        [
          _c(
            "b-modal",
            {
              attrs: {
                "hide-footer": "",
                size: "lg",
                id: "New_User",
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
                      return _vm.Submit_User($event)
                    },
                  },
                },
                [
                  _c(
                    "b-row",
                    [
                      _c(
                        "b-col",
                        { attrs: { md: "6", sm: "12" } },
                        [
                          _c("validation-provider", {
                            attrs: {
                              name: "Firstname",
                              rules: { required: true, min: 3, max: 30 },
                            },
                            scopedSlots: _vm._u([
                              {
                                key: "default",
                                fn: function (validationContext) {
                                  return [
                                    _c(
                                      "b-form-group",
                                      { attrs: { label: _vm.$t("Firstname") } },
                                      [
                                        _c("b-form-input", {
                                          attrs: {
                                            state:
                                              _vm.getValidationState(
                                                validationContext
                                              ),
                                            "aria-describedby":
                                              "Firstname-feedback",
                                            label: "Firstname",
                                          },
                                          model: {
                                            value: _vm.user.firstname,
                                            callback: function ($$v) {
                                              _vm.$set(
                                                _vm.user,
                                                "firstname",
                                                $$v
                                              )
                                            },
                                            expression: "user.firstname",
                                          },
                                        }),
                                        _vm._v(" "),
                                        _c(
                                          "b-form-invalid-feedback",
                                          {
                                            attrs: { id: "Firstname-feedback" },
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
                        { attrs: { md: "6", sm: "12" } },
                        [
                          _c("validation-provider", {
                            attrs: {
                              name: "lastname",
                              rules: { required: true, min: 3, max: 30 },
                            },
                            scopedSlots: _vm._u([
                              {
                                key: "default",
                                fn: function (validationContext) {
                                  return [
                                    _c(
                                      "b-form-group",
                                      { attrs: { label: _vm.$t("lastname") } },
                                      [
                                        _c("b-form-input", {
                                          attrs: {
                                            state:
                                              _vm.getValidationState(
                                                validationContext
                                              ),
                                            "aria-describedby":
                                              "lastname-feedback",
                                            label: "lastname",
                                          },
                                          model: {
                                            value: _vm.user.lastname,
                                            callback: function ($$v) {
                                              _vm.$set(
                                                _vm.user,
                                                "lastname",
                                                $$v
                                              )
                                            },
                                            expression: "user.lastname",
                                          },
                                        }),
                                        _vm._v(" "),
                                        _c(
                                          "b-form-invalid-feedback",
                                          {
                                            attrs: { id: "lastname-feedback" },
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
                        { attrs: { md: "6", sm: "12" } },
                        [
                          _c("validation-provider", {
                            attrs: {
                              name: "username",
                              rules: { required: true, min: 3, max: 30 },
                            },
                            scopedSlots: _vm._u([
                              {
                                key: "default",
                                fn: function (validationContext) {
                                  return [
                                    _c(
                                      "b-form-group",
                                      { attrs: { label: _vm.$t("username") } },
                                      [
                                        _c("b-form-input", {
                                          attrs: {
                                            state:
                                              _vm.getValidationState(
                                                validationContext
                                              ),
                                            "aria-describedby":
                                              "username-feedback",
                                            label: "username",
                                          },
                                          model: {
                                            value: _vm.user.username,
                                            callback: function ($$v) {
                                              _vm.$set(
                                                _vm.user,
                                                "username",
                                                $$v
                                              )
                                            },
                                            expression: "user.username",
                                          },
                                        }),
                                        _vm._v(" "),
                                        _c(
                                          "b-form-invalid-feedback",
                                          {
                                            attrs: { id: "username-feedback" },
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
                        { attrs: { md: "6", sm: "12" } },
                        [
                          _c("validation-provider", {
                            attrs: {
                              name: "code",
                              rules: { required: true, min: 3, max: 30 },
                            },
                            scopedSlots: _vm._u([
                              {
                                key: "default",
                                fn: function (validationContext) {
                                  return [
                                    _c(
                                      "b-form-group",
                                      { attrs: { label: _vm.$t("code") } },
                                      [
                                        _c("b-form-input", {
                                          attrs: {
                                            state:
                                              _vm.getValidationState(
                                                validationContext
                                              ),
                                            "aria-describedby":
                                              "username-feedback",
                                            label: "code",
                                          },
                                          model: {
                                            value: _vm.user.code,
                                            callback: function ($$v) {
                                              _vm.$set(_vm.user, "code", $$v)
                                            },
                                            expression: "user.code",
                                          },
                                        }),
                                        _vm._v(" "),
                                        _c(
                                          "b-form-invalid-feedback",
                                          {
                                            attrs: { id: "username-feedback" },
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
                        { attrs: { md: "6", sm: "12" } },
                        [
                          _c("validation-provider", {
                            attrs: { name: "Phone", rules: { required: true } },
                            scopedSlots: _vm._u([
                              {
                                key: "default",
                                fn: function (validationContext) {
                                  return [
                                    _c(
                                      "b-form-group",
                                      { attrs: { label: _vm.$t("Phone") } },
                                      [
                                        _c("b-form-input", {
                                          attrs: {
                                            state:
                                              _vm.getValidationState(
                                                validationContext
                                              ),
                                            "aria-describedby":
                                              "Phone-feedback",
                                            label: "Phone",
                                          },
                                          model: {
                                            value: _vm.user.phone,
                                            callback: function ($$v) {
                                              _vm.$set(_vm.user, "phone", $$v)
                                            },
                                            expression: "user.phone",
                                          },
                                        }),
                                        _vm._v(" "),
                                        _c(
                                          "b-form-invalid-feedback",
                                          { attrs: { id: "Phone-feedback" } },
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
                        { attrs: { md: "6", sm: "12" } },
                        [
                          _c("validation-provider", {
                            attrs: {
                              name: "location_lat",
                              rules: { required: true, min: 3, max: 30 },
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
                                          label: _vm.$t("location_lat"),
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
                                              "username-feedback",
                                            label: "location_lat",
                                          },
                                          model: {
                                            value: _vm.user.location_lat,
                                            callback: function ($$v) {
                                              _vm.$set(
                                                _vm.user,
                                                "location_lat",
                                                $$v
                                              )
                                            },
                                            expression: "user.location_lat",
                                          },
                                        }),
                                        _vm._v(" "),
                                        _c(
                                          "b-form-invalid-feedback",
                                          {
                                            attrs: { id: "username-feedback" },
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
                        { attrs: { md: "6", sm: "12" } },
                        [
                          _c("validation-provider", {
                            attrs: {
                              name: "location_long",
                              rules: { required: true },
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
                                          label: _vm.$t("location_long"),
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
                                              "Phone-feedback",
                                            label: "location_long",
                                          },
                                          model: {
                                            value: _vm.user.location_long,
                                            callback: function ($$v) {
                                              _vm.$set(
                                                _vm.user,
                                                "location_long",
                                                $$v
                                              )
                                            },
                                            expression: "user.location_long",
                                          },
                                        }),
                                        _vm._v(" "),
                                        _c(
                                          "b-form-invalid-feedback",
                                          { attrs: { id: "Phone-feedback" } },
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
                        { attrs: { md: "6", sm: "12" } },
                        [
                          _c("validation-provider", {
                            attrs: {
                              name: "address",
                              rules: { required: true },
                            },
                            scopedSlots: _vm._u([
                              {
                                key: "default",
                                fn: function (validationContext) {
                                  return [
                                    _c(
                                      "b-form-group",
                                      { attrs: { label: _vm.$t("address") } },
                                      [
                                        _c("b-form-input", {
                                          attrs: {
                                            state:
                                              _vm.getValidationState(
                                                validationContext
                                              ),
                                            "aria-describedby":
                                              "Phone-feedback",
                                            label: "address",
                                          },
                                          model: {
                                            value: _vm.user.address,
                                            callback: function ($$v) {
                                              _vm.$set(_vm.user, "address", $$v)
                                            },
                                            expression: "user.address",
                                          },
                                        }),
                                        _vm._v(" "),
                                        _c(
                                          "b-form-invalid-feedback",
                                          { attrs: { id: "Phone-feedback" } },
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
                        { attrs: { md: "6", sm: "12" } },
                        [
                          _c("validation-provider", {
                            attrs: {
                              name: "area_name",
                              rules: { required: true },
                            },
                            scopedSlots: _vm._u([
                              {
                                key: "default",
                                fn: function (validationContext) {
                                  return [
                                    _c(
                                      "b-form-group",
                                      { attrs: { label: _vm.$t("area_name") } },
                                      [
                                        _c("b-form-input", {
                                          attrs: {
                                            state:
                                              _vm.getValidationState(
                                                validationContext
                                              ),
                                            "aria-describedby":
                                              "Phone-feedback",
                                            label: "area_name",
                                          },
                                          model: {
                                            value: _vm.user.area_name,
                                            callback: function ($$v) {
                                              _vm.$set(
                                                _vm.user,
                                                "area_name",
                                                $$v
                                              )
                                            },
                                            expression: "user.area_name",
                                          },
                                        }),
                                        _vm._v(" "),
                                        _c(
                                          "b-form-invalid-feedback",
                                          { attrs: { id: "Phone-feedback" } },
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
                        { attrs: { md: "6", sm: "12" } },
                        [
                          _c("validation-provider", {
                            attrs: { name: "Email", rules: { required: true } },
                            scopedSlots: _vm._u([
                              {
                                key: "default",
                                fn: function (validationContext) {
                                  return [
                                    _c(
                                      "b-form-group",
                                      { attrs: { label: _vm.$t("Email") } },
                                      [
                                        _c("b-form-input", {
                                          attrs: {
                                            state:
                                              _vm.getValidationState(
                                                validationContext
                                              ),
                                            "aria-describedby":
                                              "Email-feedback",
                                            label: "Email",
                                          },
                                          model: {
                                            value: _vm.user.email,
                                            callback: function ($$v) {
                                              _vm.$set(_vm.user, "email", $$v)
                                            },
                                            expression: "user.email",
                                          },
                                        }),
                                        _vm._v(" "),
                                        _c(
                                          "b-form-invalid-feedback",
                                          { attrs: { id: "Email-feedback" } },
                                          [
                                            _vm._v(
                                              _vm._s(
                                                validationContext.errors[0]
                                              )
                                            ),
                                          ]
                                        ),
                                        _vm._v(" "),
                                        _vm.email_exist != ""
                                          ? _c(
                                              "b-alert",
                                              {
                                                staticClass: "error mt-1",
                                                attrs: {
                                                  show: "",
                                                  variant: "danger",
                                                },
                                              },
                                              [_vm._v(_vm._s(_vm.email_exist))]
                                            )
                                          : _vm._e(),
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
                      !_vm.editmode
                        ? _c(
                            "b-col",
                            { attrs: { md: "6", sm: "12" } },
                            [
                              _c("validation-provider", {
                                attrs: {
                                  name: "password",
                                  rules: { required: true, min: 6, max: 14 },
                                },
                                scopedSlots: _vm._u(
                                  [
                                    {
                                      key: "default",
                                      fn: function (validationContext) {
                                        return [
                                          _c(
                                            "b-form-group",
                                            {
                                              attrs: {
                                                label: _vm.$t("password"),
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
                                                    "password-feedback",
                                                  label: "password",
                                                  type: "password",
                                                },
                                                model: {
                                                  value: _vm.user.password,
                                                  callback: function ($$v) {
                                                    _vm.$set(
                                                      _vm.user,
                                                      "password",
                                                      $$v
                                                    )
                                                  },
                                                  expression: "user.password",
                                                },
                                              }),
                                              _vm._v(" "),
                                              _c(
                                                "b-form-invalid-feedback",
                                                {
                                                  attrs: {
                                                    id: "password-feedback",
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
                                  2321465681
                                ),
                              }),
                            ],
                            1
                          )
                        : _vm._e(),
                      _vm._v(" "),
                      _c(
                        "b-col",
                        { attrs: { md: "6", sm: "12" } },
                        [
                          _c("validation-provider", {
                            ref: "Avatar",
                            attrs: {
                              name: "Avatar",
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
                                    { attrs: { label: _vm.$t("UserImage") } },
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
                                          label: "Choose Avatar",
                                          type: "file",
                                        },
                                        on: { change: _vm.onFileSelected },
                                      }),
                                      _vm._v(" "),
                                      _c(
                                        "b-form-invalid-feedback",
                                        { attrs: { id: "Avatar-feedback" } },
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
                      _vm.editmode
                        ? _c(
                            "b-col",
                            { attrs: { md: "6" } },
                            [
                              _c("validation-provider", {
                                attrs: {
                                  name: "New password",
                                  rules: { min: 6, max: 14 },
                                },
                                scopedSlots: _vm._u(
                                  [
                                    {
                                      key: "default",
                                      fn: function (validationContext) {
                                        return [
                                          _c(
                                            "b-form-group",
                                            {
                                              attrs: {
                                                label: _vm.$t("Newpassword"),
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
                                                    "Nawpassword-feedback",
                                                  placeholder:
                                                    _vm.$t("LeaveBlank"),
                                                  label: "New password",
                                                },
                                                model: {
                                                  value: _vm.user.NewPassword,
                                                  callback: function ($$v) {
                                                    _vm.$set(
                                                      _vm.user,
                                                      "NewPassword",
                                                      $$v
                                                    )
                                                  },
                                                  expression:
                                                    "user.NewPassword",
                                                },
                                              }),
                                              _vm._v(" "),
                                              _c(
                                                "b-form-invalid-feedback",
                                                {
                                                  attrs: {
                                                    id: "Nawpassword-feedback",
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
                                  1010016937
                                ),
                              }),
                            ],
                            1
                          )
                        : _vm._e(),
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

/***/ "./resources/src/views/app/pages/people/customers.vue":
/*!************************************************************!*\
  !*** ./resources/src/views/app/pages/people/customers.vue ***!
  \************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _customers_vue_vue_type_template_id_06204732___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./customers.vue?vue&type=template&id=06204732& */ "./resources/src/views/app/pages/people/customers.vue?vue&type=template&id=06204732&");
/* harmony import */ var _customers_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./customers.vue?vue&type=script&lang=js& */ "./resources/src/views/app/pages/people/customers.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _customers_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _customers_vue_vue_type_template_id_06204732___WEBPACK_IMPORTED_MODULE_0__["render"],
  _customers_vue_vue_type_template_id_06204732___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/src/views/app/pages/people/customers.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/src/views/app/pages/people/customers.vue?vue&type=script&lang=js&":
/*!*************************************************************************************!*\
  !*** ./resources/src/views/app/pages/people/customers.vue?vue&type=script&lang=js& ***!
  \*************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_customers_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../node_modules/babel-loader/lib??ref--4-0!../../../../../../node_modules/vue-loader/lib??vue-loader-options!./customers.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/src/views/app/pages/people/customers.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_customers_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/src/views/app/pages/people/customers.vue?vue&type=template&id=06204732&":
/*!*******************************************************************************************!*\
  !*** ./resources/src/views/app/pages/people/customers.vue?vue&type=template&id=06204732& ***!
  \*******************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_customers_vue_vue_type_template_id_06204732___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../../node_modules/vue-loader/lib??vue-loader-options!./customers.vue?vue&type=template&id=06204732& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/src/views/app/pages/people/customers.vue?vue&type=template&id=06204732&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_customers_vue_vue_type_template_id_06204732___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_customers_vue_vue_type_template_id_06204732___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ })

}]);