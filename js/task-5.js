function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}
//====================================
const spanText = document.querySelector(".color");
const btn = document.querySelector(".change-color");

btn.addEventListener("click", () => { 
  const newColor = getRandomHexColor();
  spanText.innerHTML = `${newColor}`;
  document.body.style.backgroundColor = newColor;
})

