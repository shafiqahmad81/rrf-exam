
import Swiper from 'swiper';
import { Navigation, Pagination } from 'swiper/modules';

const swiper = new Swiper(".mySwiper", {
   modules: [Navigation, Pagination],
   loop: true,
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
});


// menu responcive

const mainMenu = document.getElementById('menu');
const hamburgerIcon = document.getElementById('hamburger');
const closeIcon = document.getElementById('close')

hamburgerIcon.addEventListener('click', () => {
  mainMenu.classList.remove('hidden');
  hamburgerIcon.classList.add('hidden');
  closeIcon.classList.remove('hidden')
})
closeIcon.addEventListener('click', () => {
  mainMenu.classList.add('hidden');
  hamburgerIcon.classList.remove('hidden');
  closeIcon.classList.add('hidden')
})
