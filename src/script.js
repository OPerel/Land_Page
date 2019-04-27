const nav = document.getElementById('nav');
const mButton = document.getElementById('scroll')

const DeskTopNav = ({ onClickLink }) => {
    return (
        <ul>
            <li><a onClick={(e) => onClickLink('h')}>
                <i id="logo" className="fab fa-hooli"></i>
            </a></li>
            <li><a onClick={(e) => onClickLink('f')}>Fetures</a></li>
            <li><a onClick={(e) => onClickLink('p')}>Products</a></li>
            <li><a onClick={(e) => onClickLink('s')}>Contact</a></li>
        </ul>
    );
};

const MobileNav = () => {
    return (
        <ul>
            <li><a onClick={(e) => onClickLink('h')}>
                <i id="logo" className="fab fa-hooli"></i>
            </a></li>
            <li><a><i className="fas fa-bars"></i></a></li>
        </ul>
    );
};

class Nav extends React.Component {
    constructor () {
        super ();
        this.state = {
            screenSize: window.innerWidth
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
                <DeskTopNav onClickLink={this.scrollToSection} />
            );
        } else {
            return (
                <MobileNav />
            );
        };
    };
};

ReactDOM.render(<Nav />, nav);
