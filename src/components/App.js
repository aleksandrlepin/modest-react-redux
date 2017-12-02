import React from 'react';

import './App.css';
import Header from './Header/Header';
import Promo from './Promo/Promo';
import About from './About/About';
import Work from './Work/Work';
import Services from './Services/Services';
import Features from './Features/Features';
import Footer from './Footer/Footer';
import Input from './Input/Input';
import Output from './Output/Output';

class App extends React.Component {
    render() {
        return (
            <div id="promo-section">
                <Header />
                <main>
                  <Input />
                  <Output />
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
