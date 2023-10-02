let themeBtn = document.querySelector('.btn-theme'),
link = document.querySelectorAll('link')[1],
numberBtn = document.querySelectorAll('.number'),
delBtn = document.getElementsByClassName('del')[0],
addBtn = document.querySelector('.add'),
minusBtn = document.querySelector('.minus'),
multBtn = document.querySelector('.mult'),
dotBtn = document.querySelector('.dot'),
divideBtn = document.querySelector('.divide'),
equlBtn = document.querySelector('.equl')



function changeThemBtn() {
    if(themeBtn.classList.item(1) === "first-theme") {
        themeBtn.classList.remove("first-theme")
        themeBtn.classList.add("second-theme")

        // Change Link
        link.setAttribute('href',"./css/theme-two.css")
    }else if(themeBtn.classList.item(1) === "second-theme") {
        themeBtn.classList.remove("second-theme")
        themeBtn.classList.add("last-theme")

        // Change Link
        link.setAttribute('href',"./css/theme-three.css")

    } else if(themeBtn.classList.item(1) === "last-theme") {
        themeBtn.classList.remove("last-theme")
        themeBtn.classList.add("first-theme")
        
        // Change Link
        link.setAttribute('href',"./css/theme-one.css")
    }
}

themeBtn.addEventListener("click", () => {
    changeThemBtn()
})

let equation = '';

numberBtn.forEach((element) => {
    element.addEventListener('click', () => {
        equation += +(element.innerHTML)
        console.log(+equation)
    })
})

delBtn.addEventListener('click', () => {
    if(equation.length > 1) {
        equation = equation.slice(0,length - 1);
        console.log(equation)
    }
})

addBtn.addEventListener('click', () => {
    equation += +
    console.log(equation)
})

minusBtn.addEventListener('click', () => {
    equation += '-'
    console.log(equation)
})

multBtn.addEventListener('click', () => {
    equation += '*'
    console.log(equation)
})

dotBtn.addEventListener('click', () => {
    equation += '.'
    console.log(equation)
})

divideBtn.addEventListener('click', () => {
    equation += '/'
    console.log(equation)
})

equlBtn.addEventListener('click', () => {

})