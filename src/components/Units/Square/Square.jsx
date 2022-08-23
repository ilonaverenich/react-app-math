import { useSelector,useDispatch} from 'react-redux';
import Header from '../../Header/Header';
import Footer from '../../Footer/Footer';
import Easy from '../Dlina/Level/Easy';
import Average from '../Dlina/Level/Average';
import Hard from '../Dlina/Level/Hard';
import {exampleOne, exampleTwo,exampleTree, exampleFour,anotherExample,unitsArray} from '../../Units/handleRandomSquare';

import {checkResultSquare} from '../../Units/handleResultValueSquare'

function Square() {
   const dispatch = useDispatch();
   anotherExample(unitsArray)
   const data = useSelector((store) => store.data);
   let obj = checkResultSquare(exampleOne,exampleTwo,exampleTree,exampleFour,data.count)
   console.log('результат в площади изи уровень:', obj)
   
   
   const unit =useSelector((store)=>store.unit )
   console.log(unit)
   return (
    <div className='wrapper'>
         <div className='content'>
            <Header level={data.level}/>
               <div className='content__info'><i><b>ВНИМАНИЕ!</b> Десятичные дроби вводятся через точку. Например: 0.003</i></div>
               {data.level =='light'? 
               <Easy 
                  exampleOne={exampleOne} 
                  exampleTwo={exampleTwo}
                  result= {obj}
               />:
               data.level =='average'? 
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
               /> } 
            <Footer/>
         </div>  
    </div>
   )
}

export default Square;