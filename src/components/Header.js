import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Button from './button';
import Search from './search/index';


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
                <li><Link to="/tasks">Tasks</Link></li>
            </ul>
            <Button label="OK !"/>
            <Search/>
        </div>
     );
    }
}

export default Header;
