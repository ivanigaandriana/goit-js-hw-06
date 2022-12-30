const btn = document.querySelector('.change-color');
const span = document.querySelector('.span.color');
const body = document.querySelector('body');
btn.addEventListener('click',onClickButton);
function onClickButton(event){
  const randomColor = getRandomHexColor();
    bodyRef.style.backgroundColor = randomColor;
    spanRef.textContent = randomColor;
}

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}
