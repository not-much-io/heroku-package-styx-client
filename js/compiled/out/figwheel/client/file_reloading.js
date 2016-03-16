// Compiled by ClojureScript 1.7.170 {}
goog.provide('figwheel.client.file_reloading');
goog.require('cljs.core');
goog.require('goog.string');
goog.require('goog.Uri');
goog.require('goog.net.jsloader');
goog.require('cljs.core.async');
goog.require('goog.object');
goog.require('clojure.set');
goog.require('clojure.string');
goog.require('figwheel.client.utils');
figwheel.client.file_reloading.queued_file_reload;
if(typeof figwheel.client.file_reloading.figwheel_meta_pragmas !== 'undefined'){
} else {
figwheel.client.file_reloading.figwheel_meta_pragmas = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
}
figwheel.client.file_reloading.on_jsload_custom_event = (function figwheel$client$file_reloading$on_jsload_custom_event(url){
return figwheel.client.utils.dispatch_custom_event.call(null,"figwheel.js-reload",url);
});
figwheel.client.file_reloading.before_jsload_custom_event = (function figwheel$client$file_reloading$before_jsload_custom_event(files){
return figwheel.client.utils.dispatch_custom_event.call(null,"figwheel.before-js-reload",files);
});
figwheel.client.file_reloading.namespace_file_map_QMARK_ = (function figwheel$client$file_reloading$namespace_file_map_QMARK_(m){
var or__16840__auto__ = (cljs.core.map_QMARK_.call(null,m)) && (typeof new cljs.core.Keyword(null,"namespace","namespace",-377510372).cljs$core$IFn$_invoke$arity$1(m) === 'string') && (((new cljs.core.Keyword(null,"file","file",-1269645878).cljs$core$IFn$_invoke$arity$1(m) == null)) || (typeof new cljs.core.Keyword(null,"file","file",-1269645878).cljs$core$IFn$_invoke$arity$1(m) === 'string')) && (cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"type","type",1174270348).cljs$core$IFn$_invoke$arity$1(m),new cljs.core.Keyword(null,"namespace","namespace",-377510372)));
if(or__16840__auto__){
return or__16840__auto__;
} else {
cljs.core.println.call(null,"Error not namespace-file-map",cljs.core.pr_str.call(null,m));

return false;
}
});
figwheel.client.file_reloading.add_cache_buster = (function figwheel$client$file_reloading$add_cache_buster(url){

return goog.Uri.parse(url).makeUnique();
});
figwheel.client.file_reloading.name__GT_path = (function figwheel$client$file_reloading$name__GT_path(ns){

return (goog.dependencies_.nameToPath[ns]);
});
figwheel.client.file_reloading.provided_QMARK_ = (function figwheel$client$file_reloading$provided_QMARK_(ns){
return (goog.dependencies_.written[figwheel.client.file_reloading.name__GT_path.call(null,ns)]);
});
figwheel.client.file_reloading.fix_node_request_url = (function figwheel$client$file_reloading$fix_node_request_url(url){

if(cljs.core.truth_(goog.string.startsWith(url,"../"))){
return clojure.string.replace.call(null,url,"../","");
} else {
return [cljs.core.str("goog/"),cljs.core.str(url)].join('');
}
});
figwheel.client.file_reloading.immutable_ns_QMARK_ = (function figwheel$client$file_reloading$immutable_ns_QMARK_(name){
var or__16840__auto__ = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 9, ["svgpan.SvgPan",null,"far.out",null,"testDep.bar",null,"someprotopackage.TestPackageTypes",null,"goog",null,"an.existing.path",null,"cljs.core",null,"ns",null,"dup.base",null], null), null).call(null,name);
if(cljs.core.truth_(or__16840__auto__)){
return or__16840__auto__;
} else {
return cljs.core.some.call(null,cljs.core.partial.call(null,goog.string.startsWith,name),new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, ["goog.","cljs.","clojure.","fake.","proto2."], null));
}
});
figwheel.client.file_reloading.get_requires = (function figwheel$client$file_reloading$get_requires(ns){
return cljs.core.set.call(null,cljs.core.filter.call(null,(function (p1__22529_SHARP_){
return cljs.core.not.call(null,figwheel.client.file_reloading.immutable_ns_QMARK_.call(null,p1__22529_SHARP_));
}),goog.object.getKeys((goog.dependencies_.requires[figwheel.client.file_reloading.name__GT_path.call(null,ns)]))));
});
if(typeof figwheel.client.file_reloading.dependency_data !== 'undefined'){
} else {
figwheel.client.file_reloading.dependency_data = cljs.core.atom.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"pathToName","pathToName",-1236616181),cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"dependents","dependents",136812837),cljs.core.PersistentArrayMap.EMPTY], null));
}
figwheel.client.file_reloading.path_to_name_BANG_ = (function figwheel$client$file_reloading$path_to_name_BANG_(path,name){
return cljs.core.swap_BANG_.call(null,figwheel.client.file_reloading.dependency_data,cljs.core.update_in,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"pathToName","pathToName",-1236616181),path], null),cljs.core.fnil.call(null,clojure.set.union,cljs.core.PersistentHashSet.EMPTY),cljs.core.PersistentHashSet.fromArray([name], true));
});
/**
 * Setup a path to name dependencies map.
 * That goes from path -> #{ ns-names }
 */
figwheel.client.file_reloading.setup_path__GT_name_BANG_ = (function figwheel$client$file_reloading$setup_path__GT_name_BANG_(){
var nameToPath = goog.object.filter(goog.dependencies_.nameToPath,(function (v,k,o){
return goog.string.startsWith(v,"../");
}));
return goog.object.forEach(nameToPath,((function (nameToPath){
return (function (v,k,o){
return figwheel.client.file_reloading.path_to_name_BANG_.call(null,v,k);
});})(nameToPath))
);
});
/**
 * returns a set of namespaces defined by a path
 */
figwheel.client.file_reloading.path__GT_name = (function figwheel$client$file_reloading$path__GT_name(path){
return cljs.core.get_in.call(null,cljs.core.deref.call(null,figwheel.client.file_reloading.dependency_data),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"pathToName","pathToName",-1236616181),path], null));
});
figwheel.client.file_reloading.name_to_parent_BANG_ = (function figwheel$client$file_reloading$name_to_parent_BANG_(ns,parent_ns){
return cljs.core.swap_BANG_.call(null,figwheel.client.file_reloading.dependency_data,cljs.core.update_in,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"dependents","dependents",136812837),ns], null),cljs.core.fnil.call(null,clojure.set.union,cljs.core.PersistentHashSet.EMPTY),cljs.core.PersistentHashSet.fromArray([parent_ns], true));
});
/**
 * This reverses the goog.dependencies_.requires for looking up ns-dependents.
 */
figwheel.client.file_reloading.setup_ns__GT_dependents_BANG_ = (function figwheel$client$file_reloading$setup_ns__GT_dependents_BANG_(){
var requires = goog.object.filter(goog.dependencies_.requires,(function (v,k,o){
return goog.string.startsWith(k,"../");
}));
return goog.object.forEach(requires,((function (requires){
return (function (v,k,_){
return goog.object.forEach(v,((function (requires){
return (function (v_SINGLEQUOTE_,k_SINGLEQUOTE_,___$1){
var seq__22534 = cljs.core.seq.call(null,figwheel.client.file_reloading.path__GT_name.call(null,k));
var chunk__22535 = null;
var count__22536 = (0);
var i__22537 = (0);
while(true){
if((i__22537 < count__22536)){
var n = cljs.core._nth.call(null,chunk__22535,i__22537);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,k_SINGLEQUOTE_,n);

var G__22538 = seq__22534;
var G__22539 = chunk__22535;
var G__22540 = count__22536;
var G__22541 = (i__22537 + (1));
seq__22534 = G__22538;
chunk__22535 = G__22539;
count__22536 = G__22540;
i__22537 = G__22541;
continue;
} else {
var temp__4425__auto__ = cljs.core.seq.call(null,seq__22534);
if(temp__4425__auto__){
var seq__22534__$1 = temp__4425__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__22534__$1)){
var c__17643__auto__ = cljs.core.chunk_first.call(null,seq__22534__$1);
var G__22542 = cljs.core.chunk_rest.call(null,seq__22534__$1);
var G__22543 = c__17643__auto__;
var G__22544 = cljs.core.count.call(null,c__17643__auto__);
var G__22545 = (0);
seq__22534 = G__22542;
chunk__22535 = G__22543;
count__22536 = G__22544;
i__22537 = G__22545;
continue;
} else {
var n = cljs.core.first.call(null,seq__22534__$1);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,k_SINGLEQUOTE_,n);

var G__22546 = cljs.core.next.call(null,seq__22534__$1);
var G__22547 = null;
var G__22548 = (0);
var G__22549 = (0);
seq__22534 = G__22546;
chunk__22535 = G__22547;
count__22536 = G__22548;
i__22537 = G__22549;
continue;
}
} else {
return null;
}
}
break;
}
});})(requires))
);
});})(requires))
);
});
figwheel.client.file_reloading.ns__GT_dependents = (function figwheel$client$file_reloading$ns__GT_dependents(ns){
return cljs.core.get_in.call(null,cljs.core.deref.call(null,figwheel.client.file_reloading.dependency_data),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"dependents","dependents",136812837),ns], null));
});
figwheel.client.file_reloading.build_topo_sort = (function figwheel$client$file_reloading$build_topo_sort(get_deps){
var get_deps__$1 = cljs.core.memoize.call(null,get_deps);
var topo_sort_helper_STAR_ = ((function (get_deps__$1){
return (function figwheel$client$file_reloading$build_topo_sort_$_topo_sort_helper_STAR_(x,depth,state){
var deps = get_deps__$1.call(null,x);
if(cljs.core.empty_QMARK_.call(null,deps)){
return null;
} else {
return topo_sort_STAR_.call(null,deps,depth,state);
}
});})(get_deps__$1))
;
var topo_sort_STAR_ = ((function (get_deps__$1){
return (function() {
var figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR_ = null;
var figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR___1 = (function (deps){
return figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR_.call(null,deps,(0),cljs.core.atom.call(null,cljs.core.sorted_map.call(null)));
});
var figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR___3 = (function (deps,depth,state){
cljs.core.swap_BANG_.call(null,state,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [depth], null),cljs.core.fnil.call(null,cljs.core.into,cljs.core.PersistentHashSet.EMPTY),deps);

var seq__22588_22595 = cljs.core.seq.call(null,deps);
var chunk__22589_22596 = null;
var count__22590_22597 = (0);
var i__22591_22598 = (0);
while(true){
if((i__22591_22598 < count__22590_22597)){
var dep_22599 = cljs.core._nth.call(null,chunk__22589_22596,i__22591_22598);
topo_sort_helper_STAR_.call(null,dep_22599,(depth + (1)),state);

var G__22600 = seq__22588_22595;
var G__22601 = chunk__22589_22596;
var G__22602 = count__22590_22597;
var G__22603 = (i__22591_22598 + (1));
seq__22588_22595 = G__22600;
chunk__22589_22596 = G__22601;
count__22590_22597 = G__22602;
i__22591_22598 = G__22603;
continue;
} else {
var temp__4425__auto___22604 = cljs.core.seq.call(null,seq__22588_22595);
if(temp__4425__auto___22604){
var seq__22588_22605__$1 = temp__4425__auto___22604;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__22588_22605__$1)){
var c__17643__auto___22606 = cljs.core.chunk_first.call(null,seq__22588_22605__$1);
var G__22607 = cljs.core.chunk_rest.call(null,seq__22588_22605__$1);
var G__22608 = c__17643__auto___22606;
var G__22609 = cljs.core.count.call(null,c__17643__auto___22606);
var G__22610 = (0);
seq__22588_22595 = G__22607;
chunk__22589_22596 = G__22608;
count__22590_22597 = G__22609;
i__22591_22598 = G__22610;
continue;
} else {
var dep_22611 = cljs.core.first.call(null,seq__22588_22605__$1);
topo_sort_helper_STAR_.call(null,dep_22611,(depth + (1)),state);

var G__22612 = cljs.core.next.call(null,seq__22588_22605__$1);
var G__22613 = null;
var G__22614 = (0);
var G__22615 = (0);
seq__22588_22595 = G__22612;
chunk__22589_22596 = G__22613;
count__22590_22597 = G__22614;
i__22591_22598 = G__22615;
continue;
}
} else {
}
}
break;
}

if(cljs.core._EQ_.call(null,depth,(0))){
return elim_dups_STAR_.call(null,cljs.core.reverse.call(null,cljs.core.vals.call(null,cljs.core.deref.call(null,state))));
} else {
return null;
}
});
figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR_ = function(deps,depth,state){
switch(arguments.length){
case 1:
return figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR___1.call(this,deps);
case 3:
return figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR___3.call(this,deps,depth,state);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR_.cljs$core$IFn$_invoke$arity$1 = figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR___1;
figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR_.cljs$core$IFn$_invoke$arity$3 = figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR___3;
return figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR_;
})()
;})(get_deps__$1))
;
var elim_dups_STAR_ = ((function (get_deps__$1){
return (function figwheel$client$file_reloading$build_topo_sort_$_elim_dups_STAR_(p__22592){
var vec__22594 = p__22592;
var x = cljs.core.nth.call(null,vec__22594,(0),null);
var xs = cljs.core.nthnext.call(null,vec__22594,(1));
if((x == null)){
return cljs.core.List.EMPTY;
} else {
return cljs.core.cons.call(null,x,figwheel$client$file_reloading$build_topo_sort_$_elim_dups_STAR_.call(null,cljs.core.map.call(null,((function (vec__22594,x,xs,get_deps__$1){
return (function (p1__22550_SHARP_){
return clojure.set.difference.call(null,p1__22550_SHARP_,x);
});})(vec__22594,x,xs,get_deps__$1))
,xs)));
}
});})(get_deps__$1))
;
return topo_sort_STAR_;
});
figwheel.client.file_reloading.get_all_dependencies = (function figwheel$client$file_reloading$get_all_dependencies(ns){
var topo_sort_SINGLEQUOTE_ = figwheel.client.file_reloading.build_topo_sort.call(null,figwheel.client.file_reloading.get_requires);
return cljs.core.apply.call(null,cljs.core.concat,topo_sort_SINGLEQUOTE_.call(null,cljs.core.set.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [ns], null))));
});
figwheel.client.file_reloading.get_all_dependents = (function figwheel$client$file_reloading$get_all_dependents(nss){
var topo_sort_SINGLEQUOTE_ = figwheel.client.file_reloading.build_topo_sort.call(null,figwheel.client.file_reloading.ns__GT_dependents);
return cljs.core.reverse.call(null,cljs.core.apply.call(null,cljs.core.concat,topo_sort_SINGLEQUOTE_.call(null,cljs.core.set.call(null,nss))));
});
figwheel.client.file_reloading.unprovide_BANG_ = (function figwheel$client$file_reloading$unprovide_BANG_(ns){
var path = figwheel.client.file_reloading.name__GT_path.call(null,ns);
goog.object.remove(goog.dependencies_.visited,path);

goog.object.remove(goog.dependencies_.written,path);

return goog.object.remove(goog.dependencies_.written,[cljs.core.str(goog.basePath),cljs.core.str(path)].join(''));
});
figwheel.client.file_reloading.resolve_ns = (function figwheel$client$file_reloading$resolve_ns(ns){
return [cljs.core.str(goog.basePath),cljs.core.str(figwheel.client.file_reloading.name__GT_path.call(null,ns))].join('');
});
figwheel.client.file_reloading.addDependency = (function figwheel$client$file_reloading$addDependency(path,provides,requires){
var seq__22628 = cljs.core.seq.call(null,provides);
var chunk__22629 = null;
var count__22630 = (0);
var i__22631 = (0);
while(true){
if((i__22631 < count__22630)){
var prov = cljs.core._nth.call(null,chunk__22629,i__22631);
figwheel.client.file_reloading.path_to_name_BANG_.call(null,path,prov);

var seq__22632_22640 = cljs.core.seq.call(null,requires);
var chunk__22633_22641 = null;
var count__22634_22642 = (0);
var i__22635_22643 = (0);
while(true){
if((i__22635_22643 < count__22634_22642)){
var req_22644 = cljs.core._nth.call(null,chunk__22633_22641,i__22635_22643);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,req_22644,prov);

var G__22645 = seq__22632_22640;
var G__22646 = chunk__22633_22641;
var G__22647 = count__22634_22642;
var G__22648 = (i__22635_22643 + (1));
seq__22632_22640 = G__22645;
chunk__22633_22641 = G__22646;
count__22634_22642 = G__22647;
i__22635_22643 = G__22648;
continue;
} else {
var temp__4425__auto___22649 = cljs.core.seq.call(null,seq__22632_22640);
if(temp__4425__auto___22649){
var seq__22632_22650__$1 = temp__4425__auto___22649;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__22632_22650__$1)){
var c__17643__auto___22651 = cljs.core.chunk_first.call(null,seq__22632_22650__$1);
var G__22652 = cljs.core.chunk_rest.call(null,seq__22632_22650__$1);
var G__22653 = c__17643__auto___22651;
var G__22654 = cljs.core.count.call(null,c__17643__auto___22651);
var G__22655 = (0);
seq__22632_22640 = G__22652;
chunk__22633_22641 = G__22653;
count__22634_22642 = G__22654;
i__22635_22643 = G__22655;
continue;
} else {
var req_22656 = cljs.core.first.call(null,seq__22632_22650__$1);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,req_22656,prov);

var G__22657 = cljs.core.next.call(null,seq__22632_22650__$1);
var G__22658 = null;
var G__22659 = (0);
var G__22660 = (0);
seq__22632_22640 = G__22657;
chunk__22633_22641 = G__22658;
count__22634_22642 = G__22659;
i__22635_22643 = G__22660;
continue;
}
} else {
}
}
break;
}

var G__22661 = seq__22628;
var G__22662 = chunk__22629;
var G__22663 = count__22630;
var G__22664 = (i__22631 + (1));
seq__22628 = G__22661;
chunk__22629 = G__22662;
count__22630 = G__22663;
i__22631 = G__22664;
continue;
} else {
var temp__4425__auto__ = cljs.core.seq.call(null,seq__22628);
if(temp__4425__auto__){
var seq__22628__$1 = temp__4425__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__22628__$1)){
var c__17643__auto__ = cljs.core.chunk_first.call(null,seq__22628__$1);
var G__22665 = cljs.core.chunk_rest.call(null,seq__22628__$1);
var G__22666 = c__17643__auto__;
var G__22667 = cljs.core.count.call(null,c__17643__auto__);
var G__22668 = (0);
seq__22628 = G__22665;
chunk__22629 = G__22666;
count__22630 = G__22667;
i__22631 = G__22668;
continue;
} else {
var prov = cljs.core.first.call(null,seq__22628__$1);
figwheel.client.file_reloading.path_to_name_BANG_.call(null,path,prov);

var seq__22636_22669 = cljs.core.seq.call(null,requires);
var chunk__22637_22670 = null;
var count__22638_22671 = (0);
var i__22639_22672 = (0);
while(true){
if((i__22639_22672 < count__22638_22671)){
var req_22673 = cljs.core._nth.call(null,chunk__22637_22670,i__22639_22672);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,req_22673,prov);

var G__22674 = seq__22636_22669;
var G__22675 = chunk__22637_22670;
var G__22676 = count__22638_22671;
var G__22677 = (i__22639_22672 + (1));
seq__22636_22669 = G__22674;
chunk__22637_22670 = G__22675;
count__22638_22671 = G__22676;
i__22639_22672 = G__22677;
continue;
} else {
var temp__4425__auto___22678__$1 = cljs.core.seq.call(null,seq__22636_22669);
if(temp__4425__auto___22678__$1){
var seq__22636_22679__$1 = temp__4425__auto___22678__$1;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__22636_22679__$1)){
var c__17643__auto___22680 = cljs.core.chunk_first.call(null,seq__22636_22679__$1);
var G__22681 = cljs.core.chunk_rest.call(null,seq__22636_22679__$1);
var G__22682 = c__17643__auto___22680;
var G__22683 = cljs.core.count.call(null,c__17643__auto___22680);
var G__22684 = (0);
seq__22636_22669 = G__22681;
chunk__22637_22670 = G__22682;
count__22638_22671 = G__22683;
i__22639_22672 = G__22684;
continue;
} else {
var req_22685 = cljs.core.first.call(null,seq__22636_22679__$1);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,req_22685,prov);

var G__22686 = cljs.core.next.call(null,seq__22636_22679__$1);
var G__22687 = null;
var G__22688 = (0);
var G__22689 = (0);
seq__22636_22669 = G__22686;
chunk__22637_22670 = G__22687;
count__22638_22671 = G__22688;
i__22639_22672 = G__22689;
continue;
}
} else {
}
}
break;
}

var G__22690 = cljs.core.next.call(null,seq__22628__$1);
var G__22691 = null;
var G__22692 = (0);
var G__22693 = (0);
seq__22628 = G__22690;
chunk__22629 = G__22691;
count__22630 = G__22692;
i__22631 = G__22693;
continue;
}
} else {
return null;
}
}
break;
}
});
figwheel.client.file_reloading.figwheel_require = (function figwheel$client$file_reloading$figwheel_require(src,reload){
goog.require = figwheel$client$file_reloading$figwheel_require;

if(cljs.core._EQ_.call(null,reload,"reload-all")){
var seq__22698_22702 = cljs.core.seq.call(null,figwheel.client.file_reloading.get_all_dependencies.call(null,src));
var chunk__22699_22703 = null;
var count__22700_22704 = (0);
var i__22701_22705 = (0);
while(true){
if((i__22701_22705 < count__22700_22704)){
var ns_22706 = cljs.core._nth.call(null,chunk__22699_22703,i__22701_22705);
figwheel.client.file_reloading.unprovide_BANG_.call(null,ns_22706);

var G__22707 = seq__22698_22702;
var G__22708 = chunk__22699_22703;
var G__22709 = count__22700_22704;
var G__22710 = (i__22701_22705 + (1));
seq__22698_22702 = G__22707;
chunk__22699_22703 = G__22708;
count__22700_22704 = G__22709;
i__22701_22705 = G__22710;
continue;
} else {
var temp__4425__auto___22711 = cljs.core.seq.call(null,seq__22698_22702);
if(temp__4425__auto___22711){
var seq__22698_22712__$1 = temp__4425__auto___22711;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__22698_22712__$1)){
var c__17643__auto___22713 = cljs.core.chunk_first.call(null,seq__22698_22712__$1);
var G__22714 = cljs.core.chunk_rest.call(null,seq__22698_22712__$1);
var G__22715 = c__17643__auto___22713;
var G__22716 = cljs.core.count.call(null,c__17643__auto___22713);
var G__22717 = (0);
seq__22698_22702 = G__22714;
chunk__22699_22703 = G__22715;
count__22700_22704 = G__22716;
i__22701_22705 = G__22717;
continue;
} else {
var ns_22718 = cljs.core.first.call(null,seq__22698_22712__$1);
figwheel.client.file_reloading.unprovide_BANG_.call(null,ns_22718);

var G__22719 = cljs.core.next.call(null,seq__22698_22712__$1);
var G__22720 = null;
var G__22721 = (0);
var G__22722 = (0);
seq__22698_22702 = G__22719;
chunk__22699_22703 = G__22720;
count__22700_22704 = G__22721;
i__22701_22705 = G__22722;
continue;
}
} else {
}
}
break;
}
} else {
}

if(cljs.core.truth_(reload)){
figwheel.client.file_reloading.unprovide_BANG_.call(null,src);
} else {
}

return goog.require_figwheel_backup_(src);
});
/**
 * Reusable browser REPL bootstrapping. Patches the essential functions
 *   in goog.base to support re-loading of namespaces after page load.
 */
figwheel.client.file_reloading.bootstrap_goog_base = (function figwheel$client$file_reloading$bootstrap_goog_base(){
if(cljs.core.truth_(COMPILED)){
return null;
} else {
goog.require_figwheel_backup_ = (function (){var or__16840__auto__ = goog.require__;
if(cljs.core.truth_(or__16840__auto__)){
return or__16840__auto__;
} else {
return goog.require;
}
})();

goog.isProvided_ = (function (name){
return false;
});

figwheel.client.file_reloading.setup_path__GT_name_BANG_.call(null);

figwheel.client.file_reloading.setup_ns__GT_dependents_BANG_.call(null);

goog.addDependency_figwheel_backup_ = goog.addDependency;

goog.addDependency = (function() { 
var G__22723__delegate = function (args){
cljs.core.apply.call(null,figwheel.client.file_reloading.addDependency,args);

return cljs.core.apply.call(null,goog.addDependency_figwheel_backup_,args);
};
var G__22723 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__22724__i = 0, G__22724__a = new Array(arguments.length -  0);
while (G__22724__i < G__22724__a.length) {G__22724__a[G__22724__i] = arguments[G__22724__i + 0]; ++G__22724__i;}
  args = new cljs.core.IndexedSeq(G__22724__a,0);
} 
return G__22723__delegate.call(this,args);};
G__22723.cljs$lang$maxFixedArity = 0;
G__22723.cljs$lang$applyTo = (function (arglist__22725){
var args = cljs.core.seq(arglist__22725);
return G__22723__delegate(args);
});
G__22723.cljs$core$IFn$_invoke$arity$variadic = G__22723__delegate;
return G__22723;
})()
;

goog.constructNamespace_("cljs.user");

goog.global.CLOSURE_IMPORT_SCRIPT = figwheel.client.file_reloading.queued_file_reload;

return goog.require = figwheel.client.file_reloading.figwheel_require;
}
});
figwheel.client.file_reloading.patch_goog_base = (function figwheel$client$file_reloading$patch_goog_base(){
if(typeof figwheel.client.file_reloading.bootstrapped_cljs !== 'undefined'){
return null;
} else {
figwheel.client.file_reloading.bootstrapped_cljs = (function (){
figwheel.client.file_reloading.bootstrap_goog_base.call(null);

return true;
})()
;
}
});
figwheel.client.file_reloading.reload_file_STAR_ = (function (){var pred__22727 = cljs.core._EQ_;
var expr__22728 = figwheel.client.utils.host_env_QMARK_.call(null);
if(cljs.core.truth_(pred__22727.call(null,new cljs.core.Keyword(null,"node","node",581201198),expr__22728))){
var path_parts = ((function (pred__22727,expr__22728){
return (function (p1__22726_SHARP_){
return clojure.string.split.call(null,p1__22726_SHARP_,/[\/\\]/);
});})(pred__22727,expr__22728))
;
var sep = (cljs.core.truth_(cljs.core.re_matches.call(null,/win.*/,process.platform))?"\\":"/");
var root = clojure.string.join.call(null,sep,cljs.core.pop.call(null,cljs.core.pop.call(null,path_parts.call(null,__dirname))));
return ((function (path_parts,sep,root,pred__22727,expr__22728){
return (function (request_url,callback){

var cache_path = clojure.string.join.call(null,sep,cljs.core.cons.call(null,root,path_parts.call(null,figwheel.client.file_reloading.fix_node_request_url.call(null,request_url))));
(require.cache[cache_path] = null);

return callback.call(null,(function (){try{return require(cache_path);
}catch (e22730){if((e22730 instanceof Error)){
var e = e22730;
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),[cljs.core.str("Figwheel: Error loading file "),cljs.core.str(cache_path)].join(''));

figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),e.stack);

return false;
} else {
throw e22730;

}
}})());
});
;})(path_parts,sep,root,pred__22727,expr__22728))
} else {
if(cljs.core.truth_(pred__22727.call(null,new cljs.core.Keyword(null,"html","html",-998796897),expr__22728))){
return ((function (pred__22727,expr__22728){
return (function (request_url,callback){

var deferred = goog.net.jsloader.load(figwheel.client.file_reloading.add_cache_buster.call(null,request_url),{"cleanupWhenDone": true});
deferred.addCallback(((function (deferred,pred__22727,expr__22728){
return (function (){
return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [true], null));
});})(deferred,pred__22727,expr__22728))
);

return deferred.addErrback(((function (deferred,pred__22727,expr__22728){
return (function (){
return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [false], null));
});})(deferred,pred__22727,expr__22728))
);
});
;})(pred__22727,expr__22728))
} else {
return ((function (pred__22727,expr__22728){
return (function (a,b){
throw "Reload not defined for this platform";
});
;})(pred__22727,expr__22728))
}
}
})();
figwheel.client.file_reloading.reload_file = (function figwheel$client$file_reloading$reload_file(p__22731,callback){
var map__22734 = p__22731;
var map__22734__$1 = ((((!((map__22734 == null)))?((((map__22734.cljs$lang$protocol_mask$partition0$ & (64))) || (map__22734.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__22734):map__22734);
var file_msg = map__22734__$1;
var request_url = cljs.core.get.call(null,map__22734__$1,new cljs.core.Keyword(null,"request-url","request-url",2100346596));

figwheel.client.utils.debug_prn.call(null,[cljs.core.str("FigWheel: Attempting to load "),cljs.core.str(request_url)].join(''));

return figwheel.client.file_reloading.reload_file_STAR_.call(null,request_url,((function (map__22734,map__22734__$1,file_msg,request_url){
return (function (success_QMARK_){
if(cljs.core.truth_(success_QMARK_)){
figwheel.client.utils.debug_prn.call(null,[cljs.core.str("FigWheel: Successfully loaded "),cljs.core.str(request_url)].join(''));

return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.assoc.call(null,file_msg,new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375),true)], null));
} else {
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),[cljs.core.str("Figwheel: Error loading file "),cljs.core.str(request_url)].join(''));

return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [file_msg], null));
}
});})(map__22734,map__22734__$1,file_msg,request_url))
);
});
if(typeof figwheel.client.file_reloading.reload_chan !== 'undefined'){
} else {
figwheel.client.file_reloading.reload_chan = cljs.core.async.chan.call(null);
}
if(typeof figwheel.client.file_reloading.on_load_callbacks !== 'undefined'){
} else {
figwheel.client.file_reloading.on_load_callbacks = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
}
if(typeof figwheel.client.file_reloading.dependencies_loaded !== 'undefined'){
} else {
figwheel.client.file_reloading.dependencies_loaded = cljs.core.atom.call(null,cljs.core.PersistentVector.EMPTY);
}
figwheel.client.file_reloading.blocking_load = (function figwheel$client$file_reloading$blocking_load(url){
var out = cljs.core.async.chan.call(null);
figwheel.client.file_reloading.reload_file.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"request-url","request-url",2100346596),url], null),((function (out){
return (function (file_msg){
cljs.core.async.put_BANG_.call(null,out,file_msg);

return cljs.core.async.close_BANG_.call(null,out);
});})(out))
);

return out;
});
if(typeof figwheel.client.file_reloading.reloader_loop !== 'undefined'){
} else {
figwheel.client.file_reloading.reloader_loop = (function (){var c__19696__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__19696__auto__){
return (function (){
var f__19697__auto__ = (function (){var switch__19584__auto__ = ((function (c__19696__auto__){
return (function (state_22758){
var state_val_22759 = (state_22758[(1)]);
if((state_val_22759 === (7))){
var inst_22754 = (state_22758[(2)]);
var state_22758__$1 = state_22758;
var statearr_22760_22780 = state_22758__$1;
(statearr_22760_22780[(2)] = inst_22754);

(statearr_22760_22780[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22759 === (1))){
var state_22758__$1 = state_22758;
var statearr_22761_22781 = state_22758__$1;
(statearr_22761_22781[(2)] = null);

(statearr_22761_22781[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22759 === (4))){
var inst_22738 = (state_22758[(7)]);
var inst_22738__$1 = (state_22758[(2)]);
var state_22758__$1 = (function (){var statearr_22762 = state_22758;
(statearr_22762[(7)] = inst_22738__$1);

return statearr_22762;
})();
if(cljs.core.truth_(inst_22738__$1)){
var statearr_22763_22782 = state_22758__$1;
(statearr_22763_22782[(1)] = (5));

} else {
var statearr_22764_22783 = state_22758__$1;
(statearr_22764_22783[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22759 === (6))){
var state_22758__$1 = state_22758;
var statearr_22765_22784 = state_22758__$1;
(statearr_22765_22784[(2)] = null);

(statearr_22765_22784[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22759 === (3))){
var inst_22756 = (state_22758[(2)]);
var state_22758__$1 = state_22758;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_22758__$1,inst_22756);
} else {
if((state_val_22759 === (2))){
var state_22758__$1 = state_22758;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_22758__$1,(4),figwheel.client.file_reloading.reload_chan);
} else {
if((state_val_22759 === (11))){
var inst_22750 = (state_22758[(2)]);
var state_22758__$1 = (function (){var statearr_22766 = state_22758;
(statearr_22766[(8)] = inst_22750);

return statearr_22766;
})();
var statearr_22767_22785 = state_22758__$1;
(statearr_22767_22785[(2)] = null);

(statearr_22767_22785[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22759 === (9))){
var inst_22744 = (state_22758[(9)]);
var inst_22742 = (state_22758[(10)]);
var inst_22746 = inst_22744.call(null,inst_22742);
var state_22758__$1 = state_22758;
var statearr_22768_22786 = state_22758__$1;
(statearr_22768_22786[(2)] = inst_22746);

(statearr_22768_22786[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22759 === (5))){
var inst_22738 = (state_22758[(7)]);
var inst_22740 = figwheel.client.file_reloading.blocking_load.call(null,inst_22738);
var state_22758__$1 = state_22758;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_22758__$1,(8),inst_22740);
} else {
if((state_val_22759 === (10))){
var inst_22742 = (state_22758[(10)]);
var inst_22748 = cljs.core.swap_BANG_.call(null,figwheel.client.file_reloading.dependencies_loaded,cljs.core.conj,inst_22742);
var state_22758__$1 = state_22758;
var statearr_22769_22787 = state_22758__$1;
(statearr_22769_22787[(2)] = inst_22748);

(statearr_22769_22787[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22759 === (8))){
var inst_22744 = (state_22758[(9)]);
var inst_22738 = (state_22758[(7)]);
var inst_22742 = (state_22758[(2)]);
var inst_22743 = cljs.core.deref.call(null,figwheel.client.file_reloading.on_load_callbacks);
var inst_22744__$1 = cljs.core.get.call(null,inst_22743,inst_22738);
var state_22758__$1 = (function (){var statearr_22770 = state_22758;
(statearr_22770[(9)] = inst_22744__$1);

(statearr_22770[(10)] = inst_22742);

return statearr_22770;
})();
if(cljs.core.truth_(inst_22744__$1)){
var statearr_22771_22788 = state_22758__$1;
(statearr_22771_22788[(1)] = (9));

} else {
var statearr_22772_22789 = state_22758__$1;
(statearr_22772_22789[(1)] = (10));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
});})(c__19696__auto__))
;
return ((function (switch__19584__auto__,c__19696__auto__){
return (function() {
var figwheel$client$file_reloading$state_machine__19585__auto__ = null;
var figwheel$client$file_reloading$state_machine__19585__auto____0 = (function (){
var statearr_22776 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_22776[(0)] = figwheel$client$file_reloading$state_machine__19585__auto__);

(statearr_22776[(1)] = (1));

return statearr_22776;
});
var figwheel$client$file_reloading$state_machine__19585__auto____1 = (function (state_22758){
while(true){
var ret_value__19586__auto__ = (function (){try{while(true){
var result__19587__auto__ = switch__19584__auto__.call(null,state_22758);
if(cljs.core.keyword_identical_QMARK_.call(null,result__19587__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__19587__auto__;
}
break;
}
}catch (e22777){if((e22777 instanceof Object)){
var ex__19588__auto__ = e22777;
var statearr_22778_22790 = state_22758;
(statearr_22778_22790[(5)] = ex__19588__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_22758);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e22777;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__19586__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__22791 = state_22758;
state_22758 = G__22791;
continue;
} else {
return ret_value__19586__auto__;
}
break;
}
});
figwheel$client$file_reloading$state_machine__19585__auto__ = function(state_22758){
switch(arguments.length){
case 0:
return figwheel$client$file_reloading$state_machine__19585__auto____0.call(this);
case 1:
return figwheel$client$file_reloading$state_machine__19585__auto____1.call(this,state_22758);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$file_reloading$state_machine__19585__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$file_reloading$state_machine__19585__auto____0;
figwheel$client$file_reloading$state_machine__19585__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$file_reloading$state_machine__19585__auto____1;
return figwheel$client$file_reloading$state_machine__19585__auto__;
})()
;})(switch__19584__auto__,c__19696__auto__))
})();
var state__19698__auto__ = (function (){var statearr_22779 = f__19697__auto__.call(null);
(statearr_22779[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__19696__auto__);

return statearr_22779;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__19698__auto__);
});})(c__19696__auto__))
);

return c__19696__auto__;
})();
}
figwheel.client.file_reloading.queued_file_reload = (function figwheel$client$file_reloading$queued_file_reload(url){
return cljs.core.async.put_BANG_.call(null,figwheel.client.file_reloading.reload_chan,url);
});
figwheel.client.file_reloading.require_with_callback = (function figwheel$client$file_reloading$require_with_callback(p__22792,callback){
var map__22795 = p__22792;
var map__22795__$1 = ((((!((map__22795 == null)))?((((map__22795.cljs$lang$protocol_mask$partition0$ & (64))) || (map__22795.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__22795):map__22795);
var file_msg = map__22795__$1;
var namespace = cljs.core.get.call(null,map__22795__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));
var request_url = figwheel.client.file_reloading.resolve_ns.call(null,namespace);
cljs.core.swap_BANG_.call(null,figwheel.client.file_reloading.on_load_callbacks,cljs.core.assoc,request_url,((function (request_url,map__22795,map__22795__$1,file_msg,namespace){
return (function (file_msg_SINGLEQUOTE_){
cljs.core.swap_BANG_.call(null,figwheel.client.file_reloading.on_load_callbacks,cljs.core.dissoc,request_url);

return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.merge.call(null,file_msg,cljs.core.select_keys.call(null,file_msg_SINGLEQUOTE_,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375)], null)))], null));
});})(request_url,map__22795,map__22795__$1,file_msg,namespace))
);

return figwheel.client.file_reloading.figwheel_require.call(null,cljs.core.name.call(null,namespace),true);
});
figwheel.client.file_reloading.reload_file_QMARK_ = (function figwheel$client$file_reloading$reload_file_QMARK_(p__22797){
var map__22800 = p__22797;
var map__22800__$1 = ((((!((map__22800 == null)))?((((map__22800.cljs$lang$protocol_mask$partition0$ & (64))) || (map__22800.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__22800):map__22800);
var file_msg = map__22800__$1;
var namespace = cljs.core.get.call(null,map__22800__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));

var meta_pragmas = cljs.core.get.call(null,cljs.core.deref.call(null,figwheel.client.file_reloading.figwheel_meta_pragmas),cljs.core.name.call(null,namespace));
var and__16828__auto__ = cljs.core.not.call(null,new cljs.core.Keyword(null,"figwheel-no-load","figwheel-no-load",-555840179).cljs$core$IFn$_invoke$arity$1(meta_pragmas));
if(and__16828__auto__){
var or__16840__auto__ = new cljs.core.Keyword(null,"figwheel-always","figwheel-always",799819691).cljs$core$IFn$_invoke$arity$1(meta_pragmas);
if(cljs.core.truth_(or__16840__auto__)){
return or__16840__auto__;
} else {
var or__16840__auto____$1 = new cljs.core.Keyword(null,"figwheel-load","figwheel-load",1316089175).cljs$core$IFn$_invoke$arity$1(meta_pragmas);
if(cljs.core.truth_(or__16840__auto____$1)){
return or__16840__auto____$1;
} else {
return figwheel.client.file_reloading.provided_QMARK_.call(null,cljs.core.name.call(null,namespace));
}
}
} else {
return and__16828__auto__;
}
});
figwheel.client.file_reloading.js_reload = (function figwheel$client$file_reloading$js_reload(p__22802,callback){
var map__22805 = p__22802;
var map__22805__$1 = ((((!((map__22805 == null)))?((((map__22805.cljs$lang$protocol_mask$partition0$ & (64))) || (map__22805.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__22805):map__22805);
var file_msg = map__22805__$1;
var request_url = cljs.core.get.call(null,map__22805__$1,new cljs.core.Keyword(null,"request-url","request-url",2100346596));
var namespace = cljs.core.get.call(null,map__22805__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));

if(cljs.core.truth_(figwheel.client.file_reloading.reload_file_QMARK_.call(null,file_msg))){
return figwheel.client.file_reloading.require_with_callback.call(null,file_msg,callback);
} else {
figwheel.client.utils.debug_prn.call(null,[cljs.core.str("Figwheel: Not trying to load file "),cljs.core.str(request_url)].join(''));

return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [file_msg], null));
}
});
figwheel.client.file_reloading.reload_js_file = (function figwheel$client$file_reloading$reload_js_file(file_msg){
var out = cljs.core.async.chan.call(null);
figwheel.client.file_reloading.js_reload.call(null,file_msg,((function (out){
return (function (url){
cljs.core.async.put_BANG_.call(null,out,url);

return cljs.core.async.close_BANG_.call(null,out);
});})(out))
);

return out;
});
/**
 * Returns a chanel with one collection of loaded filenames on it.
 */
figwheel.client.file_reloading.load_all_js_files = (function figwheel$client$file_reloading$load_all_js_files(files){
var out = cljs.core.async.chan.call(null);
var c__19696__auto___22893 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__19696__auto___22893,out){
return (function (){
var f__19697__auto__ = (function (){var switch__19584__auto__ = ((function (c__19696__auto___22893,out){
return (function (state_22875){
var state_val_22876 = (state_22875[(1)]);
if((state_val_22876 === (1))){
var inst_22853 = cljs.core.nth.call(null,files,(0),null);
var inst_22854 = cljs.core.nthnext.call(null,files,(1));
var inst_22855 = files;
var state_22875__$1 = (function (){var statearr_22877 = state_22875;
(statearr_22877[(7)] = inst_22853);

(statearr_22877[(8)] = inst_22855);

(statearr_22877[(9)] = inst_22854);

return statearr_22877;
})();
var statearr_22878_22894 = state_22875__$1;
(statearr_22878_22894[(2)] = null);

(statearr_22878_22894[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22876 === (2))){
var inst_22858 = (state_22875[(10)]);
var inst_22855 = (state_22875[(8)]);
var inst_22858__$1 = cljs.core.nth.call(null,inst_22855,(0),null);
var inst_22859 = cljs.core.nthnext.call(null,inst_22855,(1));
var inst_22860 = (inst_22858__$1 == null);
var inst_22861 = cljs.core.not.call(null,inst_22860);
var state_22875__$1 = (function (){var statearr_22879 = state_22875;
(statearr_22879[(11)] = inst_22859);

(statearr_22879[(10)] = inst_22858__$1);

return statearr_22879;
})();
if(inst_22861){
var statearr_22880_22895 = state_22875__$1;
(statearr_22880_22895[(1)] = (4));

} else {
var statearr_22881_22896 = state_22875__$1;
(statearr_22881_22896[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22876 === (3))){
var inst_22873 = (state_22875[(2)]);
var state_22875__$1 = state_22875;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_22875__$1,inst_22873);
} else {
if((state_val_22876 === (4))){
var inst_22858 = (state_22875[(10)]);
var inst_22863 = figwheel.client.file_reloading.reload_js_file.call(null,inst_22858);
var state_22875__$1 = state_22875;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_22875__$1,(7),inst_22863);
} else {
if((state_val_22876 === (5))){
var inst_22869 = cljs.core.async.close_BANG_.call(null,out);
var state_22875__$1 = state_22875;
var statearr_22882_22897 = state_22875__$1;
(statearr_22882_22897[(2)] = inst_22869);

(statearr_22882_22897[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22876 === (6))){
var inst_22871 = (state_22875[(2)]);
var state_22875__$1 = state_22875;
var statearr_22883_22898 = state_22875__$1;
(statearr_22883_22898[(2)] = inst_22871);

(statearr_22883_22898[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22876 === (7))){
var inst_22859 = (state_22875[(11)]);
var inst_22865 = (state_22875[(2)]);
var inst_22866 = cljs.core.async.put_BANG_.call(null,out,inst_22865);
var inst_22855 = inst_22859;
var state_22875__$1 = (function (){var statearr_22884 = state_22875;
(statearr_22884[(12)] = inst_22866);

(statearr_22884[(8)] = inst_22855);

return statearr_22884;
})();
var statearr_22885_22899 = state_22875__$1;
(statearr_22885_22899[(2)] = null);

(statearr_22885_22899[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
});})(c__19696__auto___22893,out))
;
return ((function (switch__19584__auto__,c__19696__auto___22893,out){
return (function() {
var figwheel$client$file_reloading$load_all_js_files_$_state_machine__19585__auto__ = null;
var figwheel$client$file_reloading$load_all_js_files_$_state_machine__19585__auto____0 = (function (){
var statearr_22889 = [null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_22889[(0)] = figwheel$client$file_reloading$load_all_js_files_$_state_machine__19585__auto__);

(statearr_22889[(1)] = (1));

return statearr_22889;
});
var figwheel$client$file_reloading$load_all_js_files_$_state_machine__19585__auto____1 = (function (state_22875){
while(true){
var ret_value__19586__auto__ = (function (){try{while(true){
var result__19587__auto__ = switch__19584__auto__.call(null,state_22875);
if(cljs.core.keyword_identical_QMARK_.call(null,result__19587__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__19587__auto__;
}
break;
}
}catch (e22890){if((e22890 instanceof Object)){
var ex__19588__auto__ = e22890;
var statearr_22891_22900 = state_22875;
(statearr_22891_22900[(5)] = ex__19588__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_22875);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e22890;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__19586__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__22901 = state_22875;
state_22875 = G__22901;
continue;
} else {
return ret_value__19586__auto__;
}
break;
}
});
figwheel$client$file_reloading$load_all_js_files_$_state_machine__19585__auto__ = function(state_22875){
switch(arguments.length){
case 0:
return figwheel$client$file_reloading$load_all_js_files_$_state_machine__19585__auto____0.call(this);
case 1:
return figwheel$client$file_reloading$load_all_js_files_$_state_machine__19585__auto____1.call(this,state_22875);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$file_reloading$load_all_js_files_$_state_machine__19585__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$file_reloading$load_all_js_files_$_state_machine__19585__auto____0;
figwheel$client$file_reloading$load_all_js_files_$_state_machine__19585__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$file_reloading$load_all_js_files_$_state_machine__19585__auto____1;
return figwheel$client$file_reloading$load_all_js_files_$_state_machine__19585__auto__;
})()
;})(switch__19584__auto__,c__19696__auto___22893,out))
})();
var state__19698__auto__ = (function (){var statearr_22892 = f__19697__auto__.call(null);
(statearr_22892[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__19696__auto___22893);

return statearr_22892;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__19698__auto__);
});})(c__19696__auto___22893,out))
);


return cljs.core.async.into.call(null,cljs.core.PersistentVector.EMPTY,out);
});
figwheel.client.file_reloading.eval_body = (function figwheel$client$file_reloading$eval_body(p__22902,opts){
var map__22906 = p__22902;
var map__22906__$1 = ((((!((map__22906 == null)))?((((map__22906.cljs$lang$protocol_mask$partition0$ & (64))) || (map__22906.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__22906):map__22906);
var eval_body__$1 = cljs.core.get.call(null,map__22906__$1,new cljs.core.Keyword(null,"eval-body","eval-body",-907279883));
var file = cljs.core.get.call(null,map__22906__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
if(cljs.core.truth_((function (){var and__16828__auto__ = eval_body__$1;
if(cljs.core.truth_(and__16828__auto__)){
return typeof eval_body__$1 === 'string';
} else {
return and__16828__auto__;
}
})())){
var code = eval_body__$1;
try{figwheel.client.utils.debug_prn.call(null,[cljs.core.str("Evaling file "),cljs.core.str(file)].join(''));

return figwheel.client.utils.eval_helper.call(null,code,opts);
}catch (e22908){var e = e22908;
return figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),[cljs.core.str("Unable to evaluate "),cljs.core.str(file)].join(''));
}} else {
return null;
}
});
figwheel.client.file_reloading.expand_files = (function figwheel$client$file_reloading$expand_files(files){
var deps = figwheel.client.file_reloading.get_all_dependents.call(null,cljs.core.map.call(null,new cljs.core.Keyword(null,"namespace","namespace",-377510372),files));
return cljs.core.filter.call(null,cljs.core.comp.call(null,cljs.core.not,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, ["figwheel.connect",null], null), null),new cljs.core.Keyword(null,"namespace","namespace",-377510372)),cljs.core.map.call(null,((function (deps){
return (function (n){
var temp__4423__auto__ = cljs.core.first.call(null,cljs.core.filter.call(null,((function (deps){
return (function (p1__22909_SHARP_){
return cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"namespace","namespace",-377510372).cljs$core$IFn$_invoke$arity$1(p1__22909_SHARP_),n);
});})(deps))
,files));
if(cljs.core.truth_(temp__4423__auto__)){
var file_msg = temp__4423__auto__;
return file_msg;
} else {
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"namespace","namespace",-377510372),new cljs.core.Keyword(null,"namespace","namespace",-377510372),n], null);
}
});})(deps))
,deps));
});
figwheel.client.file_reloading.sort_files = (function figwheel$client$file_reloading$sort_files(files){
if((cljs.core.count.call(null,files) <= (1))){
return files;
} else {
var keep_files = cljs.core.set.call(null,cljs.core.keep.call(null,new cljs.core.Keyword(null,"namespace","namespace",-377510372),files));
return cljs.core.filter.call(null,cljs.core.comp.call(null,keep_files,new cljs.core.Keyword(null,"namespace","namespace",-377510372)),figwheel.client.file_reloading.expand_files.call(null,files));
}
});
figwheel.client.file_reloading.get_figwheel_always = (function figwheel$client$file_reloading$get_figwheel_always(){
return cljs.core.map.call(null,(function (p__22914){
var vec__22915 = p__22914;
var k = cljs.core.nth.call(null,vec__22915,(0),null);
var v = cljs.core.nth.call(null,vec__22915,(1),null);
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"namespace","namespace",-377510372),k,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"namespace","namespace",-377510372)], null);
}),cljs.core.filter.call(null,(function (p__22916){
var vec__22917 = p__22916;
var k = cljs.core.nth.call(null,vec__22917,(0),null);
var v = cljs.core.nth.call(null,vec__22917,(1),null);
return new cljs.core.Keyword(null,"figwheel-always","figwheel-always",799819691).cljs$core$IFn$_invoke$arity$1(v);
}),cljs.core.deref.call(null,figwheel.client.file_reloading.figwheel_meta_pragmas)));
});
figwheel.client.file_reloading.reload_js_files = (function figwheel$client$file_reloading$reload_js_files(p__22921,p__22922){
var map__23169 = p__22921;
var map__23169__$1 = ((((!((map__23169 == null)))?((((map__23169.cljs$lang$protocol_mask$partition0$ & (64))) || (map__23169.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__23169):map__23169);
var opts = map__23169__$1;
var before_jsload = cljs.core.get.call(null,map__23169__$1,new cljs.core.Keyword(null,"before-jsload","before-jsload",-847513128));
var on_jsload = cljs.core.get.call(null,map__23169__$1,new cljs.core.Keyword(null,"on-jsload","on-jsload",-395756602));
var reload_dependents = cljs.core.get.call(null,map__23169__$1,new cljs.core.Keyword(null,"reload-dependents","reload-dependents",-956865430));
var map__23170 = p__22922;
var map__23170__$1 = ((((!((map__23170 == null)))?((((map__23170.cljs$lang$protocol_mask$partition0$ & (64))) || (map__23170.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__23170):map__23170);
var msg = map__23170__$1;
var files = cljs.core.get.call(null,map__23170__$1,new cljs.core.Keyword(null,"files","files",-472457450));
var figwheel_meta = cljs.core.get.call(null,map__23170__$1,new cljs.core.Keyword(null,"figwheel-meta","figwheel-meta",-225970237));
var recompile_dependents = cljs.core.get.call(null,map__23170__$1,new cljs.core.Keyword(null,"recompile-dependents","recompile-dependents",523804171));
if(cljs.core.empty_QMARK_.call(null,figwheel_meta)){
} else {
cljs.core.reset_BANG_.call(null,figwheel.client.file_reloading.figwheel_meta_pragmas,figwheel_meta);
}

var c__19696__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__19696__auto__,map__23169,map__23169__$1,opts,before_jsload,on_jsload,reload_dependents,map__23170,map__23170__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (){
var f__19697__auto__ = (function (){var switch__19584__auto__ = ((function (c__19696__auto__,map__23169,map__23169__$1,opts,before_jsload,on_jsload,reload_dependents,map__23170,map__23170__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (state_23323){
var state_val_23324 = (state_23323[(1)]);
if((state_val_23324 === (7))){
var inst_23187 = (state_23323[(7)]);
var inst_23186 = (state_23323[(8)]);
var inst_23185 = (state_23323[(9)]);
var inst_23184 = (state_23323[(10)]);
var inst_23192 = cljs.core._nth.call(null,inst_23185,inst_23187);
var inst_23193 = figwheel.client.file_reloading.eval_body.call(null,inst_23192,opts);
var inst_23194 = (inst_23187 + (1));
var tmp23325 = inst_23186;
var tmp23326 = inst_23185;
var tmp23327 = inst_23184;
var inst_23184__$1 = tmp23327;
var inst_23185__$1 = tmp23326;
var inst_23186__$1 = tmp23325;
var inst_23187__$1 = inst_23194;
var state_23323__$1 = (function (){var statearr_23328 = state_23323;
(statearr_23328[(7)] = inst_23187__$1);

(statearr_23328[(11)] = inst_23193);

(statearr_23328[(8)] = inst_23186__$1);

(statearr_23328[(9)] = inst_23185__$1);

(statearr_23328[(10)] = inst_23184__$1);

return statearr_23328;
})();
var statearr_23329_23415 = state_23323__$1;
(statearr_23329_23415[(2)] = null);

(statearr_23329_23415[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23324 === (20))){
var inst_23227 = (state_23323[(12)]);
var inst_23235 = figwheel.client.file_reloading.sort_files.call(null,inst_23227);
var state_23323__$1 = state_23323;
var statearr_23330_23416 = state_23323__$1;
(statearr_23330_23416[(2)] = inst_23235);

(statearr_23330_23416[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23324 === (27))){
var state_23323__$1 = state_23323;
var statearr_23331_23417 = state_23323__$1;
(statearr_23331_23417[(2)] = null);

(statearr_23331_23417[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23324 === (1))){
var inst_23176 = (state_23323[(13)]);
var inst_23173 = before_jsload.call(null,files);
var inst_23174 = figwheel.client.file_reloading.before_jsload_custom_event.call(null,files);
var inst_23175 = (function (){return ((function (inst_23176,inst_23173,inst_23174,state_val_23324,c__19696__auto__,map__23169,map__23169__$1,opts,before_jsload,on_jsload,reload_dependents,map__23170,map__23170__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p1__22918_SHARP_){
return new cljs.core.Keyword(null,"eval-body","eval-body",-907279883).cljs$core$IFn$_invoke$arity$1(p1__22918_SHARP_);
});
;})(inst_23176,inst_23173,inst_23174,state_val_23324,c__19696__auto__,map__23169,map__23169__$1,opts,before_jsload,on_jsload,reload_dependents,map__23170,map__23170__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_23176__$1 = cljs.core.filter.call(null,inst_23175,files);
var inst_23177 = cljs.core.not_empty.call(null,inst_23176__$1);
var state_23323__$1 = (function (){var statearr_23332 = state_23323;
(statearr_23332[(13)] = inst_23176__$1);

(statearr_23332[(14)] = inst_23173);

(statearr_23332[(15)] = inst_23174);

return statearr_23332;
})();
if(cljs.core.truth_(inst_23177)){
var statearr_23333_23418 = state_23323__$1;
(statearr_23333_23418[(1)] = (2));

} else {
var statearr_23334_23419 = state_23323__$1;
(statearr_23334_23419[(1)] = (3));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23324 === (24))){
var state_23323__$1 = state_23323;
var statearr_23335_23420 = state_23323__$1;
(statearr_23335_23420[(2)] = null);

(statearr_23335_23420[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23324 === (39))){
var inst_23277 = (state_23323[(16)]);
var state_23323__$1 = state_23323;
var statearr_23336_23421 = state_23323__$1;
(statearr_23336_23421[(2)] = inst_23277);

(statearr_23336_23421[(1)] = (40));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23324 === (46))){
var inst_23318 = (state_23323[(2)]);
var state_23323__$1 = state_23323;
var statearr_23337_23422 = state_23323__$1;
(statearr_23337_23422[(2)] = inst_23318);

(statearr_23337_23422[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23324 === (4))){
var inst_23221 = (state_23323[(2)]);
var inst_23222 = cljs.core.List.EMPTY;
var inst_23223 = cljs.core.reset_BANG_.call(null,figwheel.client.file_reloading.dependencies_loaded,inst_23222);
var inst_23224 = (function (){return ((function (inst_23221,inst_23222,inst_23223,state_val_23324,c__19696__auto__,map__23169,map__23169__$1,opts,before_jsload,on_jsload,reload_dependents,map__23170,map__23170__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p1__22919_SHARP_){
var and__16828__auto__ = new cljs.core.Keyword(null,"namespace","namespace",-377510372).cljs$core$IFn$_invoke$arity$1(p1__22919_SHARP_);
if(cljs.core.truth_(and__16828__auto__)){
return cljs.core.not.call(null,new cljs.core.Keyword(null,"eval-body","eval-body",-907279883).cljs$core$IFn$_invoke$arity$1(p1__22919_SHARP_));
} else {
return and__16828__auto__;
}
});
;})(inst_23221,inst_23222,inst_23223,state_val_23324,c__19696__auto__,map__23169,map__23169__$1,opts,before_jsload,on_jsload,reload_dependents,map__23170,map__23170__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_23225 = cljs.core.filter.call(null,inst_23224,files);
var inst_23226 = figwheel.client.file_reloading.get_figwheel_always.call(null);
var inst_23227 = cljs.core.concat.call(null,inst_23225,inst_23226);
var state_23323__$1 = (function (){var statearr_23338 = state_23323;
(statearr_23338[(12)] = inst_23227);

(statearr_23338[(17)] = inst_23223);

(statearr_23338[(18)] = inst_23221);

return statearr_23338;
})();
if(cljs.core.truth_(reload_dependents)){
var statearr_23339_23423 = state_23323__$1;
(statearr_23339_23423[(1)] = (16));

} else {
var statearr_23340_23424 = state_23323__$1;
(statearr_23340_23424[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23324 === (15))){
var inst_23211 = (state_23323[(2)]);
var state_23323__$1 = state_23323;
var statearr_23341_23425 = state_23323__$1;
(statearr_23341_23425[(2)] = inst_23211);

(statearr_23341_23425[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23324 === (21))){
var inst_23237 = (state_23323[(19)]);
var inst_23237__$1 = (state_23323[(2)]);
var inst_23238 = figwheel.client.file_reloading.load_all_js_files.call(null,inst_23237__$1);
var state_23323__$1 = (function (){var statearr_23342 = state_23323;
(statearr_23342[(19)] = inst_23237__$1);

return statearr_23342;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_23323__$1,(22),inst_23238);
} else {
if((state_val_23324 === (31))){
var inst_23321 = (state_23323[(2)]);
var state_23323__$1 = state_23323;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_23323__$1,inst_23321);
} else {
if((state_val_23324 === (32))){
var inst_23277 = (state_23323[(16)]);
var inst_23282 = inst_23277.cljs$lang$protocol_mask$partition0$;
var inst_23283 = (inst_23282 & (64));
var inst_23284 = inst_23277.cljs$core$ISeq$;
var inst_23285 = (inst_23283) || (inst_23284);
var state_23323__$1 = state_23323;
if(cljs.core.truth_(inst_23285)){
var statearr_23343_23426 = state_23323__$1;
(statearr_23343_23426[(1)] = (35));

} else {
var statearr_23344_23427 = state_23323__$1;
(statearr_23344_23427[(1)] = (36));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23324 === (40))){
var inst_23298 = (state_23323[(20)]);
var inst_23297 = (state_23323[(2)]);
var inst_23298__$1 = cljs.core.get.call(null,inst_23297,new cljs.core.Keyword(null,"figwheel-no-load","figwheel-no-load",-555840179));
var inst_23299 = cljs.core.get.call(null,inst_23297,new cljs.core.Keyword(null,"not-required","not-required",-950359114));
var inst_23300 = cljs.core.not_empty.call(null,inst_23298__$1);
var state_23323__$1 = (function (){var statearr_23345 = state_23323;
(statearr_23345[(20)] = inst_23298__$1);

(statearr_23345[(21)] = inst_23299);

return statearr_23345;
})();
if(cljs.core.truth_(inst_23300)){
var statearr_23346_23428 = state_23323__$1;
(statearr_23346_23428[(1)] = (41));

} else {
var statearr_23347_23429 = state_23323__$1;
(statearr_23347_23429[(1)] = (42));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23324 === (33))){
var state_23323__$1 = state_23323;
var statearr_23348_23430 = state_23323__$1;
(statearr_23348_23430[(2)] = false);

(statearr_23348_23430[(1)] = (34));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23324 === (13))){
var inst_23197 = (state_23323[(22)]);
var inst_23201 = cljs.core.chunk_first.call(null,inst_23197);
var inst_23202 = cljs.core.chunk_rest.call(null,inst_23197);
var inst_23203 = cljs.core.count.call(null,inst_23201);
var inst_23184 = inst_23202;
var inst_23185 = inst_23201;
var inst_23186 = inst_23203;
var inst_23187 = (0);
var state_23323__$1 = (function (){var statearr_23349 = state_23323;
(statearr_23349[(7)] = inst_23187);

(statearr_23349[(8)] = inst_23186);

(statearr_23349[(9)] = inst_23185);

(statearr_23349[(10)] = inst_23184);

return statearr_23349;
})();
var statearr_23350_23431 = state_23323__$1;
(statearr_23350_23431[(2)] = null);

(statearr_23350_23431[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23324 === (22))){
var inst_23240 = (state_23323[(23)]);
var inst_23245 = (state_23323[(24)]);
var inst_23241 = (state_23323[(25)]);
var inst_23237 = (state_23323[(19)]);
var inst_23240__$1 = (state_23323[(2)]);
var inst_23241__$1 = cljs.core.filter.call(null,new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375),inst_23240__$1);
var inst_23242 = (function (){var all_files = inst_23237;
var res_SINGLEQUOTE_ = inst_23240__$1;
var res = inst_23241__$1;
return ((function (all_files,res_SINGLEQUOTE_,res,inst_23240,inst_23245,inst_23241,inst_23237,inst_23240__$1,inst_23241__$1,state_val_23324,c__19696__auto__,map__23169,map__23169__$1,opts,before_jsload,on_jsload,reload_dependents,map__23170,map__23170__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p1__22920_SHARP_){
return cljs.core.not.call(null,new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375).cljs$core$IFn$_invoke$arity$1(p1__22920_SHARP_));
});
;})(all_files,res_SINGLEQUOTE_,res,inst_23240,inst_23245,inst_23241,inst_23237,inst_23240__$1,inst_23241__$1,state_val_23324,c__19696__auto__,map__23169,map__23169__$1,opts,before_jsload,on_jsload,reload_dependents,map__23170,map__23170__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_23243 = cljs.core.filter.call(null,inst_23242,inst_23240__$1);
var inst_23244 = cljs.core.deref.call(null,figwheel.client.file_reloading.dependencies_loaded);
var inst_23245__$1 = cljs.core.filter.call(null,new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375),inst_23244);
var inst_23246 = cljs.core.not_empty.call(null,inst_23245__$1);
var state_23323__$1 = (function (){var statearr_23351 = state_23323;
(statearr_23351[(23)] = inst_23240__$1);

(statearr_23351[(24)] = inst_23245__$1);

(statearr_23351[(25)] = inst_23241__$1);

(statearr_23351[(26)] = inst_23243);

return statearr_23351;
})();
if(cljs.core.truth_(inst_23246)){
var statearr_23352_23432 = state_23323__$1;
(statearr_23352_23432[(1)] = (23));

} else {
var statearr_23353_23433 = state_23323__$1;
(statearr_23353_23433[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23324 === (36))){
var state_23323__$1 = state_23323;
var statearr_23354_23434 = state_23323__$1;
(statearr_23354_23434[(2)] = false);

(statearr_23354_23434[(1)] = (37));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23324 === (41))){
var inst_23298 = (state_23323[(20)]);
var inst_23302 = cljs.core.comp.call(null,figwheel.client.file_reloading.name__GT_path,new cljs.core.Keyword(null,"namespace","namespace",-377510372));
var inst_23303 = cljs.core.map.call(null,inst_23302,inst_23298);
var inst_23304 = cljs.core.pr_str.call(null,inst_23303);
var inst_23305 = [cljs.core.str("figwheel-no-load meta-data: "),cljs.core.str(inst_23304)].join('');
var inst_23306 = figwheel.client.utils.log.call(null,inst_23305);
var state_23323__$1 = state_23323;
var statearr_23355_23435 = state_23323__$1;
(statearr_23355_23435[(2)] = inst_23306);

(statearr_23355_23435[(1)] = (43));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23324 === (43))){
var inst_23299 = (state_23323[(21)]);
var inst_23309 = (state_23323[(2)]);
var inst_23310 = cljs.core.not_empty.call(null,inst_23299);
var state_23323__$1 = (function (){var statearr_23356 = state_23323;
(statearr_23356[(27)] = inst_23309);

return statearr_23356;
})();
if(cljs.core.truth_(inst_23310)){
var statearr_23357_23436 = state_23323__$1;
(statearr_23357_23436[(1)] = (44));

} else {
var statearr_23358_23437 = state_23323__$1;
(statearr_23358_23437[(1)] = (45));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23324 === (29))){
var inst_23277 = (state_23323[(16)]);
var inst_23240 = (state_23323[(23)]);
var inst_23245 = (state_23323[(24)]);
var inst_23241 = (state_23323[(25)]);
var inst_23243 = (state_23323[(26)]);
var inst_23237 = (state_23323[(19)]);
var inst_23273 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: NOT loading these files ");
var inst_23276 = (function (){var all_files = inst_23237;
var res_SINGLEQUOTE_ = inst_23240;
var res = inst_23241;
var files_not_loaded = inst_23243;
var dependencies_that_loaded = inst_23245;
return ((function (all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_23277,inst_23240,inst_23245,inst_23241,inst_23243,inst_23237,inst_23273,state_val_23324,c__19696__auto__,map__23169,map__23169__$1,opts,before_jsload,on_jsload,reload_dependents,map__23170,map__23170__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p__23275){
var map__23359 = p__23275;
var map__23359__$1 = ((((!((map__23359 == null)))?((((map__23359.cljs$lang$protocol_mask$partition0$ & (64))) || (map__23359.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__23359):map__23359);
var namespace = cljs.core.get.call(null,map__23359__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));
var meta_data = cljs.core.get.call(null,cljs.core.deref.call(null,figwheel.client.file_reloading.figwheel_meta_pragmas),cljs.core.name.call(null,namespace));
if((meta_data == null)){
return new cljs.core.Keyword(null,"not-required","not-required",-950359114);
} else {
if(cljs.core.truth_(meta_data.call(null,new cljs.core.Keyword(null,"figwheel-no-load","figwheel-no-load",-555840179)))){
return new cljs.core.Keyword(null,"figwheel-no-load","figwheel-no-load",-555840179);
} else {
return new cljs.core.Keyword(null,"not-required","not-required",-950359114);

}
}
});
;})(all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_23277,inst_23240,inst_23245,inst_23241,inst_23243,inst_23237,inst_23273,state_val_23324,c__19696__auto__,map__23169,map__23169__$1,opts,before_jsload,on_jsload,reload_dependents,map__23170,map__23170__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_23277__$1 = cljs.core.group_by.call(null,inst_23276,inst_23243);
var inst_23279 = (inst_23277__$1 == null);
var inst_23280 = cljs.core.not.call(null,inst_23279);
var state_23323__$1 = (function (){var statearr_23361 = state_23323;
(statearr_23361[(16)] = inst_23277__$1);

(statearr_23361[(28)] = inst_23273);

return statearr_23361;
})();
if(inst_23280){
var statearr_23362_23438 = state_23323__$1;
(statearr_23362_23438[(1)] = (32));

} else {
var statearr_23363_23439 = state_23323__$1;
(statearr_23363_23439[(1)] = (33));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23324 === (44))){
var inst_23299 = (state_23323[(21)]);
var inst_23312 = cljs.core.map.call(null,new cljs.core.Keyword(null,"file","file",-1269645878),inst_23299);
var inst_23313 = cljs.core.pr_str.call(null,inst_23312);
var inst_23314 = [cljs.core.str("not required: "),cljs.core.str(inst_23313)].join('');
var inst_23315 = figwheel.client.utils.log.call(null,inst_23314);
var state_23323__$1 = state_23323;
var statearr_23364_23440 = state_23323__$1;
(statearr_23364_23440[(2)] = inst_23315);

(statearr_23364_23440[(1)] = (46));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23324 === (6))){
var inst_23218 = (state_23323[(2)]);
var state_23323__$1 = state_23323;
var statearr_23365_23441 = state_23323__$1;
(statearr_23365_23441[(2)] = inst_23218);

(statearr_23365_23441[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23324 === (28))){
var inst_23243 = (state_23323[(26)]);
var inst_23270 = (state_23323[(2)]);
var inst_23271 = cljs.core.not_empty.call(null,inst_23243);
var state_23323__$1 = (function (){var statearr_23366 = state_23323;
(statearr_23366[(29)] = inst_23270);

return statearr_23366;
})();
if(cljs.core.truth_(inst_23271)){
var statearr_23367_23442 = state_23323__$1;
(statearr_23367_23442[(1)] = (29));

} else {
var statearr_23368_23443 = state_23323__$1;
(statearr_23368_23443[(1)] = (30));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23324 === (25))){
var inst_23241 = (state_23323[(25)]);
var inst_23257 = (state_23323[(2)]);
var inst_23258 = cljs.core.not_empty.call(null,inst_23241);
var state_23323__$1 = (function (){var statearr_23369 = state_23323;
(statearr_23369[(30)] = inst_23257);

return statearr_23369;
})();
if(cljs.core.truth_(inst_23258)){
var statearr_23370_23444 = state_23323__$1;
(statearr_23370_23444[(1)] = (26));

} else {
var statearr_23371_23445 = state_23323__$1;
(statearr_23371_23445[(1)] = (27));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23324 === (34))){
var inst_23292 = (state_23323[(2)]);
var state_23323__$1 = state_23323;
if(cljs.core.truth_(inst_23292)){
var statearr_23372_23446 = state_23323__$1;
(statearr_23372_23446[(1)] = (38));

} else {
var statearr_23373_23447 = state_23323__$1;
(statearr_23373_23447[(1)] = (39));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23324 === (17))){
var state_23323__$1 = state_23323;
var statearr_23374_23448 = state_23323__$1;
(statearr_23374_23448[(2)] = recompile_dependents);

(statearr_23374_23448[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23324 === (3))){
var state_23323__$1 = state_23323;
var statearr_23375_23449 = state_23323__$1;
(statearr_23375_23449[(2)] = null);

(statearr_23375_23449[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23324 === (12))){
var inst_23214 = (state_23323[(2)]);
var state_23323__$1 = state_23323;
var statearr_23376_23450 = state_23323__$1;
(statearr_23376_23450[(2)] = inst_23214);

(statearr_23376_23450[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23324 === (2))){
var inst_23176 = (state_23323[(13)]);
var inst_23183 = cljs.core.seq.call(null,inst_23176);
var inst_23184 = inst_23183;
var inst_23185 = null;
var inst_23186 = (0);
var inst_23187 = (0);
var state_23323__$1 = (function (){var statearr_23377 = state_23323;
(statearr_23377[(7)] = inst_23187);

(statearr_23377[(8)] = inst_23186);

(statearr_23377[(9)] = inst_23185);

(statearr_23377[(10)] = inst_23184);

return statearr_23377;
})();
var statearr_23378_23451 = state_23323__$1;
(statearr_23378_23451[(2)] = null);

(statearr_23378_23451[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23324 === (23))){
var inst_23240 = (state_23323[(23)]);
var inst_23245 = (state_23323[(24)]);
var inst_23241 = (state_23323[(25)]);
var inst_23243 = (state_23323[(26)]);
var inst_23237 = (state_23323[(19)]);
var inst_23248 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: loaded these dependencies");
var inst_23250 = (function (){var all_files = inst_23237;
var res_SINGLEQUOTE_ = inst_23240;
var res = inst_23241;
var files_not_loaded = inst_23243;
var dependencies_that_loaded = inst_23245;
return ((function (all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_23240,inst_23245,inst_23241,inst_23243,inst_23237,inst_23248,state_val_23324,c__19696__auto__,map__23169,map__23169__$1,opts,before_jsload,on_jsload,reload_dependents,map__23170,map__23170__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p__23249){
var map__23379 = p__23249;
var map__23379__$1 = ((((!((map__23379 == null)))?((((map__23379.cljs$lang$protocol_mask$partition0$ & (64))) || (map__23379.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__23379):map__23379);
var request_url = cljs.core.get.call(null,map__23379__$1,new cljs.core.Keyword(null,"request-url","request-url",2100346596));
return clojure.string.replace.call(null,request_url,goog.basePath,"");
});
;})(all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_23240,inst_23245,inst_23241,inst_23243,inst_23237,inst_23248,state_val_23324,c__19696__auto__,map__23169,map__23169__$1,opts,before_jsload,on_jsload,reload_dependents,map__23170,map__23170__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_23251 = cljs.core.reverse.call(null,inst_23245);
var inst_23252 = cljs.core.map.call(null,inst_23250,inst_23251);
var inst_23253 = cljs.core.pr_str.call(null,inst_23252);
var inst_23254 = figwheel.client.utils.log.call(null,inst_23253);
var state_23323__$1 = (function (){var statearr_23381 = state_23323;
(statearr_23381[(31)] = inst_23248);

return statearr_23381;
})();
var statearr_23382_23452 = state_23323__$1;
(statearr_23382_23452[(2)] = inst_23254);

(statearr_23382_23452[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23324 === (35))){
var state_23323__$1 = state_23323;
var statearr_23383_23453 = state_23323__$1;
(statearr_23383_23453[(2)] = true);

(statearr_23383_23453[(1)] = (37));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23324 === (19))){
var inst_23227 = (state_23323[(12)]);
var inst_23233 = figwheel.client.file_reloading.expand_files.call(null,inst_23227);
var state_23323__$1 = state_23323;
var statearr_23384_23454 = state_23323__$1;
(statearr_23384_23454[(2)] = inst_23233);

(statearr_23384_23454[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23324 === (11))){
var state_23323__$1 = state_23323;
var statearr_23385_23455 = state_23323__$1;
(statearr_23385_23455[(2)] = null);

(statearr_23385_23455[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23324 === (9))){
var inst_23216 = (state_23323[(2)]);
var state_23323__$1 = state_23323;
var statearr_23386_23456 = state_23323__$1;
(statearr_23386_23456[(2)] = inst_23216);

(statearr_23386_23456[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23324 === (5))){
var inst_23187 = (state_23323[(7)]);
var inst_23186 = (state_23323[(8)]);
var inst_23189 = (inst_23187 < inst_23186);
var inst_23190 = inst_23189;
var state_23323__$1 = state_23323;
if(cljs.core.truth_(inst_23190)){
var statearr_23387_23457 = state_23323__$1;
(statearr_23387_23457[(1)] = (7));

} else {
var statearr_23388_23458 = state_23323__$1;
(statearr_23388_23458[(1)] = (8));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23324 === (14))){
var inst_23197 = (state_23323[(22)]);
var inst_23206 = cljs.core.first.call(null,inst_23197);
var inst_23207 = figwheel.client.file_reloading.eval_body.call(null,inst_23206,opts);
var inst_23208 = cljs.core.next.call(null,inst_23197);
var inst_23184 = inst_23208;
var inst_23185 = null;
var inst_23186 = (0);
var inst_23187 = (0);
var state_23323__$1 = (function (){var statearr_23389 = state_23323;
(statearr_23389[(7)] = inst_23187);

(statearr_23389[(32)] = inst_23207);

(statearr_23389[(8)] = inst_23186);

(statearr_23389[(9)] = inst_23185);

(statearr_23389[(10)] = inst_23184);

return statearr_23389;
})();
var statearr_23390_23459 = state_23323__$1;
(statearr_23390_23459[(2)] = null);

(statearr_23390_23459[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23324 === (45))){
var state_23323__$1 = state_23323;
var statearr_23391_23460 = state_23323__$1;
(statearr_23391_23460[(2)] = null);

(statearr_23391_23460[(1)] = (46));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23324 === (26))){
var inst_23240 = (state_23323[(23)]);
var inst_23245 = (state_23323[(24)]);
var inst_23241 = (state_23323[(25)]);
var inst_23243 = (state_23323[(26)]);
var inst_23237 = (state_23323[(19)]);
var inst_23260 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: loaded these files");
var inst_23262 = (function (){var all_files = inst_23237;
var res_SINGLEQUOTE_ = inst_23240;
var res = inst_23241;
var files_not_loaded = inst_23243;
var dependencies_that_loaded = inst_23245;
return ((function (all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_23240,inst_23245,inst_23241,inst_23243,inst_23237,inst_23260,state_val_23324,c__19696__auto__,map__23169,map__23169__$1,opts,before_jsload,on_jsload,reload_dependents,map__23170,map__23170__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p__23261){
var map__23392 = p__23261;
var map__23392__$1 = ((((!((map__23392 == null)))?((((map__23392.cljs$lang$protocol_mask$partition0$ & (64))) || (map__23392.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__23392):map__23392);
var namespace = cljs.core.get.call(null,map__23392__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));
var file = cljs.core.get.call(null,map__23392__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
if(cljs.core.truth_(namespace)){
return figwheel.client.file_reloading.name__GT_path.call(null,cljs.core.name.call(null,namespace));
} else {
return file;
}
});
;})(all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_23240,inst_23245,inst_23241,inst_23243,inst_23237,inst_23260,state_val_23324,c__19696__auto__,map__23169,map__23169__$1,opts,before_jsload,on_jsload,reload_dependents,map__23170,map__23170__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_23263 = cljs.core.map.call(null,inst_23262,inst_23241);
var inst_23264 = cljs.core.pr_str.call(null,inst_23263);
var inst_23265 = figwheel.client.utils.log.call(null,inst_23264);
var inst_23266 = (function (){var all_files = inst_23237;
var res_SINGLEQUOTE_ = inst_23240;
var res = inst_23241;
var files_not_loaded = inst_23243;
var dependencies_that_loaded = inst_23245;
return ((function (all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_23240,inst_23245,inst_23241,inst_23243,inst_23237,inst_23260,inst_23262,inst_23263,inst_23264,inst_23265,state_val_23324,c__19696__auto__,map__23169,map__23169__$1,opts,before_jsload,on_jsload,reload_dependents,map__23170,map__23170__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (){
figwheel.client.file_reloading.on_jsload_custom_event.call(null,res);

return cljs.core.apply.call(null,on_jsload,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [res], null));
});
;})(all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_23240,inst_23245,inst_23241,inst_23243,inst_23237,inst_23260,inst_23262,inst_23263,inst_23264,inst_23265,state_val_23324,c__19696__auto__,map__23169,map__23169__$1,opts,before_jsload,on_jsload,reload_dependents,map__23170,map__23170__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_23267 = setTimeout(inst_23266,(10));
var state_23323__$1 = (function (){var statearr_23394 = state_23323;
(statearr_23394[(33)] = inst_23260);

(statearr_23394[(34)] = inst_23265);

return statearr_23394;
})();
var statearr_23395_23461 = state_23323__$1;
(statearr_23395_23461[(2)] = inst_23267);

(statearr_23395_23461[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23324 === (16))){
var state_23323__$1 = state_23323;
var statearr_23396_23462 = state_23323__$1;
(statearr_23396_23462[(2)] = reload_dependents);

(statearr_23396_23462[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23324 === (38))){
var inst_23277 = (state_23323[(16)]);
var inst_23294 = cljs.core.apply.call(null,cljs.core.hash_map,inst_23277);
var state_23323__$1 = state_23323;
var statearr_23397_23463 = state_23323__$1;
(statearr_23397_23463[(2)] = inst_23294);

(statearr_23397_23463[(1)] = (40));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23324 === (30))){
var state_23323__$1 = state_23323;
var statearr_23398_23464 = state_23323__$1;
(statearr_23398_23464[(2)] = null);

(statearr_23398_23464[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23324 === (10))){
var inst_23197 = (state_23323[(22)]);
var inst_23199 = cljs.core.chunked_seq_QMARK_.call(null,inst_23197);
var state_23323__$1 = state_23323;
if(inst_23199){
var statearr_23399_23465 = state_23323__$1;
(statearr_23399_23465[(1)] = (13));

} else {
var statearr_23400_23466 = state_23323__$1;
(statearr_23400_23466[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23324 === (18))){
var inst_23231 = (state_23323[(2)]);
var state_23323__$1 = state_23323;
if(cljs.core.truth_(inst_23231)){
var statearr_23401_23467 = state_23323__$1;
(statearr_23401_23467[(1)] = (19));

} else {
var statearr_23402_23468 = state_23323__$1;
(statearr_23402_23468[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23324 === (42))){
var state_23323__$1 = state_23323;
var statearr_23403_23469 = state_23323__$1;
(statearr_23403_23469[(2)] = null);

(statearr_23403_23469[(1)] = (43));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23324 === (37))){
var inst_23289 = (state_23323[(2)]);
var state_23323__$1 = state_23323;
var statearr_23404_23470 = state_23323__$1;
(statearr_23404_23470[(2)] = inst_23289);

(statearr_23404_23470[(1)] = (34));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23324 === (8))){
var inst_23197 = (state_23323[(22)]);
var inst_23184 = (state_23323[(10)]);
var inst_23197__$1 = cljs.core.seq.call(null,inst_23184);
var state_23323__$1 = (function (){var statearr_23405 = state_23323;
(statearr_23405[(22)] = inst_23197__$1);

return statearr_23405;
})();
if(inst_23197__$1){
var statearr_23406_23471 = state_23323__$1;
(statearr_23406_23471[(1)] = (10));

} else {
var statearr_23407_23472 = state_23323__$1;
(statearr_23407_23472[(1)] = (11));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});})(c__19696__auto__,map__23169,map__23169__$1,opts,before_jsload,on_jsload,reload_dependents,map__23170,map__23170__$1,msg,files,figwheel_meta,recompile_dependents))
;
return ((function (switch__19584__auto__,c__19696__auto__,map__23169,map__23169__$1,opts,before_jsload,on_jsload,reload_dependents,map__23170,map__23170__$1,msg,files,figwheel_meta,recompile_dependents){
return (function() {
var figwheel$client$file_reloading$reload_js_files_$_state_machine__19585__auto__ = null;
var figwheel$client$file_reloading$reload_js_files_$_state_machine__19585__auto____0 = (function (){
var statearr_23411 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_23411[(0)] = figwheel$client$file_reloading$reload_js_files_$_state_machine__19585__auto__);

(statearr_23411[(1)] = (1));

return statearr_23411;
});
var figwheel$client$file_reloading$reload_js_files_$_state_machine__19585__auto____1 = (function (state_23323){
while(true){
var ret_value__19586__auto__ = (function (){try{while(true){
var result__19587__auto__ = switch__19584__auto__.call(null,state_23323);
if(cljs.core.keyword_identical_QMARK_.call(null,result__19587__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__19587__auto__;
}
break;
}
}catch (e23412){if((e23412 instanceof Object)){
var ex__19588__auto__ = e23412;
var statearr_23413_23473 = state_23323;
(statearr_23413_23473[(5)] = ex__19588__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_23323);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e23412;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__19586__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__23474 = state_23323;
state_23323 = G__23474;
continue;
} else {
return ret_value__19586__auto__;
}
break;
}
});
figwheel$client$file_reloading$reload_js_files_$_state_machine__19585__auto__ = function(state_23323){
switch(arguments.length){
case 0:
return figwheel$client$file_reloading$reload_js_files_$_state_machine__19585__auto____0.call(this);
case 1:
return figwheel$client$file_reloading$reload_js_files_$_state_machine__19585__auto____1.call(this,state_23323);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$file_reloading$reload_js_files_$_state_machine__19585__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$file_reloading$reload_js_files_$_state_machine__19585__auto____0;
figwheel$client$file_reloading$reload_js_files_$_state_machine__19585__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$file_reloading$reload_js_files_$_state_machine__19585__auto____1;
return figwheel$client$file_reloading$reload_js_files_$_state_machine__19585__auto__;
})()
;})(switch__19584__auto__,c__19696__auto__,map__23169,map__23169__$1,opts,before_jsload,on_jsload,reload_dependents,map__23170,map__23170__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var state__19698__auto__ = (function (){var statearr_23414 = f__19697__auto__.call(null);
(statearr_23414[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__19696__auto__);

return statearr_23414;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__19698__auto__);
});})(c__19696__auto__,map__23169,map__23169__$1,opts,before_jsload,on_jsload,reload_dependents,map__23170,map__23170__$1,msg,files,figwheel_meta,recompile_dependents))
);

return c__19696__auto__;
});
figwheel.client.file_reloading.current_links = (function figwheel$client$file_reloading$current_links(){
return Array.prototype.slice.call(document.getElementsByTagName("link"));
});
figwheel.client.file_reloading.truncate_url = (function figwheel$client$file_reloading$truncate_url(url){
return clojure.string.replace_first.call(null,clojure.string.replace_first.call(null,clojure.string.replace_first.call(null,clojure.string.replace_first.call(null,cljs.core.first.call(null,clojure.string.split.call(null,url,/\?/)),[cljs.core.str(location.protocol),cljs.core.str("//")].join(''),""),".*://",""),/^\/\//,""),/[^\\/]*/,"");
});
figwheel.client.file_reloading.matches_file_QMARK_ = (function figwheel$client$file_reloading$matches_file_QMARK_(p__23477,link){
var map__23480 = p__23477;
var map__23480__$1 = ((((!((map__23480 == null)))?((((map__23480.cljs$lang$protocol_mask$partition0$ & (64))) || (map__23480.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__23480):map__23480);
var file = cljs.core.get.call(null,map__23480__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
var temp__4425__auto__ = link.href;
if(cljs.core.truth_(temp__4425__auto__)){
var link_href = temp__4425__auto__;
var match = clojure.string.join.call(null,"/",cljs.core.take_while.call(null,cljs.core.identity,cljs.core.map.call(null,((function (link_href,temp__4425__auto__,map__23480,map__23480__$1,file){
return (function (p1__23475_SHARP_,p2__23476_SHARP_){
if(cljs.core._EQ_.call(null,p1__23475_SHARP_,p2__23476_SHARP_)){
return p1__23475_SHARP_;
} else {
return false;
}
});})(link_href,temp__4425__auto__,map__23480,map__23480__$1,file))
,cljs.core.reverse.call(null,clojure.string.split.call(null,file,"/")),cljs.core.reverse.call(null,clojure.string.split.call(null,figwheel.client.file_reloading.truncate_url.call(null,link_href),"/")))));
var match_length = cljs.core.count.call(null,match);
var file_name_length = cljs.core.count.call(null,cljs.core.last.call(null,clojure.string.split.call(null,file,"/")));
if((match_length >= file_name_length)){
return new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"link","link",-1769163468),link,new cljs.core.Keyword(null,"link-href","link-href",-250644450),link_href,new cljs.core.Keyword(null,"match-length","match-length",1101537310),match_length,new cljs.core.Keyword(null,"current-url-length","current-url-length",380404083),cljs.core.count.call(null,figwheel.client.file_reloading.truncate_url.call(null,link_href))], null);
} else {
return null;
}
} else {
return null;
}
});
figwheel.client.file_reloading.get_correct_link = (function figwheel$client$file_reloading$get_correct_link(f_data){
var temp__4425__auto__ = cljs.core.first.call(null,cljs.core.sort_by.call(null,(function (p__23486){
var map__23487 = p__23486;
var map__23487__$1 = ((((!((map__23487 == null)))?((((map__23487.cljs$lang$protocol_mask$partition0$ & (64))) || (map__23487.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__23487):map__23487);
var match_length = cljs.core.get.call(null,map__23487__$1,new cljs.core.Keyword(null,"match-length","match-length",1101537310));
var current_url_length = cljs.core.get.call(null,map__23487__$1,new cljs.core.Keyword(null,"current-url-length","current-url-length",380404083));
return (current_url_length - match_length);
}),cljs.core.keep.call(null,(function (p1__23482_SHARP_){
return figwheel.client.file_reloading.matches_file_QMARK_.call(null,f_data,p1__23482_SHARP_);
}),figwheel.client.file_reloading.current_links.call(null))));
if(cljs.core.truth_(temp__4425__auto__)){
var res = temp__4425__auto__;
return new cljs.core.Keyword(null,"link","link",-1769163468).cljs$core$IFn$_invoke$arity$1(res);
} else {
return null;
}
});
figwheel.client.file_reloading.clone_link = (function figwheel$client$file_reloading$clone_link(link,url){
var clone = document.createElement("link");
clone.rel = "stylesheet";

clone.media = link.media;

clone.disabled = link.disabled;

clone.href = figwheel.client.file_reloading.add_cache_buster.call(null,url);

return clone;
});
figwheel.client.file_reloading.create_link = (function figwheel$client$file_reloading$create_link(url){
var link = document.createElement("link");
link.rel = "stylesheet";

link.href = figwheel.client.file_reloading.add_cache_buster.call(null,url);

return link;
});
figwheel.client.file_reloading.add_link_to_doc = (function figwheel$client$file_reloading$add_link_to_doc(var_args){
var args23489 = [];
var len__17898__auto___23492 = arguments.length;
var i__17899__auto___23493 = (0);
while(true){
if((i__17899__auto___23493 < len__17898__auto___23492)){
args23489.push((arguments[i__17899__auto___23493]));

var G__23494 = (i__17899__auto___23493 + (1));
i__17899__auto___23493 = G__23494;
continue;
} else {
}
break;
}

var G__23491 = args23489.length;
switch (G__23491) {
case 1:
return figwheel.client.file_reloading.add_link_to_doc.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return figwheel.client.file_reloading.add_link_to_doc.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args23489.length)].join('')));

}
});

figwheel.client.file_reloading.add_link_to_doc.cljs$core$IFn$_invoke$arity$1 = (function (new_link){
return (document.getElementsByTagName("head")[(0)]).appendChild(new_link);
});

figwheel.client.file_reloading.add_link_to_doc.cljs$core$IFn$_invoke$arity$2 = (function (orig_link,klone){
var parent = orig_link.parentNode;
if(cljs.core._EQ_.call(null,orig_link,parent.lastChild)){
parent.appendChild(klone);
} else {
parent.insertBefore(klone,orig_link.nextSibling);
}

return setTimeout(((function (parent){
return (function (){
return parent.removeChild(orig_link);
});})(parent))
,(300));
});

figwheel.client.file_reloading.add_link_to_doc.cljs$lang$maxFixedArity = 2;
figwheel.client.file_reloading.distictify = (function figwheel$client$file_reloading$distictify(key,seqq){
return cljs.core.vals.call(null,cljs.core.reduce.call(null,(function (p1__23496_SHARP_,p2__23497_SHARP_){
return cljs.core.assoc.call(null,p1__23496_SHARP_,cljs.core.get.call(null,p2__23497_SHARP_,key),p2__23497_SHARP_);
}),cljs.core.PersistentArrayMap.EMPTY,seqq));
});
figwheel.client.file_reloading.reload_css_file = (function figwheel$client$file_reloading$reload_css_file(p__23498){
var map__23501 = p__23498;
var map__23501__$1 = ((((!((map__23501 == null)))?((((map__23501.cljs$lang$protocol_mask$partition0$ & (64))) || (map__23501.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__23501):map__23501);
var f_data = map__23501__$1;
var file = cljs.core.get.call(null,map__23501__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
var temp__4425__auto__ = figwheel.client.file_reloading.get_correct_link.call(null,f_data);
if(cljs.core.truth_(temp__4425__auto__)){
var link = temp__4425__auto__;
return figwheel.client.file_reloading.add_link_to_doc.call(null,link,figwheel.client.file_reloading.clone_link.call(null,link,link.href));
} else {
return null;
}
});
figwheel.client.file_reloading.reload_css_files = (function figwheel$client$file_reloading$reload_css_files(p__23503,files_msg){
var map__23510 = p__23503;
var map__23510__$1 = ((((!((map__23510 == null)))?((((map__23510.cljs$lang$protocol_mask$partition0$ & (64))) || (map__23510.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__23510):map__23510);
var opts = map__23510__$1;
var on_cssload = cljs.core.get.call(null,map__23510__$1,new cljs.core.Keyword(null,"on-cssload","on-cssload",1825432318));
if(cljs.core.truth_(figwheel.client.utils.html_env_QMARK_.call(null))){
var seq__23512_23516 = cljs.core.seq.call(null,figwheel.client.file_reloading.distictify.call(null,new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"files","files",-472457450).cljs$core$IFn$_invoke$arity$1(files_msg)));
var chunk__23513_23517 = null;
var count__23514_23518 = (0);
var i__23515_23519 = (0);
while(true){
if((i__23515_23519 < count__23514_23518)){
var f_23520 = cljs.core._nth.call(null,chunk__23513_23517,i__23515_23519);
figwheel.client.file_reloading.reload_css_file.call(null,f_23520);

var G__23521 = seq__23512_23516;
var G__23522 = chunk__23513_23517;
var G__23523 = count__23514_23518;
var G__23524 = (i__23515_23519 + (1));
seq__23512_23516 = G__23521;
chunk__23513_23517 = G__23522;
count__23514_23518 = G__23523;
i__23515_23519 = G__23524;
continue;
} else {
var temp__4425__auto___23525 = cljs.core.seq.call(null,seq__23512_23516);
if(temp__4425__auto___23525){
var seq__23512_23526__$1 = temp__4425__auto___23525;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__23512_23526__$1)){
var c__17643__auto___23527 = cljs.core.chunk_first.call(null,seq__23512_23526__$1);
var G__23528 = cljs.core.chunk_rest.call(null,seq__23512_23526__$1);
var G__23529 = c__17643__auto___23527;
var G__23530 = cljs.core.count.call(null,c__17643__auto___23527);
var G__23531 = (0);
seq__23512_23516 = G__23528;
chunk__23513_23517 = G__23529;
count__23514_23518 = G__23530;
i__23515_23519 = G__23531;
continue;
} else {
var f_23532 = cljs.core.first.call(null,seq__23512_23526__$1);
figwheel.client.file_reloading.reload_css_file.call(null,f_23532);

var G__23533 = cljs.core.next.call(null,seq__23512_23526__$1);
var G__23534 = null;
var G__23535 = (0);
var G__23536 = (0);
seq__23512_23516 = G__23533;
chunk__23513_23517 = G__23534;
count__23514_23518 = G__23535;
i__23515_23519 = G__23536;
continue;
}
} else {
}
}
break;
}

return setTimeout(((function (map__23510,map__23510__$1,opts,on_cssload){
return (function (){
return on_cssload.call(null,new cljs.core.Keyword(null,"files","files",-472457450).cljs$core$IFn$_invoke$arity$1(files_msg));
});})(map__23510,map__23510__$1,opts,on_cssload))
,(100));
} else {
return null;
}
});

//# sourceMappingURL=file_reloading.js.map?rel=1458114257334