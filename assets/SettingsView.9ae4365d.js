import{p as E,I as p,d as Q,m as W,a as X,b as x,u as P,g as $,c as d,e as Y,t as c,f as k,h as a,i as Z,j as ee,R as le,r as A,k as L,w as te,l as ae,V as oe,n as S,o as ne,q as ue,s as se,v as D,x as ie,S as O,y as re,F as j,z as ce,A as de,B,C as ve,D as h,E as fe,G as T,H as m,J as N,K as me,L as U,M as Ve,N as ye}from"./index.5b627000.js";import{V as M,m as be,f as ge,a as Ce}from"./VInput.e822bf41.js";const q=Symbol.for("vuetify:selection-control-group"),G=E({color:String,disabled:Boolean,error:Boolean,id:String,inline:Boolean,falseIcon:p,trueIcon:p,ripple:{type:Boolean,default:!0},multiple:{type:Boolean,default:null},name:String,readonly:Boolean,modelValue:null,type:String,valueComparator:{type:Function,default:Q},...W(),...X()},"v-selection-control-group"),Se=x({name:"VSelectionControlGroup",props:{defaultsTarget:{type:String,default:"VSelectionControl"},...G()},emits:{"update:modelValue":e=>!0},setup(e,o){let{slots:s}=o;const l=P(e,"modelValue"),i=$(),n=d(()=>e.id||`v-selection-control-group-${i}`),t=d(()=>e.name||n.value);return Z(q,{modelValue:l}),Y({[e.defaultsTarget]:{color:c(e,"color"),disabled:c(e,"disabled"),density:c(e,"density"),error:c(e,"error"),inline:c(e,"inline"),modelValue:l,multiple:d(()=>!!e.multiple||e.multiple==null&&Array.isArray(l.value)),name:t,falseIcon:c(e,"falseIcon"),trueIcon:c(e,"trueIcon"),readonly:c(e,"readonly"),ripple:c(e,"ripple"),type:c(e,"type"),valueComparator:c(e,"valueComparator")}}),k(()=>{var u;return a("div",{class:["v-selection-control-group",{"v-selection-control-group--inline":e.inline}],"aria-labelled-by":e.type==="radio"?n.value:void 0,role:e.type==="radio"?"radiogroup":void 0},[(u=s.default)==null?void 0:u.call(s)])}),{}}}),z=E({label:String,trueValue:null,falseValue:null,value:null,...G()},"v-selection-control");function Ie(e){const o=ue(q,void 0),{densityClasses:s}=se(e),l=P(e,"modelValue"),i=d(()=>e.trueValue!==void 0?e.trueValue:e.value!==void 0?e.value:!0),n=d(()=>e.falseValue!==void 0?e.falseValue:!1),t=d(()=>!!e.multiple||e.multiple==null&&Array.isArray(l.value)),u=d({get(){const r=o?o.modelValue.value:l.value;return t.value?r.some(v=>e.valueComparator(v,i.value)):e.valueComparator(r,i.value)},set(r){if(e.readonly)return;const v=r?i.value:n.value;let f=v;t.value&&(f=r?[...D(l.value),v]:D(l.value).filter(V=>!e.valueComparator(V,i.value))),o?o.modelValue.value=f:l.value=f}}),{textColorClasses:b,textColorStyles:g}=ie(d(()=>u.value&&!e.error&&!e.disabled?e.color:void 0)),I=d(()=>u.value?e.trueIcon:e.falseIcon);return{group:o,densityClasses:s,trueValue:i,falseValue:n,model:u,textColorClasses:b,textColorStyles:g,icon:I}}const H=ee()({name:"VSelectionControl",directives:{Ripple:le},inheritAttrs:!1,props:z(),emits:{"update:modelValue":e=>!0},setup(e,o){let{attrs:s,slots:l}=o;const{densityClasses:i,icon:n,model:t,textColorClasses:u,textColorStyles:b,trueValue:g}=Ie(e),I=$(),r=d(()=>e.id||`input-${I}`),v=A(!1),f=A(!1),V=A();function C(y){v.value=!0,(!O||O&&y.target.matches(":focus-visible"))&&(f.value=!0)}function _(){v.value=!1,f.value=!1}function R(y){t.value=y.target.checked}return k(()=>{var y,F;const w=l.label?l.label({label:e.label,props:{for:r.value}}):e.label,[J,K]=L(s);return a("div",S({class:["v-selection-control",{"v-selection-control--dirty":t.value,"v-selection-control--disabled":e.disabled,"v-selection-control--error":e.error,"v-selection-control--focused":v.value,"v-selection-control--focus-visible":f.value,"v-selection-control--inline":e.inline},i.value]},J),[a("div",{class:["v-selection-control__wrapper",u.value],style:b.value},[(y=l.default)==null?void 0:y.call(l),te(a("div",{class:["v-selection-control__input"]},[n.value&&a(oe,{key:"icon",icon:n.value},null),a("input",S({ref:V,checked:t.value,disabled:e.disabled,id:r.value,onBlur:_,onFocus:C,onInput:R,"aria-readonly":e.readonly,type:e.type,value:g.value,name:e.name,"aria-checked":e.type==="checkbox"?t.value:void 0},K),null),(F=l.input)==null?void 0:F.call(l,{model:t,textColorClasses:u,textColorStyles:b,props:{onFocus:C,onBlur:_,id:r.value}})]),[[ae("ripple"),e.ripple&&[!e.disabled&&!e.readonly,null,["center","circle"]]]])]),w&&a(M,{for:r.value,clickable:!0},{default:()=>[w]})])}),{isFocused:v,input:V}}});function _e(e){return ne(e,Object.keys(H.props))}const he=x({name:"VRadio",props:{...z({falseIcon:"$radioOff",trueIcon:"$radioOn"})},setup(e,o){let{slots:s}=o;return k(()=>a(H,S(e,{class:"v-radio",type:"radio"}),s)),{}}});const pe=x({name:"VRadioGroup",inheritAttrs:!1,props:{height:{type:[Number,String],default:"auto"},...be(),...re(G(),["multiple"]),trueIcon:{type:p,default:"$radioOn"},falseIcon:{type:p,default:"$radioOff"},type:{type:String,default:"radio"}},emits:{"update:modelValue":e=>!0},setup(e,o){let{attrs:s,slots:l}=o;const i=$(),n=d(()=>e.id||`radio-group-${i}`),t=P(e,"modelValue");return k(()=>{const[u,b]=L(s),[g,I]=ge(e),[r,v]=_e({...e,multiple:!1}),f=l.label?l.label({label:e.label,props:{for:n.value}}):e.label;return a(Ce,S({class:"v-radio-group"},u,g,{modelValue:t.value,"onUpdate:modelValue":V=>t.value=V,id:n.value}),{...l,default:V=>{let{id:C,isDisabled:_,isReadonly:R}=V;return a(j,null,[f&&a(M,{for:C.value},{default:()=>[f]}),a(Se,S(r,{id:C.value,defaultsTarget:"VRadio",trueIcon:e.trueIcon,falseIcon:e.falseIcon,type:e.type,disabled:_.value,readonly:R.value},b,{modelValue:t.value,"onUpdate:modelValue":y=>t.value=y}),l)])}})}),{}}}),ke=m("h1",{class:"text-center"},"RINGTONES",-1),Re={class:"listtable"},Ae=m("tr",{id:"list1"},[m("td",null,"Name"),m("td",null,"Listen"),m("td",null,"Choose")],-1),Be=["src"],$e={__name:"SettingsView",setup(e){const o=ce(),{alarms:s,selectedAlarms:l}=de(o);return(i,n)=>(B(),ve(fe,{id:"settings"},{default:h(()=>[a(T,{cols:"12"},{default:h(()=>[ke]),_:1}),a(T,{cols:"12"},{default:h(()=>[m("table",Re,[Ae,(B(!0),N(j,null,me(U(s),t=>(B(),N("tr",{id:"list2",key:t.id,height:"100px"},[m("td",null,Ve(t.name),1),m("td",null,[m("audio",{src:t.file,controls:""},null,8,Be)]),m("td",null,[a(pe,{class:"justify-center",modelValue:U(l),"onUpdate:modelValue":n[0]||(n[0]=u=>ye(l)?l.value=u:null)},{default:h(()=>[a(he,{value:t.id,color:"#1c2950"},null,8,["value"])]),_:2},1032,["modelValue"])])]))),128))])]),_:1})]),_:1}))}};export{$e as default};