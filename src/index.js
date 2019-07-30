import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import Form2 from './Form/Form2'
import Soal from './FormSoal/Soal'
import Soal2 from './FormSoal2/Soal2'
import Soal3 from './FormSoal3/Soal3'
import Side from './Sidebar/Sidebar'
import LastPage from './LastPage/LastPage'
import * as serviceWorker from './serviceWorker';
import { Route, BrowserRouter as Router } from 'react-router-dom'

const routing = (
    <Router>
      <div>
        <Route exact path="/form1" component={App} />
        <Route path="/form2" component={Form2} />
        <Route path="/soal" component={Soal} />
        <Route path="/soal2" component={Soal2} />
        <Route path="/soal3" component={Soal3} />
        <Route path="/selesai" component={LastPage} />
        <Route path="/sidebar" component={Side} />
      </div>
    </Router>
  )
  ReactDOM.render(routing, document.getElementById('root'))


// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
