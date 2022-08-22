   import { SET_RANDOM_VALUE} from "../actions/actionTypes";
   const initialValue =''

export default function setRandom(state=initialValue, action) {

   switch (action.type){
      case SET_RANDOM_VALUE:{
         console.log(action.payload)
         console.log('Значение',(Math.round(1 - 0.5 + Math.random() * (action.payload + Number.EPSILON - 1 + 1))))
         return  (Math.round(1 - 0.5 + Math.random() * (action.payload + Number.EPSILON - 1 + 1))) 
      }

      default:{
         return state;
      }
   }

}