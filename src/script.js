// Jquery - replace with react
$(function() {
   $('#scroll').click (function() {
     $('html, body').animate({scrollTop: $('.services').offset().top }, 1400);
     return false;
   });
 });

// React
class Nav extends React.Component {
    constructor () {
        super ();
        this.state = {
            page: 'header'
        };
    };

    render () {
        const page = this.state.page;
        return (
            <ul>
                <li><a href=""><i id="logo" className="fab fa-hooli"></i></a></li>
                <li><a href="">Home</a></li>
                <li><a href="">Fetures</a></li>
                <li><a href="">Products</a></li>
            </ul>
        );
    };
};

// const Nav = () => {
//     return (
//
//     );
// };

const nav = document.getElementById('nav');
ReactDOM.render(<Nav />, nav);
