// Task 1 - verify script is loading
console.log("Status Manager Started");

// global var for the timer
let intervalId = null;

// grabbing all the elements we need
const mainTitle = document.querySelector("#main-title");
const toggleButton = document.getElementById("toggle-button");
const statusOutput = document.querySelector("#status-output");
const timerButton = document.getElementById("timer-button");
const controlPanel = document.getElementById("control-panel");

// Task 3 - changing the title text
mainTitle.innerHTML = "DOM Project: Ready!";

// Task 4 - adding data attribute to toggle button
toggleButton.setAttribute("data-action", "status-toggle");

// Task 9 - make all list items blue
function highlightListItems() {
    const listItems = document.querySelectorAll("li");
    for (let i = 0; i < listItems.length; i++) {
        listItems[i].style.color = "blue";
    }
}
highlightListItems();

// Task 8 - adding a timestamp to the status div
function createTimestamp() {
    const span = document.createElement("span");
    span.innerHTML = new Date().toLocaleTimeString();
    statusOutput.appendChild(span);
    statusOutput.appendChild(document.createElement("br"));
}

// Tasks 5, 6, 7 - toggling the status box on click
function toggleStatus(e) {
    e.preventDefault(); // stop the link from jumping
    statusOutput.classList.toggle("hidden");
    
    // yellow background when visible, reset when hidden
    if (!statusOutput.classList.contains("hidden")) {
        mainTitle.style.backgroundColor = "yellow";
        createTimestamp();
    } else {
        mainTitle.style.backgroundColor = "";
    }
}
toggleButton.addEventListener("click", toggleStatus);

// Task 10 - flashing timer stuff
function startFlashing() {
    if (intervalId === null) {
        intervalId = setInterval(function() {
            controlPanel.classList.toggle("hidden");
        }, 500);
    }
}

function stopFlashing() {
    if (intervalId !== null) {
        clearInterval(intervalId);
        intervalId = null;
        controlPanel.classList.remove("hidden");
    }
}

timerButton.addEventListener("click", startFlashing);
timerButton.addEventListener("dblclick", stopFlashing);
