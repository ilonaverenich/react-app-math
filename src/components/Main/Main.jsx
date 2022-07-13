import { setValue, setCountNum, setLevel } from '../../redux/actions/setTextAction';
import { useDispatch, useSelector } from 'react-redux';
import { Form, Button, Radio, Select, Slider } from 'antd';
import { useNavigate } from 'react-router-dom';
import { Col, Divider, Row } from 'antd';
import {setArrowBack} from '../../redux/actions/stateAction';
import {getRandomCount} from '../../redux/actions/setRandomValue';
import {getRandomUnitMain,getRandomUnitValue1,getRandomUnitValue2,getRandomUnitValue3} from '../../redux/actions/setRandomDataAction'
import {randomUnitMain,randomUnitFirst,randomUnitSecond,randomUnitThird} from '../handleRandomData'

function Main() {
   const navigate = useNavigate();
   const { Option } = Select;
   const dispatch = useDispatch();
   const data = useSelector((store) => store.data);
   const user = useSelector((store)=> store.userValue)

   console.log(user)

   function handleFunc() {
      dispatch (setArrowBack(true))
      dispatch(getRandomCount(data.count)) 
      dispatch(getRandomUnitMain(randomUnitMain))
      dispatch(getRandomUnitValue1(randomUnitFirst)) 
      dispatch(getRandomUnitValue2(randomUnitSecond))
      dispatch(getRandomUnitValue3(randomUnitThird))
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

      <div>
         <div className='block'>
            <Divider orientation="left"></Divider>
            <Row>
               <Col flex={3}>
                  <Form>
                     <div>
                        <span className='subtitle'>Выберите единицу измерения:</span>
                        <Select className='select' defaultValue='Выберите единицу измерения' value={data.value} onChange={(e) => dispatch(setValue(e))}>
                           <Option value="dlina">Длина</Option>
                           <Option value="massa">Масса</Option>
                           <Option value="square">Площадь</Option>
                        </Select>
                     </div>
                     <div><span className='subtitle'>Выберите уровень сложности:</span>
                        <Radio.Group defaultActiveFirstOption size="large" className='radio-group' value={data.level} onChange={(e) => dispatch(setLevel(e.target.value))} >
                           <Radio.Button value="light">Лёгкий</Radio.Button>
                           <Radio.Button value="average">Средний</Radio.Button>
                           <Radio.Button value="hard">Тяжёлый</Radio.Button>
                        </Radio.Group></div>
                     <div>
                        <span className='subtitle'>Выберите промежуток: [1,{data.count}]</span>
                        <Slider className='slider' value={data.count} onChange={(e) => dispatch(setCountNum(e))} min={1} /></div>
                     <Button className='btn-submit' type="submit" onClick={() => handleFunc()}>Начать</Button >
                  </Form>
               </Col>
            </Row>

         </div>


      </div>
   )
}

export default Main