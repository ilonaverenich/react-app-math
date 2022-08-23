import {GET_MAX_COUNT} from "./actionTypes"

export const getMaxCount = data =>{
   return {
      type: GET_MAX_COUNT,
      payload: data
   }
}



