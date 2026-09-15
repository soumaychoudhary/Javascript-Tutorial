/*
########################### event ########################
In JavaScript, an event is an action or occurrence detected by the browser, such as user interactions (clicks, key presses, mouse movements) or system-generated events (loading a page, resizing a window). JavaScript uses event listeners to handle these events and respond accordingly.

##################################### event target ####################################
it is an entity where we recieve event or there is a posibility that we have applied an event listener for the event
. we generally called html element as a event target .

################################ event listiner ###############################
An event listener is a method that waits for a specific event to occur on an event target and then executes a function in response.

        addEventListener()
        removeEventListener()

        syntax :-- <event-target> . addEventListener(<event-type> , <function->action>);

*/

// function changeText(event){
//     console.log(event);
//     let fpara = document.getElementById("fpara");
//     fpara.textContent="hello soumay";
// }
// let fpara = document.getElementById("fpara");
// fpara.addEventListener("click",changeText);


/* 

🔹 Phases of an Event

When you click (or trigger any event) in the browser, it doesn’t just fire immediately on the element — it goes through 3 phases:

1. Capturing Phase (Event Capture)

    The event starts from the top/root (document/window) and travels down through parent elements until it reaches the target element.

    Think of it like: "on the way down".

    👉 Example: Clicking a button inside a div → event first passes from document → body → div → button.

2. Target Phase

    The event reaches the target element (the one you actually clicked).

    At this point, the event is fired on that element.

    👉 Example: The button itself receives the click.

3. Bubbling Phase (Event Bubble)

    After reaching the target, the event bubbles back up from the target element to its ancestors (parent → body → document).

    Think of it like: "on the way up".

    👉 Example: After the button handles the click, the event travels back: button → div → body → document.

🔹 Default Behavior

    By default, most event listeners in JavaScript use bubbling.

    You only get capturing if you pass true (or {capture:true}) in addEventListener.

🔹 When to Use Bubbling

    👉 Bubbling is useful in most everyday cases.

    ✅ Examples:

    Event Delegation (most common)

    Instead of attaching a click handler to every button, you put one handler on the parent.

    Saves performance, especially when elements are created dynamically.

    document.getElementById("menu").addEventListener("click", (e) => {
    if (e.target.tagName === "BUTTON") {
        console.log("Button clicked:", e.target.textContent);
    }
    });


    👉 Used in: dropdown menus, lists, forms, tables.

    Form Handling

    Listen to the form instead of every input.

    form.addEventListener("input", (e) => {
    console.log("Changed:", e.target.name, e.target.value);
    });

🔹 When to Use Capturing

    👉 Capturing is rare, but useful when you want to intercept events before they reach the target.

    ✅ Examples:

    Stopping Unwanted Events

    For example, if you have a modal with a close button inside, but you don’t want clicks on the modal background to accidentally close it.

    document.body.addEventListener("click", (e) => {
    console.log("Body clicked before target (capturing)");
    }, true);


    Priority Handling

    Suppose you want a parent element to always handle something before the child does.

    Example: A parent container that logs analytics or prevents certain clicks from reaching a child.

    Security/Validation

    Example: Blocking right-click on the entire document before it reaches any child element.

    document.addEventListener("contextmenu", (e) => {
    e.preventDefault();
    alert("Right click disabled!");
    }, true);

*/
 


// event object :--

    // The event object is a built-in object in JavaScript that contains information about the event that has occurred. 
    // It provides details such as the type of event, the target element, mouse coordinates, keyboard keys pressed, and more.

    // The event object is automatically passed as an argument to event handler functions when an event is triggered.


// default action :---

let anchorElement =document.getElementById("fanchor");
anchorElement.addEventListener("click",function(event){
    event.preventDefault();
    anchorElement.textContent="Click done bhai"
});

// avoiding to many listener

// let paras = document.querySelectorAll('p');

function alertPara(event){
    if(event.target.nodeName=='SPAN'){
        alert("you have clicked on para : " + event.target.textContent);
    }
}

// for(let i=0;i<paras.length;i++){
//     let para=paras[i];
//     para.addEventListener("click",alertPara);
// }

let myDiv = document.getElementById('wrapper');

myDiv.addEventListener("click",alertPara);