(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-7245c9aa"],{3610:function(e,t,o){"use strict";o.r(t);var n=function(){var e=this,t=e.$createElement;e._self._c;return e._m(0)},a=[function(){var e=this,t=e.$createElement,o=e._self._c||t;return o("div",{staticClass:"lan-main-three"},[o("div",{attrs:{id:"canvas"}})])}],i=(o("ac6a"),o("5a89")),r=o("b3fd"),s=o("3191"),c=o.n(s),p=(o("d545"),o("ed08")),u=Math.PI,d="#B0B0B0",h=50,m=7,l=20,b=h+2*l,g={getRoom:function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:10,o=Math.ceil(t);o%2===1&&o++;for(var n=[],a=e.x-o/2*b;a<=e.x+o/2*b;a+=b)for(var i=e.y-o/2*b;i<=e.y+o/2*b;i+=b)for(var r=e.z-o/2*b;r<=e.z+o/2*b;r+=b)n.push(this.getCube({x:a,y:i,z:r}));return n},getCube:function(e){var t=new i["q"],o=new i["M"](new i["e"](h,h,h),new i["N"]({color:d}));o.position.set(e.x,e.y,e.z),o.updateMatrix(),t.merge(o.geometry,o.matrix);var n=new i["M"](new i["j"](m,m,l,32),new i["N"]({color:d}));n.position.set(e.x,e.y+h/2+l/2,e.z),n.updateMatrix(),t.merge(n.geometry,n.matrix),n.position.set(e.x,-1*(e.y+h/2+l/2),e.z),n.updateMatrix(),t.merge(n.geometry,n.matrix),n.position.set(e.x,e.y,e.z+h/2+l/2),n.rotation.x+=u/2,n.updateMatrix(),t.merge(n.geometry,n.matrix),n.position.set(e.x,e.y,-1*(e.z+h/2+l/2)),n.updateMatrix(),t.merge(n.geometry,n.matrix),n.position.set(e.x+h/2+l/2,e.y,e.z),n.rotation.x-=u/2,n.rotation.z+=u/2,n.updateMatrix(),t.merge(n.geometry,n.matrix),n.position.set(-1*(e.x+h/2+l/2),e.y,e.z),n.updateMatrix(),t.merge(n.geometry,n.matrix);var a=new i["M"](t,new i["N"]({color:Object(p["b"])()}));return a.realCoordinate={x:e.x,y:e.y,z:e.z},a},getCubeCoordinate:function(e){}},v=g,f={name:"Astronomy",data:function(){return{scene:"",camera:"",renderer:"",stats:"",controls:"",aspect:window.innerWidth/window.innerHeight,cube:[]}},computed:{},mounted:function(){this.init(),this.AddScene(),this.animate()},methods:{init:function(){var e=new i["hb"];this.scene=e;var t=new i["W"](45,this.aspect,1,1e3);t.position.x=150,t.position.y=150,t.position.z=150,t.lookAt(0,0,0),e.add(t),this.camera=t;var o=document.createElement("div");document.getElementById("canvas").appendChild(o);var n=new i["ub"]({antialias:!0});n.setPixelRatio(window.devicePixelRatio),n.setSize(window.innerWidth,window.innerHeight),o.appendChild(n.domElement),this.renderer=n,this.stats=new c.a,o.appendChild(this.stats.dom);var a=new r["a"](t,n.domElement);a.rotateSpeed=1,a.zoomSpeed=1.2,a.panSpeed=.8,a.keys=[65,83,68],this.controls=a},AddScene:function(){var e=this,t=v.getRoom({x:0,y:0,z:0},2);this.cube=t,console.log("cube:",t),t.forEach((function(t){e.scene.add(t)}))},animate:function(){requestAnimationFrame(this.animate),this.controls.update(),this.stats.update(),this.render()},render:function(){this.renderer.render(this.scene,this.camera)}}},y=f,E=o("2877"),w=Object(E["a"])(y,n,a,!1,null,"cb6084a8",null);t["default"]=w.exports},b3fd:function(e,t,o){"use strict";o.d(t,"a",(function(){return a}));o("ac6a"),o("673e");var n=o("5a89"),a=function(e,t){void 0===t&&console.warn('THREE.TrackballControls: The second parameter "domElement" is now mandatory.'),t===document&&console.error('THREE.TrackballControls: "document" should not be used as the target "domElement". Please use "renderer.domElement" instead.');var o=this,a={NONE:-1,ROTATE:0,ZOOM:1,PAN:2,TOUCH_ROTATE:3,TOUCH_ZOOM_PAN:4};this.object=e,this.domElement=t,this.enabled=!0,this.screen={left:0,top:0,width:0,height:0},this.rotateSpeed=1,this.zoomSpeed=1.2,this.panSpeed=.3,this.noRotate=!1,this.noZoom=!1,this.noPan=!1,this.staticMoving=!1,this.dynamicDampingFactor=.2,this.minDistance=0,this.maxDistance=1/0,this.keys=[65,83,68],this.mouseButtons={LEFT:n["H"].ROTATE,MIDDLE:n["H"].ZOOM,RIGHT:n["H"].PAN},this.target=new n["sb"];var i=1e-6,r=new n["sb"],s=1,c=a.NONE,p=a.NONE,u=new n["sb"],d=new n["rb"],h=new n["rb"],m=new n["sb"],l=0,b=new n["rb"],g=new n["rb"],v=0,f=0,y=new n["rb"],E=new n["rb"];this.target0=this.target.clone(),this.position0=this.object.position.clone(),this.up0=this.object.up.clone(),this.zoom0=this.object.zoom;var w={type:"change"},M={type:"start"},O={type:"end"};this.handleResize=function(){var e=this.domElement.getBoundingClientRect(),t=this.domElement.ownerDocument.documentElement;this.screen.left=e.left+window.pageXOffset-t.clientLeft,this.screen.top=e.top+window.pageYOffset-t.clientTop,this.screen.width=e.width,this.screen.height=e.height};var j=function(){var e=new n["rb"];return function(t,n){return e.set((t-o.screen.left)/o.screen.width,(n-o.screen.top)/o.screen.height),e}}(),x=function(){var e=new n["rb"];return function(t,n){return e.set((t-.5*o.screen.width-o.screen.left)/(.5*o.screen.width),(o.screen.height+2*(o.screen.top-n))/o.screen.width),e}}();function N(e){!1!==o.enabled&&(window.removeEventListener("keydown",N),p===a.NONE&&(e.keyCode!==o.keys[a.ROTATE]||o.noRotate?e.keyCode!==o.keys[a.ZOOM]||o.noZoom?e.keyCode!==o.keys[a.PAN]||o.noPan||(p=a.PAN):p=a.ZOOM:p=a.ROTATE))}function T(){!1!==o.enabled&&(p=a.NONE,window.addEventListener("keydown",N,!1))}function k(e){if(!1!==o.enabled){if(e.preventDefault(),e.stopPropagation(),c===a.NONE)switch(e.button){case o.mouseButtons.LEFT:c=a.ROTATE;break;case o.mouseButtons.MIDDLE:c=a.ZOOM;break;case o.mouseButtons.RIGHT:c=a.PAN;break;default:c=a.NONE}var t=p!==a.NONE?p:c;t!==a.ROTATE||o.noRotate?t!==a.ZOOM||o.noZoom?t!==a.PAN||o.noPan||(y.copy(j(e.pageX,e.pageY)),E.copy(y)):(b.copy(j(e.pageX,e.pageY)),g.copy(b)):(h.copy(x(e.pageX,e.pageY)),d.copy(h)),document.addEventListener("mousemove",z,!1),document.addEventListener("mouseup",C,!1),o.dispatchEvent(M)}}function z(e){if(!1!==o.enabled){e.preventDefault(),e.stopPropagation();var t=p!==a.NONE?p:c;t!==a.ROTATE||o.noRotate?t!==a.ZOOM||o.noZoom?t!==a.PAN||o.noPan||E.copy(j(e.pageX,e.pageY)):g.copy(j(e.pageX,e.pageY)):(d.copy(h),h.copy(x(e.pageX,e.pageY)))}}function C(e){!1!==o.enabled&&(e.preventDefault(),e.stopPropagation(),c=a.NONE,document.removeEventListener("mousemove",z),document.removeEventListener("mouseup",C),o.dispatchEvent(O))}function L(e){if(!1!==o.enabled&&!0!==o.noZoom){switch(e.preventDefault(),e.stopPropagation(),e.deltaMode){case 2:b.y-=.025*e.deltaY;break;case 1:b.y-=.01*e.deltaY;break;default:b.y-=25e-5*e.deltaY;break}o.dispatchEvent(M),o.dispatchEvent(O)}}function P(e){if(!1!==o.enabled){switch(e.preventDefault(),e.touches.length){case 1:c=a.TOUCH_ROTATE,h.copy(x(e.touches[0].pageX,e.touches[0].pageY)),d.copy(h);break;default:c=a.TOUCH_ZOOM_PAN;var t=e.touches[0].pageX-e.touches[1].pageX,n=e.touches[0].pageY-e.touches[1].pageY;f=v=Math.sqrt(t*t+n*n);var i=(e.touches[0].pageX+e.touches[1].pageX)/2,r=(e.touches[0].pageY+e.touches[1].pageY)/2;y.copy(j(i,r)),E.copy(y);break}o.dispatchEvent(M)}}function A(e){if(!1!==o.enabled)switch(e.preventDefault(),e.stopPropagation(),e.touches.length){case 1:d.copy(h),h.copy(x(e.touches[0].pageX,e.touches[0].pageY));break;default:var t=e.touches[0].pageX-e.touches[1].pageX,n=e.touches[0].pageY-e.touches[1].pageY;f=Math.sqrt(t*t+n*n);var a=(e.touches[0].pageX+e.touches[1].pageX)/2,i=(e.touches[0].pageY+e.touches[1].pageY)/2;E.copy(j(a,i));break}}function R(e){if(!1!==o.enabled){switch(e.touches.length){case 0:c=a.NONE;break;case 1:c=a.TOUCH_ROTATE,h.copy(x(e.touches[0].pageX,e.touches[0].pageY)),d.copy(h);break}o.dispatchEvent(O)}}function D(e){!1!==o.enabled&&e.preventDefault()}this.rotateCamera=function(){var e,t=new n["sb"],a=new n["cb"],i=new n["sb"],r=new n["sb"],s=new n["sb"],c=new n["sb"];return function(){c.set(h.x-d.x,h.y-d.y,0),e=c.length(),e?(u.copy(o.object.position).sub(o.target),i.copy(u).normalize(),r.copy(o.object.up).normalize(),s.crossVectors(r,i).normalize(),r.setLength(h.y-d.y),s.setLength(h.x-d.x),c.copy(r.add(s)),t.crossVectors(c,u).normalize(),e*=o.rotateSpeed,a.setFromAxisAngle(t,e),u.applyQuaternion(a),o.object.up.applyQuaternion(a),m.copy(t),l=e):!o.staticMoving&&l&&(l*=Math.sqrt(1-o.dynamicDampingFactor),u.copy(o.object.position).sub(o.target),a.setFromAxisAngle(m,l),u.applyQuaternion(a),o.object.up.applyQuaternion(a)),d.copy(h)}}(),this.zoomCamera=function(){var e;c===a.TOUCH_ZOOM_PAN?(e=v/f,v=f,o.object.isPerspectiveCamera?u.multiplyScalar(e):o.object.isOrthographicCamera?(o.object.zoom*=e,o.object.updateProjectionMatrix()):console.warn("THREE.TrackballControls: Unsupported camera type")):(e=1+(g.y-b.y)*o.zoomSpeed,1!==e&&e>0&&(o.object.isPerspectiveCamera?u.multiplyScalar(e):o.object.isOrthographicCamera?(o.object.zoom/=e,o.object.updateProjectionMatrix()):console.warn("THREE.TrackballControls: Unsupported camera type")),o.staticMoving?b.copy(g):b.y+=(g.y-b.y)*this.dynamicDampingFactor)},this.panCamera=function(){var e=new n["rb"],t=new n["sb"],a=new n["sb"];return function(){if(e.copy(E).sub(y),e.lengthSq()){if(o.object.isOrthographicCamera){var n=(o.object.right-o.object.left)/o.object.zoom/o.domElement.clientWidth,i=(o.object.top-o.object.bottom)/o.object.zoom/o.domElement.clientWidth;e.x*=n,e.y*=i}e.multiplyScalar(u.length()*o.panSpeed),a.copy(u).cross(o.object.up).setLength(e.x),a.add(t.copy(o.object.up).setLength(e.y)),o.object.position.add(a),o.target.add(a),o.staticMoving?y.copy(E):y.add(e.subVectors(E,y).multiplyScalar(o.dynamicDampingFactor))}}}(),this.checkDistances=function(){o.noZoom&&o.noPan||(u.lengthSq()>o.maxDistance*o.maxDistance&&(o.object.position.addVectors(o.target,u.setLength(o.maxDistance)),b.copy(g)),u.lengthSq()<o.minDistance*o.minDistance&&(o.object.position.addVectors(o.target,u.setLength(o.minDistance)),b.copy(g)))},this.update=function(){u.subVectors(o.object.position,o.target),o.noRotate||o.rotateCamera(),o.noZoom||o.zoomCamera(),o.noPan||o.panCamera(),o.object.position.addVectors(o.target,u),o.object.isPerspectiveCamera?(o.checkDistances(),o.object.lookAt(o.target),r.distanceToSquared(o.object.position)>i&&(o.dispatchEvent(w),r.copy(o.object.position))):o.object.isOrthographicCamera?(o.object.lookAt(o.target),(r.distanceToSquared(o.object.position)>i||s!==o.object.zoom)&&(o.dispatchEvent(w),r.copy(o.object.position),s=o.object.zoom)):console.warn("THREE.TrackballControls: Unsupported camera type")},this.reset=function(){c=a.NONE,p=a.NONE,o.target.copy(o.target0),o.object.position.copy(o.position0),o.object.up.copy(o.up0),o.object.zoom=o.zoom0,o.object.updateProjectionMatrix(),u.subVectors(o.object.position,o.target),o.object.lookAt(o.target),o.dispatchEvent(w),r.copy(o.object.position),s=o.object.zoom},this.dispose=function(){this.domElement.removeEventListener("contextmenu",D,!1),this.domElement.removeEventListener("mousedown",k,!1),this.domElement.removeEventListener("wheel",L,!1),this.domElement.removeEventListener("touchstart",P,!1),this.domElement.removeEventListener("touchend",R,!1),this.domElement.removeEventListener("touchmove",A,!1),document.removeEventListener("mousemove",z,!1),document.removeEventListener("mouseup",C,!1),window.removeEventListener("keydown",N,!1),window.removeEventListener("keyup",T,!1)},this.domElement.addEventListener("contextmenu",D,!1),this.domElement.addEventListener("mousedown",k,!1),this.domElement.addEventListener("wheel",L,!1),this.domElement.addEventListener("touchstart",P,!1),this.domElement.addEventListener("touchend",R,!1),this.domElement.addEventListener("touchmove",A,!1),window.addEventListener("keydown",N,!1),window.addEventListener("keyup",T,!1),this.handleResize(),this.update()};a.prototype=Object.create(n["m"].prototype),a.prototype.constructor=a},d545:function(e,t,o){"use strict";o("ac6a"),o("28a5"),o("c5f6");t["a"]={getPlusOrMinus:function(){var e=Math.random()-.5;return e<0?-1:1},getRandomInt:function(e){var t=Math.random()*e;return Number(t.toFixed(0))},solveQuadraticEquation:function(e,t,o){var n=Math.pow(t,2)-4*e*o;return n<0?[]:0===n?[t/2/e*-1]:[(-1*t+Math.sqrt(n))/2/e,(-1*t-Math.sqrt(n))/2/e]},VectorOperation:function(e,t,o){var n,a;return n="string"===typeof e?[Number(e.split(",")[0]),Number(e.split(",")[1])]:e,a="string"===typeof t?[Number(t.split(",")[0]),Number(t.split(",")[1])]:t,"+"===o?[a[0]+n[0],a[1]+n[1]]:"-"===o?[a[0]-n[0],a[1]-n[1]]:void 0},getNormalDistribution:function(e,t){var o=Number(e),n=Number(t),a=Math.random(),i=Math.random(),r=Math.sqrt(-2*Math.log(a)),s=2*Math.PI*i,c=r*Math.sin(s),p=o+c*n;return Number(p.toFixed(4))},getEuclideanDistance:function(e,t){var o=e.split(","),n=t.split(","),a=0;return o.forEach((function(e,t){var i=Math.pow(Number(o[t])-Number(n[t]),2);a+=i})),a=Math.sqrt(a),a},getMinkowskiDistance:function(e,t,o){var n=e.split(","),a=t.split(","),i=Number(o);if(i){var r=0;return n.forEach((function(e,t){var i=Math.abs(n[t]-a[t]);r+=Math.pow(i,o)})),r=Math.pow(r,1/o),r}if(0===i){var s=[];return n.forEach((function(e,t){var o=Math.abs(n[t]-a[t]);s.push(o)})),Math.max.apply(Math,s)}},getCosineSimilarity:function(e,t){var o=e.split(","),n=t.split(","),a=0,i=0,r=0;o.forEach((function(e,t){a+=o[t]*n[t],i+=Math.pow(o[t],2),r+=Math.pow(n[t],2)}));var s=a/(Math.sqrt(i)*Math.sqrt(r));return s}}},ed08:function(e,t,o){"use strict";o.d(t,"b",(function(){return n})),o.d(t,"a",(function(){return i})),o.d(t,"c",(function(){return r}));o("3b2b"),o("4917"),o("4f7f"),o("5df3"),o("1c4c"),o("28a5"),o("ac6a"),o("456d"),o("f576"),o("a481"),o("6b54"),o("7618");function n(){var e=Math.floor(256*Math.random()),t=Math.floor(256*Math.random()),o=Math.floor(256*Math.random());return"rgb(".concat(e,",").concat(t,",").concat(o,")")}function a(e,t){return!!e.className.match(new RegExp("(\\s|^)"+t+"(\\s|$)"))}function i(e,t){a(e,t)||(e.className+=" "+t)}function r(e,t){if(a(e,t)){var o=new RegExp("(\\s|^)"+t+"(\\s|$)");e.className=e.className.replace(o," ")}}}}]);