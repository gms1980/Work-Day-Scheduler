//Current Date Time
const currentDayEl = document.getElementById("currentDay");
const textAreaEl = document.getElementsByClassName("description");

let currentTime = moment().format('MMMM Do YYYY, h:mm:ss a');
//console.log(currentTime);
currentDayEl.textContent = currentTime;
// console.log(textAreaEl)

let currentHour = parseInt(moment().hour() + "00");
// console.log(currentHour);
for (element of textAreaEl){
//console.log(element.parentElement.getAttribute("id"))
const textAreaHour = parseInt(element.parentElement.getAttribute("id"))
//turns time in the past red
if (textAreaHour  < currentHour) {
    element.classList.add("past")
}
//turns present items yellow
if (textAreaHour === currentHour) {
    element.classList.add("present")
}
//turns future events green
if (textAreaHour > currentHour) {
    element.classList.add("future")
}

//Local Storage
function createItem() {
	localStorage.setItem('id', 'value'); 
} 
createItem("id") // Creates a item named 'nameOfItem' and stores a value of 'value'

function getValue() {
	return localStorage.getItem('id');  
} // Gets the value of 'nameOfItem' and returns it
console.log(getValue()); //'value';
}



