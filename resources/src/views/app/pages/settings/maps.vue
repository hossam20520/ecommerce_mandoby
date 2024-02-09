
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
          :clickable="true"
          :draggable="true"
          :icon="m.showIcon ? getMarkerIcon() : null"
          
        
  />

  
  <GmapMarker
          :key="index"
          v-for="(m, index) in markers"
          :position="m.position"
          :clickable="true"
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


<b-form @submit.prevent="Submit_Product" enctype="multipart/form-data">
        <b-row>
          <b-col md="8">
            <b-card>
              <b-row>
   
    
                <!-- Tax Method -->
                <b-col lg="6" md="6" sm="12" class="mb-2">
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
                </b-col>



          
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
                </b-col>

    



          
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


    <breadcumb :page="$t('Map')" :folder="$t('Settings')"/>

 


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
        styleClass="table-hover tableOne vgt-table"
      >
        <div slot="selected-row-actions">
          <button class="btn btn-danger btn-sm" @click="delete_by_selected()"> {{ $t('Del') }}</button>

          <button class="btn btn-success btn-sm" @click="openModel()">{{$t('assign_to_mandob')}}</button>
        </div>
        <div slot="table-actions" class="mt-2 mb-3">
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





            <!-- Modal Add Payment-->
            <validation-observer ref="Driver">
      <b-modal
        hide-footer
        size="lg"
        id="Driver"
        :title="EditPaiementMode?$t('Driver'):$t('Driver')"
      >
        <b-form @submit.prevent="Submit_Payment">
          <b-row>
 
            
 
                  <!-- Category -->
                  <b-col md="12" class="mb-2">
                  <validation-provider name="category" :rules="{ required: true}">
                    <b-form-group slot-scope="{ valid, errors }" :label="$t('Mandobs')">
                      <v-select
                        :class="{'is-invalid': !!errors.length}"
                        :state="errors[0] ? false : (valid ? true : null)"
                        :reduce="label => label.value"
                        :placeholder="$t('Mandobs')"
                        v-model="mandob_id"
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
        perPage: 500
      },
      selectedIds: [],
      totalRows: "",
      search: "",
      radius:10000,
      circle: {
      center: {  lat: 30.059813, lng: 31.329825 ,  },
      radius: 10000,
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
      limit: "10",
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
          label: this.$t("name"),
          field: "name",
          tdClass: "text-left",
          thClass: "text-left"
        },
        {
          label: this.$t("lat"),
          field: "lat",
          tdClass: "text-left",
          thClass: "text-left"
        },

        {
          label: this.$t("lng"),
          field: "lng",
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
  mounted() {
    // Fetch restaurant places using the Google Places API
   this.fetchPlaces();
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
      this.fetchPlaces();
    },
    handleChange(selectedValue){
      this.keyword = selectedValue;
      this.fetchPlaces();

    },


    openModel(){
      this.$bvModal.show("Driver");
    },

    handleRadiusChange() {
    // Add your logic here to handle the onchange event
    // circle.radius

    this.circle.radius = this.radius;

    this.fetchPlaces();
    // console.log('Radius changed:', this.radius);
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
   

    fetchPlaces() {
      // Use the Google Places API to fetch restaurant places based on the map's center
      // You need to replace 'YOUR_API_KEY' with your actual Google Places API key
      // const apiKey = 'AIzaSyDH03s8Su2fbRDr3M03PWY7-TTtGB6xCpc';
      // const radius = 10000; // Set the radius for the search in meters
 
     this.Get_Maps(1);

 
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
      selectedRows.forEach((row, index) => {
        this.selectedIds.push(row.id);
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

    //---------------------------------------- Get All maps-----------------\
    Get_Maps(page) {
      // Start the progress bar.
      console.log(this.keyword)
      
      NProgress.start();
      NProgress.set(0.1);
      axios
        .get(
          "maps/view/data?lat=" +
            this.markers[0].position.lat +
            "&lng=" +
            this.markers[0].position.lng +
            "&radius=" +
            this.radius +
            "&keyword=" +
            this.keyword.join(",")
        )
        .then(response => {
          this.maps = response.data.maps;
          this.totalRows = response.data.totalRows;
          this.shops_marker = response.data.map_items;
          this.mandobs = response.data.mandobs;
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