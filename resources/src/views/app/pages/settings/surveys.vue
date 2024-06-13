
<template>
  <div class="main-content">
    <breadcumb :page="$t('Survey')" :folder="$t('Settings')"/>

    <div v-if="isLoading" class="loading_page spinner spinner-primary mr-3"></div>
    <b-card class="wrapper" v-if="!isLoading">
      <vue-good-table
        mode="remote"
        :columns="columns"
        :totalRows="totalRows"
        :rows="surveys"
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
          <!-- <b-button @click="New_Survey()" class="btn-rounded" variant="btn btn-primary btn-icon m-1">
            <i class="i-Add"></i>
             {{ $t('Add') }}
          </b-button> -->
        </div>

        <template slot="table-row" slot-scope="props">
          <span v-if="props.column.field == 'actions'">
            <!-- <a @click="Edit_Survey(props.row)" title="Edit" v-b-tooltip.hover>
              <i class="i-Edit text-25 text-success"></i>
            </a> -->
            <!-- <a title="Delete" v-b-tooltip.hover @click="Delete_Survey(props.row.id)">
              <i class="i-Close-Window text-25 text-danger"></i>
            </a> -->
          </span>
          <span v-else-if="props.column.field == 'image'">
            <b-img
              thumbnail
              height="50"
              width="50"
              fluid
              :src="'/images/surveyimages/' + props.row.image"
              alt="image"
            ></b-img>
          </span>
        </template>
      </vue-good-table>
    </b-card>


    <validation-observer ref="Create_survey">
      <b-modal hide-footer size="md" id="New_survey" :title="editmode?$t('Edit'):$t('Add')">
        <b-form @submit.prevent="Submit_Survey" enctype="multipart/form-data">
          <b-row>
            <!-- Survey Name -->



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
                        v-model="survey.ar_name"
                      ></b-form-input>
                      <b-form-invalid-feedback id="Name-feedback">{{ validationContext.errors[0] }}</b-form-invalid-feedback>
                    </b-form-group>
                  </validation-provider>
            </b-col>

            <!-- Survey -->
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
                        v-model="survey.en_name"
                      ></b-form-input>
                      <b-form-invalid-feedback id="Name-feedback">{{ validationContext.errors[0] }}</b-form-invalid-feedback>
                    </b-form-group>
                  </validation-provider>
            </b-col>

            <!-- -Survey Image -->
            <b-col md="12">
              <validation-provider name="Image" ref="Image" rules="mimes:image/*|size:200">
                <b-form-group slot-scope="{validate, valid, errors }" :label="$t('SurveyImage')">
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
    title: "Survey"
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
      surveys: [],
      limit: "10",
      survey: {
        id: "",
        image:"",
        name:"",
        nameselectaStatus:"",
        city:"",
        area:"",
        DIDMeatResponsiblePerson:"",
        NameResponsible:"",
        Phone:"",
        activityType:"",
        address_Detail:"",
        delevery_detail:"",
        reasonVisit:"",
        usingApplication:"",
        milkused:"",
        kreemUsed:"",
        spices:"",
        cheeseUsed:"",
        SelectedBatter:"",
        oilUsed:"",
        teaused:"",
        seeeds:"",
        sauce:"",
        sauceCompany:"",
        watergasused:"",
        pastaUsed:"",
        bonUsed:"",
        branchNumber:"",
        summryVisit:"",
        productUsesClient:"",
        activity:"",
      }
    };
  },
  computed: {
    columns() {
      return [
    {
    label: this.$t(" صورة المكان "),
    field: "image",
    tdClass: "text-left",
    thClass: "text-left"
    },

       {
    label: this.$t("المبيعات"),
    field: "task.user.email",
    tdClass: "text-left",
    thClass: "text-left"
    },

    {
    label: this.$t("اسم العميل"),
    field: "name",
    tdClass: "text-left",
    thClass: "text-left"
    },
 
  {
    label: this.$t("المدينة"),
    field: "city",
    tdClass: "text-left",
    thClass: "text-left"
  },
  {
    label: this.$t("المنطقة"),
    field: "area",
    tdClass: "text-left",
    thClass: "text-left"
  },
 
  {
    label: this.$t("اسم المسؤل"),
    field: "NameResponsible",
    tdClass: "text-left",
    thClass: "text-left"
  },
  {
    label: this.$t("رقم التليفون"),
    field: "Phone",
    tdClass: "text-left",
    thClass: "text-left"
  },
  {
    label: this.$t("نوع النشاط"),
    field: "activityType",
    tdClass: "text-left",
    thClass: "text-left"
  },
  {
    label: this.$t("عنوان الإدارة"),
    field: "address_Detail",
    tdClass: "text-left",
    thClass: "text-left"
  },
  {
    label: this.$t("عنوان التوصيل"),
    field: "delevery_detail",
    tdClass: "text-left",
    thClass: "text-left"
  },
  
  {
    label: this.$t("ملخص الزيارة"),
    field: "summryVisit",
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
        this.Get_Surveys(currentPage);
      }
    },

    //---- Event Per Page Change
    onPerPageChange({ currentPerPage }) {
      if (this.limit !== currentPerPage) {
        this.limit = currentPerPage;
        this.updateParams({ page: 1, perPage: currentPerPage });
        this.Get_Surveys(1);
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
      this.Get_Surveys(this.serverParams.page);
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
      this.Get_Surveys(this.serverParams.page);
    },

    //---- Validation State Form

    getValidationState({ dirty, validated, valid = null }) {
      return dirty || validated ? valid : null;
    },

    //------------- Submit Validation Create & Edit Survey
    Submit_Survey() {
      this.$refs.Create_survey.validate().then(success => {
        if (!success) {
          this.makeToast(
            "danger",
            this.$t("Please_fill_the_form_correctly"),
            this.$t("Failed")
          );
        } else {
          if (!this.editmode) {
            this.Create_Survey();
          } else {
            this.Update_Survey();
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
        this.survey.image = e.target.files[0];
      } else {
        this.survey.image = "";
      }
    },

    //------------------------------ Modal (create Survey) -------------------------------\
    New_Survey() {
      this.reset_Form();
      this.editmode = false;
      this.$bvModal.show("New_survey");
    },

    //------------------------------ Modal (Update Survey) -------------------------------\
    Edit_Survey(survey) {
      this.Get_Surveys(this.serverParams.page);
      this.reset_Form();
      this.survey = survey;
      this.editmode = true;
      this.$bvModal.show("New_survey");
    },

    //---------------------------------------- Get All surveys-----------------\
    Get_Surveys(page) {
      // Start the progress bar.
      NProgress.start();
      NProgress.set(0.1);
      axios
        .get(
          "surveys?page=" +
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
          this.surveys = response.data.surveys;
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

    //---------------------------------------- Create new survey-----------------\
    Create_Survey() {
      var self = this;
      self.SubmitProcessing = true;
      self.data.append("ar_name", self.survey.ar_name);
      self.data.append("en_name", self.survey.en_name);
      self.data.append("image", self.survey.image);
      axios
        .post("surveys", self.data)
        .then(response => {
          self.SubmitProcessing = false;
          Fire.$emit("Event_Survey");

          this.makeToast(
            "success",
            this.$t("Create.TitleSurvey"),
            this.$t("Success")
          );
        })
        .catch(error => {
           self.SubmitProcessing = false;
          this.makeToast("danger", this.$t("InvalidData"), this.$t("Failed"));
        });
    },

    //---------------------------------------- Update Survey-----------------\
    Update_Survey() {
      var self = this;
       self.SubmitProcessing = true;
      self.data.append("en_name", self.survey.en_name);
      self.data.append("ar_name", self.survey.ar_name);
      self.data.append("image", self.survey.image);
      self.data.append("_method", "put");

      axios
        .post("surveys/" + self.survey.id, self.data)
        .then(response => {
           self.SubmitProcessing = false;
          Fire.$emit("Event_Survey");

          this.makeToast(
            "success",
            this.$t("Update.TitleSurvey"),
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
      this.survey = {
        id: "",
        ar_name: "",
        en_name: "",
        image: ""
      };
      this.data = new FormData();
    },

    //---------------------------------------- Delete Survey -----------------\
    Delete_Survey(id) {
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
            .delete("surveys/" + id)
            .then(() => {
              this.$swal(
                this.$t("Delete.Deleted"),
                this.$t("Delete.TitleSurvey"),
                "success"
              );

              Fire.$emit("Delete_Survey");
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

    //---- Delete surveys by selection

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
            .post("surveys/delete/by_selection", {
              selectedIds: this.selectedIds
            })
            .then(() => {
              this.$swal(
                this.$t("Delete.Deleted"),
                this.$t("Delete.TitleSurvey"),
                "success"
              );

              Fire.$emit("Delete_Survey");
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
    this.Get_Surveys(1);

    Fire.$on("Event_Survey", () => {
      setTimeout(() => {
        this.Get_Surveys(this.serverParams.page);
        this.$bvModal.hide("New_survey");
      }, 500);
    });

    Fire.$on("Delete_Survey", () => {
      setTimeout(() => {
        this.Get_Surveys(this.serverParams.page);
      }, 500);
    });
  }
};
</script>