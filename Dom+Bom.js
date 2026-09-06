console.log("Hi Salman")
// ======================================DOM and BOM in JS======================================
// ===by Class
let boxes=document.getElementsByClassName("box");
console.log(boxes)
boxes[2].style.backgroundColor="green";

// ===By ID
document.getElementById("2").style.backgroundColor="blue"

// ===Query Selector
document.querySelector(".box").style.backgroundColor="yellow" //it only color first box not all
// for color all boxes
document.querySelectorAll(".box").forEach(e=>{
e.style.backgroundColor="pink";
})
// by tag name
document.getElementsByTagName("div")[0].style.backgroundColor="grey" //it only color one div

let divsi = document.getElementsByTagName("div");//it color all div
for (let i = 0; i < divs.length; i++) {
    divs[i].style.backgroundColor = "grey";
}

// ========= Exercise ======
let color=["red","pink","yellow","green","grey","blue","charcoal"];
let divs=document.getElementsByClassName("box");
for (let i = 0; i < divs.length; i++) {
    let r=Math.floor(Math.random()*7);
    divs[i].style.backgroundColor = color[r];
    divs[i].style.color = color[r+1];

}
// ====another method (better)
console.log("Script.js initializing")
// let boxes = document.getElementsByClassName("box")
let boxes = document.querySelector(".container").children 

function getRandomColor(){
    let val1 = Math.ceil(0 + Math.random()* 255);
    let val2 = Math.ceil(0 + Math.random()* 255);
    let val3 = Math.ceil(0 + Math.random()* 255);
    return `rgb(${val1}, ${val2}, ${val3})`
}
Array.from(boxes).forEach(e=>{
    e.style.backgroundColor = getRandomColor()
    e.style.color = getRandomColor()
})
let divi=document.querySelector(".container");
console.dir(div);

//============================== Inseting and deleting elements in DOM in JS==============================
//===== Create and insert element
// let para=document.createElement("p");
// para.innerText="Hi I am learning inserting and deleting elements in DOM in JS";
// container.append(para);
let container=document.getElementById("con");
let div=document.createElement("div");
//div.className="box";
//We can also use classList.add() method to add one or more class names to an element. It returns a DOMTokenList object that represents the class names of the element.
div.classList.add("box", "red");  
div.id="4";
div.innerText="box6";
container.append(div);                    //Append method is used to insert the element at the end inside container

//container.prepend("Salman",div);       //Prepend method is used to insert the element at the start inside  container

//container.before(div);                //before method is used to insert the element before the container

//container.after(div);                //after method is used to insert the element after the container

//container.replaceWith(div);         //replaceWith method is used to replace the container with that element

//container.replaceChild(div,document.getElementById("2"));  //replaceChild method is used to replace the child element of container with that element

//container.insertBefore(div,document.getElementById("2"));  //insertBefore method is used to insert the element before the child element of container

//container.insertAdjacentElement("beforebegin",div);  //insertAdjacentElement method is used to insert the element before the container

//container.insertAdjacentElement("afterbegin",div);  //insertAdjacentElement method is used to insert the element at the start inside container

//container.insertAdjacentElement("beforeend",div);  //insertAdjacentElement method is used to insert the element at the end inside container

//container.insertAdjacentElement("afterend",div);  //insertAdjacentElement method is used to insert the element after the container

//container.insertAdjacentHTML("beforebegin","<div class='box'>box7</div>");  //insertAdjacentHTML method is used to insert the element before the container

//container.innerHTML="<div class='box'>box9</div>";  //innerHTML method is used to insert the element at the end inside container and it will remove all the previous elements inside container

//container.innerHTML+="<div class='box'>box10</div>";  //innerHTML method is used to insert the element at the end inside container and it will not remove all the previous elements inside container

//container.textContent="Hello, World!";  //textContent method is used to insert the text it will treated as text not as html element and it will remove all the previous elements inside container

//====== remove element
//div.remove(); //remove itself
//div.removeChild(document.getElementById("2")); //remove child element of container

//==== Adding CSS styles to the newly created element
div.style.backgroundColor="blue";
div.style.color="white";

//===== set and remove attribute
let title=document.createAttribute("title");
title.value="This is a box";
div.setAttributeNode(title);
div.removeAttribute("title");
//===== setting ID
//div.id="4.5";

//setTimeout and setInterval
// console.log("Start")
// setTimeout(()=>{    //setTimeout is used to execute a function after a specified number of milliseconds
//     console.log(alert("Hello Salman"))
// }
// ,2000
// )
// console.log("End")

// setInterval(()=>{ //setInterval "Run the code repeatedly after every specified amount of time."
//     console.log("Timeout")
// },2000
// )