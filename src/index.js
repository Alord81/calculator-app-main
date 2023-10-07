let themeBtn = document.querySelector('.btn-theme'),
    link = document.querySelectorAll('link')[4],
    numberBtn = document.querySelectorAll('.number'),
    delBtn = document.getElementsByClassName('del')[0],
    addBtn = document.querySelector('.add'),
    minusBtn = document.querySelector('.minus'),
    multBtn = document.querySelector('.mult'),
    dotBtn = document.querySelector('.dot'),
    divideBtn = document.querySelector('.divide'),
    equlBtn = document.querySelector('.equl'),
    outputField = document.querySelector('.output-field'),
    operation = document.querySelector('.operation'),
    resetBtn = document.querySelector('.reset');



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
showUI(numbers)
numbers = ''
numberBtn.forEach((element) => {
    element.addEventListener('click', () => {
        numbers += +(element.innerHTML)
        // if (operations.length !== 0) {
        //     showOperation(operations)
        // }
        showUI(numbers)
        // showOperation('')
    })
})

function theirdNumber(np) {
    let nextOperations = np;
    if (
        equation.length === 1 &&
        numbers.length === 1 &&
        operations.length !== 0
    ) {
        switch (operations) {
            case 'add':
                equation = [+equation[0] + +numbers]
                operations = np
                break;
            case 'minus':
                equation = [+equation[0] - (+numbers)]
                operations = np
                break;
            case 'mult':
                equation = [+equation[0] * (+numbers)]
                operations = np
                break;
            case 'divide':
                equation = [+equation[0] / (+numbers)]
                operations = np
                break;
        }
    }
}

function showOperation(op) {
    let eq;
    if (equation.length === 0) {
        eq = ''
    } else {
        eq = equation[0]
    }
    switch (op) {
        case 'add':
            operation.innerHTML = eq + ' +';
            break;
        case 'minus':
            operation.innerHTML = eq + ' -';
            break;
        case 'mult':
            operation.innerHTML = eq + ' x';
            break;
        case 'divide':
            operation.innerHTML = eq + ' /';
            break;
        case '':
            operation.innerHTML = ''
    }
}

delBtn.addEventListener('click', () => {
    if (numbers.length > 0) {
        numbers = numbers.slice(0, length - 1);
        showUI(numbers)
    } else if (equation.length === 1) {
        numbers = equation[0]
        numbers = numbers.toString().slice(0, length - 1);
        equation[0] = numbers
        numbers = ''
        showUI(equation[0])
    }
})

addBtn.addEventListener('click', () => {
    theirdNumber('add')
    if (numbers.length > 0) {
        equation.push(numbers)
        numbers = ''
    }
    operations = 'add'
    showUI(numbers)
    showOperation('add')
})

minusBtn.addEventListener('click', () => {
    theirdNumber('minus')

    if (numbers.length > 0) {
        equation.push(numbers)
        numbers = ''
    }
    operations = 'minus'
    showUI(numbers)
    showOperation('minus')
})

multBtn.addEventListener('click', () => {
    theirdNumber('mult')

    if (numbers.length > 0) {
        equation.push(numbers)
        numbers = ''
    }
    operations = 'mult'
    showUI(numbers)
    showOperation('mult')
})

dotBtn.addEventListener('click', () => {
    numbers += '.'
    showUI(numbers)
})

divideBtn.addEventListener('click', () => {
    theirdNumber('divide')

    if (numbers.length > 0) {
        equation.push(numbers)
        numbers = ''
    }
    operations = 'divide'
    showUI(numbers)
    showOperation('divide')
})

equlBtn.addEventListener('click', () => {
    theResolt(equation, operations)
})

function theResolt(n, o) {
    let error;
    if (n.length > 0) {
        equation.push(numbers)
    }
    if (o === 'add') {
        if (n.length === 1) {
            showUI(equation[0])
        } else if (n.length >= 2) {
            numbers = (+n[0] + +n[1])
            showUI(numbers)
            equation.length = 0
            equation.push(numbers)
            numbers = ''
        } else {
            if (n.length === 1) {
                error = 'They are one Number!'
                showUI(error)
            }
        }
    } else if (o === 'minus') {
        if (n.length === 1) {
            showUI(equation[0])
        } else if (n.length >= 2) {
            numbers = (+n[0] - +n[1])
            showUI(numbers)
            equation.length = 0
            equation.push(numbers)
            numbers = ''
        } else {
            if (n.length === 1) {
                error = 'They are one Number!'
                showUI(error)
            }
        }
    } else if (o === 'mult') {
        if (n.length === 1) {
            showUI(equation[0])
        } else if (n.length >= 2) {
            numbers = (+n[0] * +n[1])
            showUI(numbers)
            equation.length = 0
            equation.push(numbers)
            numbers = ''
            operations = ''
        } else {
            if (n.length === 1) {
                error = 'They are one Number!'
                showUI(error)
            }
        }
    } else if (o === 'divide') {
        if (n.length === 1) {
            showUI(equation[0])
        } else if (n.length >= 2) {
            numbers = (+n[0] / +n[1])
            showUI(numbers)
            equation.length = 0
            equation.push(numbers)
            numbers = ''
            operations = ''
        } else {
            if (n.length === 1) {
                error = 'They are one Number!'
                showUI(error)
            }
        }
    }
    showOperation('')

}
resetBtn.addEventListener('click', () => {
    numbers = '0';
    equation = [];
    operations = '';
    showOperation('')
    showUI(numbers)
})
