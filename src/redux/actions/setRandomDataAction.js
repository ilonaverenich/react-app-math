import { SET_RANDOM_DATA1, SET_RANDOM_DATA2, SET_RANDOM_DATA3, SET_RANDOM_DATA4 } from "./actionTypes"

export const getRandomUnitMain = data =>{
   return {
      type: SET_RANDOM_DATA1,
      payload: data
   }
}
export const getRandomUnitValue1 = data =>{
   return {
      type: SET_RANDOM_DATA2,
      payload: data
   }
}


export const getRandomUnitValue2 = data =>{
   return {
      type: SET_RANDOM_DATA3,
      payload: data
   }
}

export const getRandomUnitValue3 = data =>{
   return {
      type: SET_RANDOM_DATA4,
      payload: data
   }
}




