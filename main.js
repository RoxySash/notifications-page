const readBtn = document.getElementById("readBtn");
const openMessage = document.getElementById("openMessage");
const dropdownMessage = document.getElementById("dropdownMessage");
const notifDot = document.getElementById("notifDot");
const redDot = document.getElementById("redDot");


readBtn.addEventListener("click", () => {
    readMessage();
    alert("clicked read")
})

dropdownMessage.addEventListener("click", () => {

    
  if (openMessage.style.display === "none") {
    openMessage.style.display = "block";

  } else {
    openMessage.style.display = "none";
  }
    
})

function readMessage() {   
  element.classList.add('read');
}

