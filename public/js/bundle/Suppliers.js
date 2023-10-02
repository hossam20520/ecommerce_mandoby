(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["Suppliers"],{

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/src/views/app/pages/people/providers.vue?vue&type=script&lang=js&":
/*!*********************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/src/views/app/pages/people/providers.vue?vue&type=script&lang=js& ***!
  \*********************************************************************************************************************************************************************************/
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




/* harmony default export */ __webpack_exports__["default"] = ({
  metaInfo: {
    title: "Provider"
  },
  data: function data() {
    return {
      editmode: false,
      isLoading: true,
      SubmitProcessing: false,
      ImportProcessing: false,
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
      limit: "10",
      Filter_Name: "",
      Filter_Code: "",
      Filter_Phone: "",
      Filter_Email: "",
      import_providers: "",
      data: new FormData(),
      providers: [],
      provider: {
        id: "",
        name: "",
        code: "",
        phone: "",
        email: "",
        country: "",
        city: "",
        adresse: ""
      }
    };
  },
  computed: _objectSpread(_objectSpread({}, Object(vuex__WEBPACK_IMPORTED_MODULE_0__["mapGetters"])(["currentUserPermissions"])), {}, {
    columns: function columns() {
      return [{
        label: this.$t("Code"),
        field: "code",
        tdClass: "text-left",
        thClass: "text-left"
      }, {
        label: this.$t("Name"),
        field: "name",
        tdClass: "text-left",
        thClass: "text-left"
      }, {
        label: this.$t("Phone"),
        field: "phone",
        tdClass: "text-left",
        thClass: "text-left"
      }, {
        label: this.$t("Email"),
        field: "email",
        tdClass: "text-left",
        thClass: "text-left"
      }, {
        label: this.$t("Country"),
        field: "country",
        tdClass: "text-left",
        thClass: "text-left"
      }, {
        label: this.$t("City"),
        field: "city",
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
    //------------- Submit Validation Create & Edit Provider
    Submit_Provider: function Submit_Provider() {
      var _this = this;

      this.$refs.Create_Provider.validate().then(function (success) {
        if (!success) {
          _this.makeToast("danger", _this.$t("Please_fill_the_form_correctly"), _this.$t("Failed"));
        } else {
          if (!_this.editmode) {
            _this.Create_Provider();
          } else {
            _this.Update_provider();
          }
        }
      });
    },
    //----------------------------------- Show import providers -------------------------------\\
    Show_import_providers: function Show_import_providers() {
      this.$bvModal.show("importProviders");
    },
    //------------------------------ Event Import providers -------------------------------\\
    onFileSelected: function onFileSelected(e) {
      this.import_providers = "";
      var file = e.target.files[0];
      var errorFilesize;

      if (file["size"] < 1048576) {
        // 1 mega = 1,048,576 Bytes
        errorFilesize = false;
      } else {
        this.makeToast("danger", this.$t("file_size_must_be_less_than_1_mega"), this.$t("Failed"));
      }

      if (errorFilesize === false) {
        this.import_providers = file;
      }
    },
    //----------------------------------------Submit  import providers-----------------\\
    Submit_import: function Submit_import() {
      var _this2 = this;

      // Start the progress bar.
      nprogress__WEBPACK_IMPORTED_MODULE_1___default.a.start();
      nprogress__WEBPACK_IMPORTED_MODULE_1___default.a.set(0.1);
      var self = this;
      self.ImportProcessing = true;
      self.data.append("providers", self.import_providers);
      axios.post("providers/import/csv", self.data).then(function (response) {
        self.ImportProcessing = false;

        if (response.data.status === true) {
          _this2.makeToast("success", _this2.$t("Successfully_Imported"), _this2.$t("Success"));

          Fire.$emit("Event_import");
        } else if (response.data.status === false) {
          _this2.makeToast("danger", _this2.$t("field_must_be_in_csv_format"), _this2.$t("Failed"));
        } // Complete the animation of theprogress bar.


        nprogress__WEBPACK_IMPORTED_MODULE_1___default.a.done();
      })["catch"](function (error) {
        self.ImportProcessing = false; // Complete the animation of theprogress bar.

        nprogress__WEBPACK_IMPORTED_MODULE_1___default.a.done();

        _this2.makeToast("danger", _this2.$t("Please_follow_the_import_instructions"), _this2.$t("Failed"));
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
        this.Get_Providers(currentPage);
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
        this.Get_Providers(1);
      }
    },
    //---- Event Select Rows
    selectionChanged: function selectionChanged(_ref3) {
      var _this3 = this;

      var selectedRows = _ref3.selectedRows;
      this.selectedIds = [];
      selectedRows.forEach(function (row, index) {
        _this3.selectedIds.push(row.id);
      });
    },
    //------ Event Sort Change
    onSortChange: function onSortChange(params) {
      this.updateParams({
        sort: {
          type: params[0].type,
          field: params[0].field
        }
      });
      this.Get_Providers(this.serverParams.page);
    },
    //------ Event Search
    onSearch: function onSearch(value) {
      this.search = value.searchTerm;
      this.Get_Providers(this.serverParams.page);
    },
    //------ Event Validation State
    getValidationState: function getValidationState(_ref4) {
      var dirty = _ref4.dirty,
          validated = _ref4.validated,
          _ref4$valid = _ref4.valid,
          valid = _ref4$valid === void 0 ? null : _ref4$valid;
      return dirty || validated ? valid : null;
    },
    //------ Reset Filter
    Reset_Filter: function Reset_Filter() {
      this.search = "";
      this.Filter_Name = "";
      this.Filter_Code = "";
      this.Filter_Phone = "";
      this.Filter_Email = "";
      this.Get_Providers(this.serverParams.page);
    },
    //------ Toast
    makeToast: function makeToast(variant, msg, title) {
      this.$root.$bvToast.toast(msg, {
        title: title,
        variant: variant,
        solid: true
      });
    },
    //------------ Providers PDF -----------------------\\
    Providers_PDF: function Providers_PDF() {
      var self = this;
      var pdf = new jspdf__WEBPACK_IMPORTED_MODULE_2__["default"]("p", "pt");
      var columns = [{
        title: "Code",
        dataKey: "code"
      }, {
        title: "Name",
        dataKey: "name"
      }, {
        title: "Phone",
        dataKey: "phone"
      }, {
        title: "Email",
        dataKey: "email"
      }, {
        title: "Country",
        dataKey: "country"
      }, {
        title: "City",
        dataKey: "city"
      }];
      pdf.autoTable(columns, self.providers);
      pdf.text("Provider List", 40, 25);
      pdf.save("Provider_List.pdf");
    },
    //------------ Providers Excel -----------------------\\
    Providers_Excel: function Providers_Excel() {
      // Start the progress bar.
      nprogress__WEBPACK_IMPORTED_MODULE_1___default.a.start();
      nprogress__WEBPACK_IMPORTED_MODULE_1___default.a.set(0.1);
      axios.get("providers/export/Excel", {
        responseType: "blob",
        // important
        headers: {
          "Content-Type": "application/json"
        }
      }).then(function (response) {
        var url = window.URL.createObjectURL(new Blob([response.data]));
        var link = document.createElement("a");
        link.href = url;
        link.setAttribute("download", "List_Suppliers.xlsx");
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
    //------------------------------ Show Modal (create Provider) -------------------------------\\
    New_Provider: function New_Provider() {
      this.reset_Form();
      this.editmode = false;
      this.$bvModal.show("New_Provider");
    },
    //------------------------------ Show Modal (Edit Provider) -------------------------------\\
    Edit_Provider: function Edit_Provider(provider) {
      this.Get_Providers(this.serverParams.page);
      this.reset_Form();
      this.provider = provider;
      this.editmode = true;
      this.$bvModal.show("New_Provider");
    },
    //----------------------------  Get all Providers  -----------------------\\
    Get_Providers: function Get_Providers(page) {
      var _this4 = this;

      // Start the progress bar.
      nprogress__WEBPACK_IMPORTED_MODULE_1___default.a.start();
      nprogress__WEBPACK_IMPORTED_MODULE_1___default.a.set(0.1);
      axios.get("providers?page=" + page + "&name=" + this.Filter_Name + "&code=" + this.Filter_Code + "&phone=" + this.Filter_Phone + "&email=" + this.Filter_Email + "&SortField=" + this.serverParams.sort.field + "&SortType=" + this.serverParams.sort.type + "&search=" + this.search + "&limit=" + this.limit).then(function (response) {
        _this4.providers = response.data.providers;
        _this4.totalRows = response.data.totalRows; // Complete the animation of theprogress bar.

        nprogress__WEBPACK_IMPORTED_MODULE_1___default.a.done();
        _this4.isLoading = false;
      })["catch"](function (response) {
        // Complete the animation of theprogress bar.
        nprogress__WEBPACK_IMPORTED_MODULE_1___default.a.done();
        setTimeout(function () {
          _this4.isLoading = false;
        }, 500);
      });
    },
    //---------------------------- Create Provider  -----------------------\\
    Create_Provider: function Create_Provider() {
      var _this5 = this;

      this.SubmitProcessing = true;
      axios.post("providers", {
        name: this.provider.name,
        email: this.provider.email,
        phone: this.provider.phone,
        country: this.provider.country,
        city: this.provider.city,
        adresse: this.provider.adresse
      }).then(function (response) {
        Fire.$emit("Event_Provider");

        _this5.makeToast("success", _this5.$t("Create.TitleSupplier"), _this5.$t("Success"));

        _this5.SubmitProcessing = false;
      })["catch"](function (error) {
        _this5.makeToast("danger", _this5.$t("InvalidData"), _this5.$t("Failed"));

        _this5.SubmitProcessing = false;
      });
    },
    //--------------------------- Update Provider -----------------------\\
    Update_provider: function Update_provider() {
      var _this6 = this;

      this.SubmitProcessing = true;
      axios.put("providers/" + this.provider.id, {
        name: this.provider.name,
        email: this.provider.email,
        phone: this.provider.phone,
        country: this.provider.country,
        city: this.provider.city,
        adresse: this.provider.adresse
      }).then(function (response) {
        Fire.$emit("Event_Provider");

        _this6.makeToast("success", _this6.$t("Update.TitleSupplier"), _this6.$t("Success"));

        _this6.SubmitProcessing = false;
      })["catch"](function (error) {
        _this6.makeToast("danger", _this6.$t("InvalidData"), _this6.$t("Failed"));

        _this6.SubmitProcessing = false;
      });
    },
    //----------------------------------- Show Details Client -------------------------------\\
    showDetails: function showDetails(provider) {
      // Start the progress bar.
      nprogress__WEBPACK_IMPORTED_MODULE_1___default.a.start();
      nprogress__WEBPACK_IMPORTED_MODULE_1___default.a.set(0.1);
      this.provider = provider;
      Fire.$emit("Get_Details_Provider");
    },
    //--------------------------------- Reset Form -----------------------\\
    reset_Form: function reset_Form() {
      this.provider = {
        id: "",
        name: "",
        phone: "",
        email: "",
        country: "",
        city: "",
        adresse: ""
      };
    },
    //---------------------------- DELETE Provider -----------------------\\
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
          axios["delete"]("providers/" + id).then(function () {
            _this7.$swal(_this7.$t("Delete.Deleted"), _this7.$t("Delete.SupplierDeleted"), "success");

            Fire.$emit("Delete_Provider");
          })["catch"](function () {
            _this7.$swal(_this7.$t("Delete.Failed"), _this7.$t("Delete.ProviderError"), "warning");
          });
        }
      });
    },
    //---- Delete providers by selection
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
          nprogress__WEBPACK_IMPORTED_MODULE_1___default.a.start();
          nprogress__WEBPACK_IMPORTED_MODULE_1___default.a.set(0.1);
          axios.post("providers/delete/by_selection", {
            selectedIds: _this8.selectedIds
          }).then(function () {
            _this8.$swal(_this8.$t("Delete.Deleted"), _this8.$t("Delete.SupplierDeleted"), "success");

            Fire.$emit("Delete_Provider");
          })["catch"](function () {
            // Complete the animation of theprogress bar.
            setTimeout(function () {
              return nprogress__WEBPACK_IMPORTED_MODULE_1___default.a.done();
            }, 500);

            _this8.$swal(_this8.$t("Delete.Failed"), _this8.$t("Delete.Therewassomethingwronge"), "warning");
          });
        }
      });
    }
  },
  //----------------------------- Created function-------------------\\
  created: function created() {
    var _this9 = this;

    this.Get_Providers(1);
    Fire.$on("Get_Details_Provider", function () {
      // Complete the animation of theprogress bar.
      setTimeout(function () {
        return nprogress__WEBPACK_IMPORTED_MODULE_1___default.a.done();
      }, 500);

      _this9.$bvModal.show("showDetails");
    });
    Fire.$on("Event_Provider", function () {
      setTimeout(function () {
        _this9.Get_Providers(_this9.serverParams.page);

        _this9.$bvModal.hide("New_Provider");
      }, 500);
    });
    Fire.$on("Delete_Provider", function () {
      setTimeout(function () {
        _this9.Get_Providers(_this9.serverParams.page);
      }, 500);
    });
    Fire.$on("Event_import", function () {
      setTimeout(function () {
        _this9.Get_Providers(_this9.serverParams.page);

        _this9.$bvModal.hide("importProviders");
      }, 500);
    });
  }
});

/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/src/views/app/pages/people/providers.vue?vue&type=template&id=ffa4d602&":
/*!*************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/src/views/app/pages/people/providers.vue?vue&type=template&id=ffa4d602& ***!
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
        attrs: {
          page: _vm.$t("SuppliersManagement"),
          folder: _vm.$t("Suppliers"),
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
                    rows: _vm.providers,
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
                  scopedSlots: _vm._u([
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
                                    attrs: { title: "View" },
                                    on: {
                                      click: function ($event) {
                                        return _vm.showDetails(props.row)
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
                                  "Suppliers_edit"
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
                                            return _vm.Edit_Provider(props.row)
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
                  _c("div", {
                    staticClass: "mt-2 mb-3",
                    attrs: { slot: "table-actions" },
                    slot: "table-actions",
                  }),
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
                        { attrs: { label: _vm.$t("SupplierCode") } },
                        [
                          _c("b-form-input", {
                            attrs: {
                              label: "Code",
                              placeholder: _vm.$t("SearchByCode"),
                            },
                            model: {
                              value: _vm.Filter_Code,
                              callback: function ($$v) {
                                _vm.Filter_Code = $$v
                              },
                              expression: "Filter_Code",
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
                        { attrs: { label: _vm.$t("SupplierName") } },
                        [
                          _c("b-form-input", {
                            attrs: {
                              label: "Name",
                              placeholder: _vm.$t("SearchByName"),
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
                              return _vm.Get_Providers(_vm.serverParams.page)
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
        { ref: "Create_Provider" },
        [
          _c(
            "b-modal",
            {
              attrs: {
                "hide-footer": "",
                size: "lg",
                id: "New_Provider",
                title: _vm.editmode ? _vm.$t("Edit") : _vm.$t("Add"),
              },
            },
            [
              _c(
                "b-form",
                {
                  on: {
                    submit: function ($event) {
                      $event.preventDefault()
                      return _vm.Submit_Provider($event)
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
                              name: "Name Provider",
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
                                          label: _vm.$t("SupplierName"),
                                        },
                                      },
                                      [
                                        _c("b-form-input", {
                                          attrs: {
                                            state:
                                              _vm.getValidationState(
                                                validationContext
                                              ),
                                            "aria-describedby": "name-feedback",
                                            label: "name",
                                          },
                                          model: {
                                            value: _vm.provider.name,
                                            callback: function ($$v) {
                                              _vm.$set(
                                                _vm.provider,
                                                "name",
                                                $$v
                                              )
                                            },
                                            expression: "provider.name",
                                          },
                                        }),
                                        _vm._v(" "),
                                        _c(
                                          "b-form-invalid-feedback",
                                          { attrs: { id: "name-feedback" } },
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
                              name: "Email Provider",
                              rules: { required: true },
                            },
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
                                            value: _vm.provider.email,
                                            callback: function ($$v) {
                                              _vm.$set(
                                                _vm.provider,
                                                "email",
                                                $$v
                                              )
                                            },
                                            expression: "provider.email",
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
                              name: "Phone Provider",
                              rules: { required: true },
                            },
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
                                            value: _vm.provider.phone,
                                            callback: function ($$v) {
                                              _vm.$set(
                                                _vm.provider,
                                                "phone",
                                                $$v
                                              )
                                            },
                                            expression: "provider.phone",
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
                              name: "Country Provider",
                              rules: { required: true },
                            },
                            scopedSlots: _vm._u([
                              {
                                key: "default",
                                fn: function (validationContext) {
                                  return [
                                    _c(
                                      "b-form-group",
                                      { attrs: { label: _vm.$t("Country") } },
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
                                            value: _vm.provider.country,
                                            callback: function ($$v) {
                                              _vm.$set(
                                                _vm.provider,
                                                "country",
                                                $$v
                                              )
                                            },
                                            expression: "provider.country",
                                          },
                                        }),
                                        _vm._v(" "),
                                        _c(
                                          "b-form-invalid-feedback",
                                          { attrs: { id: "Country-feedback" } },
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
                              name: "City Provider",
                              rules: { required: true },
                            },
                            scopedSlots: _vm._u([
                              {
                                key: "default",
                                fn: function (validationContext) {
                                  return [
                                    _c(
                                      "b-form-group",
                                      { attrs: { label: _vm.$t("City") } },
                                      [
                                        _c("b-form-input", {
                                          attrs: {
                                            state:
                                              _vm.getValidationState(
                                                validationContext
                                              ),
                                            "aria-describedby": "City-feedback",
                                            label: "City",
                                          },
                                          model: {
                                            value: _vm.provider.city,
                                            callback: function ($$v) {
                                              _vm.$set(
                                                _vm.provider,
                                                "city",
                                                $$v
                                              )
                                            },
                                            expression: "provider.city",
                                          },
                                        }),
                                        _vm._v(" "),
                                        _c(
                                          "b-form-invalid-feedback",
                                          { attrs: { id: "City-feedback" } },
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
                              name: "Adress Provider",
                              rules: { required: true },
                            },
                            scopedSlots: _vm._u([
                              {
                                key: "default",
                                fn: function (validationContext) {
                                  return [
                                    _c(
                                      "b-form-group",
                                      { attrs: { label: _vm.$t("Adress") } },
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
                                            value: _vm.provider.adresse,
                                            callback: function ($$v) {
                                              _vm.$set(
                                                _vm.provider,
                                                "adresse",
                                                $$v
                                              )
                                            },
                                            expression: "provider.adresse",
                                          },
                                        }),
                                        _vm._v(" "),
                                        _c(
                                          "b-form-invalid-feedback",
                                          { attrs: { id: "Adress-feedback" } },
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
      _vm._v(" "),
      _c(
        "b-modal",
        {
          attrs: {
            "ok-only": "",
            size: "md",
            id: "showDetails",
            title: _vm.$t("SupplierDetails"),
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
                  _c("table", { staticClass: "table table-striped table-md" }, [
                    _c("tbody", [
                      _c("tr", [
                        _c("td", [_vm._v(_vm._s(_vm.$t("SupplierCode")))]),
                        _vm._v(" "),
                        _c("th", [_vm._v(_vm._s(_vm.provider.code))]),
                      ]),
                      _vm._v(" "),
                      _c("tr", [
                        _c("td", [_vm._v(_vm._s(_vm.$t("SupplierName")))]),
                        _vm._v(" "),
                        _c("th", [_vm._v(_vm._s(_vm.provider.name))]),
                      ]),
                      _vm._v(" "),
                      _c("tr", [
                        _c("td", [_vm._v(_vm._s(_vm.$t("Phone")))]),
                        _vm._v(" "),
                        _c("th", [_vm._v(_vm._s(_vm.provider.phone))]),
                      ]),
                      _vm._v(" "),
                      _c("tr", [
                        _c("td", [_vm._v(_vm._s(_vm.$t("Email")))]),
                        _vm._v(" "),
                        _c("th", [_vm._v(_vm._s(_vm.provider.email))]),
                      ]),
                      _vm._v(" "),
                      _c("tr", [
                        _c("td", [_vm._v(_vm._s(_vm.$t("Country")))]),
                        _vm._v(" "),
                        _c("th", [_vm._v(_vm._s(_vm.provider.country))]),
                      ]),
                      _vm._v(" "),
                      _c("tr", [
                        _c("td", [_vm._v(_vm._s(_vm.$t("City")))]),
                        _vm._v(" "),
                        _c("th", [_vm._v(_vm._s(_vm.provider.city))]),
                      ]),
                      _vm._v(" "),
                      _c("tr", [
                        _c("td", [_vm._v(_vm._s(_vm.$t("Adress")))]),
                        _vm._v(" "),
                        _c("th", [
                          _vm._v(_vm._s(_vm.provider.adresse.substring(0, 24))),
                        ]),
                      ]),
                    ]),
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
        "b-modal",
        {
          attrs: {
            "ok-only": "",
            "ok-title": "Cancel",
            size: "md",
            id: "importProviders",
            title: _vm.$t("Import_Suppliers"),
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
                  return _vm.Submit_import($event)
                },
              },
            },
            [
              _c(
                "b-row",
                [
                  _c(
                    "b-col",
                    { staticClass: "mb-3", attrs: { md: "12", sm: "12" } },
                    [
                      _c(
                        "b-form-group",
                        [
                          _c("input", {
                            attrs: { type: "file", label: "Choose File" },
                            on: { change: _vm.onFileSelected },
                          }),
                          _vm._v(" "),
                          _c(
                            "b-form-invalid-feedback",
                            {
                              staticClass: "d-block",
                              attrs: { id: "File-feedback" },
                            },
                            [
                              _vm._v(
                                _vm._s(_vm.$t("field_must_be_in_csv_format"))
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
                  _c(
                    "b-col",
                    { attrs: { md: "6", sm: "12" } },
                    [
                      _c(
                        "b-button",
                        {
                          attrs: {
                            type: "submit",
                            variant: "primary",
                            disabled: _vm.ImportProcessing,
                            size: "sm",
                            block: "",
                          },
                        },
                        [_vm._v(_vm._s(_vm.$t("submit")))]
                      ),
                      _vm._v(" "),
                      _vm.ImportProcessing ? _vm._m(1) : _vm._e(),
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
                            href: "/import/exemples/import_providers.csv",
                            variant: "info",
                            size: "sm",
                            block: "",
                          },
                        },
                        [_vm._v(_vm._s(_vm.$t("Download_exemple")))]
                      ),
                    ],
                    1
                  ),
                  _vm._v(" "),
                  _c("b-col", { attrs: { md: "12", sm: "12" } }, [
                    _c(
                      "table",
                      { staticClass: "table table-bordered table-sm mt-4" },
                      [
                        _c("tbody", [
                          _c("tr", [
                            _c("td", [_vm._v(_vm._s(_vm.$t("Name")))]),
                            _vm._v(" "),
                            _c("th", [
                              _c(
                                "span",
                                { staticClass: "badge badge-outline-success" },
                                [_vm._v(_vm._s(_vm.$t("Field_is_required")))]
                              ),
                            ]),
                          ]),
                          _vm._v(" "),
                          _c("tr", [
                            _c("td", [_vm._v(_vm._s(_vm.$t("Phone")))]),
                            _vm._v(" "),
                            _c("th", [
                              _c(
                                "span",
                                { staticClass: "badge badge-outline-success" },
                                [_vm._v(_vm._s(_vm.$t("Field_is_required")))]
                              ),
                            ]),
                          ]),
                          _vm._v(" "),
                          _c("tr", [
                            _c("td", [_vm._v(_vm._s(_vm.$t("Email")))]),
                            _vm._v(" "),
                            _c("th", [
                              _c(
                                "span",
                                { staticClass: "badge badge-outline-success" },
                                [_vm._v(_vm._s(_vm.$t("Field_is_required")))]
                              ),
                            ]),
                          ]),
                          _vm._v(" "),
                          _c("tr", [
                            _c("td", [_vm._v(_vm._s(_vm.$t("Country")))]),
                            _vm._v(" "),
                            _c("th", [
                              _c(
                                "span",
                                { staticClass: "badge badge-outline-success" },
                                [_vm._v(_vm._s(_vm.$t("Field_is_required")))]
                              ),
                            ]),
                          ]),
                          _vm._v(" "),
                          _c("tr", [
                            _c("td", [_vm._v(_vm._s(_vm.$t("City")))]),
                            _vm._v(" "),
                            _c("th", [
                              _c(
                                "span",
                                { staticClass: "badge badge-outline-success" },
                                [_vm._v(_vm._s(_vm.$t("Field_is_required")))]
                              ),
                            ]),
                          ]),
                          _vm._v(" "),
                          _c("tr", [
                            _c("td", [_vm._v(_vm._s(_vm.$t("Adress")))]),
                            _vm._v(" "),
                            _c("th", [
                              _c(
                                "span",
                                { staticClass: "badge badge-outline-success" },
                                [_vm._v(_vm._s(_vm.$t("Field_is_required")))]
                              ),
                            ]),
                          ]),
                        ]),
                      ]
                    ),
                  ]),
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

/***/ "./resources/src/views/app/pages/people/providers.vue":
/*!************************************************************!*\
  !*** ./resources/src/views/app/pages/people/providers.vue ***!
  \************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _providers_vue_vue_type_template_id_ffa4d602___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./providers.vue?vue&type=template&id=ffa4d602& */ "./resources/src/views/app/pages/people/providers.vue?vue&type=template&id=ffa4d602&");
/* harmony import */ var _providers_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./providers.vue?vue&type=script&lang=js& */ "./resources/src/views/app/pages/people/providers.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _providers_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _providers_vue_vue_type_template_id_ffa4d602___WEBPACK_IMPORTED_MODULE_0__["render"],
  _providers_vue_vue_type_template_id_ffa4d602___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/src/views/app/pages/people/providers.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/src/views/app/pages/people/providers.vue?vue&type=script&lang=js&":
/*!*************************************************************************************!*\
  !*** ./resources/src/views/app/pages/people/providers.vue?vue&type=script&lang=js& ***!
  \*************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_providers_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../node_modules/babel-loader/lib??ref--4-0!../../../../../../node_modules/vue-loader/lib??vue-loader-options!./providers.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/src/views/app/pages/people/providers.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_providers_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/src/views/app/pages/people/providers.vue?vue&type=template&id=ffa4d602&":
/*!*******************************************************************************************!*\
  !*** ./resources/src/views/app/pages/people/providers.vue?vue&type=template&id=ffa4d602& ***!
  \*******************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_providers_vue_vue_type_template_id_ffa4d602___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../../node_modules/vue-loader/lib??vue-loader-options!./providers.vue?vue&type=template&id=ffa4d602& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/src/views/app/pages/people/providers.vue?vue&type=template&id=ffa4d602&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_providers_vue_vue_type_template_id_ffa4d602___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_providers_vue_vue_type_template_id_ffa4d602___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ })

}]);