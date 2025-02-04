const themeToggle = document.getElementById('theme-toggle');
        const body = document.body;

        themeToggle.addEventListener('click', () => {
            body.dataset.theme = body.dataset.theme === 'dark' ? 'light' : 'dark';
            themeToggle.textContent = body.dataset.theme === 'dark' ? '☀️' : '🌙';
        });
        const themeToggleDesctop = document.getElementById('theme-toggle-desctop');
        const bodydecstop = document.body;

        themeToggleDesctop.addEventListener('click', () => {
            body.dataset.theme = bodydecstop.dataset.theme === 'dark' ? 'light' : 'dark';
            themeToggleDesctop.textContent = bodydecstop.dataset.theme === 'dark' ? '☀️' : '🌙';
        });


// humberger
const hamburger = document.getElementById('hamburger');
const navList = document.getElementById('nav-list');

hamburger.addEventListener('click', () => {
    navList.classList.toggle('active');
    hamburger.classList.toggle('active');
});

document.addEventListener('click', (event) => {
    if (!hamburger.contains(event.target) && !navList.contains(event.target)) {
        navList.classList.remove('active');
        hamburger.classList.remove('active');
    }
});