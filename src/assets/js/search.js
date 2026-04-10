$(function () {
    "use strict";

    $("#search-input").inputDropdown(
        [
            { name: "Orders", value: "jQueryScript" },
            { name: "Earnings", value: "jQuery" },
            { name: "Customers", value: "Angular" },
            { name: "Total sales", value: "React" },
            { name: "Profits", value: "Vue" },
            { name: "Tasks", value: "JavaScript" },
            { name: "New projects", value: "CSS" },
            { name: "Total sellers", value: "HTML" }
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