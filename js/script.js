

const contactSubmitButton = document.getElementById('contact-submit-button');
const heroContactButton = document.querySelector('#hero-contact');
const heroForm = document.getElementById('hero-form');
const xButton = document.getElementById('x-button');
const servicesTab = document.getElementById('services-tab');
const dropdownMenu = document.getElementById('dropdown-menu-container');
const contactChevron = document.querySelector('.fa-chevron-down');
const hamburgerButton = document.getElementById('hamburger-button-container')
const hamburgerXButton = document.getElementById('hamburger-x-button')
const hamburgerMenu = document.getElementById('hamburger-menu-container')



//hamburger menu event

hamburgerButton.addEventListener('click', () => {

    hamburgerMenu.classList.remove('hidden');
   

})

hamburgerXButton.addEventListener('click', () => {
    hamburgerMenu.classList.add('hidden');
    hamburgerButton.style.display = ('block');
})


//dropdown menu event

servicesTab.addEventListener('mouseover', () => {

    if (dropdownMenu.classList.contains('hidden')) {
    dropdownMenu.classList.remove('hidden');
   
    } 
    
})

servicesTab.addEventListener('mouseleave', () => {
    dropdownMenu.classList.add('hidden');
})

dropdownMenu.addEventListener('mouseleave', () => {
    
    dropdownMenu.classList.add('hidden');
})


//


//hidden form event

heroContactButton.addEventListener('click', () => {

    heroForm.style.display = ('flex')

    
    

})



xButton.addEventListener('click', () => {
    heroForm.style.display = ('none');
})

//


//chevron click event
contactChevron.addEventListener('click', () => {
    
})

//
