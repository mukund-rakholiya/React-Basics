import React from 'react';
import logo from './logo.svg';
import './App.css';
import Counter from './components/counter/Counter';
import User from './components/user/User';

function App() {
  return (
    <>
      <Counter />
      <br /><br /><br /><br />
      <User />
    </>
  );
}

export default App;
