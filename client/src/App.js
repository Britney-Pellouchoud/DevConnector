import React, { Fragment } from 'react';
import { BrowserRouter, Routes, Route, Switch } from 'react-router-dom';
import Navbar from './components/layout/Navbar';
import Landing from './components/layout/Landing';
import Register from './components/auth/Register';
import Login from './components/auth/Login';

console.log("HITS HERE ");

//Redux
import { Provider } from 'react-redux';
import store from './store';

import './App.css';

const App = () => (
  <Provider store={store}> 
  <BrowserRouter> 
    <Fragment> 
      <Navbar /> 
      <Routes> 
        <Route exact path="/" element={<Landing />} />
      </Routes>
      <section className="Container">
        <Routes> 
        <Route exact path='/Register' element={<Register />} />
        <Route exact path='/Login' element={<Login />} />
        </Routes> 
      </section>
    </Fragment>
  </BrowserRouter>
  </Provider>
);

export default App;
