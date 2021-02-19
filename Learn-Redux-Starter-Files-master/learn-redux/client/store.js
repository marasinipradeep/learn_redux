import {createStore, compose} from 'redux';

//hook up react router with our redux
import {syncHistoryWithStore} from 'react-router-redux';


import {browserHistory} from 'react-router';

//import the root reducer
import rootReducer from './reducers/index';


import comments from './data/comments';
import posts from './data/posts';

//create an object for the default data

const defaultState = {
    posts,
    comments
};

//This is for chrome devtools. If we dont define the devtool will give us message as no store found

const enhancers = compose(
    window.devToolsExtension ? window.devToolsExtension() : (f)=>f
)


const store = createStore(rootReducer,defaultState, enhancers);//we are passing enhancers for chrome devtool

export const history = syncHistoryWithStore(browserHistory, store);

//hot reloading reducers like components

if(module.hot){
    module.hot.accept('./reducers/',()=>{
        const nextRootReducer = require('./reducers/index').default;
        store.replaceReducer(nextRootReducer);

    });
}

export default store;