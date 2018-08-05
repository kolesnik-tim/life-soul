import '../lib/selectize.min.js';
import '../lib/maskedinput.js';
import modal from 'jquery-modal';



//menu open
$('.menu-open').on('click', function() {
  $(this).toggleClass('active');
  $('.header').toggleClass('active');
  $('.body').fadeToggle();
  $('.menu').fadeToggle();
});

//select
$('select').selectize();

//mask input
$('.phone').mask('+7 (999) 999-99-99');
