// Compiled by ClojureScript 1.7.170 {}
goog.provide('cljs.repl');
goog.require('cljs.core');
cljs.repl.print_doc = (function cljs$repl$print_doc(m){
cljs.core.println.call(null,"-------------------------");

cljs.core.println.call(null,[cljs.core.str((function (){var temp__4425__auto__ = new cljs.core.Keyword(null,"ns","ns",441598760).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_(temp__4425__auto__)){
var ns = temp__4425__auto__;
return [cljs.core.str(ns),cljs.core.str("/")].join('');
} else {
return null;
}
})()),cljs.core.str(new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(m))].join(''));

if(cljs.core.truth_(new cljs.core.Keyword(null,"protocol","protocol",652470118).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.call(null,"Protocol");
} else {
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"forms","forms",2045992350).cljs$core$IFn$_invoke$arity$1(m))){
var seq__23553_23567 = cljs.core.seq.call(null,new cljs.core.Keyword(null,"forms","forms",2045992350).cljs$core$IFn$_invoke$arity$1(m));
var chunk__23554_23568 = null;
var count__23555_23569 = (0);
var i__23556_23570 = (0);
while(true){
if((i__23556_23570 < count__23555_23569)){
var f_23571 = cljs.core._nth.call(null,chunk__23554_23568,i__23556_23570);
cljs.core.println.call(null,"  ",f_23571);

var G__23572 = seq__23553_23567;
var G__23573 = chunk__23554_23568;
var G__23574 = count__23555_23569;
var G__23575 = (i__23556_23570 + (1));
seq__23553_23567 = G__23572;
chunk__23554_23568 = G__23573;
count__23555_23569 = G__23574;
i__23556_23570 = G__23575;
continue;
} else {
var temp__4425__auto___23576 = cljs.core.seq.call(null,seq__23553_23567);
if(temp__4425__auto___23576){
var seq__23553_23577__$1 = temp__4425__auto___23576;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__23553_23577__$1)){
var c__17643__auto___23578 = cljs.core.chunk_first.call(null,seq__23553_23577__$1);
var G__23579 = cljs.core.chunk_rest.call(null,seq__23553_23577__$1);
var G__23580 = c__17643__auto___23578;
var G__23581 = cljs.core.count.call(null,c__17643__auto___23578);
var G__23582 = (0);
seq__23553_23567 = G__23579;
chunk__23554_23568 = G__23580;
count__23555_23569 = G__23581;
i__23556_23570 = G__23582;
continue;
} else {
var f_23583 = cljs.core.first.call(null,seq__23553_23577__$1);
cljs.core.println.call(null,"  ",f_23583);

var G__23584 = cljs.core.next.call(null,seq__23553_23577__$1);
var G__23585 = null;
var G__23586 = (0);
var G__23587 = (0);
seq__23553_23567 = G__23584;
chunk__23554_23568 = G__23585;
count__23555_23569 = G__23586;
i__23556_23570 = G__23587;
continue;
}
} else {
}
}
break;
}
} else {
if(cljs.core.truth_(new cljs.core.Keyword(null,"arglists","arglists",1661989754).cljs$core$IFn$_invoke$arity$1(m))){
var arglists_23588 = new cljs.core.Keyword(null,"arglists","arglists",1661989754).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_((function (){var or__16840__auto__ = new cljs.core.Keyword(null,"macro","macro",-867863404).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_(or__16840__auto__)){
return or__16840__auto__;
} else {
return new cljs.core.Keyword(null,"repl-special-function","repl-special-function",1262603725).cljs$core$IFn$_invoke$arity$1(m);
}
})())){
cljs.core.prn.call(null,arglists_23588);
} else {
cljs.core.prn.call(null,((cljs.core._EQ_.call(null,new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.first.call(null,arglists_23588)))?cljs.core.second.call(null,arglists_23588):arglists_23588));
}
} else {
}
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"special-form","special-form",-1326536374).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.call(null,"Special Form");

cljs.core.println.call(null," ",new cljs.core.Keyword(null,"doc","doc",1913296891).cljs$core$IFn$_invoke$arity$1(m));

if(cljs.core.contains_QMARK_.call(null,m,new cljs.core.Keyword(null,"url","url",276297046))){
if(cljs.core.truth_(new cljs.core.Keyword(null,"url","url",276297046).cljs$core$IFn$_invoke$arity$1(m))){
return cljs.core.println.call(null,[cljs.core.str("\n  Please see http://clojure.org/"),cljs.core.str(new cljs.core.Keyword(null,"url","url",276297046).cljs$core$IFn$_invoke$arity$1(m))].join(''));
} else {
return null;
}
} else {
return cljs.core.println.call(null,[cljs.core.str("\n  Please see http://clojure.org/special_forms#"),cljs.core.str(new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(m))].join(''));
}
} else {
if(cljs.core.truth_(new cljs.core.Keyword(null,"macro","macro",-867863404).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.call(null,"Macro");
} else {
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"repl-special-function","repl-special-function",1262603725).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.call(null,"REPL Special Function");
} else {
}

cljs.core.println.call(null," ",new cljs.core.Keyword(null,"doc","doc",1913296891).cljs$core$IFn$_invoke$arity$1(m));

if(cljs.core.truth_(new cljs.core.Keyword(null,"protocol","protocol",652470118).cljs$core$IFn$_invoke$arity$1(m))){
var seq__23557 = cljs.core.seq.call(null,new cljs.core.Keyword(null,"methods","methods",453930866).cljs$core$IFn$_invoke$arity$1(m));
var chunk__23558 = null;
var count__23559 = (0);
var i__23560 = (0);
while(true){
if((i__23560 < count__23559)){
var vec__23561 = cljs.core._nth.call(null,chunk__23558,i__23560);
var name = cljs.core.nth.call(null,vec__23561,(0),null);
var map__23562 = cljs.core.nth.call(null,vec__23561,(1),null);
var map__23562__$1 = ((((!((map__23562 == null)))?((((map__23562.cljs$lang$protocol_mask$partition0$ & (64))) || (map__23562.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__23562):map__23562);
var doc = cljs.core.get.call(null,map__23562__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
var arglists = cljs.core.get.call(null,map__23562__$1,new cljs.core.Keyword(null,"arglists","arglists",1661989754));
cljs.core.println.call(null);

cljs.core.println.call(null," ",name);

cljs.core.println.call(null," ",arglists);

if(cljs.core.truth_(doc)){
cljs.core.println.call(null," ",doc);
} else {
}

var G__23589 = seq__23557;
var G__23590 = chunk__23558;
var G__23591 = count__23559;
var G__23592 = (i__23560 + (1));
seq__23557 = G__23589;
chunk__23558 = G__23590;
count__23559 = G__23591;
i__23560 = G__23592;
continue;
} else {
var temp__4425__auto__ = cljs.core.seq.call(null,seq__23557);
if(temp__4425__auto__){
var seq__23557__$1 = temp__4425__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__23557__$1)){
var c__17643__auto__ = cljs.core.chunk_first.call(null,seq__23557__$1);
var G__23593 = cljs.core.chunk_rest.call(null,seq__23557__$1);
var G__23594 = c__17643__auto__;
var G__23595 = cljs.core.count.call(null,c__17643__auto__);
var G__23596 = (0);
seq__23557 = G__23593;
chunk__23558 = G__23594;
count__23559 = G__23595;
i__23560 = G__23596;
continue;
} else {
var vec__23564 = cljs.core.first.call(null,seq__23557__$1);
var name = cljs.core.nth.call(null,vec__23564,(0),null);
var map__23565 = cljs.core.nth.call(null,vec__23564,(1),null);
var map__23565__$1 = ((((!((map__23565 == null)))?((((map__23565.cljs$lang$protocol_mask$partition0$ & (64))) || (map__23565.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__23565):map__23565);
var doc = cljs.core.get.call(null,map__23565__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
var arglists = cljs.core.get.call(null,map__23565__$1,new cljs.core.Keyword(null,"arglists","arglists",1661989754));
cljs.core.println.call(null);

cljs.core.println.call(null," ",name);

cljs.core.println.call(null," ",arglists);

if(cljs.core.truth_(doc)){
cljs.core.println.call(null," ",doc);
} else {
}

var G__23597 = cljs.core.next.call(null,seq__23557__$1);
var G__23598 = null;
var G__23599 = (0);
var G__23600 = (0);
seq__23557 = G__23597;
chunk__23558 = G__23598;
count__23559 = G__23599;
i__23560 = G__23600;
continue;
}
} else {
return null;
}
}
break;
}
} else {
return null;
}
}
});

//# sourceMappingURL=repl.js.map?rel=1458130390951