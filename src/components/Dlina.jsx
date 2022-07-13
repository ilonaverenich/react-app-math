import React from 'react'
import { useNavigate } from 'react-router-dom'
import { useSelector, useDispatch } from 'react-redux';
import Imput from './Imput';
import { Button, message, Space } from 'antd';
import { useEffect } from 'react'
import ResultButton from './ResultButton';



function Dlina() {
   let input;
   const navigate = useNavigate();
   const dispatch = useDispatch();
   const text = useSelector((store) => store.text);


   switch (text.level) {
      case 'light': input = <><Imput></Imput></>; break;
      case 'average': input = <><Imput ></Imput ><Imput ></Imput ></>; break;
      case 'hard': input = <><Imput ></Imput ><Imput ></Imput ><Imput ></Imput ></>; break;
   }

   function getRandomNumber(min, max) {
      let rand = min - 0.5 + Math.random() * (max - min + 1);
      return Math.round(rand);
   }

   let units = ['мм', 'см', 'дм', 'м', 'км'];

   function showRandomValue1(arr) {
      return arr[Math.floor(Math.random() * arr.length)]
   }
   let val1 = showRandomValue1(units)
   let val2 = showRandomValue1(units)

   const randomNumber = getRandomNumber(1, text.count);


   return (
      <div>
         <p>ВНИМАНИЕ! Десятичные дроби вводятся через точку. Например: 0.003</p>
         <div className='center'>   {randomNumber}{val1} {input} {val2} </div>
         <ResultButton randomNumber={randomNumber} val1={val1} val2={val2} units={units} />
      </div>
   )
}

export default Dlina