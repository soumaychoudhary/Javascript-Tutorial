// performance improvement 


// reflow :--  process of calculating position or dimension of element

    // Reflow, also known as layout, happens when the browser recalculates the positions and dimensions of elements in the document. 
    // This occurs whenever a change affects an element’s geometry (e.g., width, height, margin, padding, or visibility).


// repaint :--- process of displaying content or element pixel by pixel.

    // Repaint occurs when a visual change is made to an element that does not affect its layout (position or size). 
    // Instead, it changes aspects like color, background, shadow, or visibility (opacity)




// code 1   worst approach
// const t1=performance.now();
// for(let i=1;i<=100;i++){
//     let para = document.createElement('p');
//     para.textContent="this is para" + i;
//     document.body.appendChild(para);
// }

// const t2=performance.now();
// console.log("total time by code 1:" +(t2-t1));



// // code 2  better approach
// const t3=performance.now();
// let myDiv =document.createElement('div');

// for(let i=1 ;i<=100;i++){
//     let para = document.createElement('p');
//     para.textContent="this is para" + i;
//     myDiv.appendChild(para); 
// }
// document.body.appendChild(myDiv);

// const t4=performance.now();
// console.log("total time by code 2:" +(t4-t3));



// document fragment :-- it a type of light weight DOC object. the main advantage of these is when we add or append element ,it does not
                      // perform reflow and repaint . 


// code 3  best approach

let fragment = document.createDocumentFragment();

for(let i=1;i<=100;i++){
    let para=document.createElement('p');
    para.textContent="This is para " + i;
    // no reflow and no repaint for the below line
    fragment.appendChild(para);
}

// the below line takes one reflow and one repaint

document.body.appendChild(fragment);