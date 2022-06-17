import { useNavigate } from 'react-router-dom'
import { useSelector } from 'react-redux';
import Imput from './Imput';


function Massa() {
   let input;
   const navigate = useNavigate();
   const text = useSelector((store) => store.text);
   console.log(text)

   switch (text.level) {
      case 'light': input = <><Imput></Imput></>; break;
      case 'average': input = <><Imput ></Imput ><Imput ></Imput ></>; break;
      case 'hard': input = <><Imput ></Imput ><Imput ></Imput ><Imput ></Imput ></>; break;
   }

   return (
      <div>
         <p>Масса</p>
         {input}

         <button onClick={() => navigate('/')}>Назад</button>
      </div>
   )
}

export default Massa;