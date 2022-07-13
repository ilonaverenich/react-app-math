import {ARROW_BACK} from '../actions/actionTypes';
const initialValue = false


export default function arrowBackState (state=initialValue, action) {

    switch (action.type){
       case ARROW_BACK:{
          return  action.payload
       }
       default:{
          return state;
       }
    }
 
 }