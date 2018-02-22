import React, { Component } from 'react';
import routes from './index';
import {
    BrowserRouter as Router,
    Route,
} from 'react-router-dom';
import Header from '../component/Header';
class RoutingComponent extends React.Component {

    constructor(props) {
        super(props);

    }

    renderRouter(){
        let c = 0;
        return (
            routes.map((r) => {
                return (
                    <Route path={r.url} component= {r.component} key={c++} />
                );
            })
        )


    }

    render() {
        return (
            <Header>
                {this.renderRouter()}
            </Header>
        )
    }
}

export default RoutingComponent;


