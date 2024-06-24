const submitButtonElement = document.getElementById("submit");
const alertMessage = document.getElementById("alert");
let nameInput = document.getElementById("name");

function displayAlert(){
    if(nameInput.value === ""){
        alertMessage.style.display = "none";
    } else{
        alertMessage.style.display = "none";
    }
}


submitButtonElement.addEventListener("click", displayAlert)