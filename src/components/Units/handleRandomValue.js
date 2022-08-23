export default function getRandom (maxCount){
  let random =   (Math.round(1 - 0.5 + Math.random() * (maxCount + Number.EPSILON - 1 + 1)))
  return random
} 