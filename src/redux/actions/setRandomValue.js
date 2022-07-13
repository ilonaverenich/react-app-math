import {SET_RANDOM_VALUE} from "./actionTypes"

export const getRandomCount = data =>{
   return {
      type: SET_RANDOM_VALUE,
      payload: data
   }
}



