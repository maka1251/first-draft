import Instagram from './assets/images/instagram.png';
import About from './assets/images/about-image.png';
import Facebook from './assets/images/facebook.png';
import Cafestreet from './assets/images/cafestreet-webdesign1.png';
import Frame1 from './assets/images/Frame1.png';
import Frame2 from './assets/images/Frame2.png';
import Github from './assets/images/github.png';
import Portfolio from './assets/images/portfolio1.png';
import Travel from './assets/images/travel-app-modal1.png';

import './App.css';
import React, { useState } from 'react';
import Logo from './logo.js';
import Navigation from './list.js';

function App() {
  const [title, setTitle] = useState('I`m Raul iqbal');
  return (
    <div className="App">
      <div className="header">
        <div className="container">
            <div className="header-line">
                <Logo/>
                <Navigation/>
            </div>
        </div>

        <div className="container__two">
            <div className="header-title">
                <h1>{title}</h1>
                <p>Front-End Development - UI/UX Designer</p>
                <div className="elements">
                    <a href="#"><img src={Instagram} alt=""/></a>
                    <a href="#"><img src={Facebook} alt=""/></a>
                    <a href="#"><img src={Github} alt=""/></a>
                </div>
            </div>
        </div>
    </div>
    
    <div className="main">
        <div className="about">
            <div className="image">
                <img src={About} alt=""/>
            </div>
            <div className="text">
                <h1 id="specialcolor">ABOUT ME</h1>
                <h2 id="im">I’m Raul iqbal</h2>
                <p id="about-text">Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts. Separated they live in Bookmarksgrove right at the coast of the Semantics, a large language ocean.</p>
                <p id="about-text2">Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts. Separated they live in Bookmarksgrove right at the coast of the Semantics, a large language ocean.</p>
            </div>
        </div>
        <div className="service">
            <h1 id="specialcolor2">WHAT I DO</h1>
            <h2 id="im2">SPECIALIZING IN</h2>

            <div className="cards">
                <div className="card">
                    <div className="group-2">
                        <img src={Frame1} alt=""/>
                        <h2 id="front-back">Front-end <br/> Development</h2>
                    </div>
                    <p id="service-text">Lom ipsum dolo, sit amet consectetu adpisicing elit, rem voluptas sed blanditiis</p>
                </div>
                <div className="card">
                    <div className="group-2">
                        <img src={Frame2} alt=""/>
                        <h2 id="front-back2">UI/UX <br/> Designer</h2>
                    </div>
                    <p id="service-text2">Lom ipsum dolo, sit amet consectetu adpisicing elit, rem voluptas sed blanditiis</p>
                </div>
            </div>
        </div>
        <div className="portfolio">
            <h1 id="specialcolor3">PORTFOLIO</h1>
            <h2 id="im3">LATEST PROJECTS</h2>
            <div className="portfolio-cards">
                <div className="card2">
                    <img src={Portfolio} alt=""/>
                    <div className="rectangle">
                        <p id="rectangle-text">Need Food App Design</p>
                        <div className="button">
                            <a className="button-cards" href="#">View Demo</a>
                        </div>
                    </div>
                </div>
                <div className="card2">
                    <img src={Cafestreet} alt=""/>
                    <div className="rectangle">
                        <p id="rectangle-text2">Cafe Street Web Design</p>
                        <div className="button">
                            <a className="button-cards" href="#">View Demo</a>
                        </div>
                    </div>
                </div>
                <div className="card2">
                    <img src={Travel} alt=""/>
                    <div className="rectangle">
                        <p id="rectangle-text3">Travel App Design</p>
                        <div className="button">
                            <a className="button-cards" href="#">View Demo</a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div className="cta">
            <p id="have-any">Have any project in mind ?</p>
            <div className="button">
                <a className="button-cards" href="#">View Demo</a>
            </div>
        </div>
    </div>
    
    <footer className="footer">
        <p id="log">AUTHOR FIDRIA MAKSIM</p>
        <a className="COPYRIGHT" href="https://www.figma.com/file/x8ffPs1dXr1cF4J82g0GB3/Simple-Personal-Portfolio-Wesbsite---Dark-Mode-(Community)" target="_blank">ORIGINAL</a>
        <a className="COPYRIGHT" href="https://github.com/maka1251" target="_blank"> <br/> GITHUB</a>
    </footer>
    </div>
  );
}

export default App;
