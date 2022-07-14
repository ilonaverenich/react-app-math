import React,{useState} from 'react'
import { Input, Button, message} from 'antd';
import {useDispatch, useSelector} from 'react-redux';
import {getUserValue2, getUserValue1} from '../../redux/actions/getUserValueAction';
/* import {randomUnitMain, randomUnitFirst,randomUnitSecond} from '../handleRandomData' */



function Average() {
/* 
  let result ={
    resultValue1 :'',
    resultValue2: '',
    resultValue3: ''
  }; */
/*   const [stateSucces, setStateSucces] = useState(false);
  const [stateError, setStateError] = useState(false); */

  const dispatch = useDispatch();
  const user = useSelector((store)=> store.userValue)
  const randomNumber = useSelector((store)=>store.randomNumber)
  const unit = useSelector((store)=>store.unit);
  const result = useSelector((store)=>store.result);
 

console.log(result)
  let metrix ={
    мм: 1,
    см:10,
    дм:100,
    м:1000,
    км:1000000
}

if (metrix[unit.randomUnitMain]< metrix[unit.randomUnitFirst]){
  result.resultValue1 = randomNumber * (metrix[unit.randomUnitMain]/metrix[unit.randomUnitFirst]);
  result.resultValue2 = randomNumber * (metrix[unit.randomUnitMain]/metrix[unit.randomUnitSecond]);
}
else {
  result.resultValue1 = randomNumber * (metrix[unit.randomUnitMain]*metrix[unit.randomUnitFirst]);
  result.resultValue2 =randomNumber * (metrix[unit.randomUnitMain]*metrix[unit.randomUnitSecond]); 
}
function handleCalc (){
if ((user.userValue1 == result.resultValue1)&&(user.userValue2 == result.resultValue2)){
  message.success('Верно')
}
 else {
  message.error('Неверно')
 }

}

  return (
    <div className='level-box'>
        <div className='content_box'>
          <div className='column_number'>
            {randomNumber} {/* {randomUnitMain} */} =
          </div>
          <div className='column_value'>
            <div>
              <Input className='inputValue'  onChange={(e)=>dispatch(getUserValue1(e.target.value))}/> {/* {randomUnitFirst} */}
            </div>
            <div>
            <Input className='inputValue' onChange={(e)=>dispatch(getUserValue2(e.target.value))} /> {/* {randomUnitSecond} */}
            </div>
          </div>
        </div>
        <Button  type="primary" onClick={()=>handleCalc()} className='btn-check' >Проверить</Button>
    </div>
  )
}

export default Average 