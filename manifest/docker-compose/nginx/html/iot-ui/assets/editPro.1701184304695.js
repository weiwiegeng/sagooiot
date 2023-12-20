import{a as c}from"./index.170118430469519.js";import{u as L}from"./index.170118430469522.js";import{_ as q,E as U,g as N}from"./index.1701184304695.js";import{L as R,h as C,a2 as $,ab as z,a as F,_ as l,T as a,j as M,e as j,ai as n,o as m,b as P,Y as i,Z as D,X as S,F as y,a8 as w,S as V}from"./vue.1701184304695.js";const I={id:0,name:"",categoryId:"",messageProtocol:"",transportProtocol:"",deviceType:"\u8BBE\u5907",status:1,desc:"",authType:"",authUser:"",authPasswd:"",accessToken:"",certificateId:""},O=R({name:"deviceEditPro",components:{uploadVue:L},setup(e,{emit:o}){const _=C(null),h=N("/base-api/api/v1"),{proxy:v}=M(),{network_server_type:k}=v.useDict("network_server_type"),p=C([]),t=C(!1),r=$({isShowDialog:!1,cateData:[],deptData:[],messageData:[],network_protocols:[],tranData:[],imageUrl:"",singleImg:h+"/product/icon/upload",ruleForm:{...I},rules:{name:[{required:!0,message:"\u4EA7\u54C1\u540D\u79F0\u4E0D\u80FD\u4E3A\u7A7A",trigger:"blur"}],key:[{required:!0,message:"\u4EA7\u54C1\u6807\u8BC6\u4E0D\u80FD\u4E3A\u7A7A",trigger:"blur"}],parentId:[{required:!0,message:"\u4EA7\u54C1\u5206\u7C7B\u4E0D\u80FD\u4E3A\u7A7A",trigger:"blur"}],messageProtocol:[{required:!0,message:"\u6D88\u606F\u534F\u8BAE\u4E0D\u80FD\u4E3A\u7A7A",trigger:"blur"}],transportProtocol:[{required:!0,message:"\u4F20\u8F93\u534F\u8BAE\u4E0D\u80FD\u4E3A\u7A7A",trigger:"blur"}],deviceType:[{required:!0,message:"\u8BBE\u5907\u7C7B\u578B\u4E0D\u80FD\u4E3A\u7A7A",trigger:"blur"}]}}),A=s=>{r.imageUrl=s,r.ruleForm.icon=s},g=s=>{f(),c.category.getList({status:1}).then(u=>{r.cateData=u.category||[]}),c.dept.getList({status:-1}).then(u=>{r.deptData=u||[]}),c.product.getTypesAll({types:"protocol"}).then(u=>{r.messageData=u||[]}),s?(r.imageUrl=s.icon,r.ruleForm=s,s.authType===0&&E(s.transportProtocol)):r.imageUrl="",r.isShowDialog=!0},f=()=>{r.ruleForm={...I}},d=()=>{r.isShowDialog=!1},B=()=>{d()},E=s=>{s==="mqtt_server"?r.ruleForm.authType=1:r.ruleForm.authType=3};return{transportProtocolChange:E,submitLoading:t,certList:p,openDialog:g,handleAvatarSuccess:A,closeDialog:d,onCancel:B,onSubmit:()=>{const s=j(_);!s||s.validate(u=>{u&&(t.value=!0,r.ruleForm.id!==0?c.product.edit(r.ruleForm).then(()=>{U.success("\u4EA7\u54C1\u7C7B\u578B\u4FEE\u6539\u6210\u529F"),d(),o("typeList")}).finally(()=>t.value=!1):c.product.add(r.ruleForm).then(()=>{U.success("\u4EA7\u54C1\u7C7B\u578B\u6DFB\u52A0\u6210\u529F"),d(),o("typeList")}).finally(()=>t.value=!1))})},network_server_type:k,formRef:_,...z(r)}}}),W={class:"system-edit-dic-container"},X={key:0},Y=i("Basic"),Z=i("AccessToken"),G=i("\u8BBE\u5907"),H=i("\u7F51\u5173"),J=i("\u5B50\u8BBE\u5907"),K={class:"dialog-footer"},Q=i("\u53D6 \u6D88");function x(e,o,_,h,v,k){const p=n("el-input"),t=n("el-form-item"),r=n("uploadVue"),A=n("el-cascader"),g=n("el-option"),f=n("el-select"),d=n("el-radio"),B=n("el-radio-group"),E=n("el-form"),b=n("el-button"),s=n("el-dialog");return m(),F("div",W,[l(s,{title:(e.ruleForm.id!==0?"\u4FEE\u6539":"\u6DFB\u52A0")+"\u4EA7\u54C1",modelValue:e.isShowDialog,"onUpdate:modelValue":o[11]||(o[11]=u=>e.isShowDialog=u),width:"769px"},{footer:a(()=>[P("span",K,[l(b,{onClick:e.onCancel,size:"default"},{default:a(()=>[Q]),_:1},8,["onClick"]),l(b,{type:"primary",onClick:e.onSubmit,loading:e.submitLoading,size:"default"},{default:a(()=>[i(D(e.ruleForm.id!==0?"\u4FEE \u6539":"\u6DFB \u52A0"),1)]),_:1},8,["onClick","loading"])])]),default:a(()=>[l(E,{model:e.ruleForm,ref:"formRef",rules:e.rules,size:"default","label-width":"100px"},{default:a(()=>[l(t,{label:"\u4EA7\u54C1\u6807\u8BC6",prop:"key"},{default:a(()=>[l(p,{modelValue:e.ruleForm.key,"onUpdate:modelValue":o[0]||(o[0]=u=>e.ruleForm.key=u),placeholder:"\u8BF7\u8F93\u5165\u4EA7\u54C1\u6807\u8BC6",disabled:e.ruleForm.id},null,8,["modelValue","disabled"])]),_:1}),l(t,{label:"\u4EA7\u54C1\u540D\u79F0",prop:"name"},{default:a(()=>[l(p,{modelValue:e.ruleForm.name,"onUpdate:modelValue":o[1]||(o[1]=u=>e.ruleForm.name=u),placeholder:"\u8BF7\u8F93\u5165\u4EA7\u54C1\u540D\u79F0"},null,8,["modelValue"])]),_:1}),l(t,{label:"\u4EA7\u54C1\u56FE\u7247",prop:"imageUrl"},{default:a(()=>[l(r,{img:e.imageUrl,onSetImg:e.handleAvatarSuccess},null,8,["img","onSetImg"])]),_:1}),l(t,{label:"\u4EA7\u54C1\u5206\u7C7B",prop:"categoryId"},{default:a(()=>[l(A,{options:e.cateData,props:{checkStrictly:!0,emitPath:!1,value:"id",label:"name"},placeholder:"\u8BF7\u9009\u62E9\u5206\u7C7B",clearable:"",class:"w100",modelValue:e.ruleForm.categoryId,"onUpdate:modelValue":o[2]||(o[2]=u=>e.ruleForm.categoryId=u)},{default:a(({node:u,data:T})=>[P("span",null,D(T.name),1),u.isLeaf?S("",!0):(m(),F("span",X," ("+D(T.children.length)+") ",1))]),_:1},8,["options","modelValue"])]),_:1}),l(t,{label:"\u6D88\u606F\u534F\u8BAE",prop:"messageProtocol"},{default:a(()=>[l(f,{modelValue:e.ruleForm.messageProtocol,"onUpdate:modelValue":o[3]||(o[3]=u=>e.ruleForm.messageProtocol=u),placeholder:"\u8BF7\u9009\u62E9\u6D88\u606F\u534F\u8BAE"},{default:a(()=>[(m(!0),F(y,null,w(e.messageData,u=>(m(),V(g,{key:u.types,label:u.title,value:u.types},null,8,["label","value"]))),128)),l(g,{label:"Sagoo Mqtt",value:"SagooMqtt"})]),_:1},8,["modelValue"])]),_:1}),l(t,{label:"\u4F20\u8F93\u534F\u8BAE",prop:"transportProtocol"},{default:a(()=>[l(f,{modelValue:e.ruleForm.transportProtocol,"onUpdate:modelValue":o[4]||(o[4]=u=>e.ruleForm.transportProtocol=u),placeholder:"\u8BF7\u9009\u62E9\u4F20\u8F93\u534F\u8BAE",onChange:e.transportProtocolChange},{default:a(()=>[(m(!0),F(y,null,w(e.network_server_type,u=>(m(),V(g,{key:u.value,label:u.label,value:u.value},null,8,["label","value"]))),128))]),_:1},8,["modelValue","onChange"])]),_:1}),e.ruleForm.authType===1||e.ruleForm.authType===2?(m(),F(y,{key:0},[l(t,{label:"\u8BA4\u8BC1\u65B9\u5F0F",prop:""},{default:a(()=>[l(B,{modelValue:e.ruleForm.authType,"onUpdate:modelValue":o[5]||(o[5]=u=>e.ruleForm.authType=u)},{default:a(()=>[l(d,{label:1},{default:a(()=>[Y]),_:1}),l(d,{label:2},{default:a(()=>[Z]),_:1})]),_:1},8,["modelValue"])]),_:1}),e.ruleForm.authType===1?(m(),F(y,{key:0},[l(t,{label:"\u7528\u6237\u540D",prop:"authUser"},{default:a(()=>[l(p,{modelValue:e.ruleForm.authUser,"onUpdate:modelValue":o[6]||(o[6]=u=>e.ruleForm.authUser=u),placeholder:"\u8BF7\u8F93\u5165\u7528\u6237\u540D"},null,8,["modelValue"])]),_:1}),l(t,{label:"\u5BC6\u7801",prop:"authPasswd"},{default:a(()=>[l(p,{type:"password",modelValue:e.ruleForm.authPasswd,"onUpdate:modelValue":o[7]||(o[7]=u=>e.ruleForm.authPasswd=u),placeholder:"\u8BF7\u8F93\u5165\u5BC6\u7801"},null,8,["modelValue"])]),_:1})],64)):(m(),V(t,{key:1,label:"Aceess Token",prop:"accessToken"},{default:a(()=>[l(p,{modelValue:e.ruleForm.accessToken,"onUpdate:modelValue":o[8]||(o[8]=u=>e.ruleForm.accessToken=u),placeholder:"\u8BF7\u8F93\u5165Aceess Token"},null,8,["modelValue"])]),_:1}))],64)):S("",!0),l(t,{label:"\u8BBE\u5907\u7C7B\u578B",prop:"deviceType"},{default:a(()=>[l(B,{modelValue:e.ruleForm.deviceType,"onUpdate:modelValue":o[9]||(o[9]=u=>e.ruleForm.deviceType=u)},{default:a(()=>[l(d,{label:"\u8BBE\u5907"},{default:a(()=>[G]),_:1}),l(d,{label:"\u7F51\u5173"},{default:a(()=>[H]),_:1}),l(d,{label:"\u5B50\u8BBE\u5907"},{default:a(()=>[J]),_:1})]),_:1},8,["modelValue"])]),_:1}),l(t,{label:"\u4EA7\u54C1\u63CF\u8FF0	",prop:"desc"},{default:a(()=>[l(p,{modelValue:e.ruleForm.desc,"onUpdate:modelValue":o[10]||(o[10]=u=>e.ruleForm.desc=u),type:"textarea",placeholder:"\u8BF7\u8F93\u5165\u4EA7\u54C1\u63CF\u8FF0"},null,8,["modelValue"])]),_:1})]),_:1},8,["model","rules"])]),_:1},8,["title","modelValue"])])}var ae=q(O,[["render",x],["__scopeId","data-v-58f3bcb8"]]);export{ae as default};