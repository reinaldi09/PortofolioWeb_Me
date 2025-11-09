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

// Example: Mobile menu toggle (if needed in the future)
function toggleMobileMenu() {
    const nav = document.querySelector('nav');
    if (nav) {
        nav.classList.toggle('mobile-menu-open');
    }
}

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
    const nav = document.querySelector('nav');
    if (nav) {
        nav.classList.toggle('mobile-menu-open');
    }
}

// Close mobile menu when clicking outside or on a link
document.addEventListener('click', function(event) {
    const nav = document.querySelector('nav');
    const menuButton = document.querySelector('.menu-button');

    if (nav && nav.classList.contains('mobile-menu-open')) {
        // Close if clicking outside nav or on a nav link
        if (!nav.contains(event.target) && event.target !== menuButton) {
            nav.classList.remove('mobile-menu-open');
        }
    }
});

// Initialize any functionality when DOM is loaded
document.addEventListener('DOMContentLoaded', function() {
    // Add any initialization code here
    console.log('Portfolio website loaded successfully');

    // Add viewport meta tag if missing (for better mobile support)
    if (!document.querySelector('meta[name="viewport"]')) {
        const viewport = document.createElement('meta');
        viewport.name = 'viewport';
        viewport.content = 'width=device-width, initial-scale=1.0';
        document.head.appendChild(viewport);
    }
});