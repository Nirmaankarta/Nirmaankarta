// ── Custom cursor (desktop / mouse only) ──
const cursor = document.getElementById('cursor');
const ring   = document.getElementById('cursor-ring');
let mx=-200, my=-200, rx=-200, ry=-200;

const isMouse = window.matchMedia('(hover:hover) and (pointer:fine)').matches;

if (isMouse) {
    document.addEventListener('mousemove', e => {
        mx = e.clientX;
        my = e.clientY;
    });

    (function loop() {
        cursor.style.left = mx + 'px';
        cursor.style.top = my + 'px';
        rx += (mx - rx) * 0.12;
        ry += (my - ry) * 0.12;
        ring.style.left = rx + 'px';
        ring.style.top = ry + 'px';
        requestAnimationFrame(loop);
    })();

    document.querySelectorAll('a, button, .project-card, .skill-tag').forEach(el => {
        el.addEventListener('mouseenter', () => {
            cursor.style.width = '18px';
            cursor.style.height = '18px';
            ring.style.width = '52px';
            ring.style.height = '52px';
            ring.style.opacity = '0.35';
        });
        el.addEventListener('mouseleave', () => {
            cursor.style.width = '10px';
            cursor.style.height = '10px';
            ring.style.width = '36px';
            ring.style.height = '36px';
            ring.style.opacity = '0.6';
        });
    });
}

// ── Hamburger menu ──
const hamburger  = document.getElementById('hamburger');
const mobileMenu = document.getElementById('mobile-menu');
let menuOpen = false;

function setMenu(state) {
    menuOpen = state;
    hamburger.classList.toggle('open', state);
    mobileMenu.classList.toggle('open', state);
    hamburger.setAttribute('aria-expanded', String(state));
    document.body.style.overflow = state ? 'hidden' : '';
}

hamburger.addEventListener('click', () => setMenu(!menuOpen));

mobileMenu.querySelectorAll('a').forEach(link => {
    link.addEventListener('click', () => setMenu(false));
});

document.addEventListener('keydown', e => {
    if (e.key === 'Escape' && menuOpen) setMenu(false);
});

// ── Scroll effects ──
const nav = document.getElementById('main-nav');
const reveals = document.querySelectorAll('.reveal');

const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('visible');
            observer.unobserve(entry.target);
        }
    });
}, { threshold: 0.1 });

reveals.forEach(el => observer.observe(el));

window.addEventListener('scroll', () => {
    nav.classList.toggle('scrolled', window.scrollY > 50);
}, { passive: true });

// ── Custom cursor (desktop / mouse only) ──
const cursor = document.getElementById('cursor');
const ring   = document.getElementById('cursor-ring');
let mx=-200, my=-200, rx=-200, ry=-200;

const isMouse = window.matchMedia('(hover:hover) and (pointer:fine)').matches;

if (isMouse) {
    document.addEventListener('mousemove', e => {
        mx = e.clientX;
        my = e.clientY;
    });

    (function loop() {
        cursor.style.left = mx + 'px';
        cursor.style.top = my + 'px';
        rx += (mx - rx) * 0.12;
        ry += (my - ry) * 0.12;
        ring.style.left = rx + 'px';
        ring.style.top = ry + 'px';
        requestAnimationFrame(loop);
    })();

    document.querySelectorAll('a, button, .project-card, .skill-tag').forEach(el => {
        el.addEventListener('mouseenter', () => {
            ring.style.transform = 'translate(-50%, -50%) scale(1.5)';
        });
        el.addEventListener('mouseleave', () => {
            ring.style.transform = 'translate(-50%, -50%) scale(1)';
        });
    });
}
