<template>
  <div class="main-content">
    <breadcumb :page="$t('AddProduct')" :folder="$t('Products')"/>
    <div v-if="isLoading" class="loading_page spinner spinner-primary mr-3"></div>

    <validation-observer ref="Create_deferred" v-if="!isLoading">
      <b-form @submit.prevent="Submit_Product" enctype="multipart/form-data">
        <b-row>
          <b-col md="8">
            <b-card>
              <b-row>
                <!-- date -->
                <b-col md="6" class="mb-2">
              <validation-provider
                    name="date"
                    :rules="{ required: true}"
                    v-slot="validationContext"
                  >
                    <b-form-group :label="$t('date')">
                      <b-form-input
                        :state="getValidationState(validationContext)"
                        aria-describedby="date-feedback"
                        type="date"
                        v-model="deferred.date"
                      ></b-form-input>
                      <b-form-invalid-feedback
                        id="OrderTax-feedback"
                      >{{ validationContext.errors[0] }}</b-form-invalid-feedback>
                    </b-form-group>
                  </validation-provider>
                </b-col>

                <!-- Amount "-->
                <b-col md="6" class="mb-2">
                       <validation-provider
                    name="amount"
                    :rules="{ required: true , regex: /^\d*\.?\d*$/}"
                    v-slot="validationContext"
                  >
                    <b-form-group :label="$t('amount')">
                      <b-form-input
                        :state="getValidationState(validationContext)"
                        aria-describedby="def_amount-feedback"
                        label="amount"
                        :placeholder="$t('Enter_def_amount')"
                        v-model="deferred.amount"
                      ></b-form-input>
                      <b-form-invalid-feedback
                        id="def_amount-feedback"
                      >{{ validationContext.errors[0] }}</b-form-invalid-feedback>
                    </b-form-group>
                  </validation-provider>
                </b-col>

                <!-- Customer -->
                <b-col md="6" class="mb-2">
                  <validation-provider name="customer" :rules="{ required: true}">
                    <b-form-group slot-scope="{ valid, errors }" :label="$t('customer_def')">
                      <v-select
                        :class="{'is-invalid': !!errors.length}"
                        :state="errors[0] ? false : (valid ? true : null)"
                        :reduce="label => label.value"
                        :placeholder="$t('Choose_Customer')"
                        v-model="deferred.customer_id"
                        :options="customers.map(customers => ({label: customers.name, value: customers.id}))"
                      />
                      <b-form-invalid-feedback>{{ errors[0] }}</b-form-invalid-feedback>
                    </b-form-group>
                  </validation-provider>
                </b-col>

                <!-- paypackdate  -->
                <b-col md="6" class="mb-2">
                <validation-provider
                    name="date"
                    :rules="{ required: true}"
                    v-slot="validationContext"
                  >
                    <b-form-group :label="$t('paypackdate')">
                      <b-form-input
                        :state="getValidationState(validationContext)"
                        aria-describedby="date-feedback"
                        type="date"
                        v-model="deferred.paypackdate"
                      ></b-form-input>
                      <b-form-invalid-feedback
                        id="OrderTax-feedback"
                      >{{ validationContext.errors[0] }}</b-form-invalid-feedback>
                    </b-form-group>
                  </validation-provider>
                </b-col>

                <!-- is_paied  -->
                <b-col md="6" class="mb-2">
                
                      <div class="form-check">
                        <label class="checkbox checkbox-outline-primary">
                          <input type="checkbox" v-model="deferred.is_paied">
                          <span>{{$t('IsPaied')}}</span>
                          <span class="checkmark"></span>
                        </label>
                      </div>
             
                </b-col>

                <!-- is_verified -->
                <b-col md="6" class="mb-2">
                         <div class="form-check">
                        <label class="checkbox checkbox-outline-primary">
                          <input type="checkbox" v-model="deferred.is_verified">
                          <span>{{$t('is_verified')}}</span>
                          <span class="checkmark"></span>
                        </label>
                      </div>
                </b-col>

                <!-- add Products -->
                <b-col md="6" class="mb-2">
                  <b-form-group :label="$t('Products')">
                    <textarea
                      rows="4"
                      class="form-control"
                      :placeholder="$t('writeProducts')"
                      v-model="deferred.products"
                    ></textarea>
                  </b-form-group>
                </b-col>

                <!-- add nome -->
                <b-col md="6" class="mb-2">
                    <b-form-group :label="$t('Note')">
                    <textarea
                      rows="4"
                      class="form-control"
                      :placeholder="$t('Afewwords')"
                      v-model="deferred.note"
                    ></textarea>
                  </b-form-group>
                </b-col>

 

                <!-- Phone -->
                <b-col md="6" class="mb-2">
                 <validation-provider
                    name="phone"
                    :rules="{required:true , min:3 , max:55}"
                    v-slot="validationContext"
                  >
                    <b-form-group :label="$t('Phonee')">
                      <b-form-input
                        :state="getValidationState(validationContext)"
                        aria-describedby="phone-feedback"
                        label="phone"
                        :placeholder="$t('Enter_Phonee')"
                        v-model="deferred.phone"
                      ></b-form-input>
                      <b-form-invalid-feedback id="phone-feedback">{{ validationContext.errors[0] }}</b-form-invalid-feedback>
                    </b-form-group>
                  </validation-provider>
                </b-col>

                <!-- Stock Alert -->
    
              </b-row>
            </b-card>
          </b-col>
          <b-col md="12" class="mt-3">
             <b-button variant="primary" type="submit" :disabled="SubmitProcessing">{{$t('submit')}}</b-button>
              <div v-once class="typo__p" v-if="SubmitProcessing">
                <div class="spinner sm spinner-primary mt-3"></div>
              </div>
          </b-col>
        </b-row>
      </b-form>
    </validation-observer>
  </div>
</template>


<script>
import VueUploadMultipleImage from "vue-upload-multiple-image";
import VueTagsInput from "@johmun/vue-tags-input";
import NProgress from "nprogress";

export default {
  metaInfo: {
    title: "Create Product"
  },
  data() {
    return {
      len: 8,
      change: false,
      isLoading: true,
      SubmitProcessing:false,
      customers: [],
       data: new FormData(),
      deferred:{
       date:new Date().toISOString().slice(0, 10),
      customer_id:"",
      amount:0,
      paypackdate:new Date().toISOString().slice(0, 10),
      is_paied:false,
      is_verified:false,
      products:"",
      note:"",
      phone:"",
      },
     code_exist: ""

    };
  },

  components: {
    VueUploadMultipleImage,
    VueTagsInput
  },

  methods: {
    //------------- Submit Validation Create Product
    Submit_Product() {
      this.$refs.Create_deferred.validate().then(success => {
        if (!success) {
          this.makeToast(
            "danger",
            this.$t("Please_fill_the_form_correctly"),
            this.$t("Failed")
          );
        } else {
          this.Create_Deferred();
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

    //------ Validation State
    getValidationState({ dirty, validated, valid = null }) {
      return dirty || validated ? valid : null;
    },

    //------Show Notification If Variant is Duplicate
    showNotifDuplicate() {
      this.makeToast(
        "warning",
        this.$t("VariantDuplicate"),
        this.$t("Warning")
      );
    },

    //------ Event upload Image Success
    uploadImageSuccess(formData, index, fileList, imageArray) {
      this.images = fileList;
    },

    //------ Event before Remove Image
    beforeRemove(index, done, fileList) {
      var remove = confirm("remove image");
      if (remove == true) {
        this.images = fileList;
        done();
      } else {
      }
    },
  getValidationState({ dirty, validated, valid = null }) {
      return dirty || validated ? valid : null;
    },
    //-------------- Product Get Elements
    GetElements() {
      axios
        .get("Deffereds/create")
        .then(response => {
          this.customers = response.data.customers;
          this.isLoading = false;
        })
        .catch(response => {
          alet("hello")
          setTimeout(() => {
            this.isLoading = false;
          }, 500);
          this.makeToast("danger", this.$t("InvalidData"), this.$t("Failed"));
        });
    },

    //---------------------- Get Sub Units with Unit id ------------------------------\\
    Get_Units_SubBase(value) {
      axios
        .get("Get_Units_SubBase?id=" + value)
        .then(({ data }) => (this.units_sub = data));
    },

    //---------------------- Event Select Unit Product ------------------------------\\
    Selected_Unit(value) {
      this.units_sub = [];
      this.product.unit_sale_id = "";
      this.product.unit_purchase_id = "";
      this.Get_Units_SubBase(value);
    },

    //------------------------------ Create new Product ------------------------------\\
    Create_Deferred() {
      // alert(655)
      // Start the progress bar.
      NProgress.start();
      NProgress.set(0.1);
      var self = this;
      self.SubmitProcessing = true;


      // append objet deferred
      Object.entries(self.deferred).forEach(([key, value]) => {
        self.data.append(key, value);
      });


      axios
        .post("Deffereds", self.data)
        .then(response => {
          // console.log(response)
          // Complete the animation of theprogress bar.
          NProgress.done();
          self.SubmitProcessing = false;
          // this.$router.push({ name: "index_products" });
          this.makeToast(
            "success",
            this.$t("Successfully_Created"),
            this.$t("Success")
          );
        })
        .catch(error => {
          console.log(error)
          // Complete the animation of theprogress bar.
          NProgress.done();
          if (error.errors.code.length > 0) {
            self.code_exist = error.errors.code[0];
          }
          this.makeToast("danger", this.$t("InvalidData"), this.$t("Failed"));
          self.SubmitProcessing = false;
        });
    }
  }, //end Methods

  //-----------------------------Created function-------------------

  created: function() {
    this.GetElements();
  }
};
</script>
