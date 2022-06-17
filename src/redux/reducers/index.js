import {combineReducers} from 'redux';
import textReducer from './setTextReducer';

export default combineReducers ({
   text:textReducer
} )