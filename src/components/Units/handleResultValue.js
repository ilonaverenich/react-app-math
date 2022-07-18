
export function checkResultDlina (rMain, rFirst, rSecond, rThird, resVal1,resVal2,resval3, randomNumber){
    console.log(rMain) //см
    console.log(rFirst) //мм
    console.log(rSecond) //-
    console.log(rThird) //-
    console.log(resVal1) 
    console.log(resVal2) 
    console.log(resval3) 
    console.log(randomNumber)
    let metrix ={
        мм: 1,
        см:10,
        дм:100,
        м:1000,
        км:1000000
      }
      
      if ((metrix[rMain]> metrix[rFirst])||(metrix[rMain]< metrix[rFirst]))
      {
        resVal1 =  randomNumber  * metrix[rMain] / metrix[rFirst];
      }
      
      if ((metrix[rMain]> metrix[rSecond])||(metrix[rMain]< metrix[rSecond]))
      {
        resVal2 =  randomNumber* metrix[rMain] / metrix[rSecond];
      }
      
      if ((metrix[rMain]> metrix[rThird])||(metrix[rMain]< metrix[rThird]))
      {
        resval3 =  randomNumber* metrix[rMain] / metrix[rThird];
      }
      
}