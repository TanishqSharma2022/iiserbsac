



const menu = document.querySelector(".list");
const menuBtn = document.querySelector(".menu-btn");
const cancelBtn = document.querySelector(".cancel-btn");

menuBtn.onclick = () => {
    menu.classList.add("active");
    menuBtn.classList.add("hide");
    document.querySelector(".blurred").classList.add("blur");
    document.querySelector('body').classList.add('active');

}

cancelBtn.onclick = () => {
    menu.classList.remove("active");
    menuBtn.classList.remove("hide");
    document.querySelector(".blurred").classList.remove("blur");
    document.querySelector('body').classList.remove('active');
}
document.querySelector(".blurred").onclick = () => {
    menu.classList.remove("active");
    menuBtn.classList.remove("hide");
    document.querySelector(".blurred").classList.remove("blur");
    document.querySelector('body').classList.remove('active');
}









$(document).ready(function(){
    $('#linked').click(function(){
        $("html, body").animate({
            scrollTop: window.innerHeight
              
        }, 500);
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

// var my_window = $(window);
// var position = my_window.scrollTop();
    
// my_window.scroll(function () {
//     if(window.scrollY > 1000+'px'){
    
//     if (my_window.scrollTop()  > position) {
//         setTimeout(function(){$('.navbar').addClass('navup')}, 2000);
//     }else{
//         $('.navbar').removeClass('navup');
//     }
    
    
//     console.log(window.scrollY);
//     position = my_window.scrollTop();}
// });

// var navbar = document.querySelector('.navbar');
// navbar.addEventListener('mouseover', function(event){
//     $('.navbar').removeClass('navup');
//     console.log('mouseover');
// });




// CAROUSEL CONTAINER FOR ACTIVITIES



const rightBtn = document.querySelector("#rightBtn");
const leftBtn = document.querySelector("#leftBtn");





// document.querySelector('.currentSlide').nextElementSibling.style.opacity = 1;
var track = document.querySelector(".carousel-container");
// var images = Array.from(track.children);
var images = track.querySelectorAll('img');
// console.log(images);
if(window.matchMedia("(min-width: 972px)").matches){

images.forEach((slide, index) => {
    slide.style.left = `${index*33.33}%`;
});
}else{
    images.forEach((slide, index) => {
        slide.style.left = `${index*100}%`;
    }); 
}



var numOfImages = images.length + 1;

var rightCount = 1
var leftCount = 1;
rightBtn.addEventListener("click",()=>{
    // const slider = document.querySelector('.slider');
    const img = document.querySelector("#image");
    // slider.style.transform = "translateX(-" + width*rightCount + "px)";
    var currentSlide = document.querySelector(".currentSlide");
    // console.log(currentSlide.nextElementSibling);
    const width = currentSlide.getBoundingClientRect().width;
    leftBtn.style.display = 'block';


    // var nextSlide = currentSlide.nextElementSibling;
    // document.querySelector('.carousel').scrollLeft += width;
    if(rightCount != numOfImages-1){
        track.style.transform = 'translateX(-'+width*rightCount+'px)';
        rightCount++;
        leftCount--;
    }
    console.log(rightCount);
    if(rightCount == numOfImages-1){
        rightBtn.style.display = "none";
    }
    if(leftCount != 1){
        leftBtn.style.display = "block";
    }
    

} )
if(leftCount == 1){
    leftBtn.style.display = 'none';
}
leftBtn.addEventListener("click",()=>{
    // const slider = document.querySelector('.slider');

    const img = document.querySelector("#image");
    const width = img.getBoundingClientRect().width;
    // document.querySelector('.carousel').scrollLeft -= width;
    console.log(leftCount);
    if(leftCount != numOfImages-1){
        track.style.transform = 'translateX('+width*leftCount+'px)';
        leftCount++;
        rightCount--;
    }
    if(leftCount == 1){
        leftBtn.style.display = "none";
    }

    if(rightCount != numOfImages-1){
        rightBtn.style.display = 'block';
    }
} );










// POPUP FUNCTION FOR MEMBERS


function toggle(n){
    
    var popup = document.querySelector('.popup');
    popup.classList.toggle('active');
    document.querySelector('body').classList.toggle('active');
    document.querySelector('.blurred').classList.toggle('blur');

    var popupimage = document.querySelector(".popupimage");
    var name = document.querySelector("#popup_head_name");
    var position = document.querySelector("#popup_head_occp");
    var content = document.querySelector("#popup_abtme_content");

    var sec_insta = document.querySelector("#sec_insta");
    var sec_linkedin = document.querySelector("#sec_linkedin");
    var sec_mail = document.querySelector("#sec_mail");
    var sec_whatsapp = document.querySelector("#sec_whatsapp");
    
    switch(n){
        case 1:
            popupimage.src = "./images/senate/devangkrishnan.jpeg";
            name.innerHTML = "Devang V Krishnan";
            position.innerHTML = "President";
            content.innerHTML="Hello, I am Devang V Krishnan. I am the President.";
            break;
        case 2:
            popupimage.src = "./images/senate/anukaransingh.jpeg";
            name.innerHTML = "Anukaran Singh";
            position.innerHTML = "Vice President";
            content.innerHTML="Hello, I am Anukaran Singh. I am the Vice-President.";
            break;
        case 3:
            popupimage.src = "./images/senate/aparnavinod.jpeg";
            name.innerHTML = "Aparna Vinod";
            position.innerHTML = "Cultural Secretary";
            content.innerHTML="Hello, I am Aparna Vinod. I am the head of the <b>Cultural Council</b>. I believe in `<i><b>going above and beyond with art.`</b></i>";
            sec_insta.setAttribute("href", "https://www.instagram.com/_.aparna_.vinod/");

            sec_linkedin.setAttribute("href", "https://in.linkedin.com/in/aparna-vinod-bb1573224");
            sec_mail.setAttribute("href", "mailto:aparna20@iiserb.ac.in");
            sec_whatsapp.setAttribute("href", "https://wa.me/919188067884");
            break;
        case 4:
            popupimage.src = "./images/senate/muhammedroshan.jpeg";
            name.innerHTML = "Muhammed Roshan";
            position.innerHTML = "Science Secretary";
            content.innerHTML="Hello, I am Muhammed Roshan. I am the head of the Science Council.";
            break;    
        case 5:
            popupimage.src = "./images/senate/agamdeepsingh.jpeg";
            name.innerHTML = "Agamdeep Singh";
            position.innerHTML = "CNC Secretary";
            content.innerHTML="Hello I am Agamdeep Singh. I am the head of CNC club. A computer vision research who loves being part of and promoting the hacker and maker culture.";
            sec_insta.setAttribute("href", "https://www.instagram.com/gimme_math_and_pizza/");
            sec_linkedin.setAttribute("href", "https://www.linkedin.com/in/agamdeep-iiser/");
            sec_mail.setAttribute("href", "mailto:agamdeep20@iiserb.ac.in");
            sec_whatsapp.setAttribute("href", "https://wa.me/919417574801");
            break;
        case 6:
            popupimage.src = "./images/senate/sohumranade.jpeg";
            name.innerHTML = "Sohum Ranade";
            position.innerHTML = "ESIC Secretary";
            content.innerHTML="Hello, I am Sohum Ranade. I am the head of the ESIC Council.";
            break;                                    
        case 7:
            popupimage.src = "./images/senate/himadri.png";
            name.innerHTML = "Himadri Sonowal";
            position.innerHTML = "FALC Secretary";
            content.innerHTML="Hello, I am Himadri Sonowal. I am the head of FALC Council.";
            break;
        case 8:
            popupimage.src = "./images/senate/pranavkrishna.jpeg";
            name.innerHTML = "Pranav Krishna";
            position.innerHTML = "Sports Secretary";
            content.innerHTML="Hello, I am Pranav Krishna. I am the head of Sports Council.";
            break;
        case 9:
            popupimage.src = "./images/senate/abhishekpatel.jpeg";
            name.innerHTML = "Abhishek Patel";
            position.innerHTML = "SDC Secretary";
            content.innerHTML="Hello, I am Abhishek Patel. I am the head of SDC Council.";
            break;
        
        case 10:
            popupimage.src = "./images/senate/amanKumar.jpg";
            name.innerHTML = "Aman Kumar";
            position.innerHTML = "RC Secretary";
            content.innerHTML="Hello, I am Aman Kumar. I am the head of RC Secretary.";
            break;
        
        case 11:
            popupimage.src = "./images/senate/AaryaPalwekar.jpg";
            name.innerHTML = "Aarya Palwekar";
            position.innerHTML = "RC Secretary";
            content.innerHTML="Hello, I am Aarya Palwekar. I am the head of RC Secretary.";
            break;
        }

}









function council_toggle(n){
    
    var popup_council = document.querySelector('.popup_council');
    popup_council.classList.toggle('active2');

    document.querySelector('body').classList.toggle('active');
    document.querySelector('.blurred').classList.toggle('blur');

    
    var logo = document.querySelector(".council_logo");
    var content = document.querySelector(".pcontent");
    var boxes = document.querySelectorAll(".square");
    var insta_handle = document.querySelector("#instahandle");
    var gmail_handle = document.querySelector("#gmailhandle");
    var club_head_name = document.querySelector("#club_head_name");
    var club_head_email = document.querySelector("#club_head_email");
    var club_head_no = document.querySelector("#club_head_no");
    var club_head_image = document.querySelector("#club_head_image");





    var weblink = document.querySelector("#weblink");



    switch(n){

        case 1:
            logo.src = "./images/cultural_council.png";
            content.innerHTML = "<ul><li>Aim to promote as well as practice different cultural activities like dance, music, drama in the Institute throughout the year.</li><li>Coordinate and arrange participation of institute in the Inter IISER Cultural Meet – IICM. </li><li>Organize regular classes or learning sessions for various cultural aspects on the demand of the clubs or the students.</li>";
            // CLUB 1
            boxes[0].style.display = "flex";
            weblink.setAttribute("href", "https://www.youtube.com/channel/UCoc_DuFuUUcNlfKmdwY0nbQ");

            boxes[0].querySelector("img").src = "./images/clubs/uttarang.png";
            boxes[0].querySelector("#club_name").innerHTML = "Uttarang Club";
            document.querySelector("#sqr1").setAttribute("href", "https://www.instagram.com/uttarang_iiserb");
            // boxes[0].querySelector("#member_name").innerHTML = "Chinmayee Goswami `20 <br> Animesh Patra `20";

            // CLUB 2
            boxes[1].style.display = "flex";

            boxes[1].querySelector("img").src = "./images/clubs/aarambh.png";
            boxes[1].querySelector("#club_name").innerHTML = "Aarambh Club";
            document.querySelector("#sqr2").setAttribute("href", "https://www.instagram.com/aarambh_iiserb");

            // boxes[1].querySelector("#member_name").innerHTML = "Aniket Asthana `20 <br> Vaishnavi Agarwal `19";
            boxes[2].style.display="flex";

            // CLUB 3 
            boxes[2].querySelector("img").src = "./images/clubs/mayura.png";
            boxes[2].querySelector("#club_name").innerHTML = "Mayuraa Club";
            document.querySelector("#sqr3").setAttribute("href", "https://www.instagram.com/mayuraa_iiserb");

            // boxes[2].querySelector("#member_name").innerHTML = "Sayantan Mondal `20";

            // CLUB 4
            boxes[3].style.display = "flex";
            boxes[3].querySelector("img").src = "./images/clubs/movie.png";
            boxes[3].querySelector("#club_name").innerHTML = "Movie Club";
            document.querySelector("#sqr4").setAttribute("href", "https://www.instagram.com/movieclub_iiserb");

            // boxes[3].querySelector("#member_name").innerHTML = "Deependra Singh Siniswar `19 <br> Udit Varma `19 <br> Abhinav Purohit `20";
            
            boxes[4].style.display = "none";
            boxes[5].style.display = "none";
            boxes[6].style.display = "none";
            boxes[7].style.display = "none";


            // insta_handle.innerHTML = "@iiserb.cultural"
            insta_handle.setAttribute("href", "https://www.instagram.com/iiserb.cultural/");

            // gmail_handle.innerHTML = "culturalcouncil@iiserb.ac.in";
            gmail_handle.setAttribute("href", "mailto:culturalcouncil@iiserb.ac.in")

            club_head_email.innerHTML = "aparna20@iiserb.ac.in";
            club_head_no.innerHTML = "9188067884";
            club_head_name.innerHTML = "Aparna Vinod";
            club_head_image.src = "./images/senate/aparnavinod.jpeg";
                
            
            break;
        
        case 2:
            logo.src = "./images/cnc_logo.png";
            content.innerHTML = "<ul><li>Provide financial resources and administrative support for Programming, Photography and Gaming Club.</li><li>Technical support in conducting student elections, and event conduction for other councils and clubs.</li><li>Host Armageddon: A 3 day gaming and techno fest with photowalks, programming competitions and E-Sports tournaments in 8 games. We release really cool merch that you can buy before the fest.</li></ul>";
            boxes[0].style.display = "flex";

            boxes[0].querySelector("img").src = "./images/clubs/cyberheathens.png";
            boxes[0].querySelector("#club_name").innerHTML = "CyberHeathens (Programming Club)";
            // boxes[0].querySelector("#member_name").innerHTML = "Chinmayee Goswami `20 <br> Animesh Patra `20";


            boxes[1].style.display = "flex";

            boxes[1].querySelector("img").src = "./images/clubs/gaming.png";
            boxes[1].querySelector("#club_name").innerHTML = "Resurgence (Gaming Club)";
            // boxes[0].querySelector("#member_name").innerHTML = "Chinmayee Goswami `20 <br> Animesh Patra `20";
            boxes[2].style.display="flex";

            boxes[2].querySelector("img").src = "./images/clubs/photography.png";
            boxes[2].querySelector("#club_name").innerHTML = "Photography Club)";

            // boxes[2].querySelector("#club_name").appendChild(document.createTextNode(""));
            // boxes[2].querySelector("#member_name").innerHTML = "Chinmayee Goswami `20 <br> Animesh Patra `20";

            boxes[3].style.display = "none";
            boxes[4].style.display = "none";
            boxes[5].style.display = "none";
            boxes[6].style.display = "none";
            boxes[7].style.display = "none";

            // insta_handle.innerHTML = "@cnc_iiserb"
            insta_handle.setAttribute("href", "https://www.instagram.com/cnc_iiserb/");

            // gmail_handle.innerHTML = "cnc@iiserb.ac.in";
            gmail_handle.setAttribute("href", "mailto:cnc@iiserb.ac.in");

            club_head_email.innerHTML = "agamdeep20@iiserb.ac.in";
            club_head_no.innerHTML = "";
            club_head_name.innerHTML = "Agamdeep Singh";
            club_head_image.src = "./images/senate/agamdeepsingh.jpeg";
            
            // website handle
            weblink.setAttribute("href", "https://sites.google.com/iiserb.ac.in/cnc/cnc");
            
            break;
        
        case 3:
            logo.src = "./images/falc.png";
            content.innerHTML = "<ul><li>“Artistic” council of IISER Bhopal</li><li>Conduct annual fest- ARTS AND LETTERS; which has various signature events like Art Street (The cosplay one), Plane crash, Big paper, Face painting, Battle of Fandoms and many many more.</li><li>Organize events throughout the year through various clubs that promote the creative and artistic mindset of students and give a platform to the ones with immense talent</li></ul>";

            boxes[0].style.display = "flex";
            boxes[1].style.display = "flex";

            boxes[0].querySelector("img").src = "./images/clubs/quiz.png";
            boxes[0].querySelector("#club_name").innerHTML = "IBQC";
            // boxes[0].querySelector("#member_name").innerHTML = "Chinmayee Goswami `20 <br> Animesh Patra `20";

            weblink.setAttribute("href", "https://sites.google.com/d/1YfAHEMpPRmI9rUL3FGSAiJ9ezoDeElJV/p/1E4LypuWrDJyW58rHEGqgLcyvcicawYXI/edit");


            boxes[1].querySelector("img").src = "./images/clubs/aalankar.jpg";
            boxes[1].querySelector("#club_name").innerHTML = "Alankar Club";
            // boxes[0].querySelector("#member_name").innerHTML = "Chinmayee Goswami `20 <br> Animesh Patra `20";
            boxes[2].style.display="flex";

            boxes[2].querySelector("img").src = "./images/clubs/debate.png";
            boxes[2].querySelector("#club_name").innerHTML = "Debate Club";

            boxes[3].style.display = "flex";
            boxes[3].querySelector("img").src = "./images/clubs/book.png";
            boxes[3].querySelector("#club_name").innerHTML = "Book Club";
            // boxes[0].querySelector("#member_name").innerHTML = "Chinmayee Goswami `20 <br> Animesh Patra `20";


            boxes[4].style.display = "flex";
            boxes[4].querySelector("img").src = "./images/clubs/comix.png";
            boxes[4].querySelector("#club_name").innerHTML = "Comic Club";
            // boxes[0].querySelector("#member_name").innerHTML = "Chinmayee Goswami `20 <br> Animesh Patra `20";

            boxes[5].style.display = "flex";
            boxes[5].querySelector("img").src = "./images/clubs/aalekhya.png";
            boxes[5].querySelector("#club_name").innerHTML = "Aalekhya Club";


            // boxes[2].querySelector("#club_name").appendChild(document.createTextNode(""));
            // boxes[2].querySelector("#member_name").innerHTML = "Chinmayee Goswami `20 <br> Animesh Patra `20";

            boxes[6].style.display = "flex";
            boxes[6].querySelector("img").src = "./images/clubs/poetry.jpg";
            boxes[6].querySelector("#club_name").innerHTML = "Poetry Club";

            boxes[7].style.display = "none";


            // contact
            // insta_handle.innerHTML = "@falc_iiserb";
            insta_handle.setAttribute("href", "https://www.instagram.com/cnc_iiserb/");

            // gmail_handle.innerHTML = "falc@iiserb.ac.in";
            gmail_handle.setAttribute("href", "mailto:falc@iiserb.ac.in");

            club_head_email.innerHTML = "himadri20@iiserb.ac.in";
            club_head_no.innerHTML = "9365822726";
            club_head_name.innerHTML = "Himadri Sonowal";
            club_head_image.src = "./images/senate/himadri.png";
            break;
        
        case 4:
            logo.src = "./images/science.png";
            content.innerHTML = "<ul><li>It aims to provide high quality and interdisciplinary research platform to the students.</li><li>The main event it conducts is SINGULARITY, the flagship science fest of IISERB.</li></ul>";
            
            boxes[0].style.display = "flex";
            boxes[1].style.display = "flex";
            
            boxes[0].querySelector("img").src = "./images/clubs/ibac.png";
            boxes[0].querySelector("#club_name").innerHTML = "IBAC";
            // boxes[0].querySelector("#member_name").innerHTML = "Chinmayee Goswami `20 <br> Animesh Patra `20";

            weblink.setAttribute("href", "https://in.linkedin.com/company/science-council-iiser-bhopal");


            boxes[1].querySelector("img").src = "./images/clubs/eco.png";
            boxes[1].querySelector("#club_name").innerHTML = "Economics Club";
            // boxes[0].querySelector("#member_name").innerHTML = "Chinmayee Goswami `20 <br> Animesh Patra `20";
            boxes[2].style.display="flex";
            boxes[2].querySelector("img").src = "./images/clubs/ees.png";
            boxes[2].querySelector("#club_name").innerHTML = "EES Club";

            boxes[3].style.display = "flex";
            boxes[3].querySelector("img").src = "./images/clubs/bio.png";
            boxes[3].querySelector("#club_name").innerHTML = "BIO Club";
            // boxes[0].querySelector("#member_name").innerHTML = "Chinmayee Goswami `20 <br> Animesh Patra `20";


            boxes[4].style.display = "flex";
            boxes[4].querySelector("img").src = "./images/clubs/phy.png";
            boxes[4].querySelector("#club_name").innerHTML = "Physics Club";
            // boxes[0].querySelector("#member_name").innerHTML = "Chinmayee Goswami `20 <br> Animesh Patra `20";

            boxes[5].style.display = "flex";
            boxes[5].querySelector("img").src = "./images/clubs/maths.png";
            boxes[5].querySelector("#club_name").innerHTML = "Maths Club";

            boxes[6].style.display = "flex";
            boxes[6].querySelector("img").src = "./images/clubs/chem.png";
            boxes[6].querySelector("#club_name").innerHTML = "Chemistry Club";

            boxes[7].style.display = "flex";
            boxes[7].querySelector("img").src = "./images/clubs/chrysallis.png";
            boxes[7].querySelector("#club_name").innerHTML = "Chrysallis Magazine";


            // contact
            // insta_handle.innerHTML = "@science_council_iiserb";
            insta_handle.setAttribute("href", "https://www.instagram.com/science_council_iiserb/");

            // gmail_handle.innerHTML = "science_council@iiserb.ac.in";
            gmail_handle.setAttribute("href", "mailto:falc@iiserb.ac.in");

            club_head_email.innerHTML = "roshan20@iiserb.ac.in";
            club_head_no.innerHTML = "9365822726";
            club_head_name.innerHTML = "Muhammed Roshan";
            club_head_image.src = "./images/senate/muhammedroshan.jpeg";
            break;

        case 5:
            boxes[0].style.display = "flex";
            boxes[1].style.display = "flex";
            logo.src = "./images/esic.png";
            content.innerHTML = "<ul><li>As the name suggests, we are responsible for introducing new social initiatives and environmental policies and helping the community implement them.</li><li>  A part of our work includes spreading awareness about modern social approaches.</li><li> We also try and bring the most sustainable ways of living to the IISERB community. </li></ul>";

            boxes[0].querySelector("img").src = "./images/clubs/humansofiiserb.jpg";
            boxes[0].querySelector("#club_name").innerHTML = "Humans of IISER Bhopal";
            // boxes[0].querySelector("#member_name").innerHTML = "Chinmayee Goswami `20 <br> Animesh Patra `20";
            weblink.setAttribute("href", "https://cs2.iiserb.ac.in/activities/prayaas.php");



            boxes[1].querySelector("img").src = "./images/clubs/humansofiiserb.jpg";
            boxes[1].querySelector("#club_name").innerHTML = "Animal Welfare Society";
            // boxes[0].querySelector("#member_name").innerHTML = "Chinmayee Goswami `20 <br> Animesh Patra `20";

            boxes[2].style.display = "none";

            // boxes[2].querySelector("#club_name").appendChild(document.createTextNode(""));
            // boxes[2].querySelector("#member_name").innerHTML = "Chinmayee Goswami `20 <br> Animesh Patra `20";

            boxes[3].style.display = "none";
            boxes[4].style.display = "none";
            boxes[5].style.display = "none";
            boxes[6].style.display = "none";
            boxes[7].style.display = "none";

            // insta_handle.innerHTML = "@esic_iiserb"
            insta_handle.setAttribute("href", "https://www.instagram.com/cnc_iiserb/");

            // gmail_handle.innerHTML = "esic@iiserb.ac.in";
            gmail_handle.setAttribute("href", "mailto:cnc@iiserb.ac.in");

            club_head_email.innerHTML = "sranade20@iiserb.ac.in";
            club_head_no.innerHTML = "";
            club_head_name.innerHTML = "Sohum Ranade";
            club_head_image.src = "./images/senate/sohumranade.jpeg";
            
            break;

        case 6:

            logo.src = "./images/sports.png";
            content.innerHTML = "<ul><li>Organise events like IISM, Sangharsh, Mini Marathon etc.</li><li>Motivate people to learn sports and also practice it regularly</li><li>Looks after all sports facilities including grounds/courts and equipment</li><li>Works in association with Sports Office.</li><li>Conducts The Intra IISERB Sports Tournament, Sangharsh , held annually in the even semesters.</li></ul>";
            boxes[0].style.display = "none";
            boxes[1].style.display = "none";
            
            boxes[2].style.display = "none";

            // boxes[2].querySelector("#club_name").appendChild(document.createTextNode(""));
            // boxes[2].querySelector("#member_name").innerHTML = "Chinmayee Goswami `20 <br> Animesh Patra `20";

            weblink.setAttribute("href", "http://dosa.iiserb.ac.in/campus_facilities/sports");


            boxes[3].style.display = "none";
            boxes[4].style.display = "none";
            boxes[5].style.display = "none";
            boxes[6].style.display = "none";
            boxes[7].style.display = "none";

            // insta_handle.innerHTML = "@sports_iiserb"
            insta_handle.setAttribute("href", "https://www.instagram.com/sports_iiserb/");

            // gmail_handle.innerHTML = "sportscouncil@iiserb.ac.in";
            gmail_handle.setAttribute("href", "mailto:sportscouncil@iiserb.ac.in");

            club_head_email.innerHTML = "pranav@iiserb.ac.in";
            club_head_no.innerHTML = "";
            club_head_name.innerHTML = "Pranav Krishna";
            club_head_image.src = "./images/senate/pranavkrishna.jpeg";
            break;

        case 7:

            logo.src = "./images/sdc.png";
            content.innerHTML = "<ul><li>Conducts Orientations related to Academics (Primer, Pre-Majors, Majors) and Professionals(Internship, CV, etc).</li><li>Conducts Placements and Internship Drives.</li><li>Publishes written content like Carma and SDC Blogs</li><li>Conducts Model United Nations (MUN).</li><li>Organizes talks and events like Alumni Events and Alumni Meets</li></ul>";
            boxes[0].style.display = "flex";
           
            boxes[0].querySelector("img").src = "images/SDC Logo.jpg";
            boxes[0].querySelector("#club_name").innerHTML = "Placement Team";
            boxes[1].style.display = "none";
            
            boxes[2].style.display = "none";

            // boxes[2].querySelector("#club_name").appendChild(document.createTextNode(""));
            // boxes[2].querySelector("#member_name").innerHTML = "Chinmayee Goswami `20 <br> Animesh Patra `20";


            weblink.setAttribute("href", "https://sdciiserb.wordpress.com/");


            boxes[3].style.display = "none";
            boxes[4].style.display = "none";
            boxes[5].style.display = "none";
            boxes[6].style.display = "none";
            boxes[7].style.display = "none";

            // insta_handle.innerHTML = "@sports_iiserb"
            insta_handle.setAttribute("href", "https://www.instagram.com/sdc_iiserb/");

            // gmail_handle.innerHTML = "sportscouncil@iiserb.ac.in";
            gmail_handle.setAttribute("href", "mailto:sdc@iiserb.ac.in");

            club_head_email.innerHTML = "abhishekp20@iiserb.ac.in";
            club_head_no.innerHTML = "+918999366201";
            club_head_name.innerHTML = "Abhishek Patel";
            club_head_image.src = "./images/senate/abhishekpatel.jpeg";
            break;
        
        case 8:

            logo.src = "./images/rc.jpg";
            content.innerHTML = "<ul><li>RC serves as the channel to convey the requests or representations of the students to the institute. </li><li>It is a team of elected representatives from a class, department, mess and hostel.</li><li>It accounts for general body notions of academic and social life at the IISER-B campus.</li></ul>";
            boxes[0].style.display = "flex";
            boxes[1].style.display = "flex";
           
            boxes[0].querySelector("img").src = "images/1.png";
            boxes[0].querySelector("#club_name").innerHTML = "CRs";
            // boxes[0].querySelector("#member_name").innerHTML = "Chinmayee Goswami `20 <br> Animesh Patra `20";

            weblink.setAttribute("href", "Representativecouncil.html");


            boxes[1].querySelector("img").src = "images/2.png";
            boxes[1].querySelector("#club_name").innerHTML = "DRs";
            // boxes[0].querySelector("#member_name").innerHTML = "Chinmayee Goswami `20 <br> Animesh Patra `20";
            boxes[2].style.display="flex";
            boxes[2].querySelector("img").src = "images/3.png";
            boxes[2].querySelector("#club_name").innerHTML = "MRs";

            boxes[3].style.display = "flex";
            boxes[3].querySelector("img").src = "images/4.png";
            boxes[3].querySelector("#club_name").innerHTML = "HRs";
            // boxes[0].querySelector("#member_name").innerHTML = "Chinmayee Goswami `20 <br> Animesh Patra `20";


            boxes[4].style.display = "none";
            boxes[5].style.display = "none";
            boxes[6].style.display = "none";
            boxes[7].style.display = "none";

            // insta_handle.innerHTML = "@sac_iiserb"
            insta_handle.setAttribute("href", "https://www.instagram.com/sac_iiserb/");

            // gmail_handle.innerHTML = "rc@iiserb.ac.in";
            gmail_handle.setAttribute("href", "mailto:rc@iiserb.ac.in");

            club_head_email.innerHTML = "aman18@iiserb.ac.in";
            club_head_no.innerHTML = "";
            club_head_name.innerHTML = " Aman Kumar";
            club_head_image.src = "../images/senate/amanKumar.jpg";

            // let newpicture = document.createElement('img');
            
            // newpicture.setAttribute("src", "./images/4.png");
            // document.querySelector(".container").appendChild(newpicture)
            
            break;
        
        }




}



// BACKGROUND CAROUSEL

var i=0;
var backgroundImageList = ["./images/mainBackground/iiser4.jpeg", "./images/mainBackground/iiser2.jpeg", "./images/mainBackground/iiser1.png", "./images/mainBackground/iiser3.jpeg"];
var mainbackground = document.querySelector(".main");

function rightbg(){

    mainbackground.setAttribute("style", `background-image:linear-gradient(rgba(0, 0, 0, 0.3), rgba(0, 0, 0, 0.3)),url(${backgroundImageList[i]});`);

    i++;
    if(i==backgroundImageList.length){
        i=0;
    }
    
    // console.log(`This is ${backgroundImageList}`);
console.log("helo");
}

function leftbg(){

    mainbackground.setAttribute("style", `background-image:linear-gradient(rgba(0, 0, 0, 0.3), rgba(0, 0, 0, 0.3)), url(${backgroundImageList[i]});`);

    i--;
    if(i<=0){
        i=backgroundImageList.length-1;
    }
    
    // console.log(`This is ${backgroundImageList}`);
console.log(i);
}

// setTimeout(changebg, 2000);










// PRELOADER

window.addEventListener("load", function(){
    var loader = document.querySelector('.spinner-wrapper');
    loader.style.display = 'none';
})