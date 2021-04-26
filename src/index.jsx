import React from 'react';
import ReactDom from 'react-dom';
import { ConnectedRouter } from 'connected-react-router';
import { Provider } from 'react-redux';
import initStore, { history } from './utils/store';
import Router from './component/Router';

ReactDom.render(
    <Provider store={initStore()}>
        <ConnectedRouter history={history}>
            <Router/>
        </ConnectedRouter>
    </Provider>,
    document.getElementById('app')
)