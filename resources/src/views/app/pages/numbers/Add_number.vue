<template>
  <div class="main-content">
    <breadcumb :page="$t('AddProduct')" :folder="$t('Products')"/>
    <div v-if="isLoading" class="loading_page spinner spinner-primary mr-3"></div>

    <validation-observer ref="Create_Number" v-if="!isLoading">
      <b-form @submit.prevent="Submit_Number" enctype="multipart/form-data">
        <b-row>
          <b-col md="10">
            <b-card>
              <b-row>

                <!-- Name -->
                <b-col md="6" class="mb-2">
                  <validation-provider
                    name="Number"
                    :rules="{required:true , min:3 , max:55}"
                    v-slot="validationContext"
                  >
                    <b-form-group :label="$t('number')">
                      <b-form-input
                        :state="getValidationState(validationContext)"
                        aria-describedby="Name-feedback"
                        label="Number"
                        :placeholder="$t('Enter_Num')"
                        v-model="Ent.number"
                      ></b-form-input>
                      <b-form-invalid-feedback id="Name-feedback">{{ validationContext.errors[0] }}</b-form-invalid-feedback>
                    </b-form-group>
                  </validation-provider>
                </b-col>

                <!-- Code Product"-->
                <b-col md="6" class="mb-2">
                  <validation-provider
                    name="Serial"
                    :rules="{ required: true}"
                  >
                    <b-form-group slot-scope="{ valid, errors }" :label="$t('serial')">
                      <div class="input-group">
                        <b-form-input
                          :class="{'is-invalid': !!errors.length}"
                          :state="errors[0] ? false : (valid ? true : null)"
                          aria-describedby="CodeProduct-feedback"
                          type="text"
                          v-model="Ent.serial"
                        ></b-form-input>
                        <!-- <div class="input-group-append">
                          <span class="input-group-text">
                            <a @click="generateNumber()">
                              <i class="i-Bar-Code"></i>
                            </a>
                          </span>
                        </div> -->
                        <b-form-invalid-feedback id="CodeProduct-feedback">{{ errors[0] }}</b-form-invalid-feedback>
                      </div>
                        <span>{{$t('Scan_your_barcode_and_select_the_correct_symbology_below')}}</span>
                        <b-alert
                          show
                          variant="danger"
                          class="error mt-1"
                          v-if="serial_exist !=''"
                        >{{serial_exist}}</b-alert>
                    </b-form-group>
                  </validation-provider>
                </b-col>

                <!-- Category -->
                <b-col md="6" class="mb-2">
                  <validation-provider name="Year" :rules="{ required: true}">
                    <b-form-group slot-scope="{ valid, errors }" :label="$t('Year')">
                      <v-select
                        :class="{'is-invalid': !!errors.length}"
                        :state="errors[0] ? false : (valid ? true : null)"
                        :reduce="label => label.value"
                        :placeholder="$t('Choose_Year')"
                        v-model="Ent.year"
                        :options="Years.map(Years => ({label: Years.name, value: Years.id}))"
                      />
                      <b-form-invalid-feedback>{{ errors[0] }}</b-form-invalid-feedback>
                    </b-form-group>
                  </validation-provider>
                </b-col>

                <!-- Brand  -->
                <b-col md="6" class="mb-2">
                  <b-form-group :label="$t('month')">
                    <v-select
                      :placeholder="$t('Choose_month')"
                      :reduce="label => label.value"
                      v-model="Ent.month"
                      :options="Monthes.map(Monthes => ({label: Monthes.name, value: Monthes.id}))"
                    />
                  </b-form-group>
                </b-col>

                <!-- Barcode Symbology  -->
        

                <!-- Product Cost -->
          

                <!-- Product Price -->
      

                <!-- Unit Product -->
             

                <!-- Unit Sale -->
         

                <!-- Unit Purchase -->
          

                <!-- Stock Alert -->
        

                <!-- Order Tax -->
        

                <!-- Tax Method -->
       

              
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
      tag: "",
      len: 8,
      images: [],
      imageArray: [],
      change: false,
      isLoading: true,
      SubmitProcessing:false,
      data: new FormData(),
      Years: [
            {name:"2022" , id:"2022"},
            {name:"2023" , id:"2023"},
            {name:"2024" , id:"2024"},
            {name:"2025" , id:"2025"},
            {name:"2026" , id:"2026"},
            {name:"2027" , id:"2027"},
            {name:"2028" , id:"2028"},
            {name:"2029" , id:"2029"},
            {name:"2030" , id:"2030"}
      ],
      units: [],
      units_sub: [],
      Monthes: [

            {name:"1" , id:"1"},
            {name:"2" , id:"2"},
            {name:"3" , id:"3"},
            {name:"4" , id:"4"},
            {name:"5" , id:"5"},
            {name:"6" , id:"6"},
            {name:"7" , id:"7"},
            {name:"8" , id:"8"},
            {name:"9" , id:"9"}

      ],
      roles: {},
      variants: [],
      Ent: {
        number: "",
        serial: "",
        year: "",
        month: ""
       
      },
      serial_exist: ""
    };
  },

  components: {
    VueUploadMultipleImage,
    VueTagsInput
  },

  methods: {
    //------------- Submit Validation Create Product
    Submit_Number() {
      this.$refs.Create_Number.validate().then(success => {
        if (!success) {
          this.makeToast(
            "danger",
            this.$t("Please_fill_the_form_correctly"),
            this.$t("Failed")
          );
        } else {
          this.Create_Number();
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

   

    //-------------- Product Get Elements
    GetElements() {
      axios
        .get("Numbers/create")
        .then(response => {
          //this.categories = response.data.categories;
          //this.brands = response.data.brands;
         
          this.isLoading = false;
        })
        .catch(response => {
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
    Create_Number() {

     
      // Start the progress bar.
      NProgress.start();
      NProgress.set(0.1);
      var self = this;
      self.SubmitProcessing = true;

      // if (self.product.is_variant && self.variants.length <= 0) {
      //   self.product.is_variant = false;
      // }
      // append objet product
      Object.entries(self.Ent).forEach(([key, value]) => {
       console.log(key);
        self.data.append(key, value);
      });
    
      // Send Data with axios
      axios
        .post("Numbers", self.data)
        .then(response => {
          // Complete the animation of theprogress bar.
          NProgress.done();
          self.SubmitProcessing = false;
          this.$router.push({ name: "index_products" });
          this.makeToast(
            "success",
            this.$t("Successfully_Created"),
            this.$t("Success")
          );
        })
        .catch(error => {
          // Complete the animation of theprogress bar.
          NProgress.done(error);
          console.log();
          if (error.errors.serial.length > 0) {
            self.serial_exist = error.errors.serial[0];
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
