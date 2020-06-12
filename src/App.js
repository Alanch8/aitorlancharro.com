import React from "react";
import "./App.css";

import profilepic from "./Aitor-Lancharro.png";
import ham from "./svg/ham.svg";
import exit from "./svg/exit.svg";
import cadCam from "./svg/CadCam-Design.svg";
import production from "./svg/Production.svg";
import treeDPrinting from "./svg/3dprinting.svg";
import coding from "./svg/Coding.svg";
import htmlcss from "./svg/htmlcss.svg";
import nodejs from "./svg/nodejs.svg";
import python from "./svg/Python.svg";
import whatsapp from "./svg/whatsapp-icon-white.svg";
import envelope from "./svg/Envelope-white.svg";
import linkedin from "./svg/LinkedIn-white.svg";
import github from "./svg/Github-white.svg";

function App() {
  return (
    <div className="app">
      <div className="container">
        <header className="app-header">
          <nav className="nav-main">
            <a href="#" className="hide-desktop">
              <img src={ham} alt="toggle menu" className="menu" id="menu"></img>
            </a>
            <ul className="show-desktop hide-mobile" id="nav">
              <li id="exit" class="exit-btn hide-desktop">
                <img src={exit} alt="exit menu"></img>
              </li>
              <li>
                <a style={{ textTransform: "uppercase" }} href="#">
                  Home
                </a>
              </li>
              <li>
                <a style={{ textTransform: "uppercase" }} href="#">
                  About me
                </a>
              </li>
              <li>
                <a style={{ textTransform: "uppercase" }} href="#">
                  Resume
                </a>
              </li>
              <li>
                <a style={{ textTransform: "uppercase" }} href="#">
                  Contact
                </a>
              </li>
            </ul>
          </nav>
        </header>
        <section>
          <img src={profilepic} className="app-profilepic" alt="logo" />
          <h1 className="main" style={{ textTransform: "uppercase" }}>Aitor Lancharro</h1>
          <h2 className="presentation">
            Mechanical Engineer and Self-learning Full Stack Dev and UI/UX
            Design.
          </h2>
          <hr className="hr-home"></hr>
          <p className="abstract">
            In my day by day I work with CAD tools but in my spare time I try to
            learn new stuff and improve myself about coding.
          </p>
          <a className="mam">More About me</a>
        </section>
      </div>

      <div className="about-container">
        <div className="container">
          <h1>About me</h1>
          <p>
            "Lorem Ipsum Dolor Sit Amet, Consectetur Adipiscing Elit, Sed Do
            Eiusmod Tempor Incididunt Ut Labore Et Dolore Magna Aliqua. Ut Enim
            Ad Minim Veniam, Quis Nostrud Exercitation Ullamco Laboris Nisi Ut
            Aliquip Ex Ea Commodo Consequat."
          </p>
          <h2>Skills</h2>
          <ul className="skills">
            <li>
              <img src={cadCam} className="cadcam" alt="logo" />
            </li>
            <li>
              <img src={production} className="cadcam" alt="logo" />
            </li>
            <li>
              <img src={treeDPrinting} className="cadcam" alt="logo" />
            </li>
            <li>
              <img src={coding} className="cadcam" alt="logo" />
            </li>
            <li>
              <img src={htmlcss} className="cadcam" alt="logo" />
            </li>
            <li>
              <img src={nodejs} className="cadcam" alt="logo" />
            </li>
            <li>
              <img src={python} className="cadcam" alt="logo" />
            </li>
          </ul>
        </div>
      </div>

      <div className="resume-container">
        <div className="container">
          <h1>Resume</h1>
          <p>
            "Lorem Ipsum Dolor Sit Amet, Consectetur Adipiscing Elit, Sed Do
            Eiusmod Tempor Incididunt Ut Labore Et Dolore Magna Aliqua. Ut Enim
            Ad Minim Veniam, Quis Nostrud Exercitation Ullamco Laboris Nisi Ut
            Aliquip Ex Ea Commodo Consequat. Duis Aute Irure Dolor In
            Reprehenderit In Voluptate Velit Esse Cillum Dolore Eu Fugiat Nulla
            Pariatur. Excepteur Sint Occaecat Cupidatat Non Proident, Sunt In
            Culpa Qui Officia Deserunt Mollit Anim Id Est Laborum."
          </p>
          <hr></hr>
          <button>Get my Resume</button>
        </div>
      </div>

      <div className="contact-container">
        <div className="container">
          <h1>Contact</h1>
          <p>
            "Lorem Ipsum Dolor Sit Amet, Consectetur Adipiscing Elit, Sed Do
            Eiusmod Tempor Incididunt Ut Labore Et Dolore Magna Aliqua. Ut Enim
            Ad Minim Veniam, Quis Nostrud Exercitation Ullamco Laboris Nisi Ut
            Aliquip Ex Ea Commodo Consequat.
          </p>
          <form>
            <input placeholder="Name"></input>
            <input placeholder="E-mail"></input>
            <input placeholder="Phone"></input>
            <input placeholder="Message"></input>
            <button>Send</button>
          </form>
        </div>
      </div>

      <footer>
        <div className="footer-container">
          <div className="container">
            <h1>Aitor Lancharro</h1>
            <img src={whatsapp} className="whatsapp" alt="whatsapp-icon"></img>
            <p></p>
            <img src={envelope} className="envelope" alt="envelope"></img>
            <p>aitor.lancharro@gmail.com</p>
            <hr></hr>
            <p>© 2020 Aitor Lancharro. All Rights Reserved.</p>
            <a href="https://www.linkedin.com/in/aitorlancharrohurtado/"><img src={linkedin} className="linkedin" alt="linkedin-icon"></img></a>
            <a href="https://github.com/Alanch8"><img src={github} className="github" alt="github-icon"></img></a>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;
