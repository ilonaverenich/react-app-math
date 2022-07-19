
export function checkResultDlina (rMain, rFirst, rSecond, rThird,randomNumber){
    console.log(rMain) //см
    console.log(rFirst) //мм
    console.log(rSecond) //-
    console.log(rThird) //-
   
    let metrix ={
        мм: 1,
        см:10,
        дм:100,
        м:1000,
        км:1000000
      }
      let obj ={
        resVal1: '',
        resVal2: '',
        resVal3: ''
      }
      
      if ((metrix[rMain]> metrix[rFirst])||(metrix[rMain]< metrix[rFirst]))
      {
        obj.resVal1 =  +( randomNumber  * metrix[rMain] / metrix[rFirst]);
        console.log(obj.resVal1)
      }
      
      if ((metrix[rMain]> metrix[rSecond])||(metrix[rMain]< metrix[rSecond]))
      {
        obj.resVal2 =  randomNumber* metrix[rMain] / metrix[rSecond];
      }
      
      if ((metrix[rMain]> metrix[rThird])||(metrix[rMain]< metrix[rThird]))
      {
        obj.resVal3 =  randomNumber* metrix[rMain] / metrix[rThird];
      }

      return obj
}