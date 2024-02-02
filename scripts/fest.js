







(function(){
    var i = 0;

  
    var images = ['1-min.jpeg', '15-min.jpeg', '25-min.jpeg', '30-min.jpeg', '32-min.jpeg', '38-min.jpeg']
    var container = document.querySelector("#fest_bg");
    

setInterval(function(){
            if(i == 6){
                i = 0;
            }

        container.style = `background: linear-gradient(rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.6)), url('./images/singularity/gallery/${images[i]}'); transition: background 1s ease-in-out; background-size: cover;`;



    i++;
}, 20000)
})();
// function click(f, btn, i){
//     btn.addEventListener('click', e =>{

        
//         // console.log(document.getElementsByClassName('imageslider_wrapper')[i]);
//         document.getElementsByClassName('imageslider_wrapper')[f].style.left = '-' + i*100 + "%";
//         currentSlide.classList.remove('current-slide');
//         btn.classList.add("current-slide");
//         currentSlide = btn;
//     })
// }





// var noOfSections = 8;


// // NAV INDICATORS IMAGE CAROUSEL FOR FESTSS

// const radioContain = document.getElementsByClassName("radio-container");

// for(var f=0; f<noOfSections; f++){


// var btns = radioContain[f].querySelectorAll('button');
// console.log(btns)

// var currentSlide = document.getElementsByClassName("current-slide")[f];


// btns.forEach((btn, i) => {
    
//     click(f, btn, i);

// });


// }

// var x = document.getElementsByClassName("imageslider_wrapper");

// for(var i=0; i<noOfSections; i++){

// // var images = Array.from(track.children);
// var y = x[i].querySelectorAll('img');
// var width = y[0].getBoundingClientRect().width;
// // console.log(btns.children)

// y.forEach((slide, index) => {
//     slide.style.left = (100*index)+'%';
// });
// }


