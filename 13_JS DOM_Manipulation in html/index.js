/*
window :--- The window object in JavaScript is a global object that represents the browser window or tab. 
            It serves as the top-level object for all JavaScript code running in a web browser .


DOM :-- The DOM (Document Object Model) is a programming interface for web documents. 
        It represents the structure of an HTML or XML document as a tree of objects, allowing JavaScript to manipulate the content, 
        structure, and style dynamically.


BOM :--  it is browser object model . 


access element of html

  getElementById();
  getElementsByClassName();
  getElementsByTagName();


    query selector method

    document.querySelectorAll("#fpara");
    document.querySelectorAll(".textMatter");
    document.querySelectorAll("p");

update existing element

    inner html :-- get/set
    outer html
    text-content
    inner text


add element

   createElement()
   appendChild()

   insertAdjacentElement() :---

       position :---   before begin, after begin , before end , after end
       HTML content
*/

let mydiv=document.querySelector("#mydiv");

// let newElement=document.createElement('span');
// newElement.textContent="Soumay choudhary";

// mydiv.insertAdjacentElement('afterbegin',newElement);


// removal

    // removeChild()

        // parent
        // child

let parent=document.querySelector("#mydiv");
let child=document.querySelector("#fpara");
parent.removeChild(child);
