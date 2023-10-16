// Main Javascript

/* Uncheck The Header Chekcbox If Keydown ESC*/
const headerCheckbox = document.querySelector('.header-button');

document.addEventListener('keydown', function(event) {
    if (event.key === 'Escape' && !headerCheckbox.checked) {
        headerCheckbox.checked = true;
    } else if (headerCheckbox.checked) {
        headerCheckbox.checked = false;
    }
});
/* // Uncheck The Header Chekcbox If Keydown ESC*/

