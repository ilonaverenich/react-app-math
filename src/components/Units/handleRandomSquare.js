
 export let unitsArray = [ 'кв.см', 'кв.дм', 'кв.м','а', 'га'];
 let exampleOne, exampleTwo,exampleTree,exampleFour;

 export function anotherExample(params) {
    let list = params.sort(() => Math.random() - 0.5);
      return [exampleOne=list[0],exampleTwo=list[1], exampleTree=list[2],exampleFour=list[3]]
  }
  export  {exampleOne, exampleTwo,exampleTree, exampleFour}



