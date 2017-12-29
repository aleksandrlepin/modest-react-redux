import React from 'react';
import NewsArticle from './NewsArticle/NewsArticle'

import './Output.css';

class Output extends React.Component {
  render () {
    const { name } = this.props.user;
    const { addLike } = this.props.likeAction;
    // console.log('Output this = ', this);
    // console.log('Output this.props = ', this.props);

    const items = this.props.article.map((item, i) => {
      return (
        <NewsArticle
          key={i}
          newsID={item.newsID}
          caption={item.caption}
          text={item.text}
          date={item.date}
          name={name}
          likes={item.likes}
          addLike={addLike}
        />
      )
    })

    return (
      <section className="color-section color-section--dark" id="output">
        <div className="container">
          <h2 className="caption">Output news page</h2>
          <div className="news-output">
            {items}
          </div>
        </div>
      </section>
    );
  }
}

export default Output;
