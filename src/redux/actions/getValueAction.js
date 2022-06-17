import{GET_USER_VALUE1} from './actionTypes'


export const getValue = data =>{
   return {
      type: GET_USER_VALUE1,
      payload: data
   }
}