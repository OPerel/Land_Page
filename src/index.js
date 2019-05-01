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
    );
};

const MobileNav = ({ onClicking }) => {
    return (
        <div>
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
                    <a id="bar" onClick={onClicking}>
                        <i className="fas fa-bars"></i>
                    </a>
                </li>
            </ul>
        </div>
    );
};

const DropDown = ({ onClicking }) => {
    return (
        <ul id="dropdown" className="drop">
            <li>
                <Link
                onClick={onClicking}
                to='f'
                smooth={true}
                offset={-70}
                duration= {1000}
                >Fetures</Link>
            </li>
            <li>
                <Link
                onClick={onClicking}
                to='p'
                smooth={true}
                offset={-70}
                duration= {1000}
                >Products</Link>
            </li>
            <li>
                <Link
                onClick={onClicking}
                to='s'
                smooth={true}
                offset={-70}
                duration= {1000}
                >Contact</Link>
            </li>
        </ul>
    );
};

class Nav extends React.Component {
    constructor () {
        super();
        this.state = {
            screenWidth: window.innerWidth
        };
    };

    changeNavBg = () => {
        if (window.scrollY > 100) {
            nav.classList.add('scrolled-nav');
        } else {
            nav.classList.remove('scrolled-nav');
        }
    }

    onChangeViewPort = () => {
        this.setState({ screenWidth: window.innerWidth });
    };

    toggleDropDown = () => {
        const dropNav = document.getElementById('dropdown');
        dropNav.classList.toggle('drop');
        if (window.scrollY > 100) {
            dropNav.classList.add('scrolled-nav')
        } else {
            dropNav.classList.remove('scrolled-nav')
        }
    }

    componentDidMount () {
        window.addEventListener('resize', this.onChangeViewPort)
        window.addEventListener('scroll', this.changeNavBg);
    };

    render () {
        if (this.state.screenWidth > 992) {
            return (
                <DeskTopNav />
            );
        } else {
            return (
                <div>
                    <MobileNav onClicking={this.toggleDropDown} />
                    <DropDown onClicking={this.toggleDropDown} />
                </div>
            );
        };
        return (
            <DeskTopNav />
        );
    };
};

const mButton = document.getElementById("scroll");
const nav = document.getElementById("nav");

ReactDOM.render(<Nav />, nav);
ReactDOM.render(<Button />, mButton);
