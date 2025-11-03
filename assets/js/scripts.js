// Alpine.js is loaded via CDN, so we don't need to include it here
// This file can be used for additional custom JavaScript functionality

// Example: Smooth scrolling for anchor links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
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

// Initialize any functionality when DOM is loaded
document.addEventListener('DOMContentLoaded', function() {
    // Add any initialization code here
    console.log('Portfolio website loaded successfully');
});