let counterValue = 0;
const refsBtn = {
     incrementBtn : document.querySelector(`[data-action= increment]`),
     decrementBtn : document.querySelector(`[data-action =decrement]`),
     counter : document.querySelector(`#value`),

}
const increment = () => refsBtn.counter.textContent = counterValue +=1
const decrement = () => refsBtn.counter.textContent = counterValue -=1

refsBtn.decrementBtn.addEventListener('click', decrement)
refsBtn.incrementBtn.addEventListener('click', increment)

// 
