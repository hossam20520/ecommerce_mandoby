
<template>
  <div class="main-content">
    <breadcumb :page="$t('Order')" :folder="$t('Settings')"/>

    <div v-if="isLoading" class="loading_page spinner spinner-primary mr-3"></div>
    <b-card class="wrapper" v-if="!isLoading">
      <vue-good-table
        mode="remote"
        :columns="columns"
        :totalRows="totalRows"
        :rows="orders"
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
          <b-button @click="New_Order()" class="btn-rounded" variant="btn btn-primary btn-icon m-1">
            <i class="i-Add"></i>
             {{ $t('Add') }}
          </b-button>
        </div>

        <template slot="table-row" slot-scope="props">
          <span v-if="props.column.field == 'actions'">
            <a @click="Edit_Order(props.row)" title="Edit" v-b-tooltip.hover>
              <i class="i-Edit text-25 text-success"></i>
            </a>
            <a title="Delete" v-b-tooltip.hover @click="Delete_Order(props.row.id)">
              <i class="i-Close-Window text-25 text-danger"></i>
            </a>


            
            <router-link
            
              v-b-tooltip.hover
              title="View"
              :to="'/app/sales/detail/'+props.row.order_id"
              >
              <i class="i-Eye text-25 text-info"></i>
            </router-link>

            <!-- :to="{ name:'orders', params: { id: props.row.id} }" -->
          </span>
    

          <span v-else-if="props.column.field == 'image'">
            <a :href="'/storage/images/orders/'+ props.row.image"  >  <b-img
              thumbnail
              height="50"
              width="50"
              fluid
              :src="'/storage/images/orders/' + props.row.image"
              alt="image"
            ></b-img>

          </a>
          </span>

        </template>
      </vue-good-table>
    </b-card>

    <validation-observer ref="Create_order">
      <b-modal hide-footer size="md" id="New_order" :title="editmode?$t('Edit'):$t('Add')">
        <b-form @submit.prevent="Submit_Order" enctype="multipart/form-data">
          <b-row>
            <!-- Order Name -->



            <!-- Category -->
            <b-col md="12" class="mb-2">
                  <validation-provider name="order" :rules="{ required: true}">
                    <b-form-group slot-scope="{ valid, errors }" :label="$t('Orders')">
                      <v-select
                        :class="{'is-invalid': !!errors.length}"
                        :state="errors[0] ? false : (valid ? true : null)"
                        :reduce="label => label.value"
                        :placeholder="$t('choose_order')"
                        v-model="order.order_id"
                        :options="sales.map(sales => ({label: sales.Ref + ' ' +  '( '+sales.GrandTotal + ' ) EGP'  , value: sales.id}))"
                      />
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
    title: "Order"
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
      sales:[],
      data: new FormData(),
      editmode: false,
      orders: [],
      limit: "10",
      order: {
        id: "",
        order_id: "",
        user_id: ""
      }
    };
  },
  computed: {
    columns() {
      return [
        {
          label: this.$t("Ref"),
          field: "Ref",
          tdClass: "text-left",
          thClass: "text-left"
        },
        {
          label: this.$t("Grand_total"),
          field: "GrandTotal",
          tdClass: "text-left",
          thClass: "text-left"
        },
        {
          label: this.$t("paid_cash"),
          field: "paid_cash",
          tdClass: "text-left",
          thClass: "text-left"
        },

        {
          label: this.$t("received_time_warehouse"),
          field: "received_time_warehouse",
          tdClass: "text-left",
          thClass: "text-left"
        },

        {
          label: this.$t("start_time"),
          field: "start_time",
          tdClass: "text-left",
          thClass: "text-left"
        },

        {
          label: this.$t("end_time"),
          field: "end_time",
          tdClass: "text-left",
          thClass: "text-left"
        },

       {
          label: this.$t("bill_image"),
          field: "image",
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
          label: this.$t("payment_type"),
          field: "payment_type",
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
        this.Get_Orders(currentPage);
      }
    },

    //---- Event Per Page Change
    onPerPageChange({ currentPerPage }) {
      if (this.limit !== currentPerPage) {
        this.limit = currentPerPage;
        this.updateParams({ page: 1, perPage: currentPerPage });
        this.Get_Orders(1);
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
      this.Get_Orders(this.serverParams.page);
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
      this.Get_Orders(this.serverParams.page);
    },

    //---- Validation State Form

    getValidationState({ dirty, validated, valid = null }) {
      return dirty || validated ? valid : null;
    },

    //------------- Submit Validation Create & Edit Order
    Submit_Order() {
      this.$refs.Create_order.validate().then(success => {
        if (!success) {
          this.makeToast(
            "danger",
            this.$t("Please_fill_the_form_correctly"),
            this.$t("Failed")
          );
        } else {
          if (!this.editmode) {
            this.Create_Order();
          } else {
            this.Update_Order();
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
        this.order.image = e.target.files[0];
      } else {
        this.order.image = "";
      }
    },

    //------------------------------ Modal (create Order) -------------------------------\
    New_Order() {
      this.reset_Form();
      this.editmode = false;
      this.$bvModal.show("New_order");
    },

    //------------------------------ Modal (Update Order) -------------------------------\
    Edit_Order(order) {
      this.Get_Orders(this.serverParams.page);
      this.reset_Form();
      this.order = order;
      this.editmode = true;
      this.$bvModal.show("New_order");
    },

    //---------------------------------------- Get All orders-----------------\
    Get_Orders(page) {
      let id = this.$route.params.id;
      // Start the progress bar.
      NProgress.start();
      NProgress.set(0.1);
      axios
        .get(
          "orders?page=" +
            page +
            "&SortField=" +
            this.serverParams.sort.field +
            "&SortType=" +
            this.serverParams.sort.type +
            "&search=" +
            this.search +
            "&limit=" +
            this.limit+
            "&id="+ 
            id
        )
        .then(response => {
          this.orders = response.data.orders;
          this.sales = response.data.sales;
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

    //---------------------------------------- Create new order-----------------\
    Create_Order() {
      var self = this;
      self.SubmitProcessing = true;
      let id = this.$route.params.id;
      self.data.append("order_id", self.order.order_id);
      self.data.append("user_id", id);
 
      axios
        .post("orders", self.data)
        .then(response => {
          self.SubmitProcessing = false;
          Fire.$emit("Event_Order");

          this.makeToast(
            "success",
            this.$t("Create.TitleOrder"),
            this.$t("Success")
          );
        })
        .catch(error => {
           self.SubmitProcessing = false;
          this.makeToast("danger", this.$t("InvalidData"), this.$t("Failed"));
        });
    },

    //---------------------------------------- Update Order-----------------\
    Update_Order() {
      var self = this;
      let id = this.$route.params.id;
       self.SubmitProcessing = true;
       self.data.append("order_id", self.order.order_id);
      self.data.append("user_id", id);
      self.data.append("_method", "put");

      axios
        .post("orders/" + self.order.id, self.data)
        .then(response => {
           self.SubmitProcessing = false;
          Fire.$emit("Event_Order");

          this.makeToast(
            "success",
            this.$t("Update.TitleOrder"),
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
      this.order = {
        id: "",
        order_id: "",
        user_id: "",
        
      };
      this.data = new FormData();
    },

    //---------------------------------------- Delete Order -----------------\
    Delete_Order(id) {
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
            .delete("orders/" + id)
            .then(() => {
              this.$swal(
                this.$t("Delete.Deleted"),
                this.$t("Delete.TitleOrder"),
                "success"
              );

              Fire.$emit("Delete_Order");
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

    //---- Delete orders by selection

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
            .post("orders/delete/by_selection", {
              selectedIds: this.selectedIds
            })
            .then(() => {
              this.$swal(
                this.$t("Delete.Deleted"),
                this.$t("Delete.TitleOrder"),
                "success"
              );

              Fire.$emit("Delete_Order");
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
    this.Get_Orders(1);

    Fire.$on("Event_Order", () => {
      setTimeout(() => {
        this.Get_Orders(this.serverParams.page);
        this.$bvModal.hide("New_order");
      }, 500);
    });

    Fire.$on("Delete_Order", () => {
      setTimeout(() => {
        this.Get_Orders(this.serverParams.page);
      }, 500);
    });
  }
};
</script>