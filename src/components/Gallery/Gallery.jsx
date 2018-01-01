import React from 'react';
import { connect } from 'react-redux';
import GalleryCard from './GalleryCard/GalleryCard';
import { deleteCard } from '../../action/galleryActions';
import PropTypes from 'prop-types';
import uuid from 'uuid';
import './Gallery.css';

class Gallery extends React.Component {

  render () {
    const items = this.props.gallery.map((item) => {
      return (
        <GalleryCard
          key={uuid.v4()}
          cardID={item.cardID}
          caption={item.caption}
          text={item.text}
          rating={item.rating}
          deleteCard={() => this.props.onDeleteCard(item.cardID)}
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

const mapStateToProps = state => ({
  gallery: state.gallery
});

const mapDispatchToProps = (dispatch) => ({
  onDeleteCard(cardID) {
    dispatch(deleteCard(cardID))
  }
});

export default connect(mapStateToProps, mapDispatchToProps)(Gallery);

