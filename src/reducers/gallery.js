const initialState = [
  {
    cardID: 0,
    caption: "initial news 1",
    text: "Initial text 1. Initial text 1. Initial text 1. Initial text 1. Initial text 1. Initial text 1. Initial text 1. Initial text 1.",
    rating: 5,
  },
  {
    cardID: 1,
    caption: "initial news 2",
    text: "Initial text 2. Initial text 2. Initial text 2. Initial text 2. Initial text 2. Initial text 2. Initial text 2. Initial text 2.",
    rating: 6,
  },
  {
    cardID: 2,
    caption: "initial news 3",
    text: "Initial text 3. Initial text 3. Initial text 3. Initial text 3. Initial text 3. Initial text 3. Initial text 3. Initial text 3.",
    rating: 3,
  },
]
const gallery = (state = initialState, action) => {
  switch (action.type) {
    case 'ADD_CARD':
    console.log('ADD_CARD: ');
      return [...state, action.payload ];
    case 'DELETE_CARD':
    console.log('DELETE_CARD: ');
      return state.filter(item => (item.cardID !== action.payload.cardID));
    default:
      return state;
  }
}

export default gallery;
