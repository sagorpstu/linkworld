$(document).ready(function () {
//======================
$(".navbar-toggler").click(function(){
    $(".side_nav").addClass("active");
    $(".side_nav").css("transition", "all .3s linear .3s");
    $(".off_canvas").addClass("active");
    $(".off_canvas").css("transition", "all .3s linear");
});

$(".off_canvas").click(function(){
    $(".side_nav").removeClass("active");
    $(".side_nav").css("transition", "all .3s linear 0s");
    $(this).removeClass("active");
    $(this).css("transition", "all .3s linear .3s")

});


$("#nav_close").click(function(){
    $(".side_nav").removeClass("active");
    $(".side_nav").css("transition", "all .3s linear 0s");
    $(".off_canvas").removeClass("active");
    $(".off_canvas").css("transition", "all .3s linear .3s")
    $(".navbar-toggler").removeClass("active");

});

$(".sub_menu_link").click(function(){
  $(this).children(".sub_arrow").toggleClass("active");
});
});