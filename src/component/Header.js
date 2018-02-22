import React, { Component } from 'react';
import {Link} from 'react-router-dom'
import logo from '../logo.svg'
export default class Header extends Component {

    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div className="App">
                <header className="App-header">
                    <img src={logo} className="App-logo" alt="logo" />
                    <h1 className="App-title">Welcome to React</h1>
                </header>
                <Link to="/testing" >Link 1</Link><br/>
                <Link to="/testing1" >Link 2</Link><br/>
                <Link to="/" >back</Link>
                {this.props.children}
            </div>

        );
    }
}