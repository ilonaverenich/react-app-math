import { GET_RESULT_VALUE1, GET_RESULT_VALUE2, GET_RESULT_VALUE3 } from "./actionTypes"

export const getResultValue1 = data =>{
   return {
      type: GET_RESULT_VALUE1,
      payload: data
   }
}
export const getResultValue2 = data =>{
   return {
      type: GET_RESULT_VALUE2,
      payload: data
   }
}


export const getResultValue3 = data =>{
   return {
      type: GET_RESULT_VALUE3,
      payload: data
   }
}




