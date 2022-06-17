import { useNavigate } from 'react-router-dom'
import { useSelector, useDispatch } from 'react-redux';
import Imput from './Imput';
import { Button } from 'antd'



function Dlina() {
   let input, resulVaue;
   const navigate = useNavigate();
   const dispatch = useDispatch();
   const text = useSelector((store) => store.text);
   const res = useSelector((store) => store.valueUser);





   let units = ['мм', 'см', 'дм', 'м', 'км'];

   function showRandomValue1(arr) {
      return arr[Math.floor(Math.random() * arr.length)]
   }
   let val1 = showRandomValue1(units)
   let val2 = showRandomValue1(units)



   switch (text.level) {
      case 'light': input = <><Imput></Imput></>; break;
      case 'average': input = <><Imput ></Imput ><Imput ></Imput ></>; break;
      case 'hard': input = <><Imput ></Imput ><Imput ></Imput ><Imput ></Imput ></>; break;
   }

   function getRandomNumber(min, max) {
      let rand = min - 0.5 + Math.random() * (max - min + 1);
      return Math.round(rand);
   }
   const randomNumber = getRandomNumber(1, text.count);


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
      console.log(res)
   }
   return (
      <div>
         <p>ВНИМАНИЕ! Десятичные дроби вводятся через точку. Например: 0.003</p>
         <div className='center'>   {randomNumber}{val1} {input} {val2}</div>
         <div className=' center'>
            <Button onClick={() => result()}>Проверить</Button>
            <Button onClick={() => navigate('/')}>Назад</Button>
         </div>
      </div>
   )
}

export default Dlina