   import { GET_MAX_COUNT} from "../actions/actionTypes";
   const initialValue =''

export default function getMaxCount(state=initialValue, action) {

   switch (action.type){
      case GET_MAX_COUNT:{
             return action.payload
      }

      default:{
         return state;
      }
   }

}