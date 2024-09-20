// js/script.js

// Dark Mode Toggle
const toggleSwitch = document.getElementById('dark-mode-toggle');
const toggleIcon = document.getElementById('dark-mode-icon');

// Function to switch themes
function switchTheme() {
    if (document.documentElement.classList.contains('dark-mode')) {
        document.documentElement.classList.remove('dark-mode');
        localStorage.setItem('theme', 'light');
        toggleIcon.src = 'images/moon-icon.png';
        toggleIcon.alt = 'Switch to Dark Mode';
    } else {
        document.documentElement.classList.add('dark-mode');
        localStorage.setItem('theme', 'dark');
        toggleIcon.src = 'images/sun-icon.png';
        toggleIcon.alt = 'Switch to Light Mode';
    }
}

// Event Listener
toggleSwitch.addEventListener('click', switchTheme);

// Theme Initialization
(function() {
    const currentTheme = localStorage.getItem('theme') || 'light';
    if (currentTheme === 'dark') {
        document.documentElement.classList.add('dark-mode');
        toggleIcon.src = 'images/sun-icon.png';
        toggleIcon.alt = 'Switch to Light Mode';
    } else {
        toggleIcon.src = 'images/moon-icon.png';
        toggleIcon.alt = 'Switch to Dark Mode';
    }
})();
