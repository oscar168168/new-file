$(document).ready(function () {
    $('#navbar-icon').click(function (e) { 
        e.preventDefault();
        $('#nav-items').toggle(300);
    });
});

$(document).ready(function () {
    $('#clickToPopUp > img').click(function (e) { 
        e.preventDefault();
        $('#pop-up').toggle(200);
    });
});
$(document).ready(function () {
    $('#close').click(function (e) { 
        e.preventDefault();
        $('#pop-up').hide(200);
    });
});

// $("body").click(function(){
//     var $target = $(event.target);
//     if(!$target.is("#pop-up") || !$target.is("#pop-up").children()){
//         $("body").find("#pop-up").fadeOut().removeClass('active');
//     }
// });
