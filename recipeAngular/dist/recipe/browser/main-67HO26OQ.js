import{b as w,c as F,d as I,e as P,f as D,h as N,i as S,k as x}from"./chunk-I2M7TLY7.js";import{$a as g,Ba as u,Vb as R,Za as f,_ as d,ab as y,da as p,db as v,eb as C,ma as h,nc as b,ta as c,xa as m,xc as M,yb as A}from"./chunk-VSLUT4GN.js";var E=[{path:"",redirectTo:"identification",pathMatch:"full"},{path:"identification",loadChildren:()=>import("./chunk-BNR6AAIB.js").then(o=>o.IdentificationModule)},{path:"recipe",loadChildren:()=>import("./chunk-AW4BN5GV.js").then(o=>o.RecipeModule)}];var B="@",H=(()=>{let e=class e{constructor(r,i,n,s,a){this.doc=r,this.delegate=i,this.zone=n,this.animationType=s,this.moduleImpl=a,this._rendererFactoryPromise=null,this.scheduler=m(g,{optional:!0})}ngOnDestroy(){this._engine?.flush()}loadImpl(){return(this.moduleImpl??import("./chunk-OERKEWGJ.js")).catch(i=>{throw new d(5300,!1)}).then(({\u0275createEngine:i,\u0275AnimationRendererFactory:n})=>{this._engine=i(this.animationType,this.doc,this.scheduler);let s=new n(this.delegate,this._engine,this.zone);return this.delegate=s,s})}createRenderer(r,i){let n=this.delegate.createRenderer(r,i);if(n.\u0275type===0)return n;typeof n.throwOnSyntheticProps=="boolean"&&(n.throwOnSyntheticProps=!1);let s=new l(n);return i?.data?.animation&&!this._rendererFactoryPromise&&(this._rendererFactoryPromise=this.loadImpl()),this._rendererFactoryPromise?.then(a=>{let k=a.createRenderer(r,i);s.use(k)}).catch(a=>{s.use(n)}),s}begin(){this.delegate.begin?.()}end(){this.delegate.end?.()}whenRenderingDone(){return this.delegate.whenRenderingDone?.()??Promise.resolve()}};e.\u0275fac=function(i){f()},e.\u0275prov=h({token:e,factory:e.\u0275fac});let o=e;return o})(),l=class{constructor(e){this.delegate=e,this.replay=[],this.\u0275type=1}use(e){if(this.delegate=e,this.replay!==null){for(let t of this.replay)t(e);this.replay=null}}get data(){return this.delegate.data}destroy(){this.replay=null,this.delegate.destroy()}createElement(e,t){return this.delegate.createElement(e,t)}createComment(e){return this.delegate.createComment(e)}createText(e){return this.delegate.createText(e)}get destroyNode(){return this.delegate.destroyNode}appendChild(e,t){this.delegate.appendChild(e,t)}insertBefore(e,t,r,i){this.delegate.insertBefore(e,t,r,i)}removeChild(e,t,r){this.delegate.removeChild(e,t,r)}selectRootElement(e,t){return this.delegate.selectRootElement(e,t)}parentNode(e){return this.delegate.parentNode(e)}nextSibling(e){return this.delegate.nextSibling(e)}setAttribute(e,t,r,i){this.delegate.setAttribute(e,t,r,i)}removeAttribute(e,t,r){this.delegate.removeAttribute(e,t,r)}addClass(e,t){this.delegate.addClass(e,t)}removeClass(e,t){this.delegate.removeClass(e,t)}setStyle(e,t,r,i){this.delegate.setStyle(e,t,r,i)}removeStyle(e,t,r){this.delegate.removeStyle(e,t,r)}setProperty(e,t,r){this.shouldReplay(t)&&this.replay.push(i=>i.setProperty(e,t,r)),this.delegate.setProperty(e,t,r)}setValue(e,t){this.delegate.setValue(e,t)}listen(e,t,r){return this.shouldReplay(t)&&this.replay.push(i=>i.listen(e,t,r)),this.delegate.listen(e,t,r)}shouldReplay(e){return this.replay!==null&&e.startsWith(B)}};function O(o="animations"){return v("NgAsyncAnimations"),u([{provide:y,useFactory:(e,t,r)=>new H(e,t,r,o),deps:[b,P,C]},{provide:c,useValue:o==="noop"?"NoopAnimations":"BrowserAnimations"}])}var T={providers:[x(E),N(),w(F()),O()]};var _=(()=>{let e=class e{constructor(){this.title="Recipe"}};e.\u0275fac=function(i){return new(i||e)},e.\u0275cmp=p({type:e,selectors:[["app-root"]],standalone:!0,features:[R],decls:1,vars:0,template:function(i,n){i&1&&A(0,"router-outlet")},dependencies:[M,S,I]});let o=e;return o})();D(_,T).catch(o=>console.error(o));
