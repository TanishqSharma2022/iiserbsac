



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
        }, 1800);
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




// const spinnerWrapper = document.querySelector('.spinner-wrapper');
// window.addEventListener('load', () => {
//     spinnerWrapper.style.opacity = '0';
//     setTimeout(() => {
//         spinnerWrapper.style.display = 'none';
//     }, 4000);

// });






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






// STICKY NAVIGATION BAR


const primaryHeader = document.querySelector('.navbar');
const scrollWatcher = document.createElement('div');

scrollWatcher.setAttribute('data-scroll-watcher', '');
primaryHeader.before(scrollWatcher);

const navObserver = new IntersectionObserver((entries) => {
    primaryHeader.classList.toggle('sticking', !entries[0].isIntersecting)
}, {rootMargin: "200px 0px 0px 0px"});

navObserver.observe(scrollWatcher);







// SCROLLING EFFECTS
$(document).ready(function () {
  
    // Add smooth scrolling to all links
    $("a").on('click', function (event) {

        // Make sure this.hash has a value
        // before overriding default behavior
        if (this.hash !== "") {

            // Prevent default anchor
            // click behavior
            event.preventDefault();

            // Store hash
            var hash = this.hash;

            // Using jQuery's animate() method 
            // to add smooth page scroll
            // The optional number (800) specifies
            // the number of milliseconds it takes
            // to scroll to the specified area
            $('html, body').animate({
                scrollTop: $(hash).offset().top
            }, 500, function () {

                // Add hash (#) to URL when done 
                // scrolling (default click behavior)
                window.location.hash = hash;
            });
        } // End if
    });
});



// HIDE NAV BAR after 2 seconds and reappear when scrolling up

var my_window = $(window);
var position = my_window.scrollTop();
    
my_window.scroll(function () {
    if(window.scrollY > 1000+'px'){
    
    if (my_window.scrollTop()  > position) {
        setTimeout(function(){$('.navbar').addClass('navup')}, 2000);
    }else{
        $('.navbar').removeClass('navup');
    }
    
    
    console.log(window.scrollY);
    position = my_window.scrollTop();}
});

var navbar = document.querySelector('.navbar');
navbar.addEventListener('mouseover', function(event){
    $('.navbar').removeClass('navup');
    console.log('mouseover');
});




// POPUP FUNCTION FOR COUNCIL



function council_toggle(){
    var blur2 = document.querySelector('#blur2');
    blur2.classList.toggle('active2');
    var popup_council = document.querySelector('.popup_council');
    popup_council.classList.toggle('active2');
    var popupimage = document.querySelector(".popupimage");
    var name = document.querySelector("#popup_head_name");
    var position = document.querySelector("#popup_head_occp");
    var content = document.querySelector("#popup_abtme_content");
    
}





var carousel = document.querySelector('.carousel');
var carousel_slide = Array.from(carousel.children);
const slideWidth = carousel_slide[0].getBoundingClientRect().width;
console.log(slideWidth);

carousel_slide.forEach((slide, index)=> {
    console.log(slide.children[0]);
    slide.children[0].style.left = slideWidth*index + 'px';
})

// const prevBtn = document.querySelector(".carousel_left");
// const nextBtn = document.querySelector(".carousel_right");

// var count = 0

// nextBtn.addEventListener('click', e => {
//     const currentSlide = carousel.querySelector('.current-slide');
//     const nextSlide = currentSlide.nextElementSibling;
//     const Amt = nextSlide.children[0].style.left;



//     carousel.style.transform = 'translateX(-' + Amt + ')';
//     currentSlide.classList.remove('current-slide');
//     nextSlide.classList.add('current-slide');
//     count++;
//     // console.log(count);
// })  























// POPUP FUNCTION FOR MEMBERS


function toggle(n){
    var blur = document.querySelector('#blur');
    blur.classList.toggle('active');
    var popup = document.querySelector('.popup');
    popup.classList.toggle('active');
    var popupimage = document.querySelector(".popupimage");
    var name = document.querySelector("#popup_head_name");
    var position = document.querySelector("#popup_head_occp");
    var content = document.querySelector("#popup_abtme_content");
    switch(n){
        case 1:
            popupimage.src = "./images/senate/devangkrishnan.jpeg";
            name.innerHTML = "Devang V Krishnan";
            position.innerHTML = "President";
            content.innerHTML="Hello I am Devang V Krishnan";
            break;
        case 2:
            popupimage.src = "./images/senate/anukaransingh.jpeg";
            name.innerHTML = "Anukaran Singh";
            position.innerHTML = "Vice President";
            content.innerHTML="Hello I am Anukaran Singh";
            break;
        case 3:
            popupimage.src = "./images/senate/aparnavinod.jpeg";
            name.innerHTML = "Aparna Vinod";
            position.innerHTML = "Cultural Secretary";
            content.innerHTML="Hello I am Aparna Vinod";
            break;
        case 4:
            popupimage.src = "./images/senate/muhammedroshan.jpeg";
            name.innerHTML = "Muhammed Roshan";
            position.innerHTML = "Science Secretary";
            content.innerHTML="Hello I am Muhammed Roshan";
            break;    
        case 5:
            popupimage.src = "./images/senate/agamdeepsingh.jpeg";
            name.innerHTML = "Agamdeep Singh";
            position.innerHTML = "CNC Secretary";
            content.innerHTML="Hello I am Agamdeep Singh. I am the head of CNC club.";
            break;
        case 6:
            popupimage.src = "./images/senate/sohumranade.jpeg";
            name.innerHTML = "Sohum Ranade";
            position.innerHTML = "ESIC Secretary";
            content.innerHTML="Hello I am Sohum Ranade";
            break;                                    
        case 7:
            popupimage.src = "./images/senate/himadri.png";
            name.innerHTML = "Himadri Sonowal";
            position.innerHTML = "FALC Secretary";
            content.innerHTML="Hello I am Himadri Sonowal";
            break;
        case 8:
            popupimage.src = "./images/senate/pranavkrishna.jpeg";
            name.innerHTML = "Pranav Krishna";
            position.innerHTML = "Sports Secretary";
            content.innerHTML="Hello I am Pranav Krishna";
            break;
        case 9:
            popupimage.src = "./images/senate/abhishekpatel.jpeg";
            name.innerHTML = "Abhishek Patel";
            position.innerHTML = "SDC Secretary";
            content.innerHTML="Hello I am Abhishek Patel";
            break;
        }

}