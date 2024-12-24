// normal function
// function sum(x, y){
//    let total = x + y;
// return x *y ;
// }; 
// let a = 5;
// let b = 7 ;
// let total = sum(a, b);
// console.log(total);

// function fullName(firstName, lastName, age){
//     return 'Your first Name' + ' ' + firstName + ' ' + 'last Name' + lastName + '. your age' + ' ' + age;
// }
// const yourName = fullName('abir' , 'ahmed', 22);
// console.log(yourName);

// function gold( ana, ){
//     return 64 + ' ' + 'ana' + ' '+ '=' + ' ' + ana/16 + ' ' + 'vori';
// }
// let output = gold(64);
// console.log(output);
//  function gold(ana){
//     let vori = ana/16;
//     return `64 ana = ${vori} vori`;
//  }
//  let output = gold(64);
//  console.log(output);
// function volume(meter){
//     let kilometer = meter/1000;
//     return `10000 metter = ${kilometer} kilometer`;
// }
// let output = volume(10000);
// console.log(output);

// anonymous function
// let sum = function(num1, num2){
//     return num1 + num2;
// };
// console.log(sum(10, 20));

// arrow function
// let sum = (num1, num2) => num1 + num2;
// parameter num1, parameter num2
// let sum = (num1, num2) => {
//     let total = num1 + num2
//     return total * total;
// }
// console.log(sum(10, 20)); argument pass 10 20


// higher order function
// function sum (num1, num2, add){
//     return add (num1, num2)
// };
// let add = (number1, number2) => number1 + number2;
// console.log(sum(30, 20, add))

// IFE
// (function name(name){
// console.log(`${name}`)
// })("alif")


// // normal function
// function division( x, y){
//     return Math.ceil(x/y);
// }
// let page = 400;
// let perday = 7;
// let total = division(page, perday);
// console.log(total);


// normal function syntax                           
function sum(){
 // code block
};

function div(pages, pagePerDay){
    return(pages/pagePerDay);
}
console.log(div(400, 7));