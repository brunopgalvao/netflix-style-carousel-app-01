const wrapper = document.querySelectorAll('section')

const forwardArrow = document.querySelector('.forward')
const backArrow = document.querySelector('.back')

let counter = 1

const enableForwardScroll = () => {
    let element = document.getElementById(`section${counter + 1}`)
    if (counter === wrapper.length) {
        counter = 0
        document.querySelector(`#section${counter + 1}`).scrollIntoView()
    } else {
        counter += 1
        element.scrollIntoView()
    }
}

const enableBackScroll = () => {
    console.log(counter)
    let element = document.getElementById(`section${counter - 1}`)
    if (counter === 1) {
        counter = wrapper.length
        document.querySelector(`#section${counter}`).scrollIntoView()
    } else {
        counter -= 1
        element.scrollIntoView()
    }
}

forwardArrow.onclick = enableForwardScroll
backArrow.onclick = enableBackScroll