import { setValue, setCountNum, setLevel } from '../../redux/actions/setTextAction';
import { useDispatch, useSelector } from 'react-redux';
import { Form, Button, Radio, Select, Slider} from 'antd';
import { useNavigate } from 'react-router-dom';
import {setArrowBack,getStatusFirstInput} from '../../redux/actions/stateAction';
import {getRandomCount} from '../../redux/actions/setRandomValue';
import {getRandomUnitMain,getRandomUnitValue1,getRandomUnitValue2,getRandomUnitValue3} from '../../redux/actions/setRandomDataAction'
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

      dispatch (setArrowBack(true))
      dispatch(getRandomCount(data.count)) 
      dispatch(getRandomUnitMain(randomUnitMain))
      dispatch(getRandomUnitValue1(randomUnitFirst)) 
      dispatch(getRandomUnitValue2(randomUnitSecond))
      dispatch(getRandomUnitValue3(randomUnitThird))
      dispatch(getStatusFirstInput(false))
      
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
                        <span className='content__block__subtitle'>Выберите измерение:</span>
                        <Select 
                        className='select'
                        defaultValue='Выберите единицу измерения' 
                        value={data.value} 
                        onChange={(e) => dispatch(setValue(e))}>

                           <Option value="dlina">Длина</Option>
                           <Option value="massa">Масса</Option>
                           <Option value="square">Площадь</Option>

                        </Select>
                     </div>


                     <div className={style.content__block__level}>
                        <span 
                        className='content__block__subtitle'>
                           Сложность:
                        </span>

                        <Radio.Group 
                           defaultActiveFirstOption 
                           size="large" 
                           className='radio-group'
                           value={data.level}
                           onChange={(e) => dispatch(setLevel(e.target.value))} >

                           <Radio className='radio-btn' value="light">Лёгкая</Radio>
                           <Radio className='radio-btn' value="average">Средняя</Radio>
                           <Radio className='radio-btn' value="hard">Тяжёлая</Radio>
                        </Radio.Group>
                     </div>

                     <div className={style.content__block__slider}>
                        <span className='content__block__subtitle'>Выберите промежуток: [1, {data.count}]</span>

                        <Slider 
                           className='slider' 
                           defaultValue={10} 
                           value={data.count} 
                           max={1000}
                           onChange={(e) => dispatch(setCountNum(e))} min={1} />
                     </div>

                     <div className={style.content__block__btn}>
                     <Button className='btn-submit' type="primary" onClick={() => handleFunc()}> Старт </Button >
                     </div> 
               </div>
             <Footer/>
         </div>


      </div>
   )
}

export default Main