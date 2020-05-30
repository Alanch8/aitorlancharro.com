import React from "react";
import profilepic from "./Aitor-Lancharro.png";
import ham from "./ham.svg";
import exit from "./exit.svg";
import cadcam from "./CadCam-Design.svg";
import production from "./Production.svg";
import treeDPrinting from "./3dprinting.svg";
import coding from "./Coding.svg";
import htmlcss from "./htmlcss.svg";
import nodejs from "./nodejs.svg";
import python from "./Python.svg";
import whatsapp from "./whatsapp-icon-white.svg";
import envelope from "./Envelope-white.svg";
import linkedin from "./LinkedIn-white.svg";
import github from "./Github-white.svg";
import "./App.css";

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
          <h1 style={{ textTransform: "uppercase" }}>Aitor Lancharro</h1>
          <h2>
            Mechanical Engineer and Self-learning Full Stack Dev and UI/UX
            Design.
          </h2>
          <hr className="hr-home"></hr>
          <p>
            In my day by day I work with CAD tools but in my spare time I try to
            learn new stuff and improve myself about coding.
          </p>
          <button>More About me</button>
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
              <img src={cadcam} className="cadcam" alt="logo" />
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
            <p>+34 665 633 071</p>
            <img src={envelope} className="envelope" alt="envelope"></img>
            <p>aitor.lancharro@gmail.com</p>
            <hr></hr>
            <p>© 2020 Aitor Lancharro. All Rights Reserved.</p>
            <img src={linkedin} className="linkedin" alt="linkedin-icon"></img>
            <img src={github} className="github" alt="github-icon"></img>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;
