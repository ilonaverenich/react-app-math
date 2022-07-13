import { SET_VALUE, SET_LEVEL, SET_COUNT_NUM } from "./actionTypes";


export const setValue = data =>{
   return {
      type: SET_VALUE,
      payload: data
   }
}

export const setLevel = data =>{
   return {
      type: SET_LEVEL,
      payload: data
   }
}

export const setCountNum = data =>{
   return {
      type: SET_COUNT_NUM,
      payload: data
   }
  
} 
