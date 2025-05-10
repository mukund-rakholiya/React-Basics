// src/App.tsx
import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Home from './components/Home';
import Counter from './components/counter/Counter';
import User from './components/user/User';
import UserForm from './components/form/UserForm';
import ThemeToggle from './components/theme/ThemeToggle';

function App() {
  return (
    <div>
      <ThemeToggle />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/counter" element={<Counter />} />
        <Route path="/user" element={<User />} />
        <Route path="/form" element={<UserForm />} />
      </Routes>
    </div>
  );
}

export default App;
