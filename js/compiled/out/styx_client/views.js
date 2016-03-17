// Compiled by ClojureScript 1.7.170 {}
goog.provide('styx_client.views');
goog.require('cljs.core');
goog.require('re_frame.core');
goog.require('goog.dom');
styx_client.views.top_bar = (function styx_client$views$top_bar(){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div#top-bar.flex.main-color.border-bottom.card-4","div#top-bar.flex.main-color.border-bottom.card-4",-1402645063),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"img.circle.m1.profile-picture.card-2","img.circle.m1.profile-picture.card-2",320339068),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"src","src",-1651076051),"https://avatars.slack-edge.com/2015-05-30/5147732825_d04b8e601de9c90bed00_192.jpg",new cljs.core.Keyword(null,"height","height",1025178622),(55),new cljs.core.Keyword(null,"width","width",-384071477),(55)], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"h3#contact-name.mb0","h3#contact-name.mb0",1207197912),"Kristo Koert"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"h5#status.m0","h5#status.m0",2020597104),"online"], null)], null)], null);
});
styx_client.views.chat_box = (function styx_client$views$chat_box(messages){
var _ = setInterval((function (){
var get_height = (function (id){
return goog.dom.getElement(id).offsetHeight;
});
var top_bar_height = get_height.call(null,"top-bar");
var bottom_bar_height = get_height.call(null,"bottom-bar");
var parent_height = get_height.call(null,"wrapping-div");
var chat_feed_style = goog.dom.getElement("chat-feed").style;
return chat_feed_style.height = [cljs.core.str(((parent_height - top_bar_height) - bottom_bar_height)),cljs.core.str("px")].join('');
}),(16));
var from_msg = ((function (_){
return (function (i,m){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.flex.flex-wrap.ml2","div.flex.flex-wrap.ml2",253980573),cljs.core.with_meta(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.col-12","div.col-12",361685154),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.message1.secondary-color1.main-text.p2.rounded.card-3","div.message1.secondary-color1.main-text.p2.rounded.card-3",-1166428034),m], null)], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),i], null)),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.col-12","div.col-12",361685154),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"h6.secondary-text.my1","h6.secondary-text.my1",1635682071),"Sent 9.15"], null)], null)], null);
});})(_))
;
var user_msg = ((function (_,from_msg){
return (function (i,m){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.flex.flex-wrap.mr2","div.flex.flex-wrap.mr2",1154167943),cljs.core.with_meta(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.col-12","div.col-12",361685154),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.message2.secondary-color2.main-text.p2.rounded.ml-auto.card-3","div.message2.secondary-color2.main-text.p2.rounded.ml-auto.card-3",-710569791),m], null)], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),i], null)),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.col-12","div.col-12",361685154),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"h6.secondary-text.my1.right-align","h6.secondary-text.my1.right-align",1485209435),"Sent 9.15"], null)], null)], null);
});})(_,from_msg))
;
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div#chat-feed","div#chat-feed",-494536689),cljs.core.map_indexed.call(null,((function (_,from_msg,user_msg){
return (function (idx,msg){
if(cljs.core.even_QMARK_.call(null,idx)){
return from_msg.call(null,idx,msg);
} else {
return user_msg.call(null,idx,msg);
}
});})(_,from_msg,user_msg))
,messages)], null);
});
styx_client.views.message_box = (function styx_client$views$message_box(){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div#bottom-bar.border-top.main-color","div#bottom-bar.border-top.main-color",464300285),new cljs.core.PersistentVector(null, 7, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.flex","div.flex",-396986231),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.col-1","div.col-1",-1029015073),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"i.material-icons.m2.c-s2-text","i.material-icons.m2.c-s2-text",769042396),"attachment"], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.col-7","div.col-7",256023159),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"textarea#chat-box.secondary-text.main-color.m2","textarea#chat-box.secondary-text.main-color.m2",-1391176094),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"rows","rows",850049680),(1)], null),"Type your message..."], null)], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.col-1","div.col-1",-1029015073)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.col-1","div.col-1",-1029015073),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"i.material-icons.m2.c-s2-text","i.material-icons.m2.c-s2-text",769042396),"insert_emoticon"], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.col-1","div.col-1",-1029015073),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"i.material-icons.m2.m2.c-s2-text","i.material-icons.m2.m2.c-s2-text",-1317099696),"send"], null)], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.col-1","div.col-1",-1029015073)], null)], null)], null);
});
styx_client.views.main_panel = (function styx_client$views$main_panel(){
var messages = re_frame.core.subscribe.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"messages","messages",345434482)], null));
return ((function (messages){
return (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div#wrapping-div","div#wrapping-div",395872552),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [styx_client.views.top_bar], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [styx_client.views.chat_box,cljs.core.deref.call(null,messages)], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [styx_client.views.message_box], null)], null);
});
;})(messages))
});

//# sourceMappingURL=views.js.map?rel=1458225092974