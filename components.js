// ===== COOKIE CRAFT - SHARED COMPONENTS =====
// This file injects the shared navbar and footer across all pages

(function () {
    'use strict';

    // --- Configuration ---
    const BRAND_NAME = 'COOKIECRAFT';
    const BRAND_TAGLINE = 'Artisan Cookies, Baked with Love';
    const CURRENT_YEAR = new Date().getFullYear();

    const NAV_LINKS = [
        { label: 'Home', href: 'index.html', icon: 'fa-home' },
        { label: 'Home 2', href: 'home2.html', icon: 'fa-door-open' },
        { label: 'About', href: 'about.html', icon: 'fa-info-circle' },
        { label: 'Shop', href: 'shop.html', icon: 'fa-shopping-bag' },
        { label: 'Gallery', href: 'gallery.html', icon: 'fa-images' },
        { label: 'Contact', href: 'contact.html', icon: 'fa-envelope' },
    ];

    const SOCIAL_LINKS = [
        { icon: 'fab fa-facebook-f', href: '#', hoverColor: 'hover:text-blue-600' },
        { icon: 'fab fa-instagram', href: '#', hoverColor: 'hover:text-pink-500' },
        { icon: 'fab fa-twitter', href: '#', hoverColor: 'hover:text-sky-400' },
        { icon: 'fab fa-pinterest', href: '#', hoverColor: 'hover:text-red-600' },
    ];

    // --- Get current page ---
    const currentPage = window.location.pathname.split('/').pop() || 'index.html';

    // --- Render Navbar ---
    function renderNavbar() {
        const navLinksDesktop = NAV_LINKS.map(link => {
            const isActive = link.href === currentPage;
            return `<a href="${link.href}" class="nav-link text-sm font-bold uppercase tracking-wide transition-all duration-300 hover:text-amber-600 relative group ${isActive ? 'text-amber-600' : 'text-gray-700 dark:text-gray-300'}">
                ${link.label}
                <span class="absolute -bottom-1 left-0 w-0 h-0.5 bg-amber-600 transition-all duration-300 group-hover:w-full ${isActive ? 'w-full' : ''}"></span>
            </a>`;
        }).join('');

        const navLinksMobile = NAV_LINKS.map(link => {
            const isActive = link.href === currentPage;
            return `<a href="${link.href}" class="nav-link flex items-center px-4 py-4 text-base font-bold border-b border-gray-50 dark:border-gray-800 hover:text-amber-600 transition-all duration-300 ${isActive ? 'text-amber-600 bg-amber-50 dark:bg-amber-900/10' : 'text-gray-700 dark:text-gray-200'}">
                <i class="fas ${link.icon} w-6 text-sm opacity-50"></i> ${link.label}
            </a>`;
        }).join('');

        return `
        <div id="scroll-progress" style="width: 0%"></div>
        <nav id="main-nav" class="sticky top-0 z-50 bg-white/90 dark:bg-gray-900/90 backdrop-blur-md border-b border-gray-200 dark:border-gray-800 transition-all duration-300">
            <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div class="flex justify-between items-center h-20">
                    <!-- Logo -->
                    <a href="index.html" class="flex items-center space-x-2 group">
                        <span class="text-2xl">🍪</span>
                        <span class="font-black text-xl tracking-tight text-amber-700 dark:text-amber-500 group-hover:text-amber-600 transition-colors" style="font-family: 'Playfair Display', serif;">
                            ${BRAND_NAME}
                        </span>
                    </a>

                    <!-- Desktop Nav Links -->
                    <div id="desktop-links" class="hidden lg:flex items-center space-x-8">
                        ${navLinksDesktop}
                    </div>

                    <!-- Right Side Actions -->
                    <div class="flex items-center space-x-3">
                        <!-- RTL/LTR Toggle -->
                        <button id="dir-toggle" class="js-dir-toggle hidden lg:flex w-12 h-10 items-center justify-center rounded-xl bg-gray-100 dark:bg-gray-800 border border-gray-200 dark:border-gray-700 hover:border-amber-500/50 hover:bg-white dark:hover:bg-gray-700 transition-all shadow-sm group" aria-label="Toggle text direction">
                            <span class="text-[10px] font-black text-gray-600 dark:text-gray-400 group-hover:text-amber-600 transition-colors uppercase">LTR</span>
                        </button>

                        <!-- Theme Toggle -->
                        <button id="theme-toggle-desktop" class="js-theme-toggle hidden lg:flex w-10 h-10 items-center justify-center rounded-xl bg-gray-100 dark:bg-gray-800 border border-gray-200 dark:border-gray-700 hover:border-amber-500/50 hover:bg-white dark:hover:bg-gray-700 transition-all shadow-sm group" aria-label="Toggle theme">
                            <i class="fas fa-moon text-sm text-gray-600 dark:text-gray-400 group-hover:text-amber-600 transition-colors"></i>
                        </button>

                        <!-- Sign In Link -->
                        <a href="login.html" class="hidden md:inline-block text-xs font-black uppercase tracking-widest text-gray-700 dark:text-gray-300 hover:text-amber-600 transition-colors mr-2">
                            Sign In
                        </a>

                        <!-- Order CTA (Desktop) -->
                        <a href="shop.html" class="hidden md:inline-block bg-amber-600 text-white px-5 py-2.5 rounded-full text-xs font-black uppercase tracking-widest hover:bg-amber-700 shadow-lg shadow-amber-600/20 transition-all active:scale-95 btn-shine">
                            Order Now
                        </a>

                        <!-- Mobile Menu Button -->
                        <button id="mobile-menu-btn" class="lg:hidden p-2 text-gray-600 dark:text-gray-300 focus:outline-none hover:bg-gray-100 dark:hover:bg-gray-800 rounded-lg transition-colors" aria-label="Toggle menu">
                            <i class="fas fa-bars text-2xl" id="menu-icon"></i>
                        </button>
                    </div>
                </div>
            </div>

            <!-- Mobile Menu -->
            <div id="mobile-menu" class="hidden lg:hidden bg-white dark:bg-gray-900 border-b border-gray-200 dark:border-gray-800 transition-all duration-300">
                <div class="max-w-7xl mx-auto px-4 pt-4 pb-8">
                    <div class="grid grid-cols-1 gap-1 mb-6">
                        ${navLinksMobile}
                    </div>
                    <div class="flex flex-col sm:flex-row items-center justify-between gap-4 border-t border-gray-100 dark:border-gray-800 pt-6">
                        <div class="flex gap-3 w-full sm:w-auto">
                            <button class="js-dir-toggle flex items-center space-x-2 px-6 py-3 rounded-xl bg-gray-100 dark:bg-gray-800 border border-gray-200 dark:border-gray-700 transition-all flex-1 sm:flex-none justify-center">
                                <i class="fas fa-exchange-alt text-sm"></i>
                                <span class="text-xs font-bold uppercase tracking-widest">LTR / RTL</span>
                            </button>
                            <button class="js-theme-toggle flex items-center space-x-2 px-6 py-3 rounded-xl bg-gray-100 dark:bg-gray-800 border border-gray-200 dark:border-gray-700 transition-all flex-1 sm:flex-none justify-center">
                                <i class="fas fa-moon text-sm"></i>
                                <span class="text-xs font-bold uppercase tracking-widest">Theme</span>
                            </button>
                        </div>
                        <div class="flex gap-2 w-full sm:w-auto">
                            <a href="login.html" class="flex-1 sm:flex-none text-center bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-200 px-6 py-4 rounded-2xl font-black uppercase tracking-widest text-xs border border-gray-200 dark:border-gray-700 hover:bg-gray-200 transition-all">
                                Sign In
                            </a>
                            <a href="shop.html" class="flex-1 sm:flex-none text-center bg-amber-600 text-white px-6 py-4 rounded-2xl font-black uppercase tracking-widest text-xs hover:bg-amber-700 shadow-lg transition-all">
                                Order Now
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </nav>`;
    }

    // --- Render Footer ---
    function renderFooter() {
        const socialLinksHtml = SOCIAL_LINKS.map(s => 
            `<a href="${s.href}" class="w-10 h-10 flex items-center justify-center rounded-full bg-gray-100 dark:bg-gray-800 text-gray-500 ${s.hoverColor} hover:-translate-y-1 transition-all duration-300 border border-gray-200 dark:border-gray-700 hover:border-amber-500/30 hover:shadow-lg">
                <i class="${s.icon}"></i>
            </a>`
        ).join('');

        return `
        <footer class="bg-white dark:bg-gray-900 border-t border-gray-200 dark:border-gray-800 pt-16 pb-6 transition-colors duration-300">
            <div class="max-w-7xl mx-auto px-4">
                <!-- Main Footer Grid -->
                <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
                    <!-- Brand Column -->
                    <div class="lg:col-span-1 space-y-6">
                        <a href="index.html" class="flex items-center space-x-2 group">
                            <span class="text-3xl">🍪</span>
                            <span class="font-black text-xl tracking-tight text-amber-700 dark:text-amber-500" style="font-family: 'Playfair Display', serif;">${BRAND_NAME}</span>
                        </a>
                        <p class="text-sm text-gray-500 dark:text-gray-400 leading-relaxed">
                            ${BRAND_TAGLINE}. Premium handcrafted cookies made with the finest ingredients, delivered fresh to your door.
                        </p>
                        <div class="flex space-x-3">
                            ${socialLinksHtml}
                        </div>
                    </div>

                    <!-- Quick Links -->
                    <div class="lg:pl-8">
                        <h4 class="font-bold mb-6 text-gray-900 dark:text-white uppercase text-xs tracking-widest">Quick Links</h4>
                        <ul class="text-sm space-y-3 text-gray-500 dark:text-gray-400">
                            <li><a href="index.html" class="hover:text-amber-600 hover:pl-2 transition-all duration-200 block">Home</a></li>
                            <li><a href="home2.html" class="hover:text-amber-600 hover:pl-2 transition-all duration-200 block">Home 2</a></li>
                            <li><a href="about.html" class="hover:text-amber-600 hover:pl-2 transition-all duration-200 block">About Us</a></li>
                            <li><a href="shop.html" class="hover:text-amber-600 hover:pl-2 transition-all duration-200 block">Shop Cookies</a></li>
                            <li><a href="gallery.html" class="hover:text-amber-600 hover:pl-2 transition-all duration-200 block">Gallery</a></li>
                            <li><a href="login.html" class="hover:text-amber-600 hover:pl-2 transition-all duration-200 block">Sign In</a></li>
                            <li><a href="signup.html" class="hover:text-amber-600 hover:pl-2 transition-all duration-200 block">Register</a></li>
                        </ul>
                    </div>

                    <!-- Support -->
                    <div>
                        <h4 class="font-bold mb-6 text-gray-900 dark:text-white uppercase text-xs tracking-widest">Support</h4>
                        <ul class="text-sm space-y-3 text-gray-500 dark:text-gray-400">
                            <li><a href="contact.html" class="hover:text-amber-600 hover:pl-2 transition-all duration-200 block">Contact Us</a></li>
                            <li><a href="comingsoon.html" class="hover:text-amber-600 hover:pl-2 transition-all duration-200 block">Coming Soon</a></li>
                            <li><a href="404.html" class="hover:text-amber-600 hover:pl-2 transition-all duration-200 block">404 Page</a></li>
                            <li><a href="#" class="hover:text-amber-600 hover:pl-2 transition-all duration-200 block">Shipping Policy</a></li>
                            <li><a href="#" class="hover:text-amber-600 hover:pl-2 transition-all duration-200 block">Returns & Refunds</a></li>
                            <li><a href="#" class="hover:text-amber-600 hover:pl-2 transition-all duration-200 block">FAQ</a></li>
                        </ul>
                    </div>

                    <!-- Newsletter -->
                    <div class="bg-amber-50 dark:bg-gray-800/50 p-6 rounded-2xl border border-amber-100 dark:border-gray-700 transition-all hover:shadow-lg">
                        <h4 class="font-bold mb-2 text-gray-900 dark:text-white">Stay Sweet 🍪</h4>
                        <p class="text-xs text-gray-500 dark:text-gray-400 mb-4">Get exclusive offers, new flavors & baking tips.</p>
                        <form id="newsletter-form" class="space-y-2">
                            <input type="email" required placeholder="Your Email" 
                                class="w-full px-4 py-3 text-sm bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-700 focus:border-amber-600 focus:ring-1 focus:ring-amber-600 rounded-xl outline-none transition-all" />
                            <button type="submit" class="w-full bg-amber-600 hover:bg-amber-700 text-white text-sm font-bold py-3 rounded-xl transition-all active:scale-95 shadow-lg shadow-amber-600/20">
                                Subscribe
                            </button>
                        </form>
                        <p id="newsletter-success" class="hidden text-[10px] text-green-500 mt-2 font-bold animate-pulse text-center uppercase tracking-wider">Thanks for subscribing! 🎉</p>
                    </div>
                </div>

                <!-- Bottom Bar -->
                <div class="border-t border-gray-100 dark:border-gray-800 pt-8 pb-4">
                    <div class="flex flex-col md:flex-row items-center justify-between gap-4">
                        <p class="text-[11px] uppercase tracking-[0.2em] text-gray-400">
                            &copy; ${CURRENT_YEAR} ${BRAND_NAME}. <span class="mx-1">|</span> Baked with ❤️ & Premium Ingredients.
                        </p>
                        <div class="flex items-center space-x-6">
                            <a href="#" class="text-[10px] uppercase tracking-widest text-gray-400 hover:text-amber-600 transition-colors">Privacy</a>
                            <a href="#" class="text-[10px] uppercase tracking-widest text-gray-400 hover:text-amber-600 transition-colors">Terms</a>
                            <a href="#" class="text-[10px] uppercase tracking-widest text-gray-400 hover:text-amber-600 transition-colors">Cookies Policy</a>
                        </div>
                    </div>
                </div>
            </div>
        </footer>

        <!-- Back to Top Button -->
        <button id="back-to-top" aria-label="Back to top">
            <i class="fas fa-chevron-up"></i>
        </button>`;
    }

    // --- Initialize Shared Components ---
    function init() {
        // Inject navbar
        const navContainer = document.getElementById('navbar-container');
        if (navContainer) {
            navContainer.innerHTML = renderNavbar();
        }

        // Inject footer
        const footerContainer = document.getElementById('footer-container');
        if (footerContainer) {
            footerContainer.innerHTML = renderFooter();
        }

        // Initialize theme
        initTheme();
        // Initialize RTL/LTR
        initDirection();
        // Initialize mobile menu
        initMobileMenu();
        // Initialize scroll effects
        initScrollEffects();
        // Initialize newsletter
        initNewsletter();
        // Initialize scroll reveal
        initScrollReveal();
        // Remove page loader
        removePageLoader();
    }

    // --- Theme Logic ---
    function initTheme() {
        const html = document.documentElement;
        const themeBtns = document.querySelectorAll('.js-theme-toggle');

        const setTheme = (isDark) => {
            if (isDark) {
                html.classList.add('dark');
                themeBtns.forEach(btn => {
                    const icon = btn.querySelector('i');
                    if (icon) icon.className = 'fas fa-sun text-sm text-yellow-400';
                    const span = btn.querySelector('span');
                    if (span) span.textContent = 'Light Mode';
                });
                localStorage.setItem('theme', 'dark');
            } else {
                html.classList.remove('dark');
                themeBtns.forEach(btn => {
                    const icon = btn.querySelector('i');
                    if (icon) icon.className = 'fas fa-moon text-sm text-gray-600 dark:text-gray-400';
                    const span = btn.querySelector('span');
                    if (span) span.textContent = 'Dark Mode';
                });
                localStorage.setItem('theme', 'light');
            }
        };

        themeBtns.forEach(btn => {
            btn.addEventListener('click', () => {
                setTheme(!html.classList.contains('dark'));
            });
        });

        // Initialize from storage / system preference
        if (localStorage.theme === 'dark' || (!localStorage.theme && window.matchMedia('(prefers-color-scheme: dark)').matches)) {
            setTheme(true);
        }
    }

    // --- RTL/LTR Direction Logic ---
    function initDirection() {
        const html = document.documentElement;
        const dirBtns = document.querySelectorAll('.js-dir-toggle');

        const setDir = (dir) => {
            html.setAttribute('dir', dir);
            localStorage.setItem('dir', dir);
            dirBtns.forEach(btn => {
                const span = btn.querySelector('span');
                const hasIcon = btn.querySelector('i');
                if (span) {
                    if (hasIcon) {
                        span.textContent = dir === 'rtl' ? 'RTL Mode' : 'LTR Mode';
                    } else {
                        span.textContent = dir.toUpperCase();
                    }
                } else {
                    btn.textContent = dir.toUpperCase();
                }
            });
        };

        dirBtns.forEach(btn => {
            btn.addEventListener('click', () => {
                const currentDir = html.getAttribute('dir') || 'ltr';
                setDir(currentDir === 'ltr' ? 'rtl' : 'ltr');
            });
        });

        // Initialize from storage
        if (localStorage.getItem('dir') === 'rtl') {
            setDir('rtl');
        }
    }

    // --- Mobile Menu ---
    function initMobileMenu() {
        const menuBtn = document.getElementById('mobile-menu-btn');
        const mobileMenu = document.getElementById('mobile-menu');
        const menuIcon = document.getElementById('menu-icon');

        if (menuBtn && mobileMenu) {
            menuBtn.addEventListener('click', () => {
                const isHidden = mobileMenu.classList.toggle('hidden');
                menuIcon.className = isHidden ? 'fas fa-bars text-2xl' : 'fas fa-times text-2xl';
            });
        }
    }

    // --- Scroll Effects ---
    function initScrollEffects() {
        const scrollProgress = document.getElementById('scroll-progress');
        const backToTop = document.getElementById('back-to-top');
        const nav = document.getElementById('main-nav');

        window.addEventListener('scroll', () => {
            const scrollTop = window.scrollY;
            const docHeight = document.documentElement.scrollHeight - window.innerHeight;
            const scrollPercent = (scrollTop / docHeight) * 100;

            // Scroll progress bar
            if (scrollProgress) {
                scrollProgress.style.width = scrollPercent + '%';
            }

            // Back to top visibility
            if (backToTop) {
                if (scrollTop > 400) {
                    backToTop.classList.add('visible');
                } else {
                    backToTop.classList.remove('visible');
                }
            }

            // Navbar shadow on scroll
            if (nav) {
                if (scrollTop > 10) {
                    nav.classList.add('shadow-lg');
                } else {
                    nav.classList.remove('shadow-lg');
                }
            }
        });

        // Back to top click
        if (backToTop) {
            backToTop.addEventListener('click', () => {
                window.scrollTo({ top: 0, behavior: 'smooth' });
            });
        }
    }

    // --- Newsletter Form ---
    function initNewsletter() {
        const form = document.getElementById('newsletter-form');
        if (form) {
            form.addEventListener('submit', function (e) {
                e.preventDefault();
                const btn = this.querySelector('button');
                const success = document.getElementById('newsletter-success');

                btn.innerHTML = '<i class="fas fa-circle-notch animate-spin"></i> Subscribing...';

                setTimeout(() => {
                    this.classList.add('hidden');
                    if (success) success.classList.remove('hidden');
                }, 1500);
            });
        }
    }

    // --- Scroll Reveal ---
    function initScrollReveal() {
        const revealElements = document.querySelectorAll('.reveal');
        if (revealElements.length === 0) return;

        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('active');
                }
            });
        }, { threshold: 0.1, rootMargin: '0px 0px -50px 0px' });

        revealElements.forEach(el => observer.observe(el));
    }

    // --- Page Loader ---
    function removePageLoader() {
        const loader = document.getElementById('page-loader');
        if (loader) {
            setTimeout(() => {
                loader.classList.add('loaded');
                setTimeout(() => loader.remove(), 500);
            }, 300);
        }
    }

    // --- DOM Ready ---
    if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', init);
    } else {
        init();
    }
})();
