import React from 'react';
import PropTypes from 'prop-types';
import './NewsArticle.css';

class NewsArticle extends React.Component {
  constructor(props) {
    super(props);
    this.HandleAddLike = this.HandleAddLike.bind(this);
  }

  static propTypes = {
    newsItem: PropTypes.shape({
      article: PropTypes.shape({
        caption: PropTypes.string.isRequired,
        text: PropTypes.string.isRequired,
        date: PropTypes.string.isRequired,
        likes: PropTypes.number.isRequired,
      }),
      user: PropTypes.shape({
        name: PropTypes.string.isRequired,
      })
    })
  }

  HandleAddLike() {
    let like = this.props.likes + 1;
    this.props.addLike(like);
  }

  render () {
    console.log('NewsArticle this = ', this);
    console.log('NewsArticle this.props = ', this.props);
    const { caption, text, date, likes, name } = this.props;

    return (
      <article className="news-article">
        <h3>{caption}</h3>
        <p>{text}</p>
        <p> Possted on {date} by {name} </p>
        <button onClick={this.HandleAddLike} type="button" name="like"> like! </button>
        <span> likes: {likes} </span>
      </article>
    );
  }
}

export default NewsArticle;
