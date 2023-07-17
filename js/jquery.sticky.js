!function(t){"function"==typeof define&&define.amd?define(["jquery"],t):"object"==typeof module&&module.exports?module.exports=t(require("jquery")):t(jQuery)}(function(t){var e=Array.prototype.slice,i=Array.prototype.splice,n={topSpacing:0,bottomSpacing:0,className:"is-sticky",wrapperClassName:"sticky-wrapper",center:!1,getWidthFrom:"",widthFromWrapper:!0,responsiveWidth:!1,zIndex:"inherit"},s=t(window),r=t(document),o=[],c=s.height(),p=function(){for(var e=s.scrollTop(),i=r.height(),n=i-c,p=e>n?n-e:0,a=0,l=o.length;a<l;a++){var h=o[a],d=h.stickyWrapper.offset().top-h.topSpacing-p;if(h.stickyWrapper.css("height",h.stickyElement.outerHeight()),e<=d)null!==h.currentTop&&(h.stickyElement.css({width:"",position:"",top:"","z-index":""}),h.stickyElement.parent().removeClass(h.className),h.stickyElement.trigger("sticky-end",[h]),h.currentTop=null);else{var u,g=i-h.stickyElement.outerHeight()-h.topSpacing-h.bottomSpacing-e-p;g<0?g+=h.topSpacing:g=h.topSpacing,h.currentTop!==g&&(h.getWidthFrom?(padding=h.stickyElement.innerWidth()-h.stickyElement.width(),u=t(h.getWidthFrom).width()-padding||null):h.widthFromWrapper&&(u=h.stickyWrapper.width()),null==u&&(u=h.stickyElement.width()),h.stickyElement.css("width",u).css("position","fixed").css("top",g).css("z-index",h.zIndex),h.stickyElement.parent().addClass(h.className),null===h.currentTop?h.stickyElement.trigger("sticky-start",[h]):h.stickyElement.trigger("sticky-update",[h]),h.currentTop===h.topSpacing&&h.currentTop>g||null===h.currentTop&&g<h.topSpacing?h.stickyElement.trigger("sticky-bottom-reached",[h]):null!==h.currentTop&&g===h.topSpacing&&h.currentTop<g&&h.stickyElement.trigger("sticky-bottom-unreached",[h]),h.currentTop=g);var y=h.stickyWrapper.parent();h.stickyElement.offset().top+h.stickyElement.outerHeight()>=y.offset().top+y.outerHeight()&&h.stickyElement.offset().top<=h.topSpacing?h.stickyElement.css("position","absolute").css("top","").css("bottom",0).css("z-index",""):h.stickyElement.css("position","fixed").css("top",g).css("bottom","").css("z-index",h.zIndex)}}},a=function(){c=s.height();for(var e=0,i=o.length;e<i;e++){var n=o[e],r=null;n.getWidthFrom?n.responsiveWidth&&(r=t(n.getWidthFrom).width()):n.widthFromWrapper&&(r=n.stickyWrapper.width()),null!=r&&n.stickyElement.css("width",r)}},l={init:function(e){return this.each(function(){var i=t.extend({},n,e),s=t(this),r=s.attr("id"),c=r?r+"-"+n.wrapperClassName:n.wrapperClassName,p=t("<div></div>").attr("id",c).addClass(i.wrapperClassName);s.wrapAll(function(){if(0==t(this).parent("#"+c).length)return p});var a=s.parent();i.center&&a.css({width:s.outerWidth(),marginLeft:"auto",marginRight:"auto"}),"right"===s.css("float")&&s.css({float:"none"}).parent().css({float:"right"}),i.stickyElement=s,i.stickyWrapper=a,i.currentTop=null,o.push(i),l.setWrapperHeight(this),l.setupChangeListeners(this)})},setWrapperHeight:function(e){var i=t(e),n=i.parent();n&&n.css("height",i.outerHeight())},setupChangeListeners:function(t){window.MutationObserver?new window.MutationObserver(function(e){(e[0].addedNodes.length||e[0].removedNodes.length)&&l.setWrapperHeight(t)}).observe(t,{subtree:!0,childList:!0}):window.addEventListener?(t.addEventListener("DOMNodeInserted",function(){l.setWrapperHeight(t)},!1),t.addEventListener("DOMNodeRemoved",function(){l.setWrapperHeight(t)},!1)):window.attachEvent&&(t.attachEvent("onDOMNodeInserted",function(){l.setWrapperHeight(t)}),t.attachEvent("onDOMNodeRemoved",function(){l.setWrapperHeight(t)}))},update:p,unstick:function(e){return this.each(function(){for(var e=t(this),n=-1,s=o.length;s-- >0;)o[s].stickyElement.get(0)===this&&(i.call(o,s,1),n=s);-1!==n&&(e.unwrap(),e.css({width:"",position:"",top:"",float:"","z-index":""}))})}};window.addEventListener?(window.addEventListener("scroll",p,!1),window.addEventListener("resize",a,!1)):window.attachEvent&&(window.attachEvent("onscroll",p),window.attachEvent("onresize",a)),t.fn.sticky=function(i){return l[i]?l[i].apply(this,e.call(arguments,1)):"object"!=typeof i&&i?void t.error("Method "+i+" does not exist on jQuery.sticky"):l.init.apply(this,arguments)},t.fn.unstick=function(i){return l[i]?l[i].apply(this,e.call(arguments,1)):"object"!=typeof i&&i?void t.error("Method "+i+" does not exist on jQuery.sticky"):l.unstick.apply(this,arguments)},t(function(){setTimeout(p,0)})});
