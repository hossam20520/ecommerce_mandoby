(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["Governments"],{

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/src/views/app/pages/settings/Detail_Task.vue?vue&type=script&lang=js&":
/*!*************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/src/views/app/pages/settings/Detail_Task.vue?vue&type=script&lang=js& ***!
  \*************************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var vue_barcode__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vue-barcode */ "./node_modules/vue-barcode/index.js");
/* harmony import */ var vue_barcode__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(vue_barcode__WEBPACK_IMPORTED_MODULE_0__);
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


/* harmony default export */ __webpack_exports__["default"] = ({
  metaInfo: {
    title: "Detail Task"
  },
  components: {
    barcode: vue_barcode__WEBPACK_IMPORTED_MODULE_0___default.a
  },
  data: function data() {
    return {
      len: 8,
      images: [],
      imageArray: [],
      isLoading: true,
      task: {},
      roles: {},
      variants: []
    };
  },
  computed: _objectSpread({}, Object(vuex__WEBPACK_IMPORTED_MODULE_1__["mapGetters"])(["currentUser"])),
  methods: {
    //------- printtask
    print_task: function print_task() {
      var divContents = document.getElementById("print_task").innerHTML;
      var a = window.open("", "", "height=500, width=500");
      a.document.write('<link rel="stylesheet" href="/assets_setup/css/bootstrap.css"><html>');
      a.document.write("<body >");
      a.document.write(divContents);
      a.document.write("</body></html>");
      a.document.close();
      a.print();
    },
    //------------------------------Formetted Numbers -------------------------\
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
    //----------------------------------- Get Details Task ------------------------------\
    showDetails: function showDetails() {
      var _this = this;

      var id = this.$route.params.id;
      axios.get("Tasks/Detail/".concat(id)).then(function (response) {
        _this.task = response.data;
        _this.isLoading = false;
      })["catch"](function (response) {
        setTimeout(function () {
          _this.isLoading = false;
        }, 500);
      });
    }
  },
  //end Methods
  //-----------------------------Created function-------------------
  created: function created() {
    this.showDetails();
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/src/views/app/pages/settings/areas.vue?vue&type=script&lang=js&":
/*!*******************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/src/views/app/pages/settings/areas.vue?vue&type=script&lang=js& ***!
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
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
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
    title: "Area"
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
      areas: [],
      limit: "10",
      area: {
        id: "",
        ar_name: "",
        en_name: "",
        code: "",
        from: "",
        to: ""
      }
    };
  },
  computed: {
    columns: function columns() {
      return [{
        label: this.$t("code"),
        field: "code",
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
        label: this.$t("en_name"),
        field: "en_name",
        tdClass: "text-left",
        thClass: "text-left"
      }, {
        label: this.$t("ar_name"),
        field: "ar_name",
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
        this.Get_Areas(currentPage);
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
        this.Get_Areas(1);
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
      this.Get_Areas(this.serverParams.page);
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
      this.Get_Areas(this.serverParams.page);
    },
    //---- Validation State Form
    getValidationState: function getValidationState(_ref4) {
      var dirty = _ref4.dirty,
          validated = _ref4.validated,
          _ref4$valid = _ref4.valid,
          valid = _ref4$valid === void 0 ? null : _ref4$valid;
      return dirty || validated ? valid : null;
    },
    //------------- Submit Validation Create & Edit Area
    Submit_Area: function Submit_Area() {
      var _this2 = this;

      this.$refs.Create_area.validate().then(function (success) {
        if (!success) {
          _this2.makeToast("danger", _this2.$t("Please_fill_the_form_correctly"), _this2.$t("Failed"));
        } else {
          if (!_this2.editmode) {
            _this2.Create_Area();
          } else {
            _this2.Update_Area();
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
                  _this3.area.image = e.target.files[0];
                } else {
                  _this3.area.image = "";
                }

              case 5:
              case "end":
                return _context.stop();
            }
          }
        }, _callee);
      }))();
    },
    //------------------------------ Modal (create Area) -------------------------------\
    New_Area: function New_Area() {
      this.reset_Form();
      this.editmode = false;
      this.$bvModal.show("New_area");
    },
    //------------------------------ Modal (Update Area) -------------------------------\
    Edit_Area: function Edit_Area(area) {
      this.Get_Areas(this.serverParams.page);
      this.reset_Form();
      this.area = area;
      this.editmode = true;
      this.$bvModal.show("New_area");
    },
    //---------------------------------------- Get All areas-----------------\
    Get_Areas: function Get_Areas(page) {
      var _this4 = this;

      var id = this.$route.params.id; // Start the progress bar.

      nprogress__WEBPACK_IMPORTED_MODULE_0___default.a.start();
      nprogress__WEBPACK_IMPORTED_MODULE_0___default.a.set(0.1);
      axios.get("areas?page=" + page + "&SortField=" + this.serverParams.sort.field + "&SortType=" + this.serverParams.sort.type + "&search=" + this.search + "&id=" + id + "&limit=" + this.limit).then(function (response) {
        _this4.areas = response.data.areas;
        _this4.totalRows = response.data.totalRows; // Complete the animation of theprogress bar.

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
    //---------------------------------------- Create new area-----------------\
    Create_Area: function Create_Area() {
      var _this5 = this;

      var id = this.$route.params.id;
      var self = this;
      self.SubmitProcessing = true;
      self.data.append("ar_name", self.area.ar_name);
      self.data.append("en_name", self.area.en_name);
      self.data.append("code", self.area.code);
      self.data.append("from", self.area.from);
      self.data.append("to", self.area.to);
      self.data.append("gov_id", id);
      axios.post("areas", self.data).then(function (response) {
        self.SubmitProcessing = false;
        Fire.$emit("Event_Area");

        _this5.makeToast("success", _this5.$t("Create.TitleArea"), _this5.$t("Success"));
      })["catch"](function (error) {
        self.SubmitProcessing = false;

        _this5.makeToast("danger", _this5.$t("InvalidData"), _this5.$t("Failed"));
      });
    },
    //---------------------------------------- Update Area-----------------\
    Update_Area: function Update_Area() {
      var _this6 = this;

      var self = this;
      var id = this.$route.params.id;
      self.SubmitProcessing = true;
      self.data.append("en_name", self.area.en_name);
      self.data.append("ar_name", self.area.ar_name);
      self.data.append("code", self.area.code);
      self.data.append("gov_id", id);
      self.data.append("from", self.area.from);
      self.data.append("to", self.area.to);
      self.data.append("_method", "put");
      axios.post("areas/" + self.area.id, self.data).then(function (response) {
        self.SubmitProcessing = false;
        Fire.$emit("Event_Area");

        _this6.makeToast("success", _this6.$t("Update.TitleArea"), _this6.$t("Success"));
      })["catch"](function (error) {
        self.SubmitProcessing = false;

        _this6.makeToast("danger", _this6.$t("InvalidData"), _this6.$t("Failed"));
      });
    },
    //---------------------------------------- Reset Form -----------------\
    reset_Form: function reset_Form() {
      this.area = {
        id: "",
        ar_name: "",
        en_name: "",
        code: "",
        gov_id: "",
        from: "",
        to: ""
      };
      this.data = new FormData();
    },
    //---------------------------------------- Delete Area -----------------\
    Delete_Area: function Delete_Area(id) {
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
          axios["delete"]("areas/" + id).then(function () {
            _this7.$swal(_this7.$t("Delete.Deleted"), _this7.$t("Delete.TitleArea"), "success");

            Fire.$emit("Delete_Area");
          })["catch"](function () {
            _this7.$swal(_this7.$t("Delete.Failed"), _this7.$t("Delete.Therewassomethingwronge"), "warning");
          });
        }
      });
    },
    //---- Delete areas by selection
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
          axios.post("areas/delete/by_selection", {
            selectedIds: _this8.selectedIds
          }).then(function () {
            _this8.$swal(_this8.$t("Delete.Deleted"), _this8.$t("Delete.TitleArea"), "success");

            Fire.$emit("Delete_Area");
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

    this.Get_Areas(1);
    Fire.$on("Event_Area", function () {
      setTimeout(function () {
        _this9.Get_Areas(_this9.serverParams.page);

        _this9.$bvModal.hide("New_area");
      }, 500);
    });
    Fire.$on("Delete_Area", function () {
      setTimeout(function () {
        _this9.Get_Areas(_this9.serverParams.page);
      }, 500);
    });
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/src/views/app/pages/settings/governments.vue?vue&type=script&lang=js&":
/*!*************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/src/views/app/pages/settings/governments.vue?vue&type=script&lang=js& ***!
  \*************************************************************************************************************************************************************************************/
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

/* harmony default export */ __webpack_exports__["default"] = ({
  metaInfo: {
    title: "Government"
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
      governments: [],
      limit: "10",
      government: {
        id: "",
        ar_name: "",
        en_name: "",
        code: ""
      }
    };
  },
  computed: {
    columns: function columns() {
      return [{
        label: this.$t("code"),
        field: "code",
        tdClass: "text-left",
        thClass: "text-left"
      }, {
        label: this.$t("en_name"),
        field: "en_name",
        tdClass: "text-left",
        thClass: "text-left"
      }, {
        label: this.$t("ar_name"),
        field: "ar_name",
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
        this.Get_Governments(currentPage);
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
        this.Get_Governments(1);
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
      this.Get_Governments(this.serverParams.page);
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
      this.Get_Governments(this.serverParams.page);
    },
    //---- Validation State Form
    getValidationState: function getValidationState(_ref4) {
      var dirty = _ref4.dirty,
          validated = _ref4.validated,
          _ref4$valid = _ref4.valid,
          valid = _ref4$valid === void 0 ? null : _ref4$valid;
      return dirty || validated ? valid : null;
    },
    //------------- Submit Validation Create & Edit Government
    Submit_Government: function Submit_Government() {
      var _this2 = this;

      this.$refs.Create_government.validate().then(function (success) {
        if (!success) {
          _this2.makeToast("danger", _this2.$t("Please_fill_the_form_correctly"), _this2.$t("Failed"));
        } else {
          if (!_this2.editmode) {
            _this2.Create_Government();
          } else {
            _this2.Update_Government();
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
                  _this3.government.image = e.target.files[0];
                } else {
                  _this3.government.image = "";
                }

              case 5:
              case "end":
                return _context.stop();
            }
          }
        }, _callee);
      }))();
    },
    //------------------------------ Modal (create Government) -------------------------------\
    New_Government: function New_Government() {
      this.reset_Form();
      this.editmode = false;
      this.$bvModal.show("New_government");
    },
    //------------------------------ Modal (Update Government) -------------------------------\
    Edit_Government: function Edit_Government(government) {
      this.Get_Governments(this.serverParams.page);
      this.reset_Form();
      this.government = government;
      this.editmode = true;
      this.$bvModal.show("New_government");
    },
    //---------------------------------------- Get All governments-----------------\
    Get_Governments: function Get_Governments(page) {
      var _this4 = this;

      // Start the progress bar.
      nprogress__WEBPACK_IMPORTED_MODULE_0___default.a.start();
      nprogress__WEBPACK_IMPORTED_MODULE_0___default.a.set(0.1);
      axios.get("governments?page=" + page + "&SortField=" + this.serverParams.sort.field + "&SortType=" + this.serverParams.sort.type + "&search=" + this.search + "&limit=" + this.limit).then(function (response) {
        _this4.governments = response.data.governments;
        _this4.totalRows = response.data.totalRows; // Complete the animation of theprogress bar.

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
    //---------------------------------------- Create new government-----------------\
    Create_Government: function Create_Government() {
      var _this5 = this;

      var self = this;
      self.SubmitProcessing = true;
      self.data.append("ar_name", self.government.ar_name);
      self.data.append("en_name", self.government.en_name);
      self.data.append("code", self.government.code);
      axios.post("governments", self.data).then(function (response) {
        self.SubmitProcessing = false;
        Fire.$emit("Event_Government");

        _this5.makeToast("success", _this5.$t("Create.TitleGovernment"), _this5.$t("Success"));
      })["catch"](function (error) {
        self.SubmitProcessing = false;

        _this5.makeToast("danger", _this5.$t("InvalidData"), _this5.$t("Failed"));
      });
    },
    //---------------------------------------- Update Government-----------------\
    Update_Government: function Update_Government() {
      var _this6 = this;

      var self = this;
      self.SubmitProcessing = true;
      self.data.append("en_name", self.government.en_name);
      self.data.append("ar_name", self.government.ar_name);
      self.data.append("code", self.government.code);
      self.data.append("_method", "put");
      axios.post("governments/" + self.government.id, self.data).then(function (response) {
        self.SubmitProcessing = false;
        Fire.$emit("Event_Government");

        _this6.makeToast("success", _this6.$t("Update.TitleGovernment"), _this6.$t("Success"));
      })["catch"](function (error) {
        self.SubmitProcessing = false;

        _this6.makeToast("danger", _this6.$t("InvalidData"), _this6.$t("Failed"));
      });
    },
    //---------------------------------------- Reset Form -----------------\
    reset_Form: function reset_Form() {
      this.government = {
        id: "",
        ar_name: "",
        en_name: "",
        code: ""
      };
      this.data = new FormData();
    },
    //---------------------------------------- Delete Government -----------------\
    Delete_Government: function Delete_Government(id) {
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
          axios["delete"]("governments/" + id).then(function () {
            _this7.$swal(_this7.$t("Delete.Deleted"), _this7.$t("Delete.TitleGovernment"), "success");

            Fire.$emit("Delete_Government");
          })["catch"](function () {
            _this7.$swal(_this7.$t("Delete.Failed"), _this7.$t("Delete.Therewassomethingwronge"), "warning");
          });
        }
      });
    },
    //---- Delete governments by selection
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
          axios.post("governments/delete/by_selection", {
            selectedIds: _this8.selectedIds
          }).then(function () {
            _this8.$swal(_this8.$t("Delete.Deleted"), _this8.$t("Delete.TitleGovernment"), "success");

            Fire.$emit("Delete_Government");
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

    this.Get_Governments(1);
    Fire.$on("Event_Government", function () {
      setTimeout(function () {
        _this9.Get_Governments(_this9.serverParams.page);

        _this9.$bvModal.hide("New_government");
      }, 500);
    });
    Fire.$on("Delete_Government", function () {
      setTimeout(function () {
        _this9.Get_Governments(_this9.serverParams.page);
      }, 500);
    });
  }
});

/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/src/views/app/pages/settings/Detail_Task.vue?vue&type=template&id=3027ffa4&":
/*!*****************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/src/views/app/pages/settings/Detail_Task.vue?vue&type=template&id=3027ffa4& ***!
  \*****************************************************************************************************************************************************************************************************************************/
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
        attrs: { page: _vm.$t("TaskDetails"), folder: _vm.$t("Tasks") },
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
            { attrs: { "no-body": "" } },
            [
              _c("b-card-header"),
              _vm._v(" "),
              _c(
                "b-card-body",
                [
                  _c(
                    "b-row",
                    { attrs: { id: "print_task" } },
                    [
                      _c("b-col", { attrs: { md: "12" } }, [
                        _c(
                          "table",
                          {
                            staticClass:
                              "table table-hover table-bordered table-md",
                          },
                          [
                            _c("tbody", [
                              _c("tr", [
                                _c("td", [_vm._v('  "اسم العميل" ')]),
                                _vm._v(" "),
                                _c("th", [
                                  _vm._v(" " + _vm._s(_vm.task.survey.name)),
                                ]),
                              ]),
                              _vm._v(" "),
                              _c("tr", [
                                _c("td", [_vm._v('  "المدينة" ')]),
                                _vm._v(" "),
                                _c("th", [
                                  _vm._v(" " + _vm._s(_vm.task.survey.city)),
                                ]),
                              ]),
                              _vm._v(" "),
                              _c("tr", [
                                _c("td", [_vm._v(' "المنطقة" ')]),
                                _vm._v(" "),
                                _c("th", [
                                  _vm._v(" " + _vm._s(_vm.task.survey.area)),
                                ]),
                              ]),
                              _vm._v(" "),
                              _c("tr", [
                                _c("td", [_vm._v(' "هل قابلت الشخص المسؤل" ')]),
                                _vm._v(" "),
                                _c("th", [
                                  _vm._v(
                                    " " +
                                      _vm._s(
                                        _vm.task.survey.DIDMeatResponsiblePerson
                                      )
                                  ),
                                ]),
                              ]),
                              _vm._v(" "),
                              _c("tr", [
                                _c("td", [_vm._v('  "اسم المسؤل"  ')]),
                                _vm._v(" "),
                                _c("th", [
                                  _vm._v(
                                    " " +
                                      _vm._s(_vm.task.survey.NameResponsible)
                                  ),
                                ]),
                              ]),
                              _vm._v(" "),
                              _c("tr", [
                                _c("td", [_vm._v(' "رقم التليفون" ')]),
                                _vm._v(" "),
                                _c("th", [
                                  _vm._v(" " + _vm._s(_vm.task.survey.Phone)),
                                ]),
                              ]),
                              _vm._v(" "),
                              _c("tr", [
                                _c("td", [_vm._v('  "نوع النشاط" ')]),
                                _vm._v(" "),
                                _c("th", [
                                  _vm._v(
                                    " " + _vm._s(_vm.task.survey.activityType)
                                  ),
                                ]),
                              ]),
                              _vm._v(" "),
                              _c("tr", [
                                _c("td", [_vm._v(' "عنوان الإدارة"')]),
                                _vm._v(" "),
                                _c("th", [
                                  _vm._v(
                                    " " + _vm._s(_vm.task.survey.address_Detail)
                                  ),
                                ]),
                              ]),
                              _vm._v(" "),
                              _c("tr", [
                                _c("td", [_vm._v('  "عنوان التوصيل" ')]),
                                _vm._v(" "),
                                _c("th", [
                                  _vm._v(
                                    " " +
                                      _vm._s(_vm.task.survey.delevery_detail)
                                  ),
                                ]),
                              ]),
                              _vm._v(" "),
                              _c("tr", [
                                _c("td", [_vm._v('  "سبب االمكالمة" ')]),
                                _vm._v(" "),
                                _c("th", [
                                  _vm._v(
                                    " " + _vm._s(_vm.task.survey.reason_call)
                                  ),
                                ]),
                              ]),
                              _vm._v(" "),
                              _c("tr", [
                                _c("td", [
                                  _vm._v('   "هل يستخدم ابلكيشن للطلب" '),
                                ]),
                                _vm._v(" "),
                                _c("th", [
                                  _vm._v(
                                    " " +
                                      _vm._s(_vm.task.survey.usingApplication)
                                  ),
                                ]),
                              ]),
                              _vm._v(" "),
                              _c("tr", [
                                _c("td", [_vm._v('  "اللبن المستخدم" ')]),
                                _vm._v(" "),
                                _c("th", [
                                  _vm._v(
                                    " " + _vm._s(_vm.task.survey.milkused)
                                  ),
                                ]),
                              ]),
                              _vm._v(" "),
                              _c("tr", [
                                _c("td", [_vm._v('  "الكريمة المستخدمة" ')]),
                                _vm._v(" "),
                                _c("th", [
                                  _vm._v(
                                    " " + _vm._s(_vm.task.survey.kreemUsed)
                                  ),
                                ]),
                              ]),
                              _vm._v(" "),
                              _c("tr", [
                                _c("td", [_vm._v(' "التوابل المستخدمة"')]),
                                _vm._v(" "),
                                _c("th", [
                                  _vm._v(" " + _vm._s(_vm.task.survey.spices)),
                                ]),
                              ]),
                              _vm._v(" "),
                              _c("tr", [
                                _c("td", [_vm._v('"الجبن المستخدمة" ')]),
                                _vm._v(" "),
                                _c("th", [
                                  _vm._v(
                                    " " + _vm._s(_vm.task.survey.cheeseUsed)
                                  ),
                                ]),
                              ]),
                              _vm._v(" "),
                              _c("tr", [
                                _c("td", [_vm._v('  "الذبدة المستخدمة" ')]),
                                _vm._v(" "),
                                _c("th", [
                                  _vm._v(
                                    " " + _vm._s(_vm.task.survey.SelectedBatter)
                                  ),
                                ]),
                              ]),
                              _vm._v(" "),
                              _c("tr", [
                                _c("td", [_vm._v('  "الزيوت المستخدمة" ')]),
                                _vm._v(" "),
                                _c("th", [
                                  _vm._v(" " + _vm._s(_vm.task.survey.oilUsed)),
                                ]),
                              ]),
                              _vm._v(" "),
                              _c("tr", [
                                _c("td", [_vm._v(' "الشاى المستخدم" ')]),
                                _vm._v(" "),
                                _c("th", [
                                  _vm._v(" " + _vm._s(_vm.task.survey.teaused)),
                                ]),
                              ]),
                              _vm._v(" "),
                              _c("tr", [
                                _c("td", [_vm._v('  "ارز و بقوليات" ')]),
                                _vm._v(" "),
                                _c("th", [
                                  _vm._v(" " + _vm._s(_vm.task.survey.seeeds)),
                                ]),
                              ]),
                              _vm._v(" "),
                              _c("tr", [
                                _c("td", [_vm._v(' "الصوصات المستخدمة" ')]),
                                _vm._v(" "),
                                _c("th", [
                                  _vm._v(" " + _vm._s(_vm.task.survey.sauce)),
                                ]),
                              ]),
                              _vm._v(" "),
                              _c("tr", [
                                _c("td", [
                                  _vm._v('  "الشركة المنتجة للصوصات" '),
                                ]),
                                _vm._v(" "),
                                _c("th", [
                                  _vm._v(
                                    " " + _vm._s(_vm.task.survey.sauceCompany)
                                  ),
                                ]),
                              ]),
                              _vm._v(" "),
                              _c("tr", [
                                _c("td", [
                                  _vm._v(' "المشروبات الغازية المستخدمة" '),
                                ]),
                                _vm._v(" "),
                                _c("th", [
                                  _vm._v(
                                    " " + _vm._s(_vm.task.survey.watergasused)
                                  ),
                                ]),
                              ]),
                              _vm._v(" "),
                              _c("tr", [
                                _c("td", [_vm._v(' " المكرونة المستخدمة" ')]),
                                _vm._v(" "),
                                _c("th", [
                                  _vm._v(
                                    " " + _vm._s(_vm.task.survey.pastaUsed)
                                  ),
                                ]),
                              ]),
                              _vm._v(" "),
                              _c("tr", [
                                _c("td", [_vm._v('  "البن المستخدم" ')]),
                                _vm._v(" "),
                                _c("th", [
                                  _vm._v(" " + _vm._s(_vm.task.survey.bonUsed)),
                                ]),
                              ]),
                              _vm._v(" "),
                              _c("tr", [
                                _c("td", [_vm._v(' "عدد فروع العميل" ')]),
                                _vm._v(" "),
                                _c("th", [
                                  _vm._v(
                                    " " + _vm._s(_vm.task.survey.branchNumber)
                                  ),
                                ]),
                              ]),
                              _vm._v(" "),
                              _c("tr", [
                                _c("td", [_vm._v('  "ملخص الزيارة" ')]),
                                _vm._v(" "),
                                _c("th", [
                                  _vm._v(
                                    " " + _vm._s(_vm.task.survey.summryVisit)
                                  ),
                                ]),
                              ]),
                              _vm._v(" "),
                              _c("tr", [
                                _c("td", [
                                  _vm._v(
                                    " " + _vm._s("منتجات اخرى يستخدمها العميل")
                                  ),
                                ]),
                                _vm._v(" "),
                                _c("th", [
                                  _vm._v(
                                    " " +
                                      _vm._s(_vm.task.survey.productUsesClient)
                                  ),
                                ]),
                              ]),
                            ]),
                          ]
                        ),
                      ]),
                      _vm._v(" "),
                      _c(
                        "b-col",
                        { staticClass: "mb-30", attrs: { md: "4" } },
                        [
                          _c(
                            "div",
                            { staticClass: "carousel_wrap" },
                            [
                              _c(
                                "b-carousel",
                                {
                                  attrs: {
                                    id: "carousel-1",
                                    interval: 2000,
                                    controls: "",
                                    background: "#ababab",
                                    "img-width": "1024",
                                    "img-height": "480",
                                  },
                                  on: {
                                    "sliding-start": _vm.onSlideStart,
                                    "sliding-end": _vm.onSlideEnd,
                                  },
                                },
                                _vm._l(
                                  _vm.task.images,
                                  function (image, index) {
                                    return _c("b-carousel-slide", {
                                      key: index,
                                      attrs: {
                                        "img-src": "/images/tasks/" + image,
                                      },
                                    })
                                  }
                                ),
                                1
                              ),
                            ],
                            1
                          ),
                        ]
                      ),
                      _vm._v(" "),
                      _c("b-col", { staticClass: "mt-4", attrs: { md: "5" } }, [
                        _c("table", {
                          staticClass: "table table-hover table-sm",
                        }),
                      ]),
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

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/src/views/app/pages/settings/areas.vue?vue&type=template&id=13328c92&":
/*!***********************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/src/views/app/pages/settings/areas.vue?vue&type=template&id=13328c92& ***!
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
        attrs: { page: _vm.$t("Area"), folder: _vm.$t("Settings") },
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
                    rows: _vm.areas,
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
                              ? _c("span", [
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
                                      attrs: { title: "Edit" },
                                      on: {
                                        click: function ($event) {
                                          return _vm.Edit_Area(props.row)
                                        },
                                      },
                                    },
                                    [
                                      _c("i", {
                                        staticClass:
                                          "i-Edit text-25 text-success",
                                      }),
                                    ]
                                  ),
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
                                          return _vm.Delete_Area(props.row.id)
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
                                ])
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
                                        src: "/images/areas/" + props.row.image,
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
                    4045948829
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
                      _c(
                        "b-button",
                        {
                          staticClass: "btn-rounded",
                          attrs: { variant: "btn btn-primary btn-icon m-1" },
                          on: {
                            click: function ($event) {
                              return _vm.New_Area()
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
        "validation-observer",
        { ref: "Create_area" },
        [
          _c(
            "b-modal",
            {
              attrs: {
                "hide-footer": "",
                size: "md",
                id: "New_area",
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
                      return _vm.Submit_Area($event)
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
                                            value: _vm.area.ar_name,
                                            callback: function ($$v) {
                                              _vm.$set(_vm.area, "ar_name", $$v)
                                            },
                                            expression: "area.ar_name",
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
                                            value: _vm.area.en_name,
                                            callback: function ($$v) {
                                              _vm.$set(_vm.area, "en_name", $$v)
                                            },
                                            expression: "area.en_name",
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
                              name: "code",
                              rules: { required: true, min: 1, max: 55 },
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
                                            "aria-describedby": "Name-feedback",
                                            label: "code",
                                            placeholder: _vm.$t("code"),
                                          },
                                          model: {
                                            value: _vm.area.code,
                                            callback: function ($$v) {
                                              _vm.$set(_vm.area, "code", $$v)
                                            },
                                            expression: "area.code",
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
                              name: "from",
                              rules: { required: true, min: 1, max: 55 },
                            },
                            scopedSlots: _vm._u([
                              {
                                key: "default",
                                fn: function (validationContext) {
                                  return [
                                    _c(
                                      "b-form-group",
                                      { attrs: { label: _vm.$t("from") } },
                                      [
                                        _c("b-form-input", {
                                          attrs: {
                                            state:
                                              _vm.getValidationState(
                                                validationContext
                                              ),
                                            "aria-describedby": "Name-feedback",
                                            label: "from",
                                            placeholder: _vm.$t("from"),
                                          },
                                          model: {
                                            value: _vm.area.from,
                                            callback: function ($$v) {
                                              _vm.$set(_vm.area, "from", $$v)
                                            },
                                            expression: "area.from",
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
                              name: "to",
                              rules: { required: true, min: 1, max: 55 },
                            },
                            scopedSlots: _vm._u([
                              {
                                key: "default",
                                fn: function (validationContext) {
                                  return [
                                    _c(
                                      "b-form-group",
                                      { attrs: { label: _vm.$t("to") } },
                                      [
                                        _c("b-form-input", {
                                          attrs: {
                                            state:
                                              _vm.getValidationState(
                                                validationContext
                                              ),
                                            "aria-describedby": "Name-feedback",
                                            label: "to",
                                            placeholder: _vm.$t("to"),
                                          },
                                          model: {
                                            value: _vm.area.to,
                                            callback: function ($$v) {
                                              _vm.$set(_vm.area, "to", $$v)
                                            },
                                            expression: "area.to",
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

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/src/views/app/pages/settings/governments.vue?vue&type=template&id=1fc3d813&":
/*!*****************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/src/views/app/pages/settings/governments.vue?vue&type=template&id=1fc3d813& ***!
  \*****************************************************************************************************************************************************************************************************************************/
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
        attrs: { page: _vm.$t("Government"), folder: _vm.$t("Settings") },
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
                    rows: _vm.governments,
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
                                        attrs: { title: "Edit" },
                                        on: {
                                          click: function ($event) {
                                            return _vm.Edit_Government(
                                              props.row
                                            )
                                          },
                                        },
                                      },
                                      [
                                        _c("i", {
                                          staticClass:
                                            "i-Edit text-25 text-success",
                                        }),
                                      ]
                                    ),
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
                                            return _vm.Delete_Government(
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
                                    ),
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
                                          to: {
                                            name: "area",
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
                                    ),
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
                    1841648258
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
                      _c(
                        "b-button",
                        {
                          staticClass: "btn-rounded",
                          attrs: { variant: "btn btn-primary btn-icon m-1" },
                          on: {
                            click: function ($event) {
                              return _vm.New_Government()
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
        "validation-observer",
        { ref: "Create_government" },
        [
          _c(
            "b-modal",
            {
              attrs: {
                "hide-footer": "",
                size: "md",
                id: "New_government",
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
                      return _vm.Submit_Government($event)
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
                                            value: _vm.government.ar_name,
                                            callback: function ($$v) {
                                              _vm.$set(
                                                _vm.government,
                                                "ar_name",
                                                $$v
                                              )
                                            },
                                            expression: "government.ar_name",
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
                                            value: _vm.government.en_name,
                                            callback: function ($$v) {
                                              _vm.$set(
                                                _vm.government,
                                                "en_name",
                                                $$v
                                              )
                                            },
                                            expression: "government.en_name",
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
                              name: "code",
                              rules: { required: true, min: 3, max: 55 },
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
                                            "aria-describedby": "Name-feedback",
                                            label: "code",
                                            placeholder: _vm.$t("code"),
                                          },
                                          model: {
                                            value: _vm.government.code,
                                            callback: function ($$v) {
                                              _vm.$set(
                                                _vm.government,
                                                "code",
                                                $$v
                                              )
                                            },
                                            expression: "government.code",
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

/***/ "./resources/src/views/app/pages/settings/Detail_Task.vue":
/*!****************************************************************!*\
  !*** ./resources/src/views/app/pages/settings/Detail_Task.vue ***!
  \****************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Detail_Task_vue_vue_type_template_id_3027ffa4___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Detail_Task.vue?vue&type=template&id=3027ffa4& */ "./resources/src/views/app/pages/settings/Detail_Task.vue?vue&type=template&id=3027ffa4&");
/* harmony import */ var _Detail_Task_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Detail_Task.vue?vue&type=script&lang=js& */ "./resources/src/views/app/pages/settings/Detail_Task.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _Detail_Task_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _Detail_Task_vue_vue_type_template_id_3027ffa4___WEBPACK_IMPORTED_MODULE_0__["render"],
  _Detail_Task_vue_vue_type_template_id_3027ffa4___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/src/views/app/pages/settings/Detail_Task.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/src/views/app/pages/settings/Detail_Task.vue?vue&type=script&lang=js&":
/*!*****************************************************************************************!*\
  !*** ./resources/src/views/app/pages/settings/Detail_Task.vue?vue&type=script&lang=js& ***!
  \*****************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Detail_Task_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../node_modules/babel-loader/lib??ref--4-0!../../../../../../node_modules/vue-loader/lib??vue-loader-options!./Detail_Task.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/src/views/app/pages/settings/Detail_Task.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Detail_Task_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/src/views/app/pages/settings/Detail_Task.vue?vue&type=template&id=3027ffa4&":
/*!***********************************************************************************************!*\
  !*** ./resources/src/views/app/pages/settings/Detail_Task.vue?vue&type=template&id=3027ffa4& ***!
  \***********************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Detail_Task_vue_vue_type_template_id_3027ffa4___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../../node_modules/vue-loader/lib??vue-loader-options!./Detail_Task.vue?vue&type=template&id=3027ffa4& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/src/views/app/pages/settings/Detail_Task.vue?vue&type=template&id=3027ffa4&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Detail_Task_vue_vue_type_template_id_3027ffa4___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Detail_Task_vue_vue_type_template_id_3027ffa4___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./resources/src/views/app/pages/settings/areas.vue":
/*!**********************************************************!*\
  !*** ./resources/src/views/app/pages/settings/areas.vue ***!
  \**********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _areas_vue_vue_type_template_id_13328c92___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./areas.vue?vue&type=template&id=13328c92& */ "./resources/src/views/app/pages/settings/areas.vue?vue&type=template&id=13328c92&");
/* harmony import */ var _areas_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./areas.vue?vue&type=script&lang=js& */ "./resources/src/views/app/pages/settings/areas.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _areas_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _areas_vue_vue_type_template_id_13328c92___WEBPACK_IMPORTED_MODULE_0__["render"],
  _areas_vue_vue_type_template_id_13328c92___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/src/views/app/pages/settings/areas.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/src/views/app/pages/settings/areas.vue?vue&type=script&lang=js&":
/*!***********************************************************************************!*\
  !*** ./resources/src/views/app/pages/settings/areas.vue?vue&type=script&lang=js& ***!
  \***********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_areas_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../node_modules/babel-loader/lib??ref--4-0!../../../../../../node_modules/vue-loader/lib??vue-loader-options!./areas.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/src/views/app/pages/settings/areas.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_areas_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/src/views/app/pages/settings/areas.vue?vue&type=template&id=13328c92&":
/*!*****************************************************************************************!*\
  !*** ./resources/src/views/app/pages/settings/areas.vue?vue&type=template&id=13328c92& ***!
  \*****************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_areas_vue_vue_type_template_id_13328c92___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../../node_modules/vue-loader/lib??vue-loader-options!./areas.vue?vue&type=template&id=13328c92& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/src/views/app/pages/settings/areas.vue?vue&type=template&id=13328c92&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_areas_vue_vue_type_template_id_13328c92___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_areas_vue_vue_type_template_id_13328c92___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./resources/src/views/app/pages/settings/governments.vue":
/*!****************************************************************!*\
  !*** ./resources/src/views/app/pages/settings/governments.vue ***!
  \****************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _governments_vue_vue_type_template_id_1fc3d813___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./governments.vue?vue&type=template&id=1fc3d813& */ "./resources/src/views/app/pages/settings/governments.vue?vue&type=template&id=1fc3d813&");
/* harmony import */ var _governments_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./governments.vue?vue&type=script&lang=js& */ "./resources/src/views/app/pages/settings/governments.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _governments_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _governments_vue_vue_type_template_id_1fc3d813___WEBPACK_IMPORTED_MODULE_0__["render"],
  _governments_vue_vue_type_template_id_1fc3d813___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/src/views/app/pages/settings/governments.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/src/views/app/pages/settings/governments.vue?vue&type=script&lang=js&":
/*!*****************************************************************************************!*\
  !*** ./resources/src/views/app/pages/settings/governments.vue?vue&type=script&lang=js& ***!
  \*****************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_governments_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../node_modules/babel-loader/lib??ref--4-0!../../../../../../node_modules/vue-loader/lib??vue-loader-options!./governments.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/src/views/app/pages/settings/governments.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_governments_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/src/views/app/pages/settings/governments.vue?vue&type=template&id=1fc3d813&":
/*!***********************************************************************************************!*\
  !*** ./resources/src/views/app/pages/settings/governments.vue?vue&type=template&id=1fc3d813& ***!
  \***********************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_governments_vue_vue_type_template_id_1fc3d813___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../../node_modules/vue-loader/lib??vue-loader-options!./governments.vue?vue&type=template&id=1fc3d813& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/src/views/app/pages/settings/governments.vue?vue&type=template&id=1fc3d813&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_governments_vue_vue_type_template_id_1fc3d813___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_governments_vue_vue_type_template_id_1fc3d813___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ })

}]);