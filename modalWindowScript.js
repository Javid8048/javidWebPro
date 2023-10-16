'use strict!';

const showModalBtn = document.querySelectorAll('.show-modal');
const floatingDiv = document.querySelector('.floatingDiv');
const closeModalBtn = document.querySelector('.closeModalBtn');

const addModalFunc = () => floatingDiv.classList.remove('hiddenClass');
const closeModalFunc = () => floatingDiv.classList.add('hiddenClass');

for(let modalBtn of showModalBtn)  modalBtn.addEventListener('click', addModalFunc);

closeModalBtn.addEventListener('click', closeModalFunc);
floatingDiv.addEventListener('click', closeModalFunc);

document.addEventListener('keydown', (e) => {
    console.log(e);
    if(e.key == 'Escape' && !floatingDiv.classList.contains('hiddenClass')) closeModalFunc();
})