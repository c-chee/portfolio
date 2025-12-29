
document.addEventListener('DOMContentLoaded', () => {
    /** ================
     *  Navigation
    ====================*/

    fetch('assets/html/nav.html')
        .then(response => response.text())
        .then(data => {
            document.getElementById('nav-placeholder').innerHTML = data;

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

            const currentPage =
                window.location.pathname.split('/').pop().replace('.html', '') || 'index';

            document.querySelectorAll('.top-nav a, #hidden-nav a').forEach(link => {
                if (link.dataset.page === currentPage) {
                    link.classList.add('active');
                }
            });
        });

    /** ================
     *  Hero (Paralax)
    ====================*/

    const heroConfig = {
        light: [
            { src: 'assets/images/light-bg.png', speed: 0 },
            { src: 'assets/images/light-cloud-1.png', speed: 0.02 },
            { src: 'assets/images/light-cloud-2.png', speed: 0.08 },
            { src: 'assets/images/light-cloud-3.png', speed: 0.12 }
        ],
        dark: [
            { src: 'assets/images/dark-bg.png', speed: 0 },
            // { src: 'assets/images/dark-moon.png', speed: 0.01 },
            { src: 'assets/images/dark-cloud-1.png', speed: 0.05 },
            { src: 'assets/images/dark-cloud-2.png', speed: 0.10 }
        ]
    };

    const heroLayersContainer = document.getElementById('hero-layers');
    let activeHeroLayers = [];
    let animationId = null;

    function buildHeroLayers(theme) {
        if (!heroLayersContainer) return;

        heroLayersContainer.innerHTML = '';
        activeHeroLayers = [];

        heroConfig[theme].forEach((layer, index) => {
            for (let i = 0; i < 2; i++) {
                const img = document.createElement('img');

                img.src = layer.src;
                img.className = 'hero-layer';
                img.dataset.speed = layer.speed;
                img.dataset.x = i === 0 ? 0 : window.innerWidth;
                img.style.zIndex = index;

                heroLayersContainer.appendChild(img);
                activeHeroLayers.push(img);
            }
        });
    }

    /** ================
     *  Theme Toggle
     * 
     * - Light - &#9788;
     * - Dark - &#9790;
    ====================*/
    const themeBtn = document.getElementById('theme-mode-btn');
    const savedTheme = localStorage.getItem('theme') || 'light';
    const isDarkOnLoad = savedTheme === 'dark';

    if (isDarkOnLoad) {
        document.body.classList.add('theme-dark');
        themeBtn.innerHTML = '&#9790;';
    }

    buildHeroLayers(savedTheme);
    startHeroAnimation();

    themeBtn.addEventListener('click', () => {
        const isDark = document.body.classList.toggle('theme-dark');
        const theme = isDark ? 'dark' : 'light';

        localStorage.setItem('theme', theme);
        themeBtn.innerHTML = isDark ? '&#9790;' : '&#9788;';

        buildHeroLayers(theme);
        startHeroAnimation();
    });

    /** ================
     *  Hero Animation
    ====================*/
    function animateHeroLayers() {
        activeHeroLayers.forEach(layer => {
            let x = parseFloat(layer.dataset.x);
            const speed = parseFloat(layer.dataset.speed);
            const width = layer.offsetWidth;

            x -= speed;

            // Mirror the layer when it passes its width
            if (x <= -width) {
                x += width;
                // Flip horizontally
                if (!layer.dataset.flipped || layer.dataset.flipped === 'false') {
                    layer.style.transform = `translateX(${x}px) scaleX(-1)`;
                    layer.dataset.flipped = 'true';
                } else {
                    layer.style.transform = `translateX(${x}px) scaleX(1)`;
                    layer.dataset.flipped = 'false';
                }
            } else {
                // Normal translation if not at boundary
                const flipped = layer.dataset.flipped === 'true' ? -1 : 1;
                layer.style.transform = `translateX(${x}px) scaleX(${flipped})`;
            }

            layer.dataset.x = x;
        });

        animationId = requestAnimationFrame(animateHeroLayers);
    }


    function startHeroAnimation() {
        if (animationId) cancelAnimationFrame(animationId);
        animateHeroLayers();
    }

});
