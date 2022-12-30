const reel = {
    input : document.querySelector(`#validation-input`),
}
reel.input.addEventListener(`blur`,(event) => {
    if ( event.currentTarget.value.length !==
    Number(event.currentTarget.dataset.length)
  ){
    event.currentTarget.classList.remove(`valid`)
    event.currentTarget.classList.add(`invalid`)
  } else {
    event.currentTarget.classList.remove(`invalid`)
    event.currentTarget.classList.add(`valid`)
  }
})