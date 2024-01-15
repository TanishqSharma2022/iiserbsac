




const btnScrollToTop = document.querySelector(".scrollup");
const arrowup = btnScrollToTop.querySelector("i");
window.addEventListener('scroll', e => {
    btnScrollToTop.style.transform = window.scrollY > 20 ? 'translateY(0px)' : 'translateY(100px)';
    arrowup.style.animation = "slideup 1s 5 linear";
});












const menu = document.querySelector(".list");
const menuBtn = document.querySelector(".menu-btn");
const cancelBtn = document.querySelector(".cancel-btn");

menuBtn.onclick = () => {
    menu.classList.add("active");
    menuBtn.classList.add("hide");
    document.querySelector(".blurred").classList.add("blur");
    document.querySelector('body').classList.add('active');
    document.querySelector('.navbar').style.zIndex = 99999;

}

cancelBtn.onclick = () => {
    menu.classList.remove("active");
    menuBtn.classList.remove("hide");
    document.querySelector(".blurred").classList.remove("blur");
    document.querySelector('body').classList.remove('active');
    document.querySelector('.navbar').style.zIndex = 999;

}
document.querySelector(".blurred").onclick = () => {
    menu.classList.remove("active");
    menuBtn.classList.remove("hide");
    document.querySelector(".blurred").classList.remove("blur");
    document.querySelector('body').classList.remove('active');
    document.querySelector('.navbar').style.zIndex = 999;

}



function close_modal(){
    const modal = document.querySelector(".image_modal");
    const modal_container = document.querySelector(".modal_container");

    modal.classList.remove("appear");
}
    const modal = document.querySelector(".image_modal");
    const modal_image = document.querySelector(".modal_image");
    const modal_content_title = document.querySelector(".modal_content_title");
    const modal_content_para = document.querySelector(".modal_content_detail");

    const images = document.querySelectorAll(".glide__slides img");

    images.forEach((image, index) => {
        image.addEventListener('click', () => {
            console.log(image, index);
            const modal_container = document.querySelector(".modal_container");
            modal_content_title.innerHTML = image.getAttribute("data-title");
            modal_content_para.innerHTML = image.getAttribute("data-para");

            modal.classList.toggle("appear");
            // modal_container.style.backgroundImage = `linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url(${String(image.src)})`;
            modal_image.src = image.src;

        })
    })







// TO SMOOOOTH THE SCROLLING EFFECT OF THE NAVBAR
$(document).ready(function(){
    var scrollLink = $('.scroll');
    scrollLink.click(function(e){
        e.preventDefault();
        $('body, html').animate({
            scrollTop: $(this.hash).offset().top
        }, 5000);        
    })
});








/////////////// scroll top ///////////////////////////
// AT THE BOTTOM OF THE PAGE, THERE IS A BUTTON WHICH TAKES YOU TO THE TOP OF THE PAGE
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

















// POPUP FUNCTION FOR MEMBERS

// SAME AS COUNCIL ONE. N IS WHICH MEMBER IS PRESSED FROM THE LEFT STARTING FORM 1. IF PRESIDENT IS PRESSED, N = 1 AND ALL THE CASES OF N=1 ARE EXECUTED
function toggle(n){
    
    var popup = document.querySelector('.popup');
    popup.classList.toggle('active');
    document.querySelector('body').classList.toggle('active');
    document.querySelector('.blurred').classList.toggle('blur');

    document.querySelector('.blurred').addEventListener('click', e => {
        popup.classList.remove('active');
    })





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
            popupimage.src = "images/senate/senate_23_24/Debasmita.jpg";
            name.innerHTML = "Debasmita Panda";
            position.innerHTML = "Acting-President";
            content.innerHTML="Meet me, the cool and quirky by heart ! As the SAC President, I'm not just about making a difference; I'm about adding color and joy to every corner. Think of me as a blend of all the best Friends episodes - relatable, hilarious, and always there for you. Fueled by sitcoms and a love for food, this artist and leader is the friend you've always wanted. Get ready for some fun and inspiration, campus life's never been this vibrant!";
           
                //sec_insta.setAttribute("href", "");
         sec_linkedin.setAttribute("href", "https://www.linkedin.com/in/debasmita-panda-5150441b4");
         sec_mail.setAttribute("href", "mailto:@iiserb.ac.in");
         sec_whatsapp.setAttribute("href", "https://wa.me/+916370291813");
            break;
        case 2:
            popupimage.src = "./images/avatar.png";
            name.innerHTML = "Not elected";
            position.innerHTML = "Vice President 2023-24";
            content.innerHTML="";
           
               sec_insta.setAttribute("href", "#");
       sec_linkedin.setAttribute("href", "#");
         sec_mail.setAttribute("href", "mailto:#");
          sec_whatsapp.setAttribute("href", "#");
            break;
        case 3:
            popupimage.src = "images/senate/senate_23_24/Rohan.jpg";
            name.innerHTML = "Rohan Mehra";
            position.innerHTML = "Cultural Secretary";
            content.innerHTML="";
            
            
             sec_insta.setAttribute("href", "");
         sec_linkedin.setAttribute("href", "https://www.linkedin.com/in/mehra-rohan");
             sec_mail.setAttribute("href", "mailto:rohan21@iiserb.ac.in");
             sec_whatsapp.setAttribute("href", "https://wa.me/+918808398402");
            break;
        case 4:
            popupimage.src = "images/senate/senate_23_24/Suraj.jpg";
            name.innerHTML = "Suraj Chauhan";
            position.innerHTML = "Science Secretary";
            content.innerHTML="Science does not know its debt to imagination";
             
            
            sec_insta.setAttribute("href", "https://instagram.com/exceptional__surajchauhan?igshid=MzMyNGUyNmU2YQ==");
         sec_linkedin.setAttribute("href", "https://www.linkedin.com/in/suraj-chauhan-5a0664246");
         sec_mail.setAttribute("href", "mailto:surajc21@iiserb.ac.in ");
         sec_whatsapp.setAttribute("href", "https://wa.me/+918791528568");
            break;    
        case 5:
            popupimage.src = "images/senate/senate_23_24/srutanik.jpg";
            name.innerHTML = "Srutanik Bhaduri";
            position.innerHTML = "CNC Secretary";
            content.innerHTML="Hey there! I'm Srutanik, a 3rd-year DSE major. I build cool stuff, code for fun, and find my peace in the tunes of music. Let's keep it simple and enjoy the journey together!";
                 
            
            sec_insta.setAttribute("href", "");
         sec_linkedin.setAttribute("href", "https://www.linkedin.com/in/srutanik-bhaduri-3a9a691b9");
         sec_mail.setAttribute("href", "mailto:srutanik21@iiserb.ac.in ");
         sec_whatsapp.setAttribute("href", "https://wa.me/+918697396153");
            break;
        case 6:
            popupimage.src = "images/senate/senate_23_24/Omkar.jpg";
            name.innerHTML = "Omkar Tidke";
            position.innerHTML = "ESIC Secretary";
            content.innerHTML="3rd Year Undergraduate, EES Major Passionate Reader and an avid Traveller";
                   
            
            sec_insta.setAttribute("href", "");
         sec_linkedin.setAttribute("href", "https://www.linkedin.com/in/omkar-tidke-he-him-560036202");
         sec_mail.setAttribute("href", "mailto:omkar21@iiserb.ac.in ");
         sec_whatsapp.setAttribute("href", "https://wa.me/+917020551982");
            break;                                    
        case 7:
            popupimage.src = "images/senate/senate_23_24/Debasmita.jpg";
            name.innerHTML = "Debasmita Panda";
            position.innerHTML = "FALC Secretary";
            content.innerHTML="Meet me, the cool and quirky by heart ! As the FALC Secretary, I'm not just about making a difference; I'm about adding color and joy to every corner. Think of me as a blend of all the best Friends episodes - relatable, hilarious, and always there for you. Fueled by sitcoms and a love for food, this artist and leader is the friend you've always wanted. Get ready for some fun and inspiration, campus life's never been this vibrant!";
                   
            
            sec_insta.setAttribute("href", "");
         sec_linkedin.setAttribute("href", "");
         sec_mail.setAttribute("href", "mailto:@iiserb.ac.in");
         sec_whatsapp.setAttribute("href", "https://wa.me/+916370291813");
            break;
        case 8:
            popupimage.src = "images/senate/senate_23_24/Ashim.jpg";
            name.innerHTML = "Ashim Dhor";
            position.innerHTML = "Sports Secretary";
            content.innerHTML="Hey everyone, it's Ashim, your go-to Sports Maestro! I'm all about blending the unconventional with a touch of style, and I'm here to take our sports culture to new heights. Let's team up to redefine what excellence looks like in our arena. Drop by with your ideas, and let's sculpt a sports culture that's both classy and kickin'!Ready for a dash of class and a splash of adrenaline? Buckle up, folks!";
                   
            
            sec_insta.setAttribute("href", "https://www.instagram.com/ash_h.im/");
         sec_linkedin.setAttribute("href", "https://www.linkedin.com/in/ashim-dhor/");
         sec_mail.setAttribute("href", "mailto:ashim21@iiserb.ac.in");
         sec_whatsapp.setAttribute("href", "https://wa.me/+917086482909");
            break;
        case 9:
            popupimage.src = "images/senate/senate_23_24/saisab.png";
            name.innerHTML = " Saisab Sadhu";
            position.innerHTML = "SDC Secretary";
            content.innerHTML="I am Saisab Sadhu, Secretary for the Student Development Council (SDC). Fueled by my passion for enriching our student community, I weave various nuances into my responsibilities. I aim to foster an environment where innovation, collaboration, and professional growth take the lead. I intend to direct my efforts towards building a well-rounded student community with the tools and opportunities to advance in a thriving and fulfilling career path.";
                   
            
         sec_insta.setAttribute("href", "https://www.instagram.com/saisab_sadhu/");
         sec_linkedin.setAttribute("href", "https://www.linkedin.com/in/saisab-sadhu");
         sec_mail.setAttribute("href", "mailto:saisab21@iiserb.ac.in ");
         sec_whatsapp.setAttribute("href", "https://wa.me/+919933387874");
            break;
        
        case 10:
            popupimage.src = "images/senate/senate_23_24/adithyan.jpg";
            name.innerHTML = "Adithyan Cherusseri";
            position.innerHTML = "RC Secretary";
            content.innerHTML="Third-year EES major who can be spotted wearing headphones all the time";
                   
            
            sec_insta.setAttribute("href", "#");
         sec_linkedin.setAttribute("href", "https://www.linkedin.com/in/adithyancherusseri");
         sec_mail.setAttribute("href", "mailto:adithyan21@iiserb.ac.in ");
         sec_whatsapp.setAttribute("href", "https://wa.me/+918590484969");
            break;
    
    }
        // case 11:
        //     popupimage.src = "./images/avatar.png";
        //     name.innerHTML = "Not Elected";
        //     position.innerHTML = "RC Secretary";
        //     content.innerHTML="";
        //     break;
        // }

}








// COUNCIL POPUP FUNCTION - N IS WHICH COUNCIL IS PRESSED FROM THE LEFT STARTING FORM 1. IF CULTURAL COUNCIL IS PRESSED, N = 1 AND ALL THE CASES OF N=1 ARE 
function council_toggle(n){
    
    var popup_council = document.querySelector('.popup_council');
    popup_council.classList.toggle('active2');

    document.querySelector('body').classList.toggle('active');
    document.querySelector('.blurred').classList.toggle('blur');

    document.querySelector('.blurred').addEventListener('click', e => {
        popup_council.classList.remove('active2');

    })

    
    var logo = document.querySelector(".council_logo");
    var content = document.querySelector(".pcontent");
    var boxes = document.querySelectorAll(".square");
    var insta_handle = document.querySelector("#instahandle");
    var gmail_handle = document.querySelector("#gmailhandle");
    var club_head_name = document.querySelector("#club_head_name");
    var club_head_email = document.querySelector("#club_head_email");
    var club_head_no = document.querySelector("#club_head_no");
    var club_head_image = document.querySelector("#club_head_image");
    var club_under_us = document.querySelector(".clubs_under_us");
    var what = document.querySelector(".what");





    var weblink = document.querySelector("#weblink");



    switch(n){

        case 1:
            what.innerHTML="WHAT THE COUNCIL DOES";
            club_under_us.innerHTML="CLUBS UNDER US";
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
            boxes[8].style.display = "none";
            boxes[9].style.display = "none";
            boxes[10].style.display = "none";
            boxes[11].style.display = "none";
            boxes[12].style.display = "none";
            boxes[13].style.display = "none";
            boxes[14].style.display = "none";
            boxes[15].style.display = "none";
            boxes[16].style.display = "none";
            //boxes[17].style.display = "none";



            // insta_handle.innerHTML = "@iiserb.cultural"
            insta_handle.setAttribute("href", "https://www.instagram.com/iiserb.cultural/");

            // gmail_handle.innerHTML = "culturalcouncil@iiserb.ac.in";
            gmail_handle.setAttribute("href", "mailto:culturalcouncil@iiserb.ac.in")

            club_head_email.innerHTML = "rohan21@iiserb.ac.in";
            club_head_no.innerHTML = "+91 88083 98402";
            club_head_name.innerHTML = "Rohan Mehra";
            club_head_image.src = "images/senate/senate_23_24/Rohan.jpg";
                
            
            break;
        
        case 2:
            what.innerHTML="WHAT THE COUNCIL DOES";
            club_under_us.innerHTML="CLUBS UNDER US";
            logo.src = "./images/cnc_logo.png";
            content.innerHTML = "<ul><li>Provide financial resources and administrative support for Programming, Photography and Gaming Club.</li><li>Technical support in conducting student elections, and event conduction for other councils and clubs.</li><li>Host Armageddon: A 3 day gaming and techno fest with photowalks, programming competitions and E-Sports tournaments in 8 games. We release really cool merch that you can buy before the fest.</li></ul>";
            boxes[0].style.display = "flex";

            boxes[0].querySelector("img").src = "./images/clubs/cyberheathens.png";
            boxes[0].querySelector("#club_name").innerHTML = "CyberHeathens (Programming Club)";
            document.querySelector("#sqr1").setAttribute("href", "https://www.instagram.com/cnc_programming_division");

            // boxes[0].querySelector("#member_name").innerHTML = "Chinmayee Goswami `20 <br> Animesh Patra `20";


            boxes[1].style.display = "flex";

            boxes[1].querySelector("img").src = "./images/clubs/gaming.png";
            boxes[1].querySelector("#club_name").innerHTML = "Resurgence (Gaming Club)";
            document.querySelector("#sqr2").setAttribute("href", "https://www.instagram.com/resurgence_iiserb");

            // boxes[0].querySelector("#member_name").innerHTML = "Chinmayee Goswami `20 <br> Animesh Patra `20";
            boxes[2].style.display="flex";

            boxes[2].querySelector("img").src = "./images/clubs/photography.png";
            boxes[2].querySelector("#club_name").innerHTML = "Photography Club)";
            document.querySelector("#sqr3").setAttribute("href", "https://www.instagram.com/claude__glass");


            // boxes[2].querySelector("#club_name").appendChild(document.createTextNode(""));
            // boxes[2].querySelector("#member_name").innerHTML = "Chinmayee Goswami `20 <br> Animesh Patra `20";

            boxes[3].style.display = "none";
            boxes[4].style.display = "none";
            boxes[5].style.display = "none";
            boxes[6].style.display = "none";
            boxes[7].style.display = "none";
            boxes[8].style.display = "none";
            boxes[9].style.display = "none";
            boxes[10].style.display = "none";
            boxes[11].style.display = "none";
            boxes[12].style.display = "none";
            boxes[13].style.display = "none";
            boxes[14].style.display = "none";
            boxes[15].style.display = "none";
            boxes[16].style.display = "none";
            //boxes[17].style.display = "none";

            // insta_handle.innerHTML = "@cnc_iiserb"
            insta_handle.setAttribute("href", "https://www.instagram.com/cnc_iiserb/");

            // gmail_handle.innerHTML = "cnc@iiserb.ac.in";
            gmail_handle.setAttribute("href", "mailto:cnc@iiserb.ac.in");

            club_head_email.innerHTML = "srutanik21@iiserb.ac.in  ";
            club_head_no.innerHTML = "+918697396153";
            club_head_name.innerHTML = "Srutanik Bhaduri";
            club_head_image.src = "images/senate/senate_23_24/srutanik.jpg";
            
            // website handle
            weblink.setAttribute("href", "https://sites.google.com/iiserb.ac.in/cnc/cnc");
            
            break;
        
        case 3:
            what.innerHTML="WHAT THE COUNCIL DOES";
            club_under_us.innerHTML="CLUBS UNDER US";
            logo.src = "./images/falc.png";
            content.innerHTML = "<ul><li>“Artistic” council of IISER Bhopal</li><li>Conduct annual fest- ARTS AND LETTERS; which has various signature events like Art Street (The cosplay one), Plane crash, Big paper, Face painting, Battle of Fandoms and many many more.</li><li>Organize events throughout the year through various clubs that promote the creative and artistic mindset of students and give a platform to the ones with immense talent</li></ul>";

            boxes[0].style.display = "flex";
            boxes[1].style.display = "flex";

            boxes[0].querySelector("img").src = "./images/clubs/quiz.png";
            boxes[0].querySelector("#club_name").innerHTML = "IBQC";
            // boxes[0].querySelector("#member_name").innerHTML = "Chinmayee Goswami `20 <br> Animesh Patra `20";
            document.querySelector("#sqr1").setAttribute("href", "https://www.instagram.com/iiserb_quizclub");

            weblink.setAttribute("href", "https://sites.google.com/d/1YfAHEMpPRmI9rUL3FGSAiJ9ezoDeElJV/p/1E4LypuWrDJyW58rHEGqgLcyvcicawYXI/edit");


            boxes[1].querySelector("img").src = "./images/clubs/aalankar.jpg";
            boxes[1].querySelector("#club_name").innerHTML = "Alankar Club";
            document.querySelector("#sqr2").setAttribute("href", "https://www.instagram.com/alankar_iiserb");

            // boxes[0].querySelector("#member_name").innerHTML = "Chinmayee Goswami `20 <br> Animesh Patra `20";
            boxes[2].style.display="flex";

            boxes[2].querySelector("img").src = "./images/clubs/debate.png";
            boxes[2].querySelector("#club_name").innerHTML = "Debate Club";
            document.querySelector("#sqr3").setAttribute("href", "https://www.instagram.com/debsoc.iiserb");

            boxes[3].style.display = "flex";
            boxes[3].querySelector("img").src = "./images/clubs/book.png";
            boxes[3].querySelector("#club_name").innerHTML = "Book Club";
            document.querySelector("#sqr4").setAttribute("href", "https://www.instagram.com/iiserbhopalbookclub");

            // boxes[0].querySelector("#member_name").innerHTML = "Chinmayee Goswami `20 <br> Animesh Patra `20";


            boxes[4].style.display = "flex";
            boxes[4].querySelector("img").src = "./images/clubs/comix.png";
            boxes[4].querySelector("#club_name").innerHTML = "Comic Club";
            document.querySelector("#sqr5").setAttribute("href", "https://www.instagram.com/comixclubiiserb");

            // boxes[0].querySelector("#member_name").innerHTML = "Chinmayee Goswami `20 <br> Animesh Patra `20";

            boxes[5].style.display = "flex";
            boxes[5].querySelector("img").src = "./images/clubs/aalekhya.png";
            boxes[5].querySelector("#club_name").innerHTML = "Aalekhya Club";
            document.querySelector("#sqr6").setAttribute("href", "https://www.instagram.com/aalekhya_iiserb");



            // boxes[2].querySelector("#club_name").appendChild(document.createTextNode(""));
            // boxes[2].querySelector("#member_name").innerHTML = "Chinmayee Goswami `20 <br> Animesh Patra `20";

            boxes[6].style.display = "flex";
            boxes[6].querySelector("img").src = "./images/clubs/poetry.jpg";
            boxes[6].querySelector("#club_name").innerHTML = "Poetry Club";

            boxes[7].style.display = "none";
            boxes[8].style.display = "none";
            boxes[9].style.display = "none";
            boxes[10].style.display = "none";
            boxes[11].style.display = "none";
            boxes[12].style.display = "none";
            boxes[13].style.display = "none";
            boxes[14].style.display = "none";
            boxes[15].style.display = "none";
            boxes[16].style.display = "none";
            //boxes[17].style.display = "none";


            // contact
            // insta_handle.innerHTML = "@falc_iiserb";
            insta_handle.setAttribute("href", "https://www.instagram.com/falc_iiserb/");

            // gmail_handle.innerHTML = "falc@iiserb.ac.in";
            gmail_handle.setAttribute("href", "mailto:falc@iiserb.ac.in");

            club_head_email.innerHTML = "debasmitap21@iiserb.ac.in";
            club_head_no.innerHTML = "+91 6370291813";
            club_head_name.innerHTML = "Debasmita Panda";
            club_head_image.src = "images/senate/senate_23_24/Debasmita.jpg";
            break;
        
        case 4:
            what.innerHTML="WHAT THE COUNCIL DOES";
            club_under_us.innerHTML="CLUBS UNDER US";
            logo.src = "./images/science.png";
            content.innerHTML = "<ul><li>It aims to provide high quality and interdisciplinary research platform to the students.</li><li>The main event it conducts is SINGULARITY, the flagship science fest of IISERB.</li></ul>";
            
            boxes[0].style.display = "flex";
            boxes[1].style.display = "flex";
            
            boxes[0].querySelector("img").src = "./images/clubs/ibac.png";
            boxes[0].querySelector("#club_name").innerHTML = "IBAC";
            // boxes[0].querySelector("#member_name").innerHTML = "Chinmayee Goswami `20 <br> Animesh Patra `20";
            document.querySelector("#sqr1").setAttribute("href", "https://sites.google.com/view/astronomyiiserb/home");

            weblink.setAttribute("href", "https://in.linkedin.com/company/science-council-iiser-bhopal");


            boxes[1].querySelector("img").src = "./images/clubs/eco.png";
            boxes[1].querySelector("#club_name").innerHTML = "Economics Club";
            document.querySelector("#sqr2").setAttribute("href", "https://www.instagram.com/iiserb_econ_club");

            // boxes[0].querySelector("#member_name").innerHTML = "Chinmayee Goswami `20 <br> Animesh Patra `20";
            boxes[2].style.display="flex";
            boxes[2].querySelector("img").src = "./images/clubs/ees.png";
            boxes[2].querySelector("#club_name").innerHTML = "EES Club";
            document.querySelector("#sqr3").setAttribute("href", "https://www.instagram.com/earth_and_environment_iiserb");


            boxes[3].style.display = "flex";
            boxes[3].querySelector("img").src = "./images/clubs/bio.png";
            boxes[3].querySelector("#club_name").innerHTML = "BIO Club";
            document.querySelector("#sqr4").setAttribute("href", "https://www.instagram.com/iiserb_bioclub");

            // boxes[0].querySelector("#member_name").innerHTML = "Chinmayee Goswami `20 <br> Animesh Patra `20";


            boxes[4].style.display = "flex";
            boxes[4].querySelector("img").src = "./images/clubs/phy.png";
            boxes[4].querySelector("#club_name").innerHTML = "Physics Club";
            document.querySelector("#sqr5").setAttribute("href", "https://www.instagram.com/phyclub_iiserb");

            // boxes[0].querySelector("#member_name").innerHTML = "Chinmayee Goswami `20 <br> Animesh Patra `20";

            boxes[5].style.display = "flex";
            boxes[5].querySelector("img").src = "./images/clubs/maths.png";
            boxes[5].querySelector("#club_name").innerHTML = "Maths Club";
            document.querySelector("#sqr6").setAttribute("href", "https://www.instagram.com/mathsclub_iiserb");


            boxes[6].style.display = "flex";
            boxes[6].querySelector("img").src = "./images/clubs/chem.png";
            boxes[6].querySelector("#club_name").innerHTML = "Chemistry Club";
            document.querySelector("#sqr5").setAttribute("href", "https://www.instagram.com/chemclub_iiserb");


            boxes[7].style.display = "flex";
            boxes[7].querySelector("img").src = "./images/clubs/chrysallis.png";
            boxes[7].querySelector("#club_name").innerHTML = "Chrysalis Magazine";
            document.querySelector("#sqr5").setAttribute("href", "https://www.instagram.com/chrysalisiiserb");

            boxes[8].style.display = "none";
            boxes[9].style.display = "none";
            boxes[10].style.display = "none";
            boxes[11].style.display = "none";
            boxes[12].style.display = "none";
            boxes[13].style.display = "none";
            boxes[14].style.display = "none";
            boxes[15].style.display = "none";
            boxes[16].style.display = "none";
            //boxes[17].style.display = "none";



            // contact
            // insta_handle.innerHTML = "@science_council_iiserb";
            insta_handle.setAttribute("href", "https://www.instagram.com/science_council_iiserb/");

            // gmail_handle.innerHTML = "science_council@iiserb.ac.in";
            gmail_handle.setAttribute("href", "mailto:sciencecouncil@iiserb.ac.in");

            club_head_email.innerHTML = "surajc21@iiserb.ac.in";
            club_head_no.innerHTML = "9365822726";
            club_head_name.innerHTML = "Suraj Chauhan";
            club_head_image.src = "images/senate/senate_23_24/Suraj.jpg";
            break;

        case 5:
            what.innerHTML="WHAT THE COUNCIL DOES";
            club_under_us.innerHTML="CLUBS UNDER US";
            boxes[0].style.display = "flex";
            boxes[1].style.display = "flex";
            logo.src = "./images/esic.png";
            content.innerHTML = "<ul><li>As the name suggests, we are responsible for introducing new social initiatives and environmental policies and helping the community implement them.</li><li>  A part of our work includes spreading awareness about modern social approaches.</li><li> We also try and bring the most sustainable ways of living to the IISERB community. </li></ul>";

            boxes[0].querySelector("img").src = "./images/clubs/humansofiiserb.jpg";
            boxes[0].querySelector("#club_name").innerHTML = "Humans of IISER Bhopal";

            document.querySelector("#sqr1").setAttribute("href", "https://www.instagram.com/humansofiiserb");

            // boxes[0].querySelector("#member_name").innerHTML = "Chinmayee Goswami `20 <br> Animesh Patra `20";
            weblink.setAttribute("href", "https://cs2.iiserb.ac.in/activities/prayaas.php");



            boxes[1].querySelector("img").src = "./images/clubs/humansofiiserb.jpg";
            boxes[1].querySelector("#club_name").innerHTML = "Animal Welfare Society";
            document.querySelector("#sqr2").setAttribute("href", "https://www.instagram.com/");

            // boxes[0].querySelector("#member_name").innerHTML = "Chinmayee Goswami `20 <br> Animesh Patra `20";

            boxes[2].style.display = "none";

            // boxes[2].querySelector("#club_name").appendChild(document.createTextNode(""));
            // boxes[2].querySelector("#member_name").innerHTML = "Chinmayee Goswami `20 <br> Animesh Patra `20";

            boxes[3].style.display = "none";
            boxes[4].style.display = "none";
            boxes[5].style.display = "none";
            boxes[6].style.display = "none";
            boxes[7].style.display = "none";
            boxes[8].style.display = "none";
            boxes[9].style.display = "none";
            boxes[10].style.display = "none";
            boxes[11].style.display = "none";
            boxes[12].style.display = "none";
            boxes[13].style.display = "none";
            boxes[14].style.display = "none";
            boxes[15].style.display = "none";
            boxes[16].style.display = "none";
            //boxes[17].style.display = "none";

            // insta_handle.innerHTML = "@esic_iiserb"
            insta_handle.setAttribute("href", "https://www.instagram.com/esic_iiserb/");

            // gmail_handle.innerHTML = "esic@iiserb.ac.in";
            gmail_handle.setAttribute("href", "mailto:esic@iiserb.ac.in");

            club_head_email.innerHTML = "omkar21@iiserb.ac.in ";
            club_head_no.innerHTML = "+91 70205 51982";
            club_head_name.innerHTML = "Omkar Tidke";
            club_head_image.src = "images/senate/senate_23_24/Omkar.jpg";
            
            break;

        case 6:
            what.innerHTML="WHAT THE COUNCIL DOES";
            club_under_us.innerHTML="CLUBS UNDER US";
            logo.src = "./images/sports.png";
            content.innerHTML = "<ul><li>The Sports Council at IISER Bhopal plays a pivotal role in fostering a dynamic and inclusive environment of sportsmanship and community engagement. This council is grounded in the philosophy that physical well-being is integral to mental acuity. It efficiently oversees a variety of sports clubs, each spearheaded by dedicated coordinators who are committed not only to their respective sports but also to promoting unity and teamwork within the community</li><li>Beyond facilitating competitive sports, the Council organizes significant annual events, such as the Inter IISERs Sports Tournament (IISM), Sangharsh, and Mini Marathons. These events, along with those supported by the Ministry of Education (MoE), transcend traditional competitive boundaries, serving as expansive celebrations that invite widespread participation and foster a sense of shared enthusiasm and camaraderie among attendees. </li><li>What distinguishes the Sports Council at IISER Bhopal is its dedication to promoting holistic wellness. The Council's initiatives extend beyond mere athletic triumphs to encompass a broader vision of well-being. Through various fitness programs and initiatives, the Council actively encourages the entire IISER Bhopal community to pursue personal excellence and holistic health.</li><li>The institution invites its community to be part of this vibrant journey that intertwines athleticism with communal well-being. Each sportive encounter—be it a game, a run, or a match—is an opportunity to strengthen community bonds, nurture physical fitness, and cultivate a vibrant, healthy, and thriving community. The ethos of the Council can be summed up in its guiding mantra: Stay Fit, Stay Healthy, Stay Awesome!</li></ul>";
            weblink.setAttribute("href", "http://dosa.iiserb.ac.in/campus_facilities/sports");
            boxes[0].style.display = "flex";
            boxes[1].style.display = "flex";
            
            boxes[0].querySelector("img").src = "images/clubs/football.png";
            boxes[0].querySelector("#club_name").innerHTML = "Football Club ";
            // boxes[0].querySelector("#member_name").innerHTML = "Chinmayee Goswami `20 <br> Animesh Patra `20";
            document.querySelector("#sqr1").setAttribute("href", "https://www.instagram.com/football_iiserb");

           


            boxes[1].querySelector("img").src = "images/clubs/kabbadi.png";
            boxes[1].querySelector("#club_name").innerHTML = "Kabaddi ";
            document.querySelector("#sqr2").setAttribute("href", "https://www.instagram.com/kabaddi_iiserb");

            // boxes[0].querySelector("#member_name").innerHTML = "Chinmayee Goswami `20 <br> Animesh Patra `20";
            boxes[2].style.display="flex";
            boxes[2].querySelector("img").src = "images/clubs/badminton.png";
            boxes[2].querySelector("#club_name").innerHTML = "Badminton Club ";
            document.querySelector("#sqr3").setAttribute("href", "https://www.instagram.com/badminton_iiserb");


            boxes[3].style.display = "flex";
            boxes[3].querySelector("img").src = "images/clubs/basketball.png";
            boxes[3].querySelector("#club_name").innerHTML = "Basketball Club ";
            document.querySelector("#sqr4").setAttribute("href", "https://www.instagram.com/basketball_iiserb");

            // boxes[0].querySelector("#member_name").innerHTML = "Chinmayee Goswami `20 <br> Animesh Patra `20";


            boxes[4].style.display = "flex";
            boxes[4].querySelector("img").src = "images/clubs/cricket.png";
            boxes[4].querySelector("#club_name").innerHTML = "Cricket Club";
            document.querySelector("#sqr5").setAttribute("href", "https://www.instagram.com/cricket_iiser_b");

            // boxes[0].querySelector("#member_name").innerHTML = "Chinmayee Goswami `20 <br> Animesh Patra `20";

            boxes[5].style.display = "flex";
            boxes[5].querySelector("img").src = "images/clubs/khokho.png";
            boxes[5].querySelector("#club_name").innerHTML = "Kho Kho Club ";
            document.querySelector("#sqr6").setAttribute("href", "https://www.instagram.com/khokho.iiserb");


            boxes[6].style.display = "flex";
            boxes[6].querySelector("img").src = "images/clubs/volleyball.png";
            boxes[6].querySelector("#club_name").innerHTML = "Volleyball Club ";
            document.querySelector("#sqr7").setAttribute("href", "https://www.instagram.com/iiserb_volleyball");


            boxes[7].style.display = "flex";
            boxes[7].querySelector("img").src = "images/clubs/gymkanna.png";
            boxes[7].querySelector("#club_name").innerHTML = "Gymkhana";
            document.querySelector("#sqr8").setAttribute("href", "https://www.instagram.com/gymkhana_iiserb");


            boxes[8].style.display="flex";
            boxes[8].querySelector("img").src = "images/clubs/athletics.png";
            boxes[8].querySelector("#club_name").innerHTML = "Athletics Club ";
            document.querySelector("#sqr9").setAttribute("href", "https://www.instagram.com/athletics_iiserb");


            boxes[9].style.display = "flex";
            boxes[9].querySelector("img").src = "images/clubs/carrom.png";
            boxes[9].querySelector("#club_name").innerHTML = "Carrom Club ";
            document.querySelector("#sqr10").setAttribute("href", "https://www.instagram.com/carrom_iiserb");

            // boxes[0].querySelector("#member_name").innerHTML = "Chinmayee Goswami `20 <br> Animesh Patra `20";


            boxes[10].style.display = "flex";
            boxes[10].querySelector("img").src = "images/clubs/taekondow.png";
            boxes[10].querySelector("#club_name").innerHTML = "Taekwondo Club";
            document.querySelector("#sqr11").setAttribute("href", "https://www.instagram.com/martialarts_iiserb");

            // boxes[0].querySelector("#member_name").innerHTML = "Chinmayee Goswami `20 <br> Animesh Patra `20";

            boxes[11].style.display = "flex";
            boxes[11].querySelector("img").src = "images/clubs/chess.jpg";
            boxes[11].querySelector("#club_name").innerHTML = "Chess Club ";
            document.querySelector("#sqr12").setAttribute("href", "https://www.instagram.com/iiserb_chess");


            boxes[12].style.display = "flex";
            boxes[12].querySelector("img").src = "images/clubs/tabletennis.png";
            boxes[12].querySelector("#club_name").innerHTML = "Table Tennis Club ";
            document.querySelector("#sqr13").setAttribute("href", "https://www.instagram.com/iiserb_table_tennis");


            boxes[13].style.display = "flex";
            boxes[13].querySelector("img").src = "images/clubs/lawntennis.png";
            boxes[13].querySelector("#club_name").innerHTML = "Lawn Tennis";
           // document.querySelector("#sqr14").setAttribute("href", "https://www.instagram.com/gymkhana_iiserb");

           boxes[14].style.display = "flex";
           boxes[14].querySelector("img").src = "images/clubs/yoga.png";
           boxes[14].querySelector("#club_name").innerHTML = "Yoga Club ";
           document.querySelector("#sqr15").setAttribute("href", "https://www.instagram.com/yoga_iiserb");
            
           boxes[15].style.display = "none";
            boxes[16].style.display = "none";
       




            // insta_handle.innerHTML = "@sports_iiserb"
            insta_handle.setAttribute("href", "https://www.instagram.com/sports_iiserb/");

            // gmail_handle.innerHTML = "sportscouncil@iiserb.ac.in";
            gmail_handle.setAttribute("href", "mailto:sportscouncil@iiserb.ac.in");

            club_head_email.innerHTML = "ashim21@iiserb.ac.in ";
            club_head_no.innerHTML = "+91 70864 82909";
            club_head_name.innerHTML = "Ashim Dhor";
            club_head_image.src = "images/senate/senate_23_24/Ashim.jpg";
            break;

        case 7:
            what.innerHTML="";
            club_under_us.innerHTML="Areas of Work";
            logo.src = "./images/sdc.png";
            content.innerHTML = "";
            boxes[0].style.display = "flex";
            weblink.setAttribute("href", "https://sites.google.com/view/sdc-iiserb/home");
            boxes[0].querySelector("img").src = "images/clubs/Placements.png";
            boxes[0].querySelector("#club_name").innerHTML = "Placements and Internships";
            document.querySelector("#sqr1").setAttribute("href", "https://sites.google.com/view/sdc-iiserb/home");
            
            
            
            
            boxes[1].querySelector("img").src = "images/clubs/Carma.png";
            boxes[1].querySelector("#club_name").innerHTML = "CarMa and Blogs ";
            document.querySelector("#sqr2").setAttribute("href", "https://sites.google.com/view/sdc-iiserb/home");

            // boxes[0].querySelector("#member_name").innerHTML = "Chinmayee Goswami `20 <br> Animesh Patra `20";
            boxes[2].style.display="flex";
            boxes[2].querySelector("img").src = "images/clubs/Orientations.png";
            boxes[2].querySelector("#club_name").innerHTML = "Orientations ";
            document.querySelector("#sqr3").setAttribute("href", "https://sites.google.com/view/sdc-iiserb/home");


            boxes[3].style.display = "flex";
            boxes[3].querySelector("img").src = "images/clubs/Career Talk.png";
            boxes[3].querySelector("#club_name").innerHTML = "Career Talks ";
            document.querySelector("#sqr4").setAttribute("href", "https://sites.google.com/view/sdc-iiserb/home");

            // boxes[0].querySelector("#member_name").innerHTML = "Chinmayee Goswami `20 <br> Animesh Patra `20";


            boxes[4].style.display = "flex";
            boxes[4].querySelector("img").src = "images/clubs/alumni.png";
            boxes[4].querySelector("#club_name").innerHTML = "Alumni Events";
            document.querySelector("#sqr5").setAttribute("href", "https://sites.google.com/view/sdc-iiserb/home");

            // boxes[0].querySelector("#member_name").innerHTML = "Chinmayee Goswami `20 <br> Animesh Patra `20";

            boxes[5].style.display = "flex";
            boxes[5].querySelector("img").src = "images/clubs/outreach.png";
            boxes[5].querySelector("#club_name").innerHTML = "Institute Outreach ";
            document.querySelector("#sqr6").setAttribute("href", "https://sites.google.com/view/sdc-iiserb/home");


            boxes[6].style.display = "flex";
            boxes[6].querySelector("img").src = "images/clubs/E Cell.png";
            boxes[6].querySelector("#club_name").innerHTML = "Entrepreneurship Cell";
            document.querySelector("#sqr7").setAttribute("href", "https://sites.google.com/view/sdc-iiserb/home");
            
            boxes[7].style.display = "none";
            boxes[8].style.display = "none";
            boxes[9].style.display = "none";
            boxes[10].style.display = "none";
            boxes[11].style.display = "none";
            boxes[12].style.display = "none";
            boxes[13].style.display = "none";
            boxes[14].style.display = "none";
            boxes[15].style.display = "none";
            boxes[16].style.display = "none";
            //boxes[17].style.display = "none";

            // insta_handle.innerHTML = "@sports_iiserb"
            insta_handle.setAttribute("href", "https://www.instagram.com/sdc_iiserb/");

            // gmail_handle.innerHTML = "sportscouncil@iiserb.ac.in";
            gmail_handle.setAttribute("href", "mailto:sdc@iiserb.ac.in");

            club_head_email.innerHTML = "saisab21@iiserb.ac.in ";
            club_head_no.innerHTML = "+91 99333 87874";
            club_head_name.innerHTML = "Saisab Sadhu";
            club_head_image.src = "images/senate/senate_23_24/saisab.png";
            break;
        
        case 8:
            what.innerHTML="WHAT THE COUNCIL DOES";
            club_under_us.innerHTML="CLUBS UNDER US";
            logo.src = "./images/rc.jpg";
            content.innerHTML = "<ul><li>RC serves as the channel to convey the requests or representations of the students to the institute. </li><li>It is a team of elected representatives from a class, department, mess and hostel.</li><li>It accounts for general body notions of academic and social life at the IISER-B campus.</li></ul>";
            boxes[0].style.display = "flex";
            boxes[1].style.display = "flex";
           
            boxes[0].querySelector("img").src = "images/1.png";
            boxes[0].querySelector("#club_name").innerHTML = "CRs";
            // boxes[0].querySelector("#member_name").innerHTML = "Chinmayee Goswami `20 <br> Animesh Patra `20";
            document.querySelector("#sqr1").setAttribute("href", "Representativecouncil.html");

            weblink.setAttribute("href", "Representativecouncil.html");


            boxes[1].querySelector("img").src = "images/2.png";
            boxes[1].querySelector("#club_name").innerHTML = "DRs";
            document.querySelector("#sqr2").setAttribute("href", "Representativecouncil.html");

            // boxes[0].querySelector("#member_name").innerHTML = "Chinmayee Goswami `20 <br> Animesh Patra `20";
            boxes[2].style.display="flex";
            boxes[2].querySelector("img").src = "images/3.png";
            boxes[2].querySelector("#club_name").innerHTML = "MRs";
            document.querySelector("#sqr3").setAttribute("href", "Representativecouncil.html");

            boxes[3].style.display = "flex";
            boxes[3].querySelector("img").src = "images/4.png";
            boxes[3].querySelector("#club_name").innerHTML = "HRs";
            document.querySelector("#sqr4").setAttribute("href", "Representativecouncil.html");
            
            // boxes[0].querySelector("#member_name").innerHTML = "Chinmayee Goswami `20 <br> Animesh Patra `20";


            boxes[4].style.display = "none";
            boxes[5].style.display = "none";
            boxes[6].style.display = "none";
            boxes[7].style.display = "none";
            boxes[8].style.display = "none";
            boxes[9].style.display = "none";
            boxes[10].style.display = "none";
            boxes[11].style.display = "none";
            boxes[12].style.display = "none";
            boxes[13].style.display = "none";
            boxes[14].style.display = "none";
            boxes[15].style.display = "none";
            boxes[16].style.display = "none";
            //boxes[17].style.display = "none";

            // insta_handle.innerHTML = "@sac_iiserb"
            insta_handle.setAttribute("href", "https://www.instagram.com/sac_iiserb/");

            // gmail_handle.innerHTML = "rc@iiserb.ac.in";
            gmail_handle.setAttribute("href", "mailto:rc@iiserb.ac.in");

            club_head_email.innerHTML = "adithyan21@iiserb.ac.in ";
            club_head_no.innerHTML = "+91 85904 84969";
            club_head_name.innerHTML = "Adithyan Cherusseri";
            club_head_image.src = "images/senate/senate_23_24/adithyan.jpg";

            // let newpicture = document.createElement('img');
            
            // newpicture.setAttribute("src", "./images/4.png");
            // document.querySelector(".container").appendChild(newpicture)
            
            break;
        
        }




}



// BACKGROUND CAROUSEL - BASIC SHIT. WHY IS THIS HERE THOUGH!!

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












// PRELOADER - MAKES THE PAGE SLOW - NOT USING RN

window.addEventListener("load", function(){
    var loader = document.querySelector('.spinner-wrapper');
    loader.style.display = 'none';
})







