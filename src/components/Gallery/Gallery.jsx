import React from 'react';
import { connect } from 'react-redux';
import GalleryCard from './GalleryCard/GalleryCard';
import { deleteCard } from '../../action/galleryActions';
import PropTypes from 'prop-types';
import { bindActionCreators } from 'redux';
import './Gallery.css';

class Gallery extends React.Component {

  deleteCardHandler = (cardID) => {
    console.log('cardID: ', cardID);
    deleteCard(cardID);
  }

  render () {
    const items = this.props.gallery.map((item, i) => {
      return (
        <GalleryCard
          key={i}
          cardID={item.cardID}
          caption={item.caption}
          text={item.text}
          rating={item.rating}
          deleteCard={() => this.deleteCardHandler(item.cardID)}
        />
      )
    });

    return (
      <section className="color-section color-section--dark" id="output">
        <div className="container">
          <h2 className="caption"> Gallery </h2>
          <div className="news-output">
            {items}
          </div>
        </div>
      </section>
    );
  }
}

Gallery.propTypes = {
  gallery: PropTypes.array.isRequired
}

const mapStateToProps = state => {
  return {
    gallery: state.gallery,
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    deleteCard: bindActionCreators(deleteCard, dispatch)
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Gallery);

