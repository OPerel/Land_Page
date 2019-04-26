// Jquery - replace with react
$(function() {
   $('#scroll').click (function() {
     $('html, body').animate({scrollTop: $('.services').offset().top }, 1400);
     return false;
   });
 });

// React
const nav = document.getElementById('nav');

class Nav extends React.Component {
    // constructor () {
    //     super ();
    //     this.state = {
    //         section: event.target.id
    //     };
    // };

    changeNavBg = (event) => {
        if (window.scrollY > 100) {
            nav.className = 'scrolled-nav';
        } else {
            nav.className = '';
        }
    }

    componentDidMount () {
        window.addEventListener('scroll', this.changeNavBg)
    }

    render () {
        return (
            <ul>
                <li><a href=""><i id="logo" className="fab fa-hooli"></i></a></li>
                <li><a href="">Fetures</a></li>
                <li><a href="">Products</a></li>
                <li><a href="">Subscribe</a></li>
            </ul>
        );
    };
};

// const Nav = () => {
//     return (
//
//     );
// };

ReactDOM.render(<Nav />, nav);
