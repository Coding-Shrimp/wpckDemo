import '../css/reset.css'
import '../css/common.scss'


$(window).scroll(function(){
    // 滚动条距离顶部的距离 大于300px时
    if($(window).scrollTop() >= 300){
        $("header").addClass("scroll-dom");
    } else{
        $("header").removeClass("scroll-dom");
    }
});

$(".sun-nav-item").on("click", function(){
    $(".sun-nav-item").removeClass('nav-active');
    $(this).addClass('nav-active');
})