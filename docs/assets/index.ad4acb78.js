
/**
 * 由 Fantastic-admin 提供技术支持
 * Powered by Fantastic-admin
 * https://fantastic-admin.netlify.app
 * 代码仓库
 * Gitee  https://gitee.com/hooray/fantastic-admin
 * Github https://github.com/hooray/fantastic-admin
 */
    
import{_ as e,d as a,u as s,a as o,b as i,c as t,w as r,o as d,e as n,f as m,g as p,n as l,h as b,i as u,j as c,k as f,l as j,m as h,p as x,q as v,r as y,s as g,t as M,T as k,v as w,K as C,x as _}from"./index.015bb7ab.js";import{E as P}from"./el-backtop.419ff86f.js";import{_ as D}from"./index.237be5dd.js";import S from"./index.5458028b.js";import q from"./index.7724f0d4.js";import F from"./index.04b4e637.js";import L from"./index.1e81ea61.js";import $ from"./index.ee972a78.js";import A from"./index.70762891.js";import"./error2.13f96d52.js";/* empty css                */import"./index.2f891fd2.js";import"./index.4c8562db.js";import"./index.0a900349.js";import"./el-button.2b4a4c12.js";import"./index.8bfffa1c.js";import"./index2.3d38e54c.js";import"./index2.7bb86833.js";/* empty css                  */import"./index2.088904f4.js";import"./index2.d65d1d94.js";import"./el-tooltip.0ca4bad9.js";import"./index.54300522.js";import"./typescript2.b7eef2c1.js";import"./el-input.8c6a35eb.js";import"./el-divider.dacbd55b.js";import"./el-alert.eba529d1.js";const B={class:"layout"},E={id:"app-main"},I={class:"wrapper"},J={class:"main"},K=a({name:"Layout"});var O=e(Object.assign(K,{setup(e){const{proxy:a}=h(),K=x(),O=v(),R=s(),T=o(),z=i(),G=t((()=>void 0!==K.meta.copyright?K.meta.copyright:R.copyright.enable));function H(){O.push({name:"reload"})}return r((()=>R.menu.subMenuCollapse),(e=>{"mobile"===R.mode&&(e?document.querySelector("body").classList.remove("hidden"):document.querySelector("body").classList.add("hidden"))})),r((()=>K.path),(()=>{"mobile"===R.mode&&R.$patch((e=>{e.menu.subMenuCollapse=!0}))})),d((()=>{a.$hotkeys("f5",(e=>{R.topbar.enablePageReload&&(e.preventDefault(),H())}))})),y("reload",H),y("switchMenu",(function(e){z.setActived(e),R.menu.switchMainMenuAndPageJump&&(_(z.sidebarMenusFirstDeepestPath)?window.open(z.sidebarMenusFirstDeepestPath,"_blank"):O.push(z.sidebarMenusFirstDeepestPath))})),(e,a)=>{const s=g("router-view"),o=D,i=P;return M(),n("div",B,[m("div",E,[p(S),m("div",I,[m("div",{class:l(["sidebar-container",{show:"mobile"===b(R).mode&&!b(R).menu.subMenuCollapse}])},[p(q),p(F)],2),m("div",{class:l(["sidebar-mask",{show:"mobile"===b(R).mode&&!b(R).menu.subMenuCollapse}]),onClick:a[0]||(a[0]=e=>b(R).toggleSidebarCollapse())},null,2),m("div",{class:"main-container",style:u({"padding-bottom":e.$route.meta.paddingBottom})},["head"!==b(R).menu.menuMode||b(R).topbar.enableSidebarCollapse||b(R).topbar.enableBreadcrumb?(M(),c(L,{key:0})):f("v-if",!0),m("div",J,[p(s,null,{default:j((({Component:e,route:a})=>[p(k,{name:"main",mode:"out-in",appear:""},{default:j((()=>[(M(),c(C,{include:b(T).list},[(M(),c(w(e),{key:a.fullPath}))],1032,["include"]))])),_:2},1024)])),_:1})]),b(G)?(M(),c(o,{key:1})):f("v-if",!0)],4)]),p(i,{right:20,bottom:20,title:"回到顶部"})]),p($),p(A)])}}}),[["__scopeId","data-v-3ead4a54"]]);export{O as default};
//# sourceMappingURL=index.ad4acb78.js.map