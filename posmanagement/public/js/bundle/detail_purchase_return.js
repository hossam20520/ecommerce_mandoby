(window.webpackJsonp=window.webpackJsonp||[]).push([[27],{1110:function(t,e,s){"use strict";s.r(e);var n=s(4),a=s(0),r=s.n(a),i={computed:Object(n.c)(["currentUserPermissions","currentUser"]),metaInfo:{title:"Detail Return Purchase"},data:function(){return{isLoading:!0,purchase_return:{},details:[],company:{},email:{to:"",subject:"",message:""}}},methods:{Return_PDF:function(){var t=this;r.a.start(),r.a.set(.1);var e=this.$route.params.id;axios.get("Return_Purchase_PDF/".concat(e),{responseType:"blob",headers:{"Content-Type":"application/json"}}).then((function(e){var s=window.URL.createObjectURL(new Blob([e.data])),n=document.createElement("a");n.href=s,n.setAttribute("download","Return_Purchase_"+t.purchase_return.Ref+".pdf"),document.body.appendChild(n),n.click(),setTimeout((function(){return r.a.done()}),500)})).catch((function(){setTimeout((function(){return r.a.done()}),500)}))},print:function(){var t=document.getElementById("print_Invoice").innerHTML,e=window.open("","","height=500, width=500");e.document.write('<link rel="stylesheet" href="/assets_setup/css/bootstrap.css"><html>'),e.document.write("<body >"),e.document.write(t),e.document.write("</body></html>"),e.document.close(),e.print()},formatNumber:function(t,e){var s=("string"==typeof t?t:t.toString()).split(".");if(e<=0)return s[0];var n=s[1]||"";if(n.length>e)return"".concat(s[0],".").concat(n.substr(0,e));for(;n.length<e;)n+="0";return"".concat(s[0],".").concat(n)},Return_Email:function(){this.email.to=this.purchase_return.supplier_email,this.email.Return_Ref=this.purchase_return.Ref,this.email.supplier_name=this.purchase_return.supplier_name,this.Send_Email()},Send_Email:function(){var t=this;r.a.start(),r.a.set(.1);var e=this.$route.params.id;axios.post("returns/purchase/send/email",{id:e,to:this.email.to,client_name:this.email.supplier_name,Ref:this.email.Return_Ref}).then((function(e){setTimeout((function(){return r.a.done()}),500),t.makeToast("success",t.$t("Send.TitleEmail"),t.$t("Success"))})).catch((function(e){setTimeout((function(){return r.a.done()}),500),t.makeToast("danger",t.$t("SMTPIncorrect"),t.$t("Failed"))}))},Return_SMS:function(){var t=this;r.a.start(),r.a.set(.1);var e=this.$route.params.id;axios.post("returns/purchase/send/sms",{id:e}).then((function(e){setTimeout((function(){return r.a.done()}),500),t.makeToast("success",t.$t("Send_SMS"),t.$t("Success"))})).catch((function(e){setTimeout((function(){return r.a.done()}),500),t.makeToast("danger",t.$t("sms_config_invalid"),t.$t("Failed"))}))},makeToast:function(t,e,s){this.$root.$bvToast.toast(e,{title:s,variant:t,solid:!0})},Get_Details:function(){var t=this,e=this.$route.params.id;axios.get("returns/purchase/".concat(e)).then((function(e){t.purchase_return=e.data.purchase_return,t.details=e.data.details,t.company=e.data.company,t.isLoading=!1})).catch((function(e){setTimeout((function(){t.isLoading=!1}),500)}))},Delete_Return:function(){var t=this,e=this.$route.params.id;this.$swal({title:this.$t("Delete.Title"),text:this.$t("Delete.Text"),type:"warning",showCancelButton:!0,confirmButtonColor:"#3085d6",cancelButtonColor:"#d33",cancelButtonText:this.$t("Delete.cancelButtonText"),confirmButtonText:this.$t("Delete.confirmButtonText")}).then((function(s){s.value&&axios.delete("returns/purchase/"+e).then((function(){t.$swal(t.$t("Delete.Deleted"),t.$t("Delete.ReturnDeleted"),"success"),t.$router.push({name:"index_purchase_return"})})).catch((function(){t.$swal(t.$t("Delete.Failed"),t.$t("Delete.Therewassomethingwronge"),"warning")}))}))}},created:function(){this.Get_Details()}},c=s(2),o=Object(c.a)(i,(function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"main-content"},[s("breadcumb",{attrs:{page:t.$t("ReturnDetail"),folder:t.$t("ListReturns")}}),t._v(" "),t.isLoading?s("div",{staticClass:"loading_page spinner spinner-primary mr-3"}):t._e(),t._v(" "),t.isLoading?t._e():s("b-card",[s("b-row",[s("b-col",{staticClass:"mb-5",attrs:{md:"12"}},[t.currentUserPermissions&&t.currentUserPermissions.includes("Purchase_Returns_edit")?s("router-link",{staticClass:"btn btn-success btn-icon ripple btn-sm",attrs:{title:"Edit",to:{name:"edit_purchase_return",params:{id:t.$route.params.id}}}},[s("i",{staticClass:"i-Edit"}),t._v(" "),s("span",[t._v(t._s(t.$t("EditReturn")))])]):t._e(),t._v(" "),s("button",{staticClass:"btn btn-info btn-icon ripple btn-sm",on:{click:function(e){return t.Return_Email()}}},[s("i",{staticClass:"i-Envelope-2"}),t._v("\n          "+t._s(t.$t("Email"))+"\n        ")]),t._v(" "),s("button",{staticClass:"btn btn-info btn-icon ripple btn-sm",on:{click:function(e){return t.Return_SMS()}}},[s("i",{staticClass:"i-Speach-Bubble"}),t._v("\n          SMS\n        ")]),t._v(" "),s("button",{staticClass:"btn btn-primary btn-icon ripple btn-sm",on:{click:function(e){return t.Return_PDF()}}},[s("i",{staticClass:"i-File-TXT"}),t._v(" PDF\n        ")]),t._v(" "),s("button",{staticClass:"btn btn-warning btn-icon ripple btn-sm",on:{click:function(e){return t.print()}}},[s("i",{staticClass:"i-Billing"}),t._v("\n          "+t._s(t.$t("print"))+"\n        ")]),t._v(" "),t.currentUserPermissions&&t.currentUserPermissions.includes("Purchase_Returns_delete")?s("button",{staticClass:"btn btn-danger btn-icon ripple btn-sm",on:{click:function(e){return t.Delete_Return()}}},[s("i",{staticClass:"i-Close-Window"}),t._v("\n          "+t._s(t.$t("Del"))+"\n        ")]):t._e()],1)],1),t._v(" "),s("div",{staticClass:"invoice",attrs:{id:"print_Invoice"}},[s("div",{staticClass:"invoice-print"},[s("b-row",{staticClass:"justify-content-md-center"},[s("h4",{staticClass:"font-weight-bold"},[t._v(t._s(t.$t("ReturnDetail"))+" : "+t._s(t.purchase_return.Ref))])]),t._v(" "),s("hr"),t._v(" "),s("b-row",{staticClass:"mt-5"},[s("b-col",{staticClass:"mb-4",attrs:{lg:"4",md:"4",sm:"12"}},[s("h5",{staticClass:"font-weight-bold"},[t._v(t._s(t.$t("Supplier_Info")))]),t._v(" "),s("div",[t._v(t._s(t.purchase_return.supplier_name))]),t._v(" "),s("div",[t._v(t._s(t.purchase_return.supplier_email))]),t._v(" "),s("div",[t._v(t._s(t.purchase_return.supplier_phone))]),t._v(" "),s("div",[t._v(t._s(t.purchase_return.supplier_adr))])]),t._v(" "),s("b-col",{staticClass:"mb-4",attrs:{lg:"4",md:"4",sm:"12"}},[s("h5",{staticClass:"font-weight-bold"},[t._v(t._s(t.$t("Company_Info")))]),t._v(" "),s("div",[t._v(t._s(t.company.CompanyName))]),t._v(" "),s("div",[t._v(t._s(t.company.email))]),t._v(" "),s("div",[t._v(t._s(t.company.CompanyPhone))]),t._v(" "),s("div",[t._v(t._s(t.company.CompanyAdress))])]),t._v(" "),s("b-col",{staticClass:"mb-4",attrs:{lg:"4",md:"4",sm:"12"}},[s("h5",{staticClass:"font-weight-bold"},[t._v(t._s(t.$t("Return_Info")))]),t._v(" "),s("div",[t._v(t._s(t.$t("Reference"))+" : "+t._s(t.purchase_return.Ref))]),t._v(" "),s("div",[t._v("\n              "+t._s(t.$t("Status"))+" :\n              "),"completed"==t.purchase_return.statut?s("span",{staticClass:"badge badge-outline-success"},[t._v(t._s(t.$t("complete")))]):s("span",{staticClass:"badge badge-outline-warning"},[t._v(t._s(t.$t("Pending")))])]),t._v(" "),s("div",[t._v(t._s(t.$t("warehouse"))+" : "+t._s(t.purchase_return.warehouse))]),t._v(" "),s("div",[t._v("\n              "+t._s(t.$t("PaymentStatus"))+" :\n              "),"paid"==t.purchase_return.payment_status?s("span",{staticClass:"badge badge-outline-success"},[t._v(t._s(t.$t("Paid")))]):"partial"==t.purchase_return.payment_status?s("span",{staticClass:"badge badge-outline-info"},[t._v(t._s(t.$t("partial")))]):s("span",{staticClass:"badge badge-outline-warning"},[t._v(t._s(t.$t("Unpaid")))])])])],1),t._v(" "),s("b-row",{staticClass:"mt-3"},[s("b-col",{attrs:{md:"12"}},[s("h5",{staticClass:"font-weight-bold"},[t._v(t._s(t.$t("Order_Summary")))]),t._v(" "),s("div",{staticClass:"table-responsive"},[s("table",{staticClass:"table table-hover table-md"},[s("thead",{staticClass:"bg-gray-300"},[s("tr",[s("th",{attrs:{scope:"col"}},[t._v(t._s(t.$t("ProductName")))]),t._v(" "),s("th",{attrs:{scope:"col"}},[t._v(t._s(t.$t("Net_Unit_Cost")))]),t._v(" "),s("th",{attrs:{scope:"col"}},[t._v(t._s(t.$t("Quantity")))]),t._v(" "),s("th",{attrs:{scope:"col"}},[t._v(t._s(t.$t("Unitcost")))]),t._v(" "),s("th",{attrs:{scope:"col"}},[t._v(t._s(t.$t("Discount")))]),t._v(" "),s("th",{attrs:{scope:"col"}},[t._v(t._s(t.$t("Tax")))]),t._v(" "),s("th",{attrs:{scope:"col"}},[t._v(t._s(t.$t("SubTotal")))])])]),t._v(" "),s("tbody",t._l(t.details,(function(e){return s("tr",[s("td",[t._v(t._s(e.code)+" ("+t._s(e.name)+")")]),t._v(" "),s("td",[t._v(t._s(t.currentUser.currency)+" "+t._s(t.formatNumber(e.Net_cost,3)))]),t._v(" "),s("td",[t._v(t._s(t.formatNumber(e.quantity,2))+" "+t._s(e.unit_purchase))]),t._v(" "),s("td",[t._v(t._s(t.currentUser.currency)+" "+t._s(t.formatNumber(e.cost,2)))]),t._v(" "),s("td",[t._v(t._s(t.currentUser.currency)+" "+t._s(t.formatNumber(e.DiscountNet,2)))]),t._v(" "),s("td",[t._v(t._s(t.currentUser.currency)+" "+t._s(t.formatNumber(e.taxe,2)))]),t._v(" "),s("td",[t._v(t._s(t.currentUser.currency)+" "+t._s(e.total.toFixed(2)))])])})),0)])])]),t._v(" "),s("div",{staticClass:"offset-md-9 col-md-3 mt-4"},[s("table",{staticClass:"table table-striped table-sm"},[s("tbody",[s("tr",[s("td",[s("span",[t._v(t._s(t.$t("OrderTax")))])]),t._v(" "),s("td",[s("span",[t._v(t._s(t.currentUser.currency)+" "+t._s(t.purchase_return.TaxNet.toFixed(2))+" ("+t._s(t.formatNumber(t.purchase_return.tax_rate,2))+" %)")])])]),t._v(" "),s("tr",[s("td",[s("span",[t._v(t._s(t.$t("Discount")))])]),t._v(" "),s("td",[s("span",[t._v(t._s(t.currentUser.currency)+" "+t._s(t.purchase_return.discount.toFixed(2)))])])]),t._v(" "),s("tr",[s("td",[s("span",[t._v(t._s(t.$t("Shipping")))])]),t._v(" "),s("td",[s("span",[t._v(t._s(t.currentUser.currency)+" "+t._s(t.purchase_return.shipping.toFixed(2)))])])]),t._v(" "),s("tr",[s("td",[s("span",{staticClass:"font-weight-bold"},[t._v(t._s(t.$t("Total")))])]),t._v(" "),s("td",[s("span",{staticClass:"font-weight-bold"},[t._v(t._s(t.currentUser.currency)+" "+t._s(t.purchase_return.GrandTotal))])])]),t._v(" "),s("tr",[s("td",[s("span",{staticClass:"font-weight-bold"},[t._v(t._s(t.$t("Paid")))])]),t._v(" "),s("td",[s("span",{staticClass:"font-weight-bold"},[t._v(t._s(t.currentUser.currency)+" "+t._s(t.purchase_return.paid_amount))])])]),t._v(" "),s("tr",[s("td",[s("span",{staticClass:"font-weight-bold"},[t._v(t._s(t.$t("Due")))])]),t._v(" "),s("td",[s("span",{staticClass:"font-weight-bold"},[t._v(t._s(t.currentUser.currency)+" "+t._s(t.purchase_return.due))])])])])])])],1)],1)])],1)],1)}),[],!1,null,null,null);e.default=o.exports}}]);