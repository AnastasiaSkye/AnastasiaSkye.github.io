"use strict";(self.webpackChunkaston_project=self.webpackChunkaston_project||[]).push([[885],{9917:(e,t,a)=>{a.d(t,{MF:()=>m,s4:()=>h,u1:()=>l});var s=a(2791),r=a(1350),i=a(5198),n=a(3537),d=a(3641);const o={async addFavorite(e){await d.V5.addFavorite(e)},async removeFavorite(e){await d.V5.removeFavorite(e)},readFavorites:async()=>await d.V5.readFavorites()},l=()=>{const{authStatus:e}=(0,i.aC)(),{favoritesId:t,setFavoritesId:a}=(0,s.useContext)(r.Y),[d,l]=(0,s.useState)(!0),c=(0,s.useCallback)((async()=>{l(!0),a(await o.readFavorites()),l(!1)}),[a]);return(0,s.useEffect)((()=>{e===n.tD.SignedIn?c():(a([]),l(!1))}),[e,c,a]),{favoritesId:t,isFavoritesIdLoading:d}};var c=a(7689);const h=e=>{const{authStatus:t}=(0,i.aC)(),{favoritesId:a,setFavoritesId:d}=(0,s.useContext)(r.Y),[l,h]=(0,s.useState)(a.includes(e)),v=(0,c.s0)(),u=(0,s.useCallback)((e=>{d((t=>t.filter((t=>t!==e))))}),[d]);return{isFavorite:l,changeFavorite:async()=>{t===n.tD.SignedIn?l?(await o.removeFavorite(e),h(!1),u(e)):(await o.addFavorite(e),h(!0)):v(n.RouteName.REGISTRATION_PAGE)}}};var v=a(8766),u=a(184);const m=(0,s.memo)((e=>{let{favoriteId:t}=e;const{data:a,isLoading:s}=(0,d.b5)(t);return(0,u.jsx)(u.Fragment,{children:!s&&a&&(0,u.jsx)(v.zT,{plant:a})})}))},8766:(e,t,a)=>{a.d(t,{zT:()=>u,Qz:()=>m,Xi:()=>v});var s=a(2791),r=a(1087),i=a(1765),n=a(9917),d=a(184);const o=(0,s.memo)((e=>{let{id:t}=e;const{isFavorite:a,changeFavorite:s}=(0,n.s4)(t);return(0,d.jsx)("button",{className:"heart",onClick:s,"data-testid":"heart",children:a?(0,d.jsx)(i.r6X,{size:25,"data-testid":"heart-add"}):(0,d.jsx)(i.JUb,{size:25,"data-testid":"heart-remove"})})}));var l=a(3537),c=a(8222),h=a(8760);const v=(0,s.memo)((e=>{let{src:t,alt:a,className:s}=e;return(0,d.jsx)("div",{className:"plant-img ".concat(s," ").concat(!t&&"plant-filter"),children:t?(0,d.jsx)(h.Ee,{src:t,alt:a}):(0,d.jsx)(h.Ee,{className:"filter",src:"https://perenual.com/storage/image/missing_image.jpg",alt:"Missing"})})})),u=(0,s.memo)((e=>{let{plant:t}=e;return(0,d.jsxs)("div",{className:"plant-card","data-testid":"plant-card",children:[(0,d.jsx)(r.OL,{to:l.RouteName.PlANT_PAGE+"/"+t.id,children:(0,d.jsx)(v,{src:t.image,alt:t.name})}),(0,d.jsxs)("div",{className:"plant-card__div",children:[(0,d.jsx)(r.OL,{to:l.RouteName.PlANT_PAGE+"/"+t.id,children:(0,d.jsx)("h3",{children:t.name})}),(0,d.jsxs)("div",{className:"plant-card__info",children:[(0,d.jsx)("div",{children:(0,c.gW)(t).map((e=>(0,d.jsx)("div",{children:e},e)))}),(0,d.jsx)(o,{id:t.id})]})]})]})}));function m(e){let{plant:t}=e;return(0,d.jsxs)("div",{className:"plant","data-testid":"plant-details",children:[(0,d.jsx)(v,{src:t.image,alt:t.name}),(0,d.jsxs)("div",{children:[(0,d.jsx)("h1",{children:t.name}),(0,d.jsx)("div",{className:"plant__description","data-testid":"description",children:t.description}),(0,d.jsxs)("div",{className:"plant__info-card","data-testid":"info-card",children:[(0,c.Y7)(t).map((e=>(0,d.jsx)("div",{children:e},e))),(0,d.jsx)(o,{id:t.id})]})]})]})}},9885:(e,t,a)=>{a.r(t),a.d(t,{default:()=>c});var s=a(3002),r=a(8766),i=a(7755),n=a(9917),d=a(3641),o=a(8760),l=a(184);function c(){const{data:e=[],isLoading:t}=(0,d.Au)(),{isFavoritesIdLoading:a}=(0,n.u1)();return t||a?(0,l.jsx)(o.aN,{}):(0,l.jsx)(s.SV,{FallbackComponent:o.NY,children:(0,l.jsx)(i.C,{title:"Indoor plants",isEmpty:0===e.length,children:e.map((e=>(0,l.jsx)(r.zT,{plant:e},e.id)))})})}},7755:(e,t,a)=>{a.d(t,{C:()=>r});a(2791);var s=a(184);function r(e){let{title:t,children:a,isEmpty:r}=e;return(0,s.jsxs)("div",{className:"card-list","data-testid":"card-list",children:[(0,s.jsxs)("div",{className:"card-list__div",children:[(0,s.jsx)("h1",{"data-testid":"title",children:t}),(0,s.jsx)("div",{children:"Here everyone can find the ideal plant that matches your preferences"})]}),(0,s.jsx)("section",{className:"card-list__section",children:a}),r&&(0,s.jsx)("h2",{children:"Nothing found"})]})}},3002:(e,t,a)=>{a.d(t,{SV:()=>n});var s=a(2791);const r=(0,s.createContext)(null),i={didCatch:!1,error:null};class n extends s.Component{constructor(e){super(e),this.resetErrorBoundary=this.resetErrorBoundary.bind(this),this.state=i}static getDerivedStateFromError(e){return{didCatch:!0,error:e}}resetErrorBoundary(){const{error:e}=this.state;if(null!==e){for(var t,a,s=arguments.length,r=new Array(s),n=0;n<s;n++)r[n]=arguments[n];null===(t=(a=this.props).onReset)||void 0===t||t.call(a,{args:r,reason:"imperative-api"}),this.setState(i)}}componentDidCatch(e,t){var a,s;null===(a=(s=this.props).onError)||void 0===a||a.call(s,e,t)}componentDidUpdate(e,t){const{didCatch:a}=this.state,{resetKeys:s}=this.props;var r,n;a&&null!==t.error&&function(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[],t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:[];return e.length!==t.length||e.some(((e,a)=>!Object.is(e,t[a])))}(e.resetKeys,s)&&(null===(r=(n=this.props).onReset)||void 0===r||r.call(n,{next:s,prev:e.resetKeys,reason:"keys"}),this.setState(i))}render(){const{children:e,fallbackRender:t,FallbackComponent:a,fallback:i}=this.props,{didCatch:n,error:d}=this.state;let o=e;if(n){const e={error:d,resetErrorBoundary:this.resetErrorBoundary};if("function"===typeof t)o=t(e);else if(a)o=(0,s.createElement)(a,e);else{if(null!==i&&!(0,s.isValidElement)(i))throw d;o=i}}return(0,s.createElement)(r.Provider,{value:{didCatch:n,error:d,resetErrorBoundary:this.resetErrorBoundary}},o)}}}}]);
//# sourceMappingURL=885.f4979622.chunk.js.map