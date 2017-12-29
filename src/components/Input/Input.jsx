import React from 'react';
import './Input.css';

class Input extends React.Component {
  constructor(props) {
    super(props);
    this.addNewsHandler = this.addNewsHandler.bind(this);
  }

  addNewsHandler(e) {
    e.preventDefault();

    let caption, text, date;
    caption = document.querySelector('[name="newsCaption"]');
    text = document.querySelector('[name="newsText"]');
    date = new Date();
    this.props.addNews(caption.value, text.value, date);
    caption.value = '';
    text.value = '';
  }

  render () {
    return (
      <section className="color-section" id="input">
        <div className="container">
          <h2 className="caption">Input news page</h2>
          <form className="news-input">
            <label>Insert news caption here
              <input type="text" name="newsCaption" value={this.caption} />
            </label>
            <label>Insert news text here
              <textarea name="newsText"></textarea>
            </label>
            <button onClick={this.addNewsHandler}> Post </button>
          </form>
        </div>
      </section>
    );
  }
}

export default Input;
