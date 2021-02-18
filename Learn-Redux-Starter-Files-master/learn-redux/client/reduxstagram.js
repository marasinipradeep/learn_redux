// let's go!

import React from 'react';
import { render } from 'react-dom';
import css from './styles/style.styl';

//Import Components
import Main from "./Components/Main";
import Single from "./Components/Single";
import PhotoGrid from "./Components/PhotoGrid";

//import react router deps
import {Router, Route, IndexRoute, browserHistory} from 'react-router';

const router =(
    <Router history={browserHistory}>
        <Route path="/" component={Main}>
        <IndexRoute component={PhotoGrid}></IndexRoute>
        <Route path="/view/:postId" component={Single}></Route>
        </Route>
    </Router>
)

render(router,document.getElementById("root"));
