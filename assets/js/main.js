document.addEventListener("DOMContentLoaded", () => {
    // --- Load shared nav ---
    fetch('assets/html/nav.html')
        .then(response => response.text())
        .then(data => {

            // Nav bar
            document.getElementById('nav-placeholder').innerHTML = data;

            // --- Hidden Menu Elements ---
            const hiddenNav = document.getElementById('hidden-nav');
            const navOverlay = document.getElementById('nav-overlay');
            const hamburgerNav = document.getElementById('hamburger-nav');
            const closeNavBtn = document.getElementById('nav-close-btn');

            function openHiddenNav() {
                hiddenNav.classList.add('open');
                navOverlay.classList.add('show');
            }

            function closeHiddenNav() {
                hiddenNav.classList.remove('open');
                navOverlay.classList.remove('show');
            }

            hamburgerNav.addEventListener('click', openHiddenNav);
            closeNavBtn.addEventListener('click', closeHiddenNav);
            navOverlay.addEventListener('click', closeHiddenNav);

            // --- Active Page ---
            const currentPage = window.location.pathname.split('/').pop().replace('.html', '') || 'index';
            
            // Apply .active to all nav links that match the current page
            document.querySelectorAll('.top-nav a').forEach(link => {
                if (link.dataset.page === currentPage) {
                    link.classList.add('active');
                }
            });

            document.querySelectorAll('#hidden-nav a').forEach(link => {
                if (link.dataset.page === currentPage) {
                    link.classList.add('active');
                }
            });
        });

        // --- Theme Toggle ---
        // Change button icon
        // Light - &#9788;
        // Dark - &#9790;
        const themeBtn = document.getElementById('theme-mode-btn');

        // Load saved theme
        if (localStorage.getItem('theme') === 'dark') {
            document.body.classList.add('theme-dark');
            themeBtn.innerHTML = '&#9790;';
        }

        themeBtn.addEventListener('click', () => {
            const isDark = document.body.classList.toggle('theme-dark');
            localStorage.setItem('theme', isDark ? 'dark' : 'light');
            themeBtn.innerHTML = isDark ? '&#9790;' : '&#9788;';
        });
});
