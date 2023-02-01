let DARKMODE = false;
const BUTTON = document.getElementById('dark_mode_button');

const switchMode = () => {
    DARKMODE = !DARKMODE;
    setClassToBody();
};

const setClassToBody = () => {
    if (DARKMODE) {
        document.querySelector('body').classList.remove('light');
        document.querySelector('body').classList.add('dark');
    } else {
        document.querySelector('body').classList.remove('dark');
        document.querySelector('body').classList.add('light');
    }
}

if (window.matchMedia('(prefers-color-scheme: dark)').matches) {
    DARKMODE = true;
} else {
    DARKMODE = false;
}

BUTTON.addEventListener('click', switchMode);
setClassToBody();
