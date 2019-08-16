const nav = document.querySelector('nav');
const navTop = nav.offsetTop;




const stickNav = () => {
    if (window.scrollY >= navTop) {
        nav.classList.add('fixed-nav');
      } else {
        nav.classList.remove('fixed-nav');
      }
}

window.addEventListener('scroll', stickNav);