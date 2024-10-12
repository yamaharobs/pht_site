const contactChevron = document.querySelector('#chev');
const formContainer = document.querySelector('#contact-page-contact-form-container');

//chevron click event
contactChevron.addEventListener('click', () => {
    ('html,body').animate({
        scrollTop: formContainer.offset().top},
        'slow');
    })
    


//