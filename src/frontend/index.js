import React from 'react';
import { hydrate } from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, compose } from 'redux';
import { Router } from 'react-router-dom';
import { createBrowserHistory } from 'history';
import reducer from './reducers/index';
import App from './routes/App';

if (typeof window !== 'undefined') {
  let composeEnhacers;
  if (process.env.NODE_ENV === 'production') composeEnhacers = compose;
  else composeEnhacers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__;
  const preloadedState = window.__PRELOADED_STATE__;

  const Store = createStore(reducer, preloadedState, composeEnhacers());
  const history = createBrowserHistory();

  hydrate(
    <Provider store={Store}>
      <Router history={history}>
        <App />
      </Router>
    </Provider>,

    document.getElementById('app'),
  );
}

