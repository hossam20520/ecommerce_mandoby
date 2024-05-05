
<template>
  <div class="main-content">

 

    <GmapMap
    :center="{lat:30.059813, lng:31.329825}"
    :zoom="7"
    map-type-id="terrain"
    style="width: 100%; height: 500px"
>


         <GmapMarker
          :key="index"
          v-for="(m, index) in shops_marker"
          :position="m.position"
          :clickable="false"
          :draggable="false"
          :icon="m.showIcon ? getMarkerIcon() : null"
          
        
  />

  
  <GmapMarker
          :key="index"
          v-for="(m, index) in markers"
          :position="m.position"
          :clickable="false"
          :draggable="true"
          @dragend="onCircleDragEnd"
          :icon="m.showIcon ? getMarkerIcon() : null"
          @drag="onMarkerDrag(index, $event)"
          @click="center=m.position"
  />


  <GmapCircle
    :visible="true" 
    :center="circle.center"
    :radius="circle.radius"
    :editable="true"

    @center_changed="onCircleCenterChanged"
    @radius_changed="onCircleRadiusChanged"
        @drag="onCircleDrag"
    :options="{
      strokeColor: circle.strokeColor,
      strokeOpacity: circle.strokeOpacity,
      strokeWeight: circle.strokeWeight,
      fillColor: circle.fillColor,
      fillOpacity: circle.fillOpacity
    }"
  />
</GmapMap>

<!-- <button @click="addMarkerToCurrentPosition">Add Marker to Current Position</button> -->


<b-form @submit.prevent="GetDataMap" enctype="multipart/form-data">
        <b-row>
          <b-col md="12">
            <b-card>
              <b-row>
   
    
                <!-- Tax Method -->
                <!-- <b-col lg="6" md="6" sm="12" class="mb-2">
                  <validation-provider name="Category" :rules="{ required: true}">
                    <b-form-group slot-scope="{ valid, errors }" :label="$t('Category')">
                      <v-select
                        :class="{'is-invalid': !!errors.length}"
                        :state="errors[0] ? false : (valid ? true : null)"
                        v-model="keyword"
                        :reduce="label => label.value"
                        :placeholder="$t('Choose_Category')"
                        v-on:input="handleChange"
                        multiple
                        :options="
                           [
                            {label: 'Restaurants', value: 'restaurant'},
                            {label: 'Cafe', value: 'cafe'},
                            {label: 'food', value: 'food'},
                            {label: 'diner', value: 'diner'},
                            {label: 'pub', value: 'pub'},
                            {label: 'bar', value: 'bar'},
                           ]"
                      ></v-select>
                      <b-form-invalid-feedback>{{ errors[0] }}</b-form-invalid-feedback>
                    </b-form-group>
                  </validation-provider>
                </b-col> -->



<!--           
              <b-col md="6" class="mb-2">
                  <validation-provider
                    name="radius"
                    :rules="{ required: true , regex: /^\d*\.?\d*$/}"
                    v-slot="validationContext">
                    <b-form-group :label="$t('Distance(KM)')">
                      <b-form-input
                        :state="getValidationState(validationContext)"
                        aria-describedby="ProductPrice-feedback"
                        label="radius"
                        :placeholder="$t('Enter_radius')"
                        v-model="radius"
                         disabled
                        @input="handleRadiusChange"

                      ></b-form-input>

                      <b-form-invalid-feedback
                        id="ProductPrice-feedback"
                      >{{ validationContext.errors[0] }}</b-form-invalid-feedback>
                    </b-form-group>
                  </validation-provider>
                </b-col> -->
 
                <!-- <button class="btn btn-success btn-sm" @click="GetDataMap()"> {{ $t('ShowInMap') }}</button> -->

          
              </b-row>
            </b-card>
          </b-col>
      
    
        </b-row>
      </b-form>


    <!-- <GMapMap
      :center="center"
      :zoom="7"
      map-type-id="terrain"
      style="width: 500px; height: 300px"
  >
    <GMapCluster>
      <GMapMarker
          :key="index"
          v-for="(m, index) in markers"
          :position="m.position"
          :clickable="true"
          :draggable="true"
          @click="center=m.position"
      />
    </GMapCluster>
  </GMapMap> -->


    <breadcumb :page="$t('Leads')" :folder="$t('Settings')"/>

 


    <div v-if="isLoading" class="loading_page spinner spinner-primary mr-3"></div>
    <b-card class="wrapper" v-if="!isLoading">




      <vue-good-table
        mode="remote"
        :columns="columns"
        :totalRows="totalRows"
        :rows="maps"
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
      styleClass="table-hover tableOne vgt-table">
        <div slot="selected-row-actions">
          <!-- <button class="btn btn-success btn-sm" @click="delete_by_selected()"> {{ $t('Save') }}</button> -->

          <button class="btn btn-success btn-sm" @click="openModel()">{{$t('Assign to Sales Rep')}}</button>

          <button class="btn btn-success btn-sm" @click="openModel()">{{$t('Show On Map')}}</button>

        </div>
        <div slot="table-actions" class="mt-2 mb-3">

          <b-button variant="outline-info m-1" size="sm" v-b-toggle.sidebar-right>
            <i class="i-Filter-2"></i>
            {{ $t("Filter") }}
          </b-button>


          <b-button
            @click="Show_import_products()"
            size="sm"
            variant="info m-1"
            v-if="currentUserPermissions && currentUserPermissions.includes('product_import')"
          >
            <i class="i-Download"></i>
            {{ $t("import_products") }}
          </b-button>


          <!-- <b-button @click="New_Map()" class="btn-rounded" variant="btn btn-primary btn-icon m-1">
            <i class="i-Add"></i>
             {{ $t('Add') }}
          </b-button> -->
        </div>

        <template slot="table-row" slot-scope="props">
          <span v-if="props.column.field == 'actions'">
            <a @click="Edit_Map(props.row)" title="Edit" v-b-tooltip.hover>
              <i class="i-Edit text-25 text-success"></i>
            </a>
            <a title="Delete" v-b-tooltip.hover @click="Delete_Map(props.row.id)">
              <i class="i-Close-Window text-25 text-danger"></i>
            </a>
          </span>
          <span v-else-if="props.column.field == 'image'">
            <b-img
              thumbnail
              height="50"
              width="50"
              fluid
              :src="'/images/maps/' + props.row.image"
              alt="image"
            ></b-img>
          </span>
        </template>
      </vue-good-table>




      <b-sidebar id="sidebar-right" :title="$t('Filter')" bg-variant="white" right shadow>
        <div class="px-3 py-2">
          <b-row>
    
    

            <!-- Category  -->
            <b-col md="12">
              <b-form-group :label="$t('Section')">
                <v-select
                  :reduce="label => label.value"
                  :placeholder="$t('Choose_Section')"
                  v-model="Filter_Sections"
                  v-on:input="handleChange"
                  :options="Sections.map(Sections => ({label: Sections , value: Sections }))"
                />
              </b-form-group>
            </b-col>


            <b-col md="12">
              <b-form-group :label="$t('Shiakha_Name')">
                <v-select
                  :reduce="label => label.value"
                  :placeholder="$t('Choose_Shiakha_Name')"
                  v-model="Filter_Shiakha_Name"
                  v-on:input="handleChange_shiakha"
                  :options="Shiakha_Name.map(Shiakha_Name => ({label: Shiakha_Name , value: Shiakha_Name }))"
                />
              </b-form-group>
            </b-col>


            
            <b-col md="12">
              <b-form-group :label="$t('type')">
                <v-select
                  :reduce="label => label.value"
                  :placeholder="$t('Choose_type')"
                  v-model="type_t"
                  :options="types.map(types => ({label: types , value: types }))"
                />
              </b-form-group>
            </b-col>

 

            <b-col md="6" sm="12">
              <b-button
                @click="GetDataMap(serverParams.page)"
                variant="primary m-1"
                size="sm"
                block
              >
                <i class="i-Filter-2"></i>
                {{ $t("Filter") }}
              </b-button>
            </b-col>

            <b-col md="6" sm="12">
              <b-button @click="Reset_Filter()" variant="danger m-1" size="sm" block>
                <i class="i-Power-2"></i>
                {{ $t("Reset") }}
              </b-button>
            </b-col>
          </b-row>
        </div>
      </b-sidebar>


    </b-card>

    <validation-observer ref="Create_map">
      <b-modal hide-footer size="md" id="New_map" :title="editmode?$t('Edit'):$t('Add')">
        <b-form @submit.prevent="Submit_Map" enctype="multipart/form-data">
          <b-row>
            <!-- Map Name -->



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
                        v-model="map.ar_name"
                      ></b-form-input>
                      <b-form-invalid-feedback id="Name-feedback">{{ validationContext.errors[0] }}</b-form-invalid-feedback>
                    </b-form-group>
                  </validation-provider>
            </b-col>

            <!-- Map -->
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
                        v-model="map.en_name"
                      ></b-form-input>
                      <b-form-invalid-feedback id="Name-feedback">{{ validationContext.errors[0] }}</b-form-invalid-feedback>
                    </b-form-group>
                  </validation-provider>
            </b-col>

            <!-- -Map Image -->
            <b-col md="12">
              <validation-provider name="Image" ref="Image" rules="mimes:image/*|size:200">
                <b-form-group slot-scope="{validate, valid, errors }" :label="$t('MapImage')">
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





            <!-- Modal Add  -->
    <validation-observer ref="Driver">
      <b-modal
        hide-footer
        size="lg"
        id="Driver"
        :title="EditPaiementMode?$t('Sales Rep'):$t('Sales Rep')"
      >
     
        <b-form @submit.prevent="save_select">
          <b-row>
 
            
 
                  <!-- Category -->
                  <b-col md="12" class="mb-2">
                  <validation-provider name="category" :rules="{ required: true}">
                    <b-form-group slot-scope="{ valid, errors }" :label="$t('Sales Rep')">
                      <v-select
                        :class="{'is-invalid': !!errors.length}"
                        :state="errors[0] ? false : (valid ? true : null)"
                        :reduce="label => label.value"
                        :placeholder="$t('Sales Rep')"
                        v-model="user_id"
                        :options="mandobs.map(mandobs => ({label: mandobs.email, value: mandobs.id}))"
                      />
                      <b-form-invalid-feedback>{{ errors[0] }}</b-form-invalid-feedback>
                    </b-form-group>
                  </validation-provider>
                </b-col>

 

                
                <b-col md="6">
            <b-form-group :label="$t('from_date')">
              <b-form-input type="date" v-model="from_date"></b-form-input>
            </b-form-group>
          </b-col>


          <b-col md="6">
            <b-form-group :label="$t('to_date')">
              <b-form-input type="date" v-model="to_date"></b-form-input>
            </b-form-group>
          </b-col>

            <b-col md="12" class="mt-3">
              <b-button
                variant="primary"
                type="submit"
              
                :disabled="subProcessing"
              >{{$t('submit')}}</b-button>
              <div v-once class="typo__p" v-if="subProcessing">
                <div class="spinner sm spinner-primary mt-3"></div>
              </div>
            </b-col>
          </b-row>
        </b-form>
      </b-modal>
    </validation-observer>


 



       <!-- Modal Show Import Products -->
      <b-modal
        ok-only
        ok-title="Cancel"
        size="md"
        id="importProducts"
        :title="$t('import_products')"
      >
        <b-form @submit.prevent="Submit_import" enctype="multipart/form-data">
          <b-row>
            <!-- File -->
            <b-col md="12" sm="12" class="mb-3">
              <b-form-group>
                <input type="file" @change="onFileSelected_map" label="Choose File">
                <b-form-invalid-feedback
                  id="File-feedback"
                  class="d-block"
                >{{$t('field_must_be_in_csv_format')}}</b-form-invalid-feedback>
              </b-form-group>
            </b-col>

             <b-col md="6" sm="12">
            <b-button type="submit" variant="primary" :disabled="ImportProcessing" size="sm" block>{{ $t("submit") }}</b-button>
              <div v-once class="typo__p" v-if="ImportProcessing">
                <div class="spinner sm spinner-primary mt-3"></div>
              </div>
          </b-col>

            <b-col md="6" sm="12">
              <b-button
                :href="'/import/exemples'"
                variant="info"
                size="sm"
                block
              >{{ $t("Download_exemple") }}</b-button>
            </b-col>

            <b-col md="12" sm="12">
              <table class="table table-bordered table-sm mt-4">
      
              </table>
            </b-col>
          </b-row>
        </b-form>
      </b-modal>
  </div>
</template>

<script>
import NProgress from 'nprogress';
import { gmapApi } from 'vue2-google-maps';

export default {
  metaInfo: {
    title: "Map"
  },
  data() {
    return {


      import_leads:"",
      Filter_Shiakha_Name: "",
      Filter_Zone_Name:"",
      Filter_street:"",
      Filter_Sections: "",
      type_t:"",
      Sections:[],
      Zone_Name:[],
      Shiakha_Name:[],
      types:[],
       ImportProcessing:false,
      isLoading: true,

      center: {lat: 30.059813, lng: 31.329825},
      
      shops_marker: [
        {
          position: {
            lat: 30.059813, lng: 31.329825
          } , showIcon: true,
        }
        , // Along list of clusters
      ],

      markers: [
        {
          position: {
            lat: 30.059813, lng: 31.329825
          } , showIcon: false,
        }
        , // Along list of clusters
      ],

      SubmitProcessing:false,
      serverParams: {
        columnFilters: {},
        sort: {
          field: "id",
          type: "desc"
        },
        page: 1,
        perPage: 100
      },
      selectedIds: [],
      user_id:0,

      totalRows: "",
      search: "",
      radius:100,
      circle: {
      center: {  lat: 30.059813, lng: 31.329825 ,  },
      radius: 100,
     
      options: {
        strokeColor: 'red',
        strokeOpacity:1.0,
        strokeWeight: 2,
        fillColor: 'red',
        fillOpacity: 0.35,
      },
    },
      // center: {  lat: 51.093048, lng: 6.842120 },
      data: new FormData(),
      editmode: false,
      maps: [],
      limit: 100,
      lat:"37.7749",
      lng:"-122.4194",
      keyword:["restaurant"],
      from_date:"",
      to_date:"",
      mandob_id:0,
      mandobs:[],
      map: {
        id: "",
        ar_name: "",
        en_name: "",
        image: ""
      }
    };
  },
  computed: {
    google: gmapApi,
    columns() {

      return [
  
        {
          label: this.$t("Point_X_Geo"),
          field: "Point_X_Geo",
          tdClass: "text-left",
          thClass: "text-left"
        },
        {
          label: this.$t("Point_Y_Geo"),
          field: "Point_Y_Geo",
          tdClass: "text-left",
          thClass: "text-left"
        },

        {
          label: this.$t("Section"),
          field: "Section",
          tdClass: "text-left",
          thClass: "text-left"
        },
        {
          label: this.$t("Shiakha_Name"),
          field: "Shiakha_Name",
          tdClass: "text-left",
          thClass: "text-left"
        },

        {
          label: this.$t("Outlet_Type"),
          field: "Outlet_Type",
          tdClass: "text-left",
          thClass: "text-left"
        },


        {
          label: this.$t("Outlet_Name"),
          field: "Outlet_Name",
          tdClass: "text-left",
          thClass: "text-left"
        },


 
        {
          label: this.$t("google_map"),
          field: "google_map",
          tdClass: "text-left",
          thClass: "text-left"
        },
        {
          label: this.$t("assinged"),
          field: "assinged",
          tdClass: "text-left",
          thClass: "text-left"
        },
 
        {
          label: this.$t("Mobile"),
          field: "Mobile",
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
  mounted() {
    // Fetch restaurant places using the Google Places API
  //  this.fetchPlaces();
  },
  methods: {

    getMarkerIcon() {
      // Customize the marker icon here
      return {
        url: 'https://cdn-icons-png.flaticon.com/512/10726/10726411.png', // Provide the path to your custom icon
        scaledSize: {width: 60, height: 60},
      };
    },


    onCircleDragEnd(event){
      // this.fetchPlaces();
    },
    handleChange(selectedValue){
      this.keyword = selectedValue;
      // this.fetchPlaces();

    },

    assign(){

    },

    openModel(){
      this.$bvModal.show("Driver");
    },

    handleRadiusChange() {
    // Add your logic here to handle the onchange event
    // circle.radius

    this.circle.radius = this.radius;

    // this.fetchPlaces();
    // console.log('Radius changed:', this.radius);
  },



    //----------------------------------------Submit  import products-----------------\\
    Submit_import() {
      // Start the progress bar.
      NProgress.start();
      NProgress.set(0.1);
      var self = this;
      self.ImportProcessing = true;
      self.data.append("leads", self.import_leads);
      axios
        .post("leads/import/csv", self.data)
        .then(response => {
          self.ImportProcessing = false;
          if (response.data.status === true) {
            this.makeToast(
              "success",
              this.$t("Successfully_Imported"),
              this.$t("Success")
            );
            Fire.$emit("Event_import");
          } else if (response.data.status === false) {
            this.makeToast(
              "danger",
              this.$t("field_must_be_in_csv_format"),
              this.$t("Failed")
            );
          }
          // Complete the animation of theprogress bar.
          NProgress.done();
        })
        .catch(error => {
          self.ImportProcessing = false;
          // Complete the animation of theprogress bar.
          NProgress.done();
          this.makeToast(
            "danger",
            this.$t("Please_follow_the_import_instructions"),
            this.$t("Failed")
          );
        });
    },


    onMarkerDrag(index, event) {
      const draggedMarker = this.markers[index];
      draggedMarker.position = {
        lat: event.latLng.lat(),
        lng: event.latLng.lng(),
      };

      // Update the circle's center when the marker is dragged
      this.circle.center = draggedMarker.position;
    },

    onCircleCenterChanged(event) {
 
      // Update the marker's position when the circle's center is changed
      const newCenter = {
        lat: event.lat(),
        lng: event.lng(),
      };
       this.markers[0].position = newCenter;


      //  this.fetchPlaces();
      // this.markers.forEach((marker) => {
      //   marker.position = newCenter;
      // });

      // Update the circle's center
      // this.circle.center = newCenter;
    },


    onCircleRadiusChanged(event) {
      // Update the circle's radius when it is changed
      // alert(55)
      // console.log(event)

      this.circle.radius = event;
      this.radius = event;
      // this.fetchPlaces();
    },

    onCircleDrag(event) {
      // Update the marker's position when the circle is dragged
      const newCenter = {
        lat: event.latLng.lat(),
        lng: event.latLng.lng(),
      };
      this.markers.forEach((marker) => {
        marker.position = newCenter;
      });

      // Update the circle's center
      this.circle.center = newCenter;
      // this.fetchPlaces();
    },
   

    GetDataMap(){
      this.fetchPlaces();
    },
    fetchPlaces() {
      // Use the Google Places API to fetch restaurant places based on the map's center
      // You need to replace 'YOUR_API_KEY' with your actual Google Places API key
      // const apiKey = 'AIzaSyDH03s8Su2fbRDr3M03PWY7-TTtGB6xCpc';
      // const radius = 10000; // Set the radius for the search in meters
 
     this.Get_Maps(1);

 
    },

    //----------------------------------- Show import products -------------------------------\\
    Show_import_products() {
      this.$bvModal.show("importProducts");
    },
    addCircleAroundMarker(markerPosition) {
    const circleOptions = {
      strokeColor: '#FF0000',
      strokeOpacity: 0.8,
      strokeWeight: 2,
      fillColor: '#FF0000',
      fillOpacity: 0.35,
      center: markerPosition,
      radius: 2, // Set the radius of the circle in meters
    };

    this.circle = circleOptions;
  },

 

  addMarkerToCurrentPosition() {
    navigator.geolocation.getCurrentPosition(
      (position) => {
        const currentPos = {
          lat: position.coords.latitude,
          lng: position.coords.longitude,
        };

        this.markers.push({
          position: currentPos,
          clickable: true,
          draggable: true,
        });

        this.addCircleAroundMarker(currentPos);

        this.center = currentPos;
      },
      (error) => {
        console.error('Error getting current position:', error);
      }
    );
  },



    //---- update Params Table
    updateParams(newProps) {
      this.serverParams = Object.assign({}, this.serverParams, newProps);
    },

    //---- Event Page Change
    onPageChange({ currentPage }) {
      if (this.serverParams.page !== currentPage) {
        this.updateParams({ page: currentPage });
        this.Get_Maps(currentPage);
      }
    },

    //---- Event Per Page Change
    onPerPageChange({ currentPerPage }) {
      if (this.limit !== currentPerPage) {
        this.limit = currentPerPage;
        this.updateParams({ page: 1, perPage: currentPerPage });
        this.Get_Maps(1);
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
      this.Get_Maps(this.serverParams.page);
    },

    //---- Event Select Rows
    selectionChanged({ selectedRows }) {
      this.selectedIds = [];
      this.shops_marker = [];
      selectedRows.forEach((row, index) => {
        // console.log(row.Point_Y_Geo);
        // console.log(row.Point_X_Geo);
        this.selectedIds.push(row.id);

    this.shops_marker.push({
    position: { lat: parseFloat(row.Point_Y_Geo) , lng: parseFloat(row.Point_X_Geo)   }, // Specify the latitude and longitude of the new marker
    showIcon: true, // You can set this to true if you want the icon to be shown
             });
      });
    },

    //---- Event on Search

    onSearch(value) {
      this.search = value.searchTerm;
      this.Get_Maps(this.serverParams.page);
    },

    //---- Validation State Form

    getValidationState({ dirty, validated, valid = null }) {
      return dirty || validated ? valid : null;
    },

    //------------- Submit Validation Create & Edit Map
    Submit_Map() {
      this.$refs.Create_map.validate().then(success => {
        if (!success) {
          this.makeToast(
            "danger",
            this.$t("Please_fill_the_form_correctly"),
            this.$t("Failed")
          );
        } else {
          if (!this.editmode) {
            this.Create_Map();
          } else {
            this.Update_Map();
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
        this.map.image = e.target.files[0];
      } else {
        this.map.image = "";
      }
    },



   onFileSelected_map(e) {
      this.import_leads = "";
      let file = e.target.files[0];
      let errorFilesize;

      if (file["size"] < 35048576) {
        // 1 mega = 1,048,576 Bytes
        errorFilesize = false;
      } else {

       this.makeToast(
          "danger",
          this.$t("file_size_must_be_less_than_1_mega"),
          this.$t("Failed")
        );

      }

      if (errorFilesize === false) {
        this.import_leads = file;
      }
    },


    //------------------------------ Modal (create Map) -------------------------------\
    New_Map() {
      this.reset_Form();
      this.editmode = false;
      this.$bvModal.show("New_map");
    },

    //------------------------------ Modal (Update Map) -------------------------------\
    Edit_Map(map) {
      this.Get_Maps(this.serverParams.page);
      this.reset_Form();
      this.map = map;
      this.editmode = true;
      this.$bvModal.show("New_map");
    },

    showInMap(){
     
      // this.shops_marker = response.data.map_items;

    },

    //---------------------------------------- Get All maps-----------------\
    // Get_Maps(page) {
    //   // Start the progress bar.
    //   console.log(this.radius)
      
    //   NProgress.start();
    //   NProgress.set(0.1);
    //   axios
    //     .get(
    //       "maps/view/data?lat=" +
    //         this.markers[0].position.lat +
    //         "&lng=" +
    //         this.markers[0].position.lng +
    //         "&radius=" +
    //         this.radius +
    //         "&keyword=" +
    //         this.keyword.join(",")
    //     )
    //     .then(response => {
    //       this.maps = response.data.maps;
    //       this.totalRows = response.data.totalRows;
    //       this.shops_marker = response.data.map_items;
    //       this.mandobs = response.data.mandobs;
    //       // Complete the animation of theprogress bar.
    //       NProgress.done();
    //       this.isLoading = false;
    //     })
    //     .catch(response => {
    //       // Complete the animation of theprogress bar.
    //       NProgress.done();
    //       setTimeout(() => {
    //         this.isLoading = false;
    //       }, 500);
    //     });
    // },

    Reset_Filter() {
      this.search = "";
      this.Filter_Sections = "";
      this.Filter_Zone_Name = "";
      this.Filter_street = "";
      this.Filter_Shiakha_Name = "";
      this.type_t = "";
      this.Get_Maps(this.serverParams.page);
    },
    Get_Maps(page) {
      // Start the progress bar.
     
      
      NProgress.start();
      NProgress.set(0.1);
      axios
        .get(
          "maps/view/data?page=" +
            page +
            "&Section=" +
            this.Filter_Sections +
            "&Outlet_Type=" +
            this.type_t +
            "&Zone_Name=" +
            this.Filter_Zone_Name +
            "&Street=" +
            this.Filter_street +
            "&Shiakha_Name=" +
            this.Filter_Shiakha_Name +
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
          this.maps = response.data.maps;
          // this.totalRows = response.data.totalRows;
          // this.shops_marker = response.data.map_items;
          // this.mandobs = response.data.mandobs;
          // Complete the animation of theprogress bar.
          //  this.shops_marker = response.data.itemMap;
           this.mandobs = response.data.mandobs;
           this.Zone_Name = response.data.Zone_Name;
          // this.Shiakha_Name = response.data.Shiakha_Name;
          // console.log(response.data.itemMap);
          this.Sections = response.data.Sections;
          this.Street = response.data.Street;
          this.totalRows = response.data.totalRows;
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

    handleChange_shiakha(e){
      axios.get(
          "maps/get_data_view_type/data?section=" +
            this.Filter_Sections 
            +
            "&Filter_Shiakha_Name=" +
            e 
        )
        .then(response => {


          this.types  = response.data.Outlet_Type;
          console.log(response.data.Outlet_Type)
          NProgress.done();
          this.isLoading = false;
        })
        .catch(response => {
          // Complete the animation of theprogress bar.
          NProgress.done();
 
        });
    },
    handleChange(e){
 
      axios.get(
          "maps/get_data_view/data?section_name=" +
            e 
        )
        .then(response => {


          this.Shiakha_Name  = response.data.Shiakha_Name;
          // this.maps = response.data.maps;
          // this.totalRows = response.data.totalRows;
          // this.shops_marker = response.data.map_items;
          // this.mandobs = response.data.mandobs;
          // Complete the animation of theprogress bar.
          //  this.shops_marker = response.data.itemMap;
          //  this.mandobs = response.data.mandobs;
          //  this.Zone_Name = response.data.Zone_Name;
          // this.Shiakha_Name = response.data.Shiakha_Name;
          // console.log(response.data.itemMap);
          // this.Sections = response.data.Sections;
          // this.Street = response.data.Street;
          // this.totalRows = response.data.totalRows;
          NProgress.done();
          this.isLoading = false;
        })
        .catch(response => {
          // Complete the animation of theprogress bar.
          NProgress.done();
          // setTimeout(() => {
          //   this.isLoading = false;
          // }, 500);
        });


    },

    //---------------------------------------- Create new map-----------------\
    Create_Map() {
      var self = this;
      self.SubmitProcessing = true;
      self.data.append("ar_name", self.map.ar_name);
      self.data.append("en_name", self.map.en_name);
      self.data.append("image", self.map.image);
      axios
        .post("maps", self.data)
        .then(response => {
          self.SubmitProcessing = false;
          Fire.$emit("Event_Map");

          this.makeToast(
            "success",
            this.$t("Create.TitleMap"),
            this.$t("Success")
          );
        })
        .catch(error => {
           self.SubmitProcessing = false;
          this.makeToast("danger", this.$t("InvalidData"), this.$t("Failed"));
        });
    },

    //---------------------------------------- Update Map-----------------\
    Update_Map() {
      var self = this;
       self.SubmitProcessing = true;
      self.data.append("en_name", self.map.en_name);
      self.data.append("ar_name", self.map.ar_name);
      self.data.append("image", self.map.image);
      self.data.append("_method", "put");

      axios
        .post("maps/" + self.map.id, self.data)
        .then(response => {
           self.SubmitProcessing = false;
          Fire.$emit("Event_Map");

          this.makeToast(
            "success",
            this.$t("Update.TitleMap"),
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
      this.map = {
        id: "",
        ar_name: "",
        en_name: "",
        image: ""
      };
      this.data = new FormData();
    },

    //---------------------------------------- Delete Map -----------------\
    Delete_Map(id) {
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
            .delete("maps/" + id)
            .then(() => {
              this.$swal(
                this.$t("Delete.Deleted"),
                this.$t("Delete.TitleMap"),
                "success"
              );

              Fire.$emit("Delete_Map");
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

    //---- Delete maps by selection


    save_select(){

   
          NProgress.start();
          NProgress.set(0.1);
          axios.post("maps/save/by_selection", {
              selectedIds: this.selectedIds ,
              user_id: this.user_id,
              from: this.from_date,
              to: this.to_date
            })
            .then(() => {
              this.$swal(
                this.$t("Success"),
                this.$t("Success Assign"),
                "success"
              );
              this.$bvModal.hide("Driver");
              NProgress.done();
              // Fire.$emit("Delete_Map");
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



    },
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
            .post("maps/delete/by_selection", {
              selectedIds: this.selectedIds
            })
            .then(() => {
              this.$swal(
                this.$t("Delete.Deleted"),
                this.$t("Delete.TitleMap"),
                "success"
              );

              Fire.$emit("Delete_Map");
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
  
    this.Get_Maps(1);

    Fire.$on("Event_Map", () => {
      setTimeout(() => {
        this.Get_Maps(this.serverParams.page);
        this.$bvModal.hide("New_map");
      }, 500);
    });

    Fire.$on("Delete_Map", () => {
      setTimeout(() => {
        this.Get_Maps(this.serverParams.page);
      }, 500);
    });
  }
};
</script>