$(function() {
   $('#scroll').click (function() {
     $('html, body').animate({scrollTop: $('.services').offset().top }, 2000);
     return false;
   });
 });
