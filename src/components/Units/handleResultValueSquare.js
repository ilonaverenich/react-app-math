
export function checkResultSquare (rMain, rFirst, rSecond, rThird,randomNumber){
  
    let metrix ={
        'кв.см': 1,
        'кв.дм':100,
        'кв.м':10000,
        'а':1000000,
        'га':100000000,
        'кв.км':10000000000
      }
      let obj ={
        resVal1: '',
        resVal2: '',
        resVal3: ''
      }
      
      if ((metrix[rMain]> metrix[rFirst])||(metrix[rMain]< metrix[rFirst]))
      {
        obj.resVal1 =  +( randomNumber  * metrix[rMain] / metrix[rFirst]);
      }
      
      if ((metrix[rMain]> metrix[rSecond])||(metrix[rMain]< metrix[rSecond]))
      {
        obj.resVal2 =  +(randomNumber* metrix[rMain] / metrix[rSecond]) ;
      }
      
      if ((metrix[rMain]> metrix[rThird])||(metrix[rMain]< metrix[rThird]))
      {
        obj.resVal3 =  +(randomNumber* metrix[rMain] / metrix[rThird]);
      }

      return obj
}