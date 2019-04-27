const nav = document.getElementById('nav');
const mButton = document.getElementById('scroll')

// TODO: react-scroll instead.

class Nav extends React.Component {
    constructor () {
        super ();
        this.state = {
            screenSize: 0
        };
    };

    onChangeViewPort = (event) => {
        this.setState({ screenSize: event.target.innerWidth });
    }

    changeNavBg = () => {
        if (window.scrollY > 100) {
            nav.className = 'scrolled-nav';
        } else {
            nav.className = '';
        }
    }

    scrollToSection = (sec) => {
        let section = document.getElementById(sec);
        window.scrollTo({
            top: section.offsetTop - 80,
            behavior: 'smooth'
        });
    };

    componentDidMount () {
        window.addEventListener('resize', this.onChangeViewPort)
        window.addEventListener('scroll', this.changeNavBg);
        mButton.addEventListener('click', (e) => this.scrollToSection('f'));
    }

    render () {
        if (this.state.screenSize > 992) {
            return (
                <ul>
                    <li><a onClick={(e) => this.scrollToSection('h')}>
                        <i id="logo" className="fab fa-hooli"></i>
                    </a></li>
                    <li><a onClick={(e) => this.scrollToSection('f')}>Fetures</a></li>
                    <li><a onClick={(e) => this.scrollToSection('p')}>Products</a></li>
                    <li><a onClick={(e) => this.scrollToSection('s')}>Contact</a></li>
                </ul>
            );
        } else {
            return (
                <ul>
                    <li><a onClick={(e) => this.scrollToSection('h')}>
                        <i id="logo" className="fab fa-hooli"></i>
                    </a></li>
                    <li><img src='../images/menu.png' /></li>
                </ul>
            );
        };
    };
};

ReactDOM.render(<Nav />, nav);
