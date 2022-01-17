const mobile = document.querySelector('.mobile-menu')
const menu = document.querySelector('.nav-list')
mobile.addEventListener('click', active)
let verify = 1

function active() {
    if (verify == 1) {
        menu.style.width = '50vw'
        menu.style.opacity = '1'
        menu.style.transition = '0.4s'
        verify = 0
    } else {
        menu.style.width = '0'
        menu.style.opacity = '0'
        verify = 1
    }
}