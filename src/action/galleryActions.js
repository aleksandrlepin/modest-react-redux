let nextNewsID = 3;

export const addCard = (caption, text, rating) => {
  return {
    type: 'ADD_CARD',
    payload: {
      cardID: nextNewsID++,
      caption,
      text,
      rating
    }
  }
}

export const deleteCard = (cardID) => {
  return {
    type: 'DELETE_CARD',
    payload: cardID
  }
}