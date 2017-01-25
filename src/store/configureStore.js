import { createStore } from 'redux';
import rootReducer from '../reducers';
import StoreHelper from '../helpers/store';

export default function congigureStore(initialState = {}) {
  const store = createStore(
    rootReducer,
    initialState,
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
  );

  StoreHelper.init(store); // save store in order to access it and make dispatch in any place we need

  if (module.hot) {
    module.hot.accept('../reducers', () => {
      const nextReducer = require('../reducers');
      store.replaceReducer(nextReducer);
    });
  }

  return store;
}