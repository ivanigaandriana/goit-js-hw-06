
const myInput = document.querySelector('#name-input' );
const mySpan = document.querySelector('#name-output');

myInput.addEventListener('input', newInput);

function newInput(e) {
   
    mySpan.textContent = e.currentTarget.value;

    if (e.currentTarget.value === "") {
        mySpan.textContent = 'Anonymous'
    }
}