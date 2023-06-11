$(document).ready(function(){
    $('#linked').click(function(){
        $("html, body").animate({
            scrollTop: $(
              'html, body').get(0).scrollHeight
        }, 800);
    });
});
$(document).ready(function(){
    $('#aboutus_href').click(function(){
        $("html, body").animate({
            scrollTop: $(
              'html, body').get(0).scrollHeight
        }, 800);
    });
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
