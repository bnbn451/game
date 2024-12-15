function StartGame () {
  mypoints = 0
  mydivpoints.innerText = mypoints
  counter = 30
  mydivcount.innerText = counter
   let mdiv = document.getElementById("gamebord")
   mdiv.innerText = ""
   let myarray =["a", "s", "d", "f", "y", "r"]
   myarray = [...myarray,...myarray]
  
   myarray.sort(()=> Math.random() - 0.5)
   myarray.forEach(element => {
    let cell = document.createElement("div")
    mdiv.appendChild(cell)
    cell.innerText = element
    cell.classList.add("cell","cell-hide")
    cell.addEventListener("click", ()=>{
      validate(cell)
    })
   });

}
let mypoints = 0
let mydivpoints = document.getElementById("tytyty")
   let firstword = null
function validate(cell) {
cell.classList.remove("cell-hide")
cell.classList.add("cell-shown")
 
if (firstword == null) {
setTimeout (()=> {   
firstword = cell

},150)
} else if (firstword.innerText == cell.innerText && firstword != cell) {
setTimeout (()=> {
firstword.style.visibility = "hidden"
cell.style.visibility = "hidden"
firstword = null
mypoints += 1
mydivpoints.innerText = mypoints
if (mypoints == 6) {
let mdiv = document.getElementById ("gamebord")
mdiv.innerText = ""
let img = document.getElementById ("klkl")
img.classList.remove("nhnh")
img.classList.add("dfdf")
}
},150) 



} else {
  setTimeout (()=> {
cell.classList.remove("cell-shown")
cell.classList.add ("cell-hide")
firstword.classList.remove("cell-shown")
firstword.classList.add("cell-hide")
firstword = null
  },150)
}











}












let counter = 15

let mydivcount = document.getElementById("divjkjk")

setInterval (()=>{
mydivcount.innerText = counter
counter--
if (counter == -1) {
counter = 10
StartGame()
}

},1000)

window.onload = StartGame