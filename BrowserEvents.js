console.log("JavaScript is running");

let btn = document.getElementById("btn");

//console.log(btn);

// btn.addEventListener("click", (e) => {
//     alert("Button clicked!");
// });

//Event bubbling 
// Event bubbling is a type of event propagation where the event starts from the deepest element and then bubbles up to the parent elements. In this case, when the button is clicked, the click event will first trigger the button's click event listener, then it will bubble up to the child container's click event listener, and finally to the container's click event listener.
// document.querySelector(".childcontainer").addEventListener("click", (e) => {
//     alert("Child container clicked!");
// });
// document.querySelector(".container").addEventListener("click", (e) => {
//     alert("container clicked!");
// });

//stopPropagation() 
//stopPropagation()  method is used to stop the event from bubbling up to the parent elements. In this case, when the button is clicked, the click event will only trigger the button's click event listener and will not bubble up to the child container's or container's click event listeners.
// btn.addEventListener("click", (e) => {
//     e.stopPropagation();
//     alert("Button clicked!");
// });

//Event object
// The event object is an object that is automatically passed to the event handler function when an event occurs. It contains information about the event, such as the type of event, the target element, and other properties related to the event. In this case, we are using the event object to get the target element of the click event and log it to the console.
// e.target   tells you Which element actually triggered the event?
// e.currentTarget  same as e.target but it will always refer to the element that the event listener is attached to. In this case, it will always refer to the button element.
// e.type    Tells you the type of event.
// e.clientX    Tells you the x-coordinate of the mouse pointer relative to the viewport.
// e.clientY    Tells you the y-coordinate of the mouse pointer relative to the viewport.
// e.pageX    Tells you the x-coordinate of the mouse pointer relative to the document.
// e.pageY    Tells you the y-coordinate of the mouse pointer relative to the document.
btn.addEventListener("click", (e) => {
    console.log(e.pageX,e.pageY);
});

//mouse events
//1. click: This event is fired when a mouse button is clicked on an element.
//2. dblclick: This event is fired when a mouse button is double-clicked on an element.
//3. mousedown: This event is fired when a mouse button is pressed down on an element.
//4. mouseup: This event is fired when a mouse button is released on an element.
//5. mousemove: This event is fired when the mouse pointer is moved over an element.
//6. mouseenter: This event is fired when the mouse pointer enters an element.
//7. mouseleave: This event is fired when the mouse pointer leaves an element.
//8. mouseover: This event is fired when the mouse pointer is moved onto an element or one of its child elements.
//9. mouseout: This event is fired when the mouse pointer is moved out of an element or one of its child elements.
//10. contextmenu: This event is fired when the right mouse button is clicked on an element to open the context menu.
document.addEventListener("mousemove", function (e) {
    console.log("Mouse moved");
});

//Keyboard events
//1. keydown: This event is fired when a key is pressed down.
//2. keyup: This event is fired when a key is released.
//3. keypress: This event is fired when a key is pressed down and then released. (deprecated)
document.addEventListener("keydown", function (e) {
    console.log("Key pressed");
});

//To know which key was pressed
document.addEventListener("keydown", function (e) {
    console.log(e.key);
});
document.addEventListener("keydown", function (e) {
    console.log(e.code);
});

//e.preventDefault() 
//e.preventDefault()  method is used to prevent the default action of an event from occurring. In this case, we are using it to prevent the default action of the "Enter" key from submitting a form when pressed.
document.addEventListener("keydown", function (e) {
    if (e.key === "Enter") {
        e.preventDefault();
        console.log("Enter key pressed");
    }
});
