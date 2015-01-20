// Init
$(document).ready(function() {
    $('.button').click(function() {
        window[this.id]();
    });
    console.log("buttons initiated...");
});

function message(text){
    $('#message').text(text);
    $('#message').slideUp("slow", 0, $('#message').slideDown("slow"));
}