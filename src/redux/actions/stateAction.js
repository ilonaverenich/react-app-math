import {ARROW_BACK} from '../actions/actionTypes'

export const setArrowBack = data =>{
    return {
       type: ARROW_BACK,
       payload: data
    }
 }