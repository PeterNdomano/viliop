import React from 'react';
import ReactDOM from 'react-dom';
import $ from 'jquery';
import 'bootstrap';
import 'popper.js';
import App from './App';
import '@fortawesome/fontawesome-free/css/all.min.css';
import 'bootstrap-css-only/css/bootstrap.min.css';
import 'mdbreact/dist/css/mdb.css';
import './index.css';
import { BrowserRouter, HashRouter, Route, Routes, Link, NotFound} from 'react-router-dom';

ReactDOM.render(
  <HashRouter basename="/">
    <Routes>
      <Route path="*" element={<App/>}/>
    </Routes>
  </HashRouter>,
  document.getElementById('root')
);
