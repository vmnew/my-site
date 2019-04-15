$(document).ready(function(){
    $('.search-box').hover(function(){
        $('#name_of_the_shop').css('padding-right', 0);
    });
    $('.search-box').mouseleave(function(){
        $('#name_of_the_shop').css('padding-right', 330);
    });
    $('.menu-box').hover(function(){
        $('#name_of_the_shop').css('padding-left', 0);
    });
    $('.menu-box').mouseleave(function(){
        $('#name_of_the_shop').css('padding-left', 330);
    });
});