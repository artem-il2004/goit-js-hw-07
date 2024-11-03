const dataInField = document.querySelector("input#name-input");
const changingName = document.querySelector(".nameToBeChanged");

dataInField.addEventListener("input", () => {
    const inputValue = dataInField.value.trim() || "Anonymous"; 
    changingName.textContent = inputValue; 
});
