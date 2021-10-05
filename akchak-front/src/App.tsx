import logo from './logo.svg';
import './App.css';
import React from 'react';
import { Route, Switch } from 'react-router-dom';
import { HomePage } from './pages/HomePage';
import { Router } from './pages/Router';

const App: React.FC = () => {
  return (
    <div className='App'>
      <Router />
    </div>
  );
};

export default App;
