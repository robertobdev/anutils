(window.webpackJsonp=window.webpackJsonp||[]).push([[1],{"/pAG":function(e,t,n){"use strict";function s(e){const{componentName:t,componentImports:n="",componentCode:s=""}=e;return`\n    import { Component } from '@angular/core';\n    ${n}\n\n\n    @Component({\n      selector: '${t}-example',\n      templateUrl: '${t}-example.html',\n      styleUrls: ['${t}-example.css'],\n    })\n\n    export class ${t}Example {\n      ${s}\n    }\n  `}n.d(t,"a",function(){return s})},"6j1n":function(e,t,n){"use strict";n.d(t,"a",function(){return l});var s=n("fXoL"),r=n("wZkO"),i=n("ofXK"),a=n("OtPg");function c(e,t){if(1&e&&(s.Qb(0,"mat-tab",3),s.Qb(1,"pre"),s.qc(2,"      "),s.Mb(3,"code",4),s.qc(4,"\n    "),s.Pb(),s.Pb()),2&e){const e=t.$implicit;s.dc("label",e.title),s.Bb(3),s.dc("highlight",e.code)("lineNumbers",!0)}}const o=[[["","preview",""]]],u=["[preview]"];let l=(()=>{class e{constructor(){this.codeViewers=[]}}return e.\u0275fac=function(t){return new(t||e)},e.\u0275cmp=s.Fb({type:e,selectors:[["app-code-viewer"]],inputs:{codeViewers:"codeViewers"},ngContentSelectors:u,decls:4,vars:1,consts:[["animationDuration","0ms"],[3,"label",4,"ngFor","ngForOf"],[1,"wrapper"],[3,"label"],[1,"content",3,"highlight","lineNumbers"]],template:function(e,t){1&e&&(s.cc(o),s.Qb(0,"mat-tab-group",0),s.pc(1,c,5,3,"mat-tab",1),s.Pb(),s.Qb(2,"div",2),s.bc(3),s.Pb()),2&e&&(s.Bb(1),s.dc("ngForOf",t.codeViewers))},directives:[r.b,i.i,r.a,a.b],styles:["[_nghost-%COMP%]{display:block;background:#fafafa;border:1px solid #c8c8c8}.content[_ngcontent-%COMP%]{background-color:#f7f7f7}.wrapper[_ngcontent-%COMP%]{margin:20px;border-top:1px solid #c8c8c8}"]}),e})()},BuVg:function(e,t,n){"use strict";n.d(t,"a",function(){return r});var s=n("fXoL");let r=(()=>{class e{constructor(e){this.el=e,this.previousValue=""}setMask(){const e=this.el.nativeElement,t=this.createMask(e.value);e.value!==this.previousValue&&(e.value=t,this.previousValue=t,e.dispatchEvent(new Event("input")),setTimeout(()=>{e.dispatchEvent(new Event("input"))}))}ngOnInit(){setTimeout(()=>this.setMask(),0)}createMask(e){return 0==(e=e.replace(/\D/g,"")).length?"":e.length<=2?e.replace(/^(\d{0,2})/,"($1"):e.length<=7?e.replace(/^(\d{0,2})(.*)/,"($1) $2"):e.length<=10&&9==this.maskType?e.replace(/^(\d{0,2})(\d{0,5})(.*)/,"($1) $2-$3"):e.length<=10?e.replace(/^(\d{0,2})(\d{0,4})(.*)/,"($1) $2-$3"):e.replace(/^(\d{0,2})(\d{0,3})(\d{0,3})(\d{0,3})/,"($1) $2-$3-$4").substr(0,16)}}return e.\u0275fac=function(t){return new(t||e)(s.Lb(s.l))},e.\u0275dir=s.Gb({type:e,selectors:[["","anutilsPhoneMask",""]],hostBindings:function(e,t){1&e&&s.Xb("ngModelChange",function(){return t.setMask()})("input",function(){return t.setMask()})},inputs:{maskType:["anutilsPhoneMask","maskType"]}}),e})()},Qibv:function(e,t,n){"use strict";n.d(t,"a",function(){return i});var s=n("ofXK"),r=n("fXoL");let i=(()=>{class e{}return e.\u0275fac=function(t){return new(t||e)},e.\u0275mod=r.Jb({type:e}),e.\u0275inj=r.Ib({imports:[[s.b]]}),e})()},"j+56":function(e,t,n){"use strict";n.d(t,"a",function(){return r});var s=n("fXoL");let r=(()=>{class e{constructor(e){this.el=e,this.previousValue=""}setMask(){const e=this.el.nativeElement,t=this.createMask(e.value);e.value!==this.previousValue&&(e.value=t,this.previousValue=t,e.dispatchEvent(new Event("input")))}ngOnInit(){setTimeout(()=>this.setMask(),0)}createMask(e){let t=e.replace(/\D/g,"");return t=0===t.length?"":t.length<=3?t.replace(/^(\d{0,3})/,"$1"):t.length<=6?t.replace(/^(\d{0,3})(.*)/,"$1.$2"):t.length<=9?t.replace(/^(\d{0,3})(\d{0,3})(.*)/,"$1.$2.$3"):t.replace(/^(\d{0,3})(\d{0,3})(\d{0,3})(.*)/,"$1.$2.$3-$4"),t.substr(0,14)}}return e.\u0275fac=function(t){return new(t||e)(s.Lb(s.l))},e.\u0275dir=s.Gb({type:e,selectors:[["","anutilsCpfMask",""]],hostBindings:function(e,t){1&e&&s.Xb("input",function(){return t.setMask()})}}),e})()},q0rO:function(e,t,n){"use strict";n.d(t,"a",function(){return r});var s=n("fXoL");let r=(()=>{class e{constructor(e){this.el=e,this.previousValue=""}setMask(){const e=this.el.nativeElement,t=this.createMask(e.value);e.value!==this.previousValue&&(e.value=t,this.previousValue=t,e.dispatchEvent(new Event("input")))}ngOnInit(){setTimeout(()=>this.setMask(),0)}createMask(e){let t=e.replace(/\D/g,"");return t=0===t.length?"":t.length<=2?t.replace(/^(\d{0,2})/,"$1"):t.length<=6?t.replace(/^(\d{0,2})(.*)/,"$1.$2"):t.length<=9?t.replace(/^(\d{0,2})(\d{0,3})(.*)/,"$1.$2.$3"):t.length<=13?t.replace(/^(\d{0,2})(\d{0,3})(\d{0,3})(.*)/,"$1.$2.$3/$4"):t.replace(/^(\d{0,2})(\d{0,3})(\d{0,3})(\d{0,4})(.*)/,"$1.$2.$3/$4-$5"),t.substr(0,18)}}return e.\u0275fac=function(t){return new(t||e)(s.Lb(s.l))},e.\u0275dir=s.Gb({type:e,selectors:[["","anutilsCnpjMask",""]],hostBindings:function(e,t){1&e&&s.Xb("input",function(){return t.setMask()})}}),e})()}}]);