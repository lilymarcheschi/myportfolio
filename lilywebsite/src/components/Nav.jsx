import React from 'react';
import { Link } from 'react-router-dom';
class Nav extends React.Component {
    render() {
        return (
            <div className="main-nav">
                <ul className="nav-list">
                    <li> <Link to={'/'}>Home</Link> </li>
                    <li> <Link to={'/bio'}>About</Link> </li>
                    <li> <Link to={'/media'}>Media</Link> </li>
                    <li> <Link to={'/gallery'}>Gallery</Link> </li>
                    <li> <Link to={'/contact'}>Contact</Link> </li>
                </ul>
            </div>
        )
    }
}

export default Nav;