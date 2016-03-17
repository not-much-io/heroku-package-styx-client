// Compiled by ClojureScript 1.7.170 {}
goog.provide('figwheel.client');
goog.require('cljs.core');
goog.require('goog.userAgent.product');
goog.require('goog.Uri');
goog.require('cljs.core.async');
goog.require('figwheel.client.socket');
goog.require('figwheel.client.file_reloading');
goog.require('clojure.string');
goog.require('figwheel.client.utils');
goog.require('cljs.repl');
goog.require('figwheel.client.heads_up');
figwheel.client.figwheel_repl_print = (function figwheel$client$figwheel_repl_print(args){
figwheel.client.socket.send_BANG_.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"figwheel-event","figwheel-event",519570592),"callback",new cljs.core.Keyword(null,"callback-name","callback-name",336964714),"figwheel-repl-print",new cljs.core.Keyword(null,"content","content",15833224),args], null));

return args;
});
figwheel.client.autoload_QMARK_ = (cljs.core.truth_(figwheel.client.utils.html_env_QMARK_.call(null))?(function (){
var pred__23972 = cljs.core._EQ_;
var expr__23973 = (function (){var or__16840__auto__ = localStorage.getItem("figwheel_autoload");
if(cljs.core.truth_(or__16840__auto__)){
return or__16840__auto__;
} else {
return "true";
}
})();
if(cljs.core.truth_(pred__23972.call(null,"true",expr__23973))){
return true;
} else {
if(cljs.core.truth_(pred__23972.call(null,"false",expr__23973))){
return false;
} else {
throw (new Error([cljs.core.str("No matching clause: "),cljs.core.str(expr__23973)].join('')));
}
}
}):(function (){
return true;
}));
figwheel.client.toggle_autoload = (function figwheel$client$toggle_autoload(){
if(cljs.core.truth_(figwheel.client.utils.html_env_QMARK_.call(null))){
localStorage.setItem("figwheel_autoload",cljs.core.not.call(null,figwheel.client.autoload_QMARK_.call(null)));

return figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),[cljs.core.str("Figwheel autoloading "),cljs.core.str((cljs.core.truth_(figwheel.client.autoload_QMARK_.call(null))?"ON":"OFF"))].join(''));
} else {
return null;
}
});
goog.exportSymbol('figwheel.client.toggle_autoload', figwheel.client.toggle_autoload);
figwheel.client.console_print = (function figwheel$client$console_print(args){
console.log.apply(console,cljs.core.into_array.call(null,args));

return args;
});
figwheel.client.repl_print_fn = (function figwheel$client$repl_print_fn(var_args){
var args__17905__auto__ = [];
var len__17898__auto___23976 = arguments.length;
var i__17899__auto___23977 = (0);
while(true){
if((i__17899__auto___23977 < len__17898__auto___23976)){
args__17905__auto__.push((arguments[i__17899__auto___23977]));

var G__23978 = (i__17899__auto___23977 + (1));
i__17899__auto___23977 = G__23978;
continue;
} else {
}
break;
}

var argseq__17906__auto__ = ((((0) < args__17905__auto__.length))?(new cljs.core.IndexedSeq(args__17905__auto__.slice((0)),(0))):null);
return figwheel.client.repl_print_fn.cljs$core$IFn$_invoke$arity$variadic(argseq__17906__auto__);
});

figwheel.client.repl_print_fn.cljs$core$IFn$_invoke$arity$variadic = (function (args){
figwheel.client.figwheel_repl_print.call(null,figwheel.client.console_print.call(null,args));

return null;
});

figwheel.client.repl_print_fn.cljs$lang$maxFixedArity = (0);

figwheel.client.repl_print_fn.cljs$lang$applyTo = (function (seq23975){
return figwheel.client.repl_print_fn.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq23975));
});
figwheel.client.enable_repl_print_BANG_ = (function figwheel$client$enable_repl_print_BANG_(){
cljs.core._STAR_print_newline_STAR_ = false;

return cljs.core._STAR_print_fn_STAR_ = figwheel.client.repl_print_fn;
});
figwheel.client.get_essential_messages = (function figwheel$client$get_essential_messages(ed){
if(cljs.core.truth_(ed)){
return cljs.core.cons.call(null,cljs.core.select_keys.call(null,ed,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"message","message",-406056002),new cljs.core.Keyword(null,"class","class",-2030961996)], null)),figwheel$client$get_essential_messages.call(null,new cljs.core.Keyword(null,"cause","cause",231901252).cljs$core$IFn$_invoke$arity$1(ed)));
} else {
return null;
}
});
figwheel.client.error_msg_format = (function figwheel$client$error_msg_format(p__23979){
var map__23982 = p__23979;
var map__23982__$1 = ((((!((map__23982 == null)))?((((map__23982.cljs$lang$protocol_mask$partition0$ & (64))) || (map__23982.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__23982):map__23982);
var message = cljs.core.get.call(null,map__23982__$1,new cljs.core.Keyword(null,"message","message",-406056002));
var class$ = cljs.core.get.call(null,map__23982__$1,new cljs.core.Keyword(null,"class","class",-2030961996));
return [cljs.core.str(class$),cljs.core.str(" : "),cljs.core.str(message)].join('');
});
figwheel.client.format_messages = cljs.core.comp.call(null,cljs.core.partial.call(null,cljs.core.map,figwheel.client.error_msg_format),figwheel.client.get_essential_messages);
figwheel.client.focus_msgs = (function figwheel$client$focus_msgs(name_set,msg_hist){
return cljs.core.cons.call(null,cljs.core.first.call(null,msg_hist),cljs.core.filter.call(null,cljs.core.comp.call(null,name_set,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863)),cljs.core.rest.call(null,msg_hist)));
});
figwheel.client.reload_file_QMARK__STAR_ = (function figwheel$client$reload_file_QMARK__STAR_(msg_name,opts){
var or__16840__auto__ = new cljs.core.Keyword(null,"load-warninged-code","load-warninged-code",-2030345223).cljs$core$IFn$_invoke$arity$1(opts);
if(cljs.core.truth_(or__16840__auto__)){
return or__16840__auto__;
} else {
return cljs.core.not_EQ_.call(null,msg_name,new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356));
}
});
figwheel.client.reload_file_state_QMARK_ = (function figwheel$client$reload_file_state_QMARK_(msg_names,opts){
var and__16828__auto__ = cljs.core._EQ_.call(null,cljs.core.first.call(null,msg_names),new cljs.core.Keyword(null,"files-changed","files-changed",-1418200563));
if(and__16828__auto__){
return figwheel.client.reload_file_QMARK__STAR_.call(null,cljs.core.second.call(null,msg_names),opts);
} else {
return and__16828__auto__;
}
});
figwheel.client.block_reload_file_state_QMARK_ = (function figwheel$client$block_reload_file_state_QMARK_(msg_names,opts){
return (cljs.core._EQ_.call(null,cljs.core.first.call(null,msg_names),new cljs.core.Keyword(null,"files-changed","files-changed",-1418200563))) && (cljs.core.not.call(null,figwheel.client.reload_file_QMARK__STAR_.call(null,cljs.core.second.call(null,msg_names),opts)));
});
figwheel.client.warning_append_state_QMARK_ = (function figwheel$client$warning_append_state_QMARK_(msg_names){
return cljs.core._EQ_.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356),new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356)], null),cljs.core.take.call(null,(2),msg_names));
});
figwheel.client.warning_state_QMARK_ = (function figwheel$client$warning_state_QMARK_(msg_names){
return cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356),cljs.core.first.call(null,msg_names));
});
figwheel.client.rewarning_state_QMARK_ = (function figwheel$client$rewarning_state_QMARK_(msg_names){
return cljs.core._EQ_.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356),new cljs.core.Keyword(null,"files-changed","files-changed",-1418200563),new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356)], null),cljs.core.take.call(null,(3),msg_names));
});
figwheel.client.compile_fail_state_QMARK_ = (function figwheel$client$compile_fail_state_QMARK_(msg_names){
return cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"compile-failed","compile-failed",-477639289),cljs.core.first.call(null,msg_names));
});
figwheel.client.compile_refail_state_QMARK_ = (function figwheel$client$compile_refail_state_QMARK_(msg_names){
return cljs.core._EQ_.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"compile-failed","compile-failed",-477639289),new cljs.core.Keyword(null,"compile-failed","compile-failed",-477639289)], null),cljs.core.take.call(null,(2),msg_names));
});
figwheel.client.css_loaded_state_QMARK_ = (function figwheel$client$css_loaded_state_QMARK_(msg_names){
return cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"css-files-changed","css-files-changed",720773874),cljs.core.first.call(null,msg_names));
});
figwheel.client.file_reloader_plugin = (function figwheel$client$file_reloader_plugin(opts){
var ch = cljs.core.async.chan.call(null);
var c__19696__auto___24144 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__19696__auto___24144,ch){
return (function (){
var f__19697__auto__ = (function (){var switch__19584__auto__ = ((function (c__19696__auto___24144,ch){
return (function (state_24113){
var state_val_24114 = (state_24113[(1)]);
if((state_val_24114 === (7))){
var inst_24109 = (state_24113[(2)]);
var state_24113__$1 = state_24113;
var statearr_24115_24145 = state_24113__$1;
(statearr_24115_24145[(2)] = inst_24109);

(statearr_24115_24145[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24114 === (1))){
var state_24113__$1 = state_24113;
var statearr_24116_24146 = state_24113__$1;
(statearr_24116_24146[(2)] = null);

(statearr_24116_24146[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24114 === (4))){
var inst_24066 = (state_24113[(7)]);
var inst_24066__$1 = (state_24113[(2)]);
var state_24113__$1 = (function (){var statearr_24117 = state_24113;
(statearr_24117[(7)] = inst_24066__$1);

return statearr_24117;
})();
if(cljs.core.truth_(inst_24066__$1)){
var statearr_24118_24147 = state_24113__$1;
(statearr_24118_24147[(1)] = (5));

} else {
var statearr_24119_24148 = state_24113__$1;
(statearr_24119_24148[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24114 === (15))){
var inst_24073 = (state_24113[(8)]);
var inst_24088 = new cljs.core.Keyword(null,"files","files",-472457450).cljs$core$IFn$_invoke$arity$1(inst_24073);
var inst_24089 = cljs.core.first.call(null,inst_24088);
var inst_24090 = new cljs.core.Keyword(null,"file","file",-1269645878).cljs$core$IFn$_invoke$arity$1(inst_24089);
var inst_24091 = [cljs.core.str("Figwheel: Not loading code with warnings - "),cljs.core.str(inst_24090)].join('');
var inst_24092 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"warn","warn",-436710552),inst_24091);
var state_24113__$1 = state_24113;
var statearr_24120_24149 = state_24113__$1;
(statearr_24120_24149[(2)] = inst_24092);

(statearr_24120_24149[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24114 === (13))){
var inst_24097 = (state_24113[(2)]);
var state_24113__$1 = state_24113;
var statearr_24121_24150 = state_24113__$1;
(statearr_24121_24150[(2)] = inst_24097);

(statearr_24121_24150[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24114 === (6))){
var state_24113__$1 = state_24113;
var statearr_24122_24151 = state_24113__$1;
(statearr_24122_24151[(2)] = null);

(statearr_24122_24151[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24114 === (17))){
var inst_24095 = (state_24113[(2)]);
var state_24113__$1 = state_24113;
var statearr_24123_24152 = state_24113__$1;
(statearr_24123_24152[(2)] = inst_24095);

(statearr_24123_24152[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24114 === (3))){
var inst_24111 = (state_24113[(2)]);
var state_24113__$1 = state_24113;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_24113__$1,inst_24111);
} else {
if((state_val_24114 === (12))){
var inst_24072 = (state_24113[(9)]);
var inst_24086 = figwheel.client.block_reload_file_state_QMARK_.call(null,inst_24072,opts);
var state_24113__$1 = state_24113;
if(cljs.core.truth_(inst_24086)){
var statearr_24124_24153 = state_24113__$1;
(statearr_24124_24153[(1)] = (15));

} else {
var statearr_24125_24154 = state_24113__$1;
(statearr_24125_24154[(1)] = (16));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24114 === (2))){
var state_24113__$1 = state_24113;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_24113__$1,(4),ch);
} else {
if((state_val_24114 === (11))){
var inst_24073 = (state_24113[(8)]);
var inst_24078 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_24079 = figwheel.client.file_reloading.reload_js_files.call(null,opts,inst_24073);
var inst_24080 = cljs.core.async.timeout.call(null,(1000));
var inst_24081 = [inst_24079,inst_24080];
var inst_24082 = (new cljs.core.PersistentVector(null,2,(5),inst_24078,inst_24081,null));
var state_24113__$1 = state_24113;
return cljs.core.async.ioc_alts_BANG_.call(null,state_24113__$1,(14),inst_24082);
} else {
if((state_val_24114 === (9))){
var inst_24073 = (state_24113[(8)]);
var inst_24099 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"warn","warn",-436710552),"Figwheel: code autoloading is OFF");
var inst_24100 = new cljs.core.Keyword(null,"files","files",-472457450).cljs$core$IFn$_invoke$arity$1(inst_24073);
var inst_24101 = cljs.core.map.call(null,new cljs.core.Keyword(null,"file","file",-1269645878),inst_24100);
var inst_24102 = [cljs.core.str("Not loading: "),cljs.core.str(inst_24101)].join('');
var inst_24103 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),inst_24102);
var state_24113__$1 = (function (){var statearr_24126 = state_24113;
(statearr_24126[(10)] = inst_24099);

return statearr_24126;
})();
var statearr_24127_24155 = state_24113__$1;
(statearr_24127_24155[(2)] = inst_24103);

(statearr_24127_24155[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24114 === (5))){
var inst_24066 = (state_24113[(7)]);
var inst_24068 = [new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356),null,new cljs.core.Keyword(null,"files-changed","files-changed",-1418200563),null];
var inst_24069 = (new cljs.core.PersistentArrayMap(null,2,inst_24068,null));
var inst_24070 = (new cljs.core.PersistentHashSet(null,inst_24069,null));
var inst_24071 = figwheel.client.focus_msgs.call(null,inst_24070,inst_24066);
var inst_24072 = cljs.core.map.call(null,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863),inst_24071);
var inst_24073 = cljs.core.first.call(null,inst_24071);
var inst_24074 = figwheel.client.autoload_QMARK_.call(null);
var state_24113__$1 = (function (){var statearr_24128 = state_24113;
(statearr_24128[(8)] = inst_24073);

(statearr_24128[(9)] = inst_24072);

return statearr_24128;
})();
if(cljs.core.truth_(inst_24074)){
var statearr_24129_24156 = state_24113__$1;
(statearr_24129_24156[(1)] = (8));

} else {
var statearr_24130_24157 = state_24113__$1;
(statearr_24130_24157[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24114 === (14))){
var inst_24084 = (state_24113[(2)]);
var state_24113__$1 = state_24113;
var statearr_24131_24158 = state_24113__$1;
(statearr_24131_24158[(2)] = inst_24084);

(statearr_24131_24158[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24114 === (16))){
var state_24113__$1 = state_24113;
var statearr_24132_24159 = state_24113__$1;
(statearr_24132_24159[(2)] = null);

(statearr_24132_24159[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24114 === (10))){
var inst_24105 = (state_24113[(2)]);
var state_24113__$1 = (function (){var statearr_24133 = state_24113;
(statearr_24133[(11)] = inst_24105);

return statearr_24133;
})();
var statearr_24134_24160 = state_24113__$1;
(statearr_24134_24160[(2)] = null);

(statearr_24134_24160[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24114 === (8))){
var inst_24072 = (state_24113[(9)]);
var inst_24076 = figwheel.client.reload_file_state_QMARK_.call(null,inst_24072,opts);
var state_24113__$1 = state_24113;
if(cljs.core.truth_(inst_24076)){
var statearr_24135_24161 = state_24113__$1;
(statearr_24135_24161[(1)] = (11));

} else {
var statearr_24136_24162 = state_24113__$1;
(statearr_24136_24162[(1)] = (12));

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
});})(c__19696__auto___24144,ch))
;
return ((function (switch__19584__auto__,c__19696__auto___24144,ch){
return (function() {
var figwheel$client$file_reloader_plugin_$_state_machine__19585__auto__ = null;
var figwheel$client$file_reloader_plugin_$_state_machine__19585__auto____0 = (function (){
var statearr_24140 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_24140[(0)] = figwheel$client$file_reloader_plugin_$_state_machine__19585__auto__);

(statearr_24140[(1)] = (1));

return statearr_24140;
});
var figwheel$client$file_reloader_plugin_$_state_machine__19585__auto____1 = (function (state_24113){
while(true){
var ret_value__19586__auto__ = (function (){try{while(true){
var result__19587__auto__ = switch__19584__auto__.call(null,state_24113);
if(cljs.core.keyword_identical_QMARK_.call(null,result__19587__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__19587__auto__;
}
break;
}
}catch (e24141){if((e24141 instanceof Object)){
var ex__19588__auto__ = e24141;
var statearr_24142_24163 = state_24113;
(statearr_24142_24163[(5)] = ex__19588__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_24113);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e24141;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__19586__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__24164 = state_24113;
state_24113 = G__24164;
continue;
} else {
return ret_value__19586__auto__;
}
break;
}
});
figwheel$client$file_reloader_plugin_$_state_machine__19585__auto__ = function(state_24113){
switch(arguments.length){
case 0:
return figwheel$client$file_reloader_plugin_$_state_machine__19585__auto____0.call(this);
case 1:
return figwheel$client$file_reloader_plugin_$_state_machine__19585__auto____1.call(this,state_24113);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$file_reloader_plugin_$_state_machine__19585__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$file_reloader_plugin_$_state_machine__19585__auto____0;
figwheel$client$file_reloader_plugin_$_state_machine__19585__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$file_reloader_plugin_$_state_machine__19585__auto____1;
return figwheel$client$file_reloader_plugin_$_state_machine__19585__auto__;
})()
;})(switch__19584__auto__,c__19696__auto___24144,ch))
})();
var state__19698__auto__ = (function (){var statearr_24143 = f__19697__auto__.call(null);
(statearr_24143[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__19696__auto___24144);

return statearr_24143;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__19698__auto__);
});})(c__19696__auto___24144,ch))
);


return ((function (ch){
return (function (msg_hist){
cljs.core.async.put_BANG_.call(null,ch,msg_hist);

return msg_hist;
});
;})(ch))
});
figwheel.client.truncate_stack_trace = (function figwheel$client$truncate_stack_trace(stack_str){
return cljs.core.take_while.call(null,(function (p1__24165_SHARP_){
return cljs.core.not.call(null,cljs.core.re_matches.call(null,/.*eval_javascript_STAR__STAR_.*/,p1__24165_SHARP_));
}),clojure.string.split_lines.call(null,stack_str));
});
figwheel.client.get_ua_product = (function figwheel$client$get_ua_product(){
if(cljs.core.truth_(figwheel.client.utils.node_env_QMARK_.call(null))){
return new cljs.core.Keyword(null,"chrome","chrome",1718738387);
} else {
if(cljs.core.truth_(goog.userAgent.product.SAFARI)){
return new cljs.core.Keyword(null,"safari","safari",497115653);
} else {
if(cljs.core.truth_(goog.userAgent.product.CHROME)){
return new cljs.core.Keyword(null,"chrome","chrome",1718738387);
} else {
if(cljs.core.truth_(goog.userAgent.product.FIREFOX)){
return new cljs.core.Keyword(null,"firefox","firefox",1283768880);
} else {
if(cljs.core.truth_(goog.userAgent.product.IE)){
return new cljs.core.Keyword(null,"ie","ie",2038473780);
} else {
return null;
}
}
}
}
}
});
var base_path_24172 = figwheel.client.utils.base_url_path.call(null);
figwheel.client.eval_javascript_STAR__STAR_ = ((function (base_path_24172){
return (function figwheel$client$eval_javascript_STAR__STAR_(code,opts,result_handler){
try{var _STAR_print_fn_STAR_24170 = cljs.core._STAR_print_fn_STAR_;
var _STAR_print_newline_STAR_24171 = cljs.core._STAR_print_newline_STAR_;
cljs.core._STAR_print_fn_STAR_ = figwheel.client.repl_print_fn;

cljs.core._STAR_print_newline_STAR_ = false;

try{return result_handler.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"status","status",-1997798413),new cljs.core.Keyword(null,"success","success",1890645906),new cljs.core.Keyword(null,"ua-product","ua-product",938384227),figwheel.client.get_ua_product.call(null),new cljs.core.Keyword(null,"value","value",305978217),figwheel.client.utils.eval_helper.call(null,code,opts)], null));
}finally {cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR_24171;

cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR_24170;
}}catch (e24169){if((e24169 instanceof Error)){
var e = e24169;
return result_handler.call(null,new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"status","status",-1997798413),new cljs.core.Keyword(null,"exception","exception",-335277064),new cljs.core.Keyword(null,"value","value",305978217),cljs.core.pr_str.call(null,e),new cljs.core.Keyword(null,"ua-product","ua-product",938384227),figwheel.client.get_ua_product.call(null),new cljs.core.Keyword(null,"stacktrace","stacktrace",-95588394),clojure.string.join.call(null,"\n",figwheel.client.truncate_stack_trace.call(null,e.stack)),new cljs.core.Keyword(null,"base-path","base-path",495760020),base_path_24172], null));
} else {
var e = e24169;
return result_handler.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"status","status",-1997798413),new cljs.core.Keyword(null,"exception","exception",-335277064),new cljs.core.Keyword(null,"ua-product","ua-product",938384227),figwheel.client.get_ua_product.call(null),new cljs.core.Keyword(null,"value","value",305978217),cljs.core.pr_str.call(null,e),new cljs.core.Keyword(null,"stacktrace","stacktrace",-95588394),"No stacktrace available."], null));

}
}});})(base_path_24172))
;
/**
 * The REPL can disconnect and reconnect lets ensure cljs.user exists at least.
 */
figwheel.client.ensure_cljs_user = (function figwheel$client$ensure_cljs_user(){
if(cljs.core.truth_(cljs.user)){
return null;
} else {
return cljs.user = {};
}
});
figwheel.client.repl_plugin = (function figwheel$client$repl_plugin(p__24173){
var map__24180 = p__24173;
var map__24180__$1 = ((((!((map__24180 == null)))?((((map__24180.cljs$lang$protocol_mask$partition0$ & (64))) || (map__24180.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__24180):map__24180);
var opts = map__24180__$1;
var build_id = cljs.core.get.call(null,map__24180__$1,new cljs.core.Keyword(null,"build-id","build-id",1642831089));
return ((function (map__24180,map__24180__$1,opts,build_id){
return (function (p__24182){
var vec__24183 = p__24182;
var map__24184 = cljs.core.nth.call(null,vec__24183,(0),null);
var map__24184__$1 = ((((!((map__24184 == null)))?((((map__24184.cljs$lang$protocol_mask$partition0$ & (64))) || (map__24184.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__24184):map__24184);
var msg = map__24184__$1;
var msg_name = cljs.core.get.call(null,map__24184__$1,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863));
var _ = cljs.core.nthnext.call(null,vec__24183,(1));
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"repl-eval","repl-eval",-1784727398),msg_name)){
figwheel.client.ensure_cljs_user.call(null);

return figwheel.client.eval_javascript_STAR__STAR_.call(null,new cljs.core.Keyword(null,"code","code",1586293142).cljs$core$IFn$_invoke$arity$1(msg),opts,((function (vec__24183,map__24184,map__24184__$1,msg,msg_name,_,map__24180,map__24180__$1,opts,build_id){
return (function (res){
return figwheel.client.socket.send_BANG_.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"figwheel-event","figwheel-event",519570592),"callback",new cljs.core.Keyword(null,"callback-name","callback-name",336964714),new cljs.core.Keyword(null,"callback-name","callback-name",336964714).cljs$core$IFn$_invoke$arity$1(msg),new cljs.core.Keyword(null,"content","content",15833224),res], null));
});})(vec__24183,map__24184,map__24184__$1,msg,msg_name,_,map__24180,map__24180__$1,opts,build_id))
);
} else {
return null;
}
});
;})(map__24180,map__24180__$1,opts,build_id))
});
figwheel.client.css_reloader_plugin = (function figwheel$client$css_reloader_plugin(opts){
return (function (p__24190){
var vec__24191 = p__24190;
var map__24192 = cljs.core.nth.call(null,vec__24191,(0),null);
var map__24192__$1 = ((((!((map__24192 == null)))?((((map__24192.cljs$lang$protocol_mask$partition0$ & (64))) || (map__24192.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__24192):map__24192);
var msg = map__24192__$1;
var msg_name = cljs.core.get.call(null,map__24192__$1,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863));
var _ = cljs.core.nthnext.call(null,vec__24191,(1));
if(cljs.core._EQ_.call(null,msg_name,new cljs.core.Keyword(null,"css-files-changed","css-files-changed",720773874))){
return figwheel.client.file_reloading.reload_css_files.call(null,opts,msg);
} else {
return null;
}
});
});
figwheel.client.compile_fail_warning_plugin = (function figwheel$client$compile_fail_warning_plugin(p__24194){
var map__24204 = p__24194;
var map__24204__$1 = ((((!((map__24204 == null)))?((((map__24204.cljs$lang$protocol_mask$partition0$ & (64))) || (map__24204.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__24204):map__24204);
var on_compile_warning = cljs.core.get.call(null,map__24204__$1,new cljs.core.Keyword(null,"on-compile-warning","on-compile-warning",-1195585947));
var on_compile_fail = cljs.core.get.call(null,map__24204__$1,new cljs.core.Keyword(null,"on-compile-fail","on-compile-fail",728013036));
return ((function (map__24204,map__24204__$1,on_compile_warning,on_compile_fail){
return (function (p__24206){
var vec__24207 = p__24206;
var map__24208 = cljs.core.nth.call(null,vec__24207,(0),null);
var map__24208__$1 = ((((!((map__24208 == null)))?((((map__24208.cljs$lang$protocol_mask$partition0$ & (64))) || (map__24208.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__24208):map__24208);
var msg = map__24208__$1;
var msg_name = cljs.core.get.call(null,map__24208__$1,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863));
var _ = cljs.core.nthnext.call(null,vec__24207,(1));
var pred__24210 = cljs.core._EQ_;
var expr__24211 = msg_name;
if(cljs.core.truth_(pred__24210.call(null,new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356),expr__24211))){
return on_compile_warning.call(null,msg);
} else {
if(cljs.core.truth_(pred__24210.call(null,new cljs.core.Keyword(null,"compile-failed","compile-failed",-477639289),expr__24211))){
return on_compile_fail.call(null,msg);
} else {
return null;
}
}
});
;})(map__24204,map__24204__$1,on_compile_warning,on_compile_fail))
});
figwheel.client.heads_up_plugin_msg_handler = (function figwheel$client$heads_up_plugin_msg_handler(opts,msg_hist_SINGLEQUOTE_){
var msg_hist = figwheel.client.focus_msgs.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"compile-failed","compile-failed",-477639289),null,new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356),null,new cljs.core.Keyword(null,"files-changed","files-changed",-1418200563),null], null), null),msg_hist_SINGLEQUOTE_);
var msg_names = cljs.core.map.call(null,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863),msg_hist);
var msg = cljs.core.first.call(null,msg_hist);
var c__19696__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__19696__auto__,msg_hist,msg_names,msg){
return (function (){
var f__19697__auto__ = (function (){var switch__19584__auto__ = ((function (c__19696__auto__,msg_hist,msg_names,msg){
return (function (state_24427){
var state_val_24428 = (state_24427[(1)]);
if((state_val_24428 === (7))){
var inst_24351 = (state_24427[(2)]);
var state_24427__$1 = state_24427;
if(cljs.core.truth_(inst_24351)){
var statearr_24429_24475 = state_24427__$1;
(statearr_24429_24475[(1)] = (8));

} else {
var statearr_24430_24476 = state_24427__$1;
(statearr_24430_24476[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24428 === (20))){
var inst_24421 = (state_24427[(2)]);
var state_24427__$1 = state_24427;
var statearr_24431_24477 = state_24427__$1;
(statearr_24431_24477[(2)] = inst_24421);

(statearr_24431_24477[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24428 === (27))){
var inst_24417 = (state_24427[(2)]);
var state_24427__$1 = state_24427;
var statearr_24432_24478 = state_24427__$1;
(statearr_24432_24478[(2)] = inst_24417);

(statearr_24432_24478[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24428 === (1))){
var inst_24344 = figwheel.client.reload_file_state_QMARK_.call(null,msg_names,opts);
var state_24427__$1 = state_24427;
if(cljs.core.truth_(inst_24344)){
var statearr_24433_24479 = state_24427__$1;
(statearr_24433_24479[(1)] = (2));

} else {
var statearr_24434_24480 = state_24427__$1;
(statearr_24434_24480[(1)] = (3));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24428 === (24))){
var inst_24419 = (state_24427[(2)]);
var state_24427__$1 = state_24427;
var statearr_24435_24481 = state_24427__$1;
(statearr_24435_24481[(2)] = inst_24419);

(statearr_24435_24481[(1)] = (20));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24428 === (4))){
var inst_24425 = (state_24427[(2)]);
var state_24427__$1 = state_24427;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_24427__$1,inst_24425);
} else {
if((state_val_24428 === (15))){
var inst_24423 = (state_24427[(2)]);
var state_24427__$1 = state_24427;
var statearr_24436_24482 = state_24427__$1;
(statearr_24436_24482[(2)] = inst_24423);

(statearr_24436_24482[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24428 === (21))){
var inst_24382 = (state_24427[(2)]);
var state_24427__$1 = state_24427;
var statearr_24437_24483 = state_24427__$1;
(statearr_24437_24483[(2)] = inst_24382);

(statearr_24437_24483[(1)] = (20));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24428 === (31))){
var inst_24406 = figwheel.client.css_loaded_state_QMARK_.call(null,msg_names);
var state_24427__$1 = state_24427;
if(cljs.core.truth_(inst_24406)){
var statearr_24438_24484 = state_24427__$1;
(statearr_24438_24484[(1)] = (34));

} else {
var statearr_24439_24485 = state_24427__$1;
(statearr_24439_24485[(1)] = (35));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24428 === (32))){
var inst_24415 = (state_24427[(2)]);
var state_24427__$1 = state_24427;
var statearr_24440_24486 = state_24427__$1;
(statearr_24440_24486[(2)] = inst_24415);

(statearr_24440_24486[(1)] = (27));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24428 === (33))){
var inst_24404 = (state_24427[(2)]);
var state_24427__$1 = state_24427;
var statearr_24441_24487 = state_24427__$1;
(statearr_24441_24487[(2)] = inst_24404);

(statearr_24441_24487[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24428 === (13))){
var inst_24365 = figwheel.client.heads_up.clear.call(null);
var state_24427__$1 = state_24427;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_24427__$1,(16),inst_24365);
} else {
if((state_val_24428 === (22))){
var inst_24386 = new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(msg);
var inst_24387 = figwheel.client.heads_up.append_message.call(null,inst_24386);
var state_24427__$1 = state_24427;
var statearr_24442_24488 = state_24427__$1;
(statearr_24442_24488[(2)] = inst_24387);

(statearr_24442_24488[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24428 === (36))){
var inst_24413 = (state_24427[(2)]);
var state_24427__$1 = state_24427;
var statearr_24443_24489 = state_24427__$1;
(statearr_24443_24489[(2)] = inst_24413);

(statearr_24443_24489[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24428 === (29))){
var inst_24397 = (state_24427[(2)]);
var state_24427__$1 = state_24427;
var statearr_24444_24490 = state_24427__$1;
(statearr_24444_24490[(2)] = inst_24397);

(statearr_24444_24490[(1)] = (27));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24428 === (6))){
var inst_24346 = (state_24427[(7)]);
var state_24427__$1 = state_24427;
var statearr_24445_24491 = state_24427__$1;
(statearr_24445_24491[(2)] = inst_24346);

(statearr_24445_24491[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24428 === (28))){
var inst_24393 = (state_24427[(2)]);
var inst_24394 = new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(msg);
var inst_24395 = figwheel.client.heads_up.display_warning.call(null,inst_24394);
var state_24427__$1 = (function (){var statearr_24446 = state_24427;
(statearr_24446[(8)] = inst_24393);

return statearr_24446;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_24427__$1,(29),inst_24395);
} else {
if((state_val_24428 === (25))){
var inst_24391 = figwheel.client.heads_up.clear.call(null);
var state_24427__$1 = state_24427;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_24427__$1,(28),inst_24391);
} else {
if((state_val_24428 === (34))){
var inst_24408 = figwheel.client.heads_up.flash_loaded.call(null);
var state_24427__$1 = state_24427;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_24427__$1,(37),inst_24408);
} else {
if((state_val_24428 === (17))){
var inst_24373 = (state_24427[(2)]);
var state_24427__$1 = state_24427;
var statearr_24447_24492 = state_24427__$1;
(statearr_24447_24492[(2)] = inst_24373);

(statearr_24447_24492[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24428 === (3))){
var inst_24363 = figwheel.client.compile_refail_state_QMARK_.call(null,msg_names);
var state_24427__$1 = state_24427;
if(cljs.core.truth_(inst_24363)){
var statearr_24448_24493 = state_24427__$1;
(statearr_24448_24493[(1)] = (13));

} else {
var statearr_24449_24494 = state_24427__$1;
(statearr_24449_24494[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24428 === (12))){
var inst_24359 = (state_24427[(2)]);
var state_24427__$1 = state_24427;
var statearr_24450_24495 = state_24427__$1;
(statearr_24450_24495[(2)] = inst_24359);

(statearr_24450_24495[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24428 === (2))){
var inst_24346 = (state_24427[(7)]);
var inst_24346__$1 = figwheel.client.autoload_QMARK_.call(null);
var state_24427__$1 = (function (){var statearr_24451 = state_24427;
(statearr_24451[(7)] = inst_24346__$1);

return statearr_24451;
})();
if(cljs.core.truth_(inst_24346__$1)){
var statearr_24452_24496 = state_24427__$1;
(statearr_24452_24496[(1)] = (5));

} else {
var statearr_24453_24497 = state_24427__$1;
(statearr_24453_24497[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24428 === (23))){
var inst_24389 = figwheel.client.rewarning_state_QMARK_.call(null,msg_names);
var state_24427__$1 = state_24427;
if(cljs.core.truth_(inst_24389)){
var statearr_24454_24498 = state_24427__$1;
(statearr_24454_24498[(1)] = (25));

} else {
var statearr_24455_24499 = state_24427__$1;
(statearr_24455_24499[(1)] = (26));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24428 === (35))){
var state_24427__$1 = state_24427;
var statearr_24456_24500 = state_24427__$1;
(statearr_24456_24500[(2)] = null);

(statearr_24456_24500[(1)] = (36));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24428 === (19))){
var inst_24384 = figwheel.client.warning_append_state_QMARK_.call(null,msg_names);
var state_24427__$1 = state_24427;
if(cljs.core.truth_(inst_24384)){
var statearr_24457_24501 = state_24427__$1;
(statearr_24457_24501[(1)] = (22));

} else {
var statearr_24458_24502 = state_24427__$1;
(statearr_24458_24502[(1)] = (23));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24428 === (11))){
var inst_24355 = (state_24427[(2)]);
var state_24427__$1 = state_24427;
var statearr_24459_24503 = state_24427__$1;
(statearr_24459_24503[(2)] = inst_24355);

(statearr_24459_24503[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24428 === (9))){
var inst_24357 = figwheel.client.heads_up.clear.call(null);
var state_24427__$1 = state_24427;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_24427__$1,(12),inst_24357);
} else {
if((state_val_24428 === (5))){
var inst_24348 = new cljs.core.Keyword(null,"autoload","autoload",-354122500).cljs$core$IFn$_invoke$arity$1(opts);
var state_24427__$1 = state_24427;
var statearr_24460_24504 = state_24427__$1;
(statearr_24460_24504[(2)] = inst_24348);

(statearr_24460_24504[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24428 === (14))){
var inst_24375 = figwheel.client.compile_fail_state_QMARK_.call(null,msg_names);
var state_24427__$1 = state_24427;
if(cljs.core.truth_(inst_24375)){
var statearr_24461_24505 = state_24427__$1;
(statearr_24461_24505[(1)] = (18));

} else {
var statearr_24462_24506 = state_24427__$1;
(statearr_24462_24506[(1)] = (19));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24428 === (26))){
var inst_24399 = figwheel.client.warning_state_QMARK_.call(null,msg_names);
var state_24427__$1 = state_24427;
if(cljs.core.truth_(inst_24399)){
var statearr_24463_24507 = state_24427__$1;
(statearr_24463_24507[(1)] = (30));

} else {
var statearr_24464_24508 = state_24427__$1;
(statearr_24464_24508[(1)] = (31));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24428 === (16))){
var inst_24367 = (state_24427[(2)]);
var inst_24368 = new cljs.core.Keyword(null,"exception-data","exception-data",-512474886).cljs$core$IFn$_invoke$arity$1(msg);
var inst_24369 = figwheel.client.format_messages.call(null,inst_24368);
var inst_24370 = new cljs.core.Keyword(null,"cause","cause",231901252).cljs$core$IFn$_invoke$arity$1(msg);
var inst_24371 = figwheel.client.heads_up.display_error.call(null,inst_24369,inst_24370);
var state_24427__$1 = (function (){var statearr_24465 = state_24427;
(statearr_24465[(9)] = inst_24367);

return statearr_24465;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_24427__$1,(17),inst_24371);
} else {
if((state_val_24428 === (30))){
var inst_24401 = new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(msg);
var inst_24402 = figwheel.client.heads_up.display_warning.call(null,inst_24401);
var state_24427__$1 = state_24427;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_24427__$1,(33),inst_24402);
} else {
if((state_val_24428 === (10))){
var inst_24361 = (state_24427[(2)]);
var state_24427__$1 = state_24427;
var statearr_24466_24509 = state_24427__$1;
(statearr_24466_24509[(2)] = inst_24361);

(statearr_24466_24509[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24428 === (18))){
var inst_24377 = new cljs.core.Keyword(null,"exception-data","exception-data",-512474886).cljs$core$IFn$_invoke$arity$1(msg);
var inst_24378 = figwheel.client.format_messages.call(null,inst_24377);
var inst_24379 = new cljs.core.Keyword(null,"cause","cause",231901252).cljs$core$IFn$_invoke$arity$1(msg);
var inst_24380 = figwheel.client.heads_up.display_error.call(null,inst_24378,inst_24379);
var state_24427__$1 = state_24427;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_24427__$1,(21),inst_24380);
} else {
if((state_val_24428 === (37))){
var inst_24410 = (state_24427[(2)]);
var state_24427__$1 = state_24427;
var statearr_24467_24510 = state_24427__$1;
(statearr_24467_24510[(2)] = inst_24410);

(statearr_24467_24510[(1)] = (36));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24428 === (8))){
var inst_24353 = figwheel.client.heads_up.flash_loaded.call(null);
var state_24427__$1 = state_24427;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_24427__$1,(11),inst_24353);
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
});})(c__19696__auto__,msg_hist,msg_names,msg))
;
return ((function (switch__19584__auto__,c__19696__auto__,msg_hist,msg_names,msg){
return (function() {
var figwheel$client$heads_up_plugin_msg_handler_$_state_machine__19585__auto__ = null;
var figwheel$client$heads_up_plugin_msg_handler_$_state_machine__19585__auto____0 = (function (){
var statearr_24471 = [null,null,null,null,null,null,null,null,null,null];
(statearr_24471[(0)] = figwheel$client$heads_up_plugin_msg_handler_$_state_machine__19585__auto__);

(statearr_24471[(1)] = (1));

return statearr_24471;
});
var figwheel$client$heads_up_plugin_msg_handler_$_state_machine__19585__auto____1 = (function (state_24427){
while(true){
var ret_value__19586__auto__ = (function (){try{while(true){
var result__19587__auto__ = switch__19584__auto__.call(null,state_24427);
if(cljs.core.keyword_identical_QMARK_.call(null,result__19587__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__19587__auto__;
}
break;
}
}catch (e24472){if((e24472 instanceof Object)){
var ex__19588__auto__ = e24472;
var statearr_24473_24511 = state_24427;
(statearr_24473_24511[(5)] = ex__19588__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_24427);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e24472;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__19586__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__24512 = state_24427;
state_24427 = G__24512;
continue;
} else {
return ret_value__19586__auto__;
}
break;
}
});
figwheel$client$heads_up_plugin_msg_handler_$_state_machine__19585__auto__ = function(state_24427){
switch(arguments.length){
case 0:
return figwheel$client$heads_up_plugin_msg_handler_$_state_machine__19585__auto____0.call(this);
case 1:
return figwheel$client$heads_up_plugin_msg_handler_$_state_machine__19585__auto____1.call(this,state_24427);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$heads_up_plugin_msg_handler_$_state_machine__19585__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$heads_up_plugin_msg_handler_$_state_machine__19585__auto____0;
figwheel$client$heads_up_plugin_msg_handler_$_state_machine__19585__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$heads_up_plugin_msg_handler_$_state_machine__19585__auto____1;
return figwheel$client$heads_up_plugin_msg_handler_$_state_machine__19585__auto__;
})()
;})(switch__19584__auto__,c__19696__auto__,msg_hist,msg_names,msg))
})();
var state__19698__auto__ = (function (){var statearr_24474 = f__19697__auto__.call(null);
(statearr_24474[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__19696__auto__);

return statearr_24474;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__19698__auto__);
});})(c__19696__auto__,msg_hist,msg_names,msg))
);

return c__19696__auto__;
});
figwheel.client.heads_up_plugin = (function figwheel$client$heads_up_plugin(opts){
var ch = cljs.core.async.chan.call(null);
figwheel.client.heads_up_config_options_STAR__STAR_ = opts;

var c__19696__auto___24575 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__19696__auto___24575,ch){
return (function (){
var f__19697__auto__ = (function (){var switch__19584__auto__ = ((function (c__19696__auto___24575,ch){
return (function (state_24558){
var state_val_24559 = (state_24558[(1)]);
if((state_val_24559 === (1))){
var state_24558__$1 = state_24558;
var statearr_24560_24576 = state_24558__$1;
(statearr_24560_24576[(2)] = null);

(statearr_24560_24576[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24559 === (2))){
var state_24558__$1 = state_24558;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_24558__$1,(4),ch);
} else {
if((state_val_24559 === (3))){
var inst_24556 = (state_24558[(2)]);
var state_24558__$1 = state_24558;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_24558__$1,inst_24556);
} else {
if((state_val_24559 === (4))){
var inst_24546 = (state_24558[(7)]);
var inst_24546__$1 = (state_24558[(2)]);
var state_24558__$1 = (function (){var statearr_24561 = state_24558;
(statearr_24561[(7)] = inst_24546__$1);

return statearr_24561;
})();
if(cljs.core.truth_(inst_24546__$1)){
var statearr_24562_24577 = state_24558__$1;
(statearr_24562_24577[(1)] = (5));

} else {
var statearr_24563_24578 = state_24558__$1;
(statearr_24563_24578[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24559 === (5))){
var inst_24546 = (state_24558[(7)]);
var inst_24548 = figwheel.client.heads_up_plugin_msg_handler.call(null,opts,inst_24546);
var state_24558__$1 = state_24558;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_24558__$1,(8),inst_24548);
} else {
if((state_val_24559 === (6))){
var state_24558__$1 = state_24558;
var statearr_24564_24579 = state_24558__$1;
(statearr_24564_24579[(2)] = null);

(statearr_24564_24579[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24559 === (7))){
var inst_24554 = (state_24558[(2)]);
var state_24558__$1 = state_24558;
var statearr_24565_24580 = state_24558__$1;
(statearr_24565_24580[(2)] = inst_24554);

(statearr_24565_24580[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24559 === (8))){
var inst_24550 = (state_24558[(2)]);
var state_24558__$1 = (function (){var statearr_24566 = state_24558;
(statearr_24566[(8)] = inst_24550);

return statearr_24566;
})();
var statearr_24567_24581 = state_24558__$1;
(statearr_24567_24581[(2)] = null);

(statearr_24567_24581[(1)] = (2));


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
});})(c__19696__auto___24575,ch))
;
return ((function (switch__19584__auto__,c__19696__auto___24575,ch){
return (function() {
var figwheel$client$heads_up_plugin_$_state_machine__19585__auto__ = null;
var figwheel$client$heads_up_plugin_$_state_machine__19585__auto____0 = (function (){
var statearr_24571 = [null,null,null,null,null,null,null,null,null];
(statearr_24571[(0)] = figwheel$client$heads_up_plugin_$_state_machine__19585__auto__);

(statearr_24571[(1)] = (1));

return statearr_24571;
});
var figwheel$client$heads_up_plugin_$_state_machine__19585__auto____1 = (function (state_24558){
while(true){
var ret_value__19586__auto__ = (function (){try{while(true){
var result__19587__auto__ = switch__19584__auto__.call(null,state_24558);
if(cljs.core.keyword_identical_QMARK_.call(null,result__19587__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__19587__auto__;
}
break;
}
}catch (e24572){if((e24572 instanceof Object)){
var ex__19588__auto__ = e24572;
var statearr_24573_24582 = state_24558;
(statearr_24573_24582[(5)] = ex__19588__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_24558);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e24572;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__19586__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__24583 = state_24558;
state_24558 = G__24583;
continue;
} else {
return ret_value__19586__auto__;
}
break;
}
});
figwheel$client$heads_up_plugin_$_state_machine__19585__auto__ = function(state_24558){
switch(arguments.length){
case 0:
return figwheel$client$heads_up_plugin_$_state_machine__19585__auto____0.call(this);
case 1:
return figwheel$client$heads_up_plugin_$_state_machine__19585__auto____1.call(this,state_24558);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$heads_up_plugin_$_state_machine__19585__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$heads_up_plugin_$_state_machine__19585__auto____0;
figwheel$client$heads_up_plugin_$_state_machine__19585__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$heads_up_plugin_$_state_machine__19585__auto____1;
return figwheel$client$heads_up_plugin_$_state_machine__19585__auto__;
})()
;})(switch__19584__auto__,c__19696__auto___24575,ch))
})();
var state__19698__auto__ = (function (){var statearr_24574 = f__19697__auto__.call(null);
(statearr_24574[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__19696__auto___24575);

return statearr_24574;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__19698__auto__);
});})(c__19696__auto___24575,ch))
);


figwheel.client.heads_up.ensure_container.call(null);

return ((function (ch){
return (function (msg_hist){
cljs.core.async.put_BANG_.call(null,ch,msg_hist);

return msg_hist;
});
;})(ch))
});
figwheel.client.enforce_project_plugin = (function figwheel$client$enforce_project_plugin(opts){
return (function (msg_hist){
if(((1) < cljs.core.count.call(null,cljs.core.set.call(null,cljs.core.keep.call(null,new cljs.core.Keyword(null,"project-id","project-id",206449307),cljs.core.take.call(null,(5),msg_hist)))))){
figwheel.client.socket.close_BANG_.call(null);

console.error("Figwheel: message received from different project. Shutting socket down.");

if(cljs.core.truth_(new cljs.core.Keyword(null,"heads-up-display","heads-up-display",-896577202).cljs$core$IFn$_invoke$arity$1(opts))){
var c__19696__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__19696__auto__){
return (function (){
var f__19697__auto__ = (function (){var switch__19584__auto__ = ((function (c__19696__auto__){
return (function (state_24604){
var state_val_24605 = (state_24604[(1)]);
if((state_val_24605 === (1))){
var inst_24599 = cljs.core.async.timeout.call(null,(3000));
var state_24604__$1 = state_24604;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_24604__$1,(2),inst_24599);
} else {
if((state_val_24605 === (2))){
var inst_24601 = (state_24604[(2)]);
var inst_24602 = figwheel.client.heads_up.display_system_warning.call(null,"Connection from different project","Shutting connection down!!!!!");
var state_24604__$1 = (function (){var statearr_24606 = state_24604;
(statearr_24606[(7)] = inst_24601);

return statearr_24606;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_24604__$1,inst_24602);
} else {
return null;
}
}
});})(c__19696__auto__))
;
return ((function (switch__19584__auto__,c__19696__auto__){
return (function() {
var figwheel$client$enforce_project_plugin_$_state_machine__19585__auto__ = null;
var figwheel$client$enforce_project_plugin_$_state_machine__19585__auto____0 = (function (){
var statearr_24610 = [null,null,null,null,null,null,null,null];
(statearr_24610[(0)] = figwheel$client$enforce_project_plugin_$_state_machine__19585__auto__);

(statearr_24610[(1)] = (1));

return statearr_24610;
});
var figwheel$client$enforce_project_plugin_$_state_machine__19585__auto____1 = (function (state_24604){
while(true){
var ret_value__19586__auto__ = (function (){try{while(true){
var result__19587__auto__ = switch__19584__auto__.call(null,state_24604);
if(cljs.core.keyword_identical_QMARK_.call(null,result__19587__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__19587__auto__;
}
break;
}
}catch (e24611){if((e24611 instanceof Object)){
var ex__19588__auto__ = e24611;
var statearr_24612_24614 = state_24604;
(statearr_24612_24614[(5)] = ex__19588__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_24604);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e24611;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__19586__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__24615 = state_24604;
state_24604 = G__24615;
continue;
} else {
return ret_value__19586__auto__;
}
break;
}
});
figwheel$client$enforce_project_plugin_$_state_machine__19585__auto__ = function(state_24604){
switch(arguments.length){
case 0:
return figwheel$client$enforce_project_plugin_$_state_machine__19585__auto____0.call(this);
case 1:
return figwheel$client$enforce_project_plugin_$_state_machine__19585__auto____1.call(this,state_24604);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$enforce_project_plugin_$_state_machine__19585__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$enforce_project_plugin_$_state_machine__19585__auto____0;
figwheel$client$enforce_project_plugin_$_state_machine__19585__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$enforce_project_plugin_$_state_machine__19585__auto____1;
return figwheel$client$enforce_project_plugin_$_state_machine__19585__auto__;
})()
;})(switch__19584__auto__,c__19696__auto__))
})();
var state__19698__auto__ = (function (){var statearr_24613 = f__19697__auto__.call(null);
(statearr_24613[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__19696__auto__);

return statearr_24613;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__19698__auto__);
});})(c__19696__auto__))
);

return c__19696__auto__;
} else {
return null;
}
} else {
return null;
}
});
});
figwheel.client.default_on_jsload = cljs.core.identity;
figwheel.client.default_on_compile_fail = (function figwheel$client$default_on_compile_fail(p__24616){
var map__24623 = p__24616;
var map__24623__$1 = ((((!((map__24623 == null)))?((((map__24623.cljs$lang$protocol_mask$partition0$ & (64))) || (map__24623.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__24623):map__24623);
var ed = map__24623__$1;
var formatted_exception = cljs.core.get.call(null,map__24623__$1,new cljs.core.Keyword(null,"formatted-exception","formatted-exception",-116489026));
var exception_data = cljs.core.get.call(null,map__24623__$1,new cljs.core.Keyword(null,"exception-data","exception-data",-512474886));
var cause = cljs.core.get.call(null,map__24623__$1,new cljs.core.Keyword(null,"cause","cause",231901252));
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: Compile Exception");

var seq__24625_24629 = cljs.core.seq.call(null,figwheel.client.format_messages.call(null,exception_data));
var chunk__24626_24630 = null;
var count__24627_24631 = (0);
var i__24628_24632 = (0);
while(true){
if((i__24628_24632 < count__24627_24631)){
var msg_24633 = cljs.core._nth.call(null,chunk__24626_24630,i__24628_24632);
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),msg_24633);

var G__24634 = seq__24625_24629;
var G__24635 = chunk__24626_24630;
var G__24636 = count__24627_24631;
var G__24637 = (i__24628_24632 + (1));
seq__24625_24629 = G__24634;
chunk__24626_24630 = G__24635;
count__24627_24631 = G__24636;
i__24628_24632 = G__24637;
continue;
} else {
var temp__4425__auto___24638 = cljs.core.seq.call(null,seq__24625_24629);
if(temp__4425__auto___24638){
var seq__24625_24639__$1 = temp__4425__auto___24638;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__24625_24639__$1)){
var c__17643__auto___24640 = cljs.core.chunk_first.call(null,seq__24625_24639__$1);
var G__24641 = cljs.core.chunk_rest.call(null,seq__24625_24639__$1);
var G__24642 = c__17643__auto___24640;
var G__24643 = cljs.core.count.call(null,c__17643__auto___24640);
var G__24644 = (0);
seq__24625_24629 = G__24641;
chunk__24626_24630 = G__24642;
count__24627_24631 = G__24643;
i__24628_24632 = G__24644;
continue;
} else {
var msg_24645 = cljs.core.first.call(null,seq__24625_24639__$1);
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),msg_24645);

var G__24646 = cljs.core.next.call(null,seq__24625_24639__$1);
var G__24647 = null;
var G__24648 = (0);
var G__24649 = (0);
seq__24625_24629 = G__24646;
chunk__24626_24630 = G__24647;
count__24627_24631 = G__24648;
i__24628_24632 = G__24649;
continue;
}
} else {
}
}
break;
}

if(cljs.core.truth_(cause)){
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),[cljs.core.str("Error on file "),cljs.core.str(new cljs.core.Keyword(null,"file","file",-1269645878).cljs$core$IFn$_invoke$arity$1(cause)),cljs.core.str(", line "),cljs.core.str(new cljs.core.Keyword(null,"line","line",212345235).cljs$core$IFn$_invoke$arity$1(cause)),cljs.core.str(", column "),cljs.core.str(new cljs.core.Keyword(null,"column","column",2078222095).cljs$core$IFn$_invoke$arity$1(cause))].join(''));
} else {
}

return ed;
});
figwheel.client.default_on_compile_warning = (function figwheel$client$default_on_compile_warning(p__24650){
var map__24653 = p__24650;
var map__24653__$1 = ((((!((map__24653 == null)))?((((map__24653.cljs$lang$protocol_mask$partition0$ & (64))) || (map__24653.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__24653):map__24653);
var w = map__24653__$1;
var message = cljs.core.get.call(null,map__24653__$1,new cljs.core.Keyword(null,"message","message",-406056002));
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"warn","warn",-436710552),[cljs.core.str("Figwheel: Compile Warning - "),cljs.core.str(message)].join(''));

return w;
});
figwheel.client.default_before_load = (function figwheel$client$default_before_load(files){
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: notified of file changes");

return files;
});
figwheel.client.default_on_cssload = (function figwheel$client$default_on_cssload(files){
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: loaded CSS files");

figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),cljs.core.pr_str.call(null,cljs.core.map.call(null,new cljs.core.Keyword(null,"file","file",-1269645878),files)));

return files;
});
if(typeof figwheel.client.config_defaults !== 'undefined'){
} else {
figwheel.client.config_defaults = cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"on-compile-warning","on-compile-warning",-1195585947),new cljs.core.Keyword(null,"on-jsload","on-jsload",-395756602),new cljs.core.Keyword(null,"reload-dependents","reload-dependents",-956865430),new cljs.core.Keyword(null,"on-compile-fail","on-compile-fail",728013036),new cljs.core.Keyword(null,"debug","debug",-1608172596),new cljs.core.Keyword(null,"heads-up-display","heads-up-display",-896577202),new cljs.core.Keyword(null,"websocket-url","websocket-url",-490444938),new cljs.core.Keyword(null,"before-jsload","before-jsload",-847513128),new cljs.core.Keyword(null,"load-warninged-code","load-warninged-code",-2030345223),new cljs.core.Keyword(null,"eval-fn","eval-fn",-1111644294),new cljs.core.Keyword(null,"retry-count","retry-count",1936122875),new cljs.core.Keyword(null,"autoload","autoload",-354122500),new cljs.core.Keyword(null,"on-cssload","on-cssload",1825432318)],[figwheel.client.default_on_compile_warning,figwheel.client.default_on_jsload,true,figwheel.client.default_on_compile_fail,false,true,[cljs.core.str("ws://"),cljs.core.str((cljs.core.truth_(figwheel.client.utils.html_env_QMARK_.call(null))?location.host:"localhost:3449")),cljs.core.str("/figwheel-ws")].join(''),figwheel.client.default_before_load,false,false,(100),true,figwheel.client.default_on_cssload]);
}
figwheel.client.handle_deprecated_jsload_callback = (function figwheel$client$handle_deprecated_jsload_callback(config){
if(cljs.core.truth_(new cljs.core.Keyword(null,"jsload-callback","jsload-callback",-1949628369).cljs$core$IFn$_invoke$arity$1(config))){
return cljs.core.dissoc.call(null,cljs.core.assoc.call(null,config,new cljs.core.Keyword(null,"on-jsload","on-jsload",-395756602),new cljs.core.Keyword(null,"jsload-callback","jsload-callback",-1949628369).cljs$core$IFn$_invoke$arity$1(config)),new cljs.core.Keyword(null,"jsload-callback","jsload-callback",-1949628369));
} else {
return config;
}
});
figwheel.client.base_plugins = (function figwheel$client$base_plugins(system_options){
var base = new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"enforce-project-plugin","enforce-project-plugin",959402899),figwheel.client.enforce_project_plugin,new cljs.core.Keyword(null,"file-reloader-plugin","file-reloader-plugin",-1792964733),figwheel.client.file_reloader_plugin,new cljs.core.Keyword(null,"comp-fail-warning-plugin","comp-fail-warning-plugin",634311),figwheel.client.compile_fail_warning_plugin,new cljs.core.Keyword(null,"css-reloader-plugin","css-reloader-plugin",2002032904),figwheel.client.css_reloader_plugin,new cljs.core.Keyword(null,"repl-plugin","repl-plugin",-1138952371),figwheel.client.repl_plugin], null);
var base__$1 = ((cljs.core.not.call(null,figwheel.client.utils.html_env_QMARK_.call(null)))?cljs.core.select_keys.call(null,base,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"file-reloader-plugin","file-reloader-plugin",-1792964733),new cljs.core.Keyword(null,"comp-fail-warning-plugin","comp-fail-warning-plugin",634311),new cljs.core.Keyword(null,"repl-plugin","repl-plugin",-1138952371)], null)):base);
var base__$2 = ((new cljs.core.Keyword(null,"autoload","autoload",-354122500).cljs$core$IFn$_invoke$arity$1(system_options) === false)?cljs.core.dissoc.call(null,base__$1,new cljs.core.Keyword(null,"file-reloader-plugin","file-reloader-plugin",-1792964733)):base__$1);
if(cljs.core.truth_((function (){var and__16828__auto__ = new cljs.core.Keyword(null,"heads-up-display","heads-up-display",-896577202).cljs$core$IFn$_invoke$arity$1(system_options);
if(cljs.core.truth_(and__16828__auto__)){
return figwheel.client.utils.html_env_QMARK_.call(null);
} else {
return and__16828__auto__;
}
})())){
return cljs.core.assoc.call(null,base__$2,new cljs.core.Keyword(null,"heads-up-display-plugin","heads-up-display-plugin",1745207501),figwheel.client.heads_up_plugin);
} else {
return base__$2;
}
});
figwheel.client.add_message_watch = (function figwheel$client$add_message_watch(key,callback){
return cljs.core.add_watch.call(null,figwheel.client.socket.message_history_atom,key,(function (_,___$1,___$2,msg_hist){
return callback.call(null,cljs.core.first.call(null,msg_hist));
}));
});
figwheel.client.add_plugins = (function figwheel$client$add_plugins(plugins,system_options){
var seq__24661 = cljs.core.seq.call(null,plugins);
var chunk__24662 = null;
var count__24663 = (0);
var i__24664 = (0);
while(true){
if((i__24664 < count__24663)){
var vec__24665 = cljs.core._nth.call(null,chunk__24662,i__24664);
var k = cljs.core.nth.call(null,vec__24665,(0),null);
var plugin = cljs.core.nth.call(null,vec__24665,(1),null);
if(cljs.core.truth_(plugin)){
var pl_24667 = plugin.call(null,system_options);
cljs.core.add_watch.call(null,figwheel.client.socket.message_history_atom,k,((function (seq__24661,chunk__24662,count__24663,i__24664,pl_24667,vec__24665,k,plugin){
return (function (_,___$1,___$2,msg_hist){
return pl_24667.call(null,msg_hist);
});})(seq__24661,chunk__24662,count__24663,i__24664,pl_24667,vec__24665,k,plugin))
);
} else {
}

var G__24668 = seq__24661;
var G__24669 = chunk__24662;
var G__24670 = count__24663;
var G__24671 = (i__24664 + (1));
seq__24661 = G__24668;
chunk__24662 = G__24669;
count__24663 = G__24670;
i__24664 = G__24671;
continue;
} else {
var temp__4425__auto__ = cljs.core.seq.call(null,seq__24661);
if(temp__4425__auto__){
var seq__24661__$1 = temp__4425__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__24661__$1)){
var c__17643__auto__ = cljs.core.chunk_first.call(null,seq__24661__$1);
var G__24672 = cljs.core.chunk_rest.call(null,seq__24661__$1);
var G__24673 = c__17643__auto__;
var G__24674 = cljs.core.count.call(null,c__17643__auto__);
var G__24675 = (0);
seq__24661 = G__24672;
chunk__24662 = G__24673;
count__24663 = G__24674;
i__24664 = G__24675;
continue;
} else {
var vec__24666 = cljs.core.first.call(null,seq__24661__$1);
var k = cljs.core.nth.call(null,vec__24666,(0),null);
var plugin = cljs.core.nth.call(null,vec__24666,(1),null);
if(cljs.core.truth_(plugin)){
var pl_24676 = plugin.call(null,system_options);
cljs.core.add_watch.call(null,figwheel.client.socket.message_history_atom,k,((function (seq__24661,chunk__24662,count__24663,i__24664,pl_24676,vec__24666,k,plugin,seq__24661__$1,temp__4425__auto__){
return (function (_,___$1,___$2,msg_hist){
return pl_24676.call(null,msg_hist);
});})(seq__24661,chunk__24662,count__24663,i__24664,pl_24676,vec__24666,k,plugin,seq__24661__$1,temp__4425__auto__))
);
} else {
}

var G__24677 = cljs.core.next.call(null,seq__24661__$1);
var G__24678 = null;
var G__24679 = (0);
var G__24680 = (0);
seq__24661 = G__24677;
chunk__24662 = G__24678;
count__24663 = G__24679;
i__24664 = G__24680;
continue;
}
} else {
return null;
}
}
break;
}
});
figwheel.client.start = (function figwheel$client$start(var_args){
var args24681 = [];
var len__17898__auto___24684 = arguments.length;
var i__17899__auto___24685 = (0);
while(true){
if((i__17899__auto___24685 < len__17898__auto___24684)){
args24681.push((arguments[i__17899__auto___24685]));

var G__24686 = (i__17899__auto___24685 + (1));
i__17899__auto___24685 = G__24686;
continue;
} else {
}
break;
}

var G__24683 = args24681.length;
switch (G__24683) {
case 1:
return figwheel.client.start.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 0:
return figwheel.client.start.cljs$core$IFn$_invoke$arity$0();

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args24681.length)].join('')));

}
});

figwheel.client.start.cljs$core$IFn$_invoke$arity$1 = (function (opts){
if((goog.dependencies_ == null)){
return null;
} else {
if(typeof figwheel.client.__figwheel_start_once__ !== 'undefined'){
return null;
} else {
figwheel.client.__figwheel_start_once__ = setTimeout((function (){
var plugins_SINGLEQUOTE_ = new cljs.core.Keyword(null,"plugins","plugins",1900073717).cljs$core$IFn$_invoke$arity$1(opts);
var merge_plugins = new cljs.core.Keyword(null,"merge-plugins","merge-plugins",-1193912370).cljs$core$IFn$_invoke$arity$1(opts);
var system_options = figwheel.client.handle_deprecated_jsload_callback.call(null,cljs.core.merge.call(null,figwheel.client.config_defaults,cljs.core.dissoc.call(null,opts,new cljs.core.Keyword(null,"plugins","plugins",1900073717),new cljs.core.Keyword(null,"merge-plugins","merge-plugins",-1193912370))));
var plugins = (cljs.core.truth_(plugins_SINGLEQUOTE_)?plugins_SINGLEQUOTE_:cljs.core.merge.call(null,figwheel.client.base_plugins.call(null,system_options),merge_plugins));
figwheel.client.utils._STAR_print_debug_STAR_ = new cljs.core.Keyword(null,"debug","debug",-1608172596).cljs$core$IFn$_invoke$arity$1(opts);

figwheel.client.add_plugins.call(null,plugins,system_options);

figwheel.client.file_reloading.patch_goog_base.call(null);

return figwheel.client.socket.open.call(null,system_options);
}));
}
}
});

figwheel.client.start.cljs$core$IFn$_invoke$arity$0 = (function (){
return figwheel.client.start.call(null,cljs.core.PersistentArrayMap.EMPTY);
});

figwheel.client.start.cljs$lang$maxFixedArity = 1;
figwheel.client.watch_and_reload_with_opts = figwheel.client.start;
figwheel.client.watch_and_reload = (function figwheel$client$watch_and_reload(var_args){
var args__17905__auto__ = [];
var len__17898__auto___24692 = arguments.length;
var i__17899__auto___24693 = (0);
while(true){
if((i__17899__auto___24693 < len__17898__auto___24692)){
args__17905__auto__.push((arguments[i__17899__auto___24693]));

var G__24694 = (i__17899__auto___24693 + (1));
i__17899__auto___24693 = G__24694;
continue;
} else {
}
break;
}

var argseq__17906__auto__ = ((((0) < args__17905__auto__.length))?(new cljs.core.IndexedSeq(args__17905__auto__.slice((0)),(0))):null);
return figwheel.client.watch_and_reload.cljs$core$IFn$_invoke$arity$variadic(argseq__17906__auto__);
});

figwheel.client.watch_and_reload.cljs$core$IFn$_invoke$arity$variadic = (function (p__24689){
var map__24690 = p__24689;
var map__24690__$1 = ((((!((map__24690 == null)))?((((map__24690.cljs$lang$protocol_mask$partition0$ & (64))) || (map__24690.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__24690):map__24690);
var opts = map__24690__$1;
return figwheel.client.start.call(null,opts);
});

figwheel.client.watch_and_reload.cljs$lang$maxFixedArity = (0);

figwheel.client.watch_and_reload.cljs$lang$applyTo = (function (seq24688){
return figwheel.client.watch_and_reload.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq24688));
});

//# sourceMappingURL=client.js.map?rel=1458130392093