import 'normalize.css';
import './styles/style.scss';
import '../node_modules/tiny-slider/src/tiny-slider.scss'
import SmoothScroll from '../node_modules/smooth-scroll/dist/smooth-scroll';
import {
  tns
} from "../node_modules/tiny-slider/src/tiny-slider";

(function () {
  const menu = document.querySelector('#menu');
  const navLinks = document.querySelectorAll('.menu-list__item')
  const menuMobileButon = document.querySelector('#menuMobileButton');
  const spinner = document.querySelector('#spinner');
  var scroll = new SmoothScroll('a[href*="#"]');

  const sliderContainers = ['.my-slider-1', '.my-slider-2'];
  sliderContainers.forEach((item) => {
    tns({
      container: item,
      items: 1,
      slideBy: 'page',
      autoplay: false,
      controls: false,
      autoplayButtonOutput: false,
      navPosition: 'bottom',
      responsive: {
        800: {
          items: 3
        }
      }
    })
  })

  const hideSpinner = (el) => el.classList.add('spinner--hide')

  const menuTrigger = (el) => {
    if (el.classList.contains('menu--show')) {
      el.classList.remove('menu--show')
      menuMobileButon.classList.remove('nav-mobile-button--visible-menu')
    } else {
      el.classList.add('menu--show')
      menuMobileButon.classList.add('nav-mobile-button--visible-menu')
    }
  }

  menuMobileButon.addEventListener('click', () => menuTrigger(menu));

  window.addEventListener('load', () => hideSpinner(spinner))

  menu.addEventListener('click', (e) => {
    if (e.target && e.target.classList.contains('menu-list__item')) {
      menuTrigger(menu)
    }
  });

  window.addEventListener("scroll", event => {
    let fromTop = window.scrollY;

    navLinks.forEach(link => {
      let section = document.querySelector(link.hash);
      (
        section.offsetTop <= fromTop &&
        section.offsetTop + section.offsetHeight > fromTop
      ) ?
      link.classList.add("menu-list__item--current") :
      link.classList.remove("menu-list__item--current");

    });
  });
})()