import { useSelector,useDispatch} from 'react-redux';

import Easy from './Level/Easy';
import Average from './Level/Average'
import Hard from './Level/Hard';
import Header from '../../Header/Header';
import Footer from '../../Footer/Footer';
import {exampleOne, exampleTwo,exampleTree, exampleFour,anotherExample,unitsArray} from '../../Units/handleRandomData';
import {checkResultDlina} from '../../Units/handleResultValue'
/* import {getRandomUnitMain,getRandomUnitValue1,getRandomUnitValue2,getRandomUnitValue3} from '../../../redux/actions/setRandomDataAction'; */

function Dlina() {
   const dispatch = useDispatch()
   anotherExample(unitsArray)

   const randomNumber =  useSelector((store)=>store.randomNumber)
   let obj = checkResultDlina(exampleOne,exampleTwo,exampleTree,exampleFour,randomNumber)
   console.log('результат в длине изи уровень:', obj)

   const data = useSelector((store) => store.data);
   
return (
     <div className='wrapper'>
       <div className='content'>
         <Header level={data.level}/>
         <div className='content__info'><i><b>ВНИМАНИЕ!</b> Десятичные дроби вводятся через точку. Например: 0.003</i></div>
         { data.level =='light'? 

         <Easy 
         exampleOne={exampleOne} 
         exampleTwo={exampleTwo} 
         result= {obj}
         />

         :data.level =='average'?
         
         <Average 
         exampleOne={exampleOne} 
         exampleTwo={exampleTwo} 
         exampleTree={exampleTree}
         result= {obj}
         />:
         
         <Hard  
         exampleOne={exampleOne} 
         exampleTwo={exampleTwo} 
         exampleTree={exampleTree} 
         exampleFour={exampleFour}
         result= {obj}
         />}
         
         <Footer/>
      </div>
     </div>
   )
}

export default Dlina;