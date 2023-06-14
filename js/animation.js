$("document").ready(function() {
    $("#go").click(function() {
        $("#testDiv").animate({width: 400}, 300)
        .animate({height: 300}, 400)
        .animate({left: 200}, 500)
        .animate({top: "+=100", borderWidth: 10}, "slow")
    });
});