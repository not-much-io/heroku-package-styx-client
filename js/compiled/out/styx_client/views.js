// Compiled by ClojureScript 1.7.170 {}
goog.provide('styx_client.views');
goog.require('cljs.core');
goog.require('re_frame.core');
goog.require('goog.dom');
styx_client.views.top_bar = (function styx_client$views$top_bar(){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div#top-bar.flex.main-color.border-bottom","div#top-bar.flex.main-color.border-bottom",197167581),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"img.circle.m1","img.circle.m1",-1664762103),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"src","src",-1651076051),"https://avatars.slack-edge.com/2015-05-30/5147732825_d04b8e601de9c90bed00_192.jpg",new cljs.core.Keyword(null,"height","height",1025178622),(60),new cljs.core.Keyword(null,"width","width",-384071477),(60)], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"h2#contact-name.mb0","h2#contact-name.mb0",-1081566387),"Kristo Koert"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"h5#status.m0","h5#status.m0",2020597104),"online"], null)], null)], null);
});
styx_client.views.chat_box = (function styx_client$views$chat_box(){
var messages = cljs.core.shuffle.call(null,cljs.core.flatten.call(null,cljs.core.repeat.call(null,(6),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["Lorem impsum dolor sit amper consecreteur adipiscing","lore impsum dolor"], null))));
var _ = setInterval(((function (messages){
return (function (){
var get_height = ((function (messages){
return (function (id){
return goog.dom.getElement(id).offsetHeight;
});})(messages))
;
var top_bar_height = get_height.call(null,"top-bar");
var bottom_bar_height = get_height.call(null,"bottom-bar");
var parent_height = get_height.call(null,"wrapping-div");
return goog.dom.getElement("chat-feed").style.height = [cljs.core.str(((parent_height - top_bar_height) - bottom_bar_height)),cljs.core.str("px")].join('');
});})(messages))
,(16));
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div#chat-feed","div#chat-feed",-494536689),cljs.core.map_indexed.call(null,((function (messages,_){
return (function (idx,msg){
if(cljs.core.even_QMARK_.call(null,idx)){
return cljs.core.with_meta(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.message1.p2.rounded.mr-auto.m3","div.message1.p2.rounded.mr-auto.m3",647361177),msg], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),cljs.core.rand_int.call(null,(10000))], null));
} else {
return cljs.core.with_meta(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.message2.p2.rounded.ml-auto.m3","div.message2.p2.rounded.ml-auto.m3",-2022657606),msg], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),cljs.core.rand_int.call(null,(10000))], null));
}
});})(messages,_))
,messages)], null);
});
styx_client.views.message_box = (function styx_client$views$message_box(){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div#bottom-bar.border-top.main-color","div#bottom-bar.border-top.main-color",464300285),new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.flex","div.flex",-396986231),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.col-2","div.col-2",-1787809207),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"i.material-icons.m2","i.material-icons.m2",-1791776559),"attachment"], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.col-6","div.col-6",-2040623677),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"textarea#chat-box.main-color.m2","textarea#chat-box.main-color.m2",826626975),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"rows","rows",850049680),(1)], null),"Type your message..."], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.col-2","div.col-2",-1787809207),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"i.material-icons.m2","i.material-icons.m2",-1791776559),"insert_emoticon"], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.col-2","div.col-2",-1787809207),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"i.material-icons.m2","i.material-icons.m2",-1791776559),"send"], null)], null)], null)], null);
});
styx_client.views.main_panel = (function styx_client$views$main_panel(){
var name = re_frame.core.subscribe.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"name","name",1843675177)], null));
return ((function (name){
return (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div#wrapping-div","div#wrapping-div",395872552),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [styx_client.views.top_bar], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [styx_client.views.chat_box], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [styx_client.views.message_box], null)], null);
});
;})(name))
});

//# sourceMappingURL=views.js.map?rel=1458126938252