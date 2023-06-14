// $(document).ready(function(){
//     $('#linked').click(function(){
//         $("html, body").animate({
//             scrollTop: $(
//               'html, body').get(0).scrollHeight
//         }, 800);
//     });
// });
$(document).ready(function(){
    $('#aboutus_href').click(function(){
        $("html, body").animate({
            scrollTop: $(
              'html, body').get(0).scrollHeight
        }, 800);
    });
});

$(document).ready(function(){
    var scrollLink = $('.scroll');
    scrollLink.click(function(e){
        e.preventDefault();
        $('body, html').animate({
            scrollTop: $(this.hash).offset().top
        }, 5000);        
    })
});









const menu = document.querySelector(".list");
const menuBtn = document.querySelector(".menu-btn");
const cancelBtn = document.querySelector(".cancel-btn");

menuBtn.onclick = () => {
    menu.classList.add("active");
    menuBtn.classList.add("hide");
}

cancelBtn.onclick = () => {
    menu.classList.remove("active");
    menuBtn.classList.remove("hide");

}



var scrollTop = $(window).scrollTop() ;
const body = document.querySelector("body");
const navbar = document.querySelector(".navbar")
body.onscroll = (event) => {
    // navbar.classList.add("whitener");
    if(scrollTop > 100 + 'px'){
        navbar.classList.add("whitener");
    }    

}
/////////////// scroll top ///////////////////////////
var stepTime = 20;
var docBody = document.body;
var focElem = document.documentElement;
var scrollAnimationStep = function (initPos, stepAmount) {
    var newPos = initPos - stepAmount > 0 ? initPos - stepAmount : 0;
    docBody.scrollTop = focElem.scrollTop = newPos;
    newPos && setTimeout(function () {
        scrollAnimationStep(newPos, stepAmount);
    }, stepTime);
}
var scrollTopAnimated = function (speed) {
    var topOffset = docBody.scrollTop || focElem.scrollTop;
    var stepAmount = topOffset;
    speed && (stepAmount = (topOffset * stepTime)/speed);
    scrollAnimationStep(topOffset, stepAmount);
};
