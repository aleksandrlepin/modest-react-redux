import React from 'react';
import NewsArticle from './NewsArticle/NewsArticle'

import './Output.css';

class Output extends React.Component {
  render () {
    return (
      <section className="color-section color-section--dark" id="output">
        <div className="container">
          <h2 className="caption">Output news page</h2>
          <div className="news-output">
            <NewsArticle />
            <NewsArticle />
            <NewsArticle />
          </div>
        </div>
      </section>
    );
  }
}

export default Output;
