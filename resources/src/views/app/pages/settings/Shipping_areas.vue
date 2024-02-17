
<template>
  <div class="main-content">
    <breadcumb :page="$t('Shipping_area')" :folder="$t('Settings')"/>

    <div v-if="isLoading" class="loading_page spinner spinner-primary mr-3"></div>
    <b-card class="wrapper" v-if="!isLoading">
      <vue-good-table
        mode="remote"
        :columns="columns"
        :totalRows="totalRows"
        :rows="Shipping_areas"
        @on-page-change="onPageChange"
        @on-per-page-change="onPerPageChange"
        @on-sort-change="onSortChange"
        @on-search="onSearch"
        :search-options="{
        enabled: true,
        placeholder: $t('Search_this_table'),  
      }"
        :select-options="{ 
          enabled: true ,
          clearSelectionText: '',
        }"
        @on-selected-rows-change="selectionChanged"
        :pagination-options="{
        enabled: true,
        mode: 'records',
        nextLabel: 'next',
        prevLabel: 'prev',
      }"
        styleClass="table-hover tableOne vgt-table"
      >
        <div slot="selected-row-actions">
          <button class="btn btn-danger btn-sm" @click="delete_by_selected()"> {{ $t('Del') }}</button>
        </div>
        <div slot="table-actions" class="mt-2 mb-3">
          <b-button @click="New_Shipping_area()" class="btn-rounded" variant="btn btn-primary btn-icon m-1">
            <i class="i-Add"></i>
             {{ $t('Add') }}
          </b-button>
        </div>

        <template slot="table-row" slot-scope="props">
          <span v-if="props.column.field == 'actions'">
            <a @click="Edit_Shipping_area(props.row)" title="Edit" v-b-tooltip.hover>
              <i class="i-Edit text-25 text-success"></i>
            </a>
            <a title="Delete" v-b-tooltip.hover @click="Delete_Shipping_area(props.row.id)">
              <i class="i-Close-Window text-25 text-danger"></i>
            </a>
          </span>
      
        </template>
      </vue-good-table>
    </b-card>

    <validation-observer ref="Create_shipping_area">
      <b-modal hide-footer size="md" id="New_shipping_area" :title="editmode?$t('Edit'):$t('Add')">
        <b-form @submit.prevent="Submit_Shipping_area" enctype="multipart/form-data">
          <b-row>
            <!-- Shipping_area Name -->



            <b-col md="12" class="mb-12">
                  <validation-provider
                    name=" Cost"
                    :rules="{ required: true , regex: /^\d*\.?\d*$/}"
                    v-slot="validationContext" >
                    <b-form-group :label="$t('Cost')">
                      <b-form-input
                        :state="getValidationState(validationContext)"
                        aria-describedby="ProductCost-feedback"
                        label="Cost"
                        :placeholder="$t('Cost')"
                        v-model="shipping_area.cost"
                      ></b-form-input>
                      <b-form-invalid-feedback
                        id="ProductCost-feedback"
                      >{{ validationContext.errors[0] }}</b-form-invalid-feedback>
                    </b-form-group>
                  </validation-provider>
                </b-col>

                <b-col md="12" class="mb-2">
                    <validation-provider name="Govs" :rules="{ required: true}">
                      <b-form-group slot-scope="{ valid, errors }" :label="$t('Govs')">
                        <v-select
                          :class="{'is-invalid': !!errors.length}"
                          :state="errors[0] ? false : (valid ? true : null)"
                          v-model="shipping_area.gov_id"
                          :placeholder="$t('Govs')"
                          :reduce="label => label.value"
                          v-on:input="handleChange"
                          :options="govs.map(govs => ({label: govs.ar_name, value: govs.id}))" />
                        <b-form-invalid-feedback>{{ errors[0] }}</b-form-invalid-feedback>
                      </b-form-group>
                    </validation-provider>
                  </b-col>

                  <b-col md="12" class="mb-2">
                    <validation-provider name="area" :rules="{ required: true}">
                      <b-form-group slot-scope="{ valid, errors }" :label="$t('area')">
                        <v-select
                          :class="{'is-invalid': !!errors.length}"
                          :state="errors[0] ? false : (valid ? true : null)"
                          v-model="shipping_area.area_id"
                          :placeholder="$t('area')"
                          :reduce="label => label.value"
                          :options="areas.map(areas => ({label: areas.ar_name, value: areas.id}))" />
                        <b-form-invalid-feedback>{{ errors[0] }}</b-form-invalid-feedback>
                      </b-form-group>
                    </validation-provider>
                  </b-col>

 

            <b-col md="12" class="mt-3">
              <b-button variant="primary" type="submit"  :disabled="SubmitProcessing"> {{  $t('submit') }}</b-button>
                <div v-once class="typo__p" v-if="SubmitProcessing">
                  <div class="spinner sm spinner-primary mt-3"></div>
                </div>
            </b-col>

          </b-row>
        </b-form>
      </b-modal>
    </validation-observer>
  </div>
</template>

<script>
import NProgress from 'nprogress';

export default {
  metaInfo: {
    title: "Shipping_area"
  },
  data() {
    return {
      isLoading: true,
      SubmitProcessing:false,
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
      Shipping_areas: [],
      areas:[],
      govs:[],
      limit: "10",
      shipping_area: {
        id: "",
        area_id: "",
        gov_id:"",
        cost: ""
      }
    };
  },
  computed: {
    columns() {
      return [
        {
          label: this.$t("cost"),
          field: "cost",
          tdClass: "text-left",
          thClass: "text-left"
        },
        {
          label: this.$t("gov_name"),
          field: "areas.govs.ar_name",
          tdClass: "text-left",
          thClass: "text-left"
        },
        {
          label: this.$t("area_name"),
          field: "areas.ar_name",
          tdClass: "text-left",
          thClass: "text-left"
        },
        {
          label: this.$t("Action"),
          field: "actions",
          html: true,
          tdClass: "text-right",
          thClass: "text-right",
          sortable: false
        }
      ];
    }
  },

  methods: {

    handleChange(selectedValue){
      
      this.GetAreas(selectedValue);

    },

 GetAreas(selectedValue){
      console.log(selectedValue)
      axios.get( "dropdown/get?gov_id=" +  selectedValue  )
  .then(response => {
    this.areas = response.data.areas;
    console.log(response.data.areas)
 
  })
  .catch(response => {
    // Complete the animation of theprogress bar.
    NProgress.done();
    setTimeout(() => {
      this.isLoading = false;
    }, 500);
  });
    },
    //---- update Params Table
    updateParams(newProps) {
      this.serverParams = Object.assign({}, this.serverParams, newProps);
    },

    //---- Event Page Change
    onPageChange({ currentPage }) {
      if (this.serverParams.page !== currentPage) {
        this.updateParams({ page: currentPage });
        this.Get_Shipping_areas(currentPage);
      }
    },

    //---- Event Per Page Change
    onPerPageChange({ currentPerPage }) {
      if (this.limit !== currentPerPage) {
        this.limit = currentPerPage;
        this.updateParams({ page: 1, perPage: currentPerPage });
        this.Get_Shipping_areas(1);
      }
    },

    //---- Event on Sort Change
    onSortChange(params) {
      this.updateParams({
        sort: {
          type: params[0].type,
          field: params[0].field
        }
      });
      this.Get_Shipping_areas(this.serverParams.page);
    },

    //---- Event Select Rows
    selectionChanged({ selectedRows }) {
      this.selectedIds = [];
      selectedRows.forEach((row, index) => {
        this.selectedIds.push(row.id);
      });
    },

    //---- Event on Search

    onSearch(value) {
      this.search = value.searchTerm;
      this.Get_Shipping_areas(this.serverParams.page);
    },

    //---- Validation State Form

    getValidationState({ dirty, validated, valid = null }) {
      return dirty || validated ? valid : null;
    },

    //------------- Submit Validation Create & Edit Shipping_area
    Submit_Shipping_area() {
      this.$refs.Create_shipping_area.validate().then(success => {
        if (!success) {
          this.makeToast(
            "danger",
            this.$t("Please_fill_the_form_correctly"),
            this.$t("Failed")
          );
        } else {
          if (!this.editmode) {
            this.Create_Shipping_area();
          } else {
            this.Update_Shipping_area();
          }
        }
      });
    },

    //------ Toast
    makeToast(variant, msg, title) {
      this.$root.$bvToast.toast(msg, {
        title: title,
        variant: variant,
        solid: true
      });
    },

    //------------------------------ Event Upload Image -------------------------------\
    async onFileSelected(e) {
      const { valid } = await this.$refs.Image.validate(e);

      if (valid) {
        this.shipping_area.image = e.target.files[0];
      } else {
        this.shipping_area.image = "";
      }
    },

    //------------------------------ Modal (create Shipping_area) -------------------------------\
    New_Shipping_area() {
      this.reset_Form();
      this.editmode = false;
      this.$bvModal.show("New_shipping_area");
    },

    //------------------------------ Modal (Update Shipping_area) -------------------------------\
    Edit_Shipping_area(shipping_area) {
      this.Get_Shipping_areas(this.serverParams.page);
      this.reset_Form();
      this.shipping_area = shipping_area;
      this.editmode = true;
      this.$bvModal.show("New_shipping_area");
    },

    //---------------------------------------- Get All Shipping_areas-----------------\
    Get_Shipping_areas(page) {
      // Start the progress bar.
      NProgress.start();
      NProgress.set(0.1);
      axios
        .get(
          "Shipping_areas?page=" +
            page +
            "&SortField=" +
            this.serverParams.sort.field +
            "&SortType=" +
            this.serverParams.sort.type +
            "&search=" +
            this.search +
            "&limit=" +
            this.limit
        )
        .then(response => {
          this.Shipping_areas = response.data.Shipping_areas;
          this.totalRows = response.data.totalRows;
          this.govs = response.data.govs;

          // Complete the animation of theprogress bar.
          NProgress.done();
          this.isLoading = false;
        })
        .catch(response => {
          // Complete the animation of theprogress bar.
          NProgress.done();
          setTimeout(() => {
            this.isLoading = false;
          }, 500);
        });
    },

    //---------------------------------------- Create new shipping_area-----------------\
    Create_Shipping_area() {
      var self = this;
      self.SubmitProcessing = true;
      self.data.append("cost", self.shipping_area.cost);
      self.data.append("area_id", self.shipping_area.area_id);
      axios
        .post("Shipping_areas", self.data)
        .then(response => {
          self.SubmitProcessing = false;
          Fire.$emit("Event_Shipping_area");

          this.makeToast(
            "success",
            this.$t("Create.TitleShipping_area"),
            this.$t("Success")
          );
        })
        .catch(error => {
           self.SubmitProcessing = false;
          this.makeToast("danger", this.$t("InvalidData"), this.$t("Failed"));
        });
    },

    //---------------------------------------- Update Shipping_area-----------------\
    Update_Shipping_area() {
      var self = this;
       self.SubmitProcessing = true;
      self.data.append("cost", self.shipping_area.cost);
      self.data.append("area_id", self.shipping_area.area_id);
 
      self.data.append("_method", "put");

      axios
        .post("Shipping_areas/" + self.shipping_area.id, self.data)
        .then(response => {
           self.SubmitProcessing = false;
          Fire.$emit("Event_Shipping_area");

          this.makeToast(
            "success",
            this.$t("Update.TitleShipping_area"),
            this.$t("Success")
          );
        })
        .catch(error => {
           self.SubmitProcessing = false;
          this.makeToast("danger", this.$t("InvalidData"), this.$t("Failed"));
        });
    },

    //---------------------------------------- Reset Form -----------------\
    reset_Form() {
      this.shipping_area = {
        id: "",
        cost: "",
        area_id: "",
 
      };
      this.data = new FormData();
    },

    //---------------------------------------- Delete Shipping_area -----------------\
    Delete_Shipping_area(id) {
      this.$swal({
        title: this.$t("Delete.Title"),
        text: this.$t("Delete.Text"),
        type: "warning",
        showCancelButton: true,
        confirmButtonColor: "#3085d6",
        cancelButtonColor: "#d33",
        cancelButtonText: this.$t("Delete.cancelButtonText"),
        confirmButtonText: this.$t("Delete.confirmButtonText")
      }).then(result => {
        if (result.value) {
          axios
            .delete("Shipping_areas/" + id)
            .then(() => {
              this.$swal(
                this.$t("Delete.Deleted"),
                this.$t("Delete.TitleShipping_area"),
                "success"
              );

              Fire.$emit("Delete_Shipping_area");
            })
            .catch(() => {
              this.$swal(
                this.$t("Delete.Failed"),
                this.$t("Delete.Therewassomethingwronge"),
                "warning"
              );
            });
        }
      });
    },

    //---- Delete Shipping_areas by selection

    delete_by_selected() {
      this.$swal({
        title: this.$t("Delete.Title"),
        text: this.$t("Delete.Text"),
        type: "warning",
        showCancelButton: true,
        confirmButtonColor: "#3085d6",
        cancelButtonColor: "#d33",
        cancelButtonText: this.$t("Delete.cancelButtonText"),
        confirmButtonText: this.$t("Delete.confirmButtonText")
      }).then(result => {
        if (result.value) {
          // Start the progress bar.
          NProgress.start();
          NProgress.set(0.1);
          axios
            .post("Shipping_areas/delete/by_selection", {
              selectedIds: this.selectedIds
            })
            .then(() => {
              this.$swal(
                this.$t("Delete.Deleted"),
                this.$t("Delete.TitleShipping_area"),
                "success"
              );

              Fire.$emit("Delete_Shipping_area");
            })
            .catch(() => {
              // Complete the animation of theprogress bar.
              setTimeout(() => NProgress.done(), 500);
              this.$swal(
                this.$t("Delete.Failed"),
                this.$t("Delete.Therewassomethingwronge"),
                "warning"
              );
            });
        }
      });
    }
  }, //end Methods
  created: function() {
    this.Get_Shipping_areas(1);

    Fire.$on("Event_Shipping_area", () => {
      setTimeout(() => {
        this.Get_Shipping_areas(this.serverParams.page);
        this.$bvModal.hide("New_shipping_area");
      }, 500);
    });

    Fire.$on("Delete_Shipping_area", () => {
      setTimeout(() => {
        this.Get_Shipping_areas(this.serverParams.page);
      }, 500);
    });
  }
};
</script>