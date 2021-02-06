(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-ac1f6846"],{"2a4d":function(e,t,o){},"830c":function(e,t,o){"use strict";var r=o("e7c8"),s=o.n(r);s.a},a341:function(e,t,o){"use strict";var r=o("2a4d"),s=o.n(r);s.a},bb00:function(e,t,o){"use strict";o.r(t);var r=function(){var e=this,t=e.$createElement,o=e._self._c||t;return o("div",[o("PredictCom1",{attrs:{url:"/sampling"}})],1)},s=[],i=function(){var e=this,t=e.$createElement,o=e._self._c||t;return o("div",{staticClass:"predictcom1"},[o("el-form",{ref:"form",staticClass:"demo-form",attrs:{"label-position":e.labelPosition,model:e.form,"status-icon":"",rules:e.rules,"label-width":"120px"}},[1==e.hackReset?o("iframe",{ref:"iframe",attrs:{src:e.src,id:"myiframe",width:"700px",height:"750px",frameborder:"”0”",border:"”0″",marginwidth:"”0″",marginheight:"”0″",scrolling:"no",prop:"demo"}}):e._e(),o("el-form-item",{attrs:{label:"firstSmiles",prop:"firstsmi"}},[o("el-input",{attrs:{id:"first",value:"form.firstsmi",placeholder:"Please enter the first smiles"},model:{value:e.form.firstsmi,callback:function(t){e.$set(e.form,"firstsmi",t)},expression:"form.firstsmi"}}),e._v(" "),o("el-button",{attrs:{type:"primary",id:"but1"},on:{click:function(t){return e.getSmiles("first")}}},[e._v("first smiles")])],1),o("el-form-item",{attrs:{label:"secondSmiles",prop:"secondsmi"}},[o("el-input",{attrs:{id:"second",value:"form.secondsmi",placeholder:"Please enter the second smiles"},model:{value:e.form.secondsmi,callback:function(t){e.$set(e.form,"secondsmi",t)},expression:"form.secondsmi"}}),e._v(" "),o("el-button",{attrs:{type:"primary",id:"but2"},on:{click:function(t){return e.getSmiles("second")}}},[e._v("second smiles")])],1),o("el-form-item",{attrs:{label:"length range",prop:"minlen"}},[o("el-tooltip",{attrs:{placement:"top"}},[o("div",{attrs:{slot:"content"},slot:"content"},[e._v("Length of fragment")]),o("span",[e._v("min "),o("el-input-number",{attrs:{"controls-position":"right",min:0,max:100},model:{value:e.form.minlen,callback:function(t){e.$set(e.form,"minlen",t)},expression:"form.minlen"}})],1)])],1),o("el-form-item",{attrs:{prop:"maxlen"}},[o("span",[e._v(" max "),o("el-input-number",{attrs:{"controls-position":"right",min:e.form.minlen+1,max:101},model:{value:e.form.maxlen,callback:function(t){e.$set(e.form,"maxlen",t)},expression:"form.maxlen"}})],1)]),o("el-form-item",{attrs:{"label-width":"200px",label:"Use your own model",prop:"ifOwnModel"}},[o("el-tooltip",{attrs:{placement:"top"}},[o("div",{attrs:{slot:"content"},slot:"content"},[e._v("Whether to use your own model sampling")]),o("el-switch",{attrs:{"active-color":"#13ce66","inactive-color":"#ff4949","active-text":"Yes","inactive-text":"No"},model:{value:e.form.ifOwnModel,callback:function(t){e.$set(e.form,"ifOwnModel",t)},expression:"form.ifOwnModel"}})],1)],1),e.form.ifOwnModel?o("el-form-item",{attrs:{label:"Upload Model",prop:"uploadmodel"}},[1==e.hackReset?o("UploadCom",{attrs:{isSDF:!1,tipmsg:"Upload your own  model for sampling"},on:{func:e.getModel}}):e._e()],1):e._e(),o("el-form-item",{directives:[{name:"show",rawName:"v-show",value:!e.form.ifOwnModel,expression:"!form.ifOwnModel"}],attrs:{label:"Other Models",prop:"model_rule"}},[o("el-tooltip",{attrs:{placement:"top"}},[o("div",{attrs:{slot:"content"},slot:"content"},[e._v("Select the model provided by the system")]),o("el-select",{model:{value:e.form.selected_model,callback:function(t){e.$set(e.form,"selected_model",t)},expression:"form.selected_model"}},e._l(e.models,(function(e){return o("el-option",{key:e.value,attrs:{label:e.label,value:e.value}})})),1)],1)],1),o("el-form-item",{attrs:{label:"beam size",prop:"beam_size"}},[o("el-tooltip",{attrs:{placement:"top"}},[o("div",{attrs:{slot:"content"},slot:"content"},[e._v("Beam size Default: 10")]),o("el-input-number",{attrs:{"controls-position":"right",min:10,max:30},model:{value:e.form.beam_size,callback:function(t){e.$set(e.form,"beam_size",t)},expression:"form.beam_size"}})],1)],1),o("el-form-item",{attrs:{label:"n_best",prop:"n_best"}},[o("el-tooltip",{attrs:{placement:"top"}},[o("div",{attrs:{slot:"content"},slot:"content"},[e._v("n_best Default: 10")]),o("el-input-number",{attrs:{"controls-position":"right",min:10,max:300},model:{value:e.form.n_best,callback:function(t){e.$set(e.form,"n_best",t)},expression:"form.n_best"}})],1)],1),o("el-form-item",{attrs:{label:"random num",prop:"random_num"}},[o("el-tooltip",{attrs:{placement:"top"}},[o("div",{attrs:{slot:"content"},slot:"content"},[e._v("Size of the randomized fragments List Default: 1000")]),o("el-input-number",{attrs:{"controls-position":"right",min:1,max:1e4},model:{value:e.form.random_num,callback:function(t){e.$set(e.form,"random_num",t)},expression:"form.random_num"}})],1)],1),o("el-form-item",{attrs:{label:"Email",prop:"email"}},[o("el-input",{attrs:{autocomplete:"True",placeholder:"Please enter your email address"},model:{value:e.form.email,callback:function(t){e.$set(e.form,"email",t)},expression:"form.email"}})],1),o("el-form-item",[o("el-button",{attrs:{type:"primary"},on:{click:function(t){return e.submitForm("form")}}},[e._v("submit")]),o("el-button",{on:{click:function(t){return e.resetForm("form")}}},[e._v("reset")])],1)],1),o("el-card",{directives:[{name:"show",rawName:"v-show",value:e.ifrun,expression:"ifrun"}],attrs:{shadow:"always"}},[o("h2",[e._v("The child process is "+e._s(e.pid))])])],1)},n=[],l=o("0589"),a=o("30eb"),m={name:"PredictCom1",components:{UploadCom:a["a"]},data:function(){return{src:"./static/demo.html",iframeWin:{},labelPosition:"left",ifrun:!1,pid:"",models:[{label:"ChEMBL",value:"ChEMBL_model_average.pt"},{label:"ZINC",value:"zinc_3000w.pt"}],hackReset:!0,form:{firstsmi:"",secondsmi:"",minlen:7,maxlen:10,ifOwnModel:!0,modelPath:"",selected_model:"ChEMBL_model_average.pt",beam_size:10,n_best:10,random_num:1e3,email:""},rules:{firstsmi:[{required:!0,message:"Please enter the smiles",trigger:"blur"}],secondsmi:[{required:!0,message:"Please enter the smiles",trigger:"blur"}],email:[{required:!0,message:"Please enter your email address",trigger:"blur"},{type:"email",message:"Please enter the correct email address",trigger:["blur","change"]}]}}},props:{url:String},methods:{getSmiles:function(e){"first"===e?(this.form.firstsmi=this.$refs.iframe.contentWindow.new_smiles,this.$refs.iframe.contentWindow.jsmeApplet.reset()):"second"===e&&(this.form.secondsmi=this.$refs.iframe.contentWindow.new_smiles,this.$refs.iframe.contentWindow.jsmeApplet.reset())},getModel:function(e){this.form.modelPath=e},submitForm:function(e){var t=this,o=this.checkSubmit();this.$refs[e].validate((function(e){if(!e||!o)return t.$alert("Input information is incomplete or incorrect","Submit failed",{confirmButtonText:"confirm",type:"warning"}),!1;Object(l["a"])(t.url,t.form).then((function(e){t.pid=e.pid+3,t.ifrun=!0,t.$notify({title:"Training is running",message:"The child process is "+t.pid,type:"success"})})).catch((function(e){t.$alert(e,"Run failed",{confirmButtonText:"confirm"})}))}))},resetForm:function(e){var t=this;this.$refs[e].resetFields(),this.hackReset=!1,this.$nextTick((function(){t.hackReset=!0}))},checkSubmit:function(){return 1!=this.form.ifOwnModel||""!=this.form.modelPath}},updated:function(){this.form.n_best<this.form.beam_size&&(this.form.beam_size=10)}},c=m,f=(o("a341"),o("2877")),u=Object(f["a"])(c,i,n,!1,null,"4a4ac092",null),d=u.exports,p={name:"PageTwo",components:{PredictCom1:d}},h=p,b=(o("830c"),Object(f["a"])(h,r,s,!1,null,"68a300b6",null));t["default"]=b.exports},e7c8:function(e,t,o){}}]);
//# sourceMappingURL=chunk-ac1f6846.98c95d8c.js.map