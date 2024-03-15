if("__TAURI__"in window){var __TAURI_PLUGIN_NOTIFICATION__=function(e){"use strict";function n(e,n,i,t){if("a"===i&&!t)throw new TypeError("Private accessor was defined without a getter");if("function"==typeof n?e!==n||!t:!n.has(e))throw new TypeError("Cannot read private member from an object whose class did not declare it");return"m"===i?t:"a"===i?t.call(e):t?t.value:n.get(e)}function i(e,n,i,t,o){if("m"===t)throw new TypeError("Private method is not writable");if("a"===t&&!o)throw new TypeError("Private accessor was defined without a setter");if("function"==typeof n?e!==n||!o:!n.has(e))throw new TypeError("Cannot write private member to an object whose class did not declare it");return"a"===t?o.call(e,i):o?o.value=i:n.set(e,i),i}var t,o,r,a,c,s;"function"==typeof SuppressedError&&SuppressedError;class l{constructor(){this.__TAURI_CHANNEL_MARKER__=!0,t.set(this,(()=>{})),o.set(this,0),r.set(this,{}),this.id=function(e,n=!1){return window.__TAURI_INTERNALS__.transformCallback(e,n)}((({message:e,id:a})=>{if(a===n(this,o,"f")){i(this,o,a+1,"f"),n(this,t,"f").call(this,e);const c=Object.keys(n(this,r,"f"));if(c.length>0){let e=a+1;for(const i of c.sort()){if(parseInt(i)!==e)break;{const o=n(this,r,"f")[i];delete n(this,r,"f")[i],n(this,t,"f").call(this,o),e+=1}}}}else n(this,r,"f")[a.toString()]=e}))}set onmessage(e){i(this,t,e,"f")}get onmessage(){return n(this,t,"f")}toJSON(){return`__CHANNEL__:${this.id}`}}t=new WeakMap,o=new WeakMap,r=new WeakMap;class u{constructor(e,n,i){this.plugin=e,this.event=n,this.channelId=i}async unregister(){return d(`plugin:${this.plugin}|remove_listener`,{event:this.event,channelId:this.channelId})}}async function f(e,n,i){const t=new l;return t.onmessage=i,d(`plugin:${e}|register_listener`,{event:n,handler:t}).then((()=>new u(e,n,t.id)))}async function d(e,n={},i){return window.__TAURI_INTERNALS__.invoke(e,n,i)}e.ScheduleEvery=void 0,(a=e.ScheduleEvery||(e.ScheduleEvery={})).Year="year",a.Month="month",a.TwoWeeks="twoWeeks",a.Week="week",a.Day="day",a.Hour="hour",a.Minute="minute",a.Second="second";return e.Importance=void 0,(c=e.Importance||(e.Importance={}))[c.None=0]="None",c[c.Min=1]="Min",c[c.Low=2]="Low",c[c.Default=3]="Default",c[c.High=4]="High",e.Visibility=void 0,(s=e.Visibility||(e.Visibility={}))[s.Secret=-1]="Secret",s[s.Private=0]="Private",s[s.Public=1]="Public",e.Schedule=class{static at(e,n=!1,i=!1){return{at:{date:e,repeating:n,allowWhileIdle:i},interval:void 0,every:void 0}}static interval(e,n=!1){return{at:void 0,interval:{interval:e,allowWhileIdle:n},every:void 0}}static every(e,n,i=!1){return{at:void 0,interval:void 0,every:{interval:e,count:n,allowWhileIdle:i}}}},e.active=async function(){return d("plugin:notification|get_active")},e.cancel=async function(e){return d("plugin:notification|cancel",{notifications:e})},e.cancelAll=async function(){return d("plugin:notification|cancel")},e.channels=async function(){return d("plugin:notification|listChannels")},e.createChannel=async function(e){return d("plugin:notification|create_channel",{...e})},e.isPermissionGranted=async function(){return"default"!==window.Notification.permission?Promise.resolve("granted"===window.Notification.permission):d("plugin:notification|is_permission_granted")},e.onAction=async function(e){return f("notification","actionPerformed",e)},e.onNotificationReceived=async function(e){return f("notification","notification",e)},e.pending=async function(){return d("plugin:notification|get_pending")},e.registerActionTypes=async function(e){return d("plugin:notification|register_action_types",{types:e})},e.removeActive=async function(e){return d("plugin:notification|remove_active",{notifications:e})},e.removeAllActive=async function(){return d("plugin:notification|remove_active")},e.removeChannel=async function(e){return d("plugin:notification|delete_channel",{id:e})},e.requestPermission=async function(){return window.Notification.requestPermission()},e.sendNotification=function(e){"string"==typeof e?new window.Notification(e):new window.Notification(e.title,e)},e}({});Object.defineProperty(window.__TAURI__,"notification",{value:__TAURI_PLUGIN_NOTIFICATION__})}
