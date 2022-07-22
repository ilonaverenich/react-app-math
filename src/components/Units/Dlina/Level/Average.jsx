import React, {useState} from 'react'
import { Input, Button, message} from 'antd';
import {useDispatch, useSelector} from 'react-redux';
import {getUserValue2, getUserValue1} from '../../../../redux/actions/getUserValueAction';
import {getRandomCount} from '../../../../redux/actions/setRandomValue';
import {getRandomUnitMain,getRandomUnitValue1,getRandomUnitValue2} from '../../../../redux/actions/setRandomDataAction';
import {exampleOne, exampleTwo,anotherExample,unitsArray,exampleTree} from '../../handleRandomData';
import {checkResultDlina} from '../../handleResultValue';


function Average() {

  const dispatch = useDispatch();
  const user = useSelector((store)=> store.userValue)
  const randomNumber = useSelector((store)=>store.randomNumber)
  const unit = useSelector((store)=>store.unit);
  const result = useSelector((store)=>store.result);
  const state = useSelector((store)=>store.state);
  const data = useSelector((store)=>store.data)

  const [valueInput1,setValueInput1] = useState('')
  const [valueInput2,setValueInput2] = useState('')
  const [success,setSuccess] = useState(0)
  const [error,setError] = useState(0)
  
  let allRes = error+success;



function getInputValue1 (e){
  dispatch(getUserValue1(e.target.value))
   setValueInput1(e.target.value)

}
function getInputValue2 (e){
  dispatch(getUserValue2(e.target.value))
  setValueInput2(e.target.value)
}
function handleCalc(rMain, rFirst, rSecond, rThird,randomNumber) {
  console.log('unit',unit)

  const obj = checkResultDlina(rMain, rFirst, rSecond, rThird,randomNumber);

  if (obj.resVal1 == user.userValue1 && obj.resVal2 == user.userValue2){
    message.success('Верно')
    setSuccess(success+1)
    setValueInput1('')
    setValueInput2('');
    anotherExample(unitsArray)
    dispatch(getRandomCount(data.count))
    dispatch(getRandomUnitMain(exampleOne))
    dispatch(getRandomUnitValue1(exampleTwo)) 
    dispatch(getRandomUnitValue2(exampleTree)) 
  } 
  else {
    setError(error+1)
    if (result.resultValue1!==user.valueInput1){
      message.error('Ошибка! Проверьте введенные данные еще раз!')
        }  
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
        <div className='content__block_average_value'>

          <div className='column_number'>
            {randomNumber} {unit.randomUnitMain} =
          </div>


          <div className='column_value'>
            <div >
              <Input 
              className='inputValue' 
              value={valueInput1} 
              status={state.getStatus1?'error':''} 
              onChange={(e)=>getInputValue1(e)}/>

              {unit.randomUnitFirst}

            </div>
          <div>

            
            <Input 
            className='inputValue' 
            value={valueInput2} 
            status={state.getStatus2?'error':''} 
            onChange={(e)=>getInputValue2(e)} />
            
            {unit.randomUnitSecond} 

            </div>
          </div>
        </div>


        <div className='content__block_btn'>

             <Button 
              type="primary" 
              onClick={()=>handleCalc(unit.randomUnitMain,unit.randomUnitFirst,unit.randomUnitSecond,unit.randomUnitThird,randomNumber)} className='btn-check' >
                Проверить
                </Button>

              <div className='box_btn'>
              {(success>=1 || error>=1)?
              <Button type='primary' 
              className='btn-check res-btn' 
               onClick={()=>toSummarize()}> Подвести итог </Button> : ""}
              </div>
            </div>

        <div className='content__block_info'>
                <p>Количество правильных ответов: <span className='count'>{success}</span> </p>
                <p>Количество неправильных ответов:<span className='count'> {error}</span></p>
        </div>

    </div>
  )
}

export default Average 