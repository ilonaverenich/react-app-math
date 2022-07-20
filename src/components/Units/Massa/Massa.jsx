import { useNavigate } from 'react-router-dom'
import { useSelector } from 'react-redux';



function Massa() {
   let input;
   const navigate = useNavigate();

   return (
      <div>
         <p>Масса</p>
         {input}
         <button onClick={() => navigate('/')}>Назад</button>
      </div>
   )
}

export default Massa;