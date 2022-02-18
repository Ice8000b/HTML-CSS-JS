const login_button = document.querySelector('.login')
login_button.addEventListener('click', active)

function active() {
    login_button.classList.toggle('active', alert('Login sucesfully'))
}