import React from 'react'
import { Link } from 'react-router-dom'
// import logo-simple from '../../images/favicon.ico'

export default function Nav (props) {
    return (
<div class="pure-menu pure-menu-horizontal">
    <ul class="pure-menu-list">
        <li class="pure-menu-item"><a href="/" class="pure-menu-link">Home</a></li>
        <li class="pure-menu-item"><a href="/profile" class="pure-menu-link">Profile</a></li>
        <li class="pure-menu-item"><a href="/neighbourhood" class="pure-menu-link">Map</a></li>
    </ul>
</div>
    )
}