
 export let unitsArray = ['кв.мм', 'кв.см', 'кв.дм', 'кв.м', 'кв.км'];
 let exampleOne, exampleTwo,exampleTree,exampleFour;

 export function anotherExample(params) {
    let list = params.sort(() => Math.random() - 0.5);
      return [exampleOne=list[0],exampleTwo=list[1], exampleTree=list[2],exampleFour=list[3]]
  }

/*   anotherExample(unitsArray) */
 
  export  {exampleOne, exampleTwo,exampleTree, exampleFour}


/* export const  showRandomValue1 = (arr)=>  arr[Math.floor(Math.random() * arr.length)]  */

//Для нахождения случайного измерения ДЛИНЫ
/* export const randomUnitMain = anotherExample(units)
export const randomUnitFirst = anotherExample(units.filter((item)=>item!==randomUnitMain))
export const randomUnitSecond = anotherExample(units.filter((item)=>item!==randomUnitMain && item!==randomUnitFirst))
export const randomUnitThird = anotherExample(units.filter((item)=>item!==randomUnitMain && item!==randomUnitFirst && item!==randomUnitSecond))  */

 console.log(exampleOne,exampleTwo)