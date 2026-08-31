let arr=[1,2,3,4,5];
console.log(arr[4]);
for(let i=0;i<5;i++){
    console.log(arr[i]);
}
// in js arrays can store multiple datatype values in one array
let arr1=[1,"salman",false,'c',];
for(let i=0;i<4;i++){
    console.log(arr1[i]);
}
console.log(typeof arr1);
//Properties of arrays in JS
console.log(arr.toString()); // convert array to comma separeted string (original array remains same)
console.log(arr.join("-"));  //join elements of array using a given separater (original array remains same)
console.log(arr.pop());      //remove the last element from array
console.log(arr.push(5));    // add new element to the last of array
console.log(arr.shift());    //remove the first element from array
console.log(arr.unshift(1)); //add new element to the begining of array and return length of new array
// for(let i=0;i<5;i++){ 
//     console.log(arr[i]);
// }
//delete arr[1];      //delete the array element
console.log(arr[1]);
console.log(arr.concat(arr1));  //add two or more array and return new array and does not change existing arary
console.log(arr.splice(2,1,23,24)); //first is starting index,second is remove element count and other are elements to be added it will return element to be deleted
for(let i=0;i<5;i++){ 
    console.log(arr[i]);
}
console.log(arr.slice(2));//slice() extracts a portion of an array without changing the original array.
console.log(arr.sort()); //sort() sorts as strings by default
//for each loop 
arr.forEach((value,index,arr) => {
    console.log(value,index,arr);
});
//for of loop
for(const iterator of arr){
    console.log(iterator);
}
//Map
//map create a new array by performing operation on each array elements
const a=[1,3,5,7,9];
let newarr=a.map((e)=>{
return e**2;   //e represent value of array a
})
console.log(newarr);
//Filter
//filter the element from array by performing some operation
const greaterThan5=(e)=>{
    if(e>5){
        return true;
    }
    return false;
}
console.log(newarr.filter(greaterThan5));
//Reduce 
//reduce an array to single value by perfroming some function
let  add=(a,b)=>{
return a+b;
}
console.log(a.reduce(add));
//Array.from 
//make array from other object
let arr2=Array.from("Salman");
console.log(arr2);