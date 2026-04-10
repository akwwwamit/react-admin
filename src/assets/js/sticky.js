$(document).ready(function () {
    var i = $(".sticky");

    // ✅ FIX: Check if element exists
    if (!i.length) return;

    var n,
        s = "sticky-pin",
        t = i.offset().top;

    function o() {
        n = i.innerHeight();
        i.css({ "margin-bottom": "-" + n + "px" });
        i.next().css({ "padding-top": n + "px" });
    }

    function c() {
        if ($(window).scrollTop() >= t) {
            i.addClass(s);
        } else {
            i.removeClass(s);
        }
    }

    i.after('<div class="jumps-prevent"></div>');

    o();
    c();

    $(window).resize(function () {
        o();
    });

    $(window).scroll(function () {
        c();
    });
});