import checkNumInputs from './checkNumInputs';

const changeModalState = (state) => {
    const windowForm = document.querySelectorAll('.balcon_icons_img'),
        windowWidth = document.querySelector('#width'),
        windowHight = document.querySelector('#hight'),
        windowType = document.querySelector('#viev_type'),
        windowProfile = document.querySelectorAll('.checkbox');

    checkNumInputs('#width');
    checkNumInputs('#hight');

    windowForm.forEach((item, i) => {
        item.addEventListener('click', () => {
            state.form = i;
        });
    });
};

export default changeModalState;