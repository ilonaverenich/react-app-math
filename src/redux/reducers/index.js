import {combineReducers} from 'redux';
import textReducer from './setTextReducer';
import getValueUser from './getUserValueReducer';
import stateReducer from './stateReducer';
import getMaxCountValue from './getMaxValueReducer'
import setRandomUnit from './setRandomDataReducer';
import resultReducer from './getResultValueReducer';
import getDataGrade from './dataGradeReducer';



export default combineReducers ({
   data : textReducer,
   userValue : getValueUser,
   state : stateReducer,
   unit: setRandomUnit,
   result: resultReducer,
   max: getMaxCountValue,
   grade: getDataGrade
} )