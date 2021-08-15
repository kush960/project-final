const toggleButton = document.getElementById('toggle-button')[0]
const navbarLinks = document.getElementById('navbar-links')[0]

toogleButton.addEventListener('click' , () => {
    navbarLinks.classList.toggle('active')
})