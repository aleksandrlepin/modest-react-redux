import React from 'react';
import PropTypes from 'prop-types';
import './GalleryCard.css';

const GalleryCard = (props) => {
  const { caption, text, rating, deleteCard } = props;

  return (
    <article className="gallery-card">
      <h3>{caption}</h3>
      <p className="gallery-card__text">{text}</p>
      <span>Rating: {rating}/10</span>
      <button onClick={deleteCard} className="btn btn--small"> Delete </button>
    </article>
  );
}

GalleryCard.propTypes = {
  caption: PropTypes.string.isRequired,
  text: PropTypes.string.isRequired,
  rating: PropTypes.number.isRequired,
  deleteCard: PropTypes.func.isRequired,
}

export default GalleryCard;
