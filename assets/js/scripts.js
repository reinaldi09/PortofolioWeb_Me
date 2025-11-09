// Alpine.js is loaded via CDN, so we don't need to include it here
// This file can be used for additional custom JavaScript functionality

// Smooth scrolling for anchor links (only for same-page links)
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        const href = this.getAttribute('href');

        // Only prevent default and handle smooth scroll for same-page anchors
        // Skip if href is just "#" or external links
        if (href && href !== '#' && href.startsWith('#')) {
            e.preventDefault();
            const target = document.querySelector(href);
            if (target) {
                target.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }
        }
    });
});

// Mobile menu toggle functionality
function toggleMobileMenu() {
    const nav = document.querySelector('nav');
    if (nav) {
        nav.classList.toggle('mobile-menu-open');
    }
}

// Close mobile menu when clicking on a link
document.addEventListener('click', function(event) {
    const mobileNav = document.querySelector('.mobile-nav-menu');
    if (mobileNav && mobileNav.classList.contains('active')) {
        // Check if clicked element is a nav link
        if (event.target.closest('.mobile-nav-menu a')) {
            mobileNav.classList.remove('active');
        }
    }
});

// Example: Tab functionality (if not using Alpine.js)
function switchTab(tabName) {
    // Hide all tab content
    const tabContents = document.querySelectorAll('[x-show]');
    tabContents.forEach(content => {
        content.style.display = 'none';
    });

    // Show selected tab content
    const activeTab = document.querySelector(`[x-show*="${tabName}"]`);
    if (activeTab) {
        activeTab.style.display = 'block';
    }

    // Update tab slider
    const slider = document.querySelector('.slider');
    if (slider) {
        if (tabName === 'general') {
            slider.classList.remove('active-industry');
            slider.classList.add('active-general');
        } else {
            slider.classList.remove('active-general');
            slider.classList.add('active-industry');
        }
    }
}

// Mobile menu toggle functionality
function toggleMobileMenu() {
    console.log('Mobile menu toggle called');
    const mobileNav = document.querySelector('.mobile-nav-menu');
    if (mobileNav) {
        console.log('Found mobile nav element:', mobileNav);
        const isOpen = mobileNav.classList.contains('active');
        console.log('Menu currently open:', isOpen);

        if (isOpen) {
            mobileNav.classList.remove('active');
            console.log('Mobile menu closed');
        } else {
            mobileNav.classList.add('active');
            console.log('Mobile menu opened');
        }

        console.log('Mobile menu toggled, current classes:', mobileNav.className);
        console.log('Mobile nav display style:', window.getComputedStyle(mobileNav).display);
    } else {
        console.log('Mobile nav menu not found');
        // Try to find it with a different selector
        const altMobileNav = document.querySelector('nav.mobile-nav-menu');
        if (altMobileNav) {
            console.log('Found with alt selector');
            altMobileNav.classList.toggle('active');
        } else {
            console.log('No mobile nav found with any selector');
        }
    }
}

// Close mobile menu when clicking outside
document.addEventListener('click', function(event) {
    const mobileNav = document.querySelector('.mobile-nav-menu');
    const menuButton = document.querySelector('.menu-button');

    if (mobileNav && mobileNav.classList.contains('active')) {
        // Close if clicking outside nav and not on menu button
        if (!mobileNav.contains(event.target) && event.target !== menuButton && !menuButton.contains(event.target)) {
            mobileNav.classList.remove('active');
        }
    }
});

// Initialize any functionality when DOM is loaded
document.addEventListener('DOMContentLoaded', function() {
    // Add any initialization code here
    console.log('Portfolio website loaded successfully');

    // Log current screen width
    const screenWidth = window.innerWidth;
    console.log('Current screen width:', screenWidth + 'px');

    // Check if hamburger button should be visible
    const menuButton = document.querySelector('.menu-button');
    if (menuButton) {
        const computedStyle = window.getComputedStyle(menuButton);
        console.log('Menu button display style:', computedStyle.display);
        console.log('Menu button visibility:', computedStyle.visibility);
    } else {
        console.log('Menu button not found');
    }

    // Add viewport meta tag if missing (for better mobile support)
    if (!document.querySelector('meta[name="viewport"]')) {
        const viewport = document.createElement('meta');
        viewport.name = 'viewport';
        viewport.content = 'width=device-width, initial-scale=1.0';
        document.head.appendChild(viewport);
    }

    // Initialize mobile menu button - direct inline onclick is used instead
    console.log('Mobile menu initialization complete');
});