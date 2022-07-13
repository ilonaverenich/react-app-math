import React from 'react'
import { Input} from 'antd';
import {useDispatch, useSelector} from 'react-redux';
import {getUserValue1} from '../../redux/actions/getUserValueAction'


function Easy() {

    const dispatch = useDispatch();
  
    
 
    return (
    <div>
        Easy component
        <div>
         17 м = <Input className='inputValue' onChange={(e)=>dispatch(getUserValue1(e.target.value))}/> см
        </div>
    </div>
  )
}

export default React.memo(Easy);