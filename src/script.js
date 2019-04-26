const nav = document.getElementById('nav');
const mButton = document.getElementById('scroll')
const services = document.getElementById('f')

const scrollOnClick = (event) => {
    services.scrollIntoView({
        behavior: 'smooth',
        block: 'center'
    });
};

// TODO: react-scroll instead of the above.

mButton.addEventListener('click', scrollOnClick)

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
