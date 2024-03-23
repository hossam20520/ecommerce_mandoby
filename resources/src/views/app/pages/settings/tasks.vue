
<template>
  <div class="main-content">
    <breadcumb :page="$t('Task')" :folder="$t('Settings')"/>

    <div v-if="isLoading" class="loading_page spinner spinner-primary mr-3"></div>
    <b-card class="wrapper" v-if="!isLoading">
      <vue-good-table
        mode="remote"
        :columns="columns"
        :totalRows="totalRows"
        :rows="tasks"
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
    
        </div>

        <template slot="table-row" slot-scope="props">
          <span v-if="props.column.field == 'actions'">
         
           


            <router-link
              
              v-b-tooltip.hover
              title="View"
              :to="{ name:'detail_task', params: { id: props.row.id} }">
              <i class="i-Eye text-25 text-info"></i>
            </router-link>


            <a title="Delete" v-b-tooltip.hover @click="Delete_Task(props.row.id)">
              <i class="i-Close-Window text-25 text-danger"></i>
            </a>

          </span>
          <span v-else-if="props.column.field == 'image'">
            <b-img
              thumbnail
              height="50"
              width="50"
              fluid
              :src="'/images/tasks/' + props.row.image"
              alt="image"
            ></b-img>
          </span>
        </template>
      </vue-good-table>
    </b-card>

    <validation-observer ref="Create_task">
      <b-modal hide-footer size="md" id="New_task" :title="editmode?$t('Edit'):$t('Add')">
        <b-form @submit.prevent="Submit_Task" enctype="multipart/form-data">
          <b-row>
            <!-- Task Name -->



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
                        v-model="task.ar_name"
                      ></b-form-input>
                      <b-form-invalid-feedback id="Name-feedback">{{ validationContext.errors[0] }}</b-form-invalid-feedback>
                    </b-form-group>
                  </validation-provider>
            </b-col>

            <!-- Task -->
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
                        v-model="task.en_name"
                      ></b-form-input>
                      <b-form-invalid-feedback id="Name-feedback">{{ validationContext.errors[0] }}</b-form-invalid-feedback>
                    </b-form-group>
                  </validation-provider>
            </b-col>

            <!-- -Task Image -->
            <b-col md="12">
              <validation-provider name="Image" ref="Image" rules="mimes:image/*|size:200">
                <b-form-group slot-scope="{validate, valid, errors }" :label="$t('TaskImage')">
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
    title: "Task"
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
      tasks: [],
      limit: "10",
      task: {
        id: "",
        ar_name: "",
        en_name: "",
        image: ""
      }
    };
  },
  computed: {
    columns() {
      return [
          {
          label: this.$t("Outlet_Name"),
          field: "shop.Section",
          tdClass: "text-left",
          thClass: "text-left"
        },

        {
          label: this.$t("Outlet_Type"),
          field: "shop.Outlet_Type",
          tdClass: "text-left",
          thClass: "text-left"
        },


        {
          label: this.$t("Section"),
          field: "shop.Section",
          tdClass: "text-left",
          thClass: "text-left"
        },
        {
          label: this.$t("Shiakha_Name"),
          field: "shop.Shiakha_Name",
          tdClass: "text-left",
          thClass: "text-left"
        },
    
  
       {
          label: this.$t("location"),
          field: "shop.Shiakha_Name",
          tdClass: "text-left",
          thClass: "text-left"
        },

        
        {
          label: this.$t("status"),
          field: "status",
          tdClass: "text-left",
          thClass: "text-left"
        },



        {
          label: this.$t("from"),
          field: "from",
          tdClass: "text-left",
          thClass: "text-left"
        },

        {
          label: this.$t("to"),
          field: "to",
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
        this.Get_Tasks(currentPage);
      }
    },

    //---- Event Per Page Change
    onPerPageChange({ currentPerPage }) {
      if (this.limit !== currentPerPage) {
        this.limit = currentPerPage;
        this.updateParams({ page: 1, perPage: currentPerPage });
        this.Get_Tasks(1);
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
      this.Get_Tasks(this.serverParams.page);
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
      this.Get_Tasks(this.serverParams.page);
    },

    //---- Validation State Form

    getValidationState({ dirty, validated, valid = null }) {
      return dirty || validated ? valid : null;
    },

    //------------- Submit Validation Create & Edit Task
    Submit_Task() {
      this.$refs.Create_task.validate().then(success => {
        if (!success) {
          this.makeToast(
            "danger",
            this.$t("Please_fill_the_form_correctly"),
            this.$t("Failed")
          );
        } else {
          if (!this.editmode) {
            this.Create_Task();
          } else {
            this.Update_Task();
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
        this.task.image = e.target.files[0];
      } else {
        this.task.image = "";
      }
    },

    //------------------------------ Modal (create Task) -------------------------------\
    New_Task() {
      this.reset_Form();
      this.editmode = false;
      this.$bvModal.show("New_task");
    },

    //------------------------------ Modal (Update Task) -------------------------------\
    Edit_Task(task) {
      this.Get_Tasks(this.serverParams.page);
      this.reset_Form();
      this.task = task;
      this.editmode = true;
      this.$bvModal.show("New_task");
    },

    //---------------------------------------- Get All tasks-----------------\
    Get_Tasks(page) {
      // Start the progress bar.
      let id = this.$route.params.id;
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
            "&id=" +
             id +
            "&limit=" +
            this.limit
        )
        .then(response => {
          this.tasks = response.data.tasks;
          this.totalRows = response.data.totalRows;
      //  console.log(response.data.tasks)
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

    //---------------------------------------- Create new task-----------------\
    Create_Task() {
      var self = this;
      self.SubmitProcessing = true;
      self.data.append("ar_name", self.task.ar_name);
      self.data.append("en_name", self.task.en_name);
      self.data.append("image", self.task.image);
      axios
        .post("tasks", self.data)
        .then(response => {
          self.SubmitProcessing = false;
          Fire.$emit("Event_Task");

          this.makeToast(
            "success",
            this.$t("Create.TitleTask"),
            this.$t("Success")
          );
        })
        .catch(error => {
           self.SubmitProcessing = false;
          this.makeToast("danger", this.$t("InvalidData"), this.$t("Failed"));
        });
    },

    //---------------------------------------- Update Task-----------------\
    Update_Task() {
      var self = this;
       self.SubmitProcessing = true;
      self.data.append("en_name", self.task.en_name);
      self.data.append("ar_name", self.task.ar_name);
      self.data.append("image", self.task.image);
      self.data.append("_method", "put");

      axios
        .post("tasks/" + self.task.id, self.data)
        .then(response => {
           self.SubmitProcessing = false;
          Fire.$emit("Event_Task");

          this.makeToast(
            "success",
            this.$t("Update.TitleTask"),
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
      this.task = {
        id: "",
        ar_name: "",
        en_name: "",
        image: ""
      };
      this.data = new FormData();
    },

    //---------------------------------------- Delete Task -----------------\
    Delete_Task(id) {
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
            .delete("tasks/" + id)
            .then(() => {
              this.$swal(
                this.$t("Delete.Deleted"),
                this.$t("Delete.TitleTask"),
                "success"
              );

              Fire.$emit("Delete_Task");
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

    //---- Delete tasks by selection

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
            .post("tasks/delete/by_selection", {
              selectedIds: this.selectedIds
            })
            .then(() => {
              this.$swal(
                this.$t("Delete.Deleted"),
                this.$t("Delete.TitleTask"),
                "success"
              );

              Fire.$emit("Delete_Task");
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
    this.Get_Tasks(1);

    Fire.$on("Event_Task", () => {
      setTimeout(() => {
        this.Get_Tasks(this.serverParams.page);
        this.$bvModal.hide("New_task");
      }, 500);
    });

    Fire.$on("Delete_Task", () => {
      setTimeout(() => {
        this.Get_Tasks(this.serverParams.page);
      }, 500);
    });
  }
};
</script>