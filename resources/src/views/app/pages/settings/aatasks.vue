
<template>
  <div class="main-content">
    <breadcumb :page="$t('Tasks')" :folder="$t('Settings')"/>

    <div v-if="isLoading" class="loading_page spinner spinner-primary mr-3"></div>
    <b-card class="wrapper" v-if="!isLoading">
      <vue-good-table
        mode="remote"
        :columns="columns"
        :totalRows="totalRows"
        :rows="mandobs"
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
  

        <template slot="table-row" slot-scope="props">
          <span v-if="props.column.field == 'actions'">
   
            <router-link
              
              v-b-tooltip.hover
              title="View"
              :to="{ name:'orders', params: { id: props.row.id} }">
              <i class="i-Eye text-25 text-info"></i>
            </router-link>
        
            
        
          </span>
       
        </template>
      </vue-good-table>
    </b-card>

    <validation-observer ref="Create_mandob">
      <b-modal hide-footer size="md" id="New_mandob" :title="editmode?$t('Edit'):$t('Add')">
        <b-form @submit.prevent="Submit_Mandob" enctype="multipart/form-data">
          <b-row>
            <!-- Mandob Name -->
 
            <b-col md="12">
                  <validation-provider
                    name="ar_Name"
                    :rules="{required:true , min:3 , max:55}"
                    v-slot="validationContext">
                    <b-form-group :label="$t('Name_ar_name')">
                      <b-form-input
                        :state="getValidationState(validationContext)"
                        aria-describedby="Name-feedback"
                        label="ar_name"
                        :placeholder="$t('Enter_Name_ar_name')"
                        v-model="mandob.ar_name"
                      ></b-form-input>
                      <b-form-invalid-feedback id="Name-feedback">{{ validationContext.errors[0] }}</b-form-invalid-feedback>
                    </b-form-group>
                  </validation-provider>
            </b-col>

            <!-- Mandob -->
    
              
               <b-col md="6" class="mb-2">
                  <validation-provider name="orders" :rules="{ required: false}">
                    <b-form-group slot-scope="{ valid, errors }" :label="$t('orders')">
                      <v-select
                        :class="{'is-invalid': !!errors.length}"
                        :state="errors[0] ? false : (valid ? true : null)"
                        :reduce="label => label.value"
                        :placeholder="$t('orders')"
                        v-model="mandob.orders"
                        multiple
                        :options="orders.map(orders => ({label: orders.ref, value: orders.id}))"
                      />
                      <b-form-invalid-feedback>{{ errors[0] }}</b-form-invalid-feedback>
                    </b-form-group>
                  </validation-provider>
                </b-col>

            <!-- -Mandob Image -->
            <b-col md="12">
              <validation-provider name="Image" ref="Image" rules="mimes:image/*|size:200">
                <b-form-group slot-scope="{validate, valid, errors }" :label="$t('MandobImage')">
                  <input
                    :state="errors[0] ? false : (valid ? true : null)"
                    :class="{'is-invalid': !!errors.length}"
                    @change="onFileSelected"
                    label="Choose Image"
                    type="file"
                  >
                  <b-form-invalid-feedback id="Image-feedback">{{  errors[0]  }}</b-form-invalid-feedback>
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
    title: "Mandob"
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
      orders:[],
      data: new FormData(),
      editmode: false,
      mandobs: [],
      limit: "10",
      mandob: {
        id: "",
        orders: "",
      
        image: ""
      }
    };
  },
  computed: {
    columns() {
      return [
        {
          label: this.$t("firstname"),
          field: "firstname",
          tdClass: "text-left",
          thClass: "text-left"
        },
        {
          label: this.$t("lastname"),
          field: "lastname",
          tdClass: "text-left",
          thClass: "text-left"
        },
        {
          label: this.$t("email"),
          field: "email",
          tdClass: "text-left",
          thClass: "text-left"
        },

        {
          label: this.$t("phone"),
          field: "phone",
          tdClass: "text-left",
          thClass: "text-left"
        },

        {
          label: this.$t("Total_orders"),
          field: "total_orders",
          tdClass: "text-left",
          thClass: "text-left"
        },


        {
          label: this.$t("completed_orders"),
          field: "completed_orders",
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
    //---- update Params Table
    updateParams(newProps) {
      this.serverParams = Object.assign({}, this.serverParams, newProps);
    },

    //---- Event Page Change
    onPageChange({ currentPage }) {
      if (this.serverParams.page !== currentPage) {
        this.updateParams({ page: currentPage });
        this.Get_Mandobs(currentPage);
      }
    },

    //---- Event Per Page Change
    onPerPageChange({ currentPerPage }) {
      if (this.limit !== currentPerPage) {
        this.limit = currentPerPage;
        this.updateParams({ page: 1, perPage: currentPerPage });
        this.Get_Mandobs(1);
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
      this.Get_Mandobs(this.serverParams.page);
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
      this.Get_Mandobs(this.serverParams.page);
    },

    //---- Validation State Form

    getValidationState({ dirty, validated, valid = null }) {
      return dirty || validated ? valid : null;
    },

    //------------- Submit Validation Create & Edit Mandob
    Submit_Mandob() {
      this.$refs.Create_mandob.validate().then(success => {
        if (!success) {
          this.makeToast(
            "danger",
            this.$t("Please_fill_the_form_correctly"),
            this.$t("Failed")
          );
        } else {
          if (!this.editmode) {
            this.Create_Mandob();
          } else {
            this.Update_Mandob();
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
        this.mandob.image = e.target.files[0];
      } else {
        this.mandob.image = "";
      }
    },

    //------------------------------ Modal (create Mandob) -------------------------------\
    New_Mandob() {
      this.reset_Form();
      this.editmode = false;
      this.$bvModal.show("New_mandob");
    },

    //------------------------------ Modal (Update Mandob) -------------------------------\
    Edit_Mandob(mandob) {
      this.Get_Mandobs(this.serverParams.page);
      this.reset_Form();
      this.mandob = mandob;
      this.editmode = true;
      this.$bvModal.show("New_mandob");
    },

    //---------------------------------------- Get All mandobs-----------------\
    Get_Mandobs(page) {
      // Start the progress bar.
      NProgress.start();
      NProgress.set(0.1);
      axios
        .get(
          "tasks?page=" +
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
          this.mandobs = response.data.mandobs;
          this.mandob = response.data.orders;
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

    //---------------------------------------- Create new mandob-----------------\
    Create_Mandob() {
      var self = this;
      self.SubmitProcessing = true;
      self.data.append("ar_name", self.mandob.ar_name);
      self.data.append("en_name", self.mandob.en_name);
      self.data.append("image", self.mandob.image);
      axios
        .post("mandobs", self.data)
        .then(response => {
          self.SubmitProcessing = false;
          Fire.$emit("Event_Mandob");

          this.makeToast(
            "success",
            this.$t("Create.TitleMandob"),
            this.$t("Success")
          );
        })
        .catch(error => {
           self.SubmitProcessing = false;
          this.makeToast("danger", this.$t("InvalidData"), this.$t("Failed"));
        });
    },

    //---------------------------------------- Update Mandob-----------------\
    Update_Mandob() {
      var self = this;
       self.SubmitProcessing = true;
      self.data.append("en_name", self.mandob.en_name);
      self.data.append("ar_name", self.mandob.ar_name);
      self.data.append("image", self.mandob.image);
      self.data.append("_method", "put");

      axios
        .post("mandobs/" + self.mandob.id, self.data)
        .then(response => {
           self.SubmitProcessing = false;
          Fire.$emit("Event_Mandob");

          this.makeToast(
            "success",
            this.$t("Update.TitleMandob"),
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
      this.mandob = {
        id: "",
        ar_name: "",
        en_name: "",
        image: ""
      };
      this.data = new FormData();
    },

    //---------------------------------------- Delete Mandob -----------------\
    Delete_Mandob(id) {
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
            .delete("mandobs/" + id)
            .then(() => {
              this.$swal(
                this.$t("Delete.Deleted"),
                this.$t("Delete.TitleMandob"),
                "success"
              );

              Fire.$emit("Delete_Mandob");
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

    //---- Delete mandobs by selection

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
            .post("mandobs/delete/by_selection", {
              selectedIds: this.selectedIds
            })
            .then(() => {
              this.$swal(
                this.$t("Delete.Deleted"),
                this.$t("Delete.TitleMandob"),
                "success"
              );

              Fire.$emit("Delete_Mandob");
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
    this.Get_Mandobs(1);

    Fire.$on("Event_Mandob", () => {
      setTimeout(() => {
        this.Get_Mandobs(this.serverParams.page);
        this.$bvModal.hide("New_mandob");
      }, 500);
    });

    Fire.$on("Delete_Mandob", () => {
      setTimeout(() => {
        this.Get_Mandobs(this.serverParams.page);
      }, 500);
    });
  }
};
</script>