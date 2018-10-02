import React from 'react';
import { Link } from 'react-router-dom';
// import logo-simple from '../../images/favicon.ico'

export default function Nav(props) {
    return (
        <div className="pure-menu pure-menu-horizontal">
            <ul className="pure-menu-list">
                <li className="pure-menu-item"><a href="#" className="pure-menu-link">Home</a></li>
                <li className="pure-menu-item"><a href="#" className="pure-menu-link">Profile</a></li>
                <li className="pure-menu-item"><a href="#" className="pure-menu-link">Map</a></li>
            </ul>
        </div>
    )
}