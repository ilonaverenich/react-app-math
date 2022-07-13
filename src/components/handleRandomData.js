
let units = ['мм', 'см', 'дм', 'м', 'км'];
export const  showRandomValue1 = (arr)=>  arr[Math.floor(Math.random() * arr.length)]

//Для нахождения случайного измерения ДЛИНЫ
export const randomUnitMain = showRandomValue1(units)
export const randomUnitFirst = showRandomValue1(units.filter((item)=>item!==randomUnitMain))
export const randomUnitSecond = showRandomValue1(units.filter((item)=>item!==randomUnitMain && item!==randomUnitFirst))
export const randomUnitThird = showRandomValue1(units.filter((item)=>item!==randomUnitMain && item!==randomUnitFirst && item!==randomUnitSecond))



