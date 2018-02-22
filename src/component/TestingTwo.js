import React, { Component } from 'react';
import { Link } from 'react-router-dom';

export default class Testing extends Component {
    constructor(props) {
        super(props);
    }



    render() {
        return (
            <div>
                <h1>tesing two page</h1>
                <Link to="/" >back</Link>
            </div>
        );
    }
}