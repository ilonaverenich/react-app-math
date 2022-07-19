import React, {useState} from 'react'
import { Input, Button, message} from 'antd';
import {useDispatch, useSelector} from 'react-redux';
import { getUserValue1} from '../../../../redux/actions/getUserValueAction';
import {getRandomCount} from '../../../../redux/actions/setRandomValue';
import {getRandomUnitMain,getRandomUnitValue1} from '../../../../redux/actions/setRandomDataAction';
import {exampleOne, exampleTwo} from '../../handleRandomData';
import {getStatusFirstInput} from '../../../../redux/actions/stateAction';
import {checkResultDlina} from '../../handleResultValue';
import {getResultValue1} from './../../../../redux/actions/getResultValueAction'





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


    console.log('result',result)
  
    
   function getInputValue (e){
    dispatch(getUserValue1(e.target.value))
    setValueInput(e.target.value) }


    function handleCalc(rMain, rFirst, rSecond, rThird,randomNumber) {

   
    const obj = checkResultDlina(rMain, rFirst, rSecond, rThird,randomNumber);
    dispatch(getResultValue1(obj.resVal1))
 
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
              onClick={()=>handleCalc(unit.randomUnitMain,unit.randomUnitFirst,undefined,undefined,randomNumber)} 
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