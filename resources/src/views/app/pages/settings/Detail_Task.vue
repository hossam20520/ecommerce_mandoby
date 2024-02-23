
<template>
  <div class="main-content">
    <breadcumb :page="$t('TaskDetails')" :folder="$t('Tasks')"/>
    <div v-if="isLoading" class="loading_page spinner spinner-primary mr-3"></div>

    <b-card no-body v-if="!isLoading">
      <b-card-header>
        <!-- <button @click="print_task()" class="btn btn-outline-primary">
          <i class="i-Billing"></i>
          {{  $t('print') }}
        </button> -->
      </b-card-header>
      <b-card-body>
        <b-row id="print_task">
  

          <b-col md="12">
            <table class="table table-hover table-bordered table-md">
              <tbody>
                <tr>
                  <td>  "اسم العميل" </td>
                  <th> {{  task.survey.name  }}</th>
                </tr>


                <tr>
                  <td>  "المدينة" </td>
                  <th> {{  task.survey.city  }}</th>
                </tr>


                <tr>
                  <td> "المنطقة" </td>
                  <th> {{  task.survey.area  }}</th>
                </tr>

                <tr>
                  <td> "هل قابلت الشخص المسؤل" </td>
                  <th> {{  task.survey.DIDMeatResponsiblePerson  }}</th>
                </tr>
                <tr>
                  <td>  "اسم المسؤل"  </td>
                  <th> {{  task.survey.NameResponsible  }}</th>
                </tr>
                <tr>
                  <td> "رقم التليفون" </td>
                  <th> {{  task.survey.Phone  }}</th>
                </tr>
                <tr>
                  <td>  "نوع النشاط" </td>
                  <th> {{  task.survey.activityType  }}</th>
                </tr>
                <tr>
                  <td> "عنوان الإدارة"</td>
                  <th> {{  task.survey.address_Detail  }}</th>
                </tr>
                <tr>
                  <td>  "عنوان التوصيل" </td>
                  <th> {{  task.survey.delevery_detail  }}</th>
                </tr>
                <tr>
                  <td>  "سبب االمكالمة" </td>
                  <th> {{  task.survey.reason_call  }}</th>
                </tr>
                <tr>
                  <td>   "هل يستخدم ابلكيشن للطلب" </td>
                  <th> {{  task.survey.usingApplication  }}</th>
                </tr>
                <tr>
                  <td>  "اللبن المستخدم" </td>
                  <th> {{  task.survey.milkused  }}</th>
                </tr>
                <tr>
                  <td>  "الكريمة المستخدمة" </td>
                  <th> {{  task.survey.kreemUsed  }}</th>
                </tr>
                <tr>
                  <td> "التوابل المستخدمة"</td>
                  <th> {{  task.survey.spices  }}</th>
                </tr>

                <tr>
                  <td>"الجبن المستخدمة" </td>
                  <th> {{  task.survey.cheeseUsed  }}</th>
                </tr>
                <tr>
                  <td>  "الذبدة المستخدمة" </td>
                  <th> {{  task.survey.SelectedBatter  }}</th>
                </tr>
                <tr>
                  <td>  "الزيوت المستخدمة" </td>
                  <th> {{  task.survey.oilUsed  }}</th>
                </tr>
                <tr>
                  <td> "الشاى المستخدم" </td>
                  <th> {{  task.survey.teaused  }}</th>
                </tr>
                <tr>
                  <td>  "ارز و بقوليات" </td>
                  <th> {{  task.survey.seeeds  }}</th>
                </tr>
                <tr>
                  <td> "الصوصات المستخدمة" </td>
                  <th> {{  task.survey.sauce  }}</th>
                </tr>


                <tr>
                  <td>  "الشركة المنتجة للصوصات" </td>
                  <th> {{  task.survey.sauceCompany  }}</th>
                </tr>
                <tr>
                  <td> "المشروبات الغازية المستخدمة" </td>
                  <th> {{  task.survey.watergasused  }}</th>
                </tr>
                <tr>
                  <td> " المكرونة المستخدمة" </td>
                  <th> {{  task.survey.pastaUsed  }}</th>
                </tr>
                <tr>
                  <td>  "البن المستخدم" </td>
                  <th> {{  task.survey.bonUsed  }}</th>
                </tr>
                <tr>
                  <td> "عدد فروع العميل" </td>
                  <th> {{  task.survey.branchNumber  }}</th>
                </tr>
                <tr>
                  <td>  "ملخص الزيارة" </td>
                  <th> {{  task.survey.summryVisit  }}</th>
                </tr>
                <tr>
                  <td> {{   "منتجات اخرى يستخدمها العميل"  }}</td>
                  <th> {{  task.survey.productUsesClient  }}</th>
                </tr>
         
 
              </tbody>
            </table>
          </b-col>
          <b-col md="4" class="mb-30">
            <div class="carousel_wrap">
              <b-carousel
                id="carousel-1"
                :interval="2000"
                controls
                background="#ababab"
                img-width="1024"
                img-height="480"
                @sliding-start="onSlideStart"
                @sliding-end="onSlideEnd">

                
                <b-carousel-slide
                  v-for="(image, index) in task.images"
                  :key="index"
                  :img-src="'/images/tasks/'+image"
                ></b-carousel-slide>
              </b-carousel>
            </div>
          </b-col>

          <!-- Warehouse Quantity -->
          <b-col md="5" class="mt-4">
            <table class="table table-hover table-sm">
          
     
            </table>
          </b-col>
          <!-- Warehouse Variants Quantity -->
  
        </b-row>
      </b-card-body>
    </b-card>
  </div>
</template>


<script>
import VueBarcode from 'vue-barcode';
import {
  mapActions,
  mapGetters,
} from 'vuex';

export default {
  metaInfo: {
    title: "Detail Task"
  },
  components: {
    barcode: VueBarcode
  },

  data() {
    return {
      len: 8,
      images: [],
      imageArray: [],
      isLoading: true,
      task: {},
      roles: {},
      variants: []
    };
  },
  computed: {
    ...mapGetters(["currentUser"])
  },

  methods: {
    //------- printtask
    print_task() {
      var divContents = document.getElementById("print_task").innerHTML;
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

    //------------------------------Formetted Numbers -------------------------\
    formatNumber(number, dec) {
      const value = (typeof number === "string"
        ? number
        : number.toString()
      ).split(".");
      if (dec <= 0) return value[0];
      let formated = value[1] || "";
      if (formated.length > dec)
        return `${value[0]}.${formated.substr(0, dec)}`;
      while (formated.length < dec) formated += "0";
      return `${value[0]}.${formated}`;
    },

    //----------------------------------- Get Details Task ------------------------------\
    showDetails() {
      let id = this.$route.params.id;
      axios
        .get(`Tasks/Detail/${id}`)
        .then(response => {
          this.task = response.data;
          this.isLoading = false;
        })
        .catch(response => {
          setTimeout(() => {
            this.isLoading = false;
          }, 500);
        });
    }
  }, //end Methods

  //-----------------------------Created function-------------------

  created: function() {
    this.showDetails();
  }
};
</script>