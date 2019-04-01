import 'normalize.css';
import './styles/style.scss';
import '../node_modules/tiny-slider/src/tiny-slider.scss'
import Rellax from '../node_modules/rellax/rellax';
import SmoothScroll from '../node_modules/smooth-scroll/dist/smooth-scroll';
console.log('hello world');

import {
  tns
} from "../node_modules/tiny-slider/src/tiny-slider"





const slider1 = tns({
  container: '.my-slider-1',
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
});

const slider2 = tns({
  container: '.my-slider-2',
  items: 1,
  slideBy: 'page',
  autoplay: false,
  controls: false,
  autoplayButtonOutput: false,
  navPosition: 'bottom',
  responsive: {
    800: {
      items: 3,
      slideBy: 'item',
    }
  }
});






const menu = document.querySelector('#menu');
const menuMobileButon = document.querySelector('#menuMobileButton')
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

const menuLinks = document.querySelectorAll('.menu-list__item');

menu.addEventListener('click', function (e) {
  if (e.target && e.target.classList.contains('menu-list__item')) {
    menuTrigger(menu)
  }
});



var rellax = new Rellax('.rellax', {
  speed: 1,
  center: false,
  wrapper: null,
  round: true,
  vertical: true,
  horizontal: false
});

var scroll = new SmoothScroll('a[href*="#"]');