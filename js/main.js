function JqAjaxRequest(e, t, n) {
    jQuery.ajax({
        url: n,
        type: "POST",
        dataType: "html",
        data: jQuery("#" + t).serialize(),
        success: function(t) {
            document.getElementById(e).innerHTML = t
        },
        error: function(t) {
            document.getElementById(e).innerHTML = "Ошибка при отправке формы"
        }
    })
}
$(function() {
    $("#tabs").tabs();
    $(".accordion").accordion({
        active: "none",
        collapsible: true,
        heightStyle: "auto"
    });
    $(".accordion > a").tooltip();
    var e = $("h3:contains(PROD)").addClass("red");
    var t = $("h3:contains(PROD) + div");
    t.find("a").click(function() {
        if (window.confirm("Are You you sure you want to make changes in PRODUCTION?")) {} else {
            return false
        }
    })
});
$(document).ready;
document.onkeydown = function(e) {
    var t = $(".holder");
    e = e || window.event;
    if (e.shiftKey && e.keyCode == 74) {
        t.toggleClass("hidden").toggleClass("holder-show");
        return false
    } else if (e.shiftKey && e.keyCode == 75) {
        alert("Do not use Firefox, bro ;) ")
    }
}
