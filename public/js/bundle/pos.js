(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pos"],{

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/src/views/app/pages/pos.vue?vue&type=script&lang=js&":
/*!********************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/src/views/app/pages/pos.vue?vue&type=script&lang=js& ***!
  \********************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var nprogress__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! nprogress */ "./node_modules/nprogress/nprogress.js");
/* harmony import */ var nprogress__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(nprogress__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var vuex__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! vuex */ "./node_modules/vuex/dist/vuex.esm.js");
/* harmony import */ var vue_easy_print__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! vue-easy-print */ "./node_modules/vue-easy-print/src/index.js");
/* harmony import */ var vue_barcode__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! vue-barcode */ "./node_modules/vue-barcode/index.js");
/* harmony import */ var vue_barcode__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(vue_barcode__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var vue_flag_icon__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! vue-flag-icon */ "./node_modules/vue-flag-icon/index.js");
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../utils */ "./resources/src/utils/index.js");
/* harmony import */ var _stripe_stripe_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @stripe/stripe-js */ "./node_modules/@stripe/stripe-js/dist/stripe.esm.js");
function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }

var _objectSpread2;

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
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
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
  components: {
    vueEasyPrint: vue_easy_print__WEBPACK_IMPORTED_MODULE_2__["default"],
    barcode: vue_barcode__WEBPACK_IMPORTED_MODULE_3___default.a,
    FlagIcon: vue_flag_icon__WEBPACK_IMPORTED_MODULE_4__["default"]
  },
  metaInfo: {
    title: "POS"
  },
  data: function data() {
    return {
      langs: ["en", "fr", "ar", "de", "es", "it", "Ind", "thai", "tr_ch", "sm_ch", "tur", "ru", "hn", "vn"],
      stripe: {},
      stripe_key: "",
      cardElement: {},
      paymentProcessing: false,
      payment: {
        amount: "",
        received_amount: "",
        Reglement: "",
        notes: ""
      },
      focused: false,
      timer: null,
      search_input: '',
      product_filter: [],
      isLoading: true,
      GrandTotal: 0,
      total: 0,
      Ref: "",
      clients: [],
      units: [],
      warehouses: [],
      payments: [],
      products: [],
      products_pos: [],
      details: [],
      detail: {},
      categories: [],
      brands: [],
      pos_settings: {},
      product_currentPage: 1,
      paginated_Products: "",
      product_perPage: 8,
      product_totalRows: "",
      paginated_Brands: "",
      brand_currentPage: 1,
      brand_perPage: 3,
      paginated_Category: "",
      category_currentPage: 1,
      category_perPage: 3,
      barcodeFormat: "CODE128",
      invoice_pos: {
        sale: {
          Ref: "",
          client_name: "",
          discount: "",
          taxe: "",
          date: "",
          tax_rate: "",
          shipping: "",
          GrandTotal: "",
          paid_amount: ""
        },
        details: [],
        setting: {
          logo: "",
          CompanyName: "",
          CompanyAdress: "",
          email: "",
          CompanyPhone: ""
        }
      },
      sale: {
        warehouse_id: "",
        client_id: "",
        tax_rate: 0,
        shipping: 0,
        discount: 0,
        TaxNet: 0
      },
      client: {
        id: "",
        name: "",
        code: "",
        email: "",
        phone: "",
        country: "",
        city: "",
        adresse: ""
      },
      category_id: "",
      brand_id: "",
      product: {
        id: "",
        code: "",
        current: "",
        quantity: "",
        check_qty: "",
        discount: "",
        DiscountNet: "",
        discount_Method: "",
        sale_unit_id: "",
        fix_stock: "",
        fix_price: "",
        name: "",
        unitSale: "",
        Net_price: "",
        Unit_price: "",
        Total_price: "",
        subtotal: "",
        product_id: "",
        detail_id: "",
        taxe: "",
        tax_percent: "",
        tax_method: "",
        product_variant_id: ""
      },
      sound: "/audio/Beep.wav",
      audio: new Audio("/audio/Beep.wav")
    };
  },
  computed: _objectSpread(_objectSpread({}, Object(vuex__WEBPACK_IMPORTED_MODULE_1__["mapGetters"])(["currentUser", "currentUserPermissions"])), {}, {
    brand_totalRows: function brand_totalRows() {
      return this.brands.length;
    },
    category_totalRows: function category_totalRows() {
      return this.categories.length;
    }
  }),
  mounted: function mounted() {
    this.changeSidebarProperties();
    this.paginate_products(this.product_perPage, 0);
  },
  methods: _objectSpread(_objectSpread(_objectSpread({}, Object(vuex__WEBPACK_IMPORTED_MODULE_1__["mapActions"])(["changeSidebarProperties", "changeThemeMode", "logout"])), Object(vuex__WEBPACK_IMPORTED_MODULE_1__["mapGetters"])(["currentUser"])), {}, (_objectSpread2 = {
    logoutUser: function logoutUser() {
      this.$store.dispatch("logout");
    },
    loadStripe_payment: function loadStripe_payment() {
      var _this = this;

      return _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee() {
        var elements;
        return _regeneratorRuntime().wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                _context.next = 2;
                return Object(_stripe_stripe_js__WEBPACK_IMPORTED_MODULE_6__["loadStripe"])("".concat(_this.stripe_key));

              case 2:
                _this.stripe = _context.sent;
                elements = _this.stripe.elements();
                _this.cardElement = elements.create("card", {
                  classes: {
                    base: "bg-gray-100 rounded border border-gray-300 focus:border-indigo-500 text-base outline-none text-gray-700 p-3 leading-8 transition-colors duration-200 ease-in-out"
                  }
                });

                _this.cardElement.mount("#card-element");

              case 6:
              case "end":
                return _context.stop();
            }
          }
        }, _callee);
      }))();
    },
    handleFocus: function handleFocus() {
      this.focused = true;
    },
    handleBlur: function handleBlur() {
      this.focused = false;
    },
    //---------------------- Event Select Payment Method ------------------------------\\
    Selected_PaymentMethod: function Selected_PaymentMethod(value) {
      var _this2 = this;

      if (value == "credit card") {
        setTimeout(function () {
          _this2.loadStripe_payment();
        }, 500);
      }
    },
    SetLocal: function SetLocal(locale) {
      this.$i18n.locale = locale;
      this.$store.dispatch("language/setLanguage", locale);
      Fire.$emit("ChangeLanguage");
    },
    handleFullScreen: function handleFullScreen() {
      _utils__WEBPACK_IMPORTED_MODULE_5__["default"].toggleFullScreen();
    }
  }, _defineProperty(_objectSpread2, "logoutUser", function logoutUser() {
    this.logout();
  }), _defineProperty(_objectSpread2, "Product_paginatePerPage", function Product_paginatePerPage() {
    this.paginate_products(this.product_perPage, 0);
  }), _defineProperty(_objectSpread2, "paginate_products", function paginate_products(pageSize, pageNumber) {
    var itemsToParse = this.products;
    this.paginated_Products = itemsToParse.slice(pageNumber * pageSize, (pageNumber + 1) * pageSize);
  }), _defineProperty(_objectSpread2, "Product_onPageChanged", function Product_onPageChanged(page) {
    this.paginate_products(this.product_perPage, page - 1);
    this.getProducts(page);
  }), _defineProperty(_objectSpread2, "BrandpaginatePerPage", function BrandpaginatePerPage() {
    this.paginate_Brands(this.brand_perPage, 0);
  }), _defineProperty(_objectSpread2, "paginate_Brands", function paginate_Brands(pageSize, pageNumber) {
    var itemsToParse = this.brands;
    this.paginated_Brands = itemsToParse.slice(pageNumber * pageSize, (pageNumber + 1) * pageSize);
  }), _defineProperty(_objectSpread2, "BrandonPageChanged", function BrandonPageChanged(page) {
    this.paginate_Brands(this.brand_perPage, page - 1);
  }), _defineProperty(_objectSpread2, "Category_paginatePerPage", function Category_paginatePerPage() {
    this.paginate_Category(this.category_perPage, 0);
  }), _defineProperty(_objectSpread2, "paginate_Category", function paginate_Category(pageSize, pageNumber) {
    var itemsToParse = this.categories;
    this.paginated_Category = itemsToParse.slice(pageNumber * pageSize, (pageNumber + 1) * pageSize);
  }), _defineProperty(_objectSpread2, "Category_onPageChanged", function Category_onPageChanged(page) {
    this.paginate_Category(this.category_perPage, page - 1);
  }), _defineProperty(_objectSpread2, "Submit_Pos", function Submit_Pos() {
    var _this3 = this;

    // Start the progress bar.
    nprogress__WEBPACK_IMPORTED_MODULE_0___default.a.start();
    nprogress__WEBPACK_IMPORTED_MODULE_0___default.a.set(0.1);
    this.$refs.create_pos.validate().then(function (success) {
      if (!success) {
        nprogress__WEBPACK_IMPORTED_MODULE_0___default.a.done();

        if (_this3.sale.client_id == "" || _this3.sale.client_id === null) {
          _this3.makeToast("danger", _this3.$t("Choose_Customer"), _this3.$t("Failed"));
        } else if (_this3.sale.warehouse_id == "" || _this3.sale.warehouse_id === null) {
          _this3.makeToast("danger", _this3.$t("Choose_Warehouse"), _this3.$t("Failed"));
        } else {
          _this3.makeToast("danger", _this3.$t("Please_fill_the_form_correctly"), _this3.$t("Failed"));
        }
      } else {
        if (_this3.verifiedForm()) {
          Fire.$emit("pay_now");
        } else {
          nprogress__WEBPACK_IMPORTED_MODULE_0___default.a.done();
        }
      }
    });
  }), _defineProperty(_objectSpread2, "submit_Update_Detail", function submit_Update_Detail() {
    var _this4 = this;

    this.$refs.Update_Detail.validate().then(function (success) {
      if (!success) {
        return;
      } else {
        _this4.Update_Detail();
      }
    });
  }), _defineProperty(_objectSpread2, "Submit_Payment", function Submit_Payment() {
    var _this5 = this;

    // Start the progress bar.
    nprogress__WEBPACK_IMPORTED_MODULE_0___default.a.start();
    nprogress__WEBPACK_IMPORTED_MODULE_0___default.a.set(0.1);
    this.$refs.Add_payment.validate().then(function (success) {
      if (!success) {
        // Complete the animation of theprogress bar.
        nprogress__WEBPACK_IMPORTED_MODULE_0___default.a.done();

        _this5.makeToast("danger", _this5.$t("Please_fill_the_form_correctly"), _this5.$t("Failed"));
      } else {
        if (_this5.payment.amount > _this5.payment.received_amount) {
          _this5.makeToast("warning", _this5.$t("Paying_amount_is_greater_than_Received_amount"), _this5.$t("Warning"));

          _this5.payment.received_amount = 0;
          nprogress__WEBPACK_IMPORTED_MODULE_0___default.a.done();
        } else if (_this5.payment.amount > _this5.GrandTotal) {
          _this5.makeToast("warning", _this5.$t("Paying_amount_is_greater_than_Grand_Total"), _this5.$t("Warning"));

          _this5.payment.amount = 0;
          nprogress__WEBPACK_IMPORTED_MODULE_0___default.a.done();
        } else {
          _this5.CreatePOS();
        }
      }
    });
  }), _defineProperty(_objectSpread2, "Submit_Customer", function Submit_Customer() {
    var _this6 = this;

    // Start the progress bar.
    nprogress__WEBPACK_IMPORTED_MODULE_0___default.a.start();
    nprogress__WEBPACK_IMPORTED_MODULE_0___default.a.set(0.1);
    this.$refs.Create_Customer.validate().then(function (success) {
      if (!success) {
        nprogress__WEBPACK_IMPORTED_MODULE_0___default.a.done();

        _this6.makeToast("danger", _this6.$t("Please_fill_the_form_correctly"), _this6.$t("Failed"));
      } else {
        _this6.Create_Client();
      }
    });
  }), _defineProperty(_objectSpread2, "Create_Client", function Create_Client() {
    var _this7 = this;

    axios.post("clients", {
      name: this.client.name,
      email: this.client.email,
      phone: this.client.phone,
      country: this.client.country,
      city: this.client.city,
      adresse: this.client.adresse
    }).then(function (response) {
      nprogress__WEBPACK_IMPORTED_MODULE_0___default.a.done();

      _this7.makeToast("success", _this7.$t("Create.TitleCustomer"), _this7.$t("Success"));

      _this7.Get_Client_Without_Paginate();

      _this7.$bvModal.hide("New_Customer");
    })["catch"](function (error) {
      nprogress__WEBPACK_IMPORTED_MODULE_0___default.a.done();

      _this7.makeToast("danger", _this7.$t("InvalidData"), _this7.$t("Failed"));
    });
  }), _defineProperty(_objectSpread2, "New_Client", function New_Client() {
    this.reset_Form_client();
    this.$bvModal.show("New_Customer");
  }), _defineProperty(_objectSpread2, "reset_Form_client", function reset_Form_client() {
    this.client = {
      id: "",
      name: "",
      email: "",
      phone: "",
      country: "",
      city: "",
      adresse: ""
    };
  }), _defineProperty(_objectSpread2, "Get_Client_Without_Paginate", function Get_Client_Without_Paginate() {
    var _this8 = this;

    axios.get("Get_Clients_Without_Paginate").then(function (_ref) {
      var data = _ref.data;
      return _this8.clients = data;
    });
  }), _defineProperty(_objectSpread2, "getValidationState", function getValidationState(_ref2) {
    var dirty = _ref2.dirty,
        validated = _ref2.validated,
        _ref2$valid = _ref2.valid,
        valid = _ref2$valid === void 0 ? null : _ref2$valid;
    return dirty || validated ? valid : null;
  }), _defineProperty(_objectSpread2, "makeToast", function makeToast(variant, msg, title) {
    this.$root.$bvToast.toast(msg, {
      title: title,
      variant: variant,
      solid: true
    });
  }), _defineProperty(_objectSpread2, "Selected_Warehouse", function Selected_Warehouse(value) {
    this.search_input = '';
    this.product_filter = [];
    this.Get_Products_By_Warehouse(value);
    this.getProducts(1);
  }), _defineProperty(_objectSpread2, "Get_Products_By_Warehouse", function Get_Products_By_Warehouse(id) {
    var _this9 = this;

    // Start the progress bar.
    nprogress__WEBPACK_IMPORTED_MODULE_0___default.a.start();
    nprogress__WEBPACK_IMPORTED_MODULE_0___default.a.set(0.1);
    axios.get("Products/Warehouse/" + id + "?stock=" + 1).then(function (response) {
      _this9.products_pos = response.data;
      nprogress__WEBPACK_IMPORTED_MODULE_0___default.a.done();
    })["catch"](function (error) {});
  }), _defineProperty(_objectSpread2, "add_product", function add_product(code) {
    this.audio.play();

    if (this.details.some(function (detail) {
      return detail.code === code;
    })) {
      this.increment_qty_scanner(code); // this.makeToast("warning", this.$t("AlreadyAdd"), this.$t("Warning"));
      // Complete the animation of theprogress bar.

      nprogress__WEBPACK_IMPORTED_MODULE_0___default.a.done();
    } else {
      if (this.details.length > 0) {
        this.order_detail_id();
      } else if (this.details.length === 0) {
        this.product.detail_id = 1;
      }

      this.details.push(this.product);
    }
  }), _defineProperty(_objectSpread2, "order_detail_id", function order_detail_id() {
    this.product.detail_id = 0;
    var len = this.details.length;
    this.product.detail_id = this.details[len - 1].detail_id + 1;
  }), _defineProperty(_objectSpread2, "Get_sales_units", function Get_sales_units(value) {
    var _this10 = this;

    axios.get("Get_sales_units?id=" + value).then(function (_ref3) {
      var data = _ref3.data;
      return _this10.units = data;
    });
  }), _defineProperty(_objectSpread2, "Modal_Update_Detail", function Modal_Update_Detail(detail) {
    this.detail = {};
    this.Get_sales_units(detail.product_id);
    this.detail.detail_id = detail.detail_id;
    this.detail.sale_unit_id = detail.sale_unit_id;
    this.detail.name = detail.name;
    this.detail.Unit_price = detail.Unit_price;
    this.detail.fix_price = detail.fix_price;
    this.detail.fix_stock = detail.fix_stock;
    this.detail.current = detail.current;
    this.detail.tax_method = detail.tax_method;
    this.detail.discount_Method = detail.discount_Method;
    this.detail.discount = detail.discount;
    this.detail.quantity = detail.quantity;
    this.detail.tax_percent = detail.tax_percent;
    this.$bvModal.show("form_Update_Detail");
  }), _defineProperty(_objectSpread2, "Update_Detail", function Update_Detail() {
    for (var i = 0; i < this.details.length; i++) {
      if (this.details[i].detail_id === this.detail.detail_id) {
        // this.convert_unit();
        for (var k = 0; k < this.units.length; k++) {
          if (this.units[k].id == this.detail.sale_unit_id) {
            if (this.units[k].operator == "/") {
              this.details[i].current = this.detail.fix_stock * this.units[k].operator_value;
              this.details[i].unitSale = this.units[k].ShortName;
            } else {
              this.details[i].current = this.detail.fix_stock / this.units[k].operator_value;
              this.details[i].unitSale = this.units[k].ShortName;
            }
          }
        }

        if (this.details[i].current < this.details[i].quantity) {
          this.details[i].quantity = this.details[i].current;
        } else {
          this.details[i].quantity = 1;
        }

        this.details[i].Unit_price = this.detail.Unit_price;
        this.details[i].tax_percent = this.detail.tax_percent;
        this.details[i].tax_method = this.detail.tax_method;
        this.details[i].discount_Method = this.detail.discount_Method;
        this.details[i].discount = this.detail.discount;
        this.details[i].sale_unit_id = this.detail.sale_unit_id;

        if (this.details[i].discount_Method == "2") {
          //Fixed
          this.details[i].DiscountNet = this.details[i].discount;
        } else {
          //Percentage %
          this.details[i].DiscountNet = parseFloat(this.details[i].Unit_price * this.details[i].discount / 100);
        }

        if (this.details[i].tax_method == "1") {
          //Exclusive
          this.details[i].Net_price = parseFloat(this.details[i].Unit_price - this.details[i].DiscountNet);
          this.details[i].taxe = parseFloat(this.details[i].tax_percent * (this.details[i].Unit_price - this.details[i].DiscountNet) / 100);
          this.details[i].Total_price = parseFloat(this.details[i].Net_price + this.details[i].taxe);
        } else {
          //Inclusive
          this.details[i].Net_price = parseFloat((this.details[i].Unit_price - this.details[i].DiscountNet) / (this.details[i].tax_percent / 100 + 1));
          this.details[i].taxe = parseFloat(this.details[i].Unit_price - this.details[i].Net_price - this.details[i].DiscountNet);
          this.details[i].Total_price = parseFloat(this.details[i].Net_price + this.details[i].taxe);
        }

        this.$forceUpdate();
      }
    }

    this.CaclulTotal();
    this.$bvModal.hide("form_Update_Detail");
  }), _defineProperty(_objectSpread2, "verifiedForm", function verifiedForm() {
    if (this.details.length <= 0) {
      this.makeToast("warning", this.$t("AddProductToList"), this.$t("Warning"));
      return false;
    } else {
      var count = 0;

      for (var i = 0; i < this.details.length; i++) {
        if (this.details[i].quantity == "" || this.details[i].quantity === 0) {
          count += 1;
        }
      }

      if (count > 0) {
        this.makeToast("warning", this.$t("AddQuantity"), this.$t("Warning"));
        return false;
      } else {
        return true;
      }
    }
  }), _defineProperty(_objectSpread2, "print_pos", function print_pos() {
    var divContents = document.getElementById("invoice-POS").innerHTML;
    var a = window.open("", "", "height=500, width=500");
    a.document.write('<link rel="stylesheet" href="/css/pos_print.css"><html>');
    a.document.write("<body >");
    a.document.write(divContents);
    a.document.write("</body></html>");
    a.document.close();
    a.print();
  }), _defineProperty(_objectSpread2, "Invoice_POS", function Invoice_POS(id) {
    var _this11 = this;

    // Start the progress bar.
    nprogress__WEBPACK_IMPORTED_MODULE_0___default.a.start();
    nprogress__WEBPACK_IMPORTED_MODULE_0___default.a.set(0.1);
    axios.get("Sales/Print_Invoice/" + id).then(function (response) {
      _this11.invoice_pos = response.data;
      _this11.payments = response.data.payments;
      _this11.pos_settings = response.data.pos_settings;
      setTimeout(function () {
        // Complete the animation of the  progress bar.
        nprogress__WEBPACK_IMPORTED_MODULE_0___default.a.done();

        _this11.$bvModal.show("Show_invoice");
      }, 500);
      setTimeout(function () {
        return _this11.print_pos();
      }, 1000);
    })["catch"](function () {
      // Complete the animation of the  progress bar.
      setTimeout(function () {
        return nprogress__WEBPACK_IMPORTED_MODULE_0___default.a.done();
      }, 500);
    });
  }), _defineProperty(_objectSpread2, "processPayment", function processPayment() {
    var _this12 = this;

    return _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee2() {
      var _yield$_this12$stripe, token, error;

      return _regeneratorRuntime().wrap(function _callee2$(_context2) {
        while (1) {
          switch (_context2.prev = _context2.next) {
            case 0:
              _this12.paymentProcessing = true;
              _context2.next = 3;
              return _this12.stripe.createToken(_this12.cardElement);

            case 3:
              _yield$_this12$stripe = _context2.sent;
              token = _yield$_this12$stripe.token;
              error = _yield$_this12$stripe.error;

              if (error) {
                _this12.paymentProcessing = false;
                nprogress__WEBPACK_IMPORTED_MODULE_0___default.a.done();

                _this12.makeToast("danger", _this12.$t("InvalidData"), _this12.$t("Failed"));
              } else {
                axios.post("pos/CreatePOS", {
                  client_id: _this12.sale.client_id,
                  warehouse_id: _this12.sale.warehouse_id,
                  tax_rate: _this12.sale.tax_rate,
                  TaxNet: _this12.sale.TaxNet,
                  discount: _this12.sale.discount,
                  shipping: _this12.sale.shipping,
                  details: _this12.details,
                  GrandTotal: _this12.GrandTotal,
                  payment: _this12.payment,
                  amount: parseFloat(_this12.payment.amount).toFixed(2),
                  received_amount: parseFloat(_this12.payment.received_amount).toFixed(2),
                  change: parseFloat(_this12.payment.received_amount - _this12.payment.amount).toFixed(2),
                  token: token.id
                }).then(function (response) {
                  _this12.paymentProcessing = false;

                  if (response.data.success === true) {
                    // Complete the animation of theprogress bar.
                    nprogress__WEBPACK_IMPORTED_MODULE_0___default.a.done();

                    _this12.Invoice_POS(response.data.id);

                    _this12.$bvModal.hide("Add_Payment");

                    _this12.Reset_Pos();
                  }
                })["catch"](function (error) {
                  _this12.paymentProcessing = false; // Complete the animation of theprogress bar.

                  nprogress__WEBPACK_IMPORTED_MODULE_0___default.a.done();

                  _this12.makeToast("danger", _this12.$t("InvalidData"), _this12.$t("Failed"));
                });
              }

            case 7:
            case "end":
              return _context2.stop();
          }
        }
      }, _callee2);
    }))();
  }), _defineProperty(_objectSpread2, "CreatePOS", function CreatePOS() {
    var _this13 = this;

    nprogress__WEBPACK_IMPORTED_MODULE_0___default.a.start();
    nprogress__WEBPACK_IMPORTED_MODULE_0___default.a.set(0.1);

    if (this.payment.Reglement == "credit card") {
      if (this.stripe_key != "") {
        this.processPayment();
      } else {
        this.makeToast("danger", this.$t("credit_card_account_not_available"), this.$t("Failed"));
        nprogress__WEBPACK_IMPORTED_MODULE_0___default.a.done();
      }
    } else {
      this.paymentProcessing = true;
      axios.post("pos/CreatePOS", {
        client_id: this.sale.client_id,
        warehouse_id: this.sale.warehouse_id,
        tax_rate: this.sale.tax_rate,
        TaxNet: this.sale.TaxNet,
        discount: this.sale.discount,
        shipping: this.sale.shipping,
        details: this.details,
        GrandTotal: this.GrandTotal,
        payment: this.payment,
        amount: parseFloat(this.payment.amount).toFixed(2),
        received_amount: parseFloat(this.payment.received_amount).toFixed(2),
        change: parseFloat(this.payment.received_amount - this.payment.amount).toFixed(2)
      }).then(function (response) {
        if (response.data.success === true) {
          // Complete the animation of theprogress bar.
          nprogress__WEBPACK_IMPORTED_MODULE_0___default.a.done();
          _this13.paymentProcessing = false;

          _this13.Invoice_POS(response.data.id);

          _this13.$bvModal.hide("Add_Payment");

          _this13.Reset_Pos();
        }
      })["catch"](function (error) {
        // Complete the animation of theprogress bar.
        nprogress__WEBPACK_IMPORTED_MODULE_0___default.a.done();
        _this13.paymentProcessing = false;

        _this13.makeToast("danger", _this13.$t("InvalidData"), _this13.$t("Failed"));
      });
    }
  }), _defineProperty(_objectSpread2, "formatNumber", function formatNumber(number, dec) {
    var value = (typeof number === "string" ? number : number.toString()).split(".");
    if (dec <= 0) return value[0];
    var formated = value[1] || "";
    if (formated.length > dec) return "".concat(value[0], ".").concat(formated.substr(0, dec));

    while (formated.length < dec) {
      formated += "0";
    }

    return "".concat(value[0], ".").concat(formated);
  }), _defineProperty(_objectSpread2, "Get_Product_Details", function Get_Product_Details(product, product_id) {
    var _this14 = this;

    axios.get("Products/" + product_id).then(function (response) {
      _this14.product.discount = 0;
      _this14.product.DiscountNet = 0;
      _this14.product.discount_Method = "2";
      _this14.product.product_id = response.data.id;
      _this14.product.name = response.data.name;
      _this14.product.Net_price = response.data.Net_price;
      _this14.product.Total_price = response.data.Total_price;
      _this14.product.Unit_price = response.data.Unit_price;
      _this14.product.taxe = response.data.tax_price;
      _this14.product.tax_method = response.data.tax_method;
      _this14.product.tax_percent = response.data.tax_percent;
      _this14.product.unitSale = response.data.unitSale;
      _this14.product.product_variant_id = product.product_variant_id;
      _this14.product.code = product.code;
      _this14.product.fix_price = response.data.fix_price;
      _this14.product.sale_unit_id = response.data.sale_unit_id;

      _this14.add_product(product.code);

      _this14.CaclulTotal(); // Complete the animation of theprogress bar.


      nprogress__WEBPACK_IMPORTED_MODULE_0___default.a.done();
    });
  }), _defineProperty(_objectSpread2, "CaclulTotal", function CaclulTotal() {
    this.total = 0;

    for (var i = 0; i < this.details.length; i++) {
      var tax = this.details[i].taxe * this.details[i].quantity;
      this.details[i].subtotal = parseFloat(this.details[i].quantity * this.details[i].Net_price + tax);
      this.total = parseFloat(this.total + this.details[i].subtotal);
    }

    var total_without_discount = parseFloat(this.total - this.sale.discount);
    this.sale.TaxNet = parseFloat(total_without_discount * this.sale.tax_rate / 100);
    this.GrandTotal = parseFloat(total_without_discount + this.sale.TaxNet + this.sale.shipping);
    var grand_total = this.GrandTotal.toFixed(2);
    this.GrandTotal = parseFloat(grand_total);
  }), _defineProperty(_objectSpread2, "Verified_Qty", function Verified_Qty(detail, id) {
    for (var i = 0; i < this.details.length; i++) {
      if (this.details[i].detail_id === id) {
        if (isNaN(detail.quantity)) {
          this.details[i].quantity = detail.current;
        }

        if (detail.quantity > detail.current) {
          this.makeToast("warning", this.$t("LowStock"), this.$t("Warning"));
          this.details[i].quantity = detail.current;
        } else {
          this.details[i].quantity = detail.quantity;
        }
      }
    }

    this.$forceUpdate();
    this.CaclulTotal();
  }), _defineProperty(_objectSpread2, "increment_qty_scanner", function increment_qty_scanner(code) {
    for (var i = 0; i < this.details.length; i++) {
      if (this.details[i].code === code) {
        if (this.details[i].quantity + 1 > this.details[i].current) {
          this.makeToast("warning", this.$t("LowStock"), this.$t("Warning"));
        } else {
          this.details[i].quantity++;
        }
      }
    }

    this.CaclulTotal();
    this.$forceUpdate();
  }), _defineProperty(_objectSpread2, "increment", function increment(id) {
    console.log(id);

    for (var i = 0; i < this.details.length; i++) {
      if (this.details[i].detail_id == id) {
        if (this.details[i].quantity + 1 > this.details[i].current) {
          this.makeToast("warning", this.$t("LowStock"), this.$t("Warning"));
        } else {
          this.details[i].quantity++;
        }
      }
    }

    this.CaclulTotal();
    this.$forceUpdate();
  }), _defineProperty(_objectSpread2, "decrement", function decrement(detail, id) {
    for (var i = 0; i < this.details.length; i++) {
      if (this.details[i].detail_id == id) {
        if (detail.quantity - 1 > detail.current || detail.quantity - 1 < 1) {
          this.makeToast("warning", this.$t("LowStock"), this.$t("Warning"));
        } else {
          this.details[i].quantity--;
        }
      }
    }

    this.CaclulTotal();
    this.$forceUpdate();
  }), _defineProperty(_objectSpread2, "keyup_OrderTax", function keyup_OrderTax() {
    if (isNaN(this.sale.tax_rate)) {
      this.sale.tax_rate = 0;
    } else {
      this.CaclulTotal();
    }
  }), _defineProperty(_objectSpread2, "keyup_Discount", function keyup_Discount() {
    if (isNaN(this.sale.discount)) {
      this.sale.discount = 0;
    } else {
      this.CaclulTotal();
    }
  }), _defineProperty(_objectSpread2, "keyup_Shipping", function keyup_Shipping() {
    if (isNaN(this.sale.shipping)) {
      this.sale.shipping = 0;
    } else {
      this.CaclulTotal();
    }
  }), _defineProperty(_objectSpread2, "Verified_paidAmount", function Verified_paidAmount() {
    if (isNaN(this.payment.amount)) {
      this.payment.amount = 0;
    } else {
      if (this.payment.amount > this.payment.received_amount) {
        this.makeToast("warning", this.$t("Paying_amount_is_greater_than_Received_amount"), this.$t("Warning"));
        this.payment.amount = 0;
      } else if (this.payment.amount > this.GrandTotal) {
        this.makeToast("warning", this.$t("Paying_amount_is_greater_than_Grand_Total"), this.$t("Warning"));
        this.payment.amount = 0;
      }
    }
  }), _defineProperty(_objectSpread2, "Verified_Received_Amount", function Verified_Received_Amount() {
    if (isNaN(this.payment.received_amount)) {
      this.payment.received_amount = 0;
    }
  }), _defineProperty(_objectSpread2, "delete_Product_Detail", function delete_Product_Detail(id) {
    for (var i = 0; i < this.details.length; i++) {
      if (id === this.details[i].detail_id) {
        this.details.splice(i, 1);
        this.CaclulTotal();
      }
    }
  }), _defineProperty(_objectSpread2, "Reset_Pos", function Reset_Pos() {
    this.details = [];
    this.product = {};
    this.payment = {
      amount: "",
      received_amount: "",
      Reglement: "",
      notes: ""
    };
    this.sale.tax_rate = 0;
    this.sale.TaxNet = 0;
    this.sale.shipping = 0;
    this.sale.discount = 0;
    this.GrandTotal = 0;
    this.total = 0;
    this.category_id = "";
    this.brand_id = "";
    this.getProducts(1);
  }), _defineProperty(_objectSpread2, "getResultValue", function getResultValue(result) {
    return result.code + " " + "(" + result.name + ")";
  }), _defineProperty(_objectSpread2, "SearchProduct", function SearchProduct(result) {
    this.product = {};
    this.product.code = result.code;
    this.product.current = result.qte_sale;
    this.product.fix_stock = result.qte;

    if (result.qte_sale < 1) {
      this.product.quantity = result.qte_sale;
    } else {
      this.product.quantity = 1;
    }

    this.product.product_variant_id = result.product_variant_id;
    this.Get_Product_Details(result, result.id);
    this.search_input = '';
    this.product_filter = [];
  }), _defineProperty(_objectSpread2, "search", function search() {
    var _this15 = this;

    if (this.timer) {
      clearTimeout(this.timer);
      this.timer = null;
    }

    if (this.search_input.length < 1) {
      return this.product_filter = [];
    }

    if (this.sale.warehouse_id != "" && this.sale.warehouse_id != null) {
      this.timer = setTimeout(function () {
        var product_filter = _this15.products_pos.filter(function (product) {
          return product.code === _this15.search_input || product.barcode.includes(_this15.search_input);
        });

        if (product_filter.length === 1) {
          _this15.Check_Product_Exist(product_filter[0], product_filter[0].id);
        } else {
          _this15.product_filter = _this15.products_pos.filter(function (product) {
            return product.name.toLowerCase().startsWith(_this15.search_input.toLowerCase()) || product.code.toLowerCase().startsWith(_this15.search_input.toLowerCase()) || product.barcode.toLowerCase().startsWith(_this15.search_input.toLowerCase());
          });
        }
      }, 800);
    } else {
      this.makeToast("warning", this.$t("SelectWarehouse"), this.$t("Warning"));
    }
  }), _defineProperty(_objectSpread2, "Check_Product_Exist", function Check_Product_Exist(product, id) {
    // this.audio.play();
    // Start the progress bar.
    nprogress__WEBPACK_IMPORTED_MODULE_0___default.a.start();
    nprogress__WEBPACK_IMPORTED_MODULE_0___default.a.set(0.1);
    this.product = {};
    this.product.current = product.qte_sale;
    this.product.fix_stock = product.qte;

    if (product.qte_sale < 1) {
      this.product.quantity = product.qte_sale;
    } else {
      this.product.quantity = 1;
    }

    this.Get_Product_Details(product, id);
    nprogress__WEBPACK_IMPORTED_MODULE_0___default.a.done();
    this.search_input = '';
    this.product_filter = [];
  }), _defineProperty(_objectSpread2, "Products_by_Category", function Products_by_Category(id) {
    this.category_id = id;
    this.getProducts(1);
  }), _defineProperty(_objectSpread2, "Products_by_Brands", function Products_by_Brands(id) {
    this.brand_id = id;
    this.getProducts(1);
  }), _defineProperty(_objectSpread2, "getAllCategory", function getAllCategory() {
    this.category_id = "";
    this.getProducts(1);
  }), _defineProperty(_objectSpread2, "GetAllBrands", function GetAllBrands() {
    this.brand_id = "";
    this.getProducts(1);
  }), _defineProperty(_objectSpread2, "getProducts", function getProducts() {
    var _this16 = this;

    var page = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 1;
    // Start the progress bar.
    nprogress__WEBPACK_IMPORTED_MODULE_0___default.a.start();
    nprogress__WEBPACK_IMPORTED_MODULE_0___default.a.set(0.1);
    axios.get("GetProductsByParametre?page=" + page + "&category_id=" + this.category_id + "&brand_id=" + this.brand_id + "&warehouse_id=" + this.sale.warehouse_id + "&stock=" + 1).then(function (response) {
      _this16.products = response.data.products;
      _this16.product_totalRows = response.data.totalRows;

      _this16.Product_paginatePerPage(); // Complete the animation of theprogress bar.


      nprogress__WEBPACK_IMPORTED_MODULE_0___default.a.done();
    })["catch"](function (response) {
      // Complete the animation of theprogress bar.
      nprogress__WEBPACK_IMPORTED_MODULE_0___default.a.done();
    });
  }), _defineProperty(_objectSpread2, "GetElementsPos", function GetElementsPos() {
    var _this17 = this;

    axios.get("pos/GetELementPos").then(function (response) {
      _this17.clients = response.data.clients;
      _this17.warehouses = response.data.warehouses;
      _this17.categories = response.data.categories;
      _this17.brands = response.data.brands; // this.pos_settings = response.data.pos_settings;

      _this17.sale.warehouse_id = response.data.defaultWarehouse;
      _this17.sale.client_id = response.data.defaultClient;

      _this17.getProducts();

      if (response.data.defaultWarehouse != "") {
        _this17.Get_Products_By_Warehouse(response.data.defaultWarehouse);
      }

      _this17.paginate_Brands(_this17.brand_perPage, 0);

      _this17.paginate_Category(_this17.category_perPage, 0);

      _this17.stripe_key = response.data.stripe_key;
      _this17.isLoading = false;
    })["catch"](function (response) {
      _this17.isLoading = false;
    });
  }), _objectSpread2)),
  //-------------------- Created Function -----\\
  created: function created() {
    var _this18 = this;

    this.GetElementsPos();
    Fire.$on("pay_now", function () {
      setTimeout(function () {
        _this18.payment.amount = _this18.formatNumber(_this18.GrandTotal, 2);
        _this18.payment.received_amount = _this18.formatNumber(_this18.GrandTotal, 2);
        _this18.payment.Reglement = "Cash";

        _this18.$bvModal.show("Add_Payment"); // Complete the animation of theprogress bar.


        nprogress__WEBPACK_IMPORTED_MODULE_0___default.a.done();
      }, 500);
    });
  }
});

/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/src/views/app/pages/pos.vue?vue&type=style&index=0&lang=css&":
/*!***************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js??ref--5-1!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--5-2!./node_modules/vue-loader/lib??vue-loader-options!./resources/src/views/app/pages/pos.vue?vue&type=style&index=0&lang=css& ***!
  \***************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(/*! ../../../../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
exports = ___CSS_LOADER_API_IMPORT___(false);
// Module
exports.push([module.i, "\n.total {\r\n  font-weight: bold;\r\n  font-size: 14px;\r\n  /* text-transform: uppercase; */\r\n  /* height: 50px; */\n}\r\n", ""]);
// Exports
module.exports = exports;


/***/ }),

/***/ "./node_modules/style-loader/index.js!./node_modules/css-loader/dist/cjs.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/src/views/app/pages/pos.vue?vue&type=style&index=0&lang=css&":
/*!*******************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/style-loader!./node_modules/css-loader/dist/cjs.js??ref--5-1!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--5-2!./node_modules/vue-loader/lib??vue-loader-options!./resources/src/views/app/pages/pos.vue?vue&type=style&index=0&lang=css& ***!
  \*******************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(/*! !../../../../../node_modules/css-loader/dist/cjs.js??ref--5-1!../../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../../node_modules/postcss-loader/src??ref--5-2!../../../../../node_modules/vue-loader/lib??vue-loader-options!./pos.vue?vue&type=style&index=0&lang=css& */ "./node_modules/css-loader/dist/cjs.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/src/views/app/pages/pos.vue?vue&type=style&index=0&lang=css&");

if(typeof content === 'string') content = [[module.i, content, '']];

var transform;
var insertInto;



var options = {"hmr":true}

options.transform = transform
options.insertInto = undefined;

var update = __webpack_require__(/*! ../../../../../node_modules/style-loader/lib/addStyles.js */ "./node_modules/style-loader/lib/addStyles.js")(content, options);

if(content.locals) module.exports = content.locals;

if(false) {}

/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/src/views/app/pages/pos.vue?vue&type=template&id=4cc49487&":
/*!************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/src/views/app/pages/pos.vue?vue&type=template&id=4cc49487& ***!
  \************************************************************************************************************************************************************************************************************/
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
  return _c("div", { staticClass: "pos_page" }, [
    _c(
      "div",
      {
        staticClass:
          "container-fluid p-0 app-admin-wrap layout-sidebar-large clearfix",
        attrs: { id: "pos" },
      },
      [
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
                  { attrs: { md: "5" } },
                  [
                    _c(
                      "b-card",
                      { staticClass: "card-order", attrs: { "no-body": "" } },
                      [
                        _c("div", { staticClass: "main-header" }, [
                          _c(
                            "div",
                            { staticClass: "logo" },
                            [
                              _c(
                                "router-link",
                                { attrs: { to: "/app/dashboard" } },
                                [
                                  _c("img", {
                                    attrs: {
                                      src: "/images/" + _vm.currentUser.logo,
                                      alt: "",
                                      width: "60",
                                      height: "60",
                                    },
                                  }),
                                ]
                              ),
                            ],
                            1
                          ),
                          _vm._v(" "),
                          _c("div", { staticClass: "mx-auto" }),
                          _vm._v(" "),
                          _c("div", { staticClass: "header-part-right" }, [
                            _c("i", {
                              staticClass:
                                "i-Full-Screen header-icon d-none d-sm-inline-block",
                              on: { click: _vm.handleFullScreen },
                            }),
                            _vm._v(" "),
                            _c(
                              "div",
                              { staticClass: "dropdown" },
                              [
                                _c(
                                  "b-dropdown",
                                  {
                                    staticClass: "m-md-2",
                                    attrs: {
                                      id: "dropdown",
                                      text: "Dropdown Button",
                                      "toggle-class": "text-decoration-none",
                                      "no-caret": "",
                                      right: "",
                                      variant: "link",
                                    },
                                  },
                                  [
                                    _c("template", { slot: "button-content" }, [
                                      _c("i", {
                                        staticClass:
                                          "i-Globe text-muted header-icon",
                                        attrs: {
                                          role: "button",
                                          id: "dropdownMenuButton",
                                          "data-toggle": "dropdown",
                                          "aria-haspopup": "true",
                                          "aria-expanded": "false",
                                        },
                                      }),
                                    ]),
                                    _vm._v(" "),
                                    _c(
                                      "vue-perfect-scrollbar",
                                      {
                                        ref: "myData",
                                        staticClass:
                                          "dropdown-menu-left rtl-ps-none notification-dropdown ps scroll",
                                        attrs: {
                                          settings: {
                                            suppressScrollX: true,
                                            wheelPropagation: false,
                                          },
                                        },
                                      },
                                      [
                                        _c(
                                          "div",
                                          { staticClass: "menu-icon-grid" },
                                          [
                                            _c(
                                              "a",
                                              {
                                                on: {
                                                  click: function ($event) {
                                                    return _vm.SetLocal("en")
                                                  },
                                                },
                                              },
                                              [
                                                _c("i", {
                                                  staticClass:
                                                    "flag-icon flag-icon-squared flag-icon-gb",
                                                  attrs: { title: "en" },
                                                }),
                                                _vm._v(
                                                  " English\n                      "
                                                ),
                                              ]
                                            ),
                                            _vm._v(" "),
                                            _c(
                                              "a",
                                              {
                                                on: {
                                                  click: function ($event) {
                                                    return _vm.SetLocal("fr")
                                                  },
                                                },
                                              },
                                              [
                                                _c("i", {
                                                  staticClass:
                                                    "flag-icon flag-icon-squared flag-icon-fr",
                                                  attrs: { title: "fr" },
                                                }),
                                                _vm._v(" "),
                                                _c(
                                                  "span",
                                                  { staticClass: "title-lang" },
                                                  [_vm._v("French")]
                                                ),
                                              ]
                                            ),
                                            _vm._v(" "),
                                            _c(
                                              "a",
                                              {
                                                on: {
                                                  click: function ($event) {
                                                    return _vm.SetLocal("ar")
                                                  },
                                                },
                                              },
                                              [
                                                _c("i", {
                                                  staticClass:
                                                    "flag-icon flag-icon-squared flag-icon-sa",
                                                  attrs: { title: "sa" },
                                                }),
                                                _vm._v(" "),
                                                _c(
                                                  "span",
                                                  { staticClass: "title-lang" },
                                                  [_vm._v("Arabic")]
                                                ),
                                              ]
                                            ),
                                            _vm._v(" "),
                                            _c(
                                              "a",
                                              {
                                                on: {
                                                  click: function ($event) {
                                                    return _vm.SetLocal("tur")
                                                  },
                                                },
                                              },
                                              [
                                                _c("i", {
                                                  staticClass:
                                                    "flag-icon flag-icon-squared flag-icon-tr",
                                                  attrs: { title: "sa" },
                                                }),
                                                _vm._v(" "),
                                                _c(
                                                  "span",
                                                  { staticClass: "title-lang" },
                                                  [_vm._v("Turkish")]
                                                ),
                                              ]
                                            ),
                                            _vm._v(" "),
                                            _c(
                                              "a",
                                              {
                                                on: {
                                                  click: function ($event) {
                                                    return _vm.SetLocal("sm_ch")
                                                  },
                                                },
                                              },
                                              [
                                                _c("i", {
                                                  staticClass:
                                                    "flag-icon flag-icon-squared flag-icon-cn",
                                                  attrs: { title: "sa" },
                                                }),
                                                _vm._v(" "),
                                                _c(
                                                  "span",
                                                  { staticClass: "title-lang" },
                                                  [_vm._v("Simplified Chinese")]
                                                ),
                                              ]
                                            ),
                                            _vm._v(" "),
                                            _c(
                                              "a",
                                              {
                                                on: {
                                                  click: function ($event) {
                                                    return _vm.SetLocal("thai")
                                                  },
                                                },
                                              },
                                              [
                                                _c("i", {
                                                  staticClass:
                                                    "flag-icon flag-icon-squared flag-icon-tw",
                                                  attrs: { title: "sa" },
                                                }),
                                                _vm._v(" "),
                                                _c(
                                                  "span",
                                                  { staticClass: "title-lang" },
                                                  [_vm._v("Thaï")]
                                                ),
                                              ]
                                            ),
                                            _vm._v(" "),
                                            _c(
                                              "a",
                                              {
                                                on: {
                                                  click: function ($event) {
                                                    return _vm.SetLocal("hn")
                                                  },
                                                },
                                              },
                                              [
                                                _c("i", {
                                                  staticClass:
                                                    "flag-icon flag-icon-squared flag-icon-in",
                                                  attrs: { title: "sa" },
                                                }),
                                                _vm._v(" "),
                                                _c(
                                                  "span",
                                                  { staticClass: "title-lang" },
                                                  [_vm._v("Hindi")]
                                                ),
                                              ]
                                            ),
                                            _vm._v(" "),
                                            _c(
                                              "a",
                                              {
                                                on: {
                                                  click: function ($event) {
                                                    return _vm.SetLocal("de")
                                                  },
                                                },
                                              },
                                              [
                                                _c("i", {
                                                  staticClass:
                                                    "flag-icon flag-icon-squared flag-icon-de",
                                                  attrs: { title: "de" },
                                                }),
                                                _vm._v(" "),
                                                _c(
                                                  "span",
                                                  { staticClass: "title-lang" },
                                                  [_vm._v("German")]
                                                ),
                                              ]
                                            ),
                                            _vm._v(" "),
                                            _c(
                                              "a",
                                              {
                                                on: {
                                                  click: function ($event) {
                                                    return _vm.SetLocal("es")
                                                  },
                                                },
                                              },
                                              [
                                                _c("i", {
                                                  staticClass:
                                                    "flag-icon flag-icon-squared flag-icon-es",
                                                  attrs: { title: "es" },
                                                }),
                                                _vm._v(" "),
                                                _c(
                                                  "span",
                                                  { staticClass: "title-lang" },
                                                  [_vm._v("Spanish")]
                                                ),
                                              ]
                                            ),
                                            _vm._v(" "),
                                            _c(
                                              "a",
                                              {
                                                on: {
                                                  click: function ($event) {
                                                    return _vm.SetLocal("it")
                                                  },
                                                },
                                              },
                                              [
                                                _c("i", {
                                                  staticClass:
                                                    "flag-icon flag-icon-squared flag-icon-it",
                                                  attrs: { title: "it" },
                                                }),
                                                _vm._v(" "),
                                                _c(
                                                  "span",
                                                  { staticClass: "title-lang" },
                                                  [_vm._v("Italien")]
                                                ),
                                              ]
                                            ),
                                            _vm._v(" "),
                                            _c(
                                              "a",
                                              {
                                                on: {
                                                  click: function ($event) {
                                                    return _vm.SetLocal("Ind")
                                                  },
                                                },
                                              },
                                              [
                                                _c("i", {
                                                  staticClass:
                                                    "flag-icon flag-icon-squared flag-icon-id",
                                                  attrs: { title: "sa" },
                                                }),
                                                _vm._v(" "),
                                                _c(
                                                  "span",
                                                  { staticClass: "title-lang" },
                                                  [_vm._v("Indonesian")]
                                                ),
                                              ]
                                            ),
                                            _vm._v(" "),
                                            _c(
                                              "a",
                                              {
                                                on: {
                                                  click: function ($event) {
                                                    return _vm.SetLocal("tr_ch")
                                                  },
                                                },
                                              },
                                              [
                                                _c("i", {
                                                  staticClass:
                                                    "flag-icon flag-icon-squared flag-icon-cn",
                                                  attrs: { title: "sa" },
                                                }),
                                                _vm._v(" "),
                                                _c(
                                                  "span",
                                                  { staticClass: "title-lang" },
                                                  [
                                                    _vm._v(
                                                      "Traditional Chinese"
                                                    ),
                                                  ]
                                                ),
                                              ]
                                            ),
                                            _vm._v(" "),
                                            _c(
                                              "a",
                                              {
                                                on: {
                                                  click: function ($event) {
                                                    return _vm.SetLocal("ru")
                                                  },
                                                },
                                              },
                                              [
                                                _c("i", {
                                                  staticClass:
                                                    "flag-icon flag-icon-squared flag-icon-ru",
                                                  attrs: { title: "sa" },
                                                }),
                                                _vm._v(" "),
                                                _c(
                                                  "span",
                                                  { staticClass: "title-lang" },
                                                  [_vm._v("Russian")]
                                                ),
                                              ]
                                            ),
                                            _vm._v(" "),
                                            _c(
                                              "a",
                                              {
                                                on: {
                                                  click: function ($event) {
                                                    return _vm.SetLocal("vn")
                                                  },
                                                },
                                              },
                                              [
                                                _c("i", {
                                                  staticClass:
                                                    "flag-icon flag-icon-squared flag-icon-vn",
                                                  attrs: { title: "sa" },
                                                }),
                                                _vm._v(" "),
                                                _c(
                                                  "span",
                                                  { staticClass: "title-lang" },
                                                  [_vm._v("Vietnamese")]
                                                ),
                                              ]
                                            ),
                                          ]
                                        ),
                                      ]
                                    ),
                                  ],
                                  2
                                ),
                              ],
                              1
                            ),
                            _vm._v(" "),
                            _c(
                              "div",
                              { staticClass: "dropdown" },
                              [
                                _c(
                                  "b-dropdown",
                                  {
                                    staticClass:
                                      "m-md-2 user col align-self-end",
                                    attrs: {
                                      id: "dropdown-1",
                                      text: "Dropdown Button",
                                      "toggle-class": "text-decoration-none",
                                      "no-caret": "",
                                      variant: "link",
                                      right: "",
                                    },
                                  },
                                  [
                                    _c("template", { slot: "button-content" }, [
                                      _c("img", {
                                        attrs: {
                                          src:
                                            "/images/avatar/" +
                                            _vm.currentUser.avatar,
                                          id: "userDropdown",
                                          alt: "",
                                          "data-toggle": "dropdown",
                                          "aria-haspopup": "true",
                                          "aria-expanded": "false",
                                        },
                                      }),
                                    ]),
                                    _vm._v(" "),
                                    _c(
                                      "div",
                                      {
                                        staticClass: "dropdown-menu-left",
                                        attrs: {
                                          "aria-labelledby": "userDropdown",
                                        },
                                      },
                                      [
                                        _c(
                                          "div",
                                          { staticClass: "dropdown-header" },
                                          [
                                            _c("i", {
                                              staticClass: "i-Lock-User mr-1",
                                            }),
                                            _vm._v(" "),
                                            _c("span", [
                                              _vm._v(
                                                _vm._s(_vm.currentUser.username)
                                              ),
                                            ]),
                                          ]
                                        ),
                                        _vm._v(" "),
                                        _c(
                                          "router-link",
                                          {
                                            staticClass: "dropdown-item",
                                            attrs: { to: "/app/profile" },
                                          },
                                          [_vm._v(_vm._s(_vm.$t("profil")))]
                                        ),
                                        _vm._v(" "),
                                        _vm.currentUserPermissions &&
                                        _vm.currentUserPermissions.includes(
                                          "setting_system"
                                        )
                                          ? _c(
                                              "router-link",
                                              {
                                                staticClass: "dropdown-item",
                                                attrs: {
                                                  to: "/app/settings/System_settings",
                                                },
                                              },
                                              [
                                                _vm._v(
                                                  _vm._s(_vm.$t("Settings"))
                                                ),
                                              ]
                                            )
                                          : _vm._e(),
                                        _vm._v(" "),
                                        _c(
                                          "a",
                                          {
                                            staticClass: "dropdown-item",
                                            attrs: { href: "#" },
                                            on: {
                                              click: function ($event) {
                                                $event.preventDefault()
                                                return _vm.logoutUser($event)
                                              },
                                            },
                                          },
                                          [_vm._v(_vm._s(_vm.$t("logout")))]
                                        ),
                                      ],
                                      1
                                    ),
                                  ],
                                  2
                                ),
                              ],
                              1
                            ),
                          ]),
                        ]),
                        _vm._v(" "),
                        _c(
                          "validation-observer",
                          { ref: "create_pos" },
                          [
                            _c(
                              "b-form",
                              {
                                on: {
                                  submit: function ($event) {
                                    $event.preventDefault()
                                    return _vm.Submit_Pos($event)
                                  },
                                },
                              },
                              [
                                _c(
                                  "b-card-body",
                                  [
                                    _c(
                                      "b-row",
                                      [
                                        _c(
                                          "b-col",
                                          {
                                            attrs: {
                                              lg: "12",
                                              md: "12",
                                              sm: "12",
                                            },
                                          },
                                          [
                                            _c("validation-provider", {
                                              attrs: {
                                                name: "Customer",
                                                rules: { required: true },
                                              },
                                              scopedSlots: _vm._u(
                                                [
                                                  {
                                                    key: "default",
                                                    fn: function (ref) {
                                                      var valid = ref.valid
                                                      var errors = ref.errors
                                                      return _c(
                                                        "b-input-group",
                                                        {
                                                          staticClass:
                                                            "input-customer",
                                                        },
                                                        [
                                                          _c("v-select", {
                                                            staticClass:
                                                              "w-100",
                                                            class: {
                                                              "is-invalid":
                                                                !!errors.length,
                                                            },
                                                            attrs: {
                                                              state: errors[0]
                                                                ? false
                                                                : valid
                                                                ? true
                                                                : null,
                                                              reduce: function (
                                                                label
                                                              ) {
                                                                return label.value
                                                              },
                                                              placeholder:
                                                                _vm.$t(
                                                                  "Choose_Customer"
                                                                ),
                                                              options:
                                                                _vm.clients.map(
                                                                  function (
                                                                    clients
                                                                  ) {
                                                                    return {
                                                                      label:
                                                                        clients.name,
                                                                      value:
                                                                        clients.id,
                                                                    }
                                                                  }
                                                                ),
                                                            },
                                                            model: {
                                                              value:
                                                                _vm.sale
                                                                  .client_id,
                                                              callback:
                                                                function ($$v) {
                                                                  _vm.$set(
                                                                    _vm.sale,
                                                                    "client_id",
                                                                    $$v
                                                                  )
                                                                },
                                                              expression:
                                                                "sale.client_id",
                                                            },
                                                          }),
                                                          _vm._v(" "),
                                                          _c(
                                                            "b-input-group-append",
                                                            [
                                                              _c(
                                                                "b-button",
                                                                {
                                                                  attrs: {
                                                                    variant:
                                                                      "primary",
                                                                  },
                                                                  on: {
                                                                    click:
                                                                      function (
                                                                        $event
                                                                      ) {
                                                                        return _vm.New_Client()
                                                                      },
                                                                  },
                                                                },
                                                                [
                                                                  _c("span", [
                                                                    _c("i", {
                                                                      staticClass:
                                                                        "i-Add-User",
                                                                    }),
                                                                  ]),
                                                                ]
                                                              ),
                                                            ],
                                                            1
                                                          ),
                                                        ],
                                                        1
                                                      )
                                                    },
                                                  },
                                                ],
                                                null,
                                                false,
                                                1846940208
                                              ),
                                            }),
                                          ],
                                          1
                                        ),
                                        _vm._v(" "),
                                        _c(
                                          "b-col",
                                          {
                                            attrs: {
                                              lg: "12",
                                              md: "12",
                                              sm: "12",
                                            },
                                          },
                                          [
                                            _c("validation-provider", {
                                              attrs: {
                                                name: "warehouse",
                                                rules: { required: true },
                                              },
                                              scopedSlots: _vm._u(
                                                [
                                                  {
                                                    key: "default",
                                                    fn: function (ref) {
                                                      var valid = ref.valid
                                                      var errors = ref.errors
                                                      return _c(
                                                        "b-form-group",
                                                        { staticClass: "mt-2" },
                                                        [
                                                          _c("v-select", {
                                                            class: {
                                                              "is-invalid":
                                                                !!errors.length,
                                                            },
                                                            attrs: {
                                                              state: errors[0]
                                                                ? false
                                                                : valid
                                                                ? true
                                                                : null,
                                                              disabled:
                                                                _vm.details
                                                                  .length > 0,
                                                              reduce: function (
                                                                label
                                                              ) {
                                                                return label.value
                                                              },
                                                              placeholder:
                                                                _vm.$t(
                                                                  "Choose_Warehouse"
                                                                ),
                                                              options:
                                                                _vm.warehouses.map(
                                                                  function (
                                                                    warehouses
                                                                  ) {
                                                                    return {
                                                                      label:
                                                                        warehouses.name,
                                                                      value:
                                                                        warehouses.id,
                                                                    }
                                                                  }
                                                                ),
                                                            },
                                                            on: {
                                                              input:
                                                                _vm.Selected_Warehouse,
                                                            },
                                                            model: {
                                                              value:
                                                                _vm.sale
                                                                  .warehouse_id,
                                                              callback:
                                                                function ($$v) {
                                                                  _vm.$set(
                                                                    _vm.sale,
                                                                    "warehouse_id",
                                                                    $$v
                                                                  )
                                                                },
                                                              expression:
                                                                "sale.warehouse_id",
                                                            },
                                                          }),
                                                        ],
                                                        1
                                                      )
                                                    },
                                                  },
                                                ],
                                                null,
                                                false,
                                                1940612659
                                              ),
                                            }),
                                          ],
                                          1
                                        ),
                                        _vm._v(" "),
                                        _c(
                                          "b-col",
                                          {
                                            staticClass: "mt-2",
                                            attrs: { md: "12" },
                                          },
                                          [
                                            _c(
                                              "div",
                                              { staticClass: "pos-detail" },
                                              [
                                                _c(
                                                  "div",
                                                  {
                                                    staticClass:
                                                      "table-responsive",
                                                  },
                                                  [
                                                    _c(
                                                      "table",
                                                      {
                                                        staticClass:
                                                          "table table-striped",
                                                      },
                                                      [
                                                        _c("thead", [
                                                          _c("tr", [
                                                            _c(
                                                              "th",
                                                              {
                                                                attrs: {
                                                                  scope: "col",
                                                                },
                                                              },
                                                              [
                                                                _vm._v(
                                                                  _vm._s(
                                                                    _vm.$t(
                                                                      "ProductName"
                                                                    )
                                                                  )
                                                                ),
                                                              ]
                                                            ),
                                                            _vm._v(" "),
                                                            _c(
                                                              "th",
                                                              {
                                                                attrs: {
                                                                  scope: "col",
                                                                },
                                                              },
                                                              [
                                                                _vm._v(
                                                                  _vm._s(
                                                                    _vm.$t(
                                                                      "Price"
                                                                    )
                                                                  )
                                                                ),
                                                              ]
                                                            ),
                                                            _vm._v(" "),
                                                            _c(
                                                              "th",
                                                              {
                                                                staticClass:
                                                                  "text-center",
                                                                attrs: {
                                                                  scope: "col",
                                                                },
                                                              },
                                                              [
                                                                _vm._v(
                                                                  _vm._s(
                                                                    _vm.$t(
                                                                      "Qty"
                                                                    )
                                                                  )
                                                                ),
                                                              ]
                                                            ),
                                                            _vm._v(" "),
                                                            _c(
                                                              "th",
                                                              {
                                                                staticClass:
                                                                  "text-center",
                                                                attrs: {
                                                                  scope: "col",
                                                                },
                                                              },
                                                              [
                                                                _vm._v(
                                                                  _vm._s(
                                                                    _vm.$t(
                                                                      "SubTotal"
                                                                    )
                                                                  )
                                                                ),
                                                              ]
                                                            ),
                                                            _vm._v(" "),
                                                            _c(
                                                              "th",
                                                              {
                                                                staticClass:
                                                                  "text-center",
                                                                attrs: {
                                                                  scope: "col",
                                                                },
                                                              },
                                                              [
                                                                _c("i", {
                                                                  staticClass:
                                                                    "fa fa-trash",
                                                                }),
                                                              ]
                                                            ),
                                                          ]),
                                                        ]),
                                                        _vm._v(" "),
                                                        _c(
                                                          "tbody",
                                                          [
                                                            _vm.details
                                                              .length <= 0
                                                              ? _c("tr", [
                                                                  _c(
                                                                    "td",
                                                                    {
                                                                      attrs: {
                                                                        colspan:
                                                                          "5",
                                                                      },
                                                                    },
                                                                    [
                                                                      _vm._v(
                                                                        _vm._s(
                                                                          _vm.$t(
                                                                            "NodataAvailable"
                                                                          )
                                                                        )
                                                                      ),
                                                                    ]
                                                                  ),
                                                                ])
                                                              : _vm._e(),
                                                            _vm._v(" "),
                                                            _vm._l(
                                                              _vm.details,
                                                              function (
                                                                detail,
                                                                index
                                                              ) {
                                                                return _c(
                                                                  "tr",
                                                                  {
                                                                    key: index,
                                                                  },
                                                                  [
                                                                    _c("td", [
                                                                      _c(
                                                                        "span",
                                                                        [
                                                                          _vm._v(
                                                                            _vm._s(
                                                                              detail.code
                                                                            )
                                                                          ),
                                                                        ]
                                                                      ),
                                                                      _vm._v(
                                                                        " "
                                                                      ),
                                                                      _c("br"),
                                                                      _vm._v(
                                                                        " "
                                                                      ),
                                                                      _c(
                                                                        "span",
                                                                        {
                                                                          staticClass:
                                                                            "badge badge-success",
                                                                        },
                                                                        [
                                                                          _vm._v(
                                                                            _vm._s(
                                                                              detail.name
                                                                            )
                                                                          ),
                                                                        ]
                                                                      ),
                                                                      _vm._v(
                                                                        " "
                                                                      ),
                                                                      _c("i", {
                                                                        staticClass:
                                                                          "i-Edit",
                                                                        on: {
                                                                          click:
                                                                            function (
                                                                              $event
                                                                            ) {
                                                                              return _vm.Modal_Update_Detail(
                                                                                detail
                                                                              )
                                                                            },
                                                                        },
                                                                      }),
                                                                    ]),
                                                                    _vm._v(" "),
                                                                    _c("td", [
                                                                      _vm._v(
                                                                        _vm._s(
                                                                          _vm
                                                                            .currentUser
                                                                            .currency
                                                                        ) +
                                                                          " " +
                                                                          _vm._s(
                                                                            _vm.formatNumber(
                                                                              detail.Total_price,
                                                                              2
                                                                            )
                                                                          )
                                                                      ),
                                                                    ]),
                                                                    _vm._v(" "),
                                                                    _c("td", [
                                                                      _c(
                                                                        "div",
                                                                        {
                                                                          staticClass:
                                                                            "quantity",
                                                                        },
                                                                        [
                                                                          _c(
                                                                            "b-input-group",
                                                                            [
                                                                              _c(
                                                                                "b-input-group-prepend",
                                                                                [
                                                                                  _c(
                                                                                    "span",
                                                                                    {
                                                                                      staticClass:
                                                                                        "btn btn-primary btn-sm",
                                                                                      on: {
                                                                                        click:
                                                                                          function (
                                                                                            $event
                                                                                          ) {
                                                                                            return _vm.decrement(
                                                                                              detail,
                                                                                              detail.detail_id
                                                                                            )
                                                                                          },
                                                                                      },
                                                                                    },
                                                                                    [
                                                                                      _vm._v(
                                                                                        "-"
                                                                                      ),
                                                                                    ]
                                                                                  ),
                                                                                ]
                                                                              ),
                                                                              _vm._v(
                                                                                " "
                                                                              ),
                                                                              _c(
                                                                                "input",
                                                                                {
                                                                                  directives:
                                                                                    [
                                                                                      {
                                                                                        name: "model",
                                                                                        rawName:
                                                                                          "v-model.number",
                                                                                        value:
                                                                                          detail.quantity,
                                                                                        expression:
                                                                                          "detail.quantity",
                                                                                        modifiers:
                                                                                          {
                                                                                            number: true,
                                                                                          },
                                                                                      },
                                                                                    ],
                                                                                  staticClass:
                                                                                    "form-control",
                                                                                  domProps:
                                                                                    {
                                                                                      value:
                                                                                        detail.quantity,
                                                                                    },
                                                                                  on: {
                                                                                    keyup:
                                                                                      function (
                                                                                        $event
                                                                                      ) {
                                                                                        return _vm.Verified_Qty(
                                                                                          detail,
                                                                                          detail.detail_id
                                                                                        )
                                                                                      },
                                                                                    input:
                                                                                      function (
                                                                                        $event
                                                                                      ) {
                                                                                        if (
                                                                                          $event
                                                                                            .target
                                                                                            .composing
                                                                                        ) {
                                                                                          return
                                                                                        }
                                                                                        _vm.$set(
                                                                                          detail,
                                                                                          "quantity",
                                                                                          _vm._n(
                                                                                            $event
                                                                                              .target
                                                                                              .value
                                                                                          )
                                                                                        )
                                                                                      },
                                                                                    blur: function (
                                                                                      $event
                                                                                    ) {
                                                                                      return _vm.$forceUpdate()
                                                                                    },
                                                                                  },
                                                                                }
                                                                              ),
                                                                              _vm._v(
                                                                                " "
                                                                              ),
                                                                              _c(
                                                                                "b-input-group-append",
                                                                                [
                                                                                  _c(
                                                                                    "span",
                                                                                    {
                                                                                      staticClass:
                                                                                        "btn btn-primary btn-sm",
                                                                                      on: {
                                                                                        click:
                                                                                          function (
                                                                                            $event
                                                                                          ) {
                                                                                            return _vm.increment(
                                                                                              detail.detail_id
                                                                                            )
                                                                                          },
                                                                                      },
                                                                                    },
                                                                                    [
                                                                                      _vm._v(
                                                                                        "+"
                                                                                      ),
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
                                                                    ]),
                                                                    _vm._v(" "),
                                                                    _c(
                                                                      "td",
                                                                      {
                                                                        staticClass:
                                                                          "text-center",
                                                                      },
                                                                      [
                                                                        _vm._v(
                                                                          _vm._s(
                                                                            _vm
                                                                              .currentUser
                                                                              .currency
                                                                          ) +
                                                                            " " +
                                                                            _vm._s(
                                                                              detail.subtotal.toFixed(
                                                                                2
                                                                              )
                                                                            )
                                                                        ),
                                                                      ]
                                                                    ),
                                                                    _vm._v(" "),
                                                                    _c("td", [
                                                                      _c(
                                                                        "a",
                                                                        {
                                                                          attrs:
                                                                            {
                                                                              title:
                                                                                "Delete",
                                                                            },
                                                                          on: {
                                                                            click:
                                                                              function (
                                                                                $event
                                                                              ) {
                                                                                return _vm.delete_Product_Detail(
                                                                                  detail.detail_id
                                                                                )
                                                                              },
                                                                          },
                                                                        },
                                                                        [
                                                                          _c(
                                                                            "i",
                                                                            {
                                                                              staticClass:
                                                                                "i-Close-Window text-25 text-danger",
                                                                            }
                                                                          ),
                                                                        ]
                                                                      ),
                                                                    ]),
                                                                  ]
                                                                )
                                                              }
                                                            ),
                                                          ],
                                                          2
                                                        ),
                                                      ]
                                                    ),
                                                  ]
                                                ),
                                              ]
                                            ),
                                          ]
                                        ),
                                      ],
                                      1
                                    ),
                                    _vm._v(" "),
                                    _c(
                                      "div",
                                      { staticClass: "footer_panel" },
                                      [
                                        _c(
                                          "b-row",
                                          [
                                            _c(
                                              "b-col",
                                              { attrs: { md: "12" } },
                                              [
                                                _c(
                                                  "div",
                                                  { staticClass: "grandtotal" },
                                                  [
                                                    _c("span", [
                                                      _vm._v(
                                                        _vm._s(
                                                          _vm.$t("Total")
                                                        ) +
                                                          " : " +
                                                          _vm._s(
                                                            _vm.currentUser
                                                              .currency
                                                          ) +
                                                          " " +
                                                          _vm._s(
                                                            _vm.GrandTotal.toFixed(
                                                              2
                                                            )
                                                          )
                                                      ),
                                                    ]),
                                                  ]
                                                ),
                                              ]
                                            ),
                                            _vm._v(" "),
                                            _c(
                                              "b-col",
                                              {
                                                attrs: {
                                                  lg: "4",
                                                  md: "4",
                                                  sm: "12",
                                                },
                                              },
                                              [
                                                _c("validation-provider", {
                                                  attrs: {
                                                    name: "Order Tax",
                                                    rules: {
                                                      regex: /^\d*\.?\d*$/,
                                                    },
                                                  },
                                                  scopedSlots: _vm._u(
                                                    [
                                                      {
                                                        key: "default",
                                                        fn: function (
                                                          validationContext
                                                        ) {
                                                          return [
                                                            _c(
                                                              "b-form-group",
                                                              {
                                                                attrs: {
                                                                  label:
                                                                    _vm.$t(
                                                                      "Tax"
                                                                    ),
                                                                  append: "%",
                                                                },
                                                              },
                                                              [
                                                                _c(
                                                                  "b-input-group",
                                                                  {
                                                                    attrs: {
                                                                      append:
                                                                        "%",
                                                                    },
                                                                  },
                                                                  [
                                                                    _c(
                                                                      "b-form-input",
                                                                      {
                                                                        attrs: {
                                                                          state:
                                                                            _vm.getValidationState(
                                                                              validationContext
                                                                            ),
                                                                          "aria-describedby":
                                                                            "OrderTax-feedback",
                                                                          label:
                                                                            "Order Tax",
                                                                        },
                                                                        on: {
                                                                          keyup:
                                                                            function (
                                                                              $event
                                                                            ) {
                                                                              return _vm.keyup_OrderTax()
                                                                            },
                                                                        },
                                                                        model: {
                                                                          value:
                                                                            _vm
                                                                              .sale
                                                                              .tax_rate,
                                                                          callback:
                                                                            function (
                                                                              $$v
                                                                            ) {
                                                                              _vm.$set(
                                                                                _vm.sale,
                                                                                "tax_rate",
                                                                                _vm._n(
                                                                                  $$v
                                                                                )
                                                                              )
                                                                            },
                                                                          expression:
                                                                            "sale.tax_rate",
                                                                        },
                                                                      }
                                                                    ),
                                                                  ],
                                                                  1
                                                                ),
                                                                _vm._v(" "),
                                                                _c(
                                                                  "b-form-invalid-feedback",
                                                                  {
                                                                    attrs: {
                                                                      id: "OrderTax-feedback",
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
                                                    1527368817
                                                  ),
                                                }),
                                              ],
                                              1
                                            ),
                                            _vm._v(" "),
                                            _c(
                                              "b-col",
                                              {
                                                attrs: {
                                                  lg: "4",
                                                  md: "4",
                                                  sm: "12",
                                                },
                                              },
                                              [
                                                _c("validation-provider", {
                                                  attrs: {
                                                    name: "Discount",
                                                    rules: {
                                                      regex: /^\d*\.?\d*$/,
                                                    },
                                                  },
                                                  scopedSlots: _vm._u(
                                                    [
                                                      {
                                                        key: "default",
                                                        fn: function (
                                                          validationContext
                                                        ) {
                                                          return [
                                                            _c(
                                                              "b-form-group",
                                                              {
                                                                attrs: {
                                                                  label:
                                                                    _vm.$t(
                                                                      "Discount"
                                                                    ),
                                                                  append: "%",
                                                                },
                                                              },
                                                              [
                                                                _c(
                                                                  "b-input-group",
                                                                  {
                                                                    attrs: {
                                                                      append:
                                                                        _vm
                                                                          .currentUser
                                                                          .currency,
                                                                    },
                                                                  },
                                                                  [
                                                                    _c(
                                                                      "b-form-input",
                                                                      {
                                                                        attrs: {
                                                                          state:
                                                                            _vm.getValidationState(
                                                                              validationContext
                                                                            ),
                                                                          "aria-describedby":
                                                                            "Discount-feedback",
                                                                          label:
                                                                            "Discount",
                                                                        },
                                                                        on: {
                                                                          keyup:
                                                                            function (
                                                                              $event
                                                                            ) {
                                                                              return _vm.keyup_Discount()
                                                                            },
                                                                        },
                                                                        model: {
                                                                          value:
                                                                            _vm
                                                                              .sale
                                                                              .discount,
                                                                          callback:
                                                                            function (
                                                                              $$v
                                                                            ) {
                                                                              _vm.$set(
                                                                                _vm.sale,
                                                                                "discount",
                                                                                _vm._n(
                                                                                  $$v
                                                                                )
                                                                              )
                                                                            },
                                                                          expression:
                                                                            "sale.discount",
                                                                        },
                                                                      }
                                                                    ),
                                                                  ],
                                                                  1
                                                                ),
                                                                _vm._v(" "),
                                                                _c(
                                                                  "b-form-invalid-feedback",
                                                                  {
                                                                    attrs: {
                                                                      id: "Discount-feedback",
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
                                                    2452246776
                                                  ),
                                                }),
                                              ],
                                              1
                                            ),
                                            _vm._v(" "),
                                            _c(
                                              "b-col",
                                              {
                                                attrs: {
                                                  lg: "4",
                                                  md: "4",
                                                  sm: "12",
                                                },
                                              },
                                              [
                                                _c("validation-provider", {
                                                  attrs: {
                                                    name: "Shipping",
                                                    rules: {
                                                      regex: /^\d*\.?\d*$/,
                                                    },
                                                  },
                                                  scopedSlots: _vm._u(
                                                    [
                                                      {
                                                        key: "default",
                                                        fn: function (
                                                          validationContext
                                                        ) {
                                                          return [
                                                            _c(
                                                              "b-form-group",
                                                              {
                                                                attrs: {
                                                                  label:
                                                                    _vm.$t(
                                                                      "Shipping"
                                                                    ),
                                                                },
                                                              },
                                                              [
                                                                _c(
                                                                  "b-input-group",
                                                                  {
                                                                    attrs: {
                                                                      append:
                                                                        _vm
                                                                          .currentUser
                                                                          .currency,
                                                                    },
                                                                  },
                                                                  [
                                                                    _c(
                                                                      "b-form-input",
                                                                      {
                                                                        attrs: {
                                                                          state:
                                                                            _vm.getValidationState(
                                                                              validationContext
                                                                            ),
                                                                          "aria-describedby":
                                                                            "Shipping-feedback",
                                                                          label:
                                                                            "Shipping",
                                                                        },
                                                                        on: {
                                                                          keyup:
                                                                            function (
                                                                              $event
                                                                            ) {
                                                                              return _vm.keyup_Shipping()
                                                                            },
                                                                        },
                                                                        model: {
                                                                          value:
                                                                            _vm
                                                                              .sale
                                                                              .shipping,
                                                                          callback:
                                                                            function (
                                                                              $$v
                                                                            ) {
                                                                              _vm.$set(
                                                                                _vm.sale,
                                                                                "shipping",
                                                                                _vm._n(
                                                                                  $$v
                                                                                )
                                                                              )
                                                                            },
                                                                          expression:
                                                                            "sale.shipping",
                                                                        },
                                                                      }
                                                                    ),
                                                                  ],
                                                                  1
                                                                ),
                                                                _vm._v(" "),
                                                                _c(
                                                                  "b-form-invalid-feedback",
                                                                  {
                                                                    attrs: {
                                                                      id: "Shipping-feedback",
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
                                                    1943903941
                                                  ),
                                                }),
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
                                                      variant:
                                                        "danger ripple btn-rounded btn-block mt-1",
                                                    },
                                                    on: {
                                                      click: function ($event) {
                                                        return _vm.Reset_Pos()
                                                      },
                                                    },
                                                  },
                                                  [
                                                    _c("i", {
                                                      staticClass: "i-Power-2",
                                                    }),
                                                    _vm._v(
                                                      "\n                        " +
                                                        _vm._s(
                                                          _vm.$t("Reset")
                                                        ) +
                                                        "\n                      "
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
                                                      type: "submit",
                                                      variant:
                                                        "primary ripple mt-1 btn-rounded btn-block",
                                                    },
                                                  },
                                                  [
                                                    _c("i", {
                                                      staticClass: "i-Checkout",
                                                    }),
                                                    _vm._v(
                                                      "\n                        " +
                                                        _vm._s(
                                                          _vm.$t("payNow")
                                                        ) +
                                                        "\n                      "
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
                                  ],
                                  1
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
                          { ref: "Update_Detail" },
                          [
                            _c(
                              "b-modal",
                              {
                                attrs: {
                                  "hide-footer": "",
                                  size: "md",
                                  id: "form_Update_Detail",
                                  title: _vm.detail.name,
                                },
                              },
                              [
                                _c(
                                  "b-form",
                                  {
                                    on: {
                                      submit: function ($event) {
                                        $event.preventDefault()
                                        return _vm.submit_Update_Detail($event)
                                      },
                                    },
                                  },
                                  [
                                    _c(
                                      "b-row",
                                      [
                                        _c(
                                          "b-col",
                                          {
                                            attrs: {
                                              lg: "12",
                                              md: "12",
                                              sm: "12",
                                            },
                                          },
                                          [
                                            _c("validation-provider", {
                                              attrs: {
                                                name: "Product Price",
                                                rules: {
                                                  required: true,
                                                  regex: /^\d*\.?\d*$/,
                                                },
                                              },
                                              scopedSlots: _vm._u(
                                                [
                                                  {
                                                    key: "default",
                                                    fn: function (
                                                      validationContext
                                                    ) {
                                                      return [
                                                        _c(
                                                          "b-form-group",
                                                          {
                                                            attrs: {
                                                              label:
                                                                _vm.$t(
                                                                  "ProductPrice"
                                                                ),
                                                              id: "Price-input",
                                                            },
                                                          },
                                                          [
                                                            _c("b-form-input", {
                                                              attrs: {
                                                                label:
                                                                  "Product Price",
                                                                state:
                                                                  _vm.getValidationState(
                                                                    validationContext
                                                                  ),
                                                                "aria-describedby":
                                                                  "Price-feedback",
                                                              },
                                                              model: {
                                                                value:
                                                                  _vm.detail
                                                                    .Unit_price,
                                                                callback:
                                                                  function (
                                                                    $$v
                                                                  ) {
                                                                    _vm.$set(
                                                                      _vm.detail,
                                                                      "Unit_price",
                                                                      $$v
                                                                    )
                                                                  },
                                                                expression:
                                                                  "detail.Unit_price",
                                                              },
                                                            }),
                                                            _vm._v(" "),
                                                            _c(
                                                              "b-form-invalid-feedback",
                                                              {
                                                                attrs: {
                                                                  id: "Price-feedback",
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
                                                2344671014
                                              ),
                                            }),
                                          ],
                                          1
                                        ),
                                        _vm._v(" "),
                                        _c(
                                          "b-col",
                                          {
                                            attrs: {
                                              lg: "12",
                                              md: "12",
                                              sm: "12",
                                            },
                                          },
                                          [
                                            _c("validation-provider", {
                                              attrs: {
                                                name: "Tax Method",
                                                rules: { required: true },
                                              },
                                              scopedSlots: _vm._u(
                                                [
                                                  {
                                                    key: "default",
                                                    fn: function (ref) {
                                                      var valid = ref.valid
                                                      var errors = ref.errors
                                                      return _c(
                                                        "b-form-group",
                                                        {
                                                          attrs: {
                                                            label:
                                                              _vm.$t(
                                                                "TaxMethod"
                                                              ),
                                                          },
                                                        },
                                                        [
                                                          _c("v-select", {
                                                            class: {
                                                              "is-invalid":
                                                                !!errors.length,
                                                            },
                                                            attrs: {
                                                              state: errors[0]
                                                                ? false
                                                                : valid
                                                                ? true
                                                                : null,
                                                              reduce: function (
                                                                label
                                                              ) {
                                                                return label.value
                                                              },
                                                              placeholder:
                                                                _vm.$t(
                                                                  "Choose_Method"
                                                                ),
                                                              options: [
                                                                {
                                                                  label:
                                                                    "Exclusive",
                                                                  value: "1",
                                                                },
                                                                {
                                                                  label:
                                                                    "Inclusive",
                                                                  value: "2",
                                                                },
                                                              ],
                                                            },
                                                            model: {
                                                              value:
                                                                _vm.detail
                                                                  .tax_method,
                                                              callback:
                                                                function ($$v) {
                                                                  _vm.$set(
                                                                    _vm.detail,
                                                                    "tax_method",
                                                                    $$v
                                                                  )
                                                                },
                                                              expression:
                                                                "detail.tax_method",
                                                            },
                                                          }),
                                                          _vm._v(" "),
                                                          _c(
                                                            "b-form-invalid-feedback",
                                                            [
                                                              _vm._v(
                                                                _vm._s(
                                                                  errors[0]
                                                                )
                                                              ),
                                                            ]
                                                          ),
                                                        ],
                                                        1
                                                      )
                                                    },
                                                  },
                                                ],
                                                null,
                                                false,
                                                3596778309
                                              ),
                                            }),
                                          ],
                                          1
                                        ),
                                        _vm._v(" "),
                                        _c(
                                          "b-col",
                                          {
                                            attrs: {
                                              lg: "12",
                                              md: "12",
                                              sm: "12",
                                            },
                                          },
                                          [
                                            _c("validation-provider", {
                                              attrs: {
                                                name: "Tax",
                                                rules: {
                                                  required: true,
                                                  regex: /^\d*\.?\d*$/,
                                                },
                                              },
                                              scopedSlots: _vm._u(
                                                [
                                                  {
                                                    key: "default",
                                                    fn: function (
                                                      validationContext
                                                    ) {
                                                      return [
                                                        _c(
                                                          "b-form-group",
                                                          {
                                                            attrs: {
                                                              label:
                                                                _vm.$t("Tax"),
                                                            },
                                                          },
                                                          [
                                                            _c(
                                                              "b-input-group",
                                                              {
                                                                attrs: {
                                                                  append: "%",
                                                                },
                                                              },
                                                              [
                                                                _c(
                                                                  "b-form-input",
                                                                  {
                                                                    attrs: {
                                                                      label:
                                                                        "Tax",
                                                                      state:
                                                                        _vm.getValidationState(
                                                                          validationContext
                                                                        ),
                                                                      "aria-describedby":
                                                                        "Tax-feedback",
                                                                    },
                                                                    model: {
                                                                      value:
                                                                        _vm
                                                                          .detail
                                                                          .tax_percent,
                                                                      callback:
                                                                        function (
                                                                          $$v
                                                                        ) {
                                                                          _vm.$set(
                                                                            _vm.detail,
                                                                            "tax_percent",
                                                                            $$v
                                                                          )
                                                                        },
                                                                      expression:
                                                                        "detail.tax_percent",
                                                                    },
                                                                  }
                                                                ),
                                                              ],
                                                              1
                                                            ),
                                                            _vm._v(" "),
                                                            _c(
                                                              "b-form-invalid-feedback",
                                                              {
                                                                attrs: {
                                                                  id: "Tax-feedback",
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
                                                3195841040
                                              ),
                                            }),
                                          ],
                                          1
                                        ),
                                        _vm._v(" "),
                                        _c(
                                          "b-col",
                                          {
                                            attrs: {
                                              lg: "12",
                                              md: "12",
                                              sm: "12",
                                            },
                                          },
                                          [
                                            _c("validation-provider", {
                                              attrs: {
                                                name: "Discount Method",
                                                rules: { required: true },
                                              },
                                              scopedSlots: _vm._u(
                                                [
                                                  {
                                                    key: "default",
                                                    fn: function (ref) {
                                                      var valid = ref.valid
                                                      var errors = ref.errors
                                                      return _c(
                                                        "b-form-group",
                                                        {
                                                          attrs: {
                                                            label:
                                                              _vm.$t(
                                                                "Discount_Method"
                                                              ),
                                                          },
                                                        },
                                                        [
                                                          _c("v-select", {
                                                            class: {
                                                              "is-invalid":
                                                                !!errors.length,
                                                            },
                                                            attrs: {
                                                              reduce: function (
                                                                label
                                                              ) {
                                                                return label.value
                                                              },
                                                              placeholder:
                                                                _vm.$t(
                                                                  "Choose_Method"
                                                                ),
                                                              state: errors[0]
                                                                ? false
                                                                : valid
                                                                ? true
                                                                : null,
                                                              options: [
                                                                {
                                                                  label:
                                                                    "Percent %",
                                                                  value: "1",
                                                                },
                                                                {
                                                                  label:
                                                                    "Fixed",
                                                                  value: "2",
                                                                },
                                                              ],
                                                            },
                                                            model: {
                                                              value:
                                                                _vm.detail
                                                                  .discount_Method,
                                                              callback:
                                                                function ($$v) {
                                                                  _vm.$set(
                                                                    _vm.detail,
                                                                    "discount_Method",
                                                                    $$v
                                                                  )
                                                                },
                                                              expression:
                                                                "detail.discount_Method",
                                                            },
                                                          }),
                                                          _vm._v(" "),
                                                          _c(
                                                            "b-form-invalid-feedback",
                                                            [
                                                              _vm._v(
                                                                _vm._s(
                                                                  errors[0]
                                                                )
                                                              ),
                                                            ]
                                                          ),
                                                        ],
                                                        1
                                                      )
                                                    },
                                                  },
                                                ],
                                                null,
                                                false,
                                                1993049096
                                              ),
                                            }),
                                          ],
                                          1
                                        ),
                                        _vm._v(" "),
                                        _c(
                                          "b-col",
                                          {
                                            attrs: {
                                              lg: "12",
                                              md: "12",
                                              sm: "12",
                                            },
                                          },
                                          [
                                            _c("validation-provider", {
                                              attrs: {
                                                name: "Discount Rate",
                                                rules: {
                                                  required: true,
                                                  regex: /^\d*\.?\d*$/,
                                                },
                                              },
                                              scopedSlots: _vm._u(
                                                [
                                                  {
                                                    key: "default",
                                                    fn: function (
                                                      validationContext
                                                    ) {
                                                      return [
                                                        _c(
                                                          "b-form-group",
                                                          {
                                                            attrs: {
                                                              label:
                                                                _vm.$t(
                                                                  "Discount"
                                                                ),
                                                            },
                                                          },
                                                          [
                                                            _c("b-form-input", {
                                                              attrs: {
                                                                label:
                                                                  "Discount",
                                                                state:
                                                                  _vm.getValidationState(
                                                                    validationContext
                                                                  ),
                                                                "aria-describedby":
                                                                  "Discount-feedback",
                                                              },
                                                              model: {
                                                                value:
                                                                  _vm.detail
                                                                    .discount,
                                                                callback:
                                                                  function (
                                                                    $$v
                                                                  ) {
                                                                    _vm.$set(
                                                                      _vm.detail,
                                                                      "discount",
                                                                      $$v
                                                                    )
                                                                  },
                                                                expression:
                                                                  "detail.discount",
                                                              },
                                                            }),
                                                            _vm._v(" "),
                                                            _c(
                                                              "b-form-invalid-feedback",
                                                              {
                                                                attrs: {
                                                                  id: "Discount-feedback",
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
                                                1756200962
                                              ),
                                            }),
                                          ],
                                          1
                                        ),
                                        _vm._v(" "),
                                        _c(
                                          "b-col",
                                          {
                                            attrs: {
                                              lg: "12",
                                              md: "12",
                                              sm: "12",
                                            },
                                          },
                                          [
                                            _c("validation-provider", {
                                              attrs: {
                                                name: "Unit Sale",
                                                rules: { required: true },
                                              },
                                              scopedSlots: _vm._u(
                                                [
                                                  {
                                                    key: "default",
                                                    fn: function (ref) {
                                                      var valid = ref.valid
                                                      var errors = ref.errors
                                                      return _c(
                                                        "b-form-group",
                                                        {
                                                          attrs: {
                                                            label:
                                                              _vm.$t(
                                                                "UnitSale"
                                                              ),
                                                          },
                                                        },
                                                        [
                                                          _c("v-select", {
                                                            class: {
                                                              "is-invalid":
                                                                !!errors.length,
                                                            },
                                                            attrs: {
                                                              state: errors[0]
                                                                ? false
                                                                : valid
                                                                ? true
                                                                : null,
                                                              placeholder:
                                                                _vm.$t(
                                                                  "Choose_Unit_Sale"
                                                                ),
                                                              reduce: function (
                                                                label
                                                              ) {
                                                                return label.value
                                                              },
                                                              options:
                                                                _vm.units.map(
                                                                  function (
                                                                    units
                                                                  ) {
                                                                    return {
                                                                      label:
                                                                        units.name,
                                                                      value:
                                                                        units.id,
                                                                    }
                                                                  }
                                                                ),
                                                            },
                                                            model: {
                                                              value:
                                                                _vm.detail
                                                                  .sale_unit_id,
                                                              callback:
                                                                function ($$v) {
                                                                  _vm.$set(
                                                                    _vm.detail,
                                                                    "sale_unit_id",
                                                                    $$v
                                                                  )
                                                                },
                                                              expression:
                                                                "detail.sale_unit_id",
                                                            },
                                                          }),
                                                          _vm._v(" "),
                                                          _c(
                                                            "b-form-invalid-feedback",
                                                            [
                                                              _vm._v(
                                                                _vm._s(
                                                                  errors[0]
                                                                )
                                                              ),
                                                            ]
                                                          ),
                                                        ],
                                                        1
                                                      )
                                                    },
                                                  },
                                                ],
                                                null,
                                                false,
                                                589709391
                                              ),
                                            }),
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
                                              [
                                                _c(
                                                  "b-button",
                                                  {
                                                    attrs: {
                                                      variant: "primary",
                                                      type: "submit",
                                                    },
                                                  },
                                                  [
                                                    _vm._v(
                                                      _vm._s(_vm.$t("submit"))
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
                _vm._v(" "),
                _c(
                  "b-col",
                  { attrs: { md: "7" } },
                  [
                    _c(
                      "b-card",
                      { staticClass: "list-grid" },
                      [
                        _c(
                          "b-row",
                          [
                            _c("b-col", { attrs: { md: "6" } }, [
                              _c(
                                "button",
                                {
                                  directives: [
                                    {
                                      name: "b-toggle",
                                      rawName: "v-b-toggle.sidebar-category",
                                      modifiers: { "sidebar-category": true },
                                    },
                                  ],
                                  staticClass:
                                    "btn btn-outline-info mt-1 btn-block",
                                },
                                [
                                  _c("i", { staticClass: "i-Two-Windows" }),
                                  _vm._v(
                                    "\n                " +
                                      _vm._s(_vm.$t("ListofCategory")) +
                                      "\n              "
                                  ),
                                ]
                              ),
                            ]),
                            _vm._v(" "),
                            _c("b-col", { attrs: { md: "6" } }, [
                              _c(
                                "button",
                                {
                                  directives: [
                                    {
                                      name: "b-toggle",
                                      rawName: "v-b-toggle.sidebar-brand",
                                      modifiers: { "sidebar-brand": true },
                                    },
                                  ],
                                  staticClass:
                                    "btn btn-outline-info mt-1 btn-block",
                                },
                                [
                                  _c("i", { staticClass: "i-Library" }),
                                  _vm._v(
                                    "\n                " +
                                      _vm._s(_vm.$t("ListofBrand")) +
                                      "\n              "
                                  ),
                                ]
                              ),
                            ]),
                            _vm._v(" "),
                            _c(
                              "b-col",
                              { staticClass: "mt-2 mb-2", attrs: { md: "12" } },
                              [
                                _c("h6", [
                                  _vm._v(_vm._s(_vm.$t("ProductName"))),
                                ]),
                                _vm._v(" "),
                                _c(
                                  "div",
                                  {
                                    staticClass: "autocomplete",
                                    attrs: { id: "autocomplete" },
                                  },
                                  [
                                    _c("input", {
                                      directives: [
                                        {
                                          name: "model",
                                          rawName: "v-model",
                                          value: _vm.search_input,
                                          expression: "search_input",
                                        },
                                      ],
                                      staticClass: "autocomplete-input",
                                      attrs: {
                                        placeholder: _vm.$t(
                                          "Scan_Search_Product_by_Code_Name"
                                        ),
                                      },
                                      domProps: { value: _vm.search_input },
                                      on: {
                                        keyup: function ($event) {
                                          return _vm.search()
                                        },
                                        focus: _vm.handleFocus,
                                        blur: _vm.handleBlur,
                                        input: function ($event) {
                                          if ($event.target.composing) {
                                            return
                                          }
                                          _vm.search_input = $event.target.value
                                        },
                                      },
                                    }),
                                    _vm._v(" "),
                                    _c(
                                      "ul",
                                      {
                                        directives: [
                                          {
                                            name: "show",
                                            rawName: "v-show",
                                            value: _vm.focused,
                                            expression: "focused",
                                          },
                                        ],
                                        staticClass: "autocomplete-result-list",
                                      },
                                      _vm._l(
                                        _vm.product_filter,
                                        function (product_fil) {
                                          return _c(
                                            "li",
                                            {
                                              staticClass:
                                                "autocomplete-result",
                                              on: {
                                                mousedown: function ($event) {
                                                  return _vm.SearchProduct(
                                                    product_fil
                                                  )
                                                },
                                              },
                                            },
                                            [
                                              _vm._v(
                                                _vm._s(
                                                  _vm.getResultValue(
                                                    product_fil
                                                  )
                                                )
                                              ),
                                            ]
                                          )
                                        }
                                      ),
                                      0
                                    ),
                                  ]
                                ),
                              ]
                            ),
                            _vm._v(" "),
                            _c(
                              "div",
                              {
                                staticClass:
                                  "col-md-12 d-flex flex-row flex-wrap bd-highlight list-item mt-2",
                              },
                              _vm._l(_vm.products, function (product) {
                                return _c(
                                  "div",
                                  {
                                    staticClass:
                                      "card o-hidden bd-highlight m-1",
                                    on: {
                                      click: function ($event) {
                                        return _vm.Check_Product_Exist(
                                          product,
                                          product.id
                                        )
                                      },
                                    },
                                  },
                                  [
                                    _c(
                                      "div",
                                      { staticClass: "list-thumb d-flex" },
                                      [
                                        _c("img", {
                                          attrs: {
                                            alt: "",
                                            src:
                                              "/images/products/" +
                                              product.image,
                                          },
                                        }),
                                      ]
                                    ),
                                    _vm._v(" "),
                                    _c(
                                      "div",
                                      { staticClass: "flex-grow-1 d-bock" },
                                      [
                                        _c(
                                          "div",
                                          {
                                            staticClass:
                                              "card-body align-self-center d-flex flex-column justify-content-between align-items-lg-center",
                                          },
                                          [
                                            _c(
                                              "div",
                                              {
                                                staticClass:
                                                  "w-40 w-sm-100 item-title",
                                              },
                                              [_vm._v(_vm._s(product.name))]
                                            ),
                                            _vm._v(" "),
                                            _c(
                                              "p",
                                              {
                                                staticClass:
                                                  "text-muted text-small w-15 w-sm-100 mb-2",
                                              },
                                              [_vm._v(_vm._s(product.code))]
                                            ),
                                            _vm._v(" "),
                                            _c(
                                              "span",
                                              {
                                                staticClass:
                                                  "badge badge-primary w-15 w-sm-100 mb-2",
                                              },
                                              [
                                                _vm._v(
                                                  _vm._s(
                                                    _vm.currentUser.currency
                                                  ) +
                                                    " " +
                                                    _vm._s(
                                                      _vm.formatNumber(
                                                        product.Net_price,
                                                        2
                                                      )
                                                    )
                                                ),
                                              ]
                                            ),
                                            _vm._v(" "),
                                            _c(
                                              "p",
                                              {
                                                staticClass:
                                                  "m-0 text-muted text-small w-15 w-sm-100 d-none d-lg-block item-badges",
                                              },
                                              [
                                                _c(
                                                  "span",
                                                  {
                                                    staticClass:
                                                      "badge badge-info",
                                                  },
                                                  [
                                                    _vm._v(
                                                      _vm._s(
                                                        _vm.formatNumber(
                                                          product.qte_sale,
                                                          2
                                                        )
                                                      ) +
                                                        " " +
                                                        _vm._s(product.unitSale)
                                                    ),
                                                  ]
                                                ),
                                              ]
                                            ),
                                          ]
                                        ),
                                      ]
                                    ),
                                  ]
                                )
                              }),
                              0
                            ),
                          ],
                          1
                        ),
                        _vm._v(" "),
                        _c(
                          "b-row",
                          [
                            _c(
                              "b-col",
                              { staticClass: "mt-4", attrs: { md: "12" } },
                              [
                                _c(
                                  "b-pagination",
                                  {
                                    staticClass:
                                      "my-0 gull-pagination align-items-center",
                                    attrs: {
                                      "total-rows": _vm.product_totalRows,
                                      "per-page": _vm.product_perPage,
                                      align: "center",
                                      "first-text": "",
                                      "last-text": "",
                                    },
                                    on: { change: _vm.Product_onPageChanged },
                                    model: {
                                      value: _vm.product_currentPage,
                                      callback: function ($$v) {
                                        _vm.product_currentPage = $$v
                                      },
                                      expression: "product_currentPage",
                                    },
                                  },
                                  [
                                    _c(
                                      "p",
                                      {
                                        staticClass: "list-arrow m-0",
                                        attrs: { slot: "prev-text" },
                                        slot: "prev-text",
                                      },
                                      [
                                        _c("i", {
                                          staticClass: "i-Arrow-Left text-40",
                                        }),
                                      ]
                                    ),
                                    _vm._v(" "),
                                    _c(
                                      "p",
                                      {
                                        staticClass: "list-arrow m-0",
                                        attrs: { slot: "next-text" },
                                        slot: "next-text",
                                      },
                                      [
                                        _c("i", {
                                          staticClass: "i-Arrow-Right text-40",
                                        }),
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
                      ],
                      1
                    ),
                  ],
                  1
                ),
                _vm._v(" "),
                _c(
                  "b-sidebar",
                  {
                    attrs: {
                      id: "sidebar-brand",
                      title: _vm.$t("ListofBrand"),
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
                        _c("b-row", [
                          _c(
                            "div",
                            {
                              staticClass:
                                "col-md-12 d-flex flex-row flex-wrap bd-highlight list-item mt-2",
                            },
                            [
                              _c(
                                "div",
                                {
                                  staticClass: "card o-hidden bd-highlight m-1",
                                  class: { "brand-Active": _vm.brand_id == "" },
                                  on: {
                                    click: function ($event) {
                                      return _vm.GetAllBrands()
                                    },
                                  },
                                },
                                [
                                  _c(
                                    "div",
                                    { staticClass: "list-thumb d-flex" },
                                    [
                                      _c("img", {
                                        attrs: {
                                          alt: "",
                                          src: "/images/no-image.png",
                                        },
                                      }),
                                    ]
                                  ),
                                  _vm._v(" "),
                                  _c(
                                    "div",
                                    { staticClass: "flex-grow-1 d-bock" },
                                    [
                                      _c(
                                        "div",
                                        {
                                          staticClass:
                                            "card-body align-self-center d-flex flex-column justify-content-between align-items-lg-center",
                                        },
                                        [
                                          _c(
                                            "div",
                                            { staticClass: "item-title" },
                                            [
                                              _vm._v(
                                                _vm._s(_vm.$t("All_Brand"))
                                              ),
                                            ]
                                          ),
                                        ]
                                      ),
                                    ]
                                  ),
                                ]
                              ),
                              _vm._v(" "),
                              _vm._l(_vm.paginated_Brands, function (brand) {
                                return _c(
                                  "div",
                                  {
                                    key: brand.id,
                                    staticClass:
                                      "card o-hidden bd-highlight m-1",
                                    class: {
                                      "brand-Active": brand.id === _vm.brand_id,
                                    },
                                    on: {
                                      click: function ($event) {
                                        return _vm.Products_by_Brands(brand.id)
                                      },
                                    },
                                  },
                                  [
                                    _c("img", {
                                      attrs: {
                                        alt: "",
                                        src: "/images/brands/" + brand.image,
                                      },
                                    }),
                                    _vm._v(" "),
                                    _c(
                                      "div",
                                      { staticClass: "flex-grow-1 d-bock" },
                                      [
                                        _c(
                                          "div",
                                          {
                                            staticClass:
                                              "card-body align-self-center d-flex flex-column justify-content-between align-items-lg-center",
                                          },
                                          [
                                            _c(
                                              "div",
                                              { staticClass: "item-title" },
                                              [_vm._v(_vm._s(brand.name))]
                                            ),
                                          ]
                                        ),
                                      ]
                                    ),
                                  ]
                                )
                              }),
                            ],
                            2
                          ),
                        ]),
                        _vm._v(" "),
                        _c(
                          "b-row",
                          [
                            _c(
                              "b-col",
                              { staticClass: "mt-4", attrs: { md: "12" } },
                              [
                                _c(
                                  "b-pagination",
                                  {
                                    staticClass:
                                      "my-0 gull-pagination align-items-center",
                                    attrs: {
                                      "total-rows": _vm.brand_totalRows,
                                      "per-page": _vm.brand_perPage,
                                      align: "center",
                                      "first-text": "",
                                      "last-text": "",
                                    },
                                    on: { change: _vm.BrandonPageChanged },
                                    model: {
                                      value: _vm.brand_currentPage,
                                      callback: function ($$v) {
                                        _vm.brand_currentPage = $$v
                                      },
                                      expression: "brand_currentPage",
                                    },
                                  },
                                  [
                                    _c(
                                      "p",
                                      {
                                        staticClass: "list-arrow m-0",
                                        attrs: { slot: "prev-text" },
                                        slot: "prev-text",
                                      },
                                      [
                                        _c("i", {
                                          staticClass: "i-Arrow-Left text-40",
                                        }),
                                      ]
                                    ),
                                    _vm._v(" "),
                                    _c(
                                      "p",
                                      {
                                        staticClass: "list-arrow m-0",
                                        attrs: { slot: "next-text" },
                                        slot: "next-text",
                                      },
                                      [
                                        _c("i", {
                                          staticClass: "i-Arrow-Right text-40",
                                        }),
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
                      ],
                      1
                    ),
                  ]
                ),
                _vm._v(" "),
                _c(
                  "b-sidebar",
                  {
                    attrs: {
                      id: "sidebar-category",
                      title: _vm.$t("ListofCategory"),
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
                        _c("b-row", [
                          _c(
                            "div",
                            {
                              staticClass:
                                "col-md-12 d-flex flex-row flex-wrap bd-highlight list-item mt-2",
                            },
                            [
                              _c(
                                "div",
                                {
                                  staticClass: "card o-hidden bd-highlight m-1",
                                  class: {
                                    "brand-Active": _vm.category_id == "",
                                  },
                                  on: {
                                    click: function ($event) {
                                      return _vm.getAllCategory()
                                    },
                                  },
                                },
                                [
                                  _c(
                                    "div",
                                    { staticClass: "list-thumb d-flex" },
                                    [
                                      _c("img", {
                                        attrs: {
                                          alt: "",
                                          src: "/images/no-image.png",
                                        },
                                      }),
                                    ]
                                  ),
                                  _vm._v(" "),
                                  _c(
                                    "div",
                                    { staticClass: "flex-grow-1 d-bock" },
                                    [
                                      _c(
                                        "div",
                                        {
                                          staticClass:
                                            "card-body align-self-center d-flex flex-column justify-content-between align-items-lg-center",
                                        },
                                        [
                                          _c(
                                            "div",
                                            { staticClass: "item-title" },
                                            [
                                              _vm._v(
                                                _vm._s(_vm.$t("All_Category"))
                                              ),
                                            ]
                                          ),
                                        ]
                                      ),
                                    ]
                                  ),
                                ]
                              ),
                              _vm._v(" "),
                              _vm._l(
                                _vm.paginated_Category,
                                function (category) {
                                  return _c(
                                    "div",
                                    {
                                      key: category.id,
                                      staticClass:
                                        "card o-hidden bd-highlight m-1",
                                      class: {
                                        "brand-Active":
                                          category.id === _vm.category_id,
                                      },
                                      on: {
                                        click: function ($event) {
                                          return _vm.Products_by_Category(
                                            category.id
                                          )
                                        },
                                      },
                                    },
                                    [
                                      _c("img", {
                                        attrs: {
                                          alt: "",
                                          src: "/images/no-image.png",
                                        },
                                      }),
                                      _vm._v(" "),
                                      _c(
                                        "div",
                                        { staticClass: "flex-grow-1 d-bock" },
                                        [
                                          _c(
                                            "div",
                                            {
                                              staticClass:
                                                "card-body align-self-center d-flex flex-column justify-content-between align-items-lg-center",
                                            },
                                            [
                                              _c(
                                                "div",
                                                { staticClass: "item-title" },
                                                [_vm._v(_vm._s(category.name))]
                                              ),
                                            ]
                                          ),
                                        ]
                                      ),
                                    ]
                                  )
                                }
                              ),
                            ],
                            2
                          ),
                        ]),
                        _vm._v(" "),
                        _c(
                          "b-row",
                          [
                            _c(
                              "b-col",
                              { staticClass: "mt-4", attrs: { md: "12" } },
                              [
                                _c(
                                  "b-pagination",
                                  {
                                    staticClass:
                                      "my-0 gull-pagination align-items-center",
                                    attrs: {
                                      "total-rows": _vm.category_totalRows,
                                      "per-page": _vm.category_perPage,
                                      align: "center",
                                      "first-text": "",
                                      "last-text": "",
                                    },
                                    on: { change: _vm.Category_onPageChanged },
                                    model: {
                                      value: _vm.category_currentPage,
                                      callback: function ($$v) {
                                        _vm.category_currentPage = $$v
                                      },
                                      expression: "category_currentPage",
                                    },
                                  },
                                  [
                                    _c(
                                      "p",
                                      {
                                        staticClass: "list-arrow m-0",
                                        attrs: { slot: "prev-text" },
                                        slot: "prev-text",
                                      },
                                      [
                                        _c("i", {
                                          staticClass: "i-Arrow-Left text-40",
                                        }),
                                      ]
                                    ),
                                    _vm._v(" "),
                                    _c(
                                      "p",
                                      {
                                        staticClass: "list-arrow m-0",
                                        attrs: { slot: "next-text" },
                                        slot: "next-text",
                                      },
                                      [
                                        _c("i", {
                                          staticClass: "i-Arrow-Right text-40",
                                        }),
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
                      size: "sm",
                      scrollable: "",
                      id: "Show_invoice",
                      title: _vm.$t("Invoice_POS"),
                    },
                  },
                  [
                    _c("div", { attrs: { id: "invoice-POS" } }, [
                      _c(
                        "div",
                        {
                          staticStyle: {
                            "max-width": "400px",
                            margin: "0px auto",
                          },
                        },
                        [
                          _c("div", { staticClass: "info" }, [
                            _c("h2", { staticClass: "text-center" }, [
                              _vm._v(
                                _vm._s(_vm.invoice_pos.setting.CompanyName)
                              ),
                            ]),
                            _vm._v(" "),
                            _c("p", [
                              _c("span", [
                                _vm._v(
                                  _vm._s(_vm.$t("date")) +
                                    " : " +
                                    _vm._s(_vm.invoice_pos.sale.date) +
                                    " "
                                ),
                                _c("br"),
                              ]),
                              _vm._v(" "),
                              _c(
                                "span",
                                {
                                  directives: [
                                    {
                                      name: "show",
                                      rawName: "v-show",
                                      value: _vm.pos_settings.show_address,
                                      expression: "pos_settings.show_address",
                                    },
                                  ],
                                },
                                [
                                  _vm._v(
                                    _vm._s(_vm.$t("Adress")) +
                                      " : " +
                                      _vm._s(
                                        _vm.invoice_pos.setting.CompanyAdress
                                      ) +
                                      " "
                                  ),
                                  _c("br"),
                                ]
                              ),
                              _vm._v(" "),
                              _c(
                                "span",
                                {
                                  directives: [
                                    {
                                      name: "show",
                                      rawName: "v-show",
                                      value: _vm.pos_settings.show_email,
                                      expression: "pos_settings.show_email",
                                    },
                                  ],
                                },
                                [
                                  _vm._v(
                                    _vm._s(_vm.$t("Email")) +
                                      " : " +
                                      _vm._s(_vm.invoice_pos.setting.email) +
                                      " "
                                  ),
                                  _c("br"),
                                ]
                              ),
                              _vm._v(" "),
                              _c(
                                "span",
                                {
                                  directives: [
                                    {
                                      name: "show",
                                      rawName: "v-show",
                                      value: _vm.pos_settings.show_phone,
                                      expression: "pos_settings.show_phone",
                                    },
                                  ],
                                },
                                [
                                  _vm._v(
                                    _vm._s(_vm.$t("Phone")) +
                                      " : " +
                                      _vm._s(
                                        _vm.invoice_pos.setting.CompanyPhone
                                      ) +
                                      " "
                                  ),
                                  _c("br"),
                                ]
                              ),
                              _vm._v(" "),
                              _c(
                                "span",
                                {
                                  directives: [
                                    {
                                      name: "show",
                                      rawName: "v-show",
                                      value: _vm.pos_settings.show_customer,
                                      expression: "pos_settings.show_customer",
                                    },
                                  ],
                                },
                                [
                                  _vm._v(
                                    _vm._s(_vm.$t("Customer")) +
                                      " : " +
                                      _vm._s(_vm.invoice_pos.sale.client_name) +
                                      " "
                                  ),
                                  _c("br"),
                                ]
                              ),
                            ]),
                          ]),
                          _vm._v(" "),
                          _c("table", { staticClass: "table_data" }, [
                            _c(
                              "tbody",
                              [
                                _vm._l(
                                  _vm.invoice_pos.details,
                                  function (detail_invoice) {
                                    return _c("tr", [
                                      _c("td", { attrs: { colspan: "3" } }, [
                                        _c("span", [
                                          _vm._v(
                                            "\n                      " +
                                              _vm._s(detail_invoice.name) +
                                              "\n                      "
                                          ),
                                          _c("br"),
                                          _vm._v(
                                            "\n                      " +
                                              _vm._s(
                                                _vm.formatNumber(
                                                  detail_invoice.quantity,
                                                  2
                                                )
                                              ) +
                                              " " +
                                              _vm._s(detail_invoice.unit_sale) +
                                              " x " +
                                              _vm._s(
                                                _vm.formatNumber(
                                                  detail_invoice.total /
                                                    detail_invoice.quantity,
                                                  2
                                                )
                                              ) +
                                              "\n                    "
                                          ),
                                        ]),
                                      ]),
                                      _vm._v(" "),
                                      _c(
                                        "td",
                                        {
                                          staticStyle: {
                                            "text-align": "right",
                                            "vertical-align": "bottom",
                                          },
                                        },
                                        [
                                          _vm._v(
                                            _vm._s(
                                              _vm.formatNumber(
                                                detail_invoice.total,
                                                2
                                              )
                                            )
                                          ),
                                        ]
                                      ),
                                    ])
                                  }
                                ),
                                _vm._v(" "),
                                _c(
                                  "tr",
                                  { staticStyle: { "margin-top": "10px" } },
                                  [
                                    _c(
                                      "td",
                                      {
                                        staticClass: "total",
                                        attrs: { colspan: "3" },
                                      },
                                      [_vm._v(_vm._s(_vm.$t("OrderTax")))]
                                    ),
                                    _vm._v(" "),
                                    _c(
                                      "td",
                                      {
                                        staticClass: "total",
                                        staticStyle: { "text-align": "right" },
                                      },
                                      [
                                        _vm._v(
                                          _vm._s(_vm.invoice_pos.symbol) +
                                            " " +
                                            _vm._s(
                                              _vm.formatNumber(
                                                _vm.invoice_pos.sale.taxe,
                                                2
                                              )
                                            ) +
                                            " (" +
                                            _vm._s(
                                              _vm.formatNumber(
                                                _vm.invoice_pos.sale.tax_rate,
                                                2
                                              )
                                            ) +
                                            " %)"
                                        ),
                                      ]
                                    ),
                                  ]
                                ),
                                _vm._v(" "),
                                _c(
                                  "tr",
                                  { staticStyle: { "margin-top": "10px" } },
                                  [
                                    _c(
                                      "td",
                                      {
                                        staticClass: "total",
                                        attrs: { colspan: "3" },
                                      },
                                      [_vm._v(_vm._s(_vm.$t("Discount")))]
                                    ),
                                    _vm._v(" "),
                                    _c(
                                      "td",
                                      {
                                        staticClass: "total",
                                        staticStyle: { "text-align": "right" },
                                      },
                                      [
                                        _vm._v(
                                          _vm._s(_vm.invoice_pos.symbol) +
                                            " " +
                                            _vm._s(
                                              _vm.formatNumber(
                                                _vm.invoice_pos.sale.discount,
                                                2
                                              )
                                            )
                                        ),
                                      ]
                                    ),
                                  ]
                                ),
                                _vm._v(" "),
                                _c(
                                  "tr",
                                  { staticStyle: { "margin-top": "10px" } },
                                  [
                                    _c(
                                      "td",
                                      {
                                        staticClass: "total",
                                        attrs: { colspan: "3" },
                                      },
                                      [_vm._v(_vm._s(_vm.$t("Total")))]
                                    ),
                                    _vm._v(" "),
                                    _c(
                                      "td",
                                      {
                                        staticClass: "total",
                                        staticStyle: { "text-align": "right" },
                                      },
                                      [
                                        _vm._v(
                                          _vm._s(_vm.invoice_pos.symbol) +
                                            " " +
                                            _vm._s(
                                              _vm.formatNumber(
                                                _vm.invoice_pos.sale.GrandTotal,
                                                2
                                              )
                                            )
                                        ),
                                      ]
                                    ),
                                  ]
                                ),
                                _vm._v(" "),
                                _c(
                                  "tr",
                                  {
                                    directives: [
                                      {
                                        name: "show",
                                        rawName: "v-show",
                                        value:
                                          _vm.invoice_pos.sale.paid_amount <
                                          _vm.invoice_pos.sale.GrandTotal,
                                        expression:
                                          "invoice_pos.sale.paid_amount < invoice_pos.sale.GrandTotal",
                                      },
                                    ],
                                  },
                                  [
                                    _c(
                                      "td",
                                      {
                                        staticClass: "total",
                                        attrs: { colspan: "3" },
                                      },
                                      [_vm._v(_vm._s(_vm.$t("Paid")))]
                                    ),
                                    _vm._v(" "),
                                    _c(
                                      "td",
                                      {
                                        staticClass: "total",
                                        staticStyle: { "text-align": "right" },
                                      },
                                      [
                                        _vm._v(
                                          _vm._s(_vm.invoice_pos.symbol) +
                                            " " +
                                            _vm._s(
                                              _vm.formatNumber(
                                                _vm.invoice_pos.sale
                                                  .paid_amount,
                                                2
                                              )
                                            )
                                        ),
                                      ]
                                    ),
                                  ]
                                ),
                                _vm._v(" "),
                                _c(
                                  "tr",
                                  {
                                    directives: [
                                      {
                                        name: "show",
                                        rawName: "v-show",
                                        value:
                                          _vm.invoice_pos.sale.paid_amount <
                                          _vm.invoice_pos.sale.GrandTotal,
                                        expression:
                                          "invoice_pos.sale.paid_amount < invoice_pos.sale.GrandTotal",
                                      },
                                    ],
                                  },
                                  [
                                    _c(
                                      "td",
                                      {
                                        staticClass: "total",
                                        attrs: { colspan: "3" },
                                      },
                                      [_vm._v(_vm._s(_vm.$t("Due")))]
                                    ),
                                    _vm._v(" "),
                                    _c(
                                      "td",
                                      {
                                        staticClass: "total",
                                        staticStyle: { "text-align": "right" },
                                      },
                                      [
                                        _vm._v(
                                          _vm._s(_vm.invoice_pos.symbol) +
                                            " " +
                                            _vm._s(
                                              parseFloat(
                                                _vm.invoice_pos.sale
                                                  .GrandTotal -
                                                  _vm.invoice_pos.sale
                                                    .paid_amount
                                              ).toFixed(2)
                                            )
                                        ),
                                      ]
                                    ),
                                  ]
                                ),
                              ],
                              2
                            ),
                          ]),
                          _vm._v(" "),
                          _c(
                            "table",
                            {
                              directives: [
                                {
                                  name: "show",
                                  rawName: "v-show",
                                  value: _vm.invoice_pos.sale.paid_amount > 0,
                                  expression:
                                    "invoice_pos.sale.paid_amount > 0",
                                },
                              ],
                              staticClass: "change mt-3",
                              staticStyle: { "font-size": "10px" },
                            },
                            [
                              _c("thead", [
                                _c(
                                  "tr",
                                  { staticStyle: { background: "#eee" } },
                                  [
                                    _c(
                                      "th",
                                      {
                                        staticStyle: { "text-align": "left" },
                                        attrs: { colspan: "1" },
                                      },
                                      [_vm._v(_vm._s(_vm.$t("PayeBy")) + ":")]
                                    ),
                                    _vm._v(" "),
                                    _c(
                                      "th",
                                      {
                                        staticStyle: { "text-align": "center" },
                                        attrs: { colspan: "2" },
                                      },
                                      [_vm._v(_vm._s(_vm.$t("Amount")) + ":")]
                                    ),
                                    _vm._v(" "),
                                    _c(
                                      "th",
                                      {
                                        staticStyle: { "text-align": "right" },
                                        attrs: { colspan: "1" },
                                      },
                                      [_vm._v(_vm._s(_vm.$t("Change")) + ":")]
                                    ),
                                  ]
                                ),
                              ]),
                              _vm._v(" "),
                              _c(
                                "tbody",
                                _vm._l(_vm.payments, function (payment_pos) {
                                  return _c("tr", [
                                    _c(
                                      "td",
                                      {
                                        staticStyle: { "text-align": "left" },
                                        attrs: { colspan: "1" },
                                      },
                                      [_vm._v(_vm._s(payment_pos.Reglement))]
                                    ),
                                    _vm._v(" "),
                                    _c(
                                      "td",
                                      {
                                        staticStyle: { "text-align": "center" },
                                        attrs: { colspan: "2" },
                                      },
                                      [
                                        _vm._v(
                                          _vm._s(
                                            _vm.formatNumber(
                                              payment_pos.montant,
                                              2
                                            )
                                          )
                                        ),
                                      ]
                                    ),
                                    _vm._v(" "),
                                    _c(
                                      "td",
                                      {
                                        staticStyle: { "text-align": "right" },
                                        attrs: { colspan: "1" },
                                      },
                                      [
                                        _vm._v(
                                          _vm._s(
                                            _vm.formatNumber(
                                              payment_pos.change,
                                              2
                                            )
                                          )
                                        ),
                                      ]
                                    ),
                                  ])
                                }),
                                0
                              ),
                            ]
                          ),
                          _vm._v(" "),
                          _c(
                            "div",
                            { staticClass: "ml-2", attrs: { id: "legalcopy" } },
                            [
                              _c(
                                "p",
                                {
                                  directives: [
                                    {
                                      name: "show",
                                      rawName: "v-show",
                                      value: _vm.pos_settings.show_note,
                                      expression: "pos_settings.show_note",
                                    },
                                  ],
                                  staticClass: "legal",
                                },
                                [
                                  _c("strong", [
                                    _vm._v(
                                      _vm._s(_vm.pos_settings.note_customer)
                                    ),
                                  ]),
                                ]
                              ),
                              _vm._v(" "),
                              _c(
                                "div",
                                {
                                  directives: [
                                    {
                                      name: "show",
                                      rawName: "v-show",
                                      value: _vm.pos_settings.show_barcode,
                                      expression: "pos_settings.show_barcode",
                                    },
                                  ],
                                  attrs: { id: "bar" },
                                },
                                [
                                  _c("barcode", {
                                    staticClass: "barcode",
                                    attrs: {
                                      format: _vm.barcodeFormat,
                                      value: _vm.invoice_pos.sale.Ref,
                                      textmargin: "0",
                                      fontoptions: "bold",
                                      fontSize: "15",
                                      height: "25",
                                      width: "1",
                                    },
                                  }),
                                ],
                                1
                              ),
                            ]
                          ),
                        ]
                      ),
                    ]),
                    _vm._v(" "),
                    _c(
                      "button",
                      {
                        staticClass: "btn btn-outline-primary",
                        on: {
                          click: function ($event) {
                            return _vm.print_pos()
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
                  ]
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
                          title: _vm.$t("AddPayment"),
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
                                  { attrs: { md: "6" } },
                                  [
                                    _c(
                                      "b-row",
                                      [
                                        _c(
                                          "b-col",
                                          {
                                            attrs: {
                                              lg: "12",
                                              md: "12",
                                              sm: "12",
                                            },
                                          },
                                          [
                                            _c("validation-provider", {
                                              attrs: {
                                                name: "Received Amount",
                                                rules: {
                                                  required: true,
                                                  regex: /^\d*\.?\d*$/,
                                                },
                                              },
                                              scopedSlots: _vm._u(
                                                [
                                                  {
                                                    key: "default",
                                                    fn: function (
                                                      validationContext
                                                    ) {
                                                      return [
                                                        _c(
                                                          "b-form-group",
                                                          {
                                                            attrs: {
                                                              label:
                                                                _vm.$t(
                                                                  "Received_Amount"
                                                                ),
                                                            },
                                                          },
                                                          [
                                                            _c("b-form-input", {
                                                              attrs: {
                                                                label:
                                                                  "Received_Amount",
                                                                placeholder:
                                                                  _vm.$t(
                                                                    "Received_Amount"
                                                                  ),
                                                                state:
                                                                  _vm.getValidationState(
                                                                    validationContext
                                                                  ),
                                                                "aria-describedby":
                                                                  "Received_Amount-feedback",
                                                              },
                                                              on: {
                                                                keyup:
                                                                  function (
                                                                    $event
                                                                  ) {
                                                                    return _vm.Verified_Received_Amount(
                                                                      _vm
                                                                        .payment
                                                                        .received_amount
                                                                    )
                                                                  },
                                                              },
                                                              model: {
                                                                value:
                                                                  _vm.payment
                                                                    .received_amount,
                                                                callback:
                                                                  function (
                                                                    $$v
                                                                  ) {
                                                                    _vm.$set(
                                                                      _vm.payment,
                                                                      "received_amount",
                                                                      _vm._n(
                                                                        $$v
                                                                      )
                                                                    )
                                                                  },
                                                                expression:
                                                                  "payment.received_amount",
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
                                                4284534162
                                              ),
                                            }),
                                          ],
                                          1
                                        ),
                                        _vm._v(" "),
                                        _c(
                                          "b-col",
                                          {
                                            attrs: {
                                              lg: "12",
                                              md: "12",
                                              sm: "12",
                                            },
                                          },
                                          [
                                            _c("validation-provider", {
                                              attrs: {
                                                name: "Paying Amount",
                                                rules: {
                                                  required: true,
                                                  regex: /^\d*\.?\d*$/,
                                                },
                                              },
                                              scopedSlots: _vm._u(
                                                [
                                                  {
                                                    key: "default",
                                                    fn: function (
                                                      validationContext
                                                    ) {
                                                      return [
                                                        _c(
                                                          "b-form-group",
                                                          {
                                                            attrs: {
                                                              label:
                                                                _vm.$t(
                                                                  "Paying_Amount"
                                                                ),
                                                            },
                                                          },
                                                          [
                                                            _c("b-form-input", {
                                                              attrs: {
                                                                label:
                                                                  "Paying_Amount",
                                                                placeholder:
                                                                  _vm.$t(
                                                                    "Paying_Amount"
                                                                  ),
                                                                state:
                                                                  _vm.getValidationState(
                                                                    validationContext
                                                                  ),
                                                                "aria-describedby":
                                                                  "Paying_Amount-feedback",
                                                              },
                                                              on: {
                                                                keyup:
                                                                  function (
                                                                    $event
                                                                  ) {
                                                                    return _vm.Verified_paidAmount(
                                                                      _vm
                                                                        .payment
                                                                        .amount
                                                                    )
                                                                  },
                                                              },
                                                              model: {
                                                                value:
                                                                  _vm.payment
                                                                    .amount,
                                                                callback:
                                                                  function (
                                                                    $$v
                                                                  ) {
                                                                    _vm.$set(
                                                                      _vm.payment,
                                                                      "amount",
                                                                      _vm._n(
                                                                        $$v
                                                                      )
                                                                    )
                                                                  },
                                                                expression:
                                                                  "payment.amount",
                                                              },
                                                            }),
                                                            _vm._v(" "),
                                                            _c(
                                                              "b-form-invalid-feedback",
                                                              {
                                                                attrs: {
                                                                  id: "Paying_Amount-feedback",
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
                                                2991304825
                                              ),
                                            }),
                                          ],
                                          1
                                        ),
                                        _vm._v(" "),
                                        _c(
                                          "b-col",
                                          {
                                            attrs: {
                                              lg: "12",
                                              md: "12",
                                              sm: "12",
                                            },
                                          },
                                          [
                                            _c("label", [
                                              _vm._v(
                                                _vm._s(_vm.$t("Change")) + " :"
                                              ),
                                            ]),
                                            _vm._v(" "),
                                            _c(
                                              "p",
                                              { staticClass: "change_amount" },
                                              [
                                                _vm._v(
                                                  _vm._s(
                                                    parseFloat(
                                                      _vm.payment
                                                        .received_amount -
                                                        _vm.payment.amount
                                                    ).toFixed(2)
                                                  )
                                                ),
                                              ]
                                            ),
                                          ]
                                        ),
                                        _vm._v(" "),
                                        _c(
                                          "b-col",
                                          {
                                            attrs: {
                                              lg: "12",
                                              md: "12",
                                              sm: "12",
                                            },
                                          },
                                          [
                                            _c("validation-provider", {
                                              attrs: {
                                                name: "Payment choice",
                                                rules: { required: true },
                                              },
                                              scopedSlots: _vm._u(
                                                [
                                                  {
                                                    key: "default",
                                                    fn: function (ref) {
                                                      var valid = ref.valid
                                                      var errors = ref.errors
                                                      return _c(
                                                        "b-form-group",
                                                        {
                                                          attrs: {
                                                            label:
                                                              _vm.$t(
                                                                "Paymentchoice"
                                                              ),
                                                          },
                                                        },
                                                        [
                                                          _c("v-select", {
                                                            class: {
                                                              "is-invalid":
                                                                !!errors.length,
                                                            },
                                                            attrs: {
                                                              state: errors[0]
                                                                ? false
                                                                : valid
                                                                ? true
                                                                : null,
                                                              reduce: function (
                                                                label
                                                              ) {
                                                                return label.value
                                                              },
                                                              placeholder:
                                                                _vm.$t(
                                                                  "PleaseSelect"
                                                                ),
                                                              options: [
                                                                {
                                                                  label: "Cash",
                                                                  value: "Cash",
                                                                },
                                                                {
                                                                  label:
                                                                    "credit card",
                                                                  value:
                                                                    "credit card",
                                                                },
                                                                {
                                                                  label:
                                                                    "cheque",
                                                                  value:
                                                                    "cheque",
                                                                },
                                                                {
                                                                  label:
                                                                    "Western Union",
                                                                  value:
                                                                    "Western Union",
                                                                },
                                                                {
                                                                  label:
                                                                    "bank transfer",
                                                                  value:
                                                                    "bank transfer",
                                                                },
                                                                {
                                                                  label:
                                                                    "other",
                                                                  value:
                                                                    "other",
                                                                },
                                                              ],
                                                            },
                                                            on: {
                                                              input:
                                                                _vm.Selected_PaymentMethod,
                                                            },
                                                            model: {
                                                              value:
                                                                _vm.payment
                                                                  .Reglement,
                                                              callback:
                                                                function ($$v) {
                                                                  _vm.$set(
                                                                    _vm.payment,
                                                                    "Reglement",
                                                                    $$v
                                                                  )
                                                                },
                                                              expression:
                                                                "payment.Reglement",
                                                            },
                                                          }),
                                                          _vm._v(" "),
                                                          _c(
                                                            "b-form-invalid-feedback",
                                                            [
                                                              _vm._v(
                                                                _vm._s(
                                                                  errors[0]
                                                                )
                                                              ),
                                                            ]
                                                          ),
                                                        ],
                                                        1
                                                      )
                                                    },
                                                  },
                                                ],
                                                null,
                                                false,
                                                12177707
                                              ),
                                            }),
                                          ],
                                          1
                                        ),
                                        _vm._v(" "),
                                        _vm.payment.Reglement == "credit card"
                                          ? _c(
                                              "b-col",
                                              { attrs: { md: "12" } },
                                              [
                                                _c(
                                                  "form",
                                                  {
                                                    attrs: {
                                                      id: "payment-form",
                                                    },
                                                  },
                                                  [
                                                    _c(
                                                      "label",
                                                      {
                                                        staticClass:
                                                          "leading-7 text-sm text-gray-600",
                                                        attrs: {
                                                          for: "card-element",
                                                        },
                                                      },
                                                      [
                                                        _vm._v(
                                                          _vm._s(
                                                            _vm.$t(
                                                              "Credit_Card_Info"
                                                            )
                                                          )
                                                        ),
                                                      ]
                                                    ),
                                                    _vm._v(" "),
                                                    _c("div", {
                                                      attrs: {
                                                        id: "card-element",
                                                      },
                                                    }),
                                                    _vm._v(" "),
                                                    _c("div", {
                                                      staticClass: "is-invalid",
                                                      attrs: {
                                                        id: "card-errors",
                                                        role: "alert",
                                                      },
                                                    }),
                                                  ]
                                                ),
                                              ]
                                            )
                                          : _vm._e(),
                                        _vm._v(" "),
                                        _c(
                                          "b-col",
                                          {
                                            staticClass: "mt-2",
                                            attrs: {
                                              lg: "12",
                                              md: "12",
                                              sm: "12",
                                            },
                                          },
                                          [
                                            _c(
                                              "b-form-group",
                                              {
                                                attrs: {
                                                  label: _vm.$t("Note"),
                                                },
                                              },
                                              [
                                                _c("b-form-textarea", {
                                                  attrs: {
                                                    id: "textarea",
                                                    rows: "3",
                                                    "max-rows": "6",
                                                  },
                                                  model: {
                                                    value: _vm.payment.notes,
                                                    callback: function ($$v) {
                                                      _vm.$set(
                                                        _vm.payment,
                                                        "notes",
                                                        $$v
                                                      )
                                                    },
                                                    expression: "payment.notes",
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
                                _vm._v(" "),
                                _c(
                                  "b-col",
                                  { attrs: { md: "6" } },
                                  [
                                    _c(
                                      "b-card",
                                      [
                                        _c(
                                          "b-list-group",
                                          [
                                            _c(
                                              "b-list-group-item",
                                              {
                                                staticClass:
                                                  "d-flex justify-content-between align-items-center",
                                              },
                                              [
                                                _vm._v(
                                                  "\n                      " +
                                                    _vm._s(
                                                      _vm.$t("TotalProducts")
                                                    ) +
                                                    "\n                      "
                                                ),
                                                _c(
                                                  "b-badge",
                                                  {
                                                    attrs: {
                                                      variant: "primary",
                                                      pill: "",
                                                    },
                                                  },
                                                  [
                                                    _vm._v(
                                                      _vm._s(_vm.details.length)
                                                    ),
                                                  ]
                                                ),
                                              ],
                                              1
                                            ),
                                            _vm._v(" "),
                                            _c(
                                              "b-list-group-item",
                                              {
                                                staticClass:
                                                  "d-flex justify-content-between align-items-center",
                                              },
                                              [
                                                _vm._v(
                                                  "\n                      " +
                                                    _vm._s(_vm.$t("OrderTax")) +
                                                    "\n                      "
                                                ),
                                                _c(
                                                  "span",
                                                  {
                                                    staticClass:
                                                      "font-weight-bold",
                                                  },
                                                  [
                                                    _vm._v(
                                                      _vm._s(
                                                        _vm.currentUser.currency
                                                      ) +
                                                        " " +
                                                        _vm._s(
                                                          _vm.sale.TaxNet.toFixed(
                                                            2
                                                          )
                                                        ) +
                                                        " (" +
                                                        _vm._s(
                                                          _vm.sale.tax_rate
                                                        ) +
                                                        " %)"
                                                    ),
                                                  ]
                                                ),
                                              ]
                                            ),
                                            _vm._v(" "),
                                            _c(
                                              "b-list-group-item",
                                              {
                                                staticClass:
                                                  "d-flex justify-content-between align-items-center",
                                              },
                                              [
                                                _vm._v(
                                                  "\n                      " +
                                                    _vm._s(_vm.$t("Discount")) +
                                                    "\n                      "
                                                ),
                                                _c(
                                                  "span",
                                                  {
                                                    staticClass:
                                                      "font-weight-bold",
                                                  },
                                                  [
                                                    _vm._v(
                                                      _vm._s(
                                                        _vm.currentUser.currency
                                                      ) +
                                                        " " +
                                                        _vm._s(
                                                          _vm.sale.discount.toFixed(
                                                            2
                                                          )
                                                        )
                                                    ),
                                                  ]
                                                ),
                                              ]
                                            ),
                                            _vm._v(" "),
                                            _c(
                                              "b-list-group-item",
                                              {
                                                staticClass:
                                                  "d-flex justify-content-between align-items-center",
                                              },
                                              [
                                                _vm._v(
                                                  "\n                      " +
                                                    _vm._s(_vm.$t("Shipping")) +
                                                    "\n                      "
                                                ),
                                                _c(
                                                  "span",
                                                  {
                                                    staticClass:
                                                      "font-weight-bold",
                                                  },
                                                  [
                                                    _vm._v(
                                                      _vm._s(
                                                        _vm.currentUser.currency
                                                      ) +
                                                        " " +
                                                        _vm._s(
                                                          _vm.sale.shipping.toFixed(
                                                            2
                                                          )
                                                        )
                                                    ),
                                                  ]
                                                ),
                                              ]
                                            ),
                                            _vm._v(" "),
                                            _c(
                                              "b-list-group-item",
                                              {
                                                staticClass:
                                                  "d-flex justify-content-between align-items-center",
                                              },
                                              [
                                                _vm._v(
                                                  "\n                      " +
                                                    _vm._s(_vm.$t("Total")) +
                                                    "\n                      "
                                                ),
                                                _c(
                                                  "span",
                                                  {
                                                    staticClass:
                                                      "font-weight-bold",
                                                  },
                                                  [
                                                    _vm._v(
                                                      _vm._s(
                                                        _vm.currentUser.currency
                                                      ) +
                                                        " " +
                                                        _vm._s(
                                                          _vm.GrandTotal.toFixed(
                                                            2
                                                          )
                                                        )
                                                    ),
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
                                    _vm.paymentProcessing
                                      ? _vm._m(0)
                                      : _vm._e(),
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
                _vm._v(" "),
                _c(
                  "validation-observer",
                  { ref: "Create_Customer" },
                  [
                    _c(
                      "b-modal",
                      {
                        attrs: {
                          "hide-footer": "",
                          size: "lg",
                          id: "New_Customer",
                          title: _vm.$t("Add"),
                        },
                      },
                      [
                        _c(
                          "b-form",
                          {
                            on: {
                              submit: function ($event) {
                                $event.preventDefault()
                                return _vm.Submit_Customer($event)
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
                                        name: "Name Customer",
                                        rules: { required: true },
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
                                                      label:
                                                        _vm.$t("CustomerName"),
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
                                                          "name-feedback",
                                                        label: "name",
                                                      },
                                                      model: {
                                                        value: _vm.client.name,
                                                        callback: function (
                                                          $$v
                                                        ) {
                                                          _vm.$set(
                                                            _vm.client,
                                                            "name",
                                                            $$v
                                                          )
                                                        },
                                                        expression:
                                                          "client.name",
                                                      },
                                                    }),
                                                    _vm._v(" "),
                                                    _c(
                                                      "b-form-invalid-feedback",
                                                      {
                                                        attrs: {
                                                          id: "name-feedback",
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
                                        2169107604
                                      ),
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
                                        name: "Email customer",
                                        rules: { required: true },
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
                                                      label: _vm.$t("Email"),
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
                                                          "Email-feedback",
                                                        label: "Email",
                                                      },
                                                      model: {
                                                        value: _vm.client.email,
                                                        callback: function (
                                                          $$v
                                                        ) {
                                                          _vm.$set(
                                                            _vm.client,
                                                            "email",
                                                            $$v
                                                          )
                                                        },
                                                        expression:
                                                          "client.email",
                                                      },
                                                    }),
                                                    _vm._v(" "),
                                                    _c(
                                                      "b-form-invalid-feedback",
                                                      {
                                                        attrs: {
                                                          id: "Email-feedback",
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
                                        4213647611
                                      ),
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
                                        name: "Phone Customer",
                                        rules: { required: true },
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
                                                      label: _vm.$t("Phone"),
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
                                                        label: "Phone",
                                                      },
                                                      model: {
                                                        value: _vm.client.phone,
                                                        callback: function (
                                                          $$v
                                                        ) {
                                                          _vm.$set(
                                                            _vm.client,
                                                            "phone",
                                                            $$v
                                                          )
                                                        },
                                                        expression:
                                                          "client.phone",
                                                      },
                                                    }),
                                                    _vm._v(" "),
                                                    _c(
                                                      "b-form-invalid-feedback",
                                                      {
                                                        attrs: {
                                                          id: "Phone-feedback",
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
                                        314120427
                                      ),
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
                                        name: "Country customer",
                                        rules: { required: true },
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
                                                      label: _vm.$t("Country"),
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
                                                          "Country-feedback",
                                                        label: "Country",
                                                      },
                                                      model: {
                                                        value:
                                                          _vm.client.country,
                                                        callback: function (
                                                          $$v
                                                        ) {
                                                          _vm.$set(
                                                            _vm.client,
                                                            "country",
                                                            $$v
                                                          )
                                                        },
                                                        expression:
                                                          "client.country",
                                                      },
                                                    }),
                                                    _vm._v(" "),
                                                    _c(
                                                      "b-form-invalid-feedback",
                                                      {
                                                        attrs: {
                                                          id: "Country-feedback",
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
                                        2049988063
                                      ),
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
                                        name: "City Customer",
                                        rules: { required: true },
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
                                                      label: _vm.$t("City"),
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
                                                          "City-feedback",
                                                        label: "City",
                                                      },
                                                      model: {
                                                        value: _vm.client.city,
                                                        callback: function (
                                                          $$v
                                                        ) {
                                                          _vm.$set(
                                                            _vm.client,
                                                            "city",
                                                            $$v
                                                          )
                                                        },
                                                        expression:
                                                          "client.city",
                                                      },
                                                    }),
                                                    _vm._v(" "),
                                                    _c(
                                                      "b-form-invalid-feedback",
                                                      {
                                                        attrs: {
                                                          id: "City-feedback",
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
                                        1625404240
                                      ),
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
                                        name: "Adress customer",
                                        rules: { required: true },
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
                                                      label: _vm.$t("Adress"),
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
                                                          "Adress-feedback",
                                                        label: "Adress",
                                                      },
                                                      model: {
                                                        value:
                                                          _vm.client.adresse,
                                                        callback: function (
                                                          $$v
                                                        ) {
                                                          _vm.$set(
                                                            _vm.client,
                                                            "adresse",
                                                            $$v
                                                          )
                                                        },
                                                        expression:
                                                          "client.adresse",
                                                      },
                                                    }),
                                                    _vm._v(" "),
                                                    _c(
                                                      "b-form-invalid-feedback",
                                                      {
                                                        attrs: {
                                                          id: "Adress-feedback",
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
                                        3943535328
                                      ),
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
                                        },
                                      },
                                      [_vm._v(_vm._s(_vm.$t("submit")))]
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
                ),
              ],
              1
            )
          : _vm._e(),
      ],
      1
    ),
  ])
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

/***/ "./resources/src/utils/index.js":
/*!**************************************!*\
  !*** ./resources/src/utils/index.js ***!
  \**************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
var toggleFullScreen = function toggleFullScreen() {
  var doc = window.document;
  var docEl = doc.documentElement;
  var requestFullScreen = docEl.requestFullscreen || docEl.mozRequestFullScreen || docEl.webkitRequestFullScreen || docEl.msRequestFullscreen;
  var cancelFullScreen = doc.exitFullscreen || doc.mozCancelFullScreen || doc.webkitExitFullscreen || doc.msExitFullscreen;

  if (!doc.fullscreenElement && !doc.mozFullScreenElement && !doc.webkitFullscreenElement && !doc.msFullscreenElement) {
    requestFullScreen.call(docEl);
  } else {
    cancelFullScreen.call(doc);
  }
};

/* harmony default export */ __webpack_exports__["default"] = ({
  toggleFullScreen: toggleFullScreen
});

/***/ }),

/***/ "./resources/src/views/app/pages/pos.vue":
/*!***********************************************!*\
  !*** ./resources/src/views/app/pages/pos.vue ***!
  \***********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _pos_vue_vue_type_template_id_4cc49487___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./pos.vue?vue&type=template&id=4cc49487& */ "./resources/src/views/app/pages/pos.vue?vue&type=template&id=4cc49487&");
/* harmony import */ var _pos_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./pos.vue?vue&type=script&lang=js& */ "./resources/src/views/app/pages/pos.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _pos_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./pos.vue?vue&type=style&index=0&lang=css& */ "./resources/src/views/app/pages/pos.vue?vue&type=style&index=0&lang=css&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");






/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__["default"])(
  _pos_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _pos_vue_vue_type_template_id_4cc49487___WEBPACK_IMPORTED_MODULE_0__["render"],
  _pos_vue_vue_type_template_id_4cc49487___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/src/views/app/pages/pos.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/src/views/app/pages/pos.vue?vue&type=script&lang=js&":
/*!************************************************************************!*\
  !*** ./resources/src/views/app/pages/pos.vue?vue&type=script&lang=js& ***!
  \************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_pos_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/babel-loader/lib??ref--4-0!../../../../../node_modules/vue-loader/lib??vue-loader-options!./pos.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/src/views/app/pages/pos.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_pos_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/src/views/app/pages/pos.vue?vue&type=style&index=0&lang=css&":
/*!********************************************************************************!*\
  !*** ./resources/src/views/app/pages/pos.vue?vue&type=style&index=0&lang=css& ***!
  \********************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_dist_cjs_js_ref_5_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_5_2_node_modules_vue_loader_lib_index_js_vue_loader_options_pos_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/style-loader!../../../../../node_modules/css-loader/dist/cjs.js??ref--5-1!../../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../../node_modules/postcss-loader/src??ref--5-2!../../../../../node_modules/vue-loader/lib??vue-loader-options!./pos.vue?vue&type=style&index=0&lang=css& */ "./node_modules/style-loader/index.js!./node_modules/css-loader/dist/cjs.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/src/views/app/pages/pos.vue?vue&type=style&index=0&lang=css&");
/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_dist_cjs_js_ref_5_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_5_2_node_modules_vue_loader_lib_index_js_vue_loader_options_pos_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_index_js_node_modules_css_loader_dist_cjs_js_ref_5_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_5_2_node_modules_vue_loader_lib_index_js_vue_loader_options_pos_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_style_loader_index_js_node_modules_css_loader_dist_cjs_js_ref_5_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_5_2_node_modules_vue_loader_lib_index_js_vue_loader_options_pos_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_style_loader_index_js_node_modules_css_loader_dist_cjs_js_ref_5_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_5_2_node_modules_vue_loader_lib_index_js_vue_loader_options_pos_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));


/***/ }),

/***/ "./resources/src/views/app/pages/pos.vue?vue&type=template&id=4cc49487&":
/*!******************************************************************************!*\
  !*** ./resources/src/views/app/pages/pos.vue?vue&type=template&id=4cc49487& ***!
  \******************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_pos_vue_vue_type_template_id_4cc49487___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../node_modules/vue-loader/lib??vue-loader-options!./pos.vue?vue&type=template&id=4cc49487& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/src/views/app/pages/pos.vue?vue&type=template&id=4cc49487&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_pos_vue_vue_type_template_id_4cc49487___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_pos_vue_vue_type_template_id_4cc49487___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ })

}]);