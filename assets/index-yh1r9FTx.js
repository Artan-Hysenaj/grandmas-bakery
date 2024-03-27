import{h as a,r as n,y as b}from"./index-2DKQYwQH.js";/**
 * @license lucide-react v0.312.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const p=a("Check",[["path",{d:"M20 6 9 17l-5-5",key:"1gmf2c"}]]);function z(e){const r=n.useRef({value:e,previous:e});return n.useMemo(()=>(r.current.value!==e&&(r.current.previous=r.current.value,r.current.value=e),r.current.previous),[e])}function $(e){const[r,t]=n.useState(void 0);return b(()=>{if(e){t({width:e.offsetWidth,height:e.offsetHeight});const f=new ResizeObserver(i=>{if(!Array.isArray(i)||!i.length)return;const u=i[0];let o,s;if("borderBoxSize"in u){const c=u.borderBoxSize,d=Array.isArray(c)?c[0]:c;o=d.inlineSize,s=d.blockSize}else o=e.offsetWidth,s=e.offsetHeight;t({width:o,height:s})});return f.observe(e,{box:"border-box"}),()=>f.unobserve(e)}else t(void 0)},[e]),r}export{z as $,p as C,$ as a};
