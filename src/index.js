import React from 'react';
import ReactDOM from 'react-dom'
import { Link, animateScroll as scroll } from 'react-scroll';

const nav = document.getElementById('nav');
// const dropNav = document.getElementById('drop-container');
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

// const MobileNav = ({ onClickLink }) => {
//     const barIcon = document.getElementById('bar');
//
//     const toggleDropDown = () => {
//         document.getElementById('dropdown').classList.toggle('drop');
//     }
//
//     return (
//         <div>
//             <ul>
//                 <li>
//                     <a onClick={(e) => onClickLink('h')}>
//                         <i id="logo" className="fab fa-hooli"></i>
//                     </a>
//                 </li>
//                 <li>
//                     <a id="bar" onClick={toggleDropDown}>
//                         <i className="fas fa-bars"></i>
//                     </a>
//                 </li>
//             </ul>
//         </div>
//     );
//
//     barIcon.addEventListener('click', toggleDropDown)
// };
//
// const DropDown = ({ onClickLink }) => {
//     return (
//         <ul id="dropdown" className="drop">
//             <li><a onClick={(e) => onClickLink('f')}>Fetures</a></li>
//             <li><a onClick={(e) => onClickLink('p')}>Products</a></li>
//             <li><a onClick={(e) => onClickLink('s')}>Contact</a></li>
//         </ul>
//     );
// };

class Nav extends React.Component {
    changeNavBg = () => {
        if (window.scrollY > 100) {
            nav.className = 'scrolled-nav';
        } else {
            nav.className = '';
        }
    }

    componentDidMount () {
        // window.addEventListener('resize', this.onChangeViewPort)
        window.addEventListener('scroll', this.changeNavBg);
    }

    render () {
        return (
            <DeskTopNav />
        );

        // if (this.state.screenSize > 992) {
        //
        // } else {
        //     return (
        //         <div>
        //             <MobileNav onClickLink={this.scrollToSection} />
        //             <DropDown onClickLink={this.scrollToSection} />
        //         </div>
        //     );
        // };
    };
};

ReactDOM.render(<Nav />, nav);
