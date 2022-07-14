import {ARROW_BACK,GET_STATUS_INPUT1,GET_STATUS_INPUT2,GET_STATUS_INPUT3} from '../actions/actionTypes'

export const setArrowBack = data =>{
    return {
       type: ARROW_BACK,
       payload: data
    }
 }

 export const getStatusFirstInput = data =>{
   return {
      type: GET_STATUS_INPUT1,
      payload: data
   }
}

export const getStatusSecondInput = data =>{
   return {
      type: GET_STATUS_INPUT2,
      payload: data
   }
}

export const getStatusThirdInput = data =>{
   return {
      type: GET_STATUS_INPUT3,
      payload: data
   }
}