import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Button, message, Space } from 'antd';
import { useNavigate } from 'react-router-dom'

function ResultButton({ randomNumber, val1, val2, units }) {


   const res = useSelector((store) => store.valueUser);
   let resulVaue;
   const text = useSelector((store) => store.text);
   const navigate = useNavigate();

   console.log(res)






   switch (val1 !== val2) {
      case val1 == units[0] && val2 === units[1]: resulVaue = 0.1 * randomNumber; break;
      case val1 == units[0] && val2 === units[2]: resulVaue = 0.01 * randomNumber; break;
      case val1 == units[0] && val2 === units[3]: resulVaue = 0.001 * randomNumber; break;
      case val1 == units[0] && val2 === units[4]: resulVaue = 0.0001 * randomNumber; break;

      case val1 == units[1] && val2 === units[0]: resulVaue = 10 * randomNumber; break;
      case val1 == units[1] && val2 === units[2]: resulVaue = 0.1 * randomNumber; break;
      case val1 == units[1] && val2 === units[3]: resulVaue = 0.01 * randomNumber; break;
      case val1 == units[1] && val2 === units[4]: resulVaue = 0.001 * randomNumber; break;


      case val1 == units[2] && val2 === units[0]: resulVaue = 100 * randomNumber; break;
      case val1 == units[2] && val2 === units[1]: resulVaue = 10 * randomNumber; break;
      case val1 == units[2] && val2 === units[3]: resulVaue = 0.1 * randomNumber; break;
      case val1 == units[2] && val2 === units[4]: resulVaue = 0.001 * randomNumber; break;

      case val1 == units[3] && val2 === units[0]: resulVaue = 1000 * randomNumber; break;
      case val1 == units[3] && val2 === units[1]: resulVaue = 100 * randomNumber; break;
      case val1 == units[3] && val2 === units[2]: resulVaue = 10 * randomNumber; break;
      case val1 == units[3] && val2 === units[4]: resulVaue = 0.1 * randomNumber; break;

      case val1 == units[4] && val2 === units[0]: resulVaue = 10000 * randomNumber; break;
      case val1 == units[4] && val2 === units[1]: resulVaue = 1000 * randomNumber; break;
      case val1 == units[4] && val2 === units[2]: resulVaue = 100 * randomNumber; break;
      case val1 == units[4] && val2 === units[3]: resulVaue = 10 * randomNumber; break;
   }

   function result() {

      console.log(res, resulVaue)
      res == resulVaue ? message.success('Правильно!') : message.error('Неправильно!');
   }


   return (
      <div className=' center'>
         <Button className='green' onClick={() => result()}>Проверить</Button>
         <Button onClick={() => navigate('/')}>Назад</Button>
      </div>
   )
}

export default ResultButton