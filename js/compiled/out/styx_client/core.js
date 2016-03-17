// Compiled by ClojureScript 1.7.170 {}
goog.provide('styx_client.core');
goog.require('cljs.core');
goog.require('reagent.core');
goog.require('styx_client.subs');
goog.require('styx_client.views');
goog.require('styx_client.handlers');
goog.require('styx_client.config');
goog.require('re_frame.core');
if(cljs.core.truth_(styx_client.config.debug_QMARK_)){
cljs.core.println.call(null,"dev mode");
} else {
}
styx_client.core.mount_root = (function styx_client$core$mount_root(){
return reagent.core.render.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [styx_client.views.main_panel], null),document.getElementById("app"));
});
styx_client.core.init = (function styx_client$core$init(){
re_frame.core.dispatch_sync.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"initialize-db","initialize-db",230998432)], null));

return styx_client.core.mount_root.call(null);
});
goog.exportSymbol('styx_client.core.init', styx_client.core.init);

//# sourceMappingURL=core.js.map?rel=1458225092993