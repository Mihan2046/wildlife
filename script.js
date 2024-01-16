const mobileMenu = document.querySelector('.mobile_menu')
const hamburger = document.getElementById('hamburger')

hamburger.addEventListener('click', ()=>{
    mobileMenu.classList.toggle('open')
})