import React, { Component } from 'react';

import './App.css';
import Header from './Header/Header.js';
import Promo from './Promo/Promo.js';
import About from './About/About.js';
import Work from './Work/Work.js';
import Services from './Services/Services.js';
import Features from './Features/Features.js';
import Footer from './Footer/Footer.js';

class App extends Component {
    render() {
        return (
            <div id="promo-section">
                <Header />
                <main>
                  <Promo />
                  <About />
                  <Work />
                  <Services />
                  <Features />
                  <Footer />
                </main>
            </div>
        );
    }
}

export default App;
