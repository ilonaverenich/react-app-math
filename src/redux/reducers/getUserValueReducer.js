   import { GET_USER_VALUE_INPUT1, GET_USER_VALUE_INPUT2, GET_USER_VALUE_INPUT3} from "../actions/actionTypes";
   const initialValue = {
      userValue1 : '',
      userValue2 : '',
      userValue3 : '',
   };

export default function getValueUser(state=initialValue, action) {

   switch (action.type){
      case GET_USER_VALUE_INPUT1:{
         return {
            ...state,
            userValue1: action.payload
         }
      }

      case GET_USER_VALUE_INPUT2:{
         return  {
            ...state,
            userValue2: action.payload
         }
      }

      case GET_USER_VALUE_INPUT3:{
         return  {
            ...state,
            userValue3: action.payload
         }
      }
         
      default:{
         return state;
      }
   }

}