import React from 'react';
import ReactDOM from 'react-dom';
import { createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import thunk from 'redux-thunk';
import { ConnectedRouter, routerReducer, routerMiddleware, push } from 'react-router-redux';
import { AppContainer } from 'react-hot-loader';
import App from './App';
import createHistory from 'history/createBrowserHistory';
import rootReducer from './reducers/index';

const history = createHistory();
const middleware = routerMiddleware(history)


const middlewares = [thunk, middleware];

const store = createStore(rootReducer, composeWithDevTools(applyMiddleware(...middlewares)));

const render = Component =>
    ReactDOM.render(
        <AppContainer>
            <Provider store={store}>
                <Component />
            </Provider>
        </AppContainer>,
        document.getElementById('root')
    );

render(App)

if(module.hot) {
    module.hot.accept('./App', () => { render(App) });
}
