import React from 'react';
import ReactDom from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import Router from './js/Router.jsx'

ReactDom.render(
    <BrowserRouter>
        <Router/>
    </BrowserRouter>,
    document.getElementById('app')
)