   import { SAVE_DATA_GRADE} from "../actions/actionTypes";
   const initialValue = '';

export default function getDataGrade(state=initialValue, action) {

   switch (action.type){
      case SAVE_DATA_GRADE:{
         console.log(action.payload)
         return  Math.ceil(action.payload.success/(action.payload.success+ action.payload.error)*100)
      }
   
      default:{
         return state;
      }
   }

}