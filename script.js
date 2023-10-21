const wrapper = document.querySelector('.wrapper');
const loginLink = document.querySelector('.login-link');
const registerLink = document.querySelector('.register-link');
const btnPopup = document.querySelector('.btnLogin-popup');
const iconClose = document.querySelector('.icon-close');

registerLink.addEventListener('click', () => {
    wrapper.classList.add('active');
    console.log('Register link clicked');
});

loginLink.addEventListener('click', () => {
    wrapper.classList.remove('active');
    console.log('Login link clicked');
});

btnPopup.addEventListener('click', () => {
    wrapper.classList.add('active-popup');
    console.log('Popup button clicked');
});

iconClose.addEventListener('click', () => {
    wrapper.classList.remove('active-popup');
    console.log('Close button clicked');
});