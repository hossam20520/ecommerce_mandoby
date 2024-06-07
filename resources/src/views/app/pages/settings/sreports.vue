
<template>
  <div class="main-content">
    <breadcumb :page="$t('Sreport')" :folder="$t('Settings')"/>

    <div v-if="isLoading" class="loading_page spinner spinner-primary mr-3"></div>
    <b-card class="wrapper" v-if="!isLoading">

  <b-card-body>
        <b-row id="print_product">
       
        <b-col md="8">
            <table class="table table-hover table-bordered table-md">
              <tbody>
                 <tr>
                  <td>{{$t('attendace_date')}}</td>
                  <th>{{sreport.attendace_date}}</th>
                  <th>{{sreport.attendace_time}}</th>

                  <td>{{$t('Attencdance_leaving_date')}}</td>

                  <th>{{sreport.l_attendace_date}}</th>
                  <th>{{sreport.l_attendace_time}}</th>
                 </tr>



                   <tr>
                       <td>{{$t('accept_data_storage')}}</td>
                       <th>{{sreport.accept_data_storage}}</th>
                       <th>{{sreport.accept_time_storage}}</th>
                   </tr>



                  <tr>
                         <td>{{$t('arrive_date_client')}}</td>
                          <th>{{sreport.arrive_date_client}}</th>
                          <th>{{sreport.arrive_time_client}}</th>

                          <td>{{$t('leaving_date_client')}}</td>
                          <th>{{sreport.leaving_date_client}}</th>
                          <th>{{sreport.leaving_time_client}}</th>

                   </tr>




                      <tr>
                       <td>{{$t('total_orders')}}</td>
                       <th>{{sreport.total_orders}}</th>
                      </tr>


                     <tr>
                       <td>{{$t('total_cost')}}</td>
                       <th>{{sreport.total_cost}}</th>
                      </tr>

                        <tr>
                       <td>{{$t('total_collected')}}</td>
                       <th>{{sreport.total_collected}}</th>
                      </tr>

                </tbody>
                </table>
                </b-col>

          </b-row>

          </b-card-body>



    </b-card>

    <validation-observer ref="Create_sreport">
      <b-modal hide-footer size="md" id="New_sreport" :title="editmode?$t('Edit'):$t('Add')">
        <b-form @submit.prevent="Submit_Sreport" enctype="multipart/form-data">
          <b-row>
            <!-- Sreport Name -->



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
                        v-model="sreport.ar_name"
                      ></b-form-input>
                      <b-form-invalid-feedback id="Name-feedback">{{ validationContext.errors[0] }}</b-form-invalid-feedback>
                    </b-form-group>
                  </validation-provider>
            </b-col>

            <!-- Sreport -->
            <b-col md="12">
              <validation-provider
                    name="en_Name"
                    :rules="{required:true , min:3 , max:55}"
                    v-slot="validationContext">
                    <b-form-group :label="$t('Name_en_name')">
                      <b-form-input
                        :state="getValidationState(validationContext)"
                        aria-describedby="Name-feedback"
                        label="en_name"
                        :placeholder="$t('Enter_Name_en_name')"
                        v-model="sreport.en_name"
                      ></b-form-input>
                      <b-form-invalid-feedback id="Name-feedback">{{ validationContext.errors[0] }}</b-form-invalid-feedback>
                    </b-form-group>
                  </validation-provider>
            </b-col>

            <!-- -Sreport Image -->
            <b-col md="12">
              <validation-provider name="Image" ref="Image" rules="mimes:image/*|size:200">
                <b-form-group slot-scope="{validate, valid, errors }" :label="$t('SreportImage')">
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
import NProgress from "nprogress";

export default {
  metaInfo: {
    title: "Sreport"
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
      sreports: [],
      limit: "10",
        from:"",
        to:"",
      sreport: {
   
 
      }
    };
  },
  computed: {
    columns() {
      return [
        {
          label: this.$t("SreportImage"),
          field: "image",
          tdClass: "text-left",
          thClass: "text-left"
        },
        {
          label: this.$t("SreportName"),
          field: "en_name",
          tdClass: "text-left",
          thClass: "text-left"
        },
        {
          label: this.$t("SreportDescription"),
          field: "ar_name",
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
        this.Get_Sreports(currentPage);
      }
    },

    //---- Event Per Page Change
    onPerPageChange({ currentPerPage }) {
      if (this.limit !== currentPerPage) {
        this.limit = currentPerPage;
        this.updateParams({ page: 1, perPage: currentPerPage });
        this.Get_Sreports(1);
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
      this.Get_Sreports(this.serverParams.page);
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
      this.Get_Sreports(this.serverParams.page);
    },

    //---- Validation State Form

    getValidationState({ dirty, validated, valid = null }) {
      return dirty || validated ? valid : null;
    },

    //------------- Submit Validation Create & Edit Sreport
    Submit_Sreport() {
      this.$refs.Create_sreport.validate().then(success => {
        if (!success) {
          this.makeToast(
            "danger",
            this.$t("Please_fill_the_form_correctly"),
            this.$t("Failed")
          );
        } else {
          if (!this.editmode) {
            this.Create_Sreport();
          } else {
            this.Update_Sreport();
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
        this.sreport.image = e.target.files[0];
      } else {
        this.sreport.image = "";
      }
    },

    //------------------------------ Modal (create Sreport) -------------------------------\
    New_Sreport() {
      this.reset_Form();
      this.editmode = false;
      this.$bvModal.show("New_sreport");
    },

    //------------------------------ Modal (Update Sreport) -------------------------------\
    Edit_Sreport(sreport) {
      this.Get_Sreports(this.serverParams.page);
      this.reset_Form();
      this.sreport = sreport;
      this.editmode = true;
      this.$bvModal.show("New_sreport");
    },

    //---------------------------------------- Get All sreports-----------------\
    Get_Sreports(page) {
      // Start the progress bar.
       let id = this.$route.params.id;
      NProgress.start();
      NProgress.set(0.1);
      axios
        .get(
          "sreports?id=" +
             id +
            "&from=" +
            this.from  +
            "&to=" +
            this.to  
        )
        .then(response => {
          this.sreport  = response.data.sreports;
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

    //---------------------------------------- Create new sreport-----------------\
    Create_Sreport() {
      var self = this;
      self.SubmitProcessing = true;
      self.data.append("ar_name", self.sreport.ar_name);
      self.data.append("en_name", self.sreport.en_name);
      self.data.append("image", self.sreport.image);
      axios
        .post("sreports", self.data)
        .then(response => {
          self.SubmitProcessing = false;
          Fire.$emit("Event_Sreport");

          this.makeToast(
            "success",
            this.$t("Create.TitleSreport"),
            this.$t("Success")
          );
        })
        .catch(error => {
           self.SubmitProcessing = false;
          this.makeToast("danger", this.$t("InvalidData"), this.$t("Failed"));
        });
    },

    //---------------------------------------- Update Sreport-----------------\
    Update_Sreport() {
      var self = this;
       self.SubmitProcessing = true;
      self.data.append("en_name", self.sreport.en_name);
      self.data.append("ar_name", self.sreport.ar_name);
      self.data.append("image", self.sreport.image);
      self.data.append("_method", "put");

      axios
        .post("sreports/" + self.sreport.id, self.data)
        .then(response => {
           self.SubmitProcessing = false;
          Fire.$emit("Event_Sreport");

          this.makeToast(
            "success",
            this.$t("Update.TitleSreport"),
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
      this.sreport = {
        id: "",
        ar_name: "",
        en_name: "",
        image: ""
      };
      this.data = new FormData();
    },

    //---------------------------------------- Delete Sreport -----------------\
    Delete_Sreport(id) {
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
            .delete("sreports/" + id)
            .then(() => {
              this.$swal(
                this.$t("Delete.Deleted"),
                this.$t("Delete.TitleSreport"),
                "success"
              );

              Fire.$emit("Delete_Sreport");
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

    //---- Delete sreports by selection

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
            .post("sreports/delete/by_selection", {
              selectedIds: this.selectedIds
            })
            .then(() => {
              this.$swal(
                this.$t("Delete.Deleted"),
                this.$t("Delete.TitleSreport"),
                "success"
              );

              Fire.$emit("Delete_Sreport");
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
    this.Get_Sreports(1);

    Fire.$on("Event_Sreport", () => {
      setTimeout(() => {
        this.Get_Sreports(this.serverParams.page);
        this.$bvModal.hide("New_sreport");
      }, 500);
    });

    Fire.$on("Delete_Sreport", () => {
      setTimeout(() => {
        this.Get_Sreports(this.serverParams.page);
      }, 500);
    });
  }
};
</script>