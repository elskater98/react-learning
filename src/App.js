import React, {Component} from 'react';
import {BrowserRouter as Router, Redirect, Route, Switch} from "react-router-dom";
import Home from "./components/Home";
import NotFoundPage from "./components/NotFoundPage";
import NavBar from "./components/NavBar";

class App extends Component {
    render() {
        return (
            <div>
                <Router>
                    <NavBar color="Blue"/>
                    <Switch>
                        <Route exact path="/"><Redirect to="/home"/></Route>
                        <Route exact path="/home" component={Home}/>
                        <Route path='*' exact={true} component={NotFoundPage}/>
                    </Switch>
                </Router>
            </div>
        );
    }
}

export default App;
