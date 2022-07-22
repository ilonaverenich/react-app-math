import { useSelector} from 'react-redux';

import Header from '../../Header/Header';
import Footer from '../../Footer/Footer';
import {anotherExample,exampleOne, exampleTwo,exampleTree, exampleFour,unitsArray} from '../handleRandomMassa'
import { Button } from 'antd';
/* import Average from '../Level/Average';

import Hard from '../Level/Hard'; */

function Massa() {
  const data = useSelector((store) => store.data);

  function handleCalc(){
   anotherExample(unitsArray)
   console.log(exampleOne, exampleTwo,exampleTree, exampleFour)
  }
   
   return (
      <div className='wrapper'> 
      <div className='content'>
        <Header level={data.level}/>
        <div className='content__info'>
        <i><b>ВНИМАНИЕ!</b> Десятичные дроби вводятся через точку. Например: 0.003</i>
        </div>
            Processing..
        <Button onClick={()=>handleCalc()}>Открыть</Button>
      {/*   <Easy/> */}
     {/*    
      
        {data.level =='light'? <Easy/>:data.level =='average'? <Average/>: <Hard/> }
       */}
        <Footer/>
     </div> 
    </div>
   ) 
}

export default Massa;