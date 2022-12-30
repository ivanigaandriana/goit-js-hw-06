const refs ={
    input : document.querySelector(`#name-input`),
    span : document.querySelector(`#name-output`)
}
refs.input.addEventListener('input', (event) => { !event.currentTarget.value ? refs.span.textContent = 'незнайомець' : refs.span.textContent = event.currentTarget.value })