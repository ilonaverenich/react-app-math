import { useNavigate } from 'react-router-dom'
import { useSelector, useDispatch } from 'react-redux';

import Easy from './Level/Easy';
import Average from './Level/Average';
import Hard from './Level/Hard';

import ResultButton from './ResultButton';
/* import {getUserValue1,getUserValue2,getUserValue3} from '../redux/actions/getUserValueAction' */




function Dlina() {

   let input;
   const navigate = useNavigate();
   const dispatch = useDispatch();
   const data = useSelector((store) => store.data);
   const user = useSelector((store)=> store.userValue)

/*    console.log(user)
   let units = ['мм', 'см', 'дм', 'м', 'км'];
   showRandomValue1 = ()=>  arr[Math.floor(Math.random() * arr.length)]
   
   let randomUnitMain = showRandomValue1(units)
   let randomUnitFirst = showRandomValue1(units.filter((item)=>item!==randomUnitMain))
   let randomUnitSecond = showRandomValue1(units.filter((item)=>item!==randomUnitMain && item!=randomUnitFirst))
   let randomUnitThird = showRandomValue1(units.filter((item)=>item!==varandomUnitMainl1 && item!=randomUnitFirst && item!=randomUnitSecond)) */

/*    switch (data.level) {
      case 'light': <Easy/>; break;
     case 'average': input = <div><Input onChange={(e)=>dispatch(getUserValue1(e.target.value))}/><Input onChange={(e)=>dispatch(getUserValue2(e.target.value))}/></div>; break;
      case 'hard': input = <div><Input onChange={(e)=>dispatch(getUserValue1(e.target.value))}/><Input onChange={(e)=>dispatch(getUserValue2(e.target.value))}/><Input onChange={(e)=>dispatch(getUserValue3(e.target.value))}/></div>; break;  
   }
 */
 /*   function getRandomNumber(min, max) {
      let rand = ;
      return ;
   } */

return (
      <div>
         <p>ВНИМАНИЕ! Десятичные дроби вводятся через точку. Например: 0.003</p>
    

         {data.level =='light'? <Easy/>:data.level =='average'? <Average/>: <Hard/> }
         {/* <ResultButton randomNumber={randomNumber} val1={val1} val2={val2} units={units} /> */}
      
      </div>
   )
}

export default Dlina