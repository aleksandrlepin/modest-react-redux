const initialState = [
  {
    newsID: 0,
    caption: "initial news 1",
    text: "Initial text 1. Initial text 1. Initial text 1. Initial text 1. Initial text 1. Initial text 1. Initial text 1. Initial text 1.",
    date: new Date().toString(),
    likes: 0,
  },
  {
    newsID: 1,
    caption: "initial news 2",
    text: "Initial text 2. Initial text 2. Initial text 2. Initial text 2. Initial text 2. Initial text 2. Initial text 2. Initial text 2.",
    date: new Date().toString(),
    likes: 0,
  },
  {
    newsID: 2,
    caption: "initial news 3",
    text: "Initial text 3. Initial text 3. Initial text 3. Initial text 3. Initial text 3. Initial text 3. Initial text 3. Initial text 3.",
    date: new Date().toString(),
    likes: 0,
  },
]

const article = (state = initialState, action) => {
  switch (action.type) {
    case 'ADD_NEWS':
      return [...state, action.payload ];
    case 'ADD_LIKE':
      return state.map((item) => {
        if (item.newsID === action.payload.newsID) {
          return {...item, likes: action.payload.likes + 1};
        }
        return {...item}
      });

     default:
      return state;
  }
}

export default article;
