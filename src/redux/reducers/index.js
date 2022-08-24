import {combineReducers} from 'redux';
import textReducer from './setTextReducer';
import getValueUser from './getUserValueReducer';
import stateReducer from './stateReducer';
import getMaxCountValue from './getMaxValueReducer'
/* import setRandom from './setRandomValue'; */
import setRandomUnit from './setRandomDataReducer';
import resultReducer from './getResultValueReducer';



export default combineReducers ({
   data : textReducer,
   userValue : getValueUser,
   state : stateReducer,
   unit: setRandomUnit,
   result: resultReducer,
   max: getMaxCountValue
} )