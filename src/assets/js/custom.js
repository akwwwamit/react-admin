(() => {
  $(() => {
    "use strict";

    // -----------------------------
    // 1️⃣ Global Loader
    // -----------------------------
    $("#global-loader").fadeOut("slow");

    // -----------------------------
    // 2️⃣ Navbar collapse on desktop
    // -----------------------------
    if (window.matchMedia("(min-width: 992px)").matches) {
      $(".main-navbar .active").removeClass("show");
      $(".main-header-menu .active").removeClass("show");
    }

    // -----------------------------
    // 3️⃣ Dropdown toggles
    // -----------------------------
    $(".main-header .dropdown > a").on("click", function (e) {
      e.preventDefault();
      $(this).parent().toggleClass("show");
      $(this).parent().siblings().removeClass("show");
      $(this).find(".drop-flag").removeClass("show");
    });

    // -----------------------------
    // 4️⃣ Fullscreen toggle
    // -----------------------------
    $(document).on("click", ".fullscreen-button", function () {
      const doc = document;
      if (
        !doc.fullscreenElement &&
        !doc.msFullscreenElement &&
        !doc.mozFullScreen &&
        !doc.webkitIsFullScreen
      ) {
        doc.documentElement.requestFullscreen?.() ||
          doc.documentElement.mozRequestFullScreen?.() ||
          doc.documentElement.webkitRequestFullScreen?.(Element.ALLOW_KEYBOARD_INPUT) ||
          doc.documentElement.msRequestFullscreen?.();
      } else {
        doc.exitFullscreen?.() ||
          doc.mozCancelFullScreen?.() ||
          doc.webkitCancelFullScreen?.() ||
          doc.msExitFullscreen?.();
      }
    });

    // -----------------------------
    // 5️⃣ Search form functions
    // -----------------------------
    function resetSearch() {
      const e = $('.main-header form[role="search"].active');
      e.find("input").val("");
      e.removeClass("active");
    }

    $("body, .main-header form[role='search'] button[type='reset']").on(
      "click keyup",
      function (e) {
        if (
          (e.which === 27 && $('.main-header form[role="search"]').hasClass("active")) ||
          $(e.currentTarget).attr("type") === "reset"
        ) {
          resetSearch();
        }
      }
    );

    $(document).on(
      "click",
      '.main-header form[role="search"]:not(.active) button[type="submit"]',
      function (e) {
        e.preventDefault();
        const form = $(this).closest("form");
        form.addClass("active");
        form.find("input").focus();
      }
    );

    $(document).on(
      "click",
      '.main-header form[role="search"].active button[type="submit"]',
      function (e) {
        e.preventDefault();
        const input = $(this).closest("form").find("input");
        $("#showSearchTerm").text(input.val());
        resetSearch();
      }
    );

    // -----------------------------
    // 6️⃣ Rating Stars (safe)
    // -----------------------------
    if ($.fn.ratingStars) {
      $(".rating-stars").ratingStars({
        selectors: {
          starsSelector: ".rating-stars",
          starSelector: ".rating-star",
          starActiveClass: "is--active",
          starHoverClass: "is--hover",
          starNoHoverClass: "is--no-hover",
          targetFormElementSelector: ".rating-value",
        },
      });
    } else {
      console.warn("ratingStars plugin not loaded!");
    }

    // -----------------------------
    // 7️⃣ Cover images
    // -----------------------------
    $(".cover-image").each(function () {
      const src = $(this).attr("data-image-src");
      if (src) {
        $(this).css("background", `url(${src}) center center`);
      }
    });

    // -----------------------------
    // 8️⃣ Sticky header
    // -----------------------------
    $(window).on("scroll", function () {
      $(window).scrollTop() >= 66
        ? $(".main-header").addClass("fixed-header")
        : $(".main-header").removeClass("fixed-header");
    });

    // -----------------------------
    // 9️⃣ Back to top
    // -----------------------------
    $(window).on("scroll", function () {
      $(this).scrollTop() > 0
        ? $("#back-to-top").fadeIn("slow")
        : $("#back-to-top").fadeOut("slow");
    });

    $("#back-to-top").on("click", function () {
      $("html, body").animate({ scrollTop: 0 }, 600);
      return false;
    });

    // -----------------------------
    // 10️⃣ Tooltips & Popovers
    // -----------------------------
    if ($.fn.tooltip) {
      $('[data-toggle="tooltip"]').tooltip();
      $('[data-toggle="tooltip-primary"]').tooltip({
        template:
          '<div class="tooltip tooltip-primary" role="tooltip"><div class="arrow"></div><div class="tooltip-inner"></div></div>',
      });
      $('[data-toggle="tooltip-secondary"]').tooltip({
        template:
          '<div class="tooltip tooltip-secondary" role="tooltip"><div class="arrow"></div><div class="tooltip-inner"></div></div>',
      });
    }

    if ($.fn.popover) {
      $('[data-toggle="popover"]').popover();
      $('[data-popover-color="head-primary"]').popover({
        template:
          '<div class="popover popover-head-primary" role="tooltip"><div class="arrow"></div><h3 class="popover-header"></h3><div class="popover-body"></div></div>',
      });
      $('[data-popover-color="head-secondary"]').popover({
        template:
          '<div class="popover popover-head-secondary" role="tooltip"><div class="arrow"></div><h3 class="popover-header"></h3><div class="popover-body"></div></div>',
      });
      $('[data-popover-color="primary"]').popover({
        template:
          '<div class="popover popover-primary" role="tooltip"><div class="arrow"></div><h3 class="popover-header"></h3><div class="popover-body"></div></div>',
      });
      $('[data-popover-color="secondary"]').popover({
        template:
          '<div class="popover popover-secondary" role="tooltip"><div class="arrow"></div><h3 class="popover-header"></h3><div class="popover-body"></div></div>',
      });
    }

    // -----------------------------
    // 11️⃣ Horizontal Menu Active Links
    // -----------------------------
    $(".horizontalMenu-list li a").each(function () {
      const href = window.location.href.split(/[?#]/)[0];
      if (this.href === href) {
        $(this).addClass("active");
        $(this).parent().addClass("active");
        $(this).parent().parent().prev().addClass("active");
        $(this).parent().parent().prev().click();
      }
    });

    // -----------------------------
    // 12️⃣ Theme / Layout toggles (example)
    // -----------------------------
    $(document).on("click", "#myonoffswitch7", function () {
      this.checked
        ? $("body").addClass("body-default").removeClass("body-style1")
        : $("body").removeClass("body-default");
    });

    $(document).on("click", "#myonoffswitch6", function () {
      this.checked
        ? $("body").addClass("body-style1").removeClass("body-default")
        : $("body").removeClass("body-style1");
    });

    // -----------------------------
    // 13️⃣ EVA icons replace (if used)
    // -----------------------------
    if (typeof eva !== "undefined" && eva.replace) eva.replace();
  });
})();