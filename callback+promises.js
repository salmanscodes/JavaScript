//callBack functions
//A callback is a function that is passed into another function as an argument and is called later.
// function orderFood(callback) {

//     console.log("Food ordered.");

//     setTimeout(() => {
//         console.log("Food prepared.");
//         callback();
//     }, 3000);
// }

// function foodReady() {
//     console.log("Your food is ready!");
// }

// orderFood(foodReady);

// function login(username, password, callback) {

//     setTimeout(() => {

//         if (username === "salman" && password === "1234") {
//             callback(null, "Login successful");
//         }
//         else {
//             callback("Invalid username or password", null);
//         }

//     }, 2000);
// }

// login("salman", "123", (error, result) => {

//     if (error) {
//         console.log(error);
//         return;
//     }

//     console.log(result);
// });


//===asynchronous== actions are the actions that we initiate now but complete later. For example, fetching data from an API, reading a file, or making a network request are all asynchronous actions. In JavaScript, we can handle asynchronous actions using callbacks or promises.
//================= Promises =====================
//promises are used to handle asynchronous operations in JavaScript. A promise represents a value that may be available now, or in the future, or never.

let p1=new Promise((resolve,reject)=>{ //resolve and reject are functions that are used to resolve or reject the promise.
    let a=3;
if(a==2){
    resolve("Success");
}
else{
    reject("Failed");
}
})

p1.then((result)=>{    //then() method is used to handle the resolved value of the promise.
    console.log(result);
})

p1.catch((error)=>{       //catch() method is used to handle the rejected value of the promise.
    console.log(error);
})

//finally() method is used to execute code after the promise is settled, regardless of whether it was   resolved or rejected. 
p1.finally(()=>{     
    console.log("Promise is settled");    
})

//promise with settimeout
function orderFood() {

    return new Promise((resolve, reject) => {

        setTimeout(() => {

            let foodReady = false;

            if (foodReady) {
                resolve("Food is ready");
            }
            else {
                reject("Food is not available");
            }

        }, 3000);

    });

}
orderFood()
    .then((message) => {
        console.log(message);
    })
    .catch((error) => {
        console.log(error);
    });

//========== promise chaining ==============
function step1() {

    return new Promise((resolve) => {

        setTimeout(() => {
            resolve("Step 1 complete");
        }, 3000);

    });

}
step1()
    .then((result) => {
        console.log(result);

        return "Step 2 complete";
    })
    .then((result) => {
        console.log(result);
    });
//first then return "Step 2 complete" to the second then this is called chaining

//promise.all() running all the promise together 
// if all succeed result succeed
// if any one failed result failed
let p2 = Promise.resolve("Image");
let p3 = Promise.resolve("Video");
let p4 = Promise.resolve("Data");

Promise.all([p2, p3, p4])
    .then((results) => {
        console.log(results);
    });

//Promise.race() returns whichever Promise finishes first.
let p5 = new Promise(resolve => {
    setTimeout(() => resolve("A"), 1000);
});

let p6 = new Promise(resolve => {
    setTimeout(() => resolve("B"), 3000);
});

Promise.race([p5, p6])
    .then(result => {
        console.log(result);
    });

//Promise.allSettled() Sometimes you don't care if some operations fail.You want the result of every operation.

let pr1 = Promise.resolve("Success");

let pr2 = Promise.reject("Failed");

let pr3 = Promise.resolve("Success 2");

Promise.allSettled([pr1, pr2, pr3])
    .then(results => {
        console.log(results);
    });

//Promise.any() gives you the first Promise that successfully fulfills.
let pm1 = Promise.reject("Server A failed");

let pm2 = Promise.resolve("Server B");

let pm3 = Promise.resolve("Server C");

Promise.any([pm1, pm2, pm3])
    .then(result => {
        console.log(result);
    });