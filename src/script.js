const nav = document.getElementById('nav');
const mButton = document.getElementById('scroll')

// TODO: react-scroll instead.

class Nav extends React.Component {
    // constructor () {
    //     super ();
    //     this.state = {
    //         section: event.target.id
    //     };
    // };

    changeNavBg = () => {
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
        window.addEventListener('scroll', this.changeNavBg);
        mButton.addEventListener('click', (e) => this.scrollToSection('f'));
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

ReactDOM.render(<Nav />, nav);
