// Compiled by ClojureScript 1.7.170 {}
goog.provide('figwheel.connect');
goog.require('cljs.core');
goog.require('styx_client.core');
goog.require('figwheel.client');
goog.require('figwheel.client.utils');
figwheel.client.start.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"on-jsload","on-jsload",-395756602),(function() { 
var G__28910__delegate = function (x){
if(cljs.core.truth_(styx_client.core.mount_root)){
return cljs.core.apply.call(null,styx_client.core.mount_root,x);
} else {
return figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: :on-jsload hook 'styx-client.core/mount-root' is missing");
}
};
var G__28910 = function (var_args){
var x = null;
if (arguments.length > 0) {
var G__28911__i = 0, G__28911__a = new Array(arguments.length -  0);
while (G__28911__i < G__28911__a.length) {G__28911__a[G__28911__i] = arguments[G__28911__i + 0]; ++G__28911__i;}
  x = new cljs.core.IndexedSeq(G__28911__a,0);
} 
return G__28910__delegate.call(this,x);};
G__28910.cljs$lang$maxFixedArity = 0;
G__28910.cljs$lang$applyTo = (function (arglist__28912){
var x = cljs.core.seq(arglist__28912);
return G__28910__delegate(x);
});
G__28910.cljs$core$IFn$_invoke$arity$variadic = G__28910__delegate;
return G__28910;
})()
,new cljs.core.Keyword(null,"build-id","build-id",1642831089),"dev",new cljs.core.Keyword(null,"websocket-url","websocket-url",-490444938),"ws://localhost:3449/figwheel-ws"], null));

//# sourceMappingURL=connect.js.map?rel=1458225093024