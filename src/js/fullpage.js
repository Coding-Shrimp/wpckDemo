import "fullpage.js/dist/fullpage.min.css";
import fullpage from "fullpage.js/dist/fullpage.js";

// $(document).ready(function() {
    var fullPageInstance = new fullpage('#fullpage', {
        navigation: true,
        menu: '#fp-nav',
        onLeave: function(anchorLink, index){
            if(index.index > 0){
                $("header").addClass("scroll-dom");
            }else {
                $("header").removeClass("scroll-dom");
            }
            console.log("onLeave:"+index);
        }
    });
// });