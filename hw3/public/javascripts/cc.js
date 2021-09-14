$(document).ready(function(){
    $("#order").click(function(){
        if($("#notesbox").val().toLowerCase().includes("vegan")) {
            alert("Note: Cheesecake contains dairy");
        } else {
            $("form").hide();
            var quan = $("#quantity").find(":selected").val();
            var notes = $("#notesbox").val();
            if($("#Plain").is(":checked")){
                $("#orderdetails").text("Thank you!  Your order has been placed\n"+quan+" Plain Cheesecakes\n"+notes);
            } else if($("#Cherry").is(":checked")) {
                $("#orderdetails").text("Thank you!  Your order has been placed\n"+quan+" Cherry Cheesecakes\n"+notes);
            } else {
                $("#orderdetails").text("Thank you!  Your order has been placed\n"+quan+" Chocolate Cheesecakes\n"+notes);
            }
        }
    });
});