   import { GET_USER_VALUE1} from "../actions/actionTypes";
   const initialValue = '';

export default function getValue(state=initialValue, action) {

   switch (action.type){
      case GET_USER_VALUE1:{
         return   action.payload}
      
      default:{
         return state;
      }
   }

}