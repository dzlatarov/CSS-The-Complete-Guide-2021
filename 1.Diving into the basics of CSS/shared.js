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

modalNegativeAction.addEventListener('click', closeModal);

function closeModal() {
    // backdrop.style.display = 'none';
    // modal.style.display = 'none';

    backdrop.classList.remove('open');
    modal.classList.remove('open');
};

toggleButton.addEventListener('click', () => {
    // mobileNav.style.display = 'block';
    // backdrop.style.display = 'block';

    mobileNav.classList.add('open');
    backdrop.classList.add('open');
});
