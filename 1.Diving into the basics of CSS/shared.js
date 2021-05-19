var backdrop = document.querySelector('.backdrop');
var modal = document.querySelector('.modal');
var planButtons = document.querySelectorAll('.plan button');
var modalNegativeAction = document.querySelector('.modal__action--negative');
var toggleButton = document.querySelector('.toggle-button');
var mobileNav = document.querySelector('.mobile-nav');

for (var i = 0; i < planButtons.length; i++) {
    planButtons[i].addEventListener('click', () => {
        // backdrop.style.display = 'block';
        // modal.style.display = 'block';
        // backdrop.className = 'open'; this will overwrite the complete class list

        backdrop.classList.add('open');
        modal.classList.add('open');
    });
};

backdrop.addEventListener('click', () => {
    // mobileNav.style.display = 'none';

    mobileNav.classList.remove('open');
    closeModal();
});

if (modalNegativeAction) {
    modalNegativeAction.addEventListener('click', closeModal);
};

function closeModal() {
    // backdrop.style.display = 'none';
    // modal.style.display = 'none';

    backdrop.classList.remove('open');
    if (modal) {
        modal.classList.remove('open');
    };
};

toggleButton.addEventListener('click', () => {
    // mobileNav.style.display = 'block';
    // backdrop.style.display = 'block';

    mobileNav.classList.add('open');
    backdrop.classList.add('open');
});


var form = document.querySelector('.signup-form');
var firstNameInput = document.querySelector('input[name="first-name"]');
var lastNameInput = document.querySelector('input[name="last-name"]');
var emailInput = document.querySelector('input[name="email"]');
var passwordInput = document.querySelector('input[name="password"]');
var checkboxInput = document.querySelector('input[type="checkbox"]');

const validateInput = () => {
    firstNameInput.classList.remove('invalid');
    firstNameInput.nextElementSibling.classList.add('hidden');

    lastNameInput.classList.remove('invalid');
    lastNameInput.nextElementSibling.classList.add('hidden');

    emailInput.classList.remove('invalid');
    emailInput.nextElementSibling.classList.add('hidden');

    passwordInput.classList.remove('invalid');
    passwordInput.nextElementSibling.classList.add('hidden');

    checkboxInput.classList.remove('invalid');

    if (!firstNameInput.value || !lastNameInput.value || !emailInput.value || !passwordInput.value) {
        firstNameInput.classList.add('invalid');
        firstNameInput.nextElementSibling.classList.remove('hidden');

        lastNameInput.classList.add('invalid');
        lastNameInput.nextElementSibling.classList.remove('hidden');

        emailInput.classList.add('invalid');
        emailInput.nextElementSibling.classList.remove('hidden');

        passwordInput.classList.add('invalid');
        passwordInput.nextElementSibling.classList.remove('hidden');

        checkboxInput.classList.add('invalid');
    }
};

form.addEventListener('submit', (e) => {
    e.preventDefault();
    validateInput();
});