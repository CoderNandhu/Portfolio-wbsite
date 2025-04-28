AOS.init();
const swiper = new Swiper(".mySwiper", {
  slidesPerView: 1,
  spaceBetween: 30,
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  
  
});

AOS.init({
  duration: 1000,
  once: false,
  mirror: true, // Animate on scroll up too
  easing: 'ease-in-out',
});

VanillaTilt.init(document.querySelectorAll(".tilt-card"), {
  max: 15,
  speed: 400,
  glare: true,
  "max-glare": 0.2,
});

const menuButton = document.getElementById('menu-button');
const menu = document.getElementById('menu');
const hamburgerIcon = document.getElementById('hamburger-icon');
const closeIcon = document.getElementById('close-icon');

menuButton.addEventListener('click', () => {
  menu.classList.toggle('hidden');
  hamburgerIcon.classList.toggle('hidden');
  closeIcon.classList.toggle('hidden');
});




const backToTopBtn = document.getElementById('backToTopBtn');

window.onscroll = function() {
  if (document.body.scrollTop > 300 || document.documentElement.scrollTop > 300) {
    backToTopBtn.classList.remove('hidden');
  } else {
    backToTopBtn.classList.add('hidden');
  }
};

backToTopBtn.addEventListener('click', function() {
  window.scrollTo({ top: 0, behavior: 'smooth' });
});






