import React from 'react';
import ReactDOM from 'react-dom'
import { Link, animateScroll as scroll } from 'react-scroll';

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
            <Link
            className="btn-p"
            activeClass="active"
            to="f"
            spy={true}
            smooth={true}
            offset={-70}
            duration= {1000}
            >Learn more</Link>
    )
}

const MobileNav = () => {
    const barIcon = document.getElementById('bar');

    const toggleDropDown = () => {
        document.getElementById('dropdown').classList.toggle('drop');
    }

    return (
        <div>
            <ul>
                <li>
                <i id="logo" className="fab fa-hooli"></i>
                </li>
                <li>
                    <a id="bar" onClick={toggleDropDown}>
                        <i className="fas fa-bars"></i>
                    </a>
                </li>
            </ul>
        </div>
    );
    barIcon.addEventListener('click', toggleDropDown)
};

const DropDown = () => {
    return (
        <ul id="dropdown" className="drop">
            <li><a>Fetures</a></li>
            <li><a>Products</a></li>
            <li><a>Contact</a></li>
        </ul>
    );
};

class Nav extends React.Component {
    constructor () {
        super();
        this.state = {
            screenWidth: window.innerWidth;
        };
    };

    changeNavBg = () => {
        if (window.scrollY > 100) {
            nav.className = 'scrolled-nav';
        } else {
            nav.className = '';
        }
    }

    onChangeViewPort = () => {
        this.setState({ screenWidth: window.innerWidth; });
    };

    componentDidMount () {
        window.addEventListener('resize', this.onChangeViewPort)
        window.addEventListener('scroll', this.changeNavBg);
    }

    render () {
        console.log('render', window.outerWidth);
        if (this.state.screenWidth > 992) {
            return (
                <DeskTopNav />
            );
        } else {
            return (
                <div>
                    <MobileNav />
                    <DropDown />
                </div>
            );
        };
    };
};

const mButton = document.getElementById("scroll");
const nav = document.getElementById("nav");
const dropNav = document.getElementById("drop-container");


ReactDOM.render(<Nav />, nav);
ReactDOM.render(<Button />, mButton);
