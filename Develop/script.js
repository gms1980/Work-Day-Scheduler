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

// //Local Storage

var taskDataObj = {
  id: 1,
  name: "Add localStorage persistence",
  type: "Web",
  status: "in progress"
}

var tasks = [
    {
      id: 0800,
      name: "8:00 a.m.",
      type: "Web",
      status: "in progress"
    },
    {
      id: 0900,
      name: "9:00 a.m.",
      type: "Web",
      status: "in progress"
    },
    {
      id: 1000,
      name: "10:00 a.m.",
      type: "Web",
      status: "to do"
    }
  ];

  var taskDataObj = {
    name: taskNameInput,
    type: taskTypeInput,
    status: "to do"
  };
  console.log(taskDataObj);
  console.log(taskDataObj.status);
}



