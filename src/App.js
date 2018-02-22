import React, { Component } from 'react';
import './App.css'
import Header from './component/Header';
import {
    BrowserRouter as Router,
    Route,
} from 'react-router-dom';
import { Provider } from 'react-redux';
import store from './store';
import RoutingComponent from './routes/RoutingComponent';



class App extends Component {
    render() {
        return (
			<Provider store={store}>
				<Router >
					<div>
						<RoutingComponent/>
					</div>
				</Router>
			</Provider>
        )
    }
}

export default App
