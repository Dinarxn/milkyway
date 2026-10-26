(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const s of document.querySelectorAll('link[rel="modulepreload"]'))n(s);new MutationObserver(s=>{for(const a of s)if(a.type==="childList")for(const r of a.addedNodes)r.tagName==="LINK"&&r.rel==="modulepreload"&&n(r)}).observe(document,{childList:!0,subtree:!0});function e(s){const a={};return s.integrity&&(a.integrity=s.integrity),s.referrerPolicy&&(a.referrerPolicy=s.referrerPolicy),s.crossOrigin==="use-credentials"?a.credentials="include":s.crossOrigin==="anonymous"?a.credentials="omit":a.credentials="same-origin",a}function n(s){if(s.ep)return;s.ep=!0;const a=e(s);fetch(s.href,a)}})();/**
 * @license
 * Copyright 2010-2024 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const Ur="170",Pi={ROTATE:0,DOLLY:1,PAN:2},Ci={ROTATE:0,PAN:1,DOLLY_PAN:2,DOLLY_ROTATE:3},ac=0,no=1,rc=2,xl=1,oc=2,Mn=3,zn=0,Ee=1,De=2,Fn=0,Di=1,Be=2,io=3,so=4,lc=5,Jn=100,cc=101,hc=102,uc=103,dc=104,fc=200,pc=201,mc=202,gc=203,Wa=204,Xa=205,_c=206,vc=207,xc=208,Mc=209,yc=210,Sc=211,Ec=212,bc=213,Tc=214,qa=0,Ya=1,$a=2,Fi=3,Ka=4,ja=5,Za=6,Ja=7,Ml=0,Ac=1,wc=2,On=0,Cc=1,Rc=2,Pc=3,Dc=4,Lc=5,Ic=6,Uc=7,yl=300,Oi=301,Bi=302,Qa=303,tr=304,ia=306,er=1e3,ti=1001,nr=1002,nn=1003,Nc=1004,ps=1005,hn=1006,oa=1007,ei=1008,bn=1009,Sl=1010,El=1011,as=1012,Nr=1013,ii=1014,yn=1015,rs=1016,Fr=1017,Or=1018,zi=1020,bl=35902,Tl=1021,Al=1022,en=1023,wl=1024,Cl=1025,Li=1026,ki=1027,Rl=1028,Br=1029,Pl=1030,zr=1031,kr=1033,Ws=33776,Xs=33777,qs=33778,Ys=33779,ir=35840,sr=35841,ar=35842,rr=35843,or=36196,lr=37492,cr=37496,hr=37808,ur=37809,dr=37810,fr=37811,pr=37812,mr=37813,gr=37814,_r=37815,vr=37816,xr=37817,Mr=37818,yr=37819,Sr=37820,Er=37821,$s=36492,br=36494,Tr=36495,Dl=36283,Ar=36284,wr=36285,Cr=36286,Fc=3200,Oc=3201,Ll=0,Bc=1,Nn="",Ve="srgb",Hi="srgb-linear",sa="linear",Yt="srgb",li=7680,ao=519,zc=512,kc=513,Gc=514,Il=515,Hc=516,Vc=517,Wc=518,Xc=519,Rr=35044,ro="300 es",Sn=2e3,Js=2001;class ri{addEventListener(t,e){this._listeners===void 0&&(this._listeners={});const n=this._listeners;n[t]===void 0&&(n[t]=[]),n[t].indexOf(e)===-1&&n[t].push(e)}hasEventListener(t,e){if(this._listeners===void 0)return!1;const n=this._listeners;return n[t]!==void 0&&n[t].indexOf(e)!==-1}removeEventListener(t,e){if(this._listeners===void 0)return;const s=this._listeners[t];if(s!==void 0){const a=s.indexOf(e);a!==-1&&s.splice(a,1)}}dispatchEvent(t){if(this._listeners===void 0)return;const n=this._listeners[t.type];if(n!==void 0){t.target=this;const s=n.slice(0);for(let a=0,r=s.length;a<r;a++)s[a].call(this,t);t.target=null}}}const ye=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],Ks=Math.PI/180,Pr=180/Math.PI;function Bn(){const i=Math.random()*4294967295|0,t=Math.random()*4294967295|0,e=Math.random()*4294967295|0,n=Math.random()*4294967295|0;return(ye[i&255]+ye[i>>8&255]+ye[i>>16&255]+ye[i>>24&255]+"-"+ye[t&255]+ye[t>>8&255]+"-"+ye[t>>16&15|64]+ye[t>>24&255]+"-"+ye[e&63|128]+ye[e>>8&255]+"-"+ye[e>>16&255]+ye[e>>24&255]+ye[n&255]+ye[n>>8&255]+ye[n>>16&255]+ye[n>>24&255]).toLowerCase()}function Ae(i,t,e){return Math.max(t,Math.min(e,i))}function qc(i,t){return(i%t+t)%t}function la(i,t,e){return(1-e)*i+e*t}function cn(i,t){switch(t.constructor){case Float32Array:return i;case Uint32Array:return i/4294967295;case Uint16Array:return i/65535;case Uint8Array:return i/255;case Int32Array:return Math.max(i/2147483647,-1);case Int16Array:return Math.max(i/32767,-1);case Int8Array:return Math.max(i/127,-1);default:throw new Error("Invalid component type.")}}function $t(i,t){switch(t.constructor){case Float32Array:return i;case Uint32Array:return Math.round(i*4294967295);case Uint16Array:return Math.round(i*65535);case Uint8Array:return Math.round(i*255);case Int32Array:return Math.round(i*2147483647);case Int16Array:return Math.round(i*32767);case Int8Array:return Math.round(i*127);default:throw new Error("Invalid component type.")}}const Yc={DEG2RAD:Ks};class Mt{constructor(t=0,e=0){Mt.prototype.isVector2=!0,this.x=t,this.y=e}get width(){return this.x}set width(t){this.x=t}get height(){return this.y}set height(t){this.y=t}set(t,e){return this.x=t,this.y=e,this}setScalar(t){return this.x=t,this.y=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y)}copy(t){return this.x=t.x,this.y=t.y,this}add(t){return this.x+=t.x,this.y+=t.y,this}addScalar(t){return this.x+=t,this.y+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this}subScalar(t){return this.x-=t,this.y-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this}multiply(t){return this.x*=t.x,this.y*=t.y,this}multiplyScalar(t){return this.x*=t,this.y*=t,this}divide(t){return this.x/=t.x,this.y/=t.y,this}divideScalar(t){return this.multiplyScalar(1/t)}applyMatrix3(t){const e=this.x,n=this.y,s=t.elements;return this.x=s[0]*e+s[3]*n+s[6],this.y=s[1]*e+s[4]*n+s[7],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this}clamp(t,e){return this.x=Math.max(t.x,Math.min(e.x,this.x)),this.y=Math.max(t.y,Math.min(e.y,this.y)),this}clampScalar(t,e){return this.x=Math.max(t,Math.min(e,this.x)),this.y=Math.max(t,Math.min(e,this.y)),this}clampLength(t,e){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(t,Math.min(e,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(t){return this.x*t.x+this.y*t.y}cross(t){return this.x*t.y-this.y*t.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(t){const e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;const n=this.dot(t)/e;return Math.acos(Ae(n,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){const e=this.x-t.x,n=this.y-t.y;return e*e+n*n}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this}equals(t){return t.x===this.x&&t.y===this.y}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this}rotateAround(t,e){const n=Math.cos(e),s=Math.sin(e),a=this.x-t.x,r=this.y-t.y;return this.x=a*n-r*s+t.x,this.y=a*s+r*n+t.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class Pt{constructor(t,e,n,s,a,r,o,l,c){Pt.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],t!==void 0&&this.set(t,e,n,s,a,r,o,l,c)}set(t,e,n,s,a,r,o,l,c){const u=this.elements;return u[0]=t,u[1]=s,u[2]=o,u[3]=e,u[4]=a,u[5]=l,u[6]=n,u[7]=r,u[8]=c,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(t){const e=this.elements,n=t.elements;return e[0]=n[0],e[1]=n[1],e[2]=n[2],e[3]=n[3],e[4]=n[4],e[5]=n[5],e[6]=n[6],e[7]=n[7],e[8]=n[8],this}extractBasis(t,e,n){return t.setFromMatrix3Column(this,0),e.setFromMatrix3Column(this,1),n.setFromMatrix3Column(this,2),this}setFromMatrix4(t){const e=t.elements;return this.set(e[0],e[4],e[8],e[1],e[5],e[9],e[2],e[6],e[10]),this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){const n=t.elements,s=e.elements,a=this.elements,r=n[0],o=n[3],l=n[6],c=n[1],u=n[4],f=n[7],p=n[2],d=n[5],g=n[8],_=s[0],m=s[3],h=s[6],T=s[1],b=s[4],S=s[7],O=s[2],C=s[5],R=s[8];return a[0]=r*_+o*T+l*O,a[3]=r*m+o*b+l*C,a[6]=r*h+o*S+l*R,a[1]=c*_+u*T+f*O,a[4]=c*m+u*b+f*C,a[7]=c*h+u*S+f*R,a[2]=p*_+d*T+g*O,a[5]=p*m+d*b+g*C,a[8]=p*h+d*S+g*R,this}multiplyScalar(t){const e=this.elements;return e[0]*=t,e[3]*=t,e[6]*=t,e[1]*=t,e[4]*=t,e[7]*=t,e[2]*=t,e[5]*=t,e[8]*=t,this}determinant(){const t=this.elements,e=t[0],n=t[1],s=t[2],a=t[3],r=t[4],o=t[5],l=t[6],c=t[7],u=t[8];return e*r*u-e*o*c-n*a*u+n*o*l+s*a*c-s*r*l}invert(){const t=this.elements,e=t[0],n=t[1],s=t[2],a=t[3],r=t[4],o=t[5],l=t[6],c=t[7],u=t[8],f=u*r-o*c,p=o*l-u*a,d=c*a-r*l,g=e*f+n*p+s*d;if(g===0)return this.set(0,0,0,0,0,0,0,0,0);const _=1/g;return t[0]=f*_,t[1]=(s*c-u*n)*_,t[2]=(o*n-s*r)*_,t[3]=p*_,t[4]=(u*e-s*l)*_,t[5]=(s*a-o*e)*_,t[6]=d*_,t[7]=(n*l-c*e)*_,t[8]=(r*e-n*a)*_,this}transpose(){let t;const e=this.elements;return t=e[1],e[1]=e[3],e[3]=t,t=e[2],e[2]=e[6],e[6]=t,t=e[5],e[5]=e[7],e[7]=t,this}getNormalMatrix(t){return this.setFromMatrix4(t).invert().transpose()}transposeIntoArray(t){const e=this.elements;return t[0]=e[0],t[1]=e[3],t[2]=e[6],t[3]=e[1],t[4]=e[4],t[5]=e[7],t[6]=e[2],t[7]=e[5],t[8]=e[8],this}setUvTransform(t,e,n,s,a,r,o){const l=Math.cos(a),c=Math.sin(a);return this.set(n*l,n*c,-n*(l*r+c*o)+r+t,-s*c,s*l,-s*(-c*r+l*o)+o+e,0,0,1),this}scale(t,e){return this.premultiply(ca.makeScale(t,e)),this}rotate(t){return this.premultiply(ca.makeRotation(-t)),this}translate(t,e){return this.premultiply(ca.makeTranslation(t,e)),this}makeTranslation(t,e){return t.isVector2?this.set(1,0,t.x,0,1,t.y,0,0,1):this.set(1,0,t,0,1,e,0,0,1),this}makeRotation(t){const e=Math.cos(t),n=Math.sin(t);return this.set(e,-n,0,n,e,0,0,0,1),this}makeScale(t,e){return this.set(t,0,0,0,e,0,0,0,1),this}equals(t){const e=this.elements,n=t.elements;for(let s=0;s<9;s++)if(e[s]!==n[s])return!1;return!0}fromArray(t,e=0){for(let n=0;n<9;n++)this.elements[n]=t[n+e];return this}toArray(t=[],e=0){const n=this.elements;return t[e]=n[0],t[e+1]=n[1],t[e+2]=n[2],t[e+3]=n[3],t[e+4]=n[4],t[e+5]=n[5],t[e+6]=n[6],t[e+7]=n[7],t[e+8]=n[8],t}clone(){return new this.constructor().fromArray(this.elements)}}const ca=new Pt;function Ul(i){for(let t=i.length-1;t>=0;--t)if(i[t]>=65535)return!0;return!1}function Qs(i){return document.createElementNS("http://www.w3.org/1999/xhtml",i)}function $c(){const i=Qs("canvas");return i.style.display="block",i}const oo={};function is(i){i in oo||(oo[i]=!0,console.warn(i))}function Kc(i,t,e){return new Promise(function(n,s){function a(){switch(i.clientWaitSync(t,i.SYNC_FLUSH_COMMANDS_BIT,0)){case i.WAIT_FAILED:s();break;case i.TIMEOUT_EXPIRED:setTimeout(a,e);break;default:n()}}setTimeout(a,e)})}function jc(i){const t=i.elements;t[2]=.5*t[2]+.5*t[3],t[6]=.5*t[6]+.5*t[7],t[10]=.5*t[10]+.5*t[11],t[14]=.5*t[14]+.5*t[15]}function Zc(i){const t=i.elements;t[11]===-1?(t[10]=-t[10]-1,t[14]=-t[14]):(t[10]=-t[10],t[14]=-t[14]+1)}const Gt={enabled:!0,workingColorSpace:Hi,spaces:{},convert:function(i,t,e){return this.enabled===!1||t===e||!t||!e||(this.spaces[t].transfer===Yt&&(i.r=En(i.r),i.g=En(i.g),i.b=En(i.b)),this.spaces[t].primaries!==this.spaces[e].primaries&&(i.applyMatrix3(this.spaces[t].toXYZ),i.applyMatrix3(this.spaces[e].fromXYZ)),this.spaces[e].transfer===Yt&&(i.r=Ii(i.r),i.g=Ii(i.g),i.b=Ii(i.b))),i},fromWorkingColorSpace:function(i,t){return this.convert(i,this.workingColorSpace,t)},toWorkingColorSpace:function(i,t){return this.convert(i,t,this.workingColorSpace)},getPrimaries:function(i){return this.spaces[i].primaries},getTransfer:function(i){return i===Nn?sa:this.spaces[i].transfer},getLuminanceCoefficients:function(i,t=this.workingColorSpace){return i.fromArray(this.spaces[t].luminanceCoefficients)},define:function(i){Object.assign(this.spaces,i)},_getMatrix:function(i,t,e){return i.copy(this.spaces[t].toXYZ).multiply(this.spaces[e].fromXYZ)},_getDrawingBufferColorSpace:function(i){return this.spaces[i].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(i=this.workingColorSpace){return this.spaces[i].workingColorSpaceConfig.unpackColorSpace}};function En(i){return i<.04045?i*.0773993808:Math.pow(i*.9478672986+.0521327014,2.4)}function Ii(i){return i<.0031308?i*12.92:1.055*Math.pow(i,.41666)-.055}const lo=[.64,.33,.3,.6,.15,.06],co=[.2126,.7152,.0722],ho=[.3127,.329],uo=new Pt().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),fo=new Pt().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);Gt.define({[Hi]:{primaries:lo,whitePoint:ho,transfer:sa,toXYZ:uo,fromXYZ:fo,luminanceCoefficients:co,workingColorSpaceConfig:{unpackColorSpace:Ve},outputColorSpaceConfig:{drawingBufferColorSpace:Ve}},[Ve]:{primaries:lo,whitePoint:ho,transfer:Yt,toXYZ:uo,fromXYZ:fo,luminanceCoefficients:co,outputColorSpaceConfig:{drawingBufferColorSpace:Ve}}});let ci;class Jc{static getDataURL(t){if(/^data:/i.test(t.src)||typeof HTMLCanvasElement>"u")return t.src;let e;if(t instanceof HTMLCanvasElement)e=t;else{ci===void 0&&(ci=Qs("canvas")),ci.width=t.width,ci.height=t.height;const n=ci.getContext("2d");t instanceof ImageData?n.putImageData(t,0,0):n.drawImage(t,0,0,t.width,t.height),e=ci}return e.width>2048||e.height>2048?(console.warn("THREE.ImageUtils.getDataURL: Image converted to jpg for performance reasons",t),e.toDataURL("image/jpeg",.6)):e.toDataURL("image/png")}static sRGBToLinear(t){if(typeof HTMLImageElement<"u"&&t instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&t instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&t instanceof ImageBitmap){const e=Qs("canvas");e.width=t.width,e.height=t.height;const n=e.getContext("2d");n.drawImage(t,0,0,t.width,t.height);const s=n.getImageData(0,0,t.width,t.height),a=s.data;for(let r=0;r<a.length;r++)a[r]=En(a[r]/255)*255;return n.putImageData(s,0,0),e}else if(t.data){const e=t.data.slice(0);for(let n=0;n<e.length;n++)e instanceof Uint8Array||e instanceof Uint8ClampedArray?e[n]=Math.floor(En(e[n]/255)*255):e[n]=En(e[n]);return{data:e,width:t.width,height:t.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),t}}let Qc=0;class Nl{constructor(t=null){this.isSource=!0,Object.defineProperty(this,"id",{value:Qc++}),this.uuid=Bn(),this.data=t,this.dataReady=!0,this.version=0}set needsUpdate(t){t===!0&&this.version++}toJSON(t){const e=t===void 0||typeof t=="string";if(!e&&t.images[this.uuid]!==void 0)return t.images[this.uuid];const n={uuid:this.uuid,url:""},s=this.data;if(s!==null){let a;if(Array.isArray(s)){a=[];for(let r=0,o=s.length;r<o;r++)s[r].isDataTexture?a.push(ha(s[r].image)):a.push(ha(s[r]))}else a=ha(s);n.url=a}return e||(t.images[this.uuid]=n),n}}function ha(i){return typeof HTMLImageElement<"u"&&i instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&i instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&i instanceof ImageBitmap?Jc.getDataURL(i):i.data?{data:Array.from(i.data),width:i.width,height:i.height,type:i.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}let th=0;class Ce extends ri{constructor(t=Ce.DEFAULT_IMAGE,e=Ce.DEFAULT_MAPPING,n=ti,s=ti,a=hn,r=ei,o=en,l=bn,c=Ce.DEFAULT_ANISOTROPY,u=Nn){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:th++}),this.uuid=Bn(),this.name="",this.source=new Nl(t),this.mipmaps=[],this.mapping=e,this.channel=0,this.wrapS=n,this.wrapT=s,this.magFilter=a,this.minFilter=r,this.anisotropy=c,this.format=o,this.internalFormat=null,this.type=l,this.offset=new Mt(0,0),this.repeat=new Mt(1,1),this.center=new Mt(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new Pt,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=u,this.userData={},this.version=0,this.onUpdate=null,this.isRenderTargetTexture=!1,this.pmremVersion=0}get image(){return this.source.data}set image(t=null){this.source.data=t}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(t){return this.name=t.name,this.source=t.source,this.mipmaps=t.mipmaps.slice(0),this.mapping=t.mapping,this.channel=t.channel,this.wrapS=t.wrapS,this.wrapT=t.wrapT,this.magFilter=t.magFilter,this.minFilter=t.minFilter,this.anisotropy=t.anisotropy,this.format=t.format,this.internalFormat=t.internalFormat,this.type=t.type,this.offset.copy(t.offset),this.repeat.copy(t.repeat),this.center.copy(t.center),this.rotation=t.rotation,this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrix.copy(t.matrix),this.generateMipmaps=t.generateMipmaps,this.premultiplyAlpha=t.premultiplyAlpha,this.flipY=t.flipY,this.unpackAlignment=t.unpackAlignment,this.colorSpace=t.colorSpace,this.userData=JSON.parse(JSON.stringify(t.userData)),this.needsUpdate=!0,this}toJSON(t){const e=t===void 0||typeof t=="string";if(!e&&t.textures[this.uuid]!==void 0)return t.textures[this.uuid];const n={metadata:{version:4.6,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(t).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(n.userData=this.userData),e||(t.textures[this.uuid]=n),n}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(t){if(this.mapping!==yl)return t;if(t.applyMatrix3(this.matrix),t.x<0||t.x>1)switch(this.wrapS){case er:t.x=t.x-Math.floor(t.x);break;case ti:t.x=t.x<0?0:1;break;case nr:Math.abs(Math.floor(t.x)%2)===1?t.x=Math.ceil(t.x)-t.x:t.x=t.x-Math.floor(t.x);break}if(t.y<0||t.y>1)switch(this.wrapT){case er:t.y=t.y-Math.floor(t.y);break;case ti:t.y=t.y<0?0:1;break;case nr:Math.abs(Math.floor(t.y)%2)===1?t.y=Math.ceil(t.y)-t.y:t.y=t.y-Math.floor(t.y);break}return this.flipY&&(t.y=1-t.y),t}set needsUpdate(t){t===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(t){t===!0&&this.pmremVersion++}}Ce.DEFAULT_IMAGE=null;Ce.DEFAULT_MAPPING=yl;Ce.DEFAULT_ANISOTROPY=1;class jt{constructor(t=0,e=0,n=0,s=1){jt.prototype.isVector4=!0,this.x=t,this.y=e,this.z=n,this.w=s}get width(){return this.z}set width(t){this.z=t}get height(){return this.w}set height(t){this.w=t}set(t,e,n,s){return this.x=t,this.y=e,this.z=n,this.w=s,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this.w=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setW(t){return this.w=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;case 3:this.w=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this.w=t.w!==void 0?t.w:1,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this.w+=t.w,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this.w+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this.w=t.w+e.w,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this.w+=t.w*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this.w-=t.w,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this.w-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this.w=t.w-e.w,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this.w*=t.w,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this.w*=t,this}applyMatrix4(t){const e=this.x,n=this.y,s=this.z,a=this.w,r=t.elements;return this.x=r[0]*e+r[4]*n+r[8]*s+r[12]*a,this.y=r[1]*e+r[5]*n+r[9]*s+r[13]*a,this.z=r[2]*e+r[6]*n+r[10]*s+r[14]*a,this.w=r[3]*e+r[7]*n+r[11]*s+r[15]*a,this}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this.w/=t.w,this}divideScalar(t){return this.multiplyScalar(1/t)}setAxisAngleFromQuaternion(t){this.w=2*Math.acos(t.w);const e=Math.sqrt(1-t.w*t.w);return e<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=t.x/e,this.y=t.y/e,this.z=t.z/e),this}setAxisAngleFromRotationMatrix(t){let e,n,s,a;const l=t.elements,c=l[0],u=l[4],f=l[8],p=l[1],d=l[5],g=l[9],_=l[2],m=l[6],h=l[10];if(Math.abs(u-p)<.01&&Math.abs(f-_)<.01&&Math.abs(g-m)<.01){if(Math.abs(u+p)<.1&&Math.abs(f+_)<.1&&Math.abs(g+m)<.1&&Math.abs(c+d+h-3)<.1)return this.set(1,0,0,0),this;e=Math.PI;const b=(c+1)/2,S=(d+1)/2,O=(h+1)/2,C=(u+p)/4,R=(f+_)/4,U=(g+m)/4;return b>S&&b>O?b<.01?(n=0,s=.707106781,a=.707106781):(n=Math.sqrt(b),s=C/n,a=R/n):S>O?S<.01?(n=.707106781,s=0,a=.707106781):(s=Math.sqrt(S),n=C/s,a=U/s):O<.01?(n=.707106781,s=.707106781,a=0):(a=Math.sqrt(O),n=R/a,s=U/a),this.set(n,s,a,e),this}let T=Math.sqrt((m-g)*(m-g)+(f-_)*(f-_)+(p-u)*(p-u));return Math.abs(T)<.001&&(T=1),this.x=(m-g)/T,this.y=(f-_)/T,this.z=(p-u)/T,this.w=Math.acos((c+d+h-1)/2),this}setFromMatrixPosition(t){const e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this.w=e[15],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this.w=Math.min(this.w,t.w),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this.w=Math.max(this.w,t.w),this}clamp(t,e){return this.x=Math.max(t.x,Math.min(e.x,this.x)),this.y=Math.max(t.y,Math.min(e.y,this.y)),this.z=Math.max(t.z,Math.min(e.z,this.z)),this.w=Math.max(t.w,Math.min(e.w,this.w)),this}clampScalar(t,e){return this.x=Math.max(t,Math.min(e,this.x)),this.y=Math.max(t,Math.min(e,this.y)),this.z=Math.max(t,Math.min(e,this.z)),this.w=Math.max(t,Math.min(e,this.w)),this}clampLength(t,e){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(t,Math.min(e,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z+this.w*t.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this.w+=(t.w-this.w)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this.z=t.z+(e.z-t.z)*n,this.w=t.w+(e.w-t.w)*n,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z&&t.w===this.w}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this.w=t[e+3],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t[e+3]=this.w,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this.w=t.getW(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class eh extends ri{constructor(t=1,e=1,n={}){super(),this.isRenderTarget=!0,this.width=t,this.height=e,this.depth=1,this.scissor=new jt(0,0,t,e),this.scissorTest=!1,this.viewport=new jt(0,0,t,e);const s={width:t,height:e,depth:1};n=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:hn,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1},n);const a=new Ce(s,n.mapping,n.wrapS,n.wrapT,n.magFilter,n.minFilter,n.format,n.type,n.anisotropy,n.colorSpace);a.flipY=!1,a.generateMipmaps=n.generateMipmaps,a.internalFormat=n.internalFormat,this.textures=[];const r=n.count;for(let o=0;o<r;o++)this.textures[o]=a.clone(),this.textures[o].isRenderTargetTexture=!0;this.depthBuffer=n.depthBuffer,this.stencilBuffer=n.stencilBuffer,this.resolveDepthBuffer=n.resolveDepthBuffer,this.resolveStencilBuffer=n.resolveStencilBuffer,this.depthTexture=n.depthTexture,this.samples=n.samples}get texture(){return this.textures[0]}set texture(t){this.textures[0]=t}setSize(t,e,n=1){if(this.width!==t||this.height!==e||this.depth!==n){this.width=t,this.height=e,this.depth=n;for(let s=0,a=this.textures.length;s<a;s++)this.textures[s].image.width=t,this.textures[s].image.height=e,this.textures[s].image.depth=n;this.dispose()}this.viewport.set(0,0,t,e),this.scissor.set(0,0,t,e)}clone(){return new this.constructor().copy(this)}copy(t){this.width=t.width,this.height=t.height,this.depth=t.depth,this.scissor.copy(t.scissor),this.scissorTest=t.scissorTest,this.viewport.copy(t.viewport),this.textures.length=0;for(let n=0,s=t.textures.length;n<s;n++)this.textures[n]=t.textures[n].clone(),this.textures[n].isRenderTargetTexture=!0;const e=Object.assign({},t.texture.image);return this.texture.source=new Nl(e),this.depthBuffer=t.depthBuffer,this.stencilBuffer=t.stencilBuffer,this.resolveDepthBuffer=t.resolveDepthBuffer,this.resolveStencilBuffer=t.resolveStencilBuffer,t.depthTexture!==null&&(this.depthTexture=t.depthTexture.clone()),this.samples=t.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class si extends eh{constructor(t=1,e=1,n={}){super(t,e,n),this.isWebGLRenderTarget=!0}}class Fl extends Ce{constructor(t=null,e=1,n=1,s=1){super(null),this.isDataArrayTexture=!0,this.image={data:t,width:e,height:n,depth:s},this.magFilter=nn,this.minFilter=nn,this.wrapR=ti,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(t){this.layerUpdates.add(t)}clearLayerUpdates(){this.layerUpdates.clear()}}class nh extends Ce{constructor(t=null,e=1,n=1,s=1){super(null),this.isData3DTexture=!0,this.image={data:t,width:e,height:n,depth:s},this.magFilter=nn,this.minFilter=nn,this.wrapR=ti,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class ai{constructor(t=0,e=0,n=0,s=1){this.isQuaternion=!0,this._x=t,this._y=e,this._z=n,this._w=s}static slerpFlat(t,e,n,s,a,r,o){let l=n[s+0],c=n[s+1],u=n[s+2],f=n[s+3];const p=a[r+0],d=a[r+1],g=a[r+2],_=a[r+3];if(o===0){t[e+0]=l,t[e+1]=c,t[e+2]=u,t[e+3]=f;return}if(o===1){t[e+0]=p,t[e+1]=d,t[e+2]=g,t[e+3]=_;return}if(f!==_||l!==p||c!==d||u!==g){let m=1-o;const h=l*p+c*d+u*g+f*_,T=h>=0?1:-1,b=1-h*h;if(b>Number.EPSILON){const O=Math.sqrt(b),C=Math.atan2(O,h*T);m=Math.sin(m*C)/O,o=Math.sin(o*C)/O}const S=o*T;if(l=l*m+p*S,c=c*m+d*S,u=u*m+g*S,f=f*m+_*S,m===1-o){const O=1/Math.sqrt(l*l+c*c+u*u+f*f);l*=O,c*=O,u*=O,f*=O}}t[e]=l,t[e+1]=c,t[e+2]=u,t[e+3]=f}static multiplyQuaternionsFlat(t,e,n,s,a,r){const o=n[s],l=n[s+1],c=n[s+2],u=n[s+3],f=a[r],p=a[r+1],d=a[r+2],g=a[r+3];return t[e]=o*g+u*f+l*d-c*p,t[e+1]=l*g+u*p+c*f-o*d,t[e+2]=c*g+u*d+o*p-l*f,t[e+3]=u*g-o*f-l*p-c*d,t}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get w(){return this._w}set w(t){this._w=t,this._onChangeCallback()}set(t,e,n,s){return this._x=t,this._y=e,this._z=n,this._w=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(t){return this._x=t.x,this._y=t.y,this._z=t.z,this._w=t.w,this._onChangeCallback(),this}setFromEuler(t,e=!0){const n=t._x,s=t._y,a=t._z,r=t._order,o=Math.cos,l=Math.sin,c=o(n/2),u=o(s/2),f=o(a/2),p=l(n/2),d=l(s/2),g=l(a/2);switch(r){case"XYZ":this._x=p*u*f+c*d*g,this._y=c*d*f-p*u*g,this._z=c*u*g+p*d*f,this._w=c*u*f-p*d*g;break;case"YXZ":this._x=p*u*f+c*d*g,this._y=c*d*f-p*u*g,this._z=c*u*g-p*d*f,this._w=c*u*f+p*d*g;break;case"ZXY":this._x=p*u*f-c*d*g,this._y=c*d*f+p*u*g,this._z=c*u*g+p*d*f,this._w=c*u*f-p*d*g;break;case"ZYX":this._x=p*u*f-c*d*g,this._y=c*d*f+p*u*g,this._z=c*u*g-p*d*f,this._w=c*u*f+p*d*g;break;case"YZX":this._x=p*u*f+c*d*g,this._y=c*d*f+p*u*g,this._z=c*u*g-p*d*f,this._w=c*u*f-p*d*g;break;case"XZY":this._x=p*u*f-c*d*g,this._y=c*d*f-p*u*g,this._z=c*u*g+p*d*f,this._w=c*u*f+p*d*g;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+r)}return e===!0&&this._onChangeCallback(),this}setFromAxisAngle(t,e){const n=e/2,s=Math.sin(n);return this._x=t.x*s,this._y=t.y*s,this._z=t.z*s,this._w=Math.cos(n),this._onChangeCallback(),this}setFromRotationMatrix(t){const e=t.elements,n=e[0],s=e[4],a=e[8],r=e[1],o=e[5],l=e[9],c=e[2],u=e[6],f=e[10],p=n+o+f;if(p>0){const d=.5/Math.sqrt(p+1);this._w=.25/d,this._x=(u-l)*d,this._y=(a-c)*d,this._z=(r-s)*d}else if(n>o&&n>f){const d=2*Math.sqrt(1+n-o-f);this._w=(u-l)/d,this._x=.25*d,this._y=(s+r)/d,this._z=(a+c)/d}else if(o>f){const d=2*Math.sqrt(1+o-n-f);this._w=(a-c)/d,this._x=(s+r)/d,this._y=.25*d,this._z=(l+u)/d}else{const d=2*Math.sqrt(1+f-n-o);this._w=(r-s)/d,this._x=(a+c)/d,this._y=(l+u)/d,this._z=.25*d}return this._onChangeCallback(),this}setFromUnitVectors(t,e){let n=t.dot(e)+1;return n<Number.EPSILON?(n=0,Math.abs(t.x)>Math.abs(t.z)?(this._x=-t.y,this._y=t.x,this._z=0,this._w=n):(this._x=0,this._y=-t.z,this._z=t.y,this._w=n)):(this._x=t.y*e.z-t.z*e.y,this._y=t.z*e.x-t.x*e.z,this._z=t.x*e.y-t.y*e.x,this._w=n),this.normalize()}angleTo(t){return 2*Math.acos(Math.abs(Ae(this.dot(t),-1,1)))}rotateTowards(t,e){const n=this.angleTo(t);if(n===0)return this;const s=Math.min(1,e/n);return this.slerp(t,s),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(t){return this._x*t._x+this._y*t._y+this._z*t._z+this._w*t._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let t=this.length();return t===0?(this._x=0,this._y=0,this._z=0,this._w=1):(t=1/t,this._x=this._x*t,this._y=this._y*t,this._z=this._z*t,this._w=this._w*t),this._onChangeCallback(),this}multiply(t){return this.multiplyQuaternions(this,t)}premultiply(t){return this.multiplyQuaternions(t,this)}multiplyQuaternions(t,e){const n=t._x,s=t._y,a=t._z,r=t._w,o=e._x,l=e._y,c=e._z,u=e._w;return this._x=n*u+r*o+s*c-a*l,this._y=s*u+r*l+a*o-n*c,this._z=a*u+r*c+n*l-s*o,this._w=r*u-n*o-s*l-a*c,this._onChangeCallback(),this}slerp(t,e){if(e===0)return this;if(e===1)return this.copy(t);const n=this._x,s=this._y,a=this._z,r=this._w;let o=r*t._w+n*t._x+s*t._y+a*t._z;if(o<0?(this._w=-t._w,this._x=-t._x,this._y=-t._y,this._z=-t._z,o=-o):this.copy(t),o>=1)return this._w=r,this._x=n,this._y=s,this._z=a,this;const l=1-o*o;if(l<=Number.EPSILON){const d=1-e;return this._w=d*r+e*this._w,this._x=d*n+e*this._x,this._y=d*s+e*this._y,this._z=d*a+e*this._z,this.normalize(),this}const c=Math.sqrt(l),u=Math.atan2(c,o),f=Math.sin((1-e)*u)/c,p=Math.sin(e*u)/c;return this._w=r*f+this._w*p,this._x=n*f+this._x*p,this._y=s*f+this._y*p,this._z=a*f+this._z*p,this._onChangeCallback(),this}slerpQuaternions(t,e,n){return this.copy(t).slerp(e,n)}random(){const t=2*Math.PI*Math.random(),e=2*Math.PI*Math.random(),n=Math.random(),s=Math.sqrt(1-n),a=Math.sqrt(n);return this.set(s*Math.sin(t),s*Math.cos(t),a*Math.sin(e),a*Math.cos(e))}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._w===this._w}fromArray(t,e=0){return this._x=t[e],this._y=t[e+1],this._z=t[e+2],this._w=t[e+3],this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._w,t}fromBufferAttribute(t,e){return this._x=t.getX(e),this._y=t.getY(e),this._z=t.getZ(e),this._w=t.getW(e),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class w{constructor(t=0,e=0,n=0){w.prototype.isVector3=!0,this.x=t,this.y=e,this.z=n}set(t,e,n){return n===void 0&&(n=this.z),this.x=t,this.y=e,this.z=n,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this}multiplyVectors(t,e){return this.x=t.x*e.x,this.y=t.y*e.y,this.z=t.z*e.z,this}applyEuler(t){return this.applyQuaternion(po.setFromEuler(t))}applyAxisAngle(t,e){return this.applyQuaternion(po.setFromAxisAngle(t,e))}applyMatrix3(t){const e=this.x,n=this.y,s=this.z,a=t.elements;return this.x=a[0]*e+a[3]*n+a[6]*s,this.y=a[1]*e+a[4]*n+a[7]*s,this.z=a[2]*e+a[5]*n+a[8]*s,this}applyNormalMatrix(t){return this.applyMatrix3(t).normalize()}applyMatrix4(t){const e=this.x,n=this.y,s=this.z,a=t.elements,r=1/(a[3]*e+a[7]*n+a[11]*s+a[15]);return this.x=(a[0]*e+a[4]*n+a[8]*s+a[12])*r,this.y=(a[1]*e+a[5]*n+a[9]*s+a[13])*r,this.z=(a[2]*e+a[6]*n+a[10]*s+a[14])*r,this}applyQuaternion(t){const e=this.x,n=this.y,s=this.z,a=t.x,r=t.y,o=t.z,l=t.w,c=2*(r*s-o*n),u=2*(o*e-a*s),f=2*(a*n-r*e);return this.x=e+l*c+r*f-o*u,this.y=n+l*u+o*c-a*f,this.z=s+l*f+a*u-r*c,this}project(t){return this.applyMatrix4(t.matrixWorldInverse).applyMatrix4(t.projectionMatrix)}unproject(t){return this.applyMatrix4(t.projectionMatrixInverse).applyMatrix4(t.matrixWorld)}transformDirection(t){const e=this.x,n=this.y,s=this.z,a=t.elements;return this.x=a[0]*e+a[4]*n+a[8]*s,this.y=a[1]*e+a[5]*n+a[9]*s,this.z=a[2]*e+a[6]*n+a[10]*s,this.normalize()}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this}divideScalar(t){return this.multiplyScalar(1/t)}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this}clamp(t,e){return this.x=Math.max(t.x,Math.min(e.x,this.x)),this.y=Math.max(t.y,Math.min(e.y,this.y)),this.z=Math.max(t.z,Math.min(e.z,this.z)),this}clampScalar(t,e){return this.x=Math.max(t,Math.min(e,this.x)),this.y=Math.max(t,Math.min(e,this.y)),this.z=Math.max(t,Math.min(e,this.z)),this}clampLength(t,e){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(t,Math.min(e,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this.z=t.z+(e.z-t.z)*n,this}cross(t){return this.crossVectors(this,t)}crossVectors(t,e){const n=t.x,s=t.y,a=t.z,r=e.x,o=e.y,l=e.z;return this.x=s*l-a*o,this.y=a*r-n*l,this.z=n*o-s*r,this}projectOnVector(t){const e=t.lengthSq();if(e===0)return this.set(0,0,0);const n=t.dot(this)/e;return this.copy(t).multiplyScalar(n)}projectOnPlane(t){return ua.copy(this).projectOnVector(t),this.sub(ua)}reflect(t){return this.sub(ua.copy(t).multiplyScalar(2*this.dot(t)))}angleTo(t){const e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;const n=this.dot(t)/e;return Math.acos(Ae(n,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){const e=this.x-t.x,n=this.y-t.y,s=this.z-t.z;return e*e+n*n+s*s}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)+Math.abs(this.z-t.z)}setFromSpherical(t){return this.setFromSphericalCoords(t.radius,t.phi,t.theta)}setFromSphericalCoords(t,e,n){const s=Math.sin(e)*t;return this.x=s*Math.sin(n),this.y=Math.cos(e)*t,this.z=s*Math.cos(n),this}setFromCylindrical(t){return this.setFromCylindricalCoords(t.radius,t.theta,t.y)}setFromCylindricalCoords(t,e,n){return this.x=t*Math.sin(e),this.y=n,this.z=t*Math.cos(e),this}setFromMatrixPosition(t){const e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this}setFromMatrixScale(t){const e=this.setFromMatrixColumn(t,0).length(),n=this.setFromMatrixColumn(t,1).length(),s=this.setFromMatrixColumn(t,2).length();return this.x=e,this.y=n,this.z=s,this}setFromMatrixColumn(t,e){return this.fromArray(t.elements,e*4)}setFromMatrix3Column(t,e){return this.fromArray(t.elements,e*3)}setFromEuler(t){return this.x=t._x,this.y=t._y,this.z=t._z,this}setFromColor(t){return this.x=t.r,this.y=t.g,this.z=t.b,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const t=Math.random()*Math.PI*2,e=Math.random()*2-1,n=Math.sqrt(1-e*e);return this.x=n*Math.cos(t),this.y=e,this.z=n*Math.sin(t),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const ua=new w,po=new ai;class os{constructor(t=new w(1/0,1/0,1/0),e=new w(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=t,this.max=e}set(t,e){return this.min.copy(t),this.max.copy(e),this}setFromArray(t){this.makeEmpty();for(let e=0,n=t.length;e<n;e+=3)this.expandByPoint($e.fromArray(t,e));return this}setFromBufferAttribute(t){this.makeEmpty();for(let e=0,n=t.count;e<n;e++)this.expandByPoint($e.fromBufferAttribute(t,e));return this}setFromPoints(t){this.makeEmpty();for(let e=0,n=t.length;e<n;e++)this.expandByPoint(t[e]);return this}setFromCenterAndSize(t,e){const n=$e.copy(e).multiplyScalar(.5);return this.min.copy(t).sub(n),this.max.copy(t).add(n),this}setFromObject(t,e=!1){return this.makeEmpty(),this.expandByObject(t,e)}clone(){return new this.constructor().copy(this)}copy(t){return this.min.copy(t.min),this.max.copy(t.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(t){return this.isEmpty()?t.set(0,0,0):t.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(t){return this.isEmpty()?t.set(0,0,0):t.subVectors(this.max,this.min)}expandByPoint(t){return this.min.min(t),this.max.max(t),this}expandByVector(t){return this.min.sub(t),this.max.add(t),this}expandByScalar(t){return this.min.addScalar(-t),this.max.addScalar(t),this}expandByObject(t,e=!1){t.updateWorldMatrix(!1,!1);const n=t.geometry;if(n!==void 0){const a=n.getAttribute("position");if(e===!0&&a!==void 0&&t.isInstancedMesh!==!0)for(let r=0,o=a.count;r<o;r++)t.isMesh===!0?t.getVertexPosition(r,$e):$e.fromBufferAttribute(a,r),$e.applyMatrix4(t.matrixWorld),this.expandByPoint($e);else t.boundingBox!==void 0?(t.boundingBox===null&&t.computeBoundingBox(),ms.copy(t.boundingBox)):(n.boundingBox===null&&n.computeBoundingBox(),ms.copy(n.boundingBox)),ms.applyMatrix4(t.matrixWorld),this.union(ms)}const s=t.children;for(let a=0,r=s.length;a<r;a++)this.expandByObject(s[a],e);return this}containsPoint(t){return t.x>=this.min.x&&t.x<=this.max.x&&t.y>=this.min.y&&t.y<=this.max.y&&t.z>=this.min.z&&t.z<=this.max.z}containsBox(t){return this.min.x<=t.min.x&&t.max.x<=this.max.x&&this.min.y<=t.min.y&&t.max.y<=this.max.y&&this.min.z<=t.min.z&&t.max.z<=this.max.z}getParameter(t,e){return e.set((t.x-this.min.x)/(this.max.x-this.min.x),(t.y-this.min.y)/(this.max.y-this.min.y),(t.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(t){return t.max.x>=this.min.x&&t.min.x<=this.max.x&&t.max.y>=this.min.y&&t.min.y<=this.max.y&&t.max.z>=this.min.z&&t.min.z<=this.max.z}intersectsSphere(t){return this.clampPoint(t.center,$e),$e.distanceToSquared(t.center)<=t.radius*t.radius}intersectsPlane(t){let e,n;return t.normal.x>0?(e=t.normal.x*this.min.x,n=t.normal.x*this.max.x):(e=t.normal.x*this.max.x,n=t.normal.x*this.min.x),t.normal.y>0?(e+=t.normal.y*this.min.y,n+=t.normal.y*this.max.y):(e+=t.normal.y*this.max.y,n+=t.normal.y*this.min.y),t.normal.z>0?(e+=t.normal.z*this.min.z,n+=t.normal.z*this.max.z):(e+=t.normal.z*this.max.z,n+=t.normal.z*this.min.z),e<=-t.constant&&n>=-t.constant}intersectsTriangle(t){if(this.isEmpty())return!1;this.getCenter(qi),gs.subVectors(this.max,qi),hi.subVectors(t.a,qi),ui.subVectors(t.b,qi),di.subVectors(t.c,qi),wn.subVectors(ui,hi),Cn.subVectors(di,ui),Hn.subVectors(hi,di);let e=[0,-wn.z,wn.y,0,-Cn.z,Cn.y,0,-Hn.z,Hn.y,wn.z,0,-wn.x,Cn.z,0,-Cn.x,Hn.z,0,-Hn.x,-wn.y,wn.x,0,-Cn.y,Cn.x,0,-Hn.y,Hn.x,0];return!da(e,hi,ui,di,gs)||(e=[1,0,0,0,1,0,0,0,1],!da(e,hi,ui,di,gs))?!1:(_s.crossVectors(wn,Cn),e=[_s.x,_s.y,_s.z],da(e,hi,ui,di,gs))}clampPoint(t,e){return e.copy(t).clamp(this.min,this.max)}distanceToPoint(t){return this.clampPoint(t,$e).distanceTo(t)}getBoundingSphere(t){return this.isEmpty()?t.makeEmpty():(this.getCenter(t.center),t.radius=this.getSize($e).length()*.5),t}intersect(t){return this.min.max(t.min),this.max.min(t.max),this.isEmpty()&&this.makeEmpty(),this}union(t){return this.min.min(t.min),this.max.max(t.max),this}applyMatrix4(t){return this.isEmpty()?this:(pn[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(t),pn[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(t),pn[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(t),pn[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(t),pn[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(t),pn[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(t),pn[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(t),pn[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(t),this.setFromPoints(pn),this)}translate(t){return this.min.add(t),this.max.add(t),this}equals(t){return t.min.equals(this.min)&&t.max.equals(this.max)}}const pn=[new w,new w,new w,new w,new w,new w,new w,new w],$e=new w,ms=new os,hi=new w,ui=new w,di=new w,wn=new w,Cn=new w,Hn=new w,qi=new w,gs=new w,_s=new w,Vn=new w;function da(i,t,e,n,s){for(let a=0,r=i.length-3;a<=r;a+=3){Vn.fromArray(i,a);const o=s.x*Math.abs(Vn.x)+s.y*Math.abs(Vn.y)+s.z*Math.abs(Vn.z),l=t.dot(Vn),c=e.dot(Vn),u=n.dot(Vn);if(Math.max(-Math.max(l,c,u),Math.min(l,c,u))>o)return!1}return!0}const ih=new os,Yi=new w,fa=new w;class ls{constructor(t=new w,e=-1){this.isSphere=!0,this.center=t,this.radius=e}set(t,e){return this.center.copy(t),this.radius=e,this}setFromPoints(t,e){const n=this.center;e!==void 0?n.copy(e):ih.setFromPoints(t).getCenter(n);let s=0;for(let a=0,r=t.length;a<r;a++)s=Math.max(s,n.distanceToSquared(t[a]));return this.radius=Math.sqrt(s),this}copy(t){return this.center.copy(t.center),this.radius=t.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(t){return t.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(t){return t.distanceTo(this.center)-this.radius}intersectsSphere(t){const e=this.radius+t.radius;return t.center.distanceToSquared(this.center)<=e*e}intersectsBox(t){return t.intersectsSphere(this)}intersectsPlane(t){return Math.abs(t.distanceToPoint(this.center))<=this.radius}clampPoint(t,e){const n=this.center.distanceToSquared(t);return e.copy(t),n>this.radius*this.radius&&(e.sub(this.center).normalize(),e.multiplyScalar(this.radius).add(this.center)),e}getBoundingBox(t){return this.isEmpty()?(t.makeEmpty(),t):(t.set(this.center,this.center),t.expandByScalar(this.radius),t)}applyMatrix4(t){return this.center.applyMatrix4(t),this.radius=this.radius*t.getMaxScaleOnAxis(),this}translate(t){return this.center.add(t),this}expandByPoint(t){if(this.isEmpty())return this.center.copy(t),this.radius=0,this;Yi.subVectors(t,this.center);const e=Yi.lengthSq();if(e>this.radius*this.radius){const n=Math.sqrt(e),s=(n-this.radius)*.5;this.center.addScaledVector(Yi,s/n),this.radius+=s}return this}union(t){return t.isEmpty()?this:this.isEmpty()?(this.copy(t),this):(this.center.equals(t.center)===!0?this.radius=Math.max(this.radius,t.radius):(fa.subVectors(t.center,this.center).setLength(t.radius),this.expandByPoint(Yi.copy(t.center).add(fa)),this.expandByPoint(Yi.copy(t.center).sub(fa))),this)}equals(t){return t.center.equals(this.center)&&t.radius===this.radius}clone(){return new this.constructor().copy(this)}}const mn=new w,pa=new w,vs=new w,Rn=new w,ma=new w,xs=new w,ga=new w;class cs{constructor(t=new w,e=new w(0,0,-1)){this.origin=t,this.direction=e}set(t,e){return this.origin.copy(t),this.direction.copy(e),this}copy(t){return this.origin.copy(t.origin),this.direction.copy(t.direction),this}at(t,e){return e.copy(this.origin).addScaledVector(this.direction,t)}lookAt(t){return this.direction.copy(t).sub(this.origin).normalize(),this}recast(t){return this.origin.copy(this.at(t,mn)),this}closestPointToPoint(t,e){e.subVectors(t,this.origin);const n=e.dot(this.direction);return n<0?e.copy(this.origin):e.copy(this.origin).addScaledVector(this.direction,n)}distanceToPoint(t){return Math.sqrt(this.distanceSqToPoint(t))}distanceSqToPoint(t){const e=mn.subVectors(t,this.origin).dot(this.direction);return e<0?this.origin.distanceToSquared(t):(mn.copy(this.origin).addScaledVector(this.direction,e),mn.distanceToSquared(t))}distanceSqToSegment(t,e,n,s){pa.copy(t).add(e).multiplyScalar(.5),vs.copy(e).sub(t).normalize(),Rn.copy(this.origin).sub(pa);const a=t.distanceTo(e)*.5,r=-this.direction.dot(vs),o=Rn.dot(this.direction),l=-Rn.dot(vs),c=Rn.lengthSq(),u=Math.abs(1-r*r);let f,p,d,g;if(u>0)if(f=r*l-o,p=r*o-l,g=a*u,f>=0)if(p>=-g)if(p<=g){const _=1/u;f*=_,p*=_,d=f*(f+r*p+2*o)+p*(r*f+p+2*l)+c}else p=a,f=Math.max(0,-(r*p+o)),d=-f*f+p*(p+2*l)+c;else p=-a,f=Math.max(0,-(r*p+o)),d=-f*f+p*(p+2*l)+c;else p<=-g?(f=Math.max(0,-(-r*a+o)),p=f>0?-a:Math.min(Math.max(-a,-l),a),d=-f*f+p*(p+2*l)+c):p<=g?(f=0,p=Math.min(Math.max(-a,-l),a),d=p*(p+2*l)+c):(f=Math.max(0,-(r*a+o)),p=f>0?a:Math.min(Math.max(-a,-l),a),d=-f*f+p*(p+2*l)+c);else p=r>0?-a:a,f=Math.max(0,-(r*p+o)),d=-f*f+p*(p+2*l)+c;return n&&n.copy(this.origin).addScaledVector(this.direction,f),s&&s.copy(pa).addScaledVector(vs,p),d}intersectSphere(t,e){mn.subVectors(t.center,this.origin);const n=mn.dot(this.direction),s=mn.dot(mn)-n*n,a=t.radius*t.radius;if(s>a)return null;const r=Math.sqrt(a-s),o=n-r,l=n+r;return l<0?null:o<0?this.at(l,e):this.at(o,e)}intersectsSphere(t){return this.distanceSqToPoint(t.center)<=t.radius*t.radius}distanceToPlane(t){const e=t.normal.dot(this.direction);if(e===0)return t.distanceToPoint(this.origin)===0?0:null;const n=-(this.origin.dot(t.normal)+t.constant)/e;return n>=0?n:null}intersectPlane(t,e){const n=this.distanceToPlane(t);return n===null?null:this.at(n,e)}intersectsPlane(t){const e=t.distanceToPoint(this.origin);return e===0||t.normal.dot(this.direction)*e<0}intersectBox(t,e){let n,s,a,r,o,l;const c=1/this.direction.x,u=1/this.direction.y,f=1/this.direction.z,p=this.origin;return c>=0?(n=(t.min.x-p.x)*c,s=(t.max.x-p.x)*c):(n=(t.max.x-p.x)*c,s=(t.min.x-p.x)*c),u>=0?(a=(t.min.y-p.y)*u,r=(t.max.y-p.y)*u):(a=(t.max.y-p.y)*u,r=(t.min.y-p.y)*u),n>r||a>s||((a>n||isNaN(n))&&(n=a),(r<s||isNaN(s))&&(s=r),f>=0?(o=(t.min.z-p.z)*f,l=(t.max.z-p.z)*f):(o=(t.max.z-p.z)*f,l=(t.min.z-p.z)*f),n>l||o>s)||((o>n||n!==n)&&(n=o),(l<s||s!==s)&&(s=l),s<0)?null:this.at(n>=0?n:s,e)}intersectsBox(t){return this.intersectBox(t,mn)!==null}intersectTriangle(t,e,n,s,a){ma.subVectors(e,t),xs.subVectors(n,t),ga.crossVectors(ma,xs);let r=this.direction.dot(ga),o;if(r>0){if(s)return null;o=1}else if(r<0)o=-1,r=-r;else return null;Rn.subVectors(this.origin,t);const l=o*this.direction.dot(xs.crossVectors(Rn,xs));if(l<0)return null;const c=o*this.direction.dot(ma.cross(Rn));if(c<0||l+c>r)return null;const u=-o*Rn.dot(ga);return u<0?null:this.at(u/r,a)}applyMatrix4(t){return this.origin.applyMatrix4(t),this.direction.transformDirection(t),this}equals(t){return t.origin.equals(this.origin)&&t.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class Jt{constructor(t,e,n,s,a,r,o,l,c,u,f,p,d,g,_,m){Jt.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],t!==void 0&&this.set(t,e,n,s,a,r,o,l,c,u,f,p,d,g,_,m)}set(t,e,n,s,a,r,o,l,c,u,f,p,d,g,_,m){const h=this.elements;return h[0]=t,h[4]=e,h[8]=n,h[12]=s,h[1]=a,h[5]=r,h[9]=o,h[13]=l,h[2]=c,h[6]=u,h[10]=f,h[14]=p,h[3]=d,h[7]=g,h[11]=_,h[15]=m,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new Jt().fromArray(this.elements)}copy(t){const e=this.elements,n=t.elements;return e[0]=n[0],e[1]=n[1],e[2]=n[2],e[3]=n[3],e[4]=n[4],e[5]=n[5],e[6]=n[6],e[7]=n[7],e[8]=n[8],e[9]=n[9],e[10]=n[10],e[11]=n[11],e[12]=n[12],e[13]=n[13],e[14]=n[14],e[15]=n[15],this}copyPosition(t){const e=this.elements,n=t.elements;return e[12]=n[12],e[13]=n[13],e[14]=n[14],this}setFromMatrix3(t){const e=t.elements;return this.set(e[0],e[3],e[6],0,e[1],e[4],e[7],0,e[2],e[5],e[8],0,0,0,0,1),this}extractBasis(t,e,n){return t.setFromMatrixColumn(this,0),e.setFromMatrixColumn(this,1),n.setFromMatrixColumn(this,2),this}makeBasis(t,e,n){return this.set(t.x,e.x,n.x,0,t.y,e.y,n.y,0,t.z,e.z,n.z,0,0,0,0,1),this}extractRotation(t){const e=this.elements,n=t.elements,s=1/fi.setFromMatrixColumn(t,0).length(),a=1/fi.setFromMatrixColumn(t,1).length(),r=1/fi.setFromMatrixColumn(t,2).length();return e[0]=n[0]*s,e[1]=n[1]*s,e[2]=n[2]*s,e[3]=0,e[4]=n[4]*a,e[5]=n[5]*a,e[6]=n[6]*a,e[7]=0,e[8]=n[8]*r,e[9]=n[9]*r,e[10]=n[10]*r,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromEuler(t){const e=this.elements,n=t.x,s=t.y,a=t.z,r=Math.cos(n),o=Math.sin(n),l=Math.cos(s),c=Math.sin(s),u=Math.cos(a),f=Math.sin(a);if(t.order==="XYZ"){const p=r*u,d=r*f,g=o*u,_=o*f;e[0]=l*u,e[4]=-l*f,e[8]=c,e[1]=d+g*c,e[5]=p-_*c,e[9]=-o*l,e[2]=_-p*c,e[6]=g+d*c,e[10]=r*l}else if(t.order==="YXZ"){const p=l*u,d=l*f,g=c*u,_=c*f;e[0]=p+_*o,e[4]=g*o-d,e[8]=r*c,e[1]=r*f,e[5]=r*u,e[9]=-o,e[2]=d*o-g,e[6]=_+p*o,e[10]=r*l}else if(t.order==="ZXY"){const p=l*u,d=l*f,g=c*u,_=c*f;e[0]=p-_*o,e[4]=-r*f,e[8]=g+d*o,e[1]=d+g*o,e[5]=r*u,e[9]=_-p*o,e[2]=-r*c,e[6]=o,e[10]=r*l}else if(t.order==="ZYX"){const p=r*u,d=r*f,g=o*u,_=o*f;e[0]=l*u,e[4]=g*c-d,e[8]=p*c+_,e[1]=l*f,e[5]=_*c+p,e[9]=d*c-g,e[2]=-c,e[6]=o*l,e[10]=r*l}else if(t.order==="YZX"){const p=r*l,d=r*c,g=o*l,_=o*c;e[0]=l*u,e[4]=_-p*f,e[8]=g*f+d,e[1]=f,e[5]=r*u,e[9]=-o*u,e[2]=-c*u,e[6]=d*f+g,e[10]=p-_*f}else if(t.order==="XZY"){const p=r*l,d=r*c,g=o*l,_=o*c;e[0]=l*u,e[4]=-f,e[8]=c*u,e[1]=p*f+_,e[5]=r*u,e[9]=d*f-g,e[2]=g*f-d,e[6]=o*u,e[10]=_*f+p}return e[3]=0,e[7]=0,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromQuaternion(t){return this.compose(sh,t,ah)}lookAt(t,e,n){const s=this.elements;return Ie.subVectors(t,e),Ie.lengthSq()===0&&(Ie.z=1),Ie.normalize(),Pn.crossVectors(n,Ie),Pn.lengthSq()===0&&(Math.abs(n.z)===1?Ie.x+=1e-4:Ie.z+=1e-4,Ie.normalize(),Pn.crossVectors(n,Ie)),Pn.normalize(),Ms.crossVectors(Ie,Pn),s[0]=Pn.x,s[4]=Ms.x,s[8]=Ie.x,s[1]=Pn.y,s[5]=Ms.y,s[9]=Ie.y,s[2]=Pn.z,s[6]=Ms.z,s[10]=Ie.z,this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){const n=t.elements,s=e.elements,a=this.elements,r=n[0],o=n[4],l=n[8],c=n[12],u=n[1],f=n[5],p=n[9],d=n[13],g=n[2],_=n[6],m=n[10],h=n[14],T=n[3],b=n[7],S=n[11],O=n[15],C=s[0],R=s[4],U=s[8],y=s[12],x=s[1],A=s[5],F=s[9],N=s[13],k=s[2],X=s[6],V=s[10],Z=s[14],H=s[3],tt=s[7],lt=s[11],xt=s[15];return a[0]=r*C+o*x+l*k+c*H,a[4]=r*R+o*A+l*X+c*tt,a[8]=r*U+o*F+l*V+c*lt,a[12]=r*y+o*N+l*Z+c*xt,a[1]=u*C+f*x+p*k+d*H,a[5]=u*R+f*A+p*X+d*tt,a[9]=u*U+f*F+p*V+d*lt,a[13]=u*y+f*N+p*Z+d*xt,a[2]=g*C+_*x+m*k+h*H,a[6]=g*R+_*A+m*X+h*tt,a[10]=g*U+_*F+m*V+h*lt,a[14]=g*y+_*N+m*Z+h*xt,a[3]=T*C+b*x+S*k+O*H,a[7]=T*R+b*A+S*X+O*tt,a[11]=T*U+b*F+S*V+O*lt,a[15]=T*y+b*N+S*Z+O*xt,this}multiplyScalar(t){const e=this.elements;return e[0]*=t,e[4]*=t,e[8]*=t,e[12]*=t,e[1]*=t,e[5]*=t,e[9]*=t,e[13]*=t,e[2]*=t,e[6]*=t,e[10]*=t,e[14]*=t,e[3]*=t,e[7]*=t,e[11]*=t,e[15]*=t,this}determinant(){const t=this.elements,e=t[0],n=t[4],s=t[8],a=t[12],r=t[1],o=t[5],l=t[9],c=t[13],u=t[2],f=t[6],p=t[10],d=t[14],g=t[3],_=t[7],m=t[11],h=t[15];return g*(+a*l*f-s*c*f-a*o*p+n*c*p+s*o*d-n*l*d)+_*(+e*l*d-e*c*p+a*r*p-s*r*d+s*c*u-a*l*u)+m*(+e*c*f-e*o*d-a*r*f+n*r*d+a*o*u-n*c*u)+h*(-s*o*u-e*l*f+e*o*p+s*r*f-n*r*p+n*l*u)}transpose(){const t=this.elements;let e;return e=t[1],t[1]=t[4],t[4]=e,e=t[2],t[2]=t[8],t[8]=e,e=t[6],t[6]=t[9],t[9]=e,e=t[3],t[3]=t[12],t[12]=e,e=t[7],t[7]=t[13],t[13]=e,e=t[11],t[11]=t[14],t[14]=e,this}setPosition(t,e,n){const s=this.elements;return t.isVector3?(s[12]=t.x,s[13]=t.y,s[14]=t.z):(s[12]=t,s[13]=e,s[14]=n),this}invert(){const t=this.elements,e=t[0],n=t[1],s=t[2],a=t[3],r=t[4],o=t[5],l=t[6],c=t[7],u=t[8],f=t[9],p=t[10],d=t[11],g=t[12],_=t[13],m=t[14],h=t[15],T=f*m*c-_*p*c+_*l*d-o*m*d-f*l*h+o*p*h,b=g*p*c-u*m*c-g*l*d+r*m*d+u*l*h-r*p*h,S=u*_*c-g*f*c+g*o*d-r*_*d-u*o*h+r*f*h,O=g*f*l-u*_*l-g*o*p+r*_*p+u*o*m-r*f*m,C=e*T+n*b+s*S+a*O;if(C===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const R=1/C;return t[0]=T*R,t[1]=(_*p*a-f*m*a-_*s*d+n*m*d+f*s*h-n*p*h)*R,t[2]=(o*m*a-_*l*a+_*s*c-n*m*c-o*s*h+n*l*h)*R,t[3]=(f*l*a-o*p*a-f*s*c+n*p*c+o*s*d-n*l*d)*R,t[4]=b*R,t[5]=(u*m*a-g*p*a+g*s*d-e*m*d-u*s*h+e*p*h)*R,t[6]=(g*l*a-r*m*a-g*s*c+e*m*c+r*s*h-e*l*h)*R,t[7]=(r*p*a-u*l*a+u*s*c-e*p*c-r*s*d+e*l*d)*R,t[8]=S*R,t[9]=(g*f*a-u*_*a-g*n*d+e*_*d+u*n*h-e*f*h)*R,t[10]=(r*_*a-g*o*a+g*n*c-e*_*c-r*n*h+e*o*h)*R,t[11]=(u*o*a-r*f*a-u*n*c+e*f*c+r*n*d-e*o*d)*R,t[12]=O*R,t[13]=(u*_*s-g*f*s+g*n*p-e*_*p-u*n*m+e*f*m)*R,t[14]=(g*o*s-r*_*s-g*n*l+e*_*l+r*n*m-e*o*m)*R,t[15]=(r*f*s-u*o*s+u*n*l-e*f*l-r*n*p+e*o*p)*R,this}scale(t){const e=this.elements,n=t.x,s=t.y,a=t.z;return e[0]*=n,e[4]*=s,e[8]*=a,e[1]*=n,e[5]*=s,e[9]*=a,e[2]*=n,e[6]*=s,e[10]*=a,e[3]*=n,e[7]*=s,e[11]*=a,this}getMaxScaleOnAxis(){const t=this.elements,e=t[0]*t[0]+t[1]*t[1]+t[2]*t[2],n=t[4]*t[4]+t[5]*t[5]+t[6]*t[6],s=t[8]*t[8]+t[9]*t[9]+t[10]*t[10];return Math.sqrt(Math.max(e,n,s))}makeTranslation(t,e,n){return t.isVector3?this.set(1,0,0,t.x,0,1,0,t.y,0,0,1,t.z,0,0,0,1):this.set(1,0,0,t,0,1,0,e,0,0,1,n,0,0,0,1),this}makeRotationX(t){const e=Math.cos(t),n=Math.sin(t);return this.set(1,0,0,0,0,e,-n,0,0,n,e,0,0,0,0,1),this}makeRotationY(t){const e=Math.cos(t),n=Math.sin(t);return this.set(e,0,n,0,0,1,0,0,-n,0,e,0,0,0,0,1),this}makeRotationZ(t){const e=Math.cos(t),n=Math.sin(t);return this.set(e,-n,0,0,n,e,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(t,e){const n=Math.cos(e),s=Math.sin(e),a=1-n,r=t.x,o=t.y,l=t.z,c=a*r,u=a*o;return this.set(c*r+n,c*o-s*l,c*l+s*o,0,c*o+s*l,u*o+n,u*l-s*r,0,c*l-s*o,u*l+s*r,a*l*l+n,0,0,0,0,1),this}makeScale(t,e,n){return this.set(t,0,0,0,0,e,0,0,0,0,n,0,0,0,0,1),this}makeShear(t,e,n,s,a,r){return this.set(1,n,a,0,t,1,r,0,e,s,1,0,0,0,0,1),this}compose(t,e,n){const s=this.elements,a=e._x,r=e._y,o=e._z,l=e._w,c=a+a,u=r+r,f=o+o,p=a*c,d=a*u,g=a*f,_=r*u,m=r*f,h=o*f,T=l*c,b=l*u,S=l*f,O=n.x,C=n.y,R=n.z;return s[0]=(1-(_+h))*O,s[1]=(d+S)*O,s[2]=(g-b)*O,s[3]=0,s[4]=(d-S)*C,s[5]=(1-(p+h))*C,s[6]=(m+T)*C,s[7]=0,s[8]=(g+b)*R,s[9]=(m-T)*R,s[10]=(1-(p+_))*R,s[11]=0,s[12]=t.x,s[13]=t.y,s[14]=t.z,s[15]=1,this}decompose(t,e,n){const s=this.elements;let a=fi.set(s[0],s[1],s[2]).length();const r=fi.set(s[4],s[5],s[6]).length(),o=fi.set(s[8],s[9],s[10]).length();this.determinant()<0&&(a=-a),t.x=s[12],t.y=s[13],t.z=s[14],Ke.copy(this);const c=1/a,u=1/r,f=1/o;return Ke.elements[0]*=c,Ke.elements[1]*=c,Ke.elements[2]*=c,Ke.elements[4]*=u,Ke.elements[5]*=u,Ke.elements[6]*=u,Ke.elements[8]*=f,Ke.elements[9]*=f,Ke.elements[10]*=f,e.setFromRotationMatrix(Ke),n.x=a,n.y=r,n.z=o,this}makePerspective(t,e,n,s,a,r,o=Sn){const l=this.elements,c=2*a/(e-t),u=2*a/(n-s),f=(e+t)/(e-t),p=(n+s)/(n-s);let d,g;if(o===Sn)d=-(r+a)/(r-a),g=-2*r*a/(r-a);else if(o===Js)d=-r/(r-a),g=-r*a/(r-a);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+o);return l[0]=c,l[4]=0,l[8]=f,l[12]=0,l[1]=0,l[5]=u,l[9]=p,l[13]=0,l[2]=0,l[6]=0,l[10]=d,l[14]=g,l[3]=0,l[7]=0,l[11]=-1,l[15]=0,this}makeOrthographic(t,e,n,s,a,r,o=Sn){const l=this.elements,c=1/(e-t),u=1/(n-s),f=1/(r-a),p=(e+t)*c,d=(n+s)*u;let g,_;if(o===Sn)g=(r+a)*f,_=-2*f;else if(o===Js)g=a*f,_=-1*f;else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+o);return l[0]=2*c,l[4]=0,l[8]=0,l[12]=-p,l[1]=0,l[5]=2*u,l[9]=0,l[13]=-d,l[2]=0,l[6]=0,l[10]=_,l[14]=-g,l[3]=0,l[7]=0,l[11]=0,l[15]=1,this}equals(t){const e=this.elements,n=t.elements;for(let s=0;s<16;s++)if(e[s]!==n[s])return!1;return!0}fromArray(t,e=0){for(let n=0;n<16;n++)this.elements[n]=t[n+e];return this}toArray(t=[],e=0){const n=this.elements;return t[e]=n[0],t[e+1]=n[1],t[e+2]=n[2],t[e+3]=n[3],t[e+4]=n[4],t[e+5]=n[5],t[e+6]=n[6],t[e+7]=n[7],t[e+8]=n[8],t[e+9]=n[9],t[e+10]=n[10],t[e+11]=n[11],t[e+12]=n[12],t[e+13]=n[13],t[e+14]=n[14],t[e+15]=n[15],t}}const fi=new w,Ke=new Jt,sh=new w(0,0,0),ah=new w(1,1,1),Pn=new w,Ms=new w,Ie=new w,mo=new Jt,go=new ai;class un{constructor(t=0,e=0,n=0,s=un.DEFAULT_ORDER){this.isEuler=!0,this._x=t,this._y=e,this._z=n,this._order=s}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get order(){return this._order}set order(t){this._order=t,this._onChangeCallback()}set(t,e,n,s=this._order){return this._x=t,this._y=e,this._z=n,this._order=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(t){return this._x=t._x,this._y=t._y,this._z=t._z,this._order=t._order,this._onChangeCallback(),this}setFromRotationMatrix(t,e=this._order,n=!0){const s=t.elements,a=s[0],r=s[4],o=s[8],l=s[1],c=s[5],u=s[9],f=s[2],p=s[6],d=s[10];switch(e){case"XYZ":this._y=Math.asin(Ae(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(-u,d),this._z=Math.atan2(-r,a)):(this._x=Math.atan2(p,c),this._z=0);break;case"YXZ":this._x=Math.asin(-Ae(u,-1,1)),Math.abs(u)<.9999999?(this._y=Math.atan2(o,d),this._z=Math.atan2(l,c)):(this._y=Math.atan2(-f,a),this._z=0);break;case"ZXY":this._x=Math.asin(Ae(p,-1,1)),Math.abs(p)<.9999999?(this._y=Math.atan2(-f,d),this._z=Math.atan2(-r,c)):(this._y=0,this._z=Math.atan2(l,a));break;case"ZYX":this._y=Math.asin(-Ae(f,-1,1)),Math.abs(f)<.9999999?(this._x=Math.atan2(p,d),this._z=Math.atan2(l,a)):(this._x=0,this._z=Math.atan2(-r,c));break;case"YZX":this._z=Math.asin(Ae(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-u,c),this._y=Math.atan2(-f,a)):(this._x=0,this._y=Math.atan2(o,d));break;case"XZY":this._z=Math.asin(-Ae(r,-1,1)),Math.abs(r)<.9999999?(this._x=Math.atan2(p,c),this._y=Math.atan2(o,a)):(this._x=Math.atan2(-u,d),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+e)}return this._order=e,n===!0&&this._onChangeCallback(),this}setFromQuaternion(t,e,n){return mo.makeRotationFromQuaternion(t),this.setFromRotationMatrix(mo,e,n)}setFromVector3(t,e=this._order){return this.set(t.x,t.y,t.z,e)}reorder(t){return go.setFromEuler(this),this.setFromQuaternion(go,t)}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._order===this._order}fromArray(t){return this._x=t[0],this._y=t[1],this._z=t[2],t[3]!==void 0&&(this._order=t[3]),this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._order,t}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}un.DEFAULT_ORDER="XYZ";class Gr{constructor(){this.mask=1}set(t){this.mask=(1<<t|0)>>>0}enable(t){this.mask|=1<<t|0}enableAll(){this.mask=-1}toggle(t){this.mask^=1<<t|0}disable(t){this.mask&=~(1<<t|0)}disableAll(){this.mask=0}test(t){return(this.mask&t.mask)!==0}isEnabled(t){return(this.mask&(1<<t|0))!==0}}let rh=0;const _o=new w,pi=new ai,gn=new Jt,ys=new w,$i=new w,oh=new w,lh=new ai,vo=new w(1,0,0),xo=new w(0,1,0),Mo=new w(0,0,1),yo={type:"added"},ch={type:"removed"},mi={type:"childadded",child:null},_a={type:"childremoved",child:null};class _e extends ri{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:rh++}),this.uuid=Bn(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=_e.DEFAULT_UP.clone();const t=new w,e=new un,n=new ai,s=new w(1,1,1);function a(){n.setFromEuler(e,!1)}function r(){e.setFromQuaternion(n,void 0,!1)}e._onChange(a),n._onChange(r),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:t},rotation:{configurable:!0,enumerable:!0,value:e},quaternion:{configurable:!0,enumerable:!0,value:n},scale:{configurable:!0,enumerable:!0,value:s},modelViewMatrix:{value:new Jt},normalMatrix:{value:new Pt}}),this.matrix=new Jt,this.matrixWorld=new Jt,this.matrixAutoUpdate=_e.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=_e.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new Gr,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(t){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(t),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(t){return this.quaternion.premultiply(t),this}setRotationFromAxisAngle(t,e){this.quaternion.setFromAxisAngle(t,e)}setRotationFromEuler(t){this.quaternion.setFromEuler(t,!0)}setRotationFromMatrix(t){this.quaternion.setFromRotationMatrix(t)}setRotationFromQuaternion(t){this.quaternion.copy(t)}rotateOnAxis(t,e){return pi.setFromAxisAngle(t,e),this.quaternion.multiply(pi),this}rotateOnWorldAxis(t,e){return pi.setFromAxisAngle(t,e),this.quaternion.premultiply(pi),this}rotateX(t){return this.rotateOnAxis(vo,t)}rotateY(t){return this.rotateOnAxis(xo,t)}rotateZ(t){return this.rotateOnAxis(Mo,t)}translateOnAxis(t,e){return _o.copy(t).applyQuaternion(this.quaternion),this.position.add(_o.multiplyScalar(e)),this}translateX(t){return this.translateOnAxis(vo,t)}translateY(t){return this.translateOnAxis(xo,t)}translateZ(t){return this.translateOnAxis(Mo,t)}localToWorld(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(this.matrixWorld)}worldToLocal(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(gn.copy(this.matrixWorld).invert())}lookAt(t,e,n){t.isVector3?ys.copy(t):ys.set(t,e,n);const s=this.parent;this.updateWorldMatrix(!0,!1),$i.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?gn.lookAt($i,ys,this.up):gn.lookAt(ys,$i,this.up),this.quaternion.setFromRotationMatrix(gn),s&&(gn.extractRotation(s.matrixWorld),pi.setFromRotationMatrix(gn),this.quaternion.premultiply(pi.invert()))}add(t){if(arguments.length>1){for(let e=0;e<arguments.length;e++)this.add(arguments[e]);return this}return t===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",t),this):(t&&t.isObject3D?(t.removeFromParent(),t.parent=this,this.children.push(t),t.dispatchEvent(yo),mi.child=t,this.dispatchEvent(mi),mi.child=null):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",t),this)}remove(t){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.remove(arguments[n]);return this}const e=this.children.indexOf(t);return e!==-1&&(t.parent=null,this.children.splice(e,1),t.dispatchEvent(ch),_a.child=t,this.dispatchEvent(_a),_a.child=null),this}removeFromParent(){const t=this.parent;return t!==null&&t.remove(this),this}clear(){return this.remove(...this.children)}attach(t){return this.updateWorldMatrix(!0,!1),gn.copy(this.matrixWorld).invert(),t.parent!==null&&(t.parent.updateWorldMatrix(!0,!1),gn.multiply(t.parent.matrixWorld)),t.applyMatrix4(gn),t.removeFromParent(),t.parent=this,this.children.push(t),t.updateWorldMatrix(!1,!0),t.dispatchEvent(yo),mi.child=t,this.dispatchEvent(mi),mi.child=null,this}getObjectById(t){return this.getObjectByProperty("id",t)}getObjectByName(t){return this.getObjectByProperty("name",t)}getObjectByProperty(t,e){if(this[t]===e)return this;for(let n=0,s=this.children.length;n<s;n++){const r=this.children[n].getObjectByProperty(t,e);if(r!==void 0)return r}}getObjectsByProperty(t,e,n=[]){this[t]===e&&n.push(this);const s=this.children;for(let a=0,r=s.length;a<r;a++)s[a].getObjectsByProperty(t,e,n);return n}getWorldPosition(t){return this.updateWorldMatrix(!0,!1),t.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose($i,t,oh),t}getWorldScale(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose($i,lh,t),t}getWorldDirection(t){this.updateWorldMatrix(!0,!1);const e=this.matrixWorld.elements;return t.set(e[8],e[9],e[10]).normalize()}raycast(){}traverse(t){t(this);const e=this.children;for(let n=0,s=e.length;n<s;n++)e[n].traverse(t)}traverseVisible(t){if(this.visible===!1)return;t(this);const e=this.children;for(let n=0,s=e.length;n<s;n++)e[n].traverseVisible(t)}traverseAncestors(t){const e=this.parent;e!==null&&(t(e),e.traverseAncestors(t))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(t){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||t)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,t=!0);const e=this.children;for(let n=0,s=e.length;n<s;n++)e[n].updateMatrixWorld(t)}updateWorldMatrix(t,e){const n=this.parent;if(t===!0&&n!==null&&n.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),e===!0){const s=this.children;for(let a=0,r=s.length;a<r;a++)s[a].updateWorldMatrix(!1,!0)}}toJSON(t){const e=t===void 0||typeof t=="string",n={};e&&(t={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},n.metadata={version:4.6,type:"Object",generator:"Object3D.toJSON"});const s={};s.uuid=this.uuid,s.type=this.type,this.name!==""&&(s.name=this.name),this.castShadow===!0&&(s.castShadow=!0),this.receiveShadow===!0&&(s.receiveShadow=!0),this.visible===!1&&(s.visible=!1),this.frustumCulled===!1&&(s.frustumCulled=!1),this.renderOrder!==0&&(s.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(s.userData=this.userData),s.layers=this.layers.mask,s.matrix=this.matrix.toArray(),s.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(s.matrixAutoUpdate=!1),this.isInstancedMesh&&(s.type="InstancedMesh",s.count=this.count,s.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(s.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(s.type="BatchedMesh",s.perObjectFrustumCulled=this.perObjectFrustumCulled,s.sortObjects=this.sortObjects,s.drawRanges=this._drawRanges,s.reservedRanges=this._reservedRanges,s.visibility=this._visibility,s.active=this._active,s.bounds=this._bounds.map(o=>({boxInitialized:o.boxInitialized,boxMin:o.box.min.toArray(),boxMax:o.box.max.toArray(),sphereInitialized:o.sphereInitialized,sphereRadius:o.sphere.radius,sphereCenter:o.sphere.center.toArray()})),s.maxInstanceCount=this._maxInstanceCount,s.maxVertexCount=this._maxVertexCount,s.maxIndexCount=this._maxIndexCount,s.geometryInitialized=this._geometryInitialized,s.geometryCount=this._geometryCount,s.matricesTexture=this._matricesTexture.toJSON(t),this._colorsTexture!==null&&(s.colorsTexture=this._colorsTexture.toJSON(t)),this.boundingSphere!==null&&(s.boundingSphere={center:s.boundingSphere.center.toArray(),radius:s.boundingSphere.radius}),this.boundingBox!==null&&(s.boundingBox={min:s.boundingBox.min.toArray(),max:s.boundingBox.max.toArray()}));function a(o,l){return o[l.uuid]===void 0&&(o[l.uuid]=l.toJSON(t)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?s.background=this.background.toJSON():this.background.isTexture&&(s.background=this.background.toJSON(t).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(s.environment=this.environment.toJSON(t).uuid);else if(this.isMesh||this.isLine||this.isPoints){s.geometry=a(t.geometries,this.geometry);const o=this.geometry.parameters;if(o!==void 0&&o.shapes!==void 0){const l=o.shapes;if(Array.isArray(l))for(let c=0,u=l.length;c<u;c++){const f=l[c];a(t.shapes,f)}else a(t.shapes,l)}}if(this.isSkinnedMesh&&(s.bindMode=this.bindMode,s.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(a(t.skeletons,this.skeleton),s.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const o=[];for(let l=0,c=this.material.length;l<c;l++)o.push(a(t.materials,this.material[l]));s.material=o}else s.material=a(t.materials,this.material);if(this.children.length>0){s.children=[];for(let o=0;o<this.children.length;o++)s.children.push(this.children[o].toJSON(t).object)}if(this.animations.length>0){s.animations=[];for(let o=0;o<this.animations.length;o++){const l=this.animations[o];s.animations.push(a(t.animations,l))}}if(e){const o=r(t.geometries),l=r(t.materials),c=r(t.textures),u=r(t.images),f=r(t.shapes),p=r(t.skeletons),d=r(t.animations),g=r(t.nodes);o.length>0&&(n.geometries=o),l.length>0&&(n.materials=l),c.length>0&&(n.textures=c),u.length>0&&(n.images=u),f.length>0&&(n.shapes=f),p.length>0&&(n.skeletons=p),d.length>0&&(n.animations=d),g.length>0&&(n.nodes=g)}return n.object=s,n;function r(o){const l=[];for(const c in o){const u=o[c];delete u.metadata,l.push(u)}return l}}clone(t){return new this.constructor().copy(this,t)}copy(t,e=!0){if(this.name=t.name,this.up.copy(t.up),this.position.copy(t.position),this.rotation.order=t.rotation.order,this.quaternion.copy(t.quaternion),this.scale.copy(t.scale),this.matrix.copy(t.matrix),this.matrixWorld.copy(t.matrixWorld),this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrixWorldAutoUpdate=t.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=t.matrixWorldNeedsUpdate,this.layers.mask=t.layers.mask,this.visible=t.visible,this.castShadow=t.castShadow,this.receiveShadow=t.receiveShadow,this.frustumCulled=t.frustumCulled,this.renderOrder=t.renderOrder,this.animations=t.animations.slice(),this.userData=JSON.parse(JSON.stringify(t.userData)),e===!0)for(let n=0;n<t.children.length;n++){const s=t.children[n];this.add(s.clone())}return this}}_e.DEFAULT_UP=new w(0,1,0);_e.DEFAULT_MATRIX_AUTO_UPDATE=!0;_e.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;const je=new w,_n=new w,va=new w,vn=new w,gi=new w,_i=new w,So=new w,xa=new w,Ma=new w,ya=new w,Sa=new jt,Ea=new jt,ba=new jt;class We{constructor(t=new w,e=new w,n=new w){this.a=t,this.b=e,this.c=n}static getNormal(t,e,n,s){s.subVectors(n,e),je.subVectors(t,e),s.cross(je);const a=s.lengthSq();return a>0?s.multiplyScalar(1/Math.sqrt(a)):s.set(0,0,0)}static getBarycoord(t,e,n,s,a){je.subVectors(s,e),_n.subVectors(n,e),va.subVectors(t,e);const r=je.dot(je),o=je.dot(_n),l=je.dot(va),c=_n.dot(_n),u=_n.dot(va),f=r*c-o*o;if(f===0)return a.set(0,0,0),null;const p=1/f,d=(c*l-o*u)*p,g=(r*u-o*l)*p;return a.set(1-d-g,g,d)}static containsPoint(t,e,n,s){return this.getBarycoord(t,e,n,s,vn)===null?!1:vn.x>=0&&vn.y>=0&&vn.x+vn.y<=1}static getInterpolation(t,e,n,s,a,r,o,l){return this.getBarycoord(t,e,n,s,vn)===null?(l.x=0,l.y=0,"z"in l&&(l.z=0),"w"in l&&(l.w=0),null):(l.setScalar(0),l.addScaledVector(a,vn.x),l.addScaledVector(r,vn.y),l.addScaledVector(o,vn.z),l)}static getInterpolatedAttribute(t,e,n,s,a,r){return Sa.setScalar(0),Ea.setScalar(0),ba.setScalar(0),Sa.fromBufferAttribute(t,e),Ea.fromBufferAttribute(t,n),ba.fromBufferAttribute(t,s),r.setScalar(0),r.addScaledVector(Sa,a.x),r.addScaledVector(Ea,a.y),r.addScaledVector(ba,a.z),r}static isFrontFacing(t,e,n,s){return je.subVectors(n,e),_n.subVectors(t,e),je.cross(_n).dot(s)<0}set(t,e,n){return this.a.copy(t),this.b.copy(e),this.c.copy(n),this}setFromPointsAndIndices(t,e,n,s){return this.a.copy(t[e]),this.b.copy(t[n]),this.c.copy(t[s]),this}setFromAttributeAndIndices(t,e,n,s){return this.a.fromBufferAttribute(t,e),this.b.fromBufferAttribute(t,n),this.c.fromBufferAttribute(t,s),this}clone(){return new this.constructor().copy(this)}copy(t){return this.a.copy(t.a),this.b.copy(t.b),this.c.copy(t.c),this}getArea(){return je.subVectors(this.c,this.b),_n.subVectors(this.a,this.b),je.cross(_n).length()*.5}getMidpoint(t){return t.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(t){return We.getNormal(this.a,this.b,this.c,t)}getPlane(t){return t.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(t,e){return We.getBarycoord(t,this.a,this.b,this.c,e)}getInterpolation(t,e,n,s,a){return We.getInterpolation(t,this.a,this.b,this.c,e,n,s,a)}containsPoint(t){return We.containsPoint(t,this.a,this.b,this.c)}isFrontFacing(t){return We.isFrontFacing(this.a,this.b,this.c,t)}intersectsBox(t){return t.intersectsTriangle(this)}closestPointToPoint(t,e){const n=this.a,s=this.b,a=this.c;let r,o;gi.subVectors(s,n),_i.subVectors(a,n),xa.subVectors(t,n);const l=gi.dot(xa),c=_i.dot(xa);if(l<=0&&c<=0)return e.copy(n);Ma.subVectors(t,s);const u=gi.dot(Ma),f=_i.dot(Ma);if(u>=0&&f<=u)return e.copy(s);const p=l*f-u*c;if(p<=0&&l>=0&&u<=0)return r=l/(l-u),e.copy(n).addScaledVector(gi,r);ya.subVectors(t,a);const d=gi.dot(ya),g=_i.dot(ya);if(g>=0&&d<=g)return e.copy(a);const _=d*c-l*g;if(_<=0&&c>=0&&g<=0)return o=c/(c-g),e.copy(n).addScaledVector(_i,o);const m=u*g-d*f;if(m<=0&&f-u>=0&&d-g>=0)return So.subVectors(a,s),o=(f-u)/(f-u+(d-g)),e.copy(s).addScaledVector(So,o);const h=1/(m+_+p);return r=_*h,o=p*h,e.copy(n).addScaledVector(gi,r).addScaledVector(_i,o)}equals(t){return t.a.equals(this.a)&&t.b.equals(this.b)&&t.c.equals(this.c)}}const Ol={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},Dn={h:0,s:0,l:0},Ss={h:0,s:0,l:0};function Ta(i,t,e){return e<0&&(e+=1),e>1&&(e-=1),e<1/6?i+(t-i)*6*e:e<1/2?t:e<2/3?i+(t-i)*6*(2/3-e):i}class Bt{constructor(t,e,n){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(t,e,n)}set(t,e,n){if(e===void 0&&n===void 0){const s=t;s&&s.isColor?this.copy(s):typeof s=="number"?this.setHex(s):typeof s=="string"&&this.setStyle(s)}else this.setRGB(t,e,n);return this}setScalar(t){return this.r=t,this.g=t,this.b=t,this}setHex(t,e=Ve){return t=Math.floor(t),this.r=(t>>16&255)/255,this.g=(t>>8&255)/255,this.b=(t&255)/255,Gt.toWorkingColorSpace(this,e),this}setRGB(t,e,n,s=Gt.workingColorSpace){return this.r=t,this.g=e,this.b=n,Gt.toWorkingColorSpace(this,s),this}setHSL(t,e,n,s=Gt.workingColorSpace){if(t=qc(t,1),e=Ae(e,0,1),n=Ae(n,0,1),e===0)this.r=this.g=this.b=n;else{const a=n<=.5?n*(1+e):n+e-n*e,r=2*n-a;this.r=Ta(r,a,t+1/3),this.g=Ta(r,a,t),this.b=Ta(r,a,t-1/3)}return Gt.toWorkingColorSpace(this,s),this}setStyle(t,e=Ve){function n(a){a!==void 0&&parseFloat(a)<1&&console.warn("THREE.Color: Alpha component of "+t+" will be ignored.")}let s;if(s=/^(\w+)\(([^\)]*)\)/.exec(t)){let a;const r=s[1],o=s[2];switch(r){case"rgb":case"rgba":if(a=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(a[4]),this.setRGB(Math.min(255,parseInt(a[1],10))/255,Math.min(255,parseInt(a[2],10))/255,Math.min(255,parseInt(a[3],10))/255,e);if(a=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(a[4]),this.setRGB(Math.min(100,parseInt(a[1],10))/100,Math.min(100,parseInt(a[2],10))/100,Math.min(100,parseInt(a[3],10))/100,e);break;case"hsl":case"hsla":if(a=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(a[4]),this.setHSL(parseFloat(a[1])/360,parseFloat(a[2])/100,parseFloat(a[3])/100,e);break;default:console.warn("THREE.Color: Unknown color model "+t)}}else if(s=/^\#([A-Fa-f\d]+)$/.exec(t)){const a=s[1],r=a.length;if(r===3)return this.setRGB(parseInt(a.charAt(0),16)/15,parseInt(a.charAt(1),16)/15,parseInt(a.charAt(2),16)/15,e);if(r===6)return this.setHex(parseInt(a,16),e);console.warn("THREE.Color: Invalid hex color "+t)}else if(t&&t.length>0)return this.setColorName(t,e);return this}setColorName(t,e=Ve){const n=Ol[t.toLowerCase()];return n!==void 0?this.setHex(n,e):console.warn("THREE.Color: Unknown color "+t),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(t){return this.r=t.r,this.g=t.g,this.b=t.b,this}copySRGBToLinear(t){return this.r=En(t.r),this.g=En(t.g),this.b=En(t.b),this}copyLinearToSRGB(t){return this.r=Ii(t.r),this.g=Ii(t.g),this.b=Ii(t.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(t=Ve){return Gt.fromWorkingColorSpace(Se.copy(this),t),Math.round(Ae(Se.r*255,0,255))*65536+Math.round(Ae(Se.g*255,0,255))*256+Math.round(Ae(Se.b*255,0,255))}getHexString(t=Ve){return("000000"+this.getHex(t).toString(16)).slice(-6)}getHSL(t,e=Gt.workingColorSpace){Gt.fromWorkingColorSpace(Se.copy(this),e);const n=Se.r,s=Se.g,a=Se.b,r=Math.max(n,s,a),o=Math.min(n,s,a);let l,c;const u=(o+r)/2;if(o===r)l=0,c=0;else{const f=r-o;switch(c=u<=.5?f/(r+o):f/(2-r-o),r){case n:l=(s-a)/f+(s<a?6:0);break;case s:l=(a-n)/f+2;break;case a:l=(n-s)/f+4;break}l/=6}return t.h=l,t.s=c,t.l=u,t}getRGB(t,e=Gt.workingColorSpace){return Gt.fromWorkingColorSpace(Se.copy(this),e),t.r=Se.r,t.g=Se.g,t.b=Se.b,t}getStyle(t=Ve){Gt.fromWorkingColorSpace(Se.copy(this),t);const e=Se.r,n=Se.g,s=Se.b;return t!==Ve?`color(${t} ${e.toFixed(3)} ${n.toFixed(3)} ${s.toFixed(3)})`:`rgb(${Math.round(e*255)},${Math.round(n*255)},${Math.round(s*255)})`}offsetHSL(t,e,n){return this.getHSL(Dn),this.setHSL(Dn.h+t,Dn.s+e,Dn.l+n)}add(t){return this.r+=t.r,this.g+=t.g,this.b+=t.b,this}addColors(t,e){return this.r=t.r+e.r,this.g=t.g+e.g,this.b=t.b+e.b,this}addScalar(t){return this.r+=t,this.g+=t,this.b+=t,this}sub(t){return this.r=Math.max(0,this.r-t.r),this.g=Math.max(0,this.g-t.g),this.b=Math.max(0,this.b-t.b),this}multiply(t){return this.r*=t.r,this.g*=t.g,this.b*=t.b,this}multiplyScalar(t){return this.r*=t,this.g*=t,this.b*=t,this}lerp(t,e){return this.r+=(t.r-this.r)*e,this.g+=(t.g-this.g)*e,this.b+=(t.b-this.b)*e,this}lerpColors(t,e,n){return this.r=t.r+(e.r-t.r)*n,this.g=t.g+(e.g-t.g)*n,this.b=t.b+(e.b-t.b)*n,this}lerpHSL(t,e){this.getHSL(Dn),t.getHSL(Ss);const n=la(Dn.h,Ss.h,e),s=la(Dn.s,Ss.s,e),a=la(Dn.l,Ss.l,e);return this.setHSL(n,s,a),this}setFromVector3(t){return this.r=t.x,this.g=t.y,this.b=t.z,this}applyMatrix3(t){const e=this.r,n=this.g,s=this.b,a=t.elements;return this.r=a[0]*e+a[3]*n+a[6]*s,this.g=a[1]*e+a[4]*n+a[7]*s,this.b=a[2]*e+a[5]*n+a[8]*s,this}equals(t){return t.r===this.r&&t.g===this.g&&t.b===this.b}fromArray(t,e=0){return this.r=t[e],this.g=t[e+1],this.b=t[e+2],this}toArray(t=[],e=0){return t[e]=this.r,t[e+1]=this.g,t[e+2]=this.b,t}fromBufferAttribute(t,e){return this.r=t.getX(e),this.g=t.getY(e),this.b=t.getZ(e),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const Se=new Bt;Bt.NAMES=Ol;let hh=0;class kn extends ri{static get type(){return"Material"}get type(){return this.constructor.type}set type(t){}constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:hh++}),this.uuid=Bn(),this.name="",this.blending=Di,this.side=zn,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=Wa,this.blendDst=Xa,this.blendEquation=Jn,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new Bt(0,0,0),this.blendAlpha=0,this.depthFunc=Fi,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=ao,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=li,this.stencilZFail=li,this.stencilZPass=li,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(t){this._alphaTest>0!=t>0&&this.version++,this._alphaTest=t}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(t){if(t!==void 0)for(const e in t){const n=t[e];if(n===void 0){console.warn(`THREE.Material: parameter '${e}' has value of undefined.`);continue}const s=this[e];if(s===void 0){console.warn(`THREE.Material: '${e}' is not a property of THREE.${this.type}.`);continue}s&&s.isColor?s.set(n):s&&s.isVector3&&n&&n.isVector3?s.copy(n):this[e]=n}}toJSON(t){const e=t===void 0||typeof t=="string";e&&(t={textures:{},images:{}});const n={metadata:{version:4.6,type:"Material",generator:"Material.toJSON"}};n.uuid=this.uuid,n.type=this.type,this.name!==""&&(n.name=this.name),this.color&&this.color.isColor&&(n.color=this.color.getHex()),this.roughness!==void 0&&(n.roughness=this.roughness),this.metalness!==void 0&&(n.metalness=this.metalness),this.sheen!==void 0&&(n.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(n.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(n.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(n.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(n.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(n.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(n.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(n.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(n.shininess=this.shininess),this.clearcoat!==void 0&&(n.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(n.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(n.clearcoatMap=this.clearcoatMap.toJSON(t).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(n.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(t).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(n.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(t).uuid,n.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.dispersion!==void 0&&(n.dispersion=this.dispersion),this.iridescence!==void 0&&(n.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(n.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(n.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(n.iridescenceMap=this.iridescenceMap.toJSON(t).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(n.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(t).uuid),this.anisotropy!==void 0&&(n.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(n.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(n.anisotropyMap=this.anisotropyMap.toJSON(t).uuid),this.map&&this.map.isTexture&&(n.map=this.map.toJSON(t).uuid),this.matcap&&this.matcap.isTexture&&(n.matcap=this.matcap.toJSON(t).uuid),this.alphaMap&&this.alphaMap.isTexture&&(n.alphaMap=this.alphaMap.toJSON(t).uuid),this.lightMap&&this.lightMap.isTexture&&(n.lightMap=this.lightMap.toJSON(t).uuid,n.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(n.aoMap=this.aoMap.toJSON(t).uuid,n.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(n.bumpMap=this.bumpMap.toJSON(t).uuid,n.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(n.normalMap=this.normalMap.toJSON(t).uuid,n.normalMapType=this.normalMapType,n.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(n.displacementMap=this.displacementMap.toJSON(t).uuid,n.displacementScale=this.displacementScale,n.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(n.roughnessMap=this.roughnessMap.toJSON(t).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(n.metalnessMap=this.metalnessMap.toJSON(t).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(n.emissiveMap=this.emissiveMap.toJSON(t).uuid),this.specularMap&&this.specularMap.isTexture&&(n.specularMap=this.specularMap.toJSON(t).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(n.specularIntensityMap=this.specularIntensityMap.toJSON(t).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(n.specularColorMap=this.specularColorMap.toJSON(t).uuid),this.envMap&&this.envMap.isTexture&&(n.envMap=this.envMap.toJSON(t).uuid,this.combine!==void 0&&(n.combine=this.combine)),this.envMapRotation!==void 0&&(n.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(n.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(n.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(n.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(n.gradientMap=this.gradientMap.toJSON(t).uuid),this.transmission!==void 0&&(n.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(n.transmissionMap=this.transmissionMap.toJSON(t).uuid),this.thickness!==void 0&&(n.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(n.thicknessMap=this.thicknessMap.toJSON(t).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(n.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(n.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(n.size=this.size),this.shadowSide!==null&&(n.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(n.sizeAttenuation=this.sizeAttenuation),this.blending!==Di&&(n.blending=this.blending),this.side!==zn&&(n.side=this.side),this.vertexColors===!0&&(n.vertexColors=!0),this.opacity<1&&(n.opacity=this.opacity),this.transparent===!0&&(n.transparent=!0),this.blendSrc!==Wa&&(n.blendSrc=this.blendSrc),this.blendDst!==Xa&&(n.blendDst=this.blendDst),this.blendEquation!==Jn&&(n.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(n.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(n.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(n.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(n.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(n.blendAlpha=this.blendAlpha),this.depthFunc!==Fi&&(n.depthFunc=this.depthFunc),this.depthTest===!1&&(n.depthTest=this.depthTest),this.depthWrite===!1&&(n.depthWrite=this.depthWrite),this.colorWrite===!1&&(n.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(n.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==ao&&(n.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(n.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(n.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==li&&(n.stencilFail=this.stencilFail),this.stencilZFail!==li&&(n.stencilZFail=this.stencilZFail),this.stencilZPass!==li&&(n.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(n.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(n.rotation=this.rotation),this.polygonOffset===!0&&(n.polygonOffset=!0),this.polygonOffsetFactor!==0&&(n.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(n.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(n.linewidth=this.linewidth),this.dashSize!==void 0&&(n.dashSize=this.dashSize),this.gapSize!==void 0&&(n.gapSize=this.gapSize),this.scale!==void 0&&(n.scale=this.scale),this.dithering===!0&&(n.dithering=!0),this.alphaTest>0&&(n.alphaTest=this.alphaTest),this.alphaHash===!0&&(n.alphaHash=!0),this.alphaToCoverage===!0&&(n.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(n.premultipliedAlpha=!0),this.forceSinglePass===!0&&(n.forceSinglePass=!0),this.wireframe===!0&&(n.wireframe=!0),this.wireframeLinewidth>1&&(n.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(n.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(n.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(n.flatShading=!0),this.visible===!1&&(n.visible=!1),this.toneMapped===!1&&(n.toneMapped=!1),this.fog===!1&&(n.fog=!1),Object.keys(this.userData).length>0&&(n.userData=this.userData);function s(a){const r=[];for(const o in a){const l=a[o];delete l.metadata,r.push(l)}return r}if(e){const a=s(t.textures),r=s(t.images);a.length>0&&(n.textures=a),r.length>0&&(n.images=r)}return n}clone(){return new this.constructor().copy(this)}copy(t){this.name=t.name,this.blending=t.blending,this.side=t.side,this.vertexColors=t.vertexColors,this.opacity=t.opacity,this.transparent=t.transparent,this.blendSrc=t.blendSrc,this.blendDst=t.blendDst,this.blendEquation=t.blendEquation,this.blendSrcAlpha=t.blendSrcAlpha,this.blendDstAlpha=t.blendDstAlpha,this.blendEquationAlpha=t.blendEquationAlpha,this.blendColor.copy(t.blendColor),this.blendAlpha=t.blendAlpha,this.depthFunc=t.depthFunc,this.depthTest=t.depthTest,this.depthWrite=t.depthWrite,this.stencilWriteMask=t.stencilWriteMask,this.stencilFunc=t.stencilFunc,this.stencilRef=t.stencilRef,this.stencilFuncMask=t.stencilFuncMask,this.stencilFail=t.stencilFail,this.stencilZFail=t.stencilZFail,this.stencilZPass=t.stencilZPass,this.stencilWrite=t.stencilWrite;const e=t.clippingPlanes;let n=null;if(e!==null){const s=e.length;n=new Array(s);for(let a=0;a!==s;++a)n[a]=e[a].clone()}return this.clippingPlanes=n,this.clipIntersection=t.clipIntersection,this.clipShadows=t.clipShadows,this.shadowSide=t.shadowSide,this.colorWrite=t.colorWrite,this.precision=t.precision,this.polygonOffset=t.polygonOffset,this.polygonOffsetFactor=t.polygonOffsetFactor,this.polygonOffsetUnits=t.polygonOffsetUnits,this.dithering=t.dithering,this.alphaTest=t.alphaTest,this.alphaHash=t.alphaHash,this.alphaToCoverage=t.alphaToCoverage,this.premultipliedAlpha=t.premultipliedAlpha,this.forceSinglePass=t.forceSinglePass,this.visible=t.visible,this.toneMapped=t.toneMapped,this.userData=JSON.parse(JSON.stringify(t.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(t){t===!0&&this.version++}onBuild(){console.warn("Material: onBuild() has been removed.")}}class Oe extends kn{static get type(){return"MeshBasicMaterial"}constructor(t){super(),this.isMeshBasicMaterial=!0,this.color=new Bt(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new un,this.combine=Ml,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.specularMap=t.specularMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.combine=t.combine,this.reflectivity=t.reflectivity,this.refractionRatio=t.refractionRatio,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.fog=t.fog,this}}const he=new w,Es=new Mt;class se{constructor(t,e,n=!1){if(Array.isArray(t))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,this.name="",this.array=t,this.itemSize=e,this.count=t!==void 0?t.length/e:0,this.normalized=n,this.usage=Rr,this.updateRanges=[],this.gpuType=yn,this.version=0}onUploadCallback(){}set needsUpdate(t){t===!0&&this.version++}setUsage(t){return this.usage=t,this}addUpdateRange(t,e){this.updateRanges.push({start:t,count:e})}clearUpdateRanges(){this.updateRanges.length=0}copy(t){return this.name=t.name,this.array=new t.array.constructor(t.array),this.itemSize=t.itemSize,this.count=t.count,this.normalized=t.normalized,this.usage=t.usage,this.gpuType=t.gpuType,this}copyAt(t,e,n){t*=this.itemSize,n*=e.itemSize;for(let s=0,a=this.itemSize;s<a;s++)this.array[t+s]=e.array[n+s];return this}copyArray(t){return this.array.set(t),this}applyMatrix3(t){if(this.itemSize===2)for(let e=0,n=this.count;e<n;e++)Es.fromBufferAttribute(this,e),Es.applyMatrix3(t),this.setXY(e,Es.x,Es.y);else if(this.itemSize===3)for(let e=0,n=this.count;e<n;e++)he.fromBufferAttribute(this,e),he.applyMatrix3(t),this.setXYZ(e,he.x,he.y,he.z);return this}applyMatrix4(t){for(let e=0,n=this.count;e<n;e++)he.fromBufferAttribute(this,e),he.applyMatrix4(t),this.setXYZ(e,he.x,he.y,he.z);return this}applyNormalMatrix(t){for(let e=0,n=this.count;e<n;e++)he.fromBufferAttribute(this,e),he.applyNormalMatrix(t),this.setXYZ(e,he.x,he.y,he.z);return this}transformDirection(t){for(let e=0,n=this.count;e<n;e++)he.fromBufferAttribute(this,e),he.transformDirection(t),this.setXYZ(e,he.x,he.y,he.z);return this}set(t,e=0){return this.array.set(t,e),this}getComponent(t,e){let n=this.array[t*this.itemSize+e];return this.normalized&&(n=cn(n,this.array)),n}setComponent(t,e,n){return this.normalized&&(n=$t(n,this.array)),this.array[t*this.itemSize+e]=n,this}getX(t){let e=this.array[t*this.itemSize];return this.normalized&&(e=cn(e,this.array)),e}setX(t,e){return this.normalized&&(e=$t(e,this.array)),this.array[t*this.itemSize]=e,this}getY(t){let e=this.array[t*this.itemSize+1];return this.normalized&&(e=cn(e,this.array)),e}setY(t,e){return this.normalized&&(e=$t(e,this.array)),this.array[t*this.itemSize+1]=e,this}getZ(t){let e=this.array[t*this.itemSize+2];return this.normalized&&(e=cn(e,this.array)),e}setZ(t,e){return this.normalized&&(e=$t(e,this.array)),this.array[t*this.itemSize+2]=e,this}getW(t){let e=this.array[t*this.itemSize+3];return this.normalized&&(e=cn(e,this.array)),e}setW(t,e){return this.normalized&&(e=$t(e,this.array)),this.array[t*this.itemSize+3]=e,this}setXY(t,e,n){return t*=this.itemSize,this.normalized&&(e=$t(e,this.array),n=$t(n,this.array)),this.array[t+0]=e,this.array[t+1]=n,this}setXYZ(t,e,n,s){return t*=this.itemSize,this.normalized&&(e=$t(e,this.array),n=$t(n,this.array),s=$t(s,this.array)),this.array[t+0]=e,this.array[t+1]=n,this.array[t+2]=s,this}setXYZW(t,e,n,s,a){return t*=this.itemSize,this.normalized&&(e=$t(e,this.array),n=$t(n,this.array),s=$t(s,this.array),a=$t(a,this.array)),this.array[t+0]=e,this.array[t+1]=n,this.array[t+2]=s,this.array[t+3]=a,this}onUpload(t){return this.onUploadCallback=t,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const t={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(t.name=this.name),this.usage!==Rr&&(t.usage=this.usage),t}}class Bl extends se{constructor(t,e,n){super(new Uint16Array(t),e,n)}}class zl extends se{constructor(t,e,n){super(new Uint32Array(t),e,n)}}class ve extends se{constructor(t,e,n){super(new Float32Array(t),e,n)}}let uh=0;const Ge=new Jt,Aa=new _e,vi=new w,Ue=new os,Ki=new os,ge=new w;class ce extends ri{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:uh++}),this.uuid=Bn(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(t){return Array.isArray(t)?this.index=new(Ul(t)?zl:Bl)(t,1):this.index=t,this}setIndirect(t){return this.indirect=t,this}getIndirect(){return this.indirect}getAttribute(t){return this.attributes[t]}setAttribute(t,e){return this.attributes[t]=e,this}deleteAttribute(t){return delete this.attributes[t],this}hasAttribute(t){return this.attributes[t]!==void 0}addGroup(t,e,n=0){this.groups.push({start:t,count:e,materialIndex:n})}clearGroups(){this.groups=[]}setDrawRange(t,e){this.drawRange.start=t,this.drawRange.count=e}applyMatrix4(t){const e=this.attributes.position;e!==void 0&&(e.applyMatrix4(t),e.needsUpdate=!0);const n=this.attributes.normal;if(n!==void 0){const a=new Pt().getNormalMatrix(t);n.applyNormalMatrix(a),n.needsUpdate=!0}const s=this.attributes.tangent;return s!==void 0&&(s.transformDirection(t),s.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(t){return Ge.makeRotationFromQuaternion(t),this.applyMatrix4(Ge),this}rotateX(t){return Ge.makeRotationX(t),this.applyMatrix4(Ge),this}rotateY(t){return Ge.makeRotationY(t),this.applyMatrix4(Ge),this}rotateZ(t){return Ge.makeRotationZ(t),this.applyMatrix4(Ge),this}translate(t,e,n){return Ge.makeTranslation(t,e,n),this.applyMatrix4(Ge),this}scale(t,e,n){return Ge.makeScale(t,e,n),this.applyMatrix4(Ge),this}lookAt(t){return Aa.lookAt(t),Aa.updateMatrix(),this.applyMatrix4(Aa.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(vi).negate(),this.translate(vi.x,vi.y,vi.z),this}setFromPoints(t){const e=this.getAttribute("position");if(e===void 0){const n=[];for(let s=0,a=t.length;s<a;s++){const r=t[s];n.push(r.x,r.y,r.z||0)}this.setAttribute("position",new ve(n,3))}else{for(let n=0,s=e.count;n<s;n++){const a=t[n];e.setXYZ(n,a.x,a.y,a.z||0)}t.length>e.count&&console.warn("THREE.BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),e.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new os);const t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new w(-1/0,-1/0,-1/0),new w(1/0,1/0,1/0));return}if(t!==void 0){if(this.boundingBox.setFromBufferAttribute(t),e)for(let n=0,s=e.length;n<s;n++){const a=e[n];Ue.setFromBufferAttribute(a),this.morphTargetsRelative?(ge.addVectors(this.boundingBox.min,Ue.min),this.boundingBox.expandByPoint(ge),ge.addVectors(this.boundingBox.max,Ue.max),this.boundingBox.expandByPoint(ge)):(this.boundingBox.expandByPoint(Ue.min),this.boundingBox.expandByPoint(Ue.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new ls);const t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new w,1/0);return}if(t){const n=this.boundingSphere.center;if(Ue.setFromBufferAttribute(t),e)for(let a=0,r=e.length;a<r;a++){const o=e[a];Ki.setFromBufferAttribute(o),this.morphTargetsRelative?(ge.addVectors(Ue.min,Ki.min),Ue.expandByPoint(ge),ge.addVectors(Ue.max,Ki.max),Ue.expandByPoint(ge)):(Ue.expandByPoint(Ki.min),Ue.expandByPoint(Ki.max))}Ue.getCenter(n);let s=0;for(let a=0,r=t.count;a<r;a++)ge.fromBufferAttribute(t,a),s=Math.max(s,n.distanceToSquared(ge));if(e)for(let a=0,r=e.length;a<r;a++){const o=e[a],l=this.morphTargetsRelative;for(let c=0,u=o.count;c<u;c++)ge.fromBufferAttribute(o,c),l&&(vi.fromBufferAttribute(t,c),ge.add(vi)),s=Math.max(s,n.distanceToSquared(ge))}this.boundingSphere.radius=Math.sqrt(s),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const t=this.index,e=this.attributes;if(t===null||e.position===void 0||e.normal===void 0||e.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const n=e.position,s=e.normal,a=e.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new se(new Float32Array(4*n.count),4));const r=this.getAttribute("tangent"),o=[],l=[];for(let U=0;U<n.count;U++)o[U]=new w,l[U]=new w;const c=new w,u=new w,f=new w,p=new Mt,d=new Mt,g=new Mt,_=new w,m=new w;function h(U,y,x){c.fromBufferAttribute(n,U),u.fromBufferAttribute(n,y),f.fromBufferAttribute(n,x),p.fromBufferAttribute(a,U),d.fromBufferAttribute(a,y),g.fromBufferAttribute(a,x),u.sub(c),f.sub(c),d.sub(p),g.sub(p);const A=1/(d.x*g.y-g.x*d.y);isFinite(A)&&(_.copy(u).multiplyScalar(g.y).addScaledVector(f,-d.y).multiplyScalar(A),m.copy(f).multiplyScalar(d.x).addScaledVector(u,-g.x).multiplyScalar(A),o[U].add(_),o[y].add(_),o[x].add(_),l[U].add(m),l[y].add(m),l[x].add(m))}let T=this.groups;T.length===0&&(T=[{start:0,count:t.count}]);for(let U=0,y=T.length;U<y;++U){const x=T[U],A=x.start,F=x.count;for(let N=A,k=A+F;N<k;N+=3)h(t.getX(N+0),t.getX(N+1),t.getX(N+2))}const b=new w,S=new w,O=new w,C=new w;function R(U){O.fromBufferAttribute(s,U),C.copy(O);const y=o[U];b.copy(y),b.sub(O.multiplyScalar(O.dot(y))).normalize(),S.crossVectors(C,y);const A=S.dot(l[U])<0?-1:1;r.setXYZW(U,b.x,b.y,b.z,A)}for(let U=0,y=T.length;U<y;++U){const x=T[U],A=x.start,F=x.count;for(let N=A,k=A+F;N<k;N+=3)R(t.getX(N+0)),R(t.getX(N+1)),R(t.getX(N+2))}}computeVertexNormals(){const t=this.index,e=this.getAttribute("position");if(e!==void 0){let n=this.getAttribute("normal");if(n===void 0)n=new se(new Float32Array(e.count*3),3),this.setAttribute("normal",n);else for(let p=0,d=n.count;p<d;p++)n.setXYZ(p,0,0,0);const s=new w,a=new w,r=new w,o=new w,l=new w,c=new w,u=new w,f=new w;if(t)for(let p=0,d=t.count;p<d;p+=3){const g=t.getX(p+0),_=t.getX(p+1),m=t.getX(p+2);s.fromBufferAttribute(e,g),a.fromBufferAttribute(e,_),r.fromBufferAttribute(e,m),u.subVectors(r,a),f.subVectors(s,a),u.cross(f),o.fromBufferAttribute(n,g),l.fromBufferAttribute(n,_),c.fromBufferAttribute(n,m),o.add(u),l.add(u),c.add(u),n.setXYZ(g,o.x,o.y,o.z),n.setXYZ(_,l.x,l.y,l.z),n.setXYZ(m,c.x,c.y,c.z)}else for(let p=0,d=e.count;p<d;p+=3)s.fromBufferAttribute(e,p+0),a.fromBufferAttribute(e,p+1),r.fromBufferAttribute(e,p+2),u.subVectors(r,a),f.subVectors(s,a),u.cross(f),n.setXYZ(p+0,u.x,u.y,u.z),n.setXYZ(p+1,u.x,u.y,u.z),n.setXYZ(p+2,u.x,u.y,u.z);this.normalizeNormals(),n.needsUpdate=!0}}normalizeNormals(){const t=this.attributes.normal;for(let e=0,n=t.count;e<n;e++)ge.fromBufferAttribute(t,e),ge.normalize(),t.setXYZ(e,ge.x,ge.y,ge.z)}toNonIndexed(){function t(o,l){const c=o.array,u=o.itemSize,f=o.normalized,p=new c.constructor(l.length*u);let d=0,g=0;for(let _=0,m=l.length;_<m;_++){o.isInterleavedBufferAttribute?d=l[_]*o.data.stride+o.offset:d=l[_]*u;for(let h=0;h<u;h++)p[g++]=c[d++]}return new se(p,u,f)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const e=new ce,n=this.index.array,s=this.attributes;for(const o in s){const l=s[o],c=t(l,n);e.setAttribute(o,c)}const a=this.morphAttributes;for(const o in a){const l=[],c=a[o];for(let u=0,f=c.length;u<f;u++){const p=c[u],d=t(p,n);l.push(d)}e.morphAttributes[o]=l}e.morphTargetsRelative=this.morphTargetsRelative;const r=this.groups;for(let o=0,l=r.length;o<l;o++){const c=r[o];e.addGroup(c.start,c.count,c.materialIndex)}return e}toJSON(){const t={metadata:{version:4.6,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(t.uuid=this.uuid,t.type=this.type,this.name!==""&&(t.name=this.name),Object.keys(this.userData).length>0&&(t.userData=this.userData),this.parameters!==void 0){const l=this.parameters;for(const c in l)l[c]!==void 0&&(t[c]=l[c]);return t}t.data={attributes:{}};const e=this.index;e!==null&&(t.data.index={type:e.array.constructor.name,array:Array.prototype.slice.call(e.array)});const n=this.attributes;for(const l in n){const c=n[l];t.data.attributes[l]=c.toJSON(t.data)}const s={};let a=!1;for(const l in this.morphAttributes){const c=this.morphAttributes[l],u=[];for(let f=0,p=c.length;f<p;f++){const d=c[f];u.push(d.toJSON(t.data))}u.length>0&&(s[l]=u,a=!0)}a&&(t.data.morphAttributes=s,t.data.morphTargetsRelative=this.morphTargetsRelative);const r=this.groups;r.length>0&&(t.data.groups=JSON.parse(JSON.stringify(r)));const o=this.boundingSphere;return o!==null&&(t.data.boundingSphere={center:o.center.toArray(),radius:o.radius}),t}clone(){return new this.constructor().copy(this)}copy(t){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const e={};this.name=t.name;const n=t.index;n!==null&&this.setIndex(n.clone(e));const s=t.attributes;for(const c in s){const u=s[c];this.setAttribute(c,u.clone(e))}const a=t.morphAttributes;for(const c in a){const u=[],f=a[c];for(let p=0,d=f.length;p<d;p++)u.push(f[p].clone(e));this.morphAttributes[c]=u}this.morphTargetsRelative=t.morphTargetsRelative;const r=t.groups;for(let c=0,u=r.length;c<u;c++){const f=r[c];this.addGroup(f.start,f.count,f.materialIndex)}const o=t.boundingBox;o!==null&&(this.boundingBox=o.clone());const l=t.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=t.drawRange.start,this.drawRange.count=t.drawRange.count,this.userData=t.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}const Eo=new Jt,Wn=new cs,bs=new ls,bo=new w,Ts=new w,As=new w,ws=new w,wa=new w,Cs=new w,To=new w,Rs=new w;class ae extends _e{constructor(t=new ce,e=new Oe){super(),this.isMesh=!0,this.type="Mesh",this.geometry=t,this.material=e,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),t.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=t.morphTargetInfluences.slice()),t.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},t.morphTargetDictionary)),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}updateMorphTargets(){const e=this.geometry.morphAttributes,n=Object.keys(e);if(n.length>0){const s=e[n[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let a=0,r=s.length;a<r;a++){const o=s[a].name||String(a);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=a}}}}getVertexPosition(t,e){const n=this.geometry,s=n.attributes.position,a=n.morphAttributes.position,r=n.morphTargetsRelative;e.fromBufferAttribute(s,t);const o=this.morphTargetInfluences;if(a&&o){Cs.set(0,0,0);for(let l=0,c=a.length;l<c;l++){const u=o[l],f=a[l];u!==0&&(wa.fromBufferAttribute(f,t),r?Cs.addScaledVector(wa,u):Cs.addScaledVector(wa.sub(e),u))}e.add(Cs)}return e}raycast(t,e){const n=this.geometry,s=this.material,a=this.matrixWorld;s!==void 0&&(n.boundingSphere===null&&n.computeBoundingSphere(),bs.copy(n.boundingSphere),bs.applyMatrix4(a),Wn.copy(t.ray).recast(t.near),!(bs.containsPoint(Wn.origin)===!1&&(Wn.intersectSphere(bs,bo)===null||Wn.origin.distanceToSquared(bo)>(t.far-t.near)**2))&&(Eo.copy(a).invert(),Wn.copy(t.ray).applyMatrix4(Eo),!(n.boundingBox!==null&&Wn.intersectsBox(n.boundingBox)===!1)&&this._computeIntersections(t,e,Wn)))}_computeIntersections(t,e,n){let s;const a=this.geometry,r=this.material,o=a.index,l=a.attributes.position,c=a.attributes.uv,u=a.attributes.uv1,f=a.attributes.normal,p=a.groups,d=a.drawRange;if(o!==null)if(Array.isArray(r))for(let g=0,_=p.length;g<_;g++){const m=p[g],h=r[m.materialIndex],T=Math.max(m.start,d.start),b=Math.min(o.count,Math.min(m.start+m.count,d.start+d.count));for(let S=T,O=b;S<O;S+=3){const C=o.getX(S),R=o.getX(S+1),U=o.getX(S+2);s=Ps(this,h,t,n,c,u,f,C,R,U),s&&(s.faceIndex=Math.floor(S/3),s.face.materialIndex=m.materialIndex,e.push(s))}}else{const g=Math.max(0,d.start),_=Math.min(o.count,d.start+d.count);for(let m=g,h=_;m<h;m+=3){const T=o.getX(m),b=o.getX(m+1),S=o.getX(m+2);s=Ps(this,r,t,n,c,u,f,T,b,S),s&&(s.faceIndex=Math.floor(m/3),e.push(s))}}else if(l!==void 0)if(Array.isArray(r))for(let g=0,_=p.length;g<_;g++){const m=p[g],h=r[m.materialIndex],T=Math.max(m.start,d.start),b=Math.min(l.count,Math.min(m.start+m.count,d.start+d.count));for(let S=T,O=b;S<O;S+=3){const C=S,R=S+1,U=S+2;s=Ps(this,h,t,n,c,u,f,C,R,U),s&&(s.faceIndex=Math.floor(S/3),s.face.materialIndex=m.materialIndex,e.push(s))}}else{const g=Math.max(0,d.start),_=Math.min(l.count,d.start+d.count);for(let m=g,h=_;m<h;m+=3){const T=m,b=m+1,S=m+2;s=Ps(this,r,t,n,c,u,f,T,b,S),s&&(s.faceIndex=Math.floor(m/3),e.push(s))}}}}function dh(i,t,e,n,s,a,r,o){let l;if(t.side===Ee?l=n.intersectTriangle(r,a,s,!0,o):l=n.intersectTriangle(s,a,r,t.side===zn,o),l===null)return null;Rs.copy(o),Rs.applyMatrix4(i.matrixWorld);const c=e.ray.origin.distanceTo(Rs);return c<e.near||c>e.far?null:{distance:c,point:Rs.clone(),object:i}}function Ps(i,t,e,n,s,a,r,o,l,c){i.getVertexPosition(o,Ts),i.getVertexPosition(l,As),i.getVertexPosition(c,ws);const u=dh(i,t,e,n,Ts,As,ws,To);if(u){const f=new w;We.getBarycoord(To,Ts,As,ws,f),s&&(u.uv=We.getInterpolatedAttribute(s,o,l,c,f,new Mt)),a&&(u.uv1=We.getInterpolatedAttribute(a,o,l,c,f,new Mt)),r&&(u.normal=We.getInterpolatedAttribute(r,o,l,c,f,new w),u.normal.dot(n.direction)>0&&u.normal.multiplyScalar(-1));const p={a:o,b:l,c,normal:new w,materialIndex:0};We.getNormal(Ts,As,ws,p.normal),u.face=p,u.barycoord=f}return u}class hs extends ce{constructor(t=1,e=1,n=1,s=1,a=1,r=1){super(),this.type="BoxGeometry",this.parameters={width:t,height:e,depth:n,widthSegments:s,heightSegments:a,depthSegments:r};const o=this;s=Math.floor(s),a=Math.floor(a),r=Math.floor(r);const l=[],c=[],u=[],f=[];let p=0,d=0;g("z","y","x",-1,-1,n,e,t,r,a,0),g("z","y","x",1,-1,n,e,-t,r,a,1),g("x","z","y",1,1,t,n,e,s,r,2),g("x","z","y",1,-1,t,n,-e,s,r,3),g("x","y","z",1,-1,t,e,n,s,a,4),g("x","y","z",-1,-1,t,e,-n,s,a,5),this.setIndex(l),this.setAttribute("position",new ve(c,3)),this.setAttribute("normal",new ve(u,3)),this.setAttribute("uv",new ve(f,2));function g(_,m,h,T,b,S,O,C,R,U,y){const x=S/R,A=O/U,F=S/2,N=O/2,k=C/2,X=R+1,V=U+1;let Z=0,H=0;const tt=new w;for(let lt=0;lt<V;lt++){const xt=lt*A-N;for(let Dt=0;Dt<X;Dt++){const Zt=Dt*x-F;tt[_]=Zt*T,tt[m]=xt*b,tt[h]=k,c.push(tt.x,tt.y,tt.z),tt[_]=0,tt[m]=0,tt[h]=C>0?1:-1,u.push(tt.x,tt.y,tt.z),f.push(Dt/R),f.push(1-lt/U),Z+=1}}for(let lt=0;lt<U;lt++)for(let xt=0;xt<R;xt++){const Dt=p+xt+X*lt,Zt=p+xt+X*(lt+1),Y=p+(xt+1)+X*(lt+1),et=p+(xt+1)+X*lt;l.push(Dt,Zt,et),l.push(Zt,Y,et),H+=6}o.addGroup(d,H,y),d+=H,p+=Z}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new hs(t.width,t.height,t.depth,t.widthSegments,t.heightSegments,t.depthSegments)}}function Gi(i){const t={};for(const e in i){t[e]={};for(const n in i[e]){const s=i[e][n];s&&(s.isColor||s.isMatrix3||s.isMatrix4||s.isVector2||s.isVector3||s.isVector4||s.isTexture||s.isQuaternion)?s.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),t[e][n]=null):t[e][n]=s.clone():Array.isArray(s)?t[e][n]=s.slice():t[e][n]=s}}return t}function Te(i){const t={};for(let e=0;e<i.length;e++){const n=Gi(i[e]);for(const s in n)t[s]=n[s]}return t}function fh(i){const t=[];for(let e=0;e<i.length;e++)t.push(i[e].clone());return t}function kl(i){const t=i.getRenderTarget();return t===null?i.outputColorSpace:t.isXRRenderTarget===!0?t.texture.colorSpace:Gt.workingColorSpace}const ph={clone:Gi,merge:Te};var mh=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,gh=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class sn extends kn{static get type(){return"ShaderMaterial"}constructor(t){super(),this.isShaderMaterial=!0,this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=mh,this.fragmentShader=gh,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,t!==void 0&&this.setValues(t)}copy(t){return super.copy(t),this.fragmentShader=t.fragmentShader,this.vertexShader=t.vertexShader,this.uniforms=Gi(t.uniforms),this.uniformsGroups=fh(t.uniformsGroups),this.defines=Object.assign({},t.defines),this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.fog=t.fog,this.lights=t.lights,this.clipping=t.clipping,this.extensions=Object.assign({},t.extensions),this.glslVersion=t.glslVersion,this}toJSON(t){const e=super.toJSON(t);e.glslVersion=this.glslVersion,e.uniforms={};for(const s in this.uniforms){const r=this.uniforms[s].value;r&&r.isTexture?e.uniforms[s]={type:"t",value:r.toJSON(t).uuid}:r&&r.isColor?e.uniforms[s]={type:"c",value:r.getHex()}:r&&r.isVector2?e.uniforms[s]={type:"v2",value:r.toArray()}:r&&r.isVector3?e.uniforms[s]={type:"v3",value:r.toArray()}:r&&r.isVector4?e.uniforms[s]={type:"v4",value:r.toArray()}:r&&r.isMatrix3?e.uniforms[s]={type:"m3",value:r.toArray()}:r&&r.isMatrix4?e.uniforms[s]={type:"m4",value:r.toArray()}:e.uniforms[s]={value:r}}Object.keys(this.defines).length>0&&(e.defines=this.defines),e.vertexShader=this.vertexShader,e.fragmentShader=this.fragmentShader,e.lights=this.lights,e.clipping=this.clipping;const n={};for(const s in this.extensions)this.extensions[s]===!0&&(n[s]=!0);return Object.keys(n).length>0&&(e.extensions=n),e}}class Gl extends _e{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new Jt,this.projectionMatrix=new Jt,this.projectionMatrixInverse=new Jt,this.coordinateSystem=Sn}copy(t,e){return super.copy(t,e),this.matrixWorldInverse.copy(t.matrixWorldInverse),this.projectionMatrix.copy(t.projectionMatrix),this.projectionMatrixInverse.copy(t.projectionMatrixInverse),this.coordinateSystem=t.coordinateSystem,this}getWorldDirection(t){return super.getWorldDirection(t).negate()}updateMatrixWorld(t){super.updateMatrixWorld(t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(t,e){super.updateWorldMatrix(t,e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}const Ln=new w,Ao=new Mt,wo=new Mt;class Fe extends Gl{constructor(t=50,e=1,n=.1,s=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=t,this.zoom=1,this.near=n,this.far=s,this.focus=10,this.aspect=e,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.fov=t.fov,this.zoom=t.zoom,this.near=t.near,this.far=t.far,this.focus=t.focus,this.aspect=t.aspect,this.view=t.view===null?null:Object.assign({},t.view),this.filmGauge=t.filmGauge,this.filmOffset=t.filmOffset,this}setFocalLength(t){const e=.5*this.getFilmHeight()/t;this.fov=Pr*2*Math.atan(e),this.updateProjectionMatrix()}getFocalLength(){const t=Math.tan(Ks*.5*this.fov);return .5*this.getFilmHeight()/t}getEffectiveFOV(){return Pr*2*Math.atan(Math.tan(Ks*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(t,e,n){Ln.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),e.set(Ln.x,Ln.y).multiplyScalar(-t/Ln.z),Ln.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),n.set(Ln.x,Ln.y).multiplyScalar(-t/Ln.z)}getViewSize(t,e){return this.getViewBounds(t,Ao,wo),e.subVectors(wo,Ao)}setViewOffset(t,e,n,s,a,r){this.aspect=t/e,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=n,this.view.offsetY=s,this.view.width=a,this.view.height=r,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const t=this.near;let e=t*Math.tan(Ks*.5*this.fov)/this.zoom,n=2*e,s=this.aspect*n,a=-.5*s;const r=this.view;if(this.view!==null&&this.view.enabled){const l=r.fullWidth,c=r.fullHeight;a+=r.offsetX*s/l,e-=r.offsetY*n/c,s*=r.width/l,n*=r.height/c}const o=this.filmOffset;o!==0&&(a+=t*o/this.getFilmWidth()),this.projectionMatrix.makePerspective(a,a+s,e,e-n,t,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){const e=super.toJSON(t);return e.object.fov=this.fov,e.object.zoom=this.zoom,e.object.near=this.near,e.object.far=this.far,e.object.focus=this.focus,e.object.aspect=this.aspect,this.view!==null&&(e.object.view=Object.assign({},this.view)),e.object.filmGauge=this.filmGauge,e.object.filmOffset=this.filmOffset,e}}const xi=-90,Mi=1;class _h extends _e{constructor(t,e,n){super(),this.type="CubeCamera",this.renderTarget=n,this.coordinateSystem=null,this.activeMipmapLevel=0;const s=new Fe(xi,Mi,t,e);s.layers=this.layers,this.add(s);const a=new Fe(xi,Mi,t,e);a.layers=this.layers,this.add(a);const r=new Fe(xi,Mi,t,e);r.layers=this.layers,this.add(r);const o=new Fe(xi,Mi,t,e);o.layers=this.layers,this.add(o);const l=new Fe(xi,Mi,t,e);l.layers=this.layers,this.add(l);const c=new Fe(xi,Mi,t,e);c.layers=this.layers,this.add(c)}updateCoordinateSystem(){const t=this.coordinateSystem,e=this.children.concat(),[n,s,a,r,o,l]=e;for(const c of e)this.remove(c);if(t===Sn)n.up.set(0,1,0),n.lookAt(1,0,0),s.up.set(0,1,0),s.lookAt(-1,0,0),a.up.set(0,0,-1),a.lookAt(0,1,0),r.up.set(0,0,1),r.lookAt(0,-1,0),o.up.set(0,1,0),o.lookAt(0,0,1),l.up.set(0,1,0),l.lookAt(0,0,-1);else if(t===Js)n.up.set(0,-1,0),n.lookAt(-1,0,0),s.up.set(0,-1,0),s.lookAt(1,0,0),a.up.set(0,0,1),a.lookAt(0,1,0),r.up.set(0,0,-1),r.lookAt(0,-1,0),o.up.set(0,-1,0),o.lookAt(0,0,1),l.up.set(0,-1,0),l.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+t);for(const c of e)this.add(c),c.updateMatrixWorld()}update(t,e){this.parent===null&&this.updateMatrixWorld();const{renderTarget:n,activeMipmapLevel:s}=this;this.coordinateSystem!==t.coordinateSystem&&(this.coordinateSystem=t.coordinateSystem,this.updateCoordinateSystem());const[a,r,o,l,c,u]=this.children,f=t.getRenderTarget(),p=t.getActiveCubeFace(),d=t.getActiveMipmapLevel(),g=t.xr.enabled;t.xr.enabled=!1;const _=n.texture.generateMipmaps;n.texture.generateMipmaps=!1,t.setRenderTarget(n,0,s),t.render(e,a),t.setRenderTarget(n,1,s),t.render(e,r),t.setRenderTarget(n,2,s),t.render(e,o),t.setRenderTarget(n,3,s),t.render(e,l),t.setRenderTarget(n,4,s),t.render(e,c),n.texture.generateMipmaps=_,t.setRenderTarget(n,5,s),t.render(e,u),t.setRenderTarget(f,p,d),t.xr.enabled=g,n.texture.needsPMREMUpdate=!0}}class Hl extends Ce{constructor(t,e,n,s,a,r,o,l,c,u){t=t!==void 0?t:[],e=e!==void 0?e:Oi,super(t,e,n,s,a,r,o,l,c,u),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(t){this.image=t}}class vh extends si{constructor(t=1,e={}){super(t,t,e),this.isWebGLCubeRenderTarget=!0;const n={width:t,height:t,depth:1},s=[n,n,n,n,n,n];this.texture=new Hl(s,e.mapping,e.wrapS,e.wrapT,e.magFilter,e.minFilter,e.format,e.type,e.anisotropy,e.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=e.generateMipmaps!==void 0?e.generateMipmaps:!1,this.texture.minFilter=e.minFilter!==void 0?e.minFilter:hn}fromEquirectangularTexture(t,e){this.texture.type=e.type,this.texture.colorSpace=e.colorSpace,this.texture.generateMipmaps=e.generateMipmaps,this.texture.minFilter=e.minFilter,this.texture.magFilter=e.magFilter;const n={uniforms:{tEquirect:{value:null}},vertexShader:`

				varying vec3 vWorldDirection;

				vec3 transformDirection( in vec3 dir, in mat4 matrix ) {

					return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );

				}

				void main() {

					vWorldDirection = transformDirection( position, modelMatrix );

					#include <begin_vertex>
					#include <project_vertex>

				}
			`,fragmentShader:`

				uniform sampler2D tEquirect;

				varying vec3 vWorldDirection;

				#include <common>

				void main() {

					vec3 direction = normalize( vWorldDirection );

					vec2 sampleUV = equirectUv( direction );

					gl_FragColor = texture2D( tEquirect, sampleUV );

				}
			`},s=new hs(5,5,5),a=new sn({name:"CubemapFromEquirect",uniforms:Gi(n.uniforms),vertexShader:n.vertexShader,fragmentShader:n.fragmentShader,side:Ee,blending:Fn});a.uniforms.tEquirect.value=e;const r=new ae(s,a),o=e.minFilter;return e.minFilter===ei&&(e.minFilter=hn),new _h(1,10,this).update(t,r),e.minFilter=o,r.geometry.dispose(),r.material.dispose(),this}clear(t,e,n,s){const a=t.getRenderTarget();for(let r=0;r<6;r++)t.setRenderTarget(this,r),t.clear(e,n,s);t.setRenderTarget(a)}}const Ca=new w,xh=new w,Mh=new Pt;class Un{constructor(t=new w(1,0,0),e=0){this.isPlane=!0,this.normal=t,this.constant=e}set(t,e){return this.normal.copy(t),this.constant=e,this}setComponents(t,e,n,s){return this.normal.set(t,e,n),this.constant=s,this}setFromNormalAndCoplanarPoint(t,e){return this.normal.copy(t),this.constant=-e.dot(this.normal),this}setFromCoplanarPoints(t,e,n){const s=Ca.subVectors(n,e).cross(xh.subVectors(t,e)).normalize();return this.setFromNormalAndCoplanarPoint(s,t),this}copy(t){return this.normal.copy(t.normal),this.constant=t.constant,this}normalize(){const t=1/this.normal.length();return this.normal.multiplyScalar(t),this.constant*=t,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(t){return this.normal.dot(t)+this.constant}distanceToSphere(t){return this.distanceToPoint(t.center)-t.radius}projectPoint(t,e){return e.copy(t).addScaledVector(this.normal,-this.distanceToPoint(t))}intersectLine(t,e){const n=t.delta(Ca),s=this.normal.dot(n);if(s===0)return this.distanceToPoint(t.start)===0?e.copy(t.start):null;const a=-(t.start.dot(this.normal)+this.constant)/s;return a<0||a>1?null:e.copy(t.start).addScaledVector(n,a)}intersectsLine(t){const e=this.distanceToPoint(t.start),n=this.distanceToPoint(t.end);return e<0&&n>0||n<0&&e>0}intersectsBox(t){return t.intersectsPlane(this)}intersectsSphere(t){return t.intersectsPlane(this)}coplanarPoint(t){return t.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(t,e){const n=e||Mh.getNormalMatrix(t),s=this.coplanarPoint(Ca).applyMatrix4(t),a=this.normal.applyMatrix3(n).normalize();return this.constant=-s.dot(a),this}translate(t){return this.constant-=t.dot(this.normal),this}equals(t){return t.normal.equals(this.normal)&&t.constant===this.constant}clone(){return new this.constructor().copy(this)}}const Xn=new ls,Ds=new w;class Hr{constructor(t=new Un,e=new Un,n=new Un,s=new Un,a=new Un,r=new Un){this.planes=[t,e,n,s,a,r]}set(t,e,n,s,a,r){const o=this.planes;return o[0].copy(t),o[1].copy(e),o[2].copy(n),o[3].copy(s),o[4].copy(a),o[5].copy(r),this}copy(t){const e=this.planes;for(let n=0;n<6;n++)e[n].copy(t.planes[n]);return this}setFromProjectionMatrix(t,e=Sn){const n=this.planes,s=t.elements,a=s[0],r=s[1],o=s[2],l=s[3],c=s[4],u=s[5],f=s[6],p=s[7],d=s[8],g=s[9],_=s[10],m=s[11],h=s[12],T=s[13],b=s[14],S=s[15];if(n[0].setComponents(l-a,p-c,m-d,S-h).normalize(),n[1].setComponents(l+a,p+c,m+d,S+h).normalize(),n[2].setComponents(l+r,p+u,m+g,S+T).normalize(),n[3].setComponents(l-r,p-u,m-g,S-T).normalize(),n[4].setComponents(l-o,p-f,m-_,S-b).normalize(),e===Sn)n[5].setComponents(l+o,p+f,m+_,S+b).normalize();else if(e===Js)n[5].setComponents(o,f,_,b).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+e);return this}intersectsObject(t){if(t.boundingSphere!==void 0)t.boundingSphere===null&&t.computeBoundingSphere(),Xn.copy(t.boundingSphere).applyMatrix4(t.matrixWorld);else{const e=t.geometry;e.boundingSphere===null&&e.computeBoundingSphere(),Xn.copy(e.boundingSphere).applyMatrix4(t.matrixWorld)}return this.intersectsSphere(Xn)}intersectsSprite(t){return Xn.center.set(0,0,0),Xn.radius=.7071067811865476,Xn.applyMatrix4(t.matrixWorld),this.intersectsSphere(Xn)}intersectsSphere(t){const e=this.planes,n=t.center,s=-t.radius;for(let a=0;a<6;a++)if(e[a].distanceToPoint(n)<s)return!1;return!0}intersectsBox(t){const e=this.planes;for(let n=0;n<6;n++){const s=e[n];if(Ds.x=s.normal.x>0?t.max.x:t.min.x,Ds.y=s.normal.y>0?t.max.y:t.min.y,Ds.z=s.normal.z>0?t.max.z:t.min.z,s.distanceToPoint(Ds)<0)return!1}return!0}containsPoint(t){const e=this.planes;for(let n=0;n<6;n++)if(e[n].distanceToPoint(t)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}function Vl(){let i=null,t=!1,e=null,n=null;function s(a,r){e(a,r),n=i.requestAnimationFrame(s)}return{start:function(){t!==!0&&e!==null&&(n=i.requestAnimationFrame(s),t=!0)},stop:function(){i.cancelAnimationFrame(n),t=!1},setAnimationLoop:function(a){e=a},setContext:function(a){i=a}}}function yh(i){const t=new WeakMap;function e(o,l){const c=o.array,u=o.usage,f=c.byteLength,p=i.createBuffer();i.bindBuffer(l,p),i.bufferData(l,c,u),o.onUploadCallback();let d;if(c instanceof Float32Array)d=i.FLOAT;else if(c instanceof Uint16Array)o.isFloat16BufferAttribute?d=i.HALF_FLOAT:d=i.UNSIGNED_SHORT;else if(c instanceof Int16Array)d=i.SHORT;else if(c instanceof Uint32Array)d=i.UNSIGNED_INT;else if(c instanceof Int32Array)d=i.INT;else if(c instanceof Int8Array)d=i.BYTE;else if(c instanceof Uint8Array)d=i.UNSIGNED_BYTE;else if(c instanceof Uint8ClampedArray)d=i.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+c);return{buffer:p,type:d,bytesPerElement:c.BYTES_PER_ELEMENT,version:o.version,size:f}}function n(o,l,c){const u=l.array,f=l.updateRanges;if(i.bindBuffer(c,o),f.length===0)i.bufferSubData(c,0,u);else{f.sort((d,g)=>d.start-g.start);let p=0;for(let d=1;d<f.length;d++){const g=f[p],_=f[d];_.start<=g.start+g.count+1?g.count=Math.max(g.count,_.start+_.count-g.start):(++p,f[p]=_)}f.length=p+1;for(let d=0,g=f.length;d<g;d++){const _=f[d];i.bufferSubData(c,_.start*u.BYTES_PER_ELEMENT,u,_.start,_.count)}l.clearUpdateRanges()}l.onUploadCallback()}function s(o){return o.isInterleavedBufferAttribute&&(o=o.data),t.get(o)}function a(o){o.isInterleavedBufferAttribute&&(o=o.data);const l=t.get(o);l&&(i.deleteBuffer(l.buffer),t.delete(o))}function r(o,l){if(o.isInterleavedBufferAttribute&&(o=o.data),o.isGLBufferAttribute){const u=t.get(o);(!u||u.version<o.version)&&t.set(o,{buffer:o.buffer,type:o.type,bytesPerElement:o.elementSize,version:o.version});return}const c=t.get(o);if(c===void 0)t.set(o,e(o,l));else if(c.version<o.version){if(c.size!==o.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");n(c.buffer,o,l),c.version=o.version}}return{get:s,remove:a,update:r}}class us extends ce{constructor(t=1,e=1,n=1,s=1){super(),this.type="PlaneGeometry",this.parameters={width:t,height:e,widthSegments:n,heightSegments:s};const a=t/2,r=e/2,o=Math.floor(n),l=Math.floor(s),c=o+1,u=l+1,f=t/o,p=e/l,d=[],g=[],_=[],m=[];for(let h=0;h<u;h++){const T=h*p-r;for(let b=0;b<c;b++){const S=b*f-a;g.push(S,-T,0),_.push(0,0,1),m.push(b/o),m.push(1-h/l)}}for(let h=0;h<l;h++)for(let T=0;T<o;T++){const b=T+c*h,S=T+c*(h+1),O=T+1+c*(h+1),C=T+1+c*h;d.push(b,S,C),d.push(S,O,C)}this.setIndex(d),this.setAttribute("position",new ve(g,3)),this.setAttribute("normal",new ve(_,3)),this.setAttribute("uv",new ve(m,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new us(t.width,t.height,t.widthSegments,t.heightSegments)}}var Sh=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,Eh=`#ifdef USE_ALPHAHASH
	const float ALPHA_HASH_SCALE = 0.05;
	float hash2D( vec2 value ) {
		return fract( 1.0e4 * sin( 17.0 * value.x + 0.1 * value.y ) * ( 0.1 + abs( sin( 13.0 * value.y + value.x ) ) ) );
	}
	float hash3D( vec3 value ) {
		return hash2D( vec2( hash2D( value.xy ), value.z ) );
	}
	float getAlphaHashThreshold( vec3 position ) {
		float maxDeriv = max(
			length( dFdx( position.xyz ) ),
			length( dFdy( position.xyz ) )
		);
		float pixScale = 1.0 / ( ALPHA_HASH_SCALE * maxDeriv );
		vec2 pixScales = vec2(
			exp2( floor( log2( pixScale ) ) ),
			exp2( ceil( log2( pixScale ) ) )
		);
		vec2 alpha = vec2(
			hash3D( floor( pixScales.x * position.xyz ) ),
			hash3D( floor( pixScales.y * position.xyz ) )
		);
		float lerpFactor = fract( log2( pixScale ) );
		float x = ( 1.0 - lerpFactor ) * alpha.x + lerpFactor * alpha.y;
		float a = min( lerpFactor, 1.0 - lerpFactor );
		vec3 cases = vec3(
			x * x / ( 2.0 * a * ( 1.0 - a ) ),
			( x - 0.5 * a ) / ( 1.0 - a ),
			1.0 - ( ( 1.0 - x ) * ( 1.0 - x ) / ( 2.0 * a * ( 1.0 - a ) ) )
		);
		float threshold = ( x < ( 1.0 - a ) )
			? ( ( x < a ) ? cases.x : cases.y )
			: cases.z;
		return clamp( threshold , 1.0e-6, 1.0 );
	}
#endif`,bh=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,Th=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,Ah=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,wh=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,Ch=`#ifdef USE_AOMAP
	float ambientOcclusion = ( texture2D( aoMap, vAoMapUv ).r - 1.0 ) * aoMapIntensity + 1.0;
	reflectedLight.indirectDiffuse *= ambientOcclusion;
	#if defined( USE_CLEARCOAT ) 
		clearcoatSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_SHEEN ) 
		sheenSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD )
		float dotNV = saturate( dot( geometryNormal, geometryViewDir ) );
		reflectedLight.indirectSpecular *= computeSpecularOcclusion( dotNV, ambientOcclusion, material.roughness );
	#endif
#endif`,Rh=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,Ph=`#ifdef USE_BATCHING
	#if ! defined( GL_ANGLE_multi_draw )
	#define gl_DrawID _gl_DrawID
	uniform int _gl_DrawID;
	#endif
	uniform highp sampler2D batchingTexture;
	uniform highp usampler2D batchingIdTexture;
	mat4 getBatchingMatrix( const in float i ) {
		int size = textureSize( batchingTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( batchingTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( batchingTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( batchingTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( batchingTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
	float getIndirectIndex( const in int i ) {
		int size = textureSize( batchingIdTexture, 0 ).x;
		int x = i % size;
		int y = i / size;
		return float( texelFetch( batchingIdTexture, ivec2( x, y ), 0 ).r );
	}
#endif
#ifdef USE_BATCHING_COLOR
	uniform sampler2D batchingColorTexture;
	vec3 getBatchingColor( const in float i ) {
		int size = textureSize( batchingColorTexture, 0 ).x;
		int j = int( i );
		int x = j % size;
		int y = j / size;
		return texelFetch( batchingColorTexture, ivec2( x, y ), 0 ).rgb;
	}
#endif`,Dh=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,Lh=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,Ih=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,Uh=`float G_BlinnPhong_Implicit( ) {
	return 0.25;
}
float D_BlinnPhong( const in float shininess, const in float dotNH ) {
	return RECIPROCAL_PI * ( shininess * 0.5 + 1.0 ) * pow( dotNH, shininess );
}
vec3 BRDF_BlinnPhong( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 specularColor, const in float shininess ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( specularColor, 1.0, dotVH );
	float G = G_BlinnPhong_Implicit( );
	float D = D_BlinnPhong( shininess, dotNH );
	return F * ( G * D );
} // validated`,Nh=`#ifdef USE_IRIDESCENCE
	const mat3 XYZ_TO_REC709 = mat3(
		 3.2404542, -0.9692660,  0.0556434,
		-1.5371385,  1.8760108, -0.2040259,
		-0.4985314,  0.0415560,  1.0572252
	);
	vec3 Fresnel0ToIor( vec3 fresnel0 ) {
		vec3 sqrtF0 = sqrt( fresnel0 );
		return ( vec3( 1.0 ) + sqrtF0 ) / ( vec3( 1.0 ) - sqrtF0 );
	}
	vec3 IorToFresnel0( vec3 transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - vec3( incidentIor ) ) / ( transmittedIor + vec3( incidentIor ) ) );
	}
	float IorToFresnel0( float transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - incidentIor ) / ( transmittedIor + incidentIor ));
	}
	vec3 evalSensitivity( float OPD, vec3 shift ) {
		float phase = 2.0 * PI * OPD * 1.0e-9;
		vec3 val = vec3( 5.4856e-13, 4.4201e-13, 5.2481e-13 );
		vec3 pos = vec3( 1.6810e+06, 1.7953e+06, 2.2084e+06 );
		vec3 var = vec3( 4.3278e+09, 9.3046e+09, 6.6121e+09 );
		vec3 xyz = val * sqrt( 2.0 * PI * var ) * cos( pos * phase + shift ) * exp( - pow2( phase ) * var );
		xyz.x += 9.7470e-14 * sqrt( 2.0 * PI * 4.5282e+09 ) * cos( 2.2399e+06 * phase + shift[ 0 ] ) * exp( - 4.5282e+09 * pow2( phase ) );
		xyz /= 1.0685e-7;
		vec3 rgb = XYZ_TO_REC709 * xyz;
		return rgb;
	}
	vec3 evalIridescence( float outsideIOR, float eta2, float cosTheta1, float thinFilmThickness, vec3 baseF0 ) {
		vec3 I;
		float iridescenceIOR = mix( outsideIOR, eta2, smoothstep( 0.0, 0.03, thinFilmThickness ) );
		float sinTheta2Sq = pow2( outsideIOR / iridescenceIOR ) * ( 1.0 - pow2( cosTheta1 ) );
		float cosTheta2Sq = 1.0 - sinTheta2Sq;
		if ( cosTheta2Sq < 0.0 ) {
			return vec3( 1.0 );
		}
		float cosTheta2 = sqrt( cosTheta2Sq );
		float R0 = IorToFresnel0( iridescenceIOR, outsideIOR );
		float R12 = F_Schlick( R0, 1.0, cosTheta1 );
		float T121 = 1.0 - R12;
		float phi12 = 0.0;
		if ( iridescenceIOR < outsideIOR ) phi12 = PI;
		float phi21 = PI - phi12;
		vec3 baseIOR = Fresnel0ToIor( clamp( baseF0, 0.0, 0.9999 ) );		vec3 R1 = IorToFresnel0( baseIOR, iridescenceIOR );
		vec3 R23 = F_Schlick( R1, 1.0, cosTheta2 );
		vec3 phi23 = vec3( 0.0 );
		if ( baseIOR[ 0 ] < iridescenceIOR ) phi23[ 0 ] = PI;
		if ( baseIOR[ 1 ] < iridescenceIOR ) phi23[ 1 ] = PI;
		if ( baseIOR[ 2 ] < iridescenceIOR ) phi23[ 2 ] = PI;
		float OPD = 2.0 * iridescenceIOR * thinFilmThickness * cosTheta2;
		vec3 phi = vec3( phi21 ) + phi23;
		vec3 R123 = clamp( R12 * R23, 1e-5, 0.9999 );
		vec3 r123 = sqrt( R123 );
		vec3 Rs = pow2( T121 ) * R23 / ( vec3( 1.0 ) - R123 );
		vec3 C0 = R12 + Rs;
		I = C0;
		vec3 Cm = Rs - T121;
		for ( int m = 1; m <= 2; ++ m ) {
			Cm *= r123;
			vec3 Sm = 2.0 * evalSensitivity( float( m ) * OPD, float( m ) * phi );
			I += Cm * Sm;
		}
		return max( I, vec3( 0.0 ) );
	}
#endif`,Fh=`#ifdef USE_BUMPMAP
	uniform sampler2D bumpMap;
	uniform float bumpScale;
	vec2 dHdxy_fwd() {
		vec2 dSTdx = dFdx( vBumpMapUv );
		vec2 dSTdy = dFdy( vBumpMapUv );
		float Hll = bumpScale * texture2D( bumpMap, vBumpMapUv ).x;
		float dBx = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdx ).x - Hll;
		float dBy = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdy ).x - Hll;
		return vec2( dBx, dBy );
	}
	vec3 perturbNormalArb( vec3 surf_pos, vec3 surf_norm, vec2 dHdxy, float faceDirection ) {
		vec3 vSigmaX = normalize( dFdx( surf_pos.xyz ) );
		vec3 vSigmaY = normalize( dFdy( surf_pos.xyz ) );
		vec3 vN = surf_norm;
		vec3 R1 = cross( vSigmaY, vN );
		vec3 R2 = cross( vN, vSigmaX );
		float fDet = dot( vSigmaX, R1 ) * faceDirection;
		vec3 vGrad = sign( fDet ) * ( dHdxy.x * R1 + dHdxy.y * R2 );
		return normalize( abs( fDet ) * surf_norm - vGrad );
	}
#endif`,Oh=`#if NUM_CLIPPING_PLANES > 0
	vec4 plane;
	#ifdef ALPHA_TO_COVERAGE
		float distanceToPlane, distanceGradient;
		float clipOpacity = 1.0;
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
			distanceGradient = fwidth( distanceToPlane ) / 2.0;
			clipOpacity *= smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			if ( clipOpacity == 0.0 ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			float unionClipOpacity = 1.0;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
				distanceGradient = fwidth( distanceToPlane ) / 2.0;
				unionClipOpacity *= 1.0 - smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			}
			#pragma unroll_loop_end
			clipOpacity *= 1.0 - unionClipOpacity;
		#endif
		diffuseColor.a *= clipOpacity;
		if ( diffuseColor.a == 0.0 ) discard;
	#else
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			if ( dot( vClipPosition, plane.xyz ) > plane.w ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			bool clipped = true;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				clipped = ( dot( vClipPosition, plane.xyz ) > plane.w ) && clipped;
			}
			#pragma unroll_loop_end
			if ( clipped ) discard;
		#endif
	#endif
#endif`,Bh=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,zh=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,kh=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,Gh=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,Hh=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,Vh=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec3 vColor;
#endif`,Wh=`#if defined( USE_COLOR_ALPHA )
	vColor = vec4( 1.0 );
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	vColor = vec3( 1.0 );
#endif
#ifdef USE_COLOR
	vColor *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.xyz *= instanceColor.xyz;
#endif
#ifdef USE_BATCHING_COLOR
	vec3 batchingColor = getBatchingColor( getIndirectIndex( gl_DrawID ) );
	vColor.xyz *= batchingColor.xyz;
#endif`,Xh=`#define PI 3.141592653589793
#define PI2 6.283185307179586
#define PI_HALF 1.5707963267948966
#define RECIPROCAL_PI 0.3183098861837907
#define RECIPROCAL_PI2 0.15915494309189535
#define EPSILON 1e-6
#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
#define whiteComplement( a ) ( 1.0 - saturate( a ) )
float pow2( const in float x ) { return x*x; }
vec3 pow2( const in vec3 x ) { return x*x; }
float pow3( const in float x ) { return x*x*x; }
float pow4( const in float x ) { float x2 = x*x; return x2*x2; }
float max3( const in vec3 v ) { return max( max( v.x, v.y ), v.z ); }
float average( const in vec3 v ) { return dot( v, vec3( 0.3333333 ) ); }
highp float rand( const in vec2 uv ) {
	const highp float a = 12.9898, b = 78.233, c = 43758.5453;
	highp float dt = dot( uv.xy, vec2( a,b ) ), sn = mod( dt, PI );
	return fract( sin( sn ) * c );
}
#ifdef HIGH_PRECISION
	float precisionSafeLength( vec3 v ) { return length( v ); }
#else
	float precisionSafeLength( vec3 v ) {
		float maxComponent = max3( abs( v ) );
		return length( v / maxComponent ) * maxComponent;
	}
#endif
struct IncidentLight {
	vec3 color;
	vec3 direction;
	bool visible;
};
struct ReflectedLight {
	vec3 directDiffuse;
	vec3 directSpecular;
	vec3 indirectDiffuse;
	vec3 indirectSpecular;
};
#ifdef USE_ALPHAHASH
	varying vec3 vPosition;
#endif
vec3 transformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );
}
vec3 inverseTransformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( vec4( dir, 0.0 ) * matrix ).xyz );
}
mat3 transposeMat3( const in mat3 m ) {
	mat3 tmp;
	tmp[ 0 ] = vec3( m[ 0 ].x, m[ 1 ].x, m[ 2 ].x );
	tmp[ 1 ] = vec3( m[ 0 ].y, m[ 1 ].y, m[ 2 ].y );
	tmp[ 2 ] = vec3( m[ 0 ].z, m[ 1 ].z, m[ 2 ].z );
	return tmp;
}
bool isPerspectiveMatrix( mat4 m ) {
	return m[ 2 ][ 3 ] == - 1.0;
}
vec2 equirectUv( in vec3 dir ) {
	float u = atan( dir.z, dir.x ) * RECIPROCAL_PI2 + 0.5;
	float v = asin( clamp( dir.y, - 1.0, 1.0 ) ) * RECIPROCAL_PI + 0.5;
	return vec2( u, v );
}
vec3 BRDF_Lambert( const in vec3 diffuseColor ) {
	return RECIPROCAL_PI * diffuseColor;
}
vec3 F_Schlick( const in vec3 f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
}
float F_Schlick( const in float f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
} // validated`,qh=`#ifdef ENVMAP_TYPE_CUBE_UV
	#define cubeUV_minMipLevel 4.0
	#define cubeUV_minTileSize 16.0
	float getFace( vec3 direction ) {
		vec3 absDirection = abs( direction );
		float face = - 1.0;
		if ( absDirection.x > absDirection.z ) {
			if ( absDirection.x > absDirection.y )
				face = direction.x > 0.0 ? 0.0 : 3.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		} else {
			if ( absDirection.z > absDirection.y )
				face = direction.z > 0.0 ? 2.0 : 5.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		}
		return face;
	}
	vec2 getUV( vec3 direction, float face ) {
		vec2 uv;
		if ( face == 0.0 ) {
			uv = vec2( direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 1.0 ) {
			uv = vec2( - direction.x, - direction.z ) / abs( direction.y );
		} else if ( face == 2.0 ) {
			uv = vec2( - direction.x, direction.y ) / abs( direction.z );
		} else if ( face == 3.0 ) {
			uv = vec2( - direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 4.0 ) {
			uv = vec2( - direction.x, direction.z ) / abs( direction.y );
		} else {
			uv = vec2( direction.x, direction.y ) / abs( direction.z );
		}
		return 0.5 * ( uv + 1.0 );
	}
	vec3 bilinearCubeUV( sampler2D envMap, vec3 direction, float mipInt ) {
		float face = getFace( direction );
		float filterInt = max( cubeUV_minMipLevel - mipInt, 0.0 );
		mipInt = max( mipInt, cubeUV_minMipLevel );
		float faceSize = exp2( mipInt );
		highp vec2 uv = getUV( direction, face ) * ( faceSize - 2.0 ) + 1.0;
		if ( face > 2.0 ) {
			uv.y += faceSize;
			face -= 3.0;
		}
		uv.x += face * faceSize;
		uv.x += filterInt * 3.0 * cubeUV_minTileSize;
		uv.y += 4.0 * ( exp2( CUBEUV_MAX_MIP ) - faceSize );
		uv.x *= CUBEUV_TEXEL_WIDTH;
		uv.y *= CUBEUV_TEXEL_HEIGHT;
		#ifdef texture2DGradEXT
			return texture2DGradEXT( envMap, uv, vec2( 0.0 ), vec2( 0.0 ) ).rgb;
		#else
			return texture2D( envMap, uv ).rgb;
		#endif
	}
	#define cubeUV_r0 1.0
	#define cubeUV_m0 - 2.0
	#define cubeUV_r1 0.8
	#define cubeUV_m1 - 1.0
	#define cubeUV_r4 0.4
	#define cubeUV_m4 2.0
	#define cubeUV_r5 0.305
	#define cubeUV_m5 3.0
	#define cubeUV_r6 0.21
	#define cubeUV_m6 4.0
	float roughnessToMip( float roughness ) {
		float mip = 0.0;
		if ( roughness >= cubeUV_r1 ) {
			mip = ( cubeUV_r0 - roughness ) * ( cubeUV_m1 - cubeUV_m0 ) / ( cubeUV_r0 - cubeUV_r1 ) + cubeUV_m0;
		} else if ( roughness >= cubeUV_r4 ) {
			mip = ( cubeUV_r1 - roughness ) * ( cubeUV_m4 - cubeUV_m1 ) / ( cubeUV_r1 - cubeUV_r4 ) + cubeUV_m1;
		} else if ( roughness >= cubeUV_r5 ) {
			mip = ( cubeUV_r4 - roughness ) * ( cubeUV_m5 - cubeUV_m4 ) / ( cubeUV_r4 - cubeUV_r5 ) + cubeUV_m4;
		} else if ( roughness >= cubeUV_r6 ) {
			mip = ( cubeUV_r5 - roughness ) * ( cubeUV_m6 - cubeUV_m5 ) / ( cubeUV_r5 - cubeUV_r6 ) + cubeUV_m5;
		} else {
			mip = - 2.0 * log2( 1.16 * roughness );		}
		return mip;
	}
	vec4 textureCubeUV( sampler2D envMap, vec3 sampleDir, float roughness ) {
		float mip = clamp( roughnessToMip( roughness ), cubeUV_m0, CUBEUV_MAX_MIP );
		float mipF = fract( mip );
		float mipInt = floor( mip );
		vec3 color0 = bilinearCubeUV( envMap, sampleDir, mipInt );
		if ( mipF == 0.0 ) {
			return vec4( color0, 1.0 );
		} else {
			vec3 color1 = bilinearCubeUV( envMap, sampleDir, mipInt + 1.0 );
			return vec4( mix( color0, color1, mipF ), 1.0 );
		}
	}
#endif`,Yh=`vec3 transformedNormal = objectNormal;
#ifdef USE_TANGENT
	vec3 transformedTangent = objectTangent;
#endif
#ifdef USE_BATCHING
	mat3 bm = mat3( batchingMatrix );
	transformedNormal /= vec3( dot( bm[ 0 ], bm[ 0 ] ), dot( bm[ 1 ], bm[ 1 ] ), dot( bm[ 2 ], bm[ 2 ] ) );
	transformedNormal = bm * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = bm * transformedTangent;
	#endif
#endif
#ifdef USE_INSTANCING
	mat3 im = mat3( instanceMatrix );
	transformedNormal /= vec3( dot( im[ 0 ], im[ 0 ] ), dot( im[ 1 ], im[ 1 ] ), dot( im[ 2 ], im[ 2 ] ) );
	transformedNormal = im * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = im * transformedTangent;
	#endif
#endif
transformedNormal = normalMatrix * transformedNormal;
#ifdef FLIP_SIDED
	transformedNormal = - transformedNormal;
#endif
#ifdef USE_TANGENT
	transformedTangent = ( modelViewMatrix * vec4( transformedTangent, 0.0 ) ).xyz;
	#ifdef FLIP_SIDED
		transformedTangent = - transformedTangent;
	#endif
#endif`,$h=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,Kh=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,jh=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,Zh=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,Jh="gl_FragColor = linearToOutputTexel( gl_FragColor );",Qh=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,tu=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vec3 cameraToFrag;
		if ( isOrthographic ) {
			cameraToFrag = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToFrag = normalize( vWorldPosition - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vec3 reflectVec = reflect( cameraToFrag, worldNormal );
		#else
			vec3 reflectVec = refract( cameraToFrag, worldNormal, refractionRatio );
		#endif
	#else
		vec3 reflectVec = vReflect;
	#endif
	#ifdef ENVMAP_TYPE_CUBE
		vec4 envColor = textureCube( envMap, envMapRotation * vec3( flipEnvMap * reflectVec.x, reflectVec.yz ) );
	#else
		vec4 envColor = vec4( 0.0 );
	#endif
	#ifdef ENVMAP_BLENDING_MULTIPLY
		outgoingLight = mix( outgoingLight, outgoingLight * envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_MIX )
		outgoingLight = mix( outgoingLight, envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_ADD )
		outgoingLight += envColor.xyz * specularStrength * reflectivity;
	#endif
#endif`,eu=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,nu=`#ifdef USE_ENVMAP
	uniform float reflectivity;
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		varying vec3 vWorldPosition;
		uniform float refractionRatio;
	#else
		varying vec3 vReflect;
	#endif
#endif`,iu=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,su=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vWorldPosition = worldPosition.xyz;
	#else
		vec3 cameraToVertex;
		if ( isOrthographic ) {
			cameraToVertex = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToVertex = normalize( worldPosition.xyz - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vReflect = reflect( cameraToVertex, worldNormal );
		#else
			vReflect = refract( cameraToVertex, worldNormal, refractionRatio );
		#endif
	#endif
#endif`,au=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,ru=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,ou=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,lu=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,cu=`#ifdef USE_GRADIENTMAP
	uniform sampler2D gradientMap;
#endif
vec3 getGradientIrradiance( vec3 normal, vec3 lightDirection ) {
	float dotNL = dot( normal, lightDirection );
	vec2 coord = vec2( dotNL * 0.5 + 0.5, 0.0 );
	#ifdef USE_GRADIENTMAP
		return vec3( texture2D( gradientMap, coord ).r );
	#else
		vec2 fw = fwidth( coord ) * 0.5;
		return mix( vec3( 0.7 ), vec3( 1.0 ), smoothstep( 0.7 - fw.x, 0.7 + fw.x, coord.x ) );
	#endif
}`,hu=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,uu=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,du=`varying vec3 vViewPosition;
struct LambertMaterial {
	vec3 diffuseColor;
	float specularStrength;
};
void RE_Direct_Lambert( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Lambert( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Lambert
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,fu=`uniform bool receiveShadow;
uniform vec3 ambientLightColor;
#if defined( USE_LIGHT_PROBES )
	uniform vec3 lightProbe[ 9 ];
#endif
vec3 shGetIrradianceAt( in vec3 normal, in vec3 shCoefficients[ 9 ] ) {
	float x = normal.x, y = normal.y, z = normal.z;
	vec3 result = shCoefficients[ 0 ] * 0.886227;
	result += shCoefficients[ 1 ] * 2.0 * 0.511664 * y;
	result += shCoefficients[ 2 ] * 2.0 * 0.511664 * z;
	result += shCoefficients[ 3 ] * 2.0 * 0.511664 * x;
	result += shCoefficients[ 4 ] * 2.0 * 0.429043 * x * y;
	result += shCoefficients[ 5 ] * 2.0 * 0.429043 * y * z;
	result += shCoefficients[ 6 ] * ( 0.743125 * z * z - 0.247708 );
	result += shCoefficients[ 7 ] * 2.0 * 0.429043 * x * z;
	result += shCoefficients[ 8 ] * 0.429043 * ( x * x - y * y );
	return result;
}
vec3 getLightProbeIrradiance( const in vec3 lightProbe[ 9 ], const in vec3 normal ) {
	vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
	vec3 irradiance = shGetIrradianceAt( worldNormal, lightProbe );
	return irradiance;
}
vec3 getAmbientLightIrradiance( const in vec3 ambientLightColor ) {
	vec3 irradiance = ambientLightColor;
	return irradiance;
}
float getDistanceAttenuation( const in float lightDistance, const in float cutoffDistance, const in float decayExponent ) {
	float distanceFalloff = 1.0 / max( pow( lightDistance, decayExponent ), 0.01 );
	if ( cutoffDistance > 0.0 ) {
		distanceFalloff *= pow2( saturate( 1.0 - pow4( lightDistance / cutoffDistance ) ) );
	}
	return distanceFalloff;
}
float getSpotAttenuation( const in float coneCosine, const in float penumbraCosine, const in float angleCosine ) {
	return smoothstep( coneCosine, penumbraCosine, angleCosine );
}
#if NUM_DIR_LIGHTS > 0
	struct DirectionalLight {
		vec3 direction;
		vec3 color;
	};
	uniform DirectionalLight directionalLights[ NUM_DIR_LIGHTS ];
	void getDirectionalLightInfo( const in DirectionalLight directionalLight, out IncidentLight light ) {
		light.color = directionalLight.color;
		light.direction = directionalLight.direction;
		light.visible = true;
	}
#endif
#if NUM_POINT_LIGHTS > 0
	struct PointLight {
		vec3 position;
		vec3 color;
		float distance;
		float decay;
	};
	uniform PointLight pointLights[ NUM_POINT_LIGHTS ];
	void getPointLightInfo( const in PointLight pointLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = pointLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float lightDistance = length( lVector );
		light.color = pointLight.color;
		light.color *= getDistanceAttenuation( lightDistance, pointLight.distance, pointLight.decay );
		light.visible = ( light.color != vec3( 0.0 ) );
	}
#endif
#if NUM_SPOT_LIGHTS > 0
	struct SpotLight {
		vec3 position;
		vec3 direction;
		vec3 color;
		float distance;
		float decay;
		float coneCos;
		float penumbraCos;
	};
	uniform SpotLight spotLights[ NUM_SPOT_LIGHTS ];
	void getSpotLightInfo( const in SpotLight spotLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = spotLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float angleCos = dot( light.direction, spotLight.direction );
		float spotAttenuation = getSpotAttenuation( spotLight.coneCos, spotLight.penumbraCos, angleCos );
		if ( spotAttenuation > 0.0 ) {
			float lightDistance = length( lVector );
			light.color = spotLight.color * spotAttenuation;
			light.color *= getDistanceAttenuation( lightDistance, spotLight.distance, spotLight.decay );
			light.visible = ( light.color != vec3( 0.0 ) );
		} else {
			light.color = vec3( 0.0 );
			light.visible = false;
		}
	}
#endif
#if NUM_RECT_AREA_LIGHTS > 0
	struct RectAreaLight {
		vec3 color;
		vec3 position;
		vec3 halfWidth;
		vec3 halfHeight;
	};
	uniform sampler2D ltc_1;	uniform sampler2D ltc_2;
	uniform RectAreaLight rectAreaLights[ NUM_RECT_AREA_LIGHTS ];
#endif
#if NUM_HEMI_LIGHTS > 0
	struct HemisphereLight {
		vec3 direction;
		vec3 skyColor;
		vec3 groundColor;
	};
	uniform HemisphereLight hemisphereLights[ NUM_HEMI_LIGHTS ];
	vec3 getHemisphereLightIrradiance( const in HemisphereLight hemiLight, const in vec3 normal ) {
		float dotNL = dot( normal, hemiLight.direction );
		float hemiDiffuseWeight = 0.5 * dotNL + 0.5;
		vec3 irradiance = mix( hemiLight.groundColor, hemiLight.skyColor, hemiDiffuseWeight );
		return irradiance;
	}
#endif`,pu=`#ifdef USE_ENVMAP
	vec3 getIBLIrradiance( const in vec3 normal ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * worldNormal, 1.0 );
			return PI * envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	vec3 getIBLRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 reflectVec = reflect( - viewDir, normal );
			reflectVec = normalize( mix( reflectVec, normal, roughness * roughness) );
			reflectVec = inverseTransformDirection( reflectVec, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * reflectVec, roughness );
			return envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	#ifdef USE_ANISOTROPY
		vec3 getIBLAnisotropyRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness, const in vec3 bitangent, const in float anisotropy ) {
			#ifdef ENVMAP_TYPE_CUBE_UV
				vec3 bentNormal = cross( bitangent, viewDir );
				bentNormal = normalize( cross( bentNormal, bitangent ) );
				bentNormal = normalize( mix( bentNormal, normal, pow2( pow2( 1.0 - anisotropy * ( 1.0 - roughness ) ) ) ) );
				return getIBLRadiance( viewDir, bentNormal, roughness );
			#else
				return vec3( 0.0 );
			#endif
		}
	#endif
#endif`,mu=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,gu=`varying vec3 vViewPosition;
struct ToonMaterial {
	vec3 diffuseColor;
};
void RE_Direct_Toon( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 irradiance = getGradientIrradiance( geometryNormal, directLight.direction ) * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Toon( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Toon
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,_u=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,vu=`varying vec3 vViewPosition;
struct BlinnPhongMaterial {
	vec3 diffuseColor;
	vec3 specularColor;
	float specularShininess;
	float specularStrength;
};
void RE_Direct_BlinnPhong( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
	reflectedLight.directSpecular += irradiance * BRDF_BlinnPhong( directLight.direction, geometryViewDir, geometryNormal, material.specularColor, material.specularShininess ) * material.specularStrength;
}
void RE_IndirectDiffuse_BlinnPhong( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_BlinnPhong
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,xu=`PhysicalMaterial material;
material.diffuseColor = diffuseColor.rgb * ( 1.0 - metalnessFactor );
vec3 dxy = max( abs( dFdx( nonPerturbedNormal ) ), abs( dFdy( nonPerturbedNormal ) ) );
float geometryRoughness = max( max( dxy.x, dxy.y ), dxy.z );
material.roughness = max( roughnessFactor, 0.0525 );material.roughness += geometryRoughness;
material.roughness = min( material.roughness, 1.0 );
#ifdef IOR
	material.ior = ior;
	#ifdef USE_SPECULAR
		float specularIntensityFactor = specularIntensity;
		vec3 specularColorFactor = specularColor;
		#ifdef USE_SPECULAR_COLORMAP
			specularColorFactor *= texture2D( specularColorMap, vSpecularColorMapUv ).rgb;
		#endif
		#ifdef USE_SPECULAR_INTENSITYMAP
			specularIntensityFactor *= texture2D( specularIntensityMap, vSpecularIntensityMapUv ).a;
		#endif
		material.specularF90 = mix( specularIntensityFactor, 1.0, metalnessFactor );
	#else
		float specularIntensityFactor = 1.0;
		vec3 specularColorFactor = vec3( 1.0 );
		material.specularF90 = 1.0;
	#endif
	material.specularColor = mix( min( pow2( ( material.ior - 1.0 ) / ( material.ior + 1.0 ) ) * specularColorFactor, vec3( 1.0 ) ) * specularIntensityFactor, diffuseColor.rgb, metalnessFactor );
#else
	material.specularColor = mix( vec3( 0.04 ), diffuseColor.rgb, metalnessFactor );
	material.specularF90 = 1.0;
#endif
#ifdef USE_CLEARCOAT
	material.clearcoat = clearcoat;
	material.clearcoatRoughness = clearcoatRoughness;
	material.clearcoatF0 = vec3( 0.04 );
	material.clearcoatF90 = 1.0;
	#ifdef USE_CLEARCOATMAP
		material.clearcoat *= texture2D( clearcoatMap, vClearcoatMapUv ).x;
	#endif
	#ifdef USE_CLEARCOAT_ROUGHNESSMAP
		material.clearcoatRoughness *= texture2D( clearcoatRoughnessMap, vClearcoatRoughnessMapUv ).y;
	#endif
	material.clearcoat = saturate( material.clearcoat );	material.clearcoatRoughness = max( material.clearcoatRoughness, 0.0525 );
	material.clearcoatRoughness += geometryRoughness;
	material.clearcoatRoughness = min( material.clearcoatRoughness, 1.0 );
#endif
#ifdef USE_DISPERSION
	material.dispersion = dispersion;
#endif
#ifdef USE_IRIDESCENCE
	material.iridescence = iridescence;
	material.iridescenceIOR = iridescenceIOR;
	#ifdef USE_IRIDESCENCEMAP
		material.iridescence *= texture2D( iridescenceMap, vIridescenceMapUv ).r;
	#endif
	#ifdef USE_IRIDESCENCE_THICKNESSMAP
		material.iridescenceThickness = (iridescenceThicknessMaximum - iridescenceThicknessMinimum) * texture2D( iridescenceThicknessMap, vIridescenceThicknessMapUv ).g + iridescenceThicknessMinimum;
	#else
		material.iridescenceThickness = iridescenceThicknessMaximum;
	#endif
#endif
#ifdef USE_SHEEN
	material.sheenColor = sheenColor;
	#ifdef USE_SHEEN_COLORMAP
		material.sheenColor *= texture2D( sheenColorMap, vSheenColorMapUv ).rgb;
	#endif
	material.sheenRoughness = clamp( sheenRoughness, 0.07, 1.0 );
	#ifdef USE_SHEEN_ROUGHNESSMAP
		material.sheenRoughness *= texture2D( sheenRoughnessMap, vSheenRoughnessMapUv ).a;
	#endif
#endif
#ifdef USE_ANISOTROPY
	#ifdef USE_ANISOTROPYMAP
		mat2 anisotropyMat = mat2( anisotropyVector.x, anisotropyVector.y, - anisotropyVector.y, anisotropyVector.x );
		vec3 anisotropyPolar = texture2D( anisotropyMap, vAnisotropyMapUv ).rgb;
		vec2 anisotropyV = anisotropyMat * normalize( 2.0 * anisotropyPolar.rg - vec2( 1.0 ) ) * anisotropyPolar.b;
	#else
		vec2 anisotropyV = anisotropyVector;
	#endif
	material.anisotropy = length( anisotropyV );
	if( material.anisotropy == 0.0 ) {
		anisotropyV = vec2( 1.0, 0.0 );
	} else {
		anisotropyV /= material.anisotropy;
		material.anisotropy = saturate( material.anisotropy );
	}
	material.alphaT = mix( pow2( material.roughness ), 1.0, pow2( material.anisotropy ) );
	material.anisotropyT = tbn[ 0 ] * anisotropyV.x + tbn[ 1 ] * anisotropyV.y;
	material.anisotropyB = tbn[ 1 ] * anisotropyV.x - tbn[ 0 ] * anisotropyV.y;
#endif`,Mu=`struct PhysicalMaterial {
	vec3 diffuseColor;
	float roughness;
	vec3 specularColor;
	float specularF90;
	float dispersion;
	#ifdef USE_CLEARCOAT
		float clearcoat;
		float clearcoatRoughness;
		vec3 clearcoatF0;
		float clearcoatF90;
	#endif
	#ifdef USE_IRIDESCENCE
		float iridescence;
		float iridescenceIOR;
		float iridescenceThickness;
		vec3 iridescenceFresnel;
		vec3 iridescenceF0;
	#endif
	#ifdef USE_SHEEN
		vec3 sheenColor;
		float sheenRoughness;
	#endif
	#ifdef IOR
		float ior;
	#endif
	#ifdef USE_TRANSMISSION
		float transmission;
		float transmissionAlpha;
		float thickness;
		float attenuationDistance;
		vec3 attenuationColor;
	#endif
	#ifdef USE_ANISOTROPY
		float anisotropy;
		float alphaT;
		vec3 anisotropyT;
		vec3 anisotropyB;
	#endif
};
vec3 clearcoatSpecularDirect = vec3( 0.0 );
vec3 clearcoatSpecularIndirect = vec3( 0.0 );
vec3 sheenSpecularDirect = vec3( 0.0 );
vec3 sheenSpecularIndirect = vec3(0.0 );
vec3 Schlick_to_F0( const in vec3 f, const in float f90, const in float dotVH ) {
    float x = clamp( 1.0 - dotVH, 0.0, 1.0 );
    float x2 = x * x;
    float x5 = clamp( x * x2 * x2, 0.0, 0.9999 );
    return ( f - vec3( f90 ) * x5 ) / ( 1.0 - x5 );
}
float V_GGX_SmithCorrelated( const in float alpha, const in float dotNL, const in float dotNV ) {
	float a2 = pow2( alpha );
	float gv = dotNL * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNV ) );
	float gl = dotNV * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNL ) );
	return 0.5 / max( gv + gl, EPSILON );
}
float D_GGX( const in float alpha, const in float dotNH ) {
	float a2 = pow2( alpha );
	float denom = pow2( dotNH ) * ( a2 - 1.0 ) + 1.0;
	return RECIPROCAL_PI * a2 / pow2( denom );
}
#ifdef USE_ANISOTROPY
	float V_GGX_SmithCorrelated_Anisotropic( const in float alphaT, const in float alphaB, const in float dotTV, const in float dotBV, const in float dotTL, const in float dotBL, const in float dotNV, const in float dotNL ) {
		float gv = dotNL * length( vec3( alphaT * dotTV, alphaB * dotBV, dotNV ) );
		float gl = dotNV * length( vec3( alphaT * dotTL, alphaB * dotBL, dotNL ) );
		float v = 0.5 / ( gv + gl );
		return saturate(v);
	}
	float D_GGX_Anisotropic( const in float alphaT, const in float alphaB, const in float dotNH, const in float dotTH, const in float dotBH ) {
		float a2 = alphaT * alphaB;
		highp vec3 v = vec3( alphaB * dotTH, alphaT * dotBH, a2 * dotNH );
		highp float v2 = dot( v, v );
		float w2 = a2 / v2;
		return RECIPROCAL_PI * a2 * pow2 ( w2 );
	}
#endif
#ifdef USE_CLEARCOAT
	vec3 BRDF_GGX_Clearcoat( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material) {
		vec3 f0 = material.clearcoatF0;
		float f90 = material.clearcoatF90;
		float roughness = material.clearcoatRoughness;
		float alpha = pow2( roughness );
		vec3 halfDir = normalize( lightDir + viewDir );
		float dotNL = saturate( dot( normal, lightDir ) );
		float dotNV = saturate( dot( normal, viewDir ) );
		float dotNH = saturate( dot( normal, halfDir ) );
		float dotVH = saturate( dot( viewDir, halfDir ) );
		vec3 F = F_Schlick( f0, f90, dotVH );
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
		return F * ( V * D );
	}
#endif
vec3 BRDF_GGX( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material ) {
	vec3 f0 = material.specularColor;
	float f90 = material.specularF90;
	float roughness = material.roughness;
	float alpha = pow2( roughness );
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( f0, f90, dotVH );
	#ifdef USE_IRIDESCENCE
		F = mix( F, material.iridescenceFresnel, material.iridescence );
	#endif
	#ifdef USE_ANISOTROPY
		float dotTL = dot( material.anisotropyT, lightDir );
		float dotTV = dot( material.anisotropyT, viewDir );
		float dotTH = dot( material.anisotropyT, halfDir );
		float dotBL = dot( material.anisotropyB, lightDir );
		float dotBV = dot( material.anisotropyB, viewDir );
		float dotBH = dot( material.anisotropyB, halfDir );
		float V = V_GGX_SmithCorrelated_Anisotropic( material.alphaT, alpha, dotTV, dotBV, dotTL, dotBL, dotNV, dotNL );
		float D = D_GGX_Anisotropic( material.alphaT, alpha, dotNH, dotTH, dotBH );
	#else
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
	#endif
	return F * ( V * D );
}
vec2 LTC_Uv( const in vec3 N, const in vec3 V, const in float roughness ) {
	const float LUT_SIZE = 64.0;
	const float LUT_SCALE = ( LUT_SIZE - 1.0 ) / LUT_SIZE;
	const float LUT_BIAS = 0.5 / LUT_SIZE;
	float dotNV = saturate( dot( N, V ) );
	vec2 uv = vec2( roughness, sqrt( 1.0 - dotNV ) );
	uv = uv * LUT_SCALE + LUT_BIAS;
	return uv;
}
float LTC_ClippedSphereFormFactor( const in vec3 f ) {
	float l = length( f );
	return max( ( l * l + f.z ) / ( l + 1.0 ), 0.0 );
}
vec3 LTC_EdgeVectorFormFactor( const in vec3 v1, const in vec3 v2 ) {
	float x = dot( v1, v2 );
	float y = abs( x );
	float a = 0.8543985 + ( 0.4965155 + 0.0145206 * y ) * y;
	float b = 3.4175940 + ( 4.1616724 + y ) * y;
	float v = a / b;
	float theta_sintheta = ( x > 0.0 ) ? v : 0.5 * inversesqrt( max( 1.0 - x * x, 1e-7 ) ) - v;
	return cross( v1, v2 ) * theta_sintheta;
}
vec3 LTC_Evaluate( const in vec3 N, const in vec3 V, const in vec3 P, const in mat3 mInv, const in vec3 rectCoords[ 4 ] ) {
	vec3 v1 = rectCoords[ 1 ] - rectCoords[ 0 ];
	vec3 v2 = rectCoords[ 3 ] - rectCoords[ 0 ];
	vec3 lightNormal = cross( v1, v2 );
	if( dot( lightNormal, P - rectCoords[ 0 ] ) < 0.0 ) return vec3( 0.0 );
	vec3 T1, T2;
	T1 = normalize( V - N * dot( V, N ) );
	T2 = - cross( N, T1 );
	mat3 mat = mInv * transposeMat3( mat3( T1, T2, N ) );
	vec3 coords[ 4 ];
	coords[ 0 ] = mat * ( rectCoords[ 0 ] - P );
	coords[ 1 ] = mat * ( rectCoords[ 1 ] - P );
	coords[ 2 ] = mat * ( rectCoords[ 2 ] - P );
	coords[ 3 ] = mat * ( rectCoords[ 3 ] - P );
	coords[ 0 ] = normalize( coords[ 0 ] );
	coords[ 1 ] = normalize( coords[ 1 ] );
	coords[ 2 ] = normalize( coords[ 2 ] );
	coords[ 3 ] = normalize( coords[ 3 ] );
	vec3 vectorFormFactor = vec3( 0.0 );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 0 ], coords[ 1 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 1 ], coords[ 2 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 2 ], coords[ 3 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 3 ], coords[ 0 ] );
	float result = LTC_ClippedSphereFormFactor( vectorFormFactor );
	return vec3( result );
}
#if defined( USE_SHEEN )
float D_Charlie( float roughness, float dotNH ) {
	float alpha = pow2( roughness );
	float invAlpha = 1.0 / alpha;
	float cos2h = dotNH * dotNH;
	float sin2h = max( 1.0 - cos2h, 0.0078125 );
	return ( 2.0 + invAlpha ) * pow( sin2h, invAlpha * 0.5 ) / ( 2.0 * PI );
}
float V_Neubelt( float dotNV, float dotNL ) {
	return saturate( 1.0 / ( 4.0 * ( dotNL + dotNV - dotNL * dotNV ) ) );
}
vec3 BRDF_Sheen( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, vec3 sheenColor, const in float sheenRoughness ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float D = D_Charlie( sheenRoughness, dotNH );
	float V = V_Neubelt( dotNV, dotNL );
	return sheenColor * ( D * V );
}
#endif
float IBLSheenBRDF( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	float r2 = roughness * roughness;
	float a = roughness < 0.25 ? -339.2 * r2 + 161.4 * roughness - 25.9 : -8.48 * r2 + 14.3 * roughness - 9.95;
	float b = roughness < 0.25 ? 44.0 * r2 - 23.7 * roughness + 3.26 : 1.97 * r2 - 3.27 * roughness + 0.72;
	float DG = exp( a * dotNV + b ) + ( roughness < 0.25 ? 0.0 : 0.1 * ( roughness - 0.25 ) );
	return saturate( DG * RECIPROCAL_PI );
}
vec2 DFGApprox( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	const vec4 c0 = vec4( - 1, - 0.0275, - 0.572, 0.022 );
	const vec4 c1 = vec4( 1, 0.0425, 1.04, - 0.04 );
	vec4 r = roughness * c0 + c1;
	float a004 = min( r.x * r.x, exp2( - 9.28 * dotNV ) ) * r.x + r.y;
	vec2 fab = vec2( - 1.04, 1.04 ) * a004 + r.zw;
	return fab;
}
vec3 EnvironmentBRDF( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness ) {
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	return specularColor * fab.x + specularF90 * fab.y;
}
#ifdef USE_IRIDESCENCE
void computeMultiscatteringIridescence( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float iridescence, const in vec3 iridescenceF0, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#else
void computeMultiscattering( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#endif
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	#ifdef USE_IRIDESCENCE
		vec3 Fr = mix( specularColor, iridescenceF0, iridescence );
	#else
		vec3 Fr = specularColor;
	#endif
	vec3 FssEss = Fr * fab.x + specularF90 * fab.y;
	float Ess = fab.x + fab.y;
	float Ems = 1.0 - Ess;
	vec3 Favg = Fr + ( 1.0 - Fr ) * 0.047619;	vec3 Fms = FssEss * Favg / ( 1.0 - Ems * Favg );
	singleScatter += FssEss;
	multiScatter += Fms * Ems;
}
#if NUM_RECT_AREA_LIGHTS > 0
	void RE_Direct_RectArea_Physical( const in RectAreaLight rectAreaLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
		vec3 normal = geometryNormal;
		vec3 viewDir = geometryViewDir;
		vec3 position = geometryPosition;
		vec3 lightPos = rectAreaLight.position;
		vec3 halfWidth = rectAreaLight.halfWidth;
		vec3 halfHeight = rectAreaLight.halfHeight;
		vec3 lightColor = rectAreaLight.color;
		float roughness = material.roughness;
		vec3 rectCoords[ 4 ];
		rectCoords[ 0 ] = lightPos + halfWidth - halfHeight;		rectCoords[ 1 ] = lightPos - halfWidth - halfHeight;
		rectCoords[ 2 ] = lightPos - halfWidth + halfHeight;
		rectCoords[ 3 ] = lightPos + halfWidth + halfHeight;
		vec2 uv = LTC_Uv( normal, viewDir, roughness );
		vec4 t1 = texture2D( ltc_1, uv );
		vec4 t2 = texture2D( ltc_2, uv );
		mat3 mInv = mat3(
			vec3( t1.x, 0, t1.y ),
			vec3(    0, 1,    0 ),
			vec3( t1.z, 0, t1.w )
		);
		vec3 fresnel = ( material.specularColor * t2.x + ( vec3( 1.0 ) - material.specularColor ) * t2.y );
		reflectedLight.directSpecular += lightColor * fresnel * LTC_Evaluate( normal, viewDir, position, mInv, rectCoords );
		reflectedLight.directDiffuse += lightColor * material.diffuseColor * LTC_Evaluate( normal, viewDir, position, mat3( 1.0 ), rectCoords );
	}
#endif
void RE_Direct_Physical( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	#ifdef USE_CLEARCOAT
		float dotNLcc = saturate( dot( geometryClearcoatNormal, directLight.direction ) );
		vec3 ccIrradiance = dotNLcc * directLight.color;
		clearcoatSpecularDirect += ccIrradiance * BRDF_GGX_Clearcoat( directLight.direction, geometryViewDir, geometryClearcoatNormal, material );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularDirect += irradiance * BRDF_Sheen( directLight.direction, geometryViewDir, geometryNormal, material.sheenColor, material.sheenRoughness );
	#endif
	reflectedLight.directSpecular += irradiance * BRDF_GGX( directLight.direction, geometryViewDir, geometryNormal, material );
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 irradiance, const in vec3 clearcoatRadiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {
	#ifdef USE_CLEARCOAT
		clearcoatSpecularIndirect += clearcoatRadiance * EnvironmentBRDF( geometryClearcoatNormal, geometryViewDir, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularIndirect += irradiance * material.sheenColor * IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
	#endif
	vec3 singleScattering = vec3( 0.0 );
	vec3 multiScattering = vec3( 0.0 );
	vec3 cosineWeightedIrradiance = irradiance * RECIPROCAL_PI;
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.iridescence, material.iridescenceFresnel, material.roughness, singleScattering, multiScattering );
	#else
		computeMultiscattering( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.roughness, singleScattering, multiScattering );
	#endif
	vec3 totalScattering = singleScattering + multiScattering;
	vec3 diffuse = material.diffuseColor * ( 1.0 - max( max( totalScattering.r, totalScattering.g ), totalScattering.b ) );
	reflectedLight.indirectSpecular += radiance * singleScattering;
	reflectedLight.indirectSpecular += multiScattering * cosineWeightedIrradiance;
	reflectedLight.indirectDiffuse += diffuse * cosineWeightedIrradiance;
}
#define RE_Direct				RE_Direct_Physical
#define RE_Direct_RectArea		RE_Direct_RectArea_Physical
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Physical
#define RE_IndirectSpecular		RE_IndirectSpecular_Physical
float computeSpecularOcclusion( const in float dotNV, const in float ambientOcclusion, const in float roughness ) {
	return saturate( pow( dotNV + ambientOcclusion, exp2( - 16.0 * roughness - 1.0 ) ) - 1.0 + ambientOcclusion );
}`,yu=`
vec3 geometryPosition = - vViewPosition;
vec3 geometryNormal = normal;
vec3 geometryViewDir = ( isOrthographic ) ? vec3( 0, 0, 1 ) : normalize( vViewPosition );
vec3 geometryClearcoatNormal = vec3( 0.0 );
#ifdef USE_CLEARCOAT
	geometryClearcoatNormal = clearcoatNormal;
#endif
#ifdef USE_IRIDESCENCE
	float dotNVi = saturate( dot( normal, geometryViewDir ) );
	if ( material.iridescenceThickness == 0.0 ) {
		material.iridescence = 0.0;
	} else {
		material.iridescence = saturate( material.iridescence );
	}
	if ( material.iridescence > 0.0 ) {
		material.iridescenceFresnel = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.specularColor );
		material.iridescenceF0 = Schlick_to_F0( material.iridescenceFresnel, 1.0, dotNVi );
	}
#endif
IncidentLight directLight;
#if ( NUM_POINT_LIGHTS > 0 ) && defined( RE_Direct )
	PointLight pointLight;
	#if defined( USE_SHADOWMAP ) && NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHTS; i ++ ) {
		pointLight = pointLights[ i ];
		getPointLightInfo( pointLight, geometryPosition, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS )
		pointLightShadow = pointLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getPointShadow( pointShadowMap[ i ], pointLightShadow.shadowMapSize, pointLightShadow.shadowIntensity, pointLightShadow.shadowBias, pointLightShadow.shadowRadius, vPointShadowCoord[ i ], pointLightShadow.shadowCameraNear, pointLightShadow.shadowCameraFar ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_SPOT_LIGHTS > 0 ) && defined( RE_Direct )
	SpotLight spotLight;
	vec4 spotColor;
	vec3 spotLightCoord;
	bool inSpotLightMap;
	#if defined( USE_SHADOWMAP ) && NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHTS; i ++ ) {
		spotLight = spotLights[ i ];
		getSpotLightInfo( spotLight, geometryPosition, directLight );
		#if ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#define SPOT_LIGHT_MAP_INDEX UNROLLED_LOOP_INDEX
		#elif ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		#define SPOT_LIGHT_MAP_INDEX NUM_SPOT_LIGHT_MAPS
		#else
		#define SPOT_LIGHT_MAP_INDEX ( UNROLLED_LOOP_INDEX - NUM_SPOT_LIGHT_SHADOWS + NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#endif
		#if ( SPOT_LIGHT_MAP_INDEX < NUM_SPOT_LIGHT_MAPS )
			spotLightCoord = vSpotLightCoord[ i ].xyz / vSpotLightCoord[ i ].w;
			inSpotLightMap = all( lessThan( abs( spotLightCoord * 2. - 1. ), vec3( 1.0 ) ) );
			spotColor = texture2D( spotLightMap[ SPOT_LIGHT_MAP_INDEX ], spotLightCoord.xy );
			directLight.color = inSpotLightMap ? directLight.color * spotColor.rgb : directLight.color;
		#endif
		#undef SPOT_LIGHT_MAP_INDEX
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		spotLightShadow = spotLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( spotShadowMap[ i ], spotLightShadow.shadowMapSize, spotLightShadow.shadowIntensity, spotLightShadow.shadowBias, spotLightShadow.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_DIR_LIGHTS > 0 ) && defined( RE_Direct )
	DirectionalLight directionalLight;
	#if defined( USE_SHADOWMAP ) && NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHTS; i ++ ) {
		directionalLight = directionalLights[ i ];
		getDirectionalLightInfo( directionalLight, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_DIR_LIGHT_SHADOWS )
		directionalLightShadow = directionalLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( directionalShadowMap[ i ], directionalLightShadow.shadowMapSize, directionalLightShadow.shadowIntensity, directionalLightShadow.shadowBias, directionalLightShadow.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_RECT_AREA_LIGHTS > 0 ) && defined( RE_Direct_RectArea )
	RectAreaLight rectAreaLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_RECT_AREA_LIGHTS; i ++ ) {
		rectAreaLight = rectAreaLights[ i ];
		RE_Direct_RectArea( rectAreaLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if defined( RE_IndirectDiffuse )
	vec3 iblIrradiance = vec3( 0.0 );
	vec3 irradiance = getAmbientLightIrradiance( ambientLightColor );
	#if defined( USE_LIGHT_PROBES )
		irradiance += getLightProbeIrradiance( lightProbe, geometryNormal );
	#endif
	#if ( NUM_HEMI_LIGHTS > 0 )
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_HEMI_LIGHTS; i ++ ) {
			irradiance += getHemisphereLightIrradiance( hemisphereLights[ i ], geometryNormal );
		}
		#pragma unroll_loop_end
	#endif
#endif
#if defined( RE_IndirectSpecular )
	vec3 radiance = vec3( 0.0 );
	vec3 clearcoatRadiance = vec3( 0.0 );
#endif`,Su=`#if defined( RE_IndirectDiffuse )
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
		irradiance += lightMapIrradiance;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD ) && defined( ENVMAP_TYPE_CUBE_UV )
		iblIrradiance += getIBLIrradiance( geometryNormal );
	#endif
#endif
#if defined( USE_ENVMAP ) && defined( RE_IndirectSpecular )
	#ifdef USE_ANISOTROPY
		radiance += getIBLAnisotropyRadiance( geometryViewDir, geometryNormal, material.roughness, material.anisotropyB, material.anisotropy );
	#else
		radiance += getIBLRadiance( geometryViewDir, geometryNormal, material.roughness );
	#endif
	#ifdef USE_CLEARCOAT
		clearcoatRadiance += getIBLRadiance( geometryViewDir, geometryClearcoatNormal, material.clearcoatRoughness );
	#endif
#endif`,Eu=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,bu=`#if defined( USE_LOGDEPTHBUF )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,Tu=`#if defined( USE_LOGDEPTHBUF )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,Au=`#ifdef USE_LOGDEPTHBUF
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,wu=`#ifdef USE_LOGDEPTHBUF
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,Cu=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,Ru=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,Pu=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
	#if defined( USE_POINTS_UV )
		vec2 uv = vUv;
	#else
		vec2 uv = ( uvTransform * vec3( gl_PointCoord.x, 1.0 - gl_PointCoord.y, 1 ) ).xy;
	#endif
#endif
#ifdef USE_MAP
	diffuseColor *= texture2D( map, uv );
#endif
#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, uv ).g;
#endif`,Du=`#if defined( USE_POINTS_UV )
	varying vec2 vUv;
#else
	#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
		uniform mat3 uvTransform;
	#endif
#endif
#ifdef USE_MAP
	uniform sampler2D map;
#endif
#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,Lu=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,Iu=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,Uu=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,Nu=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,Fu=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,Ou=`#ifdef USE_MORPHTARGETS
	#ifndef USE_INSTANCING_MORPH
		uniform float morphTargetBaseInfluence;
		uniform float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	#endif
	uniform sampler2DArray morphTargetsTexture;
	uniform ivec2 morphTargetsTextureSize;
	vec4 getMorph( const in int vertexIndex, const in int morphTargetIndex, const in int offset ) {
		int texelIndex = vertexIndex * MORPHTARGETS_TEXTURE_STRIDE + offset;
		int y = texelIndex / morphTargetsTextureSize.x;
		int x = texelIndex - y * morphTargetsTextureSize.x;
		ivec3 morphUV = ivec3( x, y, morphTargetIndex );
		return texelFetch( morphTargetsTexture, morphUV, 0 );
	}
#endif`,Bu=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,zu=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
#ifdef FLAT_SHADED
	vec3 fdx = dFdx( vViewPosition );
	vec3 fdy = dFdy( vViewPosition );
	vec3 normal = normalize( cross( fdx, fdy ) );
#else
	vec3 normal = normalize( vNormal );
	#ifdef DOUBLE_SIDED
		normal *= faceDirection;
	#endif
#endif
#if defined( USE_NORMALMAP_TANGENTSPACE ) || defined( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY )
	#ifdef USE_TANGENT
		mat3 tbn = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn = getTangentFrame( - vViewPosition, normal,
		#if defined( USE_NORMALMAP )
			vNormalMapUv
		#elif defined( USE_CLEARCOAT_NORMALMAP )
			vClearcoatNormalMapUv
		#else
			vUv
		#endif
		);
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn[0] *= faceDirection;
		tbn[1] *= faceDirection;
	#endif
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	#ifdef USE_TANGENT
		mat3 tbn2 = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn2 = getTangentFrame( - vViewPosition, normal, vClearcoatNormalMapUv );
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn2[0] *= faceDirection;
		tbn2[1] *= faceDirection;
	#endif
#endif
vec3 nonPerturbedNormal = normal;`,ku=`#ifdef USE_NORMALMAP_OBJECTSPACE
	normal = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	#ifdef FLIP_SIDED
		normal = - normal;
	#endif
	#ifdef DOUBLE_SIDED
		normal = normal * faceDirection;
	#endif
	normal = normalize( normalMatrix * normal );
#elif defined( USE_NORMALMAP_TANGENTSPACE )
	vec3 mapN = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	mapN.xy *= normalScale;
	normal = normalize( tbn * mapN );
#elif defined( USE_BUMPMAP )
	normal = perturbNormalArb( - vViewPosition, normal, dHdxy_fwd(), faceDirection );
#endif`,Gu=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Hu=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Vu=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,Wu=`#ifdef USE_NORMALMAP
	uniform sampler2D normalMap;
	uniform vec2 normalScale;
#endif
#ifdef USE_NORMALMAP_OBJECTSPACE
	uniform mat3 normalMatrix;
#endif
#if ! defined ( USE_TANGENT ) && ( defined ( USE_NORMALMAP_TANGENTSPACE ) || defined ( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY ) )
	mat3 getTangentFrame( vec3 eye_pos, vec3 surf_norm, vec2 uv ) {
		vec3 q0 = dFdx( eye_pos.xyz );
		vec3 q1 = dFdy( eye_pos.xyz );
		vec2 st0 = dFdx( uv.st );
		vec2 st1 = dFdy( uv.st );
		vec3 N = surf_norm;
		vec3 q1perp = cross( q1, N );
		vec3 q0perp = cross( N, q0 );
		vec3 T = q1perp * st0.x + q0perp * st1.x;
		vec3 B = q1perp * st0.y + q0perp * st1.y;
		float det = max( dot( T, T ), dot( B, B ) );
		float scale = ( det == 0.0 ) ? 0.0 : inversesqrt( det );
		return mat3( T * scale, B * scale, N );
	}
#endif`,Xu=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,qu=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,Yu=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,$u=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,Ku=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,ju=`vec3 packNormalToRGB( const in vec3 normal ) {
	return normalize( normal ) * 0.5 + 0.5;
}
vec3 unpackRGBToNormal( const in vec3 rgb ) {
	return 2.0 * rgb.xyz - 1.0;
}
const float PackUpscale = 256. / 255.;const float UnpackDownscale = 255. / 256.;const float ShiftRight8 = 1. / 256.;
const float Inv255 = 1. / 255.;
const vec4 PackFactors = vec4( 1.0, 256.0, 256.0 * 256.0, 256.0 * 256.0 * 256.0 );
const vec2 UnpackFactors2 = vec2( UnpackDownscale, 1.0 / PackFactors.g );
const vec3 UnpackFactors3 = vec3( UnpackDownscale / PackFactors.rg, 1.0 / PackFactors.b );
const vec4 UnpackFactors4 = vec4( UnpackDownscale / PackFactors.rgb, 1.0 / PackFactors.a );
vec4 packDepthToRGBA( const in float v ) {
	if( v <= 0.0 )
		return vec4( 0., 0., 0., 0. );
	if( v >= 1.0 )
		return vec4( 1., 1., 1., 1. );
	float vuf;
	float af = modf( v * PackFactors.a, vuf );
	float bf = modf( vuf * ShiftRight8, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec4( vuf * Inv255, gf * PackUpscale, bf * PackUpscale, af );
}
vec3 packDepthToRGB( const in float v ) {
	if( v <= 0.0 )
		return vec3( 0., 0., 0. );
	if( v >= 1.0 )
		return vec3( 1., 1., 1. );
	float vuf;
	float bf = modf( v * PackFactors.b, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec3( vuf * Inv255, gf * PackUpscale, bf );
}
vec2 packDepthToRG( const in float v ) {
	if( v <= 0.0 )
		return vec2( 0., 0. );
	if( v >= 1.0 )
		return vec2( 1., 1. );
	float vuf;
	float gf = modf( v * 256., vuf );
	return vec2( vuf * Inv255, gf );
}
float unpackRGBAToDepth( const in vec4 v ) {
	return dot( v, UnpackFactors4 );
}
float unpackRGBToDepth( const in vec3 v ) {
	return dot( v, UnpackFactors3 );
}
float unpackRGToDepth( const in vec2 v ) {
	return v.r * UnpackFactors2.r + v.g * UnpackFactors2.g;
}
vec4 pack2HalfToRGBA( const in vec2 v ) {
	vec4 r = vec4( v.x, fract( v.x * 255.0 ), v.y, fract( v.y * 255.0 ) );
	return vec4( r.x - r.y / 255.0, r.y, r.z - r.w / 255.0, r.w );
}
vec2 unpackRGBATo2Half( const in vec4 v ) {
	return vec2( v.x + ( v.y / 255.0 ), v.z + ( v.w / 255.0 ) );
}
float viewZToOrthographicDepth( const in float viewZ, const in float near, const in float far ) {
	return ( viewZ + near ) / ( near - far );
}
float orthographicDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return depth * ( near - far ) - near;
}
float viewZToPerspectiveDepth( const in float viewZ, const in float near, const in float far ) {
	return ( ( near + viewZ ) * far ) / ( ( far - near ) * viewZ );
}
float perspectiveDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return ( near * far ) / ( ( far - near ) * depth - far );
}`,Zu=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,Ju=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,Qu=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,td=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,ed=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,nd=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,id=`#if NUM_SPOT_LIGHT_COORDS > 0
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#if NUM_SPOT_LIGHT_MAPS > 0
	uniform sampler2D spotLightMap[ NUM_SPOT_LIGHT_MAPS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform sampler2D directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		uniform sampler2D spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform sampler2D pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
	float texture2DCompare( sampler2D depths, vec2 uv, float compare ) {
		return step( compare, unpackRGBAToDepth( texture2D( depths, uv ) ) );
	}
	vec2 texture2DDistribution( sampler2D shadow, vec2 uv ) {
		return unpackRGBATo2Half( texture2D( shadow, uv ) );
	}
	float VSMShadow (sampler2D shadow, vec2 uv, float compare ){
		float occlusion = 1.0;
		vec2 distribution = texture2DDistribution( shadow, uv );
		float hard_shadow = step( compare , distribution.x );
		if (hard_shadow != 1.0 ) {
			float distance = compare - distribution.x ;
			float variance = max( 0.00000, distribution.y * distribution.y );
			float softness_probability = variance / (variance + distance * distance );			softness_probability = clamp( ( softness_probability - 0.3 ) / ( 0.95 - 0.3 ), 0.0, 1.0 );			occlusion = clamp( max( hard_shadow, softness_probability ), 0.0, 1.0 );
		}
		return occlusion;
	}
	float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
		float shadow = 1.0;
		shadowCoord.xyz /= shadowCoord.w;
		shadowCoord.z += shadowBias;
		bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
		bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
		if ( frustumTest ) {
		#if defined( SHADOWMAP_TYPE_PCF )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx0 = - texelSize.x * shadowRadius;
			float dy0 = - texelSize.y * shadowRadius;
			float dx1 = + texelSize.x * shadowRadius;
			float dy1 = + texelSize.y * shadowRadius;
			float dx2 = dx0 / 2.0;
			float dy2 = dy0 / 2.0;
			float dx3 = dx1 / 2.0;
			float dy3 = dy1 / 2.0;
			shadow = (
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy1 ), shadowCoord.z )
			) * ( 1.0 / 17.0 );
		#elif defined( SHADOWMAP_TYPE_PCF_SOFT )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx = texelSize.x;
			float dy = texelSize.y;
			vec2 uv = shadowCoord.xy;
			vec2 f = fract( uv * shadowMapSize + 0.5 );
			uv -= f * texelSize;
			shadow = (
				texture2DCompare( shadowMap, uv, shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( dx, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( 0.0, dy ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + texelSize, shadowCoord.z ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, 0.0 ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 0.0 ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, dy ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( 0.0, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 0.0, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( texture2DCompare( shadowMap, uv + vec2( dx, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( dx, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( mix( texture2DCompare( shadowMap, uv + vec2( -dx, -dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, -dy ), shadowCoord.z ),
						  f.x ),
					 mix( texture2DCompare( shadowMap, uv + vec2( -dx, 2.0 * dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 2.0 * dy ), shadowCoord.z ),
						  f.x ),
					 f.y )
			) * ( 1.0 / 9.0 );
		#elif defined( SHADOWMAP_TYPE_VSM )
			shadow = VSMShadow( shadowMap, shadowCoord.xy, shadowCoord.z );
		#else
			shadow = texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z );
		#endif
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	vec2 cubeToUV( vec3 v, float texelSizeY ) {
		vec3 absV = abs( v );
		float scaleToCube = 1.0 / max( absV.x, max( absV.y, absV.z ) );
		absV *= scaleToCube;
		v *= scaleToCube * ( 1.0 - 2.0 * texelSizeY );
		vec2 planar = v.xy;
		float almostATexel = 1.5 * texelSizeY;
		float almostOne = 1.0 - almostATexel;
		if ( absV.z >= almostOne ) {
			if ( v.z > 0.0 )
				planar.x = 4.0 - v.x;
		} else if ( absV.x >= almostOne ) {
			float signX = sign( v.x );
			planar.x = v.z * signX + 2.0 * signX;
		} else if ( absV.y >= almostOne ) {
			float signY = sign( v.y );
			planar.x = v.x + 2.0 * signY + 2.0;
			planar.y = v.z * signY - 2.0;
		}
		return vec2( 0.125, 0.25 ) * planar + vec2( 0.375, 0.75 );
	}
	float getPointShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		
		float lightToPositionLength = length( lightToPosition );
		if ( lightToPositionLength - shadowCameraFar <= 0.0 && lightToPositionLength - shadowCameraNear >= 0.0 ) {
			float dp = ( lightToPositionLength - shadowCameraNear ) / ( shadowCameraFar - shadowCameraNear );			dp += shadowBias;
			vec3 bd3D = normalize( lightToPosition );
			vec2 texelSize = vec2( 1.0 ) / ( shadowMapSize * vec2( 4.0, 2.0 ) );
			#if defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_PCF_SOFT ) || defined( SHADOWMAP_TYPE_VSM )
				vec2 offset = vec2( - 1, 1 ) * shadowRadius * texelSize.y;
				shadow = (
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxx, texelSize.y ), dp )
				) * ( 1.0 / 9.0 );
			#else
				shadow = texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp );
			#endif
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
#endif`,sd=`#if NUM_SPOT_LIGHT_COORDS > 0
	uniform mat4 spotLightMatrix[ NUM_SPOT_LIGHT_COORDS ];
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform mat4 directionalShadowMatrix[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform mat4 pointShadowMatrix[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
#endif`,ad=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
	vec3 shadowWorldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
	vec4 shadowWorldPosition;
#endif
#if defined( USE_SHADOWMAP )
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * directionalLightShadows[ i ].shadowNormalBias, 0 );
			vDirectionalShadowCoord[ i ] = directionalShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * pointLightShadows[ i ].shadowNormalBias, 0 );
			vPointShadowCoord[ i ] = pointShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
#endif
#if NUM_SPOT_LIGHT_COORDS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_COORDS; i ++ ) {
		shadowWorldPosition = worldPosition;
		#if ( defined( USE_SHADOWMAP ) && UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
			shadowWorldPosition.xyz += shadowWorldNormal * spotLightShadows[ i ].shadowNormalBias;
		#endif
		vSpotLightCoord[ i ] = spotLightMatrix[ i ] * shadowWorldPosition;
	}
	#pragma unroll_loop_end
#endif`,rd=`float getShadowMask() {
	float shadow = 1.0;
	#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
		directionalLight = directionalLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( directionalShadowMap[ i ], directionalLight.shadowMapSize, directionalLight.shadowIntensity, directionalLight.shadowBias, directionalLight.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_SHADOWS; i ++ ) {
		spotLight = spotLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( spotShadowMap[ i ], spotLight.shadowMapSize, spotLight.shadowIntensity, spotLight.shadowBias, spotLight.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
		pointLight = pointLightShadows[ i ];
		shadow *= receiveShadow ? getPointShadow( pointShadowMap[ i ], pointLight.shadowMapSize, pointLight.shadowIntensity, pointLight.shadowBias, pointLight.shadowRadius, vPointShadowCoord[ i ], pointLight.shadowCameraNear, pointLight.shadowCameraFar ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#endif
	return shadow;
}`,od=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,ld=`#ifdef USE_SKINNING
	uniform mat4 bindMatrix;
	uniform mat4 bindMatrixInverse;
	uniform highp sampler2D boneTexture;
	mat4 getBoneMatrix( const in float i ) {
		int size = textureSize( boneTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( boneTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( boneTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( boneTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( boneTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
#endif`,cd=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,hd=`#ifdef USE_SKINNING
	mat4 skinMatrix = mat4( 0.0 );
	skinMatrix += skinWeight.x * boneMatX;
	skinMatrix += skinWeight.y * boneMatY;
	skinMatrix += skinWeight.z * boneMatZ;
	skinMatrix += skinWeight.w * boneMatW;
	skinMatrix = bindMatrixInverse * skinMatrix * bindMatrix;
	objectNormal = vec4( skinMatrix * vec4( objectNormal, 0.0 ) ).xyz;
	#ifdef USE_TANGENT
		objectTangent = vec4( skinMatrix * vec4( objectTangent, 0.0 ) ).xyz;
	#endif
#endif`,ud=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,dd=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,fd=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,pd=`#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
uniform float toneMappingExposure;
vec3 LinearToneMapping( vec3 color ) {
	return saturate( toneMappingExposure * color );
}
vec3 ReinhardToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	return saturate( color / ( vec3( 1.0 ) + color ) );
}
vec3 CineonToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	color = max( vec3( 0.0 ), color - 0.004 );
	return pow( ( color * ( 6.2 * color + 0.5 ) ) / ( color * ( 6.2 * color + 1.7 ) + 0.06 ), vec3( 2.2 ) );
}
vec3 RRTAndODTFit( vec3 v ) {
	vec3 a = v * ( v + 0.0245786 ) - 0.000090537;
	vec3 b = v * ( 0.983729 * v + 0.4329510 ) + 0.238081;
	return a / b;
}
vec3 ACESFilmicToneMapping( vec3 color ) {
	const mat3 ACESInputMat = mat3(
		vec3( 0.59719, 0.07600, 0.02840 ),		vec3( 0.35458, 0.90834, 0.13383 ),
		vec3( 0.04823, 0.01566, 0.83777 )
	);
	const mat3 ACESOutputMat = mat3(
		vec3(  1.60475, -0.10208, -0.00327 ),		vec3( -0.53108,  1.10813, -0.07276 ),
		vec3( -0.07367, -0.00605,  1.07602 )
	);
	color *= toneMappingExposure / 0.6;
	color = ACESInputMat * color;
	color = RRTAndODTFit( color );
	color = ACESOutputMat * color;
	return saturate( color );
}
const mat3 LINEAR_REC2020_TO_LINEAR_SRGB = mat3(
	vec3( 1.6605, - 0.1246, - 0.0182 ),
	vec3( - 0.5876, 1.1329, - 0.1006 ),
	vec3( - 0.0728, - 0.0083, 1.1187 )
);
const mat3 LINEAR_SRGB_TO_LINEAR_REC2020 = mat3(
	vec3( 0.6274, 0.0691, 0.0164 ),
	vec3( 0.3293, 0.9195, 0.0880 ),
	vec3( 0.0433, 0.0113, 0.8956 )
);
vec3 agxDefaultContrastApprox( vec3 x ) {
	vec3 x2 = x * x;
	vec3 x4 = x2 * x2;
	return + 15.5 * x4 * x2
		- 40.14 * x4 * x
		+ 31.96 * x4
		- 6.868 * x2 * x
		+ 0.4298 * x2
		+ 0.1191 * x
		- 0.00232;
}
vec3 AgXToneMapping( vec3 color ) {
	const mat3 AgXInsetMatrix = mat3(
		vec3( 0.856627153315983, 0.137318972929847, 0.11189821299995 ),
		vec3( 0.0951212405381588, 0.761241990602591, 0.0767994186031903 ),
		vec3( 0.0482516061458583, 0.101439036467562, 0.811302368396859 )
	);
	const mat3 AgXOutsetMatrix = mat3(
		vec3( 1.1271005818144368, - 0.1413297634984383, - 0.14132976349843826 ),
		vec3( - 0.11060664309660323, 1.157823702216272, - 0.11060664309660294 ),
		vec3( - 0.016493938717834573, - 0.016493938717834257, 1.2519364065950405 )
	);
	const float AgxMinEv = - 12.47393;	const float AgxMaxEv = 4.026069;
	color *= toneMappingExposure;
	color = LINEAR_SRGB_TO_LINEAR_REC2020 * color;
	color = AgXInsetMatrix * color;
	color = max( color, 1e-10 );	color = log2( color );
	color = ( color - AgxMinEv ) / ( AgxMaxEv - AgxMinEv );
	color = clamp( color, 0.0, 1.0 );
	color = agxDefaultContrastApprox( color );
	color = AgXOutsetMatrix * color;
	color = pow( max( vec3( 0.0 ), color ), vec3( 2.2 ) );
	color = LINEAR_REC2020_TO_LINEAR_SRGB * color;
	color = clamp( color, 0.0, 1.0 );
	return color;
}
vec3 NeutralToneMapping( vec3 color ) {
	const float StartCompression = 0.8 - 0.04;
	const float Desaturation = 0.15;
	color *= toneMappingExposure;
	float x = min( color.r, min( color.g, color.b ) );
	float offset = x < 0.08 ? x - 6.25 * x * x : 0.04;
	color -= offset;
	float peak = max( color.r, max( color.g, color.b ) );
	if ( peak < StartCompression ) return color;
	float d = 1. - StartCompression;
	float newPeak = 1. - d * d / ( peak + d - StartCompression );
	color *= newPeak / peak;
	float g = 1. - 1. / ( Desaturation * ( peak - newPeak ) + 1. );
	return mix( color, vec3( newPeak ), g );
}
vec3 CustomToneMapping( vec3 color ) { return color; }`,md=`#ifdef USE_TRANSMISSION
	material.transmission = transmission;
	material.transmissionAlpha = 1.0;
	material.thickness = thickness;
	material.attenuationDistance = attenuationDistance;
	material.attenuationColor = attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		material.transmission *= texture2D( transmissionMap, vTransmissionMapUv ).r;
	#endif
	#ifdef USE_THICKNESSMAP
		material.thickness *= texture2D( thicknessMap, vThicknessMapUv ).g;
	#endif
	vec3 pos = vWorldPosition;
	vec3 v = normalize( cameraPosition - pos );
	vec3 n = inverseTransformDirection( normal, viewMatrix );
	vec4 transmitted = getIBLVolumeRefraction(
		n, v, material.roughness, material.diffuseColor, material.specularColor, material.specularF90,
		pos, modelMatrix, viewMatrix, projectionMatrix, material.dispersion, material.ior, material.thickness,
		material.attenuationColor, material.attenuationDistance );
	material.transmissionAlpha = mix( material.transmissionAlpha, transmitted.a, material.transmission );
	totalDiffuse = mix( totalDiffuse, transmitted.rgb, material.transmission );
#endif`,gd=`#ifdef USE_TRANSMISSION
	uniform float transmission;
	uniform float thickness;
	uniform float attenuationDistance;
	uniform vec3 attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		uniform sampler2D transmissionMap;
	#endif
	#ifdef USE_THICKNESSMAP
		uniform sampler2D thicknessMap;
	#endif
	uniform vec2 transmissionSamplerSize;
	uniform sampler2D transmissionSamplerMap;
	uniform mat4 modelMatrix;
	uniform mat4 projectionMatrix;
	varying vec3 vWorldPosition;
	float w0( float a ) {
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - a + 3.0 ) - 3.0 ) + 1.0 );
	}
	float w1( float a ) {
		return ( 1.0 / 6.0 ) * ( a *  a * ( 3.0 * a - 6.0 ) + 4.0 );
	}
	float w2( float a ){
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - 3.0 * a + 3.0 ) + 3.0 ) + 1.0 );
	}
	float w3( float a ) {
		return ( 1.0 / 6.0 ) * ( a * a * a );
	}
	float g0( float a ) {
		return w0( a ) + w1( a );
	}
	float g1( float a ) {
		return w2( a ) + w3( a );
	}
	float h0( float a ) {
		return - 1.0 + w1( a ) / ( w0( a ) + w1( a ) );
	}
	float h1( float a ) {
		return 1.0 + w3( a ) / ( w2( a ) + w3( a ) );
	}
	vec4 bicubic( sampler2D tex, vec2 uv, vec4 texelSize, float lod ) {
		uv = uv * texelSize.zw + 0.5;
		vec2 iuv = floor( uv );
		vec2 fuv = fract( uv );
		float g0x = g0( fuv.x );
		float g1x = g1( fuv.x );
		float h0x = h0( fuv.x );
		float h1x = h1( fuv.x );
		float h0y = h0( fuv.y );
		float h1y = h1( fuv.y );
		vec2 p0 = ( vec2( iuv.x + h0x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p1 = ( vec2( iuv.x + h1x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p2 = ( vec2( iuv.x + h0x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		vec2 p3 = ( vec2( iuv.x + h1x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		return g0( fuv.y ) * ( g0x * textureLod( tex, p0, lod ) + g1x * textureLod( tex, p1, lod ) ) +
			g1( fuv.y ) * ( g0x * textureLod( tex, p2, lod ) + g1x * textureLod( tex, p3, lod ) );
	}
	vec4 textureBicubic( sampler2D sampler, vec2 uv, float lod ) {
		vec2 fLodSize = vec2( textureSize( sampler, int( lod ) ) );
		vec2 cLodSize = vec2( textureSize( sampler, int( lod + 1.0 ) ) );
		vec2 fLodSizeInv = 1.0 / fLodSize;
		vec2 cLodSizeInv = 1.0 / cLodSize;
		vec4 fSample = bicubic( sampler, uv, vec4( fLodSizeInv, fLodSize ), floor( lod ) );
		vec4 cSample = bicubic( sampler, uv, vec4( cLodSizeInv, cLodSize ), ceil( lod ) );
		return mix( fSample, cSample, fract( lod ) );
	}
	vec3 getVolumeTransmissionRay( const in vec3 n, const in vec3 v, const in float thickness, const in float ior, const in mat4 modelMatrix ) {
		vec3 refractionVector = refract( - v, normalize( n ), 1.0 / ior );
		vec3 modelScale;
		modelScale.x = length( vec3( modelMatrix[ 0 ].xyz ) );
		modelScale.y = length( vec3( modelMatrix[ 1 ].xyz ) );
		modelScale.z = length( vec3( modelMatrix[ 2 ].xyz ) );
		return normalize( refractionVector ) * thickness * modelScale;
	}
	float applyIorToRoughness( const in float roughness, const in float ior ) {
		return roughness * clamp( ior * 2.0 - 2.0, 0.0, 1.0 );
	}
	vec4 getTransmissionSample( const in vec2 fragCoord, const in float roughness, const in float ior ) {
		float lod = log2( transmissionSamplerSize.x ) * applyIorToRoughness( roughness, ior );
		return textureBicubic( transmissionSamplerMap, fragCoord.xy, lod );
	}
	vec3 volumeAttenuation( const in float transmissionDistance, const in vec3 attenuationColor, const in float attenuationDistance ) {
		if ( isinf( attenuationDistance ) ) {
			return vec3( 1.0 );
		} else {
			vec3 attenuationCoefficient = -log( attenuationColor ) / attenuationDistance;
			vec3 transmittance = exp( - attenuationCoefficient * transmissionDistance );			return transmittance;
		}
	}
	vec4 getIBLVolumeRefraction( const in vec3 n, const in vec3 v, const in float roughness, const in vec3 diffuseColor,
		const in vec3 specularColor, const in float specularF90, const in vec3 position, const in mat4 modelMatrix,
		const in mat4 viewMatrix, const in mat4 projMatrix, const in float dispersion, const in float ior, const in float thickness,
		const in vec3 attenuationColor, const in float attenuationDistance ) {
		vec4 transmittedLight;
		vec3 transmittance;
		#ifdef USE_DISPERSION
			float halfSpread = ( ior - 1.0 ) * 0.025 * dispersion;
			vec3 iors = vec3( ior - halfSpread, ior, ior + halfSpread );
			for ( int i = 0; i < 3; i ++ ) {
				vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, iors[ i ], modelMatrix );
				vec3 refractedRayExit = position + transmissionRay;
		
				vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
				vec2 refractionCoords = ndcPos.xy / ndcPos.w;
				refractionCoords += 1.0;
				refractionCoords /= 2.0;
		
				vec4 transmissionSample = getTransmissionSample( refractionCoords, roughness, iors[ i ] );
				transmittedLight[ i ] = transmissionSample[ i ];
				transmittedLight.a += transmissionSample.a;
				transmittance[ i ] = diffuseColor[ i ] * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance )[ i ];
			}
			transmittedLight.a /= 3.0;
		
		#else
		
			vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, ior, modelMatrix );
			vec3 refractedRayExit = position + transmissionRay;
			vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
			vec2 refractionCoords = ndcPos.xy / ndcPos.w;
			refractionCoords += 1.0;
			refractionCoords /= 2.0;
			transmittedLight = getTransmissionSample( refractionCoords, roughness, ior );
			transmittance = diffuseColor * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance );
		
		#endif
		vec3 attenuatedColor = transmittance * transmittedLight.rgb;
		vec3 F = EnvironmentBRDF( n, v, specularColor, specularF90, roughness );
		float transmittanceFactor = ( transmittance.r + transmittance.g + transmittance.b ) / 3.0;
		return vec4( ( 1.0 - F ) * attenuatedColor, 1.0 - ( 1.0 - transmittedLight.a ) * transmittanceFactor );
	}
#endif`,_d=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_SPECULARMAP
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,vd=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	uniform mat3 mapTransform;
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	uniform mat3 alphaMapTransform;
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	uniform mat3 lightMapTransform;
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	uniform mat3 aoMapTransform;
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	uniform mat3 bumpMapTransform;
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	uniform mat3 normalMapTransform;
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_DISPLACEMENTMAP
	uniform mat3 displacementMapTransform;
	varying vec2 vDisplacementMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	uniform mat3 emissiveMapTransform;
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	uniform mat3 metalnessMapTransform;
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	uniform mat3 roughnessMapTransform;
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	uniform mat3 anisotropyMapTransform;
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	uniform mat3 clearcoatMapTransform;
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform mat3 clearcoatNormalMapTransform;
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform mat3 clearcoatRoughnessMapTransform;
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	uniform mat3 sheenColorMapTransform;
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	uniform mat3 sheenRoughnessMapTransform;
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	uniform mat3 iridescenceMapTransform;
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform mat3 iridescenceThicknessMapTransform;
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SPECULARMAP
	uniform mat3 specularMapTransform;
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	uniform mat3 specularColorMapTransform;
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	uniform mat3 specularIntensityMapTransform;
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,xd=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	vUv = vec3( uv, 1 ).xy;
#endif
#ifdef USE_MAP
	vMapUv = ( mapTransform * vec3( MAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ALPHAMAP
	vAlphaMapUv = ( alphaMapTransform * vec3( ALPHAMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_LIGHTMAP
	vLightMapUv = ( lightMapTransform * vec3( LIGHTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_AOMAP
	vAoMapUv = ( aoMapTransform * vec3( AOMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_BUMPMAP
	vBumpMapUv = ( bumpMapTransform * vec3( BUMPMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_NORMALMAP
	vNormalMapUv = ( normalMapTransform * vec3( NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_DISPLACEMENTMAP
	vDisplacementMapUv = ( displacementMapTransform * vec3( DISPLACEMENTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_EMISSIVEMAP
	vEmissiveMapUv = ( emissiveMapTransform * vec3( EMISSIVEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_METALNESSMAP
	vMetalnessMapUv = ( metalnessMapTransform * vec3( METALNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ROUGHNESSMAP
	vRoughnessMapUv = ( roughnessMapTransform * vec3( ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ANISOTROPYMAP
	vAnisotropyMapUv = ( anisotropyMapTransform * vec3( ANISOTROPYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOATMAP
	vClearcoatMapUv = ( clearcoatMapTransform * vec3( CLEARCOATMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	vClearcoatNormalMapUv = ( clearcoatNormalMapTransform * vec3( CLEARCOAT_NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	vClearcoatRoughnessMapUv = ( clearcoatRoughnessMapTransform * vec3( CLEARCOAT_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCEMAP
	vIridescenceMapUv = ( iridescenceMapTransform * vec3( IRIDESCENCEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	vIridescenceThicknessMapUv = ( iridescenceThicknessMapTransform * vec3( IRIDESCENCE_THICKNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_COLORMAP
	vSheenColorMapUv = ( sheenColorMapTransform * vec3( SHEEN_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	vSheenRoughnessMapUv = ( sheenRoughnessMapTransform * vec3( SHEEN_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULARMAP
	vSpecularMapUv = ( specularMapTransform * vec3( SPECULARMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_COLORMAP
	vSpecularColorMapUv = ( specularColorMapTransform * vec3( SPECULAR_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	vSpecularIntensityMapUv = ( specularIntensityMapTransform * vec3( SPECULAR_INTENSITYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_TRANSMISSIONMAP
	vTransmissionMapUv = ( transmissionMapTransform * vec3( TRANSMISSIONMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_THICKNESSMAP
	vThicknessMapUv = ( thicknessMapTransform * vec3( THICKNESSMAP_UV, 1 ) ).xy;
#endif`,Md=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const yd=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,Sd=`uniform sampler2D t2D;
uniform float backgroundIntensity;
varying vec2 vUv;
void main() {
	vec4 texColor = texture2D( t2D, vUv );
	#ifdef DECODE_VIDEO_TEXTURE
		texColor = vec4( mix( pow( texColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), texColor.rgb * 0.0773993808, vec3( lessThanEqual( texColor.rgb, vec3( 0.04045 ) ) ) ), texColor.w );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Ed=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,bd=`#ifdef ENVMAP_TYPE_CUBE
	uniform samplerCube envMap;
#elif defined( ENVMAP_TYPE_CUBE_UV )
	uniform sampler2D envMap;
#endif
uniform float flipEnvMap;
uniform float backgroundBlurriness;
uniform float backgroundIntensity;
uniform mat3 backgroundRotation;
varying vec3 vWorldDirection;
#include <cube_uv_reflection_fragment>
void main() {
	#ifdef ENVMAP_TYPE_CUBE
		vec4 texColor = textureCube( envMap, backgroundRotation * vec3( flipEnvMap * vWorldDirection.x, vWorldDirection.yz ) );
	#elif defined( ENVMAP_TYPE_CUBE_UV )
		vec4 texColor = textureCubeUV( envMap, backgroundRotation * vWorldDirection, backgroundBlurriness );
	#else
		vec4 texColor = vec4( 0.0, 0.0, 0.0, 1.0 );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Td=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Ad=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,wd=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
varying vec2 vHighPrecisionZW;
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vHighPrecisionZW = gl_Position.zw;
}`,Cd=`#if DEPTH_PACKING == 3200
	uniform float opacity;
#endif
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
varying vec2 vHighPrecisionZW;
void main() {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#if DEPTH_PACKING == 3200
		diffuseColor.a = opacity;
	#endif
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <logdepthbuf_fragment>
	float fragCoordZ = 0.5 * vHighPrecisionZW[0] / vHighPrecisionZW[1] + 0.5;
	#if DEPTH_PACKING == 3200
		gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );
	#elif DEPTH_PACKING == 3201
		gl_FragColor = packDepthToRGBA( fragCoordZ );
	#elif DEPTH_PACKING == 3202
		gl_FragColor = vec4( packDepthToRGB( fragCoordZ ), 1.0 );
	#elif DEPTH_PACKING == 3203
		gl_FragColor = vec4( packDepthToRG( fragCoordZ ), 0.0, 1.0 );
	#endif
}`,Rd=`#define DISTANCE
varying vec3 vWorldPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <worldpos_vertex>
	#include <clipping_planes_vertex>
	vWorldPosition = worldPosition.xyz;
}`,Pd=`#define DISTANCE
uniform vec3 referencePosition;
uniform float nearDistance;
uniform float farDistance;
varying vec3 vWorldPosition;
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <clipping_planes_pars_fragment>
void main () {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	float dist = length( vWorldPosition - referencePosition );
	dist = ( dist - nearDistance ) / ( farDistance - nearDistance );
	dist = saturate( dist );
	gl_FragColor = packDepthToRGBA( dist );
}`,Dd=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,Ld=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Id=`uniform float scale;
attribute float lineDistance;
varying float vLineDistance;
#include <common>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	vLineDistance = scale * lineDistance;
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,Ud=`uniform vec3 diffuse;
uniform float opacity;
uniform float dashSize;
uniform float totalSize;
varying float vLineDistance;
#include <common>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	if ( mod( vLineDistance, totalSize ) > dashSize ) {
		discard;
	}
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,Nd=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#if defined ( USE_ENVMAP ) || defined ( USE_SKINNING )
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinbase_vertex>
		#include <skinnormal_vertex>
		#include <defaultnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <fog_vertex>
}`,Fd=`uniform vec3 diffuse;
uniform float opacity;
#ifndef FLAT_SHADED
	varying vec3 vNormal;
#endif
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		reflectedLight.indirectDiffuse += lightMapTexel.rgb * lightMapIntensity * RECIPROCAL_PI;
	#else
		reflectedLight.indirectDiffuse += vec3( 1.0 );
	#endif
	#include <aomap_fragment>
	reflectedLight.indirectDiffuse *= diffuseColor.rgb;
	vec3 outgoingLight = reflectedLight.indirectDiffuse;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Od=`#define LAMBERT
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,Bd=`#define LAMBERT
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_lambert_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_lambert_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,zd=`#define MATCAP
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <displacementmap_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
	vViewPosition = - mvPosition.xyz;
}`,kd=`#define MATCAP
uniform vec3 diffuse;
uniform float opacity;
uniform sampler2D matcap;
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	vec3 viewDir = normalize( vViewPosition );
	vec3 x = normalize( vec3( viewDir.z, 0.0, - viewDir.x ) );
	vec3 y = cross( viewDir, x );
	vec2 uv = vec2( dot( x, normal ), dot( y, normal ) ) * 0.495 + 0.5;
	#ifdef USE_MATCAP
		vec4 matcapColor = texture2D( matcap, uv );
	#else
		vec4 matcapColor = vec4( vec3( mix( 0.2, 0.8, uv.y ) ), 1.0 );
	#endif
	vec3 outgoingLight = diffuseColor.rgb * matcapColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Gd=`#define NORMAL
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	vViewPosition = - mvPosition.xyz;
#endif
}`,Hd=`#define NORMAL
uniform float opacity;
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <packing>
#include <uv_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( 0.0, 0.0, 0.0, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	gl_FragColor = vec4( packNormalToRGB( normal ), diffuseColor.a );
	#ifdef OPAQUE
		gl_FragColor.a = 1.0;
	#endif
}`,Vd=`#define PHONG
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,Wd=`#define PHONG
uniform vec3 diffuse;
uniform vec3 emissive;
uniform vec3 specular;
uniform float shininess;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_phong_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_phong_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + reflectedLight.directSpecular + reflectedLight.indirectSpecular + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Xd=`#define STANDARD
varying vec3 vViewPosition;
#ifdef USE_TRANSMISSION
	varying vec3 vWorldPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
#ifdef USE_TRANSMISSION
	vWorldPosition = worldPosition.xyz;
#endif
}`,qd=`#define STANDARD
#ifdef PHYSICAL
	#define IOR
	#define USE_SPECULAR
#endif
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float roughness;
uniform float metalness;
uniform float opacity;
#ifdef IOR
	uniform float ior;
#endif
#ifdef USE_SPECULAR
	uniform float specularIntensity;
	uniform vec3 specularColor;
	#ifdef USE_SPECULAR_COLORMAP
		uniform sampler2D specularColorMap;
	#endif
	#ifdef USE_SPECULAR_INTENSITYMAP
		uniform sampler2D specularIntensityMap;
	#endif
#endif
#ifdef USE_CLEARCOAT
	uniform float clearcoat;
	uniform float clearcoatRoughness;
#endif
#ifdef USE_DISPERSION
	uniform float dispersion;
#endif
#ifdef USE_IRIDESCENCE
	uniform float iridescence;
	uniform float iridescenceIOR;
	uniform float iridescenceThicknessMinimum;
	uniform float iridescenceThicknessMaximum;
#endif
#ifdef USE_SHEEN
	uniform vec3 sheenColor;
	uniform float sheenRoughness;
	#ifdef USE_SHEEN_COLORMAP
		uniform sampler2D sheenColorMap;
	#endif
	#ifdef USE_SHEEN_ROUGHNESSMAP
		uniform sampler2D sheenRoughnessMap;
	#endif
#endif
#ifdef USE_ANISOTROPY
	uniform vec2 anisotropyVector;
	#ifdef USE_ANISOTROPYMAP
		uniform sampler2D anisotropyMap;
	#endif
#endif
varying vec3 vViewPosition;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <iridescence_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_physical_pars_fragment>
#include <transmission_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <clearcoat_pars_fragment>
#include <iridescence_pars_fragment>
#include <roughnessmap_pars_fragment>
#include <metalnessmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <roughnessmap_fragment>
	#include <metalnessmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <clearcoat_normal_fragment_begin>
	#include <clearcoat_normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_physical_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 totalDiffuse = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse;
	vec3 totalSpecular = reflectedLight.directSpecular + reflectedLight.indirectSpecular;
	#include <transmission_fragment>
	vec3 outgoingLight = totalDiffuse + totalSpecular + totalEmissiveRadiance;
	#ifdef USE_SHEEN
		float sheenEnergyComp = 1.0 - 0.157 * max3( material.sheenColor );
		outgoingLight = outgoingLight * sheenEnergyComp + sheenSpecularDirect + sheenSpecularIndirect;
	#endif
	#ifdef USE_CLEARCOAT
		float dotNVcc = saturate( dot( geometryClearcoatNormal, geometryViewDir ) );
		vec3 Fcc = F_Schlick( material.clearcoatF0, material.clearcoatF90, dotNVcc );
		outgoingLight = outgoingLight * ( 1.0 - material.clearcoat * Fcc ) + ( clearcoatSpecularDirect + clearcoatSpecularIndirect ) * material.clearcoat;
	#endif
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Yd=`#define TOON
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,$d=`#define TOON
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <gradientmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_toon_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_toon_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Kd=`uniform float size;
uniform float scale;
#include <common>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
#ifdef USE_POINTS_UV
	varying vec2 vUv;
	uniform mat3 uvTransform;
#endif
void main() {
	#ifdef USE_POINTS_UV
		vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	#endif
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	gl_PointSize = size;
	#ifdef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) gl_PointSize *= ( scale / - mvPosition.z );
	#endif
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <fog_vertex>
}`,jd=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <color_pars_fragment>
#include <map_particle_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_particle_fragment>
	#include <color_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,Zd=`#include <common>
#include <batching_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <shadowmap_pars_vertex>
void main() {
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,Jd=`uniform vec3 color;
uniform float opacity;
#include <common>
#include <packing>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <logdepthbuf_pars_fragment>
#include <shadowmap_pars_fragment>
#include <shadowmask_pars_fragment>
void main() {
	#include <logdepthbuf_fragment>
	gl_FragColor = vec4( color, opacity * ( 1.0 - getShadowMask() ) );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,Qd=`uniform float rotation;
uniform vec2 center;
#include <common>
#include <uv_pars_vertex>
#include <fog_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	vec4 mvPosition = modelViewMatrix[ 3 ];
	vec2 scale = vec2( length( modelMatrix[ 0 ].xyz ), length( modelMatrix[ 1 ].xyz ) );
	#ifndef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) scale *= - mvPosition.z;
	#endif
	vec2 alignedPosition = ( position.xy - ( center - vec2( 0.5 ) ) ) * scale;
	vec2 rotatedPosition;
	rotatedPosition.x = cos( rotation ) * alignedPosition.x - sin( rotation ) * alignedPosition.y;
	rotatedPosition.y = sin( rotation ) * alignedPosition.x + cos( rotation ) * alignedPosition.y;
	mvPosition.xy += rotatedPosition;
	gl_Position = projectionMatrix * mvPosition;
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,tf=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,It={alphahash_fragment:Sh,alphahash_pars_fragment:Eh,alphamap_fragment:bh,alphamap_pars_fragment:Th,alphatest_fragment:Ah,alphatest_pars_fragment:wh,aomap_fragment:Ch,aomap_pars_fragment:Rh,batching_pars_vertex:Ph,batching_vertex:Dh,begin_vertex:Lh,beginnormal_vertex:Ih,bsdfs:Uh,iridescence_fragment:Nh,bumpmap_pars_fragment:Fh,clipping_planes_fragment:Oh,clipping_planes_pars_fragment:Bh,clipping_planes_pars_vertex:zh,clipping_planes_vertex:kh,color_fragment:Gh,color_pars_fragment:Hh,color_pars_vertex:Vh,color_vertex:Wh,common:Xh,cube_uv_reflection_fragment:qh,defaultnormal_vertex:Yh,displacementmap_pars_vertex:$h,displacementmap_vertex:Kh,emissivemap_fragment:jh,emissivemap_pars_fragment:Zh,colorspace_fragment:Jh,colorspace_pars_fragment:Qh,envmap_fragment:tu,envmap_common_pars_fragment:eu,envmap_pars_fragment:nu,envmap_pars_vertex:iu,envmap_physical_pars_fragment:pu,envmap_vertex:su,fog_vertex:au,fog_pars_vertex:ru,fog_fragment:ou,fog_pars_fragment:lu,gradientmap_pars_fragment:cu,lightmap_pars_fragment:hu,lights_lambert_fragment:uu,lights_lambert_pars_fragment:du,lights_pars_begin:fu,lights_toon_fragment:mu,lights_toon_pars_fragment:gu,lights_phong_fragment:_u,lights_phong_pars_fragment:vu,lights_physical_fragment:xu,lights_physical_pars_fragment:Mu,lights_fragment_begin:yu,lights_fragment_maps:Su,lights_fragment_end:Eu,logdepthbuf_fragment:bu,logdepthbuf_pars_fragment:Tu,logdepthbuf_pars_vertex:Au,logdepthbuf_vertex:wu,map_fragment:Cu,map_pars_fragment:Ru,map_particle_fragment:Pu,map_particle_pars_fragment:Du,metalnessmap_fragment:Lu,metalnessmap_pars_fragment:Iu,morphinstance_vertex:Uu,morphcolor_vertex:Nu,morphnormal_vertex:Fu,morphtarget_pars_vertex:Ou,morphtarget_vertex:Bu,normal_fragment_begin:zu,normal_fragment_maps:ku,normal_pars_fragment:Gu,normal_pars_vertex:Hu,normal_vertex:Vu,normalmap_pars_fragment:Wu,clearcoat_normal_fragment_begin:Xu,clearcoat_normal_fragment_maps:qu,clearcoat_pars_fragment:Yu,iridescence_pars_fragment:$u,opaque_fragment:Ku,packing:ju,premultiplied_alpha_fragment:Zu,project_vertex:Ju,dithering_fragment:Qu,dithering_pars_fragment:td,roughnessmap_fragment:ed,roughnessmap_pars_fragment:nd,shadowmap_pars_fragment:id,shadowmap_pars_vertex:sd,shadowmap_vertex:ad,shadowmask_pars_fragment:rd,skinbase_vertex:od,skinning_pars_vertex:ld,skinning_vertex:cd,skinnormal_vertex:hd,specularmap_fragment:ud,specularmap_pars_fragment:dd,tonemapping_fragment:fd,tonemapping_pars_fragment:pd,transmission_fragment:md,transmission_pars_fragment:gd,uv_pars_fragment:_d,uv_pars_vertex:vd,uv_vertex:xd,worldpos_vertex:Md,background_vert:yd,background_frag:Sd,backgroundCube_vert:Ed,backgroundCube_frag:bd,cube_vert:Td,cube_frag:Ad,depth_vert:wd,depth_frag:Cd,distanceRGBA_vert:Rd,distanceRGBA_frag:Pd,equirect_vert:Dd,equirect_frag:Ld,linedashed_vert:Id,linedashed_frag:Ud,meshbasic_vert:Nd,meshbasic_frag:Fd,meshlambert_vert:Od,meshlambert_frag:Bd,meshmatcap_vert:zd,meshmatcap_frag:kd,meshnormal_vert:Gd,meshnormal_frag:Hd,meshphong_vert:Vd,meshphong_frag:Wd,meshphysical_vert:Xd,meshphysical_frag:qd,meshtoon_vert:Yd,meshtoon_frag:$d,points_vert:Kd,points_frag:jd,shadow_vert:Zd,shadow_frag:Jd,sprite_vert:Qd,sprite_frag:tf},nt={common:{diffuse:{value:new Bt(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new Pt},alphaMap:{value:null},alphaMapTransform:{value:new Pt},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new Pt}},envmap:{envMap:{value:null},envMapRotation:{value:new Pt},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new Pt}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new Pt}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new Pt},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new Pt},normalScale:{value:new Mt(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new Pt},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new Pt}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new Pt}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new Pt}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new Bt(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new Bt(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new Pt},alphaTest:{value:0},uvTransform:{value:new Pt}},sprite:{diffuse:{value:new Bt(16777215)},opacity:{value:1},center:{value:new Mt(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new Pt},alphaMap:{value:null},alphaMapTransform:{value:new Pt},alphaTest:{value:0}}},ln={basic:{uniforms:Te([nt.common,nt.specularmap,nt.envmap,nt.aomap,nt.lightmap,nt.fog]),vertexShader:It.meshbasic_vert,fragmentShader:It.meshbasic_frag},lambert:{uniforms:Te([nt.common,nt.specularmap,nt.envmap,nt.aomap,nt.lightmap,nt.emissivemap,nt.bumpmap,nt.normalmap,nt.displacementmap,nt.fog,nt.lights,{emissive:{value:new Bt(0)}}]),vertexShader:It.meshlambert_vert,fragmentShader:It.meshlambert_frag},phong:{uniforms:Te([nt.common,nt.specularmap,nt.envmap,nt.aomap,nt.lightmap,nt.emissivemap,nt.bumpmap,nt.normalmap,nt.displacementmap,nt.fog,nt.lights,{emissive:{value:new Bt(0)},specular:{value:new Bt(1118481)},shininess:{value:30}}]),vertexShader:It.meshphong_vert,fragmentShader:It.meshphong_frag},standard:{uniforms:Te([nt.common,nt.envmap,nt.aomap,nt.lightmap,nt.emissivemap,nt.bumpmap,nt.normalmap,nt.displacementmap,nt.roughnessmap,nt.metalnessmap,nt.fog,nt.lights,{emissive:{value:new Bt(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:It.meshphysical_vert,fragmentShader:It.meshphysical_frag},toon:{uniforms:Te([nt.common,nt.aomap,nt.lightmap,nt.emissivemap,nt.bumpmap,nt.normalmap,nt.displacementmap,nt.gradientmap,nt.fog,nt.lights,{emissive:{value:new Bt(0)}}]),vertexShader:It.meshtoon_vert,fragmentShader:It.meshtoon_frag},matcap:{uniforms:Te([nt.common,nt.bumpmap,nt.normalmap,nt.displacementmap,nt.fog,{matcap:{value:null}}]),vertexShader:It.meshmatcap_vert,fragmentShader:It.meshmatcap_frag},points:{uniforms:Te([nt.points,nt.fog]),vertexShader:It.points_vert,fragmentShader:It.points_frag},dashed:{uniforms:Te([nt.common,nt.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:It.linedashed_vert,fragmentShader:It.linedashed_frag},depth:{uniforms:Te([nt.common,nt.displacementmap]),vertexShader:It.depth_vert,fragmentShader:It.depth_frag},normal:{uniforms:Te([nt.common,nt.bumpmap,nt.normalmap,nt.displacementmap,{opacity:{value:1}}]),vertexShader:It.meshnormal_vert,fragmentShader:It.meshnormal_frag},sprite:{uniforms:Te([nt.sprite,nt.fog]),vertexShader:It.sprite_vert,fragmentShader:It.sprite_frag},background:{uniforms:{uvTransform:{value:new Pt},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:It.background_vert,fragmentShader:It.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new Pt}},vertexShader:It.backgroundCube_vert,fragmentShader:It.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:It.cube_vert,fragmentShader:It.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:It.equirect_vert,fragmentShader:It.equirect_frag},distanceRGBA:{uniforms:Te([nt.common,nt.displacementmap,{referencePosition:{value:new w},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:It.distanceRGBA_vert,fragmentShader:It.distanceRGBA_frag},shadow:{uniforms:Te([nt.lights,nt.fog,{color:{value:new Bt(0)},opacity:{value:1}}]),vertexShader:It.shadow_vert,fragmentShader:It.shadow_frag}};ln.physical={uniforms:Te([ln.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new Pt},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new Pt},clearcoatNormalScale:{value:new Mt(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new Pt},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new Pt},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new Pt},sheen:{value:0},sheenColor:{value:new Bt(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new Pt},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new Pt},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new Pt},transmissionSamplerSize:{value:new Mt},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new Pt},attenuationDistance:{value:0},attenuationColor:{value:new Bt(0)},specularColor:{value:new Bt(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new Pt},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new Pt},anisotropyVector:{value:new Mt},anisotropyMap:{value:null},anisotropyMapTransform:{value:new Pt}}]),vertexShader:It.meshphysical_vert,fragmentShader:It.meshphysical_frag};const Ls={r:0,b:0,g:0},qn=new un,ef=new Jt;function nf(i,t,e,n,s,a,r){const o=new Bt(0);let l=a===!0?0:1,c,u,f=null,p=0,d=null;function g(T){let b=T.isScene===!0?T.background:null;return b&&b.isTexture&&(b=(T.backgroundBlurriness>0?e:t).get(b)),b}function _(T){let b=!1;const S=g(T);S===null?h(o,l):S&&S.isColor&&(h(S,1),b=!0);const O=i.xr.getEnvironmentBlendMode();O==="additive"?n.buffers.color.setClear(0,0,0,1,r):O==="alpha-blend"&&n.buffers.color.setClear(0,0,0,0,r),(i.autoClear||b)&&(n.buffers.depth.setTest(!0),n.buffers.depth.setMask(!0),n.buffers.color.setMask(!0),i.clear(i.autoClearColor,i.autoClearDepth,i.autoClearStencil))}function m(T,b){const S=g(b);S&&(S.isCubeTexture||S.mapping===ia)?(u===void 0&&(u=new ae(new hs(1,1,1),new sn({name:"BackgroundCubeMaterial",uniforms:Gi(ln.backgroundCube.uniforms),vertexShader:ln.backgroundCube.vertexShader,fragmentShader:ln.backgroundCube.fragmentShader,side:Ee,depthTest:!1,depthWrite:!1,fog:!1})),u.geometry.deleteAttribute("normal"),u.geometry.deleteAttribute("uv"),u.onBeforeRender=function(O,C,R){this.matrixWorld.copyPosition(R.matrixWorld)},Object.defineProperty(u.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),s.update(u)),qn.copy(b.backgroundRotation),qn.x*=-1,qn.y*=-1,qn.z*=-1,S.isCubeTexture&&S.isRenderTargetTexture===!1&&(qn.y*=-1,qn.z*=-1),u.material.uniforms.envMap.value=S,u.material.uniforms.flipEnvMap.value=S.isCubeTexture&&S.isRenderTargetTexture===!1?-1:1,u.material.uniforms.backgroundBlurriness.value=b.backgroundBlurriness,u.material.uniforms.backgroundIntensity.value=b.backgroundIntensity,u.material.uniforms.backgroundRotation.value.setFromMatrix4(ef.makeRotationFromEuler(qn)),u.material.toneMapped=Gt.getTransfer(S.colorSpace)!==Yt,(f!==S||p!==S.version||d!==i.toneMapping)&&(u.material.needsUpdate=!0,f=S,p=S.version,d=i.toneMapping),u.layers.enableAll(),T.unshift(u,u.geometry,u.material,0,0,null)):S&&S.isTexture&&(c===void 0&&(c=new ae(new us(2,2),new sn({name:"BackgroundMaterial",uniforms:Gi(ln.background.uniforms),vertexShader:ln.background.vertexShader,fragmentShader:ln.background.fragmentShader,side:zn,depthTest:!1,depthWrite:!1,fog:!1})),c.geometry.deleteAttribute("normal"),Object.defineProperty(c.material,"map",{get:function(){return this.uniforms.t2D.value}}),s.update(c)),c.material.uniforms.t2D.value=S,c.material.uniforms.backgroundIntensity.value=b.backgroundIntensity,c.material.toneMapped=Gt.getTransfer(S.colorSpace)!==Yt,S.matrixAutoUpdate===!0&&S.updateMatrix(),c.material.uniforms.uvTransform.value.copy(S.matrix),(f!==S||p!==S.version||d!==i.toneMapping)&&(c.material.needsUpdate=!0,f=S,p=S.version,d=i.toneMapping),c.layers.enableAll(),T.unshift(c,c.geometry,c.material,0,0,null))}function h(T,b){T.getRGB(Ls,kl(i)),n.buffers.color.setClear(Ls.r,Ls.g,Ls.b,b,r)}return{getClearColor:function(){return o},setClearColor:function(T,b=1){o.set(T),l=b,h(o,l)},getClearAlpha:function(){return l},setClearAlpha:function(T){l=T,h(o,l)},render:_,addToRenderList:m}}function sf(i,t){const e=i.getParameter(i.MAX_VERTEX_ATTRIBS),n={},s=p(null);let a=s,r=!1;function o(x,A,F,N,k){let X=!1;const V=f(N,F,A);a!==V&&(a=V,c(a.object)),X=d(x,N,F,k),X&&g(x,N,F,k),k!==null&&t.update(k,i.ELEMENT_ARRAY_BUFFER),(X||r)&&(r=!1,S(x,A,F,N),k!==null&&i.bindBuffer(i.ELEMENT_ARRAY_BUFFER,t.get(k).buffer))}function l(){return i.createVertexArray()}function c(x){return i.bindVertexArray(x)}function u(x){return i.deleteVertexArray(x)}function f(x,A,F){const N=F.wireframe===!0;let k=n[x.id];k===void 0&&(k={},n[x.id]=k);let X=k[A.id];X===void 0&&(X={},k[A.id]=X);let V=X[N];return V===void 0&&(V=p(l()),X[N]=V),V}function p(x){const A=[],F=[],N=[];for(let k=0;k<e;k++)A[k]=0,F[k]=0,N[k]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:A,enabledAttributes:F,attributeDivisors:N,object:x,attributes:{},index:null}}function d(x,A,F,N){const k=a.attributes,X=A.attributes;let V=0;const Z=F.getAttributes();for(const H in Z)if(Z[H].location>=0){const lt=k[H];let xt=X[H];if(xt===void 0&&(H==="instanceMatrix"&&x.instanceMatrix&&(xt=x.instanceMatrix),H==="instanceColor"&&x.instanceColor&&(xt=x.instanceColor)),lt===void 0||lt.attribute!==xt||xt&&lt.data!==xt.data)return!0;V++}return a.attributesNum!==V||a.index!==N}function g(x,A,F,N){const k={},X=A.attributes;let V=0;const Z=F.getAttributes();for(const H in Z)if(Z[H].location>=0){let lt=X[H];lt===void 0&&(H==="instanceMatrix"&&x.instanceMatrix&&(lt=x.instanceMatrix),H==="instanceColor"&&x.instanceColor&&(lt=x.instanceColor));const xt={};xt.attribute=lt,lt&&lt.data&&(xt.data=lt.data),k[H]=xt,V++}a.attributes=k,a.attributesNum=V,a.index=N}function _(){const x=a.newAttributes;for(let A=0,F=x.length;A<F;A++)x[A]=0}function m(x){h(x,0)}function h(x,A){const F=a.newAttributes,N=a.enabledAttributes,k=a.attributeDivisors;F[x]=1,N[x]===0&&(i.enableVertexAttribArray(x),N[x]=1),k[x]!==A&&(i.vertexAttribDivisor(x,A),k[x]=A)}function T(){const x=a.newAttributes,A=a.enabledAttributes;for(let F=0,N=A.length;F<N;F++)A[F]!==x[F]&&(i.disableVertexAttribArray(F),A[F]=0)}function b(x,A,F,N,k,X,V){V===!0?i.vertexAttribIPointer(x,A,F,k,X):i.vertexAttribPointer(x,A,F,N,k,X)}function S(x,A,F,N){_();const k=N.attributes,X=F.getAttributes(),V=A.defaultAttributeValues;for(const Z in X){const H=X[Z];if(H.location>=0){let tt=k[Z];if(tt===void 0&&(Z==="instanceMatrix"&&x.instanceMatrix&&(tt=x.instanceMatrix),Z==="instanceColor"&&x.instanceColor&&(tt=x.instanceColor)),tt!==void 0){const lt=tt.normalized,xt=tt.itemSize,Dt=t.get(tt);if(Dt===void 0)continue;const Zt=Dt.buffer,Y=Dt.type,et=Dt.bytesPerElement,gt=Y===i.INT||Y===i.UNSIGNED_INT||tt.gpuType===Nr;if(tt.isInterleavedBufferAttribute){const st=tt.data,bt=st.stride,wt=tt.offset;if(st.isInstancedInterleavedBuffer){for(let Ut=0;Ut<H.locationSize;Ut++)h(H.location+Ut,st.meshPerAttribute);x.isInstancedMesh!==!0&&N._maxInstanceCount===void 0&&(N._maxInstanceCount=st.meshPerAttribute*st.count)}else for(let Ut=0;Ut<H.locationSize;Ut++)m(H.location+Ut);i.bindBuffer(i.ARRAY_BUFFER,Zt);for(let Ut=0;Ut<H.locationSize;Ut++)b(H.location+Ut,xt/H.locationSize,Y,lt,bt*et,(wt+xt/H.locationSize*Ut)*et,gt)}else{if(tt.isInstancedBufferAttribute){for(let st=0;st<H.locationSize;st++)h(H.location+st,tt.meshPerAttribute);x.isInstancedMesh!==!0&&N._maxInstanceCount===void 0&&(N._maxInstanceCount=tt.meshPerAttribute*tt.count)}else for(let st=0;st<H.locationSize;st++)m(H.location+st);i.bindBuffer(i.ARRAY_BUFFER,Zt);for(let st=0;st<H.locationSize;st++)b(H.location+st,xt/H.locationSize,Y,lt,xt*et,xt/H.locationSize*st*et,gt)}}else if(V!==void 0){const lt=V[Z];if(lt!==void 0)switch(lt.length){case 2:i.vertexAttrib2fv(H.location,lt);break;case 3:i.vertexAttrib3fv(H.location,lt);break;case 4:i.vertexAttrib4fv(H.location,lt);break;default:i.vertexAttrib1fv(H.location,lt)}}}}T()}function O(){U();for(const x in n){const A=n[x];for(const F in A){const N=A[F];for(const k in N)u(N[k].object),delete N[k];delete A[F]}delete n[x]}}function C(x){if(n[x.id]===void 0)return;const A=n[x.id];for(const F in A){const N=A[F];for(const k in N)u(N[k].object),delete N[k];delete A[F]}delete n[x.id]}function R(x){for(const A in n){const F=n[A];if(F[x.id]===void 0)continue;const N=F[x.id];for(const k in N)u(N[k].object),delete N[k];delete F[x.id]}}function U(){y(),r=!0,a!==s&&(a=s,c(a.object))}function y(){s.geometry=null,s.program=null,s.wireframe=!1}return{setup:o,reset:U,resetDefaultState:y,dispose:O,releaseStatesOfGeometry:C,releaseStatesOfProgram:R,initAttributes:_,enableAttribute:m,disableUnusedAttributes:T}}function af(i,t,e){let n;function s(c){n=c}function a(c,u){i.drawArrays(n,c,u),e.update(u,n,1)}function r(c,u,f){f!==0&&(i.drawArraysInstanced(n,c,u,f),e.update(u,n,f))}function o(c,u,f){if(f===0)return;t.get("WEBGL_multi_draw").multiDrawArraysWEBGL(n,c,0,u,0,f);let d=0;for(let g=0;g<f;g++)d+=u[g];e.update(d,n,1)}function l(c,u,f,p){if(f===0)return;const d=t.get("WEBGL_multi_draw");if(d===null)for(let g=0;g<c.length;g++)r(c[g],u[g],p[g]);else{d.multiDrawArraysInstancedWEBGL(n,c,0,u,0,p,0,f);let g=0;for(let _=0;_<f;_++)g+=u[_]*p[_];e.update(g,n,1)}}this.setMode=s,this.render=a,this.renderInstances=r,this.renderMultiDraw=o,this.renderMultiDrawInstances=l}function rf(i,t,e,n){let s;function a(){if(s!==void 0)return s;if(t.has("EXT_texture_filter_anisotropic")===!0){const R=t.get("EXT_texture_filter_anisotropic");s=i.getParameter(R.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else s=0;return s}function r(R){return!(R!==en&&n.convert(R)!==i.getParameter(i.IMPLEMENTATION_COLOR_READ_FORMAT))}function o(R){const U=R===rs&&(t.has("EXT_color_buffer_half_float")||t.has("EXT_color_buffer_float"));return!(R!==bn&&n.convert(R)!==i.getParameter(i.IMPLEMENTATION_COLOR_READ_TYPE)&&R!==yn&&!U)}function l(R){if(R==="highp"){if(i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.HIGH_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.HIGH_FLOAT).precision>0)return"highp";R="mediump"}return R==="mediump"&&i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.MEDIUM_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let c=e.precision!==void 0?e.precision:"highp";const u=l(c);u!==c&&(console.warn("THREE.WebGLRenderer:",c,"not supported, using",u,"instead."),c=u);const f=e.logarithmicDepthBuffer===!0,p=e.reverseDepthBuffer===!0&&t.has("EXT_clip_control"),d=i.getParameter(i.MAX_TEXTURE_IMAGE_UNITS),g=i.getParameter(i.MAX_VERTEX_TEXTURE_IMAGE_UNITS),_=i.getParameter(i.MAX_TEXTURE_SIZE),m=i.getParameter(i.MAX_CUBE_MAP_TEXTURE_SIZE),h=i.getParameter(i.MAX_VERTEX_ATTRIBS),T=i.getParameter(i.MAX_VERTEX_UNIFORM_VECTORS),b=i.getParameter(i.MAX_VARYING_VECTORS),S=i.getParameter(i.MAX_FRAGMENT_UNIFORM_VECTORS),O=g>0,C=i.getParameter(i.MAX_SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:a,getMaxPrecision:l,textureFormatReadable:r,textureTypeReadable:o,precision:c,logarithmicDepthBuffer:f,reverseDepthBuffer:p,maxTextures:d,maxVertexTextures:g,maxTextureSize:_,maxCubemapSize:m,maxAttributes:h,maxVertexUniforms:T,maxVaryings:b,maxFragmentUniforms:S,vertexTextures:O,maxSamples:C}}function of(i){const t=this;let e=null,n=0,s=!1,a=!1;const r=new Un,o=new Pt,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(f,p){const d=f.length!==0||p||n!==0||s;return s=p,n=f.length,d},this.beginShadows=function(){a=!0,u(null)},this.endShadows=function(){a=!1},this.setGlobalState=function(f,p){e=u(f,p,0)},this.setState=function(f,p,d){const g=f.clippingPlanes,_=f.clipIntersection,m=f.clipShadows,h=i.get(f);if(!s||g===null||g.length===0||a&&!m)a?u(null):c();else{const T=a?0:n,b=T*4;let S=h.clippingState||null;l.value=S,S=u(g,p,b,d);for(let O=0;O!==b;++O)S[O]=e[O];h.clippingState=S,this.numIntersection=_?this.numPlanes:0,this.numPlanes+=T}};function c(){l.value!==e&&(l.value=e,l.needsUpdate=n>0),t.numPlanes=n,t.numIntersection=0}function u(f,p,d,g){const _=f!==null?f.length:0;let m=null;if(_!==0){if(m=l.value,g!==!0||m===null){const h=d+_*4,T=p.matrixWorldInverse;o.getNormalMatrix(T),(m===null||m.length<h)&&(m=new Float32Array(h));for(let b=0,S=d;b!==_;++b,S+=4)r.copy(f[b]).applyMatrix4(T,o),r.normal.toArray(m,S),m[S+3]=r.constant}l.value=m,l.needsUpdate=!0}return t.numPlanes=_,t.numIntersection=0,m}}function lf(i){let t=new WeakMap;function e(r,o){return o===Qa?r.mapping=Oi:o===tr&&(r.mapping=Bi),r}function n(r){if(r&&r.isTexture){const o=r.mapping;if(o===Qa||o===tr)if(t.has(r)){const l=t.get(r).texture;return e(l,r.mapping)}else{const l=r.image;if(l&&l.height>0){const c=new vh(l.height);return c.fromEquirectangularTexture(i,r),t.set(r,c),r.addEventListener("dispose",s),e(c.texture,r.mapping)}else return null}}return r}function s(r){const o=r.target;o.removeEventListener("dispose",s);const l=t.get(o);l!==void 0&&(t.delete(o),l.dispose())}function a(){t=new WeakMap}return{get:n,dispose:a}}class cf extends Gl{constructor(t=-1,e=1,n=1,s=-1,a=.1,r=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=t,this.right=e,this.top=n,this.bottom=s,this.near=a,this.far=r,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.left=t.left,this.right=t.right,this.top=t.top,this.bottom=t.bottom,this.near=t.near,this.far=t.far,this.zoom=t.zoom,this.view=t.view===null?null:Object.assign({},t.view),this}setViewOffset(t,e,n,s,a,r){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=n,this.view.offsetY=s,this.view.width=a,this.view.height=r,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const t=(this.right-this.left)/(2*this.zoom),e=(this.top-this.bottom)/(2*this.zoom),n=(this.right+this.left)/2,s=(this.top+this.bottom)/2;let a=n-t,r=n+t,o=s+e,l=s-e;if(this.view!==null&&this.view.enabled){const c=(this.right-this.left)/this.view.fullWidth/this.zoom,u=(this.top-this.bottom)/this.view.fullHeight/this.zoom;a+=c*this.view.offsetX,r=a+c*this.view.width,o-=u*this.view.offsetY,l=o-u*this.view.height}this.projectionMatrix.makeOrthographic(a,r,o,l,this.near,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){const e=super.toJSON(t);return e.object.zoom=this.zoom,e.object.left=this.left,e.object.right=this.right,e.object.top=this.top,e.object.bottom=this.bottom,e.object.near=this.near,e.object.far=this.far,this.view!==null&&(e.object.view=Object.assign({},this.view)),e}}const Ri=4,Co=[.125,.215,.35,.446,.526,.582],Qn=20,Ra=new cf,Ro=new Bt;let Pa=null,Da=0,La=0,Ia=!1;const jn=(1+Math.sqrt(5))/2,yi=1/jn,Po=[new w(-jn,yi,0),new w(jn,yi,0),new w(-yi,0,jn),new w(yi,0,jn),new w(0,jn,-yi),new w(0,jn,yi),new w(-1,1,-1),new w(1,1,-1),new w(-1,1,1),new w(1,1,1)];class Do{constructor(t){this._renderer=t,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(t,e=0,n=.1,s=100){Pa=this._renderer.getRenderTarget(),Da=this._renderer.getActiveCubeFace(),La=this._renderer.getActiveMipmapLevel(),Ia=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(256);const a=this._allocateTargets();return a.depthBuffer=!0,this._sceneToCubeUV(t,n,s,a),e>0&&this._blur(a,0,0,e),this._applyPMREM(a),this._cleanup(a),a}fromEquirectangular(t,e=null){return this._fromTexture(t,e)}fromCubemap(t,e=null){return this._fromTexture(t,e)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=Uo(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=Io(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(t){this._lodMax=Math.floor(Math.log2(t)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let t=0;t<this._lodPlanes.length;t++)this._lodPlanes[t].dispose()}_cleanup(t){this._renderer.setRenderTarget(Pa,Da,La),this._renderer.xr.enabled=Ia,t.scissorTest=!1,Is(t,0,0,t.width,t.height)}_fromTexture(t,e){t.mapping===Oi||t.mapping===Bi?this._setSize(t.image.length===0?16:t.image[0].width||t.image[0].image.width):this._setSize(t.image.width/4),Pa=this._renderer.getRenderTarget(),Da=this._renderer.getActiveCubeFace(),La=this._renderer.getActiveMipmapLevel(),Ia=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;const n=e||this._allocateTargets();return this._textureToCubeUV(t,n),this._applyPMREM(n),this._cleanup(n),n}_allocateTargets(){const t=3*Math.max(this._cubeSize,112),e=4*this._cubeSize,n={magFilter:hn,minFilter:hn,generateMipmaps:!1,type:rs,format:en,colorSpace:Hi,depthBuffer:!1},s=Lo(t,e,n);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==t||this._pingPongRenderTarget.height!==e){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=Lo(t,e,n);const{_lodMax:a}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=hf(a)),this._blurMaterial=uf(a,t,e)}return s}_compileMaterial(t){const e=new ae(this._lodPlanes[0],t);this._renderer.compile(e,Ra)}_sceneToCubeUV(t,e,n,s){const o=new Fe(90,1,e,n),l=[1,-1,1,1,1,1],c=[1,1,1,-1,-1,-1],u=this._renderer,f=u.autoClear,p=u.toneMapping;u.getClearColor(Ro),u.toneMapping=On,u.autoClear=!1;const d=new Oe({name:"PMREM.Background",side:Ee,depthWrite:!1,depthTest:!1}),g=new ae(new hs,d);let _=!1;const m=t.background;m?m.isColor&&(d.color.copy(m),t.background=null,_=!0):(d.color.copy(Ro),_=!0);for(let h=0;h<6;h++){const T=h%3;T===0?(o.up.set(0,l[h],0),o.lookAt(c[h],0,0)):T===1?(o.up.set(0,0,l[h]),o.lookAt(0,c[h],0)):(o.up.set(0,l[h],0),o.lookAt(0,0,c[h]));const b=this._cubeSize;Is(s,T*b,h>2?b:0,b,b),u.setRenderTarget(s),_&&u.render(g,o),u.render(t,o)}g.geometry.dispose(),g.material.dispose(),u.toneMapping=p,u.autoClear=f,t.background=m}_textureToCubeUV(t,e){const n=this._renderer,s=t.mapping===Oi||t.mapping===Bi;s?(this._cubemapMaterial===null&&(this._cubemapMaterial=Uo()),this._cubemapMaterial.uniforms.flipEnvMap.value=t.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=Io());const a=s?this._cubemapMaterial:this._equirectMaterial,r=new ae(this._lodPlanes[0],a),o=a.uniforms;o.envMap.value=t;const l=this._cubeSize;Is(e,0,0,3*l,2*l),n.setRenderTarget(e),n.render(r,Ra)}_applyPMREM(t){const e=this._renderer,n=e.autoClear;e.autoClear=!1;const s=this._lodPlanes.length;for(let a=1;a<s;a++){const r=Math.sqrt(this._sigmas[a]*this._sigmas[a]-this._sigmas[a-1]*this._sigmas[a-1]),o=Po[(s-a-1)%Po.length];this._blur(t,a-1,a,r,o)}e.autoClear=n}_blur(t,e,n,s,a){const r=this._pingPongRenderTarget;this._halfBlur(t,r,e,n,s,"latitudinal",a),this._halfBlur(r,t,n,n,s,"longitudinal",a)}_halfBlur(t,e,n,s,a,r,o){const l=this._renderer,c=this._blurMaterial;r!=="latitudinal"&&r!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");const u=3,f=new ae(this._lodPlanes[s],c),p=c.uniforms,d=this._sizeLods[n]-1,g=isFinite(a)?Math.PI/(2*d):2*Math.PI/(2*Qn-1),_=a/g,m=isFinite(a)?1+Math.floor(u*_):Qn;m>Qn&&console.warn(`sigmaRadians, ${a}, is too large and will clip, as it requested ${m} samples when the maximum is set to ${Qn}`);const h=[];let T=0;for(let R=0;R<Qn;++R){const U=R/_,y=Math.exp(-U*U/2);h.push(y),R===0?T+=y:R<m&&(T+=2*y)}for(let R=0;R<h.length;R++)h[R]=h[R]/T;p.envMap.value=t.texture,p.samples.value=m,p.weights.value=h,p.latitudinal.value=r==="latitudinal",o&&(p.poleAxis.value=o);const{_lodMax:b}=this;p.dTheta.value=g,p.mipInt.value=b-n;const S=this._sizeLods[s],O=3*S*(s>b-Ri?s-b+Ri:0),C=4*(this._cubeSize-S);Is(e,O,C,3*S,2*S),l.setRenderTarget(e),l.render(f,Ra)}}function hf(i){const t=[],e=[],n=[];let s=i;const a=i-Ri+1+Co.length;for(let r=0;r<a;r++){const o=Math.pow(2,s);e.push(o);let l=1/o;r>i-Ri?l=Co[r-i+Ri-1]:r===0&&(l=0),n.push(l);const c=1/(o-2),u=-c,f=1+c,p=[u,u,f,u,f,f,u,u,f,f,u,f],d=6,g=6,_=3,m=2,h=1,T=new Float32Array(_*g*d),b=new Float32Array(m*g*d),S=new Float32Array(h*g*d);for(let C=0;C<d;C++){const R=C%3*2/3-1,U=C>2?0:-1,y=[R,U,0,R+2/3,U,0,R+2/3,U+1,0,R,U,0,R+2/3,U+1,0,R,U+1,0];T.set(y,_*g*C),b.set(p,m*g*C);const x=[C,C,C,C,C,C];S.set(x,h*g*C)}const O=new ce;O.setAttribute("position",new se(T,_)),O.setAttribute("uv",new se(b,m)),O.setAttribute("faceIndex",new se(S,h)),t.push(O),s>Ri&&s--}return{lodPlanes:t,sizeLods:e,sigmas:n}}function Lo(i,t,e){const n=new si(i,t,e);return n.texture.mapping=ia,n.texture.name="PMREM.cubeUv",n.scissorTest=!0,n}function Is(i,t,e,n,s){i.viewport.set(t,e,n,s),i.scissor.set(t,e,n,s)}function uf(i,t,e){const n=new Float32Array(Qn),s=new w(0,1,0);return new sn({name:"SphericalGaussianBlur",defines:{n:Qn,CUBEUV_TEXEL_WIDTH:1/t,CUBEUV_TEXEL_HEIGHT:1/e,CUBEUV_MAX_MIP:`${i}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:n},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:s}},vertexShader:Vr(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform int samples;
			uniform float weights[ n ];
			uniform bool latitudinal;
			uniform float dTheta;
			uniform float mipInt;
			uniform vec3 poleAxis;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			vec3 getSample( float theta, vec3 axis ) {

				float cosTheta = cos( theta );
				// Rodrigues' axis-angle rotation
				vec3 sampleDirection = vOutputDirection * cosTheta
					+ cross( axis, vOutputDirection ) * sin( theta )
					+ axis * dot( axis, vOutputDirection ) * ( 1.0 - cosTheta );

				return bilinearCubeUV( envMap, sampleDirection, mipInt );

			}

			void main() {

				vec3 axis = latitudinal ? poleAxis : cross( poleAxis, vOutputDirection );

				if ( all( equal( axis, vec3( 0.0 ) ) ) ) {

					axis = vec3( vOutputDirection.z, 0.0, - vOutputDirection.x );

				}

				axis = normalize( axis );

				gl_FragColor = vec4( 0.0, 0.0, 0.0, 1.0 );
				gl_FragColor.rgb += weights[ 0 ] * getSample( 0.0, axis );

				for ( int i = 1; i < n; i++ ) {

					if ( i >= samples ) {

						break;

					}

					float theta = dTheta * float( i );
					gl_FragColor.rgb += weights[ i ] * getSample( -1.0 * theta, axis );
					gl_FragColor.rgb += weights[ i ] * getSample( theta, axis );

				}

			}
		`,blending:Fn,depthTest:!1,depthWrite:!1})}function Io(){return new sn({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:Vr(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;

			#include <common>

			void main() {

				vec3 outputDirection = normalize( vOutputDirection );
				vec2 uv = equirectUv( outputDirection );

				gl_FragColor = vec4( texture2D ( envMap, uv ).rgb, 1.0 );

			}
		`,blending:Fn,depthTest:!1,depthWrite:!1})}function Uo(){return new sn({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:Vr(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:Fn,depthTest:!1,depthWrite:!1})}function Vr(){return`

		precision mediump float;
		precision mediump int;

		attribute float faceIndex;

		varying vec3 vOutputDirection;

		// RH coordinate system; PMREM face-indexing convention
		vec3 getDirection( vec2 uv, float face ) {

			uv = 2.0 * uv - 1.0;

			vec3 direction = vec3( uv, 1.0 );

			if ( face == 0.0 ) {

				direction = direction.zyx; // ( 1, v, u ) pos x

			} else if ( face == 1.0 ) {

				direction = direction.xzy;
				direction.xz *= -1.0; // ( -u, 1, -v ) pos y

			} else if ( face == 2.0 ) {

				direction.x *= -1.0; // ( -u, v, 1 ) pos z

			} else if ( face == 3.0 ) {

				direction = direction.zyx;
				direction.xz *= -1.0; // ( -1, v, -u ) neg x

			} else if ( face == 4.0 ) {

				direction = direction.xzy;
				direction.xy *= -1.0; // ( -u, -1, v ) neg y

			} else if ( face == 5.0 ) {

				direction.z *= -1.0; // ( u, v, -1 ) neg z

			}

			return direction;

		}

		void main() {

			vOutputDirection = getDirection( uv, faceIndex );
			gl_Position = vec4( position, 1.0 );

		}
	`}function df(i){let t=new WeakMap,e=null;function n(o){if(o&&o.isTexture){const l=o.mapping,c=l===Qa||l===tr,u=l===Oi||l===Bi;if(c||u){let f=t.get(o);const p=f!==void 0?f.texture.pmremVersion:0;if(o.isRenderTargetTexture&&o.pmremVersion!==p)return e===null&&(e=new Do(i)),f=c?e.fromEquirectangular(o,f):e.fromCubemap(o,f),f.texture.pmremVersion=o.pmremVersion,t.set(o,f),f.texture;if(f!==void 0)return f.texture;{const d=o.image;return c&&d&&d.height>0||u&&d&&s(d)?(e===null&&(e=new Do(i)),f=c?e.fromEquirectangular(o):e.fromCubemap(o),f.texture.pmremVersion=o.pmremVersion,t.set(o,f),o.addEventListener("dispose",a),f.texture):null}}}return o}function s(o){let l=0;const c=6;for(let u=0;u<c;u++)o[u]!==void 0&&l++;return l===c}function a(o){const l=o.target;l.removeEventListener("dispose",a);const c=t.get(l);c!==void 0&&(t.delete(l),c.dispose())}function r(){t=new WeakMap,e!==null&&(e.dispose(),e=null)}return{get:n,dispose:r}}function ff(i){const t={};function e(n){if(t[n]!==void 0)return t[n];let s;switch(n){case"WEBGL_depth_texture":s=i.getExtension("WEBGL_depth_texture")||i.getExtension("MOZ_WEBGL_depth_texture")||i.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":s=i.getExtension("EXT_texture_filter_anisotropic")||i.getExtension("MOZ_EXT_texture_filter_anisotropic")||i.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":s=i.getExtension("WEBGL_compressed_texture_s3tc")||i.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||i.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":s=i.getExtension("WEBGL_compressed_texture_pvrtc")||i.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:s=i.getExtension(n)}return t[n]=s,s}return{has:function(n){return e(n)!==null},init:function(){e("EXT_color_buffer_float"),e("WEBGL_clip_cull_distance"),e("OES_texture_float_linear"),e("EXT_color_buffer_half_float"),e("WEBGL_multisampled_render_to_texture"),e("WEBGL_render_shared_exponent")},get:function(n){const s=e(n);return s===null&&is("THREE.WebGLRenderer: "+n+" extension not supported."),s}}}function pf(i,t,e,n){const s={},a=new WeakMap;function r(f){const p=f.target;p.index!==null&&t.remove(p.index);for(const g in p.attributes)t.remove(p.attributes[g]);for(const g in p.morphAttributes){const _=p.morphAttributes[g];for(let m=0,h=_.length;m<h;m++)t.remove(_[m])}p.removeEventListener("dispose",r),delete s[p.id];const d=a.get(p);d&&(t.remove(d),a.delete(p)),n.releaseStatesOfGeometry(p),p.isInstancedBufferGeometry===!0&&delete p._maxInstanceCount,e.memory.geometries--}function o(f,p){return s[p.id]===!0||(p.addEventListener("dispose",r),s[p.id]=!0,e.memory.geometries++),p}function l(f){const p=f.attributes;for(const g in p)t.update(p[g],i.ARRAY_BUFFER);const d=f.morphAttributes;for(const g in d){const _=d[g];for(let m=0,h=_.length;m<h;m++)t.update(_[m],i.ARRAY_BUFFER)}}function c(f){const p=[],d=f.index,g=f.attributes.position;let _=0;if(d!==null){const T=d.array;_=d.version;for(let b=0,S=T.length;b<S;b+=3){const O=T[b+0],C=T[b+1],R=T[b+2];p.push(O,C,C,R,R,O)}}else if(g!==void 0){const T=g.array;_=g.version;for(let b=0,S=T.length/3-1;b<S;b+=3){const O=b+0,C=b+1,R=b+2;p.push(O,C,C,R,R,O)}}else return;const m=new(Ul(p)?zl:Bl)(p,1);m.version=_;const h=a.get(f);h&&t.remove(h),a.set(f,m)}function u(f){const p=a.get(f);if(p){const d=f.index;d!==null&&p.version<d.version&&c(f)}else c(f);return a.get(f)}return{get:o,update:l,getWireframeAttribute:u}}function mf(i,t,e){let n;function s(p){n=p}let a,r;function o(p){a=p.type,r=p.bytesPerElement}function l(p,d){i.drawElements(n,d,a,p*r),e.update(d,n,1)}function c(p,d,g){g!==0&&(i.drawElementsInstanced(n,d,a,p*r,g),e.update(d,n,g))}function u(p,d,g){if(g===0)return;t.get("WEBGL_multi_draw").multiDrawElementsWEBGL(n,d,0,a,p,0,g);let m=0;for(let h=0;h<g;h++)m+=d[h];e.update(m,n,1)}function f(p,d,g,_){if(g===0)return;const m=t.get("WEBGL_multi_draw");if(m===null)for(let h=0;h<p.length;h++)c(p[h]/r,d[h],_[h]);else{m.multiDrawElementsInstancedWEBGL(n,d,0,a,p,0,_,0,g);let h=0;for(let T=0;T<g;T++)h+=d[T]*_[T];e.update(h,n,1)}}this.setMode=s,this.setIndex=o,this.render=l,this.renderInstances=c,this.renderMultiDraw=u,this.renderMultiDrawInstances=f}function gf(i){const t={geometries:0,textures:0},e={frame:0,calls:0,triangles:0,points:0,lines:0};function n(a,r,o){switch(e.calls++,r){case i.TRIANGLES:e.triangles+=o*(a/3);break;case i.LINES:e.lines+=o*(a/2);break;case i.LINE_STRIP:e.lines+=o*(a-1);break;case i.LINE_LOOP:e.lines+=o*a;break;case i.POINTS:e.points+=o*a;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",r);break}}function s(){e.calls=0,e.triangles=0,e.points=0,e.lines=0}return{memory:t,render:e,programs:null,autoReset:!0,reset:s,update:n}}function _f(i,t,e){const n=new WeakMap,s=new jt;function a(r,o,l){const c=r.morphTargetInfluences,u=o.morphAttributes.position||o.morphAttributes.normal||o.morphAttributes.color,f=u!==void 0?u.length:0;let p=n.get(o);if(p===void 0||p.count!==f){let y=function(){R.dispose(),n.delete(o),o.removeEventListener("dispose",y)};p!==void 0&&p.texture.dispose();const d=o.morphAttributes.position!==void 0,g=o.morphAttributes.normal!==void 0,_=o.morphAttributes.color!==void 0,m=o.morphAttributes.position||[],h=o.morphAttributes.normal||[],T=o.morphAttributes.color||[];let b=0;d===!0&&(b=1),g===!0&&(b=2),_===!0&&(b=3);let S=o.attributes.position.count*b,O=1;S>t.maxTextureSize&&(O=Math.ceil(S/t.maxTextureSize),S=t.maxTextureSize);const C=new Float32Array(S*O*4*f),R=new Fl(C,S,O,f);R.type=yn,R.needsUpdate=!0;const U=b*4;for(let x=0;x<f;x++){const A=m[x],F=h[x],N=T[x],k=S*O*4*x;for(let X=0;X<A.count;X++){const V=X*U;d===!0&&(s.fromBufferAttribute(A,X),C[k+V+0]=s.x,C[k+V+1]=s.y,C[k+V+2]=s.z,C[k+V+3]=0),g===!0&&(s.fromBufferAttribute(F,X),C[k+V+4]=s.x,C[k+V+5]=s.y,C[k+V+6]=s.z,C[k+V+7]=0),_===!0&&(s.fromBufferAttribute(N,X),C[k+V+8]=s.x,C[k+V+9]=s.y,C[k+V+10]=s.z,C[k+V+11]=N.itemSize===4?s.w:1)}}p={count:f,texture:R,size:new Mt(S,O)},n.set(o,p),o.addEventListener("dispose",y)}if(r.isInstancedMesh===!0&&r.morphTexture!==null)l.getUniforms().setValue(i,"morphTexture",r.morphTexture,e);else{let d=0;for(let _=0;_<c.length;_++)d+=c[_];const g=o.morphTargetsRelative?1:1-d;l.getUniforms().setValue(i,"morphTargetBaseInfluence",g),l.getUniforms().setValue(i,"morphTargetInfluences",c)}l.getUniforms().setValue(i,"morphTargetsTexture",p.texture,e),l.getUniforms().setValue(i,"morphTargetsTextureSize",p.size)}return{update:a}}function vf(i,t,e,n){let s=new WeakMap;function a(l){const c=n.render.frame,u=l.geometry,f=t.get(l,u);if(s.get(f)!==c&&(t.update(f),s.set(f,c)),l.isInstancedMesh&&(l.hasEventListener("dispose",o)===!1&&l.addEventListener("dispose",o),s.get(l)!==c&&(e.update(l.instanceMatrix,i.ARRAY_BUFFER),l.instanceColor!==null&&e.update(l.instanceColor,i.ARRAY_BUFFER),s.set(l,c))),l.isSkinnedMesh){const p=l.skeleton;s.get(p)!==c&&(p.update(),s.set(p,c))}return f}function r(){s=new WeakMap}function o(l){const c=l.target;c.removeEventListener("dispose",o),e.remove(c.instanceMatrix),c.instanceColor!==null&&e.remove(c.instanceColor)}return{update:a,dispose:r}}class Wl extends Ce{constructor(t,e,n,s,a,r,o,l,c,u=Li){if(u!==Li&&u!==ki)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");n===void 0&&u===Li&&(n=ii),n===void 0&&u===ki&&(n=zi),super(null,s,a,r,o,l,u,n,c),this.isDepthTexture=!0,this.image={width:t,height:e},this.magFilter=o!==void 0?o:nn,this.minFilter=l!==void 0?l:nn,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(t){return super.copy(t),this.compareFunction=t.compareFunction,this}toJSON(t){const e=super.toJSON(t);return this.compareFunction!==null&&(e.compareFunction=this.compareFunction),e}}const Xl=new Ce,No=new Wl(1,1),ql=new Fl,Yl=new nh,$l=new Hl,Fo=[],Oo=[],Bo=new Float32Array(16),zo=new Float32Array(9),ko=new Float32Array(4);function Vi(i,t,e){const n=i[0];if(n<=0||n>0)return i;const s=t*e;let a=Fo[s];if(a===void 0&&(a=new Float32Array(s),Fo[s]=a),t!==0){n.toArray(a,0);for(let r=1,o=0;r!==t;++r)o+=e,i[r].toArray(a,o)}return a}function pe(i,t){if(i.length!==t.length)return!1;for(let e=0,n=i.length;e<n;e++)if(i[e]!==t[e])return!1;return!0}function me(i,t){for(let e=0,n=t.length;e<n;e++)i[e]=t[e]}function aa(i,t){let e=Oo[t];e===void 0&&(e=new Int32Array(t),Oo[t]=e);for(let n=0;n!==t;++n)e[n]=i.allocateTextureUnit();return e}function xf(i,t){const e=this.cache;e[0]!==t&&(i.uniform1f(this.addr,t),e[0]=t)}function Mf(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(i.uniform2f(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(pe(e,t))return;i.uniform2fv(this.addr,t),me(e,t)}}function yf(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(i.uniform3f(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else if(t.r!==void 0)(e[0]!==t.r||e[1]!==t.g||e[2]!==t.b)&&(i.uniform3f(this.addr,t.r,t.g,t.b),e[0]=t.r,e[1]=t.g,e[2]=t.b);else{if(pe(e,t))return;i.uniform3fv(this.addr,t),me(e,t)}}function Sf(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(i.uniform4f(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(pe(e,t))return;i.uniform4fv(this.addr,t),me(e,t)}}function Ef(i,t){const e=this.cache,n=t.elements;if(n===void 0){if(pe(e,t))return;i.uniformMatrix2fv(this.addr,!1,t),me(e,t)}else{if(pe(e,n))return;ko.set(n),i.uniformMatrix2fv(this.addr,!1,ko),me(e,n)}}function bf(i,t){const e=this.cache,n=t.elements;if(n===void 0){if(pe(e,t))return;i.uniformMatrix3fv(this.addr,!1,t),me(e,t)}else{if(pe(e,n))return;zo.set(n),i.uniformMatrix3fv(this.addr,!1,zo),me(e,n)}}function Tf(i,t){const e=this.cache,n=t.elements;if(n===void 0){if(pe(e,t))return;i.uniformMatrix4fv(this.addr,!1,t),me(e,t)}else{if(pe(e,n))return;Bo.set(n),i.uniformMatrix4fv(this.addr,!1,Bo),me(e,n)}}function Af(i,t){const e=this.cache;e[0]!==t&&(i.uniform1i(this.addr,t),e[0]=t)}function wf(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(i.uniform2i(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(pe(e,t))return;i.uniform2iv(this.addr,t),me(e,t)}}function Cf(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(i.uniform3i(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(pe(e,t))return;i.uniform3iv(this.addr,t),me(e,t)}}function Rf(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(i.uniform4i(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(pe(e,t))return;i.uniform4iv(this.addr,t),me(e,t)}}function Pf(i,t){const e=this.cache;e[0]!==t&&(i.uniform1ui(this.addr,t),e[0]=t)}function Df(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(i.uniform2ui(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(pe(e,t))return;i.uniform2uiv(this.addr,t),me(e,t)}}function Lf(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(i.uniform3ui(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(pe(e,t))return;i.uniform3uiv(this.addr,t),me(e,t)}}function If(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(i.uniform4ui(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(pe(e,t))return;i.uniform4uiv(this.addr,t),me(e,t)}}function Uf(i,t,e){const n=this.cache,s=e.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s);let a;this.type===i.SAMPLER_2D_SHADOW?(No.compareFunction=Il,a=No):a=Xl,e.setTexture2D(t||a,s)}function Nf(i,t,e){const n=this.cache,s=e.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),e.setTexture3D(t||Yl,s)}function Ff(i,t,e){const n=this.cache,s=e.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),e.setTextureCube(t||$l,s)}function Of(i,t,e){const n=this.cache,s=e.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),e.setTexture2DArray(t||ql,s)}function Bf(i){switch(i){case 5126:return xf;case 35664:return Mf;case 35665:return yf;case 35666:return Sf;case 35674:return Ef;case 35675:return bf;case 35676:return Tf;case 5124:case 35670:return Af;case 35667:case 35671:return wf;case 35668:case 35672:return Cf;case 35669:case 35673:return Rf;case 5125:return Pf;case 36294:return Df;case 36295:return Lf;case 36296:return If;case 35678:case 36198:case 36298:case 36306:case 35682:return Uf;case 35679:case 36299:case 36307:return Nf;case 35680:case 36300:case 36308:case 36293:return Ff;case 36289:case 36303:case 36311:case 36292:return Of}}function zf(i,t){i.uniform1fv(this.addr,t)}function kf(i,t){const e=Vi(t,this.size,2);i.uniform2fv(this.addr,e)}function Gf(i,t){const e=Vi(t,this.size,3);i.uniform3fv(this.addr,e)}function Hf(i,t){const e=Vi(t,this.size,4);i.uniform4fv(this.addr,e)}function Vf(i,t){const e=Vi(t,this.size,4);i.uniformMatrix2fv(this.addr,!1,e)}function Wf(i,t){const e=Vi(t,this.size,9);i.uniformMatrix3fv(this.addr,!1,e)}function Xf(i,t){const e=Vi(t,this.size,16);i.uniformMatrix4fv(this.addr,!1,e)}function qf(i,t){i.uniform1iv(this.addr,t)}function Yf(i,t){i.uniform2iv(this.addr,t)}function $f(i,t){i.uniform3iv(this.addr,t)}function Kf(i,t){i.uniform4iv(this.addr,t)}function jf(i,t){i.uniform1uiv(this.addr,t)}function Zf(i,t){i.uniform2uiv(this.addr,t)}function Jf(i,t){i.uniform3uiv(this.addr,t)}function Qf(i,t){i.uniform4uiv(this.addr,t)}function tp(i,t,e){const n=this.cache,s=t.length,a=aa(e,s);pe(n,a)||(i.uniform1iv(this.addr,a),me(n,a));for(let r=0;r!==s;++r)e.setTexture2D(t[r]||Xl,a[r])}function ep(i,t,e){const n=this.cache,s=t.length,a=aa(e,s);pe(n,a)||(i.uniform1iv(this.addr,a),me(n,a));for(let r=0;r!==s;++r)e.setTexture3D(t[r]||Yl,a[r])}function np(i,t,e){const n=this.cache,s=t.length,a=aa(e,s);pe(n,a)||(i.uniform1iv(this.addr,a),me(n,a));for(let r=0;r!==s;++r)e.setTextureCube(t[r]||$l,a[r])}function ip(i,t,e){const n=this.cache,s=t.length,a=aa(e,s);pe(n,a)||(i.uniform1iv(this.addr,a),me(n,a));for(let r=0;r!==s;++r)e.setTexture2DArray(t[r]||ql,a[r])}function sp(i){switch(i){case 5126:return zf;case 35664:return kf;case 35665:return Gf;case 35666:return Hf;case 35674:return Vf;case 35675:return Wf;case 35676:return Xf;case 5124:case 35670:return qf;case 35667:case 35671:return Yf;case 35668:case 35672:return $f;case 35669:case 35673:return Kf;case 5125:return jf;case 36294:return Zf;case 36295:return Jf;case 36296:return Qf;case 35678:case 36198:case 36298:case 36306:case 35682:return tp;case 35679:case 36299:case 36307:return ep;case 35680:case 36300:case 36308:case 36293:return np;case 36289:case 36303:case 36311:case 36292:return ip}}class ap{constructor(t,e,n){this.id=t,this.addr=n,this.cache=[],this.type=e.type,this.setValue=Bf(e.type)}}class rp{constructor(t,e,n){this.id=t,this.addr=n,this.cache=[],this.type=e.type,this.size=e.size,this.setValue=sp(e.type)}}class op{constructor(t){this.id=t,this.seq=[],this.map={}}setValue(t,e,n){const s=this.seq;for(let a=0,r=s.length;a!==r;++a){const o=s[a];o.setValue(t,e[o.id],n)}}}const Ua=/(\w+)(\])?(\[|\.)?/g;function Go(i,t){i.seq.push(t),i.map[t.id]=t}function lp(i,t,e){const n=i.name,s=n.length;for(Ua.lastIndex=0;;){const a=Ua.exec(n),r=Ua.lastIndex;let o=a[1];const l=a[2]==="]",c=a[3];if(l&&(o=o|0),c===void 0||c==="["&&r+2===s){Go(e,c===void 0?new ap(o,i,t):new rp(o,i,t));break}else{let f=e.map[o];f===void 0&&(f=new op(o),Go(e,f)),e=f}}}class js{constructor(t,e){this.seq=[],this.map={};const n=t.getProgramParameter(e,t.ACTIVE_UNIFORMS);for(let s=0;s<n;++s){const a=t.getActiveUniform(e,s),r=t.getUniformLocation(e,a.name);lp(a,r,this)}}setValue(t,e,n,s){const a=this.map[e];a!==void 0&&a.setValue(t,n,s)}setOptional(t,e,n){const s=e[n];s!==void 0&&this.setValue(t,n,s)}static upload(t,e,n,s){for(let a=0,r=e.length;a!==r;++a){const o=e[a],l=n[o.id];l.needsUpdate!==!1&&o.setValue(t,l.value,s)}}static seqWithValue(t,e){const n=[];for(let s=0,a=t.length;s!==a;++s){const r=t[s];r.id in e&&n.push(r)}return n}}function Ho(i,t,e){const n=i.createShader(t);return i.shaderSource(n,e),i.compileShader(n),n}const cp=37297;let hp=0;function up(i,t){const e=i.split(`
`),n=[],s=Math.max(t-6,0),a=Math.min(t+6,e.length);for(let r=s;r<a;r++){const o=r+1;n.push(`${o===t?">":" "} ${o}: ${e[r]}`)}return n.join(`
`)}const Vo=new Pt;function dp(i){Gt._getMatrix(Vo,Gt.workingColorSpace,i);const t=`mat3( ${Vo.elements.map(e=>e.toFixed(4))} )`;switch(Gt.getTransfer(i)){case sa:return[t,"LinearTransferOETF"];case Yt:return[t,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space: ",i),[t,"LinearTransferOETF"]}}function Wo(i,t,e){const n=i.getShaderParameter(t,i.COMPILE_STATUS),s=i.getShaderInfoLog(t).trim();if(n&&s==="")return"";const a=/ERROR: 0:(\d+)/.exec(s);if(a){const r=parseInt(a[1]);return e.toUpperCase()+`

`+s+`

`+up(i.getShaderSource(t),r)}else return s}function fp(i,t){const e=dp(t);return[`vec4 ${i}( vec4 value ) {`,`	return ${e[1]}( vec4( value.rgb * ${e[0]}, value.a ) );`,"}"].join(`
`)}function pp(i,t){let e;switch(t){case Cc:e="Linear";break;case Rc:e="Reinhard";break;case Pc:e="Cineon";break;case Dc:e="ACESFilmic";break;case Ic:e="AgX";break;case Uc:e="Neutral";break;case Lc:e="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",t),e="Linear"}return"vec3 "+i+"( vec3 color ) { return "+e+"ToneMapping( color ); }"}const Us=new w;function mp(){Gt.getLuminanceCoefficients(Us);const i=Us.x.toFixed(4),t=Us.y.toFixed(4),e=Us.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${i}, ${t}, ${e} );`,"	return dot( weights, rgb );","}"].join(`
`)}function gp(i){return[i.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",i.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(ss).join(`
`)}function _p(i){const t=[];for(const e in i){const n=i[e];n!==!1&&t.push("#define "+e+" "+n)}return t.join(`
`)}function vp(i,t){const e={},n=i.getProgramParameter(t,i.ACTIVE_ATTRIBUTES);for(let s=0;s<n;s++){const a=i.getActiveAttrib(t,s),r=a.name;let o=1;a.type===i.FLOAT_MAT2&&(o=2),a.type===i.FLOAT_MAT3&&(o=3),a.type===i.FLOAT_MAT4&&(o=4),e[r]={type:a.type,location:i.getAttribLocation(t,r),locationSize:o}}return e}function ss(i){return i!==""}function Xo(i,t){const e=t.numSpotLightShadows+t.numSpotLightMaps-t.numSpotLightShadowsWithMaps;return i.replace(/NUM_DIR_LIGHTS/g,t.numDirLights).replace(/NUM_SPOT_LIGHTS/g,t.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,t.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,e).replace(/NUM_RECT_AREA_LIGHTS/g,t.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,t.numPointLights).replace(/NUM_HEMI_LIGHTS/g,t.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,t.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,t.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,t.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,t.numPointLightShadows)}function qo(i,t){return i.replace(/NUM_CLIPPING_PLANES/g,t.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,t.numClippingPlanes-t.numClipIntersection)}const xp=/^[ \t]*#include +<([\w\d./]+)>/gm;function Dr(i){return i.replace(xp,yp)}const Mp=new Map;function yp(i,t){let e=It[t];if(e===void 0){const n=Mp.get(t);if(n!==void 0)e=It[n],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',t,n);else throw new Error("Can not resolve #include <"+t+">")}return Dr(e)}const Sp=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function Yo(i){return i.replace(Sp,Ep)}function Ep(i,t,e,n){let s="";for(let a=parseInt(t);a<parseInt(e);a++)s+=n.replace(/\[\s*i\s*\]/g,"[ "+a+" ]").replace(/UNROLLED_LOOP_INDEX/g,a);return s}function $o(i){let t=`precision ${i.precision} float;
	precision ${i.precision} int;
	precision ${i.precision} sampler2D;
	precision ${i.precision} samplerCube;
	precision ${i.precision} sampler3D;
	precision ${i.precision} sampler2DArray;
	precision ${i.precision} sampler2DShadow;
	precision ${i.precision} samplerCubeShadow;
	precision ${i.precision} sampler2DArrayShadow;
	precision ${i.precision} isampler2D;
	precision ${i.precision} isampler3D;
	precision ${i.precision} isamplerCube;
	precision ${i.precision} isampler2DArray;
	precision ${i.precision} usampler2D;
	precision ${i.precision} usampler3D;
	precision ${i.precision} usamplerCube;
	precision ${i.precision} usampler2DArray;
	`;return i.precision==="highp"?t+=`
#define HIGH_PRECISION`:i.precision==="mediump"?t+=`
#define MEDIUM_PRECISION`:i.precision==="lowp"&&(t+=`
#define LOW_PRECISION`),t}function bp(i){let t="SHADOWMAP_TYPE_BASIC";return i.shadowMapType===xl?t="SHADOWMAP_TYPE_PCF":i.shadowMapType===oc?t="SHADOWMAP_TYPE_PCF_SOFT":i.shadowMapType===Mn&&(t="SHADOWMAP_TYPE_VSM"),t}function Tp(i){let t="ENVMAP_TYPE_CUBE";if(i.envMap)switch(i.envMapMode){case Oi:case Bi:t="ENVMAP_TYPE_CUBE";break;case ia:t="ENVMAP_TYPE_CUBE_UV";break}return t}function Ap(i){let t="ENVMAP_MODE_REFLECTION";if(i.envMap)switch(i.envMapMode){case Bi:t="ENVMAP_MODE_REFRACTION";break}return t}function wp(i){let t="ENVMAP_BLENDING_NONE";if(i.envMap)switch(i.combine){case Ml:t="ENVMAP_BLENDING_MULTIPLY";break;case Ac:t="ENVMAP_BLENDING_MIX";break;case wc:t="ENVMAP_BLENDING_ADD";break}return t}function Cp(i){const t=i.envMapCubeUVHeight;if(t===null)return null;const e=Math.log2(t)-2,n=1/t;return{texelWidth:1/(3*Math.max(Math.pow(2,e),7*16)),texelHeight:n,maxMip:e}}function Rp(i,t,e,n){const s=i.getContext(),a=e.defines;let r=e.vertexShader,o=e.fragmentShader;const l=bp(e),c=Tp(e),u=Ap(e),f=wp(e),p=Cp(e),d=gp(e),g=_p(a),_=s.createProgram();let m,h,T=e.glslVersion?"#version "+e.glslVersion+`
`:"";e.isRawShaderMaterial?(m=["#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,g].filter(ss).join(`
`),m.length>0&&(m+=`
`),h=["#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,g].filter(ss).join(`
`),h.length>0&&(h+=`
`)):(m=[$o(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,g,e.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",e.batching?"#define USE_BATCHING":"",e.batchingColor?"#define USE_BATCHING_COLOR":"",e.instancing?"#define USE_INSTANCING":"",e.instancingColor?"#define USE_INSTANCING_COLOR":"",e.instancingMorph?"#define USE_INSTANCING_MORPH":"",e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.map?"#define USE_MAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+u:"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.displacementMap?"#define USE_DISPLACEMENTMAP":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.mapUv?"#define MAP_UV "+e.mapUv:"",e.alphaMapUv?"#define ALPHAMAP_UV "+e.alphaMapUv:"",e.lightMapUv?"#define LIGHTMAP_UV "+e.lightMapUv:"",e.aoMapUv?"#define AOMAP_UV "+e.aoMapUv:"",e.emissiveMapUv?"#define EMISSIVEMAP_UV "+e.emissiveMapUv:"",e.bumpMapUv?"#define BUMPMAP_UV "+e.bumpMapUv:"",e.normalMapUv?"#define NORMALMAP_UV "+e.normalMapUv:"",e.displacementMapUv?"#define DISPLACEMENTMAP_UV "+e.displacementMapUv:"",e.metalnessMapUv?"#define METALNESSMAP_UV "+e.metalnessMapUv:"",e.roughnessMapUv?"#define ROUGHNESSMAP_UV "+e.roughnessMapUv:"",e.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+e.anisotropyMapUv:"",e.clearcoatMapUv?"#define CLEARCOATMAP_UV "+e.clearcoatMapUv:"",e.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+e.clearcoatNormalMapUv:"",e.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+e.clearcoatRoughnessMapUv:"",e.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+e.iridescenceMapUv:"",e.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+e.iridescenceThicknessMapUv:"",e.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+e.sheenColorMapUv:"",e.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+e.sheenRoughnessMapUv:"",e.specularMapUv?"#define SPECULARMAP_UV "+e.specularMapUv:"",e.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+e.specularColorMapUv:"",e.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+e.specularIntensityMapUv:"",e.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+e.transmissionMapUv:"",e.thicknessMapUv?"#define THICKNESSMAP_UV "+e.thicknessMapUv:"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexColors?"#define USE_COLOR":"",e.vertexAlphas?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.flatShading?"#define FLAT_SHADED":"",e.skinning?"#define USE_SKINNING":"",e.morphTargets?"#define USE_MORPHTARGETS":"",e.morphNormals&&e.flatShading===!1?"#define USE_MORPHNORMALS":"",e.morphColors?"#define USE_MORPHCOLORS":"",e.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+e.morphTextureStride:"",e.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+e.morphTargetsCount:"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+l:"",e.sizeAttenuation?"#define USE_SIZEATTENUATION":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",e.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(ss).join(`
`),h=[$o(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,g,e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",e.map?"#define USE_MAP":"",e.matcap?"#define USE_MATCAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+c:"",e.envMap?"#define "+u:"",e.envMap?"#define "+f:"",p?"#define CUBEUV_TEXEL_WIDTH "+p.texelWidth:"",p?"#define CUBEUV_TEXEL_HEIGHT "+p.texelHeight:"",p?"#define CUBEUV_MAX_MIP "+p.maxMip+".0":"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoat?"#define USE_CLEARCOAT":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.dispersion?"#define USE_DISPERSION":"",e.iridescence?"#define USE_IRIDESCENCE":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaTest?"#define USE_ALPHATEST":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.sheen?"#define USE_SHEEN":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexColors||e.instancingColor||e.batchingColor?"#define USE_COLOR":"",e.vertexAlphas?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.gradientMap?"#define USE_GRADIENTMAP":"",e.flatShading?"#define FLAT_SHADED":"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+l:"",e.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",e.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",e.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",e.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",e.toneMapping!==On?"#define TONE_MAPPING":"",e.toneMapping!==On?It.tonemapping_pars_fragment:"",e.toneMapping!==On?pp("toneMapping",e.toneMapping):"",e.dithering?"#define DITHERING":"",e.opaque?"#define OPAQUE":"",It.colorspace_pars_fragment,fp("linearToOutputTexel",e.outputColorSpace),mp(),e.useDepthPacking?"#define DEPTH_PACKING "+e.depthPacking:"",`
`].filter(ss).join(`
`)),r=Dr(r),r=Xo(r,e),r=qo(r,e),o=Dr(o),o=Xo(o,e),o=qo(o,e),r=Yo(r),o=Yo(o),e.isRawShaderMaterial!==!0&&(T=`#version 300 es
`,m=[d,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+m,h=["#define varying in",e.glslVersion===ro?"":"layout(location = 0) out highp vec4 pc_fragColor;",e.glslVersion===ro?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+h);const b=T+m+r,S=T+h+o,O=Ho(s,s.VERTEX_SHADER,b),C=Ho(s,s.FRAGMENT_SHADER,S);s.attachShader(_,O),s.attachShader(_,C),e.index0AttributeName!==void 0?s.bindAttribLocation(_,0,e.index0AttributeName):e.morphTargets===!0&&s.bindAttribLocation(_,0,"position"),s.linkProgram(_);function R(A){if(i.debug.checkShaderErrors){const F=s.getProgramInfoLog(_).trim(),N=s.getShaderInfoLog(O).trim(),k=s.getShaderInfoLog(C).trim();let X=!0,V=!0;if(s.getProgramParameter(_,s.LINK_STATUS)===!1)if(X=!1,typeof i.debug.onShaderError=="function")i.debug.onShaderError(s,_,O,C);else{const Z=Wo(s,O,"vertex"),H=Wo(s,C,"fragment");console.error("THREE.WebGLProgram: Shader Error "+s.getError()+" - VALIDATE_STATUS "+s.getProgramParameter(_,s.VALIDATE_STATUS)+`

Material Name: `+A.name+`
Material Type: `+A.type+`

Program Info Log: `+F+`
`+Z+`
`+H)}else F!==""?console.warn("THREE.WebGLProgram: Program Info Log:",F):(N===""||k==="")&&(V=!1);V&&(A.diagnostics={runnable:X,programLog:F,vertexShader:{log:N,prefix:m},fragmentShader:{log:k,prefix:h}})}s.deleteShader(O),s.deleteShader(C),U=new js(s,_),y=vp(s,_)}let U;this.getUniforms=function(){return U===void 0&&R(this),U};let y;this.getAttributes=function(){return y===void 0&&R(this),y};let x=e.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return x===!1&&(x=s.getProgramParameter(_,cp)),x},this.destroy=function(){n.releaseStatesOfProgram(this),s.deleteProgram(_),this.program=void 0},this.type=e.shaderType,this.name=e.shaderName,this.id=hp++,this.cacheKey=t,this.usedTimes=1,this.program=_,this.vertexShader=O,this.fragmentShader=C,this}let Pp=0;class Dp{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(t){const e=t.vertexShader,n=t.fragmentShader,s=this._getShaderStage(e),a=this._getShaderStage(n),r=this._getShaderCacheForMaterial(t);return r.has(s)===!1&&(r.add(s),s.usedTimes++),r.has(a)===!1&&(r.add(a),a.usedTimes++),this}remove(t){const e=this.materialCache.get(t);for(const n of e)n.usedTimes--,n.usedTimes===0&&this.shaderCache.delete(n.code);return this.materialCache.delete(t),this}getVertexShaderID(t){return this._getShaderStage(t.vertexShader).id}getFragmentShaderID(t){return this._getShaderStage(t.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(t){const e=this.materialCache;let n=e.get(t);return n===void 0&&(n=new Set,e.set(t,n)),n}_getShaderStage(t){const e=this.shaderCache;let n=e.get(t);return n===void 0&&(n=new Lp(t),e.set(t,n)),n}}class Lp{constructor(t){this.id=Pp++,this.code=t,this.usedTimes=0}}function Ip(i,t,e,n,s,a,r){const o=new Gr,l=new Dp,c=new Set,u=[],f=s.logarithmicDepthBuffer,p=s.vertexTextures;let d=s.precision;const g={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function _(y){return c.add(y),y===0?"uv":`uv${y}`}function m(y,x,A,F,N){const k=F.fog,X=N.geometry,V=y.isMeshStandardMaterial?F.environment:null,Z=(y.isMeshStandardMaterial?e:t).get(y.envMap||V),H=Z&&Z.mapping===ia?Z.image.height:null,tt=g[y.type];y.precision!==null&&(d=s.getMaxPrecision(y.precision),d!==y.precision&&console.warn("THREE.WebGLProgram.getParameters:",y.precision,"not supported, using",d,"instead."));const lt=X.morphAttributes.position||X.morphAttributes.normal||X.morphAttributes.color,xt=lt!==void 0?lt.length:0;let Dt=0;X.morphAttributes.position!==void 0&&(Dt=1),X.morphAttributes.normal!==void 0&&(Dt=2),X.morphAttributes.color!==void 0&&(Dt=3);let Zt,Y,et,gt;if(tt){const qt=ln[tt];Zt=qt.vertexShader,Y=qt.fragmentShader}else Zt=y.vertexShader,Y=y.fragmentShader,l.update(y),et=l.getVertexShaderID(y),gt=l.getFragmentShaderID(y);const st=i.getRenderTarget(),bt=i.state.buffers.depth.getReversed(),wt=N.isInstancedMesh===!0,Ut=N.isBatchedMesh===!0,re=!!y.map,zt=!!y.matcap,le=!!Z,I=!!y.aoMap,ze=!!y.lightMap,Nt=!!y.bumpMap,Ft=!!y.normalMap,St=!!y.displacementMap,ee=!!y.emissiveMap,yt=!!y.metalnessMap,E=!!y.roughnessMap,v=y.anisotropy>0,B=y.clearcoat>0,$=y.dispersion>0,j=y.iridescence>0,q=y.sheen>0,_t=y.transmission>0,at=v&&!!y.anisotropyMap,ht=B&&!!y.clearcoatMap,kt=B&&!!y.clearcoatNormalMap,J=B&&!!y.clearcoatRoughnessMap,ut=j&&!!y.iridescenceMap,Et=j&&!!y.iridescenceThicknessMap,Tt=q&&!!y.sheenColorMap,dt=q&&!!y.sheenRoughnessMap,Ot=!!y.specularMap,Lt=!!y.specularColorMap,Qt=!!y.specularIntensityMap,P=_t&&!!y.transmissionMap,it=_t&&!!y.thicknessMap,W=!!y.gradientMap,K=!!y.alphaMap,ct=y.alphaTest>0,rt=!!y.alphaHash,Ct=!!y.extensions;let oe=On;y.toneMapped&&(st===null||st.isXRRenderTarget===!0)&&(oe=i.toneMapping);const Me={shaderID:tt,shaderType:y.type,shaderName:y.name,vertexShader:Zt,fragmentShader:Y,defines:y.defines,customVertexShaderID:et,customFragmentShaderID:gt,isRawShaderMaterial:y.isRawShaderMaterial===!0,glslVersion:y.glslVersion,precision:d,batching:Ut,batchingColor:Ut&&N._colorsTexture!==null,instancing:wt,instancingColor:wt&&N.instanceColor!==null,instancingMorph:wt&&N.morphTexture!==null,supportsVertexTextures:p,outputColorSpace:st===null?i.outputColorSpace:st.isXRRenderTarget===!0?st.texture.colorSpace:Hi,alphaToCoverage:!!y.alphaToCoverage,map:re,matcap:zt,envMap:le,envMapMode:le&&Z.mapping,envMapCubeUVHeight:H,aoMap:I,lightMap:ze,bumpMap:Nt,normalMap:Ft,displacementMap:p&&St,emissiveMap:ee,normalMapObjectSpace:Ft&&y.normalMapType===Bc,normalMapTangentSpace:Ft&&y.normalMapType===Ll,metalnessMap:yt,roughnessMap:E,anisotropy:v,anisotropyMap:at,clearcoat:B,clearcoatMap:ht,clearcoatNormalMap:kt,clearcoatRoughnessMap:J,dispersion:$,iridescence:j,iridescenceMap:ut,iridescenceThicknessMap:Et,sheen:q,sheenColorMap:Tt,sheenRoughnessMap:dt,specularMap:Ot,specularColorMap:Lt,specularIntensityMap:Qt,transmission:_t,transmissionMap:P,thicknessMap:it,gradientMap:W,opaque:y.transparent===!1&&y.blending===Di&&y.alphaToCoverage===!1,alphaMap:K,alphaTest:ct,alphaHash:rt,combine:y.combine,mapUv:re&&_(y.map.channel),aoMapUv:I&&_(y.aoMap.channel),lightMapUv:ze&&_(y.lightMap.channel),bumpMapUv:Nt&&_(y.bumpMap.channel),normalMapUv:Ft&&_(y.normalMap.channel),displacementMapUv:St&&_(y.displacementMap.channel),emissiveMapUv:ee&&_(y.emissiveMap.channel),metalnessMapUv:yt&&_(y.metalnessMap.channel),roughnessMapUv:E&&_(y.roughnessMap.channel),anisotropyMapUv:at&&_(y.anisotropyMap.channel),clearcoatMapUv:ht&&_(y.clearcoatMap.channel),clearcoatNormalMapUv:kt&&_(y.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:J&&_(y.clearcoatRoughnessMap.channel),iridescenceMapUv:ut&&_(y.iridescenceMap.channel),iridescenceThicknessMapUv:Et&&_(y.iridescenceThicknessMap.channel),sheenColorMapUv:Tt&&_(y.sheenColorMap.channel),sheenRoughnessMapUv:dt&&_(y.sheenRoughnessMap.channel),specularMapUv:Ot&&_(y.specularMap.channel),specularColorMapUv:Lt&&_(y.specularColorMap.channel),specularIntensityMapUv:Qt&&_(y.specularIntensityMap.channel),transmissionMapUv:P&&_(y.transmissionMap.channel),thicknessMapUv:it&&_(y.thicknessMap.channel),alphaMapUv:K&&_(y.alphaMap.channel),vertexTangents:!!X.attributes.tangent&&(Ft||v),vertexColors:y.vertexColors,vertexAlphas:y.vertexColors===!0&&!!X.attributes.color&&X.attributes.color.itemSize===4,pointsUvs:N.isPoints===!0&&!!X.attributes.uv&&(re||K),fog:!!k,useFog:y.fog===!0,fogExp2:!!k&&k.isFogExp2,flatShading:y.flatShading===!0,sizeAttenuation:y.sizeAttenuation===!0,logarithmicDepthBuffer:f,reverseDepthBuffer:bt,skinning:N.isSkinnedMesh===!0,morphTargets:X.morphAttributes.position!==void 0,morphNormals:X.morphAttributes.normal!==void 0,morphColors:X.morphAttributes.color!==void 0,morphTargetsCount:xt,morphTextureStride:Dt,numDirLights:x.directional.length,numPointLights:x.point.length,numSpotLights:x.spot.length,numSpotLightMaps:x.spotLightMap.length,numRectAreaLights:x.rectArea.length,numHemiLights:x.hemi.length,numDirLightShadows:x.directionalShadowMap.length,numPointLightShadows:x.pointShadowMap.length,numSpotLightShadows:x.spotShadowMap.length,numSpotLightShadowsWithMaps:x.numSpotLightShadowsWithMaps,numLightProbes:x.numLightProbes,numClippingPlanes:r.numPlanes,numClipIntersection:r.numIntersection,dithering:y.dithering,shadowMapEnabled:i.shadowMap.enabled&&A.length>0,shadowMapType:i.shadowMap.type,toneMapping:oe,decodeVideoTexture:re&&y.map.isVideoTexture===!0&&Gt.getTransfer(y.map.colorSpace)===Yt,decodeVideoTextureEmissive:ee&&y.emissiveMap.isVideoTexture===!0&&Gt.getTransfer(y.emissiveMap.colorSpace)===Yt,premultipliedAlpha:y.premultipliedAlpha,doubleSided:y.side===De,flipSided:y.side===Ee,useDepthPacking:y.depthPacking>=0,depthPacking:y.depthPacking||0,index0AttributeName:y.index0AttributeName,extensionClipCullDistance:Ct&&y.extensions.clipCullDistance===!0&&n.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(Ct&&y.extensions.multiDraw===!0||Ut)&&n.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:n.has("KHR_parallel_shader_compile"),customProgramCacheKey:y.customProgramCacheKey()};return Me.vertexUv1s=c.has(1),Me.vertexUv2s=c.has(2),Me.vertexUv3s=c.has(3),c.clear(),Me}function h(y){const x=[];if(y.shaderID?x.push(y.shaderID):(x.push(y.customVertexShaderID),x.push(y.customFragmentShaderID)),y.defines!==void 0)for(const A in y.defines)x.push(A),x.push(y.defines[A]);return y.isRawShaderMaterial===!1&&(T(x,y),b(x,y),x.push(i.outputColorSpace)),x.push(y.customProgramCacheKey),x.join()}function T(y,x){y.push(x.precision),y.push(x.outputColorSpace),y.push(x.envMapMode),y.push(x.envMapCubeUVHeight),y.push(x.mapUv),y.push(x.alphaMapUv),y.push(x.lightMapUv),y.push(x.aoMapUv),y.push(x.bumpMapUv),y.push(x.normalMapUv),y.push(x.displacementMapUv),y.push(x.emissiveMapUv),y.push(x.metalnessMapUv),y.push(x.roughnessMapUv),y.push(x.anisotropyMapUv),y.push(x.clearcoatMapUv),y.push(x.clearcoatNormalMapUv),y.push(x.clearcoatRoughnessMapUv),y.push(x.iridescenceMapUv),y.push(x.iridescenceThicknessMapUv),y.push(x.sheenColorMapUv),y.push(x.sheenRoughnessMapUv),y.push(x.specularMapUv),y.push(x.specularColorMapUv),y.push(x.specularIntensityMapUv),y.push(x.transmissionMapUv),y.push(x.thicknessMapUv),y.push(x.combine),y.push(x.fogExp2),y.push(x.sizeAttenuation),y.push(x.morphTargetsCount),y.push(x.morphAttributeCount),y.push(x.numDirLights),y.push(x.numPointLights),y.push(x.numSpotLights),y.push(x.numSpotLightMaps),y.push(x.numHemiLights),y.push(x.numRectAreaLights),y.push(x.numDirLightShadows),y.push(x.numPointLightShadows),y.push(x.numSpotLightShadows),y.push(x.numSpotLightShadowsWithMaps),y.push(x.numLightProbes),y.push(x.shadowMapType),y.push(x.toneMapping),y.push(x.numClippingPlanes),y.push(x.numClipIntersection),y.push(x.depthPacking)}function b(y,x){o.disableAll(),x.supportsVertexTextures&&o.enable(0),x.instancing&&o.enable(1),x.instancingColor&&o.enable(2),x.instancingMorph&&o.enable(3),x.matcap&&o.enable(4),x.envMap&&o.enable(5),x.normalMapObjectSpace&&o.enable(6),x.normalMapTangentSpace&&o.enable(7),x.clearcoat&&o.enable(8),x.iridescence&&o.enable(9),x.alphaTest&&o.enable(10),x.vertexColors&&o.enable(11),x.vertexAlphas&&o.enable(12),x.vertexUv1s&&o.enable(13),x.vertexUv2s&&o.enable(14),x.vertexUv3s&&o.enable(15),x.vertexTangents&&o.enable(16),x.anisotropy&&o.enable(17),x.alphaHash&&o.enable(18),x.batching&&o.enable(19),x.dispersion&&o.enable(20),x.batchingColor&&o.enable(21),y.push(o.mask),o.disableAll(),x.fog&&o.enable(0),x.useFog&&o.enable(1),x.flatShading&&o.enable(2),x.logarithmicDepthBuffer&&o.enable(3),x.reverseDepthBuffer&&o.enable(4),x.skinning&&o.enable(5),x.morphTargets&&o.enable(6),x.morphNormals&&o.enable(7),x.morphColors&&o.enable(8),x.premultipliedAlpha&&o.enable(9),x.shadowMapEnabled&&o.enable(10),x.doubleSided&&o.enable(11),x.flipSided&&o.enable(12),x.useDepthPacking&&o.enable(13),x.dithering&&o.enable(14),x.transmission&&o.enable(15),x.sheen&&o.enable(16),x.opaque&&o.enable(17),x.pointsUvs&&o.enable(18),x.decodeVideoTexture&&o.enable(19),x.decodeVideoTextureEmissive&&o.enable(20),x.alphaToCoverage&&o.enable(21),y.push(o.mask)}function S(y){const x=g[y.type];let A;if(x){const F=ln[x];A=ph.clone(F.uniforms)}else A=y.uniforms;return A}function O(y,x){let A;for(let F=0,N=u.length;F<N;F++){const k=u[F];if(k.cacheKey===x){A=k,++A.usedTimes;break}}return A===void 0&&(A=new Rp(i,x,y,a),u.push(A)),A}function C(y){if(--y.usedTimes===0){const x=u.indexOf(y);u[x]=u[u.length-1],u.pop(),y.destroy()}}function R(y){l.remove(y)}function U(){l.dispose()}return{getParameters:m,getProgramCacheKey:h,getUniforms:S,acquireProgram:O,releaseProgram:C,releaseShaderCache:R,programs:u,dispose:U}}function Up(){let i=new WeakMap;function t(r){return i.has(r)}function e(r){let o=i.get(r);return o===void 0&&(o={},i.set(r,o)),o}function n(r){i.delete(r)}function s(r,o,l){i.get(r)[o]=l}function a(){i=new WeakMap}return{has:t,get:e,remove:n,update:s,dispose:a}}function Np(i,t){return i.groupOrder!==t.groupOrder?i.groupOrder-t.groupOrder:i.renderOrder!==t.renderOrder?i.renderOrder-t.renderOrder:i.material.id!==t.material.id?i.material.id-t.material.id:i.z!==t.z?i.z-t.z:i.id-t.id}function Ko(i,t){return i.groupOrder!==t.groupOrder?i.groupOrder-t.groupOrder:i.renderOrder!==t.renderOrder?i.renderOrder-t.renderOrder:i.z!==t.z?t.z-i.z:i.id-t.id}function jo(){const i=[];let t=0;const e=[],n=[],s=[];function a(){t=0,e.length=0,n.length=0,s.length=0}function r(f,p,d,g,_,m){let h=i[t];return h===void 0?(h={id:f.id,object:f,geometry:p,material:d,groupOrder:g,renderOrder:f.renderOrder,z:_,group:m},i[t]=h):(h.id=f.id,h.object=f,h.geometry=p,h.material=d,h.groupOrder=g,h.renderOrder=f.renderOrder,h.z=_,h.group=m),t++,h}function o(f,p,d,g,_,m){const h=r(f,p,d,g,_,m);d.transmission>0?n.push(h):d.transparent===!0?s.push(h):e.push(h)}function l(f,p,d,g,_,m){const h=r(f,p,d,g,_,m);d.transmission>0?n.unshift(h):d.transparent===!0?s.unshift(h):e.unshift(h)}function c(f,p){e.length>1&&e.sort(f||Np),n.length>1&&n.sort(p||Ko),s.length>1&&s.sort(p||Ko)}function u(){for(let f=t,p=i.length;f<p;f++){const d=i[f];if(d.id===null)break;d.id=null,d.object=null,d.geometry=null,d.material=null,d.group=null}}return{opaque:e,transmissive:n,transparent:s,init:a,push:o,unshift:l,finish:u,sort:c}}function Fp(){let i=new WeakMap;function t(n,s){const a=i.get(n);let r;return a===void 0?(r=new jo,i.set(n,[r])):s>=a.length?(r=new jo,a.push(r)):r=a[s],r}function e(){i=new WeakMap}return{get:t,dispose:e}}function Op(){const i={};return{get:function(t){if(i[t.id]!==void 0)return i[t.id];let e;switch(t.type){case"DirectionalLight":e={direction:new w,color:new Bt};break;case"SpotLight":e={position:new w,direction:new w,color:new Bt,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":e={position:new w,color:new Bt,distance:0,decay:0};break;case"HemisphereLight":e={direction:new w,skyColor:new Bt,groundColor:new Bt};break;case"RectAreaLight":e={color:new Bt,position:new w,halfWidth:new w,halfHeight:new w};break}return i[t.id]=e,e}}}function Bp(){const i={};return{get:function(t){if(i[t.id]!==void 0)return i[t.id];let e;switch(t.type){case"DirectionalLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Mt};break;case"SpotLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Mt};break;case"PointLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Mt,shadowCameraNear:1,shadowCameraFar:1e3};break}return i[t.id]=e,e}}}let zp=0;function kp(i,t){return(t.castShadow?2:0)-(i.castShadow?2:0)+(t.map?1:0)-(i.map?1:0)}function Gp(i){const t=new Op,e=Bp(),n={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let c=0;c<9;c++)n.probe.push(new w);const s=new w,a=new Jt,r=new Jt;function o(c){let u=0,f=0,p=0;for(let y=0;y<9;y++)n.probe[y].set(0,0,0);let d=0,g=0,_=0,m=0,h=0,T=0,b=0,S=0,O=0,C=0,R=0;c.sort(kp);for(let y=0,x=c.length;y<x;y++){const A=c[y],F=A.color,N=A.intensity,k=A.distance,X=A.shadow&&A.shadow.map?A.shadow.map.texture:null;if(A.isAmbientLight)u+=F.r*N,f+=F.g*N,p+=F.b*N;else if(A.isLightProbe){for(let V=0;V<9;V++)n.probe[V].addScaledVector(A.sh.coefficients[V],N);R++}else if(A.isDirectionalLight){const V=t.get(A);if(V.color.copy(A.color).multiplyScalar(A.intensity),A.castShadow){const Z=A.shadow,H=e.get(A);H.shadowIntensity=Z.intensity,H.shadowBias=Z.bias,H.shadowNormalBias=Z.normalBias,H.shadowRadius=Z.radius,H.shadowMapSize=Z.mapSize,n.directionalShadow[d]=H,n.directionalShadowMap[d]=X,n.directionalShadowMatrix[d]=A.shadow.matrix,T++}n.directional[d]=V,d++}else if(A.isSpotLight){const V=t.get(A);V.position.setFromMatrixPosition(A.matrixWorld),V.color.copy(F).multiplyScalar(N),V.distance=k,V.coneCos=Math.cos(A.angle),V.penumbraCos=Math.cos(A.angle*(1-A.penumbra)),V.decay=A.decay,n.spot[_]=V;const Z=A.shadow;if(A.map&&(n.spotLightMap[O]=A.map,O++,Z.updateMatrices(A),A.castShadow&&C++),n.spotLightMatrix[_]=Z.matrix,A.castShadow){const H=e.get(A);H.shadowIntensity=Z.intensity,H.shadowBias=Z.bias,H.shadowNormalBias=Z.normalBias,H.shadowRadius=Z.radius,H.shadowMapSize=Z.mapSize,n.spotShadow[_]=H,n.spotShadowMap[_]=X,S++}_++}else if(A.isRectAreaLight){const V=t.get(A);V.color.copy(F).multiplyScalar(N),V.halfWidth.set(A.width*.5,0,0),V.halfHeight.set(0,A.height*.5,0),n.rectArea[m]=V,m++}else if(A.isPointLight){const V=t.get(A);if(V.color.copy(A.color).multiplyScalar(A.intensity),V.distance=A.distance,V.decay=A.decay,A.castShadow){const Z=A.shadow,H=e.get(A);H.shadowIntensity=Z.intensity,H.shadowBias=Z.bias,H.shadowNormalBias=Z.normalBias,H.shadowRadius=Z.radius,H.shadowMapSize=Z.mapSize,H.shadowCameraNear=Z.camera.near,H.shadowCameraFar=Z.camera.far,n.pointShadow[g]=H,n.pointShadowMap[g]=X,n.pointShadowMatrix[g]=A.shadow.matrix,b++}n.point[g]=V,g++}else if(A.isHemisphereLight){const V=t.get(A);V.skyColor.copy(A.color).multiplyScalar(N),V.groundColor.copy(A.groundColor).multiplyScalar(N),n.hemi[h]=V,h++}}m>0&&(i.has("OES_texture_float_linear")===!0?(n.rectAreaLTC1=nt.LTC_FLOAT_1,n.rectAreaLTC2=nt.LTC_FLOAT_2):(n.rectAreaLTC1=nt.LTC_HALF_1,n.rectAreaLTC2=nt.LTC_HALF_2)),n.ambient[0]=u,n.ambient[1]=f,n.ambient[2]=p;const U=n.hash;(U.directionalLength!==d||U.pointLength!==g||U.spotLength!==_||U.rectAreaLength!==m||U.hemiLength!==h||U.numDirectionalShadows!==T||U.numPointShadows!==b||U.numSpotShadows!==S||U.numSpotMaps!==O||U.numLightProbes!==R)&&(n.directional.length=d,n.spot.length=_,n.rectArea.length=m,n.point.length=g,n.hemi.length=h,n.directionalShadow.length=T,n.directionalShadowMap.length=T,n.pointShadow.length=b,n.pointShadowMap.length=b,n.spotShadow.length=S,n.spotShadowMap.length=S,n.directionalShadowMatrix.length=T,n.pointShadowMatrix.length=b,n.spotLightMatrix.length=S+O-C,n.spotLightMap.length=O,n.numSpotLightShadowsWithMaps=C,n.numLightProbes=R,U.directionalLength=d,U.pointLength=g,U.spotLength=_,U.rectAreaLength=m,U.hemiLength=h,U.numDirectionalShadows=T,U.numPointShadows=b,U.numSpotShadows=S,U.numSpotMaps=O,U.numLightProbes=R,n.version=zp++)}function l(c,u){let f=0,p=0,d=0,g=0,_=0;const m=u.matrixWorldInverse;for(let h=0,T=c.length;h<T;h++){const b=c[h];if(b.isDirectionalLight){const S=n.directional[f];S.direction.setFromMatrixPosition(b.matrixWorld),s.setFromMatrixPosition(b.target.matrixWorld),S.direction.sub(s),S.direction.transformDirection(m),f++}else if(b.isSpotLight){const S=n.spot[d];S.position.setFromMatrixPosition(b.matrixWorld),S.position.applyMatrix4(m),S.direction.setFromMatrixPosition(b.matrixWorld),s.setFromMatrixPosition(b.target.matrixWorld),S.direction.sub(s),S.direction.transformDirection(m),d++}else if(b.isRectAreaLight){const S=n.rectArea[g];S.position.setFromMatrixPosition(b.matrixWorld),S.position.applyMatrix4(m),r.identity(),a.copy(b.matrixWorld),a.premultiply(m),r.extractRotation(a),S.halfWidth.set(b.width*.5,0,0),S.halfHeight.set(0,b.height*.5,0),S.halfWidth.applyMatrix4(r),S.halfHeight.applyMatrix4(r),g++}else if(b.isPointLight){const S=n.point[p];S.position.setFromMatrixPosition(b.matrixWorld),S.position.applyMatrix4(m),p++}else if(b.isHemisphereLight){const S=n.hemi[_];S.direction.setFromMatrixPosition(b.matrixWorld),S.direction.transformDirection(m),_++}}}return{setup:o,setupView:l,state:n}}function Zo(i){const t=new Gp(i),e=[],n=[];function s(u){c.camera=u,e.length=0,n.length=0}function a(u){e.push(u)}function r(u){n.push(u)}function o(){t.setup(e)}function l(u){t.setupView(e,u)}const c={lightsArray:e,shadowsArray:n,camera:null,lights:t,transmissionRenderTarget:{}};return{init:s,state:c,setupLights:o,setupLightsView:l,pushLight:a,pushShadow:r}}function Hp(i){let t=new WeakMap;function e(s,a=0){const r=t.get(s);let o;return r===void 0?(o=new Zo(i),t.set(s,[o])):a>=r.length?(o=new Zo(i),r.push(o)):o=r[a],o}function n(){t=new WeakMap}return{get:e,dispose:n}}class Vp extends kn{static get type(){return"MeshDepthMaterial"}constructor(t){super(),this.isMeshDepthMaterial=!0,this.depthPacking=Fc,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(t)}copy(t){return super.copy(t),this.depthPacking=t.depthPacking,this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this}}class Wp extends kn{static get type(){return"MeshDistanceMaterial"}constructor(t){super(),this.isMeshDistanceMaterial=!0,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(t)}copy(t){return super.copy(t),this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this}}const Xp=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,qp=`uniform sampler2D shadow_pass;
uniform vec2 resolution;
uniform float radius;
#include <packing>
void main() {
	const float samples = float( VSM_SAMPLES );
	float mean = 0.0;
	float squared_mean = 0.0;
	float uvStride = samples <= 1.0 ? 0.0 : 2.0 / ( samples - 1.0 );
	float uvStart = samples <= 1.0 ? 0.0 : - 1.0;
	for ( float i = 0.0; i < samples; i ++ ) {
		float uvOffset = uvStart + i * uvStride;
		#ifdef HORIZONTAL_PASS
			vec2 distribution = unpackRGBATo2Half( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( uvOffset, 0.0 ) * radius ) / resolution ) );
			mean += distribution.x;
			squared_mean += distribution.y * distribution.y + distribution.x * distribution.x;
		#else
			float depth = unpackRGBAToDepth( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( 0.0, uvOffset ) * radius ) / resolution ) );
			mean += depth;
			squared_mean += depth * depth;
		#endif
	}
	mean = mean / samples;
	squared_mean = squared_mean / samples;
	float std_dev = sqrt( squared_mean - mean * mean );
	gl_FragColor = pack2HalfToRGBA( vec2( mean, std_dev ) );
}`;function Yp(i,t,e){let n=new Hr;const s=new Mt,a=new Mt,r=new jt,o=new Vp({depthPacking:Oc}),l=new Wp,c={},u=e.maxTextureSize,f={[zn]:Ee,[Ee]:zn,[De]:De},p=new sn({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new Mt},radius:{value:4}},vertexShader:Xp,fragmentShader:qp}),d=p.clone();d.defines.HORIZONTAL_PASS=1;const g=new ce;g.setAttribute("position",new se(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const _=new ae(g,p),m=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=xl;let h=this.type;this.render=function(C,R,U){if(m.enabled===!1||m.autoUpdate===!1&&m.needsUpdate===!1||C.length===0)return;const y=i.getRenderTarget(),x=i.getActiveCubeFace(),A=i.getActiveMipmapLevel(),F=i.state;F.setBlending(Fn),F.buffers.color.setClear(1,1,1,1),F.buffers.depth.setTest(!0),F.setScissorTest(!1);const N=h!==Mn&&this.type===Mn,k=h===Mn&&this.type!==Mn;for(let X=0,V=C.length;X<V;X++){const Z=C[X],H=Z.shadow;if(H===void 0){console.warn("THREE.WebGLShadowMap:",Z,"has no shadow.");continue}if(H.autoUpdate===!1&&H.needsUpdate===!1)continue;s.copy(H.mapSize);const tt=H.getFrameExtents();if(s.multiply(tt),a.copy(H.mapSize),(s.x>u||s.y>u)&&(s.x>u&&(a.x=Math.floor(u/tt.x),s.x=a.x*tt.x,H.mapSize.x=a.x),s.y>u&&(a.y=Math.floor(u/tt.y),s.y=a.y*tt.y,H.mapSize.y=a.y)),H.map===null||N===!0||k===!0){const xt=this.type!==Mn?{minFilter:nn,magFilter:nn}:{};H.map!==null&&H.map.dispose(),H.map=new si(s.x,s.y,xt),H.map.texture.name=Z.name+".shadowMap",H.camera.updateProjectionMatrix()}i.setRenderTarget(H.map),i.clear();const lt=H.getViewportCount();for(let xt=0;xt<lt;xt++){const Dt=H.getViewport(xt);r.set(a.x*Dt.x,a.y*Dt.y,a.x*Dt.z,a.y*Dt.w),F.viewport(r),H.updateMatrices(Z,xt),n=H.getFrustum(),S(R,U,H.camera,Z,this.type)}H.isPointLightShadow!==!0&&this.type===Mn&&T(H,U),H.needsUpdate=!1}h=this.type,m.needsUpdate=!1,i.setRenderTarget(y,x,A)};function T(C,R){const U=t.update(_);p.defines.VSM_SAMPLES!==C.blurSamples&&(p.defines.VSM_SAMPLES=C.blurSamples,d.defines.VSM_SAMPLES=C.blurSamples,p.needsUpdate=!0,d.needsUpdate=!0),C.mapPass===null&&(C.mapPass=new si(s.x,s.y)),p.uniforms.shadow_pass.value=C.map.texture,p.uniforms.resolution.value=C.mapSize,p.uniforms.radius.value=C.radius,i.setRenderTarget(C.mapPass),i.clear(),i.renderBufferDirect(R,null,U,p,_,null),d.uniforms.shadow_pass.value=C.mapPass.texture,d.uniforms.resolution.value=C.mapSize,d.uniforms.radius.value=C.radius,i.setRenderTarget(C.map),i.clear(),i.renderBufferDirect(R,null,U,d,_,null)}function b(C,R,U,y){let x=null;const A=U.isPointLight===!0?C.customDistanceMaterial:C.customDepthMaterial;if(A!==void 0)x=A;else if(x=U.isPointLight===!0?l:o,i.localClippingEnabled&&R.clipShadows===!0&&Array.isArray(R.clippingPlanes)&&R.clippingPlanes.length!==0||R.displacementMap&&R.displacementScale!==0||R.alphaMap&&R.alphaTest>0||R.map&&R.alphaTest>0){const F=x.uuid,N=R.uuid;let k=c[F];k===void 0&&(k={},c[F]=k);let X=k[N];X===void 0&&(X=x.clone(),k[N]=X,R.addEventListener("dispose",O)),x=X}if(x.visible=R.visible,x.wireframe=R.wireframe,y===Mn?x.side=R.shadowSide!==null?R.shadowSide:R.side:x.side=R.shadowSide!==null?R.shadowSide:f[R.side],x.alphaMap=R.alphaMap,x.alphaTest=R.alphaTest,x.map=R.map,x.clipShadows=R.clipShadows,x.clippingPlanes=R.clippingPlanes,x.clipIntersection=R.clipIntersection,x.displacementMap=R.displacementMap,x.displacementScale=R.displacementScale,x.displacementBias=R.displacementBias,x.wireframeLinewidth=R.wireframeLinewidth,x.linewidth=R.linewidth,U.isPointLight===!0&&x.isMeshDistanceMaterial===!0){const F=i.properties.get(x);F.light=U}return x}function S(C,R,U,y,x){if(C.visible===!1)return;if(C.layers.test(R.layers)&&(C.isMesh||C.isLine||C.isPoints)&&(C.castShadow||C.receiveShadow&&x===Mn)&&(!C.frustumCulled||n.intersectsObject(C))){C.modelViewMatrix.multiplyMatrices(U.matrixWorldInverse,C.matrixWorld);const N=t.update(C),k=C.material;if(Array.isArray(k)){const X=N.groups;for(let V=0,Z=X.length;V<Z;V++){const H=X[V],tt=k[H.materialIndex];if(tt&&tt.visible){const lt=b(C,tt,y,x);C.onBeforeShadow(i,C,R,U,N,lt,H),i.renderBufferDirect(U,null,N,lt,C,H),C.onAfterShadow(i,C,R,U,N,lt,H)}}}else if(k.visible){const X=b(C,k,y,x);C.onBeforeShadow(i,C,R,U,N,X,null),i.renderBufferDirect(U,null,N,X,C,null),C.onAfterShadow(i,C,R,U,N,X,null)}}const F=C.children;for(let N=0,k=F.length;N<k;N++)S(F[N],R,U,y,x)}function O(C){C.target.removeEventListener("dispose",O);for(const U in c){const y=c[U],x=C.target.uuid;x in y&&(y[x].dispose(),delete y[x])}}}const $p={[qa]:Ya,[$a]:Za,[Ka]:Ja,[Fi]:ja,[Ya]:qa,[Za]:$a,[Ja]:Ka,[ja]:Fi};function Kp(i,t){function e(){let P=!1;const it=new jt;let W=null;const K=new jt(0,0,0,0);return{setMask:function(ct){W!==ct&&!P&&(i.colorMask(ct,ct,ct,ct),W=ct)},setLocked:function(ct){P=ct},setClear:function(ct,rt,Ct,oe,Me){Me===!0&&(ct*=oe,rt*=oe,Ct*=oe),it.set(ct,rt,Ct,oe),K.equals(it)===!1&&(i.clearColor(ct,rt,Ct,oe),K.copy(it))},reset:function(){P=!1,W=null,K.set(-1,0,0,0)}}}function n(){let P=!1,it=!1,W=null,K=null,ct=null;return{setReversed:function(rt){if(it!==rt){const Ct=t.get("EXT_clip_control");it?Ct.clipControlEXT(Ct.LOWER_LEFT_EXT,Ct.ZERO_TO_ONE_EXT):Ct.clipControlEXT(Ct.LOWER_LEFT_EXT,Ct.NEGATIVE_ONE_TO_ONE_EXT);const oe=ct;ct=null,this.setClear(oe)}it=rt},getReversed:function(){return it},setTest:function(rt){rt?st(i.DEPTH_TEST):bt(i.DEPTH_TEST)},setMask:function(rt){W!==rt&&!P&&(i.depthMask(rt),W=rt)},setFunc:function(rt){if(it&&(rt=$p[rt]),K!==rt){switch(rt){case qa:i.depthFunc(i.NEVER);break;case Ya:i.depthFunc(i.ALWAYS);break;case $a:i.depthFunc(i.LESS);break;case Fi:i.depthFunc(i.LEQUAL);break;case Ka:i.depthFunc(i.EQUAL);break;case ja:i.depthFunc(i.GEQUAL);break;case Za:i.depthFunc(i.GREATER);break;case Ja:i.depthFunc(i.NOTEQUAL);break;default:i.depthFunc(i.LEQUAL)}K=rt}},setLocked:function(rt){P=rt},setClear:function(rt){ct!==rt&&(it&&(rt=1-rt),i.clearDepth(rt),ct=rt)},reset:function(){P=!1,W=null,K=null,ct=null,it=!1}}}function s(){let P=!1,it=null,W=null,K=null,ct=null,rt=null,Ct=null,oe=null,Me=null;return{setTest:function(qt){P||(qt?st(i.STENCIL_TEST):bt(i.STENCIL_TEST))},setMask:function(qt){it!==qt&&!P&&(i.stencilMask(qt),it=qt)},setFunc:function(qt,qe,dn){(W!==qt||K!==qe||ct!==dn)&&(i.stencilFunc(qt,qe,dn),W=qt,K=qe,ct=dn)},setOp:function(qt,qe,dn){(rt!==qt||Ct!==qe||oe!==dn)&&(i.stencilOp(qt,qe,dn),rt=qt,Ct=qe,oe=dn)},setLocked:function(qt){P=qt},setClear:function(qt){Me!==qt&&(i.clearStencil(qt),Me=qt)},reset:function(){P=!1,it=null,W=null,K=null,ct=null,rt=null,Ct=null,oe=null,Me=null}}}const a=new e,r=new n,o=new s,l=new WeakMap,c=new WeakMap;let u={},f={},p=new WeakMap,d=[],g=null,_=!1,m=null,h=null,T=null,b=null,S=null,O=null,C=null,R=new Bt(0,0,0),U=0,y=!1,x=null,A=null,F=null,N=null,k=null;const X=i.getParameter(i.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let V=!1,Z=0;const H=i.getParameter(i.VERSION);H.indexOf("WebGL")!==-1?(Z=parseFloat(/^WebGL (\d)/.exec(H)[1]),V=Z>=1):H.indexOf("OpenGL ES")!==-1&&(Z=parseFloat(/^OpenGL ES (\d)/.exec(H)[1]),V=Z>=2);let tt=null,lt={};const xt=i.getParameter(i.SCISSOR_BOX),Dt=i.getParameter(i.VIEWPORT),Zt=new jt().fromArray(xt),Y=new jt().fromArray(Dt);function et(P,it,W,K){const ct=new Uint8Array(4),rt=i.createTexture();i.bindTexture(P,rt),i.texParameteri(P,i.TEXTURE_MIN_FILTER,i.NEAREST),i.texParameteri(P,i.TEXTURE_MAG_FILTER,i.NEAREST);for(let Ct=0;Ct<W;Ct++)P===i.TEXTURE_3D||P===i.TEXTURE_2D_ARRAY?i.texImage3D(it,0,i.RGBA,1,1,K,0,i.RGBA,i.UNSIGNED_BYTE,ct):i.texImage2D(it+Ct,0,i.RGBA,1,1,0,i.RGBA,i.UNSIGNED_BYTE,ct);return rt}const gt={};gt[i.TEXTURE_2D]=et(i.TEXTURE_2D,i.TEXTURE_2D,1),gt[i.TEXTURE_CUBE_MAP]=et(i.TEXTURE_CUBE_MAP,i.TEXTURE_CUBE_MAP_POSITIVE_X,6),gt[i.TEXTURE_2D_ARRAY]=et(i.TEXTURE_2D_ARRAY,i.TEXTURE_2D_ARRAY,1,1),gt[i.TEXTURE_3D]=et(i.TEXTURE_3D,i.TEXTURE_3D,1,1),a.setClear(0,0,0,1),r.setClear(1),o.setClear(0),st(i.DEPTH_TEST),r.setFunc(Fi),Nt(!1),Ft(no),st(i.CULL_FACE),I(Fn);function st(P){u[P]!==!0&&(i.enable(P),u[P]=!0)}function bt(P){u[P]!==!1&&(i.disable(P),u[P]=!1)}function wt(P,it){return f[P]!==it?(i.bindFramebuffer(P,it),f[P]=it,P===i.DRAW_FRAMEBUFFER&&(f[i.FRAMEBUFFER]=it),P===i.FRAMEBUFFER&&(f[i.DRAW_FRAMEBUFFER]=it),!0):!1}function Ut(P,it){let W=d,K=!1;if(P){W=p.get(it),W===void 0&&(W=[],p.set(it,W));const ct=P.textures;if(W.length!==ct.length||W[0]!==i.COLOR_ATTACHMENT0){for(let rt=0,Ct=ct.length;rt<Ct;rt++)W[rt]=i.COLOR_ATTACHMENT0+rt;W.length=ct.length,K=!0}}else W[0]!==i.BACK&&(W[0]=i.BACK,K=!0);K&&i.drawBuffers(W)}function re(P){return g!==P?(i.useProgram(P),g=P,!0):!1}const zt={[Jn]:i.FUNC_ADD,[cc]:i.FUNC_SUBTRACT,[hc]:i.FUNC_REVERSE_SUBTRACT};zt[uc]=i.MIN,zt[dc]=i.MAX;const le={[fc]:i.ZERO,[pc]:i.ONE,[mc]:i.SRC_COLOR,[Wa]:i.SRC_ALPHA,[yc]:i.SRC_ALPHA_SATURATE,[xc]:i.DST_COLOR,[_c]:i.DST_ALPHA,[gc]:i.ONE_MINUS_SRC_COLOR,[Xa]:i.ONE_MINUS_SRC_ALPHA,[Mc]:i.ONE_MINUS_DST_COLOR,[vc]:i.ONE_MINUS_DST_ALPHA,[Sc]:i.CONSTANT_COLOR,[Ec]:i.ONE_MINUS_CONSTANT_COLOR,[bc]:i.CONSTANT_ALPHA,[Tc]:i.ONE_MINUS_CONSTANT_ALPHA};function I(P,it,W,K,ct,rt,Ct,oe,Me,qt){if(P===Fn){_===!0&&(bt(i.BLEND),_=!1);return}if(_===!1&&(st(i.BLEND),_=!0),P!==lc){if(P!==m||qt!==y){if((h!==Jn||S!==Jn)&&(i.blendEquation(i.FUNC_ADD),h=Jn,S=Jn),qt)switch(P){case Di:i.blendFuncSeparate(i.ONE,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case Be:i.blendFunc(i.ONE,i.ONE);break;case io:i.blendFuncSeparate(i.ZERO,i.ONE_MINUS_SRC_COLOR,i.ZERO,i.ONE);break;case so:i.blendFuncSeparate(i.ZERO,i.SRC_COLOR,i.ZERO,i.SRC_ALPHA);break;default:console.error("THREE.WebGLState: Invalid blending: ",P);break}else switch(P){case Di:i.blendFuncSeparate(i.SRC_ALPHA,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case Be:i.blendFunc(i.SRC_ALPHA,i.ONE);break;case io:i.blendFuncSeparate(i.ZERO,i.ONE_MINUS_SRC_COLOR,i.ZERO,i.ONE);break;case so:i.blendFunc(i.ZERO,i.SRC_COLOR);break;default:console.error("THREE.WebGLState: Invalid blending: ",P);break}T=null,b=null,O=null,C=null,R.set(0,0,0),U=0,m=P,y=qt}return}ct=ct||it,rt=rt||W,Ct=Ct||K,(it!==h||ct!==S)&&(i.blendEquationSeparate(zt[it],zt[ct]),h=it,S=ct),(W!==T||K!==b||rt!==O||Ct!==C)&&(i.blendFuncSeparate(le[W],le[K],le[rt],le[Ct]),T=W,b=K,O=rt,C=Ct),(oe.equals(R)===!1||Me!==U)&&(i.blendColor(oe.r,oe.g,oe.b,Me),R.copy(oe),U=Me),m=P,y=!1}function ze(P,it){P.side===De?bt(i.CULL_FACE):st(i.CULL_FACE);let W=P.side===Ee;it&&(W=!W),Nt(W),P.blending===Di&&P.transparent===!1?I(Fn):I(P.blending,P.blendEquation,P.blendSrc,P.blendDst,P.blendEquationAlpha,P.blendSrcAlpha,P.blendDstAlpha,P.blendColor,P.blendAlpha,P.premultipliedAlpha),r.setFunc(P.depthFunc),r.setTest(P.depthTest),r.setMask(P.depthWrite),a.setMask(P.colorWrite);const K=P.stencilWrite;o.setTest(K),K&&(o.setMask(P.stencilWriteMask),o.setFunc(P.stencilFunc,P.stencilRef,P.stencilFuncMask),o.setOp(P.stencilFail,P.stencilZFail,P.stencilZPass)),ee(P.polygonOffset,P.polygonOffsetFactor,P.polygonOffsetUnits),P.alphaToCoverage===!0?st(i.SAMPLE_ALPHA_TO_COVERAGE):bt(i.SAMPLE_ALPHA_TO_COVERAGE)}function Nt(P){x!==P&&(P?i.frontFace(i.CW):i.frontFace(i.CCW),x=P)}function Ft(P){P!==ac?(st(i.CULL_FACE),P!==A&&(P===no?i.cullFace(i.BACK):P===rc?i.cullFace(i.FRONT):i.cullFace(i.FRONT_AND_BACK))):bt(i.CULL_FACE),A=P}function St(P){P!==F&&(V&&i.lineWidth(P),F=P)}function ee(P,it,W){P?(st(i.POLYGON_OFFSET_FILL),(N!==it||k!==W)&&(i.polygonOffset(it,W),N=it,k=W)):bt(i.POLYGON_OFFSET_FILL)}function yt(P){P?st(i.SCISSOR_TEST):bt(i.SCISSOR_TEST)}function E(P){P===void 0&&(P=i.TEXTURE0+X-1),tt!==P&&(i.activeTexture(P),tt=P)}function v(P,it,W){W===void 0&&(tt===null?W=i.TEXTURE0+X-1:W=tt);let K=lt[W];K===void 0&&(K={type:void 0,texture:void 0},lt[W]=K),(K.type!==P||K.texture!==it)&&(tt!==W&&(i.activeTexture(W),tt=W),i.bindTexture(P,it||gt[P]),K.type=P,K.texture=it)}function B(){const P=lt[tt];P!==void 0&&P.type!==void 0&&(i.bindTexture(P.type,null),P.type=void 0,P.texture=void 0)}function $(){try{i.compressedTexImage2D.apply(i,arguments)}catch(P){console.error("THREE.WebGLState:",P)}}function j(){try{i.compressedTexImage3D.apply(i,arguments)}catch(P){console.error("THREE.WebGLState:",P)}}function q(){try{i.texSubImage2D.apply(i,arguments)}catch(P){console.error("THREE.WebGLState:",P)}}function _t(){try{i.texSubImage3D.apply(i,arguments)}catch(P){console.error("THREE.WebGLState:",P)}}function at(){try{i.compressedTexSubImage2D.apply(i,arguments)}catch(P){console.error("THREE.WebGLState:",P)}}function ht(){try{i.compressedTexSubImage3D.apply(i,arguments)}catch(P){console.error("THREE.WebGLState:",P)}}function kt(){try{i.texStorage2D.apply(i,arguments)}catch(P){console.error("THREE.WebGLState:",P)}}function J(){try{i.texStorage3D.apply(i,arguments)}catch(P){console.error("THREE.WebGLState:",P)}}function ut(){try{i.texImage2D.apply(i,arguments)}catch(P){console.error("THREE.WebGLState:",P)}}function Et(){try{i.texImage3D.apply(i,arguments)}catch(P){console.error("THREE.WebGLState:",P)}}function Tt(P){Zt.equals(P)===!1&&(i.scissor(P.x,P.y,P.z,P.w),Zt.copy(P))}function dt(P){Y.equals(P)===!1&&(i.viewport(P.x,P.y,P.z,P.w),Y.copy(P))}function Ot(P,it){let W=c.get(it);W===void 0&&(W=new WeakMap,c.set(it,W));let K=W.get(P);K===void 0&&(K=i.getUniformBlockIndex(it,P.name),W.set(P,K))}function Lt(P,it){const K=c.get(it).get(P);l.get(it)!==K&&(i.uniformBlockBinding(it,K,P.__bindingPointIndex),l.set(it,K))}function Qt(){i.disable(i.BLEND),i.disable(i.CULL_FACE),i.disable(i.DEPTH_TEST),i.disable(i.POLYGON_OFFSET_FILL),i.disable(i.SCISSOR_TEST),i.disable(i.STENCIL_TEST),i.disable(i.SAMPLE_ALPHA_TO_COVERAGE),i.blendEquation(i.FUNC_ADD),i.blendFunc(i.ONE,i.ZERO),i.blendFuncSeparate(i.ONE,i.ZERO,i.ONE,i.ZERO),i.blendColor(0,0,0,0),i.colorMask(!0,!0,!0,!0),i.clearColor(0,0,0,0),i.depthMask(!0),i.depthFunc(i.LESS),r.setReversed(!1),i.clearDepth(1),i.stencilMask(4294967295),i.stencilFunc(i.ALWAYS,0,4294967295),i.stencilOp(i.KEEP,i.KEEP,i.KEEP),i.clearStencil(0),i.cullFace(i.BACK),i.frontFace(i.CCW),i.polygonOffset(0,0),i.activeTexture(i.TEXTURE0),i.bindFramebuffer(i.FRAMEBUFFER,null),i.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),i.bindFramebuffer(i.READ_FRAMEBUFFER,null),i.useProgram(null),i.lineWidth(1),i.scissor(0,0,i.canvas.width,i.canvas.height),i.viewport(0,0,i.canvas.width,i.canvas.height),u={},tt=null,lt={},f={},p=new WeakMap,d=[],g=null,_=!1,m=null,h=null,T=null,b=null,S=null,O=null,C=null,R=new Bt(0,0,0),U=0,y=!1,x=null,A=null,F=null,N=null,k=null,Zt.set(0,0,i.canvas.width,i.canvas.height),Y.set(0,0,i.canvas.width,i.canvas.height),a.reset(),r.reset(),o.reset()}return{buffers:{color:a,depth:r,stencil:o},enable:st,disable:bt,bindFramebuffer:wt,drawBuffers:Ut,useProgram:re,setBlending:I,setMaterial:ze,setFlipSided:Nt,setCullFace:Ft,setLineWidth:St,setPolygonOffset:ee,setScissorTest:yt,activeTexture:E,bindTexture:v,unbindTexture:B,compressedTexImage2D:$,compressedTexImage3D:j,texImage2D:ut,texImage3D:Et,updateUBOMapping:Ot,uniformBlockBinding:Lt,texStorage2D:kt,texStorage3D:J,texSubImage2D:q,texSubImage3D:_t,compressedTexSubImage2D:at,compressedTexSubImage3D:ht,scissor:Tt,viewport:dt,reset:Qt}}function Jo(i,t,e,n){const s=jp(n);switch(e){case Tl:return i*t;case wl:return i*t;case Cl:return i*t*2;case Rl:return i*t/s.components*s.byteLength;case Br:return i*t/s.components*s.byteLength;case Pl:return i*t*2/s.components*s.byteLength;case zr:return i*t*2/s.components*s.byteLength;case Al:return i*t*3/s.components*s.byteLength;case en:return i*t*4/s.components*s.byteLength;case kr:return i*t*4/s.components*s.byteLength;case Ws:case Xs:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*8;case qs:case Ys:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*16;case sr:case rr:return Math.max(i,16)*Math.max(t,8)/4;case ir:case ar:return Math.max(i,8)*Math.max(t,8)/2;case or:case lr:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*8;case cr:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*16;case hr:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*16;case ur:return Math.floor((i+4)/5)*Math.floor((t+3)/4)*16;case dr:return Math.floor((i+4)/5)*Math.floor((t+4)/5)*16;case fr:return Math.floor((i+5)/6)*Math.floor((t+4)/5)*16;case pr:return Math.floor((i+5)/6)*Math.floor((t+5)/6)*16;case mr:return Math.floor((i+7)/8)*Math.floor((t+4)/5)*16;case gr:return Math.floor((i+7)/8)*Math.floor((t+5)/6)*16;case _r:return Math.floor((i+7)/8)*Math.floor((t+7)/8)*16;case vr:return Math.floor((i+9)/10)*Math.floor((t+4)/5)*16;case xr:return Math.floor((i+9)/10)*Math.floor((t+5)/6)*16;case Mr:return Math.floor((i+9)/10)*Math.floor((t+7)/8)*16;case yr:return Math.floor((i+9)/10)*Math.floor((t+9)/10)*16;case Sr:return Math.floor((i+11)/12)*Math.floor((t+9)/10)*16;case Er:return Math.floor((i+11)/12)*Math.floor((t+11)/12)*16;case $s:case br:case Tr:return Math.ceil(i/4)*Math.ceil(t/4)*16;case Dl:case Ar:return Math.ceil(i/4)*Math.ceil(t/4)*8;case wr:case Cr:return Math.ceil(i/4)*Math.ceil(t/4)*16}throw new Error(`Unable to determine texture byte length for ${e} format.`)}function jp(i){switch(i){case bn:case Sl:return{byteLength:1,components:1};case as:case El:case rs:return{byteLength:2,components:1};case Fr:case Or:return{byteLength:2,components:4};case ii:case Nr:case yn:return{byteLength:4,components:1};case bl:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${i}.`)}function Zp(i,t,e,n,s,a,r){const o=t.has("WEBGL_multisampled_render_to_texture")?t.get("WEBGL_multisampled_render_to_texture"):null,l=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),c=new Mt,u=new WeakMap;let f;const p=new WeakMap;let d=!1;try{d=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function g(E,v){return d?new OffscreenCanvas(E,v):Qs("canvas")}function _(E,v,B){let $=1;const j=yt(E);if((j.width>B||j.height>B)&&($=B/Math.max(j.width,j.height)),$<1)if(typeof HTMLImageElement<"u"&&E instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&E instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&E instanceof ImageBitmap||typeof VideoFrame<"u"&&E instanceof VideoFrame){const q=Math.floor($*j.width),_t=Math.floor($*j.height);f===void 0&&(f=g(q,_t));const at=v?g(q,_t):f;return at.width=q,at.height=_t,at.getContext("2d").drawImage(E,0,0,q,_t),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+j.width+"x"+j.height+") to ("+q+"x"+_t+")."),at}else return"data"in E&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+j.width+"x"+j.height+")."),E;return E}function m(E){return E.generateMipmaps}function h(E){i.generateMipmap(E)}function T(E){return E.isWebGLCubeRenderTarget?i.TEXTURE_CUBE_MAP:E.isWebGL3DRenderTarget?i.TEXTURE_3D:E.isWebGLArrayRenderTarget||E.isCompressedArrayTexture?i.TEXTURE_2D_ARRAY:i.TEXTURE_2D}function b(E,v,B,$,j=!1){if(E!==null){if(i[E]!==void 0)return i[E];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+E+"'")}let q=v;if(v===i.RED&&(B===i.FLOAT&&(q=i.R32F),B===i.HALF_FLOAT&&(q=i.R16F),B===i.UNSIGNED_BYTE&&(q=i.R8)),v===i.RED_INTEGER&&(B===i.UNSIGNED_BYTE&&(q=i.R8UI),B===i.UNSIGNED_SHORT&&(q=i.R16UI),B===i.UNSIGNED_INT&&(q=i.R32UI),B===i.BYTE&&(q=i.R8I),B===i.SHORT&&(q=i.R16I),B===i.INT&&(q=i.R32I)),v===i.RG&&(B===i.FLOAT&&(q=i.RG32F),B===i.HALF_FLOAT&&(q=i.RG16F),B===i.UNSIGNED_BYTE&&(q=i.RG8)),v===i.RG_INTEGER&&(B===i.UNSIGNED_BYTE&&(q=i.RG8UI),B===i.UNSIGNED_SHORT&&(q=i.RG16UI),B===i.UNSIGNED_INT&&(q=i.RG32UI),B===i.BYTE&&(q=i.RG8I),B===i.SHORT&&(q=i.RG16I),B===i.INT&&(q=i.RG32I)),v===i.RGB_INTEGER&&(B===i.UNSIGNED_BYTE&&(q=i.RGB8UI),B===i.UNSIGNED_SHORT&&(q=i.RGB16UI),B===i.UNSIGNED_INT&&(q=i.RGB32UI),B===i.BYTE&&(q=i.RGB8I),B===i.SHORT&&(q=i.RGB16I),B===i.INT&&(q=i.RGB32I)),v===i.RGBA_INTEGER&&(B===i.UNSIGNED_BYTE&&(q=i.RGBA8UI),B===i.UNSIGNED_SHORT&&(q=i.RGBA16UI),B===i.UNSIGNED_INT&&(q=i.RGBA32UI),B===i.BYTE&&(q=i.RGBA8I),B===i.SHORT&&(q=i.RGBA16I),B===i.INT&&(q=i.RGBA32I)),v===i.RGB&&B===i.UNSIGNED_INT_5_9_9_9_REV&&(q=i.RGB9_E5),v===i.RGBA){const _t=j?sa:Gt.getTransfer($);B===i.FLOAT&&(q=i.RGBA32F),B===i.HALF_FLOAT&&(q=i.RGBA16F),B===i.UNSIGNED_BYTE&&(q=_t===Yt?i.SRGB8_ALPHA8:i.RGBA8),B===i.UNSIGNED_SHORT_4_4_4_4&&(q=i.RGBA4),B===i.UNSIGNED_SHORT_5_5_5_1&&(q=i.RGB5_A1)}return(q===i.R16F||q===i.R32F||q===i.RG16F||q===i.RG32F||q===i.RGBA16F||q===i.RGBA32F)&&t.get("EXT_color_buffer_float"),q}function S(E,v){let B;return E?v===null||v===ii||v===zi?B=i.DEPTH24_STENCIL8:v===yn?B=i.DEPTH32F_STENCIL8:v===as&&(B=i.DEPTH24_STENCIL8,console.warn("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):v===null||v===ii||v===zi?B=i.DEPTH_COMPONENT24:v===yn?B=i.DEPTH_COMPONENT32F:v===as&&(B=i.DEPTH_COMPONENT16),B}function O(E,v){return m(E)===!0||E.isFramebufferTexture&&E.minFilter!==nn&&E.minFilter!==hn?Math.log2(Math.max(v.width,v.height))+1:E.mipmaps!==void 0&&E.mipmaps.length>0?E.mipmaps.length:E.isCompressedTexture&&Array.isArray(E.image)?v.mipmaps.length:1}function C(E){const v=E.target;v.removeEventListener("dispose",C),U(v),v.isVideoTexture&&u.delete(v)}function R(E){const v=E.target;v.removeEventListener("dispose",R),x(v)}function U(E){const v=n.get(E);if(v.__webglInit===void 0)return;const B=E.source,$=p.get(B);if($){const j=$[v.__cacheKey];j.usedTimes--,j.usedTimes===0&&y(E),Object.keys($).length===0&&p.delete(B)}n.remove(E)}function y(E){const v=n.get(E);i.deleteTexture(v.__webglTexture);const B=E.source,$=p.get(B);delete $[v.__cacheKey],r.memory.textures--}function x(E){const v=n.get(E);if(E.depthTexture&&(E.depthTexture.dispose(),n.remove(E.depthTexture)),E.isWebGLCubeRenderTarget)for(let $=0;$<6;$++){if(Array.isArray(v.__webglFramebuffer[$]))for(let j=0;j<v.__webglFramebuffer[$].length;j++)i.deleteFramebuffer(v.__webglFramebuffer[$][j]);else i.deleteFramebuffer(v.__webglFramebuffer[$]);v.__webglDepthbuffer&&i.deleteRenderbuffer(v.__webglDepthbuffer[$])}else{if(Array.isArray(v.__webglFramebuffer))for(let $=0;$<v.__webglFramebuffer.length;$++)i.deleteFramebuffer(v.__webglFramebuffer[$]);else i.deleteFramebuffer(v.__webglFramebuffer);if(v.__webglDepthbuffer&&i.deleteRenderbuffer(v.__webglDepthbuffer),v.__webglMultisampledFramebuffer&&i.deleteFramebuffer(v.__webglMultisampledFramebuffer),v.__webglColorRenderbuffer)for(let $=0;$<v.__webglColorRenderbuffer.length;$++)v.__webglColorRenderbuffer[$]&&i.deleteRenderbuffer(v.__webglColorRenderbuffer[$]);v.__webglDepthRenderbuffer&&i.deleteRenderbuffer(v.__webglDepthRenderbuffer)}const B=E.textures;for(let $=0,j=B.length;$<j;$++){const q=n.get(B[$]);q.__webglTexture&&(i.deleteTexture(q.__webglTexture),r.memory.textures--),n.remove(B[$])}n.remove(E)}let A=0;function F(){A=0}function N(){const E=A;return E>=s.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+E+" texture units while this GPU supports only "+s.maxTextures),A+=1,E}function k(E){const v=[];return v.push(E.wrapS),v.push(E.wrapT),v.push(E.wrapR||0),v.push(E.magFilter),v.push(E.minFilter),v.push(E.anisotropy),v.push(E.internalFormat),v.push(E.format),v.push(E.type),v.push(E.generateMipmaps),v.push(E.premultiplyAlpha),v.push(E.flipY),v.push(E.unpackAlignment),v.push(E.colorSpace),v.join()}function X(E,v){const B=n.get(E);if(E.isVideoTexture&&St(E),E.isRenderTargetTexture===!1&&E.version>0&&B.__version!==E.version){const $=E.image;if($===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if($.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{Y(B,E,v);return}}e.bindTexture(i.TEXTURE_2D,B.__webglTexture,i.TEXTURE0+v)}function V(E,v){const B=n.get(E);if(E.version>0&&B.__version!==E.version){Y(B,E,v);return}e.bindTexture(i.TEXTURE_2D_ARRAY,B.__webglTexture,i.TEXTURE0+v)}function Z(E,v){const B=n.get(E);if(E.version>0&&B.__version!==E.version){Y(B,E,v);return}e.bindTexture(i.TEXTURE_3D,B.__webglTexture,i.TEXTURE0+v)}function H(E,v){const B=n.get(E);if(E.version>0&&B.__version!==E.version){et(B,E,v);return}e.bindTexture(i.TEXTURE_CUBE_MAP,B.__webglTexture,i.TEXTURE0+v)}const tt={[er]:i.REPEAT,[ti]:i.CLAMP_TO_EDGE,[nr]:i.MIRRORED_REPEAT},lt={[nn]:i.NEAREST,[Nc]:i.NEAREST_MIPMAP_NEAREST,[ps]:i.NEAREST_MIPMAP_LINEAR,[hn]:i.LINEAR,[oa]:i.LINEAR_MIPMAP_NEAREST,[ei]:i.LINEAR_MIPMAP_LINEAR},xt={[zc]:i.NEVER,[Xc]:i.ALWAYS,[kc]:i.LESS,[Il]:i.LEQUAL,[Gc]:i.EQUAL,[Wc]:i.GEQUAL,[Hc]:i.GREATER,[Vc]:i.NOTEQUAL};function Dt(E,v){if(v.type===yn&&t.has("OES_texture_float_linear")===!1&&(v.magFilter===hn||v.magFilter===oa||v.magFilter===ps||v.magFilter===ei||v.minFilter===hn||v.minFilter===oa||v.minFilter===ps||v.minFilter===ei)&&console.warn("THREE.WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),i.texParameteri(E,i.TEXTURE_WRAP_S,tt[v.wrapS]),i.texParameteri(E,i.TEXTURE_WRAP_T,tt[v.wrapT]),(E===i.TEXTURE_3D||E===i.TEXTURE_2D_ARRAY)&&i.texParameteri(E,i.TEXTURE_WRAP_R,tt[v.wrapR]),i.texParameteri(E,i.TEXTURE_MAG_FILTER,lt[v.magFilter]),i.texParameteri(E,i.TEXTURE_MIN_FILTER,lt[v.minFilter]),v.compareFunction&&(i.texParameteri(E,i.TEXTURE_COMPARE_MODE,i.COMPARE_REF_TO_TEXTURE),i.texParameteri(E,i.TEXTURE_COMPARE_FUNC,xt[v.compareFunction])),t.has("EXT_texture_filter_anisotropic")===!0){if(v.magFilter===nn||v.minFilter!==ps&&v.minFilter!==ei||v.type===yn&&t.has("OES_texture_float_linear")===!1)return;if(v.anisotropy>1||n.get(v).__currentAnisotropy){const B=t.get("EXT_texture_filter_anisotropic");i.texParameterf(E,B.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(v.anisotropy,s.getMaxAnisotropy())),n.get(v).__currentAnisotropy=v.anisotropy}}}function Zt(E,v){let B=!1;E.__webglInit===void 0&&(E.__webglInit=!0,v.addEventListener("dispose",C));const $=v.source;let j=p.get($);j===void 0&&(j={},p.set($,j));const q=k(v);if(q!==E.__cacheKey){j[q]===void 0&&(j[q]={texture:i.createTexture(),usedTimes:0},r.memory.textures++,B=!0),j[q].usedTimes++;const _t=j[E.__cacheKey];_t!==void 0&&(j[E.__cacheKey].usedTimes--,_t.usedTimes===0&&y(v)),E.__cacheKey=q,E.__webglTexture=j[q].texture}return B}function Y(E,v,B){let $=i.TEXTURE_2D;(v.isDataArrayTexture||v.isCompressedArrayTexture)&&($=i.TEXTURE_2D_ARRAY),v.isData3DTexture&&($=i.TEXTURE_3D);const j=Zt(E,v),q=v.source;e.bindTexture($,E.__webglTexture,i.TEXTURE0+B);const _t=n.get(q);if(q.version!==_t.__version||j===!0){e.activeTexture(i.TEXTURE0+B);const at=Gt.getPrimaries(Gt.workingColorSpace),ht=v.colorSpace===Nn?null:Gt.getPrimaries(v.colorSpace),kt=v.colorSpace===Nn||at===ht?i.NONE:i.BROWSER_DEFAULT_WEBGL;i.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,v.flipY),i.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,v.premultiplyAlpha),i.pixelStorei(i.UNPACK_ALIGNMENT,v.unpackAlignment),i.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,kt);let J=_(v.image,!1,s.maxTextureSize);J=ee(v,J);const ut=a.convert(v.format,v.colorSpace),Et=a.convert(v.type);let Tt=b(v.internalFormat,ut,Et,v.colorSpace,v.isVideoTexture);Dt($,v);let dt;const Ot=v.mipmaps,Lt=v.isVideoTexture!==!0,Qt=_t.__version===void 0||j===!0,P=q.dataReady,it=O(v,J);if(v.isDepthTexture)Tt=S(v.format===ki,v.type),Qt&&(Lt?e.texStorage2D(i.TEXTURE_2D,1,Tt,J.width,J.height):e.texImage2D(i.TEXTURE_2D,0,Tt,J.width,J.height,0,ut,Et,null));else if(v.isDataTexture)if(Ot.length>0){Lt&&Qt&&e.texStorage2D(i.TEXTURE_2D,it,Tt,Ot[0].width,Ot[0].height);for(let W=0,K=Ot.length;W<K;W++)dt=Ot[W],Lt?P&&e.texSubImage2D(i.TEXTURE_2D,W,0,0,dt.width,dt.height,ut,Et,dt.data):e.texImage2D(i.TEXTURE_2D,W,Tt,dt.width,dt.height,0,ut,Et,dt.data);v.generateMipmaps=!1}else Lt?(Qt&&e.texStorage2D(i.TEXTURE_2D,it,Tt,J.width,J.height),P&&e.texSubImage2D(i.TEXTURE_2D,0,0,0,J.width,J.height,ut,Et,J.data)):e.texImage2D(i.TEXTURE_2D,0,Tt,J.width,J.height,0,ut,Et,J.data);else if(v.isCompressedTexture)if(v.isCompressedArrayTexture){Lt&&Qt&&e.texStorage3D(i.TEXTURE_2D_ARRAY,it,Tt,Ot[0].width,Ot[0].height,J.depth);for(let W=0,K=Ot.length;W<K;W++)if(dt=Ot[W],v.format!==en)if(ut!==null)if(Lt){if(P)if(v.layerUpdates.size>0){const ct=Jo(dt.width,dt.height,v.format,v.type);for(const rt of v.layerUpdates){const Ct=dt.data.subarray(rt*ct/dt.data.BYTES_PER_ELEMENT,(rt+1)*ct/dt.data.BYTES_PER_ELEMENT);e.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,W,0,0,rt,dt.width,dt.height,1,ut,Ct)}v.clearLayerUpdates()}else e.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,W,0,0,0,dt.width,dt.height,J.depth,ut,dt.data)}else e.compressedTexImage3D(i.TEXTURE_2D_ARRAY,W,Tt,dt.width,dt.height,J.depth,0,dt.data,0,0);else console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else Lt?P&&e.texSubImage3D(i.TEXTURE_2D_ARRAY,W,0,0,0,dt.width,dt.height,J.depth,ut,Et,dt.data):e.texImage3D(i.TEXTURE_2D_ARRAY,W,Tt,dt.width,dt.height,J.depth,0,ut,Et,dt.data)}else{Lt&&Qt&&e.texStorage2D(i.TEXTURE_2D,it,Tt,Ot[0].width,Ot[0].height);for(let W=0,K=Ot.length;W<K;W++)dt=Ot[W],v.format!==en?ut!==null?Lt?P&&e.compressedTexSubImage2D(i.TEXTURE_2D,W,0,0,dt.width,dt.height,ut,dt.data):e.compressedTexImage2D(i.TEXTURE_2D,W,Tt,dt.width,dt.height,0,dt.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):Lt?P&&e.texSubImage2D(i.TEXTURE_2D,W,0,0,dt.width,dt.height,ut,Et,dt.data):e.texImage2D(i.TEXTURE_2D,W,Tt,dt.width,dt.height,0,ut,Et,dt.data)}else if(v.isDataArrayTexture)if(Lt){if(Qt&&e.texStorage3D(i.TEXTURE_2D_ARRAY,it,Tt,J.width,J.height,J.depth),P)if(v.layerUpdates.size>0){const W=Jo(J.width,J.height,v.format,v.type);for(const K of v.layerUpdates){const ct=J.data.subarray(K*W/J.data.BYTES_PER_ELEMENT,(K+1)*W/J.data.BYTES_PER_ELEMENT);e.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,K,J.width,J.height,1,ut,Et,ct)}v.clearLayerUpdates()}else e.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,0,J.width,J.height,J.depth,ut,Et,J.data)}else e.texImage3D(i.TEXTURE_2D_ARRAY,0,Tt,J.width,J.height,J.depth,0,ut,Et,J.data);else if(v.isData3DTexture)Lt?(Qt&&e.texStorage3D(i.TEXTURE_3D,it,Tt,J.width,J.height,J.depth),P&&e.texSubImage3D(i.TEXTURE_3D,0,0,0,0,J.width,J.height,J.depth,ut,Et,J.data)):e.texImage3D(i.TEXTURE_3D,0,Tt,J.width,J.height,J.depth,0,ut,Et,J.data);else if(v.isFramebufferTexture){if(Qt)if(Lt)e.texStorage2D(i.TEXTURE_2D,it,Tt,J.width,J.height);else{let W=J.width,K=J.height;for(let ct=0;ct<it;ct++)e.texImage2D(i.TEXTURE_2D,ct,Tt,W,K,0,ut,Et,null),W>>=1,K>>=1}}else if(Ot.length>0){if(Lt&&Qt){const W=yt(Ot[0]);e.texStorage2D(i.TEXTURE_2D,it,Tt,W.width,W.height)}for(let W=0,K=Ot.length;W<K;W++)dt=Ot[W],Lt?P&&e.texSubImage2D(i.TEXTURE_2D,W,0,0,ut,Et,dt):e.texImage2D(i.TEXTURE_2D,W,Tt,ut,Et,dt);v.generateMipmaps=!1}else if(Lt){if(Qt){const W=yt(J);e.texStorage2D(i.TEXTURE_2D,it,Tt,W.width,W.height)}P&&e.texSubImage2D(i.TEXTURE_2D,0,0,0,ut,Et,J)}else e.texImage2D(i.TEXTURE_2D,0,Tt,ut,Et,J);m(v)&&h($),_t.__version=q.version,v.onUpdate&&v.onUpdate(v)}E.__version=v.version}function et(E,v,B){if(v.image.length!==6)return;const $=Zt(E,v),j=v.source;e.bindTexture(i.TEXTURE_CUBE_MAP,E.__webglTexture,i.TEXTURE0+B);const q=n.get(j);if(j.version!==q.__version||$===!0){e.activeTexture(i.TEXTURE0+B);const _t=Gt.getPrimaries(Gt.workingColorSpace),at=v.colorSpace===Nn?null:Gt.getPrimaries(v.colorSpace),ht=v.colorSpace===Nn||_t===at?i.NONE:i.BROWSER_DEFAULT_WEBGL;i.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,v.flipY),i.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,v.premultiplyAlpha),i.pixelStorei(i.UNPACK_ALIGNMENT,v.unpackAlignment),i.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,ht);const kt=v.isCompressedTexture||v.image[0].isCompressedTexture,J=v.image[0]&&v.image[0].isDataTexture,ut=[];for(let K=0;K<6;K++)!kt&&!J?ut[K]=_(v.image[K],!0,s.maxCubemapSize):ut[K]=J?v.image[K].image:v.image[K],ut[K]=ee(v,ut[K]);const Et=ut[0],Tt=a.convert(v.format,v.colorSpace),dt=a.convert(v.type),Ot=b(v.internalFormat,Tt,dt,v.colorSpace),Lt=v.isVideoTexture!==!0,Qt=q.__version===void 0||$===!0,P=j.dataReady;let it=O(v,Et);Dt(i.TEXTURE_CUBE_MAP,v);let W;if(kt){Lt&&Qt&&e.texStorage2D(i.TEXTURE_CUBE_MAP,it,Ot,Et.width,Et.height);for(let K=0;K<6;K++){W=ut[K].mipmaps;for(let ct=0;ct<W.length;ct++){const rt=W[ct];v.format!==en?Tt!==null?Lt?P&&e.compressedTexSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+K,ct,0,0,rt.width,rt.height,Tt,rt.data):e.compressedTexImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+K,ct,Ot,rt.width,rt.height,0,rt.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):Lt?P&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+K,ct,0,0,rt.width,rt.height,Tt,dt,rt.data):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+K,ct,Ot,rt.width,rt.height,0,Tt,dt,rt.data)}}}else{if(W=v.mipmaps,Lt&&Qt){W.length>0&&it++;const K=yt(ut[0]);e.texStorage2D(i.TEXTURE_CUBE_MAP,it,Ot,K.width,K.height)}for(let K=0;K<6;K++)if(J){Lt?P&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+K,0,0,0,ut[K].width,ut[K].height,Tt,dt,ut[K].data):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+K,0,Ot,ut[K].width,ut[K].height,0,Tt,dt,ut[K].data);for(let ct=0;ct<W.length;ct++){const Ct=W[ct].image[K].image;Lt?P&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+K,ct+1,0,0,Ct.width,Ct.height,Tt,dt,Ct.data):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+K,ct+1,Ot,Ct.width,Ct.height,0,Tt,dt,Ct.data)}}else{Lt?P&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+K,0,0,0,Tt,dt,ut[K]):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+K,0,Ot,Tt,dt,ut[K]);for(let ct=0;ct<W.length;ct++){const rt=W[ct];Lt?P&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+K,ct+1,0,0,Tt,dt,rt.image[K]):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+K,ct+1,Ot,Tt,dt,rt.image[K])}}}m(v)&&h(i.TEXTURE_CUBE_MAP),q.__version=j.version,v.onUpdate&&v.onUpdate(v)}E.__version=v.version}function gt(E,v,B,$,j,q){const _t=a.convert(B.format,B.colorSpace),at=a.convert(B.type),ht=b(B.internalFormat,_t,at,B.colorSpace),kt=n.get(v),J=n.get(B);if(J.__renderTarget=v,!kt.__hasExternalTextures){const ut=Math.max(1,v.width>>q),Et=Math.max(1,v.height>>q);j===i.TEXTURE_3D||j===i.TEXTURE_2D_ARRAY?e.texImage3D(j,q,ht,ut,Et,v.depth,0,_t,at,null):e.texImage2D(j,q,ht,ut,Et,0,_t,at,null)}e.bindFramebuffer(i.FRAMEBUFFER,E),Ft(v)?o.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,$,j,J.__webglTexture,0,Nt(v)):(j===i.TEXTURE_2D||j>=i.TEXTURE_CUBE_MAP_POSITIVE_X&&j<=i.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&i.framebufferTexture2D(i.FRAMEBUFFER,$,j,J.__webglTexture,q),e.bindFramebuffer(i.FRAMEBUFFER,null)}function st(E,v,B){if(i.bindRenderbuffer(i.RENDERBUFFER,E),v.depthBuffer){const $=v.depthTexture,j=$&&$.isDepthTexture?$.type:null,q=S(v.stencilBuffer,j),_t=v.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,at=Nt(v);Ft(v)?o.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,at,q,v.width,v.height):B?i.renderbufferStorageMultisample(i.RENDERBUFFER,at,q,v.width,v.height):i.renderbufferStorage(i.RENDERBUFFER,q,v.width,v.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,_t,i.RENDERBUFFER,E)}else{const $=v.textures;for(let j=0;j<$.length;j++){const q=$[j],_t=a.convert(q.format,q.colorSpace),at=a.convert(q.type),ht=b(q.internalFormat,_t,at,q.colorSpace),kt=Nt(v);B&&Ft(v)===!1?i.renderbufferStorageMultisample(i.RENDERBUFFER,kt,ht,v.width,v.height):Ft(v)?o.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,kt,ht,v.width,v.height):i.renderbufferStorage(i.RENDERBUFFER,ht,v.width,v.height)}}i.bindRenderbuffer(i.RENDERBUFFER,null)}function bt(E,v){if(v&&v.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(e.bindFramebuffer(i.FRAMEBUFFER,E),!(v.depthTexture&&v.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");const $=n.get(v.depthTexture);$.__renderTarget=v,(!$.__webglTexture||v.depthTexture.image.width!==v.width||v.depthTexture.image.height!==v.height)&&(v.depthTexture.image.width=v.width,v.depthTexture.image.height=v.height,v.depthTexture.needsUpdate=!0),X(v.depthTexture,0);const j=$.__webglTexture,q=Nt(v);if(v.depthTexture.format===Li)Ft(v)?o.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,i.DEPTH_ATTACHMENT,i.TEXTURE_2D,j,0,q):i.framebufferTexture2D(i.FRAMEBUFFER,i.DEPTH_ATTACHMENT,i.TEXTURE_2D,j,0);else if(v.depthTexture.format===ki)Ft(v)?o.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,i.DEPTH_STENCIL_ATTACHMENT,i.TEXTURE_2D,j,0,q):i.framebufferTexture2D(i.FRAMEBUFFER,i.DEPTH_STENCIL_ATTACHMENT,i.TEXTURE_2D,j,0);else throw new Error("Unknown depthTexture format")}function wt(E){const v=n.get(E),B=E.isWebGLCubeRenderTarget===!0;if(v.__boundDepthTexture!==E.depthTexture){const $=E.depthTexture;if(v.__depthDisposeCallback&&v.__depthDisposeCallback(),$){const j=()=>{delete v.__boundDepthTexture,delete v.__depthDisposeCallback,$.removeEventListener("dispose",j)};$.addEventListener("dispose",j),v.__depthDisposeCallback=j}v.__boundDepthTexture=$}if(E.depthTexture&&!v.__autoAllocateDepthBuffer){if(B)throw new Error("target.depthTexture not supported in Cube render targets");bt(v.__webglFramebuffer,E)}else if(B){v.__webglDepthbuffer=[];for(let $=0;$<6;$++)if(e.bindFramebuffer(i.FRAMEBUFFER,v.__webglFramebuffer[$]),v.__webglDepthbuffer[$]===void 0)v.__webglDepthbuffer[$]=i.createRenderbuffer(),st(v.__webglDepthbuffer[$],E,!1);else{const j=E.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,q=v.__webglDepthbuffer[$];i.bindRenderbuffer(i.RENDERBUFFER,q),i.framebufferRenderbuffer(i.FRAMEBUFFER,j,i.RENDERBUFFER,q)}}else if(e.bindFramebuffer(i.FRAMEBUFFER,v.__webglFramebuffer),v.__webglDepthbuffer===void 0)v.__webglDepthbuffer=i.createRenderbuffer(),st(v.__webglDepthbuffer,E,!1);else{const $=E.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,j=v.__webglDepthbuffer;i.bindRenderbuffer(i.RENDERBUFFER,j),i.framebufferRenderbuffer(i.FRAMEBUFFER,$,i.RENDERBUFFER,j)}e.bindFramebuffer(i.FRAMEBUFFER,null)}function Ut(E,v,B){const $=n.get(E);v!==void 0&&gt($.__webglFramebuffer,E,E.texture,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,0),B!==void 0&&wt(E)}function re(E){const v=E.texture,B=n.get(E),$=n.get(v);E.addEventListener("dispose",R);const j=E.textures,q=E.isWebGLCubeRenderTarget===!0,_t=j.length>1;if(_t||($.__webglTexture===void 0&&($.__webglTexture=i.createTexture()),$.__version=v.version,r.memory.textures++),q){B.__webglFramebuffer=[];for(let at=0;at<6;at++)if(v.mipmaps&&v.mipmaps.length>0){B.__webglFramebuffer[at]=[];for(let ht=0;ht<v.mipmaps.length;ht++)B.__webglFramebuffer[at][ht]=i.createFramebuffer()}else B.__webglFramebuffer[at]=i.createFramebuffer()}else{if(v.mipmaps&&v.mipmaps.length>0){B.__webglFramebuffer=[];for(let at=0;at<v.mipmaps.length;at++)B.__webglFramebuffer[at]=i.createFramebuffer()}else B.__webglFramebuffer=i.createFramebuffer();if(_t)for(let at=0,ht=j.length;at<ht;at++){const kt=n.get(j[at]);kt.__webglTexture===void 0&&(kt.__webglTexture=i.createTexture(),r.memory.textures++)}if(E.samples>0&&Ft(E)===!1){B.__webglMultisampledFramebuffer=i.createFramebuffer(),B.__webglColorRenderbuffer=[],e.bindFramebuffer(i.FRAMEBUFFER,B.__webglMultisampledFramebuffer);for(let at=0;at<j.length;at++){const ht=j[at];B.__webglColorRenderbuffer[at]=i.createRenderbuffer(),i.bindRenderbuffer(i.RENDERBUFFER,B.__webglColorRenderbuffer[at]);const kt=a.convert(ht.format,ht.colorSpace),J=a.convert(ht.type),ut=b(ht.internalFormat,kt,J,ht.colorSpace,E.isXRRenderTarget===!0),Et=Nt(E);i.renderbufferStorageMultisample(i.RENDERBUFFER,Et,ut,E.width,E.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+at,i.RENDERBUFFER,B.__webglColorRenderbuffer[at])}i.bindRenderbuffer(i.RENDERBUFFER,null),E.depthBuffer&&(B.__webglDepthRenderbuffer=i.createRenderbuffer(),st(B.__webglDepthRenderbuffer,E,!0)),e.bindFramebuffer(i.FRAMEBUFFER,null)}}if(q){e.bindTexture(i.TEXTURE_CUBE_MAP,$.__webglTexture),Dt(i.TEXTURE_CUBE_MAP,v);for(let at=0;at<6;at++)if(v.mipmaps&&v.mipmaps.length>0)for(let ht=0;ht<v.mipmaps.length;ht++)gt(B.__webglFramebuffer[at][ht],E,v,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+at,ht);else gt(B.__webglFramebuffer[at],E,v,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+at,0);m(v)&&h(i.TEXTURE_CUBE_MAP),e.unbindTexture()}else if(_t){for(let at=0,ht=j.length;at<ht;at++){const kt=j[at],J=n.get(kt);e.bindTexture(i.TEXTURE_2D,J.__webglTexture),Dt(i.TEXTURE_2D,kt),gt(B.__webglFramebuffer,E,kt,i.COLOR_ATTACHMENT0+at,i.TEXTURE_2D,0),m(kt)&&h(i.TEXTURE_2D)}e.unbindTexture()}else{let at=i.TEXTURE_2D;if((E.isWebGL3DRenderTarget||E.isWebGLArrayRenderTarget)&&(at=E.isWebGL3DRenderTarget?i.TEXTURE_3D:i.TEXTURE_2D_ARRAY),e.bindTexture(at,$.__webglTexture),Dt(at,v),v.mipmaps&&v.mipmaps.length>0)for(let ht=0;ht<v.mipmaps.length;ht++)gt(B.__webglFramebuffer[ht],E,v,i.COLOR_ATTACHMENT0,at,ht);else gt(B.__webglFramebuffer,E,v,i.COLOR_ATTACHMENT0,at,0);m(v)&&h(at),e.unbindTexture()}E.depthBuffer&&wt(E)}function zt(E){const v=E.textures;for(let B=0,$=v.length;B<$;B++){const j=v[B];if(m(j)){const q=T(E),_t=n.get(j).__webglTexture;e.bindTexture(q,_t),h(q),e.unbindTexture()}}}const le=[],I=[];function ze(E){if(E.samples>0){if(Ft(E)===!1){const v=E.textures,B=E.width,$=E.height;let j=i.COLOR_BUFFER_BIT;const q=E.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,_t=n.get(E),at=v.length>1;if(at)for(let ht=0;ht<v.length;ht++)e.bindFramebuffer(i.FRAMEBUFFER,_t.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+ht,i.RENDERBUFFER,null),e.bindFramebuffer(i.FRAMEBUFFER,_t.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+ht,i.TEXTURE_2D,null,0);e.bindFramebuffer(i.READ_FRAMEBUFFER,_t.__webglMultisampledFramebuffer),e.bindFramebuffer(i.DRAW_FRAMEBUFFER,_t.__webglFramebuffer);for(let ht=0;ht<v.length;ht++){if(E.resolveDepthBuffer&&(E.depthBuffer&&(j|=i.DEPTH_BUFFER_BIT),E.stencilBuffer&&E.resolveStencilBuffer&&(j|=i.STENCIL_BUFFER_BIT)),at){i.framebufferRenderbuffer(i.READ_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.RENDERBUFFER,_t.__webglColorRenderbuffer[ht]);const kt=n.get(v[ht]).__webglTexture;i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,kt,0)}i.blitFramebuffer(0,0,B,$,0,0,B,$,j,i.NEAREST),l===!0&&(le.length=0,I.length=0,le.push(i.COLOR_ATTACHMENT0+ht),E.depthBuffer&&E.resolveDepthBuffer===!1&&(le.push(q),I.push(q),i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER,I)),i.invalidateFramebuffer(i.READ_FRAMEBUFFER,le))}if(e.bindFramebuffer(i.READ_FRAMEBUFFER,null),e.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),at)for(let ht=0;ht<v.length;ht++){e.bindFramebuffer(i.FRAMEBUFFER,_t.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+ht,i.RENDERBUFFER,_t.__webglColorRenderbuffer[ht]);const kt=n.get(v[ht]).__webglTexture;e.bindFramebuffer(i.FRAMEBUFFER,_t.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+ht,i.TEXTURE_2D,kt,0)}e.bindFramebuffer(i.DRAW_FRAMEBUFFER,_t.__webglMultisampledFramebuffer)}else if(E.depthBuffer&&E.resolveDepthBuffer===!1&&l){const v=E.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT;i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER,[v])}}}function Nt(E){return Math.min(s.maxSamples,E.samples)}function Ft(E){const v=n.get(E);return E.samples>0&&t.has("WEBGL_multisampled_render_to_texture")===!0&&v.__useRenderToTexture!==!1}function St(E){const v=r.render.frame;u.get(E)!==v&&(u.set(E,v),E.update())}function ee(E,v){const B=E.colorSpace,$=E.format,j=E.type;return E.isCompressedTexture===!0||E.isVideoTexture===!0||B!==Hi&&B!==Nn&&(Gt.getTransfer(B)===Yt?($!==en||j!==bn)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",B)),v}function yt(E){return typeof HTMLImageElement<"u"&&E instanceof HTMLImageElement?(c.width=E.naturalWidth||E.width,c.height=E.naturalHeight||E.height):typeof VideoFrame<"u"&&E instanceof VideoFrame?(c.width=E.displayWidth,c.height=E.displayHeight):(c.width=E.width,c.height=E.height),c}this.allocateTextureUnit=N,this.resetTextureUnits=F,this.setTexture2D=X,this.setTexture2DArray=V,this.setTexture3D=Z,this.setTextureCube=H,this.rebindTextures=Ut,this.setupRenderTarget=re,this.updateRenderTargetMipmap=zt,this.updateMultisampleRenderTarget=ze,this.setupDepthRenderbuffer=wt,this.setupFrameBufferTexture=gt,this.useMultisampledRTT=Ft}function Jp(i,t){function e(n,s=Nn){let a;const r=Gt.getTransfer(s);if(n===bn)return i.UNSIGNED_BYTE;if(n===Fr)return i.UNSIGNED_SHORT_4_4_4_4;if(n===Or)return i.UNSIGNED_SHORT_5_5_5_1;if(n===bl)return i.UNSIGNED_INT_5_9_9_9_REV;if(n===Sl)return i.BYTE;if(n===El)return i.SHORT;if(n===as)return i.UNSIGNED_SHORT;if(n===Nr)return i.INT;if(n===ii)return i.UNSIGNED_INT;if(n===yn)return i.FLOAT;if(n===rs)return i.HALF_FLOAT;if(n===Tl)return i.ALPHA;if(n===Al)return i.RGB;if(n===en)return i.RGBA;if(n===wl)return i.LUMINANCE;if(n===Cl)return i.LUMINANCE_ALPHA;if(n===Li)return i.DEPTH_COMPONENT;if(n===ki)return i.DEPTH_STENCIL;if(n===Rl)return i.RED;if(n===Br)return i.RED_INTEGER;if(n===Pl)return i.RG;if(n===zr)return i.RG_INTEGER;if(n===kr)return i.RGBA_INTEGER;if(n===Ws||n===Xs||n===qs||n===Ys)if(r===Yt)if(a=t.get("WEBGL_compressed_texture_s3tc_srgb"),a!==null){if(n===Ws)return a.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(n===Xs)return a.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(n===qs)return a.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(n===Ys)return a.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(a=t.get("WEBGL_compressed_texture_s3tc"),a!==null){if(n===Ws)return a.COMPRESSED_RGB_S3TC_DXT1_EXT;if(n===Xs)return a.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(n===qs)return a.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(n===Ys)return a.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(n===ir||n===sr||n===ar||n===rr)if(a=t.get("WEBGL_compressed_texture_pvrtc"),a!==null){if(n===ir)return a.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(n===sr)return a.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(n===ar)return a.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(n===rr)return a.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(n===or||n===lr||n===cr)if(a=t.get("WEBGL_compressed_texture_etc"),a!==null){if(n===or||n===lr)return r===Yt?a.COMPRESSED_SRGB8_ETC2:a.COMPRESSED_RGB8_ETC2;if(n===cr)return r===Yt?a.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:a.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(n===hr||n===ur||n===dr||n===fr||n===pr||n===mr||n===gr||n===_r||n===vr||n===xr||n===Mr||n===yr||n===Sr||n===Er)if(a=t.get("WEBGL_compressed_texture_astc"),a!==null){if(n===hr)return r===Yt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:a.COMPRESSED_RGBA_ASTC_4x4_KHR;if(n===ur)return r===Yt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:a.COMPRESSED_RGBA_ASTC_5x4_KHR;if(n===dr)return r===Yt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:a.COMPRESSED_RGBA_ASTC_5x5_KHR;if(n===fr)return r===Yt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:a.COMPRESSED_RGBA_ASTC_6x5_KHR;if(n===pr)return r===Yt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:a.COMPRESSED_RGBA_ASTC_6x6_KHR;if(n===mr)return r===Yt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:a.COMPRESSED_RGBA_ASTC_8x5_KHR;if(n===gr)return r===Yt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:a.COMPRESSED_RGBA_ASTC_8x6_KHR;if(n===_r)return r===Yt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:a.COMPRESSED_RGBA_ASTC_8x8_KHR;if(n===vr)return r===Yt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:a.COMPRESSED_RGBA_ASTC_10x5_KHR;if(n===xr)return r===Yt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:a.COMPRESSED_RGBA_ASTC_10x6_KHR;if(n===Mr)return r===Yt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:a.COMPRESSED_RGBA_ASTC_10x8_KHR;if(n===yr)return r===Yt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:a.COMPRESSED_RGBA_ASTC_10x10_KHR;if(n===Sr)return r===Yt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:a.COMPRESSED_RGBA_ASTC_12x10_KHR;if(n===Er)return r===Yt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:a.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(n===$s||n===br||n===Tr)if(a=t.get("EXT_texture_compression_bptc"),a!==null){if(n===$s)return r===Yt?a.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:a.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(n===br)return a.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(n===Tr)return a.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(n===Dl||n===Ar||n===wr||n===Cr)if(a=t.get("EXT_texture_compression_rgtc"),a!==null){if(n===$s)return a.COMPRESSED_RED_RGTC1_EXT;if(n===Ar)return a.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(n===wr)return a.COMPRESSED_RED_GREEN_RGTC2_EXT;if(n===Cr)return a.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return n===zi?i.UNSIGNED_INT_24_8:i[n]!==void 0?i[n]:null}return{convert:e}}class Qp extends Fe{constructor(t=[]){super(),this.isArrayCamera=!0,this.cameras=t}}class we extends _e{constructor(){super(),this.isGroup=!0,this.type="Group"}}const tm={type:"move"};class Na{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new we,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new we,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new w,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new w),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new we,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new w,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new w),this._grip}dispatchEvent(t){return this._targetRay!==null&&this._targetRay.dispatchEvent(t),this._grip!==null&&this._grip.dispatchEvent(t),this._hand!==null&&this._hand.dispatchEvent(t),this}connect(t){if(t&&t.hand){const e=this._hand;if(e)for(const n of t.hand.values())this._getHandJoint(e,n)}return this.dispatchEvent({type:"connected",data:t}),this}disconnect(t){return this.dispatchEvent({type:"disconnected",data:t}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(t,e,n){let s=null,a=null,r=null;const o=this._targetRay,l=this._grip,c=this._hand;if(t&&e.session.visibilityState!=="visible-blurred"){if(c&&t.hand){r=!0;for(const _ of t.hand.values()){const m=e.getJointPose(_,n),h=this._getHandJoint(c,_);m!==null&&(h.matrix.fromArray(m.transform.matrix),h.matrix.decompose(h.position,h.rotation,h.scale),h.matrixWorldNeedsUpdate=!0,h.jointRadius=m.radius),h.visible=m!==null}const u=c.joints["index-finger-tip"],f=c.joints["thumb-tip"],p=u.position.distanceTo(f.position),d=.02,g=.005;c.inputState.pinching&&p>d+g?(c.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:t.handedness,target:this})):!c.inputState.pinching&&p<=d-g&&(c.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:t.handedness,target:this}))}else l!==null&&t.gripSpace&&(a=e.getPose(t.gripSpace,n),a!==null&&(l.matrix.fromArray(a.transform.matrix),l.matrix.decompose(l.position,l.rotation,l.scale),l.matrixWorldNeedsUpdate=!0,a.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(a.linearVelocity)):l.hasLinearVelocity=!1,a.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(a.angularVelocity)):l.hasAngularVelocity=!1));o!==null&&(s=e.getPose(t.targetRaySpace,n),s===null&&a!==null&&(s=a),s!==null&&(o.matrix.fromArray(s.transform.matrix),o.matrix.decompose(o.position,o.rotation,o.scale),o.matrixWorldNeedsUpdate=!0,s.linearVelocity?(o.hasLinearVelocity=!0,o.linearVelocity.copy(s.linearVelocity)):o.hasLinearVelocity=!1,s.angularVelocity?(o.hasAngularVelocity=!0,o.angularVelocity.copy(s.angularVelocity)):o.hasAngularVelocity=!1,this.dispatchEvent(tm)))}return o!==null&&(o.visible=s!==null),l!==null&&(l.visible=a!==null),c!==null&&(c.visible=r!==null),this}_getHandJoint(t,e){if(t.joints[e.jointName]===void 0){const n=new we;n.matrixAutoUpdate=!1,n.visible=!1,t.joints[e.jointName]=n,t.add(n)}return t.joints[e.jointName]}}const em=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,nm=`
uniform sampler2DArray depthColor;
uniform float depthWidth;
uniform float depthHeight;

void main() {

	vec2 coord = vec2( gl_FragCoord.x / depthWidth, gl_FragCoord.y / depthHeight );

	if ( coord.x >= 1.0 ) {

		gl_FragDepth = texture( depthColor, vec3( coord.x - 1.0, coord.y, 1 ) ).r;

	} else {

		gl_FragDepth = texture( depthColor, vec3( coord.x, coord.y, 0 ) ).r;

	}

}`;class im{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(t,e,n){if(this.texture===null){const s=new Ce,a=t.properties.get(s);a.__webglTexture=e.texture,(e.depthNear!=n.depthNear||e.depthFar!=n.depthFar)&&(this.depthNear=e.depthNear,this.depthFar=e.depthFar),this.texture=s}}getMesh(t){if(this.texture!==null&&this.mesh===null){const e=t.cameras[0].viewport,n=new sn({vertexShader:em,fragmentShader:nm,uniforms:{depthColor:{value:this.texture},depthWidth:{value:e.z},depthHeight:{value:e.w}}});this.mesh=new ae(new us(20,20),n)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class sm extends ri{constructor(t,e){super();const n=this;let s=null,a=1,r=null,o="local-floor",l=1,c=null,u=null,f=null,p=null,d=null,g=null;const _=new im,m=e.getContextAttributes();let h=null,T=null;const b=[],S=[],O=new Mt;let C=null;const R=new Fe;R.viewport=new jt;const U=new Fe;U.viewport=new jt;const y=[R,U],x=new Qp;let A=null,F=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(Y){let et=b[Y];return et===void 0&&(et=new Na,b[Y]=et),et.getTargetRaySpace()},this.getControllerGrip=function(Y){let et=b[Y];return et===void 0&&(et=new Na,b[Y]=et),et.getGripSpace()},this.getHand=function(Y){let et=b[Y];return et===void 0&&(et=new Na,b[Y]=et),et.getHandSpace()};function N(Y){const et=S.indexOf(Y.inputSource);if(et===-1)return;const gt=b[et];gt!==void 0&&(gt.update(Y.inputSource,Y.frame,c||r),gt.dispatchEvent({type:Y.type,data:Y.inputSource}))}function k(){s.removeEventListener("select",N),s.removeEventListener("selectstart",N),s.removeEventListener("selectend",N),s.removeEventListener("squeeze",N),s.removeEventListener("squeezestart",N),s.removeEventListener("squeezeend",N),s.removeEventListener("end",k),s.removeEventListener("inputsourceschange",X);for(let Y=0;Y<b.length;Y++){const et=S[Y];et!==null&&(S[Y]=null,b[Y].disconnect(et))}A=null,F=null,_.reset(),t.setRenderTarget(h),d=null,p=null,f=null,s=null,T=null,Zt.stop(),n.isPresenting=!1,t.setPixelRatio(C),t.setSize(O.width,O.height,!1),n.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(Y){a=Y,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(Y){o=Y,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return c||r},this.setReferenceSpace=function(Y){c=Y},this.getBaseLayer=function(){return p!==null?p:d},this.getBinding=function(){return f},this.getFrame=function(){return g},this.getSession=function(){return s},this.setSession=async function(Y){if(s=Y,s!==null){if(h=t.getRenderTarget(),s.addEventListener("select",N),s.addEventListener("selectstart",N),s.addEventListener("selectend",N),s.addEventListener("squeeze",N),s.addEventListener("squeezestart",N),s.addEventListener("squeezeend",N),s.addEventListener("end",k),s.addEventListener("inputsourceschange",X),m.xrCompatible!==!0&&await e.makeXRCompatible(),C=t.getPixelRatio(),t.getSize(O),s.renderState.layers===void 0){const et={antialias:m.antialias,alpha:!0,depth:m.depth,stencil:m.stencil,framebufferScaleFactor:a};d=new XRWebGLLayer(s,e,et),s.updateRenderState({baseLayer:d}),t.setPixelRatio(1),t.setSize(d.framebufferWidth,d.framebufferHeight,!1),T=new si(d.framebufferWidth,d.framebufferHeight,{format:en,type:bn,colorSpace:t.outputColorSpace,stencilBuffer:m.stencil})}else{let et=null,gt=null,st=null;m.depth&&(st=m.stencil?e.DEPTH24_STENCIL8:e.DEPTH_COMPONENT24,et=m.stencil?ki:Li,gt=m.stencil?zi:ii);const bt={colorFormat:e.RGBA8,depthFormat:st,scaleFactor:a};f=new XRWebGLBinding(s,e),p=f.createProjectionLayer(bt),s.updateRenderState({layers:[p]}),t.setPixelRatio(1),t.setSize(p.textureWidth,p.textureHeight,!1),T=new si(p.textureWidth,p.textureHeight,{format:en,type:bn,depthTexture:new Wl(p.textureWidth,p.textureHeight,gt,void 0,void 0,void 0,void 0,void 0,void 0,et),stencilBuffer:m.stencil,colorSpace:t.outputColorSpace,samples:m.antialias?4:0,resolveDepthBuffer:p.ignoreDepthValues===!1})}T.isXRRenderTarget=!0,this.setFoveation(l),c=null,r=await s.requestReferenceSpace(o),Zt.setContext(s),Zt.start(),n.isPresenting=!0,n.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(s!==null)return s.environmentBlendMode},this.getDepthTexture=function(){return _.getDepthTexture()};function X(Y){for(let et=0;et<Y.removed.length;et++){const gt=Y.removed[et],st=S.indexOf(gt);st>=0&&(S[st]=null,b[st].disconnect(gt))}for(let et=0;et<Y.added.length;et++){const gt=Y.added[et];let st=S.indexOf(gt);if(st===-1){for(let wt=0;wt<b.length;wt++)if(wt>=S.length){S.push(gt),st=wt;break}else if(S[wt]===null){S[wt]=gt,st=wt;break}if(st===-1)break}const bt=b[st];bt&&bt.connect(gt)}}const V=new w,Z=new w;function H(Y,et,gt){V.setFromMatrixPosition(et.matrixWorld),Z.setFromMatrixPosition(gt.matrixWorld);const st=V.distanceTo(Z),bt=et.projectionMatrix.elements,wt=gt.projectionMatrix.elements,Ut=bt[14]/(bt[10]-1),re=bt[14]/(bt[10]+1),zt=(bt[9]+1)/bt[5],le=(bt[9]-1)/bt[5],I=(bt[8]-1)/bt[0],ze=(wt[8]+1)/wt[0],Nt=Ut*I,Ft=Ut*ze,St=st/(-I+ze),ee=St*-I;if(et.matrixWorld.decompose(Y.position,Y.quaternion,Y.scale),Y.translateX(ee),Y.translateZ(St),Y.matrixWorld.compose(Y.position,Y.quaternion,Y.scale),Y.matrixWorldInverse.copy(Y.matrixWorld).invert(),bt[10]===-1)Y.projectionMatrix.copy(et.projectionMatrix),Y.projectionMatrixInverse.copy(et.projectionMatrixInverse);else{const yt=Ut+St,E=re+St,v=Nt-ee,B=Ft+(st-ee),$=zt*re/E*yt,j=le*re/E*yt;Y.projectionMatrix.makePerspective(v,B,$,j,yt,E),Y.projectionMatrixInverse.copy(Y.projectionMatrix).invert()}}function tt(Y,et){et===null?Y.matrixWorld.copy(Y.matrix):Y.matrixWorld.multiplyMatrices(et.matrixWorld,Y.matrix),Y.matrixWorldInverse.copy(Y.matrixWorld).invert()}this.updateCamera=function(Y){if(s===null)return;let et=Y.near,gt=Y.far;_.texture!==null&&(_.depthNear>0&&(et=_.depthNear),_.depthFar>0&&(gt=_.depthFar)),x.near=U.near=R.near=et,x.far=U.far=R.far=gt,(A!==x.near||F!==x.far)&&(s.updateRenderState({depthNear:x.near,depthFar:x.far}),A=x.near,F=x.far),R.layers.mask=Y.layers.mask|2,U.layers.mask=Y.layers.mask|4,x.layers.mask=R.layers.mask|U.layers.mask;const st=Y.parent,bt=x.cameras;tt(x,st);for(let wt=0;wt<bt.length;wt++)tt(bt[wt],st);bt.length===2?H(x,R,U):x.projectionMatrix.copy(R.projectionMatrix),lt(Y,x,st)};function lt(Y,et,gt){gt===null?Y.matrix.copy(et.matrixWorld):(Y.matrix.copy(gt.matrixWorld),Y.matrix.invert(),Y.matrix.multiply(et.matrixWorld)),Y.matrix.decompose(Y.position,Y.quaternion,Y.scale),Y.updateMatrixWorld(!0),Y.projectionMatrix.copy(et.projectionMatrix),Y.projectionMatrixInverse.copy(et.projectionMatrixInverse),Y.isPerspectiveCamera&&(Y.fov=Pr*2*Math.atan(1/Y.projectionMatrix.elements[5]),Y.zoom=1)}this.getCamera=function(){return x},this.getFoveation=function(){if(!(p===null&&d===null))return l},this.setFoveation=function(Y){l=Y,p!==null&&(p.fixedFoveation=Y),d!==null&&d.fixedFoveation!==void 0&&(d.fixedFoveation=Y)},this.hasDepthSensing=function(){return _.texture!==null},this.getDepthSensingMesh=function(){return _.getMesh(x)};let xt=null;function Dt(Y,et){if(u=et.getViewerPose(c||r),g=et,u!==null){const gt=u.views;d!==null&&(t.setRenderTargetFramebuffer(T,d.framebuffer),t.setRenderTarget(T));let st=!1;gt.length!==x.cameras.length&&(x.cameras.length=0,st=!0);for(let wt=0;wt<gt.length;wt++){const Ut=gt[wt];let re=null;if(d!==null)re=d.getViewport(Ut);else{const le=f.getViewSubImage(p,Ut);re=le.viewport,wt===0&&(t.setRenderTargetTextures(T,le.colorTexture,p.ignoreDepthValues?void 0:le.depthStencilTexture),t.setRenderTarget(T))}let zt=y[wt];zt===void 0&&(zt=new Fe,zt.layers.enable(wt),zt.viewport=new jt,y[wt]=zt),zt.matrix.fromArray(Ut.transform.matrix),zt.matrix.decompose(zt.position,zt.quaternion,zt.scale),zt.projectionMatrix.fromArray(Ut.projectionMatrix),zt.projectionMatrixInverse.copy(zt.projectionMatrix).invert(),zt.viewport.set(re.x,re.y,re.width,re.height),wt===0&&(x.matrix.copy(zt.matrix),x.matrix.decompose(x.position,x.quaternion,x.scale)),st===!0&&x.cameras.push(zt)}const bt=s.enabledFeatures;if(bt&&bt.includes("depth-sensing")){const wt=f.getDepthInformation(gt[0]);wt&&wt.isValid&&wt.texture&&_.init(t,wt,s.renderState)}}for(let gt=0;gt<b.length;gt++){const st=S[gt],bt=b[gt];st!==null&&bt!==void 0&&bt.update(st,et,c||r)}xt&&xt(Y,et),et.detectedPlanes&&n.dispatchEvent({type:"planesdetected",data:et}),g=null}const Zt=new Vl;Zt.setAnimationLoop(Dt),this.setAnimationLoop=function(Y){xt=Y},this.dispose=function(){}}}const Yn=new un,am=new Jt;function rm(i,t){function e(m,h){m.matrixAutoUpdate===!0&&m.updateMatrix(),h.value.copy(m.matrix)}function n(m,h){h.color.getRGB(m.fogColor.value,kl(i)),h.isFog?(m.fogNear.value=h.near,m.fogFar.value=h.far):h.isFogExp2&&(m.fogDensity.value=h.density)}function s(m,h,T,b,S){h.isMeshBasicMaterial||h.isMeshLambertMaterial?a(m,h):h.isMeshToonMaterial?(a(m,h),f(m,h)):h.isMeshPhongMaterial?(a(m,h),u(m,h)):h.isMeshStandardMaterial?(a(m,h),p(m,h),h.isMeshPhysicalMaterial&&d(m,h,S)):h.isMeshMatcapMaterial?(a(m,h),g(m,h)):h.isMeshDepthMaterial?a(m,h):h.isMeshDistanceMaterial?(a(m,h),_(m,h)):h.isMeshNormalMaterial?a(m,h):h.isLineBasicMaterial?(r(m,h),h.isLineDashedMaterial&&o(m,h)):h.isPointsMaterial?l(m,h,T,b):h.isSpriteMaterial?c(m,h):h.isShadowMaterial?(m.color.value.copy(h.color),m.opacity.value=h.opacity):h.isShaderMaterial&&(h.uniformsNeedUpdate=!1)}function a(m,h){m.opacity.value=h.opacity,h.color&&m.diffuse.value.copy(h.color),h.emissive&&m.emissive.value.copy(h.emissive).multiplyScalar(h.emissiveIntensity),h.map&&(m.map.value=h.map,e(h.map,m.mapTransform)),h.alphaMap&&(m.alphaMap.value=h.alphaMap,e(h.alphaMap,m.alphaMapTransform)),h.bumpMap&&(m.bumpMap.value=h.bumpMap,e(h.bumpMap,m.bumpMapTransform),m.bumpScale.value=h.bumpScale,h.side===Ee&&(m.bumpScale.value*=-1)),h.normalMap&&(m.normalMap.value=h.normalMap,e(h.normalMap,m.normalMapTransform),m.normalScale.value.copy(h.normalScale),h.side===Ee&&m.normalScale.value.negate()),h.displacementMap&&(m.displacementMap.value=h.displacementMap,e(h.displacementMap,m.displacementMapTransform),m.displacementScale.value=h.displacementScale,m.displacementBias.value=h.displacementBias),h.emissiveMap&&(m.emissiveMap.value=h.emissiveMap,e(h.emissiveMap,m.emissiveMapTransform)),h.specularMap&&(m.specularMap.value=h.specularMap,e(h.specularMap,m.specularMapTransform)),h.alphaTest>0&&(m.alphaTest.value=h.alphaTest);const T=t.get(h),b=T.envMap,S=T.envMapRotation;b&&(m.envMap.value=b,Yn.copy(S),Yn.x*=-1,Yn.y*=-1,Yn.z*=-1,b.isCubeTexture&&b.isRenderTargetTexture===!1&&(Yn.y*=-1,Yn.z*=-1),m.envMapRotation.value.setFromMatrix4(am.makeRotationFromEuler(Yn)),m.flipEnvMap.value=b.isCubeTexture&&b.isRenderTargetTexture===!1?-1:1,m.reflectivity.value=h.reflectivity,m.ior.value=h.ior,m.refractionRatio.value=h.refractionRatio),h.lightMap&&(m.lightMap.value=h.lightMap,m.lightMapIntensity.value=h.lightMapIntensity,e(h.lightMap,m.lightMapTransform)),h.aoMap&&(m.aoMap.value=h.aoMap,m.aoMapIntensity.value=h.aoMapIntensity,e(h.aoMap,m.aoMapTransform))}function r(m,h){m.diffuse.value.copy(h.color),m.opacity.value=h.opacity,h.map&&(m.map.value=h.map,e(h.map,m.mapTransform))}function o(m,h){m.dashSize.value=h.dashSize,m.totalSize.value=h.dashSize+h.gapSize,m.scale.value=h.scale}function l(m,h,T,b){m.diffuse.value.copy(h.color),m.opacity.value=h.opacity,m.size.value=h.size*T,m.scale.value=b*.5,h.map&&(m.map.value=h.map,e(h.map,m.uvTransform)),h.alphaMap&&(m.alphaMap.value=h.alphaMap,e(h.alphaMap,m.alphaMapTransform)),h.alphaTest>0&&(m.alphaTest.value=h.alphaTest)}function c(m,h){m.diffuse.value.copy(h.color),m.opacity.value=h.opacity,m.rotation.value=h.rotation,h.map&&(m.map.value=h.map,e(h.map,m.mapTransform)),h.alphaMap&&(m.alphaMap.value=h.alphaMap,e(h.alphaMap,m.alphaMapTransform)),h.alphaTest>0&&(m.alphaTest.value=h.alphaTest)}function u(m,h){m.specular.value.copy(h.specular),m.shininess.value=Math.max(h.shininess,1e-4)}function f(m,h){h.gradientMap&&(m.gradientMap.value=h.gradientMap)}function p(m,h){m.metalness.value=h.metalness,h.metalnessMap&&(m.metalnessMap.value=h.metalnessMap,e(h.metalnessMap,m.metalnessMapTransform)),m.roughness.value=h.roughness,h.roughnessMap&&(m.roughnessMap.value=h.roughnessMap,e(h.roughnessMap,m.roughnessMapTransform)),h.envMap&&(m.envMapIntensity.value=h.envMapIntensity)}function d(m,h,T){m.ior.value=h.ior,h.sheen>0&&(m.sheenColor.value.copy(h.sheenColor).multiplyScalar(h.sheen),m.sheenRoughness.value=h.sheenRoughness,h.sheenColorMap&&(m.sheenColorMap.value=h.sheenColorMap,e(h.sheenColorMap,m.sheenColorMapTransform)),h.sheenRoughnessMap&&(m.sheenRoughnessMap.value=h.sheenRoughnessMap,e(h.sheenRoughnessMap,m.sheenRoughnessMapTransform))),h.clearcoat>0&&(m.clearcoat.value=h.clearcoat,m.clearcoatRoughness.value=h.clearcoatRoughness,h.clearcoatMap&&(m.clearcoatMap.value=h.clearcoatMap,e(h.clearcoatMap,m.clearcoatMapTransform)),h.clearcoatRoughnessMap&&(m.clearcoatRoughnessMap.value=h.clearcoatRoughnessMap,e(h.clearcoatRoughnessMap,m.clearcoatRoughnessMapTransform)),h.clearcoatNormalMap&&(m.clearcoatNormalMap.value=h.clearcoatNormalMap,e(h.clearcoatNormalMap,m.clearcoatNormalMapTransform),m.clearcoatNormalScale.value.copy(h.clearcoatNormalScale),h.side===Ee&&m.clearcoatNormalScale.value.negate())),h.dispersion>0&&(m.dispersion.value=h.dispersion),h.iridescence>0&&(m.iridescence.value=h.iridescence,m.iridescenceIOR.value=h.iridescenceIOR,m.iridescenceThicknessMinimum.value=h.iridescenceThicknessRange[0],m.iridescenceThicknessMaximum.value=h.iridescenceThicknessRange[1],h.iridescenceMap&&(m.iridescenceMap.value=h.iridescenceMap,e(h.iridescenceMap,m.iridescenceMapTransform)),h.iridescenceThicknessMap&&(m.iridescenceThicknessMap.value=h.iridescenceThicknessMap,e(h.iridescenceThicknessMap,m.iridescenceThicknessMapTransform))),h.transmission>0&&(m.transmission.value=h.transmission,m.transmissionSamplerMap.value=T.texture,m.transmissionSamplerSize.value.set(T.width,T.height),h.transmissionMap&&(m.transmissionMap.value=h.transmissionMap,e(h.transmissionMap,m.transmissionMapTransform)),m.thickness.value=h.thickness,h.thicknessMap&&(m.thicknessMap.value=h.thicknessMap,e(h.thicknessMap,m.thicknessMapTransform)),m.attenuationDistance.value=h.attenuationDistance,m.attenuationColor.value.copy(h.attenuationColor)),h.anisotropy>0&&(m.anisotropyVector.value.set(h.anisotropy*Math.cos(h.anisotropyRotation),h.anisotropy*Math.sin(h.anisotropyRotation)),h.anisotropyMap&&(m.anisotropyMap.value=h.anisotropyMap,e(h.anisotropyMap,m.anisotropyMapTransform))),m.specularIntensity.value=h.specularIntensity,m.specularColor.value.copy(h.specularColor),h.specularColorMap&&(m.specularColorMap.value=h.specularColorMap,e(h.specularColorMap,m.specularColorMapTransform)),h.specularIntensityMap&&(m.specularIntensityMap.value=h.specularIntensityMap,e(h.specularIntensityMap,m.specularIntensityMapTransform))}function g(m,h){h.matcap&&(m.matcap.value=h.matcap)}function _(m,h){const T=t.get(h).light;m.referencePosition.value.setFromMatrixPosition(T.matrixWorld),m.nearDistance.value=T.shadow.camera.near,m.farDistance.value=T.shadow.camera.far}return{refreshFogUniforms:n,refreshMaterialUniforms:s}}function om(i,t,e,n){let s={},a={},r=[];const o=i.getParameter(i.MAX_UNIFORM_BUFFER_BINDINGS);function l(T,b){const S=b.program;n.uniformBlockBinding(T,S)}function c(T,b){let S=s[T.id];S===void 0&&(g(T),S=u(T),s[T.id]=S,T.addEventListener("dispose",m));const O=b.program;n.updateUBOMapping(T,O);const C=t.render.frame;a[T.id]!==C&&(p(T),a[T.id]=C)}function u(T){const b=f();T.__bindingPointIndex=b;const S=i.createBuffer(),O=T.__size,C=T.usage;return i.bindBuffer(i.UNIFORM_BUFFER,S),i.bufferData(i.UNIFORM_BUFFER,O,C),i.bindBuffer(i.UNIFORM_BUFFER,null),i.bindBufferBase(i.UNIFORM_BUFFER,b,S),S}function f(){for(let T=0;T<o;T++)if(r.indexOf(T)===-1)return r.push(T),T;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function p(T){const b=s[T.id],S=T.uniforms,O=T.__cache;i.bindBuffer(i.UNIFORM_BUFFER,b);for(let C=0,R=S.length;C<R;C++){const U=Array.isArray(S[C])?S[C]:[S[C]];for(let y=0,x=U.length;y<x;y++){const A=U[y];if(d(A,C,y,O)===!0){const F=A.__offset,N=Array.isArray(A.value)?A.value:[A.value];let k=0;for(let X=0;X<N.length;X++){const V=N[X],Z=_(V);typeof V=="number"||typeof V=="boolean"?(A.__data[0]=V,i.bufferSubData(i.UNIFORM_BUFFER,F+k,A.__data)):V.isMatrix3?(A.__data[0]=V.elements[0],A.__data[1]=V.elements[1],A.__data[2]=V.elements[2],A.__data[3]=0,A.__data[4]=V.elements[3],A.__data[5]=V.elements[4],A.__data[6]=V.elements[5],A.__data[7]=0,A.__data[8]=V.elements[6],A.__data[9]=V.elements[7],A.__data[10]=V.elements[8],A.__data[11]=0):(V.toArray(A.__data,k),k+=Z.storage/Float32Array.BYTES_PER_ELEMENT)}i.bufferSubData(i.UNIFORM_BUFFER,F,A.__data)}}}i.bindBuffer(i.UNIFORM_BUFFER,null)}function d(T,b,S,O){const C=T.value,R=b+"_"+S;if(O[R]===void 0)return typeof C=="number"||typeof C=="boolean"?O[R]=C:O[R]=C.clone(),!0;{const U=O[R];if(typeof C=="number"||typeof C=="boolean"){if(U!==C)return O[R]=C,!0}else if(U.equals(C)===!1)return U.copy(C),!0}return!1}function g(T){const b=T.uniforms;let S=0;const O=16;for(let R=0,U=b.length;R<U;R++){const y=Array.isArray(b[R])?b[R]:[b[R]];for(let x=0,A=y.length;x<A;x++){const F=y[x],N=Array.isArray(F.value)?F.value:[F.value];for(let k=0,X=N.length;k<X;k++){const V=N[k],Z=_(V),H=S%O,tt=H%Z.boundary,lt=H+tt;S+=tt,lt!==0&&O-lt<Z.storage&&(S+=O-lt),F.__data=new Float32Array(Z.storage/Float32Array.BYTES_PER_ELEMENT),F.__offset=S,S+=Z.storage}}}const C=S%O;return C>0&&(S+=O-C),T.__size=S,T.__cache={},this}function _(T){const b={boundary:0,storage:0};return typeof T=="number"||typeof T=="boolean"?(b.boundary=4,b.storage=4):T.isVector2?(b.boundary=8,b.storage=8):T.isVector3||T.isColor?(b.boundary=16,b.storage=12):T.isVector4?(b.boundary=16,b.storage=16):T.isMatrix3?(b.boundary=48,b.storage=48):T.isMatrix4?(b.boundary=64,b.storage=64):T.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",T),b}function m(T){const b=T.target;b.removeEventListener("dispose",m);const S=r.indexOf(b.__bindingPointIndex);r.splice(S,1),i.deleteBuffer(s[b.id]),delete s[b.id],delete a[b.id]}function h(){for(const T in s)i.deleteBuffer(s[T]);r=[],s={},a={}}return{bind:l,update:c,dispose:h}}class lm{constructor(t={}){const{canvas:e=$c(),context:n=null,depth:s=!0,stencil:a=!1,alpha:r=!1,antialias:o=!1,premultipliedAlpha:l=!0,preserveDrawingBuffer:c=!1,powerPreference:u="default",failIfMajorPerformanceCaveat:f=!1,reverseDepthBuffer:p=!1}=t;this.isWebGLRenderer=!0;let d;if(n!==null){if(typeof WebGLRenderingContext<"u"&&n instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");d=n.getContextAttributes().alpha}else d=r;const g=new Uint32Array(4),_=new Int32Array(4);let m=null,h=null;const T=[],b=[];this.domElement=e,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this._outputColorSpace=Ve,this.toneMapping=On,this.toneMappingExposure=1;const S=this;let O=!1,C=0,R=0,U=null,y=-1,x=null;const A=new jt,F=new jt;let N=null;const k=new Bt(0);let X=0,V=e.width,Z=e.height,H=1,tt=null,lt=null;const xt=new jt(0,0,V,Z),Dt=new jt(0,0,V,Z);let Zt=!1;const Y=new Hr;let et=!1,gt=!1;const st=new Jt,bt=new Jt,wt=new w,Ut=new jt,re={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let zt=!1;function le(){return U===null?H:1}let I=n;function ze(M,D){return e.getContext(M,D)}try{const M={alpha:!0,depth:s,stencil:a,antialias:o,premultipliedAlpha:l,preserveDrawingBuffer:c,powerPreference:u,failIfMajorPerformanceCaveat:f};if("setAttribute"in e&&e.setAttribute("data-engine",`three.js r${Ur}`),e.addEventListener("webglcontextlost",K,!1),e.addEventListener("webglcontextrestored",ct,!1),e.addEventListener("webglcontextcreationerror",rt,!1),I===null){const D="webgl2";if(I=ze(D,M),I===null)throw ze(D)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(M){throw console.error("THREE.WebGLRenderer: "+M.message),M}let Nt,Ft,St,ee,yt,E,v,B,$,j,q,_t,at,ht,kt,J,ut,Et,Tt,dt,Ot,Lt,Qt,P;function it(){Nt=new ff(I),Nt.init(),Lt=new Jp(I,Nt),Ft=new rf(I,Nt,t,Lt),St=new Kp(I,Nt),Ft.reverseDepthBuffer&&p&&St.buffers.depth.setReversed(!0),ee=new gf(I),yt=new Up,E=new Zp(I,Nt,St,yt,Ft,Lt,ee),v=new lf(S),B=new df(S),$=new yh(I),Qt=new sf(I,$),j=new pf(I,$,ee,Qt),q=new vf(I,j,$,ee),Tt=new _f(I,Ft,E),J=new of(yt),_t=new Ip(S,v,B,Nt,Ft,Qt,J),at=new rm(S,yt),ht=new Fp,kt=new Hp(Nt),Et=new nf(S,v,B,St,q,d,l),ut=new Yp(S,q,Ft),P=new om(I,ee,Ft,St),dt=new af(I,Nt,ee),Ot=new mf(I,Nt,ee),ee.programs=_t.programs,S.capabilities=Ft,S.extensions=Nt,S.properties=yt,S.renderLists=ht,S.shadowMap=ut,S.state=St,S.info=ee}it();const W=new sm(S,I);this.xr=W,this.getContext=function(){return I},this.getContextAttributes=function(){return I.getContextAttributes()},this.forceContextLoss=function(){const M=Nt.get("WEBGL_lose_context");M&&M.loseContext()},this.forceContextRestore=function(){const M=Nt.get("WEBGL_lose_context");M&&M.restoreContext()},this.getPixelRatio=function(){return H},this.setPixelRatio=function(M){M!==void 0&&(H=M,this.setSize(V,Z,!1))},this.getSize=function(M){return M.set(V,Z)},this.setSize=function(M,D,z=!0){if(W.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}V=M,Z=D,e.width=Math.floor(M*H),e.height=Math.floor(D*H),z===!0&&(e.style.width=M+"px",e.style.height=D+"px"),this.setViewport(0,0,M,D)},this.getDrawingBufferSize=function(M){return M.set(V*H,Z*H).floor()},this.setDrawingBufferSize=function(M,D,z){V=M,Z=D,H=z,e.width=Math.floor(M*z),e.height=Math.floor(D*z),this.setViewport(0,0,M,D)},this.getCurrentViewport=function(M){return M.copy(A)},this.getViewport=function(M){return M.copy(xt)},this.setViewport=function(M,D,z,G){M.isVector4?xt.set(M.x,M.y,M.z,M.w):xt.set(M,D,z,G),St.viewport(A.copy(xt).multiplyScalar(H).round())},this.getScissor=function(M){return M.copy(Dt)},this.setScissor=function(M,D,z,G){M.isVector4?Dt.set(M.x,M.y,M.z,M.w):Dt.set(M,D,z,G),St.scissor(F.copy(Dt).multiplyScalar(H).round())},this.getScissorTest=function(){return Zt},this.setScissorTest=function(M){St.setScissorTest(Zt=M)},this.setOpaqueSort=function(M){tt=M},this.setTransparentSort=function(M){lt=M},this.getClearColor=function(M){return M.copy(Et.getClearColor())},this.setClearColor=function(){Et.setClearColor.apply(Et,arguments)},this.getClearAlpha=function(){return Et.getClearAlpha()},this.setClearAlpha=function(){Et.setClearAlpha.apply(Et,arguments)},this.clear=function(M=!0,D=!0,z=!0){let G=0;if(M){let L=!1;if(U!==null){const Q=U.texture.format;L=Q===kr||Q===zr||Q===Br}if(L){const Q=U.texture.type,ot=Q===bn||Q===ii||Q===as||Q===zi||Q===Fr||Q===Or,ft=Et.getClearColor(),pt=Et.getClearAlpha(),At=ft.r,Rt=ft.g,mt=ft.b;ot?(g[0]=At,g[1]=Rt,g[2]=mt,g[3]=pt,I.clearBufferuiv(I.COLOR,0,g)):(_[0]=At,_[1]=Rt,_[2]=mt,_[3]=pt,I.clearBufferiv(I.COLOR,0,_))}else G|=I.COLOR_BUFFER_BIT}D&&(G|=I.DEPTH_BUFFER_BIT),z&&(G|=I.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),I.clear(G)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){e.removeEventListener("webglcontextlost",K,!1),e.removeEventListener("webglcontextrestored",ct,!1),e.removeEventListener("webglcontextcreationerror",rt,!1),ht.dispose(),kt.dispose(),yt.dispose(),v.dispose(),B.dispose(),q.dispose(),Qt.dispose(),P.dispose(),_t.dispose(),W.dispose(),W.removeEventListener("sessionstart",$r),W.removeEventListener("sessionend",Kr),Gn.stop()};function K(M){M.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),O=!0}function ct(){console.log("THREE.WebGLRenderer: Context Restored."),O=!1;const M=ee.autoReset,D=ut.enabled,z=ut.autoUpdate,G=ut.needsUpdate,L=ut.type;it(),ee.autoReset=M,ut.enabled=D,ut.autoUpdate=z,ut.needsUpdate=G,ut.type=L}function rt(M){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",M.statusMessage)}function Ct(M){const D=M.target;D.removeEventListener("dispose",Ct),oe(D)}function oe(M){Me(M),yt.remove(M)}function Me(M){const D=yt.get(M).programs;D!==void 0&&(D.forEach(function(z){_t.releaseProgram(z)}),M.isShaderMaterial&&_t.releaseShaderCache(M))}this.renderBufferDirect=function(M,D,z,G,L,Q){D===null&&(D=re);const ot=L.isMesh&&L.matrixWorld.determinant()<0,ft=nc(M,D,z,G,L);St.setMaterial(G,ot);let pt=z.index,At=1;if(G.wireframe===!0){if(pt=j.getWireframeAttribute(z),pt===void 0)return;At=2}const Rt=z.drawRange,mt=z.attributes.position;let Vt=Rt.start*At,te=(Rt.start+Rt.count)*At;Q!==null&&(Vt=Math.max(Vt,Q.start*At),te=Math.min(te,(Q.start+Q.count)*At)),pt!==null?(Vt=Math.max(Vt,0),te=Math.min(te,pt.count)):mt!=null&&(Vt=Math.max(Vt,0),te=Math.min(te,mt.count));const ne=te-Vt;if(ne<0||ne===1/0)return;Qt.setup(L,G,ft,z,pt);let Re,Wt=dt;if(pt!==null&&(Re=$.get(pt),Wt=Ot,Wt.setIndex(Re)),L.isMesh)G.wireframe===!0?(St.setLineWidth(G.wireframeLinewidth*le()),Wt.setMode(I.LINES)):Wt.setMode(I.TRIANGLES);else if(L.isLine){let vt=G.linewidth;vt===void 0&&(vt=1),St.setLineWidth(vt*le()),L.isLineSegments?Wt.setMode(I.LINES):L.isLineLoop?Wt.setMode(I.LINE_LOOP):Wt.setMode(I.LINE_STRIP)}else L.isPoints?Wt.setMode(I.POINTS):L.isSprite&&Wt.setMode(I.TRIANGLES);if(L.isBatchedMesh)if(L._multiDrawInstances!==null)Wt.renderMultiDrawInstances(L._multiDrawStarts,L._multiDrawCounts,L._multiDrawCount,L._multiDrawInstances);else if(Nt.get("WEBGL_multi_draw"))Wt.renderMultiDraw(L._multiDrawStarts,L._multiDrawCounts,L._multiDrawCount);else{const vt=L._multiDrawStarts,fn=L._multiDrawCounts,Xt=L._multiDrawCount,Ye=pt?$.get(pt).bytesPerElement:1,oi=yt.get(G).currentProgram.getUniforms();for(let Le=0;Le<Xt;Le++)oi.setValue(I,"_gl_DrawID",Le),Wt.render(vt[Le]/Ye,fn[Le])}else if(L.isInstancedMesh)Wt.renderInstances(Vt,ne,L.count);else if(z.isInstancedBufferGeometry){const vt=z._maxInstanceCount!==void 0?z._maxInstanceCount:1/0,fn=Math.min(z.instanceCount,vt);Wt.renderInstances(Vt,ne,fn)}else Wt.render(Vt,ne)};function qt(M,D,z){M.transparent===!0&&M.side===De&&M.forceSinglePass===!1?(M.side=Ee,M.needsUpdate=!0,fs(M,D,z),M.side=zn,M.needsUpdate=!0,fs(M,D,z),M.side=De):fs(M,D,z)}this.compile=function(M,D,z=null){z===null&&(z=M),h=kt.get(z),h.init(D),b.push(h),z.traverseVisible(function(L){L.isLight&&L.layers.test(D.layers)&&(h.pushLight(L),L.castShadow&&h.pushShadow(L))}),M!==z&&M.traverseVisible(function(L){L.isLight&&L.layers.test(D.layers)&&(h.pushLight(L),L.castShadow&&h.pushShadow(L))}),h.setupLights();const G=new Set;return M.traverse(function(L){if(!(L.isMesh||L.isPoints||L.isLine||L.isSprite))return;const Q=L.material;if(Q)if(Array.isArray(Q))for(let ot=0;ot<Q.length;ot++){const ft=Q[ot];qt(ft,z,L),G.add(ft)}else qt(Q,z,L),G.add(Q)}),b.pop(),h=null,G},this.compileAsync=function(M,D,z=null){const G=this.compile(M,D,z);return new Promise(L=>{function Q(){if(G.forEach(function(ot){yt.get(ot).currentProgram.isReady()&&G.delete(ot)}),G.size===0){L(M);return}setTimeout(Q,10)}Nt.get("KHR_parallel_shader_compile")!==null?Q():setTimeout(Q,10)})};let qe=null;function dn(M){qe&&qe(M)}function $r(){Gn.stop()}function Kr(){Gn.start()}const Gn=new Vl;Gn.setAnimationLoop(dn),typeof self<"u"&&Gn.setContext(self),this.setAnimationLoop=function(M){qe=M,W.setAnimationLoop(M),M===null?Gn.stop():Gn.start()},W.addEventListener("sessionstart",$r),W.addEventListener("sessionend",Kr),this.render=function(M,D){if(D!==void 0&&D.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(O===!0)return;if(M.matrixWorldAutoUpdate===!0&&M.updateMatrixWorld(),D.parent===null&&D.matrixWorldAutoUpdate===!0&&D.updateMatrixWorld(),W.enabled===!0&&W.isPresenting===!0&&(W.cameraAutoUpdate===!0&&W.updateCamera(D),D=W.getCamera()),M.isScene===!0&&M.onBeforeRender(S,M,D,U),h=kt.get(M,b.length),h.init(D),b.push(h),bt.multiplyMatrices(D.projectionMatrix,D.matrixWorldInverse),Y.setFromProjectionMatrix(bt),gt=this.localClippingEnabled,et=J.init(this.clippingPlanes,gt),m=ht.get(M,T.length),m.init(),T.push(m),W.enabled===!0&&W.isPresenting===!0){const Q=S.xr.getDepthSensingMesh();Q!==null&&ra(Q,D,-1/0,S.sortObjects)}ra(M,D,0,S.sortObjects),m.finish(),S.sortObjects===!0&&m.sort(tt,lt),zt=W.enabled===!1||W.isPresenting===!1||W.hasDepthSensing()===!1,zt&&Et.addToRenderList(m,M),this.info.render.frame++,et===!0&&J.beginShadows();const z=h.state.shadowsArray;ut.render(z,M,D),et===!0&&J.endShadows(),this.info.autoReset===!0&&this.info.reset();const G=m.opaque,L=m.transmissive;if(h.setupLights(),D.isArrayCamera){const Q=D.cameras;if(L.length>0)for(let ot=0,ft=Q.length;ot<ft;ot++){const pt=Q[ot];Zr(G,L,M,pt)}zt&&Et.render(M);for(let ot=0,ft=Q.length;ot<ft;ot++){const pt=Q[ot];jr(m,M,pt,pt.viewport)}}else L.length>0&&Zr(G,L,M,D),zt&&Et.render(M),jr(m,M,D);U!==null&&(E.updateMultisampleRenderTarget(U),E.updateRenderTargetMipmap(U)),M.isScene===!0&&M.onAfterRender(S,M,D),Qt.resetDefaultState(),y=-1,x=null,b.pop(),b.length>0?(h=b[b.length-1],et===!0&&J.setGlobalState(S.clippingPlanes,h.state.camera)):h=null,T.pop(),T.length>0?m=T[T.length-1]:m=null};function ra(M,D,z,G){if(M.visible===!1)return;if(M.layers.test(D.layers)){if(M.isGroup)z=M.renderOrder;else if(M.isLOD)M.autoUpdate===!0&&M.update(D);else if(M.isLight)h.pushLight(M),M.castShadow&&h.pushShadow(M);else if(M.isSprite){if(!M.frustumCulled||Y.intersectsSprite(M)){G&&Ut.setFromMatrixPosition(M.matrixWorld).applyMatrix4(bt);const ot=q.update(M),ft=M.material;ft.visible&&m.push(M,ot,ft,z,Ut.z,null)}}else if((M.isMesh||M.isLine||M.isPoints)&&(!M.frustumCulled||Y.intersectsObject(M))){const ot=q.update(M),ft=M.material;if(G&&(M.boundingSphere!==void 0?(M.boundingSphere===null&&M.computeBoundingSphere(),Ut.copy(M.boundingSphere.center)):(ot.boundingSphere===null&&ot.computeBoundingSphere(),Ut.copy(ot.boundingSphere.center)),Ut.applyMatrix4(M.matrixWorld).applyMatrix4(bt)),Array.isArray(ft)){const pt=ot.groups;for(let At=0,Rt=pt.length;At<Rt;At++){const mt=pt[At],Vt=ft[mt.materialIndex];Vt&&Vt.visible&&m.push(M,ot,Vt,z,Ut.z,mt)}}else ft.visible&&m.push(M,ot,ft,z,Ut.z,null)}}const Q=M.children;for(let ot=0,ft=Q.length;ot<ft;ot++)ra(Q[ot],D,z,G)}function jr(M,D,z,G){const L=M.opaque,Q=M.transmissive,ot=M.transparent;h.setupLightsView(z),et===!0&&J.setGlobalState(S.clippingPlanes,z),G&&St.viewport(A.copy(G)),L.length>0&&ds(L,D,z),Q.length>0&&ds(Q,D,z),ot.length>0&&ds(ot,D,z),St.buffers.depth.setTest(!0),St.buffers.depth.setMask(!0),St.buffers.color.setMask(!0),St.setPolygonOffset(!1)}function Zr(M,D,z,G){if((z.isScene===!0?z.overrideMaterial:null)!==null)return;h.state.transmissionRenderTarget[G.id]===void 0&&(h.state.transmissionRenderTarget[G.id]=new si(1,1,{generateMipmaps:!0,type:Nt.has("EXT_color_buffer_half_float")||Nt.has("EXT_color_buffer_float")?rs:bn,minFilter:ei,samples:4,stencilBuffer:a,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:Gt.workingColorSpace}));const Q=h.state.transmissionRenderTarget[G.id],ot=G.viewport||A;Q.setSize(ot.z,ot.w);const ft=S.getRenderTarget();S.setRenderTarget(Q),S.getClearColor(k),X=S.getClearAlpha(),X<1&&S.setClearColor(16777215,.5),S.clear(),zt&&Et.render(z);const pt=S.toneMapping;S.toneMapping=On;const At=G.viewport;if(G.viewport!==void 0&&(G.viewport=void 0),h.setupLightsView(G),et===!0&&J.setGlobalState(S.clippingPlanes,G),ds(M,z,G),E.updateMultisampleRenderTarget(Q),E.updateRenderTargetMipmap(Q),Nt.has("WEBGL_multisampled_render_to_texture")===!1){let Rt=!1;for(let mt=0,Vt=D.length;mt<Vt;mt++){const te=D[mt],ne=te.object,Re=te.geometry,Wt=te.material,vt=te.group;if(Wt.side===De&&ne.layers.test(G.layers)){const fn=Wt.side;Wt.side=Ee,Wt.needsUpdate=!0,Jr(ne,z,G,Re,Wt,vt),Wt.side=fn,Wt.needsUpdate=!0,Rt=!0}}Rt===!0&&(E.updateMultisampleRenderTarget(Q),E.updateRenderTargetMipmap(Q))}S.setRenderTarget(ft),S.setClearColor(k,X),At!==void 0&&(G.viewport=At),S.toneMapping=pt}function ds(M,D,z){const G=D.isScene===!0?D.overrideMaterial:null;for(let L=0,Q=M.length;L<Q;L++){const ot=M[L],ft=ot.object,pt=ot.geometry,At=G===null?ot.material:G,Rt=ot.group;ft.layers.test(z.layers)&&Jr(ft,D,z,pt,At,Rt)}}function Jr(M,D,z,G,L,Q){M.onBeforeRender(S,D,z,G,L,Q),M.modelViewMatrix.multiplyMatrices(z.matrixWorldInverse,M.matrixWorld),M.normalMatrix.getNormalMatrix(M.modelViewMatrix),L.onBeforeRender(S,D,z,G,M,Q),L.transparent===!0&&L.side===De&&L.forceSinglePass===!1?(L.side=Ee,L.needsUpdate=!0,S.renderBufferDirect(z,D,G,L,M,Q),L.side=zn,L.needsUpdate=!0,S.renderBufferDirect(z,D,G,L,M,Q),L.side=De):S.renderBufferDirect(z,D,G,L,M,Q),M.onAfterRender(S,D,z,G,L,Q)}function fs(M,D,z){D.isScene!==!0&&(D=re);const G=yt.get(M),L=h.state.lights,Q=h.state.shadowsArray,ot=L.state.version,ft=_t.getParameters(M,L.state,Q,D,z),pt=_t.getProgramCacheKey(ft);let At=G.programs;G.environment=M.isMeshStandardMaterial?D.environment:null,G.fog=D.fog,G.envMap=(M.isMeshStandardMaterial?B:v).get(M.envMap||G.environment),G.envMapRotation=G.environment!==null&&M.envMap===null?D.environmentRotation:M.envMapRotation,At===void 0&&(M.addEventListener("dispose",Ct),At=new Map,G.programs=At);let Rt=At.get(pt);if(Rt!==void 0){if(G.currentProgram===Rt&&G.lightsStateVersion===ot)return to(M,ft),Rt}else ft.uniforms=_t.getUniforms(M),M.onBeforeCompile(ft,S),Rt=_t.acquireProgram(ft,pt),At.set(pt,Rt),G.uniforms=ft.uniforms;const mt=G.uniforms;return(!M.isShaderMaterial&&!M.isRawShaderMaterial||M.clipping===!0)&&(mt.clippingPlanes=J.uniform),to(M,ft),G.needsLights=sc(M),G.lightsStateVersion=ot,G.needsLights&&(mt.ambientLightColor.value=L.state.ambient,mt.lightProbe.value=L.state.probe,mt.directionalLights.value=L.state.directional,mt.directionalLightShadows.value=L.state.directionalShadow,mt.spotLights.value=L.state.spot,mt.spotLightShadows.value=L.state.spotShadow,mt.rectAreaLights.value=L.state.rectArea,mt.ltc_1.value=L.state.rectAreaLTC1,mt.ltc_2.value=L.state.rectAreaLTC2,mt.pointLights.value=L.state.point,mt.pointLightShadows.value=L.state.pointShadow,mt.hemisphereLights.value=L.state.hemi,mt.directionalShadowMap.value=L.state.directionalShadowMap,mt.directionalShadowMatrix.value=L.state.directionalShadowMatrix,mt.spotShadowMap.value=L.state.spotShadowMap,mt.spotLightMatrix.value=L.state.spotLightMatrix,mt.spotLightMap.value=L.state.spotLightMap,mt.pointShadowMap.value=L.state.pointShadowMap,mt.pointShadowMatrix.value=L.state.pointShadowMatrix),G.currentProgram=Rt,G.uniformsList=null,Rt}function Qr(M){if(M.uniformsList===null){const D=M.currentProgram.getUniforms();M.uniformsList=js.seqWithValue(D.seq,M.uniforms)}return M.uniformsList}function to(M,D){const z=yt.get(M);z.outputColorSpace=D.outputColorSpace,z.batching=D.batching,z.batchingColor=D.batchingColor,z.instancing=D.instancing,z.instancingColor=D.instancingColor,z.instancingMorph=D.instancingMorph,z.skinning=D.skinning,z.morphTargets=D.morphTargets,z.morphNormals=D.morphNormals,z.morphColors=D.morphColors,z.morphTargetsCount=D.morphTargetsCount,z.numClippingPlanes=D.numClippingPlanes,z.numIntersection=D.numClipIntersection,z.vertexAlphas=D.vertexAlphas,z.vertexTangents=D.vertexTangents,z.toneMapping=D.toneMapping}function nc(M,D,z,G,L){D.isScene!==!0&&(D=re),E.resetTextureUnits();const Q=D.fog,ot=G.isMeshStandardMaterial?D.environment:null,ft=U===null?S.outputColorSpace:U.isXRRenderTarget===!0?U.texture.colorSpace:Hi,pt=(G.isMeshStandardMaterial?B:v).get(G.envMap||ot),At=G.vertexColors===!0&&!!z.attributes.color&&z.attributes.color.itemSize===4,Rt=!!z.attributes.tangent&&(!!G.normalMap||G.anisotropy>0),mt=!!z.morphAttributes.position,Vt=!!z.morphAttributes.normal,te=!!z.morphAttributes.color;let ne=On;G.toneMapped&&(U===null||U.isXRRenderTarget===!0)&&(ne=S.toneMapping);const Re=z.morphAttributes.position||z.morphAttributes.normal||z.morphAttributes.color,Wt=Re!==void 0?Re.length:0,vt=yt.get(G),fn=h.state.lights;if(et===!0&&(gt===!0||M!==x)){const ke=M===x&&G.id===y;J.setState(G,M,ke)}let Xt=!1;G.version===vt.__version?(vt.needsLights&&vt.lightsStateVersion!==fn.state.version||vt.outputColorSpace!==ft||L.isBatchedMesh&&vt.batching===!1||!L.isBatchedMesh&&vt.batching===!0||L.isBatchedMesh&&vt.batchingColor===!0&&L.colorTexture===null||L.isBatchedMesh&&vt.batchingColor===!1&&L.colorTexture!==null||L.isInstancedMesh&&vt.instancing===!1||!L.isInstancedMesh&&vt.instancing===!0||L.isSkinnedMesh&&vt.skinning===!1||!L.isSkinnedMesh&&vt.skinning===!0||L.isInstancedMesh&&vt.instancingColor===!0&&L.instanceColor===null||L.isInstancedMesh&&vt.instancingColor===!1&&L.instanceColor!==null||L.isInstancedMesh&&vt.instancingMorph===!0&&L.morphTexture===null||L.isInstancedMesh&&vt.instancingMorph===!1&&L.morphTexture!==null||vt.envMap!==pt||G.fog===!0&&vt.fog!==Q||vt.numClippingPlanes!==void 0&&(vt.numClippingPlanes!==J.numPlanes||vt.numIntersection!==J.numIntersection)||vt.vertexAlphas!==At||vt.vertexTangents!==Rt||vt.morphTargets!==mt||vt.morphNormals!==Vt||vt.morphColors!==te||vt.toneMapping!==ne||vt.morphTargetsCount!==Wt)&&(Xt=!0):(Xt=!0,vt.__version=G.version);let Ye=vt.currentProgram;Xt===!0&&(Ye=fs(G,D,L));let oi=!1,Le=!1,Wi=!1;const ie=Ye.getUniforms(),rn=vt.uniforms;if(St.useProgram(Ye.program)&&(oi=!0,Le=!0,Wi=!0),G.id!==y&&(y=G.id,Le=!0),oi||x!==M){St.buffers.depth.getReversed()?(st.copy(M.projectionMatrix),jc(st),Zc(st),ie.setValue(I,"projectionMatrix",st)):ie.setValue(I,"projectionMatrix",M.projectionMatrix),ie.setValue(I,"viewMatrix",M.matrixWorldInverse);const Tn=ie.map.cameraPosition;Tn!==void 0&&Tn.setValue(I,wt.setFromMatrixPosition(M.matrixWorld)),Ft.logarithmicDepthBuffer&&ie.setValue(I,"logDepthBufFC",2/(Math.log(M.far+1)/Math.LN2)),(G.isMeshPhongMaterial||G.isMeshToonMaterial||G.isMeshLambertMaterial||G.isMeshBasicMaterial||G.isMeshStandardMaterial||G.isShaderMaterial)&&ie.setValue(I,"isOrthographic",M.isOrthographicCamera===!0),x!==M&&(x=M,Le=!0,Wi=!0)}if(L.isSkinnedMesh){ie.setOptional(I,L,"bindMatrix"),ie.setOptional(I,L,"bindMatrixInverse");const ke=L.skeleton;ke&&(ke.boneTexture===null&&ke.computeBoneTexture(),ie.setValue(I,"boneTexture",ke.boneTexture,E))}L.isBatchedMesh&&(ie.setOptional(I,L,"batchingTexture"),ie.setValue(I,"batchingTexture",L._matricesTexture,E),ie.setOptional(I,L,"batchingIdTexture"),ie.setValue(I,"batchingIdTexture",L._indirectTexture,E),ie.setOptional(I,L,"batchingColorTexture"),L._colorsTexture!==null&&ie.setValue(I,"batchingColorTexture",L._colorsTexture,E));const Xi=z.morphAttributes;if((Xi.position!==void 0||Xi.normal!==void 0||Xi.color!==void 0)&&Tt.update(L,z,Ye),(Le||vt.receiveShadow!==L.receiveShadow)&&(vt.receiveShadow=L.receiveShadow,ie.setValue(I,"receiveShadow",L.receiveShadow)),G.isMeshGouraudMaterial&&G.envMap!==null&&(rn.envMap.value=pt,rn.flipEnvMap.value=pt.isCubeTexture&&pt.isRenderTargetTexture===!1?-1:1),G.isMeshStandardMaterial&&G.envMap===null&&D.environment!==null&&(rn.envMapIntensity.value=D.environmentIntensity),Le&&(ie.setValue(I,"toneMappingExposure",S.toneMappingExposure),vt.needsLights&&ic(rn,Wi),Q&&G.fog===!0&&at.refreshFogUniforms(rn,Q),at.refreshMaterialUniforms(rn,G,H,Z,h.state.transmissionRenderTarget[M.id]),js.upload(I,Qr(vt),rn,E)),G.isShaderMaterial&&G.uniformsNeedUpdate===!0&&(js.upload(I,Qr(vt),rn,E),G.uniformsNeedUpdate=!1),G.isSpriteMaterial&&ie.setValue(I,"center",L.center),ie.setValue(I,"modelViewMatrix",L.modelViewMatrix),ie.setValue(I,"normalMatrix",L.normalMatrix),ie.setValue(I,"modelMatrix",L.matrixWorld),G.isShaderMaterial||G.isRawShaderMaterial){const ke=G.uniformsGroups;for(let Tn=0,An=ke.length;Tn<An;Tn++){const eo=ke[Tn];P.update(eo,Ye),P.bind(eo,Ye)}}return Ye}function ic(M,D){M.ambientLightColor.needsUpdate=D,M.lightProbe.needsUpdate=D,M.directionalLights.needsUpdate=D,M.directionalLightShadows.needsUpdate=D,M.pointLights.needsUpdate=D,M.pointLightShadows.needsUpdate=D,M.spotLights.needsUpdate=D,M.spotLightShadows.needsUpdate=D,M.rectAreaLights.needsUpdate=D,M.hemisphereLights.needsUpdate=D}function sc(M){return M.isMeshLambertMaterial||M.isMeshToonMaterial||M.isMeshPhongMaterial||M.isMeshStandardMaterial||M.isShadowMaterial||M.isShaderMaterial&&M.lights===!0}this.getActiveCubeFace=function(){return C},this.getActiveMipmapLevel=function(){return R},this.getRenderTarget=function(){return U},this.setRenderTargetTextures=function(M,D,z){yt.get(M.texture).__webglTexture=D,yt.get(M.depthTexture).__webglTexture=z;const G=yt.get(M);G.__hasExternalTextures=!0,G.__autoAllocateDepthBuffer=z===void 0,G.__autoAllocateDepthBuffer||Nt.has("WEBGL_multisampled_render_to_texture")===!0&&(console.warn("THREE.WebGLRenderer: Render-to-texture extension was disabled because an external texture was provided"),G.__useRenderToTexture=!1)},this.setRenderTargetFramebuffer=function(M,D){const z=yt.get(M);z.__webglFramebuffer=D,z.__useDefaultFramebuffer=D===void 0},this.setRenderTarget=function(M,D=0,z=0){U=M,C=D,R=z;let G=!0,L=null,Q=!1,ot=!1;if(M){const pt=yt.get(M);if(pt.__useDefaultFramebuffer!==void 0)St.bindFramebuffer(I.FRAMEBUFFER,null),G=!1;else if(pt.__webglFramebuffer===void 0)E.setupRenderTarget(M);else if(pt.__hasExternalTextures)E.rebindTextures(M,yt.get(M.texture).__webglTexture,yt.get(M.depthTexture).__webglTexture);else if(M.depthBuffer){const mt=M.depthTexture;if(pt.__boundDepthTexture!==mt){if(mt!==null&&yt.has(mt)&&(M.width!==mt.image.width||M.height!==mt.image.height))throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");E.setupDepthRenderbuffer(M)}}const At=M.texture;(At.isData3DTexture||At.isDataArrayTexture||At.isCompressedArrayTexture)&&(ot=!0);const Rt=yt.get(M).__webglFramebuffer;M.isWebGLCubeRenderTarget?(Array.isArray(Rt[D])?L=Rt[D][z]:L=Rt[D],Q=!0):M.samples>0&&E.useMultisampledRTT(M)===!1?L=yt.get(M).__webglMultisampledFramebuffer:Array.isArray(Rt)?L=Rt[z]:L=Rt,A.copy(M.viewport),F.copy(M.scissor),N=M.scissorTest}else A.copy(xt).multiplyScalar(H).floor(),F.copy(Dt).multiplyScalar(H).floor(),N=Zt;if(St.bindFramebuffer(I.FRAMEBUFFER,L)&&G&&St.drawBuffers(M,L),St.viewport(A),St.scissor(F),St.setScissorTest(N),Q){const pt=yt.get(M.texture);I.framebufferTexture2D(I.FRAMEBUFFER,I.COLOR_ATTACHMENT0,I.TEXTURE_CUBE_MAP_POSITIVE_X+D,pt.__webglTexture,z)}else if(ot){const pt=yt.get(M.texture),At=D||0;I.framebufferTextureLayer(I.FRAMEBUFFER,I.COLOR_ATTACHMENT0,pt.__webglTexture,z||0,At)}y=-1},this.readRenderTargetPixels=function(M,D,z,G,L,Q,ot){if(!(M&&M.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let ft=yt.get(M).__webglFramebuffer;if(M.isWebGLCubeRenderTarget&&ot!==void 0&&(ft=ft[ot]),ft){St.bindFramebuffer(I.FRAMEBUFFER,ft);try{const pt=M.texture,At=pt.format,Rt=pt.type;if(!Ft.textureFormatReadable(At)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!Ft.textureTypeReadable(Rt)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}D>=0&&D<=M.width-G&&z>=0&&z<=M.height-L&&I.readPixels(D,z,G,L,Lt.convert(At),Lt.convert(Rt),Q)}finally{const pt=U!==null?yt.get(U).__webglFramebuffer:null;St.bindFramebuffer(I.FRAMEBUFFER,pt)}}},this.readRenderTargetPixelsAsync=async function(M,D,z,G,L,Q,ot){if(!(M&&M.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let ft=yt.get(M).__webglFramebuffer;if(M.isWebGLCubeRenderTarget&&ot!==void 0&&(ft=ft[ot]),ft){const pt=M.texture,At=pt.format,Rt=pt.type;if(!Ft.textureFormatReadable(At))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!Ft.textureTypeReadable(Rt))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");if(D>=0&&D<=M.width-G&&z>=0&&z<=M.height-L){St.bindFramebuffer(I.FRAMEBUFFER,ft);const mt=I.createBuffer();I.bindBuffer(I.PIXEL_PACK_BUFFER,mt),I.bufferData(I.PIXEL_PACK_BUFFER,Q.byteLength,I.STREAM_READ),I.readPixels(D,z,G,L,Lt.convert(At),Lt.convert(Rt),0);const Vt=U!==null?yt.get(U).__webglFramebuffer:null;St.bindFramebuffer(I.FRAMEBUFFER,Vt);const te=I.fenceSync(I.SYNC_GPU_COMMANDS_COMPLETE,0);return I.flush(),await Kc(I,te,4),I.bindBuffer(I.PIXEL_PACK_BUFFER,mt),I.getBufferSubData(I.PIXEL_PACK_BUFFER,0,Q),I.deleteBuffer(mt),I.deleteSync(te),Q}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")}},this.copyFramebufferToTexture=function(M,D=null,z=0){M.isTexture!==!0&&(is("WebGLRenderer: copyFramebufferToTexture function signature has changed."),D=arguments[0]||null,M=arguments[1]);const G=Math.pow(2,-z),L=Math.floor(M.image.width*G),Q=Math.floor(M.image.height*G),ot=D!==null?D.x:0,ft=D!==null?D.y:0;E.setTexture2D(M,0),I.copyTexSubImage2D(I.TEXTURE_2D,z,0,0,ot,ft,L,Q),St.unbindTexture()},this.copyTextureToTexture=function(M,D,z=null,G=null,L=0){M.isTexture!==!0&&(is("WebGLRenderer: copyTextureToTexture function signature has changed."),G=arguments[0]||null,M=arguments[1],D=arguments[2],L=arguments[3]||0,z=null);let Q,ot,ft,pt,At,Rt,mt,Vt,te;const ne=M.isCompressedTexture?M.mipmaps[L]:M.image;z!==null?(Q=z.max.x-z.min.x,ot=z.max.y-z.min.y,ft=z.isBox3?z.max.z-z.min.z:1,pt=z.min.x,At=z.min.y,Rt=z.isBox3?z.min.z:0):(Q=ne.width,ot=ne.height,ft=ne.depth||1,pt=0,At=0,Rt=0),G!==null?(mt=G.x,Vt=G.y,te=G.z):(mt=0,Vt=0,te=0);const Re=Lt.convert(D.format),Wt=Lt.convert(D.type);let vt;D.isData3DTexture?(E.setTexture3D(D,0),vt=I.TEXTURE_3D):D.isDataArrayTexture||D.isCompressedArrayTexture?(E.setTexture2DArray(D,0),vt=I.TEXTURE_2D_ARRAY):(E.setTexture2D(D,0),vt=I.TEXTURE_2D),I.pixelStorei(I.UNPACK_FLIP_Y_WEBGL,D.flipY),I.pixelStorei(I.UNPACK_PREMULTIPLY_ALPHA_WEBGL,D.premultiplyAlpha),I.pixelStorei(I.UNPACK_ALIGNMENT,D.unpackAlignment);const fn=I.getParameter(I.UNPACK_ROW_LENGTH),Xt=I.getParameter(I.UNPACK_IMAGE_HEIGHT),Ye=I.getParameter(I.UNPACK_SKIP_PIXELS),oi=I.getParameter(I.UNPACK_SKIP_ROWS),Le=I.getParameter(I.UNPACK_SKIP_IMAGES);I.pixelStorei(I.UNPACK_ROW_LENGTH,ne.width),I.pixelStorei(I.UNPACK_IMAGE_HEIGHT,ne.height),I.pixelStorei(I.UNPACK_SKIP_PIXELS,pt),I.pixelStorei(I.UNPACK_SKIP_ROWS,At),I.pixelStorei(I.UNPACK_SKIP_IMAGES,Rt);const Wi=M.isDataArrayTexture||M.isData3DTexture,ie=D.isDataArrayTexture||D.isData3DTexture;if(M.isRenderTargetTexture||M.isDepthTexture){const rn=yt.get(M),Xi=yt.get(D),ke=yt.get(rn.__renderTarget),Tn=yt.get(Xi.__renderTarget);St.bindFramebuffer(I.READ_FRAMEBUFFER,ke.__webglFramebuffer),St.bindFramebuffer(I.DRAW_FRAMEBUFFER,Tn.__webglFramebuffer);for(let An=0;An<ft;An++)Wi&&I.framebufferTextureLayer(I.READ_FRAMEBUFFER,I.COLOR_ATTACHMENT0,yt.get(M).__webglTexture,L,Rt+An),M.isDepthTexture?(ie&&I.framebufferTextureLayer(I.DRAW_FRAMEBUFFER,I.COLOR_ATTACHMENT0,yt.get(D).__webglTexture,L,te+An),I.blitFramebuffer(pt,At,Q,ot,mt,Vt,Q,ot,I.DEPTH_BUFFER_BIT,I.NEAREST)):ie?I.copyTexSubImage3D(vt,L,mt,Vt,te+An,pt,At,Q,ot):I.copyTexSubImage2D(vt,L,mt,Vt,te+An,pt,At,Q,ot);St.bindFramebuffer(I.READ_FRAMEBUFFER,null),St.bindFramebuffer(I.DRAW_FRAMEBUFFER,null)}else ie?M.isDataTexture||M.isData3DTexture?I.texSubImage3D(vt,L,mt,Vt,te,Q,ot,ft,Re,Wt,ne.data):D.isCompressedArrayTexture?I.compressedTexSubImage3D(vt,L,mt,Vt,te,Q,ot,ft,Re,ne.data):I.texSubImage3D(vt,L,mt,Vt,te,Q,ot,ft,Re,Wt,ne):M.isDataTexture?I.texSubImage2D(I.TEXTURE_2D,L,mt,Vt,Q,ot,Re,Wt,ne.data):M.isCompressedTexture?I.compressedTexSubImage2D(I.TEXTURE_2D,L,mt,Vt,ne.width,ne.height,Re,ne.data):I.texSubImage2D(I.TEXTURE_2D,L,mt,Vt,Q,ot,Re,Wt,ne);I.pixelStorei(I.UNPACK_ROW_LENGTH,fn),I.pixelStorei(I.UNPACK_IMAGE_HEIGHT,Xt),I.pixelStorei(I.UNPACK_SKIP_PIXELS,Ye),I.pixelStorei(I.UNPACK_SKIP_ROWS,oi),I.pixelStorei(I.UNPACK_SKIP_IMAGES,Le),L===0&&D.generateMipmaps&&I.generateMipmap(vt),St.unbindTexture()},this.copyTextureToTexture3D=function(M,D,z=null,G=null,L=0){return M.isTexture!==!0&&(is("WebGLRenderer: copyTextureToTexture3D function signature has changed."),z=arguments[0]||null,G=arguments[1]||null,M=arguments[2],D=arguments[3],L=arguments[4]||0),is('WebGLRenderer: copyTextureToTexture3D function has been deprecated. Use "copyTextureToTexture" instead.'),this.copyTextureToTexture(M,D,z,G,L)},this.initRenderTarget=function(M){yt.get(M).__webglFramebuffer===void 0&&E.setupRenderTarget(M)},this.initTexture=function(M){M.isCubeTexture?E.setTextureCube(M,0):M.isData3DTexture?E.setTexture3D(M,0):M.isDataArrayTexture||M.isCompressedArrayTexture?E.setTexture2DArray(M,0):E.setTexture2D(M,0),St.unbindTexture()},this.resetState=function(){C=0,R=0,U=null,St.reset(),Qt.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return Sn}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(t){this._outputColorSpace=t;const e=this.getContext();e.drawingBufferColorspace=Gt._getDrawingBufferColorSpace(t),e.unpackColorSpace=Gt._getUnpackColorSpace()}}class cm extends _e{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new un,this.environmentIntensity=1,this.environmentRotation=new un,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(t,e){return super.copy(t,e),t.background!==null&&(this.background=t.background.clone()),t.environment!==null&&(this.environment=t.environment.clone()),t.fog!==null&&(this.fog=t.fog.clone()),this.backgroundBlurriness=t.backgroundBlurriness,this.backgroundIntensity=t.backgroundIntensity,this.backgroundRotation.copy(t.backgroundRotation),this.environmentIntensity=t.environmentIntensity,this.environmentRotation.copy(t.environmentRotation),t.overrideMaterial!==null&&(this.overrideMaterial=t.overrideMaterial.clone()),this.matrixAutoUpdate=t.matrixAutoUpdate,this}toJSON(t){const e=super.toJSON(t);return this.fog!==null&&(e.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(e.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(e.object.backgroundIntensity=this.backgroundIntensity),e.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(e.object.environmentIntensity=this.environmentIntensity),e.object.environmentRotation=this.environmentRotation.toArray(),e}}class hm{constructor(t,e){this.isInterleavedBuffer=!0,this.array=t,this.stride=e,this.count=t!==void 0?t.length/e:0,this.usage=Rr,this.updateRanges=[],this.version=0,this.uuid=Bn()}onUploadCallback(){}set needsUpdate(t){t===!0&&this.version++}setUsage(t){return this.usage=t,this}addUpdateRange(t,e){this.updateRanges.push({start:t,count:e})}clearUpdateRanges(){this.updateRanges.length=0}copy(t){return this.array=new t.array.constructor(t.array),this.count=t.count,this.stride=t.stride,this.usage=t.usage,this}copyAt(t,e,n){t*=this.stride,n*=e.stride;for(let s=0,a=this.stride;s<a;s++)this.array[t+s]=e.array[n+s];return this}set(t,e=0){return this.array.set(t,e),this}clone(t){t.arrayBuffers===void 0&&(t.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=Bn()),t.arrayBuffers[this.array.buffer._uuid]===void 0&&(t.arrayBuffers[this.array.buffer._uuid]=this.array.slice(0).buffer);const e=new this.array.constructor(t.arrayBuffers[this.array.buffer._uuid]),n=new this.constructor(e,this.stride);return n.setUsage(this.usage),n}onUpload(t){return this.onUploadCallback=t,this}toJSON(t){return t.arrayBuffers===void 0&&(t.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=Bn()),t.arrayBuffers[this.array.buffer._uuid]===void 0&&(t.arrayBuffers[this.array.buffer._uuid]=Array.from(new Uint32Array(this.array.buffer))),{uuid:this.uuid,buffer:this.array.buffer._uuid,type:this.array.constructor.name,stride:this.stride}}}const be=new w;class ta{constructor(t,e,n,s=!1){this.isInterleavedBufferAttribute=!0,this.name="",this.data=t,this.itemSize=e,this.offset=n,this.normalized=s}get count(){return this.data.count}get array(){return this.data.array}set needsUpdate(t){this.data.needsUpdate=t}applyMatrix4(t){for(let e=0,n=this.data.count;e<n;e++)be.fromBufferAttribute(this,e),be.applyMatrix4(t),this.setXYZ(e,be.x,be.y,be.z);return this}applyNormalMatrix(t){for(let e=0,n=this.count;e<n;e++)be.fromBufferAttribute(this,e),be.applyNormalMatrix(t),this.setXYZ(e,be.x,be.y,be.z);return this}transformDirection(t){for(let e=0,n=this.count;e<n;e++)be.fromBufferAttribute(this,e),be.transformDirection(t),this.setXYZ(e,be.x,be.y,be.z);return this}getComponent(t,e){let n=this.array[t*this.data.stride+this.offset+e];return this.normalized&&(n=cn(n,this.array)),n}setComponent(t,e,n){return this.normalized&&(n=$t(n,this.array)),this.data.array[t*this.data.stride+this.offset+e]=n,this}setX(t,e){return this.normalized&&(e=$t(e,this.array)),this.data.array[t*this.data.stride+this.offset]=e,this}setY(t,e){return this.normalized&&(e=$t(e,this.array)),this.data.array[t*this.data.stride+this.offset+1]=e,this}setZ(t,e){return this.normalized&&(e=$t(e,this.array)),this.data.array[t*this.data.stride+this.offset+2]=e,this}setW(t,e){return this.normalized&&(e=$t(e,this.array)),this.data.array[t*this.data.stride+this.offset+3]=e,this}getX(t){let e=this.data.array[t*this.data.stride+this.offset];return this.normalized&&(e=cn(e,this.array)),e}getY(t){let e=this.data.array[t*this.data.stride+this.offset+1];return this.normalized&&(e=cn(e,this.array)),e}getZ(t){let e=this.data.array[t*this.data.stride+this.offset+2];return this.normalized&&(e=cn(e,this.array)),e}getW(t){let e=this.data.array[t*this.data.stride+this.offset+3];return this.normalized&&(e=cn(e,this.array)),e}setXY(t,e,n){return t=t*this.data.stride+this.offset,this.normalized&&(e=$t(e,this.array),n=$t(n,this.array)),this.data.array[t+0]=e,this.data.array[t+1]=n,this}setXYZ(t,e,n,s){return t=t*this.data.stride+this.offset,this.normalized&&(e=$t(e,this.array),n=$t(n,this.array),s=$t(s,this.array)),this.data.array[t+0]=e,this.data.array[t+1]=n,this.data.array[t+2]=s,this}setXYZW(t,e,n,s,a){return t=t*this.data.stride+this.offset,this.normalized&&(e=$t(e,this.array),n=$t(n,this.array),s=$t(s,this.array),a=$t(a,this.array)),this.data.array[t+0]=e,this.data.array[t+1]=n,this.data.array[t+2]=s,this.data.array[t+3]=a,this}clone(t){if(t===void 0){console.log("THREE.InterleavedBufferAttribute.clone(): Cloning an interleaved buffer attribute will de-interleave buffer data.");const e=[];for(let n=0;n<this.count;n++){const s=n*this.data.stride+this.offset;for(let a=0;a<this.itemSize;a++)e.push(this.data.array[s+a])}return new se(new this.array.constructor(e),this.itemSize,this.normalized)}else return t.interleavedBuffers===void 0&&(t.interleavedBuffers={}),t.interleavedBuffers[this.data.uuid]===void 0&&(t.interleavedBuffers[this.data.uuid]=this.data.clone(t)),new ta(t.interleavedBuffers[this.data.uuid],this.itemSize,this.offset,this.normalized)}toJSON(t){if(t===void 0){console.log("THREE.InterleavedBufferAttribute.toJSON(): Serializing an interleaved buffer attribute will de-interleave buffer data.");const e=[];for(let n=0;n<this.count;n++){const s=n*this.data.stride+this.offset;for(let a=0;a<this.itemSize;a++)e.push(this.data.array[s+a])}return{itemSize:this.itemSize,type:this.array.constructor.name,array:e,normalized:this.normalized}}else return t.interleavedBuffers===void 0&&(t.interleavedBuffers={}),t.interleavedBuffers[this.data.uuid]===void 0&&(t.interleavedBuffers[this.data.uuid]=this.data.toJSON(t)),{isInterleavedBufferAttribute:!0,itemSize:this.itemSize,data:this.data.uuid,offset:this.offset,normalized:this.normalized}}}class Kl extends kn{static get type(){return"SpriteMaterial"}constructor(t){super(),this.isSpriteMaterial=!0,this.color=new Bt(16777215),this.map=null,this.alphaMap=null,this.rotation=0,this.sizeAttenuation=!0,this.transparent=!0,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.alphaMap=t.alphaMap,this.rotation=t.rotation,this.sizeAttenuation=t.sizeAttenuation,this.fog=t.fog,this}}let Si;const ji=new w,Ei=new w,bi=new w,Ti=new Mt,Zi=new Mt,jl=new Jt,Ns=new w,Ji=new w,Fs=new w,Qo=new Mt,Fa=new Mt,tl=new Mt;class um extends _e{constructor(t=new Kl){if(super(),this.isSprite=!0,this.type="Sprite",Si===void 0){Si=new ce;const e=new Float32Array([-.5,-.5,0,0,0,.5,-.5,0,1,0,.5,.5,0,1,1,-.5,.5,0,0,1]),n=new hm(e,5);Si.setIndex([0,1,2,0,2,3]),Si.setAttribute("position",new ta(n,3,0,!1)),Si.setAttribute("uv",new ta(n,2,3,!1))}this.geometry=Si,this.material=t,this.center=new Mt(.5,.5)}raycast(t,e){t.camera===null&&console.error('THREE.Sprite: "Raycaster.camera" needs to be set in order to raycast against sprites.'),Ei.setFromMatrixScale(this.matrixWorld),jl.copy(t.camera.matrixWorld),this.modelViewMatrix.multiplyMatrices(t.camera.matrixWorldInverse,this.matrixWorld),bi.setFromMatrixPosition(this.modelViewMatrix),t.camera.isPerspectiveCamera&&this.material.sizeAttenuation===!1&&Ei.multiplyScalar(-bi.z);const n=this.material.rotation;let s,a;n!==0&&(a=Math.cos(n),s=Math.sin(n));const r=this.center;Os(Ns.set(-.5,-.5,0),bi,r,Ei,s,a),Os(Ji.set(.5,-.5,0),bi,r,Ei,s,a),Os(Fs.set(.5,.5,0),bi,r,Ei,s,a),Qo.set(0,0),Fa.set(1,0),tl.set(1,1);let o=t.ray.intersectTriangle(Ns,Ji,Fs,!1,ji);if(o===null&&(Os(Ji.set(-.5,.5,0),bi,r,Ei,s,a),Fa.set(0,1),o=t.ray.intersectTriangle(Ns,Fs,Ji,!1,ji),o===null))return;const l=t.ray.origin.distanceTo(ji);l<t.near||l>t.far||e.push({distance:l,point:ji.clone(),uv:We.getInterpolation(ji,Ns,Ji,Fs,Qo,Fa,tl,new Mt),face:null,object:this})}copy(t,e){return super.copy(t,e),t.center!==void 0&&this.center.copy(t.center),this.material=t.material,this}}function Os(i,t,e,n,s,a){Ti.subVectors(i,e).addScalar(.5).multiply(n),s!==void 0?(Zi.x=a*Ti.x-s*Ti.y,Zi.y=s*Ti.x+a*Ti.y):Zi.copy(Ti),i.copy(t),i.x+=Zi.x,i.y+=Zi.y,i.applyMatrix4(jl)}class Wr extends kn{static get type(){return"LineBasicMaterial"}constructor(t){super(),this.isLineBasicMaterial=!0,this.color=new Bt(16777215),this.map=null,this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.linewidth=t.linewidth,this.linecap=t.linecap,this.linejoin=t.linejoin,this.fog=t.fog,this}}const ea=new w,na=new w,el=new Jt,Qi=new cs,Bs=new ls,Oa=new w,nl=new w;class Zl extends _e{constructor(t=new ce,e=new Wr){super(),this.isLine=!0,this.type="Line",this.geometry=t,this.material=e,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}computeLineDistances(){const t=this.geometry;if(t.index===null){const e=t.attributes.position,n=[0];for(let s=1,a=e.count;s<a;s++)ea.fromBufferAttribute(e,s-1),na.fromBufferAttribute(e,s),n[s]=n[s-1],n[s]+=ea.distanceTo(na);t.setAttribute("lineDistance",new ve(n,1))}else console.warn("THREE.Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}raycast(t,e){const n=this.geometry,s=this.matrixWorld,a=t.params.Line.threshold,r=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),Bs.copy(n.boundingSphere),Bs.applyMatrix4(s),Bs.radius+=a,t.ray.intersectsSphere(Bs)===!1)return;el.copy(s).invert(),Qi.copy(t.ray).applyMatrix4(el);const o=a/((this.scale.x+this.scale.y+this.scale.z)/3),l=o*o,c=this.isLineSegments?2:1,u=n.index,p=n.attributes.position;if(u!==null){const d=Math.max(0,r.start),g=Math.min(u.count,r.start+r.count);for(let _=d,m=g-1;_<m;_+=c){const h=u.getX(_),T=u.getX(_+1),b=zs(this,t,Qi,l,h,T);b&&e.push(b)}if(this.isLineLoop){const _=u.getX(g-1),m=u.getX(d),h=zs(this,t,Qi,l,_,m);h&&e.push(h)}}else{const d=Math.max(0,r.start),g=Math.min(p.count,r.start+r.count);for(let _=d,m=g-1;_<m;_+=c){const h=zs(this,t,Qi,l,_,_+1);h&&e.push(h)}if(this.isLineLoop){const _=zs(this,t,Qi,l,g-1,d);_&&e.push(_)}}}updateMorphTargets(){const e=this.geometry.morphAttributes,n=Object.keys(e);if(n.length>0){const s=e[n[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let a=0,r=s.length;a<r;a++){const o=s[a].name||String(a);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=a}}}}}function zs(i,t,e,n,s,a){const r=i.geometry.attributes.position;if(ea.fromBufferAttribute(r,s),na.fromBufferAttribute(r,a),e.distanceSqToSegment(ea,na,Oa,nl)>n)return;Oa.applyMatrix4(i.matrixWorld);const l=t.ray.origin.distanceTo(Oa);if(!(l<t.near||l>t.far))return{distance:l,point:nl.clone().applyMatrix4(i.matrixWorld),index:s,face:null,faceIndex:null,barycoord:null,object:i}}class Ui extends kn{static get type(){return"PointsMaterial"}constructor(t){super(),this.isPointsMaterial=!0,this.color=new Bt(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.alphaMap=t.alphaMap,this.size=t.size,this.sizeAttenuation=t.sizeAttenuation,this.fog=t.fog,this}}const il=new Jt,Lr=new cs,ks=new ls,Gs=new w;class Ni extends _e{constructor(t=new ce,e=new Ui){super(),this.isPoints=!0,this.type="Points",this.geometry=t,this.material=e,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}raycast(t,e){const n=this.geometry,s=this.matrixWorld,a=t.params.Points.threshold,r=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),ks.copy(n.boundingSphere),ks.applyMatrix4(s),ks.radius+=a,t.ray.intersectsSphere(ks)===!1)return;il.copy(s).invert(),Lr.copy(t.ray).applyMatrix4(il);const o=a/((this.scale.x+this.scale.y+this.scale.z)/3),l=o*o,c=n.index,f=n.attributes.position;if(c!==null){const p=Math.max(0,r.start),d=Math.min(c.count,r.start+r.count);for(let g=p,_=d;g<_;g++){const m=c.getX(g);Gs.fromBufferAttribute(f,m),sl(Gs,m,l,s,t,e,this)}}else{const p=Math.max(0,r.start),d=Math.min(f.count,r.start+r.count);for(let g=p,_=d;g<_;g++)Gs.fromBufferAttribute(f,g),sl(Gs,g,l,s,t,e,this)}}updateMorphTargets(){const e=this.geometry.morphAttributes,n=Object.keys(e);if(n.length>0){const s=e[n[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let a=0,r=s.length;a<r;a++){const o=s[a].name||String(a);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=a}}}}}function sl(i,t,e,n,s,a,r){const o=Lr.distanceSqToPoint(i);if(o<e){const l=new w;Lr.closestPointToPoint(i,l),l.applyMatrix4(n);const c=s.ray.origin.distanceTo(l);if(c<s.near||c>s.far)return;a.push({distance:c,distanceToRay:Math.sqrt(o),point:l,index:t,face:null,faceIndex:null,barycoord:null,object:r})}}class Xe extends Ce{constructor(t,e,n,s,a,r,o,l,c){super(t,e,n,s,a,r,o,l,c),this.isCanvasTexture=!0,this.needsUpdate=!0}}class Xr extends ce{constructor(t=1,e=1,n=1,s=32,a=1,r=!1,o=0,l=Math.PI*2){super(),this.type="CylinderGeometry",this.parameters={radiusTop:t,radiusBottom:e,height:n,radialSegments:s,heightSegments:a,openEnded:r,thetaStart:o,thetaLength:l};const c=this;s=Math.floor(s),a=Math.floor(a);const u=[],f=[],p=[],d=[];let g=0;const _=[],m=n/2;let h=0;T(),r===!1&&(t>0&&b(!0),e>0&&b(!1)),this.setIndex(u),this.setAttribute("position",new ve(f,3)),this.setAttribute("normal",new ve(p,3)),this.setAttribute("uv",new ve(d,2));function T(){const S=new w,O=new w;let C=0;const R=(e-t)/n;for(let U=0;U<=a;U++){const y=[],x=U/a,A=x*(e-t)+t;for(let F=0;F<=s;F++){const N=F/s,k=N*l+o,X=Math.sin(k),V=Math.cos(k);O.x=A*X,O.y=-x*n+m,O.z=A*V,f.push(O.x,O.y,O.z),S.set(X,R,V).normalize(),p.push(S.x,S.y,S.z),d.push(N,1-x),y.push(g++)}_.push(y)}for(let U=0;U<s;U++)for(let y=0;y<a;y++){const x=_[y][U],A=_[y+1][U],F=_[y+1][U+1],N=_[y][U+1];(t>0||y!==0)&&(u.push(x,A,N),C+=3),(e>0||y!==a-1)&&(u.push(A,F,N),C+=3)}c.addGroup(h,C,0),h+=C}function b(S){const O=g,C=new Mt,R=new w;let U=0;const y=S===!0?t:e,x=S===!0?1:-1;for(let F=1;F<=s;F++)f.push(0,m*x,0),p.push(0,x,0),d.push(.5,.5),g++;const A=g;for(let F=0;F<=s;F++){const k=F/s*l+o,X=Math.cos(k),V=Math.sin(k);R.x=y*V,R.y=m*x,R.z=y*X,f.push(R.x,R.y,R.z),p.push(0,x,0),C.x=X*.5+.5,C.y=V*.5*x+.5,d.push(C.x,C.y),g++}for(let F=0;F<s;F++){const N=O+F,k=A+F;S===!0?u.push(k,k+1,N):u.push(k+1,k,N),U+=3}c.addGroup(h,U,S===!0?1:2),h+=U}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new Xr(t.radiusTop,t.radiusBottom,t.height,t.radialSegments,t.heightSegments,t.openEnded,t.thetaStart,t.thetaLength)}}class ni extends ce{constructor(t=.5,e=1,n=32,s=1,a=0,r=Math.PI*2){super(),this.type="RingGeometry",this.parameters={innerRadius:t,outerRadius:e,thetaSegments:n,phiSegments:s,thetaStart:a,thetaLength:r},n=Math.max(3,n),s=Math.max(1,s);const o=[],l=[],c=[],u=[];let f=t;const p=(e-t)/s,d=new w,g=new Mt;for(let _=0;_<=s;_++){for(let m=0;m<=n;m++){const h=a+m/n*r;d.x=f*Math.cos(h),d.y=f*Math.sin(h),l.push(d.x,d.y,d.z),c.push(0,0,1),g.x=(d.x/e+1)/2,g.y=(d.y/e+1)/2,u.push(g.x,g.y)}f+=p}for(let _=0;_<s;_++){const m=_*(n+1);for(let h=0;h<n;h++){const T=h+m,b=T,S=T+n+1,O=T+n+2,C=T+1;o.push(b,S,C),o.push(S,O,C)}}this.setIndex(o),this.setAttribute("position",new ve(l,3)),this.setAttribute("normal",new ve(c,3)),this.setAttribute("uv",new ve(u,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new ni(t.innerRadius,t.outerRadius,t.thetaSegments,t.phiSegments,t.thetaStart,t.thetaLength)}}class tn extends ce{constructor(t=1,e=32,n=16,s=0,a=Math.PI*2,r=0,o=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:t,widthSegments:e,heightSegments:n,phiStart:s,phiLength:a,thetaStart:r,thetaLength:o},e=Math.max(3,Math.floor(e)),n=Math.max(2,Math.floor(n));const l=Math.min(r+o,Math.PI);let c=0;const u=[],f=new w,p=new w,d=[],g=[],_=[],m=[];for(let h=0;h<=n;h++){const T=[],b=h/n;let S=0;h===0&&r===0?S=.5/e:h===n&&l===Math.PI&&(S=-.5/e);for(let O=0;O<=e;O++){const C=O/e;f.x=-t*Math.cos(s+C*a)*Math.sin(r+b*o),f.y=t*Math.cos(r+b*o),f.z=t*Math.sin(s+C*a)*Math.sin(r+b*o),g.push(f.x,f.y,f.z),p.copy(f).normalize(),_.push(p.x,p.y,p.z),m.push(C+S,1-b),T.push(c++)}u.push(T)}for(let h=0;h<n;h++)for(let T=0;T<e;T++){const b=u[h][T+1],S=u[h][T],O=u[h+1][T],C=u[h+1][T+1];(h!==0||r>0)&&d.push(b,S,C),(h!==n-1||l<Math.PI)&&d.push(S,O,C)}this.setIndex(d),this.setAttribute("position",new ve(g,3)),this.setAttribute("normal",new ve(_,3)),this.setAttribute("uv",new ve(m,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new tn(t.radius,t.widthSegments,t.heightSegments,t.phiStart,t.phiLength,t.thetaStart,t.thetaLength)}}class al extends kn{static get type(){return"MeshStandardMaterial"}constructor(t){super(),this.isMeshStandardMaterial=!0,this.defines={STANDARD:""},this.color=new Bt(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new Bt(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=Ll,this.normalScale=new Mt(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new un,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.defines={STANDARD:""},this.color.copy(t.color),this.roughness=t.roughness,this.metalness=t.metalness,this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.emissive.copy(t.emissive),this.emissiveMap=t.emissiveMap,this.emissiveIntensity=t.emissiveIntensity,this.bumpMap=t.bumpMap,this.bumpScale=t.bumpScale,this.normalMap=t.normalMap,this.normalMapType=t.normalMapType,this.normalScale.copy(t.normalScale),this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.roughnessMap=t.roughnessMap,this.metalnessMap=t.metalnessMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.envMapIntensity=t.envMapIntensity,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.flatShading=t.flatShading,this.fog=t.fog,this}}class Jl extends _e{constructor(t,e=1){super(),this.isLight=!0,this.type="Light",this.color=new Bt(t),this.intensity=e}dispose(){}copy(t,e){return super.copy(t,e),this.color.copy(t.color),this.intensity=t.intensity,this}toJSON(t){const e=super.toJSON(t);return e.object.color=this.color.getHex(),e.object.intensity=this.intensity,this.groundColor!==void 0&&(e.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(e.object.distance=this.distance),this.angle!==void 0&&(e.object.angle=this.angle),this.decay!==void 0&&(e.object.decay=this.decay),this.penumbra!==void 0&&(e.object.penumbra=this.penumbra),this.shadow!==void 0&&(e.object.shadow=this.shadow.toJSON()),this.target!==void 0&&(e.object.target=this.target.uuid),e}}const Ba=new Jt,rl=new w,ol=new w;class dm{constructor(t){this.camera=t,this.intensity=1,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new Mt(512,512),this.map=null,this.mapPass=null,this.matrix=new Jt,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new Hr,this._frameExtents=new Mt(1,1),this._viewportCount=1,this._viewports=[new jt(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(t){const e=this.camera,n=this.matrix;rl.setFromMatrixPosition(t.matrixWorld),e.position.copy(rl),ol.setFromMatrixPosition(t.target.matrixWorld),e.lookAt(ol),e.updateMatrixWorld(),Ba.multiplyMatrices(e.projectionMatrix,e.matrixWorldInverse),this._frustum.setFromProjectionMatrix(Ba),n.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),n.multiply(Ba)}getViewport(t){return this._viewports[t]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(t){return this.camera=t.camera.clone(),this.intensity=t.intensity,this.bias=t.bias,this.radius=t.radius,this.mapSize.copy(t.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){const t={};return this.intensity!==1&&(t.intensity=this.intensity),this.bias!==0&&(t.bias=this.bias),this.normalBias!==0&&(t.normalBias=this.normalBias),this.radius!==1&&(t.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(t.mapSize=this.mapSize.toArray()),t.camera=this.camera.toJSON(!1).object,delete t.camera.matrix,t}}const ll=new Jt,ts=new w,za=new w;class fm extends dm{constructor(){super(new Fe(90,1,.5,500)),this.isPointLightShadow=!0,this._frameExtents=new Mt(4,2),this._viewportCount=6,this._viewports=[new jt(2,1,1,1),new jt(0,1,1,1),new jt(3,1,1,1),new jt(1,1,1,1),new jt(3,0,1,1),new jt(1,0,1,1)],this._cubeDirections=[new w(1,0,0),new w(-1,0,0),new w(0,0,1),new w(0,0,-1),new w(0,1,0),new w(0,-1,0)],this._cubeUps=[new w(0,1,0),new w(0,1,0),new w(0,1,0),new w(0,1,0),new w(0,0,1),new w(0,0,-1)]}updateMatrices(t,e=0){const n=this.camera,s=this.matrix,a=t.distance||n.far;a!==n.far&&(n.far=a,n.updateProjectionMatrix()),ts.setFromMatrixPosition(t.matrixWorld),n.position.copy(ts),za.copy(n.position),za.add(this._cubeDirections[e]),n.up.copy(this._cubeUps[e]),n.lookAt(za),n.updateMatrixWorld(),s.makeTranslation(-ts.x,-ts.y,-ts.z),ll.multiplyMatrices(n.projectionMatrix,n.matrixWorldInverse),this._frustum.setFromProjectionMatrix(ll)}}class pm extends Jl{constructor(t,e,n=0,s=2){super(t,e),this.isPointLight=!0,this.type="PointLight",this.distance=n,this.decay=s,this.shadow=new fm}get power(){return this.intensity*4*Math.PI}set power(t){this.intensity=t/(4*Math.PI)}dispose(){this.shadow.dispose()}copy(t,e){return super.copy(t,e),this.distance=t.distance,this.decay=t.decay,this.shadow=t.shadow.clone(),this}}class mm extends Jl{constructor(t,e){super(t,e),this.isAmbientLight=!0,this.type="AmbientLight"}}const cl=new Jt;class gm{constructor(t,e,n=0,s=1/0){this.ray=new cs(t,e),this.near=n,this.far=s,this.camera=null,this.layers=new Gr,this.params={Mesh:{},Line:{threshold:1},LOD:{},Points:{threshold:1},Sprite:{}}}set(t,e){this.ray.set(t,e)}setFromCamera(t,e){e.isPerspectiveCamera?(this.ray.origin.setFromMatrixPosition(e.matrixWorld),this.ray.direction.set(t.x,t.y,.5).unproject(e).sub(this.ray.origin).normalize(),this.camera=e):e.isOrthographicCamera?(this.ray.origin.set(t.x,t.y,(e.near+e.far)/(e.near-e.far)).unproject(e),this.ray.direction.set(0,0,-1).transformDirection(e.matrixWorld),this.camera=e):console.error("THREE.Raycaster: Unsupported camera type: "+e.type)}setFromXRController(t){return cl.identity().extractRotation(t.matrixWorld),this.ray.origin.setFromMatrixPosition(t.matrixWorld),this.ray.direction.set(0,0,-1).applyMatrix4(cl),this}intersectObject(t,e=!0,n=[]){return Ir(t,this,n,e),n.sort(hl),n}intersectObjects(t,e=!0,n=[]){for(let s=0,a=t.length;s<a;s++)Ir(t[s],this,n,e);return n.sort(hl),n}}function hl(i,t){return i.distance-t.distance}function Ir(i,t,e,n){let s=!0;if(i.layers.test(t.layers)&&i.raycast(t,e)===!1&&(s=!1),s===!0&&n===!0){const a=i.children;for(let r=0,o=a.length;r<o;r++)Ir(a[r],t,e,!0)}}class ul{constructor(t=1,e=0,n=0){return this.radius=t,this.phi=e,this.theta=n,this}set(t,e,n){return this.radius=t,this.phi=e,this.theta=n,this}copy(t){return this.radius=t.radius,this.phi=t.phi,this.theta=t.theta,this}makeSafe(){return this.phi=Math.max(1e-6,Math.min(Math.PI-1e-6,this.phi)),this}setFromVector3(t){return this.setFromCartesianCoords(t.x,t.y,t.z)}setFromCartesianCoords(t,e,n){return this.radius=Math.sqrt(t*t+e*e+n*n),this.radius===0?(this.theta=0,this.phi=0):(this.theta=Math.atan2(t,n),this.phi=Math.acos(Ae(e/this.radius,-1,1))),this}clone(){return new this.constructor().copy(this)}}const dl=new w;let Hs,ka;class _m extends _e{constructor(t=new w(0,0,1),e=new w(0,0,0),n=1,s=16776960,a=n*.2,r=a*.2){super(),this.type="ArrowHelper",Hs===void 0&&(Hs=new ce,Hs.setAttribute("position",new ve([0,0,0,0,1,0],3)),ka=new Xr(0,.5,1,5,1),ka.translate(0,-.5,0)),this.position.copy(e),this.line=new Zl(Hs,new Wr({color:s,toneMapped:!1})),this.line.matrixAutoUpdate=!1,this.add(this.line),this.cone=new ae(ka,new Oe({color:s,toneMapped:!1})),this.cone.matrixAutoUpdate=!1,this.add(this.cone),this.setDirection(t),this.setLength(n,a,r)}setDirection(t){if(t.y>.99999)this.quaternion.set(0,0,0,1);else if(t.y<-.99999)this.quaternion.set(1,0,0,0);else{dl.set(t.z,0,-t.x).normalize();const e=Math.acos(t.y);this.quaternion.setFromAxisAngle(dl,e)}}setLength(t,e=t*.2,n=e*.2){this.line.scale.set(1,Math.max(1e-4,t-e),1),this.line.updateMatrix(),this.cone.scale.set(n,e,n),this.cone.position.y=t,this.cone.updateMatrix()}setColor(t){this.line.material.color.set(t),this.cone.material.color.set(t)}copy(t){return super.copy(t,!1),this.line.copy(t.line),this.cone.copy(t.cone),this}dispose(){this.line.geometry.dispose(),this.line.material.dispose(),this.cone.geometry.dispose(),this.cone.material.dispose()}}class vm extends ri{constructor(t,e=null){super(),this.object=t,this.domElement=e,this.enabled=!0,this.state=-1,this.keys={},this.mouseButtons={LEFT:null,MIDDLE:null,RIGHT:null},this.touches={ONE:null,TWO:null}}connect(){}disconnect(){}dispose(){}update(){}}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:Ur}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=Ur);const fl={type:"change"},qr={type:"start"},Ql={type:"end"},Vs=new cs,pl=new Un,xm=Math.cos(70*Yc.DEG2RAD),fe=new w,Pe=2*Math.PI,Kt={NONE:-1,ROTATE:0,DOLLY:1,PAN:2,TOUCH_ROTATE:3,TOUCH_PAN:4,TOUCH_DOLLY_PAN:5,TOUCH_DOLLY_ROTATE:6},Ga=1e-6;class Mm extends vm{constructor(t,e=null){super(t,e),this.state=Kt.NONE,this.enabled=!0,this.target=new w,this.cursor=new w,this.minDistance=0,this.maxDistance=1/0,this.minZoom=0,this.maxZoom=1/0,this.minTargetRadius=0,this.maxTargetRadius=1/0,this.minPolarAngle=0,this.maxPolarAngle=Math.PI,this.minAzimuthAngle=-1/0,this.maxAzimuthAngle=1/0,this.enableDamping=!1,this.dampingFactor=.05,this.enableZoom=!0,this.zoomSpeed=1,this.enableRotate=!0,this.rotateSpeed=1,this.enablePan=!0,this.panSpeed=1,this.screenSpacePanning=!0,this.keyPanSpeed=7,this.zoomToCursor=!1,this.autoRotate=!1,this.autoRotateSpeed=2,this.keys={LEFT:"ArrowLeft",UP:"ArrowUp",RIGHT:"ArrowRight",BOTTOM:"ArrowDown"},this.mouseButtons={LEFT:Pi.ROTATE,MIDDLE:Pi.DOLLY,RIGHT:Pi.PAN},this.touches={ONE:Ci.ROTATE,TWO:Ci.DOLLY_PAN},this.target0=this.target.clone(),this.position0=this.object.position.clone(),this.zoom0=this.object.zoom,this._domElementKeyEvents=null,this._lastPosition=new w,this._lastQuaternion=new ai,this._lastTargetPosition=new w,this._quat=new ai().setFromUnitVectors(t.up,new w(0,1,0)),this._quatInverse=this._quat.clone().invert(),this._spherical=new ul,this._sphericalDelta=new ul,this._scale=1,this._panOffset=new w,this._rotateStart=new Mt,this._rotateEnd=new Mt,this._rotateDelta=new Mt,this._panStart=new Mt,this._panEnd=new Mt,this._panDelta=new Mt,this._dollyStart=new Mt,this._dollyEnd=new Mt,this._dollyDelta=new Mt,this._dollyDirection=new w,this._mouse=new Mt,this._performCursorZoom=!1,this._pointers=[],this._pointerPositions={},this._controlActive=!1,this._onPointerMove=Sm.bind(this),this._onPointerDown=ym.bind(this),this._onPointerUp=Em.bind(this),this._onContextMenu=Pm.bind(this),this._onMouseWheel=Am.bind(this),this._onKeyDown=wm.bind(this),this._onTouchStart=Cm.bind(this),this._onTouchMove=Rm.bind(this),this._onMouseDown=bm.bind(this),this._onMouseMove=Tm.bind(this),this._interceptControlDown=Dm.bind(this),this._interceptControlUp=Lm.bind(this),this.domElement!==null&&this.connect(),this.update()}connect(){this.domElement.addEventListener("pointerdown",this._onPointerDown),this.domElement.addEventListener("pointercancel",this._onPointerUp),this.domElement.addEventListener("contextmenu",this._onContextMenu),this.domElement.addEventListener("wheel",this._onMouseWheel,{passive:!1}),this.domElement.getRootNode().addEventListener("keydown",this._interceptControlDown,{passive:!0,capture:!0}),this.domElement.style.touchAction="none"}disconnect(){this.domElement.removeEventListener("pointerdown",this._onPointerDown),this.domElement.removeEventListener("pointermove",this._onPointerMove),this.domElement.removeEventListener("pointerup",this._onPointerUp),this.domElement.removeEventListener("pointercancel",this._onPointerUp),this.domElement.removeEventListener("wheel",this._onMouseWheel),this.domElement.removeEventListener("contextmenu",this._onContextMenu),this.stopListenToKeyEvents(),this.domElement.getRootNode().removeEventListener("keydown",this._interceptControlDown,{capture:!0}),this.domElement.style.touchAction="auto"}dispose(){this.disconnect()}getPolarAngle(){return this._spherical.phi}getAzimuthalAngle(){return this._spherical.theta}getDistance(){return this.object.position.distanceTo(this.target)}listenToKeyEvents(t){t.addEventListener("keydown",this._onKeyDown),this._domElementKeyEvents=t}stopListenToKeyEvents(){this._domElementKeyEvents!==null&&(this._domElementKeyEvents.removeEventListener("keydown",this._onKeyDown),this._domElementKeyEvents=null)}saveState(){this.target0.copy(this.target),this.position0.copy(this.object.position),this.zoom0=this.object.zoom}reset(){this.target.copy(this.target0),this.object.position.copy(this.position0),this.object.zoom=this.zoom0,this.object.updateProjectionMatrix(),this.dispatchEvent(fl),this.update(),this.state=Kt.NONE}update(t=null){const e=this.object.position;fe.copy(e).sub(this.target),fe.applyQuaternion(this._quat),this._spherical.setFromVector3(fe),this.autoRotate&&this.state===Kt.NONE&&this._rotateLeft(this._getAutoRotationAngle(t)),this.enableDamping?(this._spherical.theta+=this._sphericalDelta.theta*this.dampingFactor,this._spherical.phi+=this._sphericalDelta.phi*this.dampingFactor):(this._spherical.theta+=this._sphericalDelta.theta,this._spherical.phi+=this._sphericalDelta.phi);let n=this.minAzimuthAngle,s=this.maxAzimuthAngle;isFinite(n)&&isFinite(s)&&(n<-Math.PI?n+=Pe:n>Math.PI&&(n-=Pe),s<-Math.PI?s+=Pe:s>Math.PI&&(s-=Pe),n<=s?this._spherical.theta=Math.max(n,Math.min(s,this._spherical.theta)):this._spherical.theta=this._spherical.theta>(n+s)/2?Math.max(n,this._spherical.theta):Math.min(s,this._spherical.theta)),this._spherical.phi=Math.max(this.minPolarAngle,Math.min(this.maxPolarAngle,this._spherical.phi)),this._spherical.makeSafe(),this.enableDamping===!0?this.target.addScaledVector(this._panOffset,this.dampingFactor):this.target.add(this._panOffset),this.target.sub(this.cursor),this.target.clampLength(this.minTargetRadius,this.maxTargetRadius),this.target.add(this.cursor);let a=!1;if(this.zoomToCursor&&this._performCursorZoom||this.object.isOrthographicCamera)this._spherical.radius=this._clampDistance(this._spherical.radius);else{const r=this._spherical.radius;this._spherical.radius=this._clampDistance(this._spherical.radius*this._scale),a=r!=this._spherical.radius}if(fe.setFromSpherical(this._spherical),fe.applyQuaternion(this._quatInverse),e.copy(this.target).add(fe),this.object.lookAt(this.target),this.enableDamping===!0?(this._sphericalDelta.theta*=1-this.dampingFactor,this._sphericalDelta.phi*=1-this.dampingFactor,this._panOffset.multiplyScalar(1-this.dampingFactor)):(this._sphericalDelta.set(0,0,0),this._panOffset.set(0,0,0)),this.zoomToCursor&&this._performCursorZoom){let r=null;if(this.object.isPerspectiveCamera){const o=fe.length();r=this._clampDistance(o*this._scale);const l=o-r;this.object.position.addScaledVector(this._dollyDirection,l),this.object.updateMatrixWorld(),a=!!l}else if(this.object.isOrthographicCamera){const o=new w(this._mouse.x,this._mouse.y,0);o.unproject(this.object);const l=this.object.zoom;this.object.zoom=Math.max(this.minZoom,Math.min(this.maxZoom,this.object.zoom/this._scale)),this.object.updateProjectionMatrix(),a=l!==this.object.zoom;const c=new w(this._mouse.x,this._mouse.y,0);c.unproject(this.object),this.object.position.sub(c).add(o),this.object.updateMatrixWorld(),r=fe.length()}else console.warn("WARNING: OrbitControls.js encountered an unknown camera type - zoom to cursor disabled."),this.zoomToCursor=!1;r!==null&&(this.screenSpacePanning?this.target.set(0,0,-1).transformDirection(this.object.matrix).multiplyScalar(r).add(this.object.position):(Vs.origin.copy(this.object.position),Vs.direction.set(0,0,-1).transformDirection(this.object.matrix),Math.abs(this.object.up.dot(Vs.direction))<xm?this.object.lookAt(this.target):(pl.setFromNormalAndCoplanarPoint(this.object.up,this.target),Vs.intersectPlane(pl,this.target))))}else if(this.object.isOrthographicCamera){const r=this.object.zoom;this.object.zoom=Math.max(this.minZoom,Math.min(this.maxZoom,this.object.zoom/this._scale)),r!==this.object.zoom&&(this.object.updateProjectionMatrix(),a=!0)}return this._scale=1,this._performCursorZoom=!1,a||this._lastPosition.distanceToSquared(this.object.position)>Ga||8*(1-this._lastQuaternion.dot(this.object.quaternion))>Ga||this._lastTargetPosition.distanceToSquared(this.target)>Ga?(this.dispatchEvent(fl),this._lastPosition.copy(this.object.position),this._lastQuaternion.copy(this.object.quaternion),this._lastTargetPosition.copy(this.target),!0):!1}_getAutoRotationAngle(t){return t!==null?Pe/60*this.autoRotateSpeed*t:Pe/60/60*this.autoRotateSpeed}_getZoomScale(t){const e=Math.abs(t*.01);return Math.pow(.95,this.zoomSpeed*e)}_rotateLeft(t){this._sphericalDelta.theta-=t}_rotateUp(t){this._sphericalDelta.phi-=t}_panLeft(t,e){fe.setFromMatrixColumn(e,0),fe.multiplyScalar(-t),this._panOffset.add(fe)}_panUp(t,e){this.screenSpacePanning===!0?fe.setFromMatrixColumn(e,1):(fe.setFromMatrixColumn(e,0),fe.crossVectors(this.object.up,fe)),fe.multiplyScalar(t),this._panOffset.add(fe)}_pan(t,e){const n=this.domElement;if(this.object.isPerspectiveCamera){const s=this.object.position;fe.copy(s).sub(this.target);let a=fe.length();a*=Math.tan(this.object.fov/2*Math.PI/180),this._panLeft(2*t*a/n.clientHeight,this.object.matrix),this._panUp(2*e*a/n.clientHeight,this.object.matrix)}else this.object.isOrthographicCamera?(this._panLeft(t*(this.object.right-this.object.left)/this.object.zoom/n.clientWidth,this.object.matrix),this._panUp(e*(this.object.top-this.object.bottom)/this.object.zoom/n.clientHeight,this.object.matrix)):(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - pan disabled."),this.enablePan=!1)}_dollyOut(t){this.object.isPerspectiveCamera||this.object.isOrthographicCamera?this._scale/=t:(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),this.enableZoom=!1)}_dollyIn(t){this.object.isPerspectiveCamera||this.object.isOrthographicCamera?this._scale*=t:(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),this.enableZoom=!1)}_updateZoomParameters(t,e){if(!this.zoomToCursor)return;this._performCursorZoom=!0;const n=this.domElement.getBoundingClientRect(),s=t-n.left,a=e-n.top,r=n.width,o=n.height;this._mouse.x=s/r*2-1,this._mouse.y=-(a/o)*2+1,this._dollyDirection.set(this._mouse.x,this._mouse.y,1).unproject(this.object).sub(this.object.position).normalize()}_clampDistance(t){return Math.max(this.minDistance,Math.min(this.maxDistance,t))}_handleMouseDownRotate(t){this._rotateStart.set(t.clientX,t.clientY)}_handleMouseDownDolly(t){this._updateZoomParameters(t.clientX,t.clientX),this._dollyStart.set(t.clientX,t.clientY)}_handleMouseDownPan(t){this._panStart.set(t.clientX,t.clientY)}_handleMouseMoveRotate(t){this._rotateEnd.set(t.clientX,t.clientY),this._rotateDelta.subVectors(this._rotateEnd,this._rotateStart).multiplyScalar(this.rotateSpeed);const e=this.domElement;this._rotateLeft(Pe*this._rotateDelta.x/e.clientHeight),this._rotateUp(Pe*this._rotateDelta.y/e.clientHeight),this._rotateStart.copy(this._rotateEnd),this.update()}_handleMouseMoveDolly(t){this._dollyEnd.set(t.clientX,t.clientY),this._dollyDelta.subVectors(this._dollyEnd,this._dollyStart),this._dollyDelta.y>0?this._dollyOut(this._getZoomScale(this._dollyDelta.y)):this._dollyDelta.y<0&&this._dollyIn(this._getZoomScale(this._dollyDelta.y)),this._dollyStart.copy(this._dollyEnd),this.update()}_handleMouseMovePan(t){this._panEnd.set(t.clientX,t.clientY),this._panDelta.subVectors(this._panEnd,this._panStart).multiplyScalar(this.panSpeed),this._pan(this._panDelta.x,this._panDelta.y),this._panStart.copy(this._panEnd),this.update()}_handleMouseWheel(t){this._updateZoomParameters(t.clientX,t.clientY),t.deltaY<0?this._dollyIn(this._getZoomScale(t.deltaY)):t.deltaY>0&&this._dollyOut(this._getZoomScale(t.deltaY)),this.update()}_handleKeyDown(t){let e=!1;switch(t.code){case this.keys.UP:t.ctrlKey||t.metaKey||t.shiftKey?this._rotateUp(Pe*this.rotateSpeed/this.domElement.clientHeight):this._pan(0,this.keyPanSpeed),e=!0;break;case this.keys.BOTTOM:t.ctrlKey||t.metaKey||t.shiftKey?this._rotateUp(-Pe*this.rotateSpeed/this.domElement.clientHeight):this._pan(0,-this.keyPanSpeed),e=!0;break;case this.keys.LEFT:t.ctrlKey||t.metaKey||t.shiftKey?this._rotateLeft(Pe*this.rotateSpeed/this.domElement.clientHeight):this._pan(this.keyPanSpeed,0),e=!0;break;case this.keys.RIGHT:t.ctrlKey||t.metaKey||t.shiftKey?this._rotateLeft(-Pe*this.rotateSpeed/this.domElement.clientHeight):this._pan(-this.keyPanSpeed,0),e=!0;break}e&&(t.preventDefault(),this.update())}_handleTouchStartRotate(t){if(this._pointers.length===1)this._rotateStart.set(t.pageX,t.pageY);else{const e=this._getSecondPointerPosition(t),n=.5*(t.pageX+e.x),s=.5*(t.pageY+e.y);this._rotateStart.set(n,s)}}_handleTouchStartPan(t){if(this._pointers.length===1)this._panStart.set(t.pageX,t.pageY);else{const e=this._getSecondPointerPosition(t),n=.5*(t.pageX+e.x),s=.5*(t.pageY+e.y);this._panStart.set(n,s)}}_handleTouchStartDolly(t){const e=this._getSecondPointerPosition(t),n=t.pageX-e.x,s=t.pageY-e.y,a=Math.sqrt(n*n+s*s);this._dollyStart.set(0,a)}_handleTouchStartDollyPan(t){this.enableZoom&&this._handleTouchStartDolly(t),this.enablePan&&this._handleTouchStartPan(t)}_handleTouchStartDollyRotate(t){this.enableZoom&&this._handleTouchStartDolly(t),this.enableRotate&&this._handleTouchStartRotate(t)}_handleTouchMoveRotate(t){if(this._pointers.length==1)this._rotateEnd.set(t.pageX,t.pageY);else{const n=this._getSecondPointerPosition(t),s=.5*(t.pageX+n.x),a=.5*(t.pageY+n.y);this._rotateEnd.set(s,a)}this._rotateDelta.subVectors(this._rotateEnd,this._rotateStart).multiplyScalar(this.rotateSpeed);const e=this.domElement;this._rotateLeft(Pe*this._rotateDelta.x/e.clientHeight),this._rotateUp(Pe*this._rotateDelta.y/e.clientHeight),this._rotateStart.copy(this._rotateEnd)}_handleTouchMovePan(t){if(this._pointers.length===1)this._panEnd.set(t.pageX,t.pageY);else{const e=this._getSecondPointerPosition(t),n=.5*(t.pageX+e.x),s=.5*(t.pageY+e.y);this._panEnd.set(n,s)}this._panDelta.subVectors(this._panEnd,this._panStart).multiplyScalar(this.panSpeed),this._pan(this._panDelta.x,this._panDelta.y),this._panStart.copy(this._panEnd)}_handleTouchMoveDolly(t){const e=this._getSecondPointerPosition(t),n=t.pageX-e.x,s=t.pageY-e.y,a=Math.sqrt(n*n+s*s);this._dollyEnd.set(0,a),this._dollyDelta.set(0,Math.pow(this._dollyEnd.y/this._dollyStart.y,this.zoomSpeed)),this._dollyOut(this._dollyDelta.y),this._dollyStart.copy(this._dollyEnd);const r=(t.pageX+e.x)*.5,o=(t.pageY+e.y)*.5;this._updateZoomParameters(r,o)}_handleTouchMoveDollyPan(t){this.enableZoom&&this._handleTouchMoveDolly(t),this.enablePan&&this._handleTouchMovePan(t)}_handleTouchMoveDollyRotate(t){this.enableZoom&&this._handleTouchMoveDolly(t),this.enableRotate&&this._handleTouchMoveRotate(t)}_addPointer(t){this._pointers.push(t.pointerId)}_removePointer(t){delete this._pointerPositions[t.pointerId];for(let e=0;e<this._pointers.length;e++)if(this._pointers[e]==t.pointerId){this._pointers.splice(e,1);return}}_isTrackingPointer(t){for(let e=0;e<this._pointers.length;e++)if(this._pointers[e]==t.pointerId)return!0;return!1}_trackPointer(t){let e=this._pointerPositions[t.pointerId];e===void 0&&(e=new Mt,this._pointerPositions[t.pointerId]=e),e.set(t.pageX,t.pageY)}_getSecondPointerPosition(t){const e=t.pointerId===this._pointers[0]?this._pointers[1]:this._pointers[0];return this._pointerPositions[e]}_customWheelEvent(t){const e=t.deltaMode,n={clientX:t.clientX,clientY:t.clientY,deltaY:t.deltaY};switch(e){case 1:n.deltaY*=16;break;case 2:n.deltaY*=100;break}return t.ctrlKey&&!this._controlActive&&(n.deltaY*=10),n}}function ym(i){this.enabled!==!1&&(this._pointers.length===0&&(this.domElement.setPointerCapture(i.pointerId),this.domElement.addEventListener("pointermove",this._onPointerMove),this.domElement.addEventListener("pointerup",this._onPointerUp)),!this._isTrackingPointer(i)&&(this._addPointer(i),i.pointerType==="touch"?this._onTouchStart(i):this._onMouseDown(i)))}function Sm(i){this.enabled!==!1&&(i.pointerType==="touch"?this._onTouchMove(i):this._onMouseMove(i))}function Em(i){switch(this._removePointer(i),this._pointers.length){case 0:this.domElement.releasePointerCapture(i.pointerId),this.domElement.removeEventListener("pointermove",this._onPointerMove),this.domElement.removeEventListener("pointerup",this._onPointerUp),this.dispatchEvent(Ql),this.state=Kt.NONE;break;case 1:const t=this._pointers[0],e=this._pointerPositions[t];this._onTouchStart({pointerId:t,pageX:e.x,pageY:e.y});break}}function bm(i){let t;switch(i.button){case 0:t=this.mouseButtons.LEFT;break;case 1:t=this.mouseButtons.MIDDLE;break;case 2:t=this.mouseButtons.RIGHT;break;default:t=-1}switch(t){case Pi.DOLLY:if(this.enableZoom===!1)return;this._handleMouseDownDolly(i),this.state=Kt.DOLLY;break;case Pi.ROTATE:if(i.ctrlKey||i.metaKey||i.shiftKey){if(this.enablePan===!1)return;this._handleMouseDownPan(i),this.state=Kt.PAN}else{if(this.enableRotate===!1)return;this._handleMouseDownRotate(i),this.state=Kt.ROTATE}break;case Pi.PAN:if(i.ctrlKey||i.metaKey||i.shiftKey){if(this.enableRotate===!1)return;this._handleMouseDownRotate(i),this.state=Kt.ROTATE}else{if(this.enablePan===!1)return;this._handleMouseDownPan(i),this.state=Kt.PAN}break;default:this.state=Kt.NONE}this.state!==Kt.NONE&&this.dispatchEvent(qr)}function Tm(i){switch(this.state){case Kt.ROTATE:if(this.enableRotate===!1)return;this._handleMouseMoveRotate(i);break;case Kt.DOLLY:if(this.enableZoom===!1)return;this._handleMouseMoveDolly(i);break;case Kt.PAN:if(this.enablePan===!1)return;this._handleMouseMovePan(i);break}}function Am(i){this.enabled===!1||this.enableZoom===!1||this.state!==Kt.NONE||(i.preventDefault(),this.dispatchEvent(qr),this._handleMouseWheel(this._customWheelEvent(i)),this.dispatchEvent(Ql))}function wm(i){this.enabled===!1||this.enablePan===!1||this._handleKeyDown(i)}function Cm(i){switch(this._trackPointer(i),this._pointers.length){case 1:switch(this.touches.ONE){case Ci.ROTATE:if(this.enableRotate===!1)return;this._handleTouchStartRotate(i),this.state=Kt.TOUCH_ROTATE;break;case Ci.PAN:if(this.enablePan===!1)return;this._handleTouchStartPan(i),this.state=Kt.TOUCH_PAN;break;default:this.state=Kt.NONE}break;case 2:switch(this.touches.TWO){case Ci.DOLLY_PAN:if(this.enableZoom===!1&&this.enablePan===!1)return;this._handleTouchStartDollyPan(i),this.state=Kt.TOUCH_DOLLY_PAN;break;case Ci.DOLLY_ROTATE:if(this.enableZoom===!1&&this.enableRotate===!1)return;this._handleTouchStartDollyRotate(i),this.state=Kt.TOUCH_DOLLY_ROTATE;break;default:this.state=Kt.NONE}break;default:this.state=Kt.NONE}this.state!==Kt.NONE&&this.dispatchEvent(qr)}function Rm(i){switch(this._trackPointer(i),this.state){case Kt.TOUCH_ROTATE:if(this.enableRotate===!1)return;this._handleTouchMoveRotate(i),this.update();break;case Kt.TOUCH_PAN:if(this.enablePan===!1)return;this._handleTouchMovePan(i),this.update();break;case Kt.TOUCH_DOLLY_PAN:if(this.enableZoom===!1&&this.enablePan===!1)return;this._handleTouchMoveDollyPan(i),this.update();break;case Kt.TOUCH_DOLLY_ROTATE:if(this.enableZoom===!1&&this.enableRotate===!1)return;this._handleTouchMoveDollyRotate(i),this.update();break;default:this.state=Kt.NONE}}function Pm(i){this.enabled!==!1&&i.preventDefault()}function Dm(i){i.key==="Control"&&(this._controlActive=!0,this.domElement.getRootNode().addEventListener("keyup",this._interceptControlUp,{passive:!0,capture:!0}))}function Lm(i){i.key==="Control"&&(this._controlActive=!1,this.domElement.getRootNode().removeEventListener("keyup",this._interceptControlUp,{passive:!0,capture:!0}))}const tc=[{id:"sagittarius-a",name:"Sagittarius A*",commonName:"Galactic Center Supermassive Black Hole",constellation:"Sagittarius",category:"supermassive_black_hole",equatorial:{ra:"17h 45m 40.04s",dec:`-29° 00' 28.1"`,raDeg:266.416837,decDeg:-29.00781,distanceLy:26e3},galactic:{lDeg:359.9442,bDeg:-.0462,distanceLy:26e3},cartesian:{x:0,y:0,z:0},threePosition:[0,0,0],distanceFromGC:0,distanceFromSun:26e3,spectralType:"SMBH",temperatureK:1e5,apparentMagnitude:15,absoluteMagnitude:null,description:"Sagittarius A* is the supermassive black hole anchoring the dynamical center of the Milky Way, possessing a mass of approximately 4.15 million solar masses. It features a glowing relativistic accretion flow, an event horizon shadow observed by the Event Horizon Telescope, and intense gravitational light bending surrounded by the dense nuclear stellar cluster.",cameraDistance:250,cameraOffset:[0,80,220],scientificDetails:{massSolarMasses:4154e3,schwarzschildRadiusKm:123e5,discoveryYear:1974,observationalMilestone:"EHT direct event horizon shadow imaging (2022)"}},{id:"sun",name:"The Sun",commonName:"Solar System / Sol",constellation:"N/A (Local Orion Spur)",category:"star_system",equatorial:{ra:"00h 00m 00.0s",dec:`+00° 00' 00.0"`,raDeg:0,decDeg:0,distanceLy:0},galactic:{lDeg:0,bDeg:0,distanceLy:0},cartesian:{x:0,y:68,z:26e3},threePosition:[0,68,26e3],distanceFromGC:26e3,distanceFromSun:0,spectralType:"G2V",temperatureK:5778,apparentMagnitude:-26.74,absoluteMagnitude:4.83,description:"The Sun is a G-type main-sequence yellow dwarf star situated in the local Orion Spur between the Sagittarius and Perseus spiral arms, roughly 26,000 light-years from Sagittarius A*. It anchors the Solar System, home to humanity, and serves as the fundamental photometric reference point for stellar astrophysics.",cameraDistance:150,cameraOffset:[30,60,120],scientificDetails:{massSolarMasses:1,metallicityFeH:0,galacticOrbitalPeriodMyr:230,elevationAboveMidplaneLy:68}},{id:"pleiades",name:"Pleiades",commonName:"Messier 45 / Seven Sisters",constellation:"Taurus",category:"open_cluster",equatorial:{ra:"03h 47m 24.0s",dec:`+24° 07' 00"`,raDeg:56.85,decDeg:24.1167,distanceLy:444},galactic:{lDeg:166.57,bDeg:-23.52,distanceLy:444},cartesian:{x:-94.6,y:-109.2,z:26396},threePosition:[-94.6,-109.2,26396],distanceFromGC:26396,distanceFromSun:444,spectralType:"B7IIIe",temperatureK:12300,apparentMagnitude:1.6,absoluteMagnitude:-2.8,description:"The Pleiades is a young open star cluster of over 1,000 stars dominated by luminous hot blue B-type subgiants including Alcyone, Atlas, and Electra. Formed roughly 100 million years ago, the cluster is currently passing through an interstellar dust cloud that scatters blue starlight, producing its famous reflection nebulae.",cameraDistance:300,cameraOffset:[40,70,200],scientificDetails:{clusterAgeMyr:100,parallaxMas:7.34,brightestStar:"Alcyone (Eta Tauri, B7IIIe)",reflectionNebula:"NGC 1435 (Merope Nebula)"}},{id:"orion-nebula",name:"Orion Nebula",commonName:"Messier 42 / NGC 1976",constellation:"Orion",category:"emission_nebula",equatorial:{ra:"05h 35m 17.3s",dec:`-05° 23' 28"`,raDeg:83.8221,decDeg:-5.3911,distanceLy:1344},galactic:{lDeg:209.01,bDeg:-19.38,distanceLy:1344},cartesian:{x:614.9,y:-377.9,z:27108.7},threePosition:[614.9,-377.9,27108.7],distanceFromGC:27118,distanceFromSun:1344,spectralType:"O7Vp",temperatureK:39e3,apparentMagnitude:4,absoluteMagnitude:-4.1,description:"The Orion Nebula is an active diffuse H II stellar nursery located approximately 1,344 light-years from Earth. Ionized by the high-energy ultraviolet radiation of the central Trapezium Cluster (Theta-1 Orionis C, spectral type O7Vp), it showcases turbulent ionization shock fronts, protoplanetary disks (proplyds), and glowing hydrogen gas.",cameraDistance:450,cameraOffset:[60,80,250],scientificDetails:{physicalDiameterLy:24,parallaxMas:2.43,coreIonizingCluster:"Trapezium Cluster (Theta-1 Orionis)",dominantEmissionLines:"H-alpha (656.3 nm), [O III] (500.7 nm)"}},{id:"eta-carinae",name:"Eta Carinae",commonName:"Eta Carinae & Homunculus Nebula",constellation:"Carina",category:"stellar_system",equatorial:{ra:"10h 45m 03.6s",dec:`-59° 41' 04"`,raDeg:161.26496,decDeg:-59.68452,distanceLy:7500},galactic:{lDeg:287.6,bDeg:-.63,distanceLy:7500},cartesian:{x:7148.6,y:-14.5,z:23732.1},threePosition:[7148.6,-14.5,23732.1],distanceFromGC:24785,distanceFromSun:7500,spectralType:"LBV+O",temperatureK:15e3,apparentMagnitude:4.3,absoluteMagnitude:-8.6,description:"Eta Carinae is an unstable hypergiant binary system containing a Luminous Blue Variable of over 100 solar masses producing millions of times the Sun's luminosity. Following its Great Eruption in 1843, it ejected the expanding bipolar Homunculus dust nebula and is among the galaxy's most immediate supernova/hypernova candidates.",cameraDistance:600,cameraOffset:[80,90,320],scientificDetails:{primaryMassSolar:100,luminositySolar:45e5,orbitalPeriodYears:5.54,supernovaProgenitor:"Pair-instability / Core-collapse Hypernova"}},{id:"crab-nebula",name:"Crab Nebula",commonName:"Messier 1 / SN 1054 Remnant",constellation:"Taurus",category:"supernova_remnant",equatorial:{ra:"05h 34m 31.9s",dec:`+22° 00' 52"`,raDeg:83.63308,decDeg:22.0145,distanceLy:6500},galactic:{lDeg:184.56,bDeg:-5.78,distanceLy:6500},cartesian:{x:514.1,y:-586.6,z:32446.2},threePosition:[514.1,-586.6,32446.2],distanceFromGC:32455,distanceFromSun:6500,spectralType:"PWN",temperatureK:1e5,apparentMagnitude:8.4,absoluteMagnitude:-3.1,description:"The Crab Nebula is the remnant of supernova SN 1054 observed by astronomers in 1054 AD. At its center lies the Crab Pulsar (PSR B0531+21), a rapidly spinning neutron star rotating 30 times per second whose relativistic magnetized wind energizes the filamentary synchrotron nebula.",cameraDistance:550,cameraOffset:[70,80,280],scientificDetails:{pulsarPeriodMs:33.085,pulsarMagneticFieldGauss:38e11,expansionVelocityKmS:1500,radiationType:"Relativistic Synchrotron & Ionized Filament Lines"}},{id:"trapezium",name:"Trapezium Cluster",commonName:"Theta-1 Orionis C",constellation:"Orion",category:"open_cluster",equatorial:{ra:"05h 35m 16.5s",dec:`-05° 23' 23"`,raDeg:83.8186,decDeg:-5.3897,distanceLy:1344},galactic:{lDeg:209.01,bDeg:-19.38,distanceLy:1344},cartesian:{x:614.9,y:-377.9,z:27108.7},threePosition:[614.9,-377.9,27108.7],distanceFromGC:27118,distanceFromSun:1344,spectralType:"O7Vp",temperatureK:39e3,apparentMagnitude:5.13,absoluteMagnitude:-3.2,description:"The Trapezium Cluster is a dense, young open cluster at the core of the Orion Nebula. Its brightest star, Theta-1 Orionis C, is an extreme O-type main-sequence star emitting immense ultraviolet flux that powers the ionization of Messier 42.",cameraDistance:200,cameraOffset:[25,30,90],scientificDetails:{spectralClassification:"O7Vp",massSolarMasses:33,luminositySolar:204e3}},{id:"betelgeuse",name:"Betelgeuse",commonName:"Alpha Orionis",constellation:"Orion",category:"stellar_system",equatorial:{ra:"05h 55m 10.3s",dec:`+07° 24' 25"`,raDeg:88.7929,decDeg:7.4071,distanceLy:548},galactic:{lDeg:199.79,bDeg:-8.96,distanceLy:548},cartesian:{x:183.3,y:-17.3,z:26509.4},threePosition:[183.3,-17.3,26509.4],distanceFromGC:26510,distanceFromSun:548,spectralType:"M1-2Ia-ab",temperatureK:3600,apparentMagnitude:.5,absoluteMagnitude:-5.85,description:"Betelgeuse is a red supergiant star in the constellation Orion, with a radius hundreds of times greater than the Sun. It is in the late stages of stellar evolution and is expected to explode as a Type II supernova within the next 100,000 years.",cameraDistance:180,cameraOffset:[20,30,100],scientificDetails:{radiusSolarRadii:764,luminositySolar:126e3,variabilityType:"Semiregular pulsating supergiant"}},{id:"sirius",name:"Sirius",commonName:"Alpha Canis Majoris / Dog Star",constellation:"Canis Major",category:"star_system",equatorial:{ra:"06h 45m 08.9s",dec:`-16° 42' 58"`,raDeg:101.2872,decDeg:-16.7161,distanceLy:8.6},galactic:{lDeg:227.23,bDeg:-8.89,distanceLy:8.6},cartesian:{x:6.3,y:66.7,z:26005.8},threePosition:[6.3,66.7,26005.8],distanceFromGC:26006,distanceFromSun:8.6,spectralType:"A1V+DA2",temperatureK:9940,apparentMagnitude:-1.46,absoluteMagnitude:1.42,description:"Sirius is the brightest star in the night sky, located in Canis Major. It is a binary star system consisting of a main-sequence A-type star (Sirius A) and a faint white dwarf companion (Sirius B), located just 8.6 light-years from the Solar System.",cameraDistance:80,cameraOffset:[10,15,45],scientificDetails:{parallaxMas:379.21,primaryMassSolar:2.06,companionType:"DA2 White Dwarf (Sirius B)"}},{id:"vega",name:"Vega",commonName:"Alpha Lyrae",constellation:"Lyra",category:"star_system",equatorial:{ra:"18h 36m 56.3s",dec:`+38° 47' 01"`,raDeg:279.2347,decDeg:38.7837,distanceLy:25},galactic:{lDeg:67.45,bDeg:19.24,distanceLy:25},cartesian:{x:-21.8,y:76.2,z:25990.9},threePosition:[-21.8,76.2,25990.9],distanceFromGC:25991,distanceFromSun:25,spectralType:"A0V",temperatureK:9600,apparentMagnitude:.03,absoluteMagnitude:.58,description:"Vega is the brightest star in the northern constellation Lyra and the historical zero-point baseline for the UBV photometric magnitude system. It is a rapidly rotating A-type star surrounded by a circumstellar debris disk.",cameraDistance:100,cameraOffset:[15,20,55],scientificDetails:{parallaxMas:130.23,rotationalVelocityKmS:236,debrisDisk:"Detected in infrared by IRAS (1983)"}},{id:"alpha-centauri",name:"Alpha Centauri",commonName:"Rigil Kentaurus / Toliman",constellation:"Centaurus",category:"star_system",equatorial:{ra:"14h 39m 36.5s",dec:`-60° 50' 02"`,raDeg:219.9021,decDeg:-60.834,distanceLy:4.37},galactic:{lDeg:315.78,bDeg:-.71,distanceLy:4.37},cartesian:{x:3,y:67.9,z:25996.9},threePosition:[3,67.9,25996.9],distanceFromGC:25997,distanceFromSun:4.37,spectralType:"G2V+K1V",temperatureK:5790,apparentMagnitude:-.27,absoluteMagnitude:4.07,description:"Alpha Centauri is the closest star system to the Solar System at 4.37 light-years. It is a triple star system containing Alpha Centauri A (G2V), Alpha Centauri B (K1V), and the red dwarf Proxima Centauri (M5.5Ve) which hosts terrestrial exoplanets.",cameraDistance:70,cameraOffset:[8,12,40],scientificDetails:{parallaxMas:747.1,proximaDistanceLy:4.24,exoplanet:"Proxima Centauri b (Habitable Zone terrestrial)"}}],Im=26e3,Um=68,Zn=[{id:0,name:"Scutum-Centaurus",theta0Rad:35*Math.PI/180,pitchAngleRad:13*Math.PI/180,rInnerLy:9800,rOuterLy:45600,w0Ly:800,alpha:.045,zScaleLy:650,count:26e3},{id:1,name:"Perseus",theta0Rad:215*Math.PI/180,pitchAngleRad:10.5*Math.PI/180,rInnerLy:10400,rOuterLy:50500,w0Ly:800,alpha:.045,zScaleLy:650,count:26e3},{id:2,name:"Sagittarius-Carina",theta0Rad:125*Math.PI/180,pitchAngleRad:12*Math.PI/180,rInnerLy:11400,rOuterLy:44e3,w0Ly:800,alpha:.045,zScaleLy:650,count:22e3},{id:3,name:"Norma-Outer",theta0Rad:305*Math.PI/180,pitchAngleRad:13.5*Math.PI/180,rInnerLy:9100,rOuterLy:52200,w0Ly:800,alpha:.045,zScaleLy:650,count:22e3},{id:4,name:"Local Orion Spur",theta0Rad:90*Math.PI/180,pitchAngleRad:11.4*Math.PI/180,rInnerLy:24e3,rOuterLy:31300,w0Ly:400,alpha:.025,zScaleLy:450,count:14e3}];function Nm(i){let t=i>>>0;return function(){t=t+1831565813>>>0;let e=Math.imul(t^t>>>15,1|t);return e=e+Math.imul(e^e>>>7,61|e)^e,((e^e>>>14)>>>0)/4294967296}}class Fm{spare=null;rng;constructor(t){this.rng=t}next(){if(this.spare!==null){const a=this.spare;return this.spare=null,a}let t=this.rng();for(;t<=1e-15;)t=this.rng();const e=this.rng(),n=Math.sqrt(-2*Math.log(t)),s=2*Math.PI*e;return this.spare=n*Math.sin(s),n*Math.cos(s)}}function Zs(i,t,e,n){return e+1/Math.tan(n)*Math.log(i/t)}function Om(i){const t=i();return t<.03?{temp:3e4+i()*8e3,size:2.8+i()*1.4}:t<.25?{temp:1e4+i()*2e4,size:2.2+i()*1}:t<.43?{temp:7500+i()*2500,size:1.8+i()*.6}:t<.6?{temp:6e3+i()*1500,size:1.5+i()*.5}:t<.78?{temp:5200+i()*800,size:1.2+i()*.4}:t<.92?{temp:3700+i()*1500,size:1.1+i()*.3}:{temp:2500+i()*1200,size:1+i()*.2}}function ml(i){const t=i();return t<.01?{temp:1e4+i()*4e3,size:2}:t<.05?{temp:7500+i()*1500,size:1.7}:t<.2?{temp:6e3+i()*1500,size:1.5}:t<.6?{temp:5200+i()*800,size:1.3}:t<.85?{temp:3700+i()*1500,size:1.2}:{temp:2600+i()*1100,size:1}}function Bm(i){const t=i();return t<.08?{temp:32e3+i()*8e3,size:3.5+i()*1.2}:t<.25?{temp:12e3+i()*18e3,size:2.5+i()*.8}:t<.65?{temp:5500+i()*4500,size:1.8+i()*.6}:{temp:3500+i()*2e3,size:1.4+i()*.4}}function gl(i){const t=i();return t<.02?{temp:1e4+i()*15e3,size:2.2}:t<.1?{temp:7500+i()*2500,size:1.8}:t<.25?{temp:6e3+i()*1500,size:1.5}:t<.6?{temp:5200+i()*800,size:1.3}:t<.85?{temp:3700+i()*1500,size:1.2}:{temp:2500+i()*1200,size:1}}function zm(i){const t=i();return t<.05?{temp:6e3+i()*1500,size:1.4}:t<.3?{temp:5200+i()*800,size:1.3}:t<.7?{temp:3700+i()*1500,size:1.2}:{temp:2500+i()*1200,size:1}}class km{static generate(t=25e4,e=5904352){const n=new Float32Array(t*3),s=new Float32Array(t),a=new Float32Array(t),r=new Float32Array(t),o=Nm(e),l=new Fm(o);let c=0;const u=(y,x,A,F,N,k)=>{if(c>=t)return;const X=Math.sqrt(y*y+A*A);if(X>64e3){const V=64e3/X;y*=V,A*=V}Math.abs(x)>11500&&(x=Math.sign(x)*11500),(!Number.isFinite(y)||!Number.isFinite(x)||!Number.isFinite(A))&&(y=0,x=0,A=0),n[c*3]=y,n[c*3+1]=x,n[c*3+2]=A,s[c]=Math.max(2500,Math.min(42e3,F)),a[c]=Math.max(1,Math.min(6,N)),r[c]=Math.floor(Math.max(0,k)),c++};for(const y of Zn)for(let x=0;x<y.count&&c<t;x++){const A=o(),F=Math.pow(A,1.2),N=y.rInnerLy+F*(y.rOuterLy-y.rInnerLy),k=Zs(N,y.rInnerLy,y.theta0Rad,y.pitchAngleRad),V=(y.w0Ly+y.alpha*N)/N,Z=l.next()*V*.75,H=k+Z,tt=N*Math.cos(H),lt=N*Math.sin(H),xt=l.next()*y.zScaleLy,Dt=Om(o);u(tt,xt,lt,Dt.temp,Dt.size,y.id)}const f=25e3,p=13e3,d=3900,g=2e3,_=27*Math.PI/180,m=Math.cos(_),h=Math.sin(_);for(let y=0;y<f&&c<t;y++){const x=Math.max(-2.6,Math.min(2.6,l.next())),A=Math.max(-2.6,Math.min(2.6,l.next())),F=Math.max(-2.6,Math.min(2.6,l.next())),N=x*(p/2.3),k=A*(d/2.3),X=F*(g/2.3),V=N*m-k*h,Z=N*h+k*m,H=X,tt=ml(o);u(V,H,Z,tt.temp,tt.size,5)}const T=35e3,b=2283,S=.75;for(let y=0;y<T&&c<t;y++){const x=Math.min(.95,o()),A=Math.sqrt(x),F=Math.min(12e3,b*(A/(1-A))),N=o()*2-1,k=Math.sqrt(Math.max(0,1-N*N)),X=o()*2*Math.PI,V=F*k*Math.cos(X),Z=F*k*Math.sin(X),H=F*N*S,tt=ml(o);u(V,H,Z,tt.temp,tt.size,6)}const O=5e3;for(let y=0;y<O&&c<t;y++){const x=Math.min(.97,o()),A=-120*Math.log(1-x),F=o()*2-1,N=Math.sqrt(Math.max(0,1-F*F)),k=o()*2*Math.PI,X=A*N*Math.cos(k),V=A*N*Math.sin(k),Z=A*F*.75,H=Bm(o);u(X,Z,V,H.temp,H.size,7)}const C=55e3,R=980;for(let y=0;y<C&&c<t;y++){const x=Math.max(1e-6,o()),A=Math.max(1e-6,o());let F=-8500*Math.log(x*A)*.75;F>52e3&&(F=52e3*Math.pow(o(),.5));const N=o()*2*Math.PI,k=F*Math.cos(N),X=F*Math.sin(N);let V=R;F>32600&&(V*=1+.5*((F-32600)/32600));const Z=Math.max(1e-6,o()),H=o()<.5?-1:1,tt=-V*Math.log(Z)*H*.65,lt=gl(o);u(k,tt,X,lt.temp,lt.size,8)}const U=2e4;for(let y=0;y<U&&c<t;y++){const x=Math.max(1e-6,o()),A=Math.max(1e-6,o());let F=-11700*Math.log(x*A)*.8;F>58e3&&(F=58e3*Math.pow(o(),.5));const N=o()*2*Math.PI,k=F*Math.cos(N),X=F*Math.sin(N),V=Math.max(1e-6,o()),Z=o()<.5?-1:1,H=-2930*Math.log(V)*Z*.75,tt=zm(o);u(k,H,X,tt.temp,tt.size,9)}for(;c<t;){const x=2e3+o()*45e3,A=o()*2*Math.PI,F=x*Math.cos(A),N=x*Math.sin(A),k=l.next()*980,X=gl(o);u(F,k,N,X.temp,X.size,8)}return{positions:n,temperatures:s,sizes:a,arms:r,count:t}}}const Gm=`
precision highp float;

attribute float aTemperature;
attribute float aSize;
attribute float aArm;

uniform float uTime;
uniform float uPixelRatio;
uniform float uSizeScale;
uniform float uCoreBloom;

varying float vTemperature;
varying float vArm;
varying float vViewDist;

void main() {
    vTemperature = aTemperature;
    vArm = aArm;

    // 1. Astrophysical Differential Rotation (Flat Rotation Curve v ~ constant)
    // In galactic dynamics, angular velocity Omega(R) = v0 / (R + R_core).
    vec3 animatedPos = position;
    float r = length(animatedPos.xz);
    if (r > 10.0) {
        // Inner bar/bulge rotates quasi-rigidly; outer arms and disk follow flat rotation
        float omega = 0.012 * (12000.0 / (r + 4000.0));
        float angle = uTime * omega;
        float cosA = cos(angle);
        float sinA = sin(angle);
        animatedPos.x = position.x * cosA - position.z * sinA;
        animatedPos.z = position.x * sinA + position.z * cosA;
    }

    // 2. Perspective Model-View Transformation
    vec4 mvPosition = modelViewMatrix * vec4(animatedPos, 1.0);
    gl_Position = projectionMatrix * mvPosition;

    // 3. Distance Attenuation for Point Sizing
    // Adaptive macro-to-micro scaling: maintains soft, visible stellar disks (2.5 - 7.0 px)
    // at galactic macro overview (100,000 ly) while scaling smoothly during local zoom
    float viewDist = max(-mvPosition.z, 1.0);
    vViewDist = viewDist;

    float macroBase = 2.5;
    float adaptiveFactor = (uSizeScale / (viewDist + 15000.0)) * 5.5;
    float calculatedSize = uPixelRatio * aSize * (macroBase + adaptiveFactor);
    gl_PointSize = clamp(calculatedSize, 1.5, 48.0);
}
`,Hm=`
precision highp float;

varying float vTemperature;
varying float vArm;
varying float vViewDist;

uniform float uTime;
uniform float uCoreBloom;

// Tanner Helland Analytical Polynomial Algorithm for Kelvin to sRGB mapping
// Maps effective surface temperature [1000K, 40000K] to physical photon chromaticity
vec3 kelvinToRGB(float kelvin) {
    float temp = clamp(kelvin, 1000.0, 40000.0) / 100.0;
    float r = 0.0;
    float g = 0.0;
    float b = 0.0;

    // 1. Red channel
    if (temp <= 66.0) {
        r = 255.0;
    } else {
        r = 329.698727446 * pow(temp - 60.0, -0.1332047592);
    }

    // 2. Green channel
    if (temp <= 66.0) {
        g = 99.4708025861 * log(temp) - 161.1195681661;
    } else {
        g = 288.1221695283 * pow(temp - 60.0, -0.0755148492);
    }

    // 3. Blue channel
    if (temp >= 66.0) {
        b = 255.0;
    } else if (temp <= 19.0) {
        b = 0.0;
    } else {
        b = 138.5177312231 * log(temp - 10.0) - 305.0447927307;
    }

    return clamp(vec3(r, g, b) / 255.0, 0.0, 1.0);
}

void main() {
    // 1. Circular point coordinate in [-0.5, 0.5]
    vec2 p = gl_PointCoord - vec2(0.5);
    float dist = length(p);

    // Hard clip circular sprite boundaries (eliminates 21.5% square quad overdraw)
    if (dist > 0.5) {
        discard;
    }

    // 2. Dual-Component Radial Luminosity Profile:
    // Component A: Sharp stellar nucleus (Airy disk diffraction core)
    float core = exp(-dist * dist * 38.0);

    // Component B: Soft exponential corona / atmospheric halo
    float halo = exp(-dist * 6.5);

    // Composite profile: 75% core brilliance + 35% ethereal halo
    float intensity = 0.75 * core + 0.35 * halo;

    // 3. Planck Blackbody & NASA Multi-wavelength Chromaticity
    vec3 baseColor = kelvinToRGB(vTemperature);

    // Arm stars (vArm in [0.0, 4.0]): Young Population I OB Associations
    // In NASA Spitzer reference image: Vibrant electric cerulean-blue and cyan starlight
    if (vArm >= 0.0 && vArm <= 4.0) {
        baseColor = mix(baseColor, vec3(0.28, 0.70, 1.0), 0.65);
    }
    // Bar and Bulge stars (vArm in [5.0, 7.0]): Old Population II, K/M giants
    // In NASA Spitzer reference image: Warm golden-amber, honey, and champagne yellow
    else if (vArm >= 5.0 && vArm <= 7.0) {
        baseColor = mix(baseColor, vec3(1.0, 0.82, 0.38), 0.78);
    }

    // Only desaturate the tiny central diffraction spike (inner 10% radius)
    float whiteCenter = smoothstep(0.10, 0.0, dist);
    vec3 starColor = mix(baseColor, vec3(1.0, 1.0, 1.0), whiteCenter * 0.50);

    // 4. Bulge and Core Bloom Enhancement
    // Bar stars (id=5), Bulge stars (id=6), and Nuclear Core stars (id=7) receive bloom multiplier
    float bloomBoost = 1.0;
    if (vArm >= 5.0 && vArm <= 7.0) {
        bloomBoost = uCoreBloom * 1.35;
    }

    // 5. Final Output for Additive Blending
    vec3 finalRGB = starColor * intensity * bloomBoost;
    float finalAlpha = intensity * clamp(bloomBoost, 0.5, 2.0);

    gl_FragColor = vec4(finalRGB, finalAlpha);
}
`;class Vm extends we{geometry;material;points;particleCount;constructor(t){super(),this.name="GalaxyView",this.particleCount=t.count,this.geometry=new ce,this.geometry.setAttribute("position",new se(t.positions,3)),this.geometry.setAttribute("aTemperature",new se(t.temperatures,1)),this.geometry.setAttribute("aSize",new se(t.sizes,1)),this.geometry.setAttribute("aArm",new se(t.arms,1)),this.geometry.computeBoundingSphere();const e=typeof window<"u"?Math.min(window.devicePixelRatio,2):1,n={uTime:{value:0},uPixelRatio:{value:e},uSizeScale:{value:650},uCoreBloom:{value:1.45}};this.material=new sn({vertexShader:Gm,fragmentShader:Hm,uniforms:n,transparent:!0,depthWrite:!1,blending:Be}),this.points=new Ni(this.geometry,this.material),this.points.name="StarfieldPoints",this.add(this.points)}update(t,e){e!==void 0?this.material.uniforms.uTime.value=e:this.material.uniforms.uTime.value+=t}setPixelRatio(t){this.material.uniforms.uPixelRatio&&(this.material.uniforms.uPixelRatio.value=t)}dispose(){this.geometry.dispose(),this.material.dispose()}}class Wm extends we{gasPoints;hiiPoints;dustPoints;constructor(){super(),this.name="GalaxyNebulaClouds",this.gasPoints=this.createSpiralArmGasClouds(),this.hiiPoints=this.createHIIEmissionNebulae(),this.dustPoints=this.createDustLanes(),this.add(this.gasPoints),this.add(this.hiiPoints),this.add(this.dustPoints)}createSpiralArmGasClouds(){const e=new Float32Array(48e3),n=new Float32Array(16e3*3);let s=0;const a=28*Math.PI/180,r=Math.cos(a),o=Math.sin(a);for(let d=0;d<4e3;d++){const g=Math.random()*2-1,_=g*15500*Math.pow(Math.abs(g),.3),m=(Math.random()-.5)*6200*(1-Math.abs(g)*.4),h=(Math.random()-.5)*2200*(1-Math.abs(g)*.5),T=_*r-m*o,b=_*o+m*r;e[s*3]=T,e[s*3+1]=h,e[s*3+2]=b,n[s*3]=1,n[s*3+1]=.82+Math.random()*.12,n[s*3+2]=.35+Math.random()*.15,s++}const c=Math.floor(12e3/Zn.length);for(const d of Zn)for(let g=0;g<c&&s<16e3;g++){const _=Math.random(),m=d.rInnerLy+_*(d.rOuterLy-d.rInnerLy),h=Zs(m,d.rInnerLy,d.theta0Rad,d.pitchAngleRad),T=d.w0Ly+m*d.alpha*1.8,b=(Math.random()-.5)*T,S=h+Math.PI/2,O=m*Math.cos(h)+b*Math.cos(S),C=m*Math.sin(h)+b*Math.sin(S),R=(Math.random()-.5)*d.zScaleLy*1.6;e[s*3]=O,e[s*3+1]=R,e[s*3+2]=C,n[s*3]=.25+Math.random()*.2,n[s*3+1]=.65+Math.random()*.25,n[s*3+2]=1,s++}const u=new ce;u.setAttribute("position",new se(e,3)),u.setAttribute("color",new se(n,3));const f=new Ui({size:1400,vertexColors:!0,transparent:!0,opacity:.18,blending:Be,depthWrite:!1}),p=new Ni(u,f);return p.name="spiral-gas-clouds",p}createHIIEmissionNebulae(){const e=new Float32Array(10500),n=new Float32Array(3500*3);let s=0;const a=Math.floor(3500/Zn.length);for(const c of Zn)for(let u=0;u<a&&s<3500;u++){const f=Math.random(),p=c.rInnerLy+f*(c.rOuterLy-c.rInnerLy),d=Zs(p,c.rInnerLy,c.theta0Rad,c.pitchAngleRad),g=c.w0Ly*.8+p*c.alpha*.9,_=(Math.random()-.45)*g,m=d+Math.PI/2,h=p*Math.cos(d)+_*Math.cos(m),T=p*Math.sin(d)+_*Math.sin(m),b=(Math.random()-.5)*350;e[s*3]=h,e[s*3+1]=b,e[s*3+2]=T,n[s*3]=1,n[s*3+1]=.15+Math.random()*.22,n[s*3+2]=.48+Math.random()*.35,s++}const r=new ce;r.setAttribute("position",new se(e,3)),r.setAttribute("color",new se(n,3));const o=new Ui({size:1600,vertexColors:!0,transparent:!0,opacity:.32,blending:Be,depthWrite:!1}),l=new Ni(r,o);return l.name="hii-emission-nebulae",l}createDustLanes(){const e=new Float32Array(13500),n=new Float32Array(4500*3);let s=0;const a=Math.floor(4500/Zn.length);for(const c of Zn)for(let u=0;u<a&&s<4500;u++){const f=Math.random(),p=c.rInnerLy+f*(c.rOuterLy-c.rInnerLy),d=Zs(p,c.rInnerLy,c.theta0Rad,c.pitchAngleRad),g=-c.w0Ly*.9-Math.random()*(p*c.alpha*.6),_=d+Math.PI/2,m=p*Math.cos(d)+g*Math.cos(_),h=p*Math.sin(d)+g*Math.sin(_),T=(Math.random()-.5)*280;e[s*3]=m,e[s*3+1]=T,e[s*3+2]=h,n[s*3]=.28,n[s*3+1]=.12,n[s*3+2]=.05,s++}const r=new ce;r.setAttribute("position",new se(e,3)),r.setAttribute("color",new se(n,3));const o=new Ui({size:1800,vertexColors:!0,transparent:!0,opacity:.22,depthWrite:!1}),l=new Ni(r,o);return l.name="dust-lanes",l}update(t){this.gasPoints&&(this.gasPoints.rotation.y=t*.005),this.hiiPoints&&(this.hiiPoints.rotation.y=t*.005),this.dustPoints&&(this.dustPoints.rotation.y=t*.005)}}const Xm=`
precision highp float;

varying vec2 vUv;
varying vec3 vWorldPosition;
varying vec3 vNormal;
varying vec3 vLocalPosition;

void main() {
  vUv = uv;
  vLocalPosition = position;
  vNormal = normalize(normalMatrix * normal);
  vec4 worldPos = modelMatrix * vec4(position, 1.0);
  vWorldPosition = worldPos.xyz;
  gl_Position = projectionMatrix * viewMatrix * worldPos;
}
`,qm=`
precision highp float;

uniform float uTime;
uniform float uInnerRadius;
uniform float uOuterRadius;
uniform float uSpin;
uniform float uLensingStrength;
uniform vec3 uCameraPosition;

varying vec2 vUv;
varying vec3 vWorldPosition;
varying vec3 vNormal;
varying vec3 vLocalPosition;

// Pseudo-random and 2D Perlin noise helpers for plasma turbulence
float hash(vec2 p) {
  return fract(sin(dot(p, vec2(127.1, 311.7))) * 43758.5453123);
}

float noise(vec2 p) {
  vec2 i = floor(p);
  vec2 f = fract(p);
  vec2 u = f * f * (3.0 - 2.0 * f);
  return mix(
    mix(hash(i + vec2(0.0, 0.0)), hash(i + vec2(1.0, 0.0)), u.x),
    mix(hash(i + vec2(0.0, 1.0)), hash(i + vec2(1.0, 1.0)), u.x),
    u.y
  );
}

void main() {
  // Convert UV to centered polar coordinates [-1.0, 1.0]
  vec2 p = vUv * 2.0 - 1.0;
  float r = length(p);
  float theta = atan(p.y, p.x);

  // Radial cutoff boundaries: ISCO shadow boundary & outer accretion disk edge
  float rInner = uInnerRadius > 0.0 ? uInnerRadius : 0.30;
  float rOuter = uOuterRadius > 0.0 ? uOuterRadius : 0.95;

  if (r < rInner || r > rOuter) {
    discard;
  }

  // Normalized radial coordinate [0 = ISCO, 1 = Outer edge]
  float tRad = (r - rInner) / (rOuter - rInner);

  // 1. Keplerian differential orbital velocity profile v(r) ~ 1 / sqrt(r)
  // At ISCO (r ~ rInner), beta ~ 0.45 c; decreases outward with 1/sqrt(r)
  float betaNorm = 0.45 * sqrt(rInner / max(r, 0.001));
  float beta = clamp(betaNorm * (0.8 + 0.2 * uSpin), 0.05, 0.65);

  // Lorentz factor gamma = 1 / sqrt(1 - beta^2)
  float gamma = 1.0 / sqrt(max(1.0 - beta * beta, 0.0001));

  // 2. Tangent vector in disk orbital plane
  // In disk plane, orbital velocity vector is perpendicular to radial vector
  vec3 localTangent = vec3(-sin(theta), cos(theta), 0.0);
  vec3 worldTangent = normalize((modelMatrix * vec4(localTangent, 0.0)).xyz);

  // Observer view direction towards camera
  vec3 camPos = length(uCameraPosition) > 0.001 ? uCameraPosition : cameraPosition;
  vec3 viewDir = normalize(camPos - vWorldPosition);

  // Doppler alignment cos(theta): line of sight projection
  float cosTheta = clamp(dot(worldTangent, viewDir), -1.0, 1.0);

  // 3. Relativistic Doppler factor: delta = 1 / (gamma * (1 - beta * cosTheta))
  float dopplerFactor = 1.0 / (gamma * (1.0 - beta * cosTheta));

  // 4. Relativistic Doppler beaming intensity scaling: I ~ delta^3.5
  float beaming = pow(dopplerFactor, 3.5);

  // 5. Keplerian differential angular velocity: Omega(r) ~ r^(-1.5)
  float omega = 1.0 / (pow(r, 1.5) + 0.05);
  float rotation = theta + uTime * omega * 0.6;

  // Turbulent plasma density structure (spiral shockwaves & magnetohydrodynamic turbulence)
  float spiralWave = sin(rotation * 3.0 - log(max(r, 0.01)) * 4.0);
  float plasmaTurbulence = noise(vec2(rotation * 4.0, r * 12.0 - uTime * 0.4));
  float fineNoise = noise(vec2(rotation * 14.0 + spiralWave, r * 28.0));
  float diskDensity = sin(tRad * 3.14159265);
  float density = diskDensity * (0.6 + 0.25 * plasmaTurbulence + 0.15 * fineNoise);

  // 6. Blackbody temperature gradient across accretion disk:
  // Ultra-hot (25,000K+ blue-white) near ISCO -> Golden yellow (6,000K) -> Cool crimson red (3,000K) at outer rim
  vec3 hotColor = vec3(0.85, 0.92, 1.0);   // Approaching / ISCO high-T plasma
  vec3 midColor = vec3(1.0, 0.65, 0.18);   // Intermediate accretion zone
  vec3 coolColor = vec3(0.70, 0.12, 0.02); // Outer low-T edge

  vec3 baseColor = mix(hotColor, midColor, smoothstep(0.0, 0.45, tRad));
  baseColor = mix(baseColor, coolColor, smoothstep(0.45, 1.0, tRad));

  // 7. Relativistic Doppler chromatic shift:
  // Approaching side (dopplerFactor > 1.0) undergoes severe blueshift to incandescent blue-white
  // Receding side (dopplerFactor < 1.0) undergoes severe redshift to dim dark crimson-red
  vec3 shiftedColor = baseColor;
  if (dopplerFactor > 1.0) {
    float blueShift = clamp((dopplerFactor - 1.0) / 0.7, 0.0, 1.0);
    shiftedColor = mix(shiftedColor, vec3(0.92, 0.96, 1.0), blueShift * 0.75);
  } else {
    float redShift = clamp((1.0 - dopplerFactor) / 0.5, 0.0, 1.0);
    shiftedColor = mix(shiftedColor, vec3(0.45, 0.04, 0.01), redShift * 0.8);
  }

  // 8. Photon ring emission: sharp optical spike at inner ISCO edge (r ~ rInner)
  float photonRing = smoothstep(rInner + 0.04, rInner, r) * 3.0;

  // 9. Final intensity composition
  float totalIntensity = density * beaming * 2.2 + photonRing;
  vec3 finalColor = shiftedColor * totalIntensity;

  // 10. Soft alpha edge falloff at inner and outer boundaries
  float alphaInner = smoothstep(0.0, 0.08, tRad);
  float alphaOuter = smoothstep(1.0, 0.85, tRad);
  float alpha = alphaInner * alphaOuter;

  gl_FragColor = vec4(finalColor, alpha);
}
`,Ym=`
precision highp float;

varying vec2 vUv;
varying vec3 vWorldPosition;

void main() {
  vUv = uv;
  vec4 worldPos = modelMatrix * vec4(position, 1.0);
  vWorldPosition = worldPos.xyz;
  gl_Position = projectionMatrix * viewMatrix * worldPos;
}
`,$m=`
precision highp float;

uniform float uTime;
uniform float uEinsteinRadius; // Screen-space / quad Einstein radius (e.g. 0.35)
uniform float uLensingStrength; // Deflection scaling multiplier (default: 1.0)
uniform sampler2D tDiffuse;
uniform bool uUseTexture;

varying vec2 vUv;
varying vec3 vWorldPosition;

void main() {
  // Center of the quad is at (0.5, 0.5)
  vec2 delta = vUv - vec2(0.5);
  float dist = length(delta);

  // Einstein radius and shadow boundary (rShadow ~ 0.65 * rE ~ 2.6 r_s)
  float rE = uEinsteinRadius > 0.0 ? uEinsteinRadius : 0.35;
  float rShadow = rE * 0.65; // Photon orbit shadow radius ~ 2.6 r_s

  // Inside the photon shadow radius, the event horizon absorbs all incoming geodesics
  // Discard interior to let the central black sphere form the absolute black shadow
  if (dist < rShadow * 0.96) {
    discard;
  }

  // 1. Tangential Einstein ring gravitational deflection angle alpha ~ 2 * r_s / b = r_E^2 / r
  // Deflection pulls background coordinates inward inversely proportional to impact parameter
  float safeDist = max(dist, 0.001);
  float deflection = (rE * rE) / safeDist * (uLensingStrength > 0.0 ? uLensingStrength : 1.0);

  // 2. Razor-sharp photon ring emission spike at r ~ 2.6 r_s (rShadow boundary)
  // Extreme magnification of photons orbiting multiple times before escaping
  float photonRingGlow = exp(-abs(dist - rShadow) * 55.0) * 3.5;

  // 3. Einstein ring glow peak at r ~ rE
  float einsteinGlow = exp(-pow((dist - rE) * 20.0, 2.0)) * 1.5;

  // 4. Secondary relativistic warped arcs (tangential light-bending of background and disk)
  float theta = atan(delta.y, delta.x);
  float arcWave = pow(abs(cos(theta + uTime * 0.2)), 2.0);
  float lensedArc = exp(-pow((dist - rE * 1.15) * 16.0, 2.0)) * arcWave * 1.2;

  // 5. Subtle outer gravitational halo falloff
  float outerHaze = exp(-dist * 7.5) * 0.35;

  // Chromatic composition of relativistic emission components
  vec3 photonRingColor = vec3(1.0, 0.95, 0.88); // Brilliant white-gold photon ring
  vec3 einsteinRingColor = vec3(1.0, 0.72, 0.25); // Warm golden Einstein ring
  vec3 arcColor = vec3(0.92, 0.85, 1.0);          // Violet-tinted lensed arcs
  vec3 hazeColor = vec3(0.80, 0.45, 0.15);         // Deep amber coronal haze

  vec3 emission = photonRingColor * photonRingGlow
                + einsteinRingColor * einsteinGlow
                + arcColor * lensedArc
                + hazeColor * outerHaze;

  // 6. Optional background texture sampling with gravitational coordinate deflection
  vec4 sceneColor = vec4(0.0);
  if (uUseTexture) {
    vec2 distortedUv = vUv - (delta / safeDist) * deflection * 0.04;
    sceneColor = texture2D(tDiffuse, distortedUv);
  }

  // 7. Soft alpha edge falloff at quad boundary (dist ~ 0.5)
  float edgeAlpha = smoothstep(0.5, 0.40, dist);
  float alpha = clamp((photonRingGlow + einsteinGlow + lensedArc + outerHaze) * edgeAlpha, 0.0, 1.0);

  gl_FragColor = vec4(sceneColor.rgb + emission, alpha);
}
`;class Km extends we{eventHorizon;accretionDisk;lensingMesh;eventHorizonGeometry;eventHorizonMaterial;accretionDiskGeometry;accretionDiskMaterial;lensingGeometry;lensingMaterial;uniforms;constructor(){super(),this.name="SagittariusA_Subsystem",this.eventHorizonGeometry=new tn(15,64,64),this.eventHorizonMaterial=new Oe({color:0,depthTest:!0,depthWrite:!0}),this.eventHorizon=new ae(this.eventHorizonGeometry,this.eventHorizonMaterial),this.eventHorizon.name="SagittariusA_EventHorizon",this.eventHorizon.renderOrder=1,this.add(this.eventHorizon),this.accretionDiskGeometry=new ni(20,70,128,16),this.uniforms={uTime:{value:0},uInnerRadius:{value:.3},uOuterRadius:{value:.95},uSpin:{value:.94},uLensingStrength:{value:1},uCameraPosition:{value:new w(0,45e3,75e3)}},this.accretionDiskMaterial=new sn({vertexShader:Xm,fragmentShader:qm,uniforms:this.uniforms,transparent:!0,depthWrite:!1,side:De,blending:Be}),this.accretionDisk=new ae(this.accretionDiskGeometry,this.accretionDiskMaterial),this.accretionDisk.name="SagittariusA_AccretionDisk",this.accretionDisk.rotation.x=Math.PI*.35,this.accretionDisk.rotation.y=Math.PI*.08,this.accretionDisk.renderOrder=2,this.add(this.accretionDisk),this.lensingGeometry=new us(160,160),this.lensingMaterial=new sn({vertexShader:Ym,fragmentShader:$m,uniforms:{uTime:{value:0},uEinsteinRadius:{value:.35},uLensingStrength:{value:1},uUseTexture:{value:!1},tDiffuse:{value:null}},transparent:!0,depthWrite:!1,side:De,blending:Be}),this.lensingMesh=new ae(this.lensingGeometry,this.lensingMaterial),this.lensingMesh.name="SagittariusA_GravitationalLensing",this.lensingMesh.renderOrder=3,this.add(this.lensingMesh),this.position.set(0,0,0)}update(t,e,n){const s=e!==void 0?e:this.uniforms.uTime.value+t;this.uniforms.uTime.value=s,this.lensingMaterial.uniforms.uTime.value=s,this.accretionDisk.rotation.z+=t*.08,n&&(this.lensingMesh.quaternion.copy(n.quaternion),this.uniforms.uCameraPosition.value.copy(n.position))}dispose(){this.eventHorizonGeometry.dispose(),this.eventHorizonMaterial.dispose(),this.accretionDiskGeometry.dispose(),this.accretionDiskMaterial.dispose(),this.lensingGeometry.dispose(),this.lensingMaterial.dispose()}}function jm(i){const e=document.createElement("canvas");e.width=128,e.height=128;const n=e.getContext("2d"),s=128/2,a=n.createRadialGradient(s,s,0,s,s,s);a.addColorStop(0,"#ffffff"),a.addColorStop(.2,i),a.addColorStop(.6,i+"44"),a.addColorStop(1,"transparent"),n.fillStyle=a,n.beginPath(),n.arc(s,s,s,0,Math.PI*2),n.fill(),n.strokeStyle=i+"88",n.lineWidth=2,n.beginPath(),n.arc(s,s,s*.85,0,Math.PI*2),n.stroke();const r=new Xe(e);return r.needsUpdate=!0,r}const Zm={supermassive_black_hole:"#fbbf24",star_system:"#fef08a",open_cluster:"#60a5fa",emission_nebula:"#c084fc",supernova_remnant:"#34d399",stellar_system:"#38bdf8"};class Jm{group;beacons=[];activeLandmarkId=null;elapsedTime=0;constructor(t){this.group=new we,this.group.name="LandmarkMarkersGroup";for(const e of t)this.createBeacon(e)}createBeacon(t){const e=Zm[t.category]??"#38bdf8",n=jm(e),s=new Kl({map:n,transparent:!0,blending:Be,depthWrite:!1,color:16777215}),a=new um(s),r=t.cartesian;a.position.set(r.x,r.y,r.z);const o=t.id==="sagittarius-a"?180:120;a.scale.set(o,o,1),a.name=`BeaconSprite_${t.id}`;const l=new tn(Math.max(o*.8,60),8,8),c=new Oe({visible:!1,wireframe:!0}),u=new ae(l,c);u.position.copy(a.position),u.name=`Hitbox_${t.id}`,u.userData={landmark:t,id:t.id};const f=new we;f.name=`Beacon_${t.id}`,f.add(a),f.add(u),this.group.add(f),this.beacons.push({landmark:t,sprite:a,hitbox:u,baseScale:o})}raycast(t){const e=this.beacons.map(r=>r.hitbox),n=t.intersectObjects(e,!1);if(n.length>0)return n[0].object.userData.landmark;const s=this.beacons.map(r=>r.sprite),a=t.intersectObjects(s,!1);if(a.length>0){const r=a[0].object,o=this.beacons.find(l=>l.sprite===r);if(o)return o.landmark}return null}highlightLandmark(t){this.activeLandmarkId=t}update(t,e){this.elapsedTime+=t;const n=1+Math.sin(this.elapsedTime*2.5)*.12;for(const s of this.beacons){const a=s.landmark.id===this.activeLandmarkId;let r=s.baseScale*n;if(e){const o=e.position.distanceTo(s.sprite.position),l=Math.min(Math.max(o*.004,.5),15);r*=l}a&&(r*=1.6),s.sprite.scale.set(r,r,1)}}get count(){return this.beacons.length}get children(){return this.group.children}}class Qm{group=new we;habitableZoneMesh=null;darkMatterPoints=null;exoplanetsGroup=null;localGroupGroup=null;constructor(){this.group.name="nasa-science-layers",this.createHabitableZone(),this.createDarkMatterHalo(),this.createExoplanetSystems(),this.createLocalGroupVectors()}createHabitableZone(){const n=new ni(23e3,3e4,96,8);n.rotateX(-Math.PI/2);const s=new Oe({color:1096065,transparent:!0,opacity:.18,side:De,blending:Be,depthWrite:!1});this.habitableZoneMesh=new ae(n,s),this.habitableZoneMesh.name="habitable-zone",this.habitableZoneMesh.visible=!1,this.group.add(this.habitableZoneMesh)}createDarkMatterHalo(){const e=new Float32Array(36e3),n=new Float32Array(12e3*3);for(let r=0;r<12e3;r++){const o=Math.pow(Math.random(),.6)*11e4+4e3,l=Math.random()*Math.PI*2,c=Math.acos(Math.random()*2-1),u=o*Math.sin(c)*Math.cos(l),f=o*Math.sin(c)*Math.sin(l)*.85,p=o*Math.cos(c);e[r*3]=u,e[r*3+1]=f,e[r*3+2]=p,n[r*3]=.45,n[r*3+1]=.2,n[r*3+2]=.95}const s=new ce;s.setAttribute("position",new se(e,3)),s.setAttribute("color",new se(n,3));const a=new Ui({size:450,vertexColors:!0,transparent:!0,opacity:.25,blending:Be,depthWrite:!1});this.darkMatterPoints=new Ni(s,a),this.darkMatterPoints.name="dark-matter-halo",this.darkMatterPoints.visible=!1,this.group.add(this.darkMatterPoints)}createExoplanetSystems(){this.exoplanetsGroup=new we,this.exoplanetsGroup.name="exoplanets-group";const t=[{name:"TRAPPIST-1 (7 Rocky Worlds)",pos:[26039,56,18],color:3718648,worlds:7},{name:"Proxima Centauri b (Habitable)",pos:[26e3+4.24,67,1],color:4906624,worlds:3},{name:"Kepler-452b (Earth Cousin)",pos:[27400,318,480],color:16498468,worlds:1},{name:"Kepler-186f (Habitable Zone)",pos:[26580,188,-180],color:2278750,worlds:5},{name:"51 Pegasi b (First Hot Jupiter)",pos:[26050,53,32],color:16347926,worlds:1},{name:"WASP-12b (Ultra-Hot Jupiter)",pos:[27410,388,-650],color:15680580,worlds:1}];for(const e of t){const n=new ni(8,28,32);n.rotateX(-Math.PI/2);const s=new Oe({color:e.color,transparent:!0,opacity:.75,side:De,depthWrite:!1}),a=new ae(n,s);a.position.set(e.pos[0],e.pos[1],e.pos[2]);const r=new tn(6,16,16),o=new Oe({color:e.color}),l=new ae(r,o);l.position.set(e.pos[0],e.pos[1],e.pos[2]),this.exoplanetsGroup.add(a),this.exoplanetsGroup.add(l)}this.exoplanetsGroup.visible=!1,this.group.add(this.exoplanetsGroup)}createLocalGroupVectors(){this.localGroupGroup=new we,this.localGroupGroup.name="local-group-vectors";const t=new w(-.55,.35,-.75).normalize(),e=95e3,n=new _m(t,new w(0,0,0),e,15485081,4e3,2500);this.localGroupGroup.add(n);const s=new ae(new tn(1500,16,16),new Oe({color:3718648,transparent:!0,opacity:.6}));s.position.set(-15e3,-55e3,45e3),this.localGroupGroup.add(s),this.localGroupGroup.visible=!1,this.group.add(this.localGroupGroup)}setLayer(t){this.habitableZoneMesh&&(this.habitableZoneMesh.visible=t==="habitable_zone"),this.darkMatterPoints&&(this.darkMatterPoints.visible=t==="dark_matter"),this.exoplanetsGroup&&(this.exoplanetsGroup.visible=t==="exoplanets"),this.localGroupGroup&&(this.localGroupGroup.visible=t==="galaxies")}update(t){if(this.darkMatterPoints&&this.darkMatterPoints.visible&&(this.darkMatterPoints.rotation.y=t*.008),this.exoplanetsGroup&&this.exoplanetsGroup.visible){const e=1+Math.sin(t*3.5)*.15;this.exoplanetsGroup.children.forEach(n=>{n instanceof ae&&n.geometry instanceof ni&&n.scale.set(e,e,e)})}}}const He={name:"The Sun (Sol)",spectralClass:"G2V Main Sequence Yellow Dwarf",radiusKm:696340,massKg:"1.989 × 10³⁰ kg (333,000 Earths)",surfaceTempK:5778,coreTempK:157e5,luminosityWatts:"3.828 × 10²⁶ W",ageBillionYears:4.603,composition:"73.46% Hydrogen, 24.85% Helium, 0.77% Oxygen, 0.29% Carbon",description:"The central powerhouse of our solar system, containing 99.86% of the system’s total mass. Its nuclear fusion converts 600 million tons of hydrogen into helium every second in its core."},ec=[{id:"mercury",name:"Mercury",type:"terrestrial",color:11051678,radiusKm:2439.7,renderRadius:1.8,semiMajorAxisAU:.3871,eccentricity:.2056,inclinationDeg:7,orbitalPeriodDays:87.969,axialTiltDeg:.034,rotationPeriodHours:1407.6,massKg:"3.301 × 10²³ kg",surfaceGravityMs2:3.7,meanTempC:167,atmosphere:"Trace exosphere (Oxygen, Sodium, Hydrogen, Helium)",moonsCount:0,nasaMissions:["Mariner 10","MESSENGER","BepiColombo (ESA/JAXA)"],description:"The smallest planet in the solar system and closest to the Sun. It experiences extreme temperature swings from 430°C on its sunlit side down to -180°C on its night side."},{id:"venus",name:"Venus",type:"terrestrial",color:16638023,radiusKm:6051.8,renderRadius:3.2,semiMajorAxisAU:.7233,eccentricity:.0067,inclinationDeg:3.39,orbitalPeriodDays:224.701,axialTiltDeg:177.36,rotationPeriodHours:-5832.5,massKg:"4.867 × 10²⁴ kg",surfaceGravityMs2:8.87,meanTempC:464,atmosphere:"96.5% Carbon Dioxide, 3.5% Nitrogen, clouds of Sulfuric Acid",moonsCount:0,nasaMissions:["Mariner 2","Pioneer Venus","Magellan","DAVINCI / VERITAS (Upcoming)"],description:"Earth’s twin in size, but plagued by a runaway greenhouse effect making it the hottest planet in the solar system with atmospheric pressures 92 times greater than Earth."},{id:"earth",name:"Earth",type:"terrestrial",color:3718648,radiusKm:6371,renderRadius:3.4,semiMajorAxisAU:1,eccentricity:.0167,inclinationDeg:0,orbitalPeriodDays:365.256,axialTiltDeg:23.44,rotationPeriodHours:23.934,massKg:"5.972 × 10²⁴ kg",surfaceGravityMs2:9.807,meanTempC:15,atmosphere:"78.08% Nitrogen, 20.95% Oxygen, 0.93% Argon, 0.04% Carbon Dioxide",moonsCount:1,notableMoons:["The Moon (Luna)"],nasaMissions:["Apollo Program","Landsat","Terra","Aqua","ISS Earth Observations"],description:"Our home planet and the only known world harboring life. Liquid water oceans cover 71% of its dynamic surface, protected by a strong magnetosphere generated by its liquid iron core."},{id:"mars",name:"Mars",type:"terrestrial",color:15680580,radiusKm:3389.5,renderRadius:2.2,semiMajorAxisAU:1.5237,eccentricity:.0934,inclinationDeg:1.85,orbitalPeriodDays:686.98,axialTiltDeg:25.19,rotationPeriodHours:24.623,massKg:"6.417 × 10²³ kg",surfaceGravityMs2:3.72,meanTempC:-65,atmosphere:"95.3% Carbon Dioxide, 2.6% Nitrogen, 1.9% Argon",moonsCount:2,notableMoons:["Phobos","Deimos"],nasaMissions:["Viking 1 & 2","Pathfinder","Spirit & Opportunity","Curiosity","Perseverance"],description:"The Red Planet, colored by iron oxide rust on its surface. Hosts Olympus Mons (the largest volcano in the solar system) and ancient dried river valleys indicating a once wet, habitable past."},{id:"jupiter",name:"Jupiter",type:"gas_giant",color:16498468,radiusKm:69911,renderRadius:7.2,semiMajorAxisAU:5.2044,eccentricity:.0489,inclinationDeg:1.3,orbitalPeriodDays:4332.589,axialTiltDeg:3.13,rotationPeriodHours:9.925,massKg:"1.898 × 10²⁷ kg (318 Earths)",surfaceGravityMs2:24.79,meanTempC:-110,atmosphere:"89.8% Hydrogen, 10.2% Helium, traces of Methane and Ammonia",moonsCount:95,notableMoons:["Io (Volcanic)","Europa (Subsurface Ocean)","Ganymede (Largest Moon)","Callisto"],nasaMissions:["Pioneer 10 & 11","Voyager 1 & 2","Galileo","Juno","Europa Clipper"],description:"The king of planets, more than twice as massive as all other planets combined. Features turbulent swirling cloud bands and the Great Red Spot—a storm larger than Earth raging for over 300 years."},{id:"saturn",name:"Saturn",type:"gas_giant",color:16639626,radiusKm:58232,renderRadius:6.2,semiMajorAxisAU:9.5826,eccentricity:.0565,inclinationDeg:2.49,orbitalPeriodDays:10759.22,axialTiltDeg:26.73,rotationPeriodHours:10.656,massKg:"5.683 × 10²⁶ kg (95 Earths)",surfaceGravityMs2:10.44,meanTempC:-140,atmosphere:"96.3% Hydrogen, 3.25% Helium, traces of Methane",moonsCount:146,notableMoons:["Titan (Dense Atmosphere & Methane Lakes)","Enceladus (Water Ice Geysers)","Mimas"],nasaMissions:["Pioneer 11","Voyager 1 & 2","Cassini-Huygens"],hasRings:!0,description:"Famed for its dazzling, complex ring system spanning 282,000 km but only tens of meters thick, composed of billions of pieces of water ice, rock, and dust."},{id:"uranus",name:"Uranus",type:"ice_giant",color:6809849,radiusKm:25362,renderRadius:4.4,semiMajorAxisAU:19.2184,eccentricity:.0463,inclinationDeg:.77,orbitalPeriodDays:30685.4,axialTiltDeg:97.77,rotationPeriodHours:-17.24,massKg:"8.681 × 10²⁵ kg (14.5 Earths)",surfaceGravityMs2:8.69,meanTempC:-195,atmosphere:"82.5% Hydrogen, 15.2% Helium, 2.3% Methane (gives cyan hue)",moonsCount:28,notableMoons:["Miranda","Ariel","Umbriel","Titania","Oberon"],nasaMissions:["Voyager 2 (1986)"],description:"An ice giant that uniquely orbits on its side with an axial tilt of 98 degrees. Its methane-rich atmosphere absorbs red light, giving it a calm aquamarine glow."},{id:"neptune",name:"Neptune",type:"ice_giant",color:3900150,radiusKm:24622,renderRadius:4.3,semiMajorAxisAU:30.07,eccentricity:.0095,inclinationDeg:1.77,orbitalPeriodDays:60189,axialTiltDeg:28.32,rotationPeriodHours:16.11,massKg:"1.024 × 10²⁶ kg (17 Earths)",surfaceGravityMs2:11.15,meanTempC:-200,atmosphere:"80% Hydrogen, 19% Helium, 1.5% Methane",moonsCount:16,notableMoons:["Triton (Retrograde Ice Volcano Moon)","Proteus","Nereid"],nasaMissions:["Voyager 2 (1989)"],description:"The outermost major planet, dark and cold with supersonic winds exceeding 2,100 km/h—the fastest atmospheric winds recorded anywhere in the solar system."},{id:"pluto",name:"Pluto",type:"dwarf_planet",color:14078929,radiusKm:1188.3,renderRadius:1.4,semiMajorAxisAU:39.482,eccentricity:.2488,inclinationDeg:17.16,orbitalPeriodDays:90560,axialTiltDeg:122.53,rotationPeriodHours:-153.29,massKg:"1.303 × 10²² kg",surfaceGravityMs2:.62,meanTempC:-225,atmosphere:"Thin Nitrogen, Methane, Carbon Monoxide",moonsCount:5,notableMoons:["Charon (Binary Companion)","Nix","Hydra","Kerberos","Styx"],nasaMissions:["New Horizons (2015 Flyby)"],description:"The premier dwarf planet in the Kuiper Belt. NASA’s New Horizons spacecraft revealed a geologically active world with soaring water-ice mountains and the vast nitrogen glacier Tombaugh Regio."}],Ht=new Map;function an(i=1024,t=512){if(typeof document>"u"){const s=new Proxy({},{get:(r,o)=>o==="createLinearGradient"||o==="createRadialGradient"?()=>({addColorStop:()=>{}}):()=>{},set:()=>!0});return[{width:i,height:t,getContext:()=>s,addEventListener:()=>{},removeEventListener:()=>{},style:{},nodeType:1,nodeName:"CANVAS"},s]}const e=document.createElement("canvas");e.width=i,e.height=t;const n=e.getContext("2d");return[e,n]}function tg(){if(Ht.has("sun"))return Ht.get("sun");const[i,t]=an(1024,512),e=t.createLinearGradient(0,0,0,512);e.addColorStop(0,"#ff7700"),e.addColorStop(.5,"#ffa500"),e.addColorStop(1,"#ff6600"),t.fillStyle=e,t.fillRect(0,0,1024,512);for(let s=0;s<4e3;s++){const a=Math.random()*1024,r=Math.random()*512,o=Math.random()*8+2;t.beginPath(),t.arc(a,r,o,0,Math.PI*2),t.fillStyle=Math.random()>.4?"rgba(255, 235, 150, 0.35)":"rgba(220, 80, 0, 0.4)",t.fill()}for(let s=0;s<12;s++){const a=Math.random()*1024,r=180+Math.random()*150;t.beginPath(),t.arc(a,r,Math.random()*10+4,0,Math.PI*2),t.fillStyle="rgba(120, 20, 0, 0.85)",t.fill(),t.beginPath(),t.arc(a,r,Math.random()*5+2,0,Math.PI*2),t.fillStyle="rgba(40, 5, 0, 0.95)",t.fill()}const n=new Xe(i);return Ht.set("sun",n),n}function _l(){if(Ht.has("mercury"))return Ht.get("mercury");const[i,t]=an(1024,512);t.fillStyle="#8c857b",t.fillRect(0,0,1024,512);for(let n=0;n<1800;n++){const s=Math.random()*1024,a=Math.random()*512,r=Math.random()*14+1;t.beginPath(),t.arc(s,a,r,0,Math.PI*2),t.fillStyle=Math.random()>.5?"rgba(60, 55, 50, 0.4)":"rgba(190, 185, 175, 0.35)",t.fill()}const e=new Xe(i);return Ht.set("mercury",e),e}function eg(){if(Ht.has("venus"))return Ht.get("venus");const[i,t]=an(1024,512);t.fillStyle="#e8c97e",t.fillRect(0,0,1024,512);for(let n=0;n<512;n+=4){const s=Math.sin(n*.04)*.15;t.fillStyle=`rgba(245, 230, 165, ${.4+s})`,t.fillRect(0,n,1024,3)}t.strokeStyle="rgba(215, 175, 95, 0.25)",t.lineWidth=14;for(let n=-512;n<1536;n+=60)t.beginPath(),t.moveTo(n,0),t.bezierCurveTo(n+200,150,n-100,350,n+300,512),t.stroke();const e=new Xe(i);return Ht.set("venus",e),e}function ng(){if(Ht.has("earth"))return Ht.get("earth");const[i,t]=an(1024,512);t.fillStyle="#0f3868",t.fillRect(0,0,1024,512),t.fillStyle="#2d6a4f",t.beginPath(),t.ellipse(560,220,160,110,.2,0,Math.PI*2),t.fill(),t.fillStyle="#748c48",t.beginPath(),t.ellipse(600,160,180,80,-.1,0,Math.PI*2),t.fill(),t.fillStyle="#386641",t.beginPath(),t.ellipse(280,160,90,70,-.4,0,Math.PI*2),t.fill(),t.beginPath(),t.ellipse(320,320,70,100,.3,0,Math.PI*2),t.fill(),t.fillStyle="#8a5a36",t.beginPath(),t.ellipse(820,350,60,45,0,0,Math.PI*2),t.fill(),t.fillStyle="#e2e8f0",t.fillRect(0,460,1024,52),t.fillRect(0,0,1024,30),t.fillStyle="rgba(255, 255, 255, 0.65)";for(let n=0;n<24;n++){const s=Math.random()*1024,a=60+Math.random()*380;t.beginPath(),t.ellipse(s,a,70+Math.random()*90,20+Math.random()*25,Math.random()*.6,0,Math.PI*2),t.fill()}const e=new Xe(i);return Ht.set("earth",e),e}function ig(){if(Ht.has("mars"))return Ht.get("mars");const[i,t]=an(1024,512);t.fillStyle="#c1440e",t.fillRect(0,0,1024,512),t.fillStyle="#6b2d12";for(let n=0;n<20;n++){const s=Math.random()*1024,a=120+Math.random()*260;t.beginPath(),t.ellipse(s,a,60+Math.random()*80,30+Math.random()*40,Math.random(),0,Math.PI*2),t.fill()}t.fillStyle="#f8fafc",t.beginPath(),t.ellipse(512,18,140,22,0,0,Math.PI*2),t.fill(),t.beginPath(),t.ellipse(512,496,120,20,0,0,Math.PI*2),t.fill();const e=new Xe(i);return Ht.set("mars",e),e}function sg(){if(Ht.has("jupiter"))return Ht.get("jupiter");const[i,t]=an(1024,512);t.fillStyle="#eed6af",t.fillRect(0,0,1024,512);const e=["#9e5b32","#c98a58","#eed6af","#7a3e21","#cf9b6b","#9e5b32","#6b3318","#eed6af","#a8653b"];let n=0;for(let o=0;o<e.length;o++){const l=512/e.length;t.fillStyle=e[o],t.fillRect(0,n,1024,l),t.fillStyle="rgba(255, 255, 255, 0.15)";for(let c=0;c<1024;c+=30)t.beginPath(),t.arc(c,n+l*.5,6,0,Math.PI*2),t.fill();n+=l}const s=640,a=320;t.fillStyle="#b91c1c",t.beginPath(),t.ellipse(s,a,52,34,0,0,Math.PI*2),t.fill(),t.fillStyle="#ea580c",t.beginPath(),t.ellipse(s,a,32,18,.1,0,Math.PI*2),t.fill();const r=new Xe(i);return Ht.set("jupiter",r),r}function ag(){if(Ht.has("saturn"))return Ht.get("saturn");const[i,t]=an(1024,512);t.fillStyle="#e8d2a0",t.fillRect(0,0,1024,512);for(let n=0;n<512;n+=8){const s=Math.sin(n*.05)*20;t.fillStyle=`rgb(${220+s}, ${195+s}, ${145+s})`,t.fillRect(0,n,1024,8)}const e=new Xe(i);return Ht.set("saturn",e),e}function rg(){if(Ht.has("saturn-ring"))return Ht.get("saturn-ring");const[i,t]=an(512,64),e=t.createLinearGradient(0,0,512,0);e.addColorStop(0,"rgba(0,0,0,0)"),e.addColorStop(.1,"rgba(180, 160, 120, 0.4)"),e.addColorStop(.3,"rgba(235, 215, 170, 0.95)"),e.addColorStop(.65,"rgba(215, 195, 150, 0.9)"),e.addColorStop(.68,"rgba(0, 0, 0, 0.05)"),e.addColorStop(.72,"rgba(195, 175, 135, 0.85)"),e.addColorStop(.96,"rgba(160, 140, 105, 0.6)"),e.addColorStop(1,"rgba(0,0,0,0)"),t.fillStyle=e,t.fillRect(0,0,512,64);const n=new Xe(i);return Ht.set("saturn-ring",n),n}function og(){if(Ht.has("uranus"))return Ht.get("uranus");const[i,t]=an(512,256);t.fillStyle="#6ee7b7",t.fillRect(0,0,512,256);const e=t.createLinearGradient(0,0,0,256);e.addColorStop(0,"#5eead4"),e.addColorStop(.5,"#7dd3fc"),e.addColorStop(1,"#38bdf8"),t.fillStyle=e,t.globalAlpha=.65,t.fillRect(0,0,512,256);const n=new Xe(i);return Ht.set("uranus",n),n}function lg(){if(Ht.has("neptune"))return Ht.get("neptune");const[i,t]=an(512,256);t.fillStyle="#1e40af",t.fillRect(0,0,512,256);const e=t.createLinearGradient(0,0,0,256);e.addColorStop(0,"#1d4ed8"),e.addColorStop(.5,"#2563eb"),e.addColorStop(1,"#1e3a8a"),t.fillStyle=e,t.fillRect(0,0,512,256),t.fillStyle="rgba(255, 255, 255, 0.45)";for(let s=0;s<12;s++){const a=Math.random()*512,r=40+Math.random()*180;t.beginPath(),t.ellipse(a,r,40+Math.random()*60,3+Math.random()*4,0,0,Math.PI*2),t.fill()}const n=new Xe(i);return Ht.set("neptune",n),n}function cg(){if(Ht.has("pluto"))return Ht.get("pluto");const[i,t]=an(512,256);t.fillStyle="#a89f91",t.fillRect(0,0,512,256),t.fillStyle="#653818",t.beginPath(),t.ellipse(150,160,80,45,0,0,Math.PI*2),t.fill(),t.fillStyle="#f5ede0",t.beginPath(),t.ellipse(320,140,55,45,.2,0,Math.PI*2),t.fill(),t.beginPath(),t.ellipse(360,140,50,40,-.2,0,Math.PI*2),t.fill();const e=new Xe(i);return Ht.set("pluto",e),e}class Yr{group=new we;planets=[];sunMesh=null;sunLight=null;asteroidBelt=null;timeScale=1;isPaused=!1;accumulatedTimeDays=0;selectedPlanetId=null;ORBIT_SCALE_FACTOR=28;ORBIT_EXPONENT=.68;constructor(){this.group.name="solar-system",this.group.position.set(0,68,26e3),this.createSun(),this.createPlanets(),this.createAsteroidBelt()}auToDisplayDistance(t){return Math.pow(t,this.ORBIT_EXPONENT)*this.ORBIT_SCALE_FACTOR}static solveKeplerEquation(t,e){let n=t+e*Math.sin(t);const s=1e-6,a=10;for(let r=0;r<a;r++){const o=(n-e*Math.sin(n)-t)/(1-e*Math.cos(n));if(n-=o,Math.abs(o)<s)break}return n}computePlanetPosition(t,e){const n=t.orbitalPeriodDays,s=t.eccentricity,a=t.semiMajorAxisAU,r=t.inclinationDeg*Math.PI/180,l=2*Math.PI/n*e%(2*Math.PI),c=Yr.solveKeplerEquation(l,s),u=2*Math.atan2(Math.sqrt(1+s)*Math.sin(c/2),Math.sqrt(1-s)*Math.cos(c/2)),f=a*(1-s*s)/(1+s*Math.cos(u)),p=this.auToDisplayDistance(f),d=p*Math.cos(u),g=p*Math.sin(u),_=d,m=-g*Math.sin(r),h=g*Math.cos(r);return new w(_,m,h)}createSun(){const t=new tn(5.5,32,32),e=new Oe({map:tg(),color:16775149});this.sunMesh=new ae(t,e),this.sunMesh.name="sun-core";const n=new tn(6.6,32,32),s=new Oe({color:16096779,transparent:!0,opacity:.28,side:Ee,blending:Be}),a=new ae(n,s);this.sunMesh.add(a),this.sunLight=new pm(16775917,2.8,1500,.45),this.sunLight.position.set(0,0,0),this.group.add(this.sunLight);const r=new mm(3686744,.75);this.group.add(r),this.group.add(this.sunMesh)}createPlanets(){const t={mercury:_l,venus:eg,earth:ng,mars:ig,jupiter:sg,saturn:ag,uranus:og,neptune:lg,pluto:cg};for(const e of ec){const n=new we;n.name=`planet-${e.id}`;const s=new tn(e.renderRadius,32,32),a=t[e.id],r=a?a():null,o=new al({map:r,roughness:.65,metalness:.05}),l=new ae(s,o);l.name=`mesh-${e.id}`,l.rotation.z=e.axialTiltDeg*Math.PI/180,n.add(l);let c,u;if(e.id==="earth"){const g=new tn(e.renderRadius*1.04,32,32),_=new Oe({color:3718648,transparent:!0,opacity:.22,blending:Be,side:Ee});n.add(new ae(g,_)),c=new we,c.name="earth-moon-group";const m=new tn(.85,16,16),h=new al({map:_l(),roughness:.85});u=new ae(m,h),u.position.set(7.5,0,0),c.add(u),n.add(c)}let f;if(e.hasRings){const g=e.renderRadius*1.35,_=e.renderRadius*2.85,m=new ni(g,_,64);m.rotateX(Math.PI/2);const h=new Oe({map:rg(),side:De,transparent:!0,opacity:.88,depthWrite:!1});f=new ae(m,h),f.rotation.z=e.axialTiltDeg*Math.PI/180,n.add(f)}const p=this.generateOrbitLine(e);this.group.add(p);const d=this.computePlanetPosition(e,0);n.position.copy(d),this.group.add(n),this.planets.push({data:e,group:n,mesh:l,orbitLine:p,moonGroup:c,moonMesh:u,ringMesh:f})}}generateOrbitLine(t){const n=[],s=t.orbitalPeriodDays;for(let l=0;l<=128;l++){const c=l/128*s;n.push(this.computePlanetPosition(t,c))}const a=new ce().setFromPoints(n),r=new Wr({color:t.color,transparent:!0,opacity:.16,blending:Be}),o=new Zl(a,r);return o.name=`orbit-${t.id}`,o}createAsteroidBelt(){const e=new Float32Array(10500),n=new Float32Array(3500*3),s=2.2,a=3.2;for(let l=0;l<3500;l++){const c=s+Math.random()*(a-s),u=this.auToDisplayDistance(c),f=Math.random()*Math.PI*2,p=(Math.random()-.5)*6.5;e[l*3]=u*Math.cos(f),e[l*3+1]=p,e[l*3+2]=u*Math.sin(f);const d=.5+Math.random()*.4;n[l*3]=d*.85,n[l*3+1]=d*.8,n[l*3+2]=d*.75}const r=new ce;r.setAttribute("position",new se(e,3)),r.setAttribute("color",new se(n,3));const o=new Ui({size:1.2,vertexColors:!0,transparent:!0,opacity:.65});this.asteroidBelt=new Ni(r,o),this.asteroidBelt.name="asteroid-belt",this.group.add(this.asteroidBelt)}setTimeScale(t){this.timeScale=t}togglePause(){return this.isPaused=!this.isPaused,this.isPaused}setSelectedPlanet(t){this.selectedPlanetId=t;for(const e of this.planets)e.data.id===t?e.orbitLine.material.opacity=.85:e.orbitLine.material.opacity=.22}getSelectedPlanet(){return this.selectedPlanetId?this.planets.find(t=>t.data.id===this.selectedPlanetId)??null:null}update(t){this.isPaused||(this.accumulatedTimeDays+=t*2.5*this.timeScale),this.sunMesh&&(this.sunMesh.rotation.y+=t*.2);for(const e of this.planets){const n=this.computePlanetPosition(e.data,this.accumulatedTimeDays);if(e.group.position.copy(n),e.data.rotationPeriodHours!==0){const s=24/e.data.rotationPeriodHours*t;e.mesh.rotation.y+=s}e.moonGroup&&(e.moonGroup.rotation.y=this.accumulatedTimeDays/27.3*(2*Math.PI))}this.asteroidBelt&&(this.asteroidBelt.rotation.y+=t*.015)}}function hg(i){const t=Math.min(Math.max(i,0),1);return t*t*t*(t*(t*6-15)+10)}function ug(i){return Math.min(Math.max(i*.25,20),12e3)}class dg{camera;controls;stateStore;isAnimating=!1;startTime=0;elapsedTime=0;duration=2500;startPos=new w;endPos=new w;startTarget=new w;endTarget=new w;arcHeight=0;onCompleteCallback;constructor(t,e,n){this.camera=t,this.controls=e,this.stateStore=n}flyTo(t,e,n){let s={};typeof e=="number"?(s={...n},s.offset||(s.offset=new w(0,e*.35,e*.9))):e&&(s={...e}),this.duration=s.duration??s.durationMs??2500,this.onCompleteCallback=s.onComplete,this.startPos.copy(this.camera.position),this.startTarget.copy(this.controls.target),this.endTarget.copy(t);const a=s.offset??new w(0,120,280);this.endPos.copy(t).add(a);const r=this.startPos.distanceTo(this.endPos);this.arcHeight=s.arcHeight??ug(r),this.startTime=performance.now(),this.elapsedTime=0,this.isAnimating=!0,this.controls.enabled=!1,this.stateStore&&this.stateStore.setFlying(!0)}flyToLandmark(t,e={}){const n=new w(t.cartesian.x,t.cartesian.y,t.cartesian.z);let s;e.offset?s=e.offset:t.cameraOffset&&Array.isArray(t.cameraOffset)?s=new w(t.cameraOffset[0],t.cameraOffset[1],t.cameraOffset[2]):t.cameraDistance?s=new w(0,t.cameraDistance*.32,t.cameraDistance*.88):s=new w(0,120,280),this.flyTo(n,{...e,offset:s})}cancel(){this.isAnimating&&(this.isAnimating=!1,this.controls.enabled=!0,this.controls.update(),this.stateStore&&this.stateStore.setFlying(!1))}update(t){if(!this.isAnimating)return!1;let e;t===void 0?e=performance.now()-this.startTime:t>1e5?e=t-this.startTime:t<=1?(this.elapsedTime+=t*1e3,e=this.elapsedTime):(this.elapsedTime+=t,e=this.elapsedTime);const n=Math.min(e/this.duration,1),s=hg(n);this.controls.target.lerpVectors(this.startTarget,this.endTarget,s),this.camera.position.x=this.startPos.x+(this.endPos.x-this.startPos.x)*s,this.camera.position.z=this.startPos.z+(this.endPos.z-this.startPos.z)*s;const a=this.startPos.y+(this.endPos.y-this.startPos.y)*s,r=Math.sin(s*Math.PI)*this.arcHeight;return this.camera.position.y=a+r,n>=1?(this.isAnimating=!1,this.controls.enabled=!0,this.controls.update(),this.stateStore&&this.stateStore.setFlying(!1),this.onCompleteCallback&&this.onCompleteCallback(),!1):!0}isFlying(){return this.isAnimating}get active(){return this.isAnimating}}class fg{activeLandmark=null;fps=60;particleCount=25e4;cameraPosition=[0,45e3,75e3];isFlying=!1;listeners=new Set;subscribe(t){return this.listeners.add(t),()=>{this.listeners.delete(t)}}notify(){for(const t of this.listeners)t()}setActiveLandmark(t){this.activeLandmark=t,this.notify()}getActiveLandmark(){return this.activeLandmark}updateTelemetry(t,e,n){this.fps=Math.max(0,t),this.particleCount=e,n&&(this.cameraPosition=n),this.notify()}getTelemetry(){return{fps:this.fps,particleCount:this.particleCount,cameraPosition:this.cameraPosition}}setFlying(t){this.isFlying=t,this.notify()}getFlying(){return this.isFlying}}function pg(i){const t=`${i.distanceFromGC.toLocaleString()} ly`,e=`${i.distanceFromSun.toLocaleString()} ly`,n=`RA: ${i.equatorial.ra} | Dec: ${i.equatorial.dec}`,s=`l = ${i.galactic.lDeg.toFixed(2)}°, b = ${i.galactic.bDeg.toFixed(2)}°`,a=i.spectralType?`${i.spectralType} (${i.temperatureK?.toLocaleString()??"N/A"} K)`:"N/A";return{title:i.name,category:i.category.replace(/_/g," ").toUpperCase(),distGC:t,distSun:e,coords:n,galacticCoords:s,spectral:a,description:i.description}}class mg{frameTimes=[];maxSamples=60;recordDelta(t){const e=Math.min(Math.max(t,.1),1e3);this.frameTimes.push(e),this.frameTimes.length>this.maxSamples&&this.frameTimes.shift()}getAverageFPS(){if(this.frameTimes.length===0)return 60;const e=this.frameTimes.reduce((n,s)=>n+s,0)/this.frameTimes.length;return Math.round(1e3/e)}getSampleCount(){return this.frameTimes.length}}const gg=typeof import.meta<"u"&&"6Rc9hnCBGd9rNwwtMHtjDgGLNk7LnBLjH8FBkGRd"||"6Rc9hnCBGd9rNwwtMHtjDgGLNk7LnBLjH8FBkGRd",$n=new Map;let Ha=null;async function _g(){if(Ha)return Ha;try{const i=await fetch(`https://api.nasa.gov/planetary/apod?api_key=${gg}`);if(!i.ok)return console.warn(`NASA APOD API returned status ${i.status}`),null;const t=await i.json();return Ha=t,t}catch(i){return console.warn("Failed to fetch NASA APOD:",i),null}}async function vg(i){const t=i.trim();if($n.has(t))return $n.get(t)??null;try{const e=`https://images-api.nasa.gov/search?q=${encodeURIComponent(t)}&media_type=image`,n=await fetch(e);if(!n.ok)return $n.set(t,null),null;const a=(await n.json())?.collection?.items;if(!Array.isArray(a)||a.length===0)return $n.set(t,null),null;const r=a[0],o=r.data?.[0],c=r.links?.find(f=>f.rel==="preview"||f.href?.endsWith(".jpg"))?.href;if(!o||!c)return $n.set(t,null),null;const u={title:o.title||t,description:o.description||"",imageUrl:c,nasaId:o.nasa_id||"",dateCreated:o.date_created};return $n.set(t,u),u}catch(e){return console.warn(`Failed to fetch NASA image for landmark "${t}":`,e),$n.set(t,null),null}}const xg=[{id:"exoplanets",title:"Exoplanets",url:"https://science.nasa.gov/exoplanets/",icon:"🪐",tagline:"Planets Beyond Our Solar System",summary:"Over 5,500 confirmed worlds orbit other stars in our galaxy. NASA missions like Kepler, TESS, and the James Webb Space Telescope explore their atmospheres, orbital dynamics, and surface conditions.",keyFacts:[{label:"Confirmed Exoplanets",value:"5,500+"},{label:"Candidate Worlds",value:"10,000+"},{label:"Key Discoveries",value:"TRAPPIST-1, Proxima b, Kepler-186f"},{label:"Detection Methods",value:"Transit Photometry & Radial Velocity"}],visualLayer:"exoplanets",cameraPreset:{x:26050,y:350,z:26150,target:[26e3,68,0]}},{id:"search-for-life",title:"The Search for Life in the Universe",url:"https://science.nasa.gov/universe/search-for-life/",icon:"🧬",tagline:"Galactic Habitable Zone & Biosignatures",summary:"The Galactic Habitable Zone (GHZ) spans 23,000 to 30,000 light-years from the galactic core—far enough from dangerous central gamma radiation, yet rich enough in heavy elements for rocky planet formation.",keyFacts:[{label:"Galactic Habitable Zone",value:"23,000 – 30,000 ly from core"},{label:"Biosignature Targets",value:"O2, O3, CH4, H2O, CO2"},{label:"Key Ocean Worlds",value:"Europa, Enceladus, Titan"},{label:"Primary Telescopes",value:"James Webb (JWST) & Habitable Worlds Obs."}],visualLayer:"habitable_zone",cameraPreset:{x:0,y:48e3,z:42e3,target:[0,0,0]}},{id:"stars",title:"Stars & Stellar Evolution",url:"https://science.nasa.gov/universe/stars/",icon:"⭐",tagline:"From Protostars to Supernovae",summary:"Stars are cosmic nuclear engines that forge the heavy elements necessary for life. The Milky Way harbors between 100 to 400 billion stars spanning spectral classes from blistering Class O blue giants to long-lived Class M red dwarfs.",keyFacts:[{label:"Milky Way Star Count",value:"100 – 400 Billion"},{label:"Dominant Class",value:"Class M Red Dwarfs (~76%)"},{label:"Core Temperature",value:"15,000,000 K (Sun)"},{label:"Star Formation Rate",value:"~1.5 to 2 Solar Masses / Year"}],visualLayer:"stars",cameraPreset:{x:18e3,y:15e3,z:25e3,target:[0,0,0]}},{id:"galaxies",title:"Galaxies & Local Group",url:"https://science.nasa.gov/universe/galaxies/",icon:"🌀",tagline:"Cosmic Islands & Galactic Collisions",summary:"The Milky Way is a barred spiral galaxy with a diameter of ~100,000 light-years. It is part of the Local Group alongside Andromeda (M31) and the Triangulum Galaxy (M33), and will merge with Andromeda in approximately 4.5 billion years.",keyFacts:[{label:"Milky Way Diameter",value:"~100,000 Light-Years"},{label:"Local Group Members",value:"80+ Dwarf & Major Galaxies"},{label:"Andromeda Distance",value:"2.5 Million Light-Years"},{label:"Milkdromeda Collision",value:"In ~4.5 Billion Years"}],visualLayer:"galaxies",cameraPreset:{x:0,y:75e3,z:95e3,target:[0,0,0]}},{id:"black-holes",title:"Black Holes & Sagittarius A*",url:"https://science.nasa.gov/universe/black-holes/",icon:"🕳️",tagline:"Gravitational Singularities & Accretion",summary:"At the epicenter of our galaxy lies Sagittarius A*, a supermassive black hole with 4.15 million times the mass of the Sun. Its immense gravity warps spacetime, bends light around its photon sphere, and powers a relativistic accretion disk.",keyFacts:[{label:"Sgr A* Mass",value:"4.154 ± 0.014 Million M☉"},{label:"Schwarzschild Radius",value:"12.27 Million km (~0.082 AU)"},{label:"Photon Ring Radius",value:"1.5 × rs (3.0 × GM/c²)"},{label:"Distance from Earth",value:"26,000 Light-Years"}],visualLayer:"black_holes",cameraPreset:{x:300,y:120,z:350,target:[0,0,0]}},{id:"the-big-bang",title:"The Big Bang & Cosmic Dawn",url:"https://science.nasa.gov/universe/the-big-bang/",icon:"💥",tagline:"13.8 Billion Years of Cosmic Expansion",summary:"The universe ignited 13.8 billion years ago. The oldest stars in the Milky Way halo formed approximately 13.6 billion years ago, just a few hundred million years after the Big Bang, during the era of cosmic reionization.",keyFacts:[{label:"Age of Universe",value:"13.787 ± 0.020 Billion Years"},{label:"Oldest Milky Way Stars",value:"~13.6 Billion Years"},{label:"CMB Temperature",value:"2.7255 K"},{label:"Primordial Composition",value:"75% Hydrogen, 25% Helium"}],visualLayer:"big_bang",cameraPreset:{x:0,y:11e4,z:12e4,target:[0,0,0]}},{id:"dark-energy",title:"Dark Energy",url:"https://science.nasa.gov/dark-energy",icon:"⚡",tagline:"The Accelerated Expansion of Spacetime",summary:"Dark energy makes up approximately 68% of the universe. Unlike gravity which pulls matter together, dark energy acts as a repulsive force driving the accelerating expansion of the cosmos.",keyFacts:[{label:"Cosmic Abundance",value:"~68% of the Total Universe"},{label:"Discovery Year",value:"1998 (Type Ia Supernovae)"},{label:"Cosmological Constant",value:"Λ ≈ 1.1 × 10⁻⁵² m⁻²"},{label:"NASA Mission",value:"Nancy Grace Roman Space Telescope"}],visualLayer:"dark_energy",cameraPreset:{x:35e3,y:55e3,z:65e3,target:[0,0,0]}},{id:"dark-matter",title:"Dark Matter",url:"https://science.nasa.gov/dark-matter",icon:"🌌",tagline:"The Invisible Cosmic Scaffold",summary:"Accounting for roughly 85% of the Milky Way’s total mass, dark matter forms a vast spherical halo extending over 300,000 light-years, preventing the galaxy’s outer spiral arms from flying apart due to high rotational velocities.",keyFacts:[{label:"Milky Way Dark Matter",value:"~85% of Galactic Mass"},{label:"Dark Matter Halo Span",value:"> 300,000 Light-Years"},{label:"Evidence",value:"Flat Galactic Rotation Curves"},{label:"Detection Methods",value:"Gravitational Lensing & Velocity Dispersion"}],visualLayer:"dark_matter",cameraPreset:{x:0,y:65e3,z:85e3,target:[0,0,0]}}],vl={supermassive_black_hole:"Supermassive Black Hole",star_system:"Star System (G-Dwarf)",open_cluster:"Open Star Cluster",emission_nebula:"Diffuse Emission Nebula & Stellar Nursery",supernova_remnant:"Pulsar Wind Supernova Remnant",stellar_system:"Luminous Blue Variable / Hypergiant Binary"},Mg={supermassive_black_hole:"🕳️",star_system:"☀️",open_cluster:"🌟",emission_nebula:"🌌",supernova_remnant:"💥",stellar_system:"⭐"};class yg{stateStore;landmarks;onSelectLandmark;onResetView;fpsProfiler=new mg;lastTelemetryUpdate=0;unsubscribeStore;onSelectNasaTopic;onSelectPlanet;onSetTimeScale;hudCard=null;bookmarkBar=null;telemetryFps=null;telemetryParticles=null;telemetryCamera=null;apodModal=null;currentLandmarkId=null;nasaTopicCard=null;nasaTopicsBar=null;activeTopicId=null;solarSystemBar=null;planetCard=null;activePlanetId=null;getActiveTopicId(){return this.activeTopicId}getActivePlanetId(){return this.activePlanetId}constructor(t,e,n,s,a,r,o){this.stateStore=t,this.landmarks=e,this.onSelectLandmark=n,this.onResetView=s,this.onSelectNasaTopic=a,this.onSelectPlanet=r,this.onSetTimeScale=o,this.bindDOMElements(),this.buildBookmarkBar(),this.buildNasaTopicsBar(),this.buildSolarSystemBar(),this.subscribeState()}bindDOMElements(){typeof document>"u"||(this.hudCard=document.getElementById("hud-landmark-card"),this.bookmarkBar=document.getElementById("hud-bookmark-bar"),this.telemetryFps=document.getElementById("telemetry-fps"),this.telemetryParticles=document.getElementById("telemetry-particles"),this.telemetryCamera=document.getElementById("telemetry-camera"),document.getElementById("hud-nasa-topic-card")?this.nasaTopicCard=document.getElementById("hud-nasa-topic-card"):(this.nasaTopicCard=document.createElement("div"),this.nasaTopicCard.id="hud-nasa-topic-card",this.nasaTopicCard.className="hud-panel hud-interactive",document.body.appendChild(this.nasaTopicCard)),document.getElementById("hud-planet-card")?this.planetCard=document.getElementById("hud-planet-card"):(this.planetCard=document.createElement("div"),this.planetCard.id="hud-planet-card",this.planetCard.className="hud-panel hud-interactive",document.body.appendChild(this.planetCard)),this.setupNasaApodUI())}buildNasaTopicsBar(){if(typeof document>"u")return;const t=document.getElementById("hud-title");if(t)if(document.getElementById("hud-nasa-topics-bar"))this.nasaTopicsBar=document.getElementById("hud-nasa-topics-bar");else{this.nasaTopicsBar=document.createElement("div"),this.nasaTopicsBar.id="hud-nasa-topics-bar";for(const e of xg){const n=document.createElement("button");n.className="nasa-topic-pill",n.setAttribute("data-topic-id",e.id),n.innerHTML=`<span>${e.icon}</span> <span>${e.title}</span>`,n.title=`${e.title}: ${e.tagline}`,n.addEventListener("click",()=>{this.selectNasaTopic(e)}),this.nasaTopicsBar.appendChild(n)}t.appendChild(this.nasaTopicsBar)}}selectNasaTopic(t){if(this.activeTopicId=t?.id??null,this.nasaTopicsBar&&this.nasaTopicsBar.querySelectorAll(".nasa-topic-pill").forEach(a=>{t&&a.getAttribute("data-topic-id")===t.id?a.classList.add("active"):a.classList.remove("active")}),!this.nasaTopicCard)return;if(!t){this.nasaTopicCard.classList.remove("active"),this.nasaTopicCard.style.display="none";return}this.nasaTopicCard.style.display="block",this.nasaTopicCard.classList.add("active");const e=t.keyFacts.map(s=>`
        <div class="nasa-fact-item">
          <span class="nasa-fact-label">${s.label}</span>
          <span class="nasa-fact-val">${s.value}</span>
        </div>`).join("");this.nasaTopicCard.innerHTML=`
      <div class="nasa-topic-header">
        <div>
          <h2>${t.icon} ${t.title}</h2>
          <div class="nasa-topic-tagline">${t.tagline}</div>
        </div>
        <button id="nasa-topic-close" class="landmark-close-btn" aria-label="Close">✕</button>
      </div>

      <p class="landmark-description">${t.summary}</p>

      <div class="nasa-facts-grid">
        ${e}
      </div>

      <a href="${t.url}" target="_blank" rel="noopener noreferrer" class="nasa-official-link">
        <span>🚀</span> <span>Explore on Official NASA Science ↗</span>
      </a>
    `,document.getElementById("nasa-topic-close")?.addEventListener("click",()=>{this.selectNasaTopic(null)}),this.onSelectNasaTopic&&this.onSelectNasaTopic(t)}buildSolarSystemBar(){if(typeof document>"u")return;const t=document.getElementById("hud-footer");if(t)if(document.getElementById("hud-solar-system-bar"))this.solarSystemBar=document.getElementById("hud-solar-system-bar");else{this.solarSystemBar=document.createElement("div"),this.solarSystemBar.id="hud-solar-system-bar",this.solarSystemBar.className="hud-interactive";const e=document.createElement("span");e.style.cssText="font-size:0.7rem;font-weight:700;color:#fbbf24;text-transform:uppercase;letter-spacing:0.06em;margin-right:4px;",e.textContent="☀️ Solar System:",this.solarSystemBar.appendChild(e);const n=document.createElement("button");n.className="planet-pill",n.setAttribute("data-planet-id","sun"),n.innerHTML="<span>☀️</span> <span>Sun</span>",n.title=`${He.name} — ${He.spectralClass}`,n.addEventListener("click",()=>{this.selectSun()}),this.solarSystemBar.appendChild(n);const s={mercury:"⚪",venus:"🟡",earth:"🌍",mars:"🔴",jupiter:"🟤",saturn:"🪐",uranus:"🔵",neptune:"🔷",pluto:"❄️"};for(const o of ec){const l=document.createElement("button");l.className="planet-pill",l.setAttribute("data-planet-id",o.id);const c=s[o.id]??"🪐";l.innerHTML=`<span>${c}</span> <span>${o.name}</span>`,l.title=`${o.name} — a = ${o.semiMajorAxisAU} AU, Period = ${o.orbitalPeriodDays.toFixed(1)} days`,l.addEventListener("click",()=>{this.selectPlanet(o)}),this.solarSystemBar.appendChild(l)}const a=document.createElement("div");a.className="time-control-group";const r=[{label:"⏸️",scale:0},{label:"1x",scale:1},{label:"5x",scale:5},{label:"25x",scale:25},{label:"100x",scale:100}];for(const o of r){const l=document.createElement("button");l.className=`time-btn ${o.scale===1?"active":""}`,l.textContent=o.label,l.title=`Simulation speed: ${o.label}`,l.addEventListener("click",()=>{a.querySelectorAll(".time-btn").forEach(c=>c.classList.remove("active")),l.classList.add("active"),this.onSetTimeScale&&this.onSetTimeScale(o.scale)}),a.appendChild(l)}this.solarSystemBar.appendChild(a),this.bookmarkBar?t.insertBefore(this.solarSystemBar,this.bookmarkBar):t.appendChild(this.solarSystemBar)}}selectPlanet(t){if(this.activePlanetId=t?.id??null,this.solarSystemBar&&this.solarSystemBar.querySelectorAll(".planet-pill").forEach(r=>{t&&r.getAttribute("data-planet-id")===t.id?r.classList.add("active"):r.classList.remove("active")}),!this.planetCard)return;if(!t){this.planetCard.classList.remove("active"),this.planetCard.style.display="none";return}this.planetCard.style.display="block",this.planetCard.classList.add("active");const e=Math.round(t.semiMajorAxisAU*1495978707e-1).toLocaleString(),n=t.nasaMissions.map(a=>`<span class="mission-tag">${a}</span>`).join("");this.planetCard.innerHTML=`
      <div class="planet-card-header">
        <div>
          <h2>${t.name}</h2>
          <div class="planet-type-badge">${t.type.replace("_"," ")}</div>
        </div>
        <button id="planet-card-close" class="landmark-close-btn" aria-label="Close">✕</button>
      </div>

      <div class="planet-grid">
        <div class="landmark-grid-item">
          <span class="landmark-grid-label">Orbital Distance (a)</span>
          <span class="landmark-grid-value">${t.semiMajorAxisAU} AU (${e} km)</span>
        </div>
        <div class="landmark-grid-item">
          <span class="landmark-grid-label">Orbital Period (T)</span>
          <span class="landmark-grid-value">${t.orbitalPeriodDays.toFixed(1)} days (${(t.orbitalPeriodDays/365.25).toFixed(2)} yr)</span>
        </div>
        <div class="landmark-grid-item">
          <span class="landmark-grid-label">Eccentricity (e)</span>
          <span class="landmark-grid-value">${t.eccentricity}</span>
        </div>
        <div class="landmark-grid-item">
          <span class="landmark-grid-label">Surface Gravity</span>
          <span class="landmark-grid-value">${t.surfaceGravityMs2} m/s²</span>
        </div>
        <div class="landmark-grid-item">
          <span class="landmark-grid-label">Mean Temperature</span>
          <span class="landmark-grid-value">${t.meanTempC}°C</span>
        </div>
        <div class="landmark-grid-item">
          <span class="landmark-grid-label">Moons</span>
          <span class="landmark-grid-value">${t.moonsCount} ${t.notableMoons?`(${t.notableMoons.join(", ")})`:""}</span>
        </div>
      </div>

      <div style="font-size:0.75rem;margin-bottom:8px;">
        <span class="landmark-grid-label">Atmosphere:</span>
        <span style="color:#cbd5e1;"> ${t.atmosphere}</span>
      </div>

      <p class="landmark-description" style="margin-bottom:10px;">${t.description}</p>

      <div>
        <span class="landmark-grid-label">NASA Missions:</span>
        <div class="planet-mission-tags">${n}</div>
      </div>
    `,document.getElementById("planet-card-close")?.addEventListener("click",()=>{this.selectPlanet(null)}),this.onSelectPlanet&&this.onSelectPlanet(t)}selectSun(){if(this.activePlanetId="sun",this.solarSystemBar&&this.solarSystemBar.querySelectorAll(".planet-pill").forEach(n=>{n.getAttribute("data-planet-id")==="sun"?n.classList.add("active"):n.classList.remove("active")}),!this.planetCard)return;this.planetCard.style.display="block",this.planetCard.classList.add("active"),this.planetCard.innerHTML=`
      <div class="planet-card-header">
        <div>
          <h2>${He.name}</h2>
          <div class="planet-type-badge">${He.spectralClass}</div>
        </div>
        <button id="planet-card-close" class="landmark-close-btn" aria-label="Close">✕</button>
      </div>

      <div class="planet-grid">
        <div class="landmark-grid-item">
          <span class="landmark-grid-label">Surface Temperature</span>
          <span class="landmark-grid-value">${He.surfaceTempK.toLocaleString()} K</span>
        </div>
        <div class="landmark-grid-item">
          <span class="landmark-grid-label">Core Temperature</span>
          <span class="landmark-grid-value">${He.coreTempK.toLocaleString()} K</span>
        </div>
        <div class="landmark-grid-item">
          <span class="landmark-grid-label">Equatorial Radius</span>
          <span class="landmark-grid-value">${He.radiusKm.toLocaleString()} km</span>
        </div>
        <div class="landmark-grid-item">
          <span class="landmark-grid-label">Total Luminosity</span>
          <span class="landmark-grid-value">${He.luminosityWatts}</span>
        </div>
        <div class="landmark-grid-item">
          <span class="landmark-grid-label">Mass</span>
          <span class="landmark-grid-value">${He.massKg}</span>
        </div>
        <div class="landmark-grid-item">
          <span class="landmark-grid-label">Stellar Age</span>
          <span class="landmark-grid-value">${He.ageBillionYears} Billion Years</span>
        </div>
      </div>

      <div style="font-size:0.75rem;margin-bottom:8px;">
        <span class="landmark-grid-label">Chemical Composition:</span>
        <span style="color:#cbd5e1;"> ${He.composition}</span>
      </div>

      <p class="landmark-description">${He.description}</p>
    `,document.getElementById("planet-card-close")?.addEventListener("click",()=>{this.selectPlanet(null)}),this.onSelectPlanet&&this.onSelectPlanet(null)}setupNasaApodUI(){if(typeof document>"u")return;const t=document.getElementById("hud-title");if(t&&!document.getElementById("hud-nasa-apod-btn")){const e=document.createElement("button");e.id="hud-nasa-apod-btn",e.className="nasa-apod-btn",e.innerHTML="<span>🛰️</span> <span>NASA Daily Observation</span>",e.title="View NASA Astronomy Picture of the Day (Live API)",e.addEventListener("click",()=>{this.openNasaApodModal()}),t.appendChild(e)}document.getElementById("nasa-apod-modal")?this.apodModal=document.getElementById("nasa-apod-modal"):(this.apodModal=document.createElement("div"),this.apodModal.id="nasa-apod-modal",this.apodModal.innerHTML=`
        <div class="nasa-modal-card">
          <div class="nasa-modal-header">
            <div>
              <h2 id="apod-modal-title">NASA Astronomy Picture of the Day</h2>
              <p id="apod-modal-date">Connecting to NASA Open API...</p>
            </div>
            <button id="apod-modal-close" class="landmark-close-btn" aria-label="Close">✕</button>
          </div>
          <div id="apod-modal-body" style="text-align: center; color: #94a3b8; font-size: 0.85rem;">
            Loading official NASA telescope feed...
          </div>
        </div>
      `,document.body.appendChild(this.apodModal),document.getElementById("apod-modal-close")?.addEventListener("click",()=>{this.apodModal?.classList.remove("active")}),this.apodModal.addEventListener("click",n=>{n.target===this.apodModal&&this.apodModal?.classList.remove("active")}))}async openNasaApodModal(){if(!this.apodModal)return;this.apodModal.classList.add("active");const t=document.getElementById("apod-modal-title"),e=document.getElementById("apod-modal-date"),n=document.getElementById("apod-modal-body");n&&(n.innerHTML='<div style="padding: 30px; color: #38bdf8;">🛰️ Contacting NASA Open API (api.nasa.gov)...</div>');const s=await _g();if(!s){n&&(n.innerHTML='<div style="padding: 20px; color: #f87171;">Unable to connect to NASA API feed. Please check network connection.</div>');return}if(t&&(t.textContent=s.title),e&&(e.textContent=`Date: ${s.date} ${s.copyright?`| © ${s.copyright}`:""}`),n){const a=s.media_type==="image";n.innerHTML=`
        ${a?`<img src="${s.url}" alt="${s.title}" class="nasa-modal-img" />`:`<iframe src="${s.url}" style="width:100%;height:320px;border:none;border-radius:8px;"></iframe>`}
        <p class="nasa-modal-text" style="margin-top: 14px; text-align: left;">${s.explanation}</p>
        ${s.hdurl?`<div style="margin-top: 10px; text-align: right;"><a href="${s.hdurl}" target="_blank" rel="noopener noreferrer" style="color: #38bdf8; font-size: 0.78rem; text-decoration: underline;">Open NASA Full-Resolution Original ↗</a></div>`:""}
      `}}buildBookmarkBar(){if(!this.bookmarkBar)return;this.bookmarkBar.innerHTML="";const t=document.createElement("button");t.className="bookmark-btn",t.setAttribute("data-landmark","macro"),t.setAttribute("data-id","macro"),t.innerHTML="<span>🌌</span> <span>Galactic Overview</span>",t.title="Fly to Macro 100,000 ly Milky Way Overview",t.addEventListener("click",()=>{this.stateStore.setActiveLandmark(null),this.onResetView&&this.onResetView()}),this.bookmarkBar.appendChild(t);for(const e of this.landmarks){const n=document.createElement("button");n.className="bookmark-btn",n.setAttribute("data-landmark",e.id),n.setAttribute("data-id",e.id);const s=Mg[e.category]??"✨";n.innerHTML=`<span>${s}</span> <span>${e.name}</span>`,n.title=`${e.name} (${vl[e.category]??e.category}) — ${e.distanceFromSun.toLocaleString()} ly from Sun`,n.addEventListener("click",()=>{this.onSelectLandmark(e)}),this.bookmarkBar.appendChild(n)}}subscribeState(){this.unsubscribeStore=this.stateStore.subscribe(()=>{const t=this.stateStore.getActiveLandmark();this.renderLandmarkCard(t),this.updateActiveBookmark(t?.id??null)})}renderLandmarkCard(t){if(!this.hudCard)return;if(!t){this.hudCard.classList.remove("active"),this.hudCard.style.display="none",this.hudCard.innerHTML="";return}const e=pg(t),n=vl[t.category]??e.category;this.hudCard.style.display="block",this.hudCard.classList.add("active"),this.hudCard.innerHTML=`
      <div class="landmark-card-header">
        <div>
          <h2>${t.name}</h2>
          <div class="landmark-category-badge">${n}</div>
        </div>
        <button id="hud-card-close" class="landmark-close-btn" title="Close Inspection Card" aria-label="Close">✕</button>
      </div>

      <div class="landmark-grid">
        <div class="landmark-grid-item">
          <span class="landmark-grid-label">Galactic Center Dist.</span>
          <span class="landmark-grid-value">${e.distGC}</span>
        </div>
        <div class="landmark-grid-item">
          <span class="landmark-grid-label">Solar Distance</span>
          <span class="landmark-grid-value">${e.distSun}</span>
        </div>
        <div class="landmark-grid-item">
          <span class="landmark-grid-label">Equatorial (ICRS)</span>
          <span class="landmark-grid-value">${e.coords}</span>
        </div>
        <div class="landmark-grid-item">
          <span class="landmark-grid-label">Galactic Coordinates</span>
          <span class="landmark-grid-value">${e.galacticCoords}</span>
        </div>
        <div class="landmark-grid-item">
          <span class="landmark-grid-label">Spectral & Temperature</span>
          <span class="landmark-grid-value">${e.spectral}</span>
        </div>
        <div class="landmark-grid-item">
          <span class="landmark-grid-label">Viewing Scale</span>
          <span class="landmark-grid-value">${t.cameraDistance.toLocaleString()} ly</span>
        </div>
      </div>

      <div id="landmark-nasa-section" class="landmark-nasa-section">
        <div class="landmark-nasa-header">
          <span class="landmark-nasa-badge">🔭 NASA Archive Observation</span>
          <span class="landmark-nasa-verified">✓ NASA API Connected</span>
        </div>
        <div id="landmark-nasa-content" class="landmark-nasa-content">
          <span style="font-size:0.74rem;color:#94a3b8;">Retrieving telescope imagery...</span>
        </div>
      </div>

      <p class="landmark-description">${t.description}</p>

      <button id="hud-fly-to-btn" class="landmark-fly-btn">
        <span>🚀</span> <span>Re-center Camera on Target</span>
      </button>
    `,this.loadNasaObservation(t);const s=document.getElementById("hud-card-close");s&&s.addEventListener("click",()=>{this.stateStore.setActiveLandmark(null)});const a=document.getElementById("hud-fly-to-btn");a&&a.addEventListener("click",()=>{this.onSelectLandmark(t)})}async loadNasaObservation(t){const e=t.id;this.currentLandmarkId=e;const n=await vg(t.name);if(this.currentLandmarkId!==e)return;const s=document.getElementById("landmark-nasa-content");if(s){if(!n){s.innerHTML='<span style="font-size:0.72rem;color:#94a3b8;">Telescope surveys registered under standard celestial coordinates.</span>';return}s.innerHTML=`
      <img src="${n.imageUrl}" alt="${n.title}" class="landmark-nasa-thumb" />
      <div class="landmark-nasa-meta">
        <div class="landmark-nasa-title" title="${n.title}">${n.title}</div>
        <div class="landmark-nasa-id">NASA ID: ${n.nasaId}</div>
      </div>
    `}}updateActiveBookmark(t){if(!this.bookmarkBar)return;this.bookmarkBar.querySelectorAll(".bookmark-btn").forEach(n=>{const s=n.getAttribute("data-id");t&&s===t||!t&&s==="macro"?n.classList.add("active"):n.classList.remove("active")})}update(t,e,n=25e4){const s=t*1e3;this.fpsProfiler.recordDelta(s);const a=performance.now();if(a-this.lastTelemetryUpdate>=200){this.lastTelemetryUpdate=a;const r=this.fpsProfiler.getAverageFPS();if(this.telemetryFps&&(this.telemetryFps.innerHTML=`<span class="telemetry-indicator"></span> ${r} FPS`),this.telemetryParticles&&(this.telemetryParticles.textContent=`${n.toLocaleString()} Stars`),this.telemetryCamera&&e){const o=Math.round(e.position.x/1e3),l=Math.round(e.position.y/1e3),c=Math.round(e.position.z/1e3),u=Math.round(e.position.length()).toLocaleString();this.telemetryCamera.textContent=`Coord: (${o}k, ${l}k, ${c}k) ly | GC: ${u} ly`}e&&this.stateStore.updateTelemetry(r,n,[e.position.x,e.position.y,e.position.z])}}destroy(){this.unsubscribeStore&&(this.unsubscribeStore(),this.unsubscribeStore=void 0)}}console.log(`[MilkyWay3D] Initialized with ${tc.length} verified astronomical landmarks.`);console.log(`[MilkyWay3D] Solar parameters: R_0 = ${Im} ly, z_0 = ${Um} ly.`);const es=tc;let Ze,xe,on=null,ue=null,de=null,xn=null,ns=null,Je=null,Ne=null,In=null,Qe=null,Kn=null,Ai=null,wi=null,Va=!1;function Sg(i){Ze=new cm,Ze.name="MilkyWayScene";const t=window.innerWidth/window.innerHeight;xe=new Fe(60,t,.1,3e5),xe.position.set(0,45e3,75e3),xe.up.set(0,1,0),xe.lookAt(0,0,0),on=new lm({canvas:i,antialias:!0,logarithmicDepthBuffer:!0,powerPreference:"high-performance"}),on.setSize(window.innerWidth,window.innerHeight),on.setPixelRatio(Math.min(window.devicePixelRatio,2)),ue=new Mm(xe,on.domElement),ue.enableDamping=!0,ue.dampingFactor=.05,ue.rotateSpeed=.8,ue.zoomSpeed=1.2,ue.panSpeed=.8,ue.enablePan=!0,ue.screenSpacePanning=!0,ue.minDistance=15,ue.maxDistance=16e4,ue.minPolarAngle=.05,ue.maxPolarAngle=Math.PI-.05,ue.target.set(0,0,0),ue.update(),Kn=new fg,de=new dg(xe,ue,Kn),ue.addEventListener("start",()=>{de?.isFlying()&&de.cancel()}),i.addEventListener("pointerdown",()=>{de?.isFlying()&&de.cancel()}),i.addEventListener("wheel",()=>{de?.isFlying()&&de.cancel()},{passive:!0});const e=km.generate(25e4);xn=new Vm(e),Ze.add(xn),ns=new Wm,Ze.add(ns),Je=new Km,Je.position.set(0,0,0),Je.accretionDiskMaterial.fragmentShader.includes("uniform mat4 modelMatrix;")||(Je.accretionDiskMaterial.fragmentShader=`uniform mat4 modelMatrix;
`+Je.accretionDiskMaterial.fragmentShader,Je.accretionDiskMaterial.needsUpdate=!0),Ze.add(Je),Ne=new Jm(es),Ze.add(Ne.group),In=new Qm,Ze.add(In.group),Qe=new Yr,Ze.add(Qe.group);function n(d){const g=es.find(_=>_.id===d);!g||!de||(Kn?.setActiveLandmark(g),Ne?.highlightLandmark(g.id),de.flyToLandmark(g))}function s(){de&&(Kn?.setActiveLandmark(null),Ne?.highlightLandmark(null),In?.setLayer(""),Qe?.setSelectedPlanet(null),Ai?.selectNasaTopic(null),Ai?.selectPlanet(null),de.flyTo(new w(0,0,0),{offset:new w(0,45e3,75e3),duration:2500}))}function a(d){!In||!de||(In.setLayer(d.visualLayer),d.cameraPreset&&de.flyTo(new w(d.cameraPreset.target[0],d.cameraPreset.target[1],d.cameraPreset.target[2]),{offset:new w(d.cameraPreset.x-d.cameraPreset.target[0],d.cameraPreset.y-d.cameraPreset.target[1],d.cameraPreset.z-d.cameraPreset.target[2]),duration:2200}))}function r(d){if(!Qe||!de||(Qe.setSelectedPlanet(d?.id??null),!d))return;const g=new w(0,68,26e3),_=Qe.computePlanetPosition(d,0),m=g.clone().add(_),h=new w(0,d.renderRadius*4+12,d.renderRadius*5.5+20);de.flyTo(m,{offset:h,duration:2200})}function o(d){Qe&&Qe.setTimeScale(d)}Ai=new yg(Kn,es,d=>n(d.id),s,a,r,o);const l=new gm,c=new Mt;let u={x:0,y:0};i.addEventListener("pointerdown",d=>{u={x:d.clientX,y:d.clientY}}),i.addEventListener("pointermove",d=>{if(!Ne)return;const g=i.getBoundingClientRect();c.x=(d.clientX-g.left)/g.width*2-1,c.y=-((d.clientY-g.top)/g.height)*2+1,l.setFromCamera(c,xe);const _=Ne.raycast(l);i.style.cursor=_?"pointer":"default"}),i.addEventListener("pointerup",d=>{if(!Ne)return;const g=Math.abs(d.clientX-u.x),_=Math.abs(d.clientY-u.y);if(g<6&&_<6){const m=i.getBoundingClientRect();c.x=(d.clientX-m.left)/m.width*2-1,c.y=-((d.clientY-m.top)/m.height)*2+1,l.setFromCamera(c,xe);const h=Ne.raycast(l);h&&n(h.id)}}),window.__GALAXY__={renderer:on,scene:Ze,camera:xe,controls:ue,cameraFlyTo:de,navigation:{controls:ue,cameraFlyTo:de,get flyToActive(){return de?.isFlying()??!1}},hud:Ai,stateStore:Kn,store:Kn,starfield:xn,galaxyView:xn,blackHole:Je,sagittariusA:Je,landmarks:{count:es.length,children:Ne.group.children,group:Ne.group,list:es},landmarkMarkers:Ne,nasaScienceLayers:In,solarSystem:Qe,galaxyNebulaClouds:ns,selectLandmark:d=>n(d),resetToOverview:s},i.addEventListener("webglcontextlost",d=>{d.preventDefault(),Va=!0,wi!==null&&(cancelAnimationFrame(wi),wi=null),console.warn("[MilkyWay3D] WebGL context lost. Simulation loop paused.")},!1),i.addEventListener("webglcontextrestored",()=>{console.info("[MilkyWay3D] WebGL context restored. Resuming simulation loop..."),Va=!1,f=performance.now(),wi=requestAnimationFrame(p)},!1),window.addEventListener("resize",()=>{if(!on||!xe)return;xe.aspect=window.innerWidth/window.innerHeight,xe.updateProjectionMatrix(),on.setSize(window.innerWidth,window.innerHeight);const d=Math.min(window.devicePixelRatio,2);on.setPixelRatio(d),xn&&xn.setPixelRatio(d)});let f=performance.now();function p(d){if(Va)return;wi=requestAnimationFrame(p);const g=Math.min(.1,(d-f)/1e3);f=d;const _=d/1e3;ue&&ue.update(),de&&de.update(g),xn&&xn.update(g,_),ns&&ns.update(_),Je&&Je.update(g,_,xe),Ne&&Ne.update(g,xe),In&&In.update(_),Qe&&Qe.update(g),Ai&&Ai.update(g,xe,xn?.particleCount??25e4),on&&Ze&&xe&&on.render(Ze,xe)}wi=requestAnimationFrame(p)}typeof window<"u"&&typeof document<"u"&&window.addEventListener("DOMContentLoaded",()=>{const i=document.getElementById("webgl-canvas");i&&(console.log("[MilkyWay3D] Initializing WebGL scene, OrbitControls, and HUD..."),Sg(i),console.log("[MilkyWay3D] WebGL Canvas mounted and render loop active."))});
//# sourceMappingURL=index-aWn9rpCP.js.map
