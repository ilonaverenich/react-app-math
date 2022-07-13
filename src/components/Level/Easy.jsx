import React from 'react'
import { Input, Button} from 'antd';
import {useDispatch, useSelector} from 'react-redux';
import {getUserValue2, getUserValue1} from '../../redux/actions/getUserValueAction';
import {randomUnitMain, randomUnitFirst} from '../handleRandomData'


function Easy() {
  let result;

    const dispatch = useDispatch();

    const user = useSelector((store)=> store.userValue)
    const randomNumber = useSelector((store)=>store.randomNumber)
    const unit = useSelector((store)=>store.unit)

    let metrix ={
      мм: 1,
      см:10,
      дм:100,
      м:1000,
      км:1000000
  }
  console.log('-------',metrix[unit.randomUnitFirst])

  if (metrix[unit.randomUnitMain]> metrix[unit.randomUnitFirst]){
  result = randomNumber * (metrix[unit.randomUnitMain]/metrix[unit.randomUnitFirst]);
  }
  else {
  result = randomNumber * (metrix[unit.randomUnitMain]*metrix[unit.randomUnitFirst])
  } 












function handleCalc(){
   alert(result)
}
    
    return (
    <div className='level-box'>
       
        <div>
        {randomNumber} {randomUnitMain} = <Input className='inputValue' onChange={(e)=>dispatch(getUserValue1(e.target.value))}/> {randomUnitFirst}
            </div>
            <div>
  
            </div>
            <Button  type="primary" onClick={()=>handleCalc()} className='btn-check' >Проверить</Button>
    </div>
  )
}

export default React.memo(Easy);