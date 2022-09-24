import { SAVE_DATA_GRADE } from "./actionTypes"

export const dataGrade = data =>{
   return {
      type: SAVE_DATA_GRADE,
      payload: data
   }
}



