import {rez} from './Units/resultGrade';

function Grade() {
  return (
    <div className='content__block_grade'>
    <p>Ваша оценка: <span className='grade'>{rez}</span></p>  
 </div>
  )
}

export default Grade