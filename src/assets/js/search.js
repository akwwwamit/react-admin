$(function () {
    "use strict";

    $("#search-input").inputDropdown(
        [
            { name: "Dashboard", value: "Dashboard" },
            { name: "Profile", value: "Profile" },
            { name: "Products", value: "Products" },
            { name: "Recipes", value: "Recipes" },
            { name: "Users", value: "Users" },
            { name: "Posts", value: "Posts" },
            { name: "Carts", value: "Carts" },
            { name: "Comments", value: "Comments" },
            { name: "Todos", value: "Todos" },
            { name: "Quotes", value: "Quotes" }
        ],
        {
            formatter: function (e) {
                return "<li language=\"" + e.value + "\">" + e.name + "</li>";
            },
            valueKey: "language"
        }
    );

    // Correct PerfectScrollbar usage
    var psInterval = setInterval(function () {
        var el = document.querySelector(".jq-input-dropdown");

        if (el && typeof PerfectScrollbar !== "undefined") {
            new PerfectScrollbar(el, {
                suppressScrollX: true
            });
            clearInterval(psInterval);
        }
    }, 50);
});