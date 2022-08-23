   import { MAX_VALUE} from "../actions/actionTypes";
   const initialValue = '';

export default function getMaxCountValue(state=initialValue, action) {

   switch (action.type){
      case MAX_VALUE:{
         return  action.payload
      }
   
      default:{
         return state;
      }
   }

}