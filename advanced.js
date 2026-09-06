//========Destructuor 
//Destructuring  allows us to extract values from arrays or objects and store them in variables.
// Without destructuring:
// let student = {
//     name: "Salman",
//     age: 17,
//     grade: "A"
// };

// let name = student.name;
// let age = student.age;
// let grade = student.grade;

// console.log(name);
// console.log(age);
// console.log(grade);

//object destructor
let student = {
    name: "Salman",
    age: 17,
    grade: "A"
};

let {name,age,grade}=student;
console.log(name,age,grade);
// let [a,b,c]=[1,2,4,5,6,7];
// console.log(a,b,c);

//spread Operator(...arr)
//...arr mean taking every thing from arr
let arr=[1,2,3,4,5];
console.log(...arr); //it will print all element from arr
 function sum(a,b){
    return a+b;
 }
 console.log(sum(...arr)); // it will sum but it sum only those elements of array that have in sum(parameter) like sum function have 2 paramter so it only add two element of arr

 //spread with object
 let obj={
    1:"salman",
    2:"19"
 }
 let obj2={
    ...obj
 }
 console.log(obj);
 console.log(obj2);

 //======= rest operator
 //Rest Collects multiple values into one variable.
 function Sum(...numbers){
    let total = 0;
    for (let number of numbers) {
        total += number;
    }
    return total;
 }
console.log(Sum(10, 20));
console.log(Sum(10, 20, 30));
console.log(Sum(10, 20, 30, 40, 50));

let numbers = [10, 20, 30, 40, 50];
let [first, second, ...remaining] = numbers;
console.log(first,second,...remaining);
//Spread vs rest
//spread mean expand
//rest mean collect

//=========== IIFE
//IIFE means Immediately Invoked Function Expression

//normal function
// function main(na){
//     console.log("Hello "+na);
// } 
// main("salman");

//IIFE 
 (function main(na){
    console.log("Hello "+na);
 })("salman")

 //======= Hoisting
//let and const are not  Hoisted
 var sa;
 console.log(sa);//ouput=undefined
 var sa=5;
 console.log(sa);//output=5
//note: javascript only hoist declaration not initialiation.The variable is undefined until the line where its initization reached
let ti=new Date();
console.log(ti.getDate());
console.log(ti.toLocaleTimeString());