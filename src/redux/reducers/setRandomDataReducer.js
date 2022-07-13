   import { SET_RANDOM_DATA1,SET_RANDOM_DATA2,SET_RANDOM_DATA3,SET_RANDOM_DATA4} from "../actions/actionTypes";
   const initialValue ={
      randomUnitMain :'',
      randomUnitFirst: '',
      randomUnitSecond: '',
      randomUnitThird:''
   }

export default function setRandomUnit(state=initialValue, action) {

   switch (action.type){
      case SET_RANDOM_DATA1:{
         return  {
            ...state,
            randomUnitMain: action.payload
         }
      }

      case SET_RANDOM_DATA2:{
         return  {
            ...state,
            randomUnitFirst: action.payload
         }
      }

      case SET_RANDOM_DATA3:{
         return  {
            ...state,
            randomUnitSecond: action.payload
         }
      }

      case SET_RANDOM_DATA4:{
         return  {
            ...state,
            randomUnitThird: action.payload
         }
      }

      default:{
         return state;
      }
   }

}