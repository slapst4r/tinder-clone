import React from 'react'
import './App.css';
import Header from "./Header"
import TinderCards from './TinderCards';

function App() {
  return (
    <div className="app">
      <Header />
      <TinderCards/>
      {/* Swipe */}
    </div>
  );
}

export default App;
