const mobile_menu = document.querySelector('.mobile-menu')
const nav_list = document.querySelector('.nav-list')
const navlinks = document.querySelectorAll('li')
mobile_menu.addEventListener('click', active)
let verify = 1

function active() {
    if (verify == 1) {
        nav_list.style.width = '50vw'
        nav_list.style.transition = '0.3s'
        navlinks.forEach((link, index) => {
            link.style.animation ? (link.style.animation = '') : (link.style.animation = `navLinkFade 0.5s ease forwards ${index / 7 + 0.3}s`)
        })
        verify = 0
    } else {
        nav_list.style.width = '0'
        navlinks.forEach((link) => {
            link.style.animation ? (link.style.animation = '') : (link.style.animation = 'navLinkFade 0.5s ease forwards 0.3s')
        })
        verify = 1
    }
}