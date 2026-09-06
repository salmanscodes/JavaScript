// async function getdata(){
//     return new Promise((resolve,reject) =>{
//  setTimeout(() => {
//     resolve(500);
//  }, 3000);
//     });
// }
// //this is callback base approach
// // data.then((v)=>{
// // console.log(data)
// // console.log("Process data")
// // console.log("I am on end line");
// // })

// async function main(){
// console.log("Loading modules");
// console.log("Salman Amjad");
// console.log("Load data")
// let data=await getdata()
// console.log(data)
// console.log("Process data")
// console.log("I am on end line");
// }
// main()
// //================= Fetch() ==================
// //fetch("https://jsonplaceholder.typicode.com/users");
// //This tells JavaScript:
// // Go to this URL
// //     ↓
// //Send a request
// //     ↓
// //Get the response
// //fetch() doesn't immediately give you the actual users.
// //Instead  fetch() returns a Promise.

// // fetch("https://jsonplaceholder.typicode.com/users")
// //     .then(response => {
// //         return response.json();
// //     })
// //     .then(data => {
// //         console.log(data);
// //     });

// // Let's break this down very carefully.

// // Step 1
// // fetch("https://jsonplaceholder.typicode.com/users")
// // Send request.

// // Step 2
// // .then(response => {
// // Wait for the server response.

// // Step 3
// // return response.json();
// // Convert the response body into JavaScript-readable JSON data.

// // Step 4
// // .then(data => {
// // Now we receive the actual data.

// // Step 5
// // console.log(data);

// fetch("https://jsonplaceholder.typicode.com/users")
//     .then(response => {
//         return response.json();           //response.json return promise that why we have two then()
//     })
//     .then(data => {
//         console.log(data);
//     });

//============= Exercise(Hacking Terminal) =============

async function getdata(data){
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
           resolve(console.log(data))
        },5000)
    })
}
async function main(){
let x=await getdata("Initializing Hacking....")
console.log(x);
x=await getdata("Reading your files....")
console.log(x);
x=await getdata("Password files detecting....")
console.log(x);
x=await getdata("Sending all passwords and files to the server....")
console.log(x);
x=await getdata("Cleaning Up....")
console.log(x);
}
main()