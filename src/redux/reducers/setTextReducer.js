   import { SET_VALUE,SET_LEVEL, SET_COUNT_NUM} from "../actions/actionTypes";
   const initialValue = {
      value: 'dlina',
      level: 'light',
      count: '10'
   };

export default function textReducer(state=initialValue, action) {

   switch (action.type){
      case SET_VALUE:{
         return  {
            ...state,
            value: action.payload,
        
         }
      }
      case SET_LEVEL:{
         return  {
            ...state,
            level: action.payload,
         }
      }
      case SET_COUNT_NUM:{
         return  {
            ...state,
            count:action.payload
         }
      } 
   
      default:{
         return state;
      }
   }

}