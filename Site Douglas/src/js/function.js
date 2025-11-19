// FUNCTION SCROLL

const top_navbar = document.getElementById('top-navbar')

window.addEventListener('scroll', function() {
    var scrollPosition = window.scrollY;
    
    if (scrollPosition > 30) {
        top_navbar.classList.add('active')
    } else {
        top_navbar.classList.remove('active')
    }
});

// CONTAINER SIDE MODAL

const button_open_side_modal = document.getElementById('button-open-side-modal')
const button_close_side_modal = document.getElementById('button-close-side-modal')

const side_menu = document.getElementById('side-menu')
const after_container = document.getElementById('after-container-side-menu')

button_close_side_modal.addEventListener('click', closeSideModal)
button_open_side_modal.addEventListener('click', openSideModal)
after_container.addEventListener('click', closeSideModal)

function openSideModal () {
    side_menu.classList.add('active')
    after_container.classList.add('active')
}

function closeSideModal () {
    side_menu.classList.remove('active')
    after_container.classList.remove('active')

}