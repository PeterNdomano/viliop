import React from 'react';
import { createRoot } from 'react-dom/client';
import $ from 'jquery';
import 'bootstrap';
import 'popper.js';
import App from './App';
import '@fortawesome/fontawesome-free/css/all.min.css';
import 'bootstrap-css-only/css/bootstrap.min.css';
import 'mdbreact/dist/css/mdb.css';
import 'react-toastify/dist/ReactToastify.css';
import './index.css';
import { HashRouter, Route, Routes} from 'react-router-dom';

const container = document.getElementById('root');
const root = createRoot(container);
root.render(
  <HashRouter basename="/">
    <Routes>
      <Route path="*" element={<App/>}/>
    </Routes>
  </HashRouter>
);

/*
ReactDOM.render(
  <HashRouter basename="/">
    <Routes>
      <Route path="*" element={<App/>}/>
    </Routes>
  </HashRouter>,
  document.getElementById('root')
);
*/
