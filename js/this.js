function animateImg(){
    var img = $("#img-show-li").children("li");
    var imgLen = $("#img-show-li").children("li").length;
    var timer;
    var index = 0;
    $(img).eq(index).show();
    timer=setInterval(imgShow,1500);
    function imgShow(){
        $(img).eq(index).fadeOut(300);
        index++;
        if (index>=imgLen) {
            index=0;
        };
        $(img).eq(index).fadeIn(300);
    }
}
$(document).ready(function(){
    animateImg();
});