"use strict";
!(function () {
  var a,
    t = navigator.userAgent.toLowerCase(),
    e = new Date(),
    r = $(document),
    o = $(window),
    n = $("html"),
    i = $("body"),
    l = n.hasClass("desktop"),
    s =
      -1 !== t.indexOf("msie")
        ? parseInt(t.split("msie")[1], 10)
        : -1 !== t.indexOf("trident")
        ? 11
        : -1 !== t.indexOf("edge") && 12,
    d = /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(
      navigator.userAgent
    ),
    c = !1,
    g = !1,
    u = {
      bootstrapModalDialog: $(".modal"),
      bootstrapTabs: $(".tabs-custom"),
      rdNavbar: $(".rd-navbar"),
      materialParallax: $(".parallax-container"),
      rdMailForm: $(".rd-mailform"),
      rdInputLabel: $(".form-label"),
      regula: $("[data-constraints]"),
      wow: $(".wow"),
      owl: $(".owl-carousel"),
      swiper: $(".swiper-slider"),
      isotope: $(".isotope"),
      radio: $("input[type='radio']"),
      checkbox: $("input[type='checkbox']"),
      customToggle: $("[data-custom-toggle]"),
      counter: $(".counter"),
      preloader: $(".preloader"),
      captcha: $(".recaptcha"),
      scroller: $(".scroll-wrap"),
      lightGallery: $('[data-lightgallery="group"]'),
      lightGalleryItem: $('[data-lightgallery="item"]'),
      lightDynamicGalleryItem: $('[data-lightgallery="dynamic"]'),
      copyrightYear: $(".copyright-year"),
      maps: $(".google-map-container"),
      particlesJs: $("#particles-js"),
    };
  function p(a) {
    return (
      !!g ||
      (a.offset().top + a.outerHeight() >= o.scrollTop() &&
        a.offset().top <= o.scrollTop() + o.height())
    );
  }
  $(function () {

    function m(a, t) {
      var e,
        r = a.attr("data-" + t);
      if (r) {
        if ((e = r.match(/(px)|(%)|(vh)|(vw)$/i)).length)
          switch (e[0]) {
            case "px":
              return parseFloat(r);
            case "vh":
              return o.height() * (parseFloat(r) / 100);
            case "vw":
              return o.width() * (parseFloat(r) / 100);
            case "%":
              return a.width() * (parseFloat(r) / 100);
          }
      }
    }
    function h(a) {
      for (
        var t,
          e = $(a.slides[a.previousIndex]),
          r = $(a.slides[a.activeIndex]),
          o = e.find("video"),
          n = 0;
        n < o.length;
        n++
      )
        o[n].pause();
      (t = r.find("video")).length && t.get(0).play();
    }
    function f(a) {
      for (
        var t,
          e,
          r,
          o,
          n = $(a.container).find("[data-caption-animate]"),
          i = $(a.slides[a.activeIndex]).find("[data-caption-animate]"),
          l = 0;
        l < n.length;
        l++
      )
        (o = $(n[l]))
          .removeClass("animated")
          .removeClass(o.attr("data-caption-animate"))
          .addClass("not-animated");
      for (
        var s = function (a, t) {
            return function () {
              a
                .removeClass("not-animated")
                .addClass(a.attr("data-caption-animate"))
                .addClass("animated"),
                t && a.css("animation-duration", t + "ms");
            };
          },
          l = 0;
        l < i.length;
        l++
      )
        (t = (r = $(i[l])).attr("data-caption-delay")),
          (e = r.attr("data-caption-duration")),
          g
            ? r.removeClass("not-animated")
            : t
            ? setTimeout(s(r, e), parseInt(t, 10))
            : s(r, e);
    }

    function b(a, t) {
      g ||
        $(a).lightGallery({
          thumbnail: "false" !== $(a).attr("data-lg-thumbnail"),
          selector: "[data-lightgallery='item']",
          autoplay: "true" === $(a).attr("data-lg-autoplay"),
          pause: parseInt($(a).attr("data-lg-autoplay-delay")) || 5e3,
          addClass: t,
          mode: $(a).attr("data-lg-animation") || "lg-slide",
          loop: "false" !== $(a).attr("data-lg-loop"),
        });
    }

    if (
      ((g = window.xMode),
      u.preloader.length &&
        !g &&
        pageTransition({
          target: document.querySelector(".page"),
          delay: 100,
          duration: 500,
          classIn: "fadeIn",
          classOut: "fadeOut",
          classActive: "animated",
          conditions: function (a, t) {
            return (
              !/(\#|callto:|tel:|mailto:|:\/\/)/.test(t) &&
              !a.currentTarget.hasAttribute("data-lightgallery")
            );
          },
          onTransitionStart: function (a) {
            setTimeout(function () {
              u.preloader.removeClass("loaded");
            }, 0.75 * a.duration);
          },
          onReady: function () {
            u.preloader.addClass("loaded"), (c = !0);
          },
        }),
      u.captcha.length &&
        $.getScript(
          "//www.google.com/recaptcha/api.js?onload=onloadCaptchaCallback&render=explicit&hl=en"
        ),
      navigator.platform.match(/(Mac)/i) && n.addClass("mac-os"),
      s &&
        (12 === s && n.addClass("ie-edge"),
        11 === s && n.addClass("ie-11"),
        s < 10 && n.addClass("lt-ie-10"),
        s < 11 && n.addClass("ie-10")),
      u.bootstrapModalDialog.length)
    ) {
      $("[data-toggle=modal]").on("click", function () {
        console.log(321321), n.addClass("html-modal-open");
      });
      for (var k, C, _, x = 0; x < u.bootstrapModalDialog.length; x++) {
        var A = $(u.bootstrapModalDialog[x]);
        A.on(
          "hidden.bs.modal",
          $.proxy(function () {
            var a = $(this),
              t = a.find("video"),
              e = a.find("iframe");
            if ((t.length && t[0].pause(), e.length)) {
              var r = e.attr("src");
              e.attr("src", "").attr("src", r);
            }
          }, A)
        );
      }
    }
    if (u.bootstrapTabs.length)
      for (var x = 0; x < u.bootstrapTabs.length; x++) {
        var M = $(u.bootstrapTabs[x]);
        M.find(".slick-slider").length &&
          M.find(".tabs-custom-list > li > a").on(
            "click",
            $.proxy(function () {
              var a = $(this);
              setTimeout(
                function () {
                  a.find(".tab-content .tab-pane.active .slick-slider").slick(
                    "setPosition"
                  );
                },
                g ? 1500 : 300
              );
            }, M)
          );
      }

      for (var x = 0; x < u.lightGallery.length; x++) b(u.lightGallery[x]);
    if (u.lightGalleryItem.length) {
      for (var I = [], T = 0; T < u.lightGalleryItem.length; T++)
        $(u.lightGalleryItem[T]).parents(".owl-carousel").length ||
          $(u.lightGalleryItem[T]).parents(".swiper-slider").length ||
          $(u.lightGalleryItem[T]).parents(".slick-slider").length ||
          I.push(u.lightGalleryItem[T]);
      u.lightGalleryItem = I;
      for (var x = 0; x < u.lightGalleryItem.length; x++)
        w(u.lightGalleryItem[x]);
    }
    if (u.lightDynamicGalleryItem.length)
      for (var x = 0; x < u.lightDynamicGalleryItem.length; x++)
        y(u.lightDynamicGalleryItem[x]);
    if (u.owl.length)
      for (var x = 0; x < u.owl.length; x++) {
        var N = $(u.owl[x]);
        (u.owl[x].owl = N), initOwlCarousel(N);
      }
    if (u.rdNavbar.length) {
      for (
        z = ["-", "-sm-", "-md-", "-lg-", "-xl-", "-xxl-"],
          W = [0, 576, 768, 992, 1200, 1600],
          q = {},
          x = O = 0,
          E = W.length;
        O < E;
        x = ++O
      )
        (H = W[x]),
          q[W[x]] || (q[W[x]] = {}),
          u.rdNavbar.attr("data" + z[x] + "layout") &&
            (q[W[x]].layout = u.rdNavbar.attr("data" + z[x] + "layout")),
          u.rdNavbar.attr("data" + z[x] + "device-layout") &&
            (q[W[x]].deviceLayout = u.rdNavbar.attr(
              "data" + z[x] + "device-layout"
            )),
          u.rdNavbar.attr("data" + z[x] + "hover-on") &&
            (q[W[x]].focusOnHover =
              "true" === u.rdNavbar.attr("data" + z[x] + "hover-on")),
          u.rdNavbar.attr("data" + z[x] + "auto-height") &&
            (q[W[x]].autoHeight =
              "true" === u.rdNavbar.attr("data" + z[x] + "auto-height")),
          g
            ? (q[W[x]].stickUp = !1)
            : u.rdNavbar.attr("data" + z[x] + "stick-up") &&
              (q[W[x]].stickUp =
                "true" === u.rdNavbar.attr("data" + z[x] + "stick-up")),
          u.rdNavbar.attr("data" + z[x] + "stick-up-offset") &&
            (q[W[x]].stickUpOffset = u.rdNavbar.attr(
              "data" + z[x] + "stick-up-offset"
            ));
      u.rdNavbar.RDNavbar({
        anchorNav: !g,
        stickUpClone:
          !!u.rdNavbar.attr("data-stick-up-clone") &&
          !g &&
          "true" === u.rdNavbar.attr("data-stick-up-clone"),
        responsive: q,
        callbacks: {
          onStuck: function () {
            var a = this.$element.find(".rd-search input");
            a && a.val("").trigger("propertychange");
          },
          onDropdownOver: function () {
            return !g;
          },
          onUnstuck: function () {
            if (null !== this.$clone) {
              var a = this.$clone.find(".rd-search input");
              a && (a.val("").trigger("propertychange"), a.trigger("blur"));
            }
          },
        },
      }),
        u.rdNavbar.attr("data-body-class") &&
          (document.body.className += " " + u.rdNavbar.attr("data-body-class"));
    }
    if (u.swiper.length)
      for (var x = 0; x < u.swiper.length; x++) {
        for (
          var P = $(u.swiper[x]),
            G = P.find(".swiper-pagination"),
            S = P.find(".swiper-button-next"),
            F = P.find(".swiper-button-prev"),
            D = P.find(".swiper-scrollbar"),
            L = P.find(".swiper-slide"),
            O = 0;
          O < L.length;
          O++
        ) {
          var z,
            x,
            O,
            E,
            H,
            W,
            q,
            B,
            R = $(L[O]);
          (B = R.attr("data-slide-bg")) &&
            R.css({
              "background-image": "url(" + B + ")",
              "background-size": "cover",
            });
        }
        L.end().find("[data-caption-animate]").addClass("not-animated").end(),
          P.swiper({
            autoplay: P.attr("data-autoplay")
              ? "false" === P.attr("data-autoplay")
                ? void 0
                : P.attr("data-autoplay")
              : 5e3,
            direction:
              P.attr("data-direction") && l
                ? P.attr("data-direction")
                : "horizontal",
            effect: P.attr("data-slide-effect")
              ? P.attr("data-slide-effect")
              : "slide",
            speed: P.attr("data-slide-speed")
              ? P.attr("data-slide-speed")
              : 600,
            keyboardControl: "true" === P.attr("data-keyboard"),
            mousewheelControl: "true" === P.attr("data-mousewheel"),
            mousewheelReleaseOnEdges:
              "true" === P.attr("data-mousewheel-release"),
            nextButton: S.length ? S.get(0) : null,
            prevButton: F.length ? F.get(0) : null,
            pagination: G.length ? G.get(0) : null,
            paginationClickable:
              !!G.length && "false" !== G.attr("data-clickable"),
            paginationBulletRender: function (a, t, e) {
              return "true" === G.attr("data-index-bullet")
                ? '<span class="' + e + '">' + (t + 1) + "</span>"
                : "true" === G.attr("data-bullet-custom")
                ? '<span class="' + e + '"><span></span></span>'
                : '<span class="' + e + '"></span>';
            },
            scrollbar: D.length ? D.get(0) : null,
            scrollbarDraggable:
              !D.length || "false" !== D.attr("data-draggable"),
            scrollbarHide: !!D.length && "false" === D.attr("data-draggable"),
            loop: !g && "false" !== P.attr("data-loop"),
            simulateTouch:
              !!P.attr("data-simulate-touch") &&
              !g &&
              "true" === P.attr("data-simulate-touch"),
            onTransitionStart: function (a) {
              h(a);
            },
            onTransitionEnd: function (a) {
              f(a);
            },
            onInit: (function (a) {
              return function (t) {
                h(t), f(t);
                var e = $(a),
                  r = e.find(".swiper-pagination__fraction-index").get(0),
                  o = e.find(".swiper-pagination__fraction-count").get(0);
                r &&
                  o &&
                  ((r.innerHTML = j(t.realIndex + 1)),
                  o &&
                    (g || "false" === a.attr("data-loop")
                      ? (o.innerHTML = j(t.slides.length))
                      : (o.innerHTML = j(t.slides.length - 2))));
              };
            })(P),
            onSlideChangeStart: (function (a) {
              return function (t) {
                var e = $(a).find(".swiper-pagination__fraction-index").get(0);
                e && (e.innerHTML = j(t.realIndex + 1));
              };
            })(P),
          }),
          o
            .on(
              "resize",
              (function (a) {
                return function () {
                  var t = m(a, "min-height"),
                    e = m(a, "height");
                  e && a.css("height", t && t > e ? t : e);
                };
              })(P)
            )
            .trigger("resize");
      }
    function j(a) {
      return a < 10 ? "0" + a : a;
    }
    if (u.isotope.length) {
      for (var U, Y = [], x = 0; x < u.isotope.length; x++) {
        var J = u.isotope[x],
          K = {
            itemSelector: ".isotope-item",
            layoutMode: J.getAttribute("data-isotope-layout")
              ? J.getAttribute("data-isotope-layout")
              : "masonry",
            filter: "*",
          };
        J.getAttribute("data-column-width")
          ? (K.masonry = {
              columnWidth: parseFloat(J.getAttribute("data-column-width")),
            })
          : J.getAttribute("data-column-class") &&
            (K.masonry = { columnWidth: J.getAttribute("data-column-class") });
        var Q = new Isotope(J, K);
        Y.push(Q);
      }
      setTimeout(function () {
        for (var a = 0; a < Y.length; a++)
          (Y[a].element.className += " isotope--loaded"), Y[a].layout();
      }, 200),
        $("[data-isotope-filter]")
          .on("click", function (a) {
            a.preventDefault();
            var t = $(this);
            clearTimeout(U),
              t
                .parents(".isotope-filters")
                .find(".active")
                .removeClass("active"),
              t.addClass("active");
            var e = $(
                '.isotope[data-isotope-group="' +
                  this.getAttribute("data-isotope-group") +
                  '"]'
              ),
              r = {
                itemSelector: ".isotope-item",
                layoutMode: e.attr("data-isotope-layout")
                  ? e.attr("data-isotope-layout")
                  : "masonry",
                filter:
                  "*" === this.getAttribute("data-isotope-filter")
                    ? "*"
                    : '[data-filter*="' +
                      this.getAttribute("data-isotope-filter") +
                      '"]',
              };
            e.attr("data-column-width")
              ? (r.masonry = {
                  columnWidth: parseFloat(e.attr("data-column-width")),
                })
              : e.attr("data-column-class") &&
                (r.masonry = { columnWidth: e.attr("data-column-class") }),
              e.isotope(r);
          })
          .eq(0)
          .trigger("click");
    }
    if (u.materialParallax.length) {
      if (g || s || d)
        for (var x = 0; x < u.materialParallax.length; x++) {
          var ae = $(u.materialParallax[x]),
            ar = ae.data("parallax-img");
          ae.css({
            "background-image": "url(" + ar + ")",
            "background-size": "cover",
          });
        }
      else
        u.materialParallax.parallax(),
          o.on("load", function () {
            setTimeout(function () {
              o.scroll();
            }, 500);
          });
    }
       
        o.on();
  });
})();
