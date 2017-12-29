import { createStore } from 'redux';
import rootReducer from '../reducers';
import { composeWithDevTools } from 'redux-devtools-extension';
console.log('composeWithDevTools: ', composeWithDevTools);

const Store = (initialState) => {
  const configureStore = createStore(rootReducer, initialState, composeWithDevTools());
  return configureStore;
}

export default Store;
