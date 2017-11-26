import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Button from './button';


class Header extends Component {
    render(){
        return (
        <div>
            <h1>app header</h1>
            <ul>
                <li><Link to="/">Dashboard</Link></li>
                <li><Link to="/todo">todo</Link></li>
                <li><Link to="/counter">Counter</Link></li>
                <li><Link to="/form">Form</Link></li>
            </ul>
            <Button label="OK !"/>
        </div>
     );
    }
}

export default Header;
