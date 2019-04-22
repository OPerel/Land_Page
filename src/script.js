// Jquery - replace with react
$(function() {
   $('#scroll').click (function() {
     $('html, body').animate({scrollTop: $('.services').offset().top }, 1400);
     return false;
   });
 });


// React
class Nav extends React.Component {
    super();
    constructor() {
        this.state = {
            page: 'header'
        }
    }
}

const nav = document.getElementsByTagName('nav');
ReactDOM.render(<Nav />, nav);
