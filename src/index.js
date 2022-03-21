import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import SignInPage from './signin';
import ReactCalendar from './wwelcome'
import Inscription from "./inscription";


ReactDOM.render(
    <React.StrictMode>

        <Router>
            <Switch>

                <Route exact path="/" component={SignInPage}/>
                <Route exact path="/wwelcome" component={ReactCalendar}/>
                <Route exact path='/inscription' component={Inscription}/>



            </Switch>
        </Router>
    </React.StrictMode>,
    document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

