import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class Header extends Component {
    render(){
        return (
        <div>
        <h1>app header</h1>
        <ul>
            <li><Link to="/">Dashboard</Link></li>
            <li><Link to="/todo">todo</Link></li>
            <li><Link to="/counter">Counter</Link></li>
        </ul>
        </div>
    );
    }
}

export default Header;
