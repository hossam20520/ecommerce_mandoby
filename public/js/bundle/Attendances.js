(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["Attendances"],{

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/src/views/app/pages/settings/attendances.vue?vue&type=script&lang=js&":
/*!*************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/src/views/app/pages/settings/attendances.vue?vue&type=script&lang=js& ***!
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
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
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
    title: "Attendance"
  },
  data: function data() {
    return {
      isLoading: true,
      Filter_Sections: "",
      Filter_date: "",
      Filter_status: "",
      Filter_application: "",
      radius: 100,
      circle: {
        center: {
          lat: 30.059813,
          lng: 31.329825
        },
        radius: 100,
        options: {
          strokeColor: 'red',
          strokeOpacity: 1.0,
          strokeWeight: 2,
          fillColor: 'red',
          fillOpacity: 0.35
        }
      },
      SubmitProcessing: false,
      user_id: "",
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
      attendances: [],
      limit: "10",
      attendance: {
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
        label: this.$t("email"),
        field: "user.email",
        tdClass: "text-left",
        thClass: "text-left"
      }, {
        label: this.$t("phone"),
        field: "user.phone",
        tdClass: "text-left",
        thClass: "text-left"
      }, {
        label: this.$t("type"),
        field: "type",
        tdClass: "text-left",
        thClass: "text-left"
      }, {
        label: this.$t("status"),
        field: "status",
        tdClass: "text-left",
        thClass: "text-left"
      }, {
        label: this.$t("date"),
        field: "date",
        tdClass: "text-left",
        thClass: "text-left"
      }, {
        label: this.$t("time"),
        field: "time",
        tdClass: "text-left",
        thClass: "text-left"
      }, //  {
      //     label: this.$t("date"),
      //     field: "date",
      //     tdClass: "text-left",
      //     thClass: "text-left"
      //   },
      {
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
    test_try: function test_try() {
      var data = this.attendances; // Object to store combined data

      var combinedData = {}; // Loop through the data

      data.forEach(function (entry) {
        var key = entry.phone; // Use phone number as the key

        if (!combinedData[key]) {
          // If the key doesn't exist in the combined data object, create it
          combinedData[key] = {
            name: entry.name,
            phone: entry.phone,
            loggedIn: {
              date: "",
              time: ""
            },
            loggedOut: {
              date: "",
              time: ""
            }
          };
        } // Check the status and assign the date and time accordingly


        if (entry.status === "LOGEDIN") {
          combinedData[key].loggedIn.date = entry.date;
          combinedData[key].loggedIn.time = entry.time;
        } else if (entry.status === "LOGEDOUT") {
          combinedData[key].loggedOut.date = entry.date;
          combinedData[key].loggedOut.time = entry.time;
        }
      }); // Convert the combined data object into an array of objects

      var combinedArray = Object.values(combinedData); // Print the result
      // console.log(combinedArray);

      return combinedArray;
    },
    print_product: function print_product() {
      var divContents = document.getElementById("print_product").innerHTML;
      var a = window.open("", "", "height=500, width=500");
      a.document.write('<link rel="stylesheet" href="/assets_setup/css/bootstrap.css"><html>');
      a.document.write("<body >");
      a.document.write(divContents);
      a.document.write("</body></html>");
      a.document.close();
      a.print();
    },
    Reset_Filter: function Reset_Filter() {
      this.search = "";
      this.Filter_date = "";
      this.Filter_status = "";
      this.Filter_application = ""; // this.Filter_Sections = "";
      // this.Filter_Zone_Name = "";
      // this.Filter_street = "";
      // this.Filter_Shiakha_Name = "";

      this.user_id = "";
      this.Get_Attendances(this.serverParams.page);
    },
    GetData: function GetData() {
      this.Get_Attendances(1);
    },
    onCircleDragEnd: function onCircleDragEnd(event) {// this.fetchPlaces();
    },
    handleChange: function handleChange(selectedValue) {
      this.user_id = selectedValue; // this.fetchPlaces();
    },
    handleRadiusChange: function handleRadiusChange() {
      // Add your logic here to handle the onchange event
      // circle.radius
      this.circle.radius = this.radius; // this.fetchPlaces();
      // console.log('Radius changed:', this.radius);
    },
    onMarkerDrag: function onMarkerDrag(index, event) {
      var draggedMarker = this.markers[index];
      draggedMarker.position = {
        lat: event.latLng.lat(),
        lng: event.latLng.lng()
      }; // Update the circle's center when the marker is dragged

      this.circle.center = draggedMarker.position;
    },
    onCircleCenterChanged: function onCircleCenterChanged(event) {
      // Update the marker's position when the circle's center is changed
      var newCenter = {
        lat: event.lat(),
        lng: event.lng()
      };
      this.markers[0].position = newCenter; //  this.fetchPlaces();
      // this.markers.forEach((marker) => {
      //   marker.position = newCenter;
      // });
      // Update the circle's center
      // this.circle.center = newCenter;
    },
    onCircleRadiusChanged: function onCircleRadiusChanged(event) {
      // Update the circle's radius when it is changed
      // alert(55)
      // console.log(event)
      this.circle.radius = event;
      this.radius = event; // this.fetchPlaces();
    },
    onCircleDrag: function onCircleDrag(event) {
      // Update the marker's position when the circle is dragged
      var newCenter = {
        lat: event.latLng.lat(),
        lng: event.latLng.lng()
      };
      this.markers.forEach(function (marker) {
        marker.position = newCenter;
      }); // Update the circle's center

      this.circle.center = newCenter; // this.fetchPlaces();
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
        this.Get_Attendances(currentPage);
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
        this.Get_Attendances(1);
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
      this.Get_Attendances(this.serverParams.page);
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
      this.Get_Attendances(this.serverParams.page);
    },
    //---- Validation State Form
    getValidationState: function getValidationState(_ref4) {
      var dirty = _ref4.dirty,
          validated = _ref4.validated,
          _ref4$valid = _ref4.valid,
          valid = _ref4$valid === void 0 ? null : _ref4$valid;
      return dirty || validated ? valid : null;
    },
    //------------- Submit Validation Create & Edit Attendance
    Submit_Attendance: function Submit_Attendance() {
      var _this2 = this;

      this.$refs.Create_attendance.validate().then(function (success) {
        if (!success) {
          _this2.makeToast("danger", _this2.$t("Please_fill_the_form_correctly"), _this2.$t("Failed"));
        } else {
          if (!_this2.editmode) {
            _this2.Create_Attendance();
          } else {
            _this2.Update_Attendance();
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
                  _this3.attendance.image = e.target.files[0];
                } else {
                  _this3.attendance.image = "";
                }

              case 5:
              case "end":
                return _context.stop();
            }
          }
        }, _callee);
      }))();
    },
    //------------------------------ Modal (create Attendance) -------------------------------\
    New_Attendance: function New_Attendance() {
      this.reset_Form();
      this.editmode = false;
      this.$bvModal.show("New_attendance");
    },
    //------------------------------ Modal (Update Attendance) -------------------------------\
    Edit_Attendance: function Edit_Attendance(attendance) {
      this.Get_Attendances(this.serverParams.page);
      this.reset_Form();
      this.attendance = attendance;
      this.editmode = true;
      this.$bvModal.show("New_attendance");
    },
    //---------------------------------------- Get All attendances-----------------\
    Get_Attendances: function Get_Attendances(page) {
      var _this4 = this;

      // Start the progress bar.
      nprogress__WEBPACK_IMPORTED_MODULE_0___default.a.start();
      nprogress__WEBPACK_IMPORTED_MODULE_0___default.a.set(0.1);
      axios.get("attendances?page=" + page + "&SortField=" + this.serverParams.sort.field + "&SortType=" + this.serverParams.sort.type + "&search=" + this.search + "&limit=" + this.limit + "&user_id=" + this.user_id + "&date=" + this.formattedDate() + "&status=" + this.Filter_status + "&type=" + this.Filter_application).then(function (response) {
        console.log(_this4.formattedDate());
        _this4.attendances = response.data.attendances;
        _this4.users = response.data.users;
        _this4.totalRows = response.data.totalRows; // console.log(response.data.attend);

        _this4.test_try(); // Complete the animation of theprogress bar.


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
    formattedDate: function formattedDate() {
      if (this.Filter_date == "") {
        return "";
      } else {
        var d = new Date(this.Filter_date);
        var day = d.getDate() < 10 ? '0' + d.getDate() : d.getDate();
        var month = d.getMonth() + 1; // Month is zero-based, so we add 1

        var year = d.getFullYear();
        return "".concat(day, "-").concat(month, "-").concat(year);
      }
    },
    //---------------------------------------- Create new attendance-----------------\
    Create_Attendance: function Create_Attendance() {
      var _this5 = this;

      var self = this;
      self.SubmitProcessing = true;
      self.data.append("ar_name", self.attendance.ar_name);
      self.data.append("en_name", self.attendance.en_name);
      self.data.append("image", self.attendance.image);
      axios.post("attendances", self.data).then(function (response) {
        self.SubmitProcessing = false;
        Fire.$emit("Event_Attendance");

        _this5.makeToast("success", _this5.$t("Create.TitleAttendance"), _this5.$t("Success"));
      })["catch"](function (error) {
        self.SubmitProcessing = false;

        _this5.makeToast("danger", _this5.$t("InvalidData"), _this5.$t("Failed"));
      });
    },
    //---------------------------------------- Update Attendance-----------------\
    Update_Attendance: function Update_Attendance() {
      var _this6 = this;

      var self = this;
      self.SubmitProcessing = true;
      self.data.append("en_name", self.attendance.en_name);
      self.data.append("ar_name", self.attendance.ar_name);
      self.data.append("image", self.attendance.image);
      self.data.append("_method", "put");
      axios.post("attendances/" + self.attendance.id, self.data).then(function (response) {
        self.SubmitProcessing = false;
        Fire.$emit("Event_Attendance");

        _this6.makeToast("success", _this6.$t("Update.TitleAttendance"), _this6.$t("Success"));
      })["catch"](function (error) {
        self.SubmitProcessing = false;

        _this6.makeToast("danger", _this6.$t("InvalidData"), _this6.$t("Failed"));
      });
    },
    //---------------------------------------- Reset Form -----------------\
    reset_Form: function reset_Form() {
      this.attendance = {
        id: "",
        ar_name: "",
        en_name: "",
        image: ""
      };
      this.data = new FormData();
    },
    //---------------------------------------- Delete Attendance -----------------\
    Delete_Attendance: function Delete_Attendance(id) {
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
          axios["delete"]("attendances/" + id).then(function () {
            _this7.$swal(_this7.$t("Delete.Deleted"), _this7.$t("Delete.TitleAttendance"), "success");

            Fire.$emit("Delete_Attendance");
          })["catch"](function () {
            _this7.$swal(_this7.$t("Delete.Failed"), _this7.$t("Delete.Therewassomethingwronge"), "warning");
          });
        }
      });
    },
    //---- Delete attendances by selection
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
          axios.post("attendances/delete/by_selection", {
            selectedIds: _this8.selectedIds
          }).then(function () {
            _this8.$swal(_this8.$t("Delete.Deleted"), _this8.$t("Delete.TitleAttendance"), "success");

            Fire.$emit("Delete_Attendance");
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

    this.Get_Attendances(1);
    Fire.$on("Event_Attendance", function () {
      setTimeout(function () {
        _this9.Get_Attendances(_this9.serverParams.page);

        _this9.$bvModal.hide("New_attendance");
      }, 500);
    });
    Fire.$on("Delete_Attendance", function () {
      setTimeout(function () {
        _this9.Get_Attendances(_this9.serverParams.page);
      }, 500);
    });
  }
});

/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/src/views/app/pages/settings/attendances.vue?vue&type=style&index=0&lang=css&":
/*!********************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js??ref--5-1!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--5-2!./node_modules/vue-loader/lib??vue-loader-options!./resources/src/views/app/pages/settings/attendances.vue?vue&type=style&index=0&lang=css& ***!
  \********************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(/*! ../../../../../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
exports = ___CSS_LOADER_API_IMPORT___(false);
// Module
exports.push([module.i, "\n@media print {\n#print_product {\r\n    display: flex;\r\n    justify-content: center;\n}\n}\r\n", ""]);
// Exports
module.exports = exports;


/***/ }),

/***/ "./node_modules/style-loader/index.js!./node_modules/css-loader/dist/cjs.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/src/views/app/pages/settings/attendances.vue?vue&type=style&index=0&lang=css&":
/*!************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/style-loader!./node_modules/css-loader/dist/cjs.js??ref--5-1!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--5-2!./node_modules/vue-loader/lib??vue-loader-options!./resources/src/views/app/pages/settings/attendances.vue?vue&type=style&index=0&lang=css& ***!
  \************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(/*! !../../../../../../node_modules/css-loader/dist/cjs.js??ref--5-1!../../../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../../../node_modules/postcss-loader/src??ref--5-2!../../../../../../node_modules/vue-loader/lib??vue-loader-options!./attendances.vue?vue&type=style&index=0&lang=css& */ "./node_modules/css-loader/dist/cjs.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/src/views/app/pages/settings/attendances.vue?vue&type=style&index=0&lang=css&");

if(typeof content === 'string') content = [[module.i, content, '']];

var transform;
var insertInto;



var options = {"hmr":true}

options.transform = transform
options.insertInto = undefined;

var update = __webpack_require__(/*! ../../../../../../node_modules/style-loader/lib/addStyles.js */ "./node_modules/style-loader/lib/addStyles.js")(content, options);

if(content.locals) module.exports = content.locals;

if(false) {}

/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/src/views/app/pages/settings/attendances.vue?vue&type=template&id=06b52a1b&":
/*!*****************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/src/views/app/pages/settings/attendances.vue?vue&type=template&id=06b52a1b& ***!
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
      _c(
        "GmapMap",
        {
          staticStyle: { width: "100%", height: "500px" },
          attrs: {
            center: { lat: 30.059813, lng: 31.329825 },
            zoom: 7,
            "map-type-id": "terrain",
          },
        },
        [
          _vm._l(_vm.shops_marker, function (m, index) {
            return _c("GmapMarker", {
              key: index,
              attrs: {
                position: m.position,
                clickable: false,
                draggable: false,
                icon: m.showIcon ? _vm.getMarkerIcon() : null,
              },
            })
          }),
          _vm._v(" "),
          _vm._l(_vm.markers, function (m, index) {
            return _c("GmapMarker", {
              key: index,
              attrs: {
                position: m.position,
                clickable: false,
                draggable: true,
                icon: m.showIcon ? _vm.getMarkerIcon() : null,
              },
              on: {
                click: function ($event) {
                  _vm.center = m.position
                },
              },
            })
          }),
          _vm._v(" "),
          _c("GmapCircle", {
            attrs: {
              visible: true,
              center: _vm.circle.center,
              radius: _vm.circle.radius,
              editable: true,
              options: {
                strokeColor: _vm.circle.strokeColor,
                strokeOpacity: _vm.circle.strokeOpacity,
                strokeWeight: _vm.circle.strokeWeight,
                fillColor: _vm.circle.fillColor,
                fillOpacity: _vm.circle.fillOpacity,
              },
            },
            on: {
              center_changed: _vm.onCircleCenterChanged,
              radius_changed: _vm.onCircleRadiusChanged,
              drag: _vm.onCircleDrag,
            },
          }),
        ],
        2
      ),
      _vm._v(" "),
      _c("breadcumb", {
        attrs: { page: _vm.$t("Attendance"), folder: _vm.$t("Settings") },
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
                    rows: _vm.attendances,
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
                              ? _c("span")
                              : props.column.field == "status"
                              ? _c(
                                  "span",
                                  [
                                    props.row.status == "LOGEDIN"
                                      ? _c("b-img", {
                                          attrs: {
                                            thumbnail: "",
                                            height: "20",
                                            width: "20",
                                            fluid: "",
                                            src: "/green.png",
                                            alt: "image",
                                          },
                                        })
                                      : _c("b-img", {
                                          attrs: {
                                            thumbnail: "",
                                            height: "20",
                                            width: "20",
                                            fluid: "",
                                            src: "/read_image.png",
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
                    696187932
                  ),
                },
                [
                  _c("div", {
                    attrs: { slot: "selected-row-actions" },
                    slot: "selected-row-actions",
                  }),
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
                          attrs: { variant: "outline-info m-1", size: "sm" },
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
                ]
              ),
            ],
            1
          )
        : _vm._e(),
      _vm._v(" "),
      _c(
        "validation-observer",
        { ref: "Create_attendance" },
        [
          _c(
            "b-modal",
            {
              attrs: {
                "hide-footer": "",
                size: "md",
                id: "New_attendance",
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
                      return _vm.Submit_Attendance($event)
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
                                            value: _vm.attendance.ar_name,
                                            callback: function ($$v) {
                                              _vm.$set(
                                                _vm.attendance,
                                                "ar_name",
                                                $$v
                                              )
                                            },
                                            expression: "attendance.ar_name",
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
                                            value: _vm.attendance.en_name,
                                            callback: function ($$v) {
                                              _vm.$set(
                                                _vm.attendance,
                                                "en_name",
                                                $$v
                                              )
                                            },
                                            expression: "attendance.en_name",
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
                                    {
                                      attrs: {
                                        label: _vm.$t("AttendanceImage"),
                                      },
                                    },
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
                        { attrs: { label: _vm.$t("User") } },
                        [
                          _c("v-select", {
                            attrs: {
                              reduce: function (label) {
                                return label.value
                              },
                              placeholder: _vm.$t("Choose_User"),
                              options: _vm.users.map(function (users) {
                                return { label: users.email, value: users.id }
                              }),
                            },
                            on: { input: _vm.handleChange },
                            model: {
                              value: _vm.Filter_Sections,
                              callback: function ($$v) {
                                _vm.Filter_Sections = $$v
                              },
                              expression: "Filter_Sections",
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
                        { attrs: { label: _vm.$t("Status") } },
                        [
                          _c("v-select", {
                            attrs: {
                              reduce: function (label) {
                                return label.value
                              },
                              placeholder: _vm.$t("Choose_Status"),
                              options: [
                                { label: "LOGEDIN", value: "LOGEDIN" },
                                { label: "LOGEDOUT", value: "LOGEDOUT" },
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
                        { attrs: { label: _vm.$t("Application_type") } },
                        [
                          _c("v-select", {
                            attrs: {
                              reduce: function (label) {
                                return label.value
                              },
                              placeholder: _vm.$t("Application_type"),
                              options: [
                                { label: "SURVEY", value: "SURVEY" },
                                { label: "DELIVERY", value: "DELIVERY" },
                              ],
                            },
                            model: {
                              value: _vm.Filter_application,
                              callback: function ($$v) {
                                _vm.Filter_application = $$v
                              },
                              expression: "Filter_application",
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
                              return _vm.GetData(_vm.serverParams.page)
                            },
                          },
                        },
                        [
                          _c("i", { staticClass: "i-Filter-2" }),
                          _vm._v(
                            "\n                " +
                              _vm._s(_vm.$t("Filter")) +
                              "\n              "
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
                            "\n                " +
                              _vm._s(_vm.$t("Reset")) +
                              "\n              "
                          ),
                        ]
                      ),
                    ],
                    1
                  ),
                ],
                1
              ),
              _vm._v(" "),
              _c("row", [
                _c(
                  "button",
                  {
                    staticClass: "btn btn-outline-primary",
                    on: {
                      click: function ($event) {
                        return _vm.print_product()
                      },
                    },
                  },
                  [
                    _c("i", { staticClass: "i-Billing" }),
                    _vm._v(
                      "\n          " + _vm._s(_vm.$t("print")) + "\n        "
                    ),
                  ]
                ),
              ]),
            ],
            1
          ),
        ]
      ),
      _vm._v(" "),
      _c(
        "b-row",
        { attrs: { id: "print_product" } },
        [
          _c(
            "b-col",
            { staticClass: "mb-5", attrs: { md: "12" } },
            [_c("center", [_c("h2", [_vm._v("   تقارير الحضور والانصراف ")])])],
            1
          ),
          _vm._v(" "),
          _c(
            "table",
            {
              staticStyle: {
                width: "100%",
                border: "1px solid",
                "border-collapse": "collapse",
              },
            },
            [
              _c("thead", [
                _c("tr", [
                  _c("th", [_vm._v("   الابلكيشن ")]),
                  _vm._v(" "),
                  _c("th", [_vm._v("   وقت الانصراف  ")]),
                  _vm._v(" "),
                  _c("th", [_vm._v("  تاريخ الانصراف ")]),
                  _vm._v(" "),
                  _c("th", [_vm._v(" وقت الحضور  ")]),
                  _vm._v(" "),
                  _c("th", [_vm._v("تاريخ الحضور")]),
                  _vm._v(" "),
                  _c("th", [_vm._v("رقم الهاتف")]),
                  _vm._v(" "),
                  _c("th", [_vm._v("الاسم")]),
                ]),
              ]),
              _vm._v(" "),
              _c(
                "tbody",
                _vm._l(_vm.attendances, function (attendance, index) {
                  return _c("tr", { key: index }, [
                    _c(
                      "td",
                      {
                        staticStyle: {
                          "text-align": "right",
                          border: "1px solid #dddddd",
                        },
                      },
                      [_vm._v("   " + _vm._s(attendance.type) + "  ")]
                    ),
                    _vm._v(" "),
                    _c(
                      "td",
                      {
                        staticStyle: {
                          "text-align": "right",
                          border: "1px solid #dddddd",
                        },
                      },
                      [_vm._v("   " + _vm._s(attendance.date) + "  ")]
                    ),
                    _vm._v(" "),
                    _c(
                      "td",
                      {
                        staticStyle: {
                          "text-align": "right",
                          border: "1px solid #dddddd",
                        },
                      },
                      [_vm._v(" " + _vm._s(attendance.time) + " ")]
                    ),
                    _vm._v(" "),
                    _c(
                      "td",
                      {
                        staticStyle: {
                          "text-align": "right",
                          border: "1px solid #dddddd",
                        },
                      },
                      [_vm._v(" " + _vm._s(attendance.time) + " ")]
                    ),
                    _vm._v(" "),
                    _c(
                      "td",
                      {
                        staticStyle: {
                          "text-align": "right",
                          border: "1px solid #dddddd",
                        },
                      },
                      [_vm._v(" " + _vm._s(attendance.date) + "  ")]
                    ),
                    _vm._v(" "),
                    _c(
                      "td",
                      {
                        staticStyle: {
                          "text-align": "right",
                          border: "1px solid #dddddd",
                        },
                      },
                      [_vm._v(" " + _vm._s(attendance.user.phone) + " ")]
                    ),
                    _vm._v(" "),
                    _c(
                      "td",
                      {
                        staticStyle: {
                          "text-align": "right",
                          border: "1px solid #dddddd",
                        },
                      },
                      [_vm._v(" " + _vm._s(attendance.user.firstname) + " ")]
                    ),
                  ])
                }),
                0
              ),
            ]
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

/***/ "./resources/src/views/app/pages/settings/attendances.vue":
/*!****************************************************************!*\
  !*** ./resources/src/views/app/pages/settings/attendances.vue ***!
  \****************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _attendances_vue_vue_type_template_id_06b52a1b___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./attendances.vue?vue&type=template&id=06b52a1b& */ "./resources/src/views/app/pages/settings/attendances.vue?vue&type=template&id=06b52a1b&");
/* harmony import */ var _attendances_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./attendances.vue?vue&type=script&lang=js& */ "./resources/src/views/app/pages/settings/attendances.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _attendances_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./attendances.vue?vue&type=style&index=0&lang=css& */ "./resources/src/views/app/pages/settings/attendances.vue?vue&type=style&index=0&lang=css&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");






/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__["default"])(
  _attendances_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _attendances_vue_vue_type_template_id_06b52a1b___WEBPACK_IMPORTED_MODULE_0__["render"],
  _attendances_vue_vue_type_template_id_06b52a1b___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/src/views/app/pages/settings/attendances.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/src/views/app/pages/settings/attendances.vue?vue&type=script&lang=js&":
/*!*****************************************************************************************!*\
  !*** ./resources/src/views/app/pages/settings/attendances.vue?vue&type=script&lang=js& ***!
  \*****************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_attendances_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../node_modules/babel-loader/lib??ref--4-0!../../../../../../node_modules/vue-loader/lib??vue-loader-options!./attendances.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/src/views/app/pages/settings/attendances.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_attendances_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/src/views/app/pages/settings/attendances.vue?vue&type=style&index=0&lang=css&":
/*!*************************************************************************************************!*\
  !*** ./resources/src/views/app/pages/settings/attendances.vue?vue&type=style&index=0&lang=css& ***!
  \*************************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_dist_cjs_js_ref_5_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_5_2_node_modules_vue_loader_lib_index_js_vue_loader_options_attendances_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../node_modules/style-loader!../../../../../../node_modules/css-loader/dist/cjs.js??ref--5-1!../../../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../../../node_modules/postcss-loader/src??ref--5-2!../../../../../../node_modules/vue-loader/lib??vue-loader-options!./attendances.vue?vue&type=style&index=0&lang=css& */ "./node_modules/style-loader/index.js!./node_modules/css-loader/dist/cjs.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/src/views/app/pages/settings/attendances.vue?vue&type=style&index=0&lang=css&");
/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_dist_cjs_js_ref_5_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_5_2_node_modules_vue_loader_lib_index_js_vue_loader_options_attendances_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_index_js_node_modules_css_loader_dist_cjs_js_ref_5_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_5_2_node_modules_vue_loader_lib_index_js_vue_loader_options_attendances_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_style_loader_index_js_node_modules_css_loader_dist_cjs_js_ref_5_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_5_2_node_modules_vue_loader_lib_index_js_vue_loader_options_attendances_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_style_loader_index_js_node_modules_css_loader_dist_cjs_js_ref_5_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_5_2_node_modules_vue_loader_lib_index_js_vue_loader_options_attendances_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));


/***/ }),

/***/ "./resources/src/views/app/pages/settings/attendances.vue?vue&type=template&id=06b52a1b&":
/*!***********************************************************************************************!*\
  !*** ./resources/src/views/app/pages/settings/attendances.vue?vue&type=template&id=06b52a1b& ***!
  \***********************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_attendances_vue_vue_type_template_id_06b52a1b___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../../node_modules/vue-loader/lib??vue-loader-options!./attendances.vue?vue&type=template&id=06b52a1b& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/src/views/app/pages/settings/attendances.vue?vue&type=template&id=06b52a1b&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_attendances_vue_vue_type_template_id_06b52a1b___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_attendances_vue_vue_type_template_id_06b52a1b___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ })

}]);