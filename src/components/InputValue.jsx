/* import React, {useState} from 'react';
import { Input } from 'antd';
import { useDispatch, useSelector } from 'react-redux';
import {getUserValue1,getUserValue2,getUserValue3} from '../redux/actions/getUserValueAction'




const InputValue = () => {

   const value = useSelector((store) => store.value); 
   const user= useSelector((store) => store.userValue);
   const dispatch = useDispatch();

   function handleFunc(e){
    
   }

   return <Input onChange={(e) => handleFunc(e)} className='inputValue' />
}

export default React.memo(InputValue) ;
 */