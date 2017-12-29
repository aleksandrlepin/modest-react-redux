let nextNewsID = 3;

export const addNews = (caption, text, date) => {
  return {
    type: 'ADD_NEWS',
    payload: {
      newsID: nextNewsID++,
      caption,
      text,
      date: date.toString(),
      likes: 0,
    }
  }
}