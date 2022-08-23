import React, {useState} from 'react'
import { Input, Button, message} from 'antd';
import {useDispatch, useSelector} from 'react-redux';
import { getUserValue1} from '../../../../redux/actions/getUserValueAction';
import {getStatusFirstInput} from '../../../../redux/actions/stateAction';
import getRandom from '../../../Units/handleRandomValue';
import {setCountNum } from '../../../../redux/actions/setTextAction'

function Easy(props) {
    const dispatch = useDispatch();

    const [valueInput,setValueInput] = useState('')
    const [success,setSuccess] = useState(0)
    const [error,setError] = useState(0)

    const user = useSelector((store)=> store.userValue)
    const data = useSelector((store)=>store.data)
    const state = useSelector((store)=>store.state)

    const max = useSelector((store)=>store.max)

   
    let allRes = error+success;

   function getInputValue (e){
    dispatch(getUserValue1(e.target.value))
    setValueInput(e.target.value) 
  }
  
  function handleCalc(){
 
    if (user.userValue1 == props.result.resVal1){
      message.success('Верно!')
      setValueInput('')
      dispatch(setCountNum(getRandom(max))) 
      dispatch(getStatusFirstInput(false))
      setSuccess(success+1)
  }
    else{
      message.error('Попробуй еще раз')
      dispatch(getStatusFirstInput(true))
      setError(error+1)
    }
  }

function toSummarize(){
  message.info({
    className:'cusstom-class',
    content: `Всего попыток: ${allRes}. Из них правильных -  ${success} - ${(success/allRes*100).toFixed(1)}%, неправильных -  ${error} - ${(error/allRes*100).toFixed(1)}%`,
    duration:4
  })
}
    
    return (
    <div className='content__block'>
       
        <div className='content__block_easy_value'>
          
              <div className='randomUnit'>
              {data.count} 
              
              <span className='unit'>
                {props.exampleOne}
                </span>

              </div> 
              = 
              <Input 
                  className='inputValue' 
                  status={state.getStatus1?'error':''} 
                  value={valueInput} 
                  onChange={(e)=>getInputValue(e)}/> 
              {props.exampleTwo}
            
            
        </div>
            <div className='content__block_btn'>
              <Button  
                  type="primary" 
                  onClick={()=>handleCalc()}  
                  className='btn-check'>
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

export default Easy;