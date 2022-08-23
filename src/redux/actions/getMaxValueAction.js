import { MAX_VALUE } from "./actionTypes"

export const changeMaxValue = data =>{
   return {
      type: MAX_VALUE,
      payload: data
   }
}



