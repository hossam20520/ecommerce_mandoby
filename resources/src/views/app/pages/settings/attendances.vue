
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
        
          :icon="m.showIcon ? getMarkerIcon() : null"
         
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









    <breadcumb :page="$t('Attendance')" :folder="$t('Settings')"/>

    <div v-if="isLoading" class="loading_page spinner spinner-primary mr-3"></div>
    <b-card class="wrapper" v-if="!isLoading">
      <vue-good-table
        mode="remote"
        :columns="columns"
        :totalRows="totalRows"
        :rows="attendances"
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
          <!-- <button class="btn btn-danger btn-sm" @click="delete_by_selected()"> {{ $t('Del') }}</button> -->
        </div>
        <div slot="table-actions" class="mt-2 mb-3">
 
           <b-button variant="outline-info m-1" size="sm" v-b-toggle.sidebar-right>
            <i class="i-Filter-2"></i>
            {{ $t("Filter") }}
          </b-button>

        </div>

        <template slot="table-row" slot-scope="props">
          <span v-if="props.column.field == 'actions'">
            <!-- <a @click="Edit_Attendance(props.row)" title="Edit" v-b-tooltip.hover>
              <i class="i-Edit text-25 text-success"></i>
            </a>
            <a title="Delete" v-b-tooltip.hover @click="Delete_Attendance(props.row.id)">
              <i class="i-Close-Window text-25 text-danger"></i>
            </a> -->
          </span>
          <span v-else-if="props.column.field == 'status'">
            
            
            <b-img v-if="props.row.status == 'LOGEDIN'"
              thumbnail
              height="20"
              width="20"
              fluid
              
               src="/green.png"
               
              alt="image"
            ></b-img>
       <b-img v-else  
              thumbnail
              height="20"
              width="20"
              fluid
              
               src="/read_image.png"
               
              alt="image"
            ></b-img>
 <!-- src="/read_image.png" -->
          </span>
        </template>
      </vue-good-table>
    </b-card>

    <validation-observer ref="Create_attendance">
      <b-modal hide-footer size="md" id="New_attendance" :title="editmode?$t('Edit'):$t('Add')">
        <b-form @submit.prevent="Submit_Attendance" enctype="multipart/form-data">
          <b-row>
            <!-- Attendance Name -->



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
                        v-model="attendance.ar_name"
                      ></b-form-input>
                      <b-form-invalid-feedback id="Name-feedback">{{ validationContext.errors[0] }}</b-form-invalid-feedback>
                    </b-form-group>
                  </validation-provider>
            </b-col>

            <!-- Attendance -->
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
                        v-model="attendance.en_name"
                      ></b-form-input>
                      <b-form-invalid-feedback id="Name-feedback">{{ validationContext.errors[0] }}</b-form-invalid-feedback>
                    </b-form-group>
                  </validation-provider>
            </b-col>

            <!-- -Attendance Image -->
            <b-col md="12">
              <validation-provider name="Image" ref="Image" rules="mimes:image/*|size:200">
                <b-form-group slot-scope="{validate, valid, errors }" :label="$t('AttendanceImage')">
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



      <b-sidebar id="sidebar-right" :title="$t('Filter')" bg-variant="white" right shadow>
        <div class="px-3 py-2">
          <b-row>
    
    

            <!-- Category  -->
            <b-col md="12">
              <b-form-group :label="$t('User')">
                <v-select
                  :reduce="label => label.value"
                  :placeholder="$t('Choose_User')"
                  v-model="Filter_Sections"
                  v-on:input="handleChange"
                  :options="users.map(users => ({label: users.email , value: users.id }))"
                />
              </b-form-group>
            </b-col>
 
 


           <!-- date  -->
          <b-col md="12">
            <b-form-group :label="$t('date')">
              <b-form-input type="date" v-model="Filter_date"></b-form-input>
            </b-form-group>
          </b-col>


                <!-- Tax Method -->
               <b-col md="12">
         
                    <b-form-group   :label="$t('Status')">
                      <v-select
                  
                   
                        v-model="Filter_status"
                        :reduce="label => label.value"
                        :placeholder="$t('Choose_Status')"
                        :options="
                           [
                            {label: 'LOGEDIN', value: 'LOGEDIN'},
                            {label: 'LOGEDOUT', value: 'LOGEDOUT'}
                           ]"
                      ></v-select>
                  
                    </b-form-group>
           
                </b-col>



             <!-- Tax Method -->
               <b-col md="12">
         
                    <b-form-group   :label="$t('Application_type')">
                      <v-select
                        v-model="Filter_application"
                        :reduce="label => label.value"
                        :placeholder="$t('Application_type')"
                        :options="
                           [
                            {label: 'SURVEY', value: 'SURVEY'},
                            {label: 'DELIVERY', value: 'DELIVERY'}
                           ]"
                      ></v-select>
                  
                    </b-form-group>
           
                </b-col>










            <b-col md="6" sm="12">
              <b-button
                @click="GetData(serverParams.page)"
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


          <row> 
       <button @click="print_product()" class="btn btn-outline-primary">
          <i class="i-Billing"></i>
          {{$t('print')}}
        </button>
           </row>
        </div>
      </b-sidebar>


 <!-- style="display:none;" -->
      <b-row id="print_product" >
          <b-col md="12" class="mb-5">
          <center>    <h2>   تقارير الحضور والانصراف </h2>  </center>
 
          </b-col>


          
<table style="width:100%; border:1px solid; border-collapse: collapse;">
  <thead>
    <tr>
    
 
    <th>   الابلكيشن </th>
    <th>   وقت الانصراف  </th>
    <th>  تاريخ الانصراف </th>
    <th> وقت الحضور  </th>
    <th>تاريخ الحضور</th>
    <th>رقم الهاتف</th>
    <th>الاسم</th>

    </tr>
  </thead>
  <tbody>
 
 

<!-- attendances -->

    <tr v-for="(attendance, index) in attendances" :key="index">
        <td style="text-align: right;border: 1px solid #dddddd;">   {{ attendance.type }}  </td>
        <td style="text-align: right;border: 1px solid #dddddd;">   {{ attendance.date }}  </td>
        <td style="text-align: right;border: 1px solid #dddddd;"> {{ attendance.time }} </td>
        <td style="text-align: right;border: 1px solid #dddddd;"> {{ attendance.time }} </td>
        <td style="text-align: right;border: 1px solid #dddddd;"> {{ attendance.date }}  </td>
        <td style="text-align: right;border: 1px solid #dddddd;"> {{ attendance.user.phone }} </td>
        <td style="text-align: right;border: 1px solid #dddddd;"> {{ attendance.user.firstname }} </td>
    </tr>



  </tbody>
</table>

          </b-row> 
 
  </div>
</template>

<script>
import NProgress from "nprogress";

export default {
  metaInfo: {
    title: "Attendance"
  },
  data() {
    return {
      isLoading: true,
         Filter_Sections: "",
         Filter_date:"",
         Filter_status:"",
         Filter_application:"",



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
      SubmitProcessing:false,
      user_id:"",
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
      attendances: [],
      limit: "10",
      attendance: {
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
          label: this.$t("email"),
          field: "user.email",
          tdClass: "text-left",
          thClass: "text-left"
        },
 
        {
          label: this.$t("phone"),
          field: "user.phone",
          tdClass: "text-left",
          thClass: "text-left"
        },

        {
          label: this.$t("type"),
          field: "type",
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
          label: this.$t("date"),
          field: "date",
          tdClass: "text-left",
          thClass: "text-left"
        },

          {
          label: this.$t("time"),
          field: "time",
          tdClass: "text-left",
          thClass: "text-left"
        },
      //  {
      //     label: this.$t("date"),
      //     field: "date",
      //     tdClass: "text-left",
      //     thClass: "text-left"
      //   },


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


test_try(){
  const data = this.attendances;

// Object to store combined data
const combinedData = {};

// Loop through the data
data.forEach(entry => {
  const key = entry.phone; // Use phone number as the key
  if (!combinedData[key]) {
    // If the key doesn't exist in the combined data object, create it
    combinedData[key] = {
      name: entry.name,
      phone: entry.phone,
      loggedIn: { date: "", time: "" },
      loggedOut: { date: "", time: "" }
    };
  }

  // Check the status and assign the date and time accordingly
  if (entry.status === "LOGEDIN") {
    combinedData[key].loggedIn.date = entry.date;
    combinedData[key].loggedIn.time = entry.time;
  } else if (entry.status === "LOGEDOUT") {
    combinedData[key].loggedOut.date = entry.date;
    combinedData[key].loggedOut.time = entry.time;
  }
});

// Convert the combined data object into an array of objects
const combinedArray = Object.values(combinedData);

// Print the result
// console.log(combinedArray);
 return combinedArray;

},


  print_product() {
      var divContents = document.getElementById("print_product").innerHTML;
      var a = window.open("", "", "height=500, width=500");
      a.document.write(
        '<link rel="stylesheet" href="/assets_setup/css/bootstrap.css"><html>'
      );
      a.document.write("<body >");
      a.document.write(divContents);
      a.document.write("</body></html>");
      a.document.close();
      a.print();
    },

    Reset_Filter() {
      this.search = "";
      this.Filter_date = "";
      this.Filter_status = "";
      this.Filter_application = "";
      // this.Filter_Sections = "";
      // this.Filter_Zone_Name = "";
      // this.Filter_street = "";
      // this.Filter_Shiakha_Name = "";
      this.user_id = "";
      this.Get_Attendances(this.serverParams.page);
    },
 
    GetData(){
     this.Get_Attendances(1);
    },
   
    onCircleDragEnd(event){
      // this.fetchPlaces();
    },
 handleChange(selectedValue){
       this.user_id = selectedValue;
      // this.fetchPlaces();

 },
    handleRadiusChange() {
    // Add your logic here to handle the onchange event
    // circle.radius

    this.circle.radius = this.radius;

    // this.fetchPlaces();
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

    //---- update Params Table
    updateParams(newProps) {
      this.serverParams = Object.assign({}, this.serverParams, newProps);
    },

    //---- Event Page Change
    onPageChange({ currentPage }) {
      if (this.serverParams.page !== currentPage) {
        this.updateParams({ page: currentPage });
        this.Get_Attendances(currentPage);
      }
    },

    //---- Event Per Page Change
    onPerPageChange({ currentPerPage }) {
      if (this.limit !== currentPerPage) {
        this.limit = currentPerPage;
        this.updateParams({ page: 1, perPage: currentPerPage });
        this.Get_Attendances(1);
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
      this.Get_Attendances(this.serverParams.page);
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
      this.Get_Attendances(this.serverParams.page);
    },

    //---- Validation State Form

    getValidationState({ dirty, validated, valid = null }) {
      return dirty || validated ? valid : null;
    },

    //------------- Submit Validation Create & Edit Attendance
    Submit_Attendance() {
      this.$refs.Create_attendance.validate().then(success => {
        if (!success) {
          this.makeToast(
            "danger",
            this.$t("Please_fill_the_form_correctly"),
            this.$t("Failed")
          );
        } else {
          if (!this.editmode) {
            this.Create_Attendance();
          } else {
            this.Update_Attendance();
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
        this.attendance.image = e.target.files[0];
      } else {
        this.attendance.image = "";
      }
    },

    //------------------------------ Modal (create Attendance) -------------------------------\
    New_Attendance() {
      this.reset_Form();
      this.editmode = false;
      this.$bvModal.show("New_attendance");
    },

    //------------------------------ Modal (Update Attendance) -------------------------------\
    Edit_Attendance(attendance) {
      this.Get_Attendances(this.serverParams.page);
      this.reset_Form();
      this.attendance = attendance;
      this.editmode = true;
      this.$bvModal.show("New_attendance");
    },

    //---------------------------------------- Get All attendances-----------------\
    Get_Attendances(page) {
      // Start the progress bar.
      NProgress.start();
      NProgress.set(0.1);
      axios
        .get(
          "attendances?page=" +
            page +
            "&SortField=" +
            this.serverParams.sort.field +
            "&SortType=" +
            this.serverParams.sort.type +
            "&search=" +
            this.search +
            "&limit=" +
            this.limit +
           "&user_id=" +
            this.user_id+
             "&date=" +
            this.formattedDate() +
              
             "&status=" +
             this.Filter_status+
             "&type=" + 
             this.Filter_application 
            
        )
        .then(response => {
          console.log(this.formattedDate());
          this.attendances = response.data.attendances;
          this.users = response.data.users;
          this.totalRows = response.data.totalRows;

          // console.log(response.data.attend);
          this.test_try();
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


     formattedDate() {

      if(this.Filter_date == ""){
        return "";
      }else{
       const d = new Date(this.Filter_date);
      const day = d.getDate() < 10 ? '0' + d.getDate() : d.getDate();
      const month = d.getMonth() + 1; // Month is zero-based, so we add 1
      const year = d.getFullYear();
      return `${day}-${month}-${year}`;
      }
 
    },



    

    //---------------------------------------- Create new attendance-----------------\
    Create_Attendance() {
      var self = this;
      self.SubmitProcessing = true;
      self.data.append("ar_name", self.attendance.ar_name);
      self.data.append("en_name", self.attendance.en_name);
      self.data.append("image", self.attendance.image);
      axios
        .post("attendances", self.data)
        .then(response => {
          self.SubmitProcessing = false;
          Fire.$emit("Event_Attendance");

          this.makeToast(
            "success",
            this.$t("Create.TitleAttendance"),
            this.$t("Success")
          );
        })
        .catch(error => {
           self.SubmitProcessing = false;
          this.makeToast("danger", this.$t("InvalidData"), this.$t("Failed"));
        });
    },

    //---------------------------------------- Update Attendance-----------------\
    Update_Attendance() {
      var self = this;
       self.SubmitProcessing = true;
      self.data.append("en_name", self.attendance.en_name);
      self.data.append("ar_name", self.attendance.ar_name);
      self.data.append("image", self.attendance.image);
      self.data.append("_method", "put");

      axios
        .post("attendances/" + self.attendance.id, self.data)
        .then(response => {
           self.SubmitProcessing = false;
          Fire.$emit("Event_Attendance");

          this.makeToast(
            "success",
            this.$t("Update.TitleAttendance"),
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
      this.attendance = {
        id: "",
        ar_name: "",
        en_name: "",
        image: ""
      };
      this.data = new FormData();
    },

    //---------------------------------------- Delete Attendance -----------------\
    Delete_Attendance(id) {
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
            .delete("attendances/" + id)
            .then(() => {
              this.$swal(
                this.$t("Delete.Deleted"),
                this.$t("Delete.TitleAttendance"),
                "success"
              );

              Fire.$emit("Delete_Attendance");
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

    //---- Delete attendances by selection

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
            .post("attendances/delete/by_selection", {
              selectedIds: this.selectedIds
            })
            .then(() => {
              this.$swal(
                this.$t("Delete.Deleted"),
                this.$t("Delete.TitleAttendance"),
                "success"
              );

              Fire.$emit("Delete_Attendance");
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
    this.Get_Attendances(1);

    Fire.$on("Event_Attendance", () => {
      setTimeout(() => {
        this.Get_Attendances(this.serverParams.page);
        this.$bvModal.hide("New_attendance");
      }, 500);
    });

    Fire.$on("Delete_Attendance", () => {
      setTimeout(() => {
        this.Get_Attendances(this.serverParams.page);
      }, 500);
    });
  }
};
</script>


<style>
@media print {
  #print_product {
    display: flex;
    justify-content: center;
  }
}
</style>