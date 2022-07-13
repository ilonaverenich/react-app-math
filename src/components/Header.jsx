
import {useState} from 'react'
import {useSelector, useDispatch} from 'react-redux';
import {setArrowBack} from '../redux/actions/stateAction'
import { useNavigate } from "react-router-dom";
function Header() {

const dispatch = useDispatch();
const navigate = useNavigate();

const arrowBack = useSelector((store)=>store.arrowState)
console.log(arrowBack)

function handleBack(){
   dispatch (setArrowBack(false))
   navigate('/') 
}


   return (
      <div className='header'>{!arrowBack? '' :<img onClick={()=> handleBack()} className='arrow-back' src='https://i.postimg.cc/2StmCpGP/icons8-24.png'></img>}Математический тренажер</div>
   )
}

export default Header;