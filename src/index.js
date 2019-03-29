import 'normalize.css';
import './styles/style.scss';
import '../node_modules/tiny-slider/src/tiny-slider.scss'

console.log('hello world');

import { tns } from "../node_modules/tiny-slider/src/tiny-slider"

var slider = tns({
  container: '.my-slider-1',
  items: 1,
  slideBy: 'page',
  autoplay: false,
  controls: false,
  autoplayButtonOutput: false,
  navPosition: 'bottom'
});