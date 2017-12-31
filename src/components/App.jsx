import React from 'react';

import Header from './Header/Header';
import Promo from './Promo/Promo';
import About from './About/About';
import Work from './Work/Work';
import Services from './Services/Services';
import Features from './Features/Features';
import Footer from './Footer/Footer';
import Input from './Input/Input';
import Gallery from './Gallery/Gallery';
import { Switch, Route} from 'react-router-dom';
import './App.css';


class App extends React.Component {
  render() {
    return (
      <div id="promo-section">
        <Header />
        <main>
        <Switch>
          <Route exact path="/" component={Promo} />
          <Route path="/input" component={Input} />
          <Route path="/Gallery" component={Gallery} />
          <Route path="/about" component={About} />
          <Route path="/work" component={Work} />
          <Route path="/services" component={Services} />
          <Route path="/features" component={Features} />
        </Switch>
        </main>
        <Footer />
      </div>
    );
  }
}

export default App;
// const mapStateToProps = (state) => {
//   return {
//     user: state.user,
//     article: state.article,
//   }
// }

// const mapDispatchToProps = (dispatch) => {
//   return {
//     addNews: bindActionCreators(addNews, dispatch),
//     likeAction: bindActionCreators(likeAction, dispatch)
//   }
// }

// export default connect(mapStateToProps, mapDispatchToProps)(App);
