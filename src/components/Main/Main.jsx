import { setValue, setCountNum, setLevel } from '../../redux/actions/setTextAction';
import { useDispatch, useSelector } from 'react-redux';
import { Form, Button, Radio, Select, Slider } from 'antd';
import { useNavigate } from 'react-router-dom'

function Main() {
   const navigate = useNavigate();
   const { Option } = Select;
   const dispatch = useDispatch();
   const text = useSelector((store) => store.text);

   function handleFunc() {
      switch (text.value) {
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
            <Form>
               <div>
                  <span className='subtitle'>Выберите единицу измерения:</span>
                  <Select className='select' defaultValue='Выберите единицу измерения' value={text.value} onChange={(e) => dispatch(setValue(e))}>
                     <Option value="dlina">Длина</Option>
                     <Option value="massa">Масса</Option>
                     <Option value="square">Площадь</Option>

                  </Select>
               </div>
               <div><span className='subtitle'>Выберите уровень сложности:</span>
                  <Radio.Group defaultActiveFirstOption size="large" className='radio-group' value={text.level} onChange={(e) => dispatch(setLevel(e.target.value))} >
                     <Radio.Button value="light">Лёгкий</Radio.Button>
                     <Radio.Button value="average">Средний</Radio.Button>
                     <Radio.Button value="hard">Тяжёлый</Radio.Button>
                  </Radio.Group></div>
               <div>
                  <span className='subtitle'>Выберите промежуток: [1,{text.count} ]</span>
                  <Slider className='slider' value={text.count} onChange={(e) => dispatch(setCountNum(e))} min={1} /></div>
               <Button className='btn-submit' type="submit" onClick={() => handleFunc()}>Начать</Button >
            </Form>
         </div>


      </div>
   )
}

export default Main