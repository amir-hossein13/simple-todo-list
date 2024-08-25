let $ = document

let inputValue = $.querySelector('input')
let addTodoForm = $.querySelector('.add')
let ulElem = $.querySelector('.todos')
let removeIElem = $.querySelector('.delete')

function addNewTodo(newTodoValue) {
    let newTodoLi = $.createElement('li')
    newTodoLi.className = 'list-group-item d-flex justify-content-between align-items-center'

    let newTodoTitleSpan = $.createElement('span')
    newTodoTitleSpan.innerHTML = newTodoValue

    let newTodoRemove = $.createElement('i')
    newTodoRemove.className = 'fa fa-trash-o delete'

    newTodoRemove.addEventListener('click',function(event){
        event.target.parentElement.remove()
    })

    newTodoLi.append(newTodoTitleSpan,newTodoRemove)

    ulElem.append(newTodoLi)

    console.log(newTodoLi)
}

addTodoForm.addEventListener('submit', function (event) {
    event.preventDefault()
})

inputValue.addEventListener('keydown', function (event) {
    let newTodoValue = event.target.value.trim()

    if (event.keyCode === 13) {
        if (newTodoValue) {
            inputValue.value = ''
            addNewTodo(newTodoValue)
        } else {
            console.log("enter a value");

        }
    }

})

