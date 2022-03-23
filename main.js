/*******************
 * OUR HELPER CODE *
*******************/

/*
 * Here we add the squares to the canvas dynamically.
 * You can mostly leave this section alone!
 * But if you want to change how wide the canvas is,
 * there are just two steps:
 * 
 * 1. Change the `gridWidth` value below.
 * 2. Change the `grid-template-rows` and
 * `grid-template-columns` to match.
 *
 * To make the second one happen, the number to change
 * is the first argument to `repeat`, currently set at 10.
 */
const gridWidth = 10;
let count = 0;
const canvas = document.querySelector('.canvas');
while (count <= gridWidth * gridWidth) {
  const div = document.createElement('div');
  div.className = 'square color-5';
  canvas.appendChild(div);
  count++;
}


// ALSO.
// You do not have to follow the sections below. If you're doing your functions inline, it doesn't make a lot of sense to separate the event listener functions from their wiring!

/***********
 * QUERIES *
***********/

// Add queries for all your squares, palette colors, and brush here.
// (Note the singular or plural used in that sentence!)
// let app = document.querySelector('.app')
let paletteColors = document.querySelectorAll('.brush-selection div')
// console.log(paletteColors)
// Target Canvas list by "grid"
let canvasGrid = document.querySelectorAll('.canvas div')
// console.log(canvasGrid)
//Current brush
let currentBrush = document.querySelector('.current-brush')
let brushList = currentBrush.classList
// console.log(currentBrush.classList)
/****************************
 * EVENT LISTENER FUNCTIONS *
****************************/
//any color clicked- changes the color of brush
for (let color of paletteColors) {
  // console.log(color.classList[1])
  color.addEventListener("click", ()=> {
    //change colors
    brushList.replace(brushList[1],color.classList[1])
    // console.log(brushList[1])
  })
}
let mouseUp = false;
for (let box of canvasGrid) {
  box.addEventListener("click", ()=> {
    box.classList.replace(box.classList[1],brushList[1])
  })
  box.addEventListener("mouseenter", ()=> {
    box.classList.replace(box.classList[1],brushList[1])
  })
}
//ONE COLOR-------TESTING
// let oneColor = document.querySelector('.color-1');
// let oneColorList = oneColor.classList;
// console.log(oneColor.classList)
// oneColor.addEventListener('click',()=> {
 
//   brushList.replace(brushList[1],oneColorList[1])
  
// })
//---------
// Now add some functions to handle clicking one particular square
// and clicking one particular palette color. You can leave them
// empty at first, though a console.log just to know they're being
// run as event listeners (after the next step is set up) isn't a
// bad idea for testing purposes.



/**************************
 * WIRING IT ALL TOGETHER *
**************************/

// Now: wiring up our event listeners to our html node elements.
// You'll need to add the appropriate event listener for each
// square and for each palette color from the functions you
// wrote above.
