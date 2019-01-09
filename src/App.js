import React from 'react';
import './App.css';
import Routers from './router'
import { Route } from 'react-router-dom';

const App = () => (
    <div className="App">
        {
            Routers.map((route, index) => (
                <Route key={index + 'route-render'} path={route.path} component={route.component} exact={route.exact?route.exact:false} />
            ))
        }
    </div>
)

export default App;
