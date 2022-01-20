import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Calculator from './components/Calculator';
import Nav from './components/Nav';
import Home from './components/Home';
import Quote from './components/Quote';

const App = () => (
  <>
    <Nav />
    <Routes>
      <Route
        path="/home"
        element={(
          <Home />
        )}
      />
      <Route
        path="/calculator"
        element={(
          <Calculator />
        )}
      />
      <Route
        path="/quote"
        element={(
          <Quote />
        )}
      />
    </Routes>
  </>
);

export default App;
