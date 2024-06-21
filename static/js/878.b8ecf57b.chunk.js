"use strict";(self.webpackChunkportfolio_app=self.webpackChunkportfolio_app||[]).push([[878],{2878:(a,e,r)=>{r.r(e),r.d(e,{default:()=>m});var s=r(5043),t=r(6221),c=r(8628),o=r(4282),l=r(4063),n=r(4574),d=r(4819),i=(r(614),r(579));const f={badgeStyle:{paddingLeft:10,paddingRight:10,paddingTop:5,paddingBottom:5,margin:5},cardStyle:{borderRadius:10},cardTitleStyle:{fontSize:24,fontWeight:700},cardTextStyle:{textAlign:"left"},linkStyle:{textDecoration:"none",padding:10},buttonStyle:{margin:5}},m=a=>{var e;const r=(0,s.useContext)(n.Dx),{project:m}=a;return(0,i.jsx)(t.A,{children:(0,i.jsxs)(c.A,{style:{...f.cardStyle,backgroundColor:r.cardBackground,borderColor:r.cardBorderColor},text:r.bsSecondaryVariant,children:[(0,i.jsx)("div",{className:"card-image",children:(0,i.jsx)(c.A.Img,{width:.5,variant:"top",src:null===m||void 0===m?void 0:m.image})}),(0,i.jsxs)(c.A.Body,{children:[(0,i.jsx)(c.A.Title,{style:f.cardTitleStyle,children:m.title}),(0,i.jsx)(c.A.Text,{style:f.cardTextStyle,children:(x=m.bodyText,(0,i.jsx)(d.$,{children:x}))})]}),(0,i.jsx)(c.A.Body,{children:null===m||void 0===m||null===(e=m.links)||void 0===e?void 0:e.map((a=>(0,i.jsx)(o.A,{style:f.buttonStyle,variant:"outline-"+r.bsSecondaryVariant,onClick:()=>window.open(a.href,"_blank"),children:a.text},a.href)))}),m.tags&&(0,i.jsx)(c.A.Footer,{style:{backgroundColor:r.cardFooterBackground},children:m.tags.map((a=>(0,i.jsx)(l.A,{pill:!0,bg:r.bsSecondaryVariant,text:r.bsPrimaryVariant,style:f.badgeStyle,children:a},a)))})]})});var x}},4063:(a,e,r)=>{r.d(e,{A:()=>d});var s=r(8139),t=r.n(s),c=r(5043),o=r(7852),l=r(579);const n=c.forwardRef(((a,e)=>{let{bsPrefix:r,bg:s="primary",pill:c=!1,text:n,className:d,as:i="span",...f}=a;const m=(0,o.oU)(r,"badge");return(0,l.jsx)(i,{ref:e,...f,className:t()(d,m,c&&"rounded-pill",n&&"text-".concat(n),s&&"bg-".concat(s))})}));n.displayName="Badge";const d=n},4282:(a,e,r)=>{r.d(e,{A:()=>i});var s=r(8139),t=r.n(s),c=r(5043),o=r(4140),l=r(7852),n=r(579);const d=c.forwardRef(((a,e)=>{let{as:r,bsPrefix:s,variant:c="primary",size:d,active:i=!1,disabled:f=!1,className:m,...x}=a;const b=(0,l.oU)(s,"btn"),[y,{tagName:p}]=(0,o.Am)({tagName:r,disabled:f,...x}),u=p;return(0,n.jsx)(u,{...y,...x,ref:e,disabled:f,className:t()(m,b,i&&"active",c&&"".concat(b,"-").concat(c),d&&"".concat(b,"-").concat(d),x.href&&f&&"disabled")})}));d.displayName="Button";const i=d},8628:(a,e,r)=>{r.d(e,{A:()=>T});var s=r(8139),t=r.n(s),c=r(5043),o=r(7852),l=r(579);const n=c.forwardRef(((a,e)=>{let{className:r,bsPrefix:s,as:c="div",...n}=a;return s=(0,o.oU)(s,"card-body"),(0,l.jsx)(c,{ref:e,className:t()(r,s),...n})}));n.displayName="CardBody";const d=n,i=c.forwardRef(((a,e)=>{let{className:r,bsPrefix:s,as:c="div",...n}=a;return s=(0,o.oU)(s,"card-footer"),(0,l.jsx)(c,{ref:e,className:t()(r,s),...n})}));i.displayName="CardFooter";const f=i;var m=r(1778);const x=c.forwardRef(((a,e)=>{let{bsPrefix:r,className:s,as:n="div",...d}=a;const i=(0,o.oU)(r,"card-header"),f=(0,c.useMemo)((()=>({cardHeaderBsPrefix:i})),[i]);return(0,l.jsx)(m.A.Provider,{value:f,children:(0,l.jsx)(n,{ref:e,...d,className:t()(s,i)})})}));x.displayName="CardHeader";const b=x,y=c.forwardRef(((a,e)=>{let{bsPrefix:r,className:s,variant:c,as:n="img",...d}=a;const i=(0,o.oU)(r,"card-img");return(0,l.jsx)(n,{ref:e,className:t()(c?"".concat(i,"-").concat(c):i,s),...d})}));y.displayName="CardImg";const p=y,u=c.forwardRef(((a,e)=>{let{className:r,bsPrefix:s,as:c="div",...n}=a;return s=(0,o.oU)(s,"card-img-overlay"),(0,l.jsx)(c,{ref:e,className:t()(r,s),...n})}));u.displayName="CardImgOverlay";const N=u,g=c.forwardRef(((a,e)=>{let{className:r,bsPrefix:s,as:c="a",...n}=a;return s=(0,o.oU)(s,"card-link"),(0,l.jsx)(c,{ref:e,className:t()(r,s),...n})}));g.displayName="CardLink";const h=g;var v=r(4488);const j=(0,v.A)("h6"),A=c.forwardRef(((a,e)=>{let{className:r,bsPrefix:s,as:c=j,...n}=a;return s=(0,o.oU)(s,"card-subtitle"),(0,l.jsx)(c,{ref:e,className:t()(r,s),...n})}));A.displayName="CardSubtitle";const C=A,w=c.forwardRef(((a,e)=>{let{className:r,bsPrefix:s,as:c="p",...n}=a;return s=(0,o.oU)(s,"card-text"),(0,l.jsx)(c,{ref:e,className:t()(r,s),...n})}));w.displayName="CardText";const P=w,S=(0,v.A)("h5"),k=c.forwardRef(((a,e)=>{let{className:r,bsPrefix:s,as:c=S,...n}=a;return s=(0,o.oU)(s,"card-title"),(0,l.jsx)(c,{ref:e,className:t()(r,s),...n})}));k.displayName="CardTitle";const R=k,U=c.forwardRef(((a,e)=>{let{bsPrefix:r,className:s,bg:c,text:n,border:i,body:f=!1,children:m,as:x="div",...b}=a;const y=(0,o.oU)(r,"card");return(0,l.jsx)(x,{ref:e,...b,className:t()(s,y,c&&"bg-".concat(c),n&&"text-".concat(n),i&&"border-".concat(i)),children:f?(0,l.jsx)(d,{children:m}):m})}));U.displayName="Card";const T=Object.assign(U,{Img:p,Title:R,Subtitle:C,Body:d,Link:h,Text:P,Header:b,Footer:f,ImgOverlay:N})},6221:(a,e,r)=>{r.d(e,{A:()=>d});var s=r(8139),t=r.n(s),c=r(5043),o=r(7852),l=r(579);const n=c.forwardRef(((a,e)=>{const[{className:r,...s},{as:c="div",bsPrefix:n,spans:d}]=function(a){let{as:e,bsPrefix:r,className:s,...c}=a;r=(0,o.oU)(r,"col");const l=(0,o.gy)(),n=(0,o.Jm)(),d=[],i=[];return l.forEach((a=>{const e=c[a];let s,t,o;delete c[a],"object"===typeof e&&null!=e?({span:s,offset:t,order:o}=e):s=e;const l=a!==n?"-".concat(a):"";s&&d.push(!0===s?"".concat(r).concat(l):"".concat(r).concat(l,"-").concat(s)),null!=o&&i.push("order".concat(l,"-").concat(o)),null!=t&&i.push("offset".concat(l,"-").concat(t))})),[{...c,className:t()(s,...d,...i)},{as:e,bsPrefix:r,spans:d}]}(a);return(0,l.jsx)(c,{...s,ref:e,className:t()(r,!d.length&&n)})}));n.displayName="Col";const d=n},614:()=>{}}]);
//# sourceMappingURL=878.b8ecf57b.chunk.js.map