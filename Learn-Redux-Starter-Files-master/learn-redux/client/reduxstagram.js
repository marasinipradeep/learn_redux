// let's go!

import React from 'react';
import { render } from 'react-dom';
import css from './styles/style.styl';

//Import Components
import App from "./Components/App";
import Single from "./Components/Single";
import PhotoGrid from "./Components/PhotoGrid";

//import react router deps
import { Router, Route, IndexRoute, browserHistory } from 'react-router';

//import provider from redux

import { Provider } from 'react-redux';
import store, { history } from './store';

//importing sentry which helps to find issues the config file is inside data config.js

// import Raven from 'raven-js';
// import {logException, sentry_url} from './data/config';

// Raven.config(sentry_url,{
//     tags:{
//         git_commit:'fadfaf',
//         userLevel:'editor'
//     }
// }).install(); //it will catch all the errors that happens in user consolePropTypes.any

// logException(new Error('download failed!'),{
//     email:'marasinipradeep@gmail.com'
// });

// Raven.captureMessage('Something bad happened!');
// Raven.showReportDialog();

const router = (

    <Provider store={store}>

        <Router history={history}>
            <Route path="/" component={App}>
                <IndexRoute component={PhotoGrid}></IndexRoute>
                <Route path="/view/:postId" component={Single}></Route>
            </Route>
        </Router>
    </Provider>

)

render(router, document.getElementById("root"));
