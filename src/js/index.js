// import "fullpage.js/dist/fullpage.min.css";
import 'swiper/src/idangerous.swiper.css';
import '../css/index.scss'
import fullpage from "fullpage.js/dist/fullpage.js";
import Swiper from 'swiper/src/idangerous.swiper.js'



var timerTi= 0;
var mySwiper = null;

function updateTime(){
    timerTi +=1;
    $(".swiper-pagination .swiper-active .propress").css("width",timerTi+"%");
    if(timerTi == 100){
        $(".swiper-pagination li .propress").css("width","0");
        timerTi = 0;
        mySwiper.swipeNext();
    }
  }   

$(document).ready(function() {
    // var fullPageInstance = new fullpage('#fullpage', {
    //     navigation: true,
    //     menu: '#fp-nav',
    //     onLeave: function(anchorLink, index){
    //         if(index.index > 0){
    //             $("header").addClass("scroll-dom");
    //         }else {
    //             $("header").removeClass("scroll-dom");
    //         }
    //         console.log("onLeave:"+index);
    //     }
    // });
    var inter = null;
    mySwiper = new Swiper ('.swiper-container', {
        onSlideChangeStart: function(swiper) {
            timerTi = 0;
            var activeNumber = swiper.activeIndex == 4 ?0:swiper.activeIndex-1;
            $(".swiper-pagination li").removeClass("swiper-active");
            $(".swiper-pagination li").eq(activeNumber).addClass("swiper-active");
        },
        loop: true, // 循环模式选项
        navigation: {
          nextEl: '.swiper-button-next',
          prevEl: '.swiper-button-prev',
        },
      })     
      inter = setInterval(updateTime, 60);
}); 