import { setValue, setCountNum, setLevel } from '../../redux/actions/setTextAction';
import { useDispatch, useSelector } from 'react-redux';
import { Button, Radio, Select, Slider} from 'antd';
import { useNavigate } from 'react-router-dom';
import {setArrowBack,getStatusFirstInput,getStatusSecondInput,getStatusThirdInput} from '../../redux/actions/stateAction';
import {getRandomCount} from '../../redux/actions/setRandomValue';
import {getRandomUnitMain,getRandomUnitValue1,getRandomUnitValue2,getRandomUnitValue3} from '../../redux/actions/setRandomDataAction';
import {exampleOne, exampleTwo,exampleTree, exampleFour,anotherExample,unitsArray} from '../Units/handleRandomData';
 import {randomUnitMain,randomUnitFirst,randomUnitSecond,randomUnitThird} from '../Units/handleRandomData';

import Footer from '../Footer/Footer';
import Header from '../Header/Header';
import style from './Main.module.less'

function Main() {
   const navigate = useNavigate();
   const { Option } = Select;
   const dispatch = useDispatch();
   const data = useSelector((store) => store.data);
 
   function handleFunc() {
      anotherExample(unitsArray)
      dispatch (setArrowBack(true))
      dispatch(getRandomCount(data.count)) 
      dispatch(getRandomUnitMain(exampleOne)) 
      dispatch(getRandomUnitValue1(exampleTwo)) 
      dispatch(getRandomUnitValue2(exampleTree)) 
      dispatch(getRandomUnitValue3(exampleFour))  
    
  /*     dispatch(getStatusFirstInput(false))
      dispatch(getStatusSecondInput(false))
      dispatch(getStatusThirdInput(false))
       */
      switch (data.value) {
         case 'massa': {
            navigate('/massa'); break;
         };
         case 'square': {
            navigate('/square'); break;
         }
         case 'dlina': {
            navigate('/dlina'); break;
         }
      }
   }

   return (

      <div className='wrapper'>
         <div className='content'>
            <Header/>
                  <div className='content__block'>
                     <div className={style.content__block__unit}>
                        <span className='content__block__subtitle'>???????????????? ??????????????????:</span>
                        <Select 
                        className='select'
                        defaultValue='???????????????? ?????????????? ??????????????????' 
                        value={data.value} 
                        onChange={(e) => dispatch(setValue(e))}>

                           <Option value="dlina">??????????</Option>
                           <Option value="massa">??????????</Option>
                           <Option value="square">??????????????</Option>

                        </Select>
                     </div>

                     <div className={style.content__block__level}>
                        <span 
                        className='content__block__subtitle'>
                           ??????????????????:
                        </span>

                        <Radio.Group 
                           defaultActiveFirstOption 
                           size="large" 
                           className='radio-group'
                           value={data.level}
                           onChange={(e) => dispatch(setLevel(e.target.value))} >

                           <Radio className='radio-btn' value="light">????????????</Radio>
                           <Radio className='radio-btn' value="average">??????????????</Radio>
                           <Radio className='radio-btn' value="hard">??????????????</Radio>
                        </Radio.Group>
                     </div>

                     <div className={style.content__block__slider}>
                        <span className='content__block__subtitle'>???????????????? ????????????????????: [1, {data.count}]</span>

                        <Slider 
                           className='slider' 
                           defaultValue={10} 
                           value={data.count} 
                           max={1000}
                           onChange={(e) => dispatch(setCountNum(e))} min={1} />
                     </div>

                     <div className={style.content__block__btn}>

                     <Button className='btn-submit' type="primary" onClick={() => handleFunc()}> ?????????? </Button >
                     </div> 
               </div>
             <Footer/>
         </div>


      </div>
   )
}

export default Main