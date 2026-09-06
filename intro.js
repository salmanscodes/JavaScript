var a=10;
console.log(a+10);
var b="codewithharry";
console.log(a+b);
console.log("hello world")
console.log(b+10);
console.log("sum =",a+30);
console.log(typeof a,typeof b,typeof null);
let nam="salman";
console.log("My name is "+nam+" I am 20 years old");
let c=10;
console.log(c);
c=20;
console.log(c);
const item={
    name:"salman",
    age:19,
}
console.log(item);
item.gpa=3.2;  //works because const prevents you from changing the variable's reference, not from changing the contents of the object.
                //give error
               /*item = {
                        name: "Ali"
                        };     */
console.log(item);
const dictionary = {
    happy: "Feeling or showing pleasure.",
    brave: "Ready to face danger or difficulty.",
    honest: "Telling the truth and not cheating.",
    intelligent: "Having a good ability to learn and understand.",
    beautiful: "Pleasing to look at."
};

console.log(dictionary);
console.log(dictionary.honest);
a=20;
b="20";           //==   use for match equal values 
if(a===b){        //===   use for match equal values with datatype
    console.log("true");
}
else{
    console.log("false");
}
let ag=19;
console.log(ag>18?"You can drive":"You cannot drive");
let num=19;
if(num%2==0&&num%3==0){
    console.log("Number is divide by 2 and 3");
}
else if(num%2==0){
    console.log("Number is only divide by 2");
}
else if(num%3==0){
    console.log("Number is only divide by 3");
}
else{
    console.log("Number is Not divide by both 2 and 3");
}
         //loop
//The for...in loop is mainly used to iterate over the keys/properties of an object.
for(let key in dictionary){
    console.log(key); //this only print key of object not its values for it values console.log(dictionary[key])
}
 //for in loop give key/index of object 

//for of loop gives only values of iterable (e.g arrays are iterable)
let n="salman";
for(let char of n){
console.log(char);
}

                //Functions in JS
function sum(a,b,c=4){
    return a+b+c;
}
console.log("Sum of a+b+c is ",sum(2,3));
console.log("Sum of a+b+c is ",sum(2,3,5));
            //==== String =====
//properties
let na="Salman";
console.log(na.toUpperCase());
console.log(na.toLowerCase());
console.log(na.replace("Sa","Zs"));
console.log(na.replace("Zs","Sa"));
console.log(na.length);
let f="      salmanamjad  ";
let friend="Rohan";
console.log(f);
console.log(f.trim());
console.log(na.concat(friend));
console.log(na.concat(friend,f));
console.log(f.charAt(9));
console.log(f.indexOf("am"));
console.log(f.endsWith(" "));
console.log(f.startsWith(" "));
console.log(na);
console.log(na.slice(1,4));     //1 index included ,4 index not included
console.log(na.slice(2));
console.log("My name is "+na+" and his friend name is "+friend);
console.log(`My name is ${na} and his friend name is ${friend}`);//template literals
console.log("`Rohan`Salman`")
console.log(`"Rohan"salman"`);
console.log("Rohan\"Salman");

let aj={
    1:"crazy",
    2:"Amazing",
    3:"fire"
}
let shop={
    1:"cloth",
    2:"Food",
    3:"Engine"
}
let ANW={
    1:"Pro",
    2:"Limited",
    3:"Hub"
}
let rand=Math.floor(Math.random() * 3) + 1;
let rand1=Math.floor(Math.random() * 3) + 1;
let rand2=Math.floor(Math.random() * 3) + 1;
console.log("Business Name Generator");
console.log(aj[rand]+shop[rand1]+ANW[rand2]);
