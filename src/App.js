import React from 'react';
import profilepic from './Aitor-Lancharro.png';
import './App.css';

function App() {
  return (
    <div className="app">
      <header className="app-header">
        <nav className="nav-main">
          <ul className="nav-menu">
            <li><a style={{textTransform:"uppercase"}} href="#">Home</a></li>
            <li><a style={{textTransform:"uppercase"}} href="#">About me</a></li>
            <li><a style={{textTransform:"uppercase"}} href="#">Resume</a></li>
            <li><a style={{textTransform:"uppercase"}} href="#">Contact</a></li>
          </ul>
        </nav>
        <div className="app-content">
        <img src={profilepic} className="app-profilepic" alt="logo" />
        <h1 style={{textTransform:"uppercase"}}>Aitor Lancharro</h1>
        <h2>Mechanical Engineer and Self-learning Full Stack Dev and UI/UX Design.</h2>
        <p>In my day by day I work with CAD tools but in my spare time I try to learn new stuff and improve myself about coding.</p>
        <button className="btn-moreAboutMe">More About me</button>
        </div>
      </header>
    </div>
  );
}

export default App;
