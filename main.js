



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
    if(window.scrollY > 0+'px'){
    
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