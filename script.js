const cards = document.querySelectorAll('section')

const forwardArrow = document.querySelector('.forward')
const backArrow = document.querySelector('.back')

let counter = 1

const enableForwardScroll = () => {
    let element = document.getElementById(`section${counter + 1}`)
    if (counter === cards.length) {
        counter = 1
        document.querySelector(`#section${counter}`).scrollIntoView()
        backArrow.classList = 'arrow back hide'
    } else {
        counter += 1
        element.scrollIntoView()
        backArrow.classList = 'arrow back'
    }
}

const enableBackScroll = () => {
    let element = document.getElementById(`section${counter - 1}`)
    if (element != null) {
        if (counter === 2) {
            counter -= 1
            element.scrollIntoView()
            backArrow.classList = 'arrow back hide'
        } else {
            counter -= 1
            element.scrollIntoView()
        }
    }
}

forwardArrow.addEventListener('click', enableForwardScroll)
backArrow.addEventListener('click', enableBackScroll)