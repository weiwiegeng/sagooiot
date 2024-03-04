import{a as e}from"./modbus.1709105786614.js";import{_ as t,g as l,E as a,h as i}from"./index.1709105786614.js";import s from"./taskDialog.1709105786614.js";import{R as o,S as n,ah as r,ar as d,o as u,b as m,Y as c,W as p,T as g,X as h,V as b}from"./vue.1709105786614.js";const f={"class":"page-full",style:{height:"60vh"}},v={align:"right"},y={"class":"filter-container"},k={id:"logContainer",ref:"logContainer"};var C=t({components:{TaskDialog:s},data:()=>({temp:{title:"",number:"",templateNumber:"",slaveId:"",interval:""},rules:{title:[{required:!0,message:"请输入通道名称",trigger:"blur"}],number:[{required:!0,message:"请输入注册码",trigger:"blur"}],slaveId:[{required:!0,message:"请输入设备地址",trigger:"blur"}],templateNumber:[{required:!0,message:"请输入设备模板",trigger:"change"}]},dialogVisible:!1,activeName:"1",taskList:[],listLoading:!1,total:0,tableKey:0,listQuery:{page:1,size:10},evsrc:null,count:0,templateOptions:[],formatOptions:[]}),watch:{activeName:"handleTabClick"},methods:{open(e){this.temp={...e},this.getDict(),this.dialogVisible=!0},downloadLog(){window.open(l("/base-api/modbus")+"/debug/export_message?number="+this.temp.number)},closeDialog(){this.dialogVisible=!1,this.activeName="1",this.$refs.dataForm.resetFields(),this.closeEv()},updateData(){this.$refs.dataForm.validate((t=>{if(t){const t=Object.assign({},this.temp);e.channel.editDevice(t).then((()=>{this.$emit("getList"),this.closeDialog(),a.success("操作成功！")}))}}))},handleTabClick(){this.closeEv(!1),"2"===this.activeName?this.getList():this.activeName},handleFilter(){this.listQuery.page=1,this.getList()},getDict(){e.getDict({code:"forwardFormat"}).then((e=>{this.formatOptions=e.list||[]}))},getList(){this.listLoading=!0,e.task.getList(this.listQuery).then((e=>{this.taskList=e.list||[],this.total=e.Total}))["finally"]((()=>{this.listLoading=!1}))},handleDelete(t){i.confirm('是否确认删除任务名称为"'+t.Job.title+'"的数据项?',"警告",{confirmButtonText:"确定",cancelButtonText:"取消",type:"warning"}).then((function(){return e.task.deleteDeviceJob({number:t.Job.number})})).then((()=>{this.handleFilter(),a.success("删除成功！")}))["catch"]((function(){}))},handleCreate(){this.$refs.taskDialog.openDialog({dialogStatus:"create",deviceNumber:this.temp.number})},handleUpdate(e){this.$refs.taskDialog.openDialog({dialogStatus:"update",row:e,deviceNumber:this.temp.number})},initEv(){if(this.evsrc)return;this.evsrc=new EventSource(`${l("/base-api/modbus")}/debug?number=${this.temp.number}`);let e=this;this.evsrc.onmessage=function(t){try{let l=JSON.parse(t.data);if(l.deviceId===e.temp.number){let e="request"===l.type?"#F56C6C":"#409EFF",t=`${"request"===l.type?"请求：":"应答："} ${l.msg}`;this.$refs.logContainer.insertAdjacentHTML("afterbegin",`<li style="color: ${e}">${t}</li>`)}}catch(l){}}},openEv(){this.$refs.logContainer.insertAdjacentHTML("beforeEnd",'<li style="color: #000;">开始...</li>'),this.initEv()},closeEv(e=!0){this.evsrc&&this.evsrc.close(),this.evsrc=null,this.count=0,e&&this.$refs.logContainer.insertAdjacentHTML("beforeEnd",'<li style="color: #000;">停止...</li>')},clearLog(){this.$refs.logContainer.innerHTML=""},getCodingLabel(e){return this.formatOptions.find((t=>t.value===e.Job.encoding)).title}}},[["render",function(e,t,l,a,i,s){const C=r("el-input"),_=r("el-form-item"),L=r("el-button"),V=r("el-form"),D=r("el-tab-pane"),w=r("el-table-column"),$=r("el-table"),T=r("pagination"),E=r("TaskDialog"),N=r("el-tabs"),F=r("el-dialog"),x=d("loading");return u(),o(F,{title:"设备通道详情",modelValue:i.dialogVisible,"onUpdate:modelValue":t[12]||(t[12]=e=>i.dialogVisible=e),width:"900px","before-close":s.closeDialog,"close-on-click-modal":!1},{"default":n((()=>[m("div",f,[c(N,{modelValue:i.activeName,"onUpdate:modelValue":t[11]||(t[11]=e=>i.activeName=e)},{"default":n((()=>[c(D,{label:"通道信息",name:"1"},{"default":n((()=>[c(V,{ref:"dataForm",rules:i.rules,model:i.temp,"label-position":"left","label-width":"120px",style:{width:"90%",margin:"0 auto"}},{"default":n((()=>[c(_,{label:"通道名称",prop:"title"},{"default":n((()=>[c(C,{modelValue:i.temp.title,"onUpdate:modelValue":t[0]||(t[0]=e=>i.temp.title=e),disabled:"",placeholder:"请输入通道名称"},null,8,["modelValue"])])),_:1}),c(_,{label:"注册码",prop:"number"},{"default":n((()=>[c(C,{modelValue:i.temp.number,"onUpdate:modelValue":t[1]||(t[1]=e=>i.temp.number=e),disabled:"",placeholder:"请输入注册码"},null,8,["modelValue"])])),_:1}),c(_,{label:"设备地址",prop:"slaveId"},{"default":n((()=>[c(C,{modelValue:i.temp.slaveId,"onUpdate:modelValue":t[2]||(t[2]=e=>i.temp.slaveId=e),modelModifiers:{number:!0},disabled:"",placeholder:"请输入设备地址"},null,8,["modelValue"])])),_:1}),c(_,{label:"",prop:""},{"default":n((()=>[m("div",v,[c(L,{onClick:s.closeDialog},{"default":n((()=>[p(" 取 消 ")])),_:1},8,["onClick"])])])),_:1})])),_:1},8,["rules","model"])])),_:1}),c(D,{label:"任务",name:"2"},{"default":n((()=>[m("div",y,[c(L,{"class":"filter-item",type:"primary",icon:"el-icon-circle-plus-outline",onClick:s.handleCreate},{"default":n((()=>[p(" 添加任务 ")])),_:1},8,["onClick"])]),g((u(),o($,{key:i.tableKey,data:i.taskList,border:"",fit:"","highlight-current-row":"",style:{width:"100%"}},{"default":n((()=>[c(w,{label:"标题",prop:"Job.title",align:"center"}),c(w,{label:"调度周期",prop:"Job.interval",align:"center"}),c(w,{label:"转发格式",prop:"encoding",align:"center"},{"default":n((({row:e})=>[p(h(s.getCodingLabel(e)),1)])),_:1}),c(w,{label:"mqtt主题",prop:"Job.publishTopic",align:"center"}),c(w,{label:"模板",prop:"Template.title",align:"center"}),c(w,{label:"操作",align:"center",width:"200"},{"default":n((({row:e,$index:t})=>[c(L,{type:"primary",size:"small",onClick:t=>s.handleUpdate(e)},{"default":n((()=>[p(" 详情 ")])),_:2},1032,["onClick"]),"deleted"!=e.status?(u(),o(L,{key:0,size:"small",type:"danger",onClick:t=>s.handleDelete(e)},{"default":n((()=>[p(" 删除 ")])),_:2},1032,["onClick"])):b("",!0)])),_:1})])),_:1},8,["data"])),[[x,i.listLoading]]),i.total>0?(u(),o(T,{key:0,total:i.total,page:i.listQuery.page,"onUpdate:page":t[3]||(t[3]=e=>i.listQuery.page=e),limit:i.listQuery.size,"onUpdate:limit":t[4]||(t[4]=e=>i.listQuery.size=e),onPagination:t[5]||(t[5]=e=>s.getList())},null,8,["total","page","limit"])):b("",!0),c(E,{ref:"taskDialog",formatOptions:i.formatOptions,onFinish:t[6]||(t[6]=e=>s.getList())},null,8,["formatOptions"])])),_:1}),c(D,{label:"通道码流",name:"3"},{"default":n((()=>[m("div",null,[c(L,{type:i.evsrc?"info":"primary",onClick:t[7]||(t[7]=e=>s.openEv())},{"default":n((()=>[p("开始")])),_:1},8,["type"]),c(L,{type:i.evsrc?"primary":"info",disabled:!i.evsrc,onClick:t[8]||(t[8]=e=>s.closeEv())},{"default":n((()=>[p("停止")])),_:1},8,["type","disabled"]),c(L,{type:"defualt",onClick:t[9]||(t[9]=e=>s.clearLog())},{"default":n((()=>[p("清空")])),_:1}),c(L,{type:"info",style:{"margin-left":"150px"},onClick:t[10]||(t[10]=e=>s.downloadLog())},{"default":n((()=>[p("下载报文")])),_:1}),m("ul",k,null,512)])])),_:1})])),_:1},8,["modelValue"])])])),_:1},8,["modelValue","before-close"])}],["__scopeId","data-v-2e9a954c"]]);export{C as default};