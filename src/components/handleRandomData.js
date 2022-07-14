
 let units = ['мм', 'см', 'дм', 'м', 'км'];
 let exampleOne, exampleTwo,exampleTree,exampleFour

 function anotherExample(params) {
    let list = params.sort(() => Math.random() - 0.5);
      return [exampleOne=list[0],exampleTwo=list[1], exampleTree=list[2],exampleFour=list[3]]
  }

  anotherExample(units)
  export  {exampleOne, exampleTwo,exampleTree, exampleFour}


export const  showRandomValue1 = (arr)=>  arr[Math.floor(Math.random() * arr.length)] 

//Для нахождения случайного измерения ДЛИНЫ
 export const randomUnitMain = showRandomValue1(units)
export const randomUnitFirst = showRandomValue1(units.filter((item)=>item!==randomUnitMain))
export const randomUnitSecond = showRandomValue1(units.filter((item)=>item!==randomUnitMain && item!==randomUnitFirst))
export const randomUnitThird = showRandomValue1(units.filter((item)=>item!==randomUnitMain && item!==randomUnitFirst && item!==randomUnitSecond)) 


/* let units = ['мм', 'см', 'дм', 'м', 'км'];

export let randomUnitMain = units[Math.floor(Math.random() * units.length)]

export let randomUnitFirst = units.filter((item)=>item!==randomUnitMain)[0]

export let randomUnitSecond = units.filter((item)=>item!==randomUnitMain)

export let randomUnitThird = units.filter((item)=>item!==randomUnitMain) */