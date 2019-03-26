 /*jshint esversion: 8 */
 require('formdata-polyfill');
 window.addEventListener('DOMContentLoaded', function () {

     'use strict';
   

     let tabs = require('./parts/tabs.js'),
         timer = require('./parts/timer.js'),
         scrollSlow = require('./parts/scroll.js'),
         modal = require('./parts/modal.js'),
         form = require('./parts/form.js'),
         slider = require('./parts/slider.js'),
         calc = require('./parts/calc.js');

     tabs('info-header', 'info-header-tab', 'info-tabcontent');
     timer();
     scrollSlow();
     modal();
     form();
     slider();
     calc();
 });
 if ('NodeList' in window && !NodeList.prototype.forEach) {
    console.info('polyfill for IE11');
    NodeList.prototype.forEach = function (callback, thisArg) {
      thisArg = thisArg || window;
      for (var i = 0; i < this.length; i++) {
        callback.call(thisArg, this[i], i, this);
      }
    };
  }
