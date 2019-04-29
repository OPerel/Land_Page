import React from 'react';
import ReactDOM from 'react-dom'
import { Link, animateScroll as scroll } from 'react-scroll';

const nav = document.getElementById('nav');
const mButton = document.getElementById('scroll')

const DeskTopNav = () => {
    return (
        <ul>
            <li>
                <Link
                to="h"
                smooth={true}
                offset={-70}
                duration= {1000}
                ><i id="logo" className="fab fa-hooli"></i>
                </Link>
            </li>
            <li>
                <Link
                className="links"
                activeClass="active"
                to="f"
                spy={true}
                smooth={true}
                offset={-70}
                duration= {1000}
                >Fetures</Link>
            </li>
            <li>
                <Link
                className="links"
                activeClass="active"
                to="p"
                spy={true}
                smooth={true}
                offset={-70}
                duration= {1000}
                >Products</Link>
            </li>
            <li>
                <Link
                className="links"
                activeClass="active"
                to="s"
                spy={true}
                smooth={true}
                offset={-70}
                duration= {1000}
                >Contact</Link>
            </li>
        </ul>
    );
};

const Button = () => {
    return (
        // <button>
            <Link
            className="btn-p"
            activeClass="active"
            to="f"
            spy={true}
            smooth={true}
            offset={-70}
            duration= {1000}
            >Learn more</Link>
        // </button>
    )
}

class Nav extends React.Component {
    changeNavBg = () => {
        if (window.scrollY > 100) {
            nav.className = 'scrolled-nav';
        } else {
            nav.className = '';
        }
    }

    componentDidMount () {
        window.addEventListener('scroll', this.changeNavBg);
    }

    render () {
        return (
            <DeskTopNav />
        );
    };
};

ReactDOM.render(<Nav />, nav);
ReactDOM.render(<Button />, mButton);
