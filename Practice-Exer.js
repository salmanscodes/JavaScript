//=================== Password Generator ==================================
// let lowercase = "abcdefghijklmnopqrstuvwxyz";
// let uppercase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
// let special = "!@#$%^&*";
// let num="1234567890";

// let password = "";

// password += lowercase[Math.floor(Math.random() * lowercase.length)];
// password += uppercase[Math.floor(Math.random() * uppercase.length)];
// password += special[Math.floor(Math.random() * special.length)];
// password +=num[Math.floor(Math.random() * num.length)];
// let all = lowercase + uppercase + special + num;

// for (let i = 0; i <4; i++) {
//     password += all[Math.floor(Math.random() * all.length)];
// }

// console.log(password);
//========================== Password Validator ===========================

// let string='Salman';
// let isUpper=false;
// for(let i=0;i<string.length;i++){
//     if(string.charCodeAt(i)>=65&& string.charCodeAt(i) <= 90){
//         isUpper=true;
//         break;
//     }
//     else{
//         isUpper=false;
//     }
// }
// if(isUpper){
// console.log("Password contain Uppercase character")
// }
// else{
//     console.log("Password does not contain Uppercase character")

// }

// let st='Salman';
// let islower=false;
// for(let i=0;i<st.length;i++){
//     if(st.charCodeAt(i)>=97&& st.charCodeAt(i)<= 122){
//         islower=true;
//         break;
//     }
//     else{
//         islower=false;
//     }
// }
// if(islower){
// console.log("Password contain Lowercase character")
// }
// else{
//     console.log("Password does not contain Lowercase character")

// }
//=========================== Special character ==================
let password = "Salman@123";

let special = "!@#$%^&*()-_+=?";

let hasSpecial = false;

for (let i = 0; i < password.length; i++) {

    if (special.includes(password[i])) {
        hasSpecial = true;
        break;
    }
}

if (hasSpecial) {
    console.log("Password contains a special character");
}
else {
    console.log("Password does not contain a special character");
}