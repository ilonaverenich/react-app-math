import { useSelector} from 'react-redux';
import Header from '../../Header/Header';
import Footer from '../../Footer/Footer';
/* import Easy from '../Level/Easy' */

/* 
import Easy from '../Massa/Level/Easy';
import Average from '../Massa/Level/Average'
import Hard from '../Massa/Level/Hard';
 */


function Square() {
   const data = useSelector((store) => store.data);
   
   return (
      <div className='wrapper'>
        
    <div className='content'>
        <Header level={data.level}/>
       <div className='content__info'><i><b>ВНИМАНИЕ!</b> Десятичные дроби вводятся через точку. Например: 0.003</i></div>
        {/*  {data.level =='light'? <Easy/>:data.level =='average'? <Average/>: <Hard/> } */}
        Processing..
        <Footer/>
     </div>  
    </div>
   )
}

export default Square;