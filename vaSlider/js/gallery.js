/* 
 * @Author: Neacsu
 * @Date:   2014-08-13 13:27:12
 * @Last Modified by:   Neacsu
 * @Last Modified time: 2014-10-29 00:52:06
 */

// Imagesloaded plugin
/*
*!

* imagesLoaded PACKAGED v3.0.4

* JavaScript is all like "You images are done yet or what?"

* MIT License

*/

(function() {
    "use strict";

    function e() {}

    function t(e, t) {
        for (var n = e.length; n--;)
            if (e[n].listener === t) return n;
        return -1
    }

    function n(e) {
        return function() {
            return this[e].apply(this, arguments)
        }
    }
    var i = e.prototype;
    i.getListeners = function(e) {
        var t, n, i = this._getEvents();
        if ("object" == typeof e) {
            t = {};
            for (n in i) i.hasOwnProperty(n) && e.test(n) && (t[n] = i[n])
        } else t = i[e] || (i[e] = []);
        return t
    }, i.flattenListeners = function(e) {
        var t, n = [];
        for (t = 0; e.length > t; t += 1) n.push(e[t].listener);
        return n
    }, i.getListenersAsObject = function(e) {
        var t, n = this.getListeners(e);
        return n instanceof Array && (t = {}, t[e] = n), t || n
    }, i.addListener = function(e, n) {
        var i, r = this.getListenersAsObject(e),
            o = "object" == typeof n;
        for (i in r) r.hasOwnProperty(i) && -1 === t(r[i], n) && r[i].push(o ? n : {
            listener: n,
            once: !1
        });
        return this
    }, i.on = n("addListener"), i.addOnceListener = function(e, t) {
        return this.addListener(e, {
            listener: t,
            once: !0
        })
    }, i.once = n("addOnceListener"), i.defineEvent = function(e) {
        return this.getListeners(e), this
    }, i.defineEvents = function(e) {
        for (var t = 0; e.length > t; t += 1) this.defineEvent(e[t]);
        return this
    }, i.removeListener = function(e, n) {
        var i, r, o = this.getListenersAsObject(e);
        for (r in o) o.hasOwnProperty(r) && (i = t(o[r], n), -1 !== i && o[r].splice(i, 1));
        return this
    }, i.off = n("removeListener"), i.addListeners = function(e, t) {
        return this.manipulateListeners(!1, e, t)
    }, i.removeListeners = function(e, t) {
        return this.manipulateListeners(!0, e, t)
    }, i.manipulateListeners = function(e, t, n) {
        var i, r, o = e ? this.removeListener : this.addListener,
            s = e ? this.removeListeners : this.addListeners;
        if ("object" != typeof t || t instanceof RegExp)
            for (i = n.length; i--;) o.call(this, t, n[i]);
        else
            for (i in t) t.hasOwnProperty(i) && (r = t[i]) && ("function" == typeof r ? o.call(this, i, r) : s.call(this, i, r));
        return this
    }, i.removeEvent = function(e) {
        var t, n = typeof e,
            i = this._getEvents();
        if ("string" === n) delete i[e];
        else if ("object" === n)
            for (t in i) i.hasOwnProperty(t) && e.test(t) && delete i[t];
        else delete this._events;
        return this
    }, i.removeAllListeners = n("removeEvent"), i.emitEvent = function(e, t) {
        var n, i, r, o, s = this.getListenersAsObject(e);
        for (r in s)
            if (s.hasOwnProperty(r))
                for (i = s[r].length; i--;) n = s[r][i], n.once === !0 && this.removeListener(e, n.listener), o = n.listener.apply(this, t || []), o === this._getOnceReturnValue() && this.removeListener(e, n.listener);
        return this
    }, i.trigger = n("emitEvent"), i.emit = function(e) {
        var t = Array.prototype.slice.call(arguments, 1);
        return this.emitEvent(e, t)
    }, i.setOnceReturnValue = function(e) {
        return this._onceReturnValue = e, this
    }, i._getOnceReturnValue = function() {
        return this.hasOwnProperty("_onceReturnValue") ? this._onceReturnValue : !0
    }, i._getEvents = function() {
        return this._events || (this._events = {})
    }, "function" == typeof define && define.amd ? define(function() {
        return e
    }) : "object" == typeof module && module.exports ? module.exports = e : this.EventEmitter = e
}).call(this),
    function(e) {
        "use strict";
        var t = document.documentElement,
            n = function() {};
        t.addEventListener ? n = function(e, t, n) {
            e.addEventListener(t, n, !1)
        } : t.attachEvent && (n = function(t, n, i) {
            t[n + i] = i.handleEvent ? function() {
                var t = e.event;
                t.target = t.target || t.srcElement, i.handleEvent.call(i, t)
            } : function() {
                var n = e.event;
                n.target = n.target || n.srcElement, i.call(t, n)
            }, t.attachEvent("on" + n, t[n + i])
        });
        var i = function() {};
        t.removeEventListener ? i = function(e, t, n) {
            e.removeEventListener(t, n, !1)
        } : t.detachEvent && (i = function(e, t, n) {
            e.detachEvent("on" + t, e[t + n]);
            try {
                delete e[t + n]
            } catch (i) {
                e[t + n] = void 0
            }
        });
        var r = {
            bind: n,
            unbind: i
        };
        "function" == typeof define && define.amd ? define(r) : e.eventie = r
    }(this),
    function(e) {
        "use strict";

        function t(e, t) {
            for (var n in t) e[n] = t[n];
            return e
        }

        function n(e) {
            return "[object Array]" === c.call(e)
        }

        function i(e) {
            var t = [];
            if (n(e)) t = e;
            else if ("number" == typeof e.length)
                for (var i = 0, r = e.length; r > i; i++) t.push(e[i]);
            else t.push(e);
            return t
        }

        function r(e, n) {
            function r(e, n, s) {
                if (!(this instanceof r)) return new r(e, n);
                "string" == typeof e && (e = document.querySelectorAll(e)), this.elements = i(e), this.options = t({}, this.options), "function" == typeof n ? s = n : t(this.options, n), s && this.on("always", s), this.getImages(), o && (this.jqDeferred = new o.Deferred);
                var a = this;
                setTimeout(function() {
                    a.check()
                })
            }

            function c(e) {
                this.img = e
            }
            r.prototype = new e, r.prototype.options = {}, r.prototype.getImages = function() {
                this.images = [];
                for (var e = 0, t = this.elements.length; t > e; e++) {
                    var n = this.elements[e];
                    "IMG" === n.nodeName && this.addImage(n);
                    for (var i = n.querySelectorAll("img"), r = 0, o = i.length; o > r; r++) {
                        var s = i[r];
                        this.addImage(s)
                    }
                }
            }, r.prototype.addImage = function(e) {
                var t = new c(e);
                this.images.push(t)
            }, r.prototype.check = function() {
                function e(e, r) {
                    return t.options.debug && a && s.log("confirm", e, r), t.progress(e), n++, n === i && t.complete(), !0
                }
                var t = this,
                    n = 0,
                    i = this.images.length;
                if (this.hasAnyBroken = !1, !i) return this.complete(), void 0;
                for (var r = 0; i > r; r++) {
                    var o = this.images[r];
                    o.on("confirm", e), o.check()
                }
            }, r.prototype.progress = function(e) {
                this.hasAnyBroken = this.hasAnyBroken || !e.isLoaded;
                var t = this;
                setTimeout(function() {
                    t.emit("progress", t, e), t.jqDeferred && t.jqDeferred.notify(t, e)
                })
            }, r.prototype.complete = function() {
                var e = this.hasAnyBroken ? "fail" : "done";
                this.isComplete = !0;
                var t = this;
                setTimeout(function() {
                    if (t.emit(e, t), t.emit("always", t), t.jqDeferred) {
                        var n = t.hasAnyBroken ? "reject" : "resolve";
                        t.jqDeferred[n](t)
                    }
                })
            }, o && (o.fn.imagesLoaded = function(e, t) {
                var n = new r(this, e, t);
                return n.jqDeferred.promise(o(this))
            });
            var f = {};
            return c.prototype = new e, c.prototype.check = function() {
                var e = f[this.img.src];
                if (e) return this.useCached(e), void 0;
                if (f[this.img.src] = this, this.img.complete && void 0 !== this.img.naturalWidth) return this.confirm(0 !== this.img.naturalWidth, "naturalWidth"), void 0;
                var t = this.proxyImage = new Image;
                n.bind(t, "load", this), n.bind(t, "error", this), t.src = this.img.src
            }, c.prototype.useCached = function(e) {
                if (e.isConfirmed) this.confirm(e.isLoaded, "cached was confirmed");
                else {
                    var t = this;
                    e.on("confirm", function(e) {
                        return t.confirm(e.isLoaded, "cache emitted confirmed"), !0
                    })
                }
            }, c.prototype.confirm = function(e, t) {
                this.isConfirmed = !0, this.isLoaded = e, this.emit("confirm", this, t)
            }, c.prototype.handleEvent = function(e) {
                var t = "on" + e.type;
                this[t] && this[t](e)
            }, c.prototype.onload = function() {
                this.confirm(!0, "onload"), this.unbindProxyEvents()
            }, c.prototype.onerror = function() {
                this.confirm(!1, "onerror"), this.unbindProxyEvents()
            }, c.prototype.unbindProxyEvents = function() {
                n.unbind(this.proxyImage, "load", this), n.unbind(this.proxyImage, "error", this)
            }, r
        }
        var o = e.jQuery,
            s = e.console,
            a = s !== void 0,
            c = Object.prototype.toString;
        "function" == typeof define && define.amd ? define(["eventEmitter/EventEmitter", "eventie/eventie"], r) : e.imagesLoaded = r(e.EventEmitter, e.eventie)
    }(window);;


// Start Gallery
var gallery = {
    scrollCol: {},
    autoScrollRandom: {},
    hover: {},

    cloneNumber: 0,
    lastSpeed: 0,
    firstScrollDistance: 100000,
    firstScrollDuration: 1000,
    mousedown: false,
    lastFilter: "",
    leaveCol: true,
    blockHover: false,
    dragging: false,

    galleryContainer: "",
    defaultAnimationSpeed: 10,
    startOverlaySelector: "",
    startOverlayExitSelector: "",
    carouselFilterSelector: "",
    showOverlayOnStart: false,
    activeFilter: 'all',
    loaderSinglePage: false,

    numberOfCols: 4,
    fullScreenFadeElements: [],

    neight: {},
    lastAnimation: "up",

    sliderOpened: false,
    inFullScreen: false,
    sliderFirstRun: true,
    hash: document.location.hash,
    clickedEffect: false,

    StartUp: function(args) {

        window.addEventListener("orientationchange", function() {
            if (window.orientation == 90 || window.orientation == -90) {
                jQuery('header.header').addClass('landscape');
            } else {
                jQuery('header.header').removeClass('landscape');
            }
            gallery.setGalleryHeight();
        }, false);


        if (jQuery(window).width() < 681 && jQuery(window).width() > 480) {
            gallery.numberOfCols = 3;
        } else if (jQuery(window).width() < 481) {
            gallery.numberOfCols = 2;
        }


        //Detect iPod
        gallery.numberOfCols = navigator.userAgent.match(/iPad/i) != null ? 3 : gallery.numberOfCols;


        jQuery.each(args, function(index, val) {
            gallery[index] = val;
        });
		
		/*
        if (jQuery(gallery.galleryContainer).length > 0) {

            jQuery.ajax({

                cache: false,
                timeout: 8000,
                url: "http://127.0.0.1",//php_array.admin_ajax,
                type: "POST",
                dataType: 'json',
                data: ({
                    action: 'theme_post_example',
                    id: gallery.galleryPageID
                }),

                success: function(data, textStatus, jqXHR) {

                    jQuery.each(data, function(index, val) {
                        link = gallery.checkResolution() ? val.urlDesktopSmall : val.urlMobileSmall;
                        newimg = jQuery('<img>');
                        newimg.data(val);
                        newimg.attr('src', link);
                        jQuery('#images-backup').append(newimg);
                    });

                    gallery.createCols();

                    setTimeout(function() {
                        for (var i = 1; i < gallery.numberOfCols + 1; i++) {
                            gallery.autoScrollRandom[i] = (Math.floor(Math.random() * 60) + 25) / 100;
                            gallery.hover[i] = false;
                        };

                        gallery.neight[1] = 1.25;
                        gallery.neight[2] = 1.5;
                        gallery.neight[3] = 2;
                        gallery.neight[4] = 1.75;
                        gallery.neight[5] = 1.25;
                        gallery.neight[6] = 1.25;
                    }, 500)

                    //Filter settings
                    gallery.filterEvents();

                    //Fullscreen init
                    jQuery(gallery.fullScreenOpenSelector).click(function() {
                        gallery.fullScreen();
                    })
                    jQuery('button.exitFull').unbind('click').click(function(event) {
                        gallery.exitFullscreen();
                    });

                    jQuery('.open-slide-description-button').click(function() {
                        jQuery('.slide-description').toggleClass('description-is-open');
                    });
                    jQuery('.slide-description-open').hover(function() {
                        jQuery('.slide-description').addClass('description-is-open');
                    });
                    jQuery('.slide-description').hover(function() {}, function() {
                        jQuery('.slide-description').removeClass('description-is-open');
                    });
                },
                error: function(jqXHR, textStatus, errorThrown) {
                    console.log('The following error occured: ' + textStatus, errorThrown);
                },
                complete: function(jqXHR, textStatus) {
                }

            });
        }*/
		
		var data1 = [  
   {  
      "urlMobileSmall":"http:\/\/demo.stylishthemes.co\/diva\/wp-content\/uploads\/2014\/09\/2048-11-200x123.jpg",
      "urlMobileBig":"http:\/\/demo.stylishthemes.co\/diva\/wp-content\/uploads\/2014\/09\/2048-11-500x307.jpg",
      "urlDesktopSmall":"http:\/\/demo.stylishthemes.co\/diva\/wp-content\/uploads\/2014\/09\/2048-11-500x307.jpg",
      "urlDesktopBig":"http:\/\/demo.stylishthemes.co\/diva\/wp-content\/uploads\/2014\/09\/2048-11-1400x861.jpg",
      "filter":7,
      "title":"Nature is life",
      "client":"StylishThemes",
      "likes":"",
      "liked":"",
      "link":"http:\/\/demo.stylishthemes.co\/diva\/work\/nature-is-life\/",
      "facebook":"",
      "twitter":"",
      "pinterest":"",
      "instagram":"",
      "id":157
   },
   {  
      "urlMobileSmall":"http:\/\/demo.stylishthemes.co\/diva\/wp-content\/uploads\/2014\/09\/2048-200x133.jpg",
      "urlMobileBig":"http:\/\/demo.stylishthemes.co\/diva\/wp-content\/uploads\/2014\/09\/2048-500x333.jpg",
      "urlDesktopSmall":"http:\/\/demo.stylishthemes.co\/diva\/wp-content\/uploads\/2014\/09\/2048-500x333.jpg",
      "urlDesktopBig":"http:\/\/demo.stylishthemes.co\/diva\/wp-content\/uploads\/2014\/09\/2048-1400x933.jpg",
      "filter":4,
      "title":"Nature is life II",
      "client":"StylishThemes",
      "likes":"",
      "liked":"",
      "link":"http:\/\/demo.stylishthemes.co\/diva\/work\/nature-is-life-2\/",
      "facebook":"",
      "twitter":"",
      "pinterest":"",
      "instagram":"",
      "id":163
   },
   {  
      "urlMobileSmall":"http:\/\/demo.stylishthemes.co\/diva\/wp-content\/uploads\/2014\/09\/2048-14-200x142.jpg",
      "urlMobileBig":"http:\/\/demo.stylishthemes.co\/diva\/wp-content\/uploads\/2014\/09\/2048-14-500x355.jpg",
      "urlDesktopSmall":"http:\/\/demo.stylishthemes.co\/diva\/wp-content\/uploads\/2014\/09\/2048-14-500x355.jpg",
      "urlDesktopBig":"http:\/\/demo.stylishthemes.co\/diva\/wp-content\/uploads\/2014\/09\/2048-14-1400x995.jpg",
      "filter":7,
      "title":"Life is Live",
      "client":"StylishThemes",
      "likes":"",
      "liked":"",
      "link":"http:\/\/demo.stylishthemes.co\/diva\/work\/life-is-live\/",
      "facebook":"",
      "twitter":"",
      "pinterest":"",
      "instagram":"",
      "id":168
   },
   {  
      "urlMobileSmall":"http:\/\/demo.stylishthemes.co\/diva\/wp-content\/uploads\/2014\/09\/22048-200x178.jpg",
      "urlMobileBig":"http:\/\/demo.stylishthemes.co\/diva\/wp-content\/uploads\/2014\/09\/22048-500x445.jpg",
      "urlDesktopSmall":"http:\/\/demo.stylishthemes.co\/diva\/wp-content\/uploads\/2014\/09\/22048-500x445.jpg",
      "urlDesktopBig":"http:\/\/demo.stylishthemes.co\/diva\/wp-content\/uploads\/2014\/09\/22048-1400x1246.jpg",
      "filter":6,
      "title":"Old man",
      "client":"StylishThemes",
      "likes":"",
      "liked":"",
      "link":"http:\/\/demo.stylishthemes.co\/diva\/work\/old-man\/",
      "facebook":"",
      "twitter":"",
      "pinterest":"",
      "instagram":"",
      "id":193
   },
   {  
      "urlMobileSmall":"http:\/\/demo.stylishthemes.co\/diva\/wp-content\/uploads\/2014\/09\/20248-200x196.jpg",
      "urlMobileBig":"http:\/\/demo.stylishthemes.co\/diva\/wp-content\/uploads\/2014\/09\/20248-500x490.jpg",
      "urlDesktopSmall":"http:\/\/demo.stylishthemes.co\/diva\/wp-content\/uploads\/2014\/09\/20248-500x490.jpg",
      "urlDesktopBig":"http:\/\/demo.stylishthemes.co\/diva\/wp-content\/uploads\/2014\/09\/20248.jpg",
      "filter":4,
      "title":"Che Lian Pic",
      "client":"StylishThemes",
      "likes":"",
      "liked":"",
      "link":"http:\/\/demo.stylishthemes.co\/diva\/work\/che-lian\/",
      "facebook":"",
      "twitter":"",
      "pinterest":"",
      "instagram":"",
      "id":197
   },
   {  
      "urlMobileSmall":"http:\/\/demo.stylishthemes.co\/diva\/wp-content\/uploads\/2014\/09\/1-200x177.jpg",
      "urlMobileBig":"http:\/\/demo.stylishthemes.co\/diva\/wp-content\/uploads\/2014\/09\/1-500x443.jpg",
      "urlDesktopSmall":"http:\/\/demo.stylishthemes.co\/diva\/wp-content\/uploads\/2014\/09\/1-500x443.jpg",
      "urlDesktopBig":"http:\/\/demo.stylishthemes.co\/diva\/wp-content\/uploads\/2014\/09\/1-1400x1242.jpg",
      "filter":4,
      "title":"Nature and Night",
      "client":"StylishThemes",
      "likes":"",
      "liked":"",
      "link":"http:\/\/demo.stylishthemes.co\/diva\/work\/nature-and-night\/",
      "facebook":"",
      "twitter":"",
      "pinterest":"",
      "instagram":"",
      "id":201
   },
   {  
      "urlMobileSmall":"http:\/\/demo.stylishthemes.co\/diva\/wp-content\/uploads\/2014\/09\/w2-200x161.jpg",
      "urlMobileBig":"http:\/\/demo.stylishthemes.co\/diva\/wp-content\/uploads\/2014\/09\/w2-500x403.jpg",
      "urlDesktopSmall":"http:\/\/demo.stylishthemes.co\/diva\/wp-content\/uploads\/2014\/09\/w2-500x403.jpg",
      "urlDesktopBig":"http:\/\/demo.stylishthemes.co\/diva\/wp-content\/uploads\/2014\/09\/w2-1400x1129.jpg",
      "filter":4,
      "title":"Forest and Night",
      "client":"StylishThemes",
      "likes":"",
      "liked":"",
      "link":"http:\/\/demo.stylishthemes.co\/diva\/work\/forest-and-night\/",
      "facebook":"",
      "twitter":"",
      "pinterest":"",
      "instagram":"",
      "id":208
   },
   {  
      "urlMobileSmall":"http:\/\/demo.stylishthemes.co\/diva\/wp-content\/uploads\/2014\/09\/11-200x175.jpg",
      "urlMobileBig":"http:\/\/demo.stylishthemes.co\/diva\/wp-content\/uploads\/2014\/09\/11-500x439.jpg",
      "urlDesktopSmall":"http:\/\/demo.stylishthemes.co\/diva\/wp-content\/uploads\/2014\/09\/11-500x439.jpg",
      "urlDesktopBig":"http:\/\/demo.stylishthemes.co\/diva\/wp-content\/uploads\/2014\/09\/11-1400x1230.jpg",
      "filter":6,
      "title":"Nice Woman &#038; Girls",
      "client":"StylishThemes",
      "likes":"",
      "liked":"",
      "link":"http:\/\/demo.stylishthemes.co\/diva\/work\/nice-woman\/",
      "facebook":"",
      "twitter":"",
      "pinterest":"",
      "instagram":"",
      "id":214
   },
   {  
      "urlMobileSmall":"http:\/\/demo.stylishthemes.co\/diva\/wp-content\/uploads\/2014\/09\/1s-200x154.jpg",
      "urlMobileBig":"http:\/\/demo.stylishthemes.co\/diva\/wp-content\/uploads\/2014\/09\/1s-500x386.jpg",
      "urlDesktopSmall":"http:\/\/demo.stylishthemes.co\/diva\/wp-content\/uploads\/2014\/09\/1s-500x386.jpg",
      "urlDesktopBig":"http:\/\/demo.stylishthemes.co\/diva\/wp-content\/uploads\/2014\/09\/1s-1400x1082.jpg",
      "filter":6,
      "title":"Beautyfull Girl",
      "client":"StylishThemes",
      "likes":"",
      "liked":"",
      "link":"http:\/\/demo.stylishthemes.co\/diva\/work\/beautyfull-girl\/",
      "facebook":"",
      "twitter":"",
      "pinterest":"",
      "instagram":"",
      "id":221
   },
   {  
      "urlMobileSmall":"http:\/\/demo.stylishthemes.co\/diva\/wp-content\/uploads\/2014\/09\/32-200x176.jpg",
      "urlMobileBig":"http:\/\/demo.stylishthemes.co\/diva\/wp-content\/uploads\/2014\/09\/32-500x440.jpg",
      "urlDesktopSmall":"http:\/\/demo.stylishthemes.co\/diva\/wp-content\/uploads\/2014\/09\/32-500x440.jpg",
      "urlDesktopBig":"http:\/\/demo.stylishthemes.co\/diva\/wp-content\/uploads\/2014\/09\/32-1400x1232.jpg",
      "filter":6,
      "title":"African Man",
      "client":"StylishThemes",
      "likes":"",
      "liked":"",
      "link":"http:\/\/demo.stylishthemes.co\/diva\/work\/african-man\/",
      "facebook":"",
      "twitter":"",
      "pinterest":"",
      "instagram":"",
      "id":232
   },
   {  
      "urlMobileSmall":"http:\/\/demo.stylishthemes.co\/diva\/wp-content\/uploads\/2014\/09\/12-200x171.jpg",
      "urlMobileBig":"http:\/\/demo.stylishthemes.co\/diva\/wp-content\/uploads\/2014\/09\/12-500x429.jpg",
      "urlDesktopSmall":"http:\/\/demo.stylishthemes.co\/diva\/wp-content\/uploads\/2014\/09\/12-500x429.jpg",
      "urlDesktopBig":"http:\/\/demo.stylishthemes.co\/diva\/wp-content\/uploads\/2014\/09\/12-1400x1203.jpg",
      "filter":6,
      "title":"Pretty girl",
      "client":"StylishThemes",
      "likes":"",
      "liked":"",
      "link":"http:\/\/demo.stylishthemes.co\/diva\/work\/pretty-girl\/",
      "facebook":"",
      "twitter":"",
      "pinterest":"",
      "instagram":"",
      "id":237
   },
   {  
      "urlMobileSmall":"http:\/\/demo.stylishthemes.co\/diva\/wp-content\/uploads\/2014\/09\/21-200x225.jpg",
      "urlMobileBig":"http:\/\/demo.stylishthemes.co\/diva\/wp-content\/uploads\/2014\/09\/21-500x564.jpg",
      "urlDesktopSmall":"http:\/\/demo.stylishthemes.co\/diva\/wp-content\/uploads\/2014\/09\/21-500x564.jpg",
      "urlDesktopBig":"http:\/\/demo.stylishthemes.co\/diva\/wp-content\/uploads\/2014\/09\/21.jpg",
      "filter":6,
      "title":"Nice Girl",
      "client":"StylishThemes",
      "likes":"",
      "liked":"",
      "link":"http:\/\/demo.stylishthemes.co\/diva\/work\/christian-luna-digital-artist\/",
      "facebook":"",
      "twitter":"",
      "pinterest":"",
      "instagram":"",
      "id":242
   },
   {  
      "urlMobileSmall":"http:\/\/demo.stylishthemes.co\/diva\/wp-content\/uploads\/2014\/09\/868121-200x198.jpg",
      "urlMobileBig":"http:\/\/demo.stylishthemes.co\/diva\/wp-content\/uploads\/2014\/09\/868121-500x496.jpg",
      "urlDesktopSmall":"http:\/\/demo.stylishthemes.co\/diva\/wp-content\/uploads\/2014\/09\/868121-500x496.jpg",
      "urlDesktopBig":"http:\/\/demo.stylishthemes.co\/diva\/wp-content\/uploads\/2014\/09\/868121.jpg",
      "filter":6,
      "title":"Photo for Perfection",
      "client":"StylishThemes",
      "likes":"",
      "liked":"",
      "link":"http:\/\/demo.stylishthemes.co\/diva\/work\/22\/",
      "facebook":"",
      "twitter":"",
      "pinterest":"",
      "instagram":"",
      "id":22
   },
   {  
      "urlMobileSmall":"http:\/\/demo.stylishthemes.co\/diva\/wp-content\/uploads\/2014\/09\/96998-200x162.jpg",
      "urlMobileBig":"http:\/\/demo.stylishthemes.co\/diva\/wp-content\/uploads\/2014\/09\/96998-500x407.jpg",
      "urlDesktopSmall":"http:\/\/demo.stylishthemes.co\/diva\/wp-content\/uploads\/2014\/09\/96998-500x407.jpg",
      "urlDesktopBig":"http:\/\/demo.stylishthemes.co\/diva\/wp-content\/uploads\/2014\/09\/96998.jpg",
      "filter":6,
      "title":"Nice Project",
      "client":"StylishThemes",
      "likes":"",
      "liked":"",
      "link":"http:\/\/demo.stylishthemes.co\/diva\/work\/nice-project\/",
      "facebook":"",
      "twitter":"",
      "pinterest":"",
      "instagram":"",
      "id":26
   },
   {  
      "urlMobileSmall":"http:\/\/demo.stylishthemes.co\/diva\/wp-content\/uploads\/2014\/09\/997923-200x207.jpg",
      "urlMobileBig":"http:\/\/demo.stylishthemes.co\/diva\/wp-content\/uploads\/2014\/09\/997923-500x519.jpg",
      "urlDesktopSmall":"http:\/\/demo.stylishthemes.co\/diva\/wp-content\/uploads\/2014\/09\/997923-500x519.jpg",
      "urlDesktopBig":"http:\/\/demo.stylishthemes.co\/diva\/wp-content\/uploads\/2014\/09\/997923.jpg",
      "filter":6,
      "title":"Underground Exibition",
      "client":"StylishThemes",
      "likes":"",
      "liked":"",
      "link":"http:\/\/demo.stylishthemes.co\/diva\/work\/underground-exibition\/",
      "facebook":"",
      "twitter":"",
      "pinterest":"",
      "instagram":"",
      "id":31
   },
   {  
      "urlMobileSmall":"http:\/\/demo.stylishthemes.co\/diva\/wp-content\/uploads\/2014\/09\/61249n-200x132.jpg",
      "urlMobileBig":"http:\/\/demo.stylishthemes.co\/diva\/wp-content\/uploads\/2014\/09\/61249n-500x330.jpg",
      "urlDesktopSmall":"http:\/\/demo.stylishthemes.co\/diva\/wp-content\/uploads\/2014\/09\/61249n-500x330.jpg",
      "urlDesktopBig":"http:\/\/demo.stylishthemes.co\/diva\/wp-content\/uploads\/2014\/09\/61249n.jpg",
      "filter":7,
      "title":"Antricot \u2013 PROMENADA",
      "client":"StylishThemes",
      "likes":"",
      "liked":"",
      "link":"http:\/\/demo.stylishthemes.co\/diva\/work\/antricot-promenada\/",
      "facebook":"",
      "twitter":"",
      "pinterest":"",
      "instagram":"",
      "id":40
   },
   {  
      "urlMobileSmall":"http:\/\/demo.stylishthemes.co\/diva\/wp-content\/uploads\/2014\/09\/70340-200x169.jpg",
      "urlMobileBig":"http:\/\/demo.stylishthemes.co\/diva\/wp-content\/uploads\/2014\/09\/70340-500x424.jpg",
      "urlDesktopSmall":"http:\/\/demo.stylishthemes.co\/diva\/wp-content\/uploads\/2014\/09\/70340-500x424.jpg",
      "urlDesktopBig":"http:\/\/demo.stylishthemes.co\/diva\/wp-content\/uploads\/2014\/09\/70340.jpg",
      "filter":6,
      "title":"Amelie Suri",
      "client":"StylishThemes",
      "likes":"",
      "liked":"",
      "link":"http:\/\/demo.stylishthemes.co\/diva\/work\/amelie-suri\/",
      "facebook":"",
      "twitter":"",
      "pinterest":"",
      "instagram":"",
      "id":47
   },
   {  
      "urlMobileSmall":"http:\/\/demo.stylishthemes.co\/diva\/wp-content\/uploads\/2014\/09\/99-200x137.jpg",
      "urlMobileBig":"http:\/\/demo.stylishthemes.co\/diva\/wp-content\/uploads\/2014\/09\/99-500x343.jpg",
      "urlDesktopSmall":"http:\/\/demo.stylishthemes.co\/diva\/wp-content\/uploads\/2014\/09\/99-500x343.jpg",
      "urlDesktopBig":"http:\/\/demo.stylishthemes.co\/diva\/wp-content\/uploads\/2014\/09\/99.jpg",
      "filter":7,
      "title":"Food Project",
      "client":"StylishThemes",
      "likes":"",
      "liked":"",
      "link":"http:\/\/demo.stylishthemes.co\/diva\/work\/food-project\/",
      "facebook":"",
      "twitter":"",
      "pinterest":"",
      "instagram":"",
      "id":55
   },
   {  
      "urlMobileSmall":"http:\/\/demo.stylishthemes.co\/diva\/wp-content\/uploads\/2014\/09\/73816-200x280.jpg",
      "urlMobileBig":"http:\/\/demo.stylishthemes.co\/diva\/wp-content\/uploads\/2014\/09\/73816-500x702.jpg",
      "urlDesktopSmall":"http:\/\/demo.stylishthemes.co\/diva\/wp-content\/uploads\/2014\/09\/73816-500x702.jpg",
      "urlDesktopBig":"http:\/\/demo.stylishthemes.co\/diva\/wp-content\/uploads\/2014\/09\/73816.jpg",
      "filter":6,
      "title":"Alina Project",
      "client":"StylishThemes",
      "likes":"",
      "liked":"",
      "link":"http:\/\/demo.stylishthemes.co\/diva\/work\/alina-project\/",
      "facebook":"",
      "twitter":"",
      "pinterest":"",
      "instagram":"",
      "id":72
   },
   {  
      "urlMobileSmall":"http:\/\/demo.stylishthemes.co\/diva\/wp-content\/uploads\/2014\/09\/1688-200x123.jpg",
      "urlMobileBig":"http:\/\/demo.stylishthemes.co\/diva\/wp-content\/uploads\/2014\/09\/1688-500x307.jpg",
      "urlDesktopSmall":"http:\/\/demo.stylishthemes.co\/diva\/wp-content\/uploads\/2014\/09\/1688-500x307.jpg",
      "urlDesktopBig":"http:\/\/demo.stylishthemes.co\/diva\/wp-content\/uploads\/2014\/09\/1688.jpg",
      "filter":7,
      "title":"Slatina",
      "client":"StylishThemes",
      "likes":"",
      "liked":"",
      "link":"http:\/\/demo.stylishthemes.co\/diva\/work\/22-3\/",
      "facebook":"",
      "twitter":"",
      "pinterest":"",
      "instagram":"",
      "id":74
   },
   {  
      "urlMobileSmall":"http:\/\/demo.stylishthemes.co\/diva\/wp-content\/uploads\/2014\/09\/123w-200x184.jpg",
      "urlMobileBig":"http:\/\/demo.stylishthemes.co\/diva\/wp-content\/uploads\/2014\/09\/123w-500x460.jpg",
      "urlDesktopSmall":"http:\/\/demo.stylishthemes.co\/diva\/wp-content\/uploads\/2014\/09\/123w-500x460.jpg",
      "urlDesktopBig":"http:\/\/demo.stylishthemes.co\/diva\/wp-content\/uploads\/2014\/09\/123w.jpg",
      "filter":6,
      "title":"Monica Dragut \u2013 Designer",
      "client":"StylishThemes",
      "likes":"",
      "liked":"",
      "link":"http:\/\/demo.stylishthemes.co\/diva\/work\/monica-dragut-designer\/",
      "facebook":"",
      "twitter":"",
      "pinterest":"",
      "instagram":"",
      "id":83
   }
];
		
		jQuery.each(data1, function(index, val) {
			link = gallery.checkResolution() ? val.urlDesktopSmall : val.urlMobileSmall;
			newimg = jQuery('<img>');
			newimg.data(val);
			newimg.attr('src', link);
			jQuery('#images-backup').append(newimg);
		});

		gallery.createCols();

		setTimeout(function() {
			for (var i = 1; i < gallery.numberOfCols + 1; i++) {
				gallery.autoScrollRandom[i] = (Math.floor(Math.random() * 60) + 25) / 100;
				gallery.hover[i] = false;
			};

			gallery.neight[1] = 1.25;
			gallery.neight[2] = 1.5;
			gallery.neight[3] = 2;
			gallery.neight[4] = 1.75;
			gallery.neight[5] = 1.25;
			gallery.neight[6] = 1.25;
		}, 500)

		//Filter settings
		gallery.filterEvents();

		//Fullscreen init
		jQuery(gallery.fullScreenOpenSelector).click(function() {
			gallery.fullScreen();
		})
		jQuery('button.exitFull').unbind('click').click(function(event) {
			gallery.exitFullscreen();
		});

		jQuery('.open-slide-description-button').click(function() {
			jQuery('.slide-description').toggleClass('description-is-open');
		});
		jQuery('.slide-description-open').hover(function() {
			jQuery('.slide-description').addClass('description-is-open');
		});
		jQuery('.slide-description').hover(function() {}, function() {
			jQuery('.slide-description').removeClass('description-is-open');
		});
	},
    debouncer: function(func, timeout) {
        var timeoutID, timeout = timeout || 200;
        return function() {
            var scope = this,
                args = arguments;
            clearTimeout(timeoutID);
            timeoutID = setTimeout(function() {
                func.apply(scope, Array.prototype.slice.call(args));
            }, timeout);
        }
    },
    setGalleryHeight: function() {
        setTimeout(function() {
            jQuery('#galleryContainer').css('height', jQuery(window).height() - parseInt(jQuery('header.header').css('height')));
            jQuery(".iosslider").iosSlider("update");
        }, 200);
    },
    checkResolution: function() {
        if (jQuery(window).width() < 780) {
            return false;
        } else {
            return true;
        }
    },
    fullScreen: function() {
        gallery.inFullScreen = true;
        gallery.fullScreenFadeElements = {};
        jQuery(gallery.lastFilter).click();
        if (!jQuery('#start').hasClass('hide-welcome')) {
            jQuery(gallery.startOverlaySelector).addClass('hide-welcome');
            gallery.fullScreenFadeElements['start'] = true;
        };
        setTimeout(function() {
            jQuery('header.header').addClass('full');
        }, 300);
        setTimeout(function() {
            jQuery('#galleryContainer').addClass('begin');
            if (!gallery.checkResolution()) {
                jQuery('#galleryContainer').addClass('mobile');
            }
            if (gallery.fullScreenFadeElements['start']) {
                jQuery(gallery.startOverlaySelector).css('position', 'fixed').removeClass('hide-welcome');
            }

        }, 800);
        setTimeout(function() {
            jQuery(".iosslider").iosSlider("update");
            jQuery('button.exitSlider').fadeIn();
            jQuery('button.exitFull').fadeIn();
        }, 2000)
    },

    exitFullscreen: function() {
        gallery.inFullScreen = false;
        jQuery(gallery.lastFilter).click();
        jQuery('button.exitFull').fadeOut();
        setTimeout(function() {
            jQuery('#galleryContainer').removeClass('begin').removeClass('mobile');
        }, 500)
        setTimeout(function() {
            jQuery('header.header').removeClass('full');
            jQuery(".iosslider").iosSlider("update");
            jQuery('button.exitSlider').fadeOut();
        }, 1000)
    },
    filterEvents: function() {
        jQueryfilterListSlectors = jQuery(gallery.filterClickSelector).closest('ul');
        jQuerytemplateSelector = jQuery(gallery.filterClickSelector);
        jQuery.each(gallery.filterItems, function(index, val) {
            jQuerynewItem = jQuerytemplateSelector.clone();
            jQuerynewItem.find('a').html(val).data('filter', index);
            if (gallery.activeFilter == index) {
                jQuerynewItem.addClass('active');
                gallery.lastFilter = jQuerynewItem.find('a');
            }
            jQueryfilterListSlectors.append(jQuerynewItem);
        });
        jQuerytemplateSelector.remove();

        if (gallery.showFilterOnStart) {
            jQuery(gallery.galleryContainer).append(jQuery(gallery.filterSelector));
            jQuery(gallery.filterSelector).show();
        }
        jQuery(gallery.startFilterSelector).click(function(event) {
            jQuery(gallery.filterSelector).fadeToggle();
        });
        jQuery(gallery.filterClickSelector).find('a').click(function(event) {
            gallery.filter(this);
            gallery.lastFilter = this;
        });
    },
    filter: function(elementClick) {
        if (gallery.sliderOpened) {
            slider.exitSlider();
        }
        jQuery('#filter').removeClass('filter-is-opened');
        jQuery(gallery.filterClickSelector).closest('ul').find('li').removeClass('active');
        jQuery(elementClick).parent().addClass('active');
        var mode = jQuery(elementClick).data('filter');

        jQuery(gallery.galleryContainer).find('.filterSort').remove();
        jQuery(gallery.galleryContainer).append('<div class="filterSort"></div>');

        jQuery(gallery.galleryContainer).find('#images-backup img').each(function(index, element) {
            var slideFilter = jQuery(element).data('filter') == mode;
            var newElement = jQuery(element).clone();
            newElement.data(jQuery(element).data());
            if (mode == "all") {
                jQuery(newElement).appendTo(jQuery(gallery.galleryContainer).find('.filterSort'));
            } else {
                if (slideFilter) {
                    jQuery(newElement).appendTo(jQuery(gallery.galleryContainer).find('.filterSort'));
                }
            }
        })
        jQuery('.col').css('opacity', '0');
        jQuery(gallery.filterSelector).fadeOut();
        setTimeout(function() {
            jQuery('.iosslider').iosSlider('destroy').remove();
            jQuery('.col .image').remove();
            gallery.appendImages(jQuery(gallery.galleryContainer).find('.filterSort img'));
        }, 500)

        setTimeout(function() {
            for (var i = 1; i < gallery.numberOfCols + 1; i++) {

                gallery.duplicateImages(i);

                gallery.scrollCol[i].destroy();
                gallery.scrollCol[i] = null;
                gallery.reloadIscroll(i);

                setTimeout(gallery.filterScroll(i), 500);

            };
        }, 900)

        setTimeout(function() {
            slider.startUp();
        }, 1200);

        setTimeout(function() {
            jQuery('.col').css('opacity', '1');
        }, 1500)
    },

    filterScroll: function(i) {
        gallery.scrollCol[i].scrollBy(0, 0);
    },
    refreshScroll: function(i) {
        jQuery.each(gallery.scrollCol, function(index, val) {
            gallery.scrollCol[index].refresh();
        });
    },
    reloadIscroll: function(i) {
        var deceleration = gallery.checkResolution() ? 0.004 : 0.002;
        gallery.scrollCol[i] = new IScroll('.col-' + i + ' .images_wrapper', {
            mouseWheel: true,
            infiniteElements: jQuery('.col-' + i + ' .image'),
            dataset: gallery.nullfunction,
            dataFiller: gallery.nullfunction,
            cacheSize: 1000,
            scrollX: false,
            deceleration: deceleration,
            bounce: false,
            preventDefault: true,
            preventDefaultException: true,
            click: true,
            tap: true,
            overlay: 1
        });
    },
    hoverEvents: function() {
        jQuery('.col').mousemove(function(event) {
            var colID = jQuery(this).data('id');
			
			if (gallery.scrollCol === undefined)
				return;
			
            if (gallery.scrollCol[colID].startDrag) {
                clearInterval(gallery.animateHover);
            };

            if (event.pageY > jQuery(this).offset().top && event.pageY < jQuery(this).offset().top + 130) {
                var newSpeed = event.pageY - jQuery(this).offset().top;
                newSpeed = newSpeed - 130;
                gallery.lastSpeed = -newSpeed;
                gallery.leaveCol = false;

                if (!gallery.enterCol && !gallery.scrollCol[colID].startDrag) {
                    gallery.lastAnimation = "down";
                    gallery.animateHover = setInterval(function() {
                        gallery.animateDown(colID, gallery.lastSpeed / 20, gallery.defaultAnimationSpeed, true);
                    }, gallery.defaultAnimationSpeed - 1);
                    gallery.enterCol = true;
                }
            } else if (event.pageY > (jQuery(this).offset().top + jQuery(this).height()) - 130 && event.pageY < jQuery(this).offset().top + jQuery(this).height()) {
                var newSpeed = event.pageY - (jQuery(this).offset().top + jQuery(this).height()) + 130;
                gallery.lastSpeed = newSpeed;
                gallery.leaveCol = false;

                if (!gallery.enterCol && !gallery.scrollCol[colID].startDrag) {
                    gallery.lastAnimation = "up";
                    gallery.enterCol = true;
                    gallery.animateHover = setInterval(function() {
                        gallery.animateUp(colID, gallery.lastSpeed / 20, gallery.defaultAnimationSpeed, true);
                    }, gallery.defaultAnimationSpeed - 1);
                }
            } else {
                if (!gallery.leaveCol && !gallery.scrollCol[colID].startDrag) {
                    gallery.leaveCol = true;
                    gallery.enterCol = false;
                    gallery.exitAnimation(colID);
                }
            }
        });
        jQuery('.col').mouseleave(function(event) {
            var colID = jQuery(this).data('id');
            gallery.enterCol = false;
            gallery.leaveCol = true;
            gallery.exitAnimation(colID);
        });

    },
    exitAnimation: function(colID) {
        clearInterval(gallery.animateHover);
        if (gallery.lastAnimation == "up") {
            gallery.animateUp(colID, 20, 500, false);
        } else {
            gallery.animateDown(colID, 20, 500, false);
        }

    },
    overlayStart: function() {
        if (gallery.showOverlayOnStart && !gallery.startWithHash()) {
            if (gallery.checkResolution()) {
                gallery.canceledAnimation = false;
                setTimeout(function() {
                    if (!gallery.canceledAnimation) {
                        gallery.autoScrollVar = setInterval(function() {
                            gallery.autoScroll();
                        }, gallery.defaultAnimationSpeed - 1)
                    }
                }, gallery.firstScrollDuration)
            }
            jQuery(gallery.startOverlayExitSelector).click(function(event) {
                if (gallery.checkResolution()) {
                    gallery.canceledAnimation = true;
                    clearInterval(gallery.autoScrollVar);
                }
                jQuery(gallery.startOverlaySelector).addClass('hide-welcome');
            });
        }
    },
    startWithHash: function() {
        var hash = gallery.hash;
        var hashStart = hash.indexOf("#gallery-photo-") > -1;
        var slideId = hash.replace("#gallery-photo-", "");
        var found = false;
        jQuery('.col .image').each(function(id, val) {
            if (jQuery(val).data('id') == slideId && !found) {
                jQuery(val).trigger('tap');
                found = true;
            }
        })
        return hashStart;
    },
    autoScroll: function() {
        for (var i = 1; i < gallery.numberOfCols + 1; i++) {
            gallery.animateUp(i, gallery.autoScrollRandom[i], gallery.defaultAnimationSpeed, false);
        };
    },
    createCols: function() {
        for (i = 1; i < gallery.numberOfCols + 1; i++) {

            var col = jQuery("<div>");

            images_wrapper = jQuery("<div>");
            images_wrapper.addClass('images_wrapper').append('<div class="images"></div>');

            jQuery(col).addClass('col').data('id', i).addClass('col-' + i).addClass('col-type-' + gallery.numberOfCols).append(jQuery(images_wrapper));

            jQuery(gallery.galleryContainer).append(jQuery(col));
        }

        gallery.appendImages(jQuery('#images-backup img'));

        if (gallery.loaderSinglePage) {
            jQuery(".pageloader").css({
                'background-color': 'transparent',
                'display': 'block'
            });
        }

        jQuery('.col').imagesLoaded(function() {
            setTimeout(function() {

                for (i = 1; i < gallery.numberOfCols + 1; i++) {
                    gallery.reloadIscroll(i);
                }

                setTimeout(function() {

                    for (var i = 1; i < gallery.numberOfCols + 1; i++) {
                        gallery.scrollCol[i].destroy();
                        gallery.scrollCol[i] = null;
                        gallery.reloadIscroll(i);
                    };

                    setTimeout(function() {
                        for (i = 1; i < gallery.numberOfCols + 1; i++) {
                            gallery.scrollCol[i].scrollTo(0, -3000, 500);
                        }
                        jQuery('.col').css('opacity', '1');

                        if (navigator.userAgent.match(/iPad/i) != null || navigator.userAgent.match(/iPhone/i) != null) {
                            jQuery('.iosslider button.next, .iosslider button.prev').addClass('small');
                        }
                        if (navigator.userAgent.match(/iPhone/i) != null) {
                            jQuery('.iosslider button.next, .iosslider button.prev').addClass('iphone');
                        }
                        slider.startUp();
                        setTimeout(function() {
                            jQuery(".open-fullscreen").parent().fadeIn();
                            jQuery(".open-filter").parent().fadeIn();
                            gallery.overlayStart();
                            jQuery(".pageloader").css('display', 'none');
                            jQuery('#galleryContainer').fadeTo(1000, 1);
                            jQuery(gallery.startOverlaySelector).removeClass('transparent-welcome');
                            if (gallery.sliderFirstRun) {
                                if (gallery.startWithHash()) {
                                    gallery.sliderFirstRun = false;
                                    jQuery(gallery.startOverlaySelector).addClass('hide-welcome');
                                };
                            }
                            jQuery(window).unbind('resize').resize(gallery.debouncer(function(e) {
                                for (var i = 1; i < gallery.numberOfCols + 1; i++) {
                                    gallery.scrollCol[i].scrollBy(0, -10000, 1000);

                                };
                            }));
                        }, 900);
                    }, 500);
                }, 1000);
            }, 300);
        });

        //Hover Events
        if (gallery.checkResolution()) {
            gallery.hoverEvents();
        }
    },
    nullfunction: function() {

    },
    appendImages: function(images) {

        var finished = false;

        jQuery('#images').empty();

        images.each(function(indexImage, image) {
            jQuery(image).attr('data-slide', jQuery(image).data('id'));
            jQueryimgForSlide = jQuery(image).clone().data(jQuery(image).data());
            jQueryimgForSlide.appendTo('#images');
        });

        var crrcol = 0;
        jQuery.each(images, function(index, el) {
            crrcol++;
            gallery.appendImage(el, crrcol);
            if (crrcol == gallery.numberOfCols) {
                crrcol = 0;
                finished = true;
            }
        });

        if (!finished) {
            var crrimage = 0;
            for (var i = crrcol + 1; i < gallery.numberOfCols + 1; i++) {
                if (crrimage = images.length - 1) {
                    crrimage = 0;
                }
                gallery.appendImage(images[crrimage], i);
            };
        }

        for (var i = 1; i < gallery.numberOfCols + 1; i++) {
            if (jQuery('.col-' + i + ' .images .image').length < 2) {
                gallery.duplicateImages(i);
                gallery.duplicateImages(i);
                gallery.duplicateImages(i);
            } else if (jQuery('.col-' + i + ' .images .image').length < 3) {
                gallery.duplicateImages(i);
                gallery.duplicateImages(i);
            } else if (jQuery('.col-' + i + ' .images .image').length < 4) {
                gallery.duplicateImages(i);
                gallery.duplicateImages(i);
            } else if (jQuery('.col-' + i + ' .images .image').length < 5) {
                gallery.duplicateImages(i);
            }

        };
    },
    appendImage: function(el, crrcol) {
        var newImg = jQuery('<div>');
        var data = jQuery(el).data();

        if (!data.liked) {
            var code = "fa-heart-o";
        } else {
            var code = "fa-heart";
        }

        if (gallery.likeSimbolShow) {
            var likeCode = '<div class="like-photo"><i class="fa ' + code + '"></i><span class="likes">' + data.likes + '</span></div>';
        } else {
            var likeCode = '';
        }

        var description = '<div class="description"><h3>' + data.title + '</h3><p>' + data.client + '</p>' + likeCode + '</div>';

        newImg.addClass('image o').attr('data-slide', data.slide).append(jQuery(el).clone()).append(description).data(data);

        jQuery('.col-' + crrcol + ' .images').append(jQuery(newImg));

        jQuery(newImg).find('i.fa.fa-heart-o').unbind('click').click(function(e) {
            e.preventDefault();
            e.stopPropagation();
            var currentLikes = Math.floor(jQuery(this).parent().find('.likes').text());
            jQuery(this).unbind('click').removeClass('fa-heart-o').addClass('fa-heart').parent().find('.likes').html(currentLikes + 1);
            var fullpath = jQuery(this).closest('.image').find('img').attr('src');
            gallery.likeFunction(fullpath.replace(/^.*[\\\/]/, ''));
        });
    },
    duplicateImages: function(duplicateColID) {
        gallery.cloneNumber++;
        jQuery('.col-' + duplicateColID).find('.image').each(function(cloneId, clone) {
            var newClone = jQuery(clone).clone();
            jQuery(newClone).removeClass('o').attr('data-slide', jQuery(clone).data('slide')).data(jQuery(clone).data());
            jQuery('.col-' + duplicateColID).find('.images').append(newClone);
        });
    },
    animateUp: function(colID, distance, time, neigh) {

        gallery.scrollCol[colID].scrollBy(0, -distance, time, IScroll.utils.ease.circular);

        if (neigh) {
            var selectors = gallery.getSelectors(colID);
            jQuery.each(selectors, function(index, val) {
                distance = distance / gallery.neight[val];
                gallery.scrollCol[val].scrollBy(0, -distance, time, IScroll.utils.ease.circular);

            });
        }
    },
    animateDown: function(colID, distance, time, neigh) {
        distance = Math.floor(distance);

        if (gallery.scrollCol[colID].y + distance <= 1) {
            gallery.scrollCol[colID].scrollBy(0, distance, time, IScroll.utils.ease.circular);
            if (neigh) {
                var selectors = gallery.getSelectors(colID);
                jQuery.each(selectors, function(index, val) {
                    distance = distance / gallery.neight[val];
                    if (gallery.scrollCol[val].y + distance <= 1) {
                        gallery.scrollCol[val].scrollBy(0, distance, time, IScroll.utils.ease.circular);
                    }
                });
            }
        }

    },
    getSelectors: function(colID) {
        if (colID == 1) {
            if (gallery.numberOfCols >= 3) {
                var selectors = [colID + 1, colID + 2];
            } else {
                var selectors = [colID + 1];
            }

        } else if (colID == gallery.numberOfCols) {
            if (gallery.numberOfCols >= 3) {
                var selectors = [gallery.numberOfCols - 1, gallery.numberOfCols - 2];
            } else {
                var selectors = [gallery.numberOfCols - 1];
            }
        } else {
            var selectors = [colID - 1, colID + 1];
        }
        return selectors;
    },
    randomImages: function() {
        return (Math.round(Math.random()) - 0.5);
    }
}

var slider = {
    startUp: function() {

        slider.createTemplate();
        slider.startIosSlider();

        jQuery('.images .image').unbind('tap').on('tap', function() {
            slider.clickOnImage(this);
        });

    },
    clickOnImage: function(otherthis) {

        gallery.clickedEffect = true;
        gallery.sliderOpened = true;

        var id = jQuery(otherthis).data('id');
        document.location.hash = "gallery-photo-" + id;

        jQuery('a.open-menu .text').fadeTo(300, 0, function() {
            jQuery(this).html('close').fadeTo(300, 1);
        })

        jQuery('a.open-menu').removeClass('collapsed').unbind('click').click(function(event) {
            slider.exitSlider();
        });

        jQuery(gallery.startFilterSelector).parent().fadeOut(301);
        jQuery(gallery.fullScreenOpenSelector).parent().fadeTo(300, 0, function() {
            jQuery(this).after(jQuery(gallery.startFilterSelector).parent()).fadeTo(300, 1);
        });

        var slide = jQuery(otherthis).data('slide');
        var col = jQuery(otherthis).closest('.col').data('id');
        var crrSlide = jQuery(".slider .slide[data-slide=" + slide + "] img");
        var goTo = jQuery(".slider .slide[data-slide=" + slide + "]").prevAll().length + 1;
        var imageItem = jQuery('.col-' + col + ' .image.o[data-slide=' + slide + ']')[0];
        var originalImage = otherthis;


        jQuery('.iosslider').iosSlider('goToSlide', goTo, 10);
        jQuery('.iosslider').data().args.settings.autoSlideTransTimer = 1000;
        jQuery('.slider .slide:nth-of-type(' + slide + ')').addClass('active');

        setTimeout(function() {
            jQuery('.carousel-back').addClass('opened');

        }, 200)

        setTimeout(function() {

            if (gallery.checkResolution()) {
                jQueryclone = jQuery('<img>');
                jQueryclone.addClass('slider-start-clone').css('z-index', '12345').appendTo('body').attr('src', jQuery(originalImage).find('img').attr('src'));

                jQueryclone.css({
                    width: jQuery(originalImage).width(),
                    height: jQuery(originalImage).height(),
                    left: jQuery(originalImage).offset().left,
                    top: jQuery(originalImage).offset().top,
                });

                jQueryclone.css({
                    left: jQuery(crrSlide).offset().left,
                    top: jQuery(crrSlide).offset().top,
                    width: jQuery(crrSlide).width(),
                    height: jQuery(crrSlide).height(),
                })
            }

            jQuery(gallery.carouselContainer).css({
                opacity: 1,
                zIndex: 20
            });

            setTimeout(function() {

                jQuery(gallery.carouselContainer).find('.iosslider').css({
                    zIndex: 36,
                    opacity: 1
                })

                setTimeout(function() {
                    jQuery('.slider-start-clone').css('opacity', 0);
                    jQuery('.slide-description').addClass('description-is-open');
                    jQuery('.iosslider').click(function(event) {
                        jQuery('.slide-description').removeClass('description-is-open');
                        jQuery('.iosslider').unbind('click');
                    });
                    if (gallery.checkResolution()) {
                        gallery.scrollCol[col].scrollToElement(imageItem, 300);
                    }
                    setTimeout(function() {
                        jQuery('.slider-start-clone').remove();
                    }, 300);
                }, 500);
            }, 500);
        }, 100)
    },
    createTemplate: function() {
        jQueryiosslider = jQuery("<div>");
        jQueryslider = jQuery("<div>")
        jQueryslider.addClass('slider');
        jQuery('#images img').each(function(index, el) {
            jQueryslide = jQuery('<div>');
            jQueryslide.addClass('slide').attr('data-slide', jQuery(el).data('id')).data(jQuery(el).data());
            jQueryphoto = jQuery('<img>');
            link = gallery.checkResolution() ? jQuery(el).data('urlDesktopBig') : jQuery(el).data('urlMobileBig');
            jQueryphoto.addClass('photo').attr('src', link);
            jQueryslide.append(jQueryphoto).appendTo(jQueryslider);
        });
        jQueryiosslider.addClass('iosslider').append(jQueryslider).append('<button class="next"><i class="fa fa-angle-right"></i></button><button class="prev"><i class="fa fa-angle-left"></i></button>');
        jQueryiosslider.append('<button class="exitSlider"><i class="fa fa-times"></i><button>');
        jQueryiosslider.appendTo(gallery.carouselContainer);
    },
    startIosSlider: function() {
        jQuery('.iosslider').iosSlider({
            snapToChildren: true,
            desktopClickDrag: true,
            navPrevSelector: jQuery('.iosslider button.prev'),
            navNextSelector: jQuery('.iosslider button.next'),
            infiniteSlider: true,
            snapSlideCenter: false,
            keyboardControls: true,
            onSlideChange: function(args) {
                slider.chageSlideDescription(args);
                if (!gallery.clickedEffect && gallery.checkResolution()) {
                    var slide = args.currentSlideNumber;
                    var crrSlide = jQuery(".slider .slide:nth-of-type(" + slide + ")").data('slide');
                    var col = jQuery('[data-slide=' + crrSlide + ']').closest('.col').data('id');
                    var imageItem = jQuery('.col-' + col + ' .image.o[data-slide=' + crrSlide + ']')[0];
                    gallery.scrollCol[col].scrollToElement(imageItem, 300);
                }
                gallery.clickedEffect = false;
            },
            onSliderLoaded: function(args) {
                jQuery(".slider .slide:nth-of-type(1)").addClass('active');
                setTimeout(function() {
                    slider.setImageOrientation();
                }, 1000)
                slider.chageSlideDescription(args);
                document.location.hash = "";
            },
        });

        jQuery("button.exitSlider").unbind('click').click(function(event) {
            slider.exitSlider();
        });

        // Exit slider 
        jQuery(document).unbind('keyup').keyup(function(event) {
            if (event.keyCode == 27) {
                event.preventDefault();
                if (gallery.sliderOpened) {
                    slider.exitSlider();
                } else {
                    if (gallery.inFullScreen) {
                        gallery.exitFullscreen();
                    }
                }
            }
        });

        jQuery('.slide').click(function() {
            jQuery('.iosslider').iosSlider('nextSlide', 500);
        })

        jQuery(gallery.carouselExitSelector).click(function() {
            slider.exitSlider();
        });

    },
    chageSlideDescription: function(args) {
        jQuery(".slider .slide").removeClass('active');
        jQuery(".slider .slide:nth-of-type(" + args.currentSlideNumber + ")").addClass('active');
        var data = jQuery(args.currentSlideObject).data();
        jQuery('.iss .slide-description > h2').html(data.title);
        jQuery('.iss .slide-description > p').html(data.client);
        jQuery('.iss .slide-description > a').attr('href', data.link !== "" && data.link !== " " ? data.link : '#');

        var id = data.id;
        document.location.hash = "gallery-photo-" + id;

        jQuery.each(jQuery('.iss div.slide-description > nav > ul > li > a > i'), function(index, el) {
            var social = jQuery(el).attr('class').replace('fa fa-', '');
            if (typeof data[social] !== "undefined" && data[social].length > 3) {
                jQuery(el).parent().attr('href', data[social]);
                jQuery(el).closest('li').css('display', 'inline');
            } else {
                jQuery(el).closest('li').css('display', 'none');
            }
        })
    },
    setImageOrientation: function() {
        jQuery(".slider .slide .photo").each(function(index, val) {
            if (jQuery(val).width() > jQuery(val).height()) {
                jQuery(val).removeClass('portrait').addClass('landscape')
                if (jQuery(val).height() > jQuery(gallery.galleryContainer).height()) {
                    jQuery(val).removeClass('landscape').addClass('portrait');
                }
            } else {
                jQuery(val).removeClass('landscape').addClass('portrait');
                if (jQuery(val).width() > jQuery(gallery.galleryContainer).width()) {
                    jQuery(val).removeClass('portrait').addClass('landscape');
                }
            }
        });
    },
    exitSlider: function() {
        gallery.sliderOpened = false;

        jQuery('.carousel-back').removeClass('opened');

        jQuery('a.open-menu .text').fadeTo(300, 0, function() {
            jQuery(this).html('menu').fadeTo(300, 1);
        })
        jQuery('a.open-menu').addClass('collapsed');

        jQuery(gallery.fullScreenOpenSelector).parent().fadeTo(300, 0, function() {
            jQuery(this).after(jQuery(gallery.startFilterSelector).parent()).fadeTo(300, 1);
            jQuery(gallery.startFilterSelector).parent().fadeIn(301);
        });

        var slide = jQuery('.iosslider').data('args').currentSlideNumber;
        var slideId = jQuery(".slider .slide:nth-of-type(" + slide + ")").data('slide');
        var crrSlide = jQuery(".slider .slide:nth-of-type(" + slide + ") img");
        var col = jQuery('[data-slide=' + slideId + ']').closest('.col').data('id');
        var imageItem = jQuery('.col-' + col + ' .image.o[data-slide=' + slideId + ']')[0];

        if (gallery.checkResolution()) {
            jQueryclone = jQuery('<img>');
            jQueryclone.addClass('slider-start-clone').css('z-index', '12345').appendTo('body').attr('src', jQuery(imageItem).find('img').attr('src'));


            jQueryclone.css({
                left: jQuery(crrSlide).offset().left,
                top: jQuery(crrSlide).offset().top,
                width: jQuery(crrSlide).width(),
                height: jQuery(crrSlide).height(),
            })

            jQueryclone.css({
                width: jQuery(imageItem).find('img').width(),
                height: jQuery(imageItem).find('img').height(),
                left: jQuery(imageItem).find('img').offset().left,
                top: jQuery(imageItem).find('img').offset().top,
            });
            if (jQuery(gallery.galleryContainer).parent().hasClass('black-and-white-images')) {
                jQueryclone.addClass('black-and-white');
            }
            setTimeout(function() {
                jQueryclone.css({
                    opacity: 0
                });
            }, 310);
        }

        jQuery(gallery.carouselContainer).css({
            opacity: 0,
        })

        setTimeout(function() {
            jQuery('.slide-description').removeClass('description-is-open');
            jQuery('.iosslider').unbind('click');
            jQuery(gallery.carouselContainer).find('.iosslider').css({
                zIndex: 1,
                opacity: 0
            });
            setTimeout(function() {
                jQuery(gallery.carouselContainer).css({
                    zIndex: -1,
                })
            }, 200)
            jQuery('.slider-start-clone').remove();
        }, 600)

        slider.initializeMenuButton();
    },
    initializeMenuButton: function() {
        jQuery('a.open-menu').unbind('click').click(function(e) {
            e.preventDefault();
            jQuery('a.open-menu').toggleClass('collapsed');
            jQuery('.diva-menu').toggleClass('open');
            jQuery('.diva-menu-container').toggleClass('open');
            jQuery('.diva-share').removeClass('open');
            jQuery('a.open-share').removeClass('collapsed');
            jQuery('#filter').fadeOut();
        });
    }
}

jQuery(document).ready(function(jQuery) {
    jQuery(".open-fullscreen").parent().css('display', 'none');
    jQuery(".close-carousel").parent().css('display', 'none');
    jQuery(".open-filter").parent().css('display', 'none');
	
	gallery.StartUp({
            galleryContainer: "#gallery",
            startOverlaySelector: "#start",
            startOverlayExitSelector: "#start .show-me , .footer-gallery-overlay",
            showOverlayOnStart: true,
            filterSelector: '#filter',
            startFilterSelector: '.open-filter',
            showFilterOnStart: false,
            filterClickSelector: '#filter ul li',
            fullScreenOpenSelector: jQuery('.open-fullscreen'),
            carouselContainer: ".iss",
            carouselExitSelector: jQuery(".close-carousel").parent(),
            carouselFilterSelector: jQuery(".open-filter").parent(),
            likeSimbolShow: false,
            imagesSource: "http://demo.stylishthemes.co/diva/wp-content/themes/diva-final/ajax/gallery-250.json" ,
            filterItems: {"4":"NATURE","7":"LANDSCAPE","6":"PORTRAIT","all":"ALL"} ,
            loaderSinglePage: "true",
            galleryPageID: 250
        });
});

/*
jQuery(window).load(function() {
    setTimeout(function() {
        
    }, 500);
});
*/