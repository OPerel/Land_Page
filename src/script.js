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

    scrollToSection = (sec) => {
        let section = document.getElementById(sec);
        section.scrollIntoView({
            behavior: 'smooth',
            block: 'start'
        });
    };

    componentDidMount () {
        window.addEventListener('scroll', this.changeNavBg)
    }

    render () {
        return (
            <ul>
                <li><a onClick={(e) => this.scrollToSection('h')}>
                    <i id="logo" className="fab fa-hooli"></i>
                </a></li>
                <li><a onClick={(e) => this.scrollToSection('f')}>Fetures</a></li>
                <li><a onClick={(e) => this.scrollToSection('p')}>Products</a></li>
                <li><a onClick={(e) => this.scrollToSection('s')}>Subscribe</a></li>
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
