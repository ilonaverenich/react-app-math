import React, {useState} from 'react'
import { Input, Button, message} from 'antd';
import {useDispatch, useSelector} from 'react-redux';
import {getUserValue2, getUserValue1, getUserValue3} from '../../../../redux/actions/getUserValueAction';
import {getStatusFirstInput,getStatusSecondInput, getStatusThirdInput,changeStateResult} from '../../../../redux/actions/stateAction';
import {dataGrade} from '../../../../redux/actions/dataGradeAction'
import getRandom from '../../../Units/handleRandomValue';
import {setCountNum } from '../../../../redux/actions/setTextAction'
import {calcProcent} from '../../resultGrade'
import Grade from '../../../Grade';


function Hard(props) {

  const dispatch = useDispatch();
 
  const state = useSelector((store)=>store.state);
  const data = useSelector((store)=>store.data)
  const max = useSelector((store)=>store.max)
  const [valueInput1,setValueInput1] = useState('')
  const [valueInput2,setValueInput2] = useState('')
  const [valueInput3,setValueInput3] = useState('')
  const [success,setSuccess] = useState(0)
  const [error,setError] = useState(0);

  const grade = useSelector((store)=>store.grade)

  let allRes = error + success;

  function getInputValue1 (e){
    dispatch(getUserValue1(e.target.value))
    setValueInput1(e.target.value)
  
  }
  function getInputValue2 (e){
    dispatch(getUserValue2(e.target.value))
    setValueInput2(e.target.value)
  }
  function getInputValue3 (e){
    dispatch(getUserValue3(e.target.value))
    setValueInput3(e.target.value)
  }
  dispatch(dataGrade({success,error}))
  function handleCalc(){

      valueInput1 == props.result.resVal1 ?dispatch(getStatusFirstInput(false)):dispatch(getStatusFirstInput(true))

      valueInput2 == props.result.resVal2 ?dispatch(getStatusSecondInput(false)):(dispatch(getStatusSecondInput(true)))

      valueInput3 == props.result.resVal3 ?dispatch(getStatusThirdInput(false)):(dispatch(getStatusThirdInput(true)))

      if ( valueInput1 == props.result.resVal1 &&  valueInput2 == props.result.resVal2 && valueInput3 == props.result.resVal3){

        setSuccess(success+1)
        dispatch(setCountNum(getRandom(max))) 
        setValueInput1('')
        setValueInput2('')
        setValueInput3('')
      }
      else{
        setError(error+1)

      }

    }
    
  function toSummarize(){
    calcProcent(grade)
    dispatch(changeStateResult(true))
      dispatch(getStatusFirstInput(false))
      dispatch(getStatusSecondInput(false))
        message.info({
          className:'cusstom-class',
          content: `Всего попыток: ${allRes}. Из них правильных -  ${success} - ${(success/allRes*100).toFixed(1)}%, неправильных -  ${error} - ${(error/allRes*100).toFixed(1)}%`,
          duration:4
        })
      
    }

  return (

    <div className='content__block'>
    <div className='content__block_average_value'>

    <div className='column_number'>
    {data.count} {props.exampleOne}  =
    </div>


    <div className='column_value'>
      <div >
    <Input 
        className='inputValue' 
        value={valueInput1} 
        status={state.getStatus1?'error':''} 
        onChange={(e)=>getInputValue1(e)} />
             
        {props.exampleTwo}  

      </div>
    <div>

  <Input 
      className='inputValue' 
      value={valueInput2} 
      status={state.getStatus2?'error':''} 
      onChange={(e)=>getInputValue2(e)} />
  
     {props.exampleTree} 

  </div>
      <div>

        <Input 
        className='inputValue' 
        value={valueInput3} 
        status={state.getStatus3?'error':''} 
        onChange={(e)=>getInputValue3(e)}  />
        
        {props.exampleFour} 

      </div>
</div>
    </div>

    <div className='content__block_btn'>

   <Button  type="primary" onClick={()=>handleCalc()}  className='btn-check' >Проверить</Button>

    <div className='box_btn'>
       {(success>=1 || error>=1)?<Button type='primary' className='btn-check res-btn'  onClick={()=>toSummarize()} >Подвести итог</Button>:""}
    </div>
   </div>
    {state.resultState?<Grade/>:''}
    <div className='content__block_info'>
      <p>Количество правильных ответов: <span className='count'>{success}</span> </p>
      <p>Количество неправильных ответов:<span className='count'> {error}</span></p>
    </div>
  </div>
  )
}

export default React.memo(Hard)