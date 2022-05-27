function addTodo() {
    console.log(`TODO added`)
}

function addImage() {
    const now = new Date().toISOString().split('T')[0]
    const imageFile = `img_${now}.jpg`
    const img = document.createElement('img')
    img.src = `images/${imageFile}`
    const parent = document.getElementById("image")
    parent.appendChild(img)
}