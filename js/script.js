$("document").ready(function() {

    // --------------------------the #content id is the heading "first jquery page" and after it loaded append paragraf.
    // ----------------------------- more code to add red border to class heading or the first paragraf
    $("#content").append("<p>The page just loaded</p>");
            //$("p").css("border", "3px solid red");
            // $(".selectors").css("border", "3px solid red");
            // $("#intro").css("border", "3px solid red");
           $("p:first").css("border", "3px solid red");
           $("h2:not(.selectors)").css("border", "3px solid red");


        //    ----------------------------------------------------- svarta boxarna ändrar färg till röd här
    $(".box").on("click", function () {
        /**
         * When we click on an element that has
         * a 'box' class, this event will be fired.
         */
        var classNames = $(this).attr("class").split(" ");
        var boxClass = classNames[0];
        var className = classNames[1];
        if ($(this).css("background-color") == "rgb(255, 0, 0)") {
            // If this object is already red, turn it black
            $("." + className).css("background-color", "#000");
        } else {
            // Else turn all elements with a box class black
            // and then change the color of all elements
            // with the same class name as the clicked element
            // to red.
            $("." + boxClass).css("background-color", "#000");
            $("." + className).css("background-color", "red");
        }
    });

    // ----------------------------------------------------- röda/ turquosa boxen här
    $(function() {
        $("#evTarget").on("mouseover mouseleave", highlight);
        $("#evTarget").on("click", function(change_color) {
            $("#evTarget").off("mouseover mouseleave", highlight);
            $("#evTarget").html("<p>hower effect shut up</p>");
            $("#evTarget").removeClass("highlighted");

        })
            $("#textEntry").on("keypress", function (last_letter) {

                $("#keyPress").text(String.fromCharCode(last_letter.charCode));
            });
    });

    function highlight(change_color) {
        $("#evTarget").toggleClass("hightlighted");
    }


// ------------------------------------------------------------the grey box function here
$(function() {
    // koden nedan ersätter allt annat som finns i diven från html
               // var newP = $("<p>");
               // newP.append("<em>Hello there</em>");
               // $("#example").html(newP);
       
       
   //  koden nedan sätter watch this framför heading med id #creation
            //    $("#creation").prepend("Watch This! ");
   
   //  change the existing content
                  $("#example").html("<h2>This is a new H2</h2>");
                  
       });



})




    

