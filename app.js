
//These are variables
const nav = document.querySelector('nav');
const learnMoreButton = document.querySelector('#learn-more-btn');
const content = document.querySelector('#mepic');
const navTop = nav.offsetTop;

let sourceoftruth = {
  counter: 'home'
}

const cont = new Vue({
  el: '#cont',
  data: sourceoftruth
})

const navcont = new Vue({
  el: '#navcont',
  data: sourceoftruth
})

// This makes the nav bar sticky when scrolling down
const stickNav = () => {
    if (window.scrollY >= navTop) {
        console.log(navTop)
        nav.classList.add('fixed-nav');
      } else {
        nav.classList.remove('fixed-nav');
      }
}

const scrollClick = ()  =>  {
  console.log('hi')
  content.scrollIntoView({behavior: 'smooth'});
}

//Listen for scroll, glue nav down
window.addEventListener('scroll', stickNav);
learnMoreButton.addEventListener('click', scrollClick);