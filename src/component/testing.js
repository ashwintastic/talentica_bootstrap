import React, { Component } from 'react';
import {Link} from 'react-router-dom'

export default class Testing extends Component {
    constructor(props) {
        super(props);
    }



    render() {
        return (
            <div>
                <button onClick={this.props.testAction}>click me</button>
                <Link to="/">Back </Link>
            </div>
        );
    }
}