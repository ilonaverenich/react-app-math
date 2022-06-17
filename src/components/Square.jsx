import { useNavigate } from 'react-router-dom'
import { useSelector } from 'react-redux';

function Square() {
   const navigate = useNavigate();
   const text = useSelector((store) => store.text);
   console.log(text)

   return (
      <div>
         <p>Площадь</p>
         <button onClick={() => navigate('/')}>Назад</button>
      </div>
   )
}

export default Square