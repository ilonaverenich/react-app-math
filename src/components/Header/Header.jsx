import {useSelector, useDispatch} from 'react-redux';
import {setArrowBack} from '../../redux/actions/stateAction'
import { useNavigate } from "react-router-dom";
import {exampleOne, exampleTwo,anotherExample,unitsArray,exampleTree,exampleFour} from '../Units/handleRandomData';
import {getRandomUnitMain,getRandomUnitValue1,getRandomUnitValue2,getRandomUnitValue3} from '../../redux/actions/setRandomDataAction'

function Header(props) {
   
let level;
const dispatch = useDispatch();
const navigate = useNavigate();

const state = useSelector((store)=>store.state)

function handleBack(){
/*    anotherExample(unitsArray)
   dispatch(getRandomUnitMain(exampleOne))
   dispatch(getRandomUnitValue1(exampleTwo)) 
   dispatch(getRandomUnitValue2(exampleTree)) 
   dispatch(getRandomUnitValue3(exampleFour))  */
   dispatch (setArrowBack(false))
   navigate('/')
}

 switch (props.level){
   case 'light' : level =' Лёгкая';break;
   case 'average': level =' Средняя'; break;
   case 'hard': level=' Тяжёлая';break;
} 

   return (
    <div className='header'>
      {!state.arrowBack? 'Математический тренажер' :
         <div>
            <img onClick={()=> handleBack()} className='arrow_back' src='https://i.postimg.cc/2StmCpGP/icons8-24.png'>
            </img>
           <span className='header__back'> Назад / Сложность : </span>
                  {level}
            </div>}
    </div> 
   )
}

export default Header;