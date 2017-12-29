import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import Header from './Header/Header';
import Promo from './Promo/Promo';
import About from './About/About';
import Work from './Work/Work';
import Services from './Services/Services';
import Features from './Features/Features';
import Footer from './Footer/Footer';
import Input from './Input/Input';
import Output from './Output/Output';
import * as likeAction from '../action/likeAction';
import { addNews } from '../action/addNewsAction';

import './App.css';

class App extends React.Component {
    render() {
      console.log('App this = ', this);
      // console.log('App this.props = ', this.props);
      // console.log('App likeAction = ', this.props.likeAction);
        return (
            <div id="promo-section">
                <Header />
                <main>
                  <Input addNews={this.props.addNews} />
                  <Output article={this.props.article} user={this.props.user} likeAction={this.props.likeAction}/>
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

const mapStateToProps = (state) => {
  return {
    user: state.user,
    article: state.article,
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    addNews: bindActionCreators(addNews, dispatch),
    likeAction: bindActionCreators(likeAction, dispatch)
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(App);
