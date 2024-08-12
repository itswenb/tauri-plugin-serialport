function e(e,t,a,n){return new(a||(a=Promise))((function(i,s){function r(e){try{l(n.next(e))}catch(e){s(e)}}function o(e){try{l(n.throw(e))}catch(e){s(e)}}function l(e){var t;e.done?i(e.value):(t=e.value,t instanceof a?t:new a((function(e){e(t)}))).then(r,o)}l((n=n.apply(e,t||[])).next())}))}function t(e,t){var a,n,i,s,r={label:0,sent:function(){if(1&i[0])throw i[1];return i[1]},trys:[],ops:[]};return s={next:o(0),throw:o(1),return:o(2)},"function"==typeof Symbol&&(s[Symbol.iterator]=function(){return this}),s;function o(o){return function(l){return function(o){if(a)throw new TypeError("Generator is already executing.");for(;s&&(s=0,o[0]&&(r=0)),r;)try{if(a=1,n&&(i=2&o[0]?n.return:o[0]?n.throw||((i=n.return)&&i.call(n),0):n.next)&&!(i=i.call(n,o[1])).done)return i;switch(n=0,i&&(o=[2&o[0],i.value]),o[0]){case 0:case 1:i=o;break;case 4:return r.label++,{value:o[1],done:!1};case 5:r.label++,n=o[1],o=[0];continue;case 7:o=r.ops.pop(),r.trys.pop();continue;default:if(!(i=r.trys,(i=i.length>0&&i[i.length-1])||6!==o[0]&&2!==o[0])){r=0;continue}if(3===o[0]&&(!i||o[1]>i[0]&&o[1]<i[3])){r.label=o[1];break}if(6===o[0]&&r.label<i[1]){r.label=i[1],i=o;break}if(i&&r.label<i[2]){r.label=i[2],r.ops.push(o);break}i[2]&&r.ops.pop(),r.trys.pop();continue}o=t.call(e,r)}catch(e){o=[6,e],n=0}finally{a=i=0}if(5&o[0])throw o[1];return{value:o[0]?o[1]:void 0,done:!0}}([o,l])}}}"function"==typeof SuppressedError&&SuppressedError;var a=Object.defineProperty,n=(e,t)=>{for(var n in t)a(e,n,{get:t[n],enumerable:!0})};function i(e,t=!1){let a=window.crypto.getRandomValues(new Uint32Array(1))[0],n=`_${a}`;return Object.defineProperty(window,n,{value:a=>(t&&Reflect.deleteProperty(window,n),e?.(a)),writable:!1,configurable:!0}),a}async function s(e,t={}){return new Promise(((a,n)=>{let s=i((e=>{a(e),Reflect.deleteProperty(window,`_${r}`)}),!0),r=i((e=>{n(e),Reflect.deleteProperty(window,`_${s}`)}),!0);window.__TAURI_IPC__({cmd:e,callback:s,error:r,...t})}))}function r(e,t="asset"){let a=encodeURIComponent(e);return navigator.userAgent.includes("Windows")?`https://${t}.localhost/${a}`:`${t}://localhost/${a}`}async function o(e){return s("tauri",e)}n({},{convertFileSrc:()=>r,invoke:()=>s,transformCallback:()=>i});async function l(e,t){return o({__tauriModule:"Event",message:{cmd:"unlisten",event:e,eventId:t}})}async function u(e,t,a){await o({__tauriModule:"Event",message:{cmd:"emit",event:e,windowLabel:t,payload:a}})}async function c(e,t,a){return o({__tauriModule:"Event",message:{cmd:"listen",event:e,windowLabel:t,handler:i(a)}}).then((t=>async()=>l(e,t)))}async function d(e,t,a){return c(e,t,(t=>{a(t),l(e,t.id).catch((()=>{}))}))}n({},{TauriEvent:()=>m,emit:()=>y,listen:()=>h,once:()=>p});var m=(e=>(e.WINDOW_RESIZED="tauri://resize",e.WINDOW_MOVED="tauri://move",e.WINDOW_CLOSE_REQUESTED="tauri://close-requested",e.WINDOW_CREATED="tauri://window-created",e.WINDOW_DESTROYED="tauri://destroyed",e.WINDOW_FOCUS="tauri://focus",e.WINDOW_BLUR="tauri://blur",e.WINDOW_SCALE_FACTOR_CHANGED="tauri://scale-change",e.WINDOW_THEME_CHANGED="tauri://theme-changed",e.WINDOW_FILE_DROP="tauri://file-drop",e.WINDOW_FILE_DROP_HOVER="tauri://file-drop-hover",e.WINDOW_FILE_DROP_CANCELLED="tauri://file-drop-cancelled",e.MENU="tauri://menu",e.CHECK_UPDATE="tauri://update",e.UPDATE_AVAILABLE="tauri://update-available",e.INSTALL_UPDATE="tauri://update-install",e.STATUS_UPDATE="tauri://update-status",e.DOWNLOAD_PROGRESS="tauri://update-download-progress",e))(m||{});async function h(e,t){return c(e,null,t)}async function p(e,t){return d(e,null,t)}async function y(e,t){return u(e,void 0,t)}n({},{CloseRequestedEvent:()=>A,LogicalPosition:()=>g,LogicalSize:()=>b,PhysicalPosition:()=>_,PhysicalSize:()=>w,UserAttentionType:()=>f,WebviewWindow:()=>D,WebviewWindowHandle:()=>z,WindowManager:()=>E,appWindow:()=>W,availableMonitors:()=>O,currentMonitor:()=>R,getAll:()=>M,getCurrent:()=>v,primaryMonitor:()=>L});var b=class{constructor(e,t){this.type="Logical",this.width=e,this.height=t}},w=class{constructor(e,t){this.type="Physical",this.width=e,this.height=t}toLogical(e){return new b(this.width/e,this.height/e)}},g=class{constructor(e,t){this.type="Logical",this.x=e,this.y=t}},_=class{constructor(e,t){this.type="Physical",this.x=e,this.y=t}toLogical(e){return new g(this.x/e,this.y/e)}},f=(e=>(e[e.Critical=1]="Critical",e[e.Informational=2]="Informational",e))(f||{});function v(){return new D(window.__TAURI_METADATA__.__currentWindow.label,{skip:!0})}function M(){return window.__TAURI_METADATA__.__windows.map((e=>new D(e.label,{skip:!0})))}var W,P=["tauri://created","tauri://error"],z=class{constructor(e){this.label=e,this.listeners=Object.create(null)}async listen(e,t){return this._handleTauriEvent(e,t)?Promise.resolve((()=>{let a=this.listeners[e];a.splice(a.indexOf(t),1)})):c(e,this.label,t)}async once(e,t){return this._handleTauriEvent(e,t)?Promise.resolve((()=>{let a=this.listeners[e];a.splice(a.indexOf(t),1)})):d(e,this.label,t)}async emit(e,t){if(P.includes(e)){for(let a of this.listeners[e]||[])a({event:e,id:-1,windowLabel:this.label,payload:t});return Promise.resolve()}return u(e,this.label,t)}_handleTauriEvent(e,t){return!!P.includes(e)&&(e in this.listeners?this.listeners[e].push(t):this.listeners[e]=[t],!0)}},E=class extends z{async scaleFactor(){return o({__tauriModule:"Window",message:{cmd:"manage",data:{label:this.label,cmd:{type:"scaleFactor"}}}})}async innerPosition(){return o({__tauriModule:"Window",message:{cmd:"manage",data:{label:this.label,cmd:{type:"innerPosition"}}}}).then((({x:e,y:t})=>new _(e,t)))}async outerPosition(){return o({__tauriModule:"Window",message:{cmd:"manage",data:{label:this.label,cmd:{type:"outerPosition"}}}}).then((({x:e,y:t})=>new _(e,t)))}async innerSize(){return o({__tauriModule:"Window",message:{cmd:"manage",data:{label:this.label,cmd:{type:"innerSize"}}}}).then((({width:e,height:t})=>new w(e,t)))}async outerSize(){return o({__tauriModule:"Window",message:{cmd:"manage",data:{label:this.label,cmd:{type:"outerSize"}}}}).then((({width:e,height:t})=>new w(e,t)))}async isFullscreen(){return o({__tauriModule:"Window",message:{cmd:"manage",data:{label:this.label,cmd:{type:"isFullscreen"}}}})}async isMinimized(){return o({__tauriModule:"Window",message:{cmd:"manage",data:{label:this.label,cmd:{type:"isMinimized"}}}})}async isMaximized(){return o({__tauriModule:"Window",message:{cmd:"manage",data:{label:this.label,cmd:{type:"isMaximized"}}}})}async isFocused(){return o({__tauriModule:"Window",message:{cmd:"manage",data:{label:this.label,cmd:{type:"isFocused"}}}})}async isDecorated(){return o({__tauriModule:"Window",message:{cmd:"manage",data:{label:this.label,cmd:{type:"isDecorated"}}}})}async isResizable(){return o({__tauriModule:"Window",message:{cmd:"manage",data:{label:this.label,cmd:{type:"isResizable"}}}})}async isMaximizable(){return o({__tauriModule:"Window",message:{cmd:"manage",data:{label:this.label,cmd:{type:"isMaximizable"}}}})}async isMinimizable(){return o({__tauriModule:"Window",message:{cmd:"manage",data:{label:this.label,cmd:{type:"isMinimizable"}}}})}async isClosable(){return o({__tauriModule:"Window",message:{cmd:"manage",data:{label:this.label,cmd:{type:"isClosable"}}}})}async isVisible(){return o({__tauriModule:"Window",message:{cmd:"manage",data:{label:this.label,cmd:{type:"isVisible"}}}})}async title(){return o({__tauriModule:"Window",message:{cmd:"manage",data:{label:this.label,cmd:{type:"title"}}}})}async theme(){return o({__tauriModule:"Window",message:{cmd:"manage",data:{label:this.label,cmd:{type:"theme"}}}})}async center(){return o({__tauriModule:"Window",message:{cmd:"manage",data:{label:this.label,cmd:{type:"center"}}}})}async requestUserAttention(e){let t=null;return e&&(t=1===e?{type:"Critical"}:{type:"Informational"}),o({__tauriModule:"Window",message:{cmd:"manage",data:{label:this.label,cmd:{type:"requestUserAttention",payload:t}}}})}async setResizable(e){return o({__tauriModule:"Window",message:{cmd:"manage",data:{label:this.label,cmd:{type:"setResizable",payload:e}}}})}async setMaximizable(e){return o({__tauriModule:"Window",message:{cmd:"manage",data:{label:this.label,cmd:{type:"setMaximizable",payload:e}}}})}async setMinimizable(e){return o({__tauriModule:"Window",message:{cmd:"manage",data:{label:this.label,cmd:{type:"setMinimizable",payload:e}}}})}async setClosable(e){return o({__tauriModule:"Window",message:{cmd:"manage",data:{label:this.label,cmd:{type:"setClosable",payload:e}}}})}async setTitle(e){return o({__tauriModule:"Window",message:{cmd:"manage",data:{label:this.label,cmd:{type:"setTitle",payload:e}}}})}async maximize(){return o({__tauriModule:"Window",message:{cmd:"manage",data:{label:this.label,cmd:{type:"maximize"}}}})}async unmaximize(){return o({__tauriModule:"Window",message:{cmd:"manage",data:{label:this.label,cmd:{type:"unmaximize"}}}})}async toggleMaximize(){return o({__tauriModule:"Window",message:{cmd:"manage",data:{label:this.label,cmd:{type:"toggleMaximize"}}}})}async minimize(){return o({__tauriModule:"Window",message:{cmd:"manage",data:{label:this.label,cmd:{type:"minimize"}}}})}async unminimize(){return o({__tauriModule:"Window",message:{cmd:"manage",data:{label:this.label,cmd:{type:"unminimize"}}}})}async show(){return o({__tauriModule:"Window",message:{cmd:"manage",data:{label:this.label,cmd:{type:"show"}}}})}async hide(){return o({__tauriModule:"Window",message:{cmd:"manage",data:{label:this.label,cmd:{type:"hide"}}}})}async close(){return o({__tauriModule:"Window",message:{cmd:"manage",data:{label:this.label,cmd:{type:"close"}}}})}async setDecorations(e){return o({__tauriModule:"Window",message:{cmd:"manage",data:{label:this.label,cmd:{type:"setDecorations",payload:e}}}})}async setAlwaysOnTop(e){return o({__tauriModule:"Window",message:{cmd:"manage",data:{label:this.label,cmd:{type:"setAlwaysOnTop",payload:e}}}})}async setContentProtected(e){return o({__tauriModule:"Window",message:{cmd:"manage",data:{label:this.label,cmd:{type:"setContentProtected",payload:e}}}})}async setSize(e){if(!e||"Logical"!==e.type&&"Physical"!==e.type)throw new Error("the `size` argument must be either a LogicalSize or a PhysicalSize instance");return o({__tauriModule:"Window",message:{cmd:"manage",data:{label:this.label,cmd:{type:"setSize",payload:{type:e.type,data:{width:e.width,height:e.height}}}}}})}async setMinSize(e){if(e&&"Logical"!==e.type&&"Physical"!==e.type)throw new Error("the `size` argument must be either a LogicalSize or a PhysicalSize instance");return o({__tauriModule:"Window",message:{cmd:"manage",data:{label:this.label,cmd:{type:"setMinSize",payload:e?{type:e.type,data:{width:e.width,height:e.height}}:null}}}})}async setMaxSize(e){if(e&&"Logical"!==e.type&&"Physical"!==e.type)throw new Error("the `size` argument must be either a LogicalSize or a PhysicalSize instance");return o({__tauriModule:"Window",message:{cmd:"manage",data:{label:this.label,cmd:{type:"setMaxSize",payload:e?{type:e.type,data:{width:e.width,height:e.height}}:null}}}})}async setPosition(e){if(!e||"Logical"!==e.type&&"Physical"!==e.type)throw new Error("the `position` argument must be either a LogicalPosition or a PhysicalPosition instance");return o({__tauriModule:"Window",message:{cmd:"manage",data:{label:this.label,cmd:{type:"setPosition",payload:{type:e.type,data:{x:e.x,y:e.y}}}}}})}async setFullscreen(e){return o({__tauriModule:"Window",message:{cmd:"manage",data:{label:this.label,cmd:{type:"setFullscreen",payload:e}}}})}async setFocus(){return o({__tauriModule:"Window",message:{cmd:"manage",data:{label:this.label,cmd:{type:"setFocus"}}}})}async setIcon(e){return o({__tauriModule:"Window",message:{cmd:"manage",data:{label:this.label,cmd:{type:"setIcon",payload:{icon:"string"==typeof e?e:Array.from(e)}}}}})}async setSkipTaskbar(e){return o({__tauriModule:"Window",message:{cmd:"manage",data:{label:this.label,cmd:{type:"setSkipTaskbar",payload:e}}}})}async setCursorGrab(e){return o({__tauriModule:"Window",message:{cmd:"manage",data:{label:this.label,cmd:{type:"setCursorGrab",payload:e}}}})}async setCursorVisible(e){return o({__tauriModule:"Window",message:{cmd:"manage",data:{label:this.label,cmd:{type:"setCursorVisible",payload:e}}}})}async setCursorIcon(e){return o({__tauriModule:"Window",message:{cmd:"manage",data:{label:this.label,cmd:{type:"setCursorIcon",payload:e}}}})}async setCursorPosition(e){if(!e||"Logical"!==e.type&&"Physical"!==e.type)throw new Error("the `position` argument must be either a LogicalPosition or a PhysicalPosition instance");return o({__tauriModule:"Window",message:{cmd:"manage",data:{label:this.label,cmd:{type:"setCursorPosition",payload:{type:e.type,data:{x:e.x,y:e.y}}}}}})}async setIgnoreCursorEvents(e){return o({__tauriModule:"Window",message:{cmd:"manage",data:{label:this.label,cmd:{type:"setIgnoreCursorEvents",payload:e}}}})}async startDragging(){return o({__tauriModule:"Window",message:{cmd:"manage",data:{label:this.label,cmd:{type:"startDragging"}}}})}async onResized(e){return this.listen("tauri://resize",(t=>{t.payload=N(t.payload),e(t)}))}async onMoved(e){return this.listen("tauri://move",(t=>{t.payload=T(t.payload),e(t)}))}async onCloseRequested(e){return this.listen("tauri://close-requested",(t=>{let a=new A(t);Promise.resolve(e(a)).then((()=>{if(!a.isPreventDefault())return this.close()}))}))}async onFocusChanged(e){let t=await this.listen("tauri://focus",(t=>{e({...t,payload:!0})})),a=await this.listen("tauri://blur",(t=>{e({...t,payload:!1})}));return()=>{t(),a()}}async onScaleChanged(e){return this.listen("tauri://scale-change",e)}async onMenuClicked(e){return this.listen("tauri://menu",e)}async onFileDropEvent(e){let t=await this.listen("tauri://file-drop",(t=>{e({...t,payload:{type:"drop",paths:t.payload}})})),a=await this.listen("tauri://file-drop-hover",(t=>{e({...t,payload:{type:"hover",paths:t.payload}})})),n=await this.listen("tauri://file-drop-cancelled",(t=>{e({...t,payload:{type:"cancel"}})}));return()=>{t(),a(),n()}}async onThemeChanged(e){return this.listen("tauri://theme-changed",e)}},A=class{constructor(e){this._preventDefault=!1,this.event=e.event,this.windowLabel=e.windowLabel,this.id=e.id}preventDefault(){this._preventDefault=!0}isPreventDefault(){return this._preventDefault}},D=class extends E{constructor(e,t={}){super(e),t?.skip||o({__tauriModule:"Window",message:{cmd:"createWebview",data:{options:{label:e,...t}}}}).then((async()=>this.emit("tauri://created"))).catch((async e=>this.emit("tauri://error",e)))}static getByLabel(e){return M().some((t=>t.label===e))?new D(e,{skip:!0}):null}static async getFocusedWindow(){for(let e of M())if(await e.isFocused())return e;return null}};function C(e){return null===e?null:{name:e.name,scaleFactor:e.scaleFactor,position:T(e.position),size:N(e.size)}}function T(e){return new _(e.x,e.y)}function N(e){return new w(e.width,e.height)}async function R(){return o({__tauriModule:"Window",message:{cmd:"manage",data:{cmd:{type:"currentMonitor"}}}}).then(C)}async function L(){return o({__tauriModule:"Window",message:{cmd:"manage",data:{cmd:{type:"primaryMonitor"}}}}).then(C)}async function O(){return o({__tauriModule:"Window",message:{cmd:"manage",data:{cmd:{type:"availableMonitors"}}}}).then((e=>e.map(C)))}"__TAURI_METADATA__"in window?W=new D(window.__TAURI_METADATA__.__currentWindow.label,{skip:!0}):(console.warn('Could not find "window.__TAURI_METADATA__". The "appWindow" value will reference the "main" window label.\nNote that this is not an issue if running this frontend on a browser instead of a Tauri window.'),W=new D("main",{skip:!0}));var S=function(){function a(e){this.isOpen=!1,this.encoding=e.encoding||"utf-8",this.options={portName:e.portName,baudRate:e.baudRate,dataBits:e.dataBits||8,flowControl:e.flowControl||null,parity:e.parity||null,stopBits:e.stopBits||2,timeout:e.timeout||200},this.size=e.size||1024}return a.available_ports=function(){return e(this,void 0,void 0,(function(){var e;return t(this,(function(t){switch(t.label){case 0:return t.trys.push([0,2,,3]),[4,s("plugin:serialport|available_ports")];case 1:return[2,t.sent()];case 2:return e=t.sent(),[2,Promise.reject(e)];case 3:return[2]}}))}))},a.forceClose=function(a){return e(this,void 0,void 0,(function(){return t(this,(function(e){switch(e.label){case 0:return[4,s("plugin:serialport|force_close",{portName:a})];case 1:return[2,e.sent()]}}))}))},a.closeAll=function(){return e(this,void 0,void 0,(function(){return t(this,(function(e){switch(e.label){case 0:return[4,s("plugin:serialport|close_all")];case 1:return[2,e.sent()]}}))}))},a.prototype.cancelListen=function(){return e(this,void 0,void 0,(function(){return t(this,(function(e){try{return this.unListen&&(this.unListen(),this.unListen=void 0),[2]}catch(e){return[2,Promise.reject("Failed to cancel serial monitoring: "+e)]}return[2]}))}))},a.prototype.cancelRead=function(){return e(this,void 0,void 0,(function(){var e;return t(this,(function(t){switch(t.label){case 0:return t.trys.push([0,2,,3]),[4,s("plugin:serialport|cancel_read",{portName:this.options.portName})];case 1:return[2,t.sent()];case 2:return e=t.sent(),[2,Promise.reject(e)];case 3:return[2]}}))}))},a.prototype.change=function(a){return e(this,void 0,void 0,(function(){var e,n;return t(this,(function(t){switch(t.label){case 0:return t.trys.push([0,5,,6]),e=!1,this.isOpen?(e=!0,[4,this.close()]):[3,2];case 1:t.sent(),t.label=2;case 2:return a.portName&&(this.options.portName=a.portName),a.baudRate&&(this.options.baudRate=a.baudRate),e?[4,this.open()]:[3,4];case 3:t.sent(),t.label=4;case 4:return[2,Promise.resolve()];case 5:return n=t.sent(),[2,Promise.reject(n)];case 6:return[2]}}))}))},a.prototype.close=function(){return e(this,void 0,void 0,(function(){var e,a;return t(this,(function(t){switch(t.label){case 0:return t.trys.push([0,4,,5]),this.isOpen?[4,this.cancelRead()]:[2];case 1:return t.sent(),[4,s("plugin:serialport|close",{portName:this.options.portName})];case 2:return e=t.sent(),[4,this.cancelListen()];case 3:return t.sent(),this.isOpen=!1,[2,e];case 4:return a=t.sent(),[2,Promise.reject(a)];case 5:return[2]}}))}))},a.prototype.listen=function(a,n){return void 0===n&&(n=!0),e(this,void 0,void 0,(function(){var e,i,s,r=this;return t(this,(function(t){switch(t.label){case 0:return t.trys.push([0,3,,4]),[4,this.cancelListen()];case 1:return t.sent(),e="plugin-serialport-read-"+this.options.portName.replace('.', '_'),i=this,[4,W.listen(e,(function(e){var t=e.payload;try{if(n){var i=new TextDecoder(r.encoding).decode(new Uint8Array(t.data));a(i)}else a(new Uint8Array(t.data))}catch(e){console.error(e)}}))];case 2:return i.unListen=t.sent(),[2];case 3:return s=t.sent(),[2,Promise.reject("Failed to monitor serial port data: "+s)];case 4:return[2]}}))}))},a.prototype.open=function(){return e(this,void 0,void 0,(function(){var e,a;return t(this,(function(t){switch(t.label){case 0:return t.trys.push([0,2,,3]),this.options.portName?this.options.baudRate?this.isOpen?[2]:[4,s("plugin:serialport|open",{portName:this.options.portName,baudRate:this.options.baudRate,dataBits:this.options.dataBits,flowControl:this.options.flowControl,parity:this.options.parity,stopBits:this.options.stopBits,timeout:this.options.timeout})]:[2,Promise.reject("BaudRate can not be empty!")]:[2,Promise.reject("Port name can not be empty!")];case 1:return e=t.sent(),this.isOpen=!0,[2,Promise.resolve(e)];case 2:return a=t.sent(),[2,Promise.reject(a)];case 3:return[2]}}))}))},a.prototype.read=function(a){return e(this,void 0,void 0,(function(){var e;return t(this,(function(t){switch(t.label){case 0:return t.trys.push([0,2,,3]),[4,s("plugin:serialport|read",{portName:this.options.portName,timeout:(null==a?void 0:a.timeout)||this.options.timeout,size:(null==a?void 0:a.size)||this.size})];case 1:return[2,t.sent()];case 2:return e=t.sent(),[2,Promise.reject(e)];case 3:return[2]}}))}))},a.prototype.setBaudRate=function(a){return e(this,void 0,void 0,(function(){var e,n;return t(this,(function(t){switch(t.label){case 0:return t.trys.push([0,5,,6]),e=!1,this.isOpen?(e=!0,[4,this.close()]):[3,2];case 1:t.sent(),t.label=2;case 2:return this.options.baudRate=a,e?[4,this.open()]:[3,4];case 3:t.sent(),t.label=4;case 4:return[2,Promise.resolve()];case 5:return n=t.sent(),[2,Promise.reject(n)];case 6:return[2]}}))}))},a.prototype.setPortName=function(a){return e(this,void 0,void 0,(function(){var e,n;return t(this,(function(t){switch(t.label){case 0:return t.trys.push([0,5,,6]),e=!1,this.isOpen?(e=!0,[4,this.close()]):[3,2];case 1:t.sent(),t.label=2;case 2:return this.options.portName=a,e?[4,this.open()]:[3,4];case 3:t.sent(),t.label=4;case 4:return[2,Promise.resolve()];case 5:return n=t.sent(),[2,Promise.reject(n)];case 6:return[2]}}))}))},a.prototype.write=function(a){return e(this,void 0,void 0,(function(){var e;return t(this,(function(t){switch(t.label){case 0:return t.trys.push([0,2,,3]),this.isOpen?[4,s("plugin:serialport|write",{value:a,portName:this.options.portName})]:[2,Promise.reject("Serial port ".concat(this.options.portName," not opened!"))];case 1:return[2,t.sent()];case 2:return e=t.sent(),[2,Promise.reject(e)];case 3:return[2]}}))}))},a.prototype.writeBinary=function(a){return e(this,void 0,void 0,(function(){var e;return t(this,(function(t){switch(t.label){case 0:return t.trys.push([0,4,,5]),this.isOpen?a instanceof Uint8Array||a instanceof Array?[4,s("plugin:serialport|write_binary",{value:Array.from(a),portName:this.options.portName})]:[3,2]:[2,Promise.reject("Serial port ".concat(this.options.portName," not opened!"))];case 1:return[2,t.sent()];case 2:return[2,Promise.reject("value type not admitted! Expected type: string, Uint8Array, number[]")];case 3:return[3,5];case 4:return e=t.sent(),[2,Promise.reject(e)];case 5:return[2]}}))}))},a}();export{S as Serialport};
