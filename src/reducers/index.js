import { combineReducers } from 'redux';
import login               from './login';

export default combineReducers(
  /*
   object = structure of store, where keys names are the properties of store and their values are corresponding reducers
   */
  {
    login
  }
);