const math = require('./math') // ('./math') math.js file path

console.log("value is :" , math.addTwoNumber(55,55));
console.log("value is :" , math.subTwoNumber(55,20));

const {addTwoNumber,subTwoNumber} = require('./math')

console.log("value is :" ,addTwoNumber(55,5));
console.log("value is :" ,subTwoNumber(55,5));

const {add , sub} = require('./math')

console.log('value is :',add(5,5));
console.log('value is :',sub(5,5));
