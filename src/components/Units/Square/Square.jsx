import { useSelector,useDispatch} from 'react-redux';
import Header from '../../Header/Header';
import Footer from '../../Footer/Footer';
import Easy from '../Dlina/Level/Easy';
import Average from '../Dlina/Level/Average';
import Hard from '../Dlina/Level/Hard';
import {exampleOne, exampleTwo,exampleTree, exampleFour,anotherExample,unitsArray} from '../../Units/handleRandomSquare';
import {getRandomUnitMain,getRandomUnitValue1,getRandomUnitValue2,getRandomUnitValue3} from '../../../redux/actions/setRandomDataAction';
import {checkResultSquare} from '../../Units/handleResultValueSquare'

function Square() {
   const dispatch = useDispatch();
   anotherExample(unitsArray)
   const randomNumber =  useSelector((store)=>store.randomNumber)
   let obj = checkResultSquare(exampleOne,exampleTwo,exampleTree,exampleFour,randomNumber)
   console.log('результат в площади изи уровень:', obj)
   
   const data = useSelector((store) => store.data);
   const unit =useSelector((store)=>store.unit )
   console.log(unit)
   return (
    <div className='wrapper'>
         <div className='content'>
            <Header level={data.level}/>
               <div className='content__info'><i><b>ВНИМАНИЕ!</b> Десятичные дроби вводятся через точку. Например: 0.003</i></div>
               {data.level =='light'? <Easy exampleOne={exampleOne} exampleTwo={exampleTwo}/>:data.level =='average'? <Average/>: <Hard/> } 
            <Footer/>
         </div>  
    </div>
   )
}

export default Square;