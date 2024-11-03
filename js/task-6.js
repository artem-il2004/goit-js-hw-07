function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}


const formNumb = document.querySelector(".inputField");
const createBtn = document.querySelector("[data-create]");
const container = document.querySelector("#boxes");
const deleteBtn = document.querySelector("[data-destroy]"); 

createBtn.addEventListener("click", () => { 
  const form = formNumb.value;
  if (form > 100) { 
    return;
  }
container.innerHTML = '';
let boxWidth = 30;
  let boxHeight = 30;
  
  for (let i = 0; i < form; i++) { 
    const createDiv = document.createElement("div");
    createDiv.classList.add("box");
    createDiv.style.backgroundColor = getRandomHexColor();
    createDiv.style.width = boxWidth + 'px';
    createDiv.style.height = boxHeight + 'px';
    container.append(createDiv);
    boxHeight += 10;
    boxWidth += 10;

  }
  formNumb.value = '';
})


deleteBtn.addEventListener("click", () => { 
  
container.innerHTML = '';
})