import React from "react";
import {
    BrowserRouter as Router,
    Switch,
    Redirect,
    Route
} from "react-router-dom";
import Camera from "./Camera";
import Clipboard from "./Clipboard";
import Home from "./Home";


export default function Routes() {
    return (
        <Router>
            <Switch>
                <Route path="/clipboard">
                    <Clipboard />
                </Route>
                <Route path="/camera">
                    <Camera />
                </Route>
                <Route path="/home">
                    <Home />
                </Route>
                <Route path="/">
                    <Redirect to="/home" />
                </Route>
            </Switch>
        </Router >
    )
}