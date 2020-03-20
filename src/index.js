import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import * as serviceWorker from './serviceWorker';
//---------------------------------REDUX LIBS---------------------------------
import {createStore, compose, applyMiddleware} from 'redux'
import thunk from "redux-thunk";
import {Provider} from "react-redux";
import createSagaMiddleware from 'redux-saga';
//---------------------------------REDUX options------------------------------
import {reducerRoot} from './redux/reducerRoot'
import {myMiddleware} from './redux/middleware'
import mySagas from './redux/sagas';
//----------------------------------------------------------------------------

let sagaMiddleware = createSagaMiddleware();

let store = createStore(reducerRoot, compose(
    applyMiddleware(
        myMiddleware,
        thunk,
        sagaMiddleware
    ),
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
))
sagaMiddleware.run(mySagas);

ReactDOM.render(
    <Provider store={store}>
        <App />
    </Provider>, document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
