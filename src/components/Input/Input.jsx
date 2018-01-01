import React from 'react';
import './Input.css';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { addCard } from '../../action/galleryActions';

class Input extends React.Component {
  constructor(props) {
    super(props);
    this.addCardHandler = this.addCardHandler.bind(this);
  }

  addCardHandler(e) {
    e.preventDefault();

    let caption, text, rating;
    caption = document.querySelector('[name="cardCaption"]');
    text = document.querySelector('[name="cardText"]');
    rating = document.querySelector('[name="cardRating"]');
    if (caption.value === '' || text.value === '') {
      return;
    }
    this.props.addCard(caption.value, text.value, +rating.value);
    caption.value = '';
    text.value = '';
  }

  render () {
    return (
      <section className="color-section color-section--dark" id="input">
        <div className="container">
          <h2 className="caption">Input news page</h2>
          <form className="news-input">
            <label>Insert news caption here
              <input type="text" name="cardCaption" value={this.caption} />
            </label>
            <label> Insert news text here
              <textarea name="cardText"></textarea>
            </label>
            <select name="cardRating">
              <option default value="1">1</option>
              <option value="2">2</option>
              <option value="3">3</option>
              <option value="4">4</option>
              <option value="5">5</option>
              <option value="6">6</option>
              <option value="7">7</option>
              <option value="8">8</option>
              <option value="9">9</option>
              <option value="10">10</option>
            </select>
            <button onClick={this.addCardHandler}> Post </button>
          </form>
        </div>
      </section>
    );
  }
}

// const mapDispatchToProps = dispatch => {
//   return {
//     addCard: (task) => {
//       dispatch(addCard(task))
//     }
//   }
// }
const mapDispatchToProps = (dispatch) => {
  return {
    addCard: bindActionCreators(addCard, dispatch)
  }
}

export default connect(null, mapDispatchToProps)(Input);
