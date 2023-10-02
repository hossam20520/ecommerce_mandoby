
<template>
  <div class="main-content">
    <breadcumb :page="$t('Bill')" :folder="$t('Settings')"/>

    <div v-if="isLoading" class="loading_page spinner spinner-primary mr-3"></div>
    <b-card class="wrapper" v-if="!isLoading">
      <vue-good-table
        mode="remote"
        :columns="columns"
        :totalRows="totalRows"
        :rows="shops"
        @on-page-change="onPageChange"
        @on-per-page-change="onPerPageChange"
        @on-sort-change="onSortChange"
        @on-search="onSearch"
        :search-options="{
        enabled: true,
        placeholder: $t('Search_this_table'),  
      }"
 
   
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
            <a @click="Edit_About(props.row)" title="Edit" v-b-tooltip.hover>
              <i class="i-Edit text-25 text-success"></i>
            </a>
   
          </span>

          <span v-else-if="props.column.field == 'image'">
                    <b-img
                      thumbnail
                      height="50"
                      width="50"
                      fluid
                      :src="'/images/shops/' + props.row.image"
                      alt="image"
                    ></b-img>
                  </span>
 
        </template>
      </vue-good-table>
    </b-card>

    <validation-observer ref="Create_about">
      <b-modal hide-footer size="md" id="New_about" :title="editmode?$t('Edit'):$t('Add')">
        <b-form @submit.prevent="Submit_About" enctype="multipart/form-data">
          <b-row>
            <!-- About Name -->



            <b-col md="12">
                  <validation-provider
                    name="ar_about"
                    :rules="{required:true , min:3 , max:500}"
                    v-slot="validationContext">
                    <b-form-group :label="$t('ar_about')">
                    <textarea
                      rows="4"
                      class="form-control"
                      :placeholder="$t('ar_about')"
                      v-model="about.ar_about"
                    ></textarea>
                  </b-form-group>
                  </validation-provider>
            </b-col>

            <!-- About -->

            <b-col md="12">
                  <validation-provider
                    name="en_about"
                    :rules="{required:true , min:3 , max:500}"
                    v-slot="validationContext">
                    <b-form-group :label="$t('en_about')">
                    <textarea
                      rows="4"
                      class="form-control"
                      :placeholder="$t('en_about')"
                      v-model="about.en_about"
                    ></textarea>
                  </b-form-group>
                  </validation-provider>
            </b-col>

            <b-col md="12">
                  <validation-provider
                    name="en_terms"
                    :rules="{required:true , min:3 , max:500}"
                    v-slot="validationContext">
                    <b-form-group :label="$t('en_terms')">
                    <textarea
                      rows="4"
                      class="form-control"
                      :placeholder="$t('en_terms')"
                      v-model="about.en_terms"
                    ></textarea>
                  </b-form-group>
                  </validation-provider>
            </b-col>


            <b-col md="12">
                  <validation-provider
                    name="ar_terms"
                    :rules="{required:true , min:3 , max:500}"
                    v-slot="validationContext">
                    <b-form-group :label="$t('ar_terms')">
                    <textarea
                      rows="4"
                      class="form-control"
                      :placeholder="$t('ar_terms')"
                      v-model="about.ar_terms"
                    ></textarea>
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
    title: "About"
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
      abouts: [],
      shops:[],
      limit: "10",
      about: {
        id: "",
        ar_terms: "",
        en_terms: "",
         ar_about: "",
         en_about: ""
        
      }
    };
  },
  computed: {
    columns() {
      return [
      {
          label: this.$t("image"),
          field: "image",
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
          label: this.$t("en_name"),
          field: "en_name",
          tdClass: "text-left",
          thClass: "text-left"
        },
        {
          label: this.$t("firstname"),
          field: "vendor.firstname",
          tdClass: "text-left",
          thClass: "text-left"
        },
 
        {
          label: this.$t("lastname"),
          field: "vendor.lastname",
          tdClass: "text-left",
          thClass: "text-left"
        },
        {
          label: this.$t("phone"),
          field: "vendor.phone",
          tdClass: "text-left",
          thClass: "text-left"
        },

        {
          label: this.$t("email"),
          field: "vendor.email",
          tdClass: "text-left",
          thClass: "text-left"
        },



        {
          label: this.$t("due"),
          field: "due",
          tdClass: "text-left",
          thClass: "text-left"
        },

        // {
        //   label: this.$t("Action"),
        //   field: "actions",
        //   html: true,
        //   tdClass: "text-right",
        //   thClass: "text-right",
        //   sortable: false
        // }
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
        this.Get_Abouts(currentPage);
      }
    },

    //---- Event Per Page Change
    onPerPageChange({ currentPerPage }) {
      if (this.limit !== currentPerPage) {
        this.limit = currentPerPage;
        this.updateParams({ page: 1, perPage: currentPerPage });
        this.Get_Abouts(1);
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
      this.Get_Abouts(this.serverParams.page);
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
      this.Get_Abouts(this.serverParams.page);
    },

    //---- Validation State Form

    getValidationState({ dirty, validated, valid = null }) {
      return dirty || validated ? valid : null;
    },

    //------------- Submit Validation Create & Edit About
    Submit_About() {
      this.$refs.Create_about.validate().then(success => {
        if (!success) {
          this.makeToast(
            "danger",
            this.$t("Please_fill_the_form_correctly"),
            this.$t("Failed")
          );
        } else {
          if (!this.editmode) {
            this.Create_About();
          } else {
            this.Update_About();
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
        this.about.image = e.target.files[0];
      } else {
        this.about.image = "";
      }
    },

    //------------------------------ Modal (create About) -------------------------------\
    New_About() {
      this.reset_Form();
      this.editmode = false;
      this.$bvModal.show("New_about");
    },

    //------------------------------ Modal (Update About) -------------------------------\
    Edit_About(about) {
      this.Get_Abouts(this.serverParams.page);
      this.reset_Form();
      this.about = about;


      this.editmode = true;
      this.$bvModal.show("New_about");
    },

    //---------------------------------------- Get All abouts-----------------\
    Get_Abouts(page) {
      // Start the progress bar.
      NProgress.start();
      NProgress.set(0.1);
      axios
        .get(
          "bill?page=" +
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
          this.shops = response.data.shops;
          console.log(this.shops);
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

    //---------------------------------------- Create new about-----------------\
    Create_About() {
      var self = this;
      self.SubmitProcessing = true;
      self.data.append("ar_name", self.about.ar_name);
      self.data.append("en_name", self.about.en_name);
      self.data.append("image", self.about.image);
      axios
        .post("abouts", self.data)
        .then(response => {
          self.SubmitProcessing = false;
          Fire.$emit("Event_About");

          this.makeToast(
            "success",
            this.$t("Create.TitleAbout"),
            this.$t("Success")
          );
        })
        .catch(error => {
           self.SubmitProcessing = false;
          this.makeToast("danger", this.$t("InvalidData"), this.$t("Failed"));
        });
    },

    //---------------------------------------- Update About-----------------\
    Update_About() {
      var self = this;
       self.SubmitProcessing = true;
      self.data.append("en_terms", self.about.en_terms);
      self.data.append("ar_terms", self.about.ar_terms);
      self.data.append("ar_about", self.about.ar_about);
      self.data.append("en_about", self.about.en_about);
      self.data.append("_method", "put");

      axios
        .post("abouts/" + self.about.id, self.data)
        .then(response => {
           self.SubmitProcessing = false;
          Fire.$emit("Event_About");

          this.makeToast(
            "success",
            this.$t("Update.TitleAbout"),
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
      this.about = {
        id: "",
        en_terms: "",
        ar_terms: "",
        ar_about: "",
        en_about: "",
    
      };
      this.data = new FormData();
    },

    //---------------------------------------- Delete About -----------------\
    Delete_About(id) {
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
            .delete("abouts/" + id)
            .then(() => {
              this.$swal(
                this.$t("Delete.Deleted"),
                this.$t("Delete.TitleAbout"),
                "success"
              );

              Fire.$emit("Delete_About");
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

    //---- Delete abouts by selection

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
            .post("abouts/delete/by_selection", {
              selectedIds: this.selectedIds
            })
            .then(() => {
              this.$swal(
                this.$t("Delete.Deleted"),
                this.$t("Delete.TitleAbout"),
                "success"
              );

              Fire.$emit("Delete_About");
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
    this.Get_Abouts(1);

    Fire.$on("Event_About", () => {
      setTimeout(() => {
        this.Get_Abouts(this.serverParams.page);
        this.$bvModal.hide("New_about");
      }, 500);
    });

    Fire.$on("Delete_About", () => {
      setTimeout(() => {
        this.Get_Abouts(this.serverParams.page);
      }, 500);
    });
  }
};
</script>