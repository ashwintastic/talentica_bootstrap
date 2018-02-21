
import React, { Component } from 'react';


export default class Testing extends Component {
    constructor(props) {
        super(props);
    }



    render() {
console.log(this.props)
        return (
            <div>
                <button onClick={this.props.testAction}>click me</button>
            </div>
        );
    }
}