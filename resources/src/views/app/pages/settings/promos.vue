
<template>
  <div class="main-content">
    <breadcumb :page="$t('Promo')" :folder="$t('Settings')"/>

    <div v-if="isLoading" class="loading_page spinner spinner-primary mr-3"></div>
    <b-card class="wrapper" v-if="!isLoading">
      <vue-good-table
        mode="remote"
        :columns="columns"
        :totalRows="totalRows"
        :rows="promos"
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
          <b-button @click="New_Promo()" class="btn-rounded" variant="btn btn-primary btn-icon m-1">
            <i class="i-Add"></i>
             {{ $t('Add') }}
          </b-button>
        </div>

        <template slot="table-row" slot-scope="props">
          <span v-if="props.column.field == 'actions'">
            <a @click="Edit_Promo(props.row)" title="Edit" v-b-tooltip.hover>
              <i class="i-Edit text-25 text-success"></i>
            </a>
            <a title="Delete" v-b-tooltip.hover @click="Delete_Promo(props.row.id)">
              <i class="i-Close-Window text-25 text-danger"></i>
            </a>
          </span>
          <span v-else-if="props.column.field == 'image'">
            <b-img
              thumbnail
              height="50"
              width="50"
              fluid
              :src="'/images/promos/' + props.row.image"
              alt="image"
            ></b-img>
          </span>
        </template>
      </vue-good-table>
    </b-card>

    <validation-observer ref="Create_promo">
      <b-modal hide-footer size="md" id="New_promo" :title="editmode?$t('Edit'):$t('Add')">
        <b-form @submit.prevent="Submit_Promo" enctype="multipart/form-data">
          <b-row>
            <!-- Promo Name -->


                         <!-- Code Product"-->
              <b-col md="12">
                  <validation-provider
                    name="Code"
                    :rules="{ required: true}" >
                    <b-form-group slot-scope="{ valid, errors }" :label="$t('Code')">
                      <div class="input-group">
                        <b-form-input
                          :class="{'is-invalid': !!errors.length}"
                          :state="errors[0] ? false : (valid ? true : null)"
                          aria-describedby="CodeProduct-feedback"
                          type="text"
                          v-model="promo.code"
                        ></b-form-input>
                        <div class="input-group-append">
                          <span class="input-group-text">
                            <a @click="generateNumber()">
                              <i class="i-Bar-Code"></i>
                            </a>
                          </span>
                        </div>
                        <b-form-invalid-feedback id="CodeProduct-feedback">{{ errors[0] }}</b-form-invalid-feedback>
                      </div>
                        
               
                    </b-form-group>
                  </validation-provider>
                </b-col>

   
                <b-col md="12">
                  <validation-provider name="Type Method" :rules="{ required: true}">
                    <b-form-group slot-scope="{ valid, errors }" :label="$t('TypeMethod')">
                      <v-select
                        :class="{'is-invalid': !!errors.length}"
                        :state="errors[0] ? false : (valid ? true : null)"
                        v-model="promo.type"
                        :reduce="label => label.value"
                        :placeholder="$t('Choose_Method')"
                        :options="
                           [
                            {label: 'Percentage', value: 'percentage'},
                            {label: 'Fixed', value: 'fixed'}
                           ]"
                      ></v-select>
                      <b-form-invalid-feedback>{{ errors[0] }}</b-form-invalid-feedback>
                    </b-form-group>
                  </validation-provider>
                </b-col>




                
                <b-col md="12">
                  <validation-provider
                    name="Value_discount"
                    :rules="{ required: true , regex: /^\d*\.?\d*$/}"
                    v-slot="validationContext"
                  >
                    <b-form-group :label="$t('Value')">
                      <b-form-input
                        :state="getValidationState(validationContext)"
                        aria-describedby="ProductPrice-feedback"
                        label="Price"
                        :placeholder="$t('Enter_Value_discount')"
                        v-model="promo.value"
                      ></b-form-input>

                      <b-form-invalid-feedback
                        id="ProductPrice-feedback"
                      >{{ validationContext.errors[0] }}</b-form-invalid-feedback>
                    </b-form-group>
                  </validation-provider>
                </b-col>



                <b-col md="12">
                  <validation-provider
                    name="usage_limit"
                    :rules="{ required: true , regex: /^\d*\.?\d*$/}"
                    v-slot="validationContext"
                  >
                    <b-form-group :label="$t('usage_limit')">
                      <b-form-input
                        :state="getValidationState(validationContext)"
                        aria-describedby="ProductPrice-feedback"
                        label="usage_limit"
                        :placeholder="$t('Enter_usage_limit')"
                        v-model="promo.usage_limit"
                      ></b-form-input>

                      <b-form-invalid-feedback
                        id="ProductPrice-feedback"
                      >{{ validationContext.errors[0] }}</b-form-invalid-feedback>
                    </b-form-group>
                  </validation-provider>
                </b-col>


                <b-col md="12">
                  <validation-provider
                    name="min_cart_value"
                    :rules="{ required: true , regex: /^\d*\.?\d*$/}"
                    v-slot="validationContext"
                  >
                    <b-form-group :label="$t('min_cart_value')">
                      <b-form-input
                        :state="getValidationState(validationContext)"
                        aria-describedby="ProductPrice-feedback"
                        label="min_cart_value"
                        :placeholder="$t('min_cart_value')"
                        v-model="promo.min_cart_value"
                      ></b-form-input>

                      <b-form-invalid-feedback
                        id="ProductPrice-feedback"
                      >{{ validationContext.errors[0] }}</b-form-invalid-feedback>
                    </b-form-group>
                  </validation-provider>
                </b-col>
                 <!-- date  -->
                 <b-col   md="12"   class="mb-3">
                  <validation-provider
                    name="expiry_date"
                    :rules="{ required: true}"
                    v-slot="validationContext"
                  >
                    <b-form-group :label="$t('expiry_date')">
                      <b-form-input
                        :state="getValidationState(validationContext)"
                        aria-describedby="date-feedback"
                        type="date"
                        v-model="promo.expiry_date"
                      ></b-form-input>
                      <b-form-invalid-feedback
                        id="OrderTax-feedback"
                      >{{ validationContext.errors[0] }}</b-form-invalid-feedback>
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
import NProgress from "nprogress";

export default {
  metaInfo: {
    title: "Promo"
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
      promos: [],
      limit: "10",
      promo: {
        id: "",
        code:"",
        type:"",
        value:"",
        min_cart_value:"",
        usage_limit:"",
        usage_count:"",
        expiry_date: new Date().toISOString().slice(0, 10),
 
      }
    };
  },
  computed: {
    columns() {
      return [
    
        {
          label: this.$t("code"),
          field: "code",
          tdClass: "text-left",
          thClass: "text-left"
        },
        {
          label: this.$t("type"),
          field: "type",
          tdClass: "text-left",
          thClass: "text-left"
        },
        {
          label: this.$t("value"),
          field: "value",
          tdClass: "text-left",
          thClass: "text-left"
        },
        {
          label: this.$t("expiry_date"),
          field: "expiry_date",
          tdClass: "text-left",
          thClass: "text-left"
        },

        {
          label: this.$t("min_cart_value"),
          field: "min_cart_value",
          tdClass: "text-left",
          thClass: "text-left"
        },


        {
          label: this.$t("usage_limit"),
          field: "usage_limit",
          tdClass: "text-left",
          thClass: "text-left"
        },

        {
          label: this.$t("usage_count"),
          field: "usage_count",
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

    generateNumber(){
      const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
      let result = '';
      const length = 15;

      for (let i = 0; i < length; i++) {
        const randomIndex = Math.floor(Math.random() * characters.length);
        result += characters.charAt(randomIndex);
      }

      this.promo.code = result;

      // this.randomString = result;


    },


    //---- update Params Table
    updateParams(newProps) {
      this.serverParams = Object.assign({}, this.serverParams, newProps);
    },

    //---- Event Page Change
    onPageChange({ currentPage }) {
      if (this.serverParams.page !== currentPage) {
        this.updateParams({ page: currentPage });
        this.Get_Promos(currentPage);
      }
    },

    //---- Event Per Page Change
    onPerPageChange({ currentPerPage }) {
      if (this.limit !== currentPerPage) {
        this.limit = currentPerPage;
        this.updateParams({ page: 1, perPage: currentPerPage });
        this.Get_Promos(1);
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
      this.Get_Promos(this.serverParams.page);
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
      this.Get_Promos(this.serverParams.page);
    },

    //---- Validation State Form

    getValidationState({ dirty, validated, valid = null }) {
      return dirty || validated ? valid : null;
    },

    //------------- Submit Validation Create & Edit Promo
    Submit_Promo() {
      this.$refs.Create_promo.validate().then(success => {
        if (!success) {
          this.makeToast(
            "danger",
            this.$t("Please_fill_the_form_correctly"),
            this.$t("Failed")
          );
        } else {
          if (!this.editmode) {
            this.Create_Promo();
          } else {
            this.Update_Promo();
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
        this.promo.image = e.target.files[0];
      } else {
        this.promo.image = "";
      }
    },

    //------------------------------ Modal (create Promo) -------------------------------\
    New_Promo() {
      this.reset_Form();
      this.editmode = false;
      this.$bvModal.show("New_promo");
    },

    //------------------------------ Modal (Update Promo) -------------------------------\
    Edit_Promo(promo) {
      this.Get_Promos(this.serverParams.page);
      this.reset_Form();
      this.promo = promo;
      this.editmode = true;
      this.$bvModal.show("New_promo");
    },

    //---------------------------------------- Get All promos-----------------\
    Get_Promos(page) {
      // Start the progress bar.
      NProgress.start();
      NProgress.set(0.1);
      axios
        .get(
          "promos?page=" +
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
          this.promos = response.data.promos;
          this.totalRows = response.data.totalRows;

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

    //---------------------------------------- Create new promo-----------------\
    Create_Promo() {
      var self = this;
      self.SubmitProcessing = true;
      self.data.append("code", self.promo.code);
      self.data.append("type", self.promo.type);
      self.data.append("value", self.promo.value);
      self.data.append("usage_limit", self.promo.usage_limit);
      self.data.append("expiry_date", self.promo.expiry_date);
      self.data.append("min_cart_value", self.promo.min_cart_value);
      axios.post("promos", self.data).then(response => {
          self.SubmitProcessing = false;
          Fire.$emit("Event_Promo");

          this.makeToast(
            "success",
            this.$t("Create.TitlePromo"),
            this.$t("Success")
          );
        })
        .catch(error => {
           self.SubmitProcessing = false;
          this.makeToast("danger", this.$t("InvalidData"), this.$t("Failed"));
        });
    },

    //---------------------------------------- Update Promo-----------------\
    Update_Promo() {
      var self = this;
       self.SubmitProcessing = true;
       self.data.append("code", self.promo.code);
      self.data.append("type", self.promo.type);
      self.data.append("value", self.promo.value);
      self.data.append("usage_limit", self.promo.usage_limit);
      self.data.append("expiry_date", self.promo.expiry_date);
      self.data.append("min_cart_value", self.promo.min_cart_value);

      self.data.append("_method", "put");

      axios
        .post("promos/" + self.promo.id, self.data)
        .then(response => {
           self.SubmitProcessing = false;
          Fire.$emit("Event_Promo");

          this.makeToast(
            "success",
            this.$t("Update.TitlePromo"),
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
      this.promo = {
        id: "",
        code:"",
        type:"",
        value:"",
        min_cart_value:"",
        usage_limit:"",
        usage_count:"",
        expiry_date: new Date().toISOString().slice(0, 10),
      };
      this.data = new FormData();
    },

    //---------------------------------------- Delete Promo -----------------\
    Delete_Promo(id) {
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
            .delete("promos/" + id)
            .then(() => {
              this.$swal(
                this.$t("Delete.Deleted"),
                this.$t("Delete.TitlePromo"),
                "success"
              );

              Fire.$emit("Delete_Promo");
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

    //---- Delete promos by selection

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
            .post("promos/delete/by_selection", {
              selectedIds: this.selectedIds
            })
            .then(() => {
              this.$swal(
                this.$t("Delete.Deleted"),
                this.$t("Delete.TitlePromo"),
                "success"
              );

              Fire.$emit("Delete_Promo");
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
    this.Get_Promos(1);

    Fire.$on("Event_Promo", () => {
      setTimeout(() => {
        this.Get_Promos(this.serverParams.page);
        this.$bvModal.hide("New_promo");
      }, 500);
    });

    Fire.$on("Delete_Promo", () => {
      setTimeout(() => {
        this.Get_Promos(this.serverParams.page);
      }, 500);
    });
  }
};
</script>