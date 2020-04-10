import React from 'react';
import logo from './Aitor-Lancharro.png';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <h1 style={{textTransform:"uppercase"}}>Aitor Lancharro</h1>
        <h2>Mechanical Engineer and Self-learning Full Stack Dev and UI/UX Design.</h2>
        <p>In my day by day I work with CAD tools but in my spare time I try to learn new stuff and improve myself about coding.</p>
      </header>
    </div>
  );
}

export default App;
