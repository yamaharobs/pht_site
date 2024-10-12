





const contactSubmitButton = document.getElementById('contact-submit-button');
const heroContactButton = document.querySelector('#hero-contact');
const heroFormContainer = document.getElementById('hero-form-container');
const xButton = document.getElementById('x-button');
const servicesTab = document.getElementById('services-tab');
const dropdownMenu = document.getElementById('dropdown-menu-container');

const hamburgerButton = document.getElementById('hamburger-button-container')
const hamburgerXButton = document.getElementById('hamburger-x-button')
const hamburgerMenu = document.getElementById('hamburger-menu-container')
const contactInfoTop = document.getElementById('contact-info-top');
const topContainer = document.getElementById('top-container')


for(let i = 1; i <= 10; i++) {
    console.log(i);
}

do {
    topContainer.style.zIndex = ('2');
} while (hamburgerMenu.classList.contains('visible'));


//hamburger menu event

hamburgerButton.addEventListener('click', () => {

    hamburgerMenu.classList.remove('hidden');
    hamburgerMenu.classList.add('visible');
   

})

hamburgerXButton.addEventListener('click', () => {
    hamburgerMenu.classList.add('hidden');
    hamburgerMenu.classList.remove('visible');
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

    heroFormContainer.style.display = ('flex')

    
    

})



xButton.addEventListener('click', () => {
    heroFormContainer.style.display = ('none');
})

//





