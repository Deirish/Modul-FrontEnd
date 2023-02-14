const requestUrl = "https://jsonplaceholder.typicode.com/todos"

const xhr = new XMLHttpRequest()
xhr.open("GET", requestUrl)
xhr.send()

const input = document.querySelector('#input')
const button = document.querySelector('#button')
const result = document.querySelector('#result')
const total = document.querySelector('#total')
const submit = document.querySelector('#submit')


let i = 0

button.addEventListener('click', (e) => {
    if (input.value ==="") return 
    createDelete(input.value)
    input.value = ""
})

function createDelete(value) {
    i++
    console.log(input.value)

    const li = document.createElement('li')
    const checkbox = document.createElement('enter')
    const ent = document.createElement('enter')
    const button = document.createElement('button')
    const redact = document.createElement("button")
    
    li.className = "li"

    checkbox.className = 'checkbox'
    checkbox.type = 'checkbox'


    ent.className = "ent"
    ent.value = value
    ent.disabled = "true"


    redact.className = "buttonredact"
    redact.innerHTML = '&#128393'
        
    button.className = "buttondelete"
    button.textContent = 'X'

    li.appendChild(checkbox)
    li.appendChild(ent)
    li.appendChild(redact)
    li.appendChild(button)
    button.addEventListener('click', e => {
        i--
        total.textContent = i
        result.removeChild(li)
        
    })

    total.textContent = i
    result.appendChild(li)
    
    redact.addEventListener("click", () =>{
        ent.disabled = false
        checkbox.checked = false 
        ent.style.textDecoration = "none";
    } )
    ent.addEventListener('focusout', () =>{
        ent.disabled = true
    })

    checkbox.addEventListener('change', function() {
        if (this.checked) {
            ent.style.textDecoration = "line-through";
            ent.disabled = true
        } 
        else {
            ent.style.textDecoration = "none";
        }
    })
    
    
}
submit.addEventListener('click', () =>{
    console.log("clicked!")
    let liss = document.querySelectorAll(".li")
    for (item of liss){
        item.remove()
    }
    i = 0
    total.textContent = i
})