const themeModeBtn = document.getElementById('theme-mode-btn');

// Load saved theme
if (localStorage.getItem('theme') === 'dark') {
    document.body.classList.add('theme-dark');
    themeModeBtn.innerHTML = '&#9788;';
}

themeModeBtn.addEventListener('click', () => {
    const themeDark = document.body.classList.toggle('theme-dark');

    // Change button icon
    // Light - &#9788;
    // Dark - &#9790;
    localStorage.setItem('theme', themeDark ? 'dark' : 'light');
    themeModeBtn.innerHTML = themeDark ? '&#9788;' : '&#9790;';
});