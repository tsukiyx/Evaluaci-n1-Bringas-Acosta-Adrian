const arrayNum = [23,4,6,7,99,12,19,8,43,21,65]
const arrayNumTwo = [1,2,3,4,5,6,7,8,9,10];
const arrayNumThree = [20,50,30,10,56,23,15,78,34,12];



const sumNumbersArray = array => array.reduce((acc, value) => acc + value, 0);

console.log(sumNumbersArray(arrayNum))
console.log(sumNumbersArray(arrayNumTwo))
console.log(sumNumbersArray(arrayNumThree))


