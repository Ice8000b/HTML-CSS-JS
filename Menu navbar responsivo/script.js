const mobile_menu = document.querySelector('.mobile-menu')
const nav_list = document.querySelector('.nav-list')
const nav_links = document.querySelectorAll('.nav-list>li')
mobile_menu.addEventListener('click', active)

function active() {
    nav_list.classList.toggle('active')
    nav_links.forEach((link, index) => {
        link.style.animation ? (link.style.animation = '') : (link.style.animation = `navLinkFade ease 0.3s forwards ${index / 7 + 0.3}s`)
    })
}