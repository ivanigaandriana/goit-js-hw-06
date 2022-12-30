
 const inputChange = document.querySelector('input#font-size-control')
const abracadabra = document.querySelector('span#text')

inputChange.addEventListener("input", onControllerInputChange);
function onControllerInputChange(event) {
  return (abracadabra.style.fontSize = event.currentTarget.value + "px");
}