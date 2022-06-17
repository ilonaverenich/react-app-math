import {combineReducers} from 'redux';
import textReducer from './setTextReducer';
import getValue from './getValueReducer';

export default combineReducers ({
   text:textReducer,
   valueUser: getValue
} )