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
const gridWidth = 30;
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
//adding colors-----------------------
let palette = document.querySelector('.palette')
let newColor = document.createElement('div')
newColor.className = "palette-color color-6"
// console.log(newColor)
palette.appendChild(newColor)
//---------------------------------
// IDENTIFY ALL COLORS ETC --------------------
let paletteColors = document.querySelectorAll('.brush-selection div')
// console.log(paletteColors)
//-------------------------------------------
// Target Canvas list by "grid"---------------------
let canvasGrid = document.querySelectorAll('.canvas div')
// console.log(canvasGrid)
//Current brush------------------------------
let currentBrush = document.querySelector('.current-brush')
let brushList = currentBrush.classList
// console.log(brushList)
const app = document.querySelector('.app')
/****************************
 * EVENT LISTENER FUNCTIONS *
****************************/
//any color clicked- changes the color of brush
// console.log(paletteColors)
for (let color of paletteColors) {
  console.log(color.classList)
  color.addEventListener("click", ()=> {
    //change colors
    brushList.replace(brushList[1],color.classList[1])
    // console.log(brushList[1])
  })
}
//paint colors canvas
// let drag = false;

// app.addEventListener('mousedown', () => drag = false);
// app.addEventListener('mousemove', () => drag = true);
// app.addEventListener('mouseup', () => console.log(drag ? 'drag' : 'click'));
let drag = false
for (let box of canvasGrid) {
  
  box.addEventListener("mousedown", ()=> {
    box.classList.replace(box.classList[1],brushList[1])
    // drag = true;
    box.addEventListener('mousemove', ()=> {
      box.classList.replace(box.classList[1],brushList[1])
    })
  })
  
  box.addEventListener("mouseup", ()=> {
    
    box.removeEventListener('mousemove', ()=> {
      box.classList.replace(box.classList[1],brushList[1])
      // drag = false
    })
    
  })
}
// console.log(brushList[1])
//add dark theme toggle
let body = document.querySelector('body')
let darkTheme = document.createElement('button')
darkTheme.innerText = "Dark Theme!"
// darkTheme.className=
app.appendChild(darkTheme)
darkTheme.addEventListener('click', ()=> {
  body.style.backgroundColor = "gray"
})
