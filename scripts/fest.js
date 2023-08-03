



function click(f, btn, i){
    btn.addEventListener('click', e =>{

        
        // console.log(document.getElementsByClassName('imageslider_wrapper')[i]);
        document.getElementsByClassName('imageslider_wrapper')[f].style.left = '-' + i*100 + "%";
        currentSlide.classList.remove('current-slide');
        btn.classList.add("current-slide");
        currentSlide = btn;
    })
}





var noOfSections = 8;


// NAV INDICATORS IMAGE CAROUSEL FOR FESTSS

const radioContain = document.getElementsByClassName("radio-container");

for(var f=0; f<noOfSections; f++){


var btns = radioContain[f].querySelectorAll('button');
console.log(btns)

var currentSlide = document.getElementsByClassName("current-slide")[f];


btns.forEach((btn, i) => {
    
    click(f, btn, i);

});


}

var x = document.getElementsByClassName("imageslider_wrapper");

for(var i=0; i<noOfSections; i++){

// var images = Array.from(track.children);
var y = x[i].querySelectorAll('img');
var width = y[0].getBoundingClientRect().width;
// console.log(btns.children)

y.forEach((slide, index) => {
    slide.style.left = (100*index)+'%';
});
}


