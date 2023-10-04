let themeBtn = document.querySelector('.btn-theme'),
    link = document.querySelectorAll('link')[1],
    numberBtn = document.querySelectorAll('.number'),
    delBtn = document.getElementsByClassName('del')[0],
    addBtn = document.querySelector('.add'),
    minusBtn = document.querySelector('.minus'),
    multBtn = document.querySelector('.mult'),
    dotBtn = document.querySelector('.dot'),
    divideBtn = document.querySelector('.divide'),
    equlBtn = document.querySelector('.equl'),
    outputField = document.querySelector('.output-field');



function changeThemBtn() {
    if (themeBtn.classList.item(1) === "first-theme") {
        themeBtn.classList.remove("first-theme")
        themeBtn.classList.add("second-theme")

        // Change Link
        link.setAttribute('href', "./css/theme-two.css")
    } else if (themeBtn.classList.item(1) === "second-theme") {
        themeBtn.classList.remove("second-theme")
        themeBtn.classList.add("last-theme")

        // Change Link
        link.setAttribute('href', "./css/theme-three.css")

    } else if (themeBtn.classList.item(1) === "last-theme") {
        themeBtn.classList.remove("last-theme")
        themeBtn.classList.add("first-theme")

        // Change Link
        link.setAttribute('href', "./css/theme-one.css")
    }
}

themeBtn.addEventListener("click", () => {
    changeThemBtn()
})

let numbers = '';

let equation = [];
let operations = '';

function showUI(v) {
    outputField.innerHTML = v
}

numberBtn.forEach((element) => {
    element.addEventListener('click', () => {
        numbers += +(element.innerHTML)
        console.log(+numbers)
        showUI(numbers)
    })
})

delBtn.addEventListener('click', () => {
    if (numbers.length > 1) {
        numbers = numbers.slice(0, length - 1);
        console.log(numbers)
        showUI(numbers)
    }
})

addBtn.addEventListener('click', () => {
    equation.push(numbers)
    operations = 'add'
    numbers = ''
    console.log(operations)
    showUI(numbers)
})

minusBtn.addEventListener('click', () => {
    equation.push(numbers)
    numbers = ''
    equation.push('minus')
    console.log(equation)
})

multBtn.addEventListener('click', () => {
    equation.push(numbers)
    numbers = ''
    equation.push('mult')
    console.log(equation)
})

dotBtn.addEventListener('click', () => {
    numbers += '.'
    showUI(numbers)
    console.log(numbers)
})

divideBtn.addEventListener('click', () => {
    equation.push(numbers)
    numbers = ''
    equation.push('divide')
    console.log(equation)
})

equlBtn.addEventListener('click', () => {
    theResolt(equation, operations)
})

function theResolt(n, o) {
    if (numbers.length > 0) {
        equation.push(numbers)
    }
    if (o === 'add') {
        numbers = (+n[0] + +n[1])
        showUI(numbers)
        equation.length = 0
        equation.push(numbers)
        numbers = ''
    }
}
