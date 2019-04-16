$(function() {
   $('#scroll').click (function() {
     $('html, body').animate({scrollTop: $('.services').offset().top }, 1400);
     return false;
   });
 });
