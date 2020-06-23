import { composeWithDevTools } from 'redux-devtools-extension';
import { createStore, combineReducers } from 'redux';
import { reducer as formReducer } from 'redux-form';

const rootReducer = combineReducers({ form: formReducer });
export default function configureStore(initialState) {
  let middleware;

  if (!process.env.NODE_ENV || process.env.NODE_ENV === 'development') {
    middleware = composeWithDevTools();
  }
  const store = createStore(rootReducer, initialState, middleware);

  return store;
}
