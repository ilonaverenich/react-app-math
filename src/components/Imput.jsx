import { useSelector, useDispatch } from 'react-redux';
import { Input } from 'antd';
import { getValue } from '../redux/actions/getValueAction';
import { useState, useEffect } from 'react';


const Imput = () => {
   const dispatch = useDispatch();


   const [userValue, setUserValue] = useState('');
   /* console.log(userValue) */

   dispatch(getValue(userValue))




   return < Input onChange={(e) => setUserValue(e.target.value)} className='inputValue' />
}




export default Imput;
