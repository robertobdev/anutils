(window.webpackJsonp=window.webpackJsonp||[]).push([[8],{"53bq":function(e,r,n){"use strict";n.r(r),n.d(r,"ValidatorsModule",function(){return S});var o=n("ofXK"),t=n("tyNb"),a=n("3Pt+");function l(e){const r=e.value;if(r){let e;const n=r.replace(/[^\d]+/g,"");if("00000000000"===n||"11111111111"===n||"22222222222"===n||"33333333333"===n||"44444444444"===n||"55555555555"===n||"66666666666"===n||"77777777777"===n||"88888888888"===n||"99999999999"===n)return e=!0,{validate:!1,message:"CPF inv\xe1lido"};const o=n.substr(0,9),t=n.substr(9,2);let a=0;if(e=!1,n.length<11)return{validate:!1,message:"CPF inv\xe1lido"};for(let r=0;r<9;r++)a+=(10-r)*parseInt(o.charAt(r));if(0===a)return e=!0,{validate:!1,message:"CPF inv\xe1lido"};if(a=11-a%11,a>9&&(a=0),t.charAt(0)!==a.toString())return e=!0,{validate:!1,message:"CPF inv\xe1lido"};a*=2;for(let r=0;r<9;r++)a+=parseInt(o.charAt(r))*(11-r);if(a=11-a%11,a>9&&(a=0),t.charAt(1)!==a.toString())return e=!0,{validate:!1,message:"CPF inv\xe1lido"};if(!e)return null}return null}function i(e){const r=e.value;return!r||r&&/^(([^<>()\[\]\.,;:\s@\"]+(\.[^<>()\[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i.test(r.toLowerCase())?null:{validate:!1,message:"Email inv\xe1lido"}}function s(e){const r=e.value;if(!r)return null;let n,o=!1;const t=r.replace(/[^\d]+/g,""),a=t.slice(0,2),l=t.replace(a,"");return""===t&&(o=!0),[11,12,13,14,15,16,17,18,19,21,22,24,27,28,31,32,33,34,35,37,38,41,42,43,44,45,46,47,48,49,51,53,54,55,61,62,63,64,65,66,67,68,69,71,73,74,75,77,79,81,82,83,84,85,86,87,88,89,91,92,93,94,95,96,97,98,99].filter(e=>parseInt(a)===e?e:null).length||(o=!0),n=!1,8==l.length?/^[(]?[1-9][0-9]?[)]?[ ]?[2-6][0-9]{3}?[-]?[0-9]{4}$/.test(r)&&(n=!0):9===l.length&&/^[(]?[1-9][0-9]?[)]?[ ]?[9][3-9][0-9]?[-]?[0-9]{3}?[-]?[0-9]{3}$/.test(r)&&(n=!0),"900000000"!==l&&"999999999"!==l||(o=!0),n&&!o?null:{validate:!1,message:"Telefone inv\xe1lido"}}function m(e){return e.value&&""!==e.value?null:{validate:!1,message:"Campo obrigat\xf3rio"}}function c(e){const r=e.value;if(r){const e=r.replace(/[^\d]+/g,"");if("00000000000000"==e||"11111111111111"==e||"22222222222222"==e||"33333333333333"==e||"44444444444444"==e||"55555555555555"==e||"66666666666666"==e||"77777777777777"==e||"88888888888888"==e||"99999999999999"==e)return{validate:!1,message:"CNPJ inv\xe1lido"};let n=e.length-2,o=e.substring(0,n);const t=e.substring(n);let a=0,l=n-7;for(let r=n;r>=1;r--)a+=parseInt(o.charAt(n-r))*l--,l<2&&(l=9);let i=a%11<2?0:11-a%11;if(i.toString()!==t.charAt(0))return{validate:!1,message:"CNPJ inv\xe1lido"};n+=1,o=e.substring(0,n),a=0,l=n-7;for(let r=n;r>=1;r--)a+=parseInt(o.charAt(n-r))*l--,l<2&&(l=9);if(i=a%11<2?0:11-a%11,i.toString()!=t.charAt(1))return{validate:!1,message:"CNPJ inv\xe1lido"}}return null}var p=n("/pAG"),f=n("fXoL"),d=n("OtPg"),u=n("6j1n"),b=n("kmnG"),h=n("qFsG"),g=n("q0rO");function w(e,r){if(1&e&&(f.Qb(0,"mat-error"),f.qc(1),f.Pb()),2&e){const e=f.ac();let r=null;f.Bb(1),f.rc(null==(r=e.form.get("cnpj"))||null==r.errors?null:r.errors.message)}}let v=(()=>{class e{constructor(){this.codeViewers=[{title:"Html",code:'\n      <form [formGroup]="form">\n        <h3>Input cnpj with validator</h3>\n        <mat-form-field>\n          <mat-label>Cnpj</mat-label>\n          <input\n            matInput\n            placeholder="xx.xxx.xxx/xxxx-xx" anutilsCnpjMask\n            formControlName="cnpj"\n          />\n          <mat-error *ngIf="this.form.get(\'cnpj\')?.invalid">{{\n            this.form.get(\'cnpj\')?.errors?.message\n          }}</mat-error>\n        </mat-form-field>\n      </form>'},{title:"TS",code:Object(p.a)({componentName:"cnpjValidators",componentImports:"import { ValidateCnpj } from 'anutils/validators';",componentCode:"\n         form: FormGroup;\n        constructor() {\n          this.form = new FormGroup({\n            cnpj: new FormControl(null, ValidateCnpj),\n          });\n        }\n        "})}],this.form=new a.e({cnpj:new a.c(null,c)})}}return e.\u0275fac=function(r){return new(r||e)},e.\u0275cmp=f.Fb({type:e,selectors:[["app-cnpj"]],decls:16,vars:3,consts:[["highlight","/* Module\n  none */"],[3,"codeViewers"],["preview",""],[3,"formGroup"],["matInput","","placeholder","xx.xxx.xxx/xxxx-xx","anutilsCnpjMask","","formControlName","cnpj"],[4,"ngIf"]],template:function(e,r){if(1&e&&(f.Qb(0,"h1"),f.qc(1,"API reference for Cnpj validator"),f.Pb(),f.Qb(2,"pre"),f.qc(3,"  "),f.Mb(4,"code",0),f.qc(5,"\n"),f.Pb(),f.Qb(6,"app-code-viewer",1),f.Qb(7,"div",2),f.Qb(8,"form",3),f.Qb(9,"h3"),f.qc(10,"Input cnpj with validator"),f.Pb(),f.Qb(11,"mat-form-field"),f.Qb(12,"mat-label"),f.qc(13,"Cnpj"),f.Pb(),f.Mb(14,"input",4),f.pc(15,w,2,1,"mat-error",5),f.Pb(),f.Pb(),f.Pb(),f.Pb()),2&e){let e=null;f.Bb(6),f.dc("codeViewers",r.codeViewers),f.Bb(2),f.dc("formGroup",r.form),f.Bb(7),f.dc("ngIf",null==(e=r.form.get("cnpj"))?null:e.invalid)}},directives:[d.b,u.a,a.q,a.l,a.f,b.c,b.f,h.b,a.b,g.a,a.k,a.d,o.j,b.b],styles:["[_nghost-%COMP%]{display:block;padding:20px}"]}),e})();var P=n("j+56");function x(e,r){if(1&e&&(f.Qb(0,"mat-error"),f.qc(1),f.Pb()),2&e){const e=f.ac();let r=null;f.Bb(1),f.rc(null==(r=e.form.get("cpf"))||null==r.errors?null:r.errors.message)}}let I=(()=>{class e{constructor(){this.codeViewers=[{title:"Html",code:'\n      <form [formGroup]="form">\n        <h3>Input cpf mask</h3>\n        <mat-form-field>\n          <mat-label>Cpf</mat-label>\n          <input matInput placeholder="xxx.xxx.xxx-xx" anutilsCpfMask formControlName="cpf" />\n          <mat-error *ngIf="this.form.get(\'cpf\')?.invalid">\n            {{this.form.get(\'cpf\')?.errors?.message}}\n          </mat-error>\n        </mat-form-field>\n      </form>'},{title:"TS",code:Object(p.a)({componentName:"cpfValidators",componentImports:"import { ValidateCpf } from 'anutils/validators';",componentCode:"\n         form: FormGroup;\n        constructor() {\n          this.form = new FormGroup({\n            cpf: new FormControl(null, ValidateCpf),\n          });\n        }\n        "})}],this.form=new a.e({cpf:new a.c(null,l)})}}return e.\u0275fac=function(r){return new(r||e)},e.\u0275cmp=f.Fb({type:e,selectors:[["app-cpf"]],decls:16,vars:3,consts:[["highlight","/* Module\n  none */"],[3,"codeViewers"],["preview",""],[3,"formGroup"],["matInput","","placeholder","xxx.xxx.xxx-xx","anutilsCpfMask","","formControlName","cpf"],[4,"ngIf"]],template:function(e,r){if(1&e&&(f.Qb(0,"h1"),f.qc(1,"API reference for Cpf validator"),f.Pb(),f.Qb(2,"pre"),f.qc(3,"  "),f.Mb(4,"code",0),f.qc(5,"\n"),f.Pb(),f.Qb(6,"app-code-viewer",1),f.Qb(7,"div",2),f.Qb(8,"form",3),f.Qb(9,"h3"),f.qc(10,"Input cpf with validator"),f.Pb(),f.Qb(11,"mat-form-field"),f.Qb(12,"mat-label"),f.qc(13,"Cpf"),f.Pb(),f.Mb(14,"input",4),f.pc(15,x,2,1,"mat-error",5),f.Pb(),f.Pb(),f.Pb(),f.Pb()),2&e){let e=null;f.Bb(6),f.dc("codeViewers",r.codeViewers),f.Bb(2),f.dc("formGroup",r.form),f.Bb(7),f.dc("ngIf",null==(e=r.form.get("cpf"))?null:e.invalid)}},directives:[d.b,u.a,a.q,a.l,a.f,b.c,b.f,h.b,a.b,P.a,a.k,a.d,o.j,b.b],styles:["[_nghost-%COMP%]{display:block;padding:20px}"]}),e})();function C(e,r){if(1&e&&(f.Qb(0,"mat-error"),f.qc(1),f.Pb()),2&e){const e=f.ac();let r=null;f.Bb(1),f.rc(null==(r=e.form.get("email"))||null==r.errors?null:r.errors.message)}}let Q=(()=>{class e{constructor(){this.codeViewers=[{title:"Html",code:'\n      <form [formGroup]="form">\n        <h3>Input email with validator</h3>\n        <mat-form-field>\n          <mat-label>Email</mat-label>\n          <input\n            matInput\n            placeholder="example@mail.com"\n            formControlName="email"\n          />\n          <mat-error *ngIf="this.form.get(\'email\')?.invalid">{{\n            this.form.get(\'email\')?.errors?.message\n          }}</mat-error>\n        </mat-form-field>\n      </form>'},{title:"TS",code:Object(p.a)({componentName:"emailValidators",componentImports:"import { ValidateEmail } from 'anutils/validators';",componentCode:"\n         form: FormGroup;\n        constructor() {\n          this.form = new FormGroup({\n            email: new FormControl(null, ValidateEmail),\n          });\n        }\n        "})}],this.form=new a.e({email:new a.c(null,i)})}}return e.\u0275fac=function(r){return new(r||e)},e.\u0275cmp=f.Fb({type:e,selectors:[["app-email"]],decls:16,vars:3,consts:[["highlight","/* Module\n  none */"],[3,"codeViewers"],["preview",""],[3,"formGroup"],["matInput","","placeholder","example@mail.com","formControlName","email"],[4,"ngIf"]],template:function(e,r){if(1&e&&(f.Qb(0,"h1"),f.qc(1,"API reference for Email validator"),f.Pb(),f.Qb(2,"pre"),f.qc(3,"  "),f.Mb(4,"code",0),f.qc(5,"\n"),f.Pb(),f.Qb(6,"app-code-viewer",1),f.Qb(7,"div",2),f.Qb(8,"form",3),f.Qb(9,"h3"),f.qc(10,"Input email with validator"),f.Pb(),f.Qb(11,"mat-form-field"),f.Qb(12,"mat-label"),f.qc(13,"Email"),f.Pb(),f.Mb(14,"input",4),f.pc(15,C,2,1,"mat-error",5),f.Pb(),f.Pb(),f.Pb(),f.Pb()),2&e){let e=null;f.Bb(6),f.dc("codeViewers",r.codeViewers),f.Bb(2),f.dc("formGroup",r.form),f.Bb(7),f.dc("ngIf",null==(e=r.form.get("email"))?null:e.invalid)}},directives:[d.b,u.a,a.q,a.l,a.f,b.c,b.f,h.b,a.b,a.k,a.d,o.j,b.b],styles:["[_nghost-%COMP%]{display:block;padding:20px}"]}),e})();function q(e,r){if(1&e&&(f.Qb(0,"mat-error"),f.qc(1),f.Pb()),2&e){const e=f.ac();let r=null;f.Bb(1),f.rc(null==(r=e.form.get("password"))||null==r.errors?null:r.errors.message)}}function V(e,r){if(1&e&&(f.Qb(0,"mat-error"),f.qc(1),f.Pb()),2&e){const e=f.ac();let r=null;f.Bb(1),f.rc(null==(r=e.form.get("confirmPassword"))||null==r.errors?null:r.errors.message)}}let j=(()=>{class e{constructor(){this.codeViewers=[{title:"Html",code:'\n      <form [formGroup]="form">\n        <h3>Input password and confirm password with match validator</h3>\n        <mat-form-field>\n          <mat-label>Password</mat-label>\n          <input matInput formControlName="password" type="password" />\n          <mat-error *ngIf="this.form.get(\'password\')?.invalid">{{\n            this.form.get(\'password\')?.errors?.message\n          }}</mat-error>\n        </mat-form-field>\n        <mat-form-field>\n          <mat-label>Confirm password</mat-label>\n          <input matInput formControlName="confirmPassword" type="password" />\n          <mat-error *ngIf="this.form.get(\'confirmPassword\')?.invalid">{{\n            this.form.get(\'confirmPassword\')?.errors?.message\n          }}</mat-error>\n        </mat-form-field>\n      </form>'},{title:"TS",code:Object(p.a)({componentName:"matchPasswordsValidators",componentImports:"import { ValidateMatchPassword } from 'anutils/validators';",componentCode:"\n         form: FormGroup;\n        constructor() {\n          this.form = new FormGroup({\n            password: new FormControl(null),\n            confirmPassword: new FormControl(null),\n          });\n        }\n\n        ngOnInit(): void {\n          const password = this.form.get('password');\n          this.form\n            .get('confirmPassword')\n            ?.setValidators(ValidateMatchPassword(password));\n        }\n        "})}],this.form=new a.e({password:new a.c(null),confirmPassword:new a.c(null)})}ngOnInit(){var e;const r=this.form.get("password");null===(e=this.form.get("confirmPassword"))||void 0===e||e.setValidators(function(e){let r=!0;return e?n=>(r&&(r=!1,e.valueChanges.subscribe(()=>{n.patchValue(n.value)})),""!==n.value&&n.value!==e.value?{validate:!1,message:"Campos nova senha e confirma nova senha precisam ter o mesmo valor."}:null):null}(r))}}return e.\u0275fac=function(r){return new(r||e)},e.\u0275cmp=f.Fb({type:e,selectors:[["app-match-password"]],decls:22,vars:4,consts:[["highlight","/* Module\n  none */"],[3,"codeViewers"],["preview",""],[3,"formGroup"],["matInput","","formControlName","password","type","password"],[4,"ngIf"],["matInput","","formControlName","confirmPassword","type","password"]],template:function(e,r){if(1&e&&(f.Qb(0,"h1"),f.qc(1,"API reference for match passwords validator"),f.Pb(),f.Qb(2,"pre"),f.qc(3,"  "),f.Mb(4,"code",0),f.qc(5,"\n"),f.Pb(),f.Qb(6,"app-code-viewer",1),f.Qb(7,"div",2),f.Qb(8,"form",3),f.Qb(9,"h3"),f.qc(10,"Input password and confirm password with match validator"),f.Pb(),f.Qb(11,"mat-form-field"),f.Qb(12,"mat-label"),f.qc(13,"Password"),f.Pb(),f.Mb(14,"input",4),f.pc(15,q,2,1,"mat-error",5),f.Pb(),f.Mb(16,"br"),f.Qb(17,"mat-form-field"),f.Qb(18,"mat-label"),f.qc(19,"Confirm password"),f.Pb(),f.Mb(20,"input",6),f.pc(21,V,2,1,"mat-error",5),f.Pb(),f.Pb(),f.Pb(),f.Pb()),2&e){let e=null,n=null;f.Bb(6),f.dc("codeViewers",r.codeViewers),f.Bb(2),f.dc("formGroup",r.form),f.Bb(7),f.dc("ngIf",null==(e=r.form.get("password"))?null:e.invalid),f.Bb(6),f.dc("ngIf",null==(n=r.form.get("confirmPassword"))?null:n.invalid)}},directives:[d.b,u.a,a.q,a.l,a.f,b.c,b.f,h.b,a.b,a.k,a.d,o.j,b.b],styles:["[_nghost-%COMP%]{display:block;padding:20px}"]}),e})();var M=n("BuVg");function G(e,r){if(1&e&&(f.Qb(0,"mat-error"),f.qc(1),f.Pb()),2&e){const e=f.ac();let r=null;f.Bb(1),f.rc(null==(r=e.form.get("phone"))||null==r.errors?null:r.errors.message)}}let F=(()=>{class e{constructor(){this.codeViewers=[{title:"Html",code:'\n      <form [formGroup]="form">\n        <h3>Input phone with validator</h3>\n        <mat-form-field>\n          <mat-label>Phone</mat-label>\n          <input\n            matInput\n            placeholder="(xx) xxx-xxx-xxx"\n            anutilsPhoneMask\n            formControlName="phone"\n          />\n          <mat-error *ngIf="this.form.get(\'phone\')?.invalid">{{\n            this.form.get(\'phone\')?.errors?.message\n          }}</mat-error>\n        </mat-form-field>\n      </form>'},{title:"TS",code:Object(p.a)({componentName:"phoneValidators",componentImports:"import { ValidatePhone } from 'anutils/validators';",componentCode:"\n         form: FormGroup;\n        constructor() {\n          this.form = new FormGroup({\n            phone: new FormControl(null, ValidatePhone),\n          });\n        }\n        "})}],this.form=new a.e({phone:new a.c(null,s)})}}return e.\u0275fac=function(r){return new(r||e)},e.\u0275cmp=f.Fb({type:e,selectors:[["app-phone"]],decls:16,vars:3,consts:[["highlight","/* Module\n  none */"],[3,"codeViewers"],["preview",""],[3,"formGroup"],["matInput","","placeholder","(xx) xxx-xxx-xxx","anutilsPhoneMask","","formControlName","phone"],[4,"ngIf"]],template:function(e,r){if(1&e&&(f.Qb(0,"h1"),f.qc(1,"API reference for Phone validator"),f.Pb(),f.Qb(2,"pre"),f.qc(3,"  "),f.Mb(4,"code",0),f.qc(5,"\n"),f.Pb(),f.Qb(6,"app-code-viewer",1),f.Qb(7,"div",2),f.Qb(8,"form",3),f.Qb(9,"h3"),f.qc(10,"Input phone with validator"),f.Pb(),f.Qb(11,"mat-form-field"),f.Qb(12,"mat-label"),f.qc(13,"Phone"),f.Pb(),f.Mb(14,"input",4),f.pc(15,G,2,1,"mat-error",5),f.Pb(),f.Pb(),f.Pb(),f.Pb()),2&e){let e=null;f.Bb(6),f.dc("codeViewers",r.codeViewers),f.Bb(2),f.dc("formGroup",r.form),f.Bb(7),f.dc("ngIf",null==(e=r.form.get("phone"))?null:e.invalid)}},directives:[d.b,u.a,a.q,a.l,a.f,b.c,b.f,h.b,a.b,M.a,a.k,a.d,o.j,b.b],styles:["[_nghost-%COMP%]{display:block;padding:20px}"]}),e})();function B(e,r){if(1&e&&(f.Qb(0,"mat-error"),f.qc(1),f.Pb()),2&e){const e=f.ac();let r=null;f.Bb(1),f.rc(null==(r=e.form.get("age"))||null==r.errors?null:r.errors.message)}}let y=(()=>{class e{constructor(){this.codeViewers=[{title:"Html",code:'\n      <form [formGroup]="form">\n        <h3>Input age required</h3>\n        <mat-form-field>\n          <mat-label>Age</mat-label>\n          <input matInput formControlName="age" required/>\n          <mat-error *ngIf="this.form.get(\'age\')?.invalid">{{\n            this.form.get(\'age\')?.errors?.message\n          }}</mat-error>\n        </mat-form-field>\n      </form>'},{title:"TS",code:Object(p.a)({componentName:"requiredValidators",componentImports:"import { ValidateRequired } from 'anutils/validators';",componentCode:"\n         form: FormGroup;\n        constructor() {\n          this.form = new FormGroup({\n            age: new FormControl(null, ValidateRequired),\n          });\n        }\n        "})}],this.form=new a.e({age:new a.c(null,m)})}}return e.\u0275fac=function(r){return new(r||e)},e.\u0275cmp=f.Fb({type:e,selectors:[["app-required"]],decls:16,vars:3,consts:[["highlight","/* Module\n  none */"],[3,"codeViewers"],["preview",""],[3,"formGroup"],["matInput","","formControlName","age","required",""],[4,"ngIf"]],template:function(e,r){if(1&e&&(f.Qb(0,"h1"),f.qc(1,"API reference for Age validator"),f.Pb(),f.Qb(2,"pre"),f.qc(3,"  "),f.Mb(4,"code",0),f.qc(5,"\n"),f.Pb(),f.Qb(6,"app-code-viewer",1),f.Qb(7,"div",2),f.Qb(8,"form",3),f.Qb(9,"h3"),f.qc(10,"Input age required"),f.Pb(),f.Qb(11,"mat-form-field"),f.Qb(12,"mat-label"),f.qc(13,"Age"),f.Pb(),f.Mb(14,"input",4),f.pc(15,B,2,1,"mat-error",5),f.Pb(),f.Pb(),f.Pb(),f.Pb()),2&e){let e=null;f.Bb(6),f.dc("codeViewers",r.codeViewers),f.Bb(2),f.dc("formGroup",r.form),f.Bb(7),f.dc("ngIf",null==(e=r.form.get("age"))?null:e.invalid)}},directives:[d.b,u.a,a.q,a.l,a.f,b.c,b.f,h.b,a.b,a.k,a.d,a.o,o.j,b.b],styles:["[_nghost-%COMP%]{display:block;padding:20px}"]}),e})();const N=[{path:"",component:(()=>{class e{}return e.\u0275fac=function(r){return new(r||e)},e.\u0275cmp=f.Fb({type:e,selectors:[["app-validators"]],decls:1,vars:0,template:function(e,r){1&e&&f.Mb(0,"router-outlet")},directives:[t.d],encapsulation:2}),e})(),children:[{path:"cpf",component:I},{path:"cnpj",component:v},{path:"phone",component:F},{path:"matchpasswords",component:j},{path:"email",component:Q},{path:"required",component:y}]}];let k=(()=>{class e{}return e.\u0275fac=function(r){return new(r||e)},e.\u0275mod=f.Jb({type:e}),e.\u0275inj=f.Ib({imports:[[t.c.forChild(N)],t.c]}),e})();var A=n("PCNd"),O=n("Qibv");let S=(()=>{class e{}return e.\u0275fac=function(r){return new(r||e)},e.\u0275mod=f.Jb({type:e}),e.\u0275inj=f.Ib({imports:[[o.b,k,A.a,O.a]]}),e})()}}]);