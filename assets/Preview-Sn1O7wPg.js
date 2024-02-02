import{g as y,r as b}from"./index-kLa24A_V.js";function v(r,e){for(var t=0;t<e.length;t++){const n=e[t];if(typeof n!="string"&&!Array.isArray(n)){for(const a in n)if(a!=="default"&&!(a in r)){const o=Object.getOwnPropertyDescriptor(n,a);o&&Object.defineProperty(r,a,o.get?o:{enumerable:!0,get:()=>n[a]})}}}return Object.freeze(Object.defineProperty(r,Symbol.toStringTag,{value:"Module"}))}var w=Object.create,i=Object.defineProperty,P=Object.getOwnPropertyDescriptor,O=Object.getOwnPropertyNames,x=Object.getPrototypeOf,I=Object.prototype.hasOwnProperty,j=(r,e,t)=>e in r?i(r,e,{enumerable:!0,configurable:!0,writable:!0,value:t}):r[e]=t,E=(r,e)=>{for(var t in e)i(r,t,{get:e[t],enumerable:!0})},h=(r,e,t,n)=>{if(e&&typeof e=="object"||typeof e=="function")for(let a of O(e))!I.call(r,a)&&a!==t&&i(r,a,{get:()=>e[a],enumerable:!(n=P(e,a))||n.enumerable});return r},S=(r,e,t)=>(t=r!=null?w(x(r)):{},h(e||!r||!r.__esModule?i(t,"default",{value:r,enumerable:!0}):t,r)),C=r=>h(i({},"__esModule",{value:!0}),r),p=(r,e,t)=>(j(r,typeof e!="symbol"?e+"":e,t),t),_={};E(_,{default:()=>N});var g=C(_),s=S(b);const u="64px",d={};class N extends s.Component{constructor(){super(...arguments),p(this,"mounted",!1),p(this,"state",{image:null}),p(this,"handleKeyPress",e=>{(e.key==="Enter"||e.key===" ")&&this.props.onClick()})}componentDidMount(){this.mounted=!0,this.fetchImage(this.props)}componentDidUpdate(e){const{url:t,light:n}=this.props;(e.url!==t||e.light!==n)&&this.fetchImage(this.props)}componentWillUnmount(){this.mounted=!1}fetchImage({url:e,light:t,oEmbedUrl:n}){if(!s.default.isValidElement(t)){if(typeof t=="string"){this.setState({image:t});return}if(d[e]){this.setState({image:d[e]});return}return this.setState({image:null}),window.fetch(n.replace("{url}",e)).then(a=>a.json()).then(a=>{if(a.thumbnail_url&&this.mounted){const o=a.thumbnail_url.replace("height=100","height=480").replace("-d_295x166","-d_640");this.setState({image:o}),d[e]=o}})}}render(){const{light:e,onClick:t,playIcon:n,previewTabIndex:a}=this.props,{image:o}=this.state,l=s.default.isValidElement(e),f={display:"flex",alignItems:"center",justifyContent:"center"},c={preview:{width:"100%",height:"100%",backgroundImage:o&&!l?`url(${o})`:void 0,backgroundSize:"cover",backgroundPosition:"center",cursor:"pointer",...f},shadow:{background:"radial-gradient(rgb(0, 0, 0, 0.3), rgba(0, 0, 0, 0) 60%)",borderRadius:u,width:u,height:u,position:l?"absolute":void 0,...f},playIcon:{borderStyle:"solid",borderWidth:"16px 0 16px 26px",borderColor:"transparent transparent transparent white",marginLeft:"7px"}},m=s.default.createElement("div",{style:c.shadow,className:"react-player__shadow"},s.default.createElement("div",{style:c.playIcon,className:"react-player__play-icon"}));return s.default.createElement("div",{style:c.preview,className:"react-player__preview",onClick:t,tabIndex:a,onKeyPress:this.handleKeyPress},l?e:null,n||m)}}const k=y(g),M=v({__proto__:null,default:k},[g]);export{M as P};
