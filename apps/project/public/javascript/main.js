function addTodo() {
    const element = document.getElementById('new_todo')
    const error = document.getElementById('new_todo_error')
    if (element.value.length <= 140) {
        error.innerHTML = ''
        console.log(`TODO added`)
    } else {
        error.innerHTML = 'Todo not added. Maximum length 140 characters.'
    }
    element.value = ''
    
}

function addImage() {
    const now = new Date().toISOString().split('T')[0]
    const imageFile = `img_${now}.jpg`
    const img = document.createElement('img')
    img.classList.add('image')
    img.src = `images/${imageFile}`
    const parent = document.getElementById('image')
    parent.appendChild(img)
}