import React, {useState} from 'react'
import { Input, Button, message} from 'antd';
import {useDispatch, useSelector} from 'react-redux';
import { getUserValue1} from '../../../../redux/actions/getUserValueAction';
import {getRandomCount} from '../../../../redux/actions/setRandomValue';
import {getRandomUnitMain,getRandomUnitValue1} from '../../../../redux/actions/setRandomDataAction';
import {exampleOne, exampleTwo} from '../../handleRandomData';
import {getStatusFirstInput} from '../../../../redux/actions/stateAction'



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
    duration:4
  })

}
    
    return (
    <div className='content__block'>
       
        <div className='content__block_easy_value'>
          
              <div className='randomUnit'>{randomNumber} <span className='unit'>{unit.randomUnitMain}</span>
              </div> 
              = 
              <Input 
              className='inputValue' 
              status={state.getStatus1?'error':''} 
              value={valueInput} 
              onChange={(e)=>getInputValue(e)}/> 
              {unit.randomUnitFirst}
            
            
        </div>
            <div className='content__block_btn'>
              <Button  
              type="primary" 
              onClick={()=>handleCalc()} 
              className='btn-check' >
                Проверить
              </Button>

              <div className='box_btn'>
              {(success>=1 || error>=1)?<Button type='primary' className='btn-check res-btn'  onClick={()=>toSummarize()}>Подвести итог</Button>:""}
              </div>
            </div>
           

           

           <div className='content__block_info'>
                <p>Количество правильных ответов: <span className='count'>{success}</span> </p>
                <p>Количество неправильных ответов:<span className='count'> {error}</span></p>
           </div>
    </div>
  )
}

export default React.memo(Easy);