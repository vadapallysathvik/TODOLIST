const todosul = document.getElementById('todos')
const form = document.getElementById('form')
const input = document.querySelector('#input')

const todos=JSON.parse(localStorage.getItem('todos'))


if(todos){
    todos.forEach(todo => addToDo(todo))
}

form.addEventListener("submit", (e) => {
    e.preventDefault()

    addToDo()
})

function addToDo(todo) {

    let todotext = input.value;

    if(todo){
        todotext = todo.text
    }

    if(todotext){
        const todoEl=document.createElement('li')
        if( todo && todo.completed) {
            todoEl.classList.add("completed")

        }

        todoEl.innertext = todotext;

        todoEl.addEventListener('clicl',() => {
            todoEl.classList.toggle('completed')
            updateLS()
        })

        todoEl.addEventListener('contextmenu',(e) => {
            e.preventDefault()
            todoEl.remove()
            updateLS()
        })

        todosUL.appendChild(todoEl)

        console.log(todoEl)

        input.value= ' '

        updateLS()
    }
}


function updateLS() {
    todosEl =document.querySelectorAll("li")

    const todos =[]

    todosEl.forEach(todoEl => {
        todos.push({
            text:todoEl.innertext,
            completed:todoEl.classList.contains('completed')
        })
        
    })
    
    localStorage.setItem("todos",JSON.stringify(todos))
}