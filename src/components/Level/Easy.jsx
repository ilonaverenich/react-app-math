import React, {useState, useEffect} from 'react'
import { Input, Button, message} from 'antd';
import {useDispatch, useSelector} from 'react-redux';
import { getUserValue1} from '../../redux/actions/getUserValueAction';
import {getRandomCount} from '../../redux/actions/setRandomValue';
import {getRandomUnitMain,getRandomUnitValue1} from '../../redux/actions/setRandomDataAction';
import {exampleOne, exampleTwo} from '../handleRandomData';
import {getStatusFirstInput} from '../../redux/actions/stateAction'



function Easy() {


    const dispatch = useDispatch();
    const [valueInput,setValueInput] = useState('')
    const [success,setSuccess] = useState(0)
    const [error,setError] = useState(0)


    const user = useSelector((store)=> store.userValue)
    const randomNumber = useSelector((store)=>store.randomNumber)
    const unit = useSelector((store)=>store.unit)
    const result = useSelector((store)=> store.result);
    const data = useSelector((store)=>store.data)
    const state = useSelector((store)=>store.state)

    let allRes = error+success;

    console.log('data',data)
    console.log('unit',unit)
    console.log('result',result)
    console.log('user',user)
    console.log('state',state)
    
    let metrix ={
      мм: 1,
      см:10,
      дм:100,
      м: 1000,
      км:1000000
  }

      if (metrix[unit.randomUnitMain]<metrix[unit.randomUnitFirst])
      {
          result.resultValue1 = randomNumber * (metrix[unit.randomUnitMain]/metrix[unit.randomUnitFirst]);
      }
      else {
           result.resultValue1 = randomNumber * metrix[unit.randomUnitMain]*metrix[unit.randomUnitFirst]
      } 

  function getInputValue (e){
    dispatch(getUserValue1(e.target.value))
    setValueInput(e.target.value)
  }


function handleCalc(){
  if (result.resultValue1 == user.userValue1){
    message.success('Верно')
    setValueInput('')
    setSuccess(success+1)
    dispatch(getRandomCount(data.count))
    dispatch(getRandomUnitMain(exampleOne))
    dispatch(getRandomUnitValue1(exampleTwo)) 
    dispatch(getStatusFirstInput(false))

  }
  else {
    message.error('Неверно')
    setError(error+1)
    dispatch(getStatusFirstInput(true))
  }
}

function toSummarize(){
  dispatch(getStatusFirstInput(false))
  message.info({
    className:'cusstom-class',
    content: `Всего попыток: ${allRes}. Из них правильных -  ${success} - ${(success/allRes*100).toFixed(1)}%, неправильных -  ${error} - ${(error/allRes*100).toFixed(1)}%`,
    duration:8
  })

}
    
    return (
    <div className='level-box'>
       
        <div>
        {randomNumber} {unit.randomUnitMain} = 
        <Input className='inputValue' status={state.getStatus1?'error':''} value={valueInput} onChange={(e)=>getInputValue(e)}/> {unit.randomUnitFirst}
            </div>
            <div>
  
            </div>
            <Button  type="primary" onClick={()=>handleCalc()} className='btn-check' >Проверить</Button>

            {(success>=1 || error>=1)?<Button type='primary' onClick={()=>toSummarize()}>Подвести итог</Button>:""}

            <p>Количество правильных ответов: {success}</p>
            <p>Количество неправильных ответов: {error}</p>
    </div>
  )
}

export default React.memo(Easy);