import React from 'react';
import ReactDOM from 'react-dom/client';
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import '@fortawesome/fontawesome-free/css/all.min.css';
import 'bootstrap-css-only/css/bootstrap.min.css';
import 'mdbreact/dist/css/mdb.css';
import 'aos/dist/aos.css';
import './index.css';
import App from './App';

import { HashRouter, Routes, Route } from 'react-router-dom';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <HashRouter basename='/'>
      <Routes>
        <Route exact path='/' element={<App/>} />
        <Route exact path='/:_navItem' element={<App/>}/>
        <Route exact path='/:_navItem/:_navSubItem' element={<App/>}/>
        <Route exact path='/:_navItem/:_navSubItem/:_navExtraItem' element={<App/>}/>
      </Routes>
    </HashRouter>
  </React.StrictMode>
);

