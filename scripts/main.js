const overlay = document.querySelector('.overlay');
const changeModal = document.querySelector('.change-modal');
const createModal = document.querySelector('.create-modal');

const createLocationBtn = document.querySelector('.content__add-btn');
const editLocationBtn = document.querySelector('.location__edit-btn');
const closeBtn = document.querySelector('.close-btn');
const cancelBtn = document.querySelector('.cancel-btn');

createLocationBtn.addEventListener('click', () => {
    [overlay, createModal].forEach(item => {
        item.classList.add('active');
    });
});
overlay.addEventListener('click', (e) => {
    const target =e.target;
    if (target === overlay || target === closeBtn || target === cancelBtn) {
        [createModal, changeModal, overlay].forEach(item => {
            item.classList.remove('active');
        });
    };
});
editLocationBtn.addEventListener('click', () => {
    [overlay, changeModal].forEach(item => {
        item.classList.add('active');
    });
})

