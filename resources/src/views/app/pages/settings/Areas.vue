
<template>
  <div class="main-content">
    <breadcumb :page="$t('Area')" :folder="$t('Settings')"/>

    <div v-if="isLoading" class="loading_page spinner spinner-primary mr-3"></div>
    <b-card class="wrapper" v-if="!isLoading">
      <vue-good-table
        mode="remote"
        :columns="columns"
        :totalRows="totalRows"
        :rows="areas"
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
          <b-button @click="New_Area()" class="btn-rounded" variant="btn btn-primary btn-icon m-1">
            <i class="i-Add"></i>
             {{ $t('Add') }}
          </b-button>
        </div>

        <template slot="table-row" slot-scope="props">
          <span v-if="props.column.field == 'actions'">
            <a @click="Edit_Area(props.row)" title="Edit" v-b-tooltip.hover>
              <i class="i-Edit text-25 text-success"></i>
            </a>
            <a title="Delete" v-b-tooltip.hover @click="Delete_Area(props.row.id)">
              <i class="i-Close-Window text-25 text-danger"></i>
            </a>
          </span>
          <span v-else-if="props.column.field == 'image'">
            <b-img
              thumbnail
              height="50"
              width="50"
              fluid
              :src="'/images/areas/' + props.row.image"
              alt="image"
            ></b-img>
          </span>
        </template>
      </vue-good-table>
    </b-card>

    <validation-observer ref="Create_area">
      <b-modal hide-footer size="md" id="New_area" :title="editmode?$t('Edit'):$t('Add')">
        <b-form @submit.prevent="Submit_Area" enctype="multipart/form-data">
          <b-row>
            <!-- Area Name -->



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
                        v-model="area.ar_name"
                      ></b-form-input>
                      <b-form-invalid-feedback id="Name-feedback">{{ validationContext.errors[0] }}</b-form-invalid-feedback>
                    </b-form-group>
                  </validation-provider>
            </b-col>

            <!-- Area -->
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
                        v-model="area.en_name"
                      ></b-form-input>
                      <b-form-invalid-feedback id="Name-feedback">{{ validationContext.errors[0] }}</b-form-invalid-feedback>
                    </b-form-group>
                  </validation-provider>
            </b-col>

            <b-col md="12">
              <validation-provider
                    name="code"
                    :rules="{required:true , min:1 , max:55}"
                    v-slot="validationContext">
                    <b-form-group :label="$t('code')">
                      <b-form-input
                        :state="getValidationState(validationContext)"
                        aria-describedby="Name-feedback"
                        label="code"
                        :placeholder="$t('code')"
                        v-model="area.code"
                      ></b-form-input>
                      <b-form-invalid-feedback id="Name-feedback">{{ validationContext.errors[0] }}</b-form-invalid-feedback>
                    </b-form-group>
                  </validation-provider>
            </b-col>




         <b-col md="12">
              <validation-provider
                    name="from"
                    :rules="{required:true , min:1 , max:55}"
                    v-slot="validationContext">
                    <b-form-group :label="$t('from')">
                      <b-form-input
                        :state="getValidationState(validationContext)"
                        aria-describedby="Name-feedback"
                        label="from"
                        :placeholder="$t('from')"
                        v-model="area.from"
                      ></b-form-input>
                      <b-form-invalid-feedback id="Name-feedback">{{ validationContext.errors[0] }}</b-form-invalid-feedback>
                    </b-form-group>
                  </validation-provider>
            </b-col>
 

         <b-col md="12">
              <validation-provider
                    name="to"
                    :rules="{required:true , min:1 , max:55}"
                    v-slot="validationContext">
                    <b-form-group :label="$t('to')">
                      <b-form-input
                        :state="getValidationState(validationContext)"
                        aria-describedby="Name-feedback"
                        label="to"
                        :placeholder="$t('to')"
                        v-model="area.to"
                      ></b-form-input>
                      <b-form-invalid-feedback id="Name-feedback">{{ validationContext.errors[0] }}</b-form-invalid-feedback>
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
    title: "Area"
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
      areas: [],
      limit: "10",
      area: {
        id: "",
        ar_name: "",
        en_name: "",
        code: "",
        from:"",
        to:"",
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
          label: this.$t("from"),
          field: "from_time",
          tdClass: "text-left",
          thClass: "text-left"
        },


       {
          label: this.$t("to"),
          field: "to_time",
          tdClass: "text-left",
          thClass: "text-left"
        },

        {
          label: this.$t("en_name"),
          field: "en_name",
          tdClass: "text-left",
          thClass: "text-left"
        },
        {
          label: this.$t("ar_name"),
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
        this.Get_Areas(currentPage);
      }
    },

    //---- Event Per Page Change
    onPerPageChange({ currentPerPage }) {
      if (this.limit !== currentPerPage) {
        this.limit = currentPerPage;
        this.updateParams({ page: 1, perPage: currentPerPage });
        this.Get_Areas(1);
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
      this.Get_Areas(this.serverParams.page);
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
      this.Get_Areas(this.serverParams.page);
    },

    //---- Validation State Form

    getValidationState({ dirty, validated, valid = null }) {
      return dirty || validated ? valid : null;
    },

    //------------- Submit Validation Create & Edit Area
    Submit_Area() {
      this.$refs.Create_area.validate().then(success => {
        if (!success) {
          this.makeToast(
            "danger",
            this.$t("Please_fill_the_form_correctly"),
            this.$t("Failed")
          );
        } else {
          if (!this.editmode) {
            this.Create_Area();
          } else {
            this.Update_Area();
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
        this.area.image = e.target.files[0];
      } else {
        this.area.image = "";
      }
    },

    //------------------------------ Modal (create Area) -------------------------------\
    New_Area() {
      this.reset_Form();
      this.editmode = false;
      this.$bvModal.show("New_area");
    },

    //------------------------------ Modal (Update Area) -------------------------------\
    Edit_Area(area) {
      this.Get_Areas(this.serverParams.page);
      this.reset_Form();
      this.area = area;
      this.editmode = true;
      this.$bvModal.show("New_area");
    },

    //---------------------------------------- Get All areas-----------------\
    Get_Areas(page) {
      let id = this.$route.params.id;
      // Start the progress bar.
      NProgress.start();
      NProgress.set(0.1);
      axios
        .get(
          "areas?page=" +
           
            page +
            "&SortField=" +
            this.serverParams.sort.field +
            "&SortType=" +
            this.serverParams.sort.type +
            "&search=" +
            this.search +
            "&id=" +
              id +
            "&limit=" +
            this.limit
        )
        .then(response => {
          this.areas = response.data.areas;
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

    //---------------------------------------- Create new area-----------------\
    Create_Area() {
      let id = this.$route.params.id;
      var self = this;
      self.SubmitProcessing = true;
      self.data.append("ar_name", self.area.ar_name);
      self.data.append("en_name", self.area.en_name);
      self.data.append("code", self.area.code);

     self.data.append("from", self.area.from);
      self.data.append("to", self.area.to);

      self.data.append("gov_id", id);
      axios
        .post("areas", self.data)
        .then(response => {
          self.SubmitProcessing = false;
          Fire.$emit("Event_Area");

          this.makeToast(
            "success",
            this.$t("Create.TitleArea"),
            this.$t("Success")
          );
        })
        .catch(error => {
           self.SubmitProcessing = false;
          this.makeToast("danger", this.$t("InvalidData"), this.$t("Failed"));
        });
    },

    //---------------------------------------- Update Area-----------------\
    Update_Area() {
      var self = this;
      let id = this.$route.params.id;
       self.SubmitProcessing = true;
      self.data.append("en_name", self.area.en_name);
      self.data.append("ar_name", self.area.ar_name);
      self.data.append("code", self.area.code);
      self.data.append("gov_id", id);
      self.data.append("from", self.area.from);
      self.data.append("to", self.area.to);
      self.data.append("_method", "put");

      axios
        .post("areas/" + self.area.id, self.data)
        .then(response => {
           self.SubmitProcessing = false;
          Fire.$emit("Event_Area");

          this.makeToast(
            "success",
            this.$t("Update.TitleArea"),
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
      this.area = {
        id: "",
        ar_name: "",
        en_name: "",
        code: "",
        gov_id:"",
        from:"",
        to:"",
      };
      this.data = new FormData();
    },

    //---------------------------------------- Delete Area -----------------\
    Delete_Area(id) {
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
            .delete("areas/" + id)
            .then(() => {
              this.$swal(
                this.$t("Delete.Deleted"),
                this.$t("Delete.TitleArea"),
                "success"
              );

              Fire.$emit("Delete_Area");
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

    //---- Delete areas by selection

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
            .post("areas/delete/by_selection", {
              selectedIds: this.selectedIds
            })
            .then(() => {
              this.$swal(
                this.$t("Delete.Deleted"),
                this.$t("Delete.TitleArea"),
                "success"
              );

              Fire.$emit("Delete_Area");
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
    this.Get_Areas(1);

    Fire.$on("Event_Area", () => {
      setTimeout(() => {
        this.Get_Areas(this.serverParams.page);
        this.$bvModal.hide("New_area");
      }, 500);
    });

    Fire.$on("Delete_Area", () => {
      setTimeout(() => {
        this.Get_Areas(this.serverParams.page);
      }, 500);
    });
  }
};
</script>