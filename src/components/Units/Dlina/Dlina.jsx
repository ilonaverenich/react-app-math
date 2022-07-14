import { useSelector} from 'react-redux';

import Easy from './Level/Easy';
import Average from './Level/Average'
import Hard from './Level/Hard';
import Header from '../../Header/Header';


function Dlina() {

   const data = useSelector((store) => store.data);

return (
     <div className='wrapper'>
       <div className='content'>
         <Header level={data.level}/>
         <div className='content__info'><i><b>ВНИМАНИЕ!</b> Десятичные дроби вводятся через точку. Например: 0.003</i></div>
         {data.level =='light'? <Easy/>:data.level =='average'? <Average/>: <Hard/> }
      </div>
     </div>
   )
}

export default Dlina;