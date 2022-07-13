import React from 'react'
import { Input, Button} from 'antd';
import {useDispatch, useSelector} from 'react-redux';
import {getUserValue2, getUserValue1} from '../../redux/actions/getUserValueAction';
import {randomUnitMain, randomUnitFirst,randomUnitSecond} from '../handleRandomData'



function Average() {

 /*  console.log(randomUnitMain)
console.log(randomUnitFirst)
console.log(randomUnitSecond)
 */

  const dispatch = useDispatch();
  const user = useSelector((store)=> store.userValue)
  const randomNumber = useSelector((store)=>store.randomNumber)
  const unit = useSelector((store)=>store.unit)
  console.log(randomNumber)
  console.log(unit)

  return (
    <div className='level-box'>
        <div className='content_box'>
          <div className='column_number'>
            {randomNumber} {randomUnitMain} =
          </div>
          <div className='column_value'>
            <div>
              <Input className='inputValue' onChange={(e)=>dispatch(getUserValue1(e.target.value))}/> {randomUnitFirst}
            </div>
            <div>
            <Input className='inputValue' onChange={(e)=>dispatch(getUserValue2(e.target.value))} /> {randomUnitSecond}
            </div>
          </div>
        </div>
        <Button  type="primary" onClick={()=>console.log(+user.userValue1, +user.userValue2)} className='btn-check' >Проверить</Button>
    </div>
  )
}

export default Average 