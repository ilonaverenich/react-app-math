import {ARROW_BACK, GET_STATUS_INPUT1,GET_STATUS_INPUT2,GET_STATUS_INPUT3,GET_STATE_RESULT} from '../actions/actionTypes';
const initialValue = {
   arrowBack: false,
   getStatus1: false,
   getStatus2: false,
   getStatus3: false,
   resultState:false
}


export default function stateReducer (state=initialValue, action) {

    switch (action.type){
       case ARROW_BACK:{
          return  {
            ...state,
            arrowBack: action.payload
          }
       }

       case GET_STATUS_INPUT1:{
         return  {
           ...state,
           getStatus1: action.payload
         }
      }

      case GET_STATUS_INPUT2:{
         return  {
           ...state,
           getStatus2: action.payload
         }
      }

      case GET_STATUS_INPUT3:{
         return  {
           ...state,
           getStatus3: action.payload
         }
      }
      case GET_STATE_RESULT:{
         return  {
           ...state,
           resultState: action.payload
         }
      }
       default:{
          return state;
       }
    }
 
 }