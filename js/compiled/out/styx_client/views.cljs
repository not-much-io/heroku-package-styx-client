(ns styx-client.views
  (:require [re-frame.core :as re-frame]
            [goog.dom :as gdom]))

(defn top-bar []
  [:div#top-bar.flex.main-color.border-bottom
   [:img.circle.m1 {:src    "https://avatars.slack-edge.com/2015-05-30/5147732825_d04b8e601de9c90bed00_192.jpg"
                    :height 60
                    :width  60}]
   [:div
    [:h2#contact-name.mb0 "Kristo Koert"]
    [:h5#status.m0 "online"]]])

(defn chat-box []
  (let [messages (shuffle (flatten (repeat 6 ["Lorem impsum dolor sit amper consecreteur adipiscing"
                                              "lore impsum dolor"])))
        _  (js/setInterval
             #(let [get-height        (fn [id]
                                        (.-offsetHeight (gdom/getElement id)))
                    top-bar-height    (get-height "top-bar")
                    bottom-bar-height (get-height "bottom-bar")
                    parent-height     (get-height "wrapping-div")]
               (set! (.-height (.-style (gdom/getElement "chat-feed")))
                     (str (- parent-height top-bar-height bottom-bar-height)
                          "px")))
             16)]                                           ; Performance hit?
    [:div#chat-feed
     (map-indexed
       (fn [idx msg]
         (if (even? idx)
           ^{:key (rand-int 10000)}
           [:div.message1.p2.rounded.mr-auto.m3
            msg]
           ^{:key (rand-int 10000)}
           [:div.message2.p2.rounded.ml-auto.m3
            msg]))
       messages)]))

(defn message-box []
  [:div#bottom-bar.border-top.main-color
   [:div.flex
    [:div.col-2
     [:i.material-icons.m2 "attachment"]]
    [:div.col-6
     [:textarea#chat-box.main-color.m2
      {:rows 1}
      "Type your message..."]]
    [:div.col-2
     [:i.material-icons.m2 "insert_emoticon"]]
    [:div.col-2
     [:i.material-icons.m2 "send"]]]])

(defn main-panel []
  (let [name (re-frame/subscribe [:name])]
    (fn []
      [:div#wrapping-div
       [top-bar]
       [chat-box]
       [message-box]])))
