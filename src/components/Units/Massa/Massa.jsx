import { useSelector} from 'react-redux';
import Header from '../../Header/Header';
import Footer from '../../Footer/Footer';
import {anotherExample,exampleOne, exampleTwo,exampleTree, exampleFour,unitsArray} from '../handleRandomMassa'
import Easy from '../Dlina/Level/Easy';
import Average from '../Dlina/Level/Average';
import Hard from '../Dlina/Level/Hard';
import {checkResultMassa} from '../../Units/handleResultValueMassa'

function Massa() {
  const data = useSelector((store) => store.data);
  anotherExample(unitsArray)
  let obj = checkResultMassa(exampleOne,exampleTwo,exampleTree,exampleFour,data.count)
   
   return (
      <div className='wrapper'> 
         <div className='content'>
            <Header level={data.level}/>
        <div className='content__info'>
            <i><b>ВНИМАНИЕ!</b> Десятичные дроби вводятся через точку. Например: 0.003</i>
        </div>
        {data.level =='light'
               ?
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
          />
             : 
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

export default Massa;