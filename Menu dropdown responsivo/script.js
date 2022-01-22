const mobile_menu = document.querySelector('.mobile-menu')
const nav_list = document.querySelector('.nav-list')
const nav_links = document.querySelectorAll('li')
mobile_menu.addEventListener('click', active)
var verify = 1

function active() {
    if (verify == 1) {
        nav_list.style.height = '80%'
        nav_links.forEach((links, index) => {
            links.style.animation ? (links.style.animation = '') : (links.style.animation = `navLinkFade 0.5s forwards ${index / 7 + 0.3}s`)
        })
        verify = 0
    } else {
        nav_list.style.height = '0'
        nav_links.forEach((links) => {
            links.style.animation ? (links.style.animation = '') : (links.style.animation = `navLinkFade 0.5s forwards ${index / 7 + 0.3}s`)
        })
        verify = 1
    }
}