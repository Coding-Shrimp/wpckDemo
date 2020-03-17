import '../css/contact.scss'

$(".m-place").on("click", function(e) {
    $(this).hide();
    $(this).next().focus();
    e.stopPropagation();
})

$(".form-ipt input").blur(function(){
    if($(this).val()){
    }else{
        $(this).prev().show();
    }
})