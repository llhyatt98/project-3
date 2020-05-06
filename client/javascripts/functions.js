// //fill an array with the numbers from start to stop, in steps of step
// let fillArray = (start, stop, step) => Array.from({ length: (stop - start) / step + 1}, (_, i) => start + (i * step));
 
// //create an array of the numbers 1 - 100
// let arrOf1To100 = fillArray(1, 100, 1);
 
// //log the array for inspection
// console.log(arrOf1To100);
 
let bitBatBotOrNot = (n) => {
   //your code goes here
   if(n%3 == 0 && n%5 == 0 && n%7 == 0){
    return "BitBatBot"
   }
   else if(n%3 == 0 && n%5 == 0){
   	return "BitBat"
   }
   else if(n%3 == 0 && n%7 == 0){
   	return "BitBot"
   }
   else if(n%5 == 0 && n%7 == 0){
   	return "BatBot"
   }
   else if(n%3 == 0){
   	return "Bit"
   }
   else if(n%5 == 0){
   	return "Bat"
   }
   else if(n%7 == 0){
   	return "Bot"
   }
   else{
   	return "Not"
   }
}

//BitBatBot test cases
console.log(bitBatBotOrNot(9) == 'Bit' );
console.log(bitBatBotOrNot(10) == 'Bat' );
console.log(bitBatBotOrNot(28) == 'Bot' );
console.log(bitBatBotOrNot(30) == 'BitBat' );
console.log(bitBatBotOrNot(105) == 'BitBatBot' );
console.log(bitBatBotOrNot(34) == 'Not' );


let findAllbitBatBotOrNots1 = (arr) => {
   //your code goes here
   //use map method
   return arr.map(x => x.toString()+": "+bitBatBotOrNot(x));
}
console.log(findAllbitBatBotOrNots1([9, 10, 28, 30, 34, 105]));

 
let findAllbitBatBotOrNots2 = (arr) => {
   //your code goes here
   //use for statement
   let ret = Array();
   for(let i = 0; i < arr.length; i++){
   	ret.push(arr[i].toString()+": "+bitBatBotOrNot(arr[i]));
   }
   return ret
}
console.log(findAllbitBatBotOrNots2([9, 10, 28, 30, 34, 105]));


let findAllbitBatBotOrNots3 = (arr) => {
   //your code goes here
   //use for..of statement
   let ret = Array();
   for(let elem of arr){
   	ret.push(elem.toString()+": "+bitBatBotOrNot(elem));
   }
   return ret;
}
console.log(findAllbitBatBotOrNots3([9, 10, 28, 30, 34, 105]));

 
let findAllbitBatBotOrNots4 = (arr) => {
   //your code goes here
   //use forEach method
   let ret = Array();
   arr.forEach(function beepboopbop(elem){ret.push(elem.toString()+": "+bitBatBotOrNot(elem))})
   return ret;
}
console.log(findAllbitBatBotOrNots4([9, 10, 28, 30, 34, 105]));


