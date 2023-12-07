
// CONTENTFUL CMS


const contentful = require('contentful')

const client = contentful.createClient({
  space: '7ji1lz4o2ejg',
  environment: 'master', // defaults to 'master' if not set
  accessToken: 'xbW4UD7NeAOMtTnHpMzurUmqtuO16CG6EYSyHlv0hm8'
})

client.getEntry('lf6ZHwMfzIzTSvvkra42M')
  .then((entry) => console.log(entry))
  .catch(console.error)



const btnScrollToTop = document.querySelector(".scrollup");
const arrowup = btnScrollToTop.querySelector("i");
window.addEventListener('scroll', e => {
    btnScrollToTop.style.transform = window.scrollY > 20 ? 'translateY(0px)' : 'translateY(100px)';
    arrowup.style.animation = "slideup 1s 5 linear";
});


