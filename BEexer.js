//let bulb = document.getElementById("bulb");
// let btn = document.getElementById("btn");

// btn.addEventListener("click", () => {

//     bulb.classList.toggle("glow");

// });
// let siteName = document.getElementById("siteName");
// let siteUrl = document.getElementById("siteUrl");
// let addBtn = document.getElementById("addBtn");
// let bookmarks = document.getElementById("bookmarks");

// addBtn.addEventListener("click", () => {

//     let name = siteName.value;
//     let url = siteUrl.value;

//     if (name === "" || url === "") {
//         alert("Please enter both website name and URL");
//         return;
//     }

//     let link = document.createElement("a");

//     link.innerText = name;
//     link.href = url;
//     link.target = "_blank";

//     bookmarks.appendChild(link);

//     let br = document.createElement("br");
//     bookmarks.appendChild(br);

//     siteName.value = "";
//     siteUrl.value = "";
// });

// let bulb=document.getElementById("bulb");
// let btn=document.getElementById("btn");
// console.log("glow")
// btn.addEventListener("click",()=>{
//     bulb.classList.toggle("glow");
// })

let bulb=document.getElementById("bulb");
let btn=document.getElementById("btn");
console.log("glow")
btn.addEventListener("click",()=>{
    bulb.classList.toggle("glow");
    if(bulb.classList.contains("glow")){
        btn.innerText="Turn Off";
    }
    else{
        btn.innerText="Turn On";
    }
})
