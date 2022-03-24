//HELPER CODE----
const gridWidth = 50;
let count = 0;
const canvas = document.querySelector('.canvas');
while (count <= gridWidth * gridWidth) {
  const div = document.createElement('div');
  div.className = 'square color-7';
  canvas.appendChild(div);
  count++;
}

/***********
 * QUERIES *
***********/
//adding colors-----------------------
let drag = false //--global var
let palette = document.querySelector('.palette')
let newColor = document.createElement('div')
newColor.className = "palette-color color-6"
let baseColor = document.createElement('div')
baseColor.className = "palette-color color-7"
// console.log(newColor)
palette.appendChild(newColor)
palette.appendChild(baseColor)
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
let app = document.querySelector('.app')
/****************************
 * EVENT LISTENER FUNCTIONS *
****************************/
//any color clicked- changes the color of brush
// console.log(paletteColors)
for (let color of paletteColors) {
  // console.log(color.classList)
  color.addEventListener("click", ()=> {
    //change colors
    brushList.replace(brushList[1],color.classList[1])
    // console.log(brushList[1])
  })
  //MIXING COLORS
  // color.addEventListener('dblclick', () => {
  //   brushList.replace(brushList[1],)
  // })
}
//paint colors canvas

//WHAT TO COLOR------------
for (let box of canvasGrid) {
  box.addEventListener('mouseup',()=> {
    drag=false
    console.log(drag)
})
box.addEventListener('mousedown',()=> {
    box.classList.replace(box.classList[1],brushList[1])
    drag=true
    console.log(drag)
})
box.addEventListener('mouseenter',()=> {
    if(drag == true) {
      box.classList.replace(box.classList[1],brushList[1])
    }
})
}

// console.log(brushList[1])
//add dark theme toggle------------------
let body = document.querySelector('body')
let darkTheme = document.createElement('button')
darkTheme.innerText = "Dark Theme!"
// darkTheme.className=
app.appendChild(darkTheme)
darkTheme.addEventListener('click', ()=> {
  body.style.backgroundColor = "gray"
})


