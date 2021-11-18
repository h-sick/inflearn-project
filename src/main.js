if (window.NodeList && !NodeList.prototype.forEach) {
  NodeList.prototype.forEach = Array.prototype.forEach;
}

import './sass/index.scss';
import './js/header.js';
import './js/modal.js';
import './js/slide.js';
