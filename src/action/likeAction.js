export const addLike = (likes, newsID) => {
  return {
    type: 'ADD_LIKE',
    payload: {
      likes,
      newsID,
    }
  }
}
