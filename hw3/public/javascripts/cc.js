//Jimi Hayes
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
    //helper method to change dropdown text and call post method
    function changeMonth(mo){
        $('#droptext').text(mo);
        posty();
    }
    //method to call post
    function posty(){
        $.post("/orders", function(data){
            const orderData = JSON.parse(data);
            $("#plaLi").text(orderData[0].quantity + " Plain Cheesecakes");
            $("#cheLi").text(orderData[1].quantity + " Cherry Cheesecakes");
            $("#choLi").text(orderData[2].quantity + " Chocolate Cheesecakes");
        });
    }
    //onclicks for months
    $('#jan').click(function(){changeMonth('Jan');});
    $('#feb').click(function(){changeMonth('Feb');});
    $('#mar').click(function(){changeMonth('Mar');});
    $('#apr').click(function(){changeMonth('Apr');});
    $('#may').click(function(){changeMonth('May');});
    $('#jun').click(function(){changeMonth('Jun');});
    $('#jul').click(function(){changeMonth('Jul');});
    $('#aug').click(function(){changeMonth('Aug');});
    $('#sep').click(function(){changeMonth('Sep');});
    $('#oct').click(function(){changeMonth('Oct');});
    $('#nov').click(function(){changeMonth('Nov');});
    $('#dec').click(function(){changeMonth('Dec');});
});