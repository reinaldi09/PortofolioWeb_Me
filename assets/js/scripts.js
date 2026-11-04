/**
 * Portfolio Website Interactive Scripts
 * Author: Ahmad Reinaldi
 * Optimized for accessibility, performance, and maintainability.
 */

(function () {
    'use strict';

    /**
     * Synchronizes mobile menu state, ARIA attributes, and icon glyph.
     * @param {boolean} [forceState] - Optional boolean to force open (true) or close (false).
     */
    function setMobileMenuState(forceState) {
        const mobileNav = document.querySelector('.mobile-nav-menu');
        const menuButton = document.querySelector('.menu-button');
        if (!mobileNav || !menuButton) return;

        const isOpen = typeof forceState === 'boolean'
            ? forceState
            : !mobileNav.classList.contains('active');

        mobileNav.classList.toggle('active', isOpen);
        menuButton.setAttribute('aria-expanded', String(isOpen));

        const icon = menuButton.querySelector('.material-symbols-outlined');
        if (icon) {
            icon.textContent = isOpen ? 'close' : 'menu';
        }
    }

    // Expose toggleMobileMenu globally for inline onclick compatibility
    window.toggleMobileMenu = function () {
        setMobileMenuState();
    };

    document.addEventListener('DOMContentLoaded', function () {
        // 1. Smooth scrolling for same-page anchor links
        document.querySelectorAll('a[href^="#"]').forEach(function (anchor) {
            anchor.addEventListener('click', function (e) {
                const href = this.getAttribute('href');
                if (href && href.length > 1 && href.startsWith('#')) {
                    const target = document.querySelector(href);
                    if (target) {
                        e.preventDefault();
                        setMobileMenuState(false);
                        target.scrollIntoView({
                            behavior: window.matchMedia('(prefers-reduced-motion: reduce)').matches ? 'auto' : 'smooth',
                            block: 'start'
                        });
                        history.pushState(null, '', href);
                    }
                }
            });
        });

        // 2. Close mobile menu when clicking a link inside it or clicking outside
        document.addEventListener('click', function (event) {
            const mobileNav = document.querySelector('.mobile-nav-menu');
            const menuButton = document.querySelector('.menu-button');
            if (!mobileNav || !mobileNav.classList.contains('active')) return;

            const clickedLink = event.target.closest('.mobile-nav-menu a');
            const clickedInsideNav = mobileNav.contains(event.target);
            const clickedMenuBtn = menuButton && (event.target === menuButton || menuButton.contains(event.target));

            if (clickedLink || (!clickedInsideNav && !clickedMenuBtn)) {
                setMobileMenuState(false);
            }
        });

        // 3. Close mobile menu on Escape key press
        document.addEventListener('keydown', function (event) {
            if (event.key === 'Escape') {
                const mobileNav = document.querySelector('.mobile-nav-menu');
                const menuButton = document.querySelector('.menu-button');
                if (mobileNav && mobileNav.classList.contains('active')) {
                    setMobileMenuState(false);
                    if (menuButton) menuButton.focus();
                }
            }
        });
    });
})();
