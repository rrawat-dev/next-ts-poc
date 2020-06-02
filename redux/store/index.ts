
import {createStore, applyMiddleware, compose} from 'redux';
import {createWrapper} from 'next-redux-wrapper';
import thunk from 'redux-thunk';

import rootReducer from '../reducers/index';


// create a makeStore function
const makeStore = () => createStore(
    rootReducer,
    compose(
        applyMiddleware(thunk),
        global.devToolsExtension ? global.devToolsExtension() : f => f
    )
);

// export an assembled wrapper
export const wrapper = createWrapper(makeStore, {debug: true});