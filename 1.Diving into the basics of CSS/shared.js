var backdrop = document.querySelector('.backdrop');
var modal = document.querySelector('.modal');
var planButtons = document.querySelectorAll('.plan button');
var modalNegativeAction = document.querySelector('.modal__action--negative');

for (var i = 0; i < planButtons.length; i++) {
    planButtons[i].addEventListener('click', () => {
        backdrop.style.display = 'block';
        modal.style.display = 'block';
    });
};

backdrop.addEventListener('click', closeModal)

modalNegativeAction.addEventListener('click', closeModal);

function closeModal() {
    backdrop.style.display = 'none';
    modal.style.display = 'none';
};
