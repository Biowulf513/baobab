"use strict";

function showModalFunc(a) {
    overlay.fadeIn(400, function() {
        a.css("display", "block").animate({
            opacity: 1,
            top: "50%"
        }, 200)
    })
}

function thanksFunc(a) {
    a.addClass("modal--thanks")
}

function mainVideoBtn() {
    mainVideo.paused ? mainVideo.play() : mainVideo.pause()
}

function kidsSuccessBtn1() {
    kidsSuccess1.paused ? kidsSuccess1.play() : kidsSuccess1.pause()
}

function kidsSuccessBtn2() {
    kidsSuccess2.paused ? kidsSuccess2.play() : kidsSuccess2.pause()
}

function kidsSuccessBtn3() {
    kidsSuccess3.paused ? kidsSuccess3.play() : kidsSuccess3.pause()
}

function kidsSuccessBtn4() {
    kidsSuccess4.paused ? kidsSuccess4.play() : kidsSuccess4.pause()
}

$('input[name="phone"]').bind("change keyup input click", function () {
  if (this.value.match(/[^0-9,+]/g)) {
    this.value = this.value.replace(/[^0-9,+]/g, '');
  }
});

function modalValidationFunc(a) {
    a.validate({
        rules: {
            phone: {
                required: !0,
                minlength: 6
            },
            name: {
                required: !0,
                minlength: 3
            }
        }
    })
}
var modal = $(".modal"),
    modalAdvice = $(".modal--advice"),
    modalWelcome = $(".modal--welcome"),
    modalPrograms = $(".modal--programs"),
    modalBooks = $(".modal--books"),
    overlay = $(".modal_overlay"),
    booksForm = $("#books-form");
$(document).ready(function() {
    $(".button-modal").click(function(a) {
        a.preventDefault();
        var b = $(this);
        modal.removeClass("modal--thanks"), b.hasClass("button-modal--advice") ? showModalFunc(modalAdvice) : b.hasClass("button-modal--welcome") ? showModalFunc(modalWelcome) : b.hasClass("button-modal--programs") && showModalFunc(modalPrograms)
    }), $(".modal-form__close, .modal_overlay").click(function(a) {
        a.preventDefault(), modal.animate({
            opacity: 0,
            top: "45%"
        }, 200, function() {
            $(this).css("display", "none"), overlay.fadeOut(400)
        })
    }), $(".download-book").on("click", function(a) {
        a.preventDefault();
        var b = $(this);
        modalBooks.removeClass("modal--thanks"), b.hasClass("download-book1") ? (modalBooks.addClass("modal--books1").removeClass("modal--books2"), booksForm.addClass("modal--books1").removeClass("modal--books2")) : (modalBooks.addClass("modal--books2").removeClass("modal--books1"), booksForm.addClass("modal--books2").removeClass("modal--books1")), showModalFunc(modalBooks)
    })
}), $(document).ready(function() {
    function a() {
        f = $(".header_container"), e = $(".header"), b = e.offset().top, d = e.outerHeight(!0)
    }
    var b, c, d, e, f;
    a(), $(window).resize(a), $(window).scroll(function() {
        c = $(window).scrollTop(), c >= b ? f.addClass("header_container--scroll") : f.removeClass("header_container--scroll")
    })
});
var mainVideo = document.getElementById("main-about__video"),
    kidsSuccess1 = document.getElementById("kids-success__video-movie1"),
    kidsSuccess2 = document.getElementById("kids-success__video-movie2"),
    kidsSuccess3 = document.getElementById("kids-success__video-movie3"),
    kidsSuccess4 = document.getElementById("kids-success__video-movie4");
$("video").on("play", function() {
    var a = $(this),
        b = a.parent(),
        c = a.attr("id");
    b.removeClass("pause").addClass("play").addClass("init"), a.hasClass("main-about__video") || a.attr("controls", ""), "kids-success__video-movie1" === c ? (kidsSuccess2.pause(), kidsSuccess3.pause(), kidsSuccess4.pause()) : "kids-success__video-movie2" === c ? (kidsSuccess1.pause(), kidsSuccess3.pause(), kidsSuccess4.pause()) : "kids-success__video-movie3" === c ? (kidsSuccess1.pause(), kidsSuccess2.pause(), kidsSuccess4.pause()) : "kids-success__video-movie4" === c && (kidsSuccess1.pause(), kidsSuccess2.pause(), kidsSuccess3.pause())
}), $("video").on("pause", function() {
    $(this).parent().removeClass("play").addClass("pause")
}), $("video").on("ended", function() {
    var a = $(this);
    a.parent().removeClass("pause").removeClass("init"), a.hasClass("main-about__video") || a.removeAttr("controls")
}), $(function() {
    $("#main-form").validate({
        rules: {
            phone: {
                required: !0,
                minlength: 6
            },
            name: {
                required: !0,
                minlength: 3
            }
        }
    }), $("#books-form").validate({
        rules: {
            phone: {
                required: !0,
                minlength: 6
            },
            name: {
                required: !0,
                minlength: 3
            },
            email: {
                required: !0,
                email: !0
            }
        }
    }), modalValidationFunc($("#modal-advice")), modalValidationFunc($("#modal-programs")), modalValidationFunc($("#modal-welcome"))
}), $(document).ready(function() {
    $("form").submit(function(a) {
        a.preventDefault();
        var b = $(this),
            c = b.find("input"),
            d = b.find("button");
        if (!c.hasClass("error")) return d.prop("disabled", !0), $.ajax({
            type: "POST",
            url: "ajax/mail.php",
            data: b.serialize()
        }).done(function() {
            if (b.hasClass("order-form")) modal.addClass("modal--thanks"), showModalFunc(modal);
            else if (b.hasClass("modal--books1")) {
                var a = document.createElement("a");
                a.setAttribute("href", "files/books/born_with_the_character.pdf"), a.setAttribute("download", "Рождённые с характером"), a.click(), modalBooks.animate({
                    opacity: 0,
                    top: "45%"
                }, 200, function() {
                    $(this).css("display", "none"), overlay.fadeOut(400)
                })
            } else if (b.hasClass("modal--books2")) {
                var a = document.createElement("a");
                a.setAttribute("href", "files/books/after_three_late.pdf"), a.setAttribute("download", "После трёх уже поздно"), a.click(), modalBooks.animate({
                    opacity: 0,
                    top: "45%"
                }, 200, function() {
                    $(this).css("display", "none"), overlay.fadeOut(400)
                })
            } else modal.addClass("modal--thanks");
            setTimeout(function() {
                d.prop("disabled", !1), b.trigger("reset")
            }, 1e3)
        }), !1
    })
}), $(".menu__link").on("click", function(a) {
    a.preventDefault();
    var b = $(".nav"),
        c = $(".menu"),
        d = $(".header__contacts");
    b.toggleClass("active"), c.toggleClass("active"), d.toggleClass("active")
}), $(document).ready(function() {
    $(".tabs-mobile__btn-item").on("click", function(a) {
        a.preventDefault();
        var b = $(this),
            c = b.closest(".tabs__content-list"),
            d = c.find(".tabs__content-item"),
            e = $(".tabs__btn-item");
        c.hasClass("mobile-active") ? (c.removeClass("mobile-active"), d.stop(!0).slideUp(300)) : (c.addClass("mobile-active"), e.eq(c.index()).addClass("desktop-active").siblings().removeClass("desktop-active"), d.stop(!0).slideDown(300))
    }), $(".tabs__btn-link").click(function(a) {
        a.preventDefault();
        var b = $(this).closest(".tabs__btn-item"),
            c = $(".tabs__content-list"),
            d = b.index();
        b.addClass("desktop-active").siblings().removeClass("desktop-active"), c.eq(d).addClass("desktop-active").siblings().removeClass("desktop-active")
    }), $(window).resize(function() {
        $(window).width() >= 1200 && $(".tabs__content-item").attr("style", "")
    })
}), $(document).ready(function() {
    var a = $("#reviews");
    a.owlCarousel({
            items: 1,
            loop: !0,
            nav: !0,
            dots: !0,
            mouseDrag: !1,
            touchDrag: !1,
            smartSpeed: 300
        }).append('<div class="owl-dots_reviews review--0"></div>'),
        function() {
            a.find(".owl-dots").appendTo(".owl-dots_reviews")
        }();
    var b = a.find(".owl-next, .owl-prev"),
        c = a.find(".owl-dot"),
        d = $(".owl-dots_reviews");
    b.on("click", function() {
        var a = c.filter(".active").index();
        d.removeClass("review--0 review--1 review--2 review--3 review--4").addClass("review--" + a)
    }), $(".reviews__read-more").on("click", function(a) {
        a.preventDefault();
        var b = $(this),
            c = b.attr("href");
        $(window).width() < 1024 && $("body").css("overflow", "hidden"), console.log(c), $(c).addClass("active")
    }), $(".full-review__message-close, .full-review__overlay").on("click", function(a) {
        a.preventDefault(), $(".full-review").removeClass("active"), $("body").attr("style", "")
    })
}), $(document).ready(function() {
    var a = $("#slide-show");
    a.owlCarousel({
            items: 1,
            loop: !0,
            nav: !0,
            dots: !0,
            mouseDrag: !1,
            smartSpeed: 400
        }).append('<div class="owl-dots_slide-show slide-group1"></div>'),
        function() {
            a.find(".owl-dots").appendTo(".owl-dots_slide-show")
        }(), $(".owl-dot").on("click", function() {
            function a(a, b) {
                c.addClass(a).removeClass(b)
            }
            var b = $(this),
                c = $(".owl-dots_slide-show");
            c.hasClass("slide-group1") ? 5 === b.index() && a("slide-group2", "slide-group1") : c.hasClass("slide-group2") ? 5 === b.index() ? a("slide-group1", "slide-group2") : 10 === b.index() && a("slide-group3", "slide-group2") : 10 === b.index() && a("slide-group2", "slide-group3")
        })
}), $(".contacts__block-close").click(function(a) {
    a.preventDefault(), $(".contacts__block_wrapper").toggleClass("contacts__block_wrapper--hide")
}), $("#map").length && $(function() {
    function a() {
        b = new ymaps.Map("map", {
            center: [55.79416306895611, 37.665389499999975],
            zoom: 14
        });
        var a = new ymaps.Placemark([55.79416306895611, 37.665389499999975], {
            iconCaption: "Песочная аллея, 7А"
        }, {
            preset: "islands#redDotIconWithCaption"
        });
        b.geoObjects.add(a), document.body.clientWidth <= "1024" && b.behaviors.disable("drag")
    }
    ymaps.ready(a);
    var b
});