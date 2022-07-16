   import { GET_RESULT_VALUE1,GET_RESULT_VALUE2, GET_RESULT_VALUE3} from "../actions/actionTypes";
   const initialValue = {
      resultValue1: '',
      resultValue2: '',
      resultValue3: ''
   };

export default function resultReducer(state=initialValue, action) {

   switch (action.type){
      case GET_RESULT_VALUE1:{
         return  {
            ...state,
            resultValue1 :action.payload
         }
      }
      case GET_RESULT_VALUE2:{
         return  {
            ...state,
            resultValue2 : action.payload
         }
      }
      case GET_RESULT_VALUE3:{
         return  {
            ...state,
            resultValue3 :action.payload
         }
      } 
   
      default:{
         return state;
      }
   }

}