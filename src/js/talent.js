import '../css/talent.scss'

$(".talent-pop").on("click", function(){
    $(this).hide();
    $("body").css("overflow", "auto");
    $(".show-hide").hide();
    $(".last-ipt-box").show();
})
$(".email").on("click", function(e){
    $(".talent-pop").show();
    e.stopPropagation();
    $(".talent-pop").css("overflow", "auto");
    $("body").css("overflow", "hidden");
})
$(".talent-pop-box").on("click", function(e){
    e.stopPropagation();
   
})
// 添加经历
$(".talent-ipt-box-right").on("click", function() {
    $(".show-hide").show();
    $(".last-ipt-box").hide();
})
