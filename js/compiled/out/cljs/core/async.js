// Compiled by ClojureScript 1.7.170 {}
goog.provide('cljs.core.async');
goog.require('cljs.core');
goog.require('cljs.core.async.impl.channels');
goog.require('cljs.core.async.impl.dispatch');
goog.require('cljs.core.async.impl.ioc_helpers');
goog.require('cljs.core.async.impl.protocols');
goog.require('cljs.core.async.impl.buffers');
goog.require('cljs.core.async.impl.timers');
cljs.core.async.fn_handler = (function cljs$core$async$fn_handler(var_args){
var args19741 = [];
var len__17898__auto___19747 = arguments.length;
var i__17899__auto___19748 = (0);
while(true){
if((i__17899__auto___19748 < len__17898__auto___19747)){
args19741.push((arguments[i__17899__auto___19748]));

var G__19749 = (i__17899__auto___19748 + (1));
i__17899__auto___19748 = G__19749;
continue;
} else {
}
break;
}

var G__19743 = args19741.length;
switch (G__19743) {
case 1:
return cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args19741.length)].join('')));

}
});

cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1 = (function (f){
return cljs.core.async.fn_handler.call(null,f,true);
});

cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$2 = (function (f,blockable){
if(typeof cljs.core.async.t_cljs$core$async19744 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async19744 = (function (f,blockable,meta19745){
this.f = f;
this.blockable = blockable;
this.meta19745 = meta19745;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async19744.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_19746,meta19745__$1){
var self__ = this;
var _19746__$1 = this;
return (new cljs.core.async.t_cljs$core$async19744(self__.f,self__.blockable,meta19745__$1));
});

cljs.core.async.t_cljs$core$async19744.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_19746){
var self__ = this;
var _19746__$1 = this;
return self__.meta19745;
});

cljs.core.async.t_cljs$core$async19744.prototype.cljs$core$async$impl$protocols$Handler$ = true;

cljs.core.async.t_cljs$core$async19744.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
});

cljs.core.async.t_cljs$core$async19744.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.blockable;
});

cljs.core.async.t_cljs$core$async19744.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.f;
});

cljs.core.async.t_cljs$core$async19744.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"blockable","blockable",-28395259,null),new cljs.core.Symbol(null,"meta19745","meta19745",1621439524,null)], null);
});

cljs.core.async.t_cljs$core$async19744.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async19744.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async19744";

cljs.core.async.t_cljs$core$async19744.cljs$lang$ctorPrWriter = (function (this__17438__auto__,writer__17439__auto__,opt__17440__auto__){
return cljs.core._write.call(null,writer__17439__auto__,"cljs.core.async/t_cljs$core$async19744");
});

cljs.core.async.__GT_t_cljs$core$async19744 = (function cljs$core$async$__GT_t_cljs$core$async19744(f__$1,blockable__$1,meta19745){
return (new cljs.core.async.t_cljs$core$async19744(f__$1,blockable__$1,meta19745));
});

}

return (new cljs.core.async.t_cljs$core$async19744(f,blockable,cljs.core.PersistentArrayMap.EMPTY));
});

cljs.core.async.fn_handler.cljs$lang$maxFixedArity = 2;
/**
 * Returns a fixed buffer of size n. When full, puts will block/park.
 */
cljs.core.async.buffer = (function cljs$core$async$buffer(n){
return cljs.core.async.impl.buffers.fixed_buffer.call(null,n);
});
/**
 * Returns a buffer of size n. When full, puts will complete but
 *   val will be dropped (no transfer).
 */
cljs.core.async.dropping_buffer = (function cljs$core$async$dropping_buffer(n){
return cljs.core.async.impl.buffers.dropping_buffer.call(null,n);
});
/**
 * Returns a buffer of size n. When full, puts will complete, and be
 *   buffered, but oldest elements in buffer will be dropped (not
 *   transferred).
 */
cljs.core.async.sliding_buffer = (function cljs$core$async$sliding_buffer(n){
return cljs.core.async.impl.buffers.sliding_buffer.call(null,n);
});
/**
 * Returns true if a channel created with buff will never block. That is to say,
 * puts into this buffer will never cause the buffer to be full. 
 */
cljs.core.async.unblocking_buffer_QMARK_ = (function cljs$core$async$unblocking_buffer_QMARK_(buff){
if(!((buff == null))){
if((false) || (buff.cljs$core$async$impl$protocols$UnblockingBuffer$)){
return true;
} else {
if((!buff.cljs$lang$protocol_mask$partition$)){
return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.async.impl.protocols.UnblockingBuffer,buff);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.async.impl.protocols.UnblockingBuffer,buff);
}
});
/**
 * Creates a channel with an optional buffer, an optional transducer (like (map f),
 *   (filter p) etc or a composition thereof), and an optional exception handler.
 *   If buf-or-n is a number, will create and use a fixed buffer of that size. If a
 *   transducer is supplied a buffer must be specified. ex-handler must be a
 *   fn of one argument - if an exception occurs during transformation it will be called
 *   with the thrown value as an argument, and any non-nil return value will be placed
 *   in the channel.
 */
cljs.core.async.chan = (function cljs$core$async$chan(var_args){
var args19753 = [];
var len__17898__auto___19756 = arguments.length;
var i__17899__auto___19757 = (0);
while(true){
if((i__17899__auto___19757 < len__17898__auto___19756)){
args19753.push((arguments[i__17899__auto___19757]));

var G__19758 = (i__17899__auto___19757 + (1));
i__17899__auto___19757 = G__19758;
continue;
} else {
}
break;
}

var G__19755 = args19753.length;
switch (G__19755) {
case 0:
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$0();

break;
case 1:
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args19753.length)].join('')));

}
});

cljs.core.async.chan.cljs$core$IFn$_invoke$arity$0 = (function (){
return cljs.core.async.chan.call(null,null);
});

cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1 = (function (buf_or_n){
return cljs.core.async.chan.call(null,buf_or_n,null,null);
});

cljs.core.async.chan.cljs$core$IFn$_invoke$arity$2 = (function (buf_or_n,xform){
return cljs.core.async.chan.call(null,buf_or_n,xform,null);
});

cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3 = (function (buf_or_n,xform,ex_handler){
var buf_or_n__$1 = ((cljs.core._EQ_.call(null,buf_or_n,(0)))?null:buf_or_n);
if(cljs.core.truth_(xform)){
if(cljs.core.truth_(buf_or_n__$1)){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str("buffer must be supplied when transducer is"),cljs.core.str("\n"),cljs.core.str(cljs.core.pr_str.call(null,new cljs.core.Symbol(null,"buf-or-n","buf-or-n",-1646815050,null)))].join('')));
}
} else {
}

return cljs.core.async.impl.channels.chan.call(null,((typeof buf_or_n__$1 === 'number')?cljs.core.async.buffer.call(null,buf_or_n__$1):buf_or_n__$1),xform,ex_handler);
});

cljs.core.async.chan.cljs$lang$maxFixedArity = 3;
/**
 * Creates a promise channel with an optional transducer, and an optional
 *   exception-handler. A promise channel can take exactly one value that consumers
 *   will receive. Once full, puts complete but val is dropped (no transfer).
 *   Consumers will block until either a value is placed in the channel or the
 *   channel is closed. See chan for the semantics of xform and ex-handler.
 */
cljs.core.async.promise_chan = (function cljs$core$async$promise_chan(var_args){
var args19760 = [];
var len__17898__auto___19763 = arguments.length;
var i__17899__auto___19764 = (0);
while(true){
if((i__17899__auto___19764 < len__17898__auto___19763)){
args19760.push((arguments[i__17899__auto___19764]));

var G__19765 = (i__17899__auto___19764 + (1));
i__17899__auto___19764 = G__19765;
continue;
} else {
}
break;
}

var G__19762 = args19760.length;
switch (G__19762) {
case 0:
return cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$0();

break;
case 1:
return cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args19760.length)].join('')));

}
});

cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$0 = (function (){
return cljs.core.async.promise_chan.call(null,null);
});

cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$1 = (function (xform){
return cljs.core.async.promise_chan.call(null,xform,null);
});

cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$2 = (function (xform,ex_handler){
return cljs.core.async.chan.call(null,cljs.core.async.impl.buffers.promise_buffer.call(null),xform,ex_handler);
});

cljs.core.async.promise_chan.cljs$lang$maxFixedArity = 2;
/**
 * Returns a channel that will close after msecs
 */
cljs.core.async.timeout = (function cljs$core$async$timeout(msecs){
return cljs.core.async.impl.timers.timeout.call(null,msecs);
});
/**
 * takes a val from port. Must be called inside a (go ...) block. Will
 *   return nil if closed. Will park if nothing is available.
 *   Returns true unless port is already closed
 */
cljs.core.async._LT__BANG_ = (function cljs$core$async$_LT__BANG_(port){
throw (new Error("<! used not in (go ...) block"));
});
/**
 * Asynchronously takes a val from port, passing to fn1. Will pass nil
 * if closed. If on-caller? (default true) is true, and value is
 * immediately available, will call fn1 on calling thread.
 * Returns nil.
 */
cljs.core.async.take_BANG_ = (function cljs$core$async$take_BANG_(var_args){
var args19767 = [];
var len__17898__auto___19770 = arguments.length;
var i__17899__auto___19771 = (0);
while(true){
if((i__17899__auto___19771 < len__17898__auto___19770)){
args19767.push((arguments[i__17899__auto___19771]));

var G__19772 = (i__17899__auto___19771 + (1));
i__17899__auto___19771 = G__19772;
continue;
} else {
}
break;
}

var G__19769 = args19767.length;
switch (G__19769) {
case 2:
return cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args19767.length)].join('')));

}
});

cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (port,fn1){
return cljs.core.async.take_BANG_.call(null,port,fn1,true);
});

cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (port,fn1,on_caller_QMARK_){
var ret = cljs.core.async.impl.protocols.take_BANG_.call(null,port,cljs.core.async.fn_handler.call(null,fn1));
if(cljs.core.truth_(ret)){
var val_19774 = cljs.core.deref.call(null,ret);
if(cljs.core.truth_(on_caller_QMARK_)){
fn1.call(null,val_19774);
} else {
cljs.core.async.impl.dispatch.run.call(null,((function (val_19774,ret){
return (function (){
return fn1.call(null,val_19774);
});})(val_19774,ret))
);
}
} else {
}

return null;
});

cljs.core.async.take_BANG_.cljs$lang$maxFixedArity = 3;
cljs.core.async.nop = (function cljs$core$async$nop(_){
return null;
});
cljs.core.async.fhnop = cljs.core.async.fn_handler.call(null,cljs.core.async.nop);
/**
 * puts a val into port. nil values are not allowed. Must be called
 *   inside a (go ...) block. Will park if no buffer space is available.
 *   Returns true unless port is already closed.
 */
cljs.core.async._GT__BANG_ = (function cljs$core$async$_GT__BANG_(port,val){
throw (new Error(">! used not in (go ...) block"));
});
/**
 * Asynchronously puts a val into port, calling fn0 (if supplied) when
 * complete. nil values are not allowed. Will throw if closed. If
 * on-caller? (default true) is true, and the put is immediately
 * accepted, will call fn0 on calling thread.  Returns nil.
 */
cljs.core.async.put_BANG_ = (function cljs$core$async$put_BANG_(var_args){
var args19775 = [];
var len__17898__auto___19778 = arguments.length;
var i__17899__auto___19779 = (0);
while(true){
if((i__17899__auto___19779 < len__17898__auto___19778)){
args19775.push((arguments[i__17899__auto___19779]));

var G__19780 = (i__17899__auto___19779 + (1));
i__17899__auto___19779 = G__19780;
continue;
} else {
}
break;
}

var G__19777 = args19775.length;
switch (G__19777) {
case 2:
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args19775.length)].join('')));

}
});

cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (port,val){
var temp__4423__auto__ = cljs.core.async.impl.protocols.put_BANG_.call(null,port,val,cljs.core.async.fhnop);
if(cljs.core.truth_(temp__4423__auto__)){
var ret = temp__4423__auto__;
return cljs.core.deref.call(null,ret);
} else {
return true;
}
});

cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (port,val,fn1){
return cljs.core.async.put_BANG_.call(null,port,val,fn1,true);
});

cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$4 = (function (port,val,fn1,on_caller_QMARK_){
var temp__4423__auto__ = cljs.core.async.impl.protocols.put_BANG_.call(null,port,val,cljs.core.async.fn_handler.call(null,fn1));
if(cljs.core.truth_(temp__4423__auto__)){
var retb = temp__4423__auto__;
var ret = cljs.core.deref.call(null,retb);
if(cljs.core.truth_(on_caller_QMARK_)){
fn1.call(null,ret);
} else {
cljs.core.async.impl.dispatch.run.call(null,((function (ret,retb,temp__4423__auto__){
return (function (){
return fn1.call(null,ret);
});})(ret,retb,temp__4423__auto__))
);
}

return ret;
} else {
return true;
}
});

cljs.core.async.put_BANG_.cljs$lang$maxFixedArity = 4;
cljs.core.async.close_BANG_ = (function cljs$core$async$close_BANG_(port){
return cljs.core.async.impl.protocols.close_BANG_.call(null,port);
});
cljs.core.async.random_array = (function cljs$core$async$random_array(n){
var a = (new Array(n));
var n__17743__auto___19782 = n;
var x_19783 = (0);
while(true){
if((x_19783 < n__17743__auto___19782)){
(a[x_19783] = (0));

var G__19784 = (x_19783 + (1));
x_19783 = G__19784;
continue;
} else {
}
break;
}

var i = (1);
while(true){
if(cljs.core._EQ_.call(null,i,n)){
return a;
} else {
var j = cljs.core.rand_int.call(null,i);
(a[i] = (a[j]));

(a[j] = i);

var G__19785 = (i + (1));
i = G__19785;
continue;
}
break;
}
});
cljs.core.async.alt_flag = (function cljs$core$async$alt_flag(){
var flag = cljs.core.atom.call(null,true);
if(typeof cljs.core.async.t_cljs$core$async19789 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async19789 = (function (alt_flag,flag,meta19790){
this.alt_flag = alt_flag;
this.flag = flag;
this.meta19790 = meta19790;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async19789.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (flag){
return (function (_19791,meta19790__$1){
var self__ = this;
var _19791__$1 = this;
return (new cljs.core.async.t_cljs$core$async19789(self__.alt_flag,self__.flag,meta19790__$1));
});})(flag))
;

cljs.core.async.t_cljs$core$async19789.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (flag){
return (function (_19791){
var self__ = this;
var _19791__$1 = this;
return self__.meta19790;
});})(flag))
;

cljs.core.async.t_cljs$core$async19789.prototype.cljs$core$async$impl$protocols$Handler$ = true;

cljs.core.async.t_cljs$core$async19789.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = ((function (flag){
return (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.deref.call(null,self__.flag);
});})(flag))
;

cljs.core.async.t_cljs$core$async19789.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = ((function (flag){
return (function (_){
var self__ = this;
var ___$1 = this;
return true;
});})(flag))
;

cljs.core.async.t_cljs$core$async19789.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = ((function (flag){
return (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_.call(null,self__.flag,null);

return true;
});})(flag))
;

cljs.core.async.t_cljs$core$async19789.getBasis = ((function (flag){
return (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"alt-flag","alt-flag",-1794972754,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"private","private",-558947994),true,new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(cljs.core.PersistentVector.EMPTY))], null)),new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"meta19790","meta19790",457029571,null)], null);
});})(flag))
;

cljs.core.async.t_cljs$core$async19789.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async19789.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async19789";

cljs.core.async.t_cljs$core$async19789.cljs$lang$ctorPrWriter = ((function (flag){
return (function (this__17438__auto__,writer__17439__auto__,opt__17440__auto__){
return cljs.core._write.call(null,writer__17439__auto__,"cljs.core.async/t_cljs$core$async19789");
});})(flag))
;

cljs.core.async.__GT_t_cljs$core$async19789 = ((function (flag){
return (function cljs$core$async$alt_flag_$___GT_t_cljs$core$async19789(alt_flag__$1,flag__$1,meta19790){
return (new cljs.core.async.t_cljs$core$async19789(alt_flag__$1,flag__$1,meta19790));
});})(flag))
;

}

return (new cljs.core.async.t_cljs$core$async19789(cljs$core$async$alt_flag,flag,cljs.core.PersistentArrayMap.EMPTY));
});
cljs.core.async.alt_handler = (function cljs$core$async$alt_handler(flag,cb){
if(typeof cljs.core.async.t_cljs$core$async19795 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async19795 = (function (alt_handler,flag,cb,meta19796){
this.alt_handler = alt_handler;
this.flag = flag;
this.cb = cb;
this.meta19796 = meta19796;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async19795.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_19797,meta19796__$1){
var self__ = this;
var _19797__$1 = this;
return (new cljs.core.async.t_cljs$core$async19795(self__.alt_handler,self__.flag,self__.cb,meta19796__$1));
});

cljs.core.async.t_cljs$core$async19795.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_19797){
var self__ = this;
var _19797__$1 = this;
return self__.meta19796;
});

cljs.core.async.t_cljs$core$async19795.prototype.cljs$core$async$impl$protocols$Handler$ = true;

cljs.core.async.t_cljs$core$async19795.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.active_QMARK_.call(null,self__.flag);
});

cljs.core.async.t_cljs$core$async19795.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
});

cljs.core.async.t_cljs$core$async19795.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.async.impl.protocols.commit.call(null,self__.flag);

return self__.cb;
});

cljs.core.async.t_cljs$core$async19795.getBasis = (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"alt-handler","alt-handler",963786170,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"private","private",-558947994),true,new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"cb","cb",-2064487928,null)], null)))], null)),new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"cb","cb",-2064487928,null),new cljs.core.Symbol(null,"meta19796","meta19796",-1172080414,null)], null);
});

cljs.core.async.t_cljs$core$async19795.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async19795.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async19795";

cljs.core.async.t_cljs$core$async19795.cljs$lang$ctorPrWriter = (function (this__17438__auto__,writer__17439__auto__,opt__17440__auto__){
return cljs.core._write.call(null,writer__17439__auto__,"cljs.core.async/t_cljs$core$async19795");
});

cljs.core.async.__GT_t_cljs$core$async19795 = (function cljs$core$async$alt_handler_$___GT_t_cljs$core$async19795(alt_handler__$1,flag__$1,cb__$1,meta19796){
return (new cljs.core.async.t_cljs$core$async19795(alt_handler__$1,flag__$1,cb__$1,meta19796));
});

}

return (new cljs.core.async.t_cljs$core$async19795(cljs$core$async$alt_handler,flag,cb,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * returns derefable [val port] if immediate, nil if enqueued
 */
cljs.core.async.do_alts = (function cljs$core$async$do_alts(fret,ports,opts){
var flag = cljs.core.async.alt_flag.call(null);
var n = cljs.core.count.call(null,ports);
var idxs = cljs.core.async.random_array.call(null,n);
var priority = new cljs.core.Keyword(null,"priority","priority",1431093715).cljs$core$IFn$_invoke$arity$1(opts);
var ret = (function (){var i = (0);
while(true){
if((i < n)){
var idx = (cljs.core.truth_(priority)?i:(idxs[i]));
var port = cljs.core.nth.call(null,ports,idx);
var wport = ((cljs.core.vector_QMARK_.call(null,port))?port.call(null,(0)):null);
var vbox = (cljs.core.truth_(wport)?(function (){var val = port.call(null,(1));
return cljs.core.async.impl.protocols.put_BANG_.call(null,wport,val,cljs.core.async.alt_handler.call(null,flag,((function (i,val,idx,port,wport,flag,n,idxs,priority){
return (function (p1__19798_SHARP_){
return fret.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__19798_SHARP_,wport], null));
});})(i,val,idx,port,wport,flag,n,idxs,priority))
));
})():cljs.core.async.impl.protocols.take_BANG_.call(null,port,cljs.core.async.alt_handler.call(null,flag,((function (i,idx,port,wport,flag,n,idxs,priority){
return (function (p1__19799_SHARP_){
return fret.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__19799_SHARP_,port], null));
});})(i,idx,port,wport,flag,n,idxs,priority))
)));
if(cljs.core.truth_(vbox)){
return cljs.core.async.impl.channels.box.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.deref.call(null,vbox),(function (){var or__16840__auto__ = wport;
if(cljs.core.truth_(or__16840__auto__)){
return or__16840__auto__;
} else {
return port;
}
})()], null));
} else {
var G__19800 = (i + (1));
i = G__19800;
continue;
}
} else {
return null;
}
break;
}
})();
var or__16840__auto__ = ret;
if(cljs.core.truth_(or__16840__auto__)){
return or__16840__auto__;
} else {
if(cljs.core.contains_QMARK_.call(null,opts,new cljs.core.Keyword(null,"default","default",-1987822328))){
var temp__4425__auto__ = (function (){var and__16828__auto__ = cljs.core.async.impl.protocols.active_QMARK_.call(null,flag);
if(cljs.core.truth_(and__16828__auto__)){
return cljs.core.async.impl.protocols.commit.call(null,flag);
} else {
return and__16828__auto__;
}
})();
if(cljs.core.truth_(temp__4425__auto__)){
var got = temp__4425__auto__;
return cljs.core.async.impl.channels.box.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"default","default",-1987822328).cljs$core$IFn$_invoke$arity$1(opts),new cljs.core.Keyword(null,"default","default",-1987822328)], null));
} else {
return null;
}
} else {
return null;
}
}
});
/**
 * Completes at most one of several channel operations. Must be called
 * inside a (go ...) block. ports is a vector of channel endpoints,
 * which can be either a channel to take from or a vector of
 *   [channel-to-put-to val-to-put], in any combination. Takes will be
 *   made as if by <!, and puts will be made as if by >!. Unless
 *   the :priority option is true, if more than one port operation is
 *   ready a non-deterministic choice will be made. If no operation is
 *   ready and a :default value is supplied, [default-val :default] will
 *   be returned, otherwise alts! will park until the first operation to
 *   become ready completes. Returns [val port] of the completed
 *   operation, where val is the value taken for takes, and a
 *   boolean (true unless already closed, as per put!) for puts.
 * 
 *   opts are passed as :key val ... Supported options:
 * 
 *   :default val - the value to use if none of the operations are immediately ready
 *   :priority true - (default nil) when true, the operations will be tried in order.
 * 
 *   Note: there is no guarantee that the port exps or val exprs will be
 *   used, nor in what order should they be, so they should not be
 *   depended upon for side effects.
 */
cljs.core.async.alts_BANG_ = (function cljs$core$async$alts_BANG_(var_args){
var args__17905__auto__ = [];
var len__17898__auto___19806 = arguments.length;
var i__17899__auto___19807 = (0);
while(true){
if((i__17899__auto___19807 < len__17898__auto___19806)){
args__17905__auto__.push((arguments[i__17899__auto___19807]));

var G__19808 = (i__17899__auto___19807 + (1));
i__17899__auto___19807 = G__19808;
continue;
} else {
}
break;
}

var argseq__17906__auto__ = ((((1) < args__17905__auto__.length))?(new cljs.core.IndexedSeq(args__17905__auto__.slice((1)),(0))):null);
return cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__17906__auto__);
});

cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (ports,p__19803){
var map__19804 = p__19803;
var map__19804__$1 = ((((!((map__19804 == null)))?((((map__19804.cljs$lang$protocol_mask$partition0$ & (64))) || (map__19804.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__19804):map__19804);
var opts = map__19804__$1;
throw (new Error("alts! used not in (go ...) block"));
});

cljs.core.async.alts_BANG_.cljs$lang$maxFixedArity = (1);

cljs.core.async.alts_BANG_.cljs$lang$applyTo = (function (seq19801){
var G__19802 = cljs.core.first.call(null,seq19801);
var seq19801__$1 = cljs.core.next.call(null,seq19801);
return cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic(G__19802,seq19801__$1);
});
/**
 * Puts a val into port if it's possible to do so immediately.
 *   nil values are not allowed. Never blocks. Returns true if offer succeeds.
 */
cljs.core.async.offer_BANG_ = (function cljs$core$async$offer_BANG_(port,val){
var ret = cljs.core.async.impl.protocols.put_BANG_.call(null,port,val,cljs.core.async.fn_handler.call(null,cljs.core.async.nop,false));
if(cljs.core.truth_(ret)){
return cljs.core.deref.call(null,ret);
} else {
return null;
}
});
/**
 * Takes a val from port if it's possible to do so immediately.
 *   Never blocks. Returns value if successful, nil otherwise.
 */
cljs.core.async.poll_BANG_ = (function cljs$core$async$poll_BANG_(port){
var ret = cljs.core.async.impl.protocols.take_BANG_.call(null,port,cljs.core.async.fn_handler.call(null,cljs.core.async.nop,false));
if(cljs.core.truth_(ret)){
return cljs.core.deref.call(null,ret);
} else {
return null;
}
});
/**
 * Takes elements from the from channel and supplies them to the to
 * channel. By default, the to channel will be closed when the from
 * channel closes, but can be determined by the close?  parameter. Will
 * stop consuming the from channel if the to channel closes
 */
cljs.core.async.pipe = (function cljs$core$async$pipe(var_args){
var args19809 = [];
var len__17898__auto___19859 = arguments.length;
var i__17899__auto___19860 = (0);
while(true){
if((i__17899__auto___19860 < len__17898__auto___19859)){
args19809.push((arguments[i__17899__auto___19860]));

var G__19861 = (i__17899__auto___19860 + (1));
i__17899__auto___19860 = G__19861;
continue;
} else {
}
break;
}

var G__19811 = args19809.length;
switch (G__19811) {
case 2:
return cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args19809.length)].join('')));

}
});

cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$2 = (function (from,to){
return cljs.core.async.pipe.call(null,from,to,true);
});

cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$3 = (function (from,to,close_QMARK_){
var c__19696__auto___19863 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__19696__auto___19863){
return (function (){
var f__19697__auto__ = (function (){var switch__19584__auto__ = ((function (c__19696__auto___19863){
return (function (state_19835){
var state_val_19836 = (state_19835[(1)]);
if((state_val_19836 === (7))){
var inst_19831 = (state_19835[(2)]);
var state_19835__$1 = state_19835;
var statearr_19837_19864 = state_19835__$1;
(statearr_19837_19864[(2)] = inst_19831);

(statearr_19837_19864[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19836 === (1))){
var state_19835__$1 = state_19835;
var statearr_19838_19865 = state_19835__$1;
(statearr_19838_19865[(2)] = null);

(statearr_19838_19865[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19836 === (4))){
var inst_19814 = (state_19835[(7)]);
var inst_19814__$1 = (state_19835[(2)]);
var inst_19815 = (inst_19814__$1 == null);
var state_19835__$1 = (function (){var statearr_19839 = state_19835;
(statearr_19839[(7)] = inst_19814__$1);

return statearr_19839;
})();
if(cljs.core.truth_(inst_19815)){
var statearr_19840_19866 = state_19835__$1;
(statearr_19840_19866[(1)] = (5));

} else {
var statearr_19841_19867 = state_19835__$1;
(statearr_19841_19867[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19836 === (13))){
var state_19835__$1 = state_19835;
var statearr_19842_19868 = state_19835__$1;
(statearr_19842_19868[(2)] = null);

(statearr_19842_19868[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19836 === (6))){
var inst_19814 = (state_19835[(7)]);
var state_19835__$1 = state_19835;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_19835__$1,(11),to,inst_19814);
} else {
if((state_val_19836 === (3))){
var inst_19833 = (state_19835[(2)]);
var state_19835__$1 = state_19835;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_19835__$1,inst_19833);
} else {
if((state_val_19836 === (12))){
var state_19835__$1 = state_19835;
var statearr_19843_19869 = state_19835__$1;
(statearr_19843_19869[(2)] = null);

(statearr_19843_19869[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19836 === (2))){
var state_19835__$1 = state_19835;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_19835__$1,(4),from);
} else {
if((state_val_19836 === (11))){
var inst_19824 = (state_19835[(2)]);
var state_19835__$1 = state_19835;
if(cljs.core.truth_(inst_19824)){
var statearr_19844_19870 = state_19835__$1;
(statearr_19844_19870[(1)] = (12));

} else {
var statearr_19845_19871 = state_19835__$1;
(statearr_19845_19871[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19836 === (9))){
var state_19835__$1 = state_19835;
var statearr_19846_19872 = state_19835__$1;
(statearr_19846_19872[(2)] = null);

(statearr_19846_19872[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19836 === (5))){
var state_19835__$1 = state_19835;
if(cljs.core.truth_(close_QMARK_)){
var statearr_19847_19873 = state_19835__$1;
(statearr_19847_19873[(1)] = (8));

} else {
var statearr_19848_19874 = state_19835__$1;
(statearr_19848_19874[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19836 === (14))){
var inst_19829 = (state_19835[(2)]);
var state_19835__$1 = state_19835;
var statearr_19849_19875 = state_19835__$1;
(statearr_19849_19875[(2)] = inst_19829);

(statearr_19849_19875[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19836 === (10))){
var inst_19821 = (state_19835[(2)]);
var state_19835__$1 = state_19835;
var statearr_19850_19876 = state_19835__$1;
(statearr_19850_19876[(2)] = inst_19821);

(statearr_19850_19876[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19836 === (8))){
var inst_19818 = cljs.core.async.close_BANG_.call(null,to);
var state_19835__$1 = state_19835;
var statearr_19851_19877 = state_19835__$1;
(statearr_19851_19877[(2)] = inst_19818);

(statearr_19851_19877[(1)] = (10));


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
});})(c__19696__auto___19863))
;
return ((function (switch__19584__auto__,c__19696__auto___19863){
return (function() {
var cljs$core$async$state_machine__19585__auto__ = null;
var cljs$core$async$state_machine__19585__auto____0 = (function (){
var statearr_19855 = [null,null,null,null,null,null,null,null];
(statearr_19855[(0)] = cljs$core$async$state_machine__19585__auto__);

(statearr_19855[(1)] = (1));

return statearr_19855;
});
var cljs$core$async$state_machine__19585__auto____1 = (function (state_19835){
while(true){
var ret_value__19586__auto__ = (function (){try{while(true){
var result__19587__auto__ = switch__19584__auto__.call(null,state_19835);
if(cljs.core.keyword_identical_QMARK_.call(null,result__19587__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__19587__auto__;
}
break;
}
}catch (e19856){if((e19856 instanceof Object)){
var ex__19588__auto__ = e19856;
var statearr_19857_19878 = state_19835;
(statearr_19857_19878[(5)] = ex__19588__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_19835);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e19856;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__19586__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__19879 = state_19835;
state_19835 = G__19879;
continue;
} else {
return ret_value__19586__auto__;
}
break;
}
});
cljs$core$async$state_machine__19585__auto__ = function(state_19835){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__19585__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__19585__auto____1.call(this,state_19835);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__19585__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__19585__auto____0;
cljs$core$async$state_machine__19585__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__19585__auto____1;
return cljs$core$async$state_machine__19585__auto__;
})()
;})(switch__19584__auto__,c__19696__auto___19863))
})();
var state__19698__auto__ = (function (){var statearr_19858 = f__19697__auto__.call(null);
(statearr_19858[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__19696__auto___19863);

return statearr_19858;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__19698__auto__);
});})(c__19696__auto___19863))
);


return to;
});

cljs.core.async.pipe.cljs$lang$maxFixedArity = 3;
cljs.core.async.pipeline_STAR_ = (function cljs$core$async$pipeline_STAR_(n,to,xf,from,close_QMARK_,ex_handler,type){
if((n > (0))){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str(cljs.core.pr_str.call(null,cljs.core.list(new cljs.core.Symbol(null,"pos?","pos?",-244377722,null),new cljs.core.Symbol(null,"n","n",-2092305744,null))))].join('')));
}

var jobs = cljs.core.async.chan.call(null,n);
var results = cljs.core.async.chan.call(null,n);
var process = ((function (jobs,results){
return (function (p__20063){
var vec__20064 = p__20063;
var v = cljs.core.nth.call(null,vec__20064,(0),null);
var p = cljs.core.nth.call(null,vec__20064,(1),null);
var job = vec__20064;
if((job == null)){
cljs.core.async.close_BANG_.call(null,results);

return null;
} else {
var res = cljs.core.async.chan.call(null,(1),xf,ex_handler);
var c__19696__auto___20246 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__19696__auto___20246,res,vec__20064,v,p,job,jobs,results){
return (function (){
var f__19697__auto__ = (function (){var switch__19584__auto__ = ((function (c__19696__auto___20246,res,vec__20064,v,p,job,jobs,results){
return (function (state_20069){
var state_val_20070 = (state_20069[(1)]);
if((state_val_20070 === (1))){
var state_20069__$1 = state_20069;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_20069__$1,(2),res,v);
} else {
if((state_val_20070 === (2))){
var inst_20066 = (state_20069[(2)]);
var inst_20067 = cljs.core.async.close_BANG_.call(null,res);
var state_20069__$1 = (function (){var statearr_20071 = state_20069;
(statearr_20071[(7)] = inst_20066);

return statearr_20071;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_20069__$1,inst_20067);
} else {
return null;
}
}
});})(c__19696__auto___20246,res,vec__20064,v,p,job,jobs,results))
;
return ((function (switch__19584__auto__,c__19696__auto___20246,res,vec__20064,v,p,job,jobs,results){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__19585__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__19585__auto____0 = (function (){
var statearr_20075 = [null,null,null,null,null,null,null,null];
(statearr_20075[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__19585__auto__);

(statearr_20075[(1)] = (1));

return statearr_20075;
});
var cljs$core$async$pipeline_STAR__$_state_machine__19585__auto____1 = (function (state_20069){
while(true){
var ret_value__19586__auto__ = (function (){try{while(true){
var result__19587__auto__ = switch__19584__auto__.call(null,state_20069);
if(cljs.core.keyword_identical_QMARK_.call(null,result__19587__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__19587__auto__;
}
break;
}
}catch (e20076){if((e20076 instanceof Object)){
var ex__19588__auto__ = e20076;
var statearr_20077_20247 = state_20069;
(statearr_20077_20247[(5)] = ex__19588__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_20069);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e20076;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__19586__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__20248 = state_20069;
state_20069 = G__20248;
continue;
} else {
return ret_value__19586__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__19585__auto__ = function(state_20069){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__19585__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__19585__auto____1.call(this,state_20069);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__19585__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__19585__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__19585__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__19585__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__19585__auto__;
})()
;})(switch__19584__auto__,c__19696__auto___20246,res,vec__20064,v,p,job,jobs,results))
})();
var state__19698__auto__ = (function (){var statearr_20078 = f__19697__auto__.call(null);
(statearr_20078[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__19696__auto___20246);

return statearr_20078;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__19698__auto__);
});})(c__19696__auto___20246,res,vec__20064,v,p,job,jobs,results))
);


cljs.core.async.put_BANG_.call(null,p,res);

return true;
}
});})(jobs,results))
;
var async = ((function (jobs,results,process){
return (function (p__20079){
var vec__20080 = p__20079;
var v = cljs.core.nth.call(null,vec__20080,(0),null);
var p = cljs.core.nth.call(null,vec__20080,(1),null);
var job = vec__20080;
if((job == null)){
cljs.core.async.close_BANG_.call(null,results);

return null;
} else {
var res = cljs.core.async.chan.call(null,(1));
xf.call(null,v,res);

cljs.core.async.put_BANG_.call(null,p,res);

return true;
}
});})(jobs,results,process))
;
var n__17743__auto___20249 = n;
var __20250 = (0);
while(true){
if((__20250 < n__17743__auto___20249)){
var G__20081_20251 = (((type instanceof cljs.core.Keyword))?type.fqn:null);
switch (G__20081_20251) {
case "compute":
var c__19696__auto___20253 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (__20250,c__19696__auto___20253,G__20081_20251,n__17743__auto___20249,jobs,results,process,async){
return (function (){
var f__19697__auto__ = (function (){var switch__19584__auto__ = ((function (__20250,c__19696__auto___20253,G__20081_20251,n__17743__auto___20249,jobs,results,process,async){
return (function (state_20094){
var state_val_20095 = (state_20094[(1)]);
if((state_val_20095 === (1))){
var state_20094__$1 = state_20094;
var statearr_20096_20254 = state_20094__$1;
(statearr_20096_20254[(2)] = null);

(statearr_20096_20254[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20095 === (2))){
var state_20094__$1 = state_20094;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_20094__$1,(4),jobs);
} else {
if((state_val_20095 === (3))){
var inst_20092 = (state_20094[(2)]);
var state_20094__$1 = state_20094;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_20094__$1,inst_20092);
} else {
if((state_val_20095 === (4))){
var inst_20084 = (state_20094[(2)]);
var inst_20085 = process.call(null,inst_20084);
var state_20094__$1 = state_20094;
if(cljs.core.truth_(inst_20085)){
var statearr_20097_20255 = state_20094__$1;
(statearr_20097_20255[(1)] = (5));

} else {
var statearr_20098_20256 = state_20094__$1;
(statearr_20098_20256[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20095 === (5))){
var state_20094__$1 = state_20094;
var statearr_20099_20257 = state_20094__$1;
(statearr_20099_20257[(2)] = null);

(statearr_20099_20257[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20095 === (6))){
var state_20094__$1 = state_20094;
var statearr_20100_20258 = state_20094__$1;
(statearr_20100_20258[(2)] = null);

(statearr_20100_20258[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20095 === (7))){
var inst_20090 = (state_20094[(2)]);
var state_20094__$1 = state_20094;
var statearr_20101_20259 = state_20094__$1;
(statearr_20101_20259[(2)] = inst_20090);

(statearr_20101_20259[(1)] = (3));


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
});})(__20250,c__19696__auto___20253,G__20081_20251,n__17743__auto___20249,jobs,results,process,async))
;
return ((function (__20250,switch__19584__auto__,c__19696__auto___20253,G__20081_20251,n__17743__auto___20249,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__19585__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__19585__auto____0 = (function (){
var statearr_20105 = [null,null,null,null,null,null,null];
(statearr_20105[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__19585__auto__);

(statearr_20105[(1)] = (1));

return statearr_20105;
});
var cljs$core$async$pipeline_STAR__$_state_machine__19585__auto____1 = (function (state_20094){
while(true){
var ret_value__19586__auto__ = (function (){try{while(true){
var result__19587__auto__ = switch__19584__auto__.call(null,state_20094);
if(cljs.core.keyword_identical_QMARK_.call(null,result__19587__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__19587__auto__;
}
break;
}
}catch (e20106){if((e20106 instanceof Object)){
var ex__19588__auto__ = e20106;
var statearr_20107_20260 = state_20094;
(statearr_20107_20260[(5)] = ex__19588__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_20094);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e20106;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__19586__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__20261 = state_20094;
state_20094 = G__20261;
continue;
} else {
return ret_value__19586__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__19585__auto__ = function(state_20094){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__19585__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__19585__auto____1.call(this,state_20094);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__19585__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__19585__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__19585__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__19585__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__19585__auto__;
})()
;})(__20250,switch__19584__auto__,c__19696__auto___20253,G__20081_20251,n__17743__auto___20249,jobs,results,process,async))
})();
var state__19698__auto__ = (function (){var statearr_20108 = f__19697__auto__.call(null);
(statearr_20108[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__19696__auto___20253);

return statearr_20108;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__19698__auto__);
});})(__20250,c__19696__auto___20253,G__20081_20251,n__17743__auto___20249,jobs,results,process,async))
);


break;
case "async":
var c__19696__auto___20262 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (__20250,c__19696__auto___20262,G__20081_20251,n__17743__auto___20249,jobs,results,process,async){
return (function (){
var f__19697__auto__ = (function (){var switch__19584__auto__ = ((function (__20250,c__19696__auto___20262,G__20081_20251,n__17743__auto___20249,jobs,results,process,async){
return (function (state_20121){
var state_val_20122 = (state_20121[(1)]);
if((state_val_20122 === (1))){
var state_20121__$1 = state_20121;
var statearr_20123_20263 = state_20121__$1;
(statearr_20123_20263[(2)] = null);

(statearr_20123_20263[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20122 === (2))){
var state_20121__$1 = state_20121;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_20121__$1,(4),jobs);
} else {
if((state_val_20122 === (3))){
var inst_20119 = (state_20121[(2)]);
var state_20121__$1 = state_20121;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_20121__$1,inst_20119);
} else {
if((state_val_20122 === (4))){
var inst_20111 = (state_20121[(2)]);
var inst_20112 = async.call(null,inst_20111);
var state_20121__$1 = state_20121;
if(cljs.core.truth_(inst_20112)){
var statearr_20124_20264 = state_20121__$1;
(statearr_20124_20264[(1)] = (5));

} else {
var statearr_20125_20265 = state_20121__$1;
(statearr_20125_20265[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20122 === (5))){
var state_20121__$1 = state_20121;
var statearr_20126_20266 = state_20121__$1;
(statearr_20126_20266[(2)] = null);

(statearr_20126_20266[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20122 === (6))){
var state_20121__$1 = state_20121;
var statearr_20127_20267 = state_20121__$1;
(statearr_20127_20267[(2)] = null);

(statearr_20127_20267[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20122 === (7))){
var inst_20117 = (state_20121[(2)]);
var state_20121__$1 = state_20121;
var statearr_20128_20268 = state_20121__$1;
(statearr_20128_20268[(2)] = inst_20117);

(statearr_20128_20268[(1)] = (3));


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
});})(__20250,c__19696__auto___20262,G__20081_20251,n__17743__auto___20249,jobs,results,process,async))
;
return ((function (__20250,switch__19584__auto__,c__19696__auto___20262,G__20081_20251,n__17743__auto___20249,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__19585__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__19585__auto____0 = (function (){
var statearr_20132 = [null,null,null,null,null,null,null];
(statearr_20132[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__19585__auto__);

(statearr_20132[(1)] = (1));

return statearr_20132;
});
var cljs$core$async$pipeline_STAR__$_state_machine__19585__auto____1 = (function (state_20121){
while(true){
var ret_value__19586__auto__ = (function (){try{while(true){
var result__19587__auto__ = switch__19584__auto__.call(null,state_20121);
if(cljs.core.keyword_identical_QMARK_.call(null,result__19587__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__19587__auto__;
}
break;
}
}catch (e20133){if((e20133 instanceof Object)){
var ex__19588__auto__ = e20133;
var statearr_20134_20269 = state_20121;
(statearr_20134_20269[(5)] = ex__19588__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_20121);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e20133;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__19586__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__20270 = state_20121;
state_20121 = G__20270;
continue;
} else {
return ret_value__19586__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__19585__auto__ = function(state_20121){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__19585__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__19585__auto____1.call(this,state_20121);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__19585__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__19585__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__19585__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__19585__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__19585__auto__;
})()
;})(__20250,switch__19584__auto__,c__19696__auto___20262,G__20081_20251,n__17743__auto___20249,jobs,results,process,async))
})();
var state__19698__auto__ = (function (){var statearr_20135 = f__19697__auto__.call(null);
(statearr_20135[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__19696__auto___20262);

return statearr_20135;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__19698__auto__);
});})(__20250,c__19696__auto___20262,G__20081_20251,n__17743__auto___20249,jobs,results,process,async))
);


break;
default:
throw (new Error([cljs.core.str("No matching clause: "),cljs.core.str(type)].join('')));

}

var G__20271 = (__20250 + (1));
__20250 = G__20271;
continue;
} else {
}
break;
}

var c__19696__auto___20272 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__19696__auto___20272,jobs,results,process,async){
return (function (){
var f__19697__auto__ = (function (){var switch__19584__auto__ = ((function (c__19696__auto___20272,jobs,results,process,async){
return (function (state_20157){
var state_val_20158 = (state_20157[(1)]);
if((state_val_20158 === (1))){
var state_20157__$1 = state_20157;
var statearr_20159_20273 = state_20157__$1;
(statearr_20159_20273[(2)] = null);

(statearr_20159_20273[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20158 === (2))){
var state_20157__$1 = state_20157;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_20157__$1,(4),from);
} else {
if((state_val_20158 === (3))){
var inst_20155 = (state_20157[(2)]);
var state_20157__$1 = state_20157;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_20157__$1,inst_20155);
} else {
if((state_val_20158 === (4))){
var inst_20138 = (state_20157[(7)]);
var inst_20138__$1 = (state_20157[(2)]);
var inst_20139 = (inst_20138__$1 == null);
var state_20157__$1 = (function (){var statearr_20160 = state_20157;
(statearr_20160[(7)] = inst_20138__$1);

return statearr_20160;
})();
if(cljs.core.truth_(inst_20139)){
var statearr_20161_20274 = state_20157__$1;
(statearr_20161_20274[(1)] = (5));

} else {
var statearr_20162_20275 = state_20157__$1;
(statearr_20162_20275[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20158 === (5))){
var inst_20141 = cljs.core.async.close_BANG_.call(null,jobs);
var state_20157__$1 = state_20157;
var statearr_20163_20276 = state_20157__$1;
(statearr_20163_20276[(2)] = inst_20141);

(statearr_20163_20276[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20158 === (6))){
var inst_20138 = (state_20157[(7)]);
var inst_20143 = (state_20157[(8)]);
var inst_20143__$1 = cljs.core.async.chan.call(null,(1));
var inst_20144 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_20145 = [inst_20138,inst_20143__$1];
var inst_20146 = (new cljs.core.PersistentVector(null,2,(5),inst_20144,inst_20145,null));
var state_20157__$1 = (function (){var statearr_20164 = state_20157;
(statearr_20164[(8)] = inst_20143__$1);

return statearr_20164;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_20157__$1,(8),jobs,inst_20146);
} else {
if((state_val_20158 === (7))){
var inst_20153 = (state_20157[(2)]);
var state_20157__$1 = state_20157;
var statearr_20165_20277 = state_20157__$1;
(statearr_20165_20277[(2)] = inst_20153);

(statearr_20165_20277[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20158 === (8))){
var inst_20143 = (state_20157[(8)]);
var inst_20148 = (state_20157[(2)]);
var state_20157__$1 = (function (){var statearr_20166 = state_20157;
(statearr_20166[(9)] = inst_20148);

return statearr_20166;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_20157__$1,(9),results,inst_20143);
} else {
if((state_val_20158 === (9))){
var inst_20150 = (state_20157[(2)]);
var state_20157__$1 = (function (){var statearr_20167 = state_20157;
(statearr_20167[(10)] = inst_20150);

return statearr_20167;
})();
var statearr_20168_20278 = state_20157__$1;
(statearr_20168_20278[(2)] = null);

(statearr_20168_20278[(1)] = (2));


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
});})(c__19696__auto___20272,jobs,results,process,async))
;
return ((function (switch__19584__auto__,c__19696__auto___20272,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__19585__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__19585__auto____0 = (function (){
var statearr_20172 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_20172[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__19585__auto__);

(statearr_20172[(1)] = (1));

return statearr_20172;
});
var cljs$core$async$pipeline_STAR__$_state_machine__19585__auto____1 = (function (state_20157){
while(true){
var ret_value__19586__auto__ = (function (){try{while(true){
var result__19587__auto__ = switch__19584__auto__.call(null,state_20157);
if(cljs.core.keyword_identical_QMARK_.call(null,result__19587__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__19587__auto__;
}
break;
}
}catch (e20173){if((e20173 instanceof Object)){
var ex__19588__auto__ = e20173;
var statearr_20174_20279 = state_20157;
(statearr_20174_20279[(5)] = ex__19588__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_20157);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e20173;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__19586__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__20280 = state_20157;
state_20157 = G__20280;
continue;
} else {
return ret_value__19586__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__19585__auto__ = function(state_20157){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__19585__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__19585__auto____1.call(this,state_20157);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__19585__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__19585__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__19585__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__19585__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__19585__auto__;
})()
;})(switch__19584__auto__,c__19696__auto___20272,jobs,results,process,async))
})();
var state__19698__auto__ = (function (){var statearr_20175 = f__19697__auto__.call(null);
(statearr_20175[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__19696__auto___20272);

return statearr_20175;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__19698__auto__);
});})(c__19696__auto___20272,jobs,results,process,async))
);


var c__19696__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__19696__auto__,jobs,results,process,async){
return (function (){
var f__19697__auto__ = (function (){var switch__19584__auto__ = ((function (c__19696__auto__,jobs,results,process,async){
return (function (state_20213){
var state_val_20214 = (state_20213[(1)]);
if((state_val_20214 === (7))){
var inst_20209 = (state_20213[(2)]);
var state_20213__$1 = state_20213;
var statearr_20215_20281 = state_20213__$1;
(statearr_20215_20281[(2)] = inst_20209);

(statearr_20215_20281[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20214 === (20))){
var state_20213__$1 = state_20213;
var statearr_20216_20282 = state_20213__$1;
(statearr_20216_20282[(2)] = null);

(statearr_20216_20282[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20214 === (1))){
var state_20213__$1 = state_20213;
var statearr_20217_20283 = state_20213__$1;
(statearr_20217_20283[(2)] = null);

(statearr_20217_20283[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20214 === (4))){
var inst_20178 = (state_20213[(7)]);
var inst_20178__$1 = (state_20213[(2)]);
var inst_20179 = (inst_20178__$1 == null);
var state_20213__$1 = (function (){var statearr_20218 = state_20213;
(statearr_20218[(7)] = inst_20178__$1);

return statearr_20218;
})();
if(cljs.core.truth_(inst_20179)){
var statearr_20219_20284 = state_20213__$1;
(statearr_20219_20284[(1)] = (5));

} else {
var statearr_20220_20285 = state_20213__$1;
(statearr_20220_20285[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20214 === (15))){
var inst_20191 = (state_20213[(8)]);
var state_20213__$1 = state_20213;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_20213__$1,(18),to,inst_20191);
} else {
if((state_val_20214 === (21))){
var inst_20204 = (state_20213[(2)]);
var state_20213__$1 = state_20213;
var statearr_20221_20286 = state_20213__$1;
(statearr_20221_20286[(2)] = inst_20204);

(statearr_20221_20286[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20214 === (13))){
var inst_20206 = (state_20213[(2)]);
var state_20213__$1 = (function (){var statearr_20222 = state_20213;
(statearr_20222[(9)] = inst_20206);

return statearr_20222;
})();
var statearr_20223_20287 = state_20213__$1;
(statearr_20223_20287[(2)] = null);

(statearr_20223_20287[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20214 === (6))){
var inst_20178 = (state_20213[(7)]);
var state_20213__$1 = state_20213;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_20213__$1,(11),inst_20178);
} else {
if((state_val_20214 === (17))){
var inst_20199 = (state_20213[(2)]);
var state_20213__$1 = state_20213;
if(cljs.core.truth_(inst_20199)){
var statearr_20224_20288 = state_20213__$1;
(statearr_20224_20288[(1)] = (19));

} else {
var statearr_20225_20289 = state_20213__$1;
(statearr_20225_20289[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20214 === (3))){
var inst_20211 = (state_20213[(2)]);
var state_20213__$1 = state_20213;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_20213__$1,inst_20211);
} else {
if((state_val_20214 === (12))){
var inst_20188 = (state_20213[(10)]);
var state_20213__$1 = state_20213;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_20213__$1,(14),inst_20188);
} else {
if((state_val_20214 === (2))){
var state_20213__$1 = state_20213;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_20213__$1,(4),results);
} else {
if((state_val_20214 === (19))){
var state_20213__$1 = state_20213;
var statearr_20226_20290 = state_20213__$1;
(statearr_20226_20290[(2)] = null);

(statearr_20226_20290[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20214 === (11))){
var inst_20188 = (state_20213[(2)]);
var state_20213__$1 = (function (){var statearr_20227 = state_20213;
(statearr_20227[(10)] = inst_20188);

return statearr_20227;
})();
var statearr_20228_20291 = state_20213__$1;
(statearr_20228_20291[(2)] = null);

(statearr_20228_20291[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20214 === (9))){
var state_20213__$1 = state_20213;
var statearr_20229_20292 = state_20213__$1;
(statearr_20229_20292[(2)] = null);

(statearr_20229_20292[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20214 === (5))){
var state_20213__$1 = state_20213;
if(cljs.core.truth_(close_QMARK_)){
var statearr_20230_20293 = state_20213__$1;
(statearr_20230_20293[(1)] = (8));

} else {
var statearr_20231_20294 = state_20213__$1;
(statearr_20231_20294[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20214 === (14))){
var inst_20193 = (state_20213[(11)]);
var inst_20191 = (state_20213[(8)]);
var inst_20191__$1 = (state_20213[(2)]);
var inst_20192 = (inst_20191__$1 == null);
var inst_20193__$1 = cljs.core.not.call(null,inst_20192);
var state_20213__$1 = (function (){var statearr_20232 = state_20213;
(statearr_20232[(11)] = inst_20193__$1);

(statearr_20232[(8)] = inst_20191__$1);

return statearr_20232;
})();
if(inst_20193__$1){
var statearr_20233_20295 = state_20213__$1;
(statearr_20233_20295[(1)] = (15));

} else {
var statearr_20234_20296 = state_20213__$1;
(statearr_20234_20296[(1)] = (16));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20214 === (16))){
var inst_20193 = (state_20213[(11)]);
var state_20213__$1 = state_20213;
var statearr_20235_20297 = state_20213__$1;
(statearr_20235_20297[(2)] = inst_20193);

(statearr_20235_20297[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20214 === (10))){
var inst_20185 = (state_20213[(2)]);
var state_20213__$1 = state_20213;
var statearr_20236_20298 = state_20213__$1;
(statearr_20236_20298[(2)] = inst_20185);

(statearr_20236_20298[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20214 === (18))){
var inst_20196 = (state_20213[(2)]);
var state_20213__$1 = state_20213;
var statearr_20237_20299 = state_20213__$1;
(statearr_20237_20299[(2)] = inst_20196);

(statearr_20237_20299[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20214 === (8))){
var inst_20182 = cljs.core.async.close_BANG_.call(null,to);
var state_20213__$1 = state_20213;
var statearr_20238_20300 = state_20213__$1;
(statearr_20238_20300[(2)] = inst_20182);

(statearr_20238_20300[(1)] = (10));


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
});})(c__19696__auto__,jobs,results,process,async))
;
return ((function (switch__19584__auto__,c__19696__auto__,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__19585__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__19585__auto____0 = (function (){
var statearr_20242 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_20242[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__19585__auto__);

(statearr_20242[(1)] = (1));

return statearr_20242;
});
var cljs$core$async$pipeline_STAR__$_state_machine__19585__auto____1 = (function (state_20213){
while(true){
var ret_value__19586__auto__ = (function (){try{while(true){
var result__19587__auto__ = switch__19584__auto__.call(null,state_20213);
if(cljs.core.keyword_identical_QMARK_.call(null,result__19587__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__19587__auto__;
}
break;
}
}catch (e20243){if((e20243 instanceof Object)){
var ex__19588__auto__ = e20243;
var statearr_20244_20301 = state_20213;
(statearr_20244_20301[(5)] = ex__19588__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_20213);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e20243;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__19586__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__20302 = state_20213;
state_20213 = G__20302;
continue;
} else {
return ret_value__19586__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__19585__auto__ = function(state_20213){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__19585__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__19585__auto____1.call(this,state_20213);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__19585__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__19585__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__19585__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__19585__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__19585__auto__;
})()
;})(switch__19584__auto__,c__19696__auto__,jobs,results,process,async))
})();
var state__19698__auto__ = (function (){var statearr_20245 = f__19697__auto__.call(null);
(statearr_20245[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__19696__auto__);

return statearr_20245;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__19698__auto__);
});})(c__19696__auto__,jobs,results,process,async))
);

return c__19696__auto__;
});
/**
 * Takes elements from the from channel and supplies them to the to
 *   channel, subject to the async function af, with parallelism n. af
 *   must be a function of two arguments, the first an input value and
 *   the second a channel on which to place the result(s). af must close!
 *   the channel before returning.  The presumption is that af will
 *   return immediately, having launched some asynchronous operation
 *   whose completion/callback will manipulate the result channel. Outputs
 *   will be returned in order relative to  the inputs. By default, the to
 *   channel will be closed when the from channel closes, but can be
 *   determined by the close?  parameter. Will stop consuming the from
 *   channel if the to channel closes.
 */
cljs.core.async.pipeline_async = (function cljs$core$async$pipeline_async(var_args){
var args20303 = [];
var len__17898__auto___20306 = arguments.length;
var i__17899__auto___20307 = (0);
while(true){
if((i__17899__auto___20307 < len__17898__auto___20306)){
args20303.push((arguments[i__17899__auto___20307]));

var G__20308 = (i__17899__auto___20307 + (1));
i__17899__auto___20307 = G__20308;
continue;
} else {
}
break;
}

var G__20305 = args20303.length;
switch (G__20305) {
case 4:
return cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
case 5:
return cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$5((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args20303.length)].join('')));

}
});

cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$4 = (function (n,to,af,from){
return cljs.core.async.pipeline_async.call(null,n,to,af,from,true);
});

cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$5 = (function (n,to,af,from,close_QMARK_){
return cljs.core.async.pipeline_STAR_.call(null,n,to,af,from,close_QMARK_,null,new cljs.core.Keyword(null,"async","async",1050769601));
});

cljs.core.async.pipeline_async.cljs$lang$maxFixedArity = 5;
/**
 * Takes elements from the from channel and supplies them to the to
 *   channel, subject to the transducer xf, with parallelism n. Because
 *   it is parallel, the transducer will be applied independently to each
 *   element, not across elements, and may produce zero or more outputs
 *   per input.  Outputs will be returned in order relative to the
 *   inputs. By default, the to channel will be closed when the from
 *   channel closes, but can be determined by the close?  parameter. Will
 *   stop consuming the from channel if the to channel closes.
 * 
 *   Note this is supplied for API compatibility with the Clojure version.
 *   Values of N > 1 will not result in actual concurrency in a
 *   single-threaded runtime.
 */
cljs.core.async.pipeline = (function cljs$core$async$pipeline(var_args){
var args20310 = [];
var len__17898__auto___20313 = arguments.length;
var i__17899__auto___20314 = (0);
while(true){
if((i__17899__auto___20314 < len__17898__auto___20313)){
args20310.push((arguments[i__17899__auto___20314]));

var G__20315 = (i__17899__auto___20314 + (1));
i__17899__auto___20314 = G__20315;
continue;
} else {
}
break;
}

var G__20312 = args20310.length;
switch (G__20312) {
case 4:
return cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
case 5:
return cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$5((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]));

break;
case 6:
return cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$6((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]),(arguments[(5)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args20310.length)].join('')));

}
});

cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$4 = (function (n,to,xf,from){
return cljs.core.async.pipeline.call(null,n,to,xf,from,true);
});

cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$5 = (function (n,to,xf,from,close_QMARK_){
return cljs.core.async.pipeline.call(null,n,to,xf,from,close_QMARK_,null);
});

cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$6 = (function (n,to,xf,from,close_QMARK_,ex_handler){
return cljs.core.async.pipeline_STAR_.call(null,n,to,xf,from,close_QMARK_,ex_handler,new cljs.core.Keyword(null,"compute","compute",1555393130));
});

cljs.core.async.pipeline.cljs$lang$maxFixedArity = 6;
/**
 * Takes a predicate and a source channel and returns a vector of two
 *   channels, the first of which will contain the values for which the
 *   predicate returned true, the second those for which it returned
 *   false.
 * 
 *   The out channels will be unbuffered by default, or two buf-or-ns can
 *   be supplied. The channels will close after the source channel has
 *   closed.
 */
cljs.core.async.split = (function cljs$core$async$split(var_args){
var args20317 = [];
var len__17898__auto___20370 = arguments.length;
var i__17899__auto___20371 = (0);
while(true){
if((i__17899__auto___20371 < len__17898__auto___20370)){
args20317.push((arguments[i__17899__auto___20371]));

var G__20372 = (i__17899__auto___20371 + (1));
i__17899__auto___20371 = G__20372;
continue;
} else {
}
break;
}

var G__20319 = args20317.length;
switch (G__20319) {
case 2:
return cljs.core.async.split.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 4:
return cljs.core.async.split.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args20317.length)].join('')));

}
});

cljs.core.async.split.cljs$core$IFn$_invoke$arity$2 = (function (p,ch){
return cljs.core.async.split.call(null,p,ch,null,null);
});

cljs.core.async.split.cljs$core$IFn$_invoke$arity$4 = (function (p,ch,t_buf_or_n,f_buf_or_n){
var tc = cljs.core.async.chan.call(null,t_buf_or_n);
var fc = cljs.core.async.chan.call(null,f_buf_or_n);
var c__19696__auto___20374 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__19696__auto___20374,tc,fc){
return (function (){
var f__19697__auto__ = (function (){var switch__19584__auto__ = ((function (c__19696__auto___20374,tc,fc){
return (function (state_20345){
var state_val_20346 = (state_20345[(1)]);
if((state_val_20346 === (7))){
var inst_20341 = (state_20345[(2)]);
var state_20345__$1 = state_20345;
var statearr_20347_20375 = state_20345__$1;
(statearr_20347_20375[(2)] = inst_20341);

(statearr_20347_20375[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20346 === (1))){
var state_20345__$1 = state_20345;
var statearr_20348_20376 = state_20345__$1;
(statearr_20348_20376[(2)] = null);

(statearr_20348_20376[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20346 === (4))){
var inst_20322 = (state_20345[(7)]);
var inst_20322__$1 = (state_20345[(2)]);
var inst_20323 = (inst_20322__$1 == null);
var state_20345__$1 = (function (){var statearr_20349 = state_20345;
(statearr_20349[(7)] = inst_20322__$1);

return statearr_20349;
})();
if(cljs.core.truth_(inst_20323)){
var statearr_20350_20377 = state_20345__$1;
(statearr_20350_20377[(1)] = (5));

} else {
var statearr_20351_20378 = state_20345__$1;
(statearr_20351_20378[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20346 === (13))){
var state_20345__$1 = state_20345;
var statearr_20352_20379 = state_20345__$1;
(statearr_20352_20379[(2)] = null);

(statearr_20352_20379[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20346 === (6))){
var inst_20322 = (state_20345[(7)]);
var inst_20328 = p.call(null,inst_20322);
var state_20345__$1 = state_20345;
if(cljs.core.truth_(inst_20328)){
var statearr_20353_20380 = state_20345__$1;
(statearr_20353_20380[(1)] = (9));

} else {
var statearr_20354_20381 = state_20345__$1;
(statearr_20354_20381[(1)] = (10));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20346 === (3))){
var inst_20343 = (state_20345[(2)]);
var state_20345__$1 = state_20345;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_20345__$1,inst_20343);
} else {
if((state_val_20346 === (12))){
var state_20345__$1 = state_20345;
var statearr_20355_20382 = state_20345__$1;
(statearr_20355_20382[(2)] = null);

(statearr_20355_20382[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20346 === (2))){
var state_20345__$1 = state_20345;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_20345__$1,(4),ch);
} else {
if((state_val_20346 === (11))){
var inst_20322 = (state_20345[(7)]);
var inst_20332 = (state_20345[(2)]);
var state_20345__$1 = state_20345;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_20345__$1,(8),inst_20332,inst_20322);
} else {
if((state_val_20346 === (9))){
var state_20345__$1 = state_20345;
var statearr_20356_20383 = state_20345__$1;
(statearr_20356_20383[(2)] = tc);

(statearr_20356_20383[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20346 === (5))){
var inst_20325 = cljs.core.async.close_BANG_.call(null,tc);
var inst_20326 = cljs.core.async.close_BANG_.call(null,fc);
var state_20345__$1 = (function (){var statearr_20357 = state_20345;
(statearr_20357[(8)] = inst_20325);

return statearr_20357;
})();
var statearr_20358_20384 = state_20345__$1;
(statearr_20358_20384[(2)] = inst_20326);

(statearr_20358_20384[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20346 === (14))){
var inst_20339 = (state_20345[(2)]);
var state_20345__$1 = state_20345;
var statearr_20359_20385 = state_20345__$1;
(statearr_20359_20385[(2)] = inst_20339);

(statearr_20359_20385[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20346 === (10))){
var state_20345__$1 = state_20345;
var statearr_20360_20386 = state_20345__$1;
(statearr_20360_20386[(2)] = fc);

(statearr_20360_20386[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20346 === (8))){
var inst_20334 = (state_20345[(2)]);
var state_20345__$1 = state_20345;
if(cljs.core.truth_(inst_20334)){
var statearr_20361_20387 = state_20345__$1;
(statearr_20361_20387[(1)] = (12));

} else {
var statearr_20362_20388 = state_20345__$1;
(statearr_20362_20388[(1)] = (13));

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
});})(c__19696__auto___20374,tc,fc))
;
return ((function (switch__19584__auto__,c__19696__auto___20374,tc,fc){
return (function() {
var cljs$core$async$state_machine__19585__auto__ = null;
var cljs$core$async$state_machine__19585__auto____0 = (function (){
var statearr_20366 = [null,null,null,null,null,null,null,null,null];
(statearr_20366[(0)] = cljs$core$async$state_machine__19585__auto__);

(statearr_20366[(1)] = (1));

return statearr_20366;
});
var cljs$core$async$state_machine__19585__auto____1 = (function (state_20345){
while(true){
var ret_value__19586__auto__ = (function (){try{while(true){
var result__19587__auto__ = switch__19584__auto__.call(null,state_20345);
if(cljs.core.keyword_identical_QMARK_.call(null,result__19587__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__19587__auto__;
}
break;
}
}catch (e20367){if((e20367 instanceof Object)){
var ex__19588__auto__ = e20367;
var statearr_20368_20389 = state_20345;
(statearr_20368_20389[(5)] = ex__19588__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_20345);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e20367;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__19586__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__20390 = state_20345;
state_20345 = G__20390;
continue;
} else {
return ret_value__19586__auto__;
}
break;
}
});
cljs$core$async$state_machine__19585__auto__ = function(state_20345){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__19585__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__19585__auto____1.call(this,state_20345);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__19585__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__19585__auto____0;
cljs$core$async$state_machine__19585__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__19585__auto____1;
return cljs$core$async$state_machine__19585__auto__;
})()
;})(switch__19584__auto__,c__19696__auto___20374,tc,fc))
})();
var state__19698__auto__ = (function (){var statearr_20369 = f__19697__auto__.call(null);
(statearr_20369[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__19696__auto___20374);

return statearr_20369;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__19698__auto__);
});})(c__19696__auto___20374,tc,fc))
);


return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [tc,fc], null);
});

cljs.core.async.split.cljs$lang$maxFixedArity = 4;
/**
 * f should be a function of 2 arguments. Returns a channel containing
 *   the single result of applying f to init and the first item from the
 *   channel, then applying f to that result and the 2nd item, etc. If
 *   the channel closes without yielding items, returns init and f is not
 *   called. ch must close before reduce produces a result.
 */
cljs.core.async.reduce = (function cljs$core$async$reduce(f,init,ch){
var c__19696__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__19696__auto__){
return (function (){
var f__19697__auto__ = (function (){var switch__19584__auto__ = ((function (c__19696__auto__){
return (function (state_20454){
var state_val_20455 = (state_20454[(1)]);
if((state_val_20455 === (7))){
var inst_20450 = (state_20454[(2)]);
var state_20454__$1 = state_20454;
var statearr_20456_20477 = state_20454__$1;
(statearr_20456_20477[(2)] = inst_20450);

(statearr_20456_20477[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20455 === (1))){
var inst_20434 = init;
var state_20454__$1 = (function (){var statearr_20457 = state_20454;
(statearr_20457[(7)] = inst_20434);

return statearr_20457;
})();
var statearr_20458_20478 = state_20454__$1;
(statearr_20458_20478[(2)] = null);

(statearr_20458_20478[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20455 === (4))){
var inst_20437 = (state_20454[(8)]);
var inst_20437__$1 = (state_20454[(2)]);
var inst_20438 = (inst_20437__$1 == null);
var state_20454__$1 = (function (){var statearr_20459 = state_20454;
(statearr_20459[(8)] = inst_20437__$1);

return statearr_20459;
})();
if(cljs.core.truth_(inst_20438)){
var statearr_20460_20479 = state_20454__$1;
(statearr_20460_20479[(1)] = (5));

} else {
var statearr_20461_20480 = state_20454__$1;
(statearr_20461_20480[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20455 === (6))){
var inst_20434 = (state_20454[(7)]);
var inst_20437 = (state_20454[(8)]);
var inst_20441 = (state_20454[(9)]);
var inst_20441__$1 = f.call(null,inst_20434,inst_20437);
var inst_20442 = cljs.core.reduced_QMARK_.call(null,inst_20441__$1);
var state_20454__$1 = (function (){var statearr_20462 = state_20454;
(statearr_20462[(9)] = inst_20441__$1);

return statearr_20462;
})();
if(inst_20442){
var statearr_20463_20481 = state_20454__$1;
(statearr_20463_20481[(1)] = (8));

} else {
var statearr_20464_20482 = state_20454__$1;
(statearr_20464_20482[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20455 === (3))){
var inst_20452 = (state_20454[(2)]);
var state_20454__$1 = state_20454;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_20454__$1,inst_20452);
} else {
if((state_val_20455 === (2))){
var state_20454__$1 = state_20454;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_20454__$1,(4),ch);
} else {
if((state_val_20455 === (9))){
var inst_20441 = (state_20454[(9)]);
var inst_20434 = inst_20441;
var state_20454__$1 = (function (){var statearr_20465 = state_20454;
(statearr_20465[(7)] = inst_20434);

return statearr_20465;
})();
var statearr_20466_20483 = state_20454__$1;
(statearr_20466_20483[(2)] = null);

(statearr_20466_20483[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20455 === (5))){
var inst_20434 = (state_20454[(7)]);
var state_20454__$1 = state_20454;
var statearr_20467_20484 = state_20454__$1;
(statearr_20467_20484[(2)] = inst_20434);

(statearr_20467_20484[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20455 === (10))){
var inst_20448 = (state_20454[(2)]);
var state_20454__$1 = state_20454;
var statearr_20468_20485 = state_20454__$1;
(statearr_20468_20485[(2)] = inst_20448);

(statearr_20468_20485[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20455 === (8))){
var inst_20441 = (state_20454[(9)]);
var inst_20444 = cljs.core.deref.call(null,inst_20441);
var state_20454__$1 = state_20454;
var statearr_20469_20486 = state_20454__$1;
(statearr_20469_20486[(2)] = inst_20444);

(statearr_20469_20486[(1)] = (10));


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
});})(c__19696__auto__))
;
return ((function (switch__19584__auto__,c__19696__auto__){
return (function() {
var cljs$core$async$reduce_$_state_machine__19585__auto__ = null;
var cljs$core$async$reduce_$_state_machine__19585__auto____0 = (function (){
var statearr_20473 = [null,null,null,null,null,null,null,null,null,null];
(statearr_20473[(0)] = cljs$core$async$reduce_$_state_machine__19585__auto__);

(statearr_20473[(1)] = (1));

return statearr_20473;
});
var cljs$core$async$reduce_$_state_machine__19585__auto____1 = (function (state_20454){
while(true){
var ret_value__19586__auto__ = (function (){try{while(true){
var result__19587__auto__ = switch__19584__auto__.call(null,state_20454);
if(cljs.core.keyword_identical_QMARK_.call(null,result__19587__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__19587__auto__;
}
break;
}
}catch (e20474){if((e20474 instanceof Object)){
var ex__19588__auto__ = e20474;
var statearr_20475_20487 = state_20454;
(statearr_20475_20487[(5)] = ex__19588__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_20454);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e20474;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__19586__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__20488 = state_20454;
state_20454 = G__20488;
continue;
} else {
return ret_value__19586__auto__;
}
break;
}
});
cljs$core$async$reduce_$_state_machine__19585__auto__ = function(state_20454){
switch(arguments.length){
case 0:
return cljs$core$async$reduce_$_state_machine__19585__auto____0.call(this);
case 1:
return cljs$core$async$reduce_$_state_machine__19585__auto____1.call(this,state_20454);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$reduce_$_state_machine__19585__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$reduce_$_state_machine__19585__auto____0;
cljs$core$async$reduce_$_state_machine__19585__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$reduce_$_state_machine__19585__auto____1;
return cljs$core$async$reduce_$_state_machine__19585__auto__;
})()
;})(switch__19584__auto__,c__19696__auto__))
})();
var state__19698__auto__ = (function (){var statearr_20476 = f__19697__auto__.call(null);
(statearr_20476[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__19696__auto__);

return statearr_20476;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__19698__auto__);
});})(c__19696__auto__))
);

return c__19696__auto__;
});
/**
 * Puts the contents of coll into the supplied channel.
 * 
 *   By default the channel will be closed after the items are copied,
 *   but can be determined by the close? parameter.
 * 
 *   Returns a channel which will close after the items are copied.
 */
cljs.core.async.onto_chan = (function cljs$core$async$onto_chan(var_args){
var args20489 = [];
var len__17898__auto___20541 = arguments.length;
var i__17899__auto___20542 = (0);
while(true){
if((i__17899__auto___20542 < len__17898__auto___20541)){
args20489.push((arguments[i__17899__auto___20542]));

var G__20543 = (i__17899__auto___20542 + (1));
i__17899__auto___20542 = G__20543;
continue;
} else {
}
break;
}

var G__20491 = args20489.length;
switch (G__20491) {
case 2:
return cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args20489.length)].join('')));

}
});

cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$2 = (function (ch,coll){
return cljs.core.async.onto_chan.call(null,ch,coll,true);
});

cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$3 = (function (ch,coll,close_QMARK_){
var c__19696__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__19696__auto__){
return (function (){
var f__19697__auto__ = (function (){var switch__19584__auto__ = ((function (c__19696__auto__){
return (function (state_20516){
var state_val_20517 = (state_20516[(1)]);
if((state_val_20517 === (7))){
var inst_20498 = (state_20516[(2)]);
var state_20516__$1 = state_20516;
var statearr_20518_20545 = state_20516__$1;
(statearr_20518_20545[(2)] = inst_20498);

(statearr_20518_20545[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20517 === (1))){
var inst_20492 = cljs.core.seq.call(null,coll);
var inst_20493 = inst_20492;
var state_20516__$1 = (function (){var statearr_20519 = state_20516;
(statearr_20519[(7)] = inst_20493);

return statearr_20519;
})();
var statearr_20520_20546 = state_20516__$1;
(statearr_20520_20546[(2)] = null);

(statearr_20520_20546[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20517 === (4))){
var inst_20493 = (state_20516[(7)]);
var inst_20496 = cljs.core.first.call(null,inst_20493);
var state_20516__$1 = state_20516;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_20516__$1,(7),ch,inst_20496);
} else {
if((state_val_20517 === (13))){
var inst_20510 = (state_20516[(2)]);
var state_20516__$1 = state_20516;
var statearr_20521_20547 = state_20516__$1;
(statearr_20521_20547[(2)] = inst_20510);

(statearr_20521_20547[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20517 === (6))){
var inst_20501 = (state_20516[(2)]);
var state_20516__$1 = state_20516;
if(cljs.core.truth_(inst_20501)){
var statearr_20522_20548 = state_20516__$1;
(statearr_20522_20548[(1)] = (8));

} else {
var statearr_20523_20549 = state_20516__$1;
(statearr_20523_20549[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20517 === (3))){
var inst_20514 = (state_20516[(2)]);
var state_20516__$1 = state_20516;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_20516__$1,inst_20514);
} else {
if((state_val_20517 === (12))){
var state_20516__$1 = state_20516;
var statearr_20524_20550 = state_20516__$1;
(statearr_20524_20550[(2)] = null);

(statearr_20524_20550[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20517 === (2))){
var inst_20493 = (state_20516[(7)]);
var state_20516__$1 = state_20516;
if(cljs.core.truth_(inst_20493)){
var statearr_20525_20551 = state_20516__$1;
(statearr_20525_20551[(1)] = (4));

} else {
var statearr_20526_20552 = state_20516__$1;
(statearr_20526_20552[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20517 === (11))){
var inst_20507 = cljs.core.async.close_BANG_.call(null,ch);
var state_20516__$1 = state_20516;
var statearr_20527_20553 = state_20516__$1;
(statearr_20527_20553[(2)] = inst_20507);

(statearr_20527_20553[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20517 === (9))){
var state_20516__$1 = state_20516;
if(cljs.core.truth_(close_QMARK_)){
var statearr_20528_20554 = state_20516__$1;
(statearr_20528_20554[(1)] = (11));

} else {
var statearr_20529_20555 = state_20516__$1;
(statearr_20529_20555[(1)] = (12));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20517 === (5))){
var inst_20493 = (state_20516[(7)]);
var state_20516__$1 = state_20516;
var statearr_20530_20556 = state_20516__$1;
(statearr_20530_20556[(2)] = inst_20493);

(statearr_20530_20556[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20517 === (10))){
var inst_20512 = (state_20516[(2)]);
var state_20516__$1 = state_20516;
var statearr_20531_20557 = state_20516__$1;
(statearr_20531_20557[(2)] = inst_20512);

(statearr_20531_20557[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20517 === (8))){
var inst_20493 = (state_20516[(7)]);
var inst_20503 = cljs.core.next.call(null,inst_20493);
var inst_20493__$1 = inst_20503;
var state_20516__$1 = (function (){var statearr_20532 = state_20516;
(statearr_20532[(7)] = inst_20493__$1);

return statearr_20532;
})();
var statearr_20533_20558 = state_20516__$1;
(statearr_20533_20558[(2)] = null);

(statearr_20533_20558[(1)] = (2));


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
});})(c__19696__auto__))
;
return ((function (switch__19584__auto__,c__19696__auto__){
return (function() {
var cljs$core$async$state_machine__19585__auto__ = null;
var cljs$core$async$state_machine__19585__auto____0 = (function (){
var statearr_20537 = [null,null,null,null,null,null,null,null];
(statearr_20537[(0)] = cljs$core$async$state_machine__19585__auto__);

(statearr_20537[(1)] = (1));

return statearr_20537;
});
var cljs$core$async$state_machine__19585__auto____1 = (function (state_20516){
while(true){
var ret_value__19586__auto__ = (function (){try{while(true){
var result__19587__auto__ = switch__19584__auto__.call(null,state_20516);
if(cljs.core.keyword_identical_QMARK_.call(null,result__19587__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__19587__auto__;
}
break;
}
}catch (e20538){if((e20538 instanceof Object)){
var ex__19588__auto__ = e20538;
var statearr_20539_20559 = state_20516;
(statearr_20539_20559[(5)] = ex__19588__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_20516);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e20538;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__19586__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__20560 = state_20516;
state_20516 = G__20560;
continue;
} else {
return ret_value__19586__auto__;
}
break;
}
});
cljs$core$async$state_machine__19585__auto__ = function(state_20516){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__19585__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__19585__auto____1.call(this,state_20516);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__19585__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__19585__auto____0;
cljs$core$async$state_machine__19585__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__19585__auto____1;
return cljs$core$async$state_machine__19585__auto__;
})()
;})(switch__19584__auto__,c__19696__auto__))
})();
var state__19698__auto__ = (function (){var statearr_20540 = f__19697__auto__.call(null);
(statearr_20540[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__19696__auto__);

return statearr_20540;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__19698__auto__);
});})(c__19696__auto__))
);

return c__19696__auto__;
});

cljs.core.async.onto_chan.cljs$lang$maxFixedArity = 3;
/**
 * Creates and returns a channel which contains the contents of coll,
 *   closing when exhausted.
 */
cljs.core.async.to_chan = (function cljs$core$async$to_chan(coll){
var ch = cljs.core.async.chan.call(null,cljs.core.bounded_count.call(null,(100),coll));
cljs.core.async.onto_chan.call(null,ch,coll);

return ch;
});

/**
 * @interface
 */
cljs.core.async.Mux = function(){};

cljs.core.async.muxch_STAR_ = (function cljs$core$async$muxch_STAR_(_){
if((!((_ == null))) && (!((_.cljs$core$async$Mux$muxch_STAR_$arity$1 == null)))){
return _.cljs$core$async$Mux$muxch_STAR_$arity$1(_);
} else {
var x__17495__auto__ = (((_ == null))?null:_);
var m__17496__auto__ = (cljs.core.async.muxch_STAR_[goog.typeOf(x__17495__auto__)]);
if(!((m__17496__auto__ == null))){
return m__17496__auto__.call(null,_);
} else {
var m__17496__auto____$1 = (cljs.core.async.muxch_STAR_["_"]);
if(!((m__17496__auto____$1 == null))){
return m__17496__auto____$1.call(null,_);
} else {
throw cljs.core.missing_protocol.call(null,"Mux.muxch*",_);
}
}
}
});


/**
 * @interface
 */
cljs.core.async.Mult = function(){};

cljs.core.async.tap_STAR_ = (function cljs$core$async$tap_STAR_(m,ch,close_QMARK_){
if((!((m == null))) && (!((m.cljs$core$async$Mult$tap_STAR_$arity$3 == null)))){
return m.cljs$core$async$Mult$tap_STAR_$arity$3(m,ch,close_QMARK_);
} else {
var x__17495__auto__ = (((m == null))?null:m);
var m__17496__auto__ = (cljs.core.async.tap_STAR_[goog.typeOf(x__17495__auto__)]);
if(!((m__17496__auto__ == null))){
return m__17496__auto__.call(null,m,ch,close_QMARK_);
} else {
var m__17496__auto____$1 = (cljs.core.async.tap_STAR_["_"]);
if(!((m__17496__auto____$1 == null))){
return m__17496__auto____$1.call(null,m,ch,close_QMARK_);
} else {
throw cljs.core.missing_protocol.call(null,"Mult.tap*",m);
}
}
}
});

cljs.core.async.untap_STAR_ = (function cljs$core$async$untap_STAR_(m,ch){
if((!((m == null))) && (!((m.cljs$core$async$Mult$untap_STAR_$arity$2 == null)))){
return m.cljs$core$async$Mult$untap_STAR_$arity$2(m,ch);
} else {
var x__17495__auto__ = (((m == null))?null:m);
var m__17496__auto__ = (cljs.core.async.untap_STAR_[goog.typeOf(x__17495__auto__)]);
if(!((m__17496__auto__ == null))){
return m__17496__auto__.call(null,m,ch);
} else {
var m__17496__auto____$1 = (cljs.core.async.untap_STAR_["_"]);
if(!((m__17496__auto____$1 == null))){
return m__17496__auto____$1.call(null,m,ch);
} else {
throw cljs.core.missing_protocol.call(null,"Mult.untap*",m);
}
}
}
});

cljs.core.async.untap_all_STAR_ = (function cljs$core$async$untap_all_STAR_(m){
if((!((m == null))) && (!((m.cljs$core$async$Mult$untap_all_STAR_$arity$1 == null)))){
return m.cljs$core$async$Mult$untap_all_STAR_$arity$1(m);
} else {
var x__17495__auto__ = (((m == null))?null:m);
var m__17496__auto__ = (cljs.core.async.untap_all_STAR_[goog.typeOf(x__17495__auto__)]);
if(!((m__17496__auto__ == null))){
return m__17496__auto__.call(null,m);
} else {
var m__17496__auto____$1 = (cljs.core.async.untap_all_STAR_["_"]);
if(!((m__17496__auto____$1 == null))){
return m__17496__auto____$1.call(null,m);
} else {
throw cljs.core.missing_protocol.call(null,"Mult.untap-all*",m);
}
}
}
});

/**
 * Creates and returns a mult(iple) of the supplied channel. Channels
 *   containing copies of the channel can be created with 'tap', and
 *   detached with 'untap'.
 * 
 *   Each item is distributed to all taps in parallel and synchronously,
 *   i.e. each tap must accept before the next item is distributed. Use
 *   buffering/windowing to prevent slow taps from holding up the mult.
 * 
 *   Items received when there are no taps get dropped.
 * 
 *   If a tap puts to a closed channel, it will be removed from the mult.
 */
cljs.core.async.mult = (function cljs$core$async$mult(ch){
var cs = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var m = (function (){
if(typeof cljs.core.async.t_cljs$core$async20782 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.Mult}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async20782 = (function (mult,ch,cs,meta20783){
this.mult = mult;
this.ch = ch;
this.cs = cs;
this.meta20783 = meta20783;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async20782.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (cs){
return (function (_20784,meta20783__$1){
var self__ = this;
var _20784__$1 = this;
return (new cljs.core.async.t_cljs$core$async20782(self__.mult,self__.ch,self__.cs,meta20783__$1));
});})(cs))
;

cljs.core.async.t_cljs$core$async20782.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (cs){
return (function (_20784){
var self__ = this;
var _20784__$1 = this;
return self__.meta20783;
});})(cs))
;

cljs.core.async.t_cljs$core$async20782.prototype.cljs$core$async$Mux$ = true;

cljs.core.async.t_cljs$core$async20782.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (cs){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
});})(cs))
;

cljs.core.async.t_cljs$core$async20782.prototype.cljs$core$async$Mult$ = true;

cljs.core.async.t_cljs$core$async20782.prototype.cljs$core$async$Mult$tap_STAR_$arity$3 = ((function (cs){
return (function (_,ch__$1,close_QMARK_){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.assoc,ch__$1,close_QMARK_);

return null;
});})(cs))
;

cljs.core.async.t_cljs$core$async20782.prototype.cljs$core$async$Mult$untap_STAR_$arity$2 = ((function (cs){
return (function (_,ch__$1){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.dissoc,ch__$1);

return null;
});})(cs))
;

cljs.core.async.t_cljs$core$async20782.prototype.cljs$core$async$Mult$untap_all_STAR_$arity$1 = ((function (cs){
return (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_.call(null,self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return null;
});})(cs))
;

cljs.core.async.t_cljs$core$async20782.getBasis = ((function (cs){
return (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"mult","mult",-1187640995,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"ch","ch",1085813622,null)], null))),new cljs.core.Keyword(null,"doc","doc",1913296891),"Creates and returns a mult(iple) of the supplied channel. Channels\n  containing copies of the channel can be created with 'tap', and\n  detached with 'untap'.\n\n  Each item is distributed to all taps in parallel and synchronously,\n  i.e. each tap must accept before the next item is distributed. Use\n  buffering/windowing to prevent slow taps from holding up the mult.\n\n  Items received when there are no taps get dropped.\n\n  If a tap puts to a closed channel, it will be removed from the mult."], null)),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"cs","cs",-117024463,null),new cljs.core.Symbol(null,"meta20783","meta20783",1218788374,null)], null);
});})(cs))
;

cljs.core.async.t_cljs$core$async20782.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async20782.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async20782";

cljs.core.async.t_cljs$core$async20782.cljs$lang$ctorPrWriter = ((function (cs){
return (function (this__17438__auto__,writer__17439__auto__,opt__17440__auto__){
return cljs.core._write.call(null,writer__17439__auto__,"cljs.core.async/t_cljs$core$async20782");
});})(cs))
;

cljs.core.async.__GT_t_cljs$core$async20782 = ((function (cs){
return (function cljs$core$async$mult_$___GT_t_cljs$core$async20782(mult__$1,ch__$1,cs__$1,meta20783){
return (new cljs.core.async.t_cljs$core$async20782(mult__$1,ch__$1,cs__$1,meta20783));
});})(cs))
;

}

return (new cljs.core.async.t_cljs$core$async20782(cljs$core$async$mult,ch,cs,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var dchan = cljs.core.async.chan.call(null,(1));
var dctr = cljs.core.atom.call(null,null);
var done = ((function (cs,m,dchan,dctr){
return (function (_){
if((cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec) === (0))){
return cljs.core.async.put_BANG_.call(null,dchan,true);
} else {
return null;
}
});})(cs,m,dchan,dctr))
;
var c__19696__auto___21003 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__19696__auto___21003,cs,m,dchan,dctr,done){
return (function (){
var f__19697__auto__ = (function (){var switch__19584__auto__ = ((function (c__19696__auto___21003,cs,m,dchan,dctr,done){
return (function (state_20915){
var state_val_20916 = (state_20915[(1)]);
if((state_val_20916 === (7))){
var inst_20911 = (state_20915[(2)]);
var state_20915__$1 = state_20915;
var statearr_20917_21004 = state_20915__$1;
(statearr_20917_21004[(2)] = inst_20911);

(statearr_20917_21004[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20916 === (20))){
var inst_20816 = (state_20915[(7)]);
var inst_20826 = cljs.core.first.call(null,inst_20816);
var inst_20827 = cljs.core.nth.call(null,inst_20826,(0),null);
var inst_20828 = cljs.core.nth.call(null,inst_20826,(1),null);
var state_20915__$1 = (function (){var statearr_20918 = state_20915;
(statearr_20918[(8)] = inst_20827);

return statearr_20918;
})();
if(cljs.core.truth_(inst_20828)){
var statearr_20919_21005 = state_20915__$1;
(statearr_20919_21005[(1)] = (22));

} else {
var statearr_20920_21006 = state_20915__$1;
(statearr_20920_21006[(1)] = (23));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20916 === (27))){
var inst_20858 = (state_20915[(9)]);
var inst_20787 = (state_20915[(10)]);
var inst_20856 = (state_20915[(11)]);
var inst_20863 = (state_20915[(12)]);
var inst_20863__$1 = cljs.core._nth.call(null,inst_20856,inst_20858);
var inst_20864 = cljs.core.async.put_BANG_.call(null,inst_20863__$1,inst_20787,done);
var state_20915__$1 = (function (){var statearr_20921 = state_20915;
(statearr_20921[(12)] = inst_20863__$1);

return statearr_20921;
})();
if(cljs.core.truth_(inst_20864)){
var statearr_20922_21007 = state_20915__$1;
(statearr_20922_21007[(1)] = (30));

} else {
var statearr_20923_21008 = state_20915__$1;
(statearr_20923_21008[(1)] = (31));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20916 === (1))){
var state_20915__$1 = state_20915;
var statearr_20924_21009 = state_20915__$1;
(statearr_20924_21009[(2)] = null);

(statearr_20924_21009[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20916 === (24))){
var inst_20816 = (state_20915[(7)]);
var inst_20833 = (state_20915[(2)]);
var inst_20834 = cljs.core.next.call(null,inst_20816);
var inst_20796 = inst_20834;
var inst_20797 = null;
var inst_20798 = (0);
var inst_20799 = (0);
var state_20915__$1 = (function (){var statearr_20925 = state_20915;
(statearr_20925[(13)] = inst_20798);

(statearr_20925[(14)] = inst_20796);

(statearr_20925[(15)] = inst_20833);

(statearr_20925[(16)] = inst_20799);

(statearr_20925[(17)] = inst_20797);

return statearr_20925;
})();
var statearr_20926_21010 = state_20915__$1;
(statearr_20926_21010[(2)] = null);

(statearr_20926_21010[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20916 === (39))){
var state_20915__$1 = state_20915;
var statearr_20930_21011 = state_20915__$1;
(statearr_20930_21011[(2)] = null);

(statearr_20930_21011[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20916 === (4))){
var inst_20787 = (state_20915[(10)]);
var inst_20787__$1 = (state_20915[(2)]);
var inst_20788 = (inst_20787__$1 == null);
var state_20915__$1 = (function (){var statearr_20931 = state_20915;
(statearr_20931[(10)] = inst_20787__$1);

return statearr_20931;
})();
if(cljs.core.truth_(inst_20788)){
var statearr_20932_21012 = state_20915__$1;
(statearr_20932_21012[(1)] = (5));

} else {
var statearr_20933_21013 = state_20915__$1;
(statearr_20933_21013[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20916 === (15))){
var inst_20798 = (state_20915[(13)]);
var inst_20796 = (state_20915[(14)]);
var inst_20799 = (state_20915[(16)]);
var inst_20797 = (state_20915[(17)]);
var inst_20812 = (state_20915[(2)]);
var inst_20813 = (inst_20799 + (1));
var tmp20927 = inst_20798;
var tmp20928 = inst_20796;
var tmp20929 = inst_20797;
var inst_20796__$1 = tmp20928;
var inst_20797__$1 = tmp20929;
var inst_20798__$1 = tmp20927;
var inst_20799__$1 = inst_20813;
var state_20915__$1 = (function (){var statearr_20934 = state_20915;
(statearr_20934[(13)] = inst_20798__$1);

(statearr_20934[(14)] = inst_20796__$1);

(statearr_20934[(16)] = inst_20799__$1);

(statearr_20934[(17)] = inst_20797__$1);

(statearr_20934[(18)] = inst_20812);

return statearr_20934;
})();
var statearr_20935_21014 = state_20915__$1;
(statearr_20935_21014[(2)] = null);

(statearr_20935_21014[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20916 === (21))){
var inst_20837 = (state_20915[(2)]);
var state_20915__$1 = state_20915;
var statearr_20939_21015 = state_20915__$1;
(statearr_20939_21015[(2)] = inst_20837);

(statearr_20939_21015[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20916 === (31))){
var inst_20863 = (state_20915[(12)]);
var inst_20867 = done.call(null,null);
var inst_20868 = cljs.core.async.untap_STAR_.call(null,m,inst_20863);
var state_20915__$1 = (function (){var statearr_20940 = state_20915;
(statearr_20940[(19)] = inst_20867);

return statearr_20940;
})();
var statearr_20941_21016 = state_20915__$1;
(statearr_20941_21016[(2)] = inst_20868);

(statearr_20941_21016[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20916 === (32))){
var inst_20858 = (state_20915[(9)]);
var inst_20855 = (state_20915[(20)]);
var inst_20856 = (state_20915[(11)]);
var inst_20857 = (state_20915[(21)]);
var inst_20870 = (state_20915[(2)]);
var inst_20871 = (inst_20858 + (1));
var tmp20936 = inst_20855;
var tmp20937 = inst_20856;
var tmp20938 = inst_20857;
var inst_20855__$1 = tmp20936;
var inst_20856__$1 = tmp20937;
var inst_20857__$1 = tmp20938;
var inst_20858__$1 = inst_20871;
var state_20915__$1 = (function (){var statearr_20942 = state_20915;
(statearr_20942[(9)] = inst_20858__$1);

(statearr_20942[(22)] = inst_20870);

(statearr_20942[(20)] = inst_20855__$1);

(statearr_20942[(11)] = inst_20856__$1);

(statearr_20942[(21)] = inst_20857__$1);

return statearr_20942;
})();
var statearr_20943_21017 = state_20915__$1;
(statearr_20943_21017[(2)] = null);

(statearr_20943_21017[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20916 === (40))){
var inst_20883 = (state_20915[(23)]);
var inst_20887 = done.call(null,null);
var inst_20888 = cljs.core.async.untap_STAR_.call(null,m,inst_20883);
var state_20915__$1 = (function (){var statearr_20944 = state_20915;
(statearr_20944[(24)] = inst_20887);

return statearr_20944;
})();
var statearr_20945_21018 = state_20915__$1;
(statearr_20945_21018[(2)] = inst_20888);

(statearr_20945_21018[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20916 === (33))){
var inst_20874 = (state_20915[(25)]);
var inst_20876 = cljs.core.chunked_seq_QMARK_.call(null,inst_20874);
var state_20915__$1 = state_20915;
if(inst_20876){
var statearr_20946_21019 = state_20915__$1;
(statearr_20946_21019[(1)] = (36));

} else {
var statearr_20947_21020 = state_20915__$1;
(statearr_20947_21020[(1)] = (37));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20916 === (13))){
var inst_20806 = (state_20915[(26)]);
var inst_20809 = cljs.core.async.close_BANG_.call(null,inst_20806);
var state_20915__$1 = state_20915;
var statearr_20948_21021 = state_20915__$1;
(statearr_20948_21021[(2)] = inst_20809);

(statearr_20948_21021[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20916 === (22))){
var inst_20827 = (state_20915[(8)]);
var inst_20830 = cljs.core.async.close_BANG_.call(null,inst_20827);
var state_20915__$1 = state_20915;
var statearr_20949_21022 = state_20915__$1;
(statearr_20949_21022[(2)] = inst_20830);

(statearr_20949_21022[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20916 === (36))){
var inst_20874 = (state_20915[(25)]);
var inst_20878 = cljs.core.chunk_first.call(null,inst_20874);
var inst_20879 = cljs.core.chunk_rest.call(null,inst_20874);
var inst_20880 = cljs.core.count.call(null,inst_20878);
var inst_20855 = inst_20879;
var inst_20856 = inst_20878;
var inst_20857 = inst_20880;
var inst_20858 = (0);
var state_20915__$1 = (function (){var statearr_20950 = state_20915;
(statearr_20950[(9)] = inst_20858);

(statearr_20950[(20)] = inst_20855);

(statearr_20950[(11)] = inst_20856);

(statearr_20950[(21)] = inst_20857);

return statearr_20950;
})();
var statearr_20951_21023 = state_20915__$1;
(statearr_20951_21023[(2)] = null);

(statearr_20951_21023[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20916 === (41))){
var inst_20874 = (state_20915[(25)]);
var inst_20890 = (state_20915[(2)]);
var inst_20891 = cljs.core.next.call(null,inst_20874);
var inst_20855 = inst_20891;
var inst_20856 = null;
var inst_20857 = (0);
var inst_20858 = (0);
var state_20915__$1 = (function (){var statearr_20952 = state_20915;
(statearr_20952[(9)] = inst_20858);

(statearr_20952[(20)] = inst_20855);

(statearr_20952[(11)] = inst_20856);

(statearr_20952[(27)] = inst_20890);

(statearr_20952[(21)] = inst_20857);

return statearr_20952;
})();
var statearr_20953_21024 = state_20915__$1;
(statearr_20953_21024[(2)] = null);

(statearr_20953_21024[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20916 === (43))){
var state_20915__$1 = state_20915;
var statearr_20954_21025 = state_20915__$1;
(statearr_20954_21025[(2)] = null);

(statearr_20954_21025[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20916 === (29))){
var inst_20899 = (state_20915[(2)]);
var state_20915__$1 = state_20915;
var statearr_20955_21026 = state_20915__$1;
(statearr_20955_21026[(2)] = inst_20899);

(statearr_20955_21026[(1)] = (26));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20916 === (44))){
var inst_20908 = (state_20915[(2)]);
var state_20915__$1 = (function (){var statearr_20956 = state_20915;
(statearr_20956[(28)] = inst_20908);

return statearr_20956;
})();
var statearr_20957_21027 = state_20915__$1;
(statearr_20957_21027[(2)] = null);

(statearr_20957_21027[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20916 === (6))){
var inst_20847 = (state_20915[(29)]);
var inst_20846 = cljs.core.deref.call(null,cs);
var inst_20847__$1 = cljs.core.keys.call(null,inst_20846);
var inst_20848 = cljs.core.count.call(null,inst_20847__$1);
var inst_20849 = cljs.core.reset_BANG_.call(null,dctr,inst_20848);
var inst_20854 = cljs.core.seq.call(null,inst_20847__$1);
var inst_20855 = inst_20854;
var inst_20856 = null;
var inst_20857 = (0);
var inst_20858 = (0);
var state_20915__$1 = (function (){var statearr_20958 = state_20915;
(statearr_20958[(9)] = inst_20858);

(statearr_20958[(29)] = inst_20847__$1);

(statearr_20958[(20)] = inst_20855);

(statearr_20958[(11)] = inst_20856);

(statearr_20958[(30)] = inst_20849);

(statearr_20958[(21)] = inst_20857);

return statearr_20958;
})();
var statearr_20959_21028 = state_20915__$1;
(statearr_20959_21028[(2)] = null);

(statearr_20959_21028[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20916 === (28))){
var inst_20874 = (state_20915[(25)]);
var inst_20855 = (state_20915[(20)]);
var inst_20874__$1 = cljs.core.seq.call(null,inst_20855);
var state_20915__$1 = (function (){var statearr_20960 = state_20915;
(statearr_20960[(25)] = inst_20874__$1);

return statearr_20960;
})();
if(inst_20874__$1){
var statearr_20961_21029 = state_20915__$1;
(statearr_20961_21029[(1)] = (33));

} else {
var statearr_20962_21030 = state_20915__$1;
(statearr_20962_21030[(1)] = (34));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20916 === (25))){
var inst_20858 = (state_20915[(9)]);
var inst_20857 = (state_20915[(21)]);
var inst_20860 = (inst_20858 < inst_20857);
var inst_20861 = inst_20860;
var state_20915__$1 = state_20915;
if(cljs.core.truth_(inst_20861)){
var statearr_20963_21031 = state_20915__$1;
(statearr_20963_21031[(1)] = (27));

} else {
var statearr_20964_21032 = state_20915__$1;
(statearr_20964_21032[(1)] = (28));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20916 === (34))){
var state_20915__$1 = state_20915;
var statearr_20965_21033 = state_20915__$1;
(statearr_20965_21033[(2)] = null);

(statearr_20965_21033[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20916 === (17))){
var state_20915__$1 = state_20915;
var statearr_20966_21034 = state_20915__$1;
(statearr_20966_21034[(2)] = null);

(statearr_20966_21034[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20916 === (3))){
var inst_20913 = (state_20915[(2)]);
var state_20915__$1 = state_20915;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_20915__$1,inst_20913);
} else {
if((state_val_20916 === (12))){
var inst_20842 = (state_20915[(2)]);
var state_20915__$1 = state_20915;
var statearr_20967_21035 = state_20915__$1;
(statearr_20967_21035[(2)] = inst_20842);

(statearr_20967_21035[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20916 === (2))){
var state_20915__$1 = state_20915;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_20915__$1,(4),ch);
} else {
if((state_val_20916 === (23))){
var state_20915__$1 = state_20915;
var statearr_20968_21036 = state_20915__$1;
(statearr_20968_21036[(2)] = null);

(statearr_20968_21036[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20916 === (35))){
var inst_20897 = (state_20915[(2)]);
var state_20915__$1 = state_20915;
var statearr_20969_21037 = state_20915__$1;
(statearr_20969_21037[(2)] = inst_20897);

(statearr_20969_21037[(1)] = (29));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20916 === (19))){
var inst_20816 = (state_20915[(7)]);
var inst_20820 = cljs.core.chunk_first.call(null,inst_20816);
var inst_20821 = cljs.core.chunk_rest.call(null,inst_20816);
var inst_20822 = cljs.core.count.call(null,inst_20820);
var inst_20796 = inst_20821;
var inst_20797 = inst_20820;
var inst_20798 = inst_20822;
var inst_20799 = (0);
var state_20915__$1 = (function (){var statearr_20970 = state_20915;
(statearr_20970[(13)] = inst_20798);

(statearr_20970[(14)] = inst_20796);

(statearr_20970[(16)] = inst_20799);

(statearr_20970[(17)] = inst_20797);

return statearr_20970;
})();
var statearr_20971_21038 = state_20915__$1;
(statearr_20971_21038[(2)] = null);

(statearr_20971_21038[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20916 === (11))){
var inst_20796 = (state_20915[(14)]);
var inst_20816 = (state_20915[(7)]);
var inst_20816__$1 = cljs.core.seq.call(null,inst_20796);
var state_20915__$1 = (function (){var statearr_20972 = state_20915;
(statearr_20972[(7)] = inst_20816__$1);

return statearr_20972;
})();
if(inst_20816__$1){
var statearr_20973_21039 = state_20915__$1;
(statearr_20973_21039[(1)] = (16));

} else {
var statearr_20974_21040 = state_20915__$1;
(statearr_20974_21040[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20916 === (9))){
var inst_20844 = (state_20915[(2)]);
var state_20915__$1 = state_20915;
var statearr_20975_21041 = state_20915__$1;
(statearr_20975_21041[(2)] = inst_20844);

(statearr_20975_21041[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20916 === (5))){
var inst_20794 = cljs.core.deref.call(null,cs);
var inst_20795 = cljs.core.seq.call(null,inst_20794);
var inst_20796 = inst_20795;
var inst_20797 = null;
var inst_20798 = (0);
var inst_20799 = (0);
var state_20915__$1 = (function (){var statearr_20976 = state_20915;
(statearr_20976[(13)] = inst_20798);

(statearr_20976[(14)] = inst_20796);

(statearr_20976[(16)] = inst_20799);

(statearr_20976[(17)] = inst_20797);

return statearr_20976;
})();
var statearr_20977_21042 = state_20915__$1;
(statearr_20977_21042[(2)] = null);

(statearr_20977_21042[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20916 === (14))){
var state_20915__$1 = state_20915;
var statearr_20978_21043 = state_20915__$1;
(statearr_20978_21043[(2)] = null);

(statearr_20978_21043[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20916 === (45))){
var inst_20905 = (state_20915[(2)]);
var state_20915__$1 = state_20915;
var statearr_20979_21044 = state_20915__$1;
(statearr_20979_21044[(2)] = inst_20905);

(statearr_20979_21044[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20916 === (26))){
var inst_20847 = (state_20915[(29)]);
var inst_20901 = (state_20915[(2)]);
var inst_20902 = cljs.core.seq.call(null,inst_20847);
var state_20915__$1 = (function (){var statearr_20980 = state_20915;
(statearr_20980[(31)] = inst_20901);

return statearr_20980;
})();
if(inst_20902){
var statearr_20981_21045 = state_20915__$1;
(statearr_20981_21045[(1)] = (42));

} else {
var statearr_20982_21046 = state_20915__$1;
(statearr_20982_21046[(1)] = (43));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20916 === (16))){
var inst_20816 = (state_20915[(7)]);
var inst_20818 = cljs.core.chunked_seq_QMARK_.call(null,inst_20816);
var state_20915__$1 = state_20915;
if(inst_20818){
var statearr_20983_21047 = state_20915__$1;
(statearr_20983_21047[(1)] = (19));

} else {
var statearr_20984_21048 = state_20915__$1;
(statearr_20984_21048[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20916 === (38))){
var inst_20894 = (state_20915[(2)]);
var state_20915__$1 = state_20915;
var statearr_20985_21049 = state_20915__$1;
(statearr_20985_21049[(2)] = inst_20894);

(statearr_20985_21049[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20916 === (30))){
var state_20915__$1 = state_20915;
var statearr_20986_21050 = state_20915__$1;
(statearr_20986_21050[(2)] = null);

(statearr_20986_21050[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20916 === (10))){
var inst_20799 = (state_20915[(16)]);
var inst_20797 = (state_20915[(17)]);
var inst_20805 = cljs.core._nth.call(null,inst_20797,inst_20799);
var inst_20806 = cljs.core.nth.call(null,inst_20805,(0),null);
var inst_20807 = cljs.core.nth.call(null,inst_20805,(1),null);
var state_20915__$1 = (function (){var statearr_20987 = state_20915;
(statearr_20987[(26)] = inst_20806);

return statearr_20987;
})();
if(cljs.core.truth_(inst_20807)){
var statearr_20988_21051 = state_20915__$1;
(statearr_20988_21051[(1)] = (13));

} else {
var statearr_20989_21052 = state_20915__$1;
(statearr_20989_21052[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20916 === (18))){
var inst_20840 = (state_20915[(2)]);
var state_20915__$1 = state_20915;
var statearr_20990_21053 = state_20915__$1;
(statearr_20990_21053[(2)] = inst_20840);

(statearr_20990_21053[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20916 === (42))){
var state_20915__$1 = state_20915;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_20915__$1,(45),dchan);
} else {
if((state_val_20916 === (37))){
var inst_20787 = (state_20915[(10)]);
var inst_20883 = (state_20915[(23)]);
var inst_20874 = (state_20915[(25)]);
var inst_20883__$1 = cljs.core.first.call(null,inst_20874);
var inst_20884 = cljs.core.async.put_BANG_.call(null,inst_20883__$1,inst_20787,done);
var state_20915__$1 = (function (){var statearr_20991 = state_20915;
(statearr_20991[(23)] = inst_20883__$1);

return statearr_20991;
})();
if(cljs.core.truth_(inst_20884)){
var statearr_20992_21054 = state_20915__$1;
(statearr_20992_21054[(1)] = (39));

} else {
var statearr_20993_21055 = state_20915__$1;
(statearr_20993_21055[(1)] = (40));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20916 === (8))){
var inst_20798 = (state_20915[(13)]);
var inst_20799 = (state_20915[(16)]);
var inst_20801 = (inst_20799 < inst_20798);
var inst_20802 = inst_20801;
var state_20915__$1 = state_20915;
if(cljs.core.truth_(inst_20802)){
var statearr_20994_21056 = state_20915__$1;
(statearr_20994_21056[(1)] = (10));

} else {
var statearr_20995_21057 = state_20915__$1;
(statearr_20995_21057[(1)] = (11));

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
});})(c__19696__auto___21003,cs,m,dchan,dctr,done))
;
return ((function (switch__19584__auto__,c__19696__auto___21003,cs,m,dchan,dctr,done){
return (function() {
var cljs$core$async$mult_$_state_machine__19585__auto__ = null;
var cljs$core$async$mult_$_state_machine__19585__auto____0 = (function (){
var statearr_20999 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_20999[(0)] = cljs$core$async$mult_$_state_machine__19585__auto__);

(statearr_20999[(1)] = (1));

return statearr_20999;
});
var cljs$core$async$mult_$_state_machine__19585__auto____1 = (function (state_20915){
while(true){
var ret_value__19586__auto__ = (function (){try{while(true){
var result__19587__auto__ = switch__19584__auto__.call(null,state_20915);
if(cljs.core.keyword_identical_QMARK_.call(null,result__19587__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__19587__auto__;
}
break;
}
}catch (e21000){if((e21000 instanceof Object)){
var ex__19588__auto__ = e21000;
var statearr_21001_21058 = state_20915;
(statearr_21001_21058[(5)] = ex__19588__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_20915);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e21000;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__19586__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__21059 = state_20915;
state_20915 = G__21059;
continue;
} else {
return ret_value__19586__auto__;
}
break;
}
});
cljs$core$async$mult_$_state_machine__19585__auto__ = function(state_20915){
switch(arguments.length){
case 0:
return cljs$core$async$mult_$_state_machine__19585__auto____0.call(this);
case 1:
return cljs$core$async$mult_$_state_machine__19585__auto____1.call(this,state_20915);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mult_$_state_machine__19585__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mult_$_state_machine__19585__auto____0;
cljs$core$async$mult_$_state_machine__19585__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mult_$_state_machine__19585__auto____1;
return cljs$core$async$mult_$_state_machine__19585__auto__;
})()
;})(switch__19584__auto__,c__19696__auto___21003,cs,m,dchan,dctr,done))
})();
var state__19698__auto__ = (function (){var statearr_21002 = f__19697__auto__.call(null);
(statearr_21002[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__19696__auto___21003);

return statearr_21002;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__19698__auto__);
});})(c__19696__auto___21003,cs,m,dchan,dctr,done))
);


return m;
});
/**
 * Copies the mult source onto the supplied channel.
 * 
 *   By default the channel will be closed when the source closes,
 *   but can be determined by the close? parameter.
 */
cljs.core.async.tap = (function cljs$core$async$tap(var_args){
var args21060 = [];
var len__17898__auto___21063 = arguments.length;
var i__17899__auto___21064 = (0);
while(true){
if((i__17899__auto___21064 < len__17898__auto___21063)){
args21060.push((arguments[i__17899__auto___21064]));

var G__21065 = (i__17899__auto___21064 + (1));
i__17899__auto___21064 = G__21065;
continue;
} else {
}
break;
}

var G__21062 = args21060.length;
switch (G__21062) {
case 2:
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args21060.length)].join('')));

}
});

cljs.core.async.tap.cljs$core$IFn$_invoke$arity$2 = (function (mult,ch){
return cljs.core.async.tap.call(null,mult,ch,true);
});

cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3 = (function (mult,ch,close_QMARK_){
cljs.core.async.tap_STAR_.call(null,mult,ch,close_QMARK_);

return ch;
});

cljs.core.async.tap.cljs$lang$maxFixedArity = 3;
/**
 * Disconnects a target channel from a mult
 */
cljs.core.async.untap = (function cljs$core$async$untap(mult,ch){
return cljs.core.async.untap_STAR_.call(null,mult,ch);
});
/**
 * Disconnects all target channels from a mult
 */
cljs.core.async.untap_all = (function cljs$core$async$untap_all(mult){
return cljs.core.async.untap_all_STAR_.call(null,mult);
});

/**
 * @interface
 */
cljs.core.async.Mix = function(){};

cljs.core.async.admix_STAR_ = (function cljs$core$async$admix_STAR_(m,ch){
if((!((m == null))) && (!((m.cljs$core$async$Mix$admix_STAR_$arity$2 == null)))){
return m.cljs$core$async$Mix$admix_STAR_$arity$2(m,ch);
} else {
var x__17495__auto__ = (((m == null))?null:m);
var m__17496__auto__ = (cljs.core.async.admix_STAR_[goog.typeOf(x__17495__auto__)]);
if(!((m__17496__auto__ == null))){
return m__17496__auto__.call(null,m,ch);
} else {
var m__17496__auto____$1 = (cljs.core.async.admix_STAR_["_"]);
if(!((m__17496__auto____$1 == null))){
return m__17496__auto____$1.call(null,m,ch);
} else {
throw cljs.core.missing_protocol.call(null,"Mix.admix*",m);
}
}
}
});

cljs.core.async.unmix_STAR_ = (function cljs$core$async$unmix_STAR_(m,ch){
if((!((m == null))) && (!((m.cljs$core$async$Mix$unmix_STAR_$arity$2 == null)))){
return m.cljs$core$async$Mix$unmix_STAR_$arity$2(m,ch);
} else {
var x__17495__auto__ = (((m == null))?null:m);
var m__17496__auto__ = (cljs.core.async.unmix_STAR_[goog.typeOf(x__17495__auto__)]);
if(!((m__17496__auto__ == null))){
return m__17496__auto__.call(null,m,ch);
} else {
var m__17496__auto____$1 = (cljs.core.async.unmix_STAR_["_"]);
if(!((m__17496__auto____$1 == null))){
return m__17496__auto____$1.call(null,m,ch);
} else {
throw cljs.core.missing_protocol.call(null,"Mix.unmix*",m);
}
}
}
});

cljs.core.async.unmix_all_STAR_ = (function cljs$core$async$unmix_all_STAR_(m){
if((!((m == null))) && (!((m.cljs$core$async$Mix$unmix_all_STAR_$arity$1 == null)))){
return m.cljs$core$async$Mix$unmix_all_STAR_$arity$1(m);
} else {
var x__17495__auto__ = (((m == null))?null:m);
var m__17496__auto__ = (cljs.core.async.unmix_all_STAR_[goog.typeOf(x__17495__auto__)]);
if(!((m__17496__auto__ == null))){
return m__17496__auto__.call(null,m);
} else {
var m__17496__auto____$1 = (cljs.core.async.unmix_all_STAR_["_"]);
if(!((m__17496__auto____$1 == null))){
return m__17496__auto____$1.call(null,m);
} else {
throw cljs.core.missing_protocol.call(null,"Mix.unmix-all*",m);
}
}
}
});

cljs.core.async.toggle_STAR_ = (function cljs$core$async$toggle_STAR_(m,state_map){
if((!((m == null))) && (!((m.cljs$core$async$Mix$toggle_STAR_$arity$2 == null)))){
return m.cljs$core$async$Mix$toggle_STAR_$arity$2(m,state_map);
} else {
var x__17495__auto__ = (((m == null))?null:m);
var m__17496__auto__ = (cljs.core.async.toggle_STAR_[goog.typeOf(x__17495__auto__)]);
if(!((m__17496__auto__ == null))){
return m__17496__auto__.call(null,m,state_map);
} else {
var m__17496__auto____$1 = (cljs.core.async.toggle_STAR_["_"]);
if(!((m__17496__auto____$1 == null))){
return m__17496__auto____$1.call(null,m,state_map);
} else {
throw cljs.core.missing_protocol.call(null,"Mix.toggle*",m);
}
}
}
});

cljs.core.async.solo_mode_STAR_ = (function cljs$core$async$solo_mode_STAR_(m,mode){
if((!((m == null))) && (!((m.cljs$core$async$Mix$solo_mode_STAR_$arity$2 == null)))){
return m.cljs$core$async$Mix$solo_mode_STAR_$arity$2(m,mode);
} else {
var x__17495__auto__ = (((m == null))?null:m);
var m__17496__auto__ = (cljs.core.async.solo_mode_STAR_[goog.typeOf(x__17495__auto__)]);
if(!((m__17496__auto__ == null))){
return m__17496__auto__.call(null,m,mode);
} else {
var m__17496__auto____$1 = (cljs.core.async.solo_mode_STAR_["_"]);
if(!((m__17496__auto____$1 == null))){
return m__17496__auto____$1.call(null,m,mode);
} else {
throw cljs.core.missing_protocol.call(null,"Mix.solo-mode*",m);
}
}
}
});

cljs.core.async.ioc_alts_BANG_ = (function cljs$core$async$ioc_alts_BANG_(var_args){
var args__17905__auto__ = [];
var len__17898__auto___21077 = arguments.length;
var i__17899__auto___21078 = (0);
while(true){
if((i__17899__auto___21078 < len__17898__auto___21077)){
args__17905__auto__.push((arguments[i__17899__auto___21078]));

var G__21079 = (i__17899__auto___21078 + (1));
i__17899__auto___21078 = G__21079;
continue;
} else {
}
break;
}

var argseq__17906__auto__ = ((((3) < args__17905__auto__.length))?(new cljs.core.IndexedSeq(args__17905__auto__.slice((3)),(0))):null);
return cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__17906__auto__);
});

cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (state,cont_block,ports,p__21071){
var map__21072 = p__21071;
var map__21072__$1 = ((((!((map__21072 == null)))?((((map__21072.cljs$lang$protocol_mask$partition0$ & (64))) || (map__21072.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__21072):map__21072);
var opts = map__21072__$1;
var statearr_21074_21080 = state;
(statearr_21074_21080[cljs.core.async.impl.ioc_helpers.STATE_IDX] = cont_block);


var temp__4425__auto__ = cljs.core.async.do_alts.call(null,((function (map__21072,map__21072__$1,opts){
return (function (val){
var statearr_21075_21081 = state;
(statearr_21075_21081[cljs.core.async.impl.ioc_helpers.VALUE_IDX] = val);


return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state);
});})(map__21072,map__21072__$1,opts))
,ports,opts);
if(cljs.core.truth_(temp__4425__auto__)){
var cb = temp__4425__auto__;
var statearr_21076_21082 = state;
(statearr_21076_21082[cljs.core.async.impl.ioc_helpers.VALUE_IDX] = cljs.core.deref.call(null,cb));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
});

cljs.core.async.ioc_alts_BANG_.cljs$lang$maxFixedArity = (3);

cljs.core.async.ioc_alts_BANG_.cljs$lang$applyTo = (function (seq21067){
var G__21068 = cljs.core.first.call(null,seq21067);
var seq21067__$1 = cljs.core.next.call(null,seq21067);
var G__21069 = cljs.core.first.call(null,seq21067__$1);
var seq21067__$2 = cljs.core.next.call(null,seq21067__$1);
var G__21070 = cljs.core.first.call(null,seq21067__$2);
var seq21067__$3 = cljs.core.next.call(null,seq21067__$2);
return cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic(G__21068,G__21069,G__21070,seq21067__$3);
});
/**
 * Creates and returns a mix of one or more input channels which will
 *   be put on the supplied out channel. Input sources can be added to
 *   the mix with 'admix', and removed with 'unmix'. A mix supports
 *   soloing, muting and pausing multiple inputs atomically using
 *   'toggle', and can solo using either muting or pausing as determined
 *   by 'solo-mode'.
 * 
 *   Each channel can have zero or more boolean modes set via 'toggle':
 * 
 *   :solo - when true, only this (ond other soloed) channel(s) will appear
 *        in the mix output channel. :mute and :pause states of soloed
 *        channels are ignored. If solo-mode is :mute, non-soloed
 *        channels are muted, if :pause, non-soloed channels are
 *        paused.
 * 
 *   :mute - muted channels will have their contents consumed but not included in the mix
 *   :pause - paused channels will not have their contents consumed (and thus also not included in the mix)
 */
cljs.core.async.mix = (function cljs$core$async$mix(out){
var cs = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var solo_modes = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"pause","pause",-2095325672),null,new cljs.core.Keyword(null,"mute","mute",1151223646),null], null), null);
var attrs = cljs.core.conj.call(null,solo_modes,new cljs.core.Keyword(null,"solo","solo",-316350075));
var solo_mode = cljs.core.atom.call(null,new cljs.core.Keyword(null,"mute","mute",1151223646));
var change = cljs.core.async.chan.call(null);
var changed = ((function (cs,solo_modes,attrs,solo_mode,change){
return (function (){
return cljs.core.async.put_BANG_.call(null,change,true);
});})(cs,solo_modes,attrs,solo_mode,change))
;
var pick = ((function (cs,solo_modes,attrs,solo_mode,change,changed){
return (function (attr,chs){
return cljs.core.reduce_kv.call(null,((function (cs,solo_modes,attrs,solo_mode,change,changed){
return (function (ret,c,v){
if(cljs.core.truth_(attr.call(null,v))){
return cljs.core.conj.call(null,ret,c);
} else {
return ret;
}
});})(cs,solo_modes,attrs,solo_mode,change,changed))
,cljs.core.PersistentHashSet.EMPTY,chs);
});})(cs,solo_modes,attrs,solo_mode,change,changed))
;
var calc_state = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick){
return (function (){
var chs = cljs.core.deref.call(null,cs);
var mode = cljs.core.deref.call(null,solo_mode);
var solos = pick.call(null,new cljs.core.Keyword(null,"solo","solo",-316350075),chs);
var pauses = pick.call(null,new cljs.core.Keyword(null,"pause","pause",-2095325672),chs);
return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"solos","solos",1441458643),solos,new cljs.core.Keyword(null,"mutes","mutes",1068806309),pick.call(null,new cljs.core.Keyword(null,"mute","mute",1151223646),chs),new cljs.core.Keyword(null,"reads","reads",-1215067361),cljs.core.conj.call(null,(((cljs.core._EQ_.call(null,mode,new cljs.core.Keyword(null,"pause","pause",-2095325672))) && (!(cljs.core.empty_QMARK_.call(null,solos))))?cljs.core.vec.call(null,solos):cljs.core.vec.call(null,cljs.core.remove.call(null,pauses,cljs.core.keys.call(null,chs)))),change)], null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick))
;
var m = (function (){
if(typeof cljs.core.async.t_cljs$core$async21246 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mix}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async21246 = (function (change,mix,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,meta21247){
this.change = change;
this.mix = mix;
this.solo_mode = solo_mode;
this.pick = pick;
this.cs = cs;
this.calc_state = calc_state;
this.out = out;
this.changed = changed;
this.solo_modes = solo_modes;
this.attrs = attrs;
this.meta21247 = meta21247;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async21246.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_21248,meta21247__$1){
var self__ = this;
var _21248__$1 = this;
return (new cljs.core.async.t_cljs$core$async21246(self__.change,self__.mix,self__.solo_mode,self__.pick,self__.cs,self__.calc_state,self__.out,self__.changed,self__.solo_modes,self__.attrs,meta21247__$1));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async21246.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_21248){
var self__ = this;
var _21248__$1 = this;
return self__.meta21247;
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async21246.prototype.cljs$core$async$Mux$ = true;

cljs.core.async.t_cljs$core$async21246.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.out;
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async21246.prototype.cljs$core$async$Mix$ = true;

cljs.core.async.t_cljs$core$async21246.prototype.cljs$core$async$Mix$admix_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.assoc,ch,cljs.core.PersistentArrayMap.EMPTY);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async21246.prototype.cljs$core$async$Mix$unmix_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.dissoc,ch);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async21246.prototype.cljs$core$async$Mix$unmix_all_STAR_$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_.call(null,self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async21246.prototype.cljs$core$async$Mix$toggle_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,state_map){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.partial.call(null,cljs.core.merge_with,cljs.core.merge),state_map);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async21246.prototype.cljs$core$async$Mix$solo_mode_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,mode){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_(self__.solo_modes.call(null,mode))){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str([cljs.core.str("mode must be one of: "),cljs.core.str(self__.solo_modes)].join('')),cljs.core.str("\n"),cljs.core.str(cljs.core.pr_str.call(null,cljs.core.list(new cljs.core.Symbol(null,"solo-modes","solo-modes",882180540,null),new cljs.core.Symbol(null,"mode","mode",-2000032078,null))))].join('')));
}

cljs.core.reset_BANG_.call(null,self__.solo_mode,mode);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async21246.getBasis = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (){
return new cljs.core.PersistentVector(null, 11, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"change","change",477485025,null),cljs.core.with_meta(new cljs.core.Symbol(null,"mix","mix",2121373763,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"out","out",729986010,null)], null))),new cljs.core.Keyword(null,"doc","doc",1913296891),"Creates and returns a mix of one or more input channels which will\n  be put on the supplied out channel. Input sources can be added to\n  the mix with 'admix', and removed with 'unmix'. A mix supports\n  soloing, muting and pausing multiple inputs atomically using\n  'toggle', and can solo using either muting or pausing as determined\n  by 'solo-mode'.\n\n  Each channel can have zero or more boolean modes set via 'toggle':\n\n  :solo - when true, only this (ond other soloed) channel(s) will appear\n          in the mix output channel. :mute and :pause states of soloed\n          channels are ignored. If solo-mode is :mute, non-soloed\n          channels are muted, if :pause, non-soloed channels are\n          paused.\n\n  :mute - muted channels will have their contents consumed but not included in the mix\n  :pause - paused channels will not have their contents consumed (and thus also not included in the mix)\n"], null)),new cljs.core.Symbol(null,"solo-mode","solo-mode",2031788074,null),new cljs.core.Symbol(null,"pick","pick",1300068175,null),new cljs.core.Symbol(null,"cs","cs",-117024463,null),new cljs.core.Symbol(null,"calc-state","calc-state",-349968968,null),new cljs.core.Symbol(null,"out","out",729986010,null),new cljs.core.Symbol(null,"changed","changed",-2083710852,null),new cljs.core.Symbol(null,"solo-modes","solo-modes",882180540,null),new cljs.core.Symbol(null,"attrs","attrs",-450137186,null),new cljs.core.Symbol(null,"meta21247","meta21247",-1803380493,null)], null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async21246.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async21246.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async21246";

cljs.core.async.t_cljs$core$async21246.cljs$lang$ctorPrWriter = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (this__17438__auto__,writer__17439__auto__,opt__17440__auto__){
return cljs.core._write.call(null,writer__17439__auto__,"cljs.core.async/t_cljs$core$async21246");
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.__GT_t_cljs$core$async21246 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function cljs$core$async$mix_$___GT_t_cljs$core$async21246(change__$1,mix__$1,solo_mode__$1,pick__$1,cs__$1,calc_state__$1,out__$1,changed__$1,solo_modes__$1,attrs__$1,meta21247){
return (new cljs.core.async.t_cljs$core$async21246(change__$1,mix__$1,solo_mode__$1,pick__$1,cs__$1,calc_state__$1,out__$1,changed__$1,solo_modes__$1,attrs__$1,meta21247));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

}

return (new cljs.core.async.t_cljs$core$async21246(change,cljs$core$async$mix,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var c__19696__auto___21409 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__19696__auto___21409,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function (){
var f__19697__auto__ = (function (){var switch__19584__auto__ = ((function (c__19696__auto___21409,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function (state_21346){
var state_val_21347 = (state_21346[(1)]);
if((state_val_21347 === (7))){
var inst_21264 = (state_21346[(2)]);
var state_21346__$1 = state_21346;
var statearr_21348_21410 = state_21346__$1;
(statearr_21348_21410[(2)] = inst_21264);

(statearr_21348_21410[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21347 === (20))){
var inst_21276 = (state_21346[(7)]);
var state_21346__$1 = state_21346;
var statearr_21349_21411 = state_21346__$1;
(statearr_21349_21411[(2)] = inst_21276);

(statearr_21349_21411[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21347 === (27))){
var state_21346__$1 = state_21346;
var statearr_21350_21412 = state_21346__$1;
(statearr_21350_21412[(2)] = null);

(statearr_21350_21412[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21347 === (1))){
var inst_21252 = (state_21346[(8)]);
var inst_21252__$1 = calc_state.call(null);
var inst_21254 = (inst_21252__$1 == null);
var inst_21255 = cljs.core.not.call(null,inst_21254);
var state_21346__$1 = (function (){var statearr_21351 = state_21346;
(statearr_21351[(8)] = inst_21252__$1);

return statearr_21351;
})();
if(inst_21255){
var statearr_21352_21413 = state_21346__$1;
(statearr_21352_21413[(1)] = (2));

} else {
var statearr_21353_21414 = state_21346__$1;
(statearr_21353_21414[(1)] = (3));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21347 === (24))){
var inst_21320 = (state_21346[(9)]);
var inst_21306 = (state_21346[(10)]);
var inst_21299 = (state_21346[(11)]);
var inst_21320__$1 = inst_21299.call(null,inst_21306);
var state_21346__$1 = (function (){var statearr_21354 = state_21346;
(statearr_21354[(9)] = inst_21320__$1);

return statearr_21354;
})();
if(cljs.core.truth_(inst_21320__$1)){
var statearr_21355_21415 = state_21346__$1;
(statearr_21355_21415[(1)] = (29));

} else {
var statearr_21356_21416 = state_21346__$1;
(statearr_21356_21416[(1)] = (30));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21347 === (4))){
var inst_21267 = (state_21346[(2)]);
var state_21346__$1 = state_21346;
if(cljs.core.truth_(inst_21267)){
var statearr_21357_21417 = state_21346__$1;
(statearr_21357_21417[(1)] = (8));

} else {
var statearr_21358_21418 = state_21346__$1;
(statearr_21358_21418[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21347 === (15))){
var inst_21293 = (state_21346[(2)]);
var state_21346__$1 = state_21346;
if(cljs.core.truth_(inst_21293)){
var statearr_21359_21419 = state_21346__$1;
(statearr_21359_21419[(1)] = (19));

} else {
var statearr_21360_21420 = state_21346__$1;
(statearr_21360_21420[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21347 === (21))){
var inst_21298 = (state_21346[(12)]);
var inst_21298__$1 = (state_21346[(2)]);
var inst_21299 = cljs.core.get.call(null,inst_21298__$1,new cljs.core.Keyword(null,"solos","solos",1441458643));
var inst_21300 = cljs.core.get.call(null,inst_21298__$1,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_21301 = cljs.core.get.call(null,inst_21298__$1,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var state_21346__$1 = (function (){var statearr_21361 = state_21346;
(statearr_21361[(12)] = inst_21298__$1);

(statearr_21361[(13)] = inst_21300);

(statearr_21361[(11)] = inst_21299);

return statearr_21361;
})();
return cljs.core.async.ioc_alts_BANG_.call(null,state_21346__$1,(22),inst_21301);
} else {
if((state_val_21347 === (31))){
var inst_21328 = (state_21346[(2)]);
var state_21346__$1 = state_21346;
if(cljs.core.truth_(inst_21328)){
var statearr_21362_21421 = state_21346__$1;
(statearr_21362_21421[(1)] = (32));

} else {
var statearr_21363_21422 = state_21346__$1;
(statearr_21363_21422[(1)] = (33));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21347 === (32))){
var inst_21305 = (state_21346[(14)]);
var state_21346__$1 = state_21346;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_21346__$1,(35),out,inst_21305);
} else {
if((state_val_21347 === (33))){
var inst_21298 = (state_21346[(12)]);
var inst_21276 = inst_21298;
var state_21346__$1 = (function (){var statearr_21364 = state_21346;
(statearr_21364[(7)] = inst_21276);

return statearr_21364;
})();
var statearr_21365_21423 = state_21346__$1;
(statearr_21365_21423[(2)] = null);

(statearr_21365_21423[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21347 === (13))){
var inst_21276 = (state_21346[(7)]);
var inst_21283 = inst_21276.cljs$lang$protocol_mask$partition0$;
var inst_21284 = (inst_21283 & (64));
var inst_21285 = inst_21276.cljs$core$ISeq$;
var inst_21286 = (inst_21284) || (inst_21285);
var state_21346__$1 = state_21346;
if(cljs.core.truth_(inst_21286)){
var statearr_21366_21424 = state_21346__$1;
(statearr_21366_21424[(1)] = (16));

} else {
var statearr_21367_21425 = state_21346__$1;
(statearr_21367_21425[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21347 === (22))){
var inst_21305 = (state_21346[(14)]);
var inst_21306 = (state_21346[(10)]);
var inst_21304 = (state_21346[(2)]);
var inst_21305__$1 = cljs.core.nth.call(null,inst_21304,(0),null);
var inst_21306__$1 = cljs.core.nth.call(null,inst_21304,(1),null);
var inst_21307 = (inst_21305__$1 == null);
var inst_21308 = cljs.core._EQ_.call(null,inst_21306__$1,change);
var inst_21309 = (inst_21307) || (inst_21308);
var state_21346__$1 = (function (){var statearr_21368 = state_21346;
(statearr_21368[(14)] = inst_21305__$1);

(statearr_21368[(10)] = inst_21306__$1);

return statearr_21368;
})();
if(cljs.core.truth_(inst_21309)){
var statearr_21369_21426 = state_21346__$1;
(statearr_21369_21426[(1)] = (23));

} else {
var statearr_21370_21427 = state_21346__$1;
(statearr_21370_21427[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21347 === (36))){
var inst_21298 = (state_21346[(12)]);
var inst_21276 = inst_21298;
var state_21346__$1 = (function (){var statearr_21371 = state_21346;
(statearr_21371[(7)] = inst_21276);

return statearr_21371;
})();
var statearr_21372_21428 = state_21346__$1;
(statearr_21372_21428[(2)] = null);

(statearr_21372_21428[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21347 === (29))){
var inst_21320 = (state_21346[(9)]);
var state_21346__$1 = state_21346;
var statearr_21373_21429 = state_21346__$1;
(statearr_21373_21429[(2)] = inst_21320);

(statearr_21373_21429[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21347 === (6))){
var state_21346__$1 = state_21346;
var statearr_21374_21430 = state_21346__$1;
(statearr_21374_21430[(2)] = false);

(statearr_21374_21430[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21347 === (28))){
var inst_21316 = (state_21346[(2)]);
var inst_21317 = calc_state.call(null);
var inst_21276 = inst_21317;
var state_21346__$1 = (function (){var statearr_21375 = state_21346;
(statearr_21375[(7)] = inst_21276);

(statearr_21375[(15)] = inst_21316);

return statearr_21375;
})();
var statearr_21376_21431 = state_21346__$1;
(statearr_21376_21431[(2)] = null);

(statearr_21376_21431[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21347 === (25))){
var inst_21342 = (state_21346[(2)]);
var state_21346__$1 = state_21346;
var statearr_21377_21432 = state_21346__$1;
(statearr_21377_21432[(2)] = inst_21342);

(statearr_21377_21432[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21347 === (34))){
var inst_21340 = (state_21346[(2)]);
var state_21346__$1 = state_21346;
var statearr_21378_21433 = state_21346__$1;
(statearr_21378_21433[(2)] = inst_21340);

(statearr_21378_21433[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21347 === (17))){
var state_21346__$1 = state_21346;
var statearr_21379_21434 = state_21346__$1;
(statearr_21379_21434[(2)] = false);

(statearr_21379_21434[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21347 === (3))){
var state_21346__$1 = state_21346;
var statearr_21380_21435 = state_21346__$1;
(statearr_21380_21435[(2)] = false);

(statearr_21380_21435[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21347 === (12))){
var inst_21344 = (state_21346[(2)]);
var state_21346__$1 = state_21346;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_21346__$1,inst_21344);
} else {
if((state_val_21347 === (2))){
var inst_21252 = (state_21346[(8)]);
var inst_21257 = inst_21252.cljs$lang$protocol_mask$partition0$;
var inst_21258 = (inst_21257 & (64));
var inst_21259 = inst_21252.cljs$core$ISeq$;
var inst_21260 = (inst_21258) || (inst_21259);
var state_21346__$1 = state_21346;
if(cljs.core.truth_(inst_21260)){
var statearr_21381_21436 = state_21346__$1;
(statearr_21381_21436[(1)] = (5));

} else {
var statearr_21382_21437 = state_21346__$1;
(statearr_21382_21437[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21347 === (23))){
var inst_21305 = (state_21346[(14)]);
var inst_21311 = (inst_21305 == null);
var state_21346__$1 = state_21346;
if(cljs.core.truth_(inst_21311)){
var statearr_21383_21438 = state_21346__$1;
(statearr_21383_21438[(1)] = (26));

} else {
var statearr_21384_21439 = state_21346__$1;
(statearr_21384_21439[(1)] = (27));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21347 === (35))){
var inst_21331 = (state_21346[(2)]);
var state_21346__$1 = state_21346;
if(cljs.core.truth_(inst_21331)){
var statearr_21385_21440 = state_21346__$1;
(statearr_21385_21440[(1)] = (36));

} else {
var statearr_21386_21441 = state_21346__$1;
(statearr_21386_21441[(1)] = (37));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21347 === (19))){
var inst_21276 = (state_21346[(7)]);
var inst_21295 = cljs.core.apply.call(null,cljs.core.hash_map,inst_21276);
var state_21346__$1 = state_21346;
var statearr_21387_21442 = state_21346__$1;
(statearr_21387_21442[(2)] = inst_21295);

(statearr_21387_21442[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21347 === (11))){
var inst_21276 = (state_21346[(7)]);
var inst_21280 = (inst_21276 == null);
var inst_21281 = cljs.core.not.call(null,inst_21280);
var state_21346__$1 = state_21346;
if(inst_21281){
var statearr_21388_21443 = state_21346__$1;
(statearr_21388_21443[(1)] = (13));

} else {
var statearr_21389_21444 = state_21346__$1;
(statearr_21389_21444[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21347 === (9))){
var inst_21252 = (state_21346[(8)]);
var state_21346__$1 = state_21346;
var statearr_21390_21445 = state_21346__$1;
(statearr_21390_21445[(2)] = inst_21252);

(statearr_21390_21445[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21347 === (5))){
var state_21346__$1 = state_21346;
var statearr_21391_21446 = state_21346__$1;
(statearr_21391_21446[(2)] = true);

(statearr_21391_21446[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21347 === (14))){
var state_21346__$1 = state_21346;
var statearr_21392_21447 = state_21346__$1;
(statearr_21392_21447[(2)] = false);

(statearr_21392_21447[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21347 === (26))){
var inst_21306 = (state_21346[(10)]);
var inst_21313 = cljs.core.swap_BANG_.call(null,cs,cljs.core.dissoc,inst_21306);
var state_21346__$1 = state_21346;
var statearr_21393_21448 = state_21346__$1;
(statearr_21393_21448[(2)] = inst_21313);

(statearr_21393_21448[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21347 === (16))){
var state_21346__$1 = state_21346;
var statearr_21394_21449 = state_21346__$1;
(statearr_21394_21449[(2)] = true);

(statearr_21394_21449[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21347 === (38))){
var inst_21336 = (state_21346[(2)]);
var state_21346__$1 = state_21346;
var statearr_21395_21450 = state_21346__$1;
(statearr_21395_21450[(2)] = inst_21336);

(statearr_21395_21450[(1)] = (34));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21347 === (30))){
var inst_21300 = (state_21346[(13)]);
var inst_21306 = (state_21346[(10)]);
var inst_21299 = (state_21346[(11)]);
var inst_21323 = cljs.core.empty_QMARK_.call(null,inst_21299);
var inst_21324 = inst_21300.call(null,inst_21306);
var inst_21325 = cljs.core.not.call(null,inst_21324);
var inst_21326 = (inst_21323) && (inst_21325);
var state_21346__$1 = state_21346;
var statearr_21396_21451 = state_21346__$1;
(statearr_21396_21451[(2)] = inst_21326);

(statearr_21396_21451[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21347 === (10))){
var inst_21252 = (state_21346[(8)]);
var inst_21272 = (state_21346[(2)]);
var inst_21273 = cljs.core.get.call(null,inst_21272,new cljs.core.Keyword(null,"solos","solos",1441458643));
var inst_21274 = cljs.core.get.call(null,inst_21272,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_21275 = cljs.core.get.call(null,inst_21272,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var inst_21276 = inst_21252;
var state_21346__$1 = (function (){var statearr_21397 = state_21346;
(statearr_21397[(16)] = inst_21273);

(statearr_21397[(7)] = inst_21276);

(statearr_21397[(17)] = inst_21275);

(statearr_21397[(18)] = inst_21274);

return statearr_21397;
})();
var statearr_21398_21452 = state_21346__$1;
(statearr_21398_21452[(2)] = null);

(statearr_21398_21452[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21347 === (18))){
var inst_21290 = (state_21346[(2)]);
var state_21346__$1 = state_21346;
var statearr_21399_21453 = state_21346__$1;
(statearr_21399_21453[(2)] = inst_21290);

(statearr_21399_21453[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21347 === (37))){
var state_21346__$1 = state_21346;
var statearr_21400_21454 = state_21346__$1;
(statearr_21400_21454[(2)] = null);

(statearr_21400_21454[(1)] = (38));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21347 === (8))){
var inst_21252 = (state_21346[(8)]);
var inst_21269 = cljs.core.apply.call(null,cljs.core.hash_map,inst_21252);
var state_21346__$1 = state_21346;
var statearr_21401_21455 = state_21346__$1;
(statearr_21401_21455[(2)] = inst_21269);

(statearr_21401_21455[(1)] = (10));


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
});})(c__19696__auto___21409,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
;
return ((function (switch__19584__auto__,c__19696__auto___21409,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function() {
var cljs$core$async$mix_$_state_machine__19585__auto__ = null;
var cljs$core$async$mix_$_state_machine__19585__auto____0 = (function (){
var statearr_21405 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_21405[(0)] = cljs$core$async$mix_$_state_machine__19585__auto__);

(statearr_21405[(1)] = (1));

return statearr_21405;
});
var cljs$core$async$mix_$_state_machine__19585__auto____1 = (function (state_21346){
while(true){
var ret_value__19586__auto__ = (function (){try{while(true){
var result__19587__auto__ = switch__19584__auto__.call(null,state_21346);
if(cljs.core.keyword_identical_QMARK_.call(null,result__19587__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__19587__auto__;
}
break;
}
}catch (e21406){if((e21406 instanceof Object)){
var ex__19588__auto__ = e21406;
var statearr_21407_21456 = state_21346;
(statearr_21407_21456[(5)] = ex__19588__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_21346);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e21406;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__19586__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__21457 = state_21346;
state_21346 = G__21457;
continue;
} else {
return ret_value__19586__auto__;
}
break;
}
});
cljs$core$async$mix_$_state_machine__19585__auto__ = function(state_21346){
switch(arguments.length){
case 0:
return cljs$core$async$mix_$_state_machine__19585__auto____0.call(this);
case 1:
return cljs$core$async$mix_$_state_machine__19585__auto____1.call(this,state_21346);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mix_$_state_machine__19585__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mix_$_state_machine__19585__auto____0;
cljs$core$async$mix_$_state_machine__19585__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mix_$_state_machine__19585__auto____1;
return cljs$core$async$mix_$_state_machine__19585__auto__;
})()
;})(switch__19584__auto__,c__19696__auto___21409,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
})();
var state__19698__auto__ = (function (){var statearr_21408 = f__19697__auto__.call(null);
(statearr_21408[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__19696__auto___21409);

return statearr_21408;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__19698__auto__);
});})(c__19696__auto___21409,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
);


return m;
});
/**
 * Adds ch as an input to the mix
 */
cljs.core.async.admix = (function cljs$core$async$admix(mix,ch){
return cljs.core.async.admix_STAR_.call(null,mix,ch);
});
/**
 * Removes ch as an input to the mix
 */
cljs.core.async.unmix = (function cljs$core$async$unmix(mix,ch){
return cljs.core.async.unmix_STAR_.call(null,mix,ch);
});
/**
 * removes all inputs from the mix
 */
cljs.core.async.unmix_all = (function cljs$core$async$unmix_all(mix){
return cljs.core.async.unmix_all_STAR_.call(null,mix);
});
/**
 * Atomically sets the state(s) of one or more channels in a mix. The
 *   state map is a map of channels -> channel-state-map. A
 *   channel-state-map is a map of attrs -> boolean, where attr is one or
 *   more of :mute, :pause or :solo. Any states supplied are merged with
 *   the current state.
 * 
 *   Note that channels can be added to a mix via toggle, which can be
 *   used to add channels in a particular (e.g. paused) state.
 */
cljs.core.async.toggle = (function cljs$core$async$toggle(mix,state_map){
return cljs.core.async.toggle_STAR_.call(null,mix,state_map);
});
/**
 * Sets the solo mode of the mix. mode must be one of :mute or :pause
 */
cljs.core.async.solo_mode = (function cljs$core$async$solo_mode(mix,mode){
return cljs.core.async.solo_mode_STAR_.call(null,mix,mode);
});

/**
 * @interface
 */
cljs.core.async.Pub = function(){};

cljs.core.async.sub_STAR_ = (function cljs$core$async$sub_STAR_(p,v,ch,close_QMARK_){
if((!((p == null))) && (!((p.cljs$core$async$Pub$sub_STAR_$arity$4 == null)))){
return p.cljs$core$async$Pub$sub_STAR_$arity$4(p,v,ch,close_QMARK_);
} else {
var x__17495__auto__ = (((p == null))?null:p);
var m__17496__auto__ = (cljs.core.async.sub_STAR_[goog.typeOf(x__17495__auto__)]);
if(!((m__17496__auto__ == null))){
return m__17496__auto__.call(null,p,v,ch,close_QMARK_);
} else {
var m__17496__auto____$1 = (cljs.core.async.sub_STAR_["_"]);
if(!((m__17496__auto____$1 == null))){
return m__17496__auto____$1.call(null,p,v,ch,close_QMARK_);
} else {
throw cljs.core.missing_protocol.call(null,"Pub.sub*",p);
}
}
}
});

cljs.core.async.unsub_STAR_ = (function cljs$core$async$unsub_STAR_(p,v,ch){
if((!((p == null))) && (!((p.cljs$core$async$Pub$unsub_STAR_$arity$3 == null)))){
return p.cljs$core$async$Pub$unsub_STAR_$arity$3(p,v,ch);
} else {
var x__17495__auto__ = (((p == null))?null:p);
var m__17496__auto__ = (cljs.core.async.unsub_STAR_[goog.typeOf(x__17495__auto__)]);
if(!((m__17496__auto__ == null))){
return m__17496__auto__.call(null,p,v,ch);
} else {
var m__17496__auto____$1 = (cljs.core.async.unsub_STAR_["_"]);
if(!((m__17496__auto____$1 == null))){
return m__17496__auto____$1.call(null,p,v,ch);
} else {
throw cljs.core.missing_protocol.call(null,"Pub.unsub*",p);
}
}
}
});

cljs.core.async.unsub_all_STAR_ = (function cljs$core$async$unsub_all_STAR_(var_args){
var args21458 = [];
var len__17898__auto___21461 = arguments.length;
var i__17899__auto___21462 = (0);
while(true){
if((i__17899__auto___21462 < len__17898__auto___21461)){
args21458.push((arguments[i__17899__auto___21462]));

var G__21463 = (i__17899__auto___21462 + (1));
i__17899__auto___21462 = G__21463;
continue;
} else {
}
break;
}

var G__21460 = args21458.length;
switch (G__21460) {
case 1:
return cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args21458.length)].join('')));

}
});

cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$1 = (function (p){
if((!((p == null))) && (!((p.cljs$core$async$Pub$unsub_all_STAR_$arity$1 == null)))){
return p.cljs$core$async$Pub$unsub_all_STAR_$arity$1(p);
} else {
var x__17495__auto__ = (((p == null))?null:p);
var m__17496__auto__ = (cljs.core.async.unsub_all_STAR_[goog.typeOf(x__17495__auto__)]);
if(!((m__17496__auto__ == null))){
return m__17496__auto__.call(null,p);
} else {
var m__17496__auto____$1 = (cljs.core.async.unsub_all_STAR_["_"]);
if(!((m__17496__auto____$1 == null))){
return m__17496__auto____$1.call(null,p);
} else {
throw cljs.core.missing_protocol.call(null,"Pub.unsub-all*",p);
}
}
}
});

cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$2 = (function (p,v){
if((!((p == null))) && (!((p.cljs$core$async$Pub$unsub_all_STAR_$arity$2 == null)))){
return p.cljs$core$async$Pub$unsub_all_STAR_$arity$2(p,v);
} else {
var x__17495__auto__ = (((p == null))?null:p);
var m__17496__auto__ = (cljs.core.async.unsub_all_STAR_[goog.typeOf(x__17495__auto__)]);
if(!((m__17496__auto__ == null))){
return m__17496__auto__.call(null,p,v);
} else {
var m__17496__auto____$1 = (cljs.core.async.unsub_all_STAR_["_"]);
if(!((m__17496__auto____$1 == null))){
return m__17496__auto____$1.call(null,p,v);
} else {
throw cljs.core.missing_protocol.call(null,"Pub.unsub-all*",p);
}
}
}
});

cljs.core.async.unsub_all_STAR_.cljs$lang$maxFixedArity = 2;

/**
 * Creates and returns a pub(lication) of the supplied channel,
 *   partitioned into topics by the topic-fn. topic-fn will be applied to
 *   each value on the channel and the result will determine the 'topic'
 *   on which that value will be put. Channels can be subscribed to
 *   receive copies of topics using 'sub', and unsubscribed using
 *   'unsub'. Each topic will be handled by an internal mult on a
 *   dedicated channel. By default these internal channels are
 *   unbuffered, but a buf-fn can be supplied which, given a topic,
 *   creates a buffer with desired properties.
 * 
 *   Each item is distributed to all subs in parallel and synchronously,
 *   i.e. each sub must accept before the next item is distributed. Use
 *   buffering/windowing to prevent slow subs from holding up the pub.
 * 
 *   Items received when there are no matching subs get dropped.
 * 
 *   Note that if buf-fns are used then each topic is handled
 *   asynchronously, i.e. if a channel is subscribed to more than one
 *   topic it should not expect them to be interleaved identically with
 *   the source.
 */
cljs.core.async.pub = (function cljs$core$async$pub(var_args){
var args21466 = [];
var len__17898__auto___21591 = arguments.length;
var i__17899__auto___21592 = (0);
while(true){
if((i__17899__auto___21592 < len__17898__auto___21591)){
args21466.push((arguments[i__17899__auto___21592]));

var G__21593 = (i__17899__auto___21592 + (1));
i__17899__auto___21592 = G__21593;
continue;
} else {
}
break;
}

var G__21468 = args21466.length;
switch (G__21468) {
case 2:
return cljs.core.async.pub.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.pub.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args21466.length)].join('')));

}
});

cljs.core.async.pub.cljs$core$IFn$_invoke$arity$2 = (function (ch,topic_fn){
return cljs.core.async.pub.call(null,ch,topic_fn,cljs.core.constantly.call(null,null));
});

cljs.core.async.pub.cljs$core$IFn$_invoke$arity$3 = (function (ch,topic_fn,buf_fn){
var mults = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var ensure_mult = ((function (mults){
return (function (topic){
var or__16840__auto__ = cljs.core.get.call(null,cljs.core.deref.call(null,mults),topic);
if(cljs.core.truth_(or__16840__auto__)){
return or__16840__auto__;
} else {
return cljs.core.get.call(null,cljs.core.swap_BANG_.call(null,mults,((function (or__16840__auto__,mults){
return (function (p1__21465_SHARP_){
if(cljs.core.truth_(p1__21465_SHARP_.call(null,topic))){
return p1__21465_SHARP_;
} else {
return cljs.core.assoc.call(null,p1__21465_SHARP_,topic,cljs.core.async.mult.call(null,cljs.core.async.chan.call(null,buf_fn.call(null,topic))));
}
});})(or__16840__auto__,mults))
),topic);
}
});})(mults))
;
var p = (function (){
if(typeof cljs.core.async.t_cljs$core$async21469 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.Pub}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async21469 = (function (ch,topic_fn,buf_fn,mults,ensure_mult,meta21470){
this.ch = ch;
this.topic_fn = topic_fn;
this.buf_fn = buf_fn;
this.mults = mults;
this.ensure_mult = ensure_mult;
this.meta21470 = meta21470;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async21469.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (mults,ensure_mult){
return (function (_21471,meta21470__$1){
var self__ = this;
var _21471__$1 = this;
return (new cljs.core.async.t_cljs$core$async21469(self__.ch,self__.topic_fn,self__.buf_fn,self__.mults,self__.ensure_mult,meta21470__$1));
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async21469.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (mults,ensure_mult){
return (function (_21471){
var self__ = this;
var _21471__$1 = this;
return self__.meta21470;
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async21469.prototype.cljs$core$async$Mux$ = true;

cljs.core.async.t_cljs$core$async21469.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (mults,ensure_mult){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async21469.prototype.cljs$core$async$Pub$ = true;

cljs.core.async.t_cljs$core$async21469.prototype.cljs$core$async$Pub$sub_STAR_$arity$4 = ((function (mults,ensure_mult){
return (function (p,topic,ch__$1,close_QMARK_){
var self__ = this;
var p__$1 = this;
var m = self__.ensure_mult.call(null,topic);
return cljs.core.async.tap.call(null,m,ch__$1,close_QMARK_);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async21469.prototype.cljs$core$async$Pub$unsub_STAR_$arity$3 = ((function (mults,ensure_mult){
return (function (p,topic,ch__$1){
var self__ = this;
var p__$1 = this;
var temp__4425__auto__ = cljs.core.get.call(null,cljs.core.deref.call(null,self__.mults),topic);
if(cljs.core.truth_(temp__4425__auto__)){
var m = temp__4425__auto__;
return cljs.core.async.untap.call(null,m,ch__$1);
} else {
return null;
}
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async21469.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$1 = ((function (mults,ensure_mult){
return (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.reset_BANG_.call(null,self__.mults,cljs.core.PersistentArrayMap.EMPTY);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async21469.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$2 = ((function (mults,ensure_mult){
return (function (_,topic){
var self__ = this;
var ___$1 = this;
return cljs.core.swap_BANG_.call(null,self__.mults,cljs.core.dissoc,topic);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async21469.getBasis = ((function (mults,ensure_mult){
return (function (){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"topic-fn","topic-fn",-862449736,null),new cljs.core.Symbol(null,"buf-fn","buf-fn",-1200281591,null),new cljs.core.Symbol(null,"mults","mults",-461114485,null),new cljs.core.Symbol(null,"ensure-mult","ensure-mult",1796584816,null),new cljs.core.Symbol(null,"meta21470","meta21470",630068516,null)], null);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async21469.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async21469.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async21469";

cljs.core.async.t_cljs$core$async21469.cljs$lang$ctorPrWriter = ((function (mults,ensure_mult){
return (function (this__17438__auto__,writer__17439__auto__,opt__17440__auto__){
return cljs.core._write.call(null,writer__17439__auto__,"cljs.core.async/t_cljs$core$async21469");
});})(mults,ensure_mult))
;

cljs.core.async.__GT_t_cljs$core$async21469 = ((function (mults,ensure_mult){
return (function cljs$core$async$__GT_t_cljs$core$async21469(ch__$1,topic_fn__$1,buf_fn__$1,mults__$1,ensure_mult__$1,meta21470){
return (new cljs.core.async.t_cljs$core$async21469(ch__$1,topic_fn__$1,buf_fn__$1,mults__$1,ensure_mult__$1,meta21470));
});})(mults,ensure_mult))
;

}

return (new cljs.core.async.t_cljs$core$async21469(ch,topic_fn,buf_fn,mults,ensure_mult,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var c__19696__auto___21595 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__19696__auto___21595,mults,ensure_mult,p){
return (function (){
var f__19697__auto__ = (function (){var switch__19584__auto__ = ((function (c__19696__auto___21595,mults,ensure_mult,p){
return (function (state_21543){
var state_val_21544 = (state_21543[(1)]);
if((state_val_21544 === (7))){
var inst_21539 = (state_21543[(2)]);
var state_21543__$1 = state_21543;
var statearr_21545_21596 = state_21543__$1;
(statearr_21545_21596[(2)] = inst_21539);

(statearr_21545_21596[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21544 === (20))){
var state_21543__$1 = state_21543;
var statearr_21546_21597 = state_21543__$1;
(statearr_21546_21597[(2)] = null);

(statearr_21546_21597[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21544 === (1))){
var state_21543__$1 = state_21543;
var statearr_21547_21598 = state_21543__$1;
(statearr_21547_21598[(2)] = null);

(statearr_21547_21598[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21544 === (24))){
var inst_21522 = (state_21543[(7)]);
var inst_21531 = cljs.core.swap_BANG_.call(null,mults,cljs.core.dissoc,inst_21522);
var state_21543__$1 = state_21543;
var statearr_21548_21599 = state_21543__$1;
(statearr_21548_21599[(2)] = inst_21531);

(statearr_21548_21599[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21544 === (4))){
var inst_21474 = (state_21543[(8)]);
var inst_21474__$1 = (state_21543[(2)]);
var inst_21475 = (inst_21474__$1 == null);
var state_21543__$1 = (function (){var statearr_21549 = state_21543;
(statearr_21549[(8)] = inst_21474__$1);

return statearr_21549;
})();
if(cljs.core.truth_(inst_21475)){
var statearr_21550_21600 = state_21543__$1;
(statearr_21550_21600[(1)] = (5));

} else {
var statearr_21551_21601 = state_21543__$1;
(statearr_21551_21601[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21544 === (15))){
var inst_21516 = (state_21543[(2)]);
var state_21543__$1 = state_21543;
var statearr_21552_21602 = state_21543__$1;
(statearr_21552_21602[(2)] = inst_21516);

(statearr_21552_21602[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21544 === (21))){
var inst_21536 = (state_21543[(2)]);
var state_21543__$1 = (function (){var statearr_21553 = state_21543;
(statearr_21553[(9)] = inst_21536);

return statearr_21553;
})();
var statearr_21554_21603 = state_21543__$1;
(statearr_21554_21603[(2)] = null);

(statearr_21554_21603[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21544 === (13))){
var inst_21498 = (state_21543[(10)]);
var inst_21500 = cljs.core.chunked_seq_QMARK_.call(null,inst_21498);
var state_21543__$1 = state_21543;
if(inst_21500){
var statearr_21555_21604 = state_21543__$1;
(statearr_21555_21604[(1)] = (16));

} else {
var statearr_21556_21605 = state_21543__$1;
(statearr_21556_21605[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21544 === (22))){
var inst_21528 = (state_21543[(2)]);
var state_21543__$1 = state_21543;
if(cljs.core.truth_(inst_21528)){
var statearr_21557_21606 = state_21543__$1;
(statearr_21557_21606[(1)] = (23));

} else {
var statearr_21558_21607 = state_21543__$1;
(statearr_21558_21607[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21544 === (6))){
var inst_21524 = (state_21543[(11)]);
var inst_21522 = (state_21543[(7)]);
var inst_21474 = (state_21543[(8)]);
var inst_21522__$1 = topic_fn.call(null,inst_21474);
var inst_21523 = cljs.core.deref.call(null,mults);
var inst_21524__$1 = cljs.core.get.call(null,inst_21523,inst_21522__$1);
var state_21543__$1 = (function (){var statearr_21559 = state_21543;
(statearr_21559[(11)] = inst_21524__$1);

(statearr_21559[(7)] = inst_21522__$1);

return statearr_21559;
})();
if(cljs.core.truth_(inst_21524__$1)){
var statearr_21560_21608 = state_21543__$1;
(statearr_21560_21608[(1)] = (19));

} else {
var statearr_21561_21609 = state_21543__$1;
(statearr_21561_21609[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21544 === (25))){
var inst_21533 = (state_21543[(2)]);
var state_21543__$1 = state_21543;
var statearr_21562_21610 = state_21543__$1;
(statearr_21562_21610[(2)] = inst_21533);

(statearr_21562_21610[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21544 === (17))){
var inst_21498 = (state_21543[(10)]);
var inst_21507 = cljs.core.first.call(null,inst_21498);
var inst_21508 = cljs.core.async.muxch_STAR_.call(null,inst_21507);
var inst_21509 = cljs.core.async.close_BANG_.call(null,inst_21508);
var inst_21510 = cljs.core.next.call(null,inst_21498);
var inst_21484 = inst_21510;
var inst_21485 = null;
var inst_21486 = (0);
var inst_21487 = (0);
var state_21543__$1 = (function (){var statearr_21563 = state_21543;
(statearr_21563[(12)] = inst_21487);

(statearr_21563[(13)] = inst_21484);

(statearr_21563[(14)] = inst_21509);

(statearr_21563[(15)] = inst_21486);

(statearr_21563[(16)] = inst_21485);

return statearr_21563;
})();
var statearr_21564_21611 = state_21543__$1;
(statearr_21564_21611[(2)] = null);

(statearr_21564_21611[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21544 === (3))){
var inst_21541 = (state_21543[(2)]);
var state_21543__$1 = state_21543;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_21543__$1,inst_21541);
} else {
if((state_val_21544 === (12))){
var inst_21518 = (state_21543[(2)]);
var state_21543__$1 = state_21543;
var statearr_21565_21612 = state_21543__$1;
(statearr_21565_21612[(2)] = inst_21518);

(statearr_21565_21612[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21544 === (2))){
var state_21543__$1 = state_21543;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_21543__$1,(4),ch);
} else {
if((state_val_21544 === (23))){
var state_21543__$1 = state_21543;
var statearr_21566_21613 = state_21543__$1;
(statearr_21566_21613[(2)] = null);

(statearr_21566_21613[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21544 === (19))){
var inst_21524 = (state_21543[(11)]);
var inst_21474 = (state_21543[(8)]);
var inst_21526 = cljs.core.async.muxch_STAR_.call(null,inst_21524);
var state_21543__$1 = state_21543;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_21543__$1,(22),inst_21526,inst_21474);
} else {
if((state_val_21544 === (11))){
var inst_21484 = (state_21543[(13)]);
var inst_21498 = (state_21543[(10)]);
var inst_21498__$1 = cljs.core.seq.call(null,inst_21484);
var state_21543__$1 = (function (){var statearr_21567 = state_21543;
(statearr_21567[(10)] = inst_21498__$1);

return statearr_21567;
})();
if(inst_21498__$1){
var statearr_21568_21614 = state_21543__$1;
(statearr_21568_21614[(1)] = (13));

} else {
var statearr_21569_21615 = state_21543__$1;
(statearr_21569_21615[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21544 === (9))){
var inst_21520 = (state_21543[(2)]);
var state_21543__$1 = state_21543;
var statearr_21570_21616 = state_21543__$1;
(statearr_21570_21616[(2)] = inst_21520);

(statearr_21570_21616[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21544 === (5))){
var inst_21481 = cljs.core.deref.call(null,mults);
var inst_21482 = cljs.core.vals.call(null,inst_21481);
var inst_21483 = cljs.core.seq.call(null,inst_21482);
var inst_21484 = inst_21483;
var inst_21485 = null;
var inst_21486 = (0);
var inst_21487 = (0);
var state_21543__$1 = (function (){var statearr_21571 = state_21543;
(statearr_21571[(12)] = inst_21487);

(statearr_21571[(13)] = inst_21484);

(statearr_21571[(15)] = inst_21486);

(statearr_21571[(16)] = inst_21485);

return statearr_21571;
})();
var statearr_21572_21617 = state_21543__$1;
(statearr_21572_21617[(2)] = null);

(statearr_21572_21617[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21544 === (14))){
var state_21543__$1 = state_21543;
var statearr_21576_21618 = state_21543__$1;
(statearr_21576_21618[(2)] = null);

(statearr_21576_21618[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21544 === (16))){
var inst_21498 = (state_21543[(10)]);
var inst_21502 = cljs.core.chunk_first.call(null,inst_21498);
var inst_21503 = cljs.core.chunk_rest.call(null,inst_21498);
var inst_21504 = cljs.core.count.call(null,inst_21502);
var inst_21484 = inst_21503;
var inst_21485 = inst_21502;
var inst_21486 = inst_21504;
var inst_21487 = (0);
var state_21543__$1 = (function (){var statearr_21577 = state_21543;
(statearr_21577[(12)] = inst_21487);

(statearr_21577[(13)] = inst_21484);

(statearr_21577[(15)] = inst_21486);

(statearr_21577[(16)] = inst_21485);

return statearr_21577;
})();
var statearr_21578_21619 = state_21543__$1;
(statearr_21578_21619[(2)] = null);

(statearr_21578_21619[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21544 === (10))){
var inst_21487 = (state_21543[(12)]);
var inst_21484 = (state_21543[(13)]);
var inst_21486 = (state_21543[(15)]);
var inst_21485 = (state_21543[(16)]);
var inst_21492 = cljs.core._nth.call(null,inst_21485,inst_21487);
var inst_21493 = cljs.core.async.muxch_STAR_.call(null,inst_21492);
var inst_21494 = cljs.core.async.close_BANG_.call(null,inst_21493);
var inst_21495 = (inst_21487 + (1));
var tmp21573 = inst_21484;
var tmp21574 = inst_21486;
var tmp21575 = inst_21485;
var inst_21484__$1 = tmp21573;
var inst_21485__$1 = tmp21575;
var inst_21486__$1 = tmp21574;
var inst_21487__$1 = inst_21495;
var state_21543__$1 = (function (){var statearr_21579 = state_21543;
(statearr_21579[(12)] = inst_21487__$1);

(statearr_21579[(13)] = inst_21484__$1);

(statearr_21579[(17)] = inst_21494);

(statearr_21579[(15)] = inst_21486__$1);

(statearr_21579[(16)] = inst_21485__$1);

return statearr_21579;
})();
var statearr_21580_21620 = state_21543__$1;
(statearr_21580_21620[(2)] = null);

(statearr_21580_21620[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21544 === (18))){
var inst_21513 = (state_21543[(2)]);
var state_21543__$1 = state_21543;
var statearr_21581_21621 = state_21543__$1;
(statearr_21581_21621[(2)] = inst_21513);

(statearr_21581_21621[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21544 === (8))){
var inst_21487 = (state_21543[(12)]);
var inst_21486 = (state_21543[(15)]);
var inst_21489 = (inst_21487 < inst_21486);
var inst_21490 = inst_21489;
var state_21543__$1 = state_21543;
if(cljs.core.truth_(inst_21490)){
var statearr_21582_21622 = state_21543__$1;
(statearr_21582_21622[(1)] = (10));

} else {
var statearr_21583_21623 = state_21543__$1;
(statearr_21583_21623[(1)] = (11));

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
});})(c__19696__auto___21595,mults,ensure_mult,p))
;
return ((function (switch__19584__auto__,c__19696__auto___21595,mults,ensure_mult,p){
return (function() {
var cljs$core$async$state_machine__19585__auto__ = null;
var cljs$core$async$state_machine__19585__auto____0 = (function (){
var statearr_21587 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_21587[(0)] = cljs$core$async$state_machine__19585__auto__);

(statearr_21587[(1)] = (1));

return statearr_21587;
});
var cljs$core$async$state_machine__19585__auto____1 = (function (state_21543){
while(true){
var ret_value__19586__auto__ = (function (){try{while(true){
var result__19587__auto__ = switch__19584__auto__.call(null,state_21543);
if(cljs.core.keyword_identical_QMARK_.call(null,result__19587__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__19587__auto__;
}
break;
}
}catch (e21588){if((e21588 instanceof Object)){
var ex__19588__auto__ = e21588;
var statearr_21589_21624 = state_21543;
(statearr_21589_21624[(5)] = ex__19588__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_21543);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e21588;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__19586__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__21625 = state_21543;
state_21543 = G__21625;
continue;
} else {
return ret_value__19586__auto__;
}
break;
}
});
cljs$core$async$state_machine__19585__auto__ = function(state_21543){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__19585__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__19585__auto____1.call(this,state_21543);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__19585__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__19585__auto____0;
cljs$core$async$state_machine__19585__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__19585__auto____1;
return cljs$core$async$state_machine__19585__auto__;
})()
;})(switch__19584__auto__,c__19696__auto___21595,mults,ensure_mult,p))
})();
var state__19698__auto__ = (function (){var statearr_21590 = f__19697__auto__.call(null);
(statearr_21590[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__19696__auto___21595);

return statearr_21590;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__19698__auto__);
});})(c__19696__auto___21595,mults,ensure_mult,p))
);


return p;
});

cljs.core.async.pub.cljs$lang$maxFixedArity = 3;
/**
 * Subscribes a channel to a topic of a pub.
 * 
 *   By default the channel will be closed when the source closes,
 *   but can be determined by the close? parameter.
 */
cljs.core.async.sub = (function cljs$core$async$sub(var_args){
var args21626 = [];
var len__17898__auto___21629 = arguments.length;
var i__17899__auto___21630 = (0);
while(true){
if((i__17899__auto___21630 < len__17898__auto___21629)){
args21626.push((arguments[i__17899__auto___21630]));

var G__21631 = (i__17899__auto___21630 + (1));
i__17899__auto___21630 = G__21631;
continue;
} else {
}
break;
}

var G__21628 = args21626.length;
switch (G__21628) {
case 3:
return cljs.core.async.sub.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return cljs.core.async.sub.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args21626.length)].join('')));

}
});

cljs.core.async.sub.cljs$core$IFn$_invoke$arity$3 = (function (p,topic,ch){
return cljs.core.async.sub.call(null,p,topic,ch,true);
});

cljs.core.async.sub.cljs$core$IFn$_invoke$arity$4 = (function (p,topic,ch,close_QMARK_){
return cljs.core.async.sub_STAR_.call(null,p,topic,ch,close_QMARK_);
});

cljs.core.async.sub.cljs$lang$maxFixedArity = 4;
/**
 * Unsubscribes a channel from a topic of a pub
 */
cljs.core.async.unsub = (function cljs$core$async$unsub(p,topic,ch){
return cljs.core.async.unsub_STAR_.call(null,p,topic,ch);
});
/**
 * Unsubscribes all channels from a pub, or a topic of a pub
 */
cljs.core.async.unsub_all = (function cljs$core$async$unsub_all(var_args){
var args21633 = [];
var len__17898__auto___21636 = arguments.length;
var i__17899__auto___21637 = (0);
while(true){
if((i__17899__auto___21637 < len__17898__auto___21636)){
args21633.push((arguments[i__17899__auto___21637]));

var G__21638 = (i__17899__auto___21637 + (1));
i__17899__auto___21637 = G__21638;
continue;
} else {
}
break;
}

var G__21635 = args21633.length;
switch (G__21635) {
case 1:
return cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args21633.length)].join('')));

}
});

cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$1 = (function (p){
return cljs.core.async.unsub_all_STAR_.call(null,p);
});

cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$2 = (function (p,topic){
return cljs.core.async.unsub_all_STAR_.call(null,p,topic);
});

cljs.core.async.unsub_all.cljs$lang$maxFixedArity = 2;
/**
 * Takes a function and a collection of source channels, and returns a
 *   channel which contains the values produced by applying f to the set
 *   of first items taken from each source channel, followed by applying
 *   f to the set of second items from each channel, until any one of the
 *   channels is closed, at which point the output channel will be
 *   closed. The returned channel will be unbuffered by default, or a
 *   buf-or-n can be supplied
 */
cljs.core.async.map = (function cljs$core$async$map(var_args){
var args21640 = [];
var len__17898__auto___21711 = arguments.length;
var i__17899__auto___21712 = (0);
while(true){
if((i__17899__auto___21712 < len__17898__auto___21711)){
args21640.push((arguments[i__17899__auto___21712]));

var G__21713 = (i__17899__auto___21712 + (1));
i__17899__auto___21712 = G__21713;
continue;
} else {
}
break;
}

var G__21642 = args21640.length;
switch (G__21642) {
case 2:
return cljs.core.async.map.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.map.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args21640.length)].join('')));

}
});

cljs.core.async.map.cljs$core$IFn$_invoke$arity$2 = (function (f,chs){
return cljs.core.async.map.call(null,f,chs,null);
});

cljs.core.async.map.cljs$core$IFn$_invoke$arity$3 = (function (f,chs,buf_or_n){
var chs__$1 = cljs.core.vec.call(null,chs);
var out = cljs.core.async.chan.call(null,buf_or_n);
var cnt = cljs.core.count.call(null,chs__$1);
var rets = cljs.core.object_array.call(null,cnt);
var dchan = cljs.core.async.chan.call(null,(1));
var dctr = cljs.core.atom.call(null,null);
var done = cljs.core.mapv.call(null,((function (chs__$1,out,cnt,rets,dchan,dctr){
return (function (i){
return ((function (chs__$1,out,cnt,rets,dchan,dctr){
return (function (ret){
(rets[i] = ret);

if((cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec) === (0))){
return cljs.core.async.put_BANG_.call(null,dchan,rets.slice((0)));
} else {
return null;
}
});
;})(chs__$1,out,cnt,rets,dchan,dctr))
});})(chs__$1,out,cnt,rets,dchan,dctr))
,cljs.core.range.call(null,cnt));
var c__19696__auto___21715 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__19696__auto___21715,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function (){
var f__19697__auto__ = (function (){var switch__19584__auto__ = ((function (c__19696__auto___21715,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function (state_21681){
var state_val_21682 = (state_21681[(1)]);
if((state_val_21682 === (7))){
var state_21681__$1 = state_21681;
var statearr_21683_21716 = state_21681__$1;
(statearr_21683_21716[(2)] = null);

(statearr_21683_21716[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21682 === (1))){
var state_21681__$1 = state_21681;
var statearr_21684_21717 = state_21681__$1;
(statearr_21684_21717[(2)] = null);

(statearr_21684_21717[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21682 === (4))){
var inst_21645 = (state_21681[(7)]);
var inst_21647 = (inst_21645 < cnt);
var state_21681__$1 = state_21681;
if(cljs.core.truth_(inst_21647)){
var statearr_21685_21718 = state_21681__$1;
(statearr_21685_21718[(1)] = (6));

} else {
var statearr_21686_21719 = state_21681__$1;
(statearr_21686_21719[(1)] = (7));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21682 === (15))){
var inst_21677 = (state_21681[(2)]);
var state_21681__$1 = state_21681;
var statearr_21687_21720 = state_21681__$1;
(statearr_21687_21720[(2)] = inst_21677);

(statearr_21687_21720[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21682 === (13))){
var inst_21670 = cljs.core.async.close_BANG_.call(null,out);
var state_21681__$1 = state_21681;
var statearr_21688_21721 = state_21681__$1;
(statearr_21688_21721[(2)] = inst_21670);

(statearr_21688_21721[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21682 === (6))){
var state_21681__$1 = state_21681;
var statearr_21689_21722 = state_21681__$1;
(statearr_21689_21722[(2)] = null);

(statearr_21689_21722[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21682 === (3))){
var inst_21679 = (state_21681[(2)]);
var state_21681__$1 = state_21681;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_21681__$1,inst_21679);
} else {
if((state_val_21682 === (12))){
var inst_21667 = (state_21681[(8)]);
var inst_21667__$1 = (state_21681[(2)]);
var inst_21668 = cljs.core.some.call(null,cljs.core.nil_QMARK_,inst_21667__$1);
var state_21681__$1 = (function (){var statearr_21690 = state_21681;
(statearr_21690[(8)] = inst_21667__$1);

return statearr_21690;
})();
if(cljs.core.truth_(inst_21668)){
var statearr_21691_21723 = state_21681__$1;
(statearr_21691_21723[(1)] = (13));

} else {
var statearr_21692_21724 = state_21681__$1;
(statearr_21692_21724[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21682 === (2))){
var inst_21644 = cljs.core.reset_BANG_.call(null,dctr,cnt);
var inst_21645 = (0);
var state_21681__$1 = (function (){var statearr_21693 = state_21681;
(statearr_21693[(7)] = inst_21645);

(statearr_21693[(9)] = inst_21644);

return statearr_21693;
})();
var statearr_21694_21725 = state_21681__$1;
(statearr_21694_21725[(2)] = null);

(statearr_21694_21725[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21682 === (11))){
var inst_21645 = (state_21681[(7)]);
var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame.call(null,state_21681,(10),Object,null,(9));
var inst_21654 = chs__$1.call(null,inst_21645);
var inst_21655 = done.call(null,inst_21645);
var inst_21656 = cljs.core.async.take_BANG_.call(null,inst_21654,inst_21655);
var state_21681__$1 = state_21681;
var statearr_21695_21726 = state_21681__$1;
(statearr_21695_21726[(2)] = inst_21656);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_21681__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21682 === (9))){
var inst_21645 = (state_21681[(7)]);
var inst_21658 = (state_21681[(2)]);
var inst_21659 = (inst_21645 + (1));
var inst_21645__$1 = inst_21659;
var state_21681__$1 = (function (){var statearr_21696 = state_21681;
(statearr_21696[(7)] = inst_21645__$1);

(statearr_21696[(10)] = inst_21658);

return statearr_21696;
})();
var statearr_21697_21727 = state_21681__$1;
(statearr_21697_21727[(2)] = null);

(statearr_21697_21727[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21682 === (5))){
var inst_21665 = (state_21681[(2)]);
var state_21681__$1 = (function (){var statearr_21698 = state_21681;
(statearr_21698[(11)] = inst_21665);

return statearr_21698;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_21681__$1,(12),dchan);
} else {
if((state_val_21682 === (14))){
var inst_21667 = (state_21681[(8)]);
var inst_21672 = cljs.core.apply.call(null,f,inst_21667);
var state_21681__$1 = state_21681;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_21681__$1,(16),out,inst_21672);
} else {
if((state_val_21682 === (16))){
var inst_21674 = (state_21681[(2)]);
var state_21681__$1 = (function (){var statearr_21699 = state_21681;
(statearr_21699[(12)] = inst_21674);

return statearr_21699;
})();
var statearr_21700_21728 = state_21681__$1;
(statearr_21700_21728[(2)] = null);

(statearr_21700_21728[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21682 === (10))){
var inst_21649 = (state_21681[(2)]);
var inst_21650 = cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec);
var state_21681__$1 = (function (){var statearr_21701 = state_21681;
(statearr_21701[(13)] = inst_21649);

return statearr_21701;
})();
var statearr_21702_21729 = state_21681__$1;
(statearr_21702_21729[(2)] = inst_21650);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_21681__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21682 === (8))){
var inst_21663 = (state_21681[(2)]);
var state_21681__$1 = state_21681;
var statearr_21703_21730 = state_21681__$1;
(statearr_21703_21730[(2)] = inst_21663);

(statearr_21703_21730[(1)] = (5));


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
});})(c__19696__auto___21715,chs__$1,out,cnt,rets,dchan,dctr,done))
;
return ((function (switch__19584__auto__,c__19696__auto___21715,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function() {
var cljs$core$async$state_machine__19585__auto__ = null;
var cljs$core$async$state_machine__19585__auto____0 = (function (){
var statearr_21707 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_21707[(0)] = cljs$core$async$state_machine__19585__auto__);

(statearr_21707[(1)] = (1));

return statearr_21707;
});
var cljs$core$async$state_machine__19585__auto____1 = (function (state_21681){
while(true){
var ret_value__19586__auto__ = (function (){try{while(true){
var result__19587__auto__ = switch__19584__auto__.call(null,state_21681);
if(cljs.core.keyword_identical_QMARK_.call(null,result__19587__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__19587__auto__;
}
break;
}
}catch (e21708){if((e21708 instanceof Object)){
var ex__19588__auto__ = e21708;
var statearr_21709_21731 = state_21681;
(statearr_21709_21731[(5)] = ex__19588__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_21681);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e21708;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__19586__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__21732 = state_21681;
state_21681 = G__21732;
continue;
} else {
return ret_value__19586__auto__;
}
break;
}
});
cljs$core$async$state_machine__19585__auto__ = function(state_21681){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__19585__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__19585__auto____1.call(this,state_21681);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__19585__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__19585__auto____0;
cljs$core$async$state_machine__19585__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__19585__auto____1;
return cljs$core$async$state_machine__19585__auto__;
})()
;})(switch__19584__auto__,c__19696__auto___21715,chs__$1,out,cnt,rets,dchan,dctr,done))
})();
var state__19698__auto__ = (function (){var statearr_21710 = f__19697__auto__.call(null);
(statearr_21710[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__19696__auto___21715);

return statearr_21710;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__19698__auto__);
});})(c__19696__auto___21715,chs__$1,out,cnt,rets,dchan,dctr,done))
);


return out;
});

cljs.core.async.map.cljs$lang$maxFixedArity = 3;
/**
 * Takes a collection of source channels and returns a channel which
 *   contains all values taken from them. The returned channel will be
 *   unbuffered by default, or a buf-or-n can be supplied. The channel
 *   will close after all the source channels have closed.
 */
cljs.core.async.merge = (function cljs$core$async$merge(var_args){
var args21734 = [];
var len__17898__auto___21790 = arguments.length;
var i__17899__auto___21791 = (0);
while(true){
if((i__17899__auto___21791 < len__17898__auto___21790)){
args21734.push((arguments[i__17899__auto___21791]));

var G__21792 = (i__17899__auto___21791 + (1));
i__17899__auto___21791 = G__21792;
continue;
} else {
}
break;
}

var G__21736 = args21734.length;
switch (G__21736) {
case 1:
return cljs.core.async.merge.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.merge.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args21734.length)].join('')));

}
});

cljs.core.async.merge.cljs$core$IFn$_invoke$arity$1 = (function (chs){
return cljs.core.async.merge.call(null,chs,null);
});

cljs.core.async.merge.cljs$core$IFn$_invoke$arity$2 = (function (chs,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__19696__auto___21794 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__19696__auto___21794,out){
return (function (){
var f__19697__auto__ = (function (){var switch__19584__auto__ = ((function (c__19696__auto___21794,out){
return (function (state_21766){
var state_val_21767 = (state_21766[(1)]);
if((state_val_21767 === (7))){
var inst_21746 = (state_21766[(7)]);
var inst_21745 = (state_21766[(8)]);
var inst_21745__$1 = (state_21766[(2)]);
var inst_21746__$1 = cljs.core.nth.call(null,inst_21745__$1,(0),null);
var inst_21747 = cljs.core.nth.call(null,inst_21745__$1,(1),null);
var inst_21748 = (inst_21746__$1 == null);
var state_21766__$1 = (function (){var statearr_21768 = state_21766;
(statearr_21768[(7)] = inst_21746__$1);

(statearr_21768[(9)] = inst_21747);

(statearr_21768[(8)] = inst_21745__$1);

return statearr_21768;
})();
if(cljs.core.truth_(inst_21748)){
var statearr_21769_21795 = state_21766__$1;
(statearr_21769_21795[(1)] = (8));

} else {
var statearr_21770_21796 = state_21766__$1;
(statearr_21770_21796[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21767 === (1))){
var inst_21737 = cljs.core.vec.call(null,chs);
var inst_21738 = inst_21737;
var state_21766__$1 = (function (){var statearr_21771 = state_21766;
(statearr_21771[(10)] = inst_21738);

return statearr_21771;
})();
var statearr_21772_21797 = state_21766__$1;
(statearr_21772_21797[(2)] = null);

(statearr_21772_21797[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21767 === (4))){
var inst_21738 = (state_21766[(10)]);
var state_21766__$1 = state_21766;
return cljs.core.async.ioc_alts_BANG_.call(null,state_21766__$1,(7),inst_21738);
} else {
if((state_val_21767 === (6))){
var inst_21762 = (state_21766[(2)]);
var state_21766__$1 = state_21766;
var statearr_21773_21798 = state_21766__$1;
(statearr_21773_21798[(2)] = inst_21762);

(statearr_21773_21798[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21767 === (3))){
var inst_21764 = (state_21766[(2)]);
var state_21766__$1 = state_21766;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_21766__$1,inst_21764);
} else {
if((state_val_21767 === (2))){
var inst_21738 = (state_21766[(10)]);
var inst_21740 = cljs.core.count.call(null,inst_21738);
var inst_21741 = (inst_21740 > (0));
var state_21766__$1 = state_21766;
if(cljs.core.truth_(inst_21741)){
var statearr_21775_21799 = state_21766__$1;
(statearr_21775_21799[(1)] = (4));

} else {
var statearr_21776_21800 = state_21766__$1;
(statearr_21776_21800[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21767 === (11))){
var inst_21738 = (state_21766[(10)]);
var inst_21755 = (state_21766[(2)]);
var tmp21774 = inst_21738;
var inst_21738__$1 = tmp21774;
var state_21766__$1 = (function (){var statearr_21777 = state_21766;
(statearr_21777[(11)] = inst_21755);

(statearr_21777[(10)] = inst_21738__$1);

return statearr_21777;
})();
var statearr_21778_21801 = state_21766__$1;
(statearr_21778_21801[(2)] = null);

(statearr_21778_21801[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21767 === (9))){
var inst_21746 = (state_21766[(7)]);
var state_21766__$1 = state_21766;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_21766__$1,(11),out,inst_21746);
} else {
if((state_val_21767 === (5))){
var inst_21760 = cljs.core.async.close_BANG_.call(null,out);
var state_21766__$1 = state_21766;
var statearr_21779_21802 = state_21766__$1;
(statearr_21779_21802[(2)] = inst_21760);

(statearr_21779_21802[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21767 === (10))){
var inst_21758 = (state_21766[(2)]);
var state_21766__$1 = state_21766;
var statearr_21780_21803 = state_21766__$1;
(statearr_21780_21803[(2)] = inst_21758);

(statearr_21780_21803[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21767 === (8))){
var inst_21746 = (state_21766[(7)]);
var inst_21747 = (state_21766[(9)]);
var inst_21745 = (state_21766[(8)]);
var inst_21738 = (state_21766[(10)]);
var inst_21750 = (function (){var cs = inst_21738;
var vec__21743 = inst_21745;
var v = inst_21746;
var c = inst_21747;
return ((function (cs,vec__21743,v,c,inst_21746,inst_21747,inst_21745,inst_21738,state_val_21767,c__19696__auto___21794,out){
return (function (p1__21733_SHARP_){
return cljs.core.not_EQ_.call(null,c,p1__21733_SHARP_);
});
;})(cs,vec__21743,v,c,inst_21746,inst_21747,inst_21745,inst_21738,state_val_21767,c__19696__auto___21794,out))
})();
var inst_21751 = cljs.core.filterv.call(null,inst_21750,inst_21738);
var inst_21738__$1 = inst_21751;
var state_21766__$1 = (function (){var statearr_21781 = state_21766;
(statearr_21781[(10)] = inst_21738__$1);

return statearr_21781;
})();
var statearr_21782_21804 = state_21766__$1;
(statearr_21782_21804[(2)] = null);

(statearr_21782_21804[(1)] = (2));


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
});})(c__19696__auto___21794,out))
;
return ((function (switch__19584__auto__,c__19696__auto___21794,out){
return (function() {
var cljs$core$async$state_machine__19585__auto__ = null;
var cljs$core$async$state_machine__19585__auto____0 = (function (){
var statearr_21786 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_21786[(0)] = cljs$core$async$state_machine__19585__auto__);

(statearr_21786[(1)] = (1));

return statearr_21786;
});
var cljs$core$async$state_machine__19585__auto____1 = (function (state_21766){
while(true){
var ret_value__19586__auto__ = (function (){try{while(true){
var result__19587__auto__ = switch__19584__auto__.call(null,state_21766);
if(cljs.core.keyword_identical_QMARK_.call(null,result__19587__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__19587__auto__;
}
break;
}
}catch (e21787){if((e21787 instanceof Object)){
var ex__19588__auto__ = e21787;
var statearr_21788_21805 = state_21766;
(statearr_21788_21805[(5)] = ex__19588__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_21766);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e21787;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__19586__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__21806 = state_21766;
state_21766 = G__21806;
continue;
} else {
return ret_value__19586__auto__;
}
break;
}
});
cljs$core$async$state_machine__19585__auto__ = function(state_21766){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__19585__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__19585__auto____1.call(this,state_21766);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__19585__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__19585__auto____0;
cljs$core$async$state_machine__19585__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__19585__auto____1;
return cljs$core$async$state_machine__19585__auto__;
})()
;})(switch__19584__auto__,c__19696__auto___21794,out))
})();
var state__19698__auto__ = (function (){var statearr_21789 = f__19697__auto__.call(null);
(statearr_21789[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__19696__auto___21794);

return statearr_21789;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__19698__auto__);
});})(c__19696__auto___21794,out))
);


return out;
});

cljs.core.async.merge.cljs$lang$maxFixedArity = 2;
/**
 * Returns a channel containing the single (collection) result of the
 *   items taken from the channel conjoined to the supplied
 *   collection. ch must close before into produces a result.
 */
cljs.core.async.into = (function cljs$core$async$into(coll,ch){
return cljs.core.async.reduce.call(null,cljs.core.conj,coll,ch);
});
/**
 * Returns a channel that will return, at most, n items from ch. After n items
 * have been returned, or ch has been closed, the return chanel will close.
 * 
 *   The output channel is unbuffered by default, unless buf-or-n is given.
 */
cljs.core.async.take = (function cljs$core$async$take(var_args){
var args21807 = [];
var len__17898__auto___21856 = arguments.length;
var i__17899__auto___21857 = (0);
while(true){
if((i__17899__auto___21857 < len__17898__auto___21856)){
args21807.push((arguments[i__17899__auto___21857]));

var G__21858 = (i__17899__auto___21857 + (1));
i__17899__auto___21857 = G__21858;
continue;
} else {
}
break;
}

var G__21809 = args21807.length;
switch (G__21809) {
case 2:
return cljs.core.async.take.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.take.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args21807.length)].join('')));

}
});

cljs.core.async.take.cljs$core$IFn$_invoke$arity$2 = (function (n,ch){
return cljs.core.async.take.call(null,n,ch,null);
});

cljs.core.async.take.cljs$core$IFn$_invoke$arity$3 = (function (n,ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__19696__auto___21860 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__19696__auto___21860,out){
return (function (){
var f__19697__auto__ = (function (){var switch__19584__auto__ = ((function (c__19696__auto___21860,out){
return (function (state_21833){
var state_val_21834 = (state_21833[(1)]);
if((state_val_21834 === (7))){
var inst_21815 = (state_21833[(7)]);
var inst_21815__$1 = (state_21833[(2)]);
var inst_21816 = (inst_21815__$1 == null);
var inst_21817 = cljs.core.not.call(null,inst_21816);
var state_21833__$1 = (function (){var statearr_21835 = state_21833;
(statearr_21835[(7)] = inst_21815__$1);

return statearr_21835;
})();
if(inst_21817){
var statearr_21836_21861 = state_21833__$1;
(statearr_21836_21861[(1)] = (8));

} else {
var statearr_21837_21862 = state_21833__$1;
(statearr_21837_21862[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21834 === (1))){
var inst_21810 = (0);
var state_21833__$1 = (function (){var statearr_21838 = state_21833;
(statearr_21838[(8)] = inst_21810);

return statearr_21838;
})();
var statearr_21839_21863 = state_21833__$1;
(statearr_21839_21863[(2)] = null);

(statearr_21839_21863[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21834 === (4))){
var state_21833__$1 = state_21833;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_21833__$1,(7),ch);
} else {
if((state_val_21834 === (6))){
var inst_21828 = (state_21833[(2)]);
var state_21833__$1 = state_21833;
var statearr_21840_21864 = state_21833__$1;
(statearr_21840_21864[(2)] = inst_21828);

(statearr_21840_21864[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21834 === (3))){
var inst_21830 = (state_21833[(2)]);
var inst_21831 = cljs.core.async.close_BANG_.call(null,out);
var state_21833__$1 = (function (){var statearr_21841 = state_21833;
(statearr_21841[(9)] = inst_21830);

return statearr_21841;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_21833__$1,inst_21831);
} else {
if((state_val_21834 === (2))){
var inst_21810 = (state_21833[(8)]);
var inst_21812 = (inst_21810 < n);
var state_21833__$1 = state_21833;
if(cljs.core.truth_(inst_21812)){
var statearr_21842_21865 = state_21833__$1;
(statearr_21842_21865[(1)] = (4));

} else {
var statearr_21843_21866 = state_21833__$1;
(statearr_21843_21866[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21834 === (11))){
var inst_21810 = (state_21833[(8)]);
var inst_21820 = (state_21833[(2)]);
var inst_21821 = (inst_21810 + (1));
var inst_21810__$1 = inst_21821;
var state_21833__$1 = (function (){var statearr_21844 = state_21833;
(statearr_21844[(10)] = inst_21820);

(statearr_21844[(8)] = inst_21810__$1);

return statearr_21844;
})();
var statearr_21845_21867 = state_21833__$1;
(statearr_21845_21867[(2)] = null);

(statearr_21845_21867[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21834 === (9))){
var state_21833__$1 = state_21833;
var statearr_21846_21868 = state_21833__$1;
(statearr_21846_21868[(2)] = null);

(statearr_21846_21868[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21834 === (5))){
var state_21833__$1 = state_21833;
var statearr_21847_21869 = state_21833__$1;
(statearr_21847_21869[(2)] = null);

(statearr_21847_21869[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21834 === (10))){
var inst_21825 = (state_21833[(2)]);
var state_21833__$1 = state_21833;
var statearr_21848_21870 = state_21833__$1;
(statearr_21848_21870[(2)] = inst_21825);

(statearr_21848_21870[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21834 === (8))){
var inst_21815 = (state_21833[(7)]);
var state_21833__$1 = state_21833;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_21833__$1,(11),out,inst_21815);
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
});})(c__19696__auto___21860,out))
;
return ((function (switch__19584__auto__,c__19696__auto___21860,out){
return (function() {
var cljs$core$async$state_machine__19585__auto__ = null;
var cljs$core$async$state_machine__19585__auto____0 = (function (){
var statearr_21852 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_21852[(0)] = cljs$core$async$state_machine__19585__auto__);

(statearr_21852[(1)] = (1));

return statearr_21852;
});
var cljs$core$async$state_machine__19585__auto____1 = (function (state_21833){
while(true){
var ret_value__19586__auto__ = (function (){try{while(true){
var result__19587__auto__ = switch__19584__auto__.call(null,state_21833);
if(cljs.core.keyword_identical_QMARK_.call(null,result__19587__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__19587__auto__;
}
break;
}
}catch (e21853){if((e21853 instanceof Object)){
var ex__19588__auto__ = e21853;
var statearr_21854_21871 = state_21833;
(statearr_21854_21871[(5)] = ex__19588__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_21833);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e21853;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__19586__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__21872 = state_21833;
state_21833 = G__21872;
continue;
} else {
return ret_value__19586__auto__;
}
break;
}
});
cljs$core$async$state_machine__19585__auto__ = function(state_21833){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__19585__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__19585__auto____1.call(this,state_21833);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__19585__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__19585__auto____0;
cljs$core$async$state_machine__19585__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__19585__auto____1;
return cljs$core$async$state_machine__19585__auto__;
})()
;})(switch__19584__auto__,c__19696__auto___21860,out))
})();
var state__19698__auto__ = (function (){var statearr_21855 = f__19697__auto__.call(null);
(statearr_21855[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__19696__auto___21860);

return statearr_21855;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__19698__auto__);
});})(c__19696__auto___21860,out))
);


return out;
});

cljs.core.async.take.cljs$lang$maxFixedArity = 3;
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_LT_ = (function cljs$core$async$map_LT_(f,ch){
if(typeof cljs.core.async.t_cljs$core$async21880 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async21880 = (function (map_LT_,f,ch,meta21881){
this.map_LT_ = map_LT_;
this.f = f;
this.ch = ch;
this.meta21881 = meta21881;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async21880.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_21882,meta21881__$1){
var self__ = this;
var _21882__$1 = this;
return (new cljs.core.async.t_cljs$core$async21880(self__.map_LT_,self__.f,self__.ch,meta21881__$1));
});

cljs.core.async.t_cljs$core$async21880.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_21882){
var self__ = this;
var _21882__$1 = this;
return self__.meta21881;
});

cljs.core.async.t_cljs$core$async21880.prototype.cljs$core$async$impl$protocols$Channel$ = true;

cljs.core.async.t_cljs$core$async21880.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async21880.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async21880.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;

cljs.core.async.t_cljs$core$async21880.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
var ret = cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,(function (){
if(typeof cljs.core.async.t_cljs$core$async21883 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async21883 = (function (map_LT_,f,ch,meta21881,_,fn1,meta21884){
this.map_LT_ = map_LT_;
this.f = f;
this.ch = ch;
this.meta21881 = meta21881;
this._ = _;
this.fn1 = fn1;
this.meta21884 = meta21884;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async21883.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (___$1){
return (function (_21885,meta21884__$1){
var self__ = this;
var _21885__$1 = this;
return (new cljs.core.async.t_cljs$core$async21883(self__.map_LT_,self__.f,self__.ch,self__.meta21881,self__._,self__.fn1,meta21884__$1));
});})(___$1))
;

cljs.core.async.t_cljs$core$async21883.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (___$1){
return (function (_21885){
var self__ = this;
var _21885__$1 = this;
return self__.meta21884;
});})(___$1))
;

cljs.core.async.t_cljs$core$async21883.prototype.cljs$core$async$impl$protocols$Handler$ = true;

cljs.core.async.t_cljs$core$async21883.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = ((function (___$1){
return (function (___$1){
var self__ = this;
var ___$2 = this;
return cljs.core.async.impl.protocols.active_QMARK_.call(null,self__.fn1);
});})(___$1))
;

cljs.core.async.t_cljs$core$async21883.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = ((function (___$1){
return (function (___$1){
var self__ = this;
var ___$2 = this;
return true;
});})(___$1))
;

cljs.core.async.t_cljs$core$async21883.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = ((function (___$1){
return (function (___$1){
var self__ = this;
var ___$2 = this;
var f1 = cljs.core.async.impl.protocols.commit.call(null,self__.fn1);
return ((function (f1,___$2,___$1){
return (function (p1__21873_SHARP_){
return f1.call(null,(((p1__21873_SHARP_ == null))?null:self__.f.call(null,p1__21873_SHARP_)));
});
;})(f1,___$2,___$1))
});})(___$1))
;

cljs.core.async.t_cljs$core$async21883.getBasis = ((function (___$1){
return (function (){
return new cljs.core.PersistentVector(null, 7, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"map<","map<",-1235808357,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null)], null))),new cljs.core.Keyword(null,"doc","doc",1913296891),"Deprecated - this function will be removed. Use transducer instead"], null)),new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta21881","meta21881",507486876,null),cljs.core.with_meta(new cljs.core.Symbol(null,"_","_",-1201019570,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"tag","tag",-1290361223),new cljs.core.Symbol("cljs.core.async","t_cljs$core$async21880","cljs.core.async/t_cljs$core$async21880",1338924577,null)], null)),new cljs.core.Symbol(null,"fn1","fn1",895834444,null),new cljs.core.Symbol(null,"meta21884","meta21884",200236984,null)], null);
});})(___$1))
;

cljs.core.async.t_cljs$core$async21883.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async21883.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async21883";

cljs.core.async.t_cljs$core$async21883.cljs$lang$ctorPrWriter = ((function (___$1){
return (function (this__17438__auto__,writer__17439__auto__,opt__17440__auto__){
return cljs.core._write.call(null,writer__17439__auto__,"cljs.core.async/t_cljs$core$async21883");
});})(___$1))
;

cljs.core.async.__GT_t_cljs$core$async21883 = ((function (___$1){
return (function cljs$core$async$map_LT__$___GT_t_cljs$core$async21883(map_LT___$1,f__$1,ch__$1,meta21881__$1,___$2,fn1__$1,meta21884){
return (new cljs.core.async.t_cljs$core$async21883(map_LT___$1,f__$1,ch__$1,meta21881__$1,___$2,fn1__$1,meta21884));
});})(___$1))
;

}

return (new cljs.core.async.t_cljs$core$async21883(self__.map_LT_,self__.f,self__.ch,self__.meta21881,___$1,fn1,cljs.core.PersistentArrayMap.EMPTY));
})()
);
if(cljs.core.truth_((function (){var and__16828__auto__ = ret;
if(cljs.core.truth_(and__16828__auto__)){
return !((cljs.core.deref.call(null,ret) == null));
} else {
return and__16828__auto__;
}
})())){
return cljs.core.async.impl.channels.box.call(null,self__.f.call(null,cljs.core.deref.call(null,ret)));
} else {
return ret;
}
});

cljs.core.async.t_cljs$core$async21880.prototype.cljs$core$async$impl$protocols$WritePort$ = true;

cljs.core.async.t_cljs$core$async21880.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,val,fn1);
});

cljs.core.async.t_cljs$core$async21880.getBasis = (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"map<","map<",-1235808357,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null)], null))),new cljs.core.Keyword(null,"doc","doc",1913296891),"Deprecated - this function will be removed. Use transducer instead"], null)),new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta21881","meta21881",507486876,null)], null);
});

cljs.core.async.t_cljs$core$async21880.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async21880.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async21880";

cljs.core.async.t_cljs$core$async21880.cljs$lang$ctorPrWriter = (function (this__17438__auto__,writer__17439__auto__,opt__17440__auto__){
return cljs.core._write.call(null,writer__17439__auto__,"cljs.core.async/t_cljs$core$async21880");
});

cljs.core.async.__GT_t_cljs$core$async21880 = (function cljs$core$async$map_LT__$___GT_t_cljs$core$async21880(map_LT___$1,f__$1,ch__$1,meta21881){
return (new cljs.core.async.t_cljs$core$async21880(map_LT___$1,f__$1,ch__$1,meta21881));
});

}

return (new cljs.core.async.t_cljs$core$async21880(cljs$core$async$map_LT_,f,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_GT_ = (function cljs$core$async$map_GT_(f,ch){
if(typeof cljs.core.async.t_cljs$core$async21889 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async21889 = (function (map_GT_,f,ch,meta21890){
this.map_GT_ = map_GT_;
this.f = f;
this.ch = ch;
this.meta21890 = meta21890;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async21889.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_21891,meta21890__$1){
var self__ = this;
var _21891__$1 = this;
return (new cljs.core.async.t_cljs$core$async21889(self__.map_GT_,self__.f,self__.ch,meta21890__$1));
});

cljs.core.async.t_cljs$core$async21889.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_21891){
var self__ = this;
var _21891__$1 = this;
return self__.meta21890;
});

cljs.core.async.t_cljs$core$async21889.prototype.cljs$core$async$impl$protocols$Channel$ = true;

cljs.core.async.t_cljs$core$async21889.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async21889.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;

cljs.core.async.t_cljs$core$async21889.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,fn1);
});

cljs.core.async.t_cljs$core$async21889.prototype.cljs$core$async$impl$protocols$WritePort$ = true;

cljs.core.async.t_cljs$core$async21889.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,self__.f.call(null,val),fn1);
});

cljs.core.async.t_cljs$core$async21889.getBasis = (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"map>","map>",1676369295,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null)], null))),new cljs.core.Keyword(null,"doc","doc",1913296891),"Deprecated - this function will be removed. Use transducer instead"], null)),new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta21890","meta21890",816345440,null)], null);
});

cljs.core.async.t_cljs$core$async21889.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async21889.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async21889";

cljs.core.async.t_cljs$core$async21889.cljs$lang$ctorPrWriter = (function (this__17438__auto__,writer__17439__auto__,opt__17440__auto__){
return cljs.core._write.call(null,writer__17439__auto__,"cljs.core.async/t_cljs$core$async21889");
});

cljs.core.async.__GT_t_cljs$core$async21889 = (function cljs$core$async$map_GT__$___GT_t_cljs$core$async21889(map_GT___$1,f__$1,ch__$1,meta21890){
return (new cljs.core.async.t_cljs$core$async21889(map_GT___$1,f__$1,ch__$1,meta21890));
});

}

return (new cljs.core.async.t_cljs$core$async21889(cljs$core$async$map_GT_,f,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.filter_GT_ = (function cljs$core$async$filter_GT_(p,ch){
if(typeof cljs.core.async.t_cljs$core$async21895 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async21895 = (function (filter_GT_,p,ch,meta21896){
this.filter_GT_ = filter_GT_;
this.p = p;
this.ch = ch;
this.meta21896 = meta21896;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async21895.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_21897,meta21896__$1){
var self__ = this;
var _21897__$1 = this;
return (new cljs.core.async.t_cljs$core$async21895(self__.filter_GT_,self__.p,self__.ch,meta21896__$1));
});

cljs.core.async.t_cljs$core$async21895.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_21897){
var self__ = this;
var _21897__$1 = this;
return self__.meta21896;
});

cljs.core.async.t_cljs$core$async21895.prototype.cljs$core$async$impl$protocols$Channel$ = true;

cljs.core.async.t_cljs$core$async21895.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async21895.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async21895.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;

cljs.core.async.t_cljs$core$async21895.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,fn1);
});

cljs.core.async.t_cljs$core$async21895.prototype.cljs$core$async$impl$protocols$WritePort$ = true;

cljs.core.async.t_cljs$core$async21895.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_(self__.p.call(null,val))){
return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,val,fn1);
} else {
return cljs.core.async.impl.channels.box.call(null,cljs.core.not.call(null,cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch)));
}
});

cljs.core.async.t_cljs$core$async21895.getBasis = (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"filter>","filter>",-37644455,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"p","p",1791580836,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null)], null))),new cljs.core.Keyword(null,"doc","doc",1913296891),"Deprecated - this function will be removed. Use transducer instead"], null)),new cljs.core.Symbol(null,"p","p",1791580836,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta21896","meta21896",-1744191531,null)], null);
});

cljs.core.async.t_cljs$core$async21895.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async21895.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async21895";

cljs.core.async.t_cljs$core$async21895.cljs$lang$ctorPrWriter = (function (this__17438__auto__,writer__17439__auto__,opt__17440__auto__){
return cljs.core._write.call(null,writer__17439__auto__,"cljs.core.async/t_cljs$core$async21895");
});

cljs.core.async.__GT_t_cljs$core$async21895 = (function cljs$core$async$filter_GT__$___GT_t_cljs$core$async21895(filter_GT___$1,p__$1,ch__$1,meta21896){
return (new cljs.core.async.t_cljs$core$async21895(filter_GT___$1,p__$1,ch__$1,meta21896));
});

}

return (new cljs.core.async.t_cljs$core$async21895(cljs$core$async$filter_GT_,p,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.remove_GT_ = (function cljs$core$async$remove_GT_(p,ch){
return cljs.core.async.filter_GT_.call(null,cljs.core.complement.call(null,p),ch);
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.filter_LT_ = (function cljs$core$async$filter_LT_(var_args){
var args21898 = [];
var len__17898__auto___21942 = arguments.length;
var i__17899__auto___21943 = (0);
while(true){
if((i__17899__auto___21943 < len__17898__auto___21942)){
args21898.push((arguments[i__17899__auto___21943]));

var G__21944 = (i__17899__auto___21943 + (1));
i__17899__auto___21943 = G__21944;
continue;
} else {
}
break;
}

var G__21900 = args21898.length;
switch (G__21900) {
case 2:
return cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args21898.length)].join('')));

}
});

cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$2 = (function (p,ch){
return cljs.core.async.filter_LT_.call(null,p,ch,null);
});

cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$3 = (function (p,ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__19696__auto___21946 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__19696__auto___21946,out){
return (function (){
var f__19697__auto__ = (function (){var switch__19584__auto__ = ((function (c__19696__auto___21946,out){
return (function (state_21921){
var state_val_21922 = (state_21921[(1)]);
if((state_val_21922 === (7))){
var inst_21917 = (state_21921[(2)]);
var state_21921__$1 = state_21921;
var statearr_21923_21947 = state_21921__$1;
(statearr_21923_21947[(2)] = inst_21917);

(statearr_21923_21947[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21922 === (1))){
var state_21921__$1 = state_21921;
var statearr_21924_21948 = state_21921__$1;
(statearr_21924_21948[(2)] = null);

(statearr_21924_21948[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21922 === (4))){
var inst_21903 = (state_21921[(7)]);
var inst_21903__$1 = (state_21921[(2)]);
var inst_21904 = (inst_21903__$1 == null);
var state_21921__$1 = (function (){var statearr_21925 = state_21921;
(statearr_21925[(7)] = inst_21903__$1);

return statearr_21925;
})();
if(cljs.core.truth_(inst_21904)){
var statearr_21926_21949 = state_21921__$1;
(statearr_21926_21949[(1)] = (5));

} else {
var statearr_21927_21950 = state_21921__$1;
(statearr_21927_21950[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21922 === (6))){
var inst_21903 = (state_21921[(7)]);
var inst_21908 = p.call(null,inst_21903);
var state_21921__$1 = state_21921;
if(cljs.core.truth_(inst_21908)){
var statearr_21928_21951 = state_21921__$1;
(statearr_21928_21951[(1)] = (8));

} else {
var statearr_21929_21952 = state_21921__$1;
(statearr_21929_21952[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21922 === (3))){
var inst_21919 = (state_21921[(2)]);
var state_21921__$1 = state_21921;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_21921__$1,inst_21919);
} else {
if((state_val_21922 === (2))){
var state_21921__$1 = state_21921;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_21921__$1,(4),ch);
} else {
if((state_val_21922 === (11))){
var inst_21911 = (state_21921[(2)]);
var state_21921__$1 = state_21921;
var statearr_21930_21953 = state_21921__$1;
(statearr_21930_21953[(2)] = inst_21911);

(statearr_21930_21953[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21922 === (9))){
var state_21921__$1 = state_21921;
var statearr_21931_21954 = state_21921__$1;
(statearr_21931_21954[(2)] = null);

(statearr_21931_21954[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21922 === (5))){
var inst_21906 = cljs.core.async.close_BANG_.call(null,out);
var state_21921__$1 = state_21921;
var statearr_21932_21955 = state_21921__$1;
(statearr_21932_21955[(2)] = inst_21906);

(statearr_21932_21955[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21922 === (10))){
var inst_21914 = (state_21921[(2)]);
var state_21921__$1 = (function (){var statearr_21933 = state_21921;
(statearr_21933[(8)] = inst_21914);

return statearr_21933;
})();
var statearr_21934_21956 = state_21921__$1;
(statearr_21934_21956[(2)] = null);

(statearr_21934_21956[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21922 === (8))){
var inst_21903 = (state_21921[(7)]);
var state_21921__$1 = state_21921;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_21921__$1,(11),out,inst_21903);
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
});})(c__19696__auto___21946,out))
;
return ((function (switch__19584__auto__,c__19696__auto___21946,out){
return (function() {
var cljs$core$async$state_machine__19585__auto__ = null;
var cljs$core$async$state_machine__19585__auto____0 = (function (){
var statearr_21938 = [null,null,null,null,null,null,null,null,null];
(statearr_21938[(0)] = cljs$core$async$state_machine__19585__auto__);

(statearr_21938[(1)] = (1));

return statearr_21938;
});
var cljs$core$async$state_machine__19585__auto____1 = (function (state_21921){
while(true){
var ret_value__19586__auto__ = (function (){try{while(true){
var result__19587__auto__ = switch__19584__auto__.call(null,state_21921);
if(cljs.core.keyword_identical_QMARK_.call(null,result__19587__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__19587__auto__;
}
break;
}
}catch (e21939){if((e21939 instanceof Object)){
var ex__19588__auto__ = e21939;
var statearr_21940_21957 = state_21921;
(statearr_21940_21957[(5)] = ex__19588__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_21921);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e21939;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__19586__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__21958 = state_21921;
state_21921 = G__21958;
continue;
} else {
return ret_value__19586__auto__;
}
break;
}
});
cljs$core$async$state_machine__19585__auto__ = function(state_21921){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__19585__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__19585__auto____1.call(this,state_21921);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__19585__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__19585__auto____0;
cljs$core$async$state_machine__19585__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__19585__auto____1;
return cljs$core$async$state_machine__19585__auto__;
})()
;})(switch__19584__auto__,c__19696__auto___21946,out))
})();
var state__19698__auto__ = (function (){var statearr_21941 = f__19697__auto__.call(null);
(statearr_21941[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__19696__auto___21946);

return statearr_21941;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__19698__auto__);
});})(c__19696__auto___21946,out))
);


return out;
});

cljs.core.async.filter_LT_.cljs$lang$maxFixedArity = 3;
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.remove_LT_ = (function cljs$core$async$remove_LT_(var_args){
var args21959 = [];
var len__17898__auto___21962 = arguments.length;
var i__17899__auto___21963 = (0);
while(true){
if((i__17899__auto___21963 < len__17898__auto___21962)){
args21959.push((arguments[i__17899__auto___21963]));

var G__21964 = (i__17899__auto___21963 + (1));
i__17899__auto___21963 = G__21964;
continue;
} else {
}
break;
}

var G__21961 = args21959.length;
switch (G__21961) {
case 2:
return cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args21959.length)].join('')));

}
});

cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$2 = (function (p,ch){
return cljs.core.async.remove_LT_.call(null,p,ch,null);
});

cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$3 = (function (p,ch,buf_or_n){
return cljs.core.async.filter_LT_.call(null,cljs.core.complement.call(null,p),ch,buf_or_n);
});

cljs.core.async.remove_LT_.cljs$lang$maxFixedArity = 3;
cljs.core.async.mapcat_STAR_ = (function cljs$core$async$mapcat_STAR_(f,in$,out){
var c__19696__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__19696__auto__){
return (function (){
var f__19697__auto__ = (function (){var switch__19584__auto__ = ((function (c__19696__auto__){
return (function (state_22131){
var state_val_22132 = (state_22131[(1)]);
if((state_val_22132 === (7))){
var inst_22127 = (state_22131[(2)]);
var state_22131__$1 = state_22131;
var statearr_22133_22174 = state_22131__$1;
(statearr_22133_22174[(2)] = inst_22127);

(statearr_22133_22174[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22132 === (20))){
var inst_22097 = (state_22131[(7)]);
var inst_22108 = (state_22131[(2)]);
var inst_22109 = cljs.core.next.call(null,inst_22097);
var inst_22083 = inst_22109;
var inst_22084 = null;
var inst_22085 = (0);
var inst_22086 = (0);
var state_22131__$1 = (function (){var statearr_22134 = state_22131;
(statearr_22134[(8)] = inst_22108);

(statearr_22134[(9)] = inst_22086);

(statearr_22134[(10)] = inst_22083);

(statearr_22134[(11)] = inst_22085);

(statearr_22134[(12)] = inst_22084);

return statearr_22134;
})();
var statearr_22135_22175 = state_22131__$1;
(statearr_22135_22175[(2)] = null);

(statearr_22135_22175[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22132 === (1))){
var state_22131__$1 = state_22131;
var statearr_22136_22176 = state_22131__$1;
(statearr_22136_22176[(2)] = null);

(statearr_22136_22176[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22132 === (4))){
var inst_22072 = (state_22131[(13)]);
var inst_22072__$1 = (state_22131[(2)]);
var inst_22073 = (inst_22072__$1 == null);
var state_22131__$1 = (function (){var statearr_22137 = state_22131;
(statearr_22137[(13)] = inst_22072__$1);

return statearr_22137;
})();
if(cljs.core.truth_(inst_22073)){
var statearr_22138_22177 = state_22131__$1;
(statearr_22138_22177[(1)] = (5));

} else {
var statearr_22139_22178 = state_22131__$1;
(statearr_22139_22178[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22132 === (15))){
var state_22131__$1 = state_22131;
var statearr_22143_22179 = state_22131__$1;
(statearr_22143_22179[(2)] = null);

(statearr_22143_22179[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22132 === (21))){
var state_22131__$1 = state_22131;
var statearr_22144_22180 = state_22131__$1;
(statearr_22144_22180[(2)] = null);

(statearr_22144_22180[(1)] = (23));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22132 === (13))){
var inst_22086 = (state_22131[(9)]);
var inst_22083 = (state_22131[(10)]);
var inst_22085 = (state_22131[(11)]);
var inst_22084 = (state_22131[(12)]);
var inst_22093 = (state_22131[(2)]);
var inst_22094 = (inst_22086 + (1));
var tmp22140 = inst_22083;
var tmp22141 = inst_22085;
var tmp22142 = inst_22084;
var inst_22083__$1 = tmp22140;
var inst_22084__$1 = tmp22142;
var inst_22085__$1 = tmp22141;
var inst_22086__$1 = inst_22094;
var state_22131__$1 = (function (){var statearr_22145 = state_22131;
(statearr_22145[(14)] = inst_22093);

(statearr_22145[(9)] = inst_22086__$1);

(statearr_22145[(10)] = inst_22083__$1);

(statearr_22145[(11)] = inst_22085__$1);

(statearr_22145[(12)] = inst_22084__$1);

return statearr_22145;
})();
var statearr_22146_22181 = state_22131__$1;
(statearr_22146_22181[(2)] = null);

(statearr_22146_22181[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22132 === (22))){
var state_22131__$1 = state_22131;
var statearr_22147_22182 = state_22131__$1;
(statearr_22147_22182[(2)] = null);

(statearr_22147_22182[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22132 === (6))){
var inst_22072 = (state_22131[(13)]);
var inst_22081 = f.call(null,inst_22072);
var inst_22082 = cljs.core.seq.call(null,inst_22081);
var inst_22083 = inst_22082;
var inst_22084 = null;
var inst_22085 = (0);
var inst_22086 = (0);
var state_22131__$1 = (function (){var statearr_22148 = state_22131;
(statearr_22148[(9)] = inst_22086);

(statearr_22148[(10)] = inst_22083);

(statearr_22148[(11)] = inst_22085);

(statearr_22148[(12)] = inst_22084);

return statearr_22148;
})();
var statearr_22149_22183 = state_22131__$1;
(statearr_22149_22183[(2)] = null);

(statearr_22149_22183[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22132 === (17))){
var inst_22097 = (state_22131[(7)]);
var inst_22101 = cljs.core.chunk_first.call(null,inst_22097);
var inst_22102 = cljs.core.chunk_rest.call(null,inst_22097);
var inst_22103 = cljs.core.count.call(null,inst_22101);
var inst_22083 = inst_22102;
var inst_22084 = inst_22101;
var inst_22085 = inst_22103;
var inst_22086 = (0);
var state_22131__$1 = (function (){var statearr_22150 = state_22131;
(statearr_22150[(9)] = inst_22086);

(statearr_22150[(10)] = inst_22083);

(statearr_22150[(11)] = inst_22085);

(statearr_22150[(12)] = inst_22084);

return statearr_22150;
})();
var statearr_22151_22184 = state_22131__$1;
(statearr_22151_22184[(2)] = null);

(statearr_22151_22184[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22132 === (3))){
var inst_22129 = (state_22131[(2)]);
var state_22131__$1 = state_22131;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_22131__$1,inst_22129);
} else {
if((state_val_22132 === (12))){
var inst_22117 = (state_22131[(2)]);
var state_22131__$1 = state_22131;
var statearr_22152_22185 = state_22131__$1;
(statearr_22152_22185[(2)] = inst_22117);

(statearr_22152_22185[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22132 === (2))){
var state_22131__$1 = state_22131;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_22131__$1,(4),in$);
} else {
if((state_val_22132 === (23))){
var inst_22125 = (state_22131[(2)]);
var state_22131__$1 = state_22131;
var statearr_22153_22186 = state_22131__$1;
(statearr_22153_22186[(2)] = inst_22125);

(statearr_22153_22186[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22132 === (19))){
var inst_22112 = (state_22131[(2)]);
var state_22131__$1 = state_22131;
var statearr_22154_22187 = state_22131__$1;
(statearr_22154_22187[(2)] = inst_22112);

(statearr_22154_22187[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22132 === (11))){
var inst_22097 = (state_22131[(7)]);
var inst_22083 = (state_22131[(10)]);
var inst_22097__$1 = cljs.core.seq.call(null,inst_22083);
var state_22131__$1 = (function (){var statearr_22155 = state_22131;
(statearr_22155[(7)] = inst_22097__$1);

return statearr_22155;
})();
if(inst_22097__$1){
var statearr_22156_22188 = state_22131__$1;
(statearr_22156_22188[(1)] = (14));

} else {
var statearr_22157_22189 = state_22131__$1;
(statearr_22157_22189[(1)] = (15));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22132 === (9))){
var inst_22119 = (state_22131[(2)]);
var inst_22120 = cljs.core.async.impl.protocols.closed_QMARK_.call(null,out);
var state_22131__$1 = (function (){var statearr_22158 = state_22131;
(statearr_22158[(15)] = inst_22119);

return statearr_22158;
})();
if(cljs.core.truth_(inst_22120)){
var statearr_22159_22190 = state_22131__$1;
(statearr_22159_22190[(1)] = (21));

} else {
var statearr_22160_22191 = state_22131__$1;
(statearr_22160_22191[(1)] = (22));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22132 === (5))){
var inst_22075 = cljs.core.async.close_BANG_.call(null,out);
var state_22131__$1 = state_22131;
var statearr_22161_22192 = state_22131__$1;
(statearr_22161_22192[(2)] = inst_22075);

(statearr_22161_22192[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22132 === (14))){
var inst_22097 = (state_22131[(7)]);
var inst_22099 = cljs.core.chunked_seq_QMARK_.call(null,inst_22097);
var state_22131__$1 = state_22131;
if(inst_22099){
var statearr_22162_22193 = state_22131__$1;
(statearr_22162_22193[(1)] = (17));

} else {
var statearr_22163_22194 = state_22131__$1;
(statearr_22163_22194[(1)] = (18));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22132 === (16))){
var inst_22115 = (state_22131[(2)]);
var state_22131__$1 = state_22131;
var statearr_22164_22195 = state_22131__$1;
(statearr_22164_22195[(2)] = inst_22115);

(statearr_22164_22195[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22132 === (10))){
var inst_22086 = (state_22131[(9)]);
var inst_22084 = (state_22131[(12)]);
var inst_22091 = cljs.core._nth.call(null,inst_22084,inst_22086);
var state_22131__$1 = state_22131;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_22131__$1,(13),out,inst_22091);
} else {
if((state_val_22132 === (18))){
var inst_22097 = (state_22131[(7)]);
var inst_22106 = cljs.core.first.call(null,inst_22097);
var state_22131__$1 = state_22131;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_22131__$1,(20),out,inst_22106);
} else {
if((state_val_22132 === (8))){
var inst_22086 = (state_22131[(9)]);
var inst_22085 = (state_22131[(11)]);
var inst_22088 = (inst_22086 < inst_22085);
var inst_22089 = inst_22088;
var state_22131__$1 = state_22131;
if(cljs.core.truth_(inst_22089)){
var statearr_22165_22196 = state_22131__$1;
(statearr_22165_22196[(1)] = (10));

} else {
var statearr_22166_22197 = state_22131__$1;
(statearr_22166_22197[(1)] = (11));

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
});})(c__19696__auto__))
;
return ((function (switch__19584__auto__,c__19696__auto__){
return (function() {
var cljs$core$async$mapcat_STAR__$_state_machine__19585__auto__ = null;
var cljs$core$async$mapcat_STAR__$_state_machine__19585__auto____0 = (function (){
var statearr_22170 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_22170[(0)] = cljs$core$async$mapcat_STAR__$_state_machine__19585__auto__);

(statearr_22170[(1)] = (1));

return statearr_22170;
});
var cljs$core$async$mapcat_STAR__$_state_machine__19585__auto____1 = (function (state_22131){
while(true){
var ret_value__19586__auto__ = (function (){try{while(true){
var result__19587__auto__ = switch__19584__auto__.call(null,state_22131);
if(cljs.core.keyword_identical_QMARK_.call(null,result__19587__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__19587__auto__;
}
break;
}
}catch (e22171){if((e22171 instanceof Object)){
var ex__19588__auto__ = e22171;
var statearr_22172_22198 = state_22131;
(statearr_22172_22198[(5)] = ex__19588__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_22131);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e22171;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__19586__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__22199 = state_22131;
state_22131 = G__22199;
continue;
} else {
return ret_value__19586__auto__;
}
break;
}
});
cljs$core$async$mapcat_STAR__$_state_machine__19585__auto__ = function(state_22131){
switch(arguments.length){
case 0:
return cljs$core$async$mapcat_STAR__$_state_machine__19585__auto____0.call(this);
case 1:
return cljs$core$async$mapcat_STAR__$_state_machine__19585__auto____1.call(this,state_22131);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mapcat_STAR__$_state_machine__19585__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mapcat_STAR__$_state_machine__19585__auto____0;
cljs$core$async$mapcat_STAR__$_state_machine__19585__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mapcat_STAR__$_state_machine__19585__auto____1;
return cljs$core$async$mapcat_STAR__$_state_machine__19585__auto__;
})()
;})(switch__19584__auto__,c__19696__auto__))
})();
var state__19698__auto__ = (function (){var statearr_22173 = f__19697__auto__.call(null);
(statearr_22173[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__19696__auto__);

return statearr_22173;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__19698__auto__);
});})(c__19696__auto__))
);

return c__19696__auto__;
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.mapcat_LT_ = (function cljs$core$async$mapcat_LT_(var_args){
var args22200 = [];
var len__17898__auto___22203 = arguments.length;
var i__17899__auto___22204 = (0);
while(true){
if((i__17899__auto___22204 < len__17898__auto___22203)){
args22200.push((arguments[i__17899__auto___22204]));

var G__22205 = (i__17899__auto___22204 + (1));
i__17899__auto___22204 = G__22205;
continue;
} else {
}
break;
}

var G__22202 = args22200.length;
switch (G__22202) {
case 2:
return cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args22200.length)].join('')));

}
});

cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$2 = (function (f,in$){
return cljs.core.async.mapcat_LT_.call(null,f,in$,null);
});

cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$3 = (function (f,in$,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
cljs.core.async.mapcat_STAR_.call(null,f,in$,out);

return out;
});

cljs.core.async.mapcat_LT_.cljs$lang$maxFixedArity = 3;
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.mapcat_GT_ = (function cljs$core$async$mapcat_GT_(var_args){
var args22207 = [];
var len__17898__auto___22210 = arguments.length;
var i__17899__auto___22211 = (0);
while(true){
if((i__17899__auto___22211 < len__17898__auto___22210)){
args22207.push((arguments[i__17899__auto___22211]));

var G__22212 = (i__17899__auto___22211 + (1));
i__17899__auto___22211 = G__22212;
continue;
} else {
}
break;
}

var G__22209 = args22207.length;
switch (G__22209) {
case 2:
return cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args22207.length)].join('')));

}
});

cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$2 = (function (f,out){
return cljs.core.async.mapcat_GT_.call(null,f,out,null);
});

cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$3 = (function (f,out,buf_or_n){
var in$ = cljs.core.async.chan.call(null,buf_or_n);
cljs.core.async.mapcat_STAR_.call(null,f,in$,out);

return in$;
});

cljs.core.async.mapcat_GT_.cljs$lang$maxFixedArity = 3;
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.unique = (function cljs$core$async$unique(var_args){
var args22214 = [];
var len__17898__auto___22265 = arguments.length;
var i__17899__auto___22266 = (0);
while(true){
if((i__17899__auto___22266 < len__17898__auto___22265)){
args22214.push((arguments[i__17899__auto___22266]));

var G__22267 = (i__17899__auto___22266 + (1));
i__17899__auto___22266 = G__22267;
continue;
} else {
}
break;
}

var G__22216 = args22214.length;
switch (G__22216) {
case 1:
return cljs.core.async.unique.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unique.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args22214.length)].join('')));

}
});

cljs.core.async.unique.cljs$core$IFn$_invoke$arity$1 = (function (ch){
return cljs.core.async.unique.call(null,ch,null);
});

cljs.core.async.unique.cljs$core$IFn$_invoke$arity$2 = (function (ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__19696__auto___22269 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__19696__auto___22269,out){
return (function (){
var f__19697__auto__ = (function (){var switch__19584__auto__ = ((function (c__19696__auto___22269,out){
return (function (state_22240){
var state_val_22241 = (state_22240[(1)]);
if((state_val_22241 === (7))){
var inst_22235 = (state_22240[(2)]);
var state_22240__$1 = state_22240;
var statearr_22242_22270 = state_22240__$1;
(statearr_22242_22270[(2)] = inst_22235);

(statearr_22242_22270[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22241 === (1))){
var inst_22217 = null;
var state_22240__$1 = (function (){var statearr_22243 = state_22240;
(statearr_22243[(7)] = inst_22217);

return statearr_22243;
})();
var statearr_22244_22271 = state_22240__$1;
(statearr_22244_22271[(2)] = null);

(statearr_22244_22271[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22241 === (4))){
var inst_22220 = (state_22240[(8)]);
var inst_22220__$1 = (state_22240[(2)]);
var inst_22221 = (inst_22220__$1 == null);
var inst_22222 = cljs.core.not.call(null,inst_22221);
var state_22240__$1 = (function (){var statearr_22245 = state_22240;
(statearr_22245[(8)] = inst_22220__$1);

return statearr_22245;
})();
if(inst_22222){
var statearr_22246_22272 = state_22240__$1;
(statearr_22246_22272[(1)] = (5));

} else {
var statearr_22247_22273 = state_22240__$1;
(statearr_22247_22273[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22241 === (6))){
var state_22240__$1 = state_22240;
var statearr_22248_22274 = state_22240__$1;
(statearr_22248_22274[(2)] = null);

(statearr_22248_22274[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22241 === (3))){
var inst_22237 = (state_22240[(2)]);
var inst_22238 = cljs.core.async.close_BANG_.call(null,out);
var state_22240__$1 = (function (){var statearr_22249 = state_22240;
(statearr_22249[(9)] = inst_22237);

return statearr_22249;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_22240__$1,inst_22238);
} else {
if((state_val_22241 === (2))){
var state_22240__$1 = state_22240;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_22240__$1,(4),ch);
} else {
if((state_val_22241 === (11))){
var inst_22220 = (state_22240[(8)]);
var inst_22229 = (state_22240[(2)]);
var inst_22217 = inst_22220;
var state_22240__$1 = (function (){var statearr_22250 = state_22240;
(statearr_22250[(10)] = inst_22229);

(statearr_22250[(7)] = inst_22217);

return statearr_22250;
})();
var statearr_22251_22275 = state_22240__$1;
(statearr_22251_22275[(2)] = null);

(statearr_22251_22275[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22241 === (9))){
var inst_22220 = (state_22240[(8)]);
var state_22240__$1 = state_22240;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_22240__$1,(11),out,inst_22220);
} else {
if((state_val_22241 === (5))){
var inst_22217 = (state_22240[(7)]);
var inst_22220 = (state_22240[(8)]);
var inst_22224 = cljs.core._EQ_.call(null,inst_22220,inst_22217);
var state_22240__$1 = state_22240;
if(inst_22224){
var statearr_22253_22276 = state_22240__$1;
(statearr_22253_22276[(1)] = (8));

} else {
var statearr_22254_22277 = state_22240__$1;
(statearr_22254_22277[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22241 === (10))){
var inst_22232 = (state_22240[(2)]);
var state_22240__$1 = state_22240;
var statearr_22255_22278 = state_22240__$1;
(statearr_22255_22278[(2)] = inst_22232);

(statearr_22255_22278[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22241 === (8))){
var inst_22217 = (state_22240[(7)]);
var tmp22252 = inst_22217;
var inst_22217__$1 = tmp22252;
var state_22240__$1 = (function (){var statearr_22256 = state_22240;
(statearr_22256[(7)] = inst_22217__$1);

return statearr_22256;
})();
var statearr_22257_22279 = state_22240__$1;
(statearr_22257_22279[(2)] = null);

(statearr_22257_22279[(1)] = (2));


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
});})(c__19696__auto___22269,out))
;
return ((function (switch__19584__auto__,c__19696__auto___22269,out){
return (function() {
var cljs$core$async$state_machine__19585__auto__ = null;
var cljs$core$async$state_machine__19585__auto____0 = (function (){
var statearr_22261 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_22261[(0)] = cljs$core$async$state_machine__19585__auto__);

(statearr_22261[(1)] = (1));

return statearr_22261;
});
var cljs$core$async$state_machine__19585__auto____1 = (function (state_22240){
while(true){
var ret_value__19586__auto__ = (function (){try{while(true){
var result__19587__auto__ = switch__19584__auto__.call(null,state_22240);
if(cljs.core.keyword_identical_QMARK_.call(null,result__19587__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__19587__auto__;
}
break;
}
}catch (e22262){if((e22262 instanceof Object)){
var ex__19588__auto__ = e22262;
var statearr_22263_22280 = state_22240;
(statearr_22263_22280[(5)] = ex__19588__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_22240);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e22262;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__19586__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__22281 = state_22240;
state_22240 = G__22281;
continue;
} else {
return ret_value__19586__auto__;
}
break;
}
});
cljs$core$async$state_machine__19585__auto__ = function(state_22240){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__19585__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__19585__auto____1.call(this,state_22240);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__19585__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__19585__auto____0;
cljs$core$async$state_machine__19585__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__19585__auto____1;
return cljs$core$async$state_machine__19585__auto__;
})()
;})(switch__19584__auto__,c__19696__auto___22269,out))
})();
var state__19698__auto__ = (function (){var statearr_22264 = f__19697__auto__.call(null);
(statearr_22264[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__19696__auto___22269);

return statearr_22264;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__19698__auto__);
});})(c__19696__auto___22269,out))
);


return out;
});

cljs.core.async.unique.cljs$lang$maxFixedArity = 2;
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.partition = (function cljs$core$async$partition(var_args){
var args22282 = [];
var len__17898__auto___22352 = arguments.length;
var i__17899__auto___22353 = (0);
while(true){
if((i__17899__auto___22353 < len__17898__auto___22352)){
args22282.push((arguments[i__17899__auto___22353]));

var G__22354 = (i__17899__auto___22353 + (1));
i__17899__auto___22353 = G__22354;
continue;
} else {
}
break;
}

var G__22284 = args22282.length;
switch (G__22284) {
case 2:
return cljs.core.async.partition.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.partition.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args22282.length)].join('')));

}
});

cljs.core.async.partition.cljs$core$IFn$_invoke$arity$2 = (function (n,ch){
return cljs.core.async.partition.call(null,n,ch,null);
});

cljs.core.async.partition.cljs$core$IFn$_invoke$arity$3 = (function (n,ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__19696__auto___22356 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__19696__auto___22356,out){
return (function (){
var f__19697__auto__ = (function (){var switch__19584__auto__ = ((function (c__19696__auto___22356,out){
return (function (state_22322){
var state_val_22323 = (state_22322[(1)]);
if((state_val_22323 === (7))){
var inst_22318 = (state_22322[(2)]);
var state_22322__$1 = state_22322;
var statearr_22324_22357 = state_22322__$1;
(statearr_22324_22357[(2)] = inst_22318);

(statearr_22324_22357[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22323 === (1))){
var inst_22285 = (new Array(n));
var inst_22286 = inst_22285;
var inst_22287 = (0);
var state_22322__$1 = (function (){var statearr_22325 = state_22322;
(statearr_22325[(7)] = inst_22286);

(statearr_22325[(8)] = inst_22287);

return statearr_22325;
})();
var statearr_22326_22358 = state_22322__$1;
(statearr_22326_22358[(2)] = null);

(statearr_22326_22358[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22323 === (4))){
var inst_22290 = (state_22322[(9)]);
var inst_22290__$1 = (state_22322[(2)]);
var inst_22291 = (inst_22290__$1 == null);
var inst_22292 = cljs.core.not.call(null,inst_22291);
var state_22322__$1 = (function (){var statearr_22327 = state_22322;
(statearr_22327[(9)] = inst_22290__$1);

return statearr_22327;
})();
if(inst_22292){
var statearr_22328_22359 = state_22322__$1;
(statearr_22328_22359[(1)] = (5));

} else {
var statearr_22329_22360 = state_22322__$1;
(statearr_22329_22360[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22323 === (15))){
var inst_22312 = (state_22322[(2)]);
var state_22322__$1 = state_22322;
var statearr_22330_22361 = state_22322__$1;
(statearr_22330_22361[(2)] = inst_22312);

(statearr_22330_22361[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22323 === (13))){
var state_22322__$1 = state_22322;
var statearr_22331_22362 = state_22322__$1;
(statearr_22331_22362[(2)] = null);

(statearr_22331_22362[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22323 === (6))){
var inst_22287 = (state_22322[(8)]);
var inst_22308 = (inst_22287 > (0));
var state_22322__$1 = state_22322;
if(cljs.core.truth_(inst_22308)){
var statearr_22332_22363 = state_22322__$1;
(statearr_22332_22363[(1)] = (12));

} else {
var statearr_22333_22364 = state_22322__$1;
(statearr_22333_22364[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22323 === (3))){
var inst_22320 = (state_22322[(2)]);
var state_22322__$1 = state_22322;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_22322__$1,inst_22320);
} else {
if((state_val_22323 === (12))){
var inst_22286 = (state_22322[(7)]);
var inst_22310 = cljs.core.vec.call(null,inst_22286);
var state_22322__$1 = state_22322;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_22322__$1,(15),out,inst_22310);
} else {
if((state_val_22323 === (2))){
var state_22322__$1 = state_22322;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_22322__$1,(4),ch);
} else {
if((state_val_22323 === (11))){
var inst_22302 = (state_22322[(2)]);
var inst_22303 = (new Array(n));
var inst_22286 = inst_22303;
var inst_22287 = (0);
var state_22322__$1 = (function (){var statearr_22334 = state_22322;
(statearr_22334[(10)] = inst_22302);

(statearr_22334[(7)] = inst_22286);

(statearr_22334[(8)] = inst_22287);

return statearr_22334;
})();
var statearr_22335_22365 = state_22322__$1;
(statearr_22335_22365[(2)] = null);

(statearr_22335_22365[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22323 === (9))){
var inst_22286 = (state_22322[(7)]);
var inst_22300 = cljs.core.vec.call(null,inst_22286);
var state_22322__$1 = state_22322;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_22322__$1,(11),out,inst_22300);
} else {
if((state_val_22323 === (5))){
var inst_22286 = (state_22322[(7)]);
var inst_22287 = (state_22322[(8)]);
var inst_22290 = (state_22322[(9)]);
var inst_22295 = (state_22322[(11)]);
var inst_22294 = (inst_22286[inst_22287] = inst_22290);
var inst_22295__$1 = (inst_22287 + (1));
var inst_22296 = (inst_22295__$1 < n);
var state_22322__$1 = (function (){var statearr_22336 = state_22322;
(statearr_22336[(12)] = inst_22294);

(statearr_22336[(11)] = inst_22295__$1);

return statearr_22336;
})();
if(cljs.core.truth_(inst_22296)){
var statearr_22337_22366 = state_22322__$1;
(statearr_22337_22366[(1)] = (8));

} else {
var statearr_22338_22367 = state_22322__$1;
(statearr_22338_22367[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22323 === (14))){
var inst_22315 = (state_22322[(2)]);
var inst_22316 = cljs.core.async.close_BANG_.call(null,out);
var state_22322__$1 = (function (){var statearr_22340 = state_22322;
(statearr_22340[(13)] = inst_22315);

return statearr_22340;
})();
var statearr_22341_22368 = state_22322__$1;
(statearr_22341_22368[(2)] = inst_22316);

(statearr_22341_22368[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22323 === (10))){
var inst_22306 = (state_22322[(2)]);
var state_22322__$1 = state_22322;
var statearr_22342_22369 = state_22322__$1;
(statearr_22342_22369[(2)] = inst_22306);

(statearr_22342_22369[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22323 === (8))){
var inst_22286 = (state_22322[(7)]);
var inst_22295 = (state_22322[(11)]);
var tmp22339 = inst_22286;
var inst_22286__$1 = tmp22339;
var inst_22287 = inst_22295;
var state_22322__$1 = (function (){var statearr_22343 = state_22322;
(statearr_22343[(7)] = inst_22286__$1);

(statearr_22343[(8)] = inst_22287);

return statearr_22343;
})();
var statearr_22344_22370 = state_22322__$1;
(statearr_22344_22370[(2)] = null);

(statearr_22344_22370[(1)] = (2));


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
});})(c__19696__auto___22356,out))
;
return ((function (switch__19584__auto__,c__19696__auto___22356,out){
return (function() {
var cljs$core$async$state_machine__19585__auto__ = null;
var cljs$core$async$state_machine__19585__auto____0 = (function (){
var statearr_22348 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_22348[(0)] = cljs$core$async$state_machine__19585__auto__);

(statearr_22348[(1)] = (1));

return statearr_22348;
});
var cljs$core$async$state_machine__19585__auto____1 = (function (state_22322){
while(true){
var ret_value__19586__auto__ = (function (){try{while(true){
var result__19587__auto__ = switch__19584__auto__.call(null,state_22322);
if(cljs.core.keyword_identical_QMARK_.call(null,result__19587__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__19587__auto__;
}
break;
}
}catch (e22349){if((e22349 instanceof Object)){
var ex__19588__auto__ = e22349;
var statearr_22350_22371 = state_22322;
(statearr_22350_22371[(5)] = ex__19588__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_22322);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e22349;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__19586__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__22372 = state_22322;
state_22322 = G__22372;
continue;
} else {
return ret_value__19586__auto__;
}
break;
}
});
cljs$core$async$state_machine__19585__auto__ = function(state_22322){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__19585__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__19585__auto____1.call(this,state_22322);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__19585__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__19585__auto____0;
cljs$core$async$state_machine__19585__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__19585__auto____1;
return cljs$core$async$state_machine__19585__auto__;
})()
;})(switch__19584__auto__,c__19696__auto___22356,out))
})();
var state__19698__auto__ = (function (){var statearr_22351 = f__19697__auto__.call(null);
(statearr_22351[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__19696__auto___22356);

return statearr_22351;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__19698__auto__);
});})(c__19696__auto___22356,out))
);


return out;
});

cljs.core.async.partition.cljs$lang$maxFixedArity = 3;
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.partition_by = (function cljs$core$async$partition_by(var_args){
var args22373 = [];
var len__17898__auto___22447 = arguments.length;
var i__17899__auto___22448 = (0);
while(true){
if((i__17899__auto___22448 < len__17898__auto___22447)){
args22373.push((arguments[i__17899__auto___22448]));

var G__22449 = (i__17899__auto___22448 + (1));
i__17899__auto___22448 = G__22449;
continue;
} else {
}
break;
}

var G__22375 = args22373.length;
switch (G__22375) {
case 2:
return cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args22373.length)].join('')));

}
});

cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$2 = (function (f,ch){
return cljs.core.async.partition_by.call(null,f,ch,null);
});

cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$3 = (function (f,ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__19696__auto___22451 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__19696__auto___22451,out){
return (function (){
var f__19697__auto__ = (function (){var switch__19584__auto__ = ((function (c__19696__auto___22451,out){
return (function (state_22417){
var state_val_22418 = (state_22417[(1)]);
if((state_val_22418 === (7))){
var inst_22413 = (state_22417[(2)]);
var state_22417__$1 = state_22417;
var statearr_22419_22452 = state_22417__$1;
(statearr_22419_22452[(2)] = inst_22413);

(statearr_22419_22452[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22418 === (1))){
var inst_22376 = [];
var inst_22377 = inst_22376;
var inst_22378 = new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123);
var state_22417__$1 = (function (){var statearr_22420 = state_22417;
(statearr_22420[(7)] = inst_22377);

(statearr_22420[(8)] = inst_22378);

return statearr_22420;
})();
var statearr_22421_22453 = state_22417__$1;
(statearr_22421_22453[(2)] = null);

(statearr_22421_22453[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22418 === (4))){
var inst_22381 = (state_22417[(9)]);
var inst_22381__$1 = (state_22417[(2)]);
var inst_22382 = (inst_22381__$1 == null);
var inst_22383 = cljs.core.not.call(null,inst_22382);
var state_22417__$1 = (function (){var statearr_22422 = state_22417;
(statearr_22422[(9)] = inst_22381__$1);

return statearr_22422;
})();
if(inst_22383){
var statearr_22423_22454 = state_22417__$1;
(statearr_22423_22454[(1)] = (5));

} else {
var statearr_22424_22455 = state_22417__$1;
(statearr_22424_22455[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22418 === (15))){
var inst_22407 = (state_22417[(2)]);
var state_22417__$1 = state_22417;
var statearr_22425_22456 = state_22417__$1;
(statearr_22425_22456[(2)] = inst_22407);

(statearr_22425_22456[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22418 === (13))){
var state_22417__$1 = state_22417;
var statearr_22426_22457 = state_22417__$1;
(statearr_22426_22457[(2)] = null);

(statearr_22426_22457[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22418 === (6))){
var inst_22377 = (state_22417[(7)]);
var inst_22402 = inst_22377.length;
var inst_22403 = (inst_22402 > (0));
var state_22417__$1 = state_22417;
if(cljs.core.truth_(inst_22403)){
var statearr_22427_22458 = state_22417__$1;
(statearr_22427_22458[(1)] = (12));

} else {
var statearr_22428_22459 = state_22417__$1;
(statearr_22428_22459[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22418 === (3))){
var inst_22415 = (state_22417[(2)]);
var state_22417__$1 = state_22417;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_22417__$1,inst_22415);
} else {
if((state_val_22418 === (12))){
var inst_22377 = (state_22417[(7)]);
var inst_22405 = cljs.core.vec.call(null,inst_22377);
var state_22417__$1 = state_22417;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_22417__$1,(15),out,inst_22405);
} else {
if((state_val_22418 === (2))){
var state_22417__$1 = state_22417;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_22417__$1,(4),ch);
} else {
if((state_val_22418 === (11))){
var inst_22381 = (state_22417[(9)]);
var inst_22385 = (state_22417[(10)]);
var inst_22395 = (state_22417[(2)]);
var inst_22396 = [];
var inst_22397 = inst_22396.push(inst_22381);
var inst_22377 = inst_22396;
var inst_22378 = inst_22385;
var state_22417__$1 = (function (){var statearr_22429 = state_22417;
(statearr_22429[(7)] = inst_22377);

(statearr_22429[(11)] = inst_22397);

(statearr_22429[(12)] = inst_22395);

(statearr_22429[(8)] = inst_22378);

return statearr_22429;
})();
var statearr_22430_22460 = state_22417__$1;
(statearr_22430_22460[(2)] = null);

(statearr_22430_22460[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22418 === (9))){
var inst_22377 = (state_22417[(7)]);
var inst_22393 = cljs.core.vec.call(null,inst_22377);
var state_22417__$1 = state_22417;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_22417__$1,(11),out,inst_22393);
} else {
if((state_val_22418 === (5))){
var inst_22381 = (state_22417[(9)]);
var inst_22385 = (state_22417[(10)]);
var inst_22378 = (state_22417[(8)]);
var inst_22385__$1 = f.call(null,inst_22381);
var inst_22386 = cljs.core._EQ_.call(null,inst_22385__$1,inst_22378);
var inst_22387 = cljs.core.keyword_identical_QMARK_.call(null,inst_22378,new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123));
var inst_22388 = (inst_22386) || (inst_22387);
var state_22417__$1 = (function (){var statearr_22431 = state_22417;
(statearr_22431[(10)] = inst_22385__$1);

return statearr_22431;
})();
if(cljs.core.truth_(inst_22388)){
var statearr_22432_22461 = state_22417__$1;
(statearr_22432_22461[(1)] = (8));

} else {
var statearr_22433_22462 = state_22417__$1;
(statearr_22433_22462[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22418 === (14))){
var inst_22410 = (state_22417[(2)]);
var inst_22411 = cljs.core.async.close_BANG_.call(null,out);
var state_22417__$1 = (function (){var statearr_22435 = state_22417;
(statearr_22435[(13)] = inst_22410);

return statearr_22435;
})();
var statearr_22436_22463 = state_22417__$1;
(statearr_22436_22463[(2)] = inst_22411);

(statearr_22436_22463[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22418 === (10))){
var inst_22400 = (state_22417[(2)]);
var state_22417__$1 = state_22417;
var statearr_22437_22464 = state_22417__$1;
(statearr_22437_22464[(2)] = inst_22400);

(statearr_22437_22464[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22418 === (8))){
var inst_22381 = (state_22417[(9)]);
var inst_22377 = (state_22417[(7)]);
var inst_22385 = (state_22417[(10)]);
var inst_22390 = inst_22377.push(inst_22381);
var tmp22434 = inst_22377;
var inst_22377__$1 = tmp22434;
var inst_22378 = inst_22385;
var state_22417__$1 = (function (){var statearr_22438 = state_22417;
(statearr_22438[(7)] = inst_22377__$1);

(statearr_22438[(8)] = inst_22378);

(statearr_22438[(14)] = inst_22390);

return statearr_22438;
})();
var statearr_22439_22465 = state_22417__$1;
(statearr_22439_22465[(2)] = null);

(statearr_22439_22465[(1)] = (2));


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
});})(c__19696__auto___22451,out))
;
return ((function (switch__19584__auto__,c__19696__auto___22451,out){
return (function() {
var cljs$core$async$state_machine__19585__auto__ = null;
var cljs$core$async$state_machine__19585__auto____0 = (function (){
var statearr_22443 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_22443[(0)] = cljs$core$async$state_machine__19585__auto__);

(statearr_22443[(1)] = (1));

return statearr_22443;
});
var cljs$core$async$state_machine__19585__auto____1 = (function (state_22417){
while(true){
var ret_value__19586__auto__ = (function (){try{while(true){
var result__19587__auto__ = switch__19584__auto__.call(null,state_22417);
if(cljs.core.keyword_identical_QMARK_.call(null,result__19587__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__19587__auto__;
}
break;
}
}catch (e22444){if((e22444 instanceof Object)){
var ex__19588__auto__ = e22444;
var statearr_22445_22466 = state_22417;
(statearr_22445_22466[(5)] = ex__19588__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_22417);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e22444;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__19586__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__22467 = state_22417;
state_22417 = G__22467;
continue;
} else {
return ret_value__19586__auto__;
}
break;
}
});
cljs$core$async$state_machine__19585__auto__ = function(state_22417){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__19585__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__19585__auto____1.call(this,state_22417);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__19585__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__19585__auto____0;
cljs$core$async$state_machine__19585__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__19585__auto____1;
return cljs$core$async$state_machine__19585__auto__;
})()
;})(switch__19584__auto__,c__19696__auto___22451,out))
})();
var state__19698__auto__ = (function (){var statearr_22446 = f__19697__auto__.call(null);
(statearr_22446[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__19696__auto___22451);

return statearr_22446;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__19698__auto__);
});})(c__19696__auto___22451,out))
);


return out;
});

cljs.core.async.partition_by.cljs$lang$maxFixedArity = 3;

//# sourceMappingURL=async.js.map?rel=1458130389395