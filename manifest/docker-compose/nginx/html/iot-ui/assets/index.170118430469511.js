import{_ as v,b as g,E as t}from"./index.1701184304695.js";import{u as d}from"./index.17011843046954.js";import{L as N,h as s,a2 as O,k as w,a as x,_ as a,T as i,j as I,ai as c,as as K,o as _,b as f,U as L,S,Y as G}from"./vue.1701184304695.js";const W={class:"system-dic-container"},j={class:"form-inner-wrap"},z={class:"left-wrap"},U=["src"],q=["src"],M=G("\u4FDD\u5B58"),P={class:"right-wrap"},R=["src"],T=N({__name:"index",setup(Y){const{proxy:m}=I(),{network_certificate:E}=m.useDict("network_certificate");console.log(E),s(),s(),s(),s(),s(),s();const B=s(),e=O({ids:[],info:{name:"",copyright:"",accesskey:"",secretkey:"",logo:"",mini:"",pic:""},data:[],tableData:{data:[],loading:!1,param:{pageNum:1,PageSize:10,status:-1,keyWord:""},total:0}}),y=()=>{C()},C=()=>{e.tableData.loading=!0,g.basicConfig.getDetails().then(o=>{e.data=o.data,o.data.forEach(u=>{u.configName=="\u7CFB\u7EDF\u540D\u79F0"?e.info.name=u.configValue:u.configName=="\u7CFB\u7EDF\u7248\u6743"?e.info.copyright=u.configValue:u.configName=="\u5F00\u653E\u63A5\u53E3AK"?e.info.accesskey=u.configValue:u.configName=="\u5F00\u653E\u63A5\u53E3SK"?e.info.secretkey=u.configValue:u.configName=="\u7CFB\u7EDFLOGO"?e.info.logo=u.configValue:u.configName=="\u7CFB\u7EDFLOGO\uFF08\u5C0F\u56FE\u6807\uFF09"?e.info.mini=u.configValue:u.configName=="\u767B\u5F55\u5C55\u793A\u56FE"&&(e.info.pic=u.configValue)})})},D=()=>{if(!e.info.name){t.error("\u8BF7\u586B\u5199\u7CFB\u7EDF\u540D\u79F0");return}if(!e.info.copyright){t.error("\u8BF7\u586B\u5199\u7CFB\u7EDF\u7248\u6743");return}if(!e.info.accesskey){t.error("\u8BF7\u586B\u5199\u5F00\u653E\u63A5\u53E3AK");return}if(!e.info.secretkey){t.error("\u8BF7\u586B\u5199\u5F00\u653E\u63A5\u53E3SK");return}if(!e.info.logo){t.error("\u8BF7\u4E0A\u4F20\u7CFB\u7EDFLOGO");return}if(!e.info.mini){t.error("\u8BF7\u4E0A\u4F20LOGO\uFF08\u5C0F\u56FE\u6807\uFF09");return}if(!e.info.pic){t.error("\u8BF7\u4E0A\u4F20\u767B\u5F55\u5C55\u793A\u56FE");return}e.data.forEach(o=>{o.configName=="\u7CFB\u7EDF\u540D\u79F0"?o.configValue=e.info.name:o.configName=="\u7CFB\u7EDF\u7248\u6743"?o.configValue=e.info.copyright:o.configName=="\u5F00\u653E\u63A5\u53E3AK"?o.configValue=e.info.accesskey:o.configName=="\u5F00\u653E\u63A5\u53E3SK"?o.configValue=e.info.secretkey:o.configName=="\u7CFB\u7EDFLOGO"?o.configValue=e.info.logo:o.configName=="\u7CFB\u7EDFLOGO\uFF08\u5C0F\u56FE\u6807\uFF09"?o.configValue=e.info.mini:o.configName=="\u767B\u5F55\u5C55\u793A\u56FE"&&(o.configValue=e.info.pic)}),g.basicConfig.setDetails({ConfigInfo:e.data}).then(o=>{console.log(o),t.success("\u8BBE\u7F6E\u6210\u529F")})},F=(o,u)=>{e.info[u]=o};return w(()=>{y()}),(o,u)=>{const r=c("el-input"),n=c("el-form-item"),p=c("el-col"),V=c("el-row"),h=c("el-button"),k=c("el-form"),b=c("el-card"),A=K("auth");return _(),x("div",W,[a(b,{shadow:"hover"},{default:i(()=>[a(k,{model:e.tableData.param,"label-position":"top",ref_key:"queryRef",ref:B,inline:!0,"label-width":"100px"},{default:i(()=>[f("div",j,[f("div",z,[a(n,{label:"\u7CFB\u7EDF\u540D\u79F0",prop:"keyWord"},{default:i(()=>[a(r,{modelValue:e.info.name,"onUpdate:modelValue":u[0]||(u[0]=l=>e.info.name=l),placeholder:"\u8BF7\u8F93\u5165\u7CFB\u7EDF\u540D\u79F0",clearable:"",size:"default"},null,8,["modelValue"])]),_:1}),a(n,{label:"\u7CFB\u7EDF\u7248\u6743",prop:"keyWord"},{default:i(()=>[a(r,{modelValue:e.info.copyright,"onUpdate:modelValue":u[1]||(u[1]=l=>e.info.copyright=l),placeholder:"\u8BF7\u8F93\u5165\u4E3B\u9898\u8272",clearable:"",size:"default"},null,8,["modelValue"])]),_:1}),a(n,{label:"\u5F00\u653E\u63A5\u53E3AK",prop:"keyWord"},{default:i(()=>[a(r,{modelValue:e.info.accesskey,"onUpdate:modelValue":u[2]||(u[2]=l=>e.info.accesskey=l),placeholder:"\u8BF7\u8F93\u5165\u9AD8\u5FB7API Key",clearable:"",size:"default"},null,8,["modelValue"])]),_:1}),a(n,{label:"\u5F00\u653E\u63A5\u53E3SK",prop:"keyWord"},{default:i(()=>[a(r,{modelValue:e.info.secretkey,"onUpdate:modelValue":u[3]||(u[3]=l=>e.info.secretkey=l),placeholder:"\u8BF7\u8F93\u5165base-path",clearable:"",size:"default"},null,8,["modelValue"])]),_:1}),a(V,null,{default:i(()=>[a(p,{span:12},{default:i(()=>[a(n,{label:"\u7CFB\u7EDFLOGO",prop:"keyWord"},{default:i(()=>[a(d,{accept:".jpg,.png,.jpeg,.gif,.svg",name:"logo",onSetImg:F},{default:i(()=>[f("img",{style:{width:"100%"},src:e.info.logo},null,8,U)]),_:1})]),_:1})]),_:1}),a(p,{span:12},{default:i(()=>[a(n,{label:"\u7CFB\u7EDFLOGO\uFF08\u5C0F\u56FE\u6807\uFF09",prop:"keyWord"},{default:i(()=>[a(d,{accept:".jpg,.png,.jpeg,.gif,.svg",name:"mini",onSetImg:F},{default:i(()=>[f("img",{style:{width:"100%"},src:e.info.mini},null,8,q)]),_:1})]),_:1})]),_:1})]),_:1}),a(n,null,{default:i(()=>[L((_(),S(h,{size:"default",type:"primary",class:"ml10",onClick:D},{default:i(()=>[M]),_:1})),[[A,"save"]])]),_:1})]),f("div",P,[a(n,{label:"\u767B\u5F55\u5C55\u793A\u56FE",prop:"keyWord"},{default:i(()=>[a(d,{accept:".jpg,.png,.jpeg,.gif,.svg",name:"pic",onSetImg:F},{default:i(()=>[f("img",{style:{width:"100%"},src:e.info.pic},null,8,R)]),_:1})]),_:1})])])]),_:1},8,["model"])]),_:1})])}}});var X=v(T,[["__scopeId","data-v-ebf6684c"]]);export{X as default};