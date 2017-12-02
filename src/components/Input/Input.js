import React from 'react';
import './Input.css';

class Input extends React.Component {
  render () {
    return (
      <section className="color-section" id="input">
        <div className="container">
          <h2 className="caption">Input news page</h2>
          <div className="news-input">
            <label>Insert news caption here
              <input type="text" name="newsCaption" defaultValue="" />
            </label>
            <label>Insert news text here
              <textarea name="newsText"></textarea>
            </label>
          </div>
        </div>
      </section>
    );
  }
}

export default Input;
