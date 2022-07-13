import { GET_USER_VALUE_INPUT1, GET_USER_VALUE_INPUT2, GET_USER_VALUE_INPUT3 } from "./actionTypes"

export const getUserValue1 = data =>{
   return {
      type: GET_USER_VALUE_INPUT1,
      payload: data
   }
}
export const getUserValue2 = data =>{
   return {
      type: GET_USER_VALUE_INPUT2,
      payload: data
   }
}


export const getUserValue3 = data =>{
   return {
      type: GET_USER_VALUE_INPUT3,
      payload: data
   }
}




