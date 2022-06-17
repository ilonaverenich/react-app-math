import { SET_VALUE } from "./actionTypes";
import { SET_LEVEL } from "./actionTypes";
import { SET_COUNT_NUM} from "./actionTypes";

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
