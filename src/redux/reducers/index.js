import {combineReducers} from 'redux';
import textReducer from './setTextReducer';
import getValueUser from './getUserValueReducer';
import arrowBackState from './stateReducer';
import setRandom from './setRandomValue';
import setRandomUnit from './setRandomDataReducer';



export default combineReducers ({
   data : textReducer,
   userValue : getValueUser,
   arrowState : arrowBackState,
   randomNumber: setRandom,
   unit: setRandomUnit
} )