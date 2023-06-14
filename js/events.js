// ------------------------------------------------------Events JQuery
$("document").ready(function() {
        $("#example_2").on("mousemove", onMouseOver);
        $("#example_2").on("click", onMouseClick);
        $("#example_2").on("mouseleave", onMouseLeave);

    });
    
    function onMouseOver(evt) {
        $("#example_2").text(evt.type + ": " + evt.pageX + ", " + evt.pageY + "\n" +
                          "Button: " + evt.which + " Key: " + evt.metaKey);
    }
    function onMouseClick(evt) {
        $("#example_2").text(evt.type + ": " + evt.pageX + ", " + evt.pageY);
        $("#example_2").off("mousemove", onMouseOver);
    }
    function onMouseLeave(evt) {
        $("#example_2").text("mouseleave");
    }
