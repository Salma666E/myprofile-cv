$(document).ready(function(){
    $("#send").on("click",function(){
        $(this).href=`mailto: salmaessam6666@yahoo.com?subject = ${$('#comment').html()}`
        alert("Your comment has been submitted. Thank you so much.")
        // $(this).parent().addClass("active");
        // $(this).parent().siblings().removeClass("active");
    })
});

