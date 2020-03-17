
import '../css/about.scss'
import 'swiper/src/idangerous.swiper.css';

var mySwiper = new Swiper('.swiper-ace', {
    slidesPerView: 3,
})
$('.swiper-button-prev').on('click', function(e) {
    e.preventDefault()
    mySwiper.swipePrev()
})
$('.swiper-button-next').on('click', function(e) {
    e.preventDefault()
    mySwiper.swipeNext()
})

// var hoverDImg = '';
$(".strengths-item").hover( function(){
    // hoverDImg = $(this).children(".si-warpper").children("img").attr("src");
    // console.log("ccccc"+ hoverDImg)
    // $(this).children(".si-warpper").children("img").attr("src", "../"+hoverDImg.replace("red", "white"));
    // $(this).children(".si-warpper").children("img").attr("src", "<%= require('"+hoverDImg+"') %>");
    // console.log($(this).children(".si-warpper").children("img").attr("src"));
}, function(){
    // hoverDImg
    // $(this).children(".si-warpper").children("img").attr("src", "<%= require('"+hoverDImg+"') %>");
    // $(this).children(".si-warpper").children("img").attr("src", hoverDImg);
})